// lib/knowledge/router.js

import {
  ROMAN_KNOWLEDGE,
  REZE_KNOWLEDGE,
} from "./index.js";

// ============================================================
// REZE KNOWLEDGE ROUTER
// ============================================================
//
// Purpose:
// - Keep the FULL knowledge files intact.
// - Detect whether a question is about Rome/Roman history.
// - Detect whether a question is about Reze.
// - Return the appropriate knowledge.
// - Fall back safely when no specific category is detected.
//
// IMPORTANT:
// This file does NOT contain or replace your large knowledge
// database. Your full knowledge remains in index.js / the
// imported knowledge files.
// ============================================================


// ============================================================
// ROMAN EMPIRE KEYWORDS
// ============================================================

const ROMAN_KEYWORDS = {
  economy: [
    "economy",
    "economic",
    "agriculture",
    "farmer",
    "farmers",
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
    "slavery",
    "slave economy",
    "grain",
    "olive oil",
    "wine",
    "production",
    "imports",
    "exports",
    "economic system",
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
    "soldier",
    "soldiers",
    "centurion",
    "centurions",
    "general",
    "generals",
    "commander",
    "commanders",
    "battle",
    "battles",
    "war",
    "wars",
    "warfare",
    "weapon",
    "weapons",
    "sword",
    "shield",
    "armor",
    "armour",
    "formation",
    "auxiliary",
    "auxiliaries",
    "praetorian guard",
    "praetorian",
    "navy",
    "fleet",
    "siege",
    "sieges",
    "conquest",
    "conquests",
    "military strategy",
    "military tactics",
  ],

  politics: [
    "roman republic",
    "roman empire",
    "roman politics",
    "politics",
    "political",
    "senate",
    "senators",
    "senator",
    "consul",
    "consuls",
    "dictator",
    "dictatorship",
    "emperor",
    "emperors",
    "empress",
    "empresses",
    "caesar",
    "caesars",
    "augustus",
    "succession",
    "succession crisis",
    "government",
    "administration",
    "province",
    "provinces",
    "governor",
    "governors",
    "republic",
    "republican",
    "imperial",
    "empire",
    "roman law",
    "law",
    "laws",
    "citizenship",
    "citizen",
    "citizens",
    "patrician",
    "patricians",
    "plebeian",
    "plebeians",
  ],

  society: [
    "roman society",
    "society",
    "social",
    "family",
    "families",
    "women",
    "woman",
    "men",
    "children",
    "child",
    "marriage",
    "married",
    "education",
    "school",
    "schools",
    "religion",
    "religious",
    "culture",
    "cultural",
    "daily life",
    "life in rome",
    "roman life",
    "citizens",
    "slaves",
    "slavery",
    "freedman",
    "freedmen",
    "freedwoman",
    "freedwomen",
    "social class",
    "social classes",
  ],

  architecture: [
    "roman architecture",
    "architecture",
    "building",
    "buildings",
    "colosseum",
    "coliseum",
    "forum",
    "forums",
    "aqueduct",
    "aqueducts",
    "road",
    "roads",
    "roman roads",
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
  ],

  religion: [
    "roman religion",
    "roman gods",
    "roman god",
    "jupiter",
    "mars",
    "venus",
    "minerva",
    "neptune",
    "apollo",
    "mercury",
    "saturn",
    "vesta",
    "juno",
    "janus",
    "bacchus",
    "roman mythology",
    "mythology",
    "myth",
    "gods",
    "goddess",
    "goddesses",
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
    "constantine",
  ],

  people: [
    "julius caesar",
    "caesar",
    "augustus",
    "octavian",
    "marcus aurelius",
    "nero",
    "caligula",
    "claudius",
    "tiberius",
    "trajan",
    "hadrian",
    "constantine",
    "diocletian",
    "pompey",
    "cicero",
    "spartacus",
    "hannibal",
    "scipio",
    "brutus",
    "cassius",
    "cleopatra",
    "mark antony",
    "antony",
    "virgil",
    "cato",
    "sulla",
    "marius",
    "romulus",
    "remus",
  ],

  geography: [
    "rome",
    "roman",
    "romans",
    "italy",
    "italian",
    "italia",
    "mediterranean",
    "mediterranean sea",
    "gaul",
    "gallia",
    "britain",
    "britannia",
    "egypt",
    "egyptian",
    "greece",
    "greek",
    "greeks",
    "spain",
    "hispania",
    "africa",
    "north africa",
    "asia minor",
    "syria",
    "judea",
    "palestine",
    "mesopotamia",
    "dacia",
    "germania",
    "constantinople",
    "carthage",
    "pompeii",
    "naples",
    "sicily",
    "sardinia",
    "corsica",
    "rhine",
    "danube",
  ],

  history: [
    "roman history",
    "history of rome",
    "history of the roman empire",
    "ancient rome",
    "ancient roman",
    "roman republic",
    "roman empire",
    "fall of rome",
    "fall of the roman empire",
    "rise of rome",
    "rise of the roman empire",
    "early rome",
    "late rome",
    "western roman empire",
    "eastern roman empire",
    "byzantine",
    "byzantine empire",
    "punic war",
    "punic wars",
    "first punic war",
    "second punic war",
    "third punic war",
    "civil war",
    "civil wars",
    "crisis of the third century",
    "third century crisis",
    "tetrarchy",
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
// GENERAL ROMAN TERMS
// ============================================================

const GENERAL_ROMAN_KEYWORDS = [
  "roman",
  "romans",
  "rome",
  "ancient rome",
  "roman empire",
  "roman republic",
  "ancient roman",
  "latin",
  "latins",
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
// WORD / PHRASE MATCHING
// ============================================================

function containsKeyword(text, keyword) {
  const normalizedKeyword = normalizeText(keyword);

  if (!normalizedKeyword) {
    return false;
  }

  // Multi-word phrases can simply use includes().
  if (normalizedKeyword.includes(" ")) {
    return text.includes(normalizedKeyword);
  }

  // Single words should use word boundaries so that,
  // for example, "roman" does not accidentally match
  // unrelated words.
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
      // Longer phrases are generally more meaningful.
      if (keyword.includes(" ")) {
        score += 3;
      } else {
        score += 1;
      }
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

  for (const [category, keywords] of Object.entries(ROMAN_KEYWORDS)) {
    const score = scoreKeywords(text, keywords);

    if (score > bestScore) {
      bestScore = score;
      bestCategory = category;
    }
  }

  return bestCategory;
}


// ============================================================
// IS ROMAN QUESTION?
// ============================================================

export function isRomanQuestion(input) {
  const text = normalizeText(input);

  if (!text) {
    return false;
  }

  // Category-specific Roman detection.
  const category = detectRomanCategory(text);

  if (category) {
    return true;
  }

  // General Roman detection.
  return GENERAL_ROMAN_KEYWORDS.some((keyword) =>
    containsKeyword(text, keyword)
  );
}


// ============================================================
// IS REZE QUESTION?
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
// GET KNOWLEDGE SECTION
// ============================================================

function getKnowledgeSection(knowledge, category) {
  if (!knowledge) {
    return null;
  }

  // If the knowledge is an object and contains the category,
  // return the specific category.
  if (
    typeof knowledge === "object" &&
    !Array.isArray(knowledge) &&
    category &&
    Object.prototype.hasOwnProperty.call(knowledge, category)
  ) {
    return knowledge[category];
  }

  // Otherwise return the complete knowledge object.
  return knowledge;
}


// ============================================================
// MAIN ROUTER
// ============================================================
//
// Returns:
// {
//   type: "roman" | "reze" | "general",
//   category: string | null,
//   knowledge: any,
//   confidence: "high" | "medium" | "low"
// }
//
// This allows your API route to use the FULL knowledge object
// without destroying or modifying it.
// ============================================================

export function routeKnowledge(input) {
  const text = normalizeText(input);

  if (!text) {
    return {
      type: "general",
      category: null,
      knowledge: null,
      confidence: "low",
    };
  }

  const roman = isRomanQuestion(text);
  const reze = isRezeQuestion(text);

  // ----------------------------------------------------------
  // Reze-specific question
  // ----------------------------------------------------------

  if (reze && !roman) {
    return {
      type: "reze",
      category: null,
      knowledge: REZE_KNOWLEDGE,
      confidence: "high",
    };
  }

  // ----------------------------------------------------------
  // Roman-specific question
  // ----------------------------------------------------------

  if (roman && !reze) {
    const category = detectRomanCategory(text);

    return {
      type: "roman",
      category,
      knowledge: getKnowledgeSection(
        ROMAN_KNOWLEDGE,
        category
      ),
      confidence: category ? "high" : "medium",
    };
  }

  // ----------------------------------------------------------
  // Question contains both
  // ----------------------------------------------------------
  //
  // Example:
  // "Reze, explain what the Roman Empire was."
  //
  // In this situation Roman knowledge is usually more useful
  // because the actual subject is Rome.
  // ----------------------------------------------------------

  if (roman && reze) {
    const category = detectRomanCategory(text);

    return {
      type: "roman",
      category,
      knowledge: getKnowledgeSection(
        ROMAN_KNOWLEDGE,
        category
      ),
      secondaryKnowledge: REZE_KNOWLEDGE,
      confidence: category ? "high" : "medium",
    };
  }

  // ----------------------------------------------------------
  // No special knowledge route
  // ----------------------------------------------------------

  return {
    type: "general",
    category: null,
    knowledge: null,
    confidence: "low",
  };
}


// ============================================================
// GET FULL KNOWLEDGE
// ============================================================
//
// Useful when the API needs the complete knowledge database
// instead of only one category.
//
// IMPORTANT:
// Nothing is copied, removed, shortened, or rewritten here.
// The original imported objects are returned.
// ============================================================

export function getFullRomanKnowledge() {
  return ROMAN_KNOWLEDGE;
}

export function getFullRezeKnowledge() {
  return REZE_KNOWLEDGE;
}


// ============================================================
// DEFAULT EXPORT
// ============================================================

export default {
  routeKnowledge,
  detectRomanCategory,
  isRomanQuestion,
  isRezeQuestion,
  getFullRomanKnowledge,
  getFullRezeKnowledge,
};
