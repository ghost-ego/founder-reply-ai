// lib/knowledge/index.js

// ============================================
// REZE KNOWLEDGE ENGINE
// Central knowledge registry
// ============================================

// ============================================
// ROMAN HISTORY MODULES
// ============================================

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

// ============================================
// MODULE LOADER
// Supports both default and named exports
// ============================================

function unwrapKnowledge(module) {
  if (!module) return null;

  // Most of the knowledge files use default exports.
  if (module.default) {
    return module.default;
  }

  // Also support files that only use a named export.
  const values = Object.values(module);

  if (values.length > 0) {
    return values[0];
  }

  return module;
}

// ============================================
// LOAD ROMAN KNOWLEDGE
// ============================================

const ROMAN_EMPERORS = unwrapKnowledge(romanEmperorsModule);
const ROMAN_ECONOMY = unwrapKnowledge(romanEconomyModule);
const ROMAN_ARCHITECTURE = unwrapKnowledge(romanArchitectureModule);
const ROMAN_EMPIRE = unwrapKnowledge(romanEmpireModule);
const ROMAN_MILITARY = unwrapKnowledge(romanMilitaryModule);
const ROMAN_OVERVIEW = unwrapKnowledge(romanOverviewModule);
const ROMAN_PROVINCES = unwrapKnowledge(romanProvincesModule);
const ROMAN_RELIGION = unwrapKnowledge(romanReligionModule);
const ROMAN_REPUBLIC = unwrapKnowledge(romanRepublicModule);
const ROMAN_TIMELINE = unwrapKnowledge(romanTimelineModule);
const ROMAN_WARS = unwrapKnowledge(romanWarsModule);

// ============================================
// KNOWLEDGE DOMAINS
// ============================================

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

  science: {},
  universe: {},
  earth: {},
  humanity: {},
};

// ============================================
// ROMAN KNOWLEDGE
// ============================================

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

// ============================================
// ALL AVAILABLE KNOWLEDGE
// ============================================

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
].filter(Boolean);

// ============================================
// KNOWLEDGE SEARCH
// ============================================

export function searchKnowledge(query) {
  if (!query || typeof query !== "string") {
    return [];
  }

  const normalizedQuery = query.toLowerCase().trim();

  if (!normalizedQuery) {
    return [];
  }

  const results = [];

  for (const knowledge of ALL_KNOWLEDGE) {
    if (!knowledge) continue;

    let searchableText = "";

    try {
      searchableText = JSON.stringify(knowledge).toLowerCase();
    } catch {
      continue;
    }

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
  if (!topic || typeof topic !== "string") {
    return ROMAN_KNOWLEDGE;
  }

  const normalizedTopic = topic.toLowerCase().trim();

  const topicMap = {
    emperors: ROMAN_EMPERORS,
    emperor: ROMAN_EMPERORS,

    economy: ROMAN_ECONOMY,

    architecture: ROMAN_ARCHITECTURE,
    engineering: ROMAN_ARCHITECTURE,

    empire: ROMAN_EMPIRE,

    military: ROMAN_MILITARY,
    army: ROMAN_MILITARY,
    wars: ROMAN_WARS,
    war: ROMAN_WARS,

    overview: ROMAN_OVERVIEW,

    provinces: ROMAN_PROVINCES,
    province: ROMAN_PROVINCES,

    religion: ROMAN_RELIGION,

    republic: ROMAN_REPUBLIC,

    timeline: ROMAN_TIMELINE,
  };

  return topicMap[normalizedTopic] || null;
}

// ============================================
// DEFAULT EXPORT
// ============================================

export default REZE_KNOWLEDGE;
