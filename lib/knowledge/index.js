// lib/knowledge/index.js

// ============================================================
// REZE KNOWLEDGE ENGINE
// Central knowledge registry
//
// Supports:
// - Roman History
// - Science
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
// SCIENCE MODULES
// ============================================================

import * as physicsModule from "./science/physics.js";
import * as chemistryModule from "./science/chemistry.js";
import * as biologyModule from "./science/biology.js";
import * as astronomyModule from "./science/astronomy.js";
import * as earthModule from "./science/earth.js";
import * as neuroscienceModule from "./science/neuroscience.js";
import * as geneticsModule from "./science/genetics.js";
import * as quantumModule from "./science/quantum.js";
import * as astrophysicsModule from "./science/astrophysics.js";
import * as geologyModule from "./science/geology.js";
import * as climateModule from "./science/climate.js";
import * as psychologyModule from "./science/psychology.js";
import * as humanBiologyModule from "./science/humanBiology.js";
import * as roboticsModule from "./science/robotics.js";
import * as electronicsModule from "./science/electronics.js";
import * as spaceModule from "./science/space.js";
import * as cosmologyModule from "./science/cosmology.js";
import * as materialsModule from "./science/materials.js";
import * as environmentModule from "./science/environment.js";


// ============================================================
// MODULE LOADER
// Supports default and named exports
// ============================================================

function unwrapKnowledge(module) {
  if (!module) {
    return null;
  }

  // Default export
  if (module.default) {
    return module.default;
  }

  // Named export
  const values = Object.values(module);

  if (values.length > 0) {
    return values[0];
  }

  return module;
}


// ============================================================
// LOAD ROMAN KNOWLEDGE
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
// LOAD SCIENCE KNOWLEDGE
// ============================================================

const SCIENCE_PHYSICS =
  unwrapKnowledge(physicsModule);

const SCIENCE_CHEMISTRY =
  unwrapKnowledge(chemistryModule);

const SCIENCE_BIOLOGY =
  unwrapKnowledge(biologyModule);

const SCIENCE_ASTRONOMY =
  unwrapKnowledge(astronomyModule);

const SCIENCE_EARTH =
  unwrapKnowledge(earthModule);

const SCIENCE_NEUROSCIENCE =
  unwrapKnowledge(neuroscienceModule);

const SCIENCE_GENETICS =
  unwrapKnowledge(geneticsModule);

const SCIENCE_QUANTUM =
  unwrapKnowledge(quantumModule);

const SCIENCE_ASTROPHYSICS =
  unwrapKnowledge(astrophysicsModule);

const SCIENCE_GEOLOGY =
  unwrapKnowledge(geologyModule);

const SCIENCE_CLIMATE =
  unwrapKnowledge(climateModule);

const SCIENCE_PSYCHOLOGY =
  unwrapKnowledge(psychologyModule);

const SCIENCE_HUMAN_BIOLOGY =
  unwrapKnowledge(humanBiologyModule);

const SCIENCE_ROBOTICS =
  unwrapKnowledge(roboticsModule);

const SCIENCE_ELECTRONICS =
  unwrapKnowledge(electronicsModule);

const SCIENCE_SPACE =
  unwrapKnowledge(spaceModule);

const SCIENCE_COSMOLOGY =
  unwrapKnowledge(cosmologyModule);

const SCIENCE_MATERIALS =
  unwrapKnowledge(materialsModule);

const SCIENCE_ENVIRONMENT =
  unwrapKnowledge(environmentModule);


// ============================================================
// REZE KNOWLEDGE
// ============================================================

export const REZE_KNOWLEDGE = {

  // ----------------------------------------------------------
  // HISTORY
  // ----------------------------------------------------------

  history: {

    roman: {

      emperors:
        ROMAN_EMPERORS,

      economy:
        ROMAN_ECONOMY,

      architecture:
        ROMAN_ARCHITECTURE,

      empire:
        ROMAN_EMPIRE,

      military:
        ROMAN_MILITARY,

      overview:
        ROMAN_OVERVIEW,

      provinces:
        ROMAN_PROVINCES,

      religion:
        ROMAN_RELIGION,

      republic:
        ROMAN_REPUBLIC,

      timeline:
        ROMAN_TIMELINE,

      wars:
        ROMAN_WARS,
    },
  },


  // ----------------------------------------------------------
  // SCIENCE
  // ----------------------------------------------------------

  science: {

    physics:
      SCIENCE_PHYSICS,

    chemistry:
      SCIENCE_CHEMISTRY,

    biology:
      SCIENCE_BIOLOGY,

    astronomy:
      SCIENCE_ASTRONOMY,

    earth:
      SCIENCE_EARTH,

    neuroscience:
      SCIENCE_NEUROSCIENCE,

    genetics:
      SCIENCE_GENETICS,

    quantum:
      SCIENCE_QUANTUM,

    astrophysics:
      SCIENCE_ASTROPHYSICS,

    geology:
      SCIENCE_GEOLOGY,

    climate:
      SCIENCE_CLIMATE,

    psychology:
      SCIENCE_PSYCHOLOGY,

    humanBiology:
      SCIENCE_HUMAN_BIOLOGY,

    robotics:
      SCIENCE_ROBOTICS,

    electronics:
      SCIENCE_ELECTRONICS,

    space:
      SCIENCE_SPACE,

    cosmology:
      SCIENCE_COSMOLOGY,

    materials:
      SCIENCE_MATERIALS,

    environment:
      SCIENCE_ENVIRONMENT,
  },


  // ----------------------------------------------------------
  // FUTURE KNOWLEDGE DOMAINS
  // ----------------------------------------------------------

  universe: {},

  earth: {},

  humanity: {},
};


// ============================================================
// ROMAN KNOWLEDGE
// ============================================================

export const ROMAN_KNOWLEDGE = {

  emperors:
    ROMAN_EMPERORS,

  economy:
    ROMAN_ECONOMY,

  architecture:
    ROMAN_ARCHITECTURE,

  empire:
    ROMAN_EMPIRE,

  military:
    ROMAN_MILITARY,

  overview:
    ROMAN_OVERVIEW,

  provinces:
    ROMAN_PROVINCES,

  religion:
    ROMAN_RELIGION,

  republic:
    ROMAN_REPUBLIC,

  timeline:
    ROMAN_TIMELINE,

  wars:
    ROMAN_WARS,
};


// ============================================================
// SCIENCE KNOWLEDGE
// ============================================================

export const SCIENCE_KNOWLEDGE = {

  physics:
    SCIENCE_PHYSICS,

  chemistry:
    SCIENCE_CHEMISTRY,

  biology:
    SCIENCE_BIOLOGY,

  astronomy:
    SCIENCE_ASTRONOMY,

  earth:
    SCIENCE_EARTH,

  neuroscience:
    SCIENCE_NEUROSCIENCE,

  genetics:
    SCIENCE_GENETICS,

  quantum:
    SCIENCE_QUANTUM,

  astrophysics:
    SCIENCE_ASTROPHYSICS,

  geology:
    SCIENCE_GEOLOGY,

  climate:
    SCIENCE_CLIMATE,

  psychology:
    SCIENCE_PSYCHOLOGY,

  humanBiology:
    SCIENCE_HUMAN_BIOLOGY,

  robotics:
    SCIENCE_ROBOTICS,

  electronics:
    SCIENCE_ELECTRONICS,

  space:
    SCIENCE_SPACE,

  cosmology:
    SCIENCE_COSMOLOGY,

  materials:
    SCIENCE_MATERIALS,

  environment:
    SCIENCE_ENVIRONMENT,
};


// ============================================================
// ALL KNOWLEDGE
// ============================================================

export const ALL_KNOWLEDGE = [

  // Roman
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

  // Science
  SCIENCE_PHYSICS,
  SCIENCE_CHEMISTRY,
  SCIENCE_BIOLOGY,
  SCIENCE_ASTRONOMY,
  SCIENCE_EARTH,
  SCIENCE_NEUROSCIENCE,
  SCIENCE_GENETICS,
  SCIENCE_QUANTUM,
  SCIENCE_ASTROPHYSICS,
  SCIENCE_GEOLOGY,
  SCIENCE_CLIMATE,
  SCIENCE_PSYCHOLOGY,
  SCIENCE_HUMAN_BIOLOGY,
  SCIENCE_ROBOTICS,
  SCIENCE_ELECTRONICS,
  SCIENCE_SPACE,
  SCIENCE_COSMOLOGY,
  SCIENCE_MATERIALS,
  SCIENCE_ENVIRONMENT,

].filter(Boolean);


// ============================================================
// SCIENCE TOPIC MAP
// ============================================================

const SCIENCE_TOPIC_MAP = {

  physics:
    SCIENCE_PHYSICS,

  physicses:
    SCIENCE_PHYSICS,

  mechanics:
    SCIENCE_PHYSICS,

  force:
    SCIENCE_PHYSICS,

  energy:
    SCIENCE_PHYSICS,

  motion:
    SCIENCE_PHYSICS,


  chemistry:
    SCIENCE_CHEMISTRY,

  chemical:
    SCIENCE_CHEMISTRY,

  molecules:
    SCIENCE_CHEMISTRY,

  atoms:
    SCIENCE_CHEMISTRY,

  reactions:
    SCIENCE_CHEMISTRY,


  biology:
    SCIENCE_BIOLOGY,

  biological:
    SCIENCE_BIOLOGY,

  cells:
    SCIENCE_BIOLOGY,

  cell:
    SCIENCE_BIOLOGY,

  life:
    SCIENCE_BIOLOGY,


  astronomy:
    SCIENCE_ASTRONOMY,

  stars:
    SCIENCE_ASTRONOMY,

  planets:
    SCIENCE_ASTRONOMY,

  galaxies:
    SCIENCE_ASTRONOMY,


  earth:
    SCIENCE_EARTH,

  earthscience:
    SCIENCE_EARTH,

  "earth science":
    SCIENCE_EARTH,


  neuroscience:
    SCIENCE_NEUROSCIENCE,

  brain:
    SCIENCE_NEUROSCIENCE,

  neurons:
    SCIENCE_NEUROSCIENCE,


  genetics:
    SCIENCE_GENETICS,

  genes:
    SCIENCE_GENETICS,

  dna:
    SCIENCE_GENETICS,

  genome:
    SCIENCE_GENETICS,


  quantum:
    SCIENCE_QUANTUM,

  "quantum physics":
    SCIENCE_QUANTUM,

  "quantum mechanics":
    SCIENCE_QUANTUM,


  astrophysics:
    SCIENCE_ASTROPHYSICS,


  geology:
    SCIENCE_GEOLOGY,

  rocks:
    SCIENCE_GEOLOGY,

  minerals:
    SCIENCE_GEOLOGY,


  climate:
    SCIENCE_CLIMATE,

  weather:
    SCIENCE_CLIMATE,

  globalwarming:
    SCIENCE_CLIMATE,

  "global warming":
    SCIENCE_CLIMATE,


  psychology:
    SCIENCE_PSYCHOLOGY,

  mind:
    SCIENCE_PSYCHOLOGY,

  behavior:
    SCIENCE_PSYCHOLOGY,


  "human biology":
    SCIENCE_HUMAN_BIOLOGY,

  humanbiology:
    SCIENCE_HUMAN_BIOLOGY,

  anatomy:
    SCIENCE_HUMAN_BIOLOGY,

  physiology:
    SCIENCE_HUMAN_BIOLOGY,


  robotics:
    SCIENCE_ROBOTICS,

  robots:
    SCIENCE_ROBOTICS,

  robot:
    SCIENCE_ROBOTICS,


  electronics:
    SCIENCE_ELECTRONICS,

  electronic:
    SCIENCE_ELECTRONICS,

  circuits:
    SCIENCE_ELECTRONICS,

  electricity:
    SCIENCE_ELECTRONICS,


  space:
    SCIENCE_SPACE,

  spacecraft:
    SCIENCE_SPACE,

  rockets:
    SCIENCE_SPACE,

  spaceflight:
    SCIENCE_SPACE,


  cosmology:
    SCIENCE_COSMOLOGY,

  universe:
    SCIENCE_COSMOLOGY,

  "big bang":
    SCIENCE_COSMOLOGY,


  materials:
    SCIENCE_MATERIALS,

  "materials science":
    SCIENCE_MATERIALS,


  environment:
    SCIENCE_ENVIRONMENT,

  environmental:
    SCIENCE_ENVIRONMENT,

  ecology:
    SCIENCE_ENVIRONMENT,

  ecosystems:
    SCIENCE_ENVIRONMENT,
};


// ============================================================
// ROMAN TOPIC MAP
// ============================================================

const ROMAN_TOPIC_MAP = {

  emperors:
    ROMAN_EMPERORS,

  emperor:
    ROMAN_EMPERORS,


  economy:
    ROMAN_ECONOMY,

  agriculture:
    ROMAN_ECONOMY,

  trade:
    ROMAN_ECONOMY,

  money:
    ROMAN_ECONOMY,


  architecture:
    ROMAN_ARCHITECTURE,

  engineering:
    ROMAN_ARCHITECTURE,

  buildings:
    ROMAN_ARCHITECTURE,


  empire:
    ROMAN_EMPIRE,


  military:
    ROMAN_MILITARY,

  army:
    ROMAN_MILITARY,

  soldiers:
    ROMAN_MILITARY,


  wars:
    ROMAN_WARS,

  war:
    ROMAN_WARS,

  battles:
    ROMAN_WARS,


  overview:
    ROMAN_OVERVIEW,


  provinces:
    ROMAN_PROVINCES,

  province:
    ROMAN_PROVINCES,


  religion:
    ROMAN_RELIGION,

  gods:
    ROMAN_RELIGION,


  republic:
    ROMAN_REPUBLIC,


  timeline:
    ROMAN_TIMELINE,

  chronology:
    ROMAN_TIMELINE,
};


// ============================================================
// SEARCH KNOWLEDGE
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
    const knowledge
    of ALL_KNOWLEDGE
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

  return (
    ROMAN_TOPIC_MAP[
      normalizedTopic
    ] || null
  );
}


// ============================================================
// GET SCIENCE KNOWLEDGE
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

  const normalizedTopic =
    topic
      .toLowerCase()
      .trim();

  return (
    SCIENCE_TOPIC_MAP[
      normalizedTopic
    ] || null
  );
}


// ============================================================
// GET KNOWLEDGE BY DOMAIN
// ============================================================

export function getKnowledgeByDomain(
  domain,
  topic
) {

  if (
    !domain ||
    typeof domain !== "string"
  ) {

    return null;
  }

  const normalizedDomain =
    domain
      .toLowerCase()
      .trim();


  if (
    normalizedDomain ===
    "roman"
  ) {

    return getRomanKnowledge(
      topic
    );
  }


  if (
    normalizedDomain ===
    "science"
  ) {

    return getScienceKnowledge(
      topic
    );
  }


  return null;
}


// ============================================================
// FIND KNOWLEDGE FOR QUESTION
// ============================================================

export function getKnowledgeForQuestion(
  question
) {

  if (
    !question ||
    typeof question !== "string"
  ) {

    return null;
  }

  const text =
    question
      .toLowerCase()
      .trim();


  // ----------------------------------------------------------
  // Check Roman topics
  // ----------------------------------------------------------

  for (
    const keyword
    of Object.keys(
      ROMAN_TOPIC_MAP
    )
  ) {

    if (
      text.includes(
        keyword
      )
    ) {

      return {
        domain: "history",
        subject: "roman",
        topic: keyword,
        knowledge:
          ROMAN_TOPIC_MAP[
            keyword
          ],
      };
    }
  }


  // ----------------------------------------------------------
  // Check Science topics
  // ----------------------------------------------------------

  for (
    const keyword
    of Object.keys(
      SCIENCE_TOPIC_MAP
    )
  ) {

    if (
      text.includes(
        keyword
      )
    ) {

      return {
        domain: "science",
        subject: keyword,
        topic: keyword,
        knowledge:
          SCIENCE_TOPIC_MAP[
            keyword
          ],
      };
    }
  }


  return null;
}


// ============================================================
// ROMAN QUESTION DETECTION
// ============================================================

export function isRomanQuestion(
  question
) {

  if (
    !question ||
    typeof question !== "string"
  ) {

    return false;
  }

  const text =
    question
      .toLowerCase()
      .trim();


  const romanKeywords = [

    "roman empire",
    "roman republic",
    "roman history",
    "ancient rome",
    "ancient roman",
    "roman emperor",
    "roman emperors",
    "roman army",
    "roman military",
    "roman soldier",
    "roman war",
    "roman wars",
    "roman battle",
    "roman battles",
    "roman economy",
    "roman architecture",
    "roman religion",
    "roman province",
    "roman provinces",
    "roman timeline",
    "roman civilization",
    "romans",
    "roman",

  ];


  return romanKeywords.some(
    (keyword) =>
      text.includes(
        keyword
      )
  );
}


// ============================================================
// SCIENCE QUESTION DETECTION
// ============================================================

export function isScienceQuestion(
  question
) {

  if (
    !question ||
    typeof question !== "string"
  ) {

    return false;
  }

  const text =
    question
      .toLowerCase()
      .trim();


  const scienceKeywords = [

    "science",
    "scientific",

    "physics",
    "force",
    "energy",
    "gravity",
    "motion",

    "chemistry",
    "chemical",
    "atom",
    "atoms",
    "molecule",
    "molecules",
    "reaction",

    "biology",
    "biological",
    "cell",
    "cells",
    "organism",
    "evolution",

    "astronomy",
    "star",
    "stars",
    "planet",
    "planets",
    "galaxy",
    "galaxies",

    "earth science",
    "earth",

    "neuroscience",
    "brain",
    "neuron",
    "neurons",

    "genetics",
    "gene",
    "genes",
    "dna",
    "genome",

    "quantum",
    "quantum physics",
    "quantum mechanics",

    "astrophysics",

    "geology",
    "geological",
    "rock",
    "rocks",
    "mineral",
    "minerals",

    "climate",
    "climate change",
    "global warming",
    "weather",

    "psychology",
    "psychological",
    "behavior",

    "human biology",
    "anatomy",
    "physiology",

    "robotics",
    "robot",
    "robots",

    "electronics",
    "electronic",
    "electricity",
    "circuit",
    "circuits",

    "space",
    "rocket",
    "rockets",
    "spacecraft",

    "cosmology",
    "universe",
    "big bang",

    "materials science",
    "materials",

    "environment",
    "environmental",
    "ecology",
    "ecosystem",
    "ecosystems",

  ];


  return scienceKeywords.some(
    (keyword) =>
      text.includes(
        keyword
      )
  );
}


// ============================================================
// FULL ROMAN KNOWLEDGE
// ============================================================

export function getFullRomanKnowledge() {

  return ROMAN_KNOWLEDGE;
}


// ============================================================
// FULL SCIENCE KNOWLEDGE
// ============================================================

export function getFullScienceKnowledge() {

  return SCIENCE_KNOWLEDGE;
}


// ============================================================
// DEFAULT EXPORT
// ============================================================

export default REZE_KNOWLEDGE;
