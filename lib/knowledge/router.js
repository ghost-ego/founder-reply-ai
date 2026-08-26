// lib/knowledge/router.js

import {
  ROMAN_KNOWLEDGE,
  SCIENCE_KNOWLEDGE,
  getRomanKnowledge,
  getScienceKnowledge,
} from "./index.js";


// ============================================================
// REZE KNOWLEDGE ROUTER
// ============================================================
//
// Supports:
//
// ROMAN HISTORY
// - overview
// - republic
// - empire
// - emperors
// - military
// - wars
// - religion
// - economy
// - architecture
// - provinces
// - timeline
//
// SCIENCE
// - physics
// - chemistry
// - biology
// - astronomy
// - earth science
// - geology
// - meteorology
// - oceanography
// - ecology
// - genetics
// - neuroscience
// - mathematics
// - computer science
// - materials science
// - environmental science
//
// REZE
// - identity
// - personality
// - memory
// - capabilities
//
// ============================================================


// ============================================================
// ROMAN KEYWORDS
// ============================================================

const ROMAN_KEYWORDS = {

  overview: [
    "roman",
    "romans",
    "rome",
    "ancient rome",
    "ancient roman",
    "roman history",
    "history of rome",
    "history of the roman empire",
    "founding of rome",
  ],

  republic: [
    "roman republic",
    "republican rome",
    "senate",
    "senator",
    "senators",
    "consul",
    "consuls",
    "patrician",
    "patricians",
    "plebeian",
    "plebeians",
    "cicero",
    "sulla",
    "marius",
    "gracchi",
    "gracchus",
    "republican",
  ],

  empire: [
    "roman empire",
    "imperial rome",
    "imperial",
    "fall of rome",
    "fall of the roman empire",
    "western roman empire",
    "eastern roman empire",
    "byzantine empire",
    "constantinople",
    "late roman empire",
    "rise of the roman empire",
  ],

  emperors: [
    "emperor",
    "emperors",
    "roman emperor",
    "roman emperors",
    "empress",
    "empresses",
    "augustus",
    "octavian",
    "julius caesar",
    "caesar",
    "tiberius",
    "caligula",
    "claudius",
    "nero",
    "trajan",
    "hadrian",
    "marcus aurelius",
    "constantine",
    "diocletian",
    "caracalla",
    "commodus",
    "vespasian",
    "titus",
    "domitian",
    "antoninus pius",
    "septimius severus",
  ],

  military: [
    "roman army",
    "roman military",
    "legion",
    "legions",
    "legionary",
    "legionaries",
    "centurion",
    "centurions",
    "roman soldier",
    "roman soldiers",
    "roman general",
    "roman generals",
    "roman commander",
    "roman commanders",
    "auxiliary",
    "auxiliaries",
    "praetorian guard",
    "praetorian",
    "roman navy",
    "roman fleet",
    "military strategy",
    "military tactics",
    "roman weapons",
    "roman armor",
    "roman armour",
    "roman sword",
    "roman shield",
    "roman siege",
    "roman fort",
    "roman forts",
    "roman fortification",
  ],

  wars: [
    "punic war",
    "punic wars",
    "first punic war",
    "second punic war",
    "third punic war",
    "roman civil war",
    "roman civil wars",
    "gallic war",
    "gallic wars",
    "roman conquest",
    "roman conquests",
    "hannibal",
    "carthage",
    "scipio",
    "spartacus",
    "roman rebellion",
    "roman revolt",
    "roman invasion",
  ],

  society: [
    "roman society",
    "roman social class",
    "roman social classes",
    "roman family",
    "roman families",
    "women in rome",
    "roman women",
    "children in rome",
    "roman marriage",
    "roman education",
    "roman school",
    "roman daily life",
    "roman life",
    "life in rome",
    "roman slavery",
    "roman slaves",
    "roman slave",
    "roman freedman",
    "roman freedmen",
    "roman citizenship",
    "roman citizen",
    "roman citizens",
  ],

  religion: [
    "roman religion",
    "roman gods",
    "roman god",
    "roman goddess",
    "roman mythology",
    "jupiter",
    "mars",
    "venus",
    "minerva",
    "neptune",
    "apollo",
    "mercury",
    "saturn",
    "juno",
    "vesta",
    "janus",
    "bacchus",
    "roman paganism",
    "roman christianity",
    "christianity in rome",
    "christians in rome",
    "roman persecution",
    "roman martyr",
    "roman church",
  ],

  economy: [
    "roman economy",
    "roman economic",
    "roman agriculture",
    "roman farmer",
    "roman farming",
    "roman trade",
    "roman trading",
    "roman tax",
    "roman taxes",
    "roman taxation",
    "roman money",
    "roman coin",
    "roman coins",
    "roman currency",
    "roman banking",
    "roman merchant",
    "roman merchants",
    "roman market",
    "roman markets",
    "roman commerce",
    "roman wealth",
    "roman wages",
    "roman grain",
    "roman olive oil",
    "roman wine",
  ],

  architecture: [
    "roman architecture",
    "roman building",
    "roman buildings",
    "roman colosseum",
    "colosseum",
    "coliseum",
    "roman forum",
    "roman aqueduct",
    "roman aqueducts",
    "roman road",
    "roman roads",
    "roman baths",
    "roman thermae",
    "roman temple",
    "roman temples",
    "roman basilica",
    "roman basilicas",
    "roman amphitheater",
    "roman amphitheatre",
    "roman circus",
    "roman domus",
    "roman villa",
    "roman villas",
    "roman insula",
    "roman insulae",
    "roman bridge",
    "roman bridges",
    "roman concrete",
    "roman engineering",
  ],

  provinces: [
    "roman provinces",
    "roman province",
    "roman gaul",
    "gallia",
    "roman britannia",
    "roman britain",
    "roman hispania",
    "roman spain",
    "roman egypt",
    "roman syria",
    "roman judea",
    "roman palestine",
    "roman dacia",
    "roman germania",
    "roman africa",
    "roman asia minor",
    "roman sicily",
    "roman sardinia",
    "roman corsica",
    "roman mesopotamia",
    "roman thrace",
    "roman mauretania",
    "roman illyria",
    "roman pannonia",
  ],

  timeline: [
    "roman timeline",
    "roman period",
    "roman periods",
    "when was rome founded",
    "founding of rome",
    "rise of rome",
    "rise of the roman empire",
    "fall of rome",
    "fall of the roman empire",
    "early rome",
    "late rome",
    "third century crisis",
    "crisis of the third century",
    "tetrarchy",
    "roman chronology",
  ],
};


// ============================================================
// SCIENCE KEYWORDS
// ============================================================

const SCIENCE_KEYWORDS = {

  general: [
    "science",
    "scientific method",
    "scientific theory",
    "scientific hypothesis",
    "scientific evidence",
    "scientific experiment",
    "scientific research",
  ],


  physics: [
    "physics",
    "physical science",
    "force",
    "motion",
    "velocity",
    "acceleration",
    "momentum",
    "energy",
    "work",
    "power",
    "gravity",
    "mass",
    "newton",
    "mechanics",
    "classical mechanics",
    "thermodynamics",
    "temperature",
    "heat",
    "entropy",
    "electricity",
    "electric field",
    "magnetic field",
    "magnetism",
    "electromagnetism",
    "voltage",
    "current",
    "resistance",
    "optics",
    "light",
    "reflection",
    "refraction",
    "diffraction",
    "relativity",
    "einstein",
    "special relativity",
    "general relativity",
    "quantum",
    "quantum mechanics",
    "quantum physics",
    "wave particle duality",
    "uncertainty principle",
    "quantum entanglement",
    "nuclear physics",
    "radioactivity",
    "nuclear fission",
    "nuclear fusion",
  ],


  chemistry: [
    "chemistry",
    "chemical",
    "atom",
    "atoms",
    "molecule",
    "molecules",
    "element",
    "elements",
    "periodic table",
    "proton",
    "neutron",
    "electron",
    "isotope",
    "isotopes",
    "chemical bond",
    "ionic bond",
    "covalent bond",
    "metallic bond",
    "chemical reaction",
    "chemical reactions",
    "acid",
    "base",
    "acid base",
    "ph",
    "redox",
    "oxidation",
    "reduction",
    "organic chemistry",
    "inorganic chemistry",
    "physical chemistry",
    "biochemistry",
    "polymer",
    "polymers",
    "catalyst",
    "catalysis",
  ],


  biology: [
    "biology",
    "biological",
    "life science",
    "cell",
    "cells",
    "cell biology",
    "organism",
    "organisms",
    "plant",
    "plants",
    "animal",
    "animals",
    "microbiology",
    "bacteria",
    "virus",
    "viruses",
    "fungi",
    "fungus",
    "evolution",
    "natural selection",
    "adaptation",
    "species",
    "ecosystem",
    "ecology",
    "photosynthesis",
    "respiration",
    "metabolism",
    "protein",
    "proteins",
    "enzyme",
    "enzymes",
    "human body",
    "human biology",
  ],


  astronomy: [
    "astronomy",
    "astronomical",
    "space",
    "outer space",
    "universe",
    "cosmos",
    "cosmology",
    "planet",
    "planets",
    "solar system",
    "sun",
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
    "pluto",
    "moon",
    "moons",
    "asteroid",
    "asteroids",
    "comet",
    "comets",
    "star",
    "stars",
    "stellar",
    "galaxy",
    "galaxies",
    "milky way",
    "black hole",
    "black holes",
    "neutron star",
    "supernova",
    "supernovae",
    "nebula",
    "nebulae",
    "dark matter",
    "dark energy",
    "big bang",
    "cosmic microwave background",
  ],


  earthScience: [
    "earth science",
    "earth sciences",
    "earth system",
    "earth systems",
    "earth layers",
    "earth crust",
    "earth mantle",
    "earth core",
    "lithosphere",
    "hydrosphere",
    "biosphere",
    "atmosphere",
    "geosphere",
    "earth processes",
  ],


  geology: [
    "geology",
    "geological",
    "geologist",
    "rock",
    "rocks",
    "rock cycle",
    "mineral",
    "minerals",
    "crystal",
    "crystals",
    "crystallography",
    "plate tectonics",
    "tectonic plates",
    "tectonics",
    "continental drift",
    "earthquake",
    "earthquakes",
    "seismology",
    "volcano",
    "volcanoes",
    "volcanology",
    "magma",
    "lava",
    "sediment",
    "sedimentary",
    "igneous",
    "metamorphic",
    "fossil",
    "fossils",
    "erosion",
    "weathering",
    "mountain formation",
  ],


  meteorology: [
    "meteorology",
    "meteorological",
    "weather",
    "weather science",
    "forecast",
    "forecasting",
    "atmospheric science",
    "atmospheric pressure",
    "air pressure",
    "humidity",
    "temperature",
    "wind",
    "winds",
    "cloud",
    "clouds",
    "rain",
    "rainfall",
    "snow",
    "hail",
    "thunderstorm",
    "thunderstorms",
    "lightning",
    "hurricane",
    "hurricanes",
    "cyclone",
    "cyclones",
    "typhoon",
    "typhoons",
    "tornado",
    "tornadoes",
    "monsoon",
    "monsoons",
    "jet stream",
    "weather front",
    "cold front",
    "warm front",
  ],


  oceanography: [
    "oceanography",
    "oceanographic",
    "ocean",
    "oceans",
    "sea",
    "seas",
    "marine science",
    "marine",
    "seawater",
    "saltwater",
    "ocean current",
    "ocean currents",
    "tides",
    "tide",
    "waves",
    "wave",
    "seafloor",
    "sea floor",
    "deep ocean",
    "ocean trench",
    "ocean trenches",
    "coral reef",
    "coral reefs",
    "marine ecosystem",
    "marine ecosystems",
    "ocean circulation",
    "thermohaline circulation",
  ],


  ecology: [
    "ecology",
    "ecological",
    "ecosystem",
    "ecosystems",
    "ecologist",
    "biodiversity",
    "habitat",
    "habitats",
    "population ecology",
    "community ecology",
    "food chain",
    "food chains",
    "food web",
    "food webs",
    "predator",
    "predators",
    "prey",
    "species interaction",
    "competition",
    "symbiosis",
    "mutualism",
    "parasitism",
    "commensalism",
    "biome",
    "biomes",
    "conservation biology",
    "conservation",
  ],


  genetics: [
    "genetics",
    "genetic",
    "gene",
    "genes",
    "genome",
    "genomes",
    "genomics",
    "dna",
    "rna",
    "chromosome",
    "chromosomes",
    "heredity",
    "inheritance",
    "genetic inheritance",
    "mutation",
    "mutations",
    "allele",
    "alleles",
    "genotype",
    "phenotype",
    "genetic variation",
    "gene expression",
    "epigenetics",
    "genetic engineering",
    "genetic modification",
    "crispr",
  ],


  neuroscience: [
    "neuroscience",
    "neuroscientist",
    "neural",
    "brain",
    "brains",
    "nervous system",
    "central nervous system",
    "peripheral nervous system",
    "neuron",
    "neurons",
    "nerve",
    "nerves",
    "synapse",
    "synapses",
    "neurotransmitter",
    "neurotransmitters",
    "dopamine",
    "serotonin",
    "acetylcholine",
    "memory",
    "learning",
    "attention",
    "perception",
    "cognition",
    "consciousness",
    "neuroplasticity",
    "motor control",
  ],


  mathematics: [
    "mathematics",
    "math",
    "mathematical",
    "arithmetic",
    "algebra",
    "geometry",
    "trigonometry",
    "calculus",
    "derivative",
    "derivatives",
    "integral",
    "integrals",
    "limit",
    "limits",
    "differential equation",
    "differential equations",
    "probability",
    "statistics",
    "statistical",
    "number theory",
    "prime number",
    "prime numbers",
    "fraction",
    "fractions",
    "percentage",
    "percentages",
    "equation",
    "equations",
    "function",
    "functions",
    "matrix",
    "matrices",
    "vector",
    "vectors",
    "topology",
    "set theory",
    "logic",
  ],


  computerScience: [
    "computer science",
    "computer",
    "computers",
    "computing",
    "programming",
    "program",
    "software",
    "hardware",
    "algorithm",
    "algorithms",
    "data structure",
    "data structures",
    "database",
    "databases",
    "operating system",
    "operating systems",
    "network",
    "networks",
    "computer network",
    "cybersecurity",
    "cyber security",
    "cryptography",
    "artificial intelligence",
    "ai",
    "machine learning",
    "deep learning",
    "neural network",
    "neural networks",
    "natural language processing",
    "nlp",
    "computer vision",
    "robotics",
    "cloud computing",
    "distributed systems",
    "javascript",
    "python",
    "java",
    "c++",
    "rust",
    "typescript",
  ],


  materialsScience: [
    "materials science",
    "materials",
    "material science",
    "material",
    "metals",
    "metal",
    "alloy",
    "alloys",
    "ceramic",
    "ceramics",
    "polymer",
    "polymers",
    "composite",
    "composites",
    "semiconductor",
    "semiconductors",
    "nanomaterial",
    "nanomaterials",
    "nanotechnology",
    "graphene",
    "carbon nanotube",
    "carbon nanotubes",
    "crystal structure",
    "material properties",
    "material engineering",
  ],


  environmentalScience: [
    "environmental science",
    "environmental sciences",
    "environment",
    "environmental",
    "pollution",
    "air pollution",
    "water pollution",
    "soil pollution",
    "plastic pollution",
    "climate change",
    "global warming",
    "greenhouse effect",
    "greenhouse gases",
    "carbon emissions",
    "carbon footprint",
    "sustainability",
    "sustainable development",
    "renewable energy",
    "conservation",
    "deforestation",
    "desertification",
    "waste management",
    "recycling",
    "biodiversity loss",
    "environmental impact",
  ],
};


// ============================================================
// REZE KEYWORDS
// ============================================================

const REZE_KEYWORDS = [

  "reze",
  "reze ai",
  "reze assistant",
  "reze personality",
  "reze memory",
  "reze memories",

  "your personality",
  "your memory",
  "your memories",
  "remember me",
  "remember this",
  "what do you remember",

  "who are you",
  "what are you",
  "your name",
  "your identity",
  "your abilities",
  "your capabilities",

  "how do you work",
  "how were you made",
  "about yourself",
];


// ============================================================
// NORMALIZE TEXT
// ============================================================

function normalizeText(text) {

  if (typeof text !== "string") {
    return "";
  }

  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s+'#.-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}


// ============================================================
// KEYWORD MATCHING
// ============================================================

function containsKeyword(text, keyword) {

  const normalizedKeyword =
    normalizeText(keyword);

  if (!normalizedKeyword) {
    return false;
  }

  // Multi-word phrase
  if (normalizedKeyword.includes(" ")) {
    return text.includes(
      normalizedKeyword
    );
  }

  // Single word
  const escaped =
    normalizedKeyword.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    );

  const regex =
    new RegExp(
      `\\b${escaped}\\b`,
      "i"
    );

  return regex.test(text);
}


// ============================================================
// KEYWORD SCORE
// ============================================================

function scoreKeywords(
  text,
  keywords
) {

  let score = 0;

  for (const keyword of keywords) {

    if (
      containsKeyword(
        text,
        keyword
      )
    ) {

      // Longer phrases are more specific.
      if (
        keyword.includes(" ")
      ) {

        score += 3;

      } else {

        score += 1;
      }
    }
  }

  return score;
}


// ============================================================
// FIND BEST CATEGORY
// ============================================================

function findBestCategory(
  text,
  keywordMap
) {

  let bestCategory = null;
  let bestScore = 0;

  for (
    const [
      category,
      keywords
    ] of Object.entries(
      keywordMap
    )
  ) {

    const score =
      scoreKeywords(
        text,
        keywords
      );

    if (
      score > bestScore
    ) {

      bestScore = score;

      bestCategory =
        category;
    }
  }

  return {
    category: bestCategory,
    score: bestScore,
  };
}


// ============================================================
// DETECT ROMAN CATEGORY
// ============================================================

export function detectRomanCategory(
  input
) {

  const text =
    normalizeText(input);

  if (!text) {
    return null;
  }

  return findBestCategory(
    text,
    ROMAN_KEYWORDS
  ).category;
}


// ============================================================
// DETECT SCIENCE CATEGORY
// ============================================================

export function detectScienceCategory(
  input
) {

  const text =
    normalizeText(input);

  if (!text) {
    return null;
  }

  return findBestCategory(
    text,
    SCIENCE_KEYWORDS
  ).category;
}


// ============================================================
// DETECT SCIENCE SCORE
// ============================================================

function getScienceMatch(
  text
) {

  return findBestCategory(
    text,
    SCIENCE_KEYWORDS
  );
}


// ============================================================
// DETECT ROMAN SCORE
// ============================================================

function getRomanMatch(
  text
) {

  return findBestCategory(
    text,
    ROMAN_KEYWORDS
  );
}


// ============================================================
// IS ROMAN QUESTION
// ============================================================

export function isRomanQuestion(
  input
) {

  const text =
    normalizeText(input);

  if (!text) {
    return false;
  }

  const match =
    getRomanMatch(text);

  return match.score > 0;
}


// ============================================================
// IS SCIENCE QUESTION
// ============================================================

export function isScienceQuestion(
  input
) {

  const text =
    normalizeText(input);

  if (!text) {
    return false;
  }

  const match =
    getScienceMatch(text);

  return match.score > 0;
}


// ============================================================
// IS REZE QUESTION
// ============================================================

export function isRezeQuestion(
  input
) {

  const text =
    normalizeText(input);

  if (!text) {
    return false;
  }

  return REZE_KEYWORDS.some(
    (keyword) =>
      containsKeyword(
        text,
        keyword
      )
  );
}


// ============================================================
// GET ROMAN KNOWLEDGE SECTION
// ============================================================

function getRomanKnowledgeSection(
  category
) {

  if (!category) {
    return ROMAN_KNOWLEDGE;
  }

  return (
    getRomanKnowledge(
      category
    ) ||
    ROMAN_KNOWLEDGE
  );
}


// ============================================================
// GET SCIENCE KNOWLEDGE SECTION
// ============================================================

function getScienceKnowledgeSection(
  category
) {

  if (!category) {
    return SCIENCE_KNOWLEDGE;
  }

  return (
    getScienceKnowledge(
      category
    ) ||
    SCIENCE_KNOWLEDGE
  );
}


// ============================================================
// GET FULL ROMAN KNOWLEDGE
// ============================================================

export function getFullRomanKnowledge() {

  return ROMAN_KNOWLEDGE;
}


// ============================================================
// GET FULL SCIENCE KNOWLEDGE
// ============================================================

export function getFullScienceKnowledge() {

  return SCIENCE_KNOWLEDGE;
}


// ============================================================
// GET KNOWLEDGE FOR QUESTION
// ============================================================

export function getKnowledgeForQuestion(
  input
) {

  const text =
    normalizeText(input);

  if (!text) {

    return {
      type: "general",
      category: null,
      knowledge: null,
      fullKnowledge: null,
      confidence: "low",
    };
  }


  // ----------------------------------------------------------
  // REZE QUESTIONS
  //
  // Check these first so questions such as
  // "What is Reze's personality?"
  // are not confused with general keywords.
  // ----------------------------------------------------------

  if (
    isRezeQuestion(text)
  ) {

    return {

      type: "reze",

      category: null,

      knowledge: null,

      fullKnowledge: null,

      confidence: "high",
    };
  }


  // ----------------------------------------------------------
  // ROMAN MATCH
  // ----------------------------------------------------------

  const romanMatch =
    getRomanMatch(text);


  // ----------------------------------------------------------
  // SCIENCE MATCH
  // ----------------------------------------------------------

  const scienceMatch =
    getScienceMatch(text);


  // ----------------------------------------------------------
  // BOTH ROMAN + SCIENCE
  //
  // If a question contains both domains,
  // use the stronger match.
  // ----------------------------------------------------------

  if (
    romanMatch.score > 0 &&
    scienceMatch.score > 0
  ) {

    if (
      romanMatch.score >=
      scienceMatch.score
    ) {

      const category =
        romanMatch.category;

      return {

        type: "roman",

        category,

        knowledge:
          getRomanKnowledgeSection(
            category
          ),

        fullKnowledge:
          ROMAN_KNOWLEDGE,

        confidence:
          romanMatch.score >=
          scienceMatch.score + 2
            ? "high"
            : "medium",
      };
    }


    const category =
      scienceMatch.category;

    return {

      type: "science",

      category,

      knowledge:
        getScienceKnowledgeSection(
          category
        ),

      fullKnowledge:
        SCIENCE_KNOWLEDGE,

      confidence:
        scienceMatch.score >=
        romanMatch.score + 2
          ? "high"
          : "medium",
    };
  }


  // ----------------------------------------------------------
  // ROMAN ONLY
  // ----------------------------------------------------------

  if (
    romanMatch.score > 0
  ) {

    const category =
      romanMatch.category;

    return {

      type: "roman",

      category,

      knowledge:
        getRomanKnowledgeSection(
          category
        ),

      fullKnowledge:
        ROMAN_KNOWLEDGE,

      confidence:
        romanMatch.score >= 3
          ? "high"
          : "medium",
    };
  }


  // ----------------------------------------------------------
  // SCIENCE ONLY
  // ----------------------------------------------------------

  if (
    scienceMatch.score > 0
  ) {

    const category =
      scienceMatch.category;

    return {

      type: "science",

      category,

      knowledge:
        getScienceKnowledgeSection(
          category
        ),

      fullKnowledge:
        SCIENCE_KNOWLEDGE,

      confidence:
        scienceMatch.score >= 3
          ? "high"
          : "medium",
    };
  }


  // ----------------------------------------------------------
  // GENERAL QUESTION
  // ----------------------------------------------------------

  return {

    type: "general",

    category: null,

    knowledge: null,

    fullKnowledge: null,

    confidence: "low",
  };
}


// ============================================================
// MAIN ROUTER
// ============================================================

export function routeKnowledge(
  input
) {

  return getKnowledgeForQuestion(
    input
  );
}


// ============================================================
// GET ROMAN CATEGORY LIST
// ============================================================

export function getRomanCategories() {

  return Object.keys(
    ROMAN_KEYWORDS
  );
}


// ============================================================
// GET SCIENCE CATEGORY LIST
// ============================================================

export function getScienceCategories() {

  return Object.keys(
    SCIENCE_KEYWORDS
  );
}


// ============================================================
// GET ALL CATEGORIES
// ============================================================

export function getAllKnowledgeCategories() {

  return {

    roman:
      getRomanCategories(),

    science:
      getScienceCategories(),

    reze: [
      "identity",
      "personality",
      "memory",
      "capabilities",
    ],
  };
}


// ============================================================
// DEFAULT EXPORT
// ============================================================

export default {

  routeKnowledge,

  getKnowledgeForQuestion,

  getFullRomanKnowledge,

  getFullScienceKnowledge,

  getRomanCategories,

  getScienceCategories,

  getAllKnowledgeCategories,

  detectRomanCategory,

  detectScienceCategory,

  isRomanQuestion,

  isScienceQuestion,

  isRezeQuestion,
};
