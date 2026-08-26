// lib/knowledge/index.js

// ============================================================
// REZE KNOWLEDGE ENGINE
// CENTRAL KNOWLEDGE REGISTRY
//
// This file connects:
//   1. Roman History Knowledge
//   2. Science Knowledge
//
// Roman knowledge lives in:
//   ./history/roman/
//
// Science knowledge lives in:
//   ./science/
//
// IMPORTANT:
// Keep this file as the central registry.
// Put the actual large knowledge content inside the
// individual knowledge files.
// ============================================================


// ============================================================
// ROMAN HISTORY MODULES
// ============================================================

import * as romanEmperorsModule
  from "./history/roman/emperors.js";

import * as romanEconomyModule
  from "./history/roman/economy.js";

import * as romanArchitectureModule
  from "./history/roman/architecture.js";

import * as romanEmpireModule
  from "./history/roman/empire.js";

import * as romanMilitaryModule
  from "./history/roman/military.js";

import * as romanOverviewModule
  from "./history/roman/overview.js";

import * as romanProvincesModule
  from "./history/roman/provinces.js";

import * as romanReligionModule
  from "./history/roman/religion.js";

import * as romanRepublicModule
  from "./history/roman/republic.js";

import * as romanTimelineModule
  from "./history/roman/timeline.js";

import * as romanWarsModule
  from "./history/roman/wars.js";


// ============================================================
// SCIENCE MODULES
// ============================================================

import * as physicsModule
  from "./science/physics.js";

import * as chemistryModule
  from "./science/chemistry.js";

import * as biologyModule
  from "./science/biology.js";

import * as astronomyModule
  from "./science/astronomy.js";

import * as earthScienceModule
  from "./science/earthScience.js";

import * as geologyModule
  from "./science/geology.js";

import * as meteorologyModule
  from "./science/meteorology.js";

import * as oceanographyModule
  from "./science/oceanography.js";

import * as ecologyModule
  from "./science/ecology.js";

import * as geneticsModule
  from "./science/genetics.js";

import * as neuroscienceModule
  from "./science/neuroscience.js";

import * as mathematicsModule
  from "./science/mathematics.js";

import * as computerScienceModule
  from "./science/computerScience.js";

import * as materialsScienceModule
  from "./science/materialsScience.js";

import * as environmentalScienceModule
  from "./science/environmentalScience.js";


// ============================================================
// MODULE UNWRAPPER
// ============================================================
//
// Supports knowledge files using either:
//
// export default {...}
//
// OR:
//
// export const SOME_NAME = {...}
//
// This makes the central registry more flexible.
// ============================================================

function unwrapKnowledge(module) {

  if (!module) {
    return null;
  }

  // ----------------------------------------------------------
  // Default export
  // ----------------------------------------------------------

  if (
    module.default &&
    typeof module.default === "object"
  ) {
    return module.default;
  }

  // ----------------------------------------------------------
  // Named export
  // ----------------------------------------------------------

  const values =
    Object.values(module);

  if (values.length > 0) {

    for (const value of values) {

      if (
        value &&
        typeof value === "object"
      ) {
        return value;
      }
    }

    return values[0];
  }

  return module;
}


// ============================================================
// ROMAN KNOWLEDGE
// ============================================================

const ROMAN_EMPERORS =
  unwrapKnowledge(
    romanEmperorsModule
  );

const ROMAN_ECONOMY =
  unwrapKnowledge(
    romanEconomyModule
  );

const ROMAN_ARCHITECTURE =
  unwrapKnowledge(
    romanArchitectureModule
  );

const ROMAN_EMPIRE =
  unwrapKnowledge(
    romanEmpireModule
  );

const ROMAN_MILITARY =
  unwrapKnowledge(
    romanMilitaryModule
  );

const ROMAN_OVERVIEW =
  unwrapKnowledge(
    romanOverviewModule
  );

const ROMAN_PROVINCES =
  unwrapKnowledge(
    romanProvincesModule
  );

const ROMAN_RELIGION =
  unwrapKnowledge(
    romanReligionModule
  );

const ROMAN_REPUBLIC =
  unwrapKnowledge(
    romanRepublicModule
  );

const ROMAN_TIMELINE =
  unwrapKnowledge(
    romanTimelineModule
  );

const ROMAN_WARS =
  unwrapKnowledge(
    romanWarsModule
  );


// ============================================================
// SCIENCE KNOWLEDGE
// ============================================================

const PHYSICS =
  unwrapKnowledge(
    physicsModule
  );

const CHEMISTRY =
  unwrapKnowledge(
    chemistryModule
  );

const BIOLOGY =
  unwrapKnowledge(
    biologyModule
  );

const ASTRONOMY =
  unwrapKnowledge(
    astronomyModule
  );

const EARTH_SCIENCE =
  unwrapKnowledge(
    earthScienceModule
  );

const GEOLOGY =
  unwrapKnowledge(
    geologyModule
  );

const METEOROLOGY =
  unwrapKnowledge(
    meteorologyModule
  );

const OCEANOGRAPHY =
  unwrapKnowledge(
    oceanographyModule
  );

const ECOLOGY =
  unwrapKnowledge(
    ecologyModule
  );

const GENETICS =
  unwrapKnowledge(
    geneticsModule
  );

const NEUROSCIENCE =
  unwrapKnowledge(
    neuroscienceModule
  );

const MATHEMATICS =
  unwrapKnowledge(
    mathematicsModule
  );

const COMPUTER_SCIENCE =
  unwrapKnowledge(
    computerScienceModule
  );

const MATERIALS_SCIENCE =
  unwrapKnowledge(
    materialsScienceModule
  );

const ENVIRONMENTAL_SCIENCE =
  unwrapKnowledge(
    environmentalScienceModule
  );


// ============================================================
// ROMAN KNOWLEDGE REGISTRY
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
// SCIENCE KNOWLEDGE REGISTRY
// ============================================================

export const SCIENCE_KNOWLEDGE = {

  physics:
    PHYSICS,

  chemistry:
    CHEMISTRY,

  biology:
    BIOLOGY,

  astronomy:
    ASTRONOMY,

  earthScience:
    EARTH_SCIENCE,

  geology:
    GEOLOGY,

  meteorology:
    METEOROLOGY,

  oceanography:
    OCEANOGRAPHY,

  ecology:
    ECOLOGY,

  genetics:
    GENETICS,

  neuroscience:
    NEUROSCIENCE,

  mathematics:
    MATHEMATICS,

  computerScience:
    COMPUTER_SCIENCE,

  materialsScience:
    MATERIALS_SCIENCE,

  environmentalScience:
    ENVIRONMENTAL_SCIENCE,
};


// ============================================================
// COMPLETE REZE KNOWLEDGE TREE
// ============================================================

export const REZE_KNOWLEDGE = {

  // ==========================================================
  // HISTORY
  // ==========================================================

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


  // ==========================================================
  // SCIENCE
  // ==========================================================

  science:
    SCIENCE_KNOWLEDGE,


  // ==========================================================
  // UNIVERSE / SPACE
  // ==========================================================

  universe: {

    astronomy:
      ASTRONOMY,
  },


  // ==========================================================
  // EARTH
  // ==========================================================

  earth: {

    earthScience:
      EARTH_SCIENCE,

    geology:
      GEOLOGY,

    meteorology:
      METEOROLOGY,

    oceanography:
      OCEANOGRAPHY,
  },


  // ==========================================================
  // LIFE SCIENCE
  // ==========================================================

  lifeScience: {

    biology:
      BIOLOGY,

    ecology:
      ECOLOGY,

    genetics:
      GENETICS,

    neuroscience:
      NEUROSCIENCE,
  },


  // ==========================================================
  // HUMAN BIOLOGY / BRAIN
  // ==========================================================

  humanity: {

    biology:
      BIOLOGY,

    genetics:
      GENETICS,

    neuroscience:
      NEUROSCIENCE,
  },


  // ==========================================================
  // TECHNOLOGY
  // ==========================================================

  technology: {

    computerScience:
      COMPUTER_SCIENCE,

    materialsScience:
      MATERIALS_SCIENCE,
  },


  // ==========================================================
  // ENVIRONMENT
  // ==========================================================

  environment: {

    ecology:
      ECOLOGY,

    environmentalScience:
      ENVIRONMENTAL_SCIENCE,

    meteorology:
      METEOROLOGY,

    oceanography:
      OCEANOGRAPHY,

    earthScience:
      EARTH_SCIENCE,

    geology:
      GEOLOGY,
  },


  // ==========================================================
  // MATHEMATICS
  // ==========================================================

  mathematics:
    MATHEMATICS,
};


// ============================================================
// ALL KNOWLEDGE
// ============================================================
//
// Flat collection used by searchKnowledge().
// ============================================================

export const ALL_KNOWLEDGE = [

  // ----------------------------------------------------------
  // ROMAN HISTORY
  // ----------------------------------------------------------

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

  // ----------------------------------------------------------
  // SCIENCE
  // ----------------------------------------------------------

  PHYSICS,
  CHEMISTRY,
  BIOLOGY,
  ASTRONOMY,
  EARTH_SCIENCE,
  GEOLOGY,
  METEOROLOGY,
  OCEANOGRAPHY,
  ECOLOGY,
  GENETICS,
  NEUROSCIENCE,
  MATHEMATICS,
  COMPUTER_SCIENCE,
  MATERIALS_SCIENCE,
  ENVIRONMENTAL_SCIENCE,

].filter(Boolean);


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

    // --------------------------------------------------------
    // EMPERORS
    // --------------------------------------------------------

    emperors:
      ROMAN_EMPERORS,

    emperor:
      ROMAN_EMPERORS,

    roman:
      ROMAN_OVERVIEW,

    "roman empire":
      ROMAN_EMPIRE,

    "roman emperor":
      ROMAN_EMPERORS,


    // --------------------------------------------------------
    // ECONOMY
    // --------------------------------------------------------

    economy:
      ROMAN_ECONOMY,

    economic:
      ROMAN_ECONOMY,

    money:
      ROMAN_ECONOMY,

    trade:
      ROMAN_ECONOMY,

    taxation:
      ROMAN_ECONOMY,

    tax:
      ROMAN_ECONOMY,


    // --------------------------------------------------------
    // ARCHITECTURE
    // --------------------------------------------------------

    architecture:
      ROMAN_ARCHITECTURE,

    architectural:
      ROMAN_ARCHITECTURE,

    engineering:
      ROMAN_ARCHITECTURE,

    roman:
      ROMAN_OVERVIEW,


    // --------------------------------------------------------
    // EMPIRE
    // --------------------------------------------------------

    empire:
      ROMAN_EMPIRE,

    imperial:
      ROMAN_EMPIRE,


    // --------------------------------------------------------
    // MILITARY
    // --------------------------------------------------------

    military:
      ROMAN_MILITARY,

    army:
      ROMAN_MILITARY,

    legion:
      ROMAN_MILITARY,

    legions:
      ROMAN_MILITARY,

    soldier:
      ROMAN_MILITARY,

    soldiers:
      ROMAN_MILITARY,


    // --------------------------------------------------------
    // WARS
    // --------------------------------------------------------

    wars:
      ROMAN_WARS,

    war:
      ROMAN_WARS,

    battles:
      ROMAN_WARS,

    battle:
      ROMAN_WARS,


    // --------------------------------------------------------
    // OVERVIEW
    // --------------------------------------------------------

    overview:
      ROMAN_OVERVIEW,

    history:
      ROMAN_OVERVIEW,


    // --------------------------------------------------------
    // PROVINCES
    // --------------------------------------------------------

    provinces:
      ROMAN_PROVINCES,

    province:
      ROMAN_PROVINCES,


    // --------------------------------------------------------
    // RELIGION
    // --------------------------------------------------------

    religion:
      ROMAN_RELIGION,

    religious:
      ROMAN_RELIGION,

    gods:
      ROMAN_RELIGION,

    roman:
      ROMAN_OVERVIEW,


    // --------------------------------------------------------
    // REPUBLIC
    // --------------------------------------------------------

    republic:
      ROMAN_REPUBLIC,

    senate:
      ROMAN_REPUBLIC,

    roman:
      ROMAN_OVERVIEW,


    // --------------------------------------------------------
    // TIMELINE
    // --------------------------------------------------------

    timeline:
      ROMAN_TIMELINE,

    chronology:
      ROMAN_TIMELINE,
  };

  return (
    topicMap[
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

  const normalized =
    topic
      .toLowerCase()
      .trim();

  const topicMap = {

    // ========================================================
    // GENERAL SCIENCE
    // ========================================================

    science:
      SCIENCE_KNOWLEDGE,

    scientific:
      SCIENCE_KNOWLEDGE,

    "natural science":
      SCIENCE_KNOWLEDGE,


    // ========================================================
    // PHYSICS
    // ========================================================

    physics:
      PHYSICS,

    physical:
      PHYSICS,

    "physical science":
      PHYSICS,


    // ========================================================
    // CHEMISTRY
    // ========================================================

    chemistry:
      CHEMISTRY,

    chemical:
      CHEMISTRY,


    // ========================================================
    // BIOLOGY
    // ========================================================

    biology:
      BIOLOGY,

    biological:
      BIOLOGY,

    life:
      BIOLOGY,

    "life science":
      BIOLOGY,

    "life sciences":
      BIOLOGY,


    // ========================================================
    // ASTRONOMY
    // ========================================================

    astronomy:
      ASTRONOMY,

    astronomical:
      ASTRONOMY,

    space:
      ASTRONOMY,

    universe:
      ASTRONOMY,

    cosmos:
      ASTRONOMY,

    cosmology:
      ASTRONOMY,

    stars:
      ASTRONOMY,

    planets:
      ASTRONOMY,

    galaxy:
      ASTRONOMY,

    galaxies:
      ASTRONOMY,

    "black hole":
      ASTRONOMY,

    "black holes":
      ASTRONOMY,


    // ========================================================
    // EARTH SCIENCE
    // ========================================================

    earth:
      EARTH_SCIENCE,

    "earth science":
      EARTH_SCIENCE,

    earthscience:
      EARTH_SCIENCE,


    // ========================================================
    // GEOLOGY
    // ========================================================

    geology:
      GEOLOGY,

    geological:
      GEOLOGY,

    rock:
      GEOLOGY,

    rocks:
      GEOLOGY,

    mineral:
      GEOLOGY,

    minerals:
      GEOLOGY,

    tectonics:
      GEOLOGY,

    "plate tectonics":
      GEOLOGY,

    volcano:
      GEOLOGY,

    volcanoes:
      GEOLOGY,

    earthquake:
      GEOLOGY,

    earthquakes:
      GEOLOGY,


    // ========================================================
    // METEOROLOGY
    // ========================================================

    meteorology:
      METEOROLOGY,

    meteorological:
      METEOROLOGY,

    weather:
      METEOROLOGY,

    atmosphere:
      METEOROLOGY,

    storms:
      METEOROLOGY,

    storm:
      METEOROLOGY,

    hurricanes:
      METEOROLOGY,

    hurricane:
      METEOROLOGY,

    tornado:
      METEOROLOGY,

    tornadoes:
      METEOROLOGY,


    // ========================================================
    // OCEANOGRAPHY
    // ========================================================

    oceanography:
      OCEANOGRAPHY,

    ocean:
      OCEANOGRAPHY,

    oceans:
      OCEANOGRAPHY,

    marine:
      OCEANOGRAPHY,

    "marine science":
      OCEANOGRAPHY,

    sea:
      OCEANOGRAPHY,

    seas:
      OCEANOGRAPHY,

    tides:
      OCEANOGRAPHY,

    waves:
      OCEANOGRAPHY,


    // ========================================================
    // ECOLOGY
    // ========================================================

    ecology:
      ECOLOGY,

    ecological:
      ECOLOGY,

    ecosystem:
      ECOLOGY,

    ecosystems:
      ECOLOGY,

    biodiversity:
      ECOLOGY,

    habitat:
      ECOLOGY,

    habitats:
      ECOLOGY,

    population:
      ECOLOGY,

    populations:
      ECOLOGY,

    foodweb:
      ECOLOGY,

    "food web":
      ECOLOGY,

    "food chain":
      ECOLOGY,

    conservation:
      ECOLOGY,


    // ========================================================
    // GENETICS
    // ========================================================

    genetics:
      GENETICS,

    genetic:
      GENETICS,

    gene:
      GENETICS,

    genes:
      GENETICS,

    dna:
      GENETICS,

    rna:
      GENETICS,

    genome:
      GENETICS,

    genomes:
      GENETICS,

    genomics:
      GENETICS,

    inheritance:
      GENETICS,

    mutation:
      GENETICS,

    mutations:
      GENETICS,

    epigenetics:
      GENETICS,


    // ========================================================
    // NEUROSCIENCE
    // ========================================================

    neuroscience:
      NEUROSCIENCE,

    neurobiology:
      NEUROSCIENCE,

    brain:
      NEUROSCIENCE,

    brains:
      NEUROSCIENCE,

    neuron:
      NEUROSCIENCE,

    neurons:
      NEUROSCIENCE,

    nervous:
      NEUROSCIENCE,

    "nervous system":
      NEUROSCIENCE,

    synapse:
      NEUROSCIENCE,

    synapses:
      NEUROSCIENCE,

    neurotransmitter:
      NEUROSCIENCE,

    neurotransmitters:
      NEUROSCIENCE,


    // ========================================================
    // MATHEMATICS
    // ========================================================

    mathematics:
      MATHEMATICS,

    mathematical:
      MATHEMATICS,

    math:
      MATHEMATICS,

    maths:
      MATHEMATICS,

    algebra:
      MATHEMATICS,

    geometry:
      MATHEMATICS,

    calculus:
      MATHEMATICS,

    statistics:
      MATHEMATICS,

    probability:
      MATHEMATICS,

    arithmetic:
      MATHEMATICS,


    // ========================================================
    // COMPUTER SCIENCE
    // ========================================================

    computer:
      COMPUTER_SCIENCE,

    computers:
      COMPUTER_SCIENCE,

    computing:
      COMPUTER_SCIENCE,

    programming:
      COMPUTER_SCIENCE,

    program:
      COMPUTER_SCIENCE,

    programs:
      COMPUTER_SCIENCE,

    coding:
      COMPUTER_SCIENCE,

    code:
      COMPUTER_SCIENCE,

    software:
      COMPUTER_SCIENCE,

    hardware:
      COMPUTER_SCIENCE,

    "computer science":
      COMPUTER_SCIENCE,

    ai:
      COMPUTER_SCIENCE,

    "artificial intelligence":
      COMPUTER_SCIENCE,

    machine:
      COMPUTER_SCIENCE,

    "machine learning":
      COMPUTER_SCIENCE,

    deep:
      COMPUTER_SCIENCE,

    "deep learning":
      COMPUTER_SCIENCE,

    robotics:
      COMPUTER_SCIENCE,

    algorithm:
      COMPUTER_SCIENCE,

    algorithms:
      COMPUTER_SCIENCE,

    database:
      COMPUTER_SCIENCE,

    databases:
      COMPUTER_SCIENCE,

    cybersecurity:
      COMPUTER_SCIENCE,

    "cyber security":
      COMPUTER_SCIENCE,


    // ========================================================
    // MATERIALS SCIENCE
    // ========================================================

    materials:
      MATERIALS_SCIENCE,

    material:
      MATERIALS_SCIENCE,

    "materials science":
      MATERIALS_SCIENCE,

    materialscience:
      MATERIALS_SCIENCE,

    nanomaterials:
      MATERIALS_SCIENCE,

    nanotechnology:
      MATERIALS_SCIENCE,

    graphene:
      MATERIALS_SCIENCE,

    polymers:
      MATERIALS_SCIENCE,

    polymer:
      MATERIALS_SCIENCE,

    ceramics:
      MATERIALS_SCIENCE,

    composites:
      MATERIALS_SCIENCE,

    alloys:
      MATERIALS_SCIENCE,


    // ========================================================
    // ENVIRONMENTAL SCIENCE
    // ========================================================

    environment:
      ENVIRONMENTAL_SCIENCE,

    environmental:
      ENVIRONMENTAL_SCIENCE,

    "environmental science":
      ENVIRONMENTAL_SCIENCE,

    pollution:
      ENVIRONMENTAL_SCIENCE,

    sustainability:
      ENVIRONMENTAL_SCIENCE,

    sustainable:
      ENVIRONMENTAL_SCIENCE,

    climate:
      ENVIRONMENTAL_SCIENCE,

    "climate change":
      ENVIRONMENTAL_SCIENCE,

    greenhouse:
      ENVIRONMENTAL_SCIENCE,

    "greenhouse effect":
      ENVIRONMENTAL_SCIENCE,

    carbon:
      ENVIRONMENTAL_SCIENCE,

    conservation:
      ENVIRONMENTAL_SCIENCE,

    waste:
      ENVIRONMENTAL_SCIENCE,

    recycling:
      ENVIRONMENTAL_SCIENCE,
  };

  return (
    topicMap[
      normalized
    ] || null
  );
}


// ============================================================
// GET ANY KNOWLEDGE
// ============================================================
//
// Allows the application to request knowledge by category.
//
// Example:
//
// getKnowledge("roman", "emperors")
//
// getKnowledge("science", "physics")
// ============================================================

export function getKnowledge(
  category,
  topic
) {

  if (
    !category ||
    typeof category !== "string"
  ) {
    return null;
  }

  const normalizedCategory =
    category
      .toLowerCase()
      .trim();

  switch (
    normalizedCategory
  ) {

    // --------------------------------------------------------
    // ROMAN
    // --------------------------------------------------------

    case "roman":

    case "roman history":

    case "roman-history":

      return getRomanKnowledge(
        topic
      );


    // --------------------------------------------------------
    // HISTORY
    // --------------------------------------------------------

    case "history":

      if (
        topic &&
        typeof topic === "string"
      ) {

        const romanResult =
          getRomanKnowledge(
            topic
          );

        if (romanResult) {
          return romanResult;
        }
      }

      return ROMAN_KNOWLEDGE;


    // --------------------------------------------------------
    // SCIENCE
    // --------------------------------------------------------

    case "science":

      return getScienceKnowledge(
        topic
      );


    // --------------------------------------------------------
    // DEFAULT
    // --------------------------------------------------------

    default:

      return null;
  }
}


// ============================================================
// KNOWLEDGE CATEGORY LIST
// ============================================================
//
// Useful for debugging, UI menus, or future routing.
// ============================================================

export const KNOWLEDGE_CATEGORIES = {

  history: [
    "roman",
  ],

  science: [
    "physics",
    "chemistry",
    "biology",
    "astronomy",
    "earthScience",
    "geology",
    "meteorology",
    "oceanography",
    "ecology",
    "genetics",
    "neuroscience",
    "mathematics",
    "computerScience",
    "materialsScience",
    "environmentalScience",
  ],
};


// ============================================================
// KNOWLEDGE MODULE NAMES
// ============================================================

export const KNOWLEDGE_MODULES = {

  roman: {
    emperors: "Roman Emperors",
    economy: "Roman Economy",
    architecture: "Roman Architecture",
    empire: "Roman Empire",
    military: "Roman Military",
    overview: "Roman History Overview",
    provinces: "Roman Provinces",
    religion: "Roman Religion",
    republic: "Roman Republic",
    timeline: "Roman Timeline",
    wars: "Roman Wars",
  },

  science: {
    physics: "Physics",
    chemistry: "Chemistry",
    biology: "Biology",
    astronomy: "Astronomy",
    earthScience: "Earth Science",
    geology: "Geology",
    meteorology: "Meteorology",
    oceanography: "Oceanography",
    ecology: "Ecology",
    genetics: "Genetics",
    neuroscience: "Neuroscience",
    mathematics: "Mathematics",
    computerScience: "Computer Science",
    materialsScience: "Materials Science",
    environmentalScience:
      "Environmental Science",
  },
};


// ============================================================
// KNOWLEDGE STATISTICS
// ============================================================

export const KNOWLEDGE_STATS = {

  romanModules: 11,

  scienceModules: 15,

  totalModules: 26,

  romanTopics: [
    "emperors",
    "economy",
    "architecture",
    "empire",
    "military",
    "overview",
    "provinces",
    "religion",
    "republic",
    "timeline",
    "wars",
  ],

  scienceTopics: [
    "physics",
    "chemistry",
    "biology",
    "astronomy",
    "earthScience",
    "geology",
    "meteorology",
    "oceanography",
    "ecology",
    "genetics",
    "neuroscience",
    "mathematics",
    "computerScience",
    "materialsScience",
    "environmentalScience",
  ],
};


// ============================================================
// DEFAULT EXPORT
// ============================================================

export default REZE_KNOWLEDGE;
