// lib/knowledge/index.js

// ============================================
// REZE KNOWLEDGE ENGINE
// Central knowledge registry
// ============================================

// Roman History
import ROMAN_ECONOMY from "./history/roman/economy.js";
import ROMAN_ARCHITECTURE from "./history/roman/architecture.js";
import romanProvinces from "./history/roman/provinces.js";
import romanTimeline from "./history/roman/timeline.js";

// ============================================
// KNOWLEDGE DOMAINS
// ============================================

export const REZE_KNOWLEDGE = {
  history: {
    roman: {
      economy: ROMAN_ECONOMY,
      architecture: ROMAN_ARCHITECTURE,
      provinces: romanProvinces,
      timeline: romanTimeline,
    },
  },

  science: {},

  universe: {},

  earth: {},

  humanity: {},
};

// ============================================
// ROMAN KNOWLEDGE
// ============================================

export const ROMAN_KNOWLEDGE = {
  economy: ROMAN_ECONOMY,
  architecture: ROMAN_ARCHITECTURE,
  provinces: romanProvinces,
  timeline: romanTimeline,
};

// ============================================
// ALL AVAILABLE KNOWLEDGE
// ============================================

export const ALL_KNOWLEDGE = [
  ROMAN_ECONOMY,
  ROMAN_ARCHITECTURE,
  romanProvinces,
  romanTimeline,
];

// ============================================
// KNOWLEDGE SEARCH
// ============================================

export function searchKnowledge(query) {
  if (!query || typeof query !== "string") {
    return [];
  }

  const normalizedQuery = query.toLowerCase().trim();

  const results = [];

  for (const knowledge of ALL_KNOWLEDGE) {
    if (!knowledge) continue;

    const searchableText = JSON.stringify(knowledge).toLowerCase();

    if (searchableText.includes(normalizedQuery)) {
      results.push(knowledge);
    }
  }

  return results;
}

// ============================================
// GET ROMAN KNOWLEDGE
// ============================================

export function getRomanKnowledge(topic) {
  if (!topic) {
    return ROMAN_KNOWLEDGE;
  }

  const normalizedTopic = topic.toLowerCase().trim();

  const topicMap = {
    economy: ROMAN_ECONOMY,
    architecture: ROMAN_ARCHITECTURE,
    provinces: romanProvinces,
    timeline: romanTimeline,
  };

  return topicMap[normalizedTopic] || null;
}

// ============================================
// DEFAULT EXPORT
// ============================================

export default REZE_KNOWLEDGE;
