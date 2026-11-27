/* ---- MathJax helper ---- */
let mathQueue = Promise.resolve();
function queueMath(fn, attempts = 0) {
  if (window.MathJax?.startup?.promise) {
    mathQueue = mathQueue.catch(() => {}).then(() => MathJax.startup.promise).then(fn).catch(() => {});
    return mathQueue;
  }
  if (attempts < 200) setTimeout(() => queueMath(fn, attempts + 1), 50);
  return Promise.resolve();
}
function typeset(elements) {
  const els = Array.isArray(elements) ? elements : [elements];
  return queueMath(() => {
    const live = els.filter(el => el && el.isConnected && !el.closest('[hidden]'));
    if (live.length) return MathJax.typesetPromise(live);
  });
}
function clearMath(elements) {
  if (window.MathJax?.typesetClear) MathJax.typesetClear(elements);
}

/* ---- Utilities ---- */
function debounce(fn, wait) {
  let t;
  return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}
function formatDisplayDate(iso) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric", month: "short", year: "numeric",
    timeZone: "Asia/Kolkata"
  });
}
function talkYear(t) { return String(t.year || (t.start || "").slice(0, 4)); }
function talkDateLabel(t) { return t.start ? formatDisplayDate(t.start) : (talkYear(t) || "Date unknown"); }
function talkSortKey(t) { return t.start || talkYear(t); }
function hasTime(t) { return typeof t.start === "string" && t.start.includes("T"); }
function toICSUTC(d) {
  const pad = n => String(n).padStart(2, "0");
  return d.getUTCFullYear() + pad(d.getUTCMonth() + 1) + pad(d.getUTCDate())
       + "T" + pad(d.getUTCHours()) + pad(d.getUTCMinutes()) + pad(d.getUTCSeconds()) + "Z";
}
function escapeICS(s) {
  return String(s)
    .replace(/\\/g, "\\\\")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;")
    .replace(/\r\n|\r|\n/g, "\\n");
}
function foldICS(line) {
  const encoder = new TextEncoder();
  const out = [];
  let part = "", bytes = 0;
  for (const ch of line) {
    const size = encoder.encode(ch).length;
    if (bytes + size > 75) { out.push(part); part = " "; bytes = 1; }
    part += ch; bytes += size;
  }
  out.push(part);
  return out.join("\r\n");
}
/* Detect the meeting platform from a URL so we can label the link sensibly. */
function detectMeetingLabel(url) {
  if (!url) return "Join online";
  if (/meet\.google\.com/i.test(url)) return "Google Meet";
  if (/zoom\.us/i.test(url)) return "Zoom";
  if (/teams\.microsoft/i.test(url)) return "Microsoft Teams";
  if (/webex/i.test(url)) return "Webex";
  return "Join online";
}

/* ---- Tabs and hash routing ---- */
const NAV_LINKS = document.querySelectorAll(".nav-link");
const SECTIONS = document.querySelectorAll(".tab-section");
const VALID_TABS = ["home", "past-talks"];
let firstSwitch = true;

function switchTab(tabId, opts) {
  opts = opts || {};
  if (!VALID_TABS.includes(tabId)) tabId = "home";
  SECTIONS.forEach(sec => { sec.hidden = sec.id !== "view-" + tabId; });
  NAV_LINKS.forEach(btn => {
    const active = btn.dataset.tab === tabId;
    btn.classList.toggle("active", active);
    if (active) btn.setAttribute("aria-current", "page");
    else btn.removeAttribute("aria-current");
  });
  if (opts.updateHash !== false) {
    const target = "#" + tabId;
    if (window.location.hash !== target) {
      try { history.replaceState(null, "", target); } catch (e) {}
    }
  }
  if (opts.focus !== false && !firstSwitch) {
    const heading = document.querySelector("#view-" + tabId + " h1");
    if (heading) heading.focus({ preventScroll: true });
  }
  firstSwitch = false;
  const shown = document.getElementById("view-" + tabId);
  typeset(shown);
}
NAV_LINKS.forEach(btn => {
  btn.addEventListener("click", () => switchTab(btn.dataset.tab));
});
document.getElementById("brand-link").addEventListener("click", e => {
  e.preventDefault();
  switchTab("home");
});

/* ---- Upcoming talk ---- */
const TZ = "Asia/Kolkata";
function talkEnd(t) { return new Date(new Date(t.start).getTime() + (t.durationMins ?? 60) * 60000); }

function renderUpcoming() {
  const t = SEMINAR_DATA.upcomingTalk;
  const card = document.getElementById("upcoming-card");
  if (!t || !hasTime(t) || !Number.isFinite(Date.parse(t.start))) { card.hidden = true; document.getElementById("no-talk").hidden = false; return; }

  const start = new Date(t.start), end = talkEnd(t);
  card.dataset.start = start.toISOString();
  card.dataset.end = end.toISOString();
  card.dataset.uid = t.id;

  document.getElementById("up-title").textContent = t.title;
  document.getElementById("up-speaker").textContent = t.speaker.name + (t.speaker.affiliation ? " (" + t.speaker.affiliation + ")" : "");
  const abs = document.getElementById("up-abstract");
  abs.replaceChildren();
  t.abstract.forEach(txt => {
    const p = document.createElement("p");
    p.textContent = txt;
    abs.appendChild(p);
  });

  const dateEl = document.getElementById("up-date");
  dateEl.dateTime = t.start;
  dateEl.textContent = start.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: TZ });
  const tf = d => d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZone: TZ });
  document.getElementById("up-time").textContent = tf(start) + (t.durationMins == null ? " onwards" : " – " + tf(end)) + " IST";
  document.getElementById("up-venue").textContent = t.venue;

  // Online-meeting row + join button (only shown when a meetingLink exists)
  const onlineRow = document.getElementById("up-online-row");
  const onlineLink = document.getElementById("up-online");
  const joinBtn = document.getElementById("join-online");
  const meetLabel = detectMeetingLabel(t.meetingLink);

  if (t.meetingLink) {
    onlineLink.href = t.meetingLink;
    onlineLink.textContent = meetLabel + " →";
    onlineRow.hidden = false;

    joinBtn.href = t.meetingLink;
    joinBtn.textContent = "Join online (" + meetLabel + ")";
    joinBtn.hidden = false;
  } else {
    onlineRow.hidden = true;
    onlineLink.removeAttribute("href");
    onlineLink.textContent = "";
    joinBtn.hidden = true;
    joinBtn.removeAttribute("href");
    joinBtn.textContent = "";
  }

  // Page title, description and structured data follow the data
  const plainTitle = t.title.replace(/\$/g, "");
  document.title = "Mathematics Student Seminar, IIT Bombay | " + t.speaker.name + ", " + formatDisplayDate(t.start);
  const md = document.querySelector('meta[name="description"]');
  if (md) md.content = "Weekly student-run mathematics seminar at IIT Bombay. Next talk: " + t.speaker.name + ", " + plainTitle + ". " + dateEl.textContent + ", " + document.getElementById("up-time").textContent + ", " + t.venue + (t.meetingLink ? " (also online via " + meetLabel + ")." : ".");

  let ld = document.getElementById("ld-event");
  if (!ld) {
    ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = "ld-event";
    document.head.appendChild(ld);
  }

  const ldObj = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: plainTitle,
    startDate: t.start,
    ...(t.durationMins == null ? {} : {endDate: end.toISOString()}),
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: t.venue,
      address: { "@type": "PostalAddress", streetAddress: "Powai", addressLocality: "Mumbai", postalCode: "400076", addressRegion: "Maharashtra", addressCountry: "IN" }
    },
    organizer: { "@type": "Organization", name: "Mathematics Student Seminar, IIT Bombay" },
    performer: { "@type": "Person", name: t.speaker.name },
    isAccessibleForFree: true
  };

  if (t.meetingLink) {
    ldObj.eventAttendanceMode = "https://schema.org/MixedEventAttendanceMode";
    ldObj.virtualLocation = { "@type": "VirtualLocation", url: t.meetingLink };
  } else {
    ldObj.eventAttendanceMode = "https://schema.org/OfflineEventAttendanceMode";
  }

  ld.textContent = JSON.stringify(ldObj);
}

/* Past talks = archive + the upcoming talk once it has ended */
function getPastTalks() {
  const list = SEMINAR_DATA.pastTalks.slice();
  const t = SEMINAR_DATA.upcomingTalk;
  if (t && hasTime(t) && Date.now() >= talkEnd(t).getTime() && !list.some(x => x.id === t.id)) list.push(t);
  return list;
}

/* ---- No-talk state ---- */
function updateUpcomingState() {
  const card = document.getElementById("upcoming-card");
  const noTalk = document.getElementById("no-talk");
  if (!card || !card.dataset.start) return;
  const start = new Date(card.dataset.start).getTime();
  const end = new Date(card.dataset.end).getTime();
  const now = Date.now();
  if (now >= end) {
    card.hidden = true;
    noTalk.hidden = false;
    if (!card.dataset.archived) {
      card.dataset.archived = "true";
      document.getElementById("ld-event")?.remove();
      document.title = "Mathematics Student Seminar, IIT Bombay";
      document.querySelector('meta[name="description"]').content = "Student-run mathematics seminar at IIT Bombay. Explore the archive of past seminar announcements.";
      buildYearOptions(); renderPastTalks();
    }
  } else {
    card.hidden = false;
    noTalk.hidden = true;
    const label = card.querySelector(".board-label");
    if (now >= start && label) label.textContent = "Talk in progress";
  }
}

/* ---- ICS generation (now includes the meeting link) ---- */
function buildCalendarLink() {
  const t = SEMINAR_DATA.upcomingTalk;
  if (!t || !hasTime(t) || !Number.isFinite(Date.parse(t.start))) return;
  const card = document.getElementById("upcoming-card");
  const start = new Date(t.start);
  const end = talkEnd(t);
  const meetLabel = detectMeetingLabel(t.meetingLink);
  const plainTitle = t.title.replace(/\$/g, "");
  const speakerLine = t.speaker.name + (t.speaker.affiliation ? " (" + t.speaker.affiliation + ")" : "");
  const abstractText = t.abstract.join("\n\n");

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//IITB Mathematics Student Seminar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:" + t.id + "@iitb-math-seminar",
    "DTSTAMP:" + toICSUTC(new Date()),
    "DTSTART:" + toICSUTC(start),
    ...(t.durationMins == null ? [] : ["DTEND:" + toICSUTC(end)]),
    foldICS("SUMMARY:" + escapeICS(plainTitle))
  ];

  if (t.meetingLink) {
    // URL: standard RFC 5545 — most clients show this as a clickable link.
    lines.push("URL:" + t.meetingLink);
    // CONFERENCE (RFC 7986): modern, labelled video-conference reference.
    lines.push(foldICS("CONFERENCE;VALUE=URI;FEATURE=VIDEO;LABEL=" + meetLabel + ":" + t.meetingLink));
  }

  lines.push(foldICS("LOCATION:" + escapeICS(t.venue)));

  let descText = speakerLine + " — " + abstractText;
  if (t.meetingLink) {
    descText += "\n\nJoin online (" + meetLabel + "): " + t.meetingLink;
  }
  lines.push(foldICS("DESCRIPTION:" + escapeICS(descText)));

  lines.push("END:VEVENT");
  lines.push("END:VCALENDAR");

  const blob = new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  document.getElementById("add-to-calendar").href = url;
  window.addEventListener("pagehide", () => URL.revokeObjectURL(url), { once: true });
}

/* ---- Past talks ---- */
const filterInput = document.getElementById("talk-filter");
const pastContainer = document.getElementById("past-talks-container");
const yearFilter = document.getElementById("year-filter");
const openTalks = new Set();

function normalizeSearch(value) {
  return String(value ?? "").normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase();
}
function matchesQuery(talk, q) {
  const text = normalizeSearch([talk.speaker.name, talk.speaker.affiliation, talk.title,
    talk.topic, talk.venue, talk.start, talkYear(talk), talkDateLabel(talk),
    talk.seminarNumber, talk.note, ...(talk.abstract || [])].join(" "));
  return normalizeSearch(q).split(/\s+/).filter(Boolean).every(word => text.includes(word));
}

function buildTalkRow(talk, expanded) {
  const wrapper = document.createElement("div");
  wrapper.className = "talk";
  wrapper.id = "row-" + talk.id;

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "talk-btn";
  btn.dataset.talkId = talk.id;
  btn.setAttribute("aria-expanded", String(expanded));
  btn.setAttribute("aria-controls", "talk-abs-" + talk.id);

  const d = document.createElement("span");
  d.className = "d";
  const t = document.createElement("time");
  if (talk.start) t.dateTime = talk.start;
  else if (talkYear(talk)) t.dateTime = talkYear(talk);
  t.textContent = talkDateLabel(talk);
  d.appendChild(t);

  const s = document.createElement("span");
  s.className = "s";
  s.textContent = talk.speaker.name;

  const title = document.createElement("span");
  title.className = "t";
  title.textContent = talk.title;
  const small = document.createElement("small");
  small.textContent = [talk.seminarNumber ? "Seminar " + talk.seminarNumber : "", talk.topic, talk.venue].filter(Boolean).join(" · ");
  title.appendChild(small);

  const chev = document.createElement("span");
  chev.className = "chev";
  chev.setAttribute("aria-hidden", "true");

  btn.append(d, s, title, chev);

  const abs = document.createElement("div");
  abs.id = "talk-abs-" + talk.id;
  abs.className = "abs";
  abs.hidden = !expanded;
  const meta = document.createElement("p");
  meta.className = "archive-meta";
  const timeFmt = d => d.toLocaleTimeString("en-GB", {hour: "2-digit", minute: "2-digit", timeZone: TZ});
  const timeText = hasTime(talk) ? timeFmt(new Date(talk.start)) + (talk.durationMins == null ? " onwards" : "–" + timeFmt(talkEnd(talk))) + " IST" : (talk.start ? "Time not recorded" : "Exact date and time not recorded");
  meta.textContent = [timeText, talk.venue, talk.speaker.affiliation].filter(Boolean).join(" · ");
  abs.appendChild(meta);
  if (talk.note || !(talk.abstract || []).length) {
    const note = document.createElement("p");
    note.className = "archive-note";
    note.textContent = [talk.note, !(talk.abstract || []).length ? "Abstract not available." : ""].filter(Boolean).join(" ");
    abs.appendChild(note);
  }
  for (const para of (talk.abstract || [])) {
    const p = document.createElement("p");
    p.textContent = para;
    abs.appendChild(p);
  }

  const actions = document.createElement("div");
  actions.className = "talk-actions";
  if (talk.slides) {
    const a = document.createElement("a");
    a.href = talk.slides; a.textContent = "Slides"; a.rel = "noopener";
    actions.appendChild(a);
  }
  if (talk.recording) {
    const a = document.createElement("a");
    a.href = talk.recording; a.textContent = "Recording"; a.rel = "noopener";
    actions.appendChild(a);
  }
  if (talk.source && /^https?:\/\//i.test(talk.source)) {
    const a = document.createElement("a");
    a.href = talk.source; a.textContent = "Source"; a.rel = "noopener noreferrer"; a.target = "_blank";
    actions.appendChild(a);
  }
  const permalink = document.createElement("a");
  permalink.href = "#talk-" + talk.id;
  permalink.textContent = "Permalink";
  actions.appendChild(permalink);
  abs.appendChild(actions);

  btn.addEventListener("click", () => toggleTalk(talk.id));
  wrapper.append(btn, abs);
  return wrapper;
}

function toggleTalk(id) {
  const btn = document.getElementById("row-" + id)?.querySelector(".talk-btn");
  const abs = document.getElementById("talk-abs-" + id);
  if (!btn || !abs) return;
  const isOpen = btn.getAttribute("aria-expanded") === "true";
  const next = !isOpen;
  btn.setAttribute("aria-expanded", String(next));
  abs.hidden = !next;
  if (next) {
    openTalks.add(id);
    typeset(abs);
    try { history.replaceState(null, "", "#talk-" + id); } catch (e) {}
  } else {
    openTalks.delete(id);
    if (window.location.hash === "#talk-" + id) {
      try { history.replaceState(null, "", "#past-talks"); } catch (e) {}
    }
  }
}

const pageSizeSel = document.getElementById("page-size");
const pager = document.getElementById("pager");
const pgPrev = document.getElementById("pg-prev");
const pgNext = document.getElementById("pg-next");
const pgStatus = document.getElementById("pg-status");
const slider = document.getElementById("pg-slider");
const pagerTop = document.getElementById("pager-top");
const pgPrevTop = document.getElementById("pg-prev-top");
const pgNextTop = document.getElementById("pg-next-top");
const pgStatusTop = document.getElementById("pg-status-top");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let page = 0;

function getFiltered() {
  const q = (filterInput.value || "").trim().toLowerCase();
  return getPastTalks()
    .sort((a, b) => talkSortKey(b).localeCompare(talkSortKey(a)))
    .filter(t => (!yearFilter.value || talkYear(t) === yearFilter.value) && matchesQuery(t, q));
}
const pageSize = () => +pageSizeSel.value || 10;
function pageOfTalk(id) {
  const i = getFiltered().findIndex(t => t.id === id);
  return i < 0 ? 0 : Math.floor(i / pageSize());
}

function buildPanel(items) {
  const panel = document.createElement("div");
  panel.className = "sb-panel";
  if (items.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.setAttribute("role", "status");
    empty.textContent = 'No talks match your filter. Try a speaker name or a topic like "algebra".';
    panel.appendChild(empty);
    return panel;
  }
  const head = document.createElement("div");
  head.className = "talks-head";
  head.setAttribute("aria-hidden", "true");
  for (const label of ["Date", "Speaker", "Title", ""]) {
    const span = document.createElement("span");
    span.textContent = label;
    head.appendChild(span);
  }
  panel.appendChild(head);
  for (const talk of items) panel.appendChild(buildTalkRow(talk, openTalks.has(talk.id)));
  return panel;
}

/* Slide the next board in along the rail; the old one slides out. dir: 1 = forward, -1 = back, 0 = no animation. */
function renderPastTalks() {
  const list = getFiltered();
  const size = pageSize();
  const pages = Math.max(1, Math.ceil(list.length / size));
  page = Math.min(Math.max(page, 0), pages - 1);

  document.getElementById("archive-count").textContent = list.length + " of " + getPastTalks().length + " talks";
  pager.hidden = pages < 2;
  pgPrev.disabled = page === 0;
  pgNext.disabled = page >= pages - 1;
  pgStatus.textContent = "Page " + (page + 1) + " of " + pages;
  pagerTop.hidden = pages < 2;
  pgPrevTop.disabled = page === 0;
  pgNextTop.disabled = page >= pages - 1;
  pgStatusTop.textContent = pgStatus.textContent;
  slider.min = 1;
  slider.max = pages;
  slider.value = page + 1;
  slider.setAttribute("aria-valuetext", pgStatus.textContent);

  const panel = buildPanel(list.slice(page * size, page * size + size));
  clearMath([pastContainer]);
  pastContainer.replaceChildren(panel);
  typeset(panel);
}

function clearTalkHash() {
  if (window.location.hash.startsWith("#talk-")) history.replaceState(null, "", "#past-talks");
}
function resetAndRender() { clearTalkHash(); page = 0; renderPastTalks(); }
/* change page without moving the scroll position */
function keepScroll(fn) {
  const y = window.scrollY;
  fn();
  window.scrollTo({ top: y, behavior: "instant" });
}
function turnPage(dir) { clearTalkHash(); keepScroll(() => { page += dir; renderPastTalks(); }); }
pgPrev.addEventListener("click", () => turnPage(-1));
pgNext.addEventListener("click", () => turnPage(1));
pgPrevTop.addEventListener("click", () => turnPage(-1));
pgNextTop.addEventListener("click", () => turnPage(1));
slider.addEventListener("input", () => { clearTalkHash(); keepScroll(() => { page = +slider.value - 1; renderPastTalks(); }); });
pastContainer.addEventListener("keydown", e => {
  if (e.target !== pastContainer) return;
  if (e.key === "ArrowRight") { e.preventDefault(); turnPage(1); }
  if (e.key === "ArrowLeft") { e.preventDefault(); turnPage(-1); }
});
pageSizeSel.addEventListener("change", resetAndRender);

filterInput.addEventListener("input", debounce(resetAndRender, 150));
yearFilter.addEventListener("change", resetAndRender);

/* ---- Hash handling ---- */
function applyHash() {
  const raw = window.location.hash.replace(/^#/, "");
  if (raw === "main") return; // allow the accessibility skip link to work on either tab
  if (raw.indexOf("talk-") === 0) {
    const id = raw.slice(5);
    if (!getPastTalks().some(t => t.id === id)) { switchTab("past-talks"); return; }
    switchTab("past-talks", { updateHash: false });
    if (!document.getElementById("talk-abs-" + id)) {
      filterInput.value = "";
      yearFilter.value = "";
      page = pageOfTalk(id);
      renderPastTalks();
    }
    openTalks.add(id);
    const btn = document.getElementById("row-" + id)?.querySelector(".talk-btn");
    const abs = document.getElementById("talk-abs-" + id);
    if (btn && abs) {
      btn.setAttribute("aria-expanded", "true");
      abs.hidden = false;
      typeset(abs);
      if (!firstSwitch) btn.focus({ preventScroll: false });
    }
  } else if (VALID_TABS.includes(raw)) {
    switchTab(raw, { updateHash: false });
  } else {
    switchTab("home", { updateHash: false });
  }
}
window.addEventListener("hashchange", applyHash);

/* ---- Proposal form ---- */
const toggleBtn = document.getElementById("toggle-proposal-btn");
const proposalBox = document.getElementById("inline-proposal-box");
const form = document.getElementById("speaker-form");
const statusBox = document.getElementById("proposal-status");
const statusText = document.getElementById("proposal-status-text");
const mailtoLink = document.getElementById("proposal-mailto");
const dateInput = document.getElementById("sp-date");
let lastFormattedProposal = "";

(function renderOrganizers() {
  const grid = document.getElementById("organizers-grid");
  for (const o of SEMINAR_DATA.organizers || []) {
    const box = document.createElement("div"); box.className = "org";
    const n = document.createElement("div"); n.className = "n"; n.textContent = o.name;
    const r = document.createElement("div"); r.className = "r"; r.textContent = o.role;
    const a = document.createElement("a"); a.href = "mailto:" + o.email; a.textContent = o.email;
    box.append(n, r, a); grid.appendChild(box);
  }
})();

function getOrganizerEmails() {
  return Array.from(document.querySelectorAll('#organizers-grid a[href^="mailto:"]'))
    .map(a => a.getAttribute("href").replace(/^mailto:/, ""))
    .filter(Boolean);
}

// Keep the group email link in sync with the individual organizer contacts.
const groupEmailLink = document.getElementById("email-organizers");
const organizerEmails = getOrganizerEmails();
if (organizerEmails.length) {
  groupEmailLink.href = "mailto:" + organizerEmails.join(",") + "?subject=" + encodeURIComponent("IITB Mathematics Student Seminar");
} else {
  groupEmailLink.hidden = true;
}

function openProposalBox() {
  proposalBox.hidden = false;
  toggleBtn.setAttribute("aria-expanded", "true");
  const firstInput = document.getElementById("sp-name");
  if (firstInput) firstInput.focus({ preventScroll: true });
  proposalBox.scrollIntoView({ block: "nearest", behavior: "smooth" });
}

function closeProposalBox(opts) {
  opts = opts || { reset: true };
  proposalBox.hidden = true;
  toggleBtn.setAttribute("aria-expanded", "false");
  statusBox.hidden = true;
  if (opts.reset) {
    form.reset();
    for (const el of form.elements) el.setCustomValidity?.("");
    lastFormattedProposal = "";
    const ta = document.getElementById("proposal-fallback");
    if (ta) ta.hidden = true;
    dateInput.setCustomValidity("");
  }
  toggleBtn.focus({ preventScroll: true });
}

toggleBtn.addEventListener("click", () => {
  if (proposalBox.hidden) openProposalBox();
  else closeProposalBox();
});
document.getElementById("cancel-proposal-btn").addEventListener("click", () => {
  closeProposalBox({ reset: true });
});

function refreshDateMin() {
  const parts = new Intl.DateTimeFormat("en-GB", {timeZone: TZ, year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date());
  const val = k => parts.find(p => p.type === k).value;
  dateInput.min = val("year") + "-" + val("month") + "-" + val("day");
}
refreshDateMin();
dateInput.addEventListener("input", () => dateInput.setCustomValidity(""));

form.addEventListener("input", event => {
  if (event.target.setCustomValidity) event.target.setCustomValidity("");
  if (statusBox && !statusBox.hidden) {
    lastFormattedProposal = "";
    statusBox.hidden = true;
    const ta = document.getElementById("proposal-fallback");
    if (ta) ta.hidden = true;
  }
});

form.addEventListener("submit", event => {
  event.preventDefault();
  refreshDateMin();
  for (const id of ["sp-name", "sp-title", "sp-abstract"]) {
    const el = document.getElementById(id);
    el.setCustomValidity(el.value.trim() ? "" : "Please enter a value.");
  }
  if (!form.reportValidity()) return;

  const name = document.getElementById("sp-name").value.trim();
  const email = document.getElementById("sp-email").value.trim();
  const program = document.getElementById("sp-program").value.trim() || "Student";
  const date = document.getElementById("sp-date").value || "Flexible";
  const title = document.getElementById("sp-title").value.trim();
  const abstract = document.getElementById("sp-abstract").value.trim();

  lastFormattedProposal = [
    "Speaker: " + name + " (" + program + ")",
    "Email: " + email,
    "Preferred date: " + date,
    "Title: " + title,
    "",
    "Abstract:",
    abstract
  ].join("\n");

  const emails = getOrganizerEmails();
  if (emails.length === 0) {
    statusText.textContent = "Your proposal is ready. Copy the formatted text and send it to the seminar team using a confirmed contact address.";
    mailtoLink.hidden = true;
    statusBox.hidden = false;
    return;
  }
  const subject = encodeURIComponent("[Math Student Seminar] Talk proposal: " + title);
  const body = encodeURIComponent(lastFormattedProposal);
  mailtoLink.hidden = false;
  mailtoLink.href = "mailto:" + emails.join(",") + "?subject=" + subject + "&body=" + body;
  statusText.textContent = "Your proposal is ready. Choose “Open in Email Client” to send it, or copy the formatted text.";
  statusBox.hidden = false;
  mailtoLink.focus({ preventScroll: true });
});

document.getElementById("copy-proposal-btn").addEventListener("click", async () => {
  if (!lastFormattedProposal) return;
  try {
    await navigator.clipboard.writeText(lastFormattedProposal);
    statusText.textContent = "Formatted proposal copied to clipboard.";
    const existing = document.getElementById("proposal-fallback");
    if (existing) existing.hidden = true;
  } catch (err) {
    let ta = document.getElementById("proposal-fallback");
    if (!ta) {
      ta = document.createElement("textarea");
      ta.id = "proposal-fallback";
      ta.className = "proposal-fallback";
      ta.readOnly = true;
      ta.rows = 8;
      statusBox.appendChild(ta);
    }
    ta.value = lastFormattedProposal;
    ta.hidden = false;
    ta.focus();
    ta.select();
    statusText.textContent = "Copy blocked by the browser. The text below is selected — copy it manually.";
  }
});

document.getElementById("reset-proposal-btn").addEventListener("click", () => {
  form.reset();
  for (const el of form.elements) el.setCustomValidity?.("");
  lastFormattedProposal = "";
  statusBox.hidden = true;
  dateInput.setCustomValidity("");
  refreshDateMin();
  document.getElementById("sp-name").focus();
});

function buildYearOptions() {
  const previous = yearFilter.value;
  const years = [...new Set(getPastTalks().map(talkYear).filter(Boolean))].sort().reverse();
  yearFilter.replaceChildren(new Option("All years", ""), ...years.map(y => new Option(y, y)));
  if (years.includes(previous)) yearFilter.value = previous;
}


/* ---- Equations written on the wall: a fresh random selection on every page load ---- */
const WALL_COUNT = 20;                    // equations on the wall (10 per side)
const WALL_MIN_WIDTH = 1240;              // the CSS hides the wall below this width
const WALL_MAX_LEN = [34, 26, 20, 14];    // progressively shorter replacements for ones that do not fit
const wallState = { started: false, wall: null, bag: [], used: new Set() };

function wallRandom(a, b) { return a + Math.random() * (b - a); }

function wallTake(maxLen = Infinity) {
  const { bag, used } = wallState;
  const fits = bag.filter(e => e.length <= maxLen);
  const fresh = fits.filter(e => !used.has(e));
  const src = fresh.length ? fresh : (fits.length ? fits : bag);
  const tex = src[Math.floor(Math.random() * src.length)];
  used.add(tex);
  return tex;
}

function buildWallEquations() {
  const wall = wallState.wall;
  const pool = (window.WALL_EQUATIONS || []).filter(Boolean);
  if (!wall || !pool.length) return false;
  wallState.bag = pool;
  wall.replaceChildren();

  const scales = [0.95, 1.1, 1.2, 1.25, 1.4, 1.6];
  const firstSide = Math.random() < 0.5 ? 0 : 1;
  for (let i = 0; i < WALL_COUNT; i++) {
    const el = document.createElement("span");
    const y = 4.5 + i * (91 / (WALL_COUNT - 1)) + wallRandom(-1.1, 1.1);   // evenly spread, slightly jittered
    const s = scales[Math.floor(Math.random() * scales.length)];
    const f = (v, n = 1) => v.toFixed(n);
    el.className = "eq " + ((i + firstSide) % 2 ? "r" : "l");
    const roll = Math.random();
    if (roll < 0.08) el.classList.add("cut");
    else if (roll < 0.16) el.classList.add("und");
    el.style.cssText =
      "--y:" + f(y) + "%;--r:" + f(wallRandom(-7, 7)) + "deg;--s:" + s +
      ";--d:" + Math.round(wallRandom(485, 555)) + "px;--o:" + f(wallRandom(0.8, 1.15), 2) +
      ";--b:" + f(wallRandom(0.4, 0.6)) + "px;--k:" + f(wallRandom(-5, 5)) + "deg;--m:" + Math.round(wallRandom(80, 140)) +
      "deg;--k1:" + Math.round(wallRandom(25, 45)) + "%;--t:" + f(wallRandom(0, 1), 2) + "s";
    const tex = wallTake();
    el.dataset.tex = tex;
    el.textContent = "$" + tex + "$";
    wall.append(el);
  }
  return true;
}

/* Swap any equation that is too wide for the margin for a shorter one (before it is revealed). */
async function fitWallEquations(round = 0) {
  const wall = wallState.wall;
  if (!wall || round >= WALL_MAX_LEN.length || !window.MathJax || !MathJax.typesetPromise) return;
  const half = window.innerWidth / 2;
  const tooWide = el => el.getBoundingClientRect().width > Math.max(0, half - parseFloat(el.style.getPropertyValue("--d")) - 8);
  const bad = [...wall.children].filter(tooWide);
  if (!bad.length) return;
  MathJax.typesetClear(bad);
  for (const el of bad) {
    const tex = wallTake(WALL_MAX_LEN[round]);
    el.dataset.tex = tex;
    el.textContent = "$" + tex + "$";
  }
  await MathJax.typesetPromise(bad);
  return fitWallEquations(round + 1);
}

function startWallEquations() {
  if (wallState.started) return;
  wallState.wall = document.querySelector(".wall-eqs");
  if (!buildWallEquations()) return;
  wallState.started = true;
  (function reveal(n) {
    if (window.MathJax && MathJax.startup && MathJax.startup.promise) {
      MathJax.startup.promise
        .then(() => queueMath(async () => { await MathJax.typesetPromise([wallState.wall]); await fitWallEquations(); }))
        .then(() => wallState.wall.classList.add("on"))
        .catch(() => {});
    } else if (n < 200) setTimeout(() => reveal(n + 1), 50);
  })(0);
}

function initWallEquations() {
  const mq = window.matchMedia("(min-width: " + WALL_MIN_WIDTH + "px)");
  if (mq.matches) startWallEquations();
  else mq.addEventListener("change", e => { if (e.matches) startWallEquations(); });

  // If the window is resized, re-check that nothing is now too wide.
  let timer;
  window.addEventListener("resize", () => {
    clearTimeout(timer);
    timer = setTimeout(() => { if (wallState.started && mq.matches) queueMath(() => fitWallEquations()); }, 300);
  });
}

/* ---- Init ---- */
document.addEventListener("DOMContentLoaded", () => {
  const lu = document.getElementById("last-updated");
  if (lu && SEMINAR_DATA.lastUpdated) {
    lu.textContent = new Date(SEMINAR_DATA.lastUpdated + "T12:00:00").toLocaleDateString("en-GB", {
      day: "numeric", month: "long", year: "numeric"
    });
  }
  renderUpcoming();
  updateUpcomingState();
  buildCalendarLink();
  buildYearOptions();
  renderPastTalks();
  applyHash();
  initWallEquations();
  setInterval(updateUpcomingState, 30000);
});

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) updateUpcomingState();
});
