// lib/knowledge/science/computerScience.js

// ============================================================
// COMPUTER SCIENCE KNOWLEDGE BASE
// ============================================================
// A broad structured knowledge base covering:
//
// • Foundations of Computer Science
// • Algorithms
// • Data Structures
// • Programming
// • Software Engineering
// • Operating Systems
// • Computer Architecture
// • Networks
// • Databases
// • Distributed Systems
// • Cybersecurity
// • Cryptography
// • Artificial Intelligence
// • Machine Learning
// • Computer Graphics
// • Computer Vision
// • Natural Language Processing
// • Web Development
// • Mobile Development
// • Cloud Computing
// • DevOps
// • Compilers
// • Programming Languages
// • Human-Computer Interaction
// • Information Theory
// • Parallel Computing
// • Quantum Computing
// • Embedded Systems
// • Robotics
// • Computer Science History
// • Complexity Theory
// • Formal Methods
// • Software Testing
// • Version Control
// • Modern Computing Concepts
//
// This file is intentionally extensive so Reze can answer
// foundational computer-science questions without requiring
// internet access for basic educational knowledge.
// ============================================================

export const COMPUTER_SCIENCE_KNOWLEDGE = {
  subject: "Computer Science",

  description:
    "Computer science is the study of computation, information, algorithms, software, hardware, programming, data, artificial intelligence, communication systems, and the theoretical foundations of computing.",

  aliases: [
    "computer science",
    "cs",
    "computing",
    "computer technology",
    "computational science",
    "software engineering",
    "computer engineering"
  ],

  // ==========================================================
  // 1. FOUNDATIONS
  // ==========================================================

  foundations: {
    title: "Foundations of Computer Science",

    definition:
      "Computer science is a scientific and engineering discipline concerned with computation, algorithms, information processing, computer systems, and the design and analysis of software and hardware.",

    computation:
      "Computation is the process of transforming input information into output according to a defined set of rules or instructions.",

    algorithm:
      "An algorithm is a finite, well-defined sequence of steps for solving a problem or performing a computation.",

    program:
      "A program is a set of instructions written in a programming language that directs a computer to perform tasks.",

    software:
      "Software consists of programs, libraries, configuration, data, and related digital instructions used by computing systems.",

    hardware:
      "Hardware refers to the physical components of a computing system, such as processors, memory, storage devices, motherboards, sensors, and displays.",

    data:
      "Data is information represented in a form that can be stored, processed, transmitted, or interpreted by a computer.",

    information:
      "Information is meaningful data interpreted within a context.",

    abstraction:
      "Abstraction hides unnecessary implementation details while exposing the important properties of a system.",

    decomposition:
      "Decomposition divides a complex problem into smaller, more manageable problems.",

    modularity:
      "Modularity organizes a system into relatively independent components with defined interfaces.",

    automation:
      "Automation uses computing systems to perform tasks with reduced human intervention.",

    determinism:
      "A deterministic process produces the same result when given the same initial state and inputs.",

    state:
      "State is the information describing the current condition of a system.",

    input:
      "Input is information supplied to a computing system.",

    output:
      "Output is information produced by a computing system.",

    process:
      "A process is an active execution instance of a program in an operating-system environment.",

    computation_models: [
      "Turing machines",
      "finite automata",
      "pushdown automata",
      "lambda calculus",
      "register machines",
      "Boolean circuits",
      "cellular automata"
    ]
  },

  // ==========================================================
  // 2. INFORMATION REPRESENTATION
  // ==========================================================

  informationRepresentation: {
    title: "Information Representation",

    binary:
      "Binary is a number system using two symbols, conventionally 0 and 1. Digital computers commonly represent information using binary states.",

    bit:
      "A bit is the smallest conventional unit of digital information and can represent either 0 or 1.",

    byte:
      "A byte traditionally consists of eight bits.",

    nibble:
      "A nibble consists of four bits.",

    word:
      "A machine word is a processor-dependent group of bits commonly used as a unit of data processing.",

    hexadecimal:
      "Hexadecimal is a base-16 number system using digits 0-9 and letters A-F.",

    octal:
      "Octal is a base-8 number system.",

    decimal:
      "Decimal is the familiar base-10 number system.",

    ascii:
      "ASCII is a character encoding standard originally designed to represent text using 7-bit codes.",

    unicode:
      "Unicode is a universal character system designed to represent characters and symbols from many writing systems.",

    utf8:
      "UTF-8 is a variable-length Unicode encoding widely used for text on the web.",

    utf16:
      "UTF-16 is a Unicode encoding using one or two 16-bit code units for characters.",

    signedInteger:
      "Signed integers represent both positive and negative whole numbers. Two's complement is widely used for signed binary integers.",

    twosComplement:
      "Two's complement represents signed integers by using the most significant bit as part of the signed representation and allows efficient binary arithmetic.",

    floatingPoint:
      "Floating-point representation approximates real numbers using a sign, exponent, and significand according to standards such as IEEE 754.",

    boolean:
      "Boolean values represent logical states, usually true and false.",

    dataRepresentation: [
      "integers",
      "floating-point numbers",
      "characters",
      "strings",
      "Boolean values",
      "arrays",
      "objects",
      "records",
      "images",
      "audio",
      "video",
      "compressed data"
    ]
  },

  // ==========================================================
  // 3. LOGIC
  // ==========================================================

  logic: {
    title: "Logic and Boolean Algebra",

    booleanAlgebra:
      "Boolean algebra is a mathematical system for manipulating logical values and operations.",

    and:
      "The AND operation is true only when all required inputs are true.",

    or:
      "The OR operation is true when at least one input is true.",

    not:
      "The NOT operation reverses a Boolean value.",

    xor:
      "Exclusive OR is true when exactly one of its two inputs is true.",

    nand:
      "NAND is the negation of AND.",

    nor:
      "NOR is the negation of OR.",

    implication:
      "Logical implication expresses that one proposition follows from another.",

    truthTable:
      "A truth table lists the output of a logical expression for every relevant combination of inputs.",

    booleanCircuit:
      "A Boolean circuit is a network of logic gates implementing Boolean functions.",

    deMorganLaws: [
      "NOT(A AND B) = (NOT A) OR (NOT B)",
      "NOT(A OR B) = (NOT A) AND (NOT B)"
    ],

    logicGates: [
      "AND",
      "OR",
      "NOT",
      "XOR",
      "NAND",
      "NOR",
      "XNOR",
      "buffer"
    ]
  },

  // ==========================================================
  // 4. DATA STRUCTURES
  // ==========================================================

  dataStructures: {
    title: "Data Structures",

    definition:
      "A data structure is a method of organizing and storing data so that operations can be performed efficiently.",

    array:
      "An array stores elements in an ordered collection, commonly using contiguous memory for efficient indexed access.",

    dynamicArray:
      "A dynamic array automatically resizes when its capacity is exceeded.",

    linkedList:
      "A linked list consists of nodes connected through references or pointers.",

    singlyLinkedList:
      "A singly linked list gives each node a reference to the next node.",

    doublyLinkedList:
      "A doubly linked list gives each node references to both the next and previous nodes.",

    circularLinkedList:
      "A circular linked list connects its final node back to another node, commonly the first node.",

    stack:
      "A stack follows the Last-In-First-Out principle. Common operations are push and pop.",

    queue:
      "A queue generally follows the First-In-First-Out principle.",

    deque:
      "A deque, or double-ended queue, supports insertion and removal at both ends.",

    priorityQueue:
      "A priority queue removes elements according to priority rather than simple insertion order.",

    hashTable:
      "A hash table stores key-value associations using a hash function to determine storage locations.",

    set:
      "A set stores unique elements according to a defined equality relationship.",

    map:
      "A map associates keys with values.",

    tree:
      "A tree is a hierarchical data structure consisting of nodes connected by edges.",

    binaryTree:
      "A binary tree is a tree in which each node has at most two children.",

    binarySearchTree:
      "A binary search tree maintains an ordering that can support efficient search when appropriately balanced.",

    avlTree:
      "An AVL tree is a self-balancing binary search tree maintaining height balance.",

    redBlackTree:
      "A red-black tree is a self-balancing binary search tree using node colors to constrain tree height.",

    heap:
      "A heap is a specialized tree-based structure satisfying a heap-order property.",

    minHeap:
      "A min-heap keeps the smallest element at the root.",

    maxHeap:
      "A max-heap keeps the largest element at the root.",

    trie:
      "A trie is a tree-like structure optimized for storing and searching strings by prefixes.",

    graph:
      "A graph consists of vertices and edges representing relationships.",

    directedGraph:
      "A directed graph has edges with a specified direction.",

    undirectedGraph:
      "An undirected graph has edges without direction.",

    weightedGraph:
      "A weighted graph assigns numerical weights to edges.",

    adjacencyMatrix:
      "An adjacency matrix represents graph connections using a matrix.",

    adjacencyList:
      "An adjacency list represents each vertex using a collection of neighboring vertices.",

    disjointSet:
      "A disjoint-set or union-find structure maintains collections of non-overlapping sets and supports union and find operations.",

    bloomFilter:
      "A Bloom filter is a probabilistic data structure used to test whether an element may belong to a set.",

    bTree:
      "A B-tree is a balanced multiway search tree commonly used in database and filesystem storage.",

    bPlusTree:
      "A B+ tree is a variant of B-tree in which records or record pointers are typically stored at leaf nodes.",

    skipList:
      "A skip list is a probabilistic layered linked structure supporting efficient expected search and update operations."
  },

  // ==========================================================
  // 5. ALGORITHMS
  // ==========================================================

  algorithms: {
    title: "Algorithms",

    definition:
      "An algorithm is a finite procedure for transforming inputs into desired outputs.",

    algorithmProperties: [
      "defined input",
      "defined output",
      "definiteness",
      "finiteness",
      "effectiveness",
      "correctness"
    ],

    linearSearch:
      "Linear search examines elements sequentially until the target is found or the collection ends.",

    binarySearch:
      "Binary search repeatedly divides a sorted search interval approximately in half.",

    bubbleSort:
      "Bubble sort repeatedly swaps adjacent elements that are out of order.",

    selectionSort:
      "Selection sort repeatedly selects the smallest remaining element and places it in its correct position.",

    insertionSort:
      "Insertion sort builds a sorted section by inserting each new element into its appropriate location.",

    mergeSort:
      "Merge sort divides a collection into smaller portions, recursively sorts them, and merges the sorted portions.",

    quickSort:
      "QuickSort partitions data around a pivot and recursively sorts the resulting partitions.",

    heapSort:
      "Heap sort uses a heap structure to repeatedly extract elements in sorted order.",

    countingSort:
      "Counting sort uses counts of discrete integer values and can be efficient when the value range is limited.",

    radixSort:
      "Radix sort processes digits or symbols position by position.",

    bucketSort:
      "Bucket sort distributes values into buckets and sorts each bucket.",

    breadthFirstSearch:
      "Breadth-first search explores a graph level by level, commonly using a queue.",

    depthFirstSearch:
      "Depth-first search explores as far as possible along a path before backtracking.",

    dijkstra:
      "Dijkstra's algorithm computes shortest paths from a source in graphs with non-negative edge weights.",

    bellmanFord:
      "Bellman-Ford computes shortest paths and can handle negative edge weights, while also detecting reachable negative cycles.",

    floydWarshall:
      "Floyd-Warshall computes shortest paths between all pairs of vertices.",

    aStar:
      "A* is a pathfinding algorithm that combines path cost with a heuristic estimate of remaining cost.",

    topologicalSort:
      "Topological sorting produces an ordering of vertices in a directed acyclic graph such that each directed edge points forward in the ordering.",

    kruskal:
      "Kruskal's algorithm constructs a minimum spanning tree by selecting edges in increasing weight order while avoiding cycles.",

    prim:
      "Prim's algorithm grows a minimum spanning tree by repeatedly adding the least-weight edge connecting the current tree to an outside vertex.",

    dynamicProgramming:
      "Dynamic programming solves problems by combining solutions to overlapping subproblems and storing intermediate results.",

    greedyAlgorithm:
      "A greedy algorithm makes locally optimal choices with the expectation that they lead to a globally optimal solution.",

    divideAndConquer:
      "Divide-and-conquer algorithms divide a problem into smaller subproblems, solve them, and combine their results.",

    backtracking:
      "Backtracking incrementally constructs solutions and abandons partial solutions when they cannot lead to valid results.",

    recursion:
      "Recursion occurs when a function solves a problem by calling itself on smaller instances.",

    memoization:
      "Memoization stores results of expensive function calls so repeated subproblems can be answered quickly.",

    dynamicProgrammingExamples: [
      "Fibonacci sequence",
      "knapsack problem",
      "longest common subsequence",
      "edit distance",
      "matrix-chain multiplication",
      "coin change"
    ],

    graphAlgorithms: [
      "BFS",
      "DFS",
      "Dijkstra",
      "Bellman-Ford",
      "Floyd-Warshall",
      "A*",
      "Kruskal",
      "Prim",
      "topological sorting"
    ]
  },

  // ==========================================================
  // 6. COMPLEXITY
  // ==========================================================

  complexity: {
    title: "Algorithmic Complexity",

    definition:
      "Computational complexity studies the resources required by algorithms, especially time and memory.",

    bigO:
      "Big O notation describes an asymptotic upper bound on growth, commonly used to express algorithmic complexity.",

    bigOmega:
      "Big Omega describes an asymptotic lower bound.",

    bigTheta:
      "Big Theta describes a tight asymptotic bound when upper and lower bounds have the same order.",

    constantTime:
      "O(1) means the operation's resource usage is bounded independently of input size.",

    logarithmicTime:
      "O(log n) grows logarithmically with input size.",

    linearTime:
      "O(n) grows proportionally to input size.",

    linearithmicTime:
      "O(n log n) commonly appears in efficient comparison sorting algorithms.",

    quadraticTime:
      "O(n²) grows approximately with the square of input size.",

    cubicTime:
      "O(n³) grows approximately with the cube of input size.",

    exponentialTime:
      "O(2ⁿ) grows exponentially and can become impractical quickly.",

    factorialTime:
      "O(n!) grows extremely rapidly and occurs in some brute-force combinatorial algorithms.",

    commonComplexities: [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)",
      "O(n²)",
      "O(n³)",
      "O(2ⁿ)",
      "O(n!)"
    ],

    spaceComplexity:
      "Space complexity measures the amount of memory an algorithm requires as a function of input size.",

    amortizedAnalysis:
      "Amortized analysis studies average cost over a sequence of operations rather than analyzing each operation independently.",

    worstCase:
      "Worst-case complexity describes the maximum resource usage over inputs of a given size.",

    averageCase:
      "Average-case complexity estimates expected resource usage under an assumed input distribution.",

    bestCase:
      "Best-case complexity describes minimum resource usage over inputs of a given size."
  },

  // ==========================================================
  // 7. PROGRAMMING
  // ==========================================================

  programming: {
    title: "Programming",

    definition:
      "Programming is the process of designing and writing instructions that computers can execute.",

    variable:
      "A variable is a named storage location or logical binding whose associated value can change during program execution.",

    constant:
      "A constant represents a value that is intended not to change during a particular computation or scope.",

    function:
      "A function is a reusable block or abstraction of computation that can accept inputs and produce outputs.",

    parameter:
      "A parameter is a variable defined by a function or procedure to receive an argument.",

    argument:
      "An argument is a value supplied to a function when it is called.",

    conditional:
      "A conditional executes different code depending on whether a logical condition is satisfied.",

    loop:
      "A loop repeatedly executes instructions while a specified condition or iteration rule applies.",

    recursion:
      "Recursion is a programming technique in which a function calls itself directly or indirectly.",

    exception:
      "An exception represents an unusual or erroneous condition that interrupts normal program execution and can often be handled explicitly.",

    type:
      "A data type defines the kinds of values that can be represented and the operations that are valid for those values.",

    staticTyping:
      "Static typing checks type relationships primarily during compilation or other pre-execution analysis.",

    dynamicTyping:
      "Dynamic typing performs important type checks during program execution.",

    strongTyping:
      "Strong typing generally restricts or carefully defines implicit conversions between incompatible types.",

    weakTyping:
      "Weak typing permits more implicit conversions or less restrictive type interactions.",

    compiledLanguage:
      "A compiled language is translated into lower-level representation before execution, often by a compiler.",

    interpretedLanguage:
      "An interpreted language is commonly executed through an interpreter or runtime system, although modern systems often combine interpretation and compilation.",

    scripting:
      "Scripting commonly refers to programs used to automate tasks, coordinate systems, or provide application behavior.",

    sourceCode:
      "Source code is human-readable program text written in a programming language.",

    machineCode:
      "Machine code is processor-specific instruction encoding that a CPU can execute directly.",

    assembly:
      "Assembly language provides symbolic representations of processor instructions.",

    pseudocode:
      "Pseudocode describes algorithms using human-readable structured notation without requiring a specific programming language.",

    debugging:
      "Debugging is the process of finding, understanding, and correcting defects in software.",

    refactoring:
      "Refactoring changes software's internal structure without intentionally changing its externally observable behavior.",

    documentation:
      "Documentation explains how software works, how it should be used, and how it can be maintained."
  },

  // ==========================================================
  // 8. PROGRAMMING PARADIGMS
  // ==========================================================

  programmingParadigms: {
    title: "Programming Paradigms",

    procedural:
      "Procedural programming organizes computation around procedures or functions and explicit sequences of operations.",

    objectOriented:
      "Object-oriented programming organizes software around objects that combine state and behavior.",

    functional:
      "Functional programming emphasizes functions, expressions, immutability, and mathematical-style composition.",

    declarative:
      "Declarative programming describes what result or relationship is desired rather than explicitly specifying every execution step.",

    imperative:
      "Imperative programming describes how a computation should proceed through commands that change program state.",

    logicProgramming:
      "Logic programming represents facts and rules and uses logical inference to derive results.",

    eventDriven:
      "Event-driven programming organizes behavior around events such as user interactions, messages, timers, or system notifications.",

    concurrent:
      "Concurrent programming structures a program so multiple activities can make progress during overlapping periods.",

    genericProgramming:
      "Generic programming creates algorithms and data structures that work with a range of types.",

    metaprogramming:
      "Metaprogramming involves programs manipulating program structure, code, or behavior.",

    aspectOriented:
      "Aspect-oriented programming separates cross-cutting concerns such as logging or security from core business logic."
  },

  // ==========================================================
  // 9. OBJECT ORIENTED PROGRAMMING
  // ==========================================================

  oop: {
    title: "Object-Oriented Programming",

    object:
      "An object is a software entity that combines data and behavior according to a particular design.",

    class:
      "A class defines a structure and behavior from which objects can be created.",

    encapsulation:
      "Encapsulation bundles internal state and behavior while controlling access to implementation details.",

    inheritance:
      "Inheritance allows one type to derive or reuse characteristics of another type.",

    polymorphism:
      "Polymorphism allows different types to be used through a shared interface or abstraction.",

    abstraction:
      "Abstraction exposes essential behavior while hiding unnecessary implementation details.",

    constructor:
      "A constructor initializes an object when it is created.",

    method:
      "A method is a function associated with a class, object, or type.",

    interface:
      "An interface defines a contract for behavior that implementing types agree to provide.",

    composition:
      "Composition constructs complex objects by combining simpler objects.",

    aggregation:
      "Aggregation represents a whole-part relationship where component objects can have independent lifetimes.",

    dependencyInjection:
      "Dependency injection supplies an object's dependencies from outside rather than having the object construct them internally.",

    solid: {
      singleResponsibility:
        "A class or module should have a focused responsibility and a reason to change.",

      openClosed:
        "Software entities should generally be open for extension but closed for modification.",

      liskovSubstitution:
        "Objects of a subtype should be usable where objects of the base type are expected without violating correctness.",

      interfaceSegregation:
        "Clients should not be forced to depend on interfaces containing methods they do not use.",

      dependencyInversion:
        "High-level policy should depend on abstractions rather than concrete low-level implementation details."
    }
  },

  // ==========================================================
  // 10. SOFTWARE ENGINEERING
  // ==========================================================

  softwareEngineering: {
    title: "Software Engineering",

    definition:
      "Software engineering applies systematic engineering principles to the development, testing, deployment, operation, and maintenance of software.",

    requirements:
      "Requirements describe what a software system should do and constraints under which it must operate.",

    functionalRequirement:
      "A functional requirement describes a behavior or capability the system must provide.",

    nonFunctionalRequirement:
      "A non-functional requirement describes qualities or constraints such as performance, security, availability, usability, or scalability.",

    architecture:
      "Software architecture describes the high-level structure of a software system and relationships among its components.",

    designPattern:
      "A design pattern is a reusable general solution to a recurring software design problem.",

    commonDesignPatterns: [
      "Singleton",
      "Factory",
      "Abstract Factory",
      "Builder",
      "Prototype",
      "Adapter",
      "Bridge",
      "Composite",
      "Decorator",
      "Facade",
      "Flyweight",
      "Proxy",
      "Chain of Responsibility",
      "Command",
      "Interpreter",
      "Iterator",
      "Mediator",
      "Memento",
      "Observer",
      "State",
      "Strategy",
      "Template Method",
      "Visitor"
    ],

    architecturePatterns: [
      "monolithic",
      "layered architecture",
      "client-server",
      "microservices",
      "event-driven architecture",
      "service-oriented architecture",
      "hexagonal architecture",
      "clean architecture",
      "serverless architecture"
    ],

    technicalDebt:
      "Technical debt represents future cost created by expedient or suboptimal technical decisions.",

    maintainability:
      "Maintainability is the ease with which software can be understood, modified, repaired, and extended.",

    scalability:
      "Scalability is the ability of a system to handle increasing workload by adding or improving resources.",

    reliability:
      "Reliability is the probability that a system performs correctly for a specified period under stated conditions.",

    availability:
      "Availability measures how often a service is operational and accessible.",

    portability:
      "Portability is the ease of moving software between environments.",

    interoperability:
      "Interoperability is the ability of different systems to exchange and meaningfully use information."
  },

  // ==========================================================
  // 11. SOFTWARE DEVELOPMENT LIFE CYCLE
  // ==========================================================

  developmentLifecycle: {
    title: "Software Development Lifecycle",

    stages: [
      "planning",
      "requirements analysis",
      "system design",
      "implementation",
      "testing",
      "deployment",
      "operation",
      "maintenance"
    ],

    waterfall:
      "The waterfall model organizes development into relatively sequential phases.",

    agile:
      "Agile development emphasizes iterative delivery, collaboration, adaptation, and continuous feedback.",

    scrum:
      "Scrum is an agile framework using defined roles, events, artifacts, and iterative work cycles called sprints.",

    kanban:
      "Kanban visualizes work and emphasizes continuous flow and limiting work in progress.",

    sprint:
      "A sprint is a fixed development period used by Scrum teams to produce a potentially usable increment.",

    continuousIntegration:
      "Continuous integration frequently merges and validates code changes using automated builds and tests.",

    continuousDelivery:
      "Continuous delivery keeps software in a releasable state through automated validation and deployment practices.",

    continuousDeployment:
      "Continuous deployment automatically releases validated changes into production."
  },

  // ==========================================================
  // 12. TESTING
  // ==========================================================

  softwareTesting: {
    title: "Software Testing",

    testing:
      "Software testing evaluates software behavior to discover defects and determine whether requirements are satisfied.",

    unitTesting:
      "Unit testing tests small software components in isolation.",

    integrationTesting:
      "Integration testing examines interactions among multiple components or systems.",

    systemTesting:
      "System testing evaluates the complete integrated system.",

    acceptanceTesting:
      "Acceptance testing determines whether software meets specified user or business requirements.",

    regressionTesting:
      "Regression testing checks whether previously working functionality remains correct after changes.",

    smokeTesting:
      "Smoke testing performs a small set of basic checks to determine whether a build is stable enough for deeper testing.",

    performanceTesting:
      "Performance testing evaluates behavior under specified workloads.",

    loadTesting:
      "Load testing measures system behavior under expected or specified workloads.",

    stressTesting:
      "Stress testing examines behavior under extreme or beyond-normal conditions.",

    fuzzTesting:
      "Fuzz testing supplies unexpected or malformed inputs to discover crashes, security flaws, or incorrect behavior.",

    propertyTesting:
      "Property-based testing checks general properties across many automatically generated inputs.",

    staticAnalysis:
      "Static analysis examines source code or compiled representations without executing the program.",

    codeReview:
      "Code review involves examining source code to detect defects, improve maintainability, and share knowledge."
  },

  // ==========================================================
  // 13. OPERATING SYSTEMS
  // ==========================================================

  operatingSystems: {
    title: "Operating Systems",

    definition:
      "An operating system manages hardware resources and provides services and abstractions for applications.",

    kernel:
      "The kernel is the central privileged component of an operating system responsible for core resource management.",

    process:
      "A process is an executing program together with its associated resources and state.",

    thread:
      "A thread is an execution path within a process.",

    multitasking:
      "Multitasking allows multiple processes or threads to make progress through scheduling.",

    scheduling:
      "CPU scheduling determines which runnable task receives processor time.",

    schedulingAlgorithms: [
      "First-Come, First-Served",
      "Shortest Job First",
      "Shortest Remaining Time",
      "Round Robin",
      "Priority Scheduling",
      "Multilevel Queue",
      "Multilevel Feedback Queue"
    ],

    contextSwitch:
      "A context switch changes the processor from executing one task to another by saving and restoring execution state.",

    virtualMemory:
      "Virtual memory provides processes with an abstraction of memory that can be larger or differently organized than physical RAM.",

    paging:
      "Paging divides virtual and physical memory into fixed-size pages and frames.",

    segmentation:
      "Memory segmentation organizes address spaces into logical segments with associated boundaries and permissions.",

    pageFault:
      "A page fault occurs when a process accesses a virtual-memory page that is not currently available in the required physical-memory location.",

    deadlock:
      "Deadlock occurs when processes are permanently blocked because each waits for resources or conditions held by others.",

    deadlockConditions: [
      "mutual exclusion",
      "hold and wait",
      "no preemption",
      "circular wait"
    ],

    semaphore:
      "A semaphore is a synchronization primitive used to control access to shared resources.",

    mutex:
      "A mutex provides mutual exclusion so that only one thread can own a protected critical section at a time.",

    synchronization:
      "Synchronization coordinates concurrent activities to avoid incorrect interactions and race conditions.",

    raceCondition:
      "A race condition occurs when program correctness depends on unpredictable timing between concurrent operations.",

    filesystem:
      "A filesystem organizes persistent data into files, directories, metadata, and storage structures.",

    shell:
      "A shell provides an interface for users or programs to interact with operating-system services, commonly through commands.",

    systemCall:
      "A system call is a controlled interface through which user-space programs request services from the operating system kernel."
  },

  // ==========================================================
  // 14. COMPUTER ARCHITECTURE
  // ==========================================================

  computerArchitecture: {
    title: "Computer Architecture",

    cpu:
      "The central processing unit executes instructions and performs arithmetic, logical, control, and data-movement operations.",

    alu:
      "The arithmetic logic unit performs arithmetic and logical operations.",

    controlUnit:
      "The control unit coordinates instruction execution and directs processor components.",

    register:
      "A processor register is a small, fast storage location inside the CPU.",

    programCounter:
      "The program counter stores or identifies the address of the next instruction to execute.",

    instructionRegister:
      "The instruction register holds the instruction currently being processed in some processor architectures.",

    cache:
      "CPU cache is fast memory used to store frequently accessed data and instructions close to processing units.",

    cacheLevels: [
      "L1 cache",
      "L2 cache",
      "L3 cache"
    ],

    clock:
      "A processor clock provides timing signals used to coordinate operations.",

    clockFrequency:
      "Clock frequency describes the number of clock cycles per second, commonly measured in hertz.",

    instructionSet:
      "An instruction set architecture defines machine instructions, registers, data types, addressing modes, and related processor behavior.",

    risc:
      "Reduced Instruction Set Computer architectures emphasize a relatively streamlined instruction set and regular instruction behavior.",

    cisc:
      "Complex Instruction Set Computer architectures provide a richer and often more complex set of machine instructions.",

    pipeline:
      "Instruction pipelining overlaps stages of multiple instructions to increase throughput.",

    superscalar:
      "A superscalar processor can issue multiple instructions per cycle using multiple execution resources.",

    branchPrediction:
      "Branch prediction guesses the likely outcome of conditional branches to reduce pipeline delays.",

    outOfOrderExecution:
      "Out-of-order execution allows instructions to execute when their operands and resources are ready rather than strictly following program order.",

    multicore:
      "A multicore processor contains multiple processing cores on one chip.",

    gpu:
      "A graphics processing unit contains many parallel processing resources optimized for workloads such as graphics and highly parallel computation.",

    motherboard:
      "A motherboard is the primary circuit board connecting major components of a computer.",

    bus:
      "A computer bus provides communication pathways among components.",

    dma:
      "Direct Memory Access allows hardware devices to transfer data to or from memory with reduced CPU involvement.",

    interrupt:
      "An interrupt signals the processor that an event requires attention.",

    firmware:
      "Firmware is software stored in persistent memory that provides low-level control of hardware."
  },

  // ==========================================================
  // 15. MEMORY AND STORAGE
  // ==========================================================

  memoryAndStorage: {
    title: "Memory and Storage",

    ram:
      "Random-access memory is volatile working memory used by active programs and data.",

    rom:
      "Read-only memory traditionally refers to persistent memory intended primarily for reading, although modern ROM-like technologies may be rewritable.",

    dram:
      "Dynamic RAM stores bits using electrical charge and requires periodic refreshing.",

    sram:
      "Static RAM uses bistable circuitry and does not require refresh in the same way as DRAM.",

    cacheMemory:
      "Cache memory is small and fast memory positioned close to a processor or processing unit.",

    virtualMemory:
      "Virtual memory provides each process with an abstract memory space managed by the operating system.",

    hdd:
      "A hard disk drive stores data magnetically on rotating platters.",

    ssd:
      "A solid-state drive stores data using non-volatile flash memory or related solid-state technology.",

    nvme:
      "NVMe is a protocol designed for high-speed communication with non-volatile memory devices, commonly over PCIe.",

    opticalStorage:
      "Optical storage uses lasers to read or write information on media such as CDs, DVDs, and Blu-ray discs.",

    magneticTape:
      "Magnetic tape stores information sequentially and is commonly used for archival and backup applications.",

    storageUnits: [
      "bit",
      "byte",
      "kilobyte",
      "megabyte",
      "gigabyte",
      "terabyte",
      "petabyte",
      "exabyte",
      "zettabyte",
      "yottabyte"
    ]
  },

  // ==========================================================
  // 16. COMPUTER NETWORKS
  // ==========================================================

  networking: {
    title: "Computer Networking",

    definition:
      "Computer networking concerns communication between computing devices through wired or wireless links and communication protocols.",

    network:
      "A computer network connects devices so they can exchange information and share resources.",

    lan:
      "A Local Area Network covers a relatively limited geographical area such as a home, office, or campus.",

    wan:
      "A Wide Area Network spans large geographic areas.",

    internet:
      "The Internet is a global interconnected system of networks using the Internet protocol suite.",

    intranet:
      "An intranet is a private network using technologies similar to those used by the Internet.",

    router:
      "A router forwards packets between networks.",

    switch:
      "A network switch forwards frames within a local network based on link-layer addressing.",

    modem:
      "A modem converts signals between forms suitable for transmission over particular communication media.",

    accessPoint:
      "A wireless access point connects wireless devices to a network.",

    ip:
      "Internet Protocol provides addressing and packet delivery across interconnected networks.",

    ipv4:
      "IPv4 uses 32-bit addresses.",

    ipv6:
      "IPv6 uses 128-bit addresses and provides a vastly larger address space than IPv4.",

    macAddress:
      "A MAC address identifies a network interface at the link layer in many network technologies.",

    tcp:
      "TCP provides reliable, ordered, connection-oriented byte-stream communication.",

    udp:
      "UDP provides a lightweight datagram transport mechanism without TCP's built-in connection-oriented reliability.",

    http:
      "HTTP is an application-layer protocol widely used for communication between web clients and servers.",

    https:
      "HTTPS is HTTP carried over a secure transport using TLS.",

    dns:
      "The Domain Name System translates domain names into network information such as IP addresses.",

    dhcp:
      "DHCP automatically provides network configuration information such as IP addresses to clients.",

    arp:
      "ARP is used in IPv4 networks to resolve IP addresses to link-layer addresses on local networks.",

    icmp:
      "ICMP supports network diagnostics and control messaging.",

    ftp:
      "FTP is a protocol for transferring files between systems.",

    smtp:
      "SMTP is used to transfer email messages between mail systems.",

    pop3:
      "POP3 is a protocol traditionally used by clients to retrieve email.",

    imap:
      "IMAP allows email clients to access and manage messages stored on a mail server.",

    ssh:
      "SSH provides secure remote login and secure command execution.",

    vpn:
      "A virtual private network creates a protected communication tunnel across another network.",

    osiModel: [
      "Physical",
      "Data Link",
      "Network",
      "Transport",
      "Session",
      "Presentation",
      "Application"
    ],

    tcpIpModel: [
      "Link",
      "Internet",
      "Transport",
      "Application"
    ]
  },

  // ==========================================================
  // 17. DATABASES
  // ==========================================================

  databases: {
    title: "Databases",

    definition:
      "A database is an organized collection of data managed so that information can be stored, retrieved, updated, and analyzed.",

    dbms:
      "A database management system provides mechanisms for creating, storing, querying, updating, and administering databases.",

    relationalDatabase:
      "A relational database organizes data into tables consisting of rows and columns and supports relationships among tables.",

    table:
      "A relational table organizes records into rows and attributes into columns.",

    row:
      "A row represents one record or tuple in a relational table.",

    column:
      "A column represents an attribute or field shared by records in a relational table.",

    primaryKey:
      "A primary key uniquely identifies records within a table.",

    foreignKey:
      "A foreign key references a key in another table or sometimes the same table to represent relationships.",

    index:
      "A database index is an auxiliary data structure that accelerates searches at the cost of additional storage and update work.",

    query:
      "A database query requests information or performs operations on stored data.",

    sql:
      "SQL is a language widely used for defining, querying, manipulating, and controlling relational databases.",

    nosql:
      "NoSQL broadly refers to database systems that use data models other than the traditional relational model or provide alternative scalability and access patterns.",

    documentDatabase:
      "A document database stores records as documents, often using JSON-like structures.",

    keyValueDatabase:
      "A key-value database stores data as key-value pairs.",

    graphDatabase:
      "A graph database represents entities and relationships using graph structures.",

    columnDatabase:
      "A column-oriented database organizes data by columns, often improving analytical workloads.",

    normalization:
      "Database normalization organizes relational data to reduce unnecessary redundancy and update anomalies.",

    denormalization:
      "Denormalization intentionally introduces redundancy to improve particular query or performance characteristics.",

    transaction:
      "A transaction is a logical unit of database work that should satisfy defined consistency guarantees.",

    acid: {
      atomicity:
        "Atomicity means a transaction is treated as an all-or-nothing unit.",

      consistency:
        "Consistency means transactions preserve defined database rules and constraints.",

      isolation:
        "Isolation controls how concurrent transactions interact.",

      durability:
        "Durability means committed transaction effects persist despite subsequent failures within the system's durability guarantees."
    },

    joins: [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL OUTER JOIN",
      "CROSS JOIN",
      "SELF JOIN"
    ],

    databaseOperations: [
      "CREATE",
      "READ",
      "UPDATE",
      "DELETE"
    ]
  },

  // ==========================================================
  // 18. DISTRIBUTED SYSTEMS
  // ==========================================================

  distributedSystems: {
    title: "Distributed Systems",

    definition:
      "A distributed system consists of multiple independent computing components that communicate and coordinate to provide a combined service.",

    node:
      "A node is a participating computing system or process in a distributed environment.",

    replication:
      "Replication stores copies of data or services across multiple nodes.",

    sharding:
      "Sharding partitions data across multiple nodes or storage systems.",

    loadBalancing:
      "Load balancing distributes workloads across multiple servers or resources.",

    faultTolerance:
      "Fault tolerance allows a system to continue operating despite specified component failures.",

    consensus:
      "Consensus is the process by which distributed participants agree on a value or state despite communication and failure challenges.",

    leaderElection:
      "Leader election selects one participant to coordinate certain distributed activities.",

    eventualConsistency:
      "Eventual consistency allows replicas to temporarily differ while providing convergence under suitable conditions.",

    strongConsistency:
      "Strong consistency provides stronger guarantees about the visibility and ordering of updates.",

    CAPTheorem:
      "The CAP theorem describes a tradeoff in distributed systems among consistency, availability, and partition tolerance under network partition conditions.",

    messageQueue:
      "A message queue stores messages so producers and consumers can communicate asynchronously.",

    eventStream:
      "An event stream represents an ordered or partially ordered sequence of events that consumers can process.",

    microservices:
      "Microservices architecture structures an application as multiple relatively independent services.",

    serviceDiscovery:
      "Service discovery allows distributed components to find available service instances.",

    distributedLock:
      "A distributed lock coordinates access to shared resources across multiple nodes."
  },

  // ==========================================================
  // 19. CYBERSECURITY
  // ==========================================================

  cybersecurity: {
    title: "Cybersecurity",

    definition:
      "Cybersecurity protects computers, networks, applications, devices, and information from unauthorized access, misuse, disruption, modification, or destruction.",

    ciaTriad: {
      confidentiality:
        "Confidentiality means information is accessible only to authorized parties.",

      integrity:
        "Integrity means information remains accurate, complete, and protected from unauthorized modification.",

      availability:
        "Availability means authorized users can access systems and information when required."
    },

    authentication:
      "Authentication verifies the identity of a user, device, or system.",

    authorization:
      "Authorization determines what an authenticated entity is allowed to do.",

    accounting:
      "Accounting records or tracks actions and resource usage.",

    password:
      "A password is a secret credential used for authentication.",

    passwordHashing:
      "Password hashing transforms passwords into one-way representations using password-hashing algorithms designed to resist attacks.",

    multiFactorAuthentication:
      "Multi-factor authentication requires multiple independent authentication factors.",

    encryption:
      "Encryption transforms readable information into ciphertext so that unauthorized parties cannot easily understand it.",

    symmetricEncryption:
      "Symmetric encryption uses the same secret key or closely related secret material for encryption and decryption.",

    asymmetricEncryption:
      "Asymmetric cryptography uses mathematically related public and private keys.",

    digitalSignature:
      "A digital signature provides cryptographic evidence of authenticity and integrity using asymmetric cryptography.",

    certificate:
      "A digital certificate binds an identity or domain to a public key through a trusted certificate authority.",

    firewall:
      "A firewall controls network traffic according to defined rules.",

    malware:
      "Malware is software designed to perform harmful, unauthorized, or unwanted actions.",

    malwareTypes: [
      "virus",
      "worm",
      "trojan",
      "ransomware",
      "spyware",
      "rootkit",
      "botnet malware",
      "keylogger"
    ],

    phishing:
      "Phishing uses deceptive communication to trick users into revealing information or performing unsafe actions.",

    socialEngineering:
      "Social engineering manipulates people into violating security practices or revealing information.",

    denialOfService:
      "A denial-of-service attack attempts to make a service unavailable to legitimate users.",

    vulnerability:
      "A vulnerability is a weakness that can potentially be exploited to violate security properties.",

    exploit:
      "An exploit is a technique or mechanism used to take advantage of a vulnerability.",

    patch:
      "A security patch modifies software to correct vulnerabilities or other defects.",

    zeroDay:
      "A zero-day vulnerability is a previously unknown or insufficiently mitigated security weakness, while a zero-day exploit targets such a vulnerability.",

    principleOfLeastPrivilege:
      "Least privilege means granting users and processes only the permissions necessary for their tasks.",

    defenseInDepth:
      "Defense in depth uses multiple independent security controls so that failure of one control does not necessarily compromise the entire system."
  },

  // ==========================================================
  // 20. CRYPTOGRAPHY
  // ==========================================================

  cryptography: {
    title: "Cryptography",

    definition:
      "Cryptography uses mathematical techniques to protect information and communications.",

    plaintext:
      "Plaintext is information in its readable or original form before encryption.",

    ciphertext:
      "Ciphertext is encrypted information that generally requires a key and algorithm to recover the plaintext.",

    key:
      "A cryptographic key is secret or public information used by a cryptographic algorithm.",

    hash:
      "A cryptographic hash function maps input data to a fixed-size digest and is designed to provide properties such as preimage resistance and collision resistance.",

    salt:
      "A salt is additional data combined with a password before password hashing to make precomputed attacks more difficult.",

    nonce:
      "A nonce is a value intended for use only once in a particular cryptographic context.",

    publicKey:
      "A public key can be distributed openly and is paired with a private key in asymmetric cryptography.",

    privateKey:
      "A private key is secret cryptographic material used for operations such as decryption or digital signing.",

    tls:
      "TLS is a cryptographic protocol used to secure network communications.",

    pki:
      "Public Key Infrastructure manages certificates, keys, and trust relationships for public-key cryptography.",

    cryptographicGoals: [
      "confidentiality",
      "integrity",
      "authentication",
      "non-repudiation"
    ],

    cryptographicAlgorithms: [
      "AES",
      "ChaCha20",
      "RSA",
      "Elliptic Curve Cryptography",
      "SHA-2",
      "SHA-3"
    ]
  },

  // ==========================================================
  // 21. ARTIFICIAL INTELLIGENCE
  // ==========================================================

  artificialIntelligence: {
    title: "Artificial Intelligence",

    definition:
      "Artificial intelligence is the field of computing concerned with creating systems capable of performing tasks that normally require forms of intelligence such as perception, reasoning, learning, planning, or language understanding.",

    agent:
      "An intelligent agent perceives its environment and takes actions according to goals or objectives.",

    search:
      "AI search algorithms explore possible states or actions to find solutions.",

    knowledgeRepresentation:
      "Knowledge representation encodes information in forms that computational systems can reason over.",

    expertSystem:
      "An expert system uses explicit rules and knowledge to solve problems within a particular domain.",

    machineLearning:
      "Machine learning enables systems to learn patterns or relationships from data rather than relying entirely on manually programmed rules.",

    deepLearning:
      "Deep learning uses neural networks with multiple computational layers to learn complex representations.",

    neuralNetwork:
      "A neural network is a computational model composed of interconnected processing units whose parameters can be learned from data.",

    inference:
      "Inference is the process of deriving predictions, decisions, or conclusions from a model and input information.",

    training:
      "Training is the process of adjusting model parameters based on data and an objective function.",

    reinforcementLearning:
      "Reinforcement learning trains an agent through interactions with an environment and feedback such as rewards.",

    naturalLanguageProcessing:
      "Natural language processing applies computational methods to human language.",

    computerVision:
      "Computer vision develops methods for interpreting images, video, and other visual information.",

    robotics:
      "Robotics combines computing, sensing, control, mechanical systems, and sometimes AI to build machines that interact with physical environments."
  },

  // ==========================================================
  // 22. MACHINE LEARNING
  // ==========================================================

  machineLearning: {
    title: "Machine Learning",

    supervisedLearning:
      "Supervised learning learns a mapping from inputs to known target outputs using labeled training data.",

    unsupervisedLearning:
      "Unsupervised learning discovers patterns or structures in data without explicit target labels.",

    semiSupervisedLearning:
      "Semi-supervised learning uses a combination of labeled and unlabeled data.",

    selfSupervisedLearning:
      "Self-supervised learning creates learning signals from the structure of unlabeled data.",

    reinforcementLearning:
      "Reinforcement learning learns policies through interactions with an environment and reward signals.",

    classification:
      "Classification predicts discrete categories.",

    regression:
      "Regression predicts numerical values.",

    clustering:
      "Clustering groups data points according to similarity or another defined criterion.",

    dimensionalityReduction:
      "Dimensionality reduction represents data using fewer dimensions while attempting to preserve useful information.",

    feature:
      "A feature is an input variable or representation used by a machine-learning model.",

    label:
      "A label is the target value associated with an example in supervised learning.",

    dataset:
      "A dataset is a collection of examples used for analysis or machine learning.",

    trainingSet:
      "A training set is the portion of data used to fit model parameters.",

    validationSet:
      "A validation set is used to tune models or hyperparameters without using the final test set.",

    testSet:
      "A test set estimates performance on data not used for training or model selection.",

    overfitting:
      "Overfitting occurs when a model learns training-specific patterns that do not generalize well to new data.",

    underfitting:
      "Underfitting occurs when a model is too limited to capture important patterns in the data.",

    regularization:
      "Regularization adds constraints or penalties that can reduce overfitting.",

    gradientDescent:
      "Gradient descent iteratively changes model parameters in a direction that reduces an objective function.",

    learningRate:
      "The learning rate controls the approximate size of parameter updates during optimization.",

    lossFunction:
      "A loss function measures how poorly a model's predictions match desired outcomes.",

    accuracy:
      "Accuracy is the proportion of predictions that are correct.",

    precision:
      "Precision is the fraction of predicted positive cases that are actually positive.",

    recall:
      "Recall is the fraction of actual positive cases that are correctly identified.",

    f1Score:
      "The F1 score is the harmonic mean of precision and recall.",

    confusionMatrix:
      "A confusion matrix summarizes classification predictions using categories such as true positives, false positives, true negatives, and false negatives."
  },

  // ==========================================================
  // 23. NEURAL NETWORKS
  // ==========================================================

  neuralNetworks: {
    title: "Neural Networks",

    neuron:
      "An artificial neuron combines input values using learned weights and applies an activation function.",

    weight:
      "A weight controls the influence of an input on a neural network computation.",

    bias:
      "A bias is a learned parameter that shifts a neuron's activation before or alongside its activation function.",

    activationFunction:
      "An activation function introduces nonlinear behavior into neural-network layers.",

    relu:
      "ReLU outputs zero for negative inputs and approximately the input itself for positive inputs.",

    sigmoid:
      "The sigmoid function maps real-valued inputs into values between 0 and 1.",

    tanh:
      "The hyperbolic tangent maps real-valued inputs approximately into the interval from -1 to 1.",

    softmax:
      "Softmax converts a vector of scores into normalized values often interpreted as class probabilities.",

    backpropagation:
      "Backpropagation computes gradients of a neural-network objective with respect to parameters by applying the chain rule.",

    epoch:
      "An epoch is one complete pass through a training dataset.",

    batch:
      "A batch is a subset of training examples processed together.",

    minibatch:
      "A mini-batch is a relatively small batch used for efficient stochastic optimization.",

    convolutionalNetwork:
      "A convolutional neural network uses convolution-like operations and is especially effective for many visual tasks.",

    recurrentNetwork:
      "A recurrent neural network processes sequences while maintaining information across steps.",

    lstm:
      "Long Short-Term Memory networks use gated recurrent structures designed to help model longer-range dependencies.",

    transformer:
      "A transformer is a neural-network architecture built around attention mechanisms and is widely used for language, vision, and multimodal models.",

    attention:
      "Attention allows a model to assign different importance to elements of an input or representation when computing an output.",

    embedding:
      "An embedding represents discrete or structured objects as vectors in a continuous numerical space."
  },

  // ==========================================================
  // 24. NATURAL LANGUAGE PROCESSING
  // ==========================================================

  nlp: {
    title: "Natural Language Processing",

    definition:
      "Natural language processing studies computational methods for analyzing, understanding, generating, and interacting with human language.",

    token:
      "A token is a unit used by a language-processing system to represent a portion of text.",

    tokenization:
      "Tokenization divides text into tokens according to a chosen tokenization scheme.",

    vocabulary:
      "A vocabulary is the collection of tokens recognized by a language model or text-processing system.",

    stemming:
      "Stemming reduces words toward a common root using heuristic transformations.",

    lemmatization:
      "Lemmatization maps words to linguistically meaningful base forms.",

    syntax:
      "Syntax concerns how words and symbols are structured into grammatical expressions.",

    semantics:
      "Semantics concerns meaning.",

    sentimentAnalysis:
      "Sentiment analysis estimates attitudes or emotional polarity expressed in text.",

    namedEntityRecognition:
      "Named entity recognition identifies entities such as people, organizations, locations, dates, or products.",

    textClassification:
      "Text classification assigns documents or text segments to predefined categories.",

    machineTranslation:
      "Machine translation automatically converts text from one language into another.",

    speechRecognition:
      "Speech recognition converts spoken audio into text or another symbolic representation.",

    textToSpeech:
      "Text-to-speech systems generate spoken audio from textual input.",

    languageModel:
      "A language model estimates or generates sequences of language according to learned statistical or neural representations.",

    largeLanguageModel:
      "A large language model is a language model trained with substantial data and computational resources, typically using neural architectures such as transformers.",

    hallucination:
      "In generative AI, hallucination refers to generated content that is unsupported, incorrect, or fabricated despite appearing plausible."
  },

  // ==========================================================
  // 25. COMPUTER VISION
  // ==========================================================

  computerVision: {
    title: "Computer Vision",

    image:
      "A digital image is a numerical representation of visual information.",

    pixel:
      "A pixel is a basic discrete sample or picture element in a digital image.",

    resolution:
      "Image resolution describes the number or density of discrete image samples.",

    rgb:
      "RGB represents color using red, green, and blue components.",

    grayscale:
      "A grayscale image represents brightness without explicit color information.",

    imageClassification:
      "Image classification assigns an image to one or more categories.",

    objectDetection:
      "Object detection identifies objects and estimates their locations within images.",

    segmentation:
      "Image segmentation assigns labels to pixels or regions to separate meaningful areas.",

    facialRecognition:
      "Facial recognition uses computational techniques to identify or verify people from facial characteristics.",

    opticalCharacterRecognition:
      "Optical character recognition converts text contained in images into machine-readable characters.",

    imageGeneration:
      "Image-generation systems produce images from learned representations and input conditions.",

    edgeDetection:
      "Edge detection identifies locations where image intensity or other visual properties change significantly."
  },

  // ==========================================================
  // 26. COMPUTER GRAPHICS
  // ==========================================================

  computerGraphics: {
    title: "Computer Graphics",

    definition:
      "Computer graphics concerns the creation, representation, processing, and display of visual information using computers.",

    rasterGraphics:
      "Raster graphics represent images as grids of pixels.",

    vectorGraphics:
      "Vector graphics represent visual elements using geometric descriptions such as paths, curves, and shapes.",

    rendering:
      "Rendering converts scene descriptions into images or other visual representations.",

    rasterization:
      "Rasterization converts geometric primitives into pixel-based representations.",

    rayTracing:
      "Ray tracing simulates the paths of rays to model effects such as visibility, reflections, and shadows.",

    globalIllumination:
      "Global illumination models light interactions beyond direct illumination.",

    texture:
      "A texture is image or procedural data applied to a surface to represent visual detail.",

    shader:
      "A shader is a program executed in a graphics pipeline to control visual calculations.",

    vertex:
      "A vertex is a point in geometric data and may contain position and additional attributes.",

    polygon:
      "A polygon is a planar geometric shape defined by connected edges.",

    mesh:
      "A mesh is a collection of vertices, edges, and faces used to represent 3D geometry.",

    animation:
      "Computer animation creates the appearance of movement by changing visual states over time.",

    gpuRendering:
      "GPU rendering uses graphics processors to accelerate highly parallel visual computations."
  },

  // ==========================================================
  // 27. WEB DEVELOPMENT
  // ==========================================================

  webDevelopment: {
    title: "Web Development",

    web:
      "The World Wide Web is a system of interlinked resources accessed through Internet technologies.",

    frontend:
      "Frontend development concerns software that runs primarily in a user's browser or client interface.",

    backend:
      "Backend development concerns server-side logic, data access, APIs, authentication, and related services.",

    html:
      "HTML defines the structure and semantic content of web documents.",

    css:
      "CSS defines presentation, layout, and styling for web documents.",

    javascript:
      "JavaScript is a programming language widely used for web development and also in many non-browser environments.",

    dom:
      "The Document Object Model represents an HTML or XML document as a structured object tree that scripts can manipulate.",

    api:
      "An API defines an interface through which software components communicate.",

    rest:
      "REST is an architectural style commonly used for networked APIs, emphasizing resources and stateless interactions.",

    json:
      "JSON is a lightweight text-based data interchange format based on structured objects and arrays.",

    websocket:
      "WebSocket provides persistent bidirectional communication between a client and server over a network connection.",

    cookie:
      "A cookie is small data stored by a web browser and associated with a website or domain.",

    session:
      "A web session represents a period of interaction between a client and server and may be tracked using cookies or other mechanisms.",

    cache:
      "Web caching stores responses or resources so they can be reused without repeatedly retrieving them from the origin.",

    cdn:
      "A content delivery network distributes cached or generated content through geographically distributed servers.",

    responsiveDesign:
      "Responsive design adapts interfaces to different screen sizes and device characteristics.",

    accessibility:
      "Web accessibility aims to make websites usable by people with different abilities and assistive technologies."
  },

  // ==========================================================
  // 28. MOBILE DEVELOPMENT
  // ==========================================================

  mobileDevelopment: {
    title: "Mobile Computing",

    mobileApp:
      "A mobile application is software designed to operate on mobile devices such as smartphones and tablets.",

    android:
      "Android is a mobile operating system and software platform widely used on smartphones, tablets, TVs, vehicles, and other devices.",

    ios:
      "iOS is Apple's mobile operating system for devices such as iPhones.",

    nativeApp:
      "A native application is built primarily for a particular operating system or platform.",

    crossPlatform:
      "Cross-platform development uses technologies designed to share substantial code across multiple operating systems.",

    mobileUI:
      "Mobile user interfaces are designed around touch interaction, small screens, sensors, and mobile usage contexts.",

    mobileSensors: [
      "accelerometer",
      "gyroscope",
      "GPS",
      "magnetometer",
      "proximity sensor",
      "ambient light sensor",
      "camera",
      "microphone"
    ],

    pushNotification:
      "Push notifications allow a service to deliver event or message notifications to a mobile application.",

    appLifecycle:
      "A mobile application's lifecycle describes states and transitions such as creation, foreground operation, background operation, suspension, and termination."
  },

  // ==========================================================
  // 29. CLOUD COMPUTING
  // ==========================================================

  cloudComputing: {
    title: "Cloud Computing",

    definition:
      "Cloud computing provides computing resources such as processing, storage, databases, and software services through network-accessible infrastructure.",

    iaas:
      "Infrastructure as a Service provides virtualized or physical infrastructure resources.",

    paas:
      "Platform as a Service provides managed application-development and execution environments.",

    saas:
      "Software as a Service provides software applications through a managed service.",

    serverless:
      "Serverless computing allows developers to run workloads without directly managing the underlying server infrastructure.",

    virtualMachine:
      "A virtual machine emulates or abstracts a computer system and runs an operating system within a virtualized environment.",

    container:
      "A container packages an application and its dependencies into an isolated user-space environment while sharing the host kernel in typical implementations.",

    docker:
      "Docker is a platform and ecosystem widely used for building, packaging, and running containerized applications.",

    kubernetes:
      "Kubernetes is an orchestration system for deploying, scaling, and managing containerized workloads.",

    autoscaling:
      "Autoscaling automatically adjusts computing resources according to workload or policy.",

    cloudStorage:
      "Cloud storage provides remotely accessible persistent data storage.",

    objectStorage:
      "Object storage stores data as objects with associated metadata and identifiers.",

    cloudDatabase:
      "A cloud database is a database delivered and managed through cloud infrastructure or services."
  },

  // ==========================================================
  // 30. DEVOPS
  // ==========================================================

  devOps: {
    title: "DevOps",

    definition:
      "DevOps combines development and operations practices to improve software delivery, reliability, automation, and collaboration.",

    ci:
      "Continuous Integration frequently integrates code changes and automatically builds and tests software.",

    cd:
      "Continuous Delivery or Deployment automates later stages of software release.",

    infrastructureAsCode:
      "Infrastructure as Code manages infrastructure through machine-readable configuration and software-development practices.",

    monitoring:
      "Monitoring observes system behavior and produces measurements or alerts.",

    logging:
      "Logging records events and information generated by software and infrastructure.",

    tracing:
      "Distributed tracing follows requests through multiple services to help diagnose latency and failures.",

    observability:
      "Observability is the ability to infer internal system state from externally available outputs such as logs, metrics, and traces.",

    rollback:
      "Rollback restores a previous software version or configuration after a problematic change.",

    deploymentStrategies: [
      "rolling deployment",
      "blue-green deployment",
      "canary deployment",
      "recreate deployment"
    ]
  },

  // ==========================================================
  // 31. COMPILERS
  // ==========================================================

  compilers: {
    title: "Compilers and Language Processing",

    compiler:
      "A compiler translates source code from one representation into another, often producing machine code, bytecode, or an intermediate representation.",

    interpreter:
      "An interpreter executes programs through a runtime mechanism rather than requiring the complete source program to be directly converted to native machine code beforehand.",

    lexer:
      "A lexer converts source text into tokens.",

    parser:
      "A parser analyzes token sequences according to a grammar and constructs a syntactic representation.",

    syntaxTree:
      "A syntax tree represents the grammatical structure of source code.",

    abstractSyntaxTree:
      "An abstract syntax tree represents essential program structure while omitting unnecessary syntactic details.",

    semanticAnalysis:
      "Semantic analysis checks meaning-related constraints such as types, declarations, and scope.",

    intermediateRepresentation:
      "An intermediate representation provides a structured form of code used between source-language analysis and target-code generation.",

    optimization:
      "Compiler optimization transforms code to improve properties such as speed, memory usage, or size while preserving required behavior.",

    codeGeneration:
      "Code generation converts an intermediate representation into target code.",

    linker:
      "A linker combines compiled or assembled modules and resolves references to produce an executable or library.",

    loader:
      "A loader prepares executable code for execution, including placing it into memory and resolving required runtime elements."
  },

  // ==========================================================
  // 32. PROGRAMMING LANGUAGES
  // ==========================================================

  programmingLanguages: {
    title: "Programming Languages",

    c:
      "C is a procedural systems programming language known for low-level memory access, portability, and close interaction with hardware.",

    cpp:
      "C++ is a general-purpose programming language supporting procedural, object-oriented, generic, and other programming styles.",

    java:
      "Java is a general-purpose programming language designed around portability through a virtual-machine ecosystem.",

    javascript:
      "JavaScript is a dynamic programming language widely used in browsers and server-side runtimes.",

    typescript:
      "TypeScript extends JavaScript with static type syntax and additional language tooling, compiling to JavaScript.",

    python:
      "Python is a high-level general-purpose programming language emphasizing readability and a broad ecosystem.",

    rust:
      "Rust is a systems programming language emphasizing memory safety, performance, and concurrency without requiring a garbage collector.",

    go:
      "Go is a compiled language designed for simplicity, efficient compilation, networking, and concurrent software.",

    csharp:
      "C# is a general-purpose language commonly used with the .NET ecosystem.",

    kotlin:
      "Kotlin is a statically typed programming language widely used for JVM, Android, and other development.",

    swift:
      "Swift is a programming language developed by Apple for software across its platforms and beyond.",

    php:
      "PHP is a server-side scripting language widely used in web development.",

    ruby:
      "Ruby is a dynamic programming language emphasizing developer productivity and expressive syntax.",

    dart:
      "Dart is a programming language used extensively with Flutter for cross-platform application development.",

    sql:
      "SQL is a declarative language used primarily for relational database operations.",

    assemblyLanguage:
      "Assembly language provides symbolic instructions closely related to a processor's machine instruction set."
  },

  // ==========================================================
  // 33. VERSION CONTROL
  // ==========================================================

  versionControl: {
    title: "Version Control",

    definition:
      "Version control records changes to files over time so developers can track history, collaborate, compare versions, and recover earlier states.",

    git:
      "Git is a distributed version-control system designed to track changes efficiently and support branching and collaboration.",

    repository:
      "A repository stores version-controlled project history and associated files.",

    commit:
      "A commit records a set of changes as a version-control snapshot or history entry.",

    branch:
      "A branch provides an independent line of development within a version-control history.",

    merge:
      "Merging combines changes from different lines of development.",

    rebase:
      "Rebase reapplies commits onto another base commit or branch history.",

    clone:
      "Cloning creates a local copy of a repository.",

    pull:
      "A pull operation commonly retrieves remote changes and integrates them into a local branch, depending on tooling.",

    push:
      "A push sends local commits to a remote repository.",

    pullRequest:
      "A pull request is a collaborative mechanism for proposing and reviewing changes before integrating them.",

    conflict:
      "A merge conflict occurs when changes cannot be automatically combined without resolving incompatible edits."
  },

  // ==========================================================
  // 34. PARALLEL AND CONCURRENT COMPUTING
  // ==========================================================

  parallelComputing: {
    title: "Parallel and Concurrent Computing",

    parallelism:
      "Parallelism performs multiple computations simultaneously.",

    concurrency:
      "Concurrency structures multiple tasks so they can make progress during overlapping periods.",

    processParallelism:
      "Process parallelism uses multiple processes to perform work concurrently or in parallel.",

    threadParallelism:
      "Thread parallelism uses multiple threads within processes.",

    dataParallelism:
      "Data parallelism applies similar operations to different portions of data simultaneously.",

    taskParallelism:
      "Task parallelism executes different tasks simultaneously.",

    multicoreComputing:
      "Multicore computing uses multiple CPU cores to execute work in parallel.",

    gpuComputing:
      "GPU computing uses highly parallel graphics processors for suitable general-purpose workloads.",

    vectorization:
      "Vectorization performs one operation across multiple data elements using vector or SIMD instructions.",

    simd:
      "SIMD means Single Instruction, Multiple Data and allows one instruction to operate on multiple data values.",

    raceCondition:
      "A race condition occurs when concurrent execution produces behavior dependent on unpredictable timing.",

    deadlock:
      "A deadlock occurs when concurrent tasks wait indefinitely for resources or events that prevent progress.",

    starvation:
      "Starvation occurs when a task is repeatedly denied the resources or scheduling opportunities needed to make progress.",

    lock:
      "A lock controls concurrent access to shared resources.",

    atomicOperation:
      "An atomic operation appears indivisible to relevant concurrent observers."
  },

  // ==========================================================
  // 35. EMBEDDED SYSTEMS
  // ==========================================================

  embeddedSystems: {
    title: "Embedded Systems",

    definition:
      "An embedded system is a computing system designed as part of a larger device or for a specific dedicated function.",

    microcontroller:
      "A microcontroller integrates a processor, memory, and peripheral interfaces on a single chip for embedded applications.",

    microprocessor:
      "A microprocessor primarily provides CPU functionality and commonly relies on external memory and peripherals.",

    firmware:
      "Firmware is low-level software stored persistently and used to control hardware.",

    realtimeSystem:
      "A real-time system must respond to events within specified timing constraints.",

    hardRealtime:
      "A hard real-time system treats missing critical timing deadlines as unacceptable.",

    softRealtime:
      "A soft real-time system benefits from meeting timing requirements but can tolerate some deadline misses.",

    sensor:
      "A sensor detects physical quantities and converts them into signals that can be processed.",

    actuator:
      "An actuator converts control signals into physical action.",

    gpio:
      "General-purpose input/output provides programmable digital connections between a processor and external circuitry.",

    pwm:
      "Pulse-width modulation controls average power or signal characteristics by varying the duty cycle of a digital waveform.",

    i2c:
      "I2C is a serial communication protocol commonly used to connect integrated circuits and peripherals.",

    spi:
      "SPI is a synchronous serial communication interface commonly used between controllers and peripherals.",

    uart:
      "UART is a serial communication mechanism commonly used for asynchronous data transmission."
  },

  // ==========================================================
  // 36. ROBOTICS
  // ==========================================================

  robotics: {
    title: "Robotics",

    definition:
      "Robotics combines mechanical engineering, electronics, control theory, sensing, computing, and sometimes AI to create machines capable of sensing and acting in the physical world.",

    robot:
      "A robot is a programmable machine capable of performing physical actions based on control logic.",

    actuator:
      "An actuator produces physical movement or force.",

    sensor:
      "A sensor measures physical or environmental properties.",

    localization:
      "Robot localization estimates a robot's position within an environment.",

    mapping:
      "Mapping constructs a representation of an environment from sensor observations.",

    slam:
      "Simultaneous Localization and Mapping estimates a robot's location while constructing or updating a map.",

    pathPlanning:
      "Path planning computes a route from a starting state to a desired goal while considering constraints.",

    motionPlanning:
      "Motion planning determines feasible movement trajectories for a robot.",

    feedbackControl:
      "Feedback control adjusts actions based on measured system behavior.",

    pid:
      "PID control combines proportional, integral, and derivative terms to regulate a system toward a target.",

    autonomousRobot:
      "An autonomous robot senses its environment, makes decisions, and performs actions with limited direct human control."
  },

  // ==========================================================
  // 37. HUMAN-COMPUTER INTERACTION
  // ==========================================================

  humanComputerInteraction: {
    title: "Human-Computer Interaction",

    definition:
      "Human-computer interaction studies how people interact with computing systems and how interfaces can be designed to be effective, usable, and accessible.",

    userInterface:
      "A user interface is the means through which a person interacts with software or hardware.",

    userExperience:
      "User experience concerns the broader quality and effectiveness of a person's interaction with a product or system.",

    usability:
      "Usability describes how effectively, efficiently, and satisfactorily users can accomplish tasks with a system.",

    affordance:
      "An affordance is a property or cue suggesting how an object or interface element can be used.",

    feedback:
      "Interface feedback communicates the result or current state of an interaction.",

    accessibility:
      "Accessibility aims to ensure systems can be used by people with different abilities.",

    cognitiveLoad:
      "Cognitive load is the mental effort required to understand and interact with information or a system.",

    responsiveInterface:
      "A responsive interface adapts its layout or behavior to different devices, screens, or interaction contexts.",

    commandLineInterface:
      "A command-line interface allows users to interact with a system through textual commands.",

    graphicalUserInterface:
      "A graphical user interface allows users to interact through visual elements such as windows, icons, menus, buttons, and pointers."
  },

  // ==========================================================
  // 38. INFORMATION THEORY
  // ==========================================================

  informationTheory: {
    title: "Information Theory",

    definition:
      "Information theory mathematically studies information, uncertainty, communication, and limits on data transmission.",

    entropy:
      "Entropy measures uncertainty or average information content in a probability distribution.",

    informationContent:
      "The information content of an event is commonly related to the negative logarithm of its probability.",

    redundancy:
      "Redundancy represents additional information that can help with error detection, correction, or reliable communication.",

    compression:
      "Data compression reduces the number of bits required to represent information.",

    losslessCompression:
      "Lossless compression allows the original data to be reconstructed exactly.",

    lossyCompression:
      "Lossy compression discards information considered less important in exchange for greater size reduction.",

    sourceCoding:
      "Source coding represents information efficiently according to its statistical properties.",

    channelCoding:
      "Channel coding adds structured redundancy to improve communication reliability.",

    errorCorrection:
      "Error-correcting codes allow receivers to detect and sometimes correct transmission errors.",

    bandwidth:
      "Bandwidth describes the capacity or frequency range of a communication channel, depending on context.",

    signalToNoiseRatio:
      "Signal-to-noise ratio compares desired signal power with noise power."
  },

  // ==========================================================
  // 39. FORMAL LANGUAGES AND AUTOMATA
  // ==========================================================

  formalLanguages: {
    title: "Formal Languages and Automata Theory",

    formalLanguage:
      "A formal language is a set of strings defined over an alphabet according to specified rules.",

    alphabet:
      "An alphabet is a finite set of symbols used to construct strings.",

    string:
      "A string is a finite sequence of symbols from an alphabet.",

    grammar:
      "A formal grammar defines rules for generating valid strings in a language.",

    finiteAutomaton:
      "A finite automaton is a mathematical model of computation with a finite number of states.",

    deterministicFiniteAutomaton:
      "A deterministic finite automaton has exactly one transition for each state and input symbol.",

    nondeterministicFiniteAutomaton:
      "A nondeterministic finite automaton may have multiple possible transitions for a state and input symbol.",

    regularLanguage:
      "A regular language can be recognized by a finite automaton and described by a regular expression.",

    contextFreeGrammar:
      "A context-free grammar consists of production rules where each left-hand side is a single nonterminal.",

    pushdownAutomaton:
      "A pushdown automaton extends finite-state computation with a stack and can recognize context-free languages.",

    turingMachine:
      "A Turing machine is a mathematical model of general-purpose computation consisting of states, a tape, a read/write mechanism, and transition rules.",

    computability:
      "Computability studies which problems can be solved by formal computational models.",

    undecidable:
      "An undecidable problem is a problem for which no algorithm can correctly determine an answer for every possible valid input."
  },

  // ==========================================================
  // 40. COMPUTATIONAL COMPLEXITY THEORY
  // ==========================================================

  complexityTheory: {
    title: "Computational Complexity Theory",

    pClass:
      "P is the class of decision problems solvable by deterministic algorithms in polynomial time.",

    npClass:
      "NP is the class of decision problems for which proposed solutions can be verified in polynomial time by a deterministic algorithm.",

    npComplete:
      "NP-complete problems are in NP and are at least as hard as every problem in NP under suitable polynomial-time reductions.",

    npHard:
      "An NP-hard problem is at least as hard as every problem in NP under an appropriate reduction; it does not necessarily belong to NP.",

    reduction:
      "A reduction transforms one computational problem into another while preserving relevant information about solutions.",

    pVsNP:
      "The P versus NP problem asks whether every efficiently verifiable problem is also efficiently solvable.",

    decidable:
      "A problem is decidable if an algorithm exists that always halts and correctly determines the answer for every valid input.",

    tractable:
      "A computational problem is often called tractable when it can be solved efficiently enough for practical purposes, commonly using polynomial-time algorithms.",

    intractable:
      "A problem is often called intractable when required resources grow too rapidly for practical solution at relevant scales."
  },

  // ==========================================================
  // 41. QUANTUM COMPUTING
  // ==========================================================

  quantumComputing: {
    title: "Quantum Computing",

    definition:
      "Quantum computing uses quantum-mechanical phenomena to represent and process information.",

    qubit:
      "A qubit is the basic unit of quantum information and can exist in a quantum superposition of basis states.",

    superposition:
      "Quantum superposition allows a quantum state to be represented as a combination of basis states.",

    entanglement:
      "Quantum entanglement creates correlations between quantum systems that cannot generally be described as independent classical states.",

    quantumGate:
      "A quantum gate is an operation that transforms quantum states.",

    measurement:
      "Quantum measurement extracts classical information from a quantum state and generally changes the state.",

    quantumAlgorithm:
      "A quantum algorithm is an algorithm designed to operate on a quantum computational model.",

    grover:
      "Grover's algorithm provides a quadratic speedup for certain unstructured search problems in the ideal quantum model.",

    shor:
      "Shor's algorithm provides an efficient quantum algorithm for integer factorization and discrete logarithms in appropriate idealized settings.",

    quantumErrorCorrection:
      "Quantum error correction protects quantum information against noise and errors using encoded quantum states."
  },

  // ==========================================================
  // 42. FILE SYSTEMS
  // ==========================================================

  fileSystems: {
    title: "File Systems",

    file:
      "A file is a named collection of data managed by an operating system or storage system.",

    directory:
      "A directory organizes references to files and other directories.",

    metadata:
      "File metadata contains information such as size, timestamps, ownership, permissions, and type.",

    inode:
      "An inode is a filesystem data structure used by filesystems such as traditional Unix filesystems to store file metadata and references to data blocks.",

    journaling:
      "A journaling filesystem records intended filesystem changes in a journal to improve recovery after failures.",

    permissions:
      "Filesystem permissions determine which users or groups can perform operations such as reading, writing, or executing.",

    mount:
      "Mounting makes a filesystem accessible within an operating system's directory hierarchy.",

    symbolicLink:
      "A symbolic link is a filesystem object that references another path.",

    hardLink:
      "A hard link is another directory entry referring to the same underlying filesystem object in filesystems that support the concept.",

    fragmentation:
      "Fragmentation occurs when file data or free storage becomes divided into separated regions."
  },

  // ==========================================================
  // 43. COMPUTER STORAGE AND RAID
  // ==========================================================

  storageSystems: {
    title: "Storage Systems",

    raid:
      "RAID combines multiple storage devices to improve performance, capacity, redundancy, or combinations of these goals.",

    raid0:
      "RAID 0 stripes data across drives without redundancy.",

    raid1:
      "RAID 1 mirrors data across drives.",

    raid5:
      "RAID 5 stripes data and distributed parity across multiple drives.",

    raid6:
      "RAID 6 uses dual distributed parity and can tolerate more drive failures than RAID 5 under its defined assumptions.",

    raid10:
      "RAID 10 combines mirroring and striping.",

    backup:
      "A backup is a separate copy of data maintained so information can be restored after loss or corruption.",

    snapshot:
      "A snapshot captures a point-in-time representation of data or system state.",

    archival:
      "Archival storage preserves information for long-term retention rather than frequent active access."
  },

  // ==========================================================
  // 44. DATA SCIENCE
  // ==========================================================

  dataScience: {
    title: "Data Science",

    definition:
      "Data science combines statistics, computing, mathematics, domain knowledge, and data engineering to extract useful information from data.",

    dataCleaning:
      "Data cleaning identifies and handles incorrect, inconsistent, missing, duplicated, or irrelevant data.",

    dataWrangling:
      "Data wrangling transforms raw data into forms suitable for analysis.",

    exploratoryDataAnalysis:
      "Exploratory data analysis examines datasets using summaries and visualizations to discover patterns and anomalies.",

    visualization:
      "Data visualization represents information graphically to make patterns and relationships easier to understand.",

    correlation:
      "Correlation measures statistical association between variables and does not by itself establish causation.",

    causation:
      "Causation describes a relationship in which changes in one factor contribute to changes in another under specified conditions.",

    hypothesisTesting:
      "Hypothesis testing evaluates evidence against a statistical null or reference hypothesis.",

    confidenceInterval:
      "A confidence interval is a statistical interval constructed by a procedure designed to have a specified long-run coverage probability.",

    regression:
      "Regression models relationships between variables and can be used for prediction or inference depending on the design.",

    dimensionalityReduction:
      "Dimensionality reduction transforms high-dimensional data into lower-dimensional representations while attempting to preserve useful structure."
  },

  // ==========================================================
  // 45. DATA ENGINEERING
  // ==========================================================

  dataEngineering: {
    title: "Data Engineering",

    definition:
      "Data engineering develops systems for collecting, transforming, storing, processing, and delivering data.",

    etl:
      "ETL stands for Extract, Transform, Load and describes a common data-processing workflow.",

    elt:
      "ELT stands for Extract, Load, Transform, where transformation occurs after data is loaded into a target system.",

    dataPipeline:
      "A data pipeline moves and transforms data between systems.",

    dataWarehouse:
      "A data warehouse stores structured data optimized for analytics and reporting.",

    dataLake:
      "A data lake stores large amounts of data in relatively raw or varied formats for later processing and analysis.",

    dataLakehouse:
      "A data lakehouse combines aspects of data lakes and data warehouses to support diverse data workloads.",

    batchProcessing:
      "Batch processing handles accumulated data in groups rather than continuously item by item.",

    streamProcessing:
      "Stream processing processes data continuously or near continuously as events arrive.",

    dataQuality:
      "Data quality concerns properties such as accuracy, completeness, consistency, validity, uniqueness, and timeliness."
  },

  // ==========================================================
  // 46. COMPUTER SECURITY ENGINEERING
  // ==========================================================

  securityEngineering: {
    title: "Security Engineering",

    threatModeling:
      "Threat modeling systematically identifies assets, attackers, attack surfaces, threats, and mitigations.",

    attackSurface:
      "An attack surface is the collection of exposed interfaces through which a system might potentially be attacked.",

    secureCoding:
      "Secure coding incorporates practices intended to prevent common vulnerabilities during software development.",

    inputValidation:
      "Input validation checks whether externally supplied data meets expected requirements before processing it.",

    outputEncoding:
      "Output encoding represents data in a context-safe form to reduce injection risks.",

    accessControl:
      "Access control determines which subjects can access which resources and under what conditions.",

    auditLog:
      "An audit log records security-relevant activities for monitoring and investigation.",

    incidentResponse:
      "Incident response is the organized process of detecting, containing, investigating, recovering from, and learning from security incidents.",

    vulnerabilityManagement:
      "Vulnerability management identifies, assesses, prioritizes, remediates, and tracks security weaknesses."
  },

  // ==========================================================
  // 47. SOFTWARE ARCHITECTURE
  // ==========================================================

  architecture: {
    title: "Software Architecture",

    monolith:
      "A monolithic application is deployed as a relatively unified software system.",

    microservices:
      "Microservices architecture decomposes an application into multiple independently deployable services.",

    layeredArchitecture:
      "Layered architecture organizes software into layers with defined responsibilities and dependencies.",

    clientServer:
      "Client-server architecture separates requesting clients from services provided by servers.",

    eventDriven:
      "Event-driven architecture uses events as important mechanisms for communication and coordination.",

    serviceOriented:
      "Service-oriented architecture organizes functionality into interoperable services.",

    hexagonal:
      "Hexagonal architecture separates application logic from external systems through ports and adapters.",

    cleanArchitecture:
      "Clean architecture emphasizes separation of business rules from frameworks, interfaces, and external infrastructure.",

    mvc:
      "Model-View-Controller separates application data and logic, user-interface presentation, and control flow.",

    mvvm:
      "Model-View-ViewModel separates presentation from underlying data and application logic using a view-model abstraction."
  },

  // ==========================================================
  // 48. APIs AND SOFTWARE COMMUNICATION
  // ==========================================================

  apis: {
    title: "APIs and Software Communication",

    api:
      "An application programming interface defines operations, data structures, or communication rules that allow software components to interact.",

    endpoint:
      "An API endpoint is a specific network-accessible location or operation through which a service can be accessed.",

    request:
      "A request is a message sent to a service asking it to perform an operation or return information.",

    response:
      "A response is the message returned by a service after processing a request.",

    statusCode:
      "An HTTP status code communicates the general result of an HTTP request.",

    commonHttpMethods: [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "HEAD",
      "OPTIONS"
    ],

    commonHttpStatusCodes: {
      "200":
        "Successful request.",

      "201":
        "Resource successfully created.",

      "204":
        "Successful request with no response body.",

      "400":
        "The request was invalid or malformed.",

      "401":
        "Authentication is required or failed.",

      "403":
        "The server understood the request but refuses authorization.",

      "404":
        "The requested resource was not found.",

      "409":
        "The request conflicts with the current state.",

      "429":
        "The client has sent too many requests within the server's applicable limits.",

      "500":
        "The server encountered an unexpected internal error.",

      "502":
        "A gateway or proxy received an invalid response from an upstream service.",

      "503":
        "The service is currently unavailable or unable to handle the request."
    },

    graphql:
      "GraphQL is an API query language and execution system that lets clients request structured data according to a schema.",

    grpc:
      "gRPC is a remote procedure call framework commonly used for efficient service-to-service communication.",

    webhook:
      "A webhook is a mechanism where one system sends an HTTP request to notify another system about an event."
  },

  // ==========================================================
  // 49. SOFTWARE PERFORMANCE
  // ==========================================================

  performance: {
    title: "Software Performance",

    latency:
      "Latency is the time between initiating an operation and receiving or observing its result.",

    throughput:
      "Throughput measures how much work a system completes per unit of time.",

    responseTime:
      "Response time is the elapsed time experienced by a requester for an operation.",

    bottleneck:
      "A bottleneck is a component whose limited capacity restricts overall system performance.",

    profiling:
      "Profiling measures program execution to identify expensive operations and resource usage.",

    optimization:
      "Optimization modifies software or system configuration to improve desired performance characteristics.",

    caching:
      "Caching stores frequently used results or data so future accesses can be served more quickly.",

    memoization:
      "Memoization caches results of function computations to avoid repeating equivalent work.",

    batching:
      "Batching groups multiple operations together to reduce overhead.",

    lazyLoading:
      "Lazy loading delays loading resources until they are needed.",

    parallelization:
      "Parallelization divides suitable work so multiple processing resources can operate simultaneously."
  },

  // ==========================================================
  // 50. SOFTWARE QUALITY
  // ==========================================================

  softwareQuality: {
    title: "Software Quality",

    correctness:
      "Correctness is the degree to which software produces results consistent with its specification.",

    reliability:
      "Reliability concerns consistent correct operation over time.",

    maintainability:
      "Maintainability concerns how easily software can be modified, repaired, and extended.",

    readability:
      "Readability describes how easily humans can understand source code.",

    testability:
      "Testability describes how easily software behavior can be verified through testing.",

    usability:
      "Usability describes how effectively users can accomplish intended tasks.",

    portability:
      "Portability concerns how easily software can operate across different environments.",

    scalability:
      "Scalability concerns how well software handles increased demand.",

    security:
      "Software security concerns protection against unauthorized access, manipulation, disclosure, and disruption.",

    efficiency:
      "Efficiency concerns resource use such as CPU time, memory, storage, bandwidth, and energy."
  },

  // ==========================================================
  // 51. COMPUTER SCIENCE HISTORY
  // ==========================================================

  history: {
    title: "History of Computer Science",

    abacus:
      "The abacus is an ancient calculating device using movable counters.",

    mechanicalCalculators:
      "Mechanical calculating machines provided early automated arithmetic capabilities.",

    charlesBabbage:
      "Charles Babbage designed the Difference Engine and the Analytical Engine concepts, which influenced the development of programmable computing.",

    adaLovelace:
      "Ada Lovelace wrote notes describing an algorithm for Babbage's Analytical Engine and is widely recognized as an early figure in computer programming.",

    alanTuring:
      "Alan Turing made foundational contributions to computability theory, mathematical logic, and computer science and also worked on wartime cryptanalysis.",

    johnVonNeumann:
      "John von Neumann contributed to mathematics, computing, and the stored-program computer architecture associated with his name.",

    eniac:
      "ENIAC was an early large-scale electronic general-purpose computer.",

    transistor:
      "The transistor enabled smaller, more reliable electronic computers and became fundamental to modern electronics.",

    integratedCircuit:
      "Integrated circuits placed multiple electronic components on a single semiconductor substrate.",

    microprocessor:
      "The microprocessor integrated a central processing unit onto a chip and helped enable widespread personal and embedded computing.",

    personalComputer:
      "Personal computers brought general-purpose computing to individuals and homes on a large scale.",

    internetDevelopment:
      "Modern Internet development evolved through multiple networking projects and protocols, including ARPANET and the TCP/IP ecosystem.",

    worldWideWeb:
      "Tim Berners-Lee developed the core technologies of the World Wide Web, including HTML, HTTP, and the first web browser and server.",

    smartphoneEra:
      "Modern smartphones combined mobile communication with powerful general-purpose computing, sensors, cameras, and Internet services."
  },

  // ==========================================================
  // 52. COMPUTATIONAL THINKING
  // ==========================================================

  computationalThinking: {
    title: "Computational Thinking",

    decomposition:
      "Break a complex problem into smaller components.",

    patternRecognition:
      "Identify similarities, repetitions, and useful relationships within problems or data.",

    abstraction:
      "Focus on important information while ignoring unnecessary details.",

    algorithmicThinking:
      "Develop precise sequences of steps that can solve problems.",

    generalization:
      "Develop solutions that apply to a broader class of related problems.",

    automation:
      "Use machines to execute repeatable procedures efficiently."
  },

  // ==========================================================
  // 53. MATHEMATICAL COMPUTING
  // ==========================================================

  mathematicalComputing: {
    title: "Mathematical Computing",

    numericalMethods:
      "Numerical methods approximate solutions to mathematical problems using computational procedures.",

    numericalStability:
      "Numerical stability concerns how computational errors behave during numerical calculations.",

    floatingPointError:
      "Floating-point error occurs because many real numbers cannot be represented exactly with finite binary floating-point formats.",

    roundingError:
      "Rounding error results when numerical values are approximated to limited precision.",

    overflow:
      "Overflow occurs when a numerical result exceeds the representable range of a data type.",

    underflow:
      "Underflow occurs when a value becomes too small to represent normally within a numerical format.",

    matrixComputation:
      "Matrix computation performs operations such as multiplication, decomposition, inversion, and factorization on matrices.",

    linearAlgebra:
      "Linear algebra provides mathematical tools involving vectors, matrices, linear transformations, and related structures."
  },

  // ==========================================================
  // 54. COMPUTER SIMULATION
  // ==========================================================

  simulation: {
    title: "Computer Simulation",

    definition:
      "Computer simulation uses computational models to imitate or study the behavior of real or hypothetical systems.",

    deterministicSimulation:
      "A deterministic simulation produces the same result for the same initial conditions and parameters.",

    stochasticSimulation:
      "A stochastic simulation incorporates randomness or probabilistic processes.",

    monteCarlo:
      "Monte Carlo methods use repeated random sampling to estimate quantities or explore probabilistic systems.",

    agentBasedModel:
      "Agent-based models represent systems using interacting individual entities or agents.",

    discreteEventSimulation:
      "Discrete-event simulation models systems as sequences of events occurring at specific points in simulated time."
  },

  // ==========================================================
  // 55. COMPUTER SYSTEM RELIABILITY
  // ==========================================================

  reliability: {
    title: "Computer System Reliability",

    redundancy:
      "Redundancy uses additional components or information to reduce the effect of failures.",

    failover:
      "Failover transfers service operation to an alternative component when a primary component fails.",

    replication:
      "Replication maintains multiple copies of services or data.",

    healthCheck:
      "A health check tests whether a service or component appears operational.",

    disasterRecovery:
      "Disaster recovery prepares systems and procedures for restoring services after major failures.",

    businessContinuity:
      "Business continuity concerns maintaining essential organizational functions during disruptions.",

    recoveryPointObjective:
      "Recovery Point Objective specifies the maximum acceptable amount of data loss measured in time.",

    recoveryTimeObjective:
      "Recovery Time Objective specifies the target maximum time required to restore a service after disruption."
  },

  // ==========================================================
  // 56. MODERN COMPUTING
  // ==========================================================

  modernComputing: {
    title: "Modern Computing",

    edgeComputing:
      "Edge computing processes data closer to where it is generated or consumed rather than relying entirely on centralized cloud infrastructure.",

    fogComputing:
      "Fog computing distributes computation and storage between cloud services and edge devices.",

    internetOfThings:
      "The Internet of Things refers to networks of physical objects equipped with sensors, processing, software, and communication capabilities.",

    wearableComputing:
      "Wearable computing integrates computing capabilities into devices worn on the body.",

    ubiquitousComputing:
      "Ubiquitous computing envisions computation embedded throughout everyday environments.",

    ambientComputing:
      "Ambient computing integrates computing capabilities into environments so technology can operate with reduced explicit interaction.",

    digitalTwin:
      "A digital twin is a computational representation of a physical system that can be updated using data from the physical counterpart.",

    blockchain:
      "A blockchain is a distributed data structure in which records are linked using cryptographic mechanisms and maintained through a consensus process.",

    smartContract:
      "A smart contract is program logic deployed on a blockchain or related decentralized platform that executes according to defined rules.",

    decentralizedSystem:
      "A decentralized system distributes control or decision-making across multiple participants rather than relying on one central authority."
  },

  // ==========================================================
  // 57. SOFTWARE LICENSING
  // ==========================================================

  softwareLicensing: {
    title: "Software Licensing",

    openSource:
      "Open-source software is distributed under terms that provide specified rights to inspect, modify, and redistribute source code.",

    proprietarySoftware:
      "Proprietary software is controlled under license terms that restrict some rights such as modification or redistribution.",

    freeSoftware:
      "Free software refers to software emphasizing users' freedoms to use, study, modify, and share software under applicable licenses.",

    publicDomain:
      "Public-domain software or works are not protected by copyright in the relevant jurisdiction or have been dedicated to the public domain where legally effective.",

    permissiveLicense:
      "Permissive licenses generally allow broad reuse with relatively limited obligations.",

    copyleft:
      "Copyleft licenses generally require certain redistributed derivative works to preserve specified freedoms under the license terms.",

    dependencies:
      "Software dependencies are external libraries, packages, frameworks, or services required by an application."
  },

  // ==========================================================
  // 58. COMMON CS TERMS
  // ==========================================================

  glossary: {
    bug:
      "A bug is an unintended defect or behavior in software.",

    feature:
      "A feature is a capability or functionality provided by software.",

    runtime:
      "A runtime is the environment and supporting mechanisms used while a program executes.",

    framework:
      "A framework provides reusable structure, conventions, and components for developing applications.",

    library:
      "A library is reusable software functionality that programs can call or incorporate.",

    package:
      "A package is a distributable collection of software components and metadata.",

    dependency:
      "A dependency is an external component required by software.",

    module:
      "A module is a relatively self-contained unit of software functionality.",

    namespace:
      "A namespace organizes identifiers to prevent naming collisions and clarify scope.",

    compiler:
      "A compiler translates source programs into another executable or intermediate representation.",

    runtimeError:
      "A runtime error occurs during program execution.",

    syntaxError:
      "A syntax error occurs when source code violates the grammar of a programming language.",

    semanticError:
      "A semantic error occurs when code is syntactically valid but does not express valid or intended meaning.",

    exceptionHandling:
      "Exception handling provides mechanisms for responding to exceptional runtime conditions.",

    garbageCollection:
      "Garbage collection automatically identifies and reclaims memory that is no longer reachable by a program.",

    memoryLeak:
      "A memory leak occurs when a program retains memory or resources that it no longer needs, preventing effective reclamation.",

    pointer:
      "A pointer is a value that refers to a memory address or related location.",

    reference:
      "A reference identifies or provides access to another object or value according to a programming language's semantics.",

    recursion:
      "Recursion is a technique in which a computation is defined partly in terms of smaller instances of itself.",

    iteration:
      "Iteration repeatedly performs operations according to a loop or traversal mechanism.",

    API:
      "An API defines how software components communicate.",

    SDK:
      "A software development kit provides tools, libraries, documentation, and other resources for developing software for a platform.",

    CLI:
      "A command-line interface accepts textual commands.",

    GUI:
      "A graphical user interface provides visual interaction elements.",

    IDE:
      "An integrated development environment combines tools such as an editor, debugger, compiler, and project management features.",

    terminal:
      "A terminal provides an interface for interacting with a command-line shell.",

    repository:
      "A repository stores software files and often their version history.",

    deployment:
      "Deployment makes software available in an environment where it can be used.",

    production:
      "Production is the environment in which software serves real users or real operational workloads.",

    development:
      "A development environment is used to create and test software before release.",

    staging:
      "A staging environment approximates production for final testing before deployment."
  },

  // ==========================================================
  // 59. COMMON ALGORITHM COMPLEXITIES
  // ==========================================================

  algorithmComplexities: {
    title: "Common Algorithm Complexity Reference",

    lookupArray:
      "Indexed array access is typically O(1) when the index is directly addressable.",

    arraySearch:
      "Unsorted array search is typically O(n).",

    sortedArrayBinarySearch:
      "Binary search in a sorted array is typically O(log n).",

    hashLookup:
      "Hash-table lookup is typically O(1) average-case under suitable assumptions, with O(n) worst-case for simple collision-resolution models.",

    balancedTreeSearch:
      "Search in a balanced binary search tree is typically O(log n).",

    linkedListSearch:
      "Searching an unsorted linked list is typically O(n).",

    stackPush:
      "Stack push is typically O(1).",

    stackPop:
      "Stack pop is typically O(1).",

    queueEnqueue:
      "Queue insertion can be O(1) with an appropriate implementation.",

    queueDequeue:
      "Queue removal can be O(1) with an appropriate implementation.",

    mergeSort:
      "Merge sort typically runs in O(n log n) time.",

    quickSortAverage:
      "Quicksort typically has O(n log n) average-case time.",

    quickSortWorst:
      "Quicksort can degrade to O(n²) in the worst case depending on pivot choices and implementation.",

    heapSort:
      "Heap sort runs in O(n log n) time.",

    bfs:
      "Breadth-first search is typically O(V + E) with adjacency-list graph representation.",

    dfs:
      "Depth-first search is typically O(V + E) with adjacency-list graph representation."
  },

  // ==========================================================
  // 60. COMPUTER SCIENCE TOPICS
  // ==========================================================

  topics: [
    "algorithms",
    "data structures",
    "programming",
    "software engineering",
    "operating systems",
    "computer architecture",
    "computer networks",
    "databases",
    "distributed systems",
    "cybersecurity",
    "cryptography",
    "artificial intelligence",
    "machine learning",
    "deep learning",
    "natural language processing",
    "computer vision",
    "computer graphics",
    "web development",
    "mobile development",
    "cloud computing",
    "DevOps",
    "compilers",
    "programming languages",
    "version control",
    "parallel computing",
    "embedded systems",
    "robotics",
    "human-computer interaction",
    "information theory",
    "formal languages",
    "automata theory",
    "computability",
    "complexity theory",
    "quantum computing",
    "data science",
    "data engineering",
    "software architecture",
    "software testing",
    "file systems",
    "storage systems",
    "computer simulation",
    "distributed computing",
    "Internet technologies",
    "API design",
    "system reliability",
    "computational thinking"
  ],

  // ==========================================================
  // 61. QUESTION PATTERNS
  // ==========================================================

  questionPatterns: {
    whatIs: [
      "what is computer science",
      "what is an algorithm",
      "what is programming",
      "what is a data structure",
      "what is an operating system",
      "what is a database",
      "what is a network",
      "what is artificial intelligence",
      "what is machine learning",
      "what is cybersecurity"
    ],

    comparison: [
      "difference between RAM and ROM",
      "difference between HDD and SSD",
      "difference between TCP and UDP",
      "difference between HTTP and HTTPS",
      "difference between compiler and interpreter",
      "difference between process and thread",
      "difference between stack and queue",
      "difference between SQL and NoSQL",
      "difference between frontend and backend",
      "difference between AI and machine learning"
    ],

    algorithmQuestions: [
      "how does binary search work",
      "how does merge sort work",
      "how does quicksort work",
      "how does BFS work",
      "how does DFS work",
      "how does Dijkstra's algorithm work",
      "what is dynamic programming",
      "what is greedy algorithm",
      "what is Big O notation"
    ],

    programmingQuestions: [
      "what is a variable",
      "what is a function",
      "what is recursion",
      "what is a loop",
      "what is object oriented programming",
      "what is inheritance",
      "what is polymorphism",
      "what is encapsulation",
      "what is abstraction"
    ],

    networkingQuestions: [
      "what is an IP address",
      "what is DNS",
      "what is TCP",
      "what is UDP",
      "what is HTTP",
      "what is HTTPS",
      "what is a router",
      "what is a firewall",
      "what is a VPN"
    ],

    securityQuestions: [
      "what is encryption",
      "what is hashing",
      "what is authentication",
      "what is authorization",
      "what is phishing",
      "what is malware",
      "what is ransomware",
      "what is a vulnerability",
      "what is a zero day"
    ]
  },

  // ==========================================================
  // 62. IMPORTANT PRINCIPLES
  // ==========================================================

  principles: {
    divideAndConquer:
      "Break a problem into smaller problems, solve the smaller problems, and combine the results.",

    separationOfConcerns:
      "Separate software into parts with distinct responsibilities.",

    singleResponsibility:
      "Keep a component focused on a coherent responsibility.",

    dontRepeatYourself:
      "Avoid unnecessary duplication of logic or knowledge.",

    keepItSimple:
      "Prefer understandable solutions over unnecessary complexity.",

    leastPrivilege:
      "Give users and processes only the permissions they need.",

    defenseInDepth:
      "Use multiple security layers rather than relying on one control.",

    failSafe:
      "Design systems so failures move toward safer states where practical.",

    idempotence:
      "An idempotent operation can be applied multiple times with the same intended result as applying it once, under its defined semantics.",

    locality:
      "Programs often perform better when they access data with spatial or temporal locality.",

    modularity:
      "Separate systems into components with clear interfaces.",

    encapsulation:
      "Hide implementation details behind well-defined interfaces.",

    looseCoupling:
      "Reduce unnecessary dependencies between components.",

    highCohesion:
      "Keep closely related responsibilities together."
  },

  // ==========================================================
  // 63. CAREER AREAS
  // ==========================================================

  careerAreas: [
    "software engineer",
    "software developer",
    "frontend developer",
    "backend developer",
    "full-stack developer",
    "mobile developer",
    "game developer",
    "systems programmer",
    "embedded systems engineer",
    "DevOps engineer",
    "site reliability engineer",
    "cloud engineer",
    "network engineer",
    "database administrator",
    "data engineer",
    "data scientist",
    "machine learning engineer",
    "AI engineer",
    "research scientist",
    "cybersecurity engineer",
    "security analyst",
    "penetration tester",
    "cryptography researcher",
    "computer graphics engineer",
    "computer vision engineer",
    "NLP engineer",
    "robotics engineer",
    "computer architect",
    "compiler engineer",
    "QA engineer",
    "test engineer",
    "systems administrator",
    "technical architect",
    "solutions architect",
    "UX engineer",
    "HCI researcher"
  ],

  // ==========================================================
  // 64. MAJOR COMPUTER SCIENCE SUBFIELDS
  // ==========================================================

  subfields: [
    "theoretical computer science",
    "algorithms and data structures",
    "computational complexity",
    "computability theory",
    "information theory",
    "cryptography",
    "computer architecture",
    "operating systems",
    "distributed systems",
    "computer networks",
    "database systems",
    "programming languages",
    "compiler design",
    "software engineering",
    "artificial intelligence",
    "machine learning",
    "natural language processing",
    "computer vision",
    "computer graphics",
    "robotics",
    "human-computer interaction",
    "cybersecurity",
    "embedded computing",
    "parallel computing",
    "quantum computing",
    "data science",
    "bioinformatics",
    "scientific computing",
    "computer systems",
    "web technologies",
    "mobile computing",
    "cloud computing"
  ]
};

// ============================================================
// DEFAULT EXPORT
// ============================================================

export default COMPUTER_SCIENCE_KNOWLEDGE;
