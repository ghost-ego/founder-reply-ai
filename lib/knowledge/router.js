// lib/knowledge/router.js

import romanKnowledge from "./history/roman/index.js";

// ============================================================
// REZE KNOWLEDGE ROUTER
// ============================================================
//
// This router uses the FULL Roman knowledge system:
//
// lib/knowledge/history/roman/
//   ├── overview
//   ├── republic
//   ├── empire
//   ├── emperors
//   ├── military
//   ├── wars
//   ├── society
//   ├── religion
//   ├── economy
//   ├── architecture
//   ├── provinces
//   └── timeline
//
// The small app/api/reze/romanKnowledge.js file is NOT used here.
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
    "republic",
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
    "empire",
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
    "army",
    "military",
    "legion",
    "legions",
    "legionary",
    "legionaries",
    "centurion",
    "centurions",
    "soldier",
    "soldiers",
    "general",
    "generals",
    "commander",
    "commanders",
    "auxiliary",
    "auxiliaries",
    "praetorian guard",
    "praetorian",
    "roman navy",
    "navy",
    "fleet",
    "military strategy",
    "military tactics",
    "roman weapons",
    "roman armor",
    "roman armour",
    "roman sword",
    "roman shield",
    "siege",
    "sieges",
    "fort",
    "forts",
    "fortification",
    "fortifications",
  ],

  wars: [
    "war",
    "wars",
    "battle",
    "battles",
    "warfare",
    "punic war",
    "punic wars",
    "first punic war",
    "second punic war",
    "third punic war",
    "civil war",
    "civil wars",
    "gallic war",
    "gallic wars",
    "roman conquest",
    "conquest",
    "hannibal",
    "carthage",
    "scipio",
    "spartacus",
    "rebellion",
    "revolt",
    "invasion",
    "invasions",
  ],

  society: [
    "roman society",
    "society",
    "social class",
    "social classes",
    "roman family",
    "roman families",
    "women in rome",
    "roman women",
    "children in rome",
    "marriage",
    "education",
    "school",
    "daily life",
    "roman life",
    "life in rome",
    "slavery",
    "slaves",
    "slave",
    "freedman",
    "freedmen",
    "freedwoman",
    "freedwomen",
    "citizenship",
    "citizen",
    "citizens",
    "patrician",
    "plebeian",
  ],

  religion: [
    "roman religion",
    "roman gods",
    "roman god",
    "roman goddess",
    "roman mythology",
    "mythology",
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
    "pagan",
    "paganism",
    "christianity",
    "christian",
    "christians",
    "persecution",
    "martyr",
    "martyrs",
    "church",
    "conversion",
  ],

  economy: [
    "roman economy",
    "economy",
    "economic",
    "agriculture",
    "farmer",
    "farmers",
    "farming",
    "trade",
    "trading",
    "tax",
    "taxes",
    "taxation",
    "money",
    "coin",
    "coins",
    "currency",
    "banking",
    "merchant",
    "merchants",
    "market",
    "markets",
    "commerce",
    "commercial",
    "business",
    "wealth",
    "wages",
    "salary",
    "slave economy",
    "grain",
    "olive oil",
    "wine",
    "production",
    "imports",
    "exports",
    "economic system",
  ],

  architecture: [
    "roman architecture",
    "architecture",
    "roman building",
    "roman buildings",
    "building",
    "buildings",
    "colosseum",
    "coliseum",
    "forum",
    "forums",
    "aqueduct",
    "aqueducts",
    "roman road",
    "roman roads",
    "road",
    "roads",
    "bath",
    "baths",
    "thermae",
    "temple",
    "temples",
    "basilica",
    "basilicas",
    "amphitheater",
    "amphitheatre",
    "circus",
    "domus",
    "villa",
    "villas",
    "insula",
    "insulae",
    "bridge",
    "bridges",
    "concrete",
    "roman concrete",
    "engineering",
    "roman engineering",
    "aqueduct",
  ],

  provinces: [
    "roman provinces",
    "roman province",
    "province",
    "provinces",
    "gaul",
    "gallia",
    "britannia",
    "britain",
    "hispania",
    "spain",
    "egypt",
    "egyptian province",
    "syria",
    "judea",
    "palestine",
    "dacia",
    "germania",
    "africa province",
    "asia minor",
    "sicily",
    "sardinia",
    "corsica",
    "mesopotamia",
    "thrace",
    "mauretania",
    "illyria",
    "pannonia",
  ],

  timeline: [
    "roman timeline",
    "timeline",
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
    "bce",
    "bc",
    "ce",
    "ad",
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
    .replace(/[^\w\s'-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}


// ============================================================
// KEYWORD MATCHING
// ============================================================

function containsKeyword(text, keyword) {
  const normalizedKeyword = normalizeText(keyword);

  if (!normalizedKeyword) {
    return false;
  }

  // Phrases
  if (normalizedKeyword.includes(" ")) {
    return text.includes(normalizedKeyword);
  }

  // Individual words
  const escaped = normalizedKeyword.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );

  const regex = new RegExp(`\\b${escaped}\\b`, "i");

  return regex.test(text);
}


// ============================================================
// SCORE KEYWORDS
// ============================================================

function scoreKeywords(text, keywords) {
  let score = 0;

  for (const keyword of keywords) {
    if (containsKeyword(text, keyword)) {
      score += keyword.includes(" ") ? 3 : 1;
    }
  }

  return score;
}


// ============================================================
// DETECT ROMAN CATEGORY
// ============================================================

export function detectRomanCategory(input) {
  const text = normalizeText(input);

  if (!text) {
    return null;
  }

  let bestCategory = null;
  let bestScore = 0;

  for (const [category, keywords] of Object.entries(
    ROMAN_KEYWORDS
  )) {
    const score = scoreKeywords(text, keywords);

    if (score > bestScore) {
      bestScore = score;
      bestCategory = category;
    }
  }

  return bestCategory;
}


// ============================================================
// IS ROMAN QUESTION
// ============================================================

export function isRomanQuestion(input) {
  const text = normalizeText(input);

  if (!text) {
    return false;
  }

  return Boolean(detectRomanCategory(text));
}


// ============================================================
// IS REZE QUESTION
// ============================================================

export function isRezeQuestion(input) {
  const text = normalizeText(input);

  if (!text) {
    return false;
  }

  return REZE_KEYWORDS.some((keyword) =>
    containsKeyword(text, keyword)
  );
}


// ============================================================
// GET ROMAN KNOWLEDGE SECTION
// ============================================================

function getRomanKnowledgeSection(category) {
  if (!category) {
    return romanKnowledge;
  }

  return romanKnowledge[category] || romanKnowledge;
}


// ============================================================
// GET FULL ROMAN KNOWLEDGE
// ============================================================
//
// This returns the COMPLETE object:
//
// overview
// republic
// empire
// emperors
// military
// wars
// society
// religion
// economy
// architecture
// provinces
// timeline
//
// Nothing is removed or shortened.
// ============================================================

export function getFullRomanKnowledge() {
  return romanKnowledge;
}


// ============================================================
// GET KNOWLEDGE FOR QUESTION
// ============================================================

export function getKnowledgeForQuestion(input) {
  const text = normalizeText(input);

  if (!text) {
    return {
      type: "general",
      category: null,
      knowledge: null,
      fullKnowledge: null,
      confidence: "low",
    };
  }

  const roman = isRomanQuestion(text);
  const reze = isRezeQuestion(text);

  // ----------------------------------------------------------
  // ROMAN QUESTION
  // ----------------------------------------------------------

  if (roman) {
    const category = detectRomanCategory(text);

    return {
      type: "roman",
      category,
      knowledge: getRomanKnowledgeSection(category),
      fullKnowledge: romanKnowledge,
      confidence: "high",
    };
  }

  // ----------------------------------------------------------
  // REZE QUESTION
  // ----------------------------------------------------------

  if (reze) {
    return {
      type: "reze",
      category: null,
      knowledge: null,
      fullKnowledge: null,
      confidence: "high",
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

export function routeKnowledge(input) {
  return getKnowledgeForQuestion(input);
}


// ============================================================
// DEFAULT EXPORT
// ============================================================

export default {
  routeKnowledge,
  getKnowledgeForQuestion,
  getFullRomanKnowledge,
  detectRomanCategory,
  isRomanQuestion,
  isRezeQuestion,
};
