// lib/knowledge/router.js

import {
  ROMAN_KNOWLEDGE,
  REZE_KNOWLEDGE,
} from "./index.js";

// ============================================
// REZE KNOWLEDGE ROUTER
// ============================================

const ROMAN_KEYWORDS = {
  emperors: [
    "emperor",
    "emperors",
    "empress",
    "augustus",
    "tiberius",
    "caligula",
    "claudius",
    "nero",
    "vespasian",
    "titus",
    "domitian",
    "nerva",
    "trajan",
    "hadrian",
    "antoninus pius",
    "marcus aurelius",
    "commodus",
    "septimius severus",
    "caracalla",
    "diocletian",
    "constantine",
    "constantine the great",
    "julian",
    "theodosius",
    "justinian",
    "succession",
    "dynasty",
  ],

  economy: [
    "economy",
    "economic",
    "agriculture",
    "trade",
    "tax",
    "taxation",
    "money",
    "coin",
    "coins",
    "banking",
    "slavery",
    "slave",
    "latifundia",
    "grain",
    "wine",
    "olive oil",
    "mining",
    "garum",
    "labor",
    "land",
    "ports",
    "port",
    "ostia",
    "inflation",
    "market",
    "commerce",
    "manufacturing",
    "business",
    "wealth",
  ],

  architecture: [
    "architecture",
    "architect",
    "building",
    "buildings",
    "engineering",
    "engineer",
    "aqueduct",
    "aqueducts",
    "road",
    "roads",
    "bridge",
    "bridges",
    "concrete",
    "arch",
    "arches",
    "vault",
    "vaults",
    "dome",
    "domes",
    "pantheon",
    "colosseum",
    "amphitheater",
    "amphitheatre",
    "bath",
    "baths",
    "forum",
    "forums",
    "basilica",
    "temple",
    "temples",
    "villa",
    "villas",
    "domus",
    "insula",
    "wall",
    "hadrian's wall",
    "sewer",
    "cloaca",
    "trajan's column",
    "column",
    "columns",
    "mosaic",
    "mosaics",
    "fresco",
    "frescoes",
    "pompeii",
    "herculaneum",
    "construction",
    "crane",
    "marble",
  ],

  provinces: [
    "province",
    "provinces",
    "provincial",
    "syria",
    "egypt",
    "aegyptus",
    "britannia",
    "britain",
    "gaul",
    "gallia",
    "hispania",
    "spain",
    "dacia",
    "judaea",
    "judea",
    "asia province",
    "achaia",
    "macedonia",
    "pannonia",
    "moesia",
    "thrace",
    "cappadocia",
    "arabia petraea",
    "cyprus",
    "sicily",
    "sicilia",
    "north africa",
    "africa",
    "britain",
    "levant",
    "mesopotamia",
  ],

  timeline: [
    "timeline",
    "chronology",
    "when",
    "year",
    "date",
    "founded",
    "foundation",
    "753 bc",
    "753 bce",
    "509 bc",
    "509 bce",
    "27 bc",
    "27 bce",
    "476",
    "1453",
    "period",
    "era",
  ],

  empire: [
    "roman empire",
    "empire",
    "imperial",
    "imperialism",
    "roman imperial",
    "fall of rome",
    "fall of the roman empire",
    "western roman empire",
    "eastern roman empire",
    "byzantine empire",
    "byzantine",
    "constantinople",
    "roman expansion",
    "roman territory",
    "territorial extent",
  ],

  military: [
    "military",
    "army",
    "soldier",
    "soldiers",
    "legion",
    "legions",
    "legionary",
    "centurion",
    "praetorian guard",
    "navy",
    "fleet",
    "weapon",
    "weapons",
    "armor",
    "armour",
    "fort",
    "fortress",
    "frontier",
    "limes",
    "battle",
    "campaign",
    "military campaign",
    "roman army",
  ],

  overview: [
    "roman history",
    "history of rome",
    "ancient rome",
    "ancient roman",
    "roman civilization",
    "roman civilization",
    "roman culture",
    "roman society",
    "romans",
    "romans history",
  ],

  religion: [
    "roman religion",
    "religion",
    "roman gods",
    "roman god",
    "jupiter",
    "mars",
    "venus",
    "neptune",
    "minerva",
    "juno",
    "apollo",
    "vesta",
    "saturn",
    "roman mythology",
    "pagan",
    "paganism",
    "christianity",
    "christian",
    "christians",
    "christianization",
    "church",
    "religious",
  ],

  republic: [
    "roman republic",
    "republic",
    "senate",
    "senators",
    "consul",
    "consuls",
    "tribune",
    "tribunes",
    "patrician",
    "plebeian",
    "plebs",
    "cursus honorum",
    "roman politics",
    "roman political system",
    "julius caesar",
    "caesar",
  ],

  wars: [
    "roman war",
    "roman wars",
    "war",
    "wars",
    "battle",
    "battles",
    "punic war",
    "punic wars",
    "hannibal",
    "carthage",
    "carthaginian",
    "gallic war",
    "gallic wars",
    "gaul war",
    "civil war",
    "civil wars",
    "dacian wars",
    "dacian war",
    "jewish war",
    "parthian war",
    "persian war",
    "macedonian war",
    "samnite war",
  ],
};

// ============================================
// DETECT ROMAN
// ============================================

function isRomanQuestion(query) {
  if (!query || typeof query !== "string") {
    return false;
  }

  const text = query.toLowerCase();

  const romanTerms = [
    "roman",
    "rome",
    "romans",
    "latin",
    "roman empire",
    "roman republic",
    "roman kingdom",
    "roman army",
    "roman emperor",
    "roman emperors",
    "roman religion",
    "roman economy",
    "roman architecture",
    "roman history",
    "roman wars",
    "roman provinces",
    "byzantine",
    "eastern roman",
    "western roman",
    "constantinople",
    "julius caesar",
    "augustus",
    "hadrian",
    "trajan",
    "nero",
    "constantine",
    "justinian",
    "colosseum",
    "pantheon",
    "pompeii",
    "hadrian's wall",
  ];

  return romanTerms.some((term) => text.includes(term));
}

// ============================================
// DETECT TOPIC
// ============================================

function detectRomanTopic(query) {
  const text = query.toLowerCase();

  let bestTopic = null;
  let bestScore = 0;

  for (const [topic, keywords] of Object.entries(ROMAN_KEYWORDS)) {
    let score = 0;

    for (const keyword of keywords) {
      if (text.includes(keyword)) {
        // More specific phrases get more weight.
        if (keyword.includes(" ")) {
          score += 2;
        } else {
          score += 1;
        }
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestTopic = topic;
    }
  }

  return bestTopic;
}

// ============================================
// GET KNOWLEDGE FOR QUESTION
// ============================================

export function routeKnowledge(query) {
  if (!query || typeof query !== "string") {
    return {
      found: false,
      domain: null,
      civilization: null,
      topic: null,
      knowledge: [],
    };
  }

  const text = query.toLowerCase().trim();

  // ------------------------------------------
  // ROMAN HISTORY
  // ------------------------------------------

  if (isRomanQuestion(text)) {
    const topic = detectRomanTopic(text);

    if (topic && ROMAN_KNOWLEDGE[topic]) {
      return {
        found: true,
        domain: "history",
        civilization: "roman",
        topic,
        knowledge: [ROMAN_KNOWLEDGE[topic]],
      };
    }

    // General Roman question:
    // return all Roman knowledge.
    return {
      found: true,
      domain: "history",
      civilization: "roman",
      topic: "general",
      knowledge: Object.values(ROMAN_KNOWLEDGE).filter(Boolean),
    };
  }

  // ------------------------------------------
  // FUTURE DOMAINS
  // ------------------------------------------

  if (
    text.includes("universe") ||
    text.includes("galaxy") ||
    text.includes("black hole") ||
    text.includes("star") ||
    text.includes("planet") ||
    text.includes("cosmos")
  ) {
    return {
      found: false,
      domain: "universe",
      civilization: null,
      topic: null,
      knowledge: [],
      needsExpansion: true,
    };
  }

  if (
    text.includes("physics") ||
    text.includes("chemistry") ||
    text.includes("biology") ||
    text.includes("mathematics")
  ) {
    return {
      found: false,
      domain: "science",
      civilization: null,
      topic: null,
      knowledge: [],
      needsExpansion: true,
    };
  }

  // ------------------------------------------
  // NOTHING MATCHED
  // ------------------------------------------

  return {
    found: false,
    domain: null,
    civilization: null,
    topic: null,
    knowledge: [],
  };
}

// ============================================
// BUILD KNOWLEDGE CONTEXT FOR REZE
// ============================================

export function buildKnowledgeContext(query) {
  const result = routeKnowledge(query);

  if (!result.found || result.knowledge.length === 0) {
    return {
      context: "",
      route: result,
    };
  }

  const context = result.knowledge
    .map((knowledge) => {
      if (!knowledge) return "";

      let serializedKnowledge = "";

      try {
        serializedKnowledge = JSON.stringify(knowledge, null, 2);
      } catch {
        serializedKnowledge = "";
      }

      return `
KNOWLEDGE SOURCE:
Title: ${knowledge.title || "Unknown"}
Civilization: ${knowledge.civilization || "Roman"}
Period: ${knowledge.period || "Unknown"}

${serializedKnowledge}
`;
    })
    .filter(Boolean)
    .join("\n\n");

  return {
    context,
    route: result,
  };
}

// ============================================
// DEFAULT EXPORT
// ============================================

export default routeKnowledge;
