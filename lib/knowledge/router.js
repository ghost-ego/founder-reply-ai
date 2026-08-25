// lib/knowledge/router.js

import {
  ROMAN_KNOWLEDGE,
  REZE_KNOWLEDGE,
} from "./index.js";

// ============================================
// REZE KNOWLEDGE ROUTER
// ============================================

const ROMAN_KEYWORDS = {
  economy: [
    "economy",
    "economic",
    "agriculture",
    "trade",
    "tax",
    "taxation",
    "money",
    "coin",
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
    "ostia",
  ],

  architecture: [
    "architecture",
    "architect",
    "building",
    "engineering",
    "engineer",
    "aqueduct",
    "road",
    "roads",
    "bridge",
    "concrete",
    "arch",
    "vault",
    "dome",
    "pantheon",
    "colosseum",
    "amphitheater",
    "bath",
    "baths",
    "forum",
    "basilica",
    "temple",
    "villa",
    "domus",
    "insula",
    "wall",
    "hadrian's wall",
    "sewer",
    "cloaca",
    "trajan's column",
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
    "maccdonia",
    "macedonia",
    "pannonia",
    "moesia",
    "thrace",
    "cappadocia",
    "arabia petraea",
    "cyprus",
    "sicily",
    "sicilia",
  ],

  timeline: [
    "timeline",
    "history",
    "when",
    "year",
    "date",
    "founded",
    "foundation",
    "kingdom",
    "republic",
    "empire",
    "emperor",
    "augustus",
    "caesar",
    "rome",
    "roman empire",
    "roman republic",
    "punic war",
    "hannibal",
    "constantine",
    "diocletian",
    "justinian",
    "476",
    "1453",
  ],
};

// ============================================
// DETECT ROMAN
// ============================================

function isRomanQuestion(query) {
  const text = query.toLowerCase();

  const romanTerms = [
    "roman",
    "rome",
    "romans",
    "latin",
    "roman empire",
    "roman republic",
    "roman kingdom",
    "byzantine",
    "eastern roman",
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
        score++;
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
      topic: null,
      knowledge: [],
    };
  }

  const text = query.toLowerCase();

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
    // return all current Roman knowledge.
    return {
      found: true,
      domain: "history",
      civilization: "roman",
      topic: "general",
      knowledge: Object.values(ROMAN_KNOWLEDGE),
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

      return `
KNOWLEDGE SOURCE:
Title: ${knowledge.title || "Unknown"}
Civilization: ${knowledge.civilization || "Unknown"}
Period: ${knowledge.period || "Unknown"}

${JSON.stringify(knowledge, null, 2)}
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
