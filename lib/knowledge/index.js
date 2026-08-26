// lib/knowledge/index.js

// ============================================================
// REZE KNOWLEDGE ENGINE
// Central knowledge registry
//
// This version is designed to be SAFE:
// - Uses your existing Roman knowledge modules
// - Includes a large built-in Science knowledge system
// - Does NOT require separate Science files
// - Does NOT import files that may not exist
// ============================================================


// ============================================================
// ROMAN HISTORY MODULES
// ============================================================

import * as romanEmperorsModule from "./history/roman/emperors.js";
import * as romanEconomyModule from "./history/roman/economy.js";
import * as romanArchitectureModule from "./history/roman/architecture.js";
import * as romanEmpireModule from "./history/roman/empire.js";
import * as romanMilitaryModule from "./history/roman/military.js";
import * as romanOverviewModule from "./history/roman/overview.js";
import * as romanProvincesModule from "./history/roman/provinces.js";
import * as romanReligionModule from "./history/roman/religion.js";
import * as romanRepublicModule from "./history/roman/republic.js";
import * as romanTimelineModule from "./history/roman/timeline.js";
import * as romanWarsModule from "./history/roman/wars.js";


// ============================================================
// MODULE LOADER
// ============================================================

function unwrapKnowledge(module) {
  if (!module) return null;

  if (module.default) {
    return module.default;
  }

  const values = Object.values(module);

  if (values.length > 0) {
    return values[0];
  }

  return module;
}


// ============================================================
// ROMAN KNOWLEDGE
// ============================================================

const ROMAN_EMPERORS =
  unwrapKnowledge(romanEmperorsModule);

const ROMAN_ECONOMY =
  unwrapKnowledge(romanEconomyModule);

const ROMAN_ARCHITECTURE =
  unwrapKnowledge(romanArchitectureModule);

const ROMAN_EMPIRE =
  unwrapKnowledge(romanEmpireModule);

const ROMAN_MILITARY =
  unwrapKnowledge(romanMilitaryModule);

const ROMAN_OVERVIEW =
  unwrapKnowledge(romanOverviewModule);

const ROMAN_PROVINCES =
  unwrapKnowledge(romanProvincesModule);

const ROMAN_RELIGION =
  unwrapKnowledge(romanReligionModule);

const ROMAN_REPUBLIC =
  unwrapKnowledge(romanRepublicModule);

const ROMAN_TIMELINE =
  unwrapKnowledge(romanTimelineModule);

const ROMAN_WARS =
  unwrapKnowledge(romanWarsModule);


// ============================================================
// SCIENCE KNOWLEDGE
//
// IMPORTANT:
// Science is kept inside this file for now.
// Therefore Vercel does NOT need separate science files.
// ============================================================

export const SCIENCE_KNOWLEDGE = {

  overview: {
    name: "Science",

    description:
      "Science is the systematic study of the natural world through observation, measurement, experimentation, evidence, and reasoning.",

    scientificMethod: [
      "Observation",
      "Question",
      "Hypothesis",
      "Prediction",
      "Experiment",
      "Data collection",
      "Analysis",
      "Conclusion",
      "Replication",
      "Peer review",
    ],

    majorBranches: [
      "Physics",
      "Chemistry",
      "Biology",
      "Astronomy",
      "Earth science",
      "Environmental science",
      "Computer science",
      "Mathematics",
      "Neuroscience",
      "Psychology",
      "Materials science",
    ],
  },


  // ==========================================================
  // PHYSICS
  // ==========================================================

  physics: {

    description:
      "Physics studies matter, energy, motion, forces, space, time, fields, and the fundamental laws of nature.",

    topics: {

      mechanics: [
        "Motion",
        "Velocity",
        "Acceleration",
        "Force",
        "Momentum",
        "Energy",
        "Work",
        "Power",
        "Gravity",
        "Mass",
      ],

      classicalMechanics: [
        "Newton's laws of motion",
        "Conservation of momentum",
        "Conservation of energy",
        "Projectile motion",
        "Circular motion",
        "Friction",
        "Simple harmonic motion",
      ],

      thermodynamics: [
        "Temperature",
        "Heat",
        "Internal energy",
        "Entropy",
        "Thermal equilibrium",
        "Heat engines",
        "Refrigeration",
        "Laws of thermodynamics",
      ],

      electromagnetism: [
        "Electric charge",
        "Electric field",
        "Magnetic field",
        "Voltage",
        "Current",
        "Resistance",
        "Electromagnetic waves",
        "Maxwell's equations",
      ],

      relativity: [
        "Special relativity",
        "General relativity",
        "Spacetime",
        "Time dilation",
        "Length contraction",
        "Mass-energy equivalence",
        "Black holes",
        "Gravitational waves",
      ],

      quantumPhysics: [
        "Quantum mechanics",
        "Wave-particle duality",
        "Superposition",
        "Quantum states",
        "Uncertainty principle",
        "Quantum entanglement",
        "Quantum tunneling",
        "Quantum fields",
      ],

      optics: [
        "Light",
        "Reflection",
        "Refraction",
        "Diffraction",
        "Interference",
        "Polarization",
        "Lasers",
        "Lenses",
        "Mirrors",
      ],

      nuclearPhysics: [
        "Atomic nuclei",
        "Radioactivity",
        "Alpha decay",
        "Beta decay",
        "Gamma radiation",
        "Nuclear fission",
        "Nuclear fusion",
        "Nuclear energy",
      ],
    },
  },


  // ==========================================================
  // CHEMISTRY
  // ==========================================================

  chemistry: {

    description:
      "Chemistry studies matter, its composition, structure, properties, and chemical transformations.",

    topics: {

      atomicStructure: [
        "Atoms",
        "Protons",
        "Neutrons",
        "Electrons",
        "Atomic number",
        "Mass number",
        "Isotopes",
        "Electron shells",
        "Orbitals",
      ],

      periodicTable: [
        "Elements",
        "Groups",
        "Periods",
        "Metals",
        "Nonmetals",
        "Noble gases",
        "Transition metals",
        "Lanthanides",
        "Actinides",
      ],

      chemicalBonds: [
        "Ionic bonds",
        "Covalent bonds",
        "Metallic bonds",
        "Hydrogen bonds",
        "Electronegativity",
        "Molecular geometry",
      ],

      reactions: [
        "Synthesis reactions",
        "Decomposition reactions",
        "Single replacement",
        "Double replacement",
        "Combustion",
        "Acid-base reactions",
        "Redox reactions",
        "Organic reactions",
      ],

      physicalChemistry: [
        "Chemical equilibrium",
        "Reaction kinetics",
        "Thermodynamics",
        "Entropy",
        "Enthalpy",
        "Free energy",
        "Electrochemistry",
      ],

      organicChemistry: [
        "Carbon",
        "Hydrocarbons",
        "Alkanes",
        "Alkenes",
        "Alkynes",
        "Alcohols",
        "Aldehydes",
        "Ketones",
        "Carboxylic acids",
        "Amines",
        "Polymers",
      ],

      biochemistry: [
        "Proteins",
        "Lipids",
        "Carbohydrates",
        "Nucleic acids",
        "Enzymes",
        "ATP",
        "Metabolism",
      ],
    },
  },


  // ==========================================================
  // BIOLOGY
  // ==========================================================

  biology: {

    description:
      "Biology studies living organisms, their structure, function, evolution, interactions, and environments.",

    topics: {

      cells: [
        "Cell membrane",
        "Cytoplasm",
        "Nucleus",
        "Mitochondria",
        "Ribosomes",
        "Endoplasmic reticulum",
        "Golgi apparatus",
        "Lysosomes",
        "Chloroplasts",
      ],

      genetics: [
        "DNA",
        "RNA",
        "Genes",
        "Chromosomes",
        "Mutations",
        "Genetic inheritance",
        "Gene expression",
        "Genomes",
        "Epigenetics",
      ],

      evolution: [
        "Natural selection",
        "Mutation",
        "Genetic drift",
        "Gene flow",
        "Adaptation",
        "Speciation",
        "Common ancestry",
      ],

      humanBody: [
        "Nervous system",
        "Circulatory system",
        "Respiratory system",
        "Digestive system",
        "Immune system",
        "Endocrine system",
        "Musculoskeletal system",
        "Reproductive system",
      ],

      ecology: [
        "Ecosystems",
        "Food chains",
        "Food webs",
        "Predators",
        "Prey",
        "Population",
        "Biodiversity",
        "Climate",
        "Biomes",
        "Conservation",
      ],

      microbiology: [
        "Bacteria",
        "Viruses",
        "Fungi",
        "Protozoa",
        "Microorganisms",
        "Pathogens",
        "Microbiomes",
      ],
    },
  },


  // ==========================================================
  // ASTRONOMY
  // ==========================================================

  astronomy: {

    description:
      "Astronomy studies stars, planets, galaxies, black holes, cosmic structures, and the universe.",

    topics: {

      solarSystem: [
        "Sun",
        "Mercury",
        "Venus",
        "Earth",
        "Mars",
        "Jupiter",
        "Saturn",
        "Uranus",
        "Neptune",
        "Asteroids",
        "Comets",
        "Dwarf planets",
        "Kuiper Belt",
      ],

      stars: [
        "Stellar formation",
        "Protostars",
        "Main sequence stars",
        "Red giants",
        "White dwarfs",
        "Neutron stars",
        "Supernovae",
        "Stellar remnants",
      ],

      galaxies: [
        "Milky Way",
        "Spiral galaxies",
        "Elliptical galaxies",
        "Irregular galaxies",
        "Galaxy clusters",
        "Superclusters",
      ],

      blackHoles: [
        "Event horizon",
        "Singularity",
        "Accretion disk",
        "Stellar-mass black holes",
        "Supermassive black holes",
        "Gravitational waves",
      ],

      universe: [
        "Big Bang",
        "Cosmic expansion",
        "Dark matter",
        "Dark energy",
        "Cosmic microwave background",
        "Large-scale structure",
        "Observable universe",
      ],
    },
  },


  // ==========================================================
  // EARTH SCIENCE
  // ==========================================================

  earthScience: {

    description:
      "Earth science studies Earth's physical structure, atmosphere, oceans, climate, rocks, and geological processes.",

    topics: {

      geology: [
        "Earth's crust",
        "Mantle",
        "Outer core",
        "Inner core",
        "Plate tectonics",
        "Earthquakes",
        "Volcanoes",
        "Rocks",
        "Minerals",
        "Erosion",
      ],

      atmosphere: [
        "Troposphere",
        "Stratosphere",
        "Mesosphere",
        "Thermosphere",
        "Exosphere",
        "Oxygen",
        "Nitrogen",
        "Water vapor",
        "Greenhouse gases",
      ],

      oceans: [
        "Ocean currents",
        "Tides",
        "Waves",
        "Marine ecosystems",
        "Seafloor",
        "Deep ocean",
        "Ocean circulation",
      ],

      climate: [
        "Climate systems",
        "Weather",
        "Greenhouse effect",
        "Global warming",
        "Climate change",
        "Carbon cycle",
        "Ice sheets",
        "Sea-level change",
      ],
    },
  },


  // ==========================================================
  // COMPUTER SCIENCE
  // ==========================================================

  computerScience: {

    description:
      "Computer science studies computation, algorithms, programming, information, software, hardware, and artificial intelligence.",

    topics: {

      programming: [
        "JavaScript",
        "Python",
        "Java",
        "C",
        "C++",
        "Rust",
        "Go",
        "TypeScript",
      ],

      algorithms: [
        "Sorting",
        "Searching",
        "Graphs",
        "Trees",
        "Dynamic programming",
        "Recursion",
        "Optimization",
        "Complexity",
      ],

      artificialIntelligence: [
        "Machine learning",
        "Deep learning",
        "Neural networks",
        "Natural language processing",
        "Computer vision",
        "Reinforcement learning",
        "Generative AI",
        "Large language models",
      ],

      systems: [
        "Operating systems",
        "Computer architecture",
        "Networking",
        "Databases",
        "Distributed systems",
        "Cloud computing",
        "Cybersecurity",
      ],
    },
  },


  // ==========================================================
  // MATHEMATICS
  // ==========================================================

  mathematics: {

    description:
      "Mathematics studies numbers, quantities, structures, patterns, space, change, logic, and abstract relationships.",

    topics: {

      arithmetic: [
        "Addition",
        "Subtraction",
        "Multiplication",
        "Division",
        "Fractions",
        "Percentages",
        "Ratios",
      ],

      algebra: [
        "Variables",
        "Equations",
        "Inequalities",
        "Functions",
        "Polynomials",
        "Systems of equations",
      ],

      geometry: [
        "Points",
        "Lines",
        "Angles",
        "Triangles",
        "Circles",
        "Polygons",
        "Area",
        "Volume",
      ],

      calculus: [
        "Limits",
        "Derivatives",
        "Integrals",
        "Differential equations",
        "Optimization",
      ],

      statistics: [
        "Mean",
        "Median",
        "Mode",
        "Variance",
        "Standard deviation",
        "Probability",
        "Distributions",
        "Correlation",
        "Regression",
      ],
    },
  },


  // ==========================================================
  // NEUROSCIENCE
  // ==========================================================

  neuroscience: {

    description:
      "Neuroscience studies the nervous system, brain, neurons, behavior, cognition, and neural communication.",

    topics: [
      "Neurons",
      "Synapses",
      "Brain regions",
      "Neurotransmitters",
      "Memory",
      "Learning",
      "Attention",
      "Perception",
      "Consciousness",
      "Motor control",
      "Neuroplasticity",
    ],
  },


  // ==========================================================
  // MATERIALS SCIENCE
  // ==========================================================

  materialsScience: {

    description:
      "Materials science studies how the structure of materials determines their properties and applications.",

    topics: [
      "Metals",
      "Ceramics",
      "Polymers",
      "Semiconductors",
      "Composites",
      "Nanomaterials",
      "Graphene",
      "Carbon nanotubes",
      "Alloys",
      "Crystals",
    ],
  },
};


// ============================================================
// REZE KNOWLEDGE
// ============================================================

export const REZE_KNOWLEDGE = {

  history: {

    roman: {

      emperors: ROMAN_EMPERORS,

      economy: ROMAN_ECONOMY,

      architecture: ROMAN_ARCHITECTURE,

      empire: ROMAN_EMPIRE,

      military: ROMAN_MILITARY,

      overview: ROMAN_OVERVIEW,

      provinces: ROMAN_PROVINCES,

      religion: ROMAN_RELIGION,

      republic: ROMAN_REPUBLIC,

      timeline: ROMAN_TIMELINE,

      wars: ROMAN_WARS,
    },
  },


  science: SCIENCE_KNOWLEDGE,

  universe: {
    astronomy: SCIENCE_KNOWLEDGE.astronomy,
  },

  earth: {
    earthScience:
      SCIENCE_KNOWLEDGE.earthScience,
  },

  humanity: {
    biology:
      SCIENCE_KNOWLEDGE.biology,

    neuroscience:
      SCIENCE_KNOWLEDGE.neuroscience,
  },

  technology: {
    computerScience:
      SCIENCE_KNOWLEDGE.computerScience,

    materialsScience:
      SCIENCE_KNOWLEDGE.materialsScience,
  },

  mathematics:
    SCIENCE_KNOWLEDGE.mathematics,
};


// ============================================================
// ROMAN KNOWLEDGE
// ============================================================

export const ROMAN_KNOWLEDGE = {

  emperors: ROMAN_EMPERORS,

  economy: ROMAN_ECONOMY,

  architecture: ROMAN_ARCHITECTURE,

  empire: ROMAN_EMPIRE,

  military: ROMAN_MILITARY,

  overview: ROMAN_OVERVIEW,

  provinces: ROMAN_PROVINCES,

  religion: ROMAN_RELIGION,

  republic: ROMAN_REPUBLIC,

  timeline: ROMAN_TIMELINE,

  wars: ROMAN_WARS,
};


// ============================================================
// ALL KNOWLEDGE
// ============================================================

export const ALL_KNOWLEDGE = [

  ROMAN_EMPERORS,

  ROMAN_ECONOMY,

  ROMAN_ARCHITECTURE,

  ROMAN_EMPIRE,

  ROMAN_MILITARY,

  ROMAN_OVERVIEW,

  ROMAN_PROVINCES,

  ROMAN_RELIGION,

  ROMAN_REPUBLIC,

  ROMAN_TIMELINE,

  ROMAN_WARS,

  SCIENCE_KNOWLEDGE,

].filter(Boolean);


// ============================================================
// KNOWLEDGE SEARCH
// ============================================================

export function searchKnowledge(query) {

  if (
    !query ||
    typeof query !== "string"
  ) {
    return [];
  }

  const normalizedQuery =
    query
      .toLowerCase()
      .trim();

  if (!normalizedQuery) {
    return [];
  }

  const results = [];

  for (
    const knowledge of ALL_KNOWLEDGE
  ) {

    if (!knowledge) {
      continue;
    }

    let searchableText = "";

    try {

      searchableText =
        JSON.stringify(
          knowledge
        ).toLowerCase();

    } catch {

      continue;
    }

    if (
      searchableText.includes(
        normalizedQuery
      )
    ) {

      results.push(
        knowledge
      );
    }
  }

  return results;
}


// ============================================================
// GET ROMAN KNOWLEDGE
// ============================================================

export function getRomanKnowledge(
  topic
) {

  if (
    !topic ||
    typeof topic !== "string"
  ) {

    return ROMAN_KNOWLEDGE;
  }

  const normalizedTopic =
    topic
      .toLowerCase()
      .trim();

  const topicMap = {

    emperors:
      ROMAN_EMPERORS,

    emperor:
      ROMAN_EMPERORS,

    economy:
      ROMAN_ECONOMY,

    architecture:
      ROMAN_ARCHITECTURE,

    engineering:
      ROMAN_ARCHITECTURE,

    empire:
      ROMAN_EMPIRE,

    military:
      ROMAN_MILITARY,

    army:
      ROMAN_MILITARY,

    wars:
      ROMAN_WARS,

    war:
      ROMAN_WARS,

    overview:
      ROMAN_OVERVIEW,

    provinces:
      ROMAN_PROVINCES,

    province:
      ROMAN_PROVINCES,

    religion:
      ROMAN_RELIGION,

    republic:
      ROMAN_REPUBLIC,

    timeline:
      ROMAN_TIMELINE,
  };

  return (
    topicMap[
      normalizedTopic
    ] || null
  );
}


// ============================================================
// SCIENCE KNOWLEDGE ACCESS
// ============================================================

export function getScienceKnowledge(
  topic
) {

  if (
    !topic ||
    typeof topic !== "string"
  ) {

    return SCIENCE_KNOWLEDGE;
  }

  const normalized =
    topic
      .toLowerCase()
      .trim();

  const topicMap = {

    science:
      SCIENCE_KNOWLEDGE,

    physics:
      SCIENCE_KNOWLEDGE.physics,

    chemistry:
      SCIENCE_KNOWLEDGE.chemistry,

    biology:
      SCIENCE_KNOWLEDGE.biology,

    astronomy:
      SCIENCE_KNOWLEDGE.astronomy,

    space:
      SCIENCE_KNOWLEDGE.astronomy,

    universe:
      SCIENCE_KNOWLEDGE.astronomy,

    earth:
      SCIENCE_KNOWLEDGE.earthScience,

    geology:
      SCIENCE_KNOWLEDGE.earthScience,

    climate:
      SCIENCE_KNOWLEDGE.earthScience,

    mathematics:
      SCIENCE_KNOWLEDGE.mathematics,

    math:
      SCIENCE_KNOWLEDGE.mathematics,

    computer:
      SCIENCE_KNOWLEDGE.computerScience,

    computers:
      SCIENCE_KNOWLEDGE.computerScience,

    programming:
      SCIENCE_KNOWLEDGE.computerScience,

    "computer science":
      SCIENCE_KNOWLEDGE.computerScience,

    ai:
      SCIENCE_KNOWLEDGE.computerScience,

    "artificial intelligence":
      SCIENCE_KNOWLEDGE.computerScience,

    neuroscience:
      SCIENCE_KNOWLEDGE.neuroscience,

    brain:
      SCIENCE_KNOWLEDGE.neuroscience,

    materials:
      SCIENCE_KNOWLEDGE.materialsScience,
  };

  return (
    topicMap[
      normalized
    ] || null
  );
}


// ============================================================
// DEFAULT EXPORT
// ============================================================

export default REZE_KNOWLEDGE;
