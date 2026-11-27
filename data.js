/* Seminar content. Edit this file to update the archive.
   start: ISO date/time with IST offset, date-only YYYY-MM-DD, or null when only year is known.
   For year-only records, supply year. durationMins: null when end time is unknown.
   Abstracts are arrays of paragraphs; LaTeX goes between $...$. */
window.SEMINAR_DATA = {
  "lastUpdated": "2026-11-27",
  "upcomingTalk": null,
  "pastTalks": [
    {
      "id": "2026-11-06-rishi-das",
      "start": "2026-11-06T15:30:00+05:30",
      "durationMins": 60,
      "venue": "Room 114",
      "speaker": {
        "name": "Rishi Das",
        "affiliation": ""
      },
      "topic": "Applied Mathematics",
      "title": "Towards a Clear Brain - Flow and Transport in Brain",
      "abstract": [
        "The clearance of protein aggregates from the brain is essential for preventing neurodegenerative diseases such as Alzheimer’s and Parkinson’s. Recent research suggests that the glymphatic system facilitates this clearance by circulating cerebrospinal fluid through perivascular spaces and into the interstitium, flushing out neurotoxic waste primarily during sleep. In this talk, I will present the mathematical framework underlying this mechanism, discuss the associated modelling challenges, and outline the challenges in the numerical analysis of glymphatic flow."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2026-10-30-vinay-kumar-sharma",
      "start": "2026-10-30T17:00:00+05:30",
      "durationMins": 60,
      "venue": "Room 113",
      "speaker": {
        "name": "Vinay Kumar Sharma",
        "affiliation": ""
      },
      "topic": "Statistics",
      "title": "Beyond Dimensions -- Understanding Principal Component Analysis (PCA)",
      "abstract": [
        "Principal Component Analysis (PCA) is a statistical technique used to reduce the dimensionality of complex datasets while preserving as much variation as possible. This talk explores the motivation, fundamental concepts, and mathematical derivation of PCA, including covariance matrices, eigenvalues, and eigenvectors. Through interactive activities, numerical examples, and real-world applications, participants will understand how PCA simplifies data analysis and its advantages and limitations in machine learning and data visualization."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2026-10-23-surjeet-singh",
      "start": "2026-10-23T15:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Surjeet Singh",
        "affiliation": ""
      },
      "topic": "Differential Geometry",
      "title": "Curvature of Curves and Surfaces",
      "abstract": [
        "Curvature is a fundamental concept in differential geometry that describes how a curve bends and how a surface behaves locally. The aim of this seminar is to introduce the notion of curvature, beginning with curves and then extending the discussion to surfaces in Euclidean space.",
        "We first discuss the curvature of a regular plane curve and interpret it geometrically as a measure of its bending. Using this notion as a starting point, we introduce parametrized surfaces and discuss their tangent spaces and unit normal fields. We then define the normal curvature of a surface in a given tangent direction and introduce Gaussian curvature as an intrinsic measure of the surface's local geometry. Through suitable examples, we illustrate these concepts and examine how curvature distinguishes different types of surfaces.",
        "The seminar aims to develop an intuitive and mathematical understanding of curvature through definitions, geometric interpretations, and examples, highlighting the transition from the curvature of curves to the curvature of surfaces."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2026-10-16-harshita-agarwal",
      "start": "2026-10-16T16:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Harshita Agarwal",
        "affiliation": ""
      },
      "topic": "Numerical Analysis",
      "title": "Physics-Informed Neural Networks: A mathematical Introduction",
      "abstract": [
        "Neural networks are usually trained using only examples. But often we also know a simple mathematical rule the answer should follow -- even when we don't have much data to work with. This talk introduces Physics-Informed Neural Networks (PINNs): a simple way to teach a network to respect such a rule, using nothing more than ideas we already know -- the chain rule and gradient descent. We'll build the idea step by step, from how a basic network learns, to how it can check a rule exactly, and finally see it all come together on one simple example. No physics or PDE background is needed; the talk stays friendly and non-technical throughout, explained through pictures and one running example rather than long derivations."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2026-10-09-ankita-dargad",
      "start": "2026-10-09T16:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Ankita Dargad",
        "affiliation": ""
      },
      "topic": "Graph Theory",
      "title": "Ferry Cover with Connectivity Constraints",
      "abstract": [
        "The classical Ferry Cover problem asks for the minimum boat capacity needed to transport all vertices of a graph across a river such that no edge remains on either bank at any time - a requirement that the banks induce stable (independent) sets. We study a natural generalization in which the banks must satisfy an arbitrary graph property. For hereditary properties such as acyclicity or planarity, we show that the structural characterization of small-boat and large-boat graphs established by Csorba, Hurkens, and Woeginger extends directly.",
        "We then turn to the connected-bank variant, where the property of interest - connectedness - is not hereditary: both banks must induce connected subgraphs throughout the transfer. We provide a complete characterization of graphs that can be transferred with a boat of size one (boat-1 graphs): a connected graph is boat-1 if and only if its block-cut tree is a path. This characterization yields a linear-time recognition algorithm. As a consequence, we show that every biconnected graph is boat-1, since such graphs admit an st-numbering. We also develop an efficient algorithm for determining the boat number of trees. Our work opens new directions for river-crossing problems under non-hereditary bank constraints."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2026-09-24-samit-pandit",
      "start": "2026-09-24T17:15:00+05:30",
      "durationMins": 45,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Samit Pandit",
        "affiliation": ""
      },
      "topic": "Commutative Algebra",
      "title": "An elementary proof of Grothendieck's Non-Vanishing Theorem and its geometric consequences",
      "abstract": [
        "Local cohomology serves as a fundamental bridge connecting commutative algebra, algebraic geometry, and homological methods. This presentation explores the structural and geometric foundations of local cohomology through the lens of Grothendieck's Vanishing and Non-Vanishing Theorems. For a finitely generated non-zero module M of Krull dimension d = dim(M) over a Noetherian local ring (R, m, k), local cohomology supported at the maximal ideal satisfies $H^i_{\\mathfrak m}(M)$ = 0 for all i > d, while the top-dimensional module non-vanishes, $H^d_{\\mathfrak m}(M)$ ≠ 0. This result establishes the exact homological characterization of dimension as dim(M) = max{i ≥ 0 ∣ $H^i_{\\mathfrak m}(M)$ ≠ 0}, forming a dual boundary with depth(M) = inf{i ≥ 0 ∣ $H^i_{\\mathfrak m}(M)$ ≠ 0}. We examine the algorithmic computation of these modules via the generalized Čech complex and present an elementary proof of Grothendieck's Non-Vanishing Theorem using prime avoidance and long exact sequence techniques. Furthermore, we discuss the generalization to arbitrary supporting ideals I ⊂ R, explicit monomial basis computations in polynomial rings, and applications to graded k-algebras. Specifically, we highlight how top-dimensional local cohomology governs key invariants in projective geometry, including Serre's sheaf cohomology, the a-invariant, Castelnuovo–Mumford regularity, Cohen–Macaulay conditions, and Matlis duality leading to the canonical module $\\omega_R$ and Grothendieck Local Duality."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2026-09-11-omkar-ramdas",
      "start": "2026-09-11T15:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Omkar Ramdas",
        "affiliation": ""
      },
      "topic": "Combinatorics & Probability",
      "title": "Putting on Your Thinking Cap: How to Get A Head in a Guessing Game",
      "abstract": [
        "You might have heard about the /Colored hats guessing game/ where 'n' players, each wearing a randomly assigned black or white hat, must attempt to guess their own hat color without communicating. A simple strategy easily yields a 50% success rate, so the real question is \"Can we improve this success rate significantly?\". We will demonstrate how to improve these odds for a large, fixed 'n' by translating the game into a structural problem on the Boolean hypercube $\\{0,1\\}^n$. We will then use some basic probabilistic methods to get better strategy which will \"almost\" surely make you win.If time permits, we will see its connections with Hamming codes."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2026-09-04-madhav-varshney",
      "start": "2026-09-04T17:15:00+05:30",
      "durationMins": 60,
      "venue": "Room 215",
      "speaker": {
        "name": "Madhav Varshney",
        "affiliation": ""
      },
      "topic": "Graph Theory",
      "title": "Games in Graph Theory: Ramsey Numbers, Strategy Stealing and Potential Function Arguments",
      "abstract": [
        "We analyze two-player competitive edge-coloring games played on a complete graph, examining the core theoretical principles governing these graph games. We frame bounds using diagonal Ramsey numbers and apply the Erdős-Selfridge potential argument directly to the edge set of the graph to derive the asymptotic winning thresholds."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2026-08-21-aditya-dwivedi",
      "start": "2026-08-21T15:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Aditya Dwivedi",
        "affiliation": ""
      },
      "topic": "Combinatorics & Algebra",
      "title": "The Algebra of Magic Squares",
      "abstract": [
        "Magic squares have been studied by thinkers for centuries, often appearing in classical texts across cultures, such as the Lo Shu square, Buduh square, or the bhadra chaturashra. The problem of counting magic squares was also pursued by many thinkers over centuries, often leading to calculations in specific cases (see Al-Ashabb et al., Mandadi et al., Mattingly et al., Dvivedi et al.).",
        "But what happens when we move beyond these specific historical constructions and ask a generalised question: exactly how many n x n magic squares exist for a given line sum r?",
        "This talk explores the surprising bridge between this ancient combinatorial problem and modern commutative algebra. After reviewing the elementary 1 x 1 and 2 x 2 matrices, we will introduce the celebrated Anand-Dumir-Gupta conjectures. Using the Birkhoff-von Neumann theorem, we will construct a specific subring generated by permutation matrices. By analysing the Hilbert series of this ring, we arrive at the elegant final result: the number of n x n magic squares is simply a polynomial in the line sum r."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2026-08-14-aditya-khambete",
      "start": "2026-08-14T17:15:00+05:30",
      "durationMins": 45,
      "venue": "Room 114",
      "speaker": {
        "name": "Aditya Khambete",
        "affiliation": ""
      },
      "topic": "Probability",
      "title": "An elementary proof of the Strong Law of Large Numbers",
      "abstract": [
        "Most of you are already familiar with the Strong Law of Large Numbers. But have you ever wondered about how to prove it? The Strong Law of Large Numbers is a fundamental result in probability theory, asserting that normalized partial sums converge almost surely to the expected value. In this talk, I present Etemadi's elementary proof for identically distributed, pairwise independent random variables with finite first moment. The talk would be accessible to anyone who has completed a probability course."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2026-08-05-ankita-parashar",
      "start": "2026-08-05T17:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Ankita Parashar",
        "affiliation": "IPDF"
      },
      "topic": "Representation Theory",
      "title": "From Symmetry to Representation theory",
      "abstract": [
        "Symmetry appears everywhere in mathematics, from the rotations of a square and a sphere to the hidden structures behind Fourier analysis and number theory. Representation theory provides a powerful language to study these symmetries by translating groups into matrices and linear transformations. In this talk, we will explore how simple geometric symmetries lead to the idea of representations, and their surprising connections to Fourier series and modular forms, which are key objects in the two subjects : Fourier Analysis and Number theory."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2026-04-15-samiun-ali-molla",
      "start": "2026-04-15T14:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Samiun Ali Molla",
        "affiliation": "IIT Bombay"
      },
      "topic": "Analysis & PDEs",
      "title": "Free Boundary methods and scattering phenomena",
      "abstract": [
        "The seminar examines Schrödinger-type equations with localized potentials through a free-boundary formulation, using unique continuation and approximation to discuss existence of nontrivial solutions and connections with the work of Mikko Salo and Henrik Shahgholian."
      ],
      "note": "Abstract summary based on the departmental calendar. Host: Suman Kumar Sahoo.",
      "slides": null,
      "recording": null,
      "source": "https://www.math.iitb.ac.in/webcal/view_entry.php?date=20260415&id=1989"
    },
    {
      "id": "2026-04-02-rajendra-meena",
      "start": "2026-04-02T17:35:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Rajendra Meena",
        "affiliation": ""
      },
      "topic": "Number Theory",
      "title": "The Brahmagupta-Pell Equation: Solutions and Structure",
      "abstract": [
        "The Brahmagupta–Pell equation $x^2-dy^2$ = 1, where d is a non-square integer, is a classical Diophantine equation that has fascinated mathematicians for centuries due to its simple form yet surprisingly rich structure. A natural question is whether such an equation admits non-trivial integer solutions, and if so, how one can describe all of them. In this talk, we address these questions by proving the existence of non-trivial solutions and introducing the notion of a fundamental solution, from which all other solutions can be generated. We also describe all solutions explicitly and briefly discuss method for solving the generalized equation $x^2-dy^2$ = n, where n ∈ Z. The ideas will be illustrated with examples. If time permits, we will also mention the classical Indian ”Chakravala method” for computing the fundamental solution."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2026-03-26-om-milind-joglekar",
      "start": "2026-03-26T16:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Om Milind Joglekar",
        "affiliation": ""
      },
      "topic": "Combinatorics",
      "title": "Two Guesses Too Few: The Combinatorics of the NYT Connections Endgame",
      "abstract": [
        "You've played the New York Times staples like Wordle and the Crossword, but Connections introduces a unique mathematical hurdle. We've all been there - staring at the final eight tiles, knowing purple is the most annoying category ever created. In this talk we will demonstrate a few algorithms and strategies which help you solve the puzzle with optimal probability. We will also show that the given number of lives is just 2 shy of the number of lives you need to brute force the solution."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2026-03-19-sooraj-ap",
      "start": "2026-03-19T16:00:00+05:30",
      "durationMins": 75,
      "venue": "Room 113",
      "speaker": {
        "name": "Sooraj AP",
        "affiliation": ""
      },
      "topic": "Fourier Analysis",
      "title": "On Hardy's uncertainty principle",
      "abstract": [
        "We shall see a Fourier uncertainty principle for Gaussian-type functions due to Hardy and a complex analytic proof of the same."
      ],
      "note": "100th Students’ Seminar post-COVID, according to the announcement.",
      "slides": null,
      "recording": null
    },
    {
      "id": "2026-02-18-om-milind-joglekar",
      "start": "2026-02-18T17:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Om Milind Joglekar",
        "affiliation": ""
      },
      "topic": "Linear Algebra & Graph Theory",
      "title": "Perron-Frobenius Theory: Matrices & Graphs",
      "abstract": [
        "This talk examines the Perron-Frobenius theorem, focusing on the existence of a strictly positive eigenvector and the spectral consequences of irreducibility. We will specifically connect these analytic properties to graph-theoretic concepts like connectivity and cycle periodicity."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2026-02-11-aditya-khambete",
      "start": "2026-02-11T14:00:00+05:30",
      "durationMins": null,
      "venue": "Room 215",
      "speaker": {
        "name": "Aditya Khambete",
        "affiliation": ""
      },
      "topic": "Probability",
      "title": "Dependence modelling using copulas, and the extension to discrete random vectors",
      "abstract": [
        "In this talk we will introduce the notion of copulas to model the dependence in multivariate distributions, discuss how the classical notion fails for discrete multivariate distributions, and then use ideas from Geenens (2020) to extend the idea to multivariate discrete distributions."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2026-02-05-satya-sai-aditya-duggaraju",
      "start": "2026-02-05T14:00:00+05:30",
      "durationMins": 60,
      "venue": "Room 215",
      "speaker": {
        "name": "Satya Sai Aditya Duggaraju",
        "affiliation": ""
      },
      "topic": "Probability",
      "title": "A proof of the Kolmogorov Extension theorem",
      "abstract": [
        "We give a proof of the Kolmogorov's extension theorem and, as an application, derive the Ionescu-Tuleca theorem. The talk only assumes familiarity with basic measure and probability theory."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2026-01-28-poduri-pradyumna-datta",
      "start": "2026-01-28T14:00:00+05:30",
      "durationMins": 60,
      "venue": "Room 215",
      "speaker": {
        "name": "Poduri Pradyumna Datta",
        "affiliation": ""
      },
      "topic": "Graph Theory",
      "title": "The Matrix-Tree Theorem: Counting Spanning Trees via Determinants",
      "abstract": [
        "The Matrix-Tree Theorem states that the number of spanning trees of a connected graph G equals any cofactor of its Laplacian matrix L. In this talk a proof using the Cauchy-Binet formula will be presented and some applications explored."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2025-11-07-om-milind-joglekar",
      "start": "2025-11-07T17:30:00+05:30",
      "durationMins": 60,
      "venue": "Room 215",
      "speaker": {
        "name": "Om Milind Joglekar",
        "affiliation": ""
      },
      "topic": "Graph Theory",
      "title": "Classification of Moore graphs",
      "abstract": [
        "Moore graphs are the \"perfect\" examples in the degree-diameter problem -- regular graphs that exactly meet the Moore bound for given degree k and diameter d. They're extremely rare, and understanding when they can exist turns out to be a surprisingly rigid question. In this talk I'll look at Moore graphs in general diameter and show how strong algebraic constraints narrow down the possibilities. Specializing to diameter 2, this leads to the famous condition that k can only be 3, 5, 7 or 57. *The asterisk in the title is because the k=57 case is still an unsolved problem. All in all, we know every Moore graph that exists except possibly the one corresponding to k=57."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2025-11-06-suraj-mishra",
      "start": "2025-11-06T17:30:00+05:30",
      "durationMins": 60,
      "venue": "Room 215",
      "speaker": {
        "name": "Suraj Mishra",
        "affiliation": ""
      },
      "topic": "Representation Theory",
      "title": "Rooted Tree Modules",
      "abstract": [
        "In this talk we will discuss a particular type of module over path algebra of a locally bound Quiver, called a rooted tree module and a combinatorial criterion for checking the indecomposability of the rooted tree module. If time permits we can also talk about the direct sum decomposition of a decomposable rooted tree module into indecomposable summands."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2025-10-15-nirav-bhattad",
      "start": "2025-10-15T17:00:00+05:30",
      "durationMins": null,
      "venue": "Room 114",
      "speaker": {
        "name": "Nirav Bhattad",
        "affiliation": ""
      },
      "topic": "Complex Analysis",
      "title": "Rado's Theorem",
      "abstract": [
        "In this talk, I will present Rado's Theorem, a fundamental result in complex analysis concerning the extension of holomorphic functions. The proof, which will be discussed in detail, relies on the maximum modulus principle. This talk will be accessible to anyone who has taken MA412 (Complex Analysis)."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2025-10-10-aditya-dwivedi",
      "start": "2025-10-10T18:00:00+05:30",
      "durationMins": 60,
      "venue": "Room 215",
      "speaker": {
        "name": "Aditya Dwivedi",
        "affiliation": ""
      },
      "topic": "Commutative Algebra",
      "title": "An introduction to Grobner Bases",
      "abstract": [
        "In this talk, we shall overview major and useful results on Grobner Bases and discuss the applications of them in free resolutions. We will also give a proof of Hilbert's basis theorem using the theory developed."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2025-09-26-kaushik-khamari",
      "start": "2025-09-26T18:00:00+05:30",
      "durationMins": null,
      "venue": "Room 215",
      "speaker": {
        "name": "Kaushik Khamari",
        "affiliation": ""
      },
      "topic": "Homological Algebra",
      "title": "Introduction to spectral sequences II",
      "abstract": [
        "This is a continuation of the previous talk (_Abstract of the previous talk: In this talk we will see an introduction to spectral sequences of bicomplexes and their applications in homological algebra and if time permit give a proof of Foxby's theorem._)."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2025-09-12-kaushik-khamari",
      "start": "2025-09-12T18:30:00+05:30",
      "durationMins": null,
      "venue": "Room 105",
      "speaker": {
        "name": "Kaushik Khamari",
        "affiliation": ""
      },
      "topic": "Homological Algebra",
      "title": "Introduction to spectral sequences",
      "abstract": [
        "In this talk we will see an introduction to spectral sequences of bicomplexes and their applications in homological algebra and if time permit give a proof of Foxby's theorem."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2025-08-29-vishnu-ravi",
      "start": "2025-08-29T17:30:00+05:30",
      "durationMins": 60,
      "venue": "Room 105",
      "speaker": {
        "name": "Vishnu Ravi",
        "affiliation": ""
      },
      "topic": "Graph Theory",
      "title": "Tree dominant graphs",
      "abstract": [
        "In this talk, we shall overview major and useful results on spanning trees, structural properties, enumeration and estimation. Then we shall talk about spanning forests, leading to the problem of estimating the ratio of spanning trees and spanning forests, which was proposed by Balachandran. We shall cover a few results and conjectures that we have made in this direction, and related problems worked on by others."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2025-05-02-amal-das",
      "start": "2025-05-02T16:00:00+05:30",
      "durationMins": 60,
      "venue": "Room 215",
      "speaker": {
        "name": "Amal Das",
        "affiliation": ""
      },
      "topic": "Analysis",
      "title": "Perturbation in Critical point theory.",
      "abstract": [
        "Suppose the set of all critical points of a nonlinear functional are known. Now we perturb the functional little bit by some nonlinear functional, then we will see the changes of critical points for the new functional via finite dimensional reduction method."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2025-04-11-omkar-javadekar",
      "start": "2025-04-11T14:30:00+05:30",
      "durationMins": 60,
      "venue": "Room 215",
      "speaker": {
        "name": "Omkar Javadekar",
        "affiliation": ""
      },
      "topic": "Commutative Algebra",
      "title": "On support of local cohomology modules over hypersurface rings",
      "abstract": [
        "It is conjectured that the support of the local cohomology modules is closed. In this talk, we will present Hochster and Betanncourt's proof of this conjecture for hypersurface rings."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2025-04-04-aditya-dwivedi",
      "start": "2025-04-04T14:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Aditya Dwivedi",
        "affiliation": ""
      },
      "topic": "Commutative Algebra",
      "title": "Kunz's theorem for regular rings",
      "abstract": [
        "The theorem of Kunz (1970) characterizes a ring as being regular in terms of the flatness of the Frobenius map. The theorem is widely considered as the first theorem in positive characteristic methods. We will see a proof of this fundamental theorem in this talk."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2025-03-19-sayed-sadiqul-islam",
      "start": "2025-03-19T16:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Sayed Sadiqul Islam",
        "affiliation": ""
      },
      "topic": "Algebraic Geometry",
      "title": "Every Algebraic Set in n-Space is the Intersection of n Hypersurfaces",
      "abstract": [
        "The title says it all. The prerequisite needed is basic commutative algebra. The talk is based on the following paper:",
        "D. Eisenbud, E.G. Evans Jr. \"Every algebraic set in n-space is the intersection of n hypersurfaces\" _Invent. Math._, 19 (1973), pp. 107-112"
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2025-03-12-soumyadeb-samanta",
      "start": "2025-03-12T17:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Soumyadeb Samanta",
        "affiliation": ""
      },
      "topic": "Geometric Group Theory",
      "title": "Kleiner's proof of Gromov's theorem",
      "abstract": [
        "Let us first recall the following theorem of Gromov : Every finitely generated group of polynomial growth is virtually nilpotent. As simple as the statement might look, the proof of this theorem is quite non-elementary ; recently Bruce Kleiner gave an alternative proof of this result. Our aim in this talk is to discuss Kleiner's proof of Gromov's theorem assuming the proof of one of Kleiner's theorems. This talk will be made as self contained as possible."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2025-03-07-pradip-kumar-maity",
      "start": "2025-03-07T16:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Pradip Kumar Maity",
        "affiliation": ""
      },
      "topic": "Differential Geometry",
      "title": "Jacobi Fields and comparison theorem",
      "abstract": [
        "I shall discuss about the Jacobi fields and see some example of Jacobi fields of manifold with constant curvature. Then we will see some comparison results such as Cartan Hadamard theorem."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2025-02-28-aditya-dwivedi",
      "start": "2025-02-28T17:30:00+05:30",
      "durationMins": null,
      "venue": "Room 215",
      "speaker": {
        "name": "Aditya Dwivedi",
        "affiliation": ""
      },
      "topic": "Combinatorics",
      "title": "A proof of the classic EKR theorem.",
      "abstract": [
        "This talk will present the proof of the classical Erdős--Ko--Rado theorem. It is the oldest result in extremal combinatorics, and we present proof using the shifting method. Although proved by Erdős-Ko-Rado in 1938, it was not published till the 1960s because the authors found the theorem less interesting then."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2025-02-21-om-milind-joglekar",
      "start": "2025-02-21T18:00:00+05:30",
      "durationMins": 60,
      "venue": "Room 215",
      "speaker": {
        "name": "Om Milind Joglekar",
        "affiliation": ""
      },
      "topic": "Combinatorics",
      "title": "Matrix-Ball Construction and the Symmetry of the RSK Correspondence",
      "abstract": [
        "The Robinson-Schensted-Knuth (RSK) correspondence establishes a profound bijection between matrices of finite support and pairs of standard Young Tableaux of the same shape. A striking symmetry property of the RSK is that transposing a matrix swaps its resulting tableaux: if a matrix A corresponds to (P, Q), then Aᵀ corresponds to (Q, P). In this talk, I will present a proof of this elegant symmetry using the matrix-ball construction."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2025-02-14-surajit-pal",
      "start": "2025-02-14T17:00:00+05:30",
      "durationMins": 60,
      "venue": "Room 216",
      "speaker": {
        "name": "Surajit Pal",
        "affiliation": ""
      },
      "topic": "Control Theory",
      "title": "Abstract linear control system",
      "abstract": [
        "In this talk, we will state the control ability of the control system, and then we will give the observability inequality, which is equivalent to exact controllability. Also, we will state the equivalent condition for another type of control."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2025-02-06-om-milind-joglekar",
      "start": "2025-02-06T16:00:00+05:30",
      "durationMins": 60,
      "venue": "Room 215",
      "speaker": {
        "name": "Om Milind Joglekar",
        "affiliation": ""
      },
      "topic": "Representation Theory",
      "title": "Frobenius' Generating Function for Irreducible Characters of the Symmetric Group: A Combinatorial and Algebraic Masterpiece.",
      "abstract": [
        "In 1900, Frobenius discovered a remarkable generating function for the irreducible characters of the symmetric group S_n. It was well known that by lifting the trivial character of the subgroup S_{p_1} × ... × S_{p_n} (associated with a partition p of n) to a compound character φ_p of S_n, the generating function of φ_p restricted to some conjugacy class λ, yields the power sum symmetric function indexed by λ. Multiplying this by the Vandermonde determinant, Frobenius ingeniously derived the generating function for the irreducible characters of S_n. This seminar will explore his elegant construction, highlighting its deep connections between representation theory and symmetric functions."
      ],
      "note": "Continuation of the preceding talk.",
      "slides": null,
      "recording": null
    },
    {
      "id": "2025-01-31-om-milind-joglekar",
      "start": "2025-01-31T15:30:00+05:30",
      "durationMins": 60,
      "venue": "Room 216",
      "speaker": {
        "name": "Om Milind Joglekar",
        "affiliation": ""
      },
      "topic": "Representation Theory",
      "title": "Frobenius' Generating Function for Irreducible Characters of the Symmetric Group: A Combinatorial and Algebraic Masterpiece.",
      "abstract": [
        "In 1900, Frobenius discovered a remarkable generating function for the irreducible characters of the symmetric group S_n. It was well known that by lifting the trivial character of the subgroup S_{p_1} × ... × S_{p_n} (associated with a partition p of n) to a compound character φ_p of S_n, the generating function of φ_p restricted to some conjugacy class λ, yields the power sum symmetric function indexed by λ. Multiplying this by the Vandermonde determinant, Frobenius ingeniously derived the generating function for the irreducible characters of S_n. This seminar will explore his elegant construction, highlighting its deep connections between representation theory and symmetric functions."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2025-01-24-lal-bahadur-sahu",
      "start": "2025-01-24T16:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Lal Bahadur Sahu",
        "affiliation": ""
      },
      "topic": "Representation Theory",
      "title": "Applications of Peter-Weyl Theorem",
      "abstract": [
        "I will state one of the Peter-Weyl theorem and see it's few applications on representation theory of compact Lie groups."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2025-01-17-ramdas-omkar-prasad",
      "start": "2025-01-17T16:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Ramdas Omkar Prasad",
        "affiliation": ""
      },
      "topic": "Combinatorics",
      "title": "Combinatorial Nullstellensatz",
      "abstract": [
        "The Combinatorial Nullstellensatz, a clever algebraic tool by Noga Alon, is a fundamental theorem linking algebra and combinatorics. This talk will focus on presenting the theorem's statement, key conditions, and underlying algebraic ideas, with a central emphasis on understanding its proof. By walking through the details of the proof, we will explore how this result provides insights into the connection between polynomials and combinatorial structures, highlighting its theoretical significance."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2025-01-10-amal-das",
      "start": "2025-01-10T16:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Amal Das",
        "affiliation": ""
      },
      "topic": "PDEs",
      "title": "Radially symmetric solutions of nonlinear PDE",
      "abstract": [
        "In this talk, I will discuss radial symmetric solutions of nonlinear pde using maximum principles & some sort of comparsion theorems. Once we have radial solution, the pde becomes ode which is sometime easier to solve and we get explicit description of solutions."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-12-19-manav-batavia",
      "start": "2024-12-19T17:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Manav Batavia",
        "affiliation": "Purdue University"
      },
      "topic": "Commutative Algebra",
      "title": "Finiteness properties of local cohomology: an application of D-modules to commutative algebra",
      "abstract": [
        "Local cohomology modules are objects of great interest in commutative algebra and algebraic geometry. However, they are famously large modules and are far from being finitely generated. In 1993, Huneke and Sharp (in prime characteristic) and Lyubeznik (in equal characteristic 0) proved that local cohomology modules of regular Noetherian rings have finitely many associated primes and Bass numbers. In particular, Lyubeznik's proof was the first application of D-modules to commutative algebra. We will present an outline of Lyubeznik's proof for power series rings and explain how the results generalize."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-11-28-aditya-dwivedi",
      "start": "2024-11-28T17:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Aditya Dwivedi",
        "affiliation": ""
      },
      "topic": "Analysis",
      "title": "A proof of the Ramanujan Master theorem",
      "abstract": [
        "Ramanujan in his works used a clever technique to evaluate many integrals. We go into the proof of the technique which is today called Ramanujan Master theorem. The talk will assume only the knowledge of Cauchy integral formula."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-11-21-amal-das",
      "start": "2024-11-21T17:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Amal Das",
        "affiliation": ""
      },
      "topic": "PDEs",
      "title": "Radially symmetric solutions of nonlinear PDE.",
      "abstract": [
        "In this talk, I will discuss radial symmetric solutions of nonlinear pde using maximum principles & some sort of comparison theorems. Once we have radial solution, the pde becomes ode which is sometime easier to solve and we get explicit description of solutions."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-11-14-soumyadeb-samanta",
      "start": "2024-11-14T17:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Soumyadeb Samanta",
        "affiliation": ""
      },
      "topic": "Geometry & Topology",
      "title": "Asymptotic dimension of groups and metric spaces",
      "abstract": [
        "In this talk I will discuss the notion of asymptotic dimension of groups and metric spaces, which is a large scale analogue of topological dimension. We will then try to compute asymptotic dimensions of some spaces. If time permits, I will also try to motivate the importance of asymptotic dimension in modern day mathematics. The talk will be mostly self-contained and accessible to a general audience."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-11-07-swayam-shashank-chube",
      "start": "2024-11-07T17:30:00+05:30",
      "durationMins": 60,
      "venue": "Room 215",
      "speaker": {
        "name": "Swayam Shashank Chube",
        "affiliation": ""
      },
      "topic": "Algebra",
      "title": "The Inverse Galois Problem over ℂ(t)",
      "abstract": [
        "In this talk, I attempt to outline a proof of the fact that every finite group can be realised as a Galois group over ℂ(t) using the theory of Riemann Surfaces and their holomorphic covers."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-11-01-rishi-das",
      "start": "2024-11-01T17:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Rishi Das",
        "affiliation": ""
      },
      "topic": "PDEs",
      "title": "Parameter-uniform continuous stability of Darcy system",
      "abstract": [
        "Darcy system includes an intrinsic, non-rescalable parameter called hydraulic conductivity. We will explore appropriate function spaces and discuss the system's uniform continuous stability with respect to this parameter."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-10-24-rajeev-nayan",
      "start": "2024-10-24T17:30:00+05:30",
      "durationMins": 60,
      "venue": "Room 215",
      "speaker": {
        "name": "Rajeev Nayan",
        "affiliation": ""
      },
      "topic": "Analysis",
      "title": "A proof of the Riemann rearrangement theorem",
      "abstract": [
        "We discuss the peculiar behavior observed by rearranging the terms of a conditionally convergent series by showing it in an example. As a general result, we prove Riemann's rearrangement theorem"
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-10-17-sayed-sadiqul-islam",
      "start": "2024-10-17T17:30:00+05:30",
      "durationMins": 60,
      "venue": "Room 113",
      "speaker": {
        "name": "Sayed Sadiqul Islam",
        "affiliation": ""
      },
      "topic": "Commutative Algebra",
      "title": "Applications of local cohomology.",
      "abstract": [],
      "note": "Continuation of the previous talk; no separate abstract in the announcement.",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-10-10-aditya-dwivedi",
      "start": "2024-10-10T17:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Aditya Dwivedi",
        "affiliation": ""
      },
      "topic": "Commutative Algebra",
      "title": "A Duality Between Hilbert Functions of Lex Ideals and Quotients",
      "abstract": [],
      "note": "Continuation of the previous talk; no separate abstract in the announcement.",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-10-03-aditya-dwivedi",
      "start": "2024-10-03T17:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Aditya Dwivedi",
        "affiliation": ""
      },
      "topic": "Commutative Algebra",
      "title": "A Duality Between Hilbert Functions of Lex Ideals and Quotients",
      "abstract": [
        "In this talk, we introduce the concept of Macaulay coefficients as a tool for computing Hilbert functions of modules over polynomial rings. We establish a duality between the Hilbert coefficients of lex segment ideals and their quotients. This talk draws upon the results presented in the unpublished paper arxiv.org/pdf/2405.17632, available on arxiv."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-09-26-sayed-sadiqul-islam",
      "start": "2024-09-26T17:30:00+05:30",
      "durationMins": 60,
      "venue": "Room 215",
      "speaker": {
        "name": "Sayed Sadiqul Islam",
        "affiliation": ""
      },
      "topic": "Commutative Algebra",
      "title": "Applications of Local Cohomology",
      "abstract": [
        "Local cohomology was discovered in the 1960s as a tool to study sheaves and their cohomology in algebraic geometry, but it has since seen wide use in commutative algebra. An example of its application is in answering the question: how many elements are necessary to generate a given ideal, up to radical?",
        "For example, consider two planes in 4-space meeting at a point. The vanishing ideal I=(x,y)∩(u,v)⊂k[x,y,u,v] can be generated up to radical by xu,yv,xv+yu. While Krull's Hauptidealsatz implies that one element is not enough, local cohomology is used to show that two elements also do not suffice.",
        "We will discuss the Hartshorne Connectedness Theorem, which addresses the connectedness of the punctured spectrum of local rings. Next, we will discuss the Hartshorne-Lichtenbaum Vanishing Theorem, and using this, we will prove the Grothendieck Connectedness Theorem as an application. The major tools in these proofs will be the two Mayer-Vietoris sequences of local cohomology. Finally, we will touch on some conjectures related to these topics. This talk aims to offer an accessible overview of local cohomology and its significance in contemporary mathematics."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-09-19-omkar-javadekar",
      "start": "2024-09-19T17:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Omkar Javadekar",
        "affiliation": ""
      },
      "topic": "Combinatorics & Algebra",
      "title": "Connected ideals associated with graphs and their algebraic properties",
      "abstract": [
        "The interplay between the combinatorial properties of graphs and the algebraic structure of associated ideals has gained significant attention in recent years. One well-studied invariant of a graph G is its edge ideal I(G). In 1988, Fröberg showed that I(G) has a linear resolution if and only if G is a co-chordal graph. In this talk, we look at a generalization of edge ideals, known as \"connected ideals.\" Specifically, for a graph G and an integer t > 1, we define the connected ideal J_t(G), which reduces to the edge ideal when t = 2.",
        "We will focus on characterizing all trees for which the connected ideals J_t(G) have a linear resolution. This can be thought of as a partial generalization of Fröberg's theorem. Furthermore, we will discuss known results for certain other graph classes where J_t(G) has a linear resolution, beyond just trees. Towards the end, we will also highlight some accessible open questions in this area of study."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-09-12-surajit-pal",
      "start": "2024-09-12T17:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Surajit Pal",
        "affiliation": ""
      },
      "topic": "PDEs",
      "title": "Unique Continuation of Elliptic equations",
      "abstract": [
        "In this talk, My aim is to prove unique continuation which states that any solution of an elliptic equation that vanishes in a small ball must be identically zero. I will try to give the argument how we get this principle for elliptic equation with real-analytic coefficient, eigen-value problem and later I will prove the unique continuation for little bit general set-up using Carleman inequality.",
        "This property has various applications e.g. in solvability equations, inverse problems, and control theory."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-09-05-debapriya-ojha",
      "start": "2024-09-05T17:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Debapriya Ojha",
        "affiliation": ""
      },
      "topic": "Algebra",
      "title": "Convex Valuation Rings",
      "abstract": [
        "This talk describes the relationship between the orderings of a field that are compatible with a valuation ring. The orderings of the residue field of the latter is exhibited by the Baer-Krull Theorem. Finally, we will see some applications of this theorem."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-08-29-satyabrata-paul",
      "start": "2024-08-29T17:30:00+05:30",
      "durationMins": 60,
      "venue": "Room 215",
      "speaker": {
        "name": "Satyabrata Paul",
        "affiliation": ""
      },
      "topic": "Commutative Algebra",
      "title": "Auslander-Buchsbaum Formula",
      "abstract": [],
      "note": "Continuation of the previous talk; no separate abstract in the announcement.",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-08-22-satyabrata-paul",
      "start": "2024-08-22T17:30:00+05:30",
      "durationMins": 60,
      "venue": "Room 215",
      "speaker": {
        "name": "Satyabrata Paul",
        "affiliation": ""
      },
      "topic": "Commutative Algebra",
      "title": "Auslander-Buchsbaum Formula",
      "abstract": [
        "My aim is to prove an important result in Commutative Algebra, which is Auslander-Buchsbam Formula and I'll try to show some immediate applications.",
        "The prerequisites are assumed to be basic Commutative algebra, the notions of depth of a module and some Homological tools such as Tor, Ext functors and their long exact sequences. Before proving the mentioned Theorem, I shall briefly discuss about projective resolution and projective dimension of a module and recall some elementary facts."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-08-16-kshitij-sinha",
      "start": "2024-08-16T17:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Kshitij Sinha",
        "affiliation": ""
      },
      "topic": "PDEs",
      "title": "Introduction to Periodic Homogenization of Elliptic Systems",
      "abstract": [],
      "note": "Continuation of the previous talk; no separate abstract in the announcement.",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-07-25-swayam-shashank-chube",
      "start": "2024-07-25T15:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Swayam Shashank Chube",
        "affiliation": ""
      },
      "topic": "Lie Algebras",
      "title": "The theorems of Levi and Ado-Iwasawa.",
      "abstract": [
        "In this talk I present the proof of two major theorems regarding the structure of Lie algebras over fields, namely Levi's radical splitting theorem and the faithful representation theorem of Ado (for char 0) and Iwasawa (for char p). The prerequisites assumed are minimal; a basic knowledge of linear algebra over fields should suffice. I shall define and recall some elementary results related to Lie Algebras and then move on to the proofs of the aforementioned theorems"
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-05-30-rahul-singh-karki",
      "start": "2024-05-30T14:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Rahul Singh Karki",
        "affiliation": ""
      },
      "topic": "Commutative Algebra",
      "title": "Grobner Bases of Ideals",
      "abstract": [
        "In this talk, we will learn about Gröbner bases of ideals in a polynomial ring K[x_1,...,x_n]. A Gröbner basis of an ideal I is a distinguished generating set of I that relates the ideal to its initial ideal. With the help of Gröbner bases, we can obtain information related to several algebraic and geometric invariants of the ideal. We will explore some applications of Gröbner bases and discuss an algorithm, known as Buchberger's criterion, to determine whether a generating set is a Gröbner basis. The only prerequisite for this talk is a first course in ring theory."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-05-16-deep-makadiya",
      "start": "2024-05-16T16:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Deep Makadiya",
        "affiliation": ""
      },
      "topic": "Algebra",
      "title": "Presentation of the group SL_n(K)",
      "abstract": [
        "As the title suggests, our aim is to find a generator relation presentation of the special linear group $SL_n(K)$. This endeavor will be divided into two lectures. In the first lecture, we will identify some generators of the group SL_n(K) and explore the relations among them. This discussion will serve as a good example in the structure theory of semisimple algebraic groups. In the subsequent lecture, we will delve into the assertion that the described generators and relations are sufficient to generate SL_n(K) as an abstract group. Both talks are accessible to all students with a basic knowledge of group theory and linear algebra."
      ],
      "note": "Continuation of the preceding talk.",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-05-09-deep-makadiya",
      "start": "2024-05-09T14:00:00+05:30",
      "durationMins": 75,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Deep Makadiya",
        "affiliation": ""
      },
      "topic": "Algebra",
      "title": "Presentation of the group SL_n(K)",
      "abstract": [
        "As the title suggests, our aim is to find a generator relation presentation of the special linear group $SL_n(K)$. This endeavor will be divided into two lectures. In the first lecture, we will identify some generators of the group SL_n(K) and explore the relations among them. This discussion will serve as a good example in the structure theory of semisimple algebraic groups. In the subsequent lecture, we will delve into the assertion that the described generators and relations are sufficient to generate SL_n(K) as an abstract group. Both talks are accessible to all students with a basic knowledge of group theory and linear algebra."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-04-18-arusha",
      "start": "2024-04-18T14:00:00+05:30",
      "durationMins": 75,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Arusha",
        "affiliation": ""
      },
      "topic": "Algebraic Geometry",
      "title": "The Riemann-Roch theorem",
      "abstract": [
        "In the last talk, we defined Divisors on a compact Riemann surface $X$ and the space $L(D)$ consisting of meromorphic functions whose zeros and poles are \"bounded\" by $D$. In the next talk, we will make \"bounded\" precise and discuss the finite dimensionality of $L(D)$. A few more concepts like canonical divisors, Laurent tail divisors need to be introduced before getting into the proof. Owing to time constraints, the plan is to first outline the key steps involved in the proof of Riemann-Roch theorem and then fill in the details."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-04-12-arusha",
      "start": "2024-04-12T14:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Arusha",
        "affiliation": ""
      },
      "topic": "Algebraic Geometry",
      "title": "The Riemann-Roch theorem",
      "abstract": [
        "The Riemann-Roch theorem is a very popular, celebrated, important and useful theorem in algebraic geometry with roots in complex analysis. It relates the dimension of the space of meromorphic functions on a compact Riemann surface with fixed zeros and poles to the topological genus of the surface. In a series of two talks, we will discuss an algebraic proof of this theorem (for compact Riemann surfaces) that does not use cohomology or sheaf theory. In the first talk, after introducing compact Riemann surfaces and recalling some known results from complex analysis, I will move towards setting up the ingredients of the theorem."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-04-04-aditya-dwivedi",
      "start": "2024-04-04T14:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Aditya Dwivedi",
        "affiliation": ""
      },
      "topic": "Fourier Analysis",
      "title": "Asymptotics of Fourier Transforms some basic results.",
      "abstract": [
        "Riemann and Lebesgue proved that the Fourier transform of any function is $C_0$. Although this result is useful, it doesn't tell the rate at which it goes to zero. We will try to explicitly find the rate of convergence for certain special cases, which form part of what is known as the method of stationary phase. If there is time, we will also look at the manifold case."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-03-28-bittu-singh",
      "start": "2024-03-28T14:15:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Bittu Singh",
        "affiliation": ""
      },
      "topic": "Algebraic Topology",
      "title": "What's the spectral sequence",
      "abstract": [
        "The Serre spectral sequence is a powerful tool in algebraic topology for computing homology and cohomology of spaces that arise as fibrations. In this talk, we provide a brief overview of its construction and demonstrate its application through computational examples."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-03-21-umesh-shankar",
      "start": "2024-03-21T14:15:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Umesh Shankar",
        "affiliation": ""
      },
      "topic": "Geometry & Topology",
      "title": "Dehn there were 22!",
      "abstract": [
        "At the dawn of the 20th century, Hilbert published a list of 23 problems that was meant to guide the mathematical research of that century. Within a year of the publication, Hilbert's third problem was resolved by his own student, Max Dehn. In this talk, we will discuss Hilbert's motivation for posing the third problem, the problem statement itself, and finally, Dehn's answer to the problem."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-03-14-nitin-tomar",
      "start": "2024-03-14T17:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Nitin Tomar",
        "affiliation": ""
      },
      "topic": "Operator Theory",
      "title": "Von Neumann's inequality.",
      "abstract": [
        "Given a contraction T on a Hilbert space H, von Neumann's inequality asserts that the norm of p(T) is bounded above by the supremum of |p(z)| for z in the closed unit disk."
      ],
      "note": "Continuation of the preceding talk.",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-03-07-nitin-tomar",
      "start": "2024-03-07T17:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Nitin Tomar",
        "affiliation": ""
      },
      "topic": "Operator Theory",
      "title": "Von Neumann's inequality through linear algebra.",
      "abstract": [
        "Given a contraction T on a Hilbert space H, von Neumann's inequality asserts that the norm of p(T) is bounded above by the supremum of |p(z)| for z in the closed unit disk. The formulation of this theorem only requires elementary notions, yet the proof is usually approached through Functional Analysis. In this talk, we discuss a proof which solely rests on Linear Algebra including a proof of the Maximum Modulus Principle."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-02-22-rati-ludhani",
      "start": "2024-02-22T14:15:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Rati Ludhani",
        "affiliation": ""
      },
      "topic": "Algebra",
      "title": "Nullstellensatz over finite fields",
      "abstract": [
        "In continuation of the last seminar, we will see some applications of Nullstellensatz over finite fields, resulting in the footprint bound and a theorem of Chevalley."
      ],
      "note": "Continuation of the preceding talk.",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-02-15-rati-ludhani",
      "start": "2024-02-15T14:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Rati Ludhani",
        "affiliation": ""
      },
      "topic": "Algebra",
      "title": "Nullstellensatz over finite fields",
      "abstract": [
        "Hilbert's Nullstellensatz is a fundamental result in algebraic geometry which establishes a rigorous correspondence between algebraic varieties and ideals in polynomial rings. Let k be an algebraically closed field and S be a polynomial ring in n variables over k. Hilbert's Nullstellensatz states that if a polynomial f in S vanishes at every common zero in k^n of a set A of polynomials in S, then f^r can be written as a S-linear combination of polynomials of A for some positive integer r. Here assumption of k to be algebraically closed field is must. For instance, if k=the set of real numbers, S=k[x], A={x^2+1} and f=1, then the result does not hold true. However, there is a nice analogue of this result when k is a finite field, which we will explore in this seminar."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-02-08-makadiya-deepkumar",
      "start": "2024-02-08T14:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Makadiya Deepkumar",
        "affiliation": ""
      },
      "topic": "Commutative Algebra",
      "title": "Automorphisms of local rings which fixes the maximal ideal.",
      "abstract": [
        "In this talk, we will discuss the automorphisms of a local ring R, with a specific focus on those that preserve the maximal ideal m of ring R. The main highlight will be the demonstration that an automorphism of R, which fixes m, is the identity automorphism if and only if R/m is algebraic over its prime field."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-02-01-mohammed-saad-munaf-qadri",
      "start": "2024-02-01T14:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Mohammed Saad Munaf Qadri",
        "affiliation": ""
      },
      "topic": "Algebra",
      "title": "The Tree of SL(2) and a Theorem of Ihara",
      "abstract": [
        "We will see that any discrete torsion free subgroup of SL_2(Q_p) is free."
      ],
      "note": "Continuation of the preceding talk.",
      "slides": null,
      "recording": null
    },
    {
      "id": "2024-01-25-mohammed-saad-munaf-qadri",
      "start": "2024-01-25T14:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Mohammed Saad Munaf Qadri",
        "affiliation": ""
      },
      "topic": "Algebra",
      "title": "The Tree of SL(2) and a Theorem of Ihara",
      "abstract": [
        "We will see that any discrete torsion free subgroup of SL_2(Q_p) is free."
      ],
      "note": "",
      "slides": null,
      "recording": null
    },
    {
      "id": "2023-11-02-omkar-javadekar",
      "start": "2023-11-02T16:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Omkar Javadekar",
        "affiliation": ""
      },
      "topic": "Commutative Algebra",
      "title": "Kaplansky's Theorem for Projective Modules",
      "abstract": [],
      "note": "",
      "slides": null,
      "recording": null,
      "seminarNumber": 41,
      "source": "https://sites.google.com/iitb.ac.in/students-seminar-mathiitb/schedule/2023-24-autumn"
    },
    {
      "id": "2023-10-20-parvez-rasul",
      "start": "2023-10-20T14:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Parvez Rasul",
        "affiliation": ""
      },
      "topic": "Algebraic Geometry",
      "title": "The first link between (Commutative) Algebra and Geometry: Part 2",
      "abstract": [],
      "note": "",
      "slides": null,
      "recording": null,
      "seminarNumber": 40,
      "source": "https://sites.google.com/iitb.ac.in/students-seminar-mathiitb/schedule/2023-24-autumn"
    },
    {
      "id": "2023-10-13-parvez-rasul",
      "start": "2023-10-13T16:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Parvez Rasul",
        "affiliation": ""
      },
      "topic": "Algebraic Geometry",
      "title": "The first link between (Commutative) Algebra and Geometry: Part 1",
      "abstract": [],
      "note": "",
      "slides": null,
      "recording": null,
      "seminarNumber": 39,
      "source": "https://sites.google.com/iitb.ac.in/students-seminar-mathiitb/schedule/2023-24-autumn"
    },
    {
      "id": "2023-10-06-sai-krishna-p-m-s",
      "start": "2023-10-06T17:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Sai Krishna P M S",
        "affiliation": ""
      },
      "topic": "Algebra",
      "title": "Dual basis of a projective module",
      "abstract": [],
      "note": "",
      "slides": null,
      "recording": null,
      "seminarNumber": 38,
      "source": "https://sites.google.com/iitb.ac.in/students-seminar-mathiitb/schedule/2023-24-autumn"
    },
    {
      "id": "2023-09-21-priyanka-magar",
      "start": "2023-09-21T16:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Priyanka Magar",
        "affiliation": ""
      },
      "topic": "Topology",
      "title": "Simplicial sets arising from categories",
      "abstract": [],
      "note": "",
      "slides": null,
      "recording": null,
      "seminarNumber": 37,
      "source": "https://sites.google.com/iitb.ac.in/students-seminar-mathiitb/schedule/2023-24-autumn"
    },
    {
      "id": "2023-09-13-sai-krishna-p-m-s",
      "start": "2023-09-13T14:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Sai Krishna P M S",
        "affiliation": ""
      },
      "topic": "Commutative Algebra",
      "title": "On the height of prime ideals in polynomial rings: Part I",
      "abstract": [],
      "note": "",
      "slides": null,
      "recording": null,
      "seminarNumber": 36,
      "source": "https://sites.google.com/iitb.ac.in/students-seminar-mathiitb/schedule/2023-24-autumn"
    },
    {
      "id": "2023-09-08-omkar-javadekar",
      "start": "2023-09-08T14:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Omkar Javadekar",
        "affiliation": ""
      },
      "topic": "Commutative Algebra",
      "title": "Real powers of monomial ideals",
      "abstract": [],
      "note": "",
      "slides": null,
      "recording": null,
      "seminarNumber": 35,
      "source": "https://sites.google.com/iitb.ac.in/students-seminar-mathiitb/schedule/2023-24-autumn"
    },
    {
      "id": "2023-09-01-shantanu-nene",
      "start": "2023-09-01T16:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Shantanu Nene",
        "affiliation": ""
      },
      "topic": "Geometry & Topology",
      "title": "Morse Theory and Applications",
      "abstract": [],
      "note": "",
      "slides": null,
      "recording": null,
      "seminarNumber": 34,
      "source": "https://sites.google.com/iitb.ac.in/students-seminar-mathiitb/schedule/2023-24-autumn"
    },
    {
      "id": "2023-08-24-akash-yadav",
      "start": "2023-08-24T15:30:00+05:30",
      "durationMins": 90,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Akash Yadav",
        "affiliation": ""
      },
      "topic": "Algebra",
      "title": "Profinite Groups",
      "abstract": [],
      "note": "",
      "slides": null,
      "recording": null,
      "seminarNumber": 33,
      "source": "https://sites.google.com/iitb.ac.in/students-seminar-mathiitb/schedule/2023-24-autumn"
    },
    {
      "id": "2023-08-17-rahul-karki",
      "start": "2023-08-17T14:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Rahul Karki",
        "affiliation": ""
      },
      "topic": "Graph Theory",
      "title": "Chip-Firing Game on Graphs",
      "abstract": [],
      "note": "",
      "slides": null,
      "recording": null,
      "seminarNumber": 32,
      "source": "https://sites.google.com/iitb.ac.in/students-seminar-mathiitb/schedule/2023-24-autumn"
    },
    {
      "id": "2023-08-11-brahadeesh-sankarnarayanan",
      "start": "2023-08-11T16:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Brahadeesh Sankarnarayanan",
        "affiliation": ""
      },
      "topic": "Combinatorics",
      "title": "How many orientations does a point have?",
      "abstract": [],
      "note": "",
      "slides": null,
      "recording": null,
      "seminarNumber": 31,
      "source": "https://sites.google.com/iitb.ac.in/students-seminar-mathiitb/schedule/2023-24-autumn"
    },
    {
      "id": "2023-08-04-kiran-kumar",
      "start": "2023-08-04T14:00:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Kiran Kumar",
        "affiliation": ""
      },
      "topic": "Graph Theory",
      "title": "Spectrum of Random Graphs",
      "abstract": [],
      "note": "",
      "slides": null,
      "recording": null,
      "seminarNumber": 30,
      "source": "https://sites.google.com/iitb.ac.in/students-seminar-mathiitb/schedule/2023-24-autumn"
    },
    {
      "id": "2023-07-28-brahadeesh-sankarnarayanan",
      "start": "2023-07-28T14:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Brahadeesh Sankarnarayanan",
        "affiliation": ""
      },
      "topic": "Combinatorics",
      "title": "The Lindström–Gessel–Viennot lemma: Part II",
      "abstract": [],
      "note": "",
      "slides": null,
      "recording": null,
      "seminarNumber": 29,
      "source": "https://sites.google.com/iitb.ac.in/students-seminar-mathiitb/schedule/2023-24-autumn"
    },
    {
      "id": "2023-07-19-brahadeesh-sankarnarayanan",
      "start": "2023-07-19T14:30:00+05:30",
      "durationMins": 60,
      "venue": "Ramanujan Hall",
      "speaker": {
        "name": "Brahadeesh Sankarnarayanan",
        "affiliation": ""
      },
      "topic": "Combinatorics",
      "title": "The Lindström–Gessel–Viennot lemma: Part I",
      "abstract": [],
      "note": "",
      "slides": null,
      "recording": null,
      "seminarNumber": 28,
      "source": "https://sites.google.com/iitb.ac.in/students-seminar-mathiitb/schedule/2023-24-autumn"
    },
    {
      "id": "2023-03-08-deep-makadiya",
      "start": "2023-03-08",
      "durationMins": null,
      "venue": "",
      "speaker": {
        "name": "Deep Makadiya",
        "affiliation": ""
      },
      "topic": "Representation Theory",
      "title": "Representation theory of SL₂(ℂ)",
      "abstract": [],
      "note": "",
      "slides": null,
      "recording": null,
      "source": "https://deepmakadiya25.github.io/news.html"
    },
    {
      "id": "2023-omkar-javadekar-lefschetz",
      "start": null,
      "durationMins": null,
      "venue": "",
      "speaker": {
        "name": "Omkar Javadekar",
        "affiliation": ""
      },
      "topic": "Commutative Algebra",
      "title": "Lefschetz properties",
      "abstract": [],
      "note": "",
      "slides": null,
      "recording": null,
      "year": 2023,
      "source": "https://omkarjavadekar.github.io/academics/"
    },
    {
      "id": "2022-omkar-javadekar-fta-1",
      "start": null,
      "durationMins": null,
      "venue": "",
      "speaker": {
        "name": "Omkar Javadekar",
        "affiliation": ""
      },
      "topic": "Algebra",
      "title": "Two proofs of the Fundamental Theorem of Algebra — I",
      "abstract": [],
      "note": "One of a series of two talks; exact date not available.",
      "slides": null,
      "recording": null,
      "year": 2022,
      "source": "https://omkarjavadekar.github.io/academics/"
    },
    {
      "id": "2022-omkar-javadekar-fta-2",
      "start": null,
      "durationMins": null,
      "venue": "",
      "speaker": {
        "name": "Omkar Javadekar",
        "affiliation": ""
      },
      "topic": "Algebra",
      "title": "Two proofs of the Fundamental Theorem of Algebra — II",
      "abstract": [],
      "note": "One of a series of two talks; exact date not available.",
      "slides": null,
      "recording": null,
      "year": 2022,
      "source": "https://omkarjavadekar.github.io/academics/"
    }
  ],
  "organizers": [
    {
      "name": "Aditya Dwivedi",
      "role": "Ph.D. Student",
      "email": "dwivedi_aditya@iitb.ac.in"
    },
    {
      "name": "Aditya Khambete",
      "role": "IDDDP",
      "email": "khambete@iitb.ac.in"
    },
    {
      "name": "Ramdas Omkar Prasad",
      "role": "Ph.D. Student",
      "email": "23d0787@iitb.ac.in"
    }
  ]
};
