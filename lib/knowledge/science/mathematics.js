// lib/knowledge/science/mathematics.js

// ============================================================
// MATHEMATICS KNOWLEDGE BASE
// ============================================================
// Comprehensive mathematics knowledge for REZE.
//
// This file is intentionally self-contained and does not require
// internet access or external APIs.
//
// Topics covered:
// - Mathematical foundations
// - Arithmetic
// - Algebra
// - Equations and inequalities
// - Functions
// - Coordinate geometry
// - Euclidean geometry
// - Solid geometry
// - Trigonometry
// - Analytic geometry
// - Calculus
// - Differential equations
// - Linear algebra
// - Vector mathematics
// - Probability
// - Statistics
// - Number theory
// - Set theory
// - Mathematical logic
// - Discrete mathematics
// - Combinatorics
// - Graph theory
// - Optimization
// - Numerical mathematics
// - Complex numbers
// - Abstract algebra
// - Real analysis
// - Topology
// - Mathematical modeling
// - Mathematical physics
// - Financial mathematics
// - Mathematical notation and terminology
// ============================================================

export const MATHEMATICS_KNOWLEDGE = {

  // ==========================================================
  // 1. MATHEMATICAL FOUNDATIONS
  // ==========================================================

  foundations: {
    name: "Mathematical Foundations",

    definition:
      "Mathematics is the systematic study of quantity, structure, space, change, patterns, relationships, and logical reasoning.",

    majorBranches: [
      "Arithmetic",
      "Algebra",
      "Geometry",
      "Trigonometry",
      "Calculus",
      "Differential equations",
      "Linear algebra",
      "Probability",
      "Statistics",
      "Number theory",
      "Discrete mathematics",
      "Combinatorics",
      "Graph theory",
      "Logic",
      "Set theory",
      "Real analysis",
      "Complex analysis",
      "Abstract algebra",
      "Topology",
      "Numerical mathematics",
      "Optimization",
      "Mathematical physics",
      "Financial mathematics"
    ],

    mathematicalProof:
      "A mathematical proof is a logically valid argument establishing that a statement follows from accepted definitions, axioms, and previously established results.",

    proofMethods: [
      "Direct proof",
      "Proof by contradiction",
      "Proof by contrapositive",
      "Proof by induction",
      "Proof by cases",
      "Existence proof",
      "Uniqueness proof",
      "Constructive proof",
      "Probabilistic proof"
    ],

    axioms:
      "Axioms are foundational statements accepted as starting assumptions within a mathematical system.",

    theorem:
      "A theorem is a mathematical statement that has been proved.",

    lemma:
      "A lemma is a proven result generally used as an intermediate step toward another result.",

    corollary:
      "A corollary is a result that follows relatively directly from a theorem or proposition.",

    conjecture:
      "A conjecture is a mathematical statement believed to be true but not yet proved.",

    counterexample:
      "A counterexample is a specific example showing that a universal mathematical claim is false.",

    necessaryCondition:
      "A necessary condition must be satisfied for a statement to hold.",

    sufficientCondition:
      "A sufficient condition guarantees that a statement holds.",

    iff:
      "If and only if, written iff or ⇔, means that two statements are logically equivalent."
  },

  // ==========================================================
  // 2. NUMBER SYSTEMS
  // ==========================================================

  numberSystems: {
    name: "Number Systems",

    naturalNumbers: {
      symbol: "N",
      definition:
        "Natural numbers are the counting numbers. Depending on convention, they may begin at 0 or 1.",
      examples: [0, 1, 2, 3, 4, 5, 6]
    },

    wholeNumbers: {
      definition:
        "Whole numbers are non-negative integers.",
      examples: [0, 1, 2, 3, 4, 5]
    },

    integers: {
      symbol: "Z",
      definition:
        "Integers include positive numbers, negative numbers, and zero.",
      examples: [
        -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5
      ]
    },

    rationalNumbers: {
      symbol: "Q",
      definition:
        "A rational number can be expressed as p/q where p and q are integers and q ≠ 0.",
      examples: [
        "1/2",
        "3/4",
        "-7/3",
        "5",
        "0.25"
      ]
    },

    irrationalNumbers: {
      definition:
        "Irrational numbers cannot be expressed as a ratio of two integers.",
      examples: [
        "√2",
        "√3",
        "π",
        "e"
      ]
    },

    realNumbers: {
      symbol: "R",
      definition:
        "Real numbers consist of all rational and irrational numbers."
    },

    complexNumbers: {
      symbol: "C",
      definition:
        "Complex numbers have the form a + bi, where a and b are real numbers and i² = -1."
    },

    hierarchy:
      "N ⊂ Z ⊂ Q ⊂ R ⊂ C"
  },

  // ==========================================================
  // 3. ARITHMETIC
  // ==========================================================

  arithmetic: {
    name: "Arithmetic",

    operations: {
      addition: "Combines quantities. Example: 3 + 5 = 8.",
      subtraction: "Finds the difference. Example: 9 - 4 = 5.",
      multiplication: "Repeated addition or scaling. Example: 4 × 6 = 24.",
      division: "Splits a quantity into equal parts or determines a ratio."
    },

    orderOfOperations: [
      "Parentheses and grouping",
      "Exponents and roots",
      "Multiplication and division",
      "Addition and subtraction"
    ],

    properties: {
      commutativeAddition:
        "a + b = b + a",

      commutativeMultiplication:
        "ab = ba",

      associativeAddition:
        "(a + b) + c = a + (b + c)",

      associativeMultiplication:
        "(ab)c = a(bc)",

      distributive:
        "a(b + c) = ab + ac"
    },

    identityElements: {
      additiveIdentity: "0",
      multiplicativeIdentity: "1"
    },

    inverseElements: {
      additiveInverse:
        "The additive inverse of a is -a.",
      multiplicativeInverse:
        "The multiplicative inverse of a nonzero number a is 1/a."
    },

    fractions: {
      addition:
        "To add fractions, convert them to a common denominator.",
      multiplication:
        "Multiply numerators and denominators.",
      division:
        "Multiply by the reciprocal of the divisor."
    },

    decimals: {
      terminating:
        "A decimal representation that eventually ends.",
      repeating:
        "A decimal representation containing a repeating pattern."
    },

    percentages: {
      formula:
        "percentage = (part / whole) × 100"
    },

    ratio:
      "A ratio compares quantities using division.",

    proportion:
      "A proportion states that two ratios are equal."
  },

  // ==========================================================
  // 4. EXPONENTS AND ROOTS
  // ==========================================================

  exponentsAndRoots: {
    laws: {
      product:
        "a^m × a^n = a^(m+n)",
      quotient:
        "a^m / a^n = a^(m-n), a ≠ 0",
      power:
        "(a^m)^n = a^(mn)",
      productPower:
        "(ab)^n = a^n b^n",
      zeroPower:
        "a^0 = 1, a ≠ 0",
      negativePower:
        "a^(-n) = 1/a^n"
    },

    roots: {
      squareRoot:
        "√a is a number whose square is a.",
      nthRoot:
        "The nth root of a is a number whose nth power equals a."
    },

    fractionalExponents: {
      rule:
        "a^(m/n) = ⁿ√(a^m)"
    },

    scientificNotation:
      "Numbers can be represented as a × 10^n, where 1 ≤ |a| < 10."
  },

  // ==========================================================
  // 5. ALGEBRA
  // ==========================================================

  algebra: {
    name: "Algebra",

    definition:
      "Algebra studies symbols, variables, expressions, equations, functions, and relationships.",

    variables:
      "A variable is a symbol representing a quantity that may change or be unknown.",

    constants:
      "A constant is a fixed quantity.",

    coefficient:
      "A coefficient is a numerical factor multiplying a variable.",

    term:
      "A term is a product of constants and variables separated from other terms by addition or subtraction.",

    expression:
      "An algebraic expression combines numbers, variables, and operations without necessarily forming an equation.",

    polynomial:
      "A polynomial is an expression consisting of variables raised to non-negative integer powers and multiplied by coefficients.",

    polynomialTypes: [
      "Monomial",
      "Binomial",
      "Trinomial",
      "Polynomial"
    ],

    likeTerms:
      "Like terms contain the same variables raised to the same powers.",

    factoring: {
      commonFactor:
        "Extract a common factor from all terms.",
      differenceOfSquares:
        "a² - b² = (a-b)(a+b)",
      perfectSquare:
        "a² + 2ab + b² = (a+b)²",
      perfectSquareMinus:
        "a² - 2ab + b² = (a-b)²"
    },

    identities: {
      squareOfSum:
        "(a+b)² = a² + 2ab + b²",
      squareOfDifference:
        "(a-b)² = a² - 2ab + b²",
      differenceOfSquares:
        "a²-b²=(a-b)(a+b)",
      cubeOfSum:
        "(a+b)³=a³+3a²b+3ab²+b³",
      cubeOfDifference:
        "(a-b)³=a³-3a²b+3ab²-b³",
      sumOfCubes:
        "a³+b³=(a+b)(a²-ab+b²)",
      differenceOfCubes:
        "a³-b³=(a-b)(a²+ab+b²)"
    }
  },

  // ==========================================================
  // 6. LINEAR EQUATIONS
  // ==========================================================

  linearEquations: {
    definition:
      "A linear equation is an equation in which variables appear only to the first power.",

    oneVariable:
      "ax + b = 0 gives x = -b/a when a ≠ 0.",

    twoVariables:
      "A linear equation such as ax + by = c represents a line in two-dimensional space.",

    systems: {
      methods: [
        "Substitution",
        "Elimination",
        "Graphing",
        "Matrix methods",
        "Cramer's rule"
      ]
    },

    slopeIntercept:
      "y = mx + b",

    standardForm:
      "Ax + By = C",

    pointSlope:
      "y-y₁=m(x-x₁)",

    slope:
      "m = (y₂-y₁)/(x₂-x₁)"
  },

  // ==========================================================
  // 7. QUADRATIC EQUATIONS
  // ==========================================================

  quadraticEquations: {
    definition:
      "A quadratic equation has the form ax² + bx + c = 0 with a ≠ 0.",

    quadraticFormula:
      "x = (-b ± √(b² - 4ac)) / (2a)",

    discriminant:
      "Δ = b² - 4ac",

    discriminantInterpretation: {
      positive:
        "Two distinct real roots.",
      zero:
        "One repeated real root.",
      negative:
        "Two complex conjugate roots."
    },

    vertex:
      "For y=ax²+bx+c, the x-coordinate of the vertex is -b/(2a).",

    axisOfSymmetry:
      "x = -b/(2a)",

    parabola:
      "The graph of a quadratic function is a parabola."
  },

  // ==========================================================
  // 8. POLYNOMIALS
  // ==========================================================

  polynomials: {
    degree:
      "The degree of a polynomial is the highest exponent of its variable.",

    fundamentalTheorem:
      "Every nonconstant single-variable polynomial with complex coefficients has at least one complex root, and a degree-n polynomial has n complex roots counted with multiplicity.",

    remainderTheorem:
      "When P(x) is divided by x-a, the remainder is P(a).",

    factorTheorem:
      "x-a is a factor of P(x) exactly when P(a)=0.",

    syntheticDivision:
      "A shortcut for dividing polynomials by linear factors.",

    roots:
      "Roots or zeros are values of x for which P(x)=0."
  },

  // ==========================================================
  // 9. FUNCTIONS
  // ==========================================================

  functions: {
    definition:
      "A function assigns each input from its domain exactly one output.",

    notation:
      "f(x) denotes the output of function f for input x.",

    domain:
      "The domain is the set of allowed input values.",

    range:
      "The range is the set of output values.",

    types: [
      "Linear",
      "Quadratic",
      "Polynomial",
      "Rational",
      "Exponential",
      "Logarithmic",
      "Trigonometric",
      "Piecewise",
      "Absolute value",
      "Root",
      "Constant",
      "Identity"
    ],

    composition:
      "(f ∘ g)(x) = f(g(x))",

    inverse:
      "An inverse function reverses the mapping of a one-to-one function.",

    evenFunction:
      "f(-x)=f(x)",

    oddFunction:
      "f(-x)=-f(x)",

    increasing:
      "A function is increasing on an interval if larger inputs produce larger outputs.",

    decreasing:
      "A function is decreasing on an interval if larger inputs produce smaller outputs."
  },

  // ==========================================================
  // 10. EXPONENTIAL FUNCTIONS
  // ==========================================================

  exponentialFunctions: {
    generalForm:
      "f(x)=ab^x, where b>0 and b≠1.",

    naturalExponential:
      "f(x)=e^x",

    properties: [
      "Exponential growth occurs when b > 1.",
      "Exponential decay occurs when 0 < b < 1.",
      "The graph approaches but does not cross the horizontal asymptote y=0 for positive a."
    ],

    compoundInterest:
      "A = P(1+r/n)^(nt)",

    continuousCompounding:
      "A = Pe^(rt)"
  },

  // ==========================================================
  // 11. LOGARITHMS
  // ==========================================================

  logarithms: {
    definition:
      "log_b(x)=y means b^y=x.",

    conditions:
      "For real logarithms, b>0, b≠1, and x>0.",

    laws: {
      product:
        "log_b(xy)=log_b(x)+log_b(y)",
      quotient:
        "log_b(x/y)=log_b(x)-log_b(y)",
      power:
        "log_b(x^r)=r log_b(x)",
      changeOfBase:
        "log_b(x)=ln(x)/ln(b)"
    },

    commonLog:
      "log(x) usually means log base 10.",

    naturalLog:
      "ln(x) is the logarithm base e."
  },

  // ==========================================================
  // 12. GEOMETRY
  // ==========================================================

  geometry: {
    name: "Geometry",

    point:
      "A point represents a location in space and has no dimensions.",

    line:
      "A line extends infinitely in two directions.",

    ray:
      "A ray begins at one point and extends infinitely in one direction.",

    segment:
      "A line segment has two endpoints.",

    angles: {
      acute: "Less than 90°.",
      right: "Exactly 90°.",
      obtuse: "Greater than 90° and less than 180°.",
      straight: "Exactly 180°.",
      reflex: "Greater than 180° and less than 360°.",
      full: "Exactly 360°."
    },

    triangle: {
      angleSum:
        "The interior angles of a triangle sum to 180°.",

      area:
        "A = 1/2 bh",

      perimeter:
        "P = a+b+c",

      typesBySides: [
        "Equilateral",
        "Isosceles",
        "Scalene"
      ],

      typesByAngles: [
        "Acute",
        "Right",
        "Obtuse"
      ]
    },

    quadrilaterals: [
      "Square",
      "Rectangle",
      "Parallelogram",
      "Rhombus",
      "Trapezoid",
      "Kite"
    ],

    polygonInteriorAngleSum:
      "(n-2)180°",

    regularPolygonInteriorAngle:
      "((n-2)180°)/n"
  },

  // ==========================================================
  // 13. CIRCLE GEOMETRY
  // ==========================================================

  circles: {
    definition:
      "A circle is the set of all points in a plane at a fixed distance from a center.",

    radius:
      "Distance from the center to the circle.",

    diameter:
      "d=2r",

    circumference:
      "C=2πr",

    area:
      "A=πr²",

    arcLength:
      "s=rθ when θ is measured in radians.",

    sectorArea:
      "A=(1/2)r²θ when θ is measured in radians.",

    equation:
      "(x-h)²+(y-k)²=r²",

    pi:
      "π is the ratio of a circle's circumference to its diameter and is approximately 3.141592653589793."
  },

  // ==========================================================
  // 14. SOLID GEOMETRY
  // ==========================================================

  solidGeometry: {
    cube: {
      volume: "V=a³",
      surfaceArea: "S=6a²"
    },

    rectangularPrism: {
      volume: "V=lwh",
      surfaceArea: "S=2(lw+lh+wh)"
    },

    cylinder: {
      volume: "V=πr²h",
      surfaceArea:
        "S=2πr²+2πrh"
    },

    cone: {
      volume: "V=(1/3)πr²h"
    },

    sphere: {
      volume: "V=(4/3)πr³",
      surfaceArea: "S=4πr²"
    },

    pyramid:
      "V=(1/3)Bh, where B is the base area.",

    prism:
      "V=Bh"
  },

  // ==========================================================
  // 15. PYTHAGOREAN THEOREM
  // ==========================================================

  pythagoreanTheorem: {
    formula:
      "a²+b²=c²",

    meaning:
      "In a right triangle, the square of the hypotenuse equals the sum of the squares of the legs.",

    converse:
      "If a²+b²=c² for the largest side c, the triangle is right-angled."
  },

  // ==========================================================
  // 16. SIMILARITY AND CONGRUENCE
  // ==========================================================

  similarityAndCongruence: {
    congruent:
      "Figures are congruent when they have the same size and shape.",

    similar:
      "Figures are similar when corresponding angles are equal and corresponding side lengths are proportional.",

    triangleCongruence: [
      "SSS",
      "SAS",
      "ASA",
      "AAS",
      "HL for right triangles"
    ],

    triangleSimilarity: [
      "AA",
      "SAS",
      "SSS"
    ]
  },

  // ==========================================================
  // 17. COORDINATE GEOMETRY
  // ==========================================================

  coordinateGeometry: {
    distanceFormula:
      "d=√((x₂-x₁)²+(y₂-y₁)²)",

    midpointFormula:
      "M=((x₁+x₂)/2,(y₁+y₂)/2)",

    slope:
      "m=(y₂-y₁)/(x₂-x₁)",

    parallelLines:
      "Parallel nonvertical lines have equal slopes.",

    perpendicularLines:
      "Perpendicular nonvertical lines have slopes whose product is -1.",

    circle:
      "(x-h)²+(y-k)²=r²",

    parabola:
      "y=ax²+bx+c",

    ellipse:
      "(x-h)²/a²+(y-k)²/b²=1",

    hyperbola:
      "(x-h)²/a²-(y-k)²/b²=1"
  },

  // ==========================================================
  // 18. TRIGONOMETRY
  // ==========================================================

  trigonometry: {
    definition:
      "Trigonometry studies relationships among angles and side lengths of triangles and periodic phenomena.",

    basicRatios: {
      sine:
        "sin θ = opposite/hypotenuse",
      cosine:
        "cos θ = adjacent/hypotenuse",
      tangent:
        "tan θ = opposite/adjacent"
    },

    reciprocalFunctions: {
      cosecant:
        "csc θ = 1/sin θ",
      secant:
        "sec θ = 1/cos θ",
      cotangent:
        "cot θ = 1/tan θ"
    },

    identities: {
      fundamental:
        "sin²θ+cos²θ=1",
      tangent:
        "tan θ=sin θ/cos θ",
      reciprocal:
        "1+tan²θ=sec²θ",
      reciprocal2:
        "1+cot²θ=csc²θ"
    },

    angleAddition: {
      sine:
        "sin(a+b)=sin a cos b+cos a sin b",
      cosine:
        "cos(a+b)=cos a cos b-sin a sin b",
      tangent:
        "tan(a+b)=(tan a+tan b)/(1-tan a tan b)"
    },

    angleSubtraction: {
      sine:
        "sin(a-b)=sin a cos b-cos a sin b",
      cosine:
        "cos(a-b)=cos a cos b+sin a sin b"
    },

    doubleAngle: {
      sine:
        "sin 2θ=2sin θ cos θ",
      cosine:
        "cos 2θ=cos²θ-sin²θ",
      tangent:
        "tan 2θ=2tan θ/(1-tan²θ)"
    },

    lawOfSines:
      "a/sin A=b/sin B=c/sin C",

    lawOfCosines:
      "c²=a²+b²-2ab cos C",

    radians:
      "π radians = 180°.",

    degreesToRadians:
      "radians = degrees × π/180",

    radiansToDegrees:
      "degrees = radians × 180/π"
  },

  // ==========================================================
  // 19. UNIT CIRCLE
  // ==========================================================

  unitCircle: {
    definition:
      "The unit circle is the circle centered at the origin with radius 1.",

    equation:
      "x²+y²=1",

    coordinateInterpretation:
      "(cos θ, sin θ)",

    importantAngles: {
      "0°": "(1,0)",
      "30°": "(√3/2,1/2)",
      "45°": "(√2/2,√2/2)",
      "60°": "(1/2,√3/2)",
      "90°": "(0,1)",
      "180°": "(-1,0)",
      "270°": "(0,-1)",
      "360°": "(1,0)"
    }
  },

  // ==========================================================
  // 20. LIMITS
  // ==========================================================

  limits: {
    definition:
      "A limit describes the value a function approaches as its input approaches a particular value.",

    notation:
      "lim(x→a) f(x)",

    oneSidedLimits:
      "Left-hand and right-hand limits describe behavior approaching a point from one side.",

    infiniteLimit:
      "A function has an infinite limit if its values grow without bound near a point.",

    continuity:
      "A function is continuous at a point when its limit equals its function value there.",

    conditionsForContinuity: [
      "f(a) is defined.",
      "lim(x→a) f(x) exists.",
      "lim(x→a) f(x)=f(a)."
    ],

    importantLimits: {
      sinxOverX:
        "lim(x→0) sin(x)/x = 1",
      exponential:
        "lim(x→0) (e^x-1)/x = 1"
    }
  },

  // ==========================================================
  // 21. DIFFERENTIAL CALCULUS
  // ==========================================================

  differentialCalculus: {
    derivative:
      "The derivative measures instantaneous rate of change and is the slope of a function's tangent line.",

    definition:
      "f'(x)=lim(h→0)[f(x+h)-f(x)]/h",

    basicRules: {
      constant:
        "d/dx(c)=0",
      power:
        "d/dx(x^n)=nx^(n-1)",
      sum:
        "(f+g)'=f'+g'",
      constantMultiple:
        "(cf)'=cf'"
    },

    productRule:
      "(fg)'=f'g+fg'",

    quotientRule:
      "(f/g)'=(f'g-fg')/g²",

    chainRule:
      "d/dx f(g(x)) = f'(g(x))g'(x)",

    derivatives: {
      exponential:
        "d/dx(e^x)=e^x",
      naturalLog:
        "d/dx(ln x)=1/x",
      sine:
        "d/dx(sin x)=cos x",
      cosine:
        "d/dx(cos x)=-sin x",
      tangent:
        "d/dx(tan x)=sec²x"
    },

    higherDerivatives:
      "Higher derivatives are obtained by differentiating repeatedly.",

    secondDerivative:
      "The second derivative describes curvature and the rate of change of the first derivative.",

    criticalPoint:
      "A critical point occurs where f'(x)=0 or f'(x) does not exist, provided the point is in the domain.",

    extrema: [
      "Local maximum",
      "Local minimum",
      "Absolute maximum",
      "Absolute minimum"
    ],

    concavity: {
      up:
        "f''(x)>0 indicates concave upward behavior.",
      down:
        "f''(x)<0 indicates concave downward behavior."
    }
  },

  // ==========================================================
  // 22. INTEGRAL CALCULUS
  // ==========================================================

  integralCalculus: {
    definition:
      "Integration studies accumulation and can represent area, volume, displacement, and other accumulated quantities.",

    indefiniteIntegral:
      "∫f(x)dx represents a family of antiderivatives.",

    constantOfIntegration:
      "An indefinite integral includes an arbitrary constant C.",

    basicRules: {
      power:
        "∫x^n dx=x^(n+1)/(n+1)+C for n≠-1",
      reciprocal:
        "∫1/x dx=ln|x|+C",
      exponential:
        "∫e^x dx=e^x+C",
      sine:
        "∫sin x dx=-cos x+C",
      cosine:
        "∫cos x dx=sin x+C"
    },

    definiteIntegral:
      "∫ₐᵇ f(x)dx represents signed accumulation between a and b.",

    fundamentalTheorem:
      "The Fundamental Theorem of Calculus connects differentiation and integration.",

    substitution:
      "u-substitution is the integration counterpart of the chain rule.",

    integrationByParts:
      "∫u dv = uv - ∫v du",

    applications: [
      "Area",
      "Volume",
      "Arc length",
      "Work",
      "Displacement",
      "Average value",
      "Probability distributions"
    ]
  },

  // ==========================================================
  // 23. MULTIVARIABLE CALCULUS
  // ==========================================================

  multivariableCalculus: {
    definition:
      "Multivariable calculus studies functions involving two or more independent variables.",

    partialDerivative:
      "A partial derivative differentiates with respect to one variable while holding the others constant.",

    gradient:
      "∇f is the vector of partial derivatives of f.",

    directionalDerivative:
      "The directional derivative measures the rate of change in a specified direction.",

    divergence:
      "The divergence of a vector field measures net outward flux density.",

    curl:
      "The curl measures local rotational tendency of a vector field.",

    laplacian:
      "The Laplacian is the divergence of the gradient.",

    multipleIntegrals: [
      "Double integrals",
      "Triple integrals",
      "Surface integrals",
      "Line integrals"
    ],

    jacobian:
      "The Jacobian describes how a transformation changes local volume or area."
  },

  // ==========================================================
  // 24. VECTOR MATHEMATICS
  // ==========================================================

  vectors: {
    definition:
      "A vector has both magnitude and direction.",

    representation:
      "v = <v₁,v₂,...,vₙ>",

    magnitude:
      "|v|=√(v₁²+v₂²+...+vₙ²)",

    addition:
      "Vectors are added component by component.",

    scalarMultiplication:
      "Multiplying a vector by a scalar changes its magnitude and possibly direction.",

    dotProduct:
      "a·b=|a||b|cosθ",

    componentDotProduct:
      "a·b=a₁b₁+a₂b₂+...+aₙbₙ",

    crossProduct:
      "For three-dimensional vectors, a×b is perpendicular to both a and b.",

    crossMagnitude:
      "|a×b|=|a||b|sinθ",

    unitVector:
      "A unit vector has magnitude 1.",

    projection:
      "The projection of a onto b is ((a·b)/(b·b))b."
  },

  // ==========================================================
  // 25. MATRICES
  // ==========================================================

  matrices: {
    definition:
      "A matrix is a rectangular array of numbers or other mathematical objects.",

    dimensions:
      "An m×n matrix has m rows and n columns.",

    operations: [
      "Matrix addition",
      "Scalar multiplication",
      "Matrix multiplication",
      "Transpose",
      "Inverse"
    ],

    multiplication:
      "Matrix multiplication is defined when the number of columns in the first matrix equals the number of rows in the second.",

    transpose:
      "The transpose switches rows and columns.",

    determinant2x2:
      "|a b; c d| = ad-bc",

    identityMatrix:
      "The identity matrix acts as the multiplicative identity for compatible matrices.",

    inverse:
      "A square matrix A has an inverse A⁻¹ when det(A)≠0.",

    rank:
      "The rank of a matrix is the dimension of its row space or column space.",

    trace:
      "The trace of a square matrix is the sum of its diagonal entries."
  },

  // ==========================================================
  // 26. LINEAR ALGEBRA
  // ==========================================================

  linearAlgebra: {
    definition:
      "Linear algebra studies vectors, vector spaces, matrices, linear transformations, and systems of linear equations.",

    vectorSpace:
      "A vector space is a set equipped with vector addition and scalar multiplication satisfying specific axioms.",

    basis:
      "A basis is a linearly independent spanning set.",

    dimension:
      "The dimension of a finite-dimensional vector space is the number of vectors in any basis.",

    linearIndependence:
      "Vectors are linearly independent if no vector can be expressed as a linear combination of the others.",

    span:
      "The span of a set is the collection of all linear combinations of those vectors.",

    eigenvalue:
      "λ is an eigenvalue of A if Av=λv for some nonzero vector v.",

    eigenvector:
      "A nonzero vector satisfying Av=λv.",

    characteristicEquation:
      "det(A-λI)=0",

    linearTransformation:
      "A transformation T is linear when T(u+v)=T(u)+T(v) and T(cv)=cT(v).",

    applications: [
      "Computer graphics",
      "Machine learning",
      "Physics",
      "Engineering",
      "Data science",
      "Differential equations",
      "Optimization"
    ]
  },

  // ==========================================================
  // 27. SYSTEMS OF EQUATIONS
  // ==========================================================

  systemsOfEquations: {
    methods: [
      "Substitution",
      "Elimination",
      "Gaussian elimination",
      "Gauss-Jordan elimination",
      "Matrix inversion",
      "Cramer's rule"
    ],

    possibleSolutions: [
      "Exactly one solution",
      "No solution",
      "Infinitely many solutions"
    ],

    gaussianElimination:
      "Gaussian elimination transforms a system into row-echelon form to solve for unknowns.",

    augmentedMatrix:
      "An augmented matrix combines the coefficient matrix with the constants column."
  },

  // ==========================================================
  // 28. COMPLEX NUMBERS
  // ==========================================================

  complexNumbers: {
    definition:
      "A complex number has the form z=a+bi.",

    imaginaryUnit:
      "i²=-1",

    powersOfI: {
      "i^0": "1",
      "i^1": "i",
      "i^2": "-1",
      "i^3": "-i",
      "i^4": "1"
    },

    realPart:
      "Re(z)=a",

    imaginaryPart:
      "Im(z)=b",

    conjugate:
      "The conjugate of a+bi is a-bi.",

    modulus:
      "|z|=√(a²+b²)",

    polarForm:
      "z=r(cosθ+i sinθ)",

    eulerForm:
      "z=re^(iθ)",

    eulersIdentity:
      "e^(iπ)+1=0",

    deMoivre:
      "[r(cosθ+i sinθ)]^n=r^n(cos(nθ)+i sin(nθ))"
  },

  // ==========================================================
  // 29. DIFFERENTIAL EQUATIONS
  // ==========================================================

  differentialEquations: {
    definition:
      "A differential equation relates an unknown function to one or more of its derivatives.",

    classification: [
      "Ordinary differential equation",
      "Partial differential equation",
      "Linear differential equation",
      "Nonlinear differential equation",
      "Homogeneous differential equation",
      "Nonhomogeneous differential equation"
    ],

    order:
      "The order is the highest derivative appearing in the equation.",

    firstOrderMethods: [
      "Separation of variables",
      "Integrating factor",
      "Exact equations",
      "Bernoulli equations",
      "Substitution methods"
    ],

    secondOrder:
      "Second-order equations involve a second derivative.",

    exponentialGrowth:
      "dy/dt=ky has solution y=Ce^(kt).",

    logisticEquation:
      "dy/dt=ry(1-y/K)",

    applications: [
      "Population models",
      "Motion",
      "Heat transfer",
      "Fluid dynamics",
      "Electrical circuits",
      "Chemical reactions",
      "Epidemiology",
      "Economics"
    ]
  },

  // ==========================================================
  // 30. PROBABILITY
  // ==========================================================

  probability: {
    definition:
      "Probability measures the likelihood of events occurring.",

    range:
      "For any event A, 0 ≤ P(A) ≤ 1.",

    complement:
      "P(Aᶜ)=1-P(A)",

    additionRule:
      "P(A∪B)=P(A)+P(B)-P(A∩B)",

    conditionalProbability:
      "P(A|B)=P(A∩B)/P(B), provided P(B)>0.",

    multiplicationRule:
      "P(A∩B)=P(A|B)P(B)",

    independence:
      "Events A and B are independent if P(A∩B)=P(A)P(B).",

    bayesTheorem:
      "P(A|B)=P(B|A)P(A)/P(B)",

    sampleSpace:
      "The sample space contains all possible outcomes.",

    event:
      "An event is a subset of the sample space."
  },

  // ==========================================================
  // 31. RANDOM VARIABLES
  // ==========================================================

  randomVariables: {
    definition:
      "A random variable assigns numerical values to outcomes of a random experiment.",

    discrete:
      "A discrete random variable has a countable set of possible values.",

    continuous:
      "A continuous random variable can take values across an interval or other continuous set.",

    expectedValue:
      "E[X] is the probability-weighted average of possible values.",

    variance:
      "Var(X)=E[(X-E[X])²]",

    standardDeviation:
      "σ=√Var(X)"
  },

  // ==========================================================
  // 32. PROBABILITY DISTRIBUTIONS
  // ==========================================================

  probabilityDistributions: {
    bernoulli:
      "A Bernoulli distribution models one trial with success probability p.",

    binomial:
      "P(X=k)=C(n,k)p^k(1-p)^(n-k)",

    geometric:
      "Models the number of trials until the first success.",

    poisson:
      "P(X=k)=e^(-λ)λ^k/k!",

    uniform:
      "A continuous uniform distribution gives equal density over an interval.",

    normal:
      "The normal distribution has density proportional to exp(-(x-μ)²/(2σ²)).",

    exponential:
      "The exponential distribution models waiting times in certain processes.",

    centralLimitTheorem:
      "Under broad conditions, properly normalized sums or sample means approach a normal distribution as sample size increases."
  },

  // ==========================================================
  // 33. STATISTICS
  // ==========================================================

  statistics: {
    definition:
      "Statistics concerns collecting, organizing, analyzing, interpreting, and presenting data.",

    population:
      "The complete group being studied.",

    sample:
      "A subset of a population.",

    measuresOfCenter: [
      "Mean",
      "Median",
      "Mode"
    ],

    mean:
      "Arithmetic average = sum of observations / number of observations.",

    median:
      "The middle value after sorting the data.",

    mode:
      "The most frequently occurring value.",

    measuresOfSpread: [
      "Range",
      "Variance",
      "Standard deviation",
      "Interquartile range"
    ],

    range:
      "Maximum minus minimum.",

    variance:
      "Average squared deviation from the mean, with sample and population formulas differing in denominator.",

    standardDeviation:
      "Square root of variance.",

    quartiles: [
      "Q1",
      "Q2",
      "Q3"
    ],

    interquartileRange:
      "IQR=Q3-Q1",

    correlation:
      "Correlation measures the strength and direction of linear association between variables.",

    pearsonCorrelation:
      "Pearson's correlation coefficient r ranges from -1 to 1.",

    regression:
      "Regression models relationships between dependent and explanatory variables."
  },

  // ==========================================================
  // 34. HYPOTHESIS TESTING
  // ==========================================================

  hypothesisTesting: {
    nullHypothesis:
      "The null hypothesis is a baseline claim tested against evidence.",

    alternativeHypothesis:
      "The alternative hypothesis represents the claim supported when evidence contradicts the null.",

    pValue:
      "A p-value measures how unusual the observed data or something more extreme would be under the null hypothesis.",

    significanceLevel:
      "α is a chosen threshold for rejecting the null hypothesis.",

    confidenceInterval:
      "A confidence interval is an interval procedure designed to capture a population parameter at a stated long-run confidence level.",

    errors: {
      typeI:
        "Rejecting a true null hypothesis.",
      typeII:
        "Failing to reject a false null hypothesis."
    },

    statisticalPower:
      "Power is the probability of correctly rejecting a false null hypothesis under specified conditions."
  },

  // ==========================================================
  // 35. NUMBER THEORY
  // ==========================================================

  numberTheory: {
    definition:
      "Number theory studies integers and their properties.",

    divisibility:
      "An integer a divides b if there exists an integer k such that b=ak.",

    primeNumber:
      "A prime number greater than 1 has exactly two positive divisors: 1 and itself.",

    compositeNumber:
      "A positive integer greater than 1 that is not prime.",

    fundamentalTheoremOfArithmetic:
      "Every integer greater than 1 has a unique prime factorization apart from ordering.",

    gcd:
      "The greatest common divisor is the largest positive integer dividing two or more integers.",

    lcm:
      "The least common multiple is the smallest positive integer divisible by two or more integers.",

    euclideanAlgorithm:
      "The Euclidean algorithm efficiently computes the greatest common divisor.",

    modularArithmetic:
      "Modular arithmetic studies remainders after division by a modulus.",

    congruence:
      "a ≡ b (mod n) means n divides a-b.",

    fermatLittleTheorem:
      "If p is prime and p does not divide a, then a^(p-1) ≡ 1 (mod p).",

    eulersTheorem:
      "If gcd(a,n)=1, then a^φ(n) ≡ 1 (mod n).",

    chineseRemainderTheorem:
      "The Chinese Remainder Theorem gives conditions under which systems of congruences have simultaneous solutions.",

    primeExamples: [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29
    ]
  },

  // ==========================================================
  // 36. SPECIAL NUMBER SEQUENCES
  // ==========================================================

  numberSequences: {
    fibonacci:
      "F₀=0, F₁=1, Fₙ=Fₙ₋₁+Fₙ₋₂.",

    arithmeticSequence:
      "aₙ=a₁+(n-1)d",

    geometricSequence:
      "aₙ=a₁r^(n-1)",

    arithmeticSeries:
      "Sₙ=n(a₁+aₙ)/2",

    geometricSeries:
      "Sₙ=a₁(1-r^n)/(1-r), r≠1",

    infiniteGeometricSeries:
      "S=a₁/(1-r) when |r|<1.",

    triangularNumbers:
      "Tₙ=n(n+1)/2",

    squareNumbers:
      "1,4,9,16,25,...",

    factorial:
      "n!=n(n-1)(n-2)...1 with 0!=1."
  },

  // ==========================================================
  // 37. SET THEORY
  // ==========================================================

  setTheory: {
    definition:
      "Set theory studies collections of objects called sets.",

    notation: {
      emptySet: "∅",
      membership: "x ∈ A",
      subset: "A ⊆ B",
      properSubset: "A ⊂ B",
      union: "A ∪ B",
      intersection: "A ∩ B",
      difference: "A \\ B",
      complement: "Aᶜ"
    },

    union:
      "A∪B contains elements belonging to A or B.",

    intersection:
      "A∩B contains elements belonging to both A and B.",

    complement:
      "Aᶜ contains elements in the universal set that are not in A.",

    cartesianProduct:
      "A×B is the set of ordered pairs (a,b) with a∈A and b∈B.",

    powerSet:
      "The power set P(A) is the set of all subsets of A.",

    cardinality:
      "Cardinality measures the size of a set.",

    deMorgan: {
      first:
        "(A∪B)ᶜ=Aᶜ∩Bᶜ",
      second:
        "(A∩B)ᶜ=Aᶜ∪Bᶜ"
    }
  },

  // ==========================================================
  // 38. LOGIC
  // ==========================================================

  logic: {
    definition:
      "Mathematical logic studies formal reasoning and relationships among propositions.",

    operators: {
      not: "¬P",
      and: "P∧Q",
      or: "P∨Q",
      implication: "P→Q",
      biconditional: "P↔Q"
    },

    truthValues: [
      "True",
      "False"
    ],

    tautology:
      "A proposition that is true under every interpretation.",

    contradiction:
      "A proposition that is false under every interpretation.",

    implication:
      "P→Q is false only when P is true and Q is false.",

    quantifiers: {
      universal:
        "∀ means for all.",
      existential:
        "∃ means there exists."
    }
  },

  // ==========================================================
  // 39. COMBINATORICS
  // ==========================================================

  combinatorics: {
    definition:
      "Combinatorics studies counting, arrangements, selections, and finite structures.",

    permutation:
      "A permutation is an ordered arrangement.",

    permutationFormula:
      "P(n,r)=n!/(n-r)!",

    combination:
      "A combination is an unordered selection.",

    combinationFormula:
      "C(n,r)=n!/[r!(n-r)!]",

    binomialTheorem:
      "(x+y)^n = Σ C(n,k)x^(n-k)y^k",

    pigeonholePrinciple:
      "If more objects than containers are distributed among the containers, at least one container contains more than one object.",

    inclusionExclusion:
      "|A∪B|=|A|+|B|-|A∩B|"
  },

  // ==========================================================
  // 40. GRAPH THEORY
  // ==========================================================

  graphTheory: {
    definition:
      "Graph theory studies structures consisting of vertices connected by edges.",

    graphComponents: [
      "Vertices",
      "Edges"
    ],

    graphTypes: [
      "Simple graph",
      "Multigraph",
      "Directed graph",
      "Weighted graph",
      "Complete graph",
      "Bipartite graph",
      "Tree"
    ],

    degree:
      "The degree of a vertex is the number of incident edges in an undirected graph.",

    path:
      "A path is a sequence of connected vertices.",

    cycle:
      "A cycle is a closed path.",

    connectedGraph:
      "A graph is connected if every pair of vertices is joined by a path.",

    completeGraph:
      "A complete graph contains an edge between every pair of distinct vertices.",

    tree:
      "A tree is a connected acyclic graph.",

    spanningTree:
      "A spanning tree connects all vertices without cycles.",

    eulerPath:
      "An Euler path uses every edge exactly once.",

    hamiltonianPath:
      "A Hamiltonian path visits every vertex exactly once.",

    applications: [
      "Computer networks",
      "Transportation",
      "Social networks",
      "Scheduling",
      "Routing",
      "Optimization",
      "Computer science"
    ]
  },

  // ==========================================================
  // 41. DISCRETE MATHEMATICS
  // ==========================================================

  discreteMathematics: {
    definition:
      "Discrete mathematics studies mathematical structures that are fundamentally countable or finite.",

    topics: [
      "Logic",
      "Set theory",
      "Combinatorics",
      "Graph theory",
      "Recurrence relations",
      "Algorithms",
      "Number theory",
      "Discrete probability"
    ],

    recurrence:
      "A recurrence relation defines terms of a sequence using earlier terms.",

    induction:
      "Mathematical induction proves statements for all integers in an appropriate domain.",

    strongInduction:
      "Strong induction allows the inductive step to use all earlier cases rather than only the immediately preceding case."
  },

  // ==========================================================
  // 42. ABSTRACT ALGEBRA
  // ==========================================================

  abstractAlgebra: {
    definition:
      "Abstract algebra studies algebraic structures and the operations defined on them.",

    structures: [
      "Group",
      "Subgroup",
      "Ring",
      "Field",
      "Module",
      "Vector space"
    ],

    group:
      "A group is a set with an associative operation, an identity element, and inverses for all elements.",

    abelianGroup:
      "A group is abelian if its operation is commutative.",

    ring:
      "A ring has addition and multiplication satisfying appropriate algebraic axioms.",

    field:
      "A field is a commutative ring in which every nonzero element has a multiplicative inverse.",

    homomorphism:
      "A homomorphism is a structure-preserving map between algebraic structures.",

    isomorphism:
      "An isomorphism is a bijective structure-preserving map with a structure-preserving inverse."
  },

  // ==========================================================
  // 43. REAL ANALYSIS
  // ==========================================================

  realAnalysis: {
    definition:
      "Real analysis rigorously studies real numbers, sequences, limits, continuity, differentiation, integration, and infinite series.",

    sequence:
      "A sequence is an ordered list of terms indexed by integers.",

    convergence:
      "A sequence converges if its terms approach a finite limit.",

    cauchySequence:
      "A sequence is Cauchy if its terms become arbitrarily close to each other.",

    completeness:
      "The real numbers are complete: every Cauchy sequence of real numbers converges to a real number.",

    supremum:
      "The supremum is the least upper bound of a set.",

    infimum:
      "The infimum is the greatest lower bound of a set.",

    compactness:
      "Compactness is a fundamental property with several equivalent characterizations in Euclidean spaces.",

    uniformContinuity:
      "Uniform continuity uses a single input tolerance relationship that works throughout the domain."
  },

  // ==========================================================
  // 44. INFINITE SERIES
  // ==========================================================

  infiniteSeries: {
    definition:
      "An infinite series is the sum of the terms of an infinite sequence.",

    geometric:
      "Σ ar^n converges when |r|<1.",

    pSeries:
      "Σ1/n^p converges exactly when p>1.",

    harmonicSeries:
      "Σ1/n diverges.",

    comparisonTest:
      "Compares a series with another series whose convergence behavior is known.",

    ratioTest:
      "Uses the limit of the ratio of successive absolute terms.",

    rootTest:
      "Uses the nth root of the absolute value of terms.",

    integralTest:
      "Relates convergence of a positive decreasing series to an improper integral.",

    alternatingSeries:
      "An alternating series may converge when terms decrease toward zero.",

    absoluteConvergence:
      "If Σ|aₙ| converges, then Σaₙ converges."
  },

  // ==========================================================
  // 45. TAYLOR AND MACLAURIN SERIES
  // ==========================================================

  taylorSeries: {
    definition:
      "A Taylor series represents a sufficiently differentiable function locally as an infinite polynomial series.",

    formula:
      "f(x)=Σ[f^(n)(a)/n!](x-a)^n",

    maclaurin:
      "A Maclaurin series is a Taylor series centered at a=0.",

    importantSeries: {
      exponential:
        "e^x=Σx^n/n!",
      sine:
        "sin x=x-x³/3!+x⁵/5!-...",
      cosine:
        "cos x=1-x²/2!+x⁴/4!-...",
      geometric:
        "1/(1-x)=1+x+x²+x³+... for |x|<1"
    }
  },

  // ==========================================================
  // 46. TOPOLOGY
  // ==========================================================

  topology: {
    definition:
      "Topology studies properties preserved under continuous deformation.",

    topologicalSpace:
      "A set equipped with a collection of subsets called open sets satisfying topology axioms.",

    openSet:
      "A set considered open according to the topology.",

    closedSet:
      "A set whose complement is open.",

    interior:
      "The largest open set contained within a given set.",

    closure:
      "The smallest closed set containing a given set.",

    boundary:
      "The boundary consists of points where neighborhoods meet both the set and its complement.",

    continuity:
      "A map is continuous when inverse images of open sets are open.",

    homeomorphism:
      "A bijective continuous map with a continuous inverse.",

    connectedness:
      "A space is connected if it cannot be separated into two disjoint nonempty open subsets.",

    compactness:
      "A space is compact if every open cover has a finite subcover."
  },

  // ==========================================================
  // 47. OPTIMIZATION
  // ==========================================================

  optimization: {
    definition:
      "Optimization studies methods for finding maximum or minimum values subject to constraints.",

    unconstrained:
      "Optimization without explicit constraints.",

    constrained:
      "Optimization involving equality or inequality constraints.",

    localMinimum:
      "A point whose function value is no greater than nearby values.",

    localMaximum:
      "A point whose function value is no less than nearby values.",

    gradientDescent:
      "An iterative optimization method that moves opposite the gradient.",

    newtonsMethod:
      "An iterative method for finding roots using tangent-line approximations.",

    lagrangeMultipliers:
      "A method for constrained optimization based on gradients.",

    convexFunction:
      "A function whose line segments lie above or on its graph.",

    linearProgramming:
      "Optimization of a linear objective subject to linear constraints.",

    applications: [
      "Machine learning",
      "Engineering",
      "Economics",
      "Operations research",
      "Logistics",
      "Finance"
    ]
  },

  // ==========================================================
  // 48. NUMERICAL METHODS
  // ==========================================================

  numericalMethods: {
    definition:
      "Numerical mathematics develops algorithms for approximate solutions to mathematical problems.",

    methods: [
      "Bisection method",
      "Newton-Raphson method",
      "Secant method",
      "Euler method",
      "Runge-Kutta methods",
      "Numerical integration",
      "Finite differences",
      "Interpolation",
      "Numerical linear algebra"
    ],

    bisection:
      "Repeatedly halves an interval containing a root.",

    newtonRaphson:
      "x_(n+1)=x_n-f(x_n)/f'(x_n)",

    trapezoidalRule:
      "Approximates an integral by replacing sections of the graph with trapezoids.",

    simpsonRule:
      "Approximates integrals using quadratic polynomial approximations.",

    interpolation:
      "Estimates values between known data points.",

    numericalError: [
      "Round-off error",
      "Truncation error",
      "Discretization error",
      "Approximation error"
    ]
  },

  // ==========================================================
  // 49. MATHEMATICAL MODELING
  // ==========================================================

  mathematicalModeling: {
    definition:
      "Mathematical modeling represents real-world systems using mathematical structures.",

    process: [
      "Define the problem",
      "Identify variables",
      "Make assumptions",
      "Construct the model",
      "Solve or simulate",
      "Validate against observations",
      "Analyze sensitivity",
      "Interpret results"
    ],

    modelTypes: [
      "Deterministic",
      "Stochastic",
      "Discrete",
      "Continuous",
      "Linear",
      "Nonlinear",
      "Static",
      "Dynamic"
    ],

    applications: [
      "Population dynamics",
      "Climate science",
      "Epidemiology",
      "Economics",
      "Engineering",
      "Astronomy",
      "Physics",
      "Ecology",
      "Finance"
    ]
  },

  // ==========================================================
  // 50. MATHEMATICAL PHYSICS
  // ==========================================================

  mathematicalPhysics: {
    definition:
      "Mathematical physics uses mathematical structures and methods to formulate and solve physical problems.",

    topics: [
      "Classical mechanics",
      "Electromagnetism",
      "Quantum mechanics",
      "Relativity",
      "Fluid mechanics",
      "Statistical mechanics",
      "Thermodynamics",
      "Continuum mechanics"
    ],

    commonTools: [
      "Calculus",
      "Differential equations",
      "Linear algebra",
      "Tensor calculus",
      "Complex analysis",
      "Fourier analysis",
      "Probability"
    ]
  },

  // ==========================================================
  // 51. FOURIER ANALYSIS
  // ==========================================================

  fourierAnalysis: {
    definition:
      "Fourier analysis represents functions or signals as combinations of sinusoidal components.",

    fourierSeries:
      "A periodic function can under suitable conditions be represented by a sum of sines and cosines.",

    fourierTransform:
      "The Fourier transform converts a function from a spatial or time representation into a frequency representation.",

    applications: [
      "Signal processing",
      "Audio",
      "Image processing",
      "Communications",
      "Physics",
      "Differential equations"
    ]
  },

  // ==========================================================
  // 52. LAPLACE TRANSFORM
  // ==========================================================

  laplaceTransform: {
    definition:
      "The Laplace transform converts a function of time into a complex-frequency-domain representation.",

    formula:
      "L{f(t)}=∫₀∞e^(-st)f(t)dt",

    applications: [
      "Differential equations",
      "Control systems",
      "Electrical engineering",
      "Signal processing"
    ],

    importantTransforms: {
      one:
        "L{1}=1/s",
      exponential:
        "L{e^(at)}=1/(s-a)",
      derivative:
        "L{f'}=sF(s)-f(0)"
    }
  },

  // ==========================================================
  // 53. TENSOR MATHEMATICS
  // ==========================================================

  tensors: {
    definition:
      "A tensor is a mathematical object that generalizes scalars, vectors, and multilinear maps.",

    scalar:
      "A scalar is a rank-0 tensor.",

    vector:
      "A vector can be treated as a rank-1 tensor.",

    matrix:
      "A matrix can represent a rank-2 tensor under suitable transformations.",

    applications: [
      "General relativity",
      "Continuum mechanics",
      "Fluid mechanics",
      "Machine learning",
      "Differential geometry"
    ]
  },

  // ==========================================================
  // 54. FINANCIAL MATHEMATICS
  // ==========================================================

  financialMathematics: {
    simpleInterest:
      "I=Prt",

    simpleInterestAmount:
      "A=P(1+rt)",

    compoundInterest:
      "A=P(1+r/n)^(nt)",

    continuousCompounding:
      "A=Pe^(rt)",

    presentValue:
      "PV=FV/(1+r)^n",

    annuity:
      "An annuity involves equal payments made at regular intervals.",

    netPresentValue:
      "NPV is the present value of future cash flows minus the initial investment.",

    rateOfReturn:
      "A rate of return measures investment performance relative to an initial amount.",

    risk:
      "Financial mathematics uses probability and statistics to model uncertainty and risk."
  },

  // ==========================================================
  // 55. GAME THEORY
  // ==========================================================

  gameTheory: {
    definition:
      "Game theory mathematically analyzes strategic interactions among decision-makers.",

    players:
      "Participants making decisions.",

    strategy:
      "A strategy specifies how a player acts in possible situations.",

    payoff:
      "A payoff represents the outcome or utility associated with a combination of strategies.",

    dominantStrategy:
      "A strategy that gives at least as good an outcome as alternatives regardless of opponents' choices.",

    nashEquilibrium:
      "A strategy profile where no player can improve their payoff by unilaterally changing strategy.",

    zeroSumGame:
      "One player's gain equals another player's loss.",

    applications: [
      "Economics",
      "Political science",
      "Biology",
      "Computer science",
      "Negotiation",
      "Military strategy"
    ]
  },

  // ==========================================================
  // 56. CHAOS AND DYNAMICAL SYSTEMS
  // ==========================================================

  dynamicalSystems: {
    definition:
      "Dynamical systems study how states evolve over time according to mathematical rules.",

    discreteSystem:
      "A system evolving in discrete time steps.",

    continuousSystem:
      "A system evolving continuously in time.",

    equilibrium:
      "A state that remains unchanged under the system dynamics.",

    stability:
      "Stability describes how system behavior responds to small perturbations.",

    chaos:
      "Chaotic systems can exhibit deterministic but highly sensitive and complex behavior.",

    butterflyEffect:
      "Small differences in initial conditions can produce large differences in later states.",

    logisticMap:
      "x_(n+1)=r x_n(1-x_n)"
  },

  // ==========================================================
  // 57. FRACTALS
  // ==========================================================

  fractals: {
    definition:
      "A fractal is a mathematical structure that often exhibits self-similarity across scales.",

    examples: [
      "Mandelbrot set",
      "Julia sets",
      "Sierpinski triangle",
      "Koch snowflake",
      "Cantor set"
    ],

    fractalDimension:
      "Fractal dimension can quantify scaling complexity and need not be an integer.",

    applications: [
      "Computer graphics",
      "Geology",
      "Biology",
      "Signal analysis",
      "Modeling natural patterns"
    ]
  },

  // ==========================================================
  // 58. INFORMATION THEORY
  // ==========================================================

  informationTheory: {
    definition:
      "Information theory mathematically studies information, uncertainty, communication, and data compression.",

    entropy:
      "For a discrete random variable, H(X)=-Σp(x)log₂p(x).",

    information:
      "The information content of an event with probability p is often measured as -log₂p.",

    mutualInformation:
      "Mutual information measures statistical dependence between variables.",

    applications: [
      "Data compression",
      "Cryptography",
      "Communication",
      "Machine learning",
      "Statistics"
    ]
  },

  // ==========================================================
  // 59. CRYPTOGRAPHIC MATHEMATICS
  // ==========================================================

  cryptographyMathematics: {
    definition:
      "Cryptography uses mathematical structures to protect information.",

    foundations: [
      "Prime numbers",
      "Modular arithmetic",
      "Finite fields",
      "Probability",
      "Number theory",
      "Algebra"
    ],

    publicKeyCryptography:
      "Public-key systems use mathematical problems that are easy to perform in one direction but difficult to reverse without special information.",

    modularExponentiation:
      "Efficient computation of powers modulo an integer is fundamental to many cryptographic systems.",

    finiteFields:
      "Finite fields are algebraic structures with finitely many elements and field operations."
  },

  // ==========================================================
  // 60. FINITE MATHEMATICS
  // ==========================================================

  finiteMathematics: {
    topics: [
      "Finite sets",
      "Counting",
      "Finite probability",
      "Matrices",
      "Linear programming",
      "Graph theory",
      "Recurrence relations"
    ],

    applications: [
      "Business",
      "Computer science",
      "Operations research",
      "Decision making"
    ]
  },

  // ==========================================================
  // 61. MEASURE THEORY
  // ==========================================================

  measureTheory: {
    definition:
      "Measure theory provides a rigorous framework for assigning sizes to sets and integrating functions.",

    measure:
      "A measure assigns nonnegative sizes to measurable sets while satisfying countable additivity.",

    measurableSet:
      "A set belonging to the sigma-algebra on which a measure is defined.",

    lebesgueIntegral:
      "The Lebesgue integral generalizes integration using measure-theoretic ideas.",

    applications: [
      "Probability theory",
      "Real analysis",
      "Functional analysis",
      "Partial differential equations"
    ]
  },

  // ==========================================================
  // 62. FUNCTIONAL ANALYSIS
  // ==========================================================

  functionalAnalysis: {
    definition:
      "Functional analysis studies infinite-dimensional vector spaces and spaces of functions.",

    topics: [
      "Banach spaces",
      "Hilbert spaces",
      "Bounded operators",
      "Linear functionals",
      "Inner-product spaces"
    ],

    banachSpace:
      "A complete normed vector space.",

    hilbertSpace:
      "A complete inner-product space.",

    applications: [
      "Quantum mechanics",
      "Partial differential equations",
      "Signal processing",
      "Optimization"
    ]
  },

  // ==========================================================
  // 63. DIFFERENTIAL GEOMETRY
  // ==========================================================

  differentialGeometry: {
    definition:
      "Differential geometry applies calculus and linear algebra to study curves, surfaces, and manifolds.",

    topics: [
      "Curves",
      "Surfaces",
      "Manifolds",
      "Tangent spaces",
      "Metrics",
      "Curvature",
      "Geodesics",
      "Differential forms"
    ],

    manifold:
      "A manifold is a space that locally resembles Euclidean space.",

    tangentSpace:
      "The tangent space describes possible infinitesimal directions at a point.",

    curvature:
      "Curvature measures how a geometric object deviates from being flat."
  },

  // ==========================================================
  // 64. ORDINARY GEOMETRY FORMULAS
  // ==========================================================

  geometryFormulas: {
    rectangle: {
      area: "A=lw",
      perimeter: "P=2(l+w)"
    },

    square: {
      area: "A=a²",
      perimeter: "P=4a",
      diagonal: "d=a√2"
    },

    parallelogram: {
      area: "A=bh"
    },

    trapezoid: {
      area: "A=(1/2)(a+b)h"
    },

    rhombus: {
      area: "A=(1/2)d₁d₂"
    },

    ellipse: {
      area: "A=πab"
    }
  },

  // ==========================================================
  // 65. COMMON CONSTANTS
  // ==========================================================

  mathematicalConstants: {
    pi: {
      symbol: "π",
      approximate: 3.141592653589793,
      meaning:
        "Ratio of circumference to diameter of a circle."
    },

    e: {
      symbol: "e",
      approximate: 2.718281828459045,
      meaning:
        "Base of the natural logarithm."
    },

    goldenRatio: {
      symbol: "φ",
      approximate: 1.618033988749895,
      formula:
        "(1+√5)/2"
    },

    squareRootTwo: {
      symbol: "√2",
      approximate: 1.4142135623730951
    },

    aperysConstant: {
      symbol: "ζ(3)",
      approximate: 1.202056903159594
    },

    imaginaryUnit: {
      symbol: "i",
      property: "i²=-1"
    }
  },

  // ==========================================================
  // 66. COMMON SYMBOLS
  // ==========================================================

  symbols: {
    equal: "=",
    notEqual: "≠",
    approximately: "≈",
    lessThan: "<",
    greaterThan: ">",
    lessOrEqual: "≤",
    greaterOrEqual: "≥",
    plusMinus: "±",
    infinity: "∞",
    summation: "Σ",
    product: "Π",
    integral: "∫",
    partialDerivative: "∂",
    gradient: "∇",
    belongsTo: "∈",
    subset: "⊆",
    union: "∪",
    intersection: "∩",
    therefore: "∴",
    proportional: "∝",
    angle: "∠",
    degree: "°",
    pi: "π",
    theta: "θ",
    lambda: "λ",
    sigma: "σ",
    mu: "μ",
    delta: "Δ",
    alpha: "α",
    beta: "β",
    gamma: "γ",
    phi: "φ",
    omega: "ω"
  },

  // ==========================================================
  // 67. MATHEMATICAL VOCABULARY
  // ==========================================================

  vocabulary: {
    absoluteValue:
      "The distance of a number from zero.",

    magnitude:
      "A numerical measure of size, often used for vectors or complex numbers.",

    scalar:
      "A quantity described by a single number.",

    vector:
      "A quantity with magnitude and direction.",

    coefficient:
      "A factor multiplying a variable or expression.",

    variable:
      "A symbol representing a potentially changing or unknown quantity.",

    function:
      "A mapping assigning exactly one output to each input in its domain.",

    derivative:
      "Instantaneous rate of change.",

    integral:
      "An accumulation or antiderivative.",

    limit:
      "The value a quantity approaches.",

    matrix:
      "A rectangular array of values.",

    determinant:
      "A scalar associated with a square matrix with many algebraic and geometric interpretations.",

    eigenvalue:
      "A scalar describing how a linear transformation scales a corresponding eigenvector.",

    probability:
      "A measure of uncertainty or likelihood.",

    statistic:
      "A quantity computed from sample data.",

    parameter:
      "A quantity that characterizes a mathematical model but is treated as fixed within a problem.",

    algorithm:
      "A finite, systematic procedure for solving a problem."
  },

  // ==========================================================
  // 68. MATHEMATICAL PROBLEM-SOLVING
  // ==========================================================

  problemSolving: {
    generalStrategy: [
      "Understand the problem",
      "Identify known quantities",
      "Identify unknown quantities",
      "Choose appropriate definitions or formulas",
      "Set up equations",
      "Solve systematically",
      "Check the result",
      "Interpret the answer"
    ],

    checkingMethods: [
      "Substitute the result back into the original equation",
      "Estimate the expected magnitude",
      "Check units",
      "Check signs",
      "Check domain restrictions",
      "Test special cases",
      "Use an alternative method"
    ],

    commonMistakes: [
      "Incorrect order of operations",
      "Sign errors",
      "Dividing by zero",
      "Ignoring domain restrictions",
      "Incorrect exponent rules",
      "Confusing area and perimeter",
      "Using degrees instead of radians in calculus",
      "Rounding too early",
      "Misinterpreting probability",
      "Assuming correlation implies causation"
    ]
  },

  // ==========================================================
  // 69. MATHEMATICAL APPROXIMATION
  // ==========================================================

  approximation: {
    rounding:
      "Replacing a number with a nearby value at a specified precision.",

    significantFigures:
      "Digits that meaningfully represent the precision of a measurement.",

    absoluteError:
      "Absolute error = |approximate value - exact value|.",

    relativeError:
      "Relative error = absolute error / |exact value| when the exact value is nonzero.",

    percentageError:
      "Percentage error = relative error × 100%."
  },

  // ==========================================================
  // 70. DIMENSIONAL ANALYSIS
  // ==========================================================

  dimensionalAnalysis: {
    definition:
      "Dimensional analysis checks mathematical and physical equations using dimensions and units.",

    principle:
      "Terms added or equated in a physically meaningful equation must have compatible dimensions.",

    applications: [
      "Physics",
      "Engineering",
      "Chemistry",
      "Scientific modeling",
      "Error checking"
    ]
  },

  // ==========================================================
  // 71. MATHEMATICAL RELATIONSHIPS
  // ==========================================================

  relationships: {
    proportional:
      "y∝x means y=kx for some constant k.",

    inverselyProportional:
      "y∝1/x means y=k/x.",

    directlyProportional:
      "Two quantities are directly proportional when their ratio remains constant.",

    inverseRelationship:
      "One quantity changes inversely with another when their product remains constant."
  },

  // ==========================================================
  // 72. COMMON FORMULAS
  // ==========================================================

  commonFormulas: {
    slope:
      "(y₂-y₁)/(x₂-x₁)",

    distance:
      "√((x₂-x₁)²+(y₂-y₁)²)",

    midpoint:
      "((x₁+x₂)/2,(y₁+y₂)/2)",

    quadratic:
      "(-b±√(b²-4ac))/(2a)",

    circleArea:
      "πr²",

    circleCircumference:
      "2πr",

    triangleArea:
      "bh/2",

    sphereVolume:
      "4πr³/3",

    cylinderVolume:
      "πr²h",

    coneVolume:
      "πr²h/3",

    pythagorean:
      "a²+b²=c²",

    compoundInterest:
      "P(1+r/n)^(nt)",

    probabilityComplement:
      "1-P(A)",

    combinations:
      "n!/[r!(n-r)!]",

    permutations:
      "n!/(n-r)!",

    arithmeticMean:
      "Σx/n",

    variance:
      "E[(X-μ)²]"
  },

  // ==========================================================
  // 73. MATH APPLICATIONS
  // ==========================================================

  applications: {
    physics: [
      "Motion",
      "Forces",
      "Energy",
      "Fields",
      "Waves",
      "Quantum mechanics",
      "Relativity"
    ],

    engineering: [
      "Structural analysis",
      "Control systems",
      "Signal processing",
      "Optimization",
      "Fluid mechanics"
    ],

    computerScience: [
      "Algorithms",
      "Cryptography",
      "Machine learning",
      "Computer graphics",
      "Data structures",
      "Complexity theory"
    ],

    economics: [
      "Optimization",
      "Statistics",
      "Econometrics",
      "Game theory",
      "Financial modeling"
    ],

    biology: [
      "Population models",
      "Genetics",
      "Epidemiology",
      "Ecology",
      "Biostatistics"
    ],

    astronomy: [
      "Orbital mechanics",
      "Cosmology",
      "Statistical analysis",
      "Numerical simulation"
    ],

    medicine: [
      "Medical statistics",
      "Imaging",
      "Epidemiology",
      "Pharmacokinetics",
      "Risk analysis"
    ]
  },

  // ==========================================================
  // 74. EDUCATIONAL LEVELS
  // ==========================================================

  educationLevels: {
    elementary: [
      "Counting",
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Fractions",
      "Decimals",
      "Basic geometry",
      "Basic measurement"
    ],

    middleSchool: [
      "Integers",
      "Ratios",
      "Percentages",
      "Proportions",
      "Expressions",
      "Linear equations",
      "Geometry",
      "Probability"
    ],

    highSchool: [
      "Algebra",
      "Quadratics",
      "Functions",
      "Trigonometry",
      "Analytic geometry",
      "Precalculus",
      "Statistics",
      "Introductory calculus"
    ],

    university: [
      "Calculus",
      "Linear algebra",
      "Differential equations",
      "Real analysis",
      "Abstract algebra",
      "Probability",
      "Statistics",
      "Numerical analysis",
      "Topology",
      "Complex analysis"
    ]
  },

  // ==========================================================
  // 75. MATHEMATICAL REASONING RULES
  // ==========================================================

  reasoningRules: {
    equality:
      "If a=b, then the same operation applied appropriately to both sides preserves equality.",

    transitivity:
      "If a=b and b=c, then a=c.",

    substitution:
      "Equal quantities may be substituted for one another in valid mathematical expressions.",

    zeroDivision:
      "Division by zero is undefined in ordinary arithmetic.",

    squareRootWarning:
      "For real x, √(x²)=|x| rather than always x.",

    logarithmWarning:
      "Real logarithms require positive arguments.",

    denominatorWarning:
      "Any denominator in a rational expression must be nonzero.",

    squareEquationWarning:
      "Squaring both sides can introduce extraneous solutions.",

    inverseFunctionWarning:
      "A function must satisfy appropriate conditions, such as being one-to-one on its domain, to possess a function inverse."
  },

  // ==========================================================
  // 76. QUICK REFERENCE
  // ==========================================================

  quickReference: {
    arithmetic:
      "Numbers and basic operations.",

    algebra:
      "Variables, expressions, equations, and functions.",

    geometry:
      "Shapes, sizes, distances, and spatial relationships.",

    trigonometry:
      "Angles and relationships among sides of triangles and periodic functions.",

    calculus:
      "Limits, derivatives, integrals, and continuous change.",

    linearAlgebra:
      "Vectors, matrices, transformations, and vector spaces.",

    probability:
      "Mathematical treatment of uncertainty.",

    statistics:
      "Analysis and interpretation of data.",

    numberTheory:
      "Properties of integers and prime numbers.",

    discreteMath:
      "Finite and countable mathematical structures.",

    topology:
      "Properties preserved under continuous deformation.",

    analysis:
      "Rigorous study of limits, functions, sequences, and continuity."
  },

  // ==========================================================
  // 77. RESPONSE GUIDANCE FOR REZE
  // ==========================================================

  responseGuidance: {
    basicQuestions:
      "For simple mathematics questions, give the answer clearly and show the essential steps.",

    difficultQuestions:
      "For advanced problems, identify definitions, assumptions, formulas, derivations, and intermediate results.",

    equations:
      "When solving equations, preserve mathematical equivalence and check candidate solutions.",

    wordProblems:
      "Translate the verbal problem into variables and equations before calculating.",

    proofs:
      "Use logically connected steps and explicitly state important assumptions.",

    ambiguity:
      "If a mathematical question is ambiguous, identify the possible interpretations rather than silently assuming one.",

    units:
      "Track units when quantities represent physical measurements.",

    approximation:
      "State when a numerical answer is approximate.",

    calculator:
      "For calculations involving many digits, avoid unnecessary intermediate rounding.",

    teaching:
      "Explain concepts from intuitive ideas to formal definitions when the user asks for an explanation.",

    advancedMath:
      "Use appropriate mathematical notation while explaining unfamiliar symbols."
  }
};

// ============================================================
// DEFAULT EXPORT
// ============================================================

export default MATHEMATICS_KNOWLEDGE;
