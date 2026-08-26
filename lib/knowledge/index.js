// lib/knowledge/index.js

// ============================================================
// REZE KNOWLEDGE ENGINE
// CENTRAL KNOWLEDGE REGISTRY
//
// Structure:
//
// lib/
// └── knowledge/
//     ├── index.js
//     │
//     ├── history/
//     │   └── roman/
//     │       ├── emperors.js
//     │       ├── economy.js
//     │       ├── architecture.js
//     │       ├── empire.js
//     │       ├── military.js
//     │       ├── overview.js
//     │       ├── provinces.js
//     │       ├── religion.js
//     │       ├── republic.js
//     │       ├── timeline.js
//     │       └── wars.js
//     │
//     └── science/
//         ├── physics.js
//         ├── chemistry.js
//         ├── biology.js
//         ├── astronomy.js
//         ├── earthScience.js
//         ├── geology.js
//         ├── meteorology.js
//         ├── oceanography.js
//         ├── ecology.js
//         ├── genetics.js
//         ├── neuroscience.js
//         ├── mathematics.js
//         ├── computerScience.js
//         ├── materialsScience.js
//         └── environmentalScience.js
//
// IMPORTANT:
// - Roman knowledge remains supported.
// - Science knowledge is imported from separate files.
// - This file is the central registry.
// - Do NOT put the giant science databases directly here.
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
//
// Supports files using:
//
// export default {...}
//
// OR:
//
// export const SOMETHING = {...}
//
// OR other named exports.
// ============================================================

function unwrapKnowledge(module) {

  if (!module) {
    return null;
  }

  // Default export
  if (
    module.default !== undefined &&
    module.default !== null
  ) {
    return module.default;
  }

  // Named exports
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

const PHYSICS_KNOWLEDGE =
  unwrapKnowledge(
    physicsModule
  );

const CHEMISTRY_KNOWLEDGE =
  unwrapKnowledge(
    chemistryModule
  );

const BIOLOGY_KNOWLEDGE =
  unwrapKnowledge(
    biologyModule
  );

const ASTRONOMY_KNOWLEDGE =
  unwrapKnowledge(
    astronomyModule
  );

const EARTH_SCIENCE_KNOWLEDGE =
  unwrapKnowledge(
    earthScienceModule
  );

const GEOLOGY_KNOWLEDGE =
  unwrapKnowledge(
    geologyModule
  );

const METEOROLOGY_KNOWLEDGE =
  unwrapKnowledge(
    meteorologyModule
  );

const OCEANOGRAPHY_KNOWLEDGE =
  unwrapKnowledge(
    oceanographyModule
  );

const ECOLOGY_KNOWLEDGE =
  unwrapKnowledge(
    ecologyModule
  );

const GENETICS_KNOWLEDGE =
  unwrapKnowledge(
    geneticsModule
  );

const NEUROSCIENCE_KNOWLEDGE =
  unwrapKnowledge(
    neuroscienceModule
  );

const MATHEMATICS_KNOWLEDGE =
  unwrapKnowledge(
    mathematicsModule
  );

const COMPUTER_SCIENCE_KNOWLEDGE =
  unwrapKnowledge(
    computerScienceModule
  );

const MATERIALS_SCIENCE_KNOWLEDGE =
  unwrapKnowledge(
    materialsScienceModule
  );

const ENVIRONMENTAL_SCIENCE_KNOWLEDGE =
  unwrapKnowledge(
    environmentalScienceModule
  );


// ============================================================
// SCIENCE REGISTRY
// ============================================================

export const SCIENCE_KNOWLEDGE = {

  overview: {

    name: "Science",

    description:
      "Science is the systematic study of the natural world through observation, measurement, experimentation, evidence, mathematics, modeling, and logical reasoning.",

    branches: {

      physics:
        PHYSICS_KNOWLEDGE,

      chemistry:
        CHEMISTRY_KNOWLEDGE,

      biology:
        BIOLOGY_KNOWLEDGE,

      astronomy:
        ASTRONOMY_KNOWLEDGE,

      earthScience:
        EARTH_SCIENCE_KNOWLEDGE,

      geology:
        GEOLOGY_KNOWLEDGE,

      meteorology:
        METEOROLOGY_KNOWLEDGE,

      oceanography:
        OCEANOGRAPHY_KNOWLEDGE,

      ecology:
        ECOLOGY_KNOWLEDGE,

      genetics:
        GENETICS_KNOWLEDGE,

      neuroscience:
        NEUROSCIENCE_KNOWLEDGE,

      mathematics:
        MATHEMATICS_KNOWLEDGE,

      computerScience:
        COMPUTER_SCIENCE_KNOWLEDGE,

      materialsScience:
        MATERIALS_SCIENCE_KNOWLEDGE,

      environmentalScience:
        ENVIRONMENTAL_SCIENCE_KNOWLEDGE,
    },

    scientificMethod: [

      "Observation",

      "Question",

      "Background research",

      "Hypothesis",

      "Prediction",

      "Experimental design",

      "Experiment",

      "Measurement",

      "Data collection",

      "Data analysis",

      "Interpretation",

      "Conclusion",

      "Replication",

      "Peer review",

      "Scientific communication",
    ],

    majorBranches: [

      "Physics",

      "Chemistry",

      "Biology",

      "Astronomy",

      "Earth science",

      "Geology",

      "Meteorology",

      "Oceanography",

      "Ecology",

      "Genetics",

      "Neuroscience",

      "Mathematics",

      "Computer science",

      "Materials science",

      "Environmental science",
    ],
  },


  // ==========================================================
  // PHYSICS
  // ==========================================================

  physics:
    PHYSICS_KNOWLEDGE,


  // ==========================================================
  // CHEMISTRY
  // ==========================================================

  chemistry:
    CHEMISTRY_KNOWLEDGE,


  // ==========================================================
  // BIOLOGY
  // ==========================================================

  biology:
    BIOLOGY_KNOWLEDGE,


  // ==========================================================
  // ASTRONOMY
  // ==========================================================

  astronomy:
    ASTRONOMY_KNOWLEDGE,


  // ==========================================================
  // EARTH SCIENCE
  // ==========================================================

  earthScience:
    EARTH_SCIENCE_KNOWLEDGE,


  // ==========================================================
  // GEOLOGY
  // ==========================================================

  geology:
    GEOLOGY_KNOWLEDGE,


  // ==========================================================
  // METEOROLOGY
  // ==========================================================

  meteorology:
    METEOROLOGY_KNOWLEDGE,


  // ==========================================================
  // OCEANOGRAPHY
  // ==========================================================

  oceanography:
    OCEANOGRAPHY_KNOWLEDGE,


  // ==========================================================
  // ECOLOGY
  // ==========================================================

  ecology:
    ECOLOGY_KNOWLEDGE,


  // ==========================================================
  // GENETICS
  // ==========================================================

  genetics:
    GENETICS_KNOWLEDGE,


  // ==========================================================
  // NEUROSCIENCE
  // ==========================================================

  neuroscience:
    NEUROSCIENCE_KNOWLEDGE,


  // ==========================================================
  // MATHEMATICS
  // ==========================================================

  mathematics:
    MATHEMATICS_KNOWLEDGE,


  // ==========================================================
  // COMPUTER SCIENCE
  // ==========================================================

  computerScience:
    COMPUTER_SCIENCE_KNOWLEDGE,


  // ==========================================================
  // MATERIALS SCIENCE
  // ==========================================================

  materialsScience:
    MATERIALS_SCIENCE_KNOWLEDGE,


  // ==========================================================
  // ENVIRONMENTAL SCIENCE
  // ==========================================================

  environmentalScience:
    ENVIRONMENTAL_SCIENCE_KNOWLEDGE,
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
// REZE KNOWLEDGE
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
  // UNIVERSE
  // ==========================================================

  universe: {

    astronomy:
      ASTRONOMY_KNOWLEDGE,
  },


  // ==========================================================
  // EARTH
  // ==========================================================

  earth: {

    earthScience:
      EARTH_SCIENCE_KNOWLEDGE,

    geology:
      GEOLOGY_KNOWLEDGE,

    meteorology:
      METEOROLOGY_KNOWLEDGE,

    oceanography:
      OCEANOGRAPHY_KNOWLEDGE,
  },


  // ==========================================================
  // HUMANITY
  // ==========================================================

  humanity: {

    biology:
      BIOLOGY_KNOWLEDGE,

    genetics:
      GENETICS_KNOWLEDGE,

    neuroscience:
      NEUROSCIENCE_KNOWLEDGE,

    ecology:
      ECOLOGY_KNOWLEDGE,
  },


  // ==========================================================
  // TECHNOLOGY
  // ==========================================================

  technology: {

    computerScience:
      COMPUTER_SCIENCE_KNOWLEDGE,

    materialsScience:
      MATERIALS_SCIENCE_KNOWLEDGE,
  },


  // ==========================================================
  // ENVIRONMENT
  // ==========================================================

  environment: {

    environmentalScience:
      ENVIRONMENTAL_SCIENCE_KNOWLEDGE,

    ecology:
      ECOLOGY_KNOWLEDGE,

    oceanography:
      OCEANOGRAPHY_KNOWLEDGE,

    meteorology:
      METEOROLOGY_KNOWLEDGE,
  },


  // ==========================================================
  // MATHEMATICS
  // ==========================================================

  mathematics:
    MATHEMATICS_KNOWLEDGE,
};


// ============================================================
// ALL KNOWLEDGE
//
// Used by searchKnowledge().
// Every valid knowledge module is included.
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
  PHYSICS_KNOWLEDGE,
  CHEMISTRY_KNOWLEDGE,
  BIOLOGY_KNOWLEDGE,
  ASTRONOMY_KNOWLEDGE,
  EARTH_SCIENCE_KNOWLEDGE,
  GEOLOGY_KNOWLEDGE,
  METEOROLOGY_KNOWLEDGE,
  OCEANOGRAPHY_KNOWLEDGE,
  ECOLOGY_KNOWLEDGE,
  GENETICS_KNOWLEDGE,
  NEUROSCIENCE_KNOWLEDGE,
  MATHEMATICS_KNOWLEDGE,
  COMPUTER_SCIENCE_KNOWLEDGE,
  MATERIALS_SCIENCE_KNOWLEDGE,
  ENVIRONMENTAL_SCIENCE_KNOWLEDGE,

  // Full science registry
  SCIENCE_KNOWLEDGE,

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

    // Emperors
    emperors:
      ROMAN_EMPERORS,

    emperor:
      ROMAN_EMPERORS,

    romanEmperors:
      ROMAN_EMPERORS,


    // Economy
    economy:
      ROMAN_ECONOMY,

    economic:
      ROMAN_ECONOMY,

    trade:
      ROMAN_ECONOMY,

    taxation:
      ROMAN_ECONOMY,

    taxes:
      ROMAN_ECONOMY,


    // Architecture
    architecture:
      ROMAN_ARCHITECTURE,

    engineering:
      ROMAN_ARCHITECTURE,

    buildings:
      ROMAN_ARCHITECTURE,


    // Empire
    empire:
      ROMAN_EMPIRE,

    imperial:
      ROMAN_EMPIRE,


    // Military
    military:
      ROMAN_MILITARY,

    army:
      ROMAN_MILITARY,

    legion:
      ROMAN_MILITARY,

    legions:
      ROMAN_MILITARY,


    // Wars
    wars:
      ROMAN_WARS,

    war:
      ROMAN_WARS,

    battles:
      ROMAN_WARS,


    // Overview
    overview:
      ROMAN_OVERVIEW,


    // Provinces
    provinces:
      ROMAN_PROVINCES,

    province:
      ROMAN_PROVINCES,


    // Religion
    religion:
      ROMAN_RELIGION,

    gods:
      ROMAN_RELIGION,

    mythology:
      ROMAN_RELIGION,


    // Republic
    republic:
      ROMAN_REPUBLIC,

    senate:
      ROMAN_REPUBLIC,


    // Timeline
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

    "scientific method":
      SCIENCE_KNOWLEDGE,


    // ========================================================
    // PHYSICS
    // ========================================================

    physics:
      PHYSICS_KNOWLEDGE,

    physical:
      PHYSICS_KNOWLEDGE,

    mechanics:
      PHYSICS_KNOWLEDGE,

    quantum:
      PHYSICS_KNOWLEDGE,

    "quantum physics":
      PHYSICS_KNOWLEDGE,

    relativity:
      PHYSICS_KNOWLEDGE,

    thermodynamics:
      PHYSICS_KNOWLEDGE,

    electromagnetism:
      PHYSICS_KNOWLEDGE,

    optics:
      PHYSICS_KNOWLEDGE,

    nuclear:
      PHYSICS_KNOWLEDGE,

    "nuclear physics":
      PHYSICS_KNOWLEDGE,


    // ========================================================
    // CHEMISTRY
    // ========================================================

    chemistry:
      CHEMISTRY_KNOWLEDGE,

    chemical:
      CHEMISTRY_KNOWLEDGE,

    atoms:
      CHEMISTRY_KNOWLEDGE,

    molecules:
      CHEMISTRY_KNOWLEDGE,

    reactions:
      CHEMISTRY_KNOWLEDGE,

    "organic chemistry":
      CHEMISTRY_KNOWLEDGE,

    biochemistry:
      CHEMISTRY_KNOWLEDGE,


    // ========================================================
    // BIOLOGY
    // ========================================================

    biology:
      BIOLOGY_KNOWLEDGE,

    biological:
      BIOLOGY_KNOWLEDGE,

    cells:
      BIOLOGY_KNOWLEDGE,

    cell:
      BIOLOGY_KNOWLEDGE,

    organisms:
      BIOLOGY_KNOWLEDGE,

    evolution:
      BIOLOGY_KNOWLEDGE,

    microbiology:
      BIOLOGY_KNOWLEDGE,


    // ========================================================
    // ASTRONOMY
    // ========================================================

    astronomy:
      ASTRONOMY_KNOWLEDGE,

    astronomical:
      ASTRONOMY_KNOWLEDGE,

    space:
      ASTRONOMY_KNOWLEDGE,

    universe:
      ASTRONOMY_KNOWLEDGE,

    planets:
      ASTRONOMY_KNOWLEDGE,

    planet:
      ASTRONOMY_KNOWLEDGE,

    stars:
      ASTRONOMY_KNOWLEDGE,

    star:
      ASTRONOMY_KNOWLEDGE,

    galaxies:
      ASTRONOMY_KNOWLEDGE,

    galaxy:
      ASTRONOMY_KNOWLEDGE,

    "black holes":
      ASTRONOMY_KNOWLEDGE,

    "black hole":
      ASTRONOMY_KNOWLEDGE,

    cosmology:
      ASTRONOMY_KNOWLEDGE,


    // ========================================================
    // EARTH SCIENCE
    // ========================================================

    earth:
      EARTH_SCIENCE_KNOWLEDGE,

    "earth science":
      EARTH_SCIENCE_KNOWLEDGE,

    earthscience:
      EARTH_SCIENCE_KNOWLEDGE,


    // ========================================================
    // GEOLOGY
    // ========================================================

    geology:
      GEOLOGY_KNOWLEDGE,

    geological:
      GEOLOGY_KNOWLEDGE,

    rocks:
      GEOLOGY_KNOWLEDGE,

    rock:
      GEOLOGY_KNOWLEDGE,

    minerals:
      GEOLOGY_KNOWLEDGE,

    mineral:
      GEOLOGY_KNOWLEDGE,

    volcanoes:
      GEOLOGY_KNOWLEDGE,

    volcano:
      GEOLOGY_KNOWLEDGE,

    earthquakes:
      GEOLOGY_KNOWLEDGE,

    earthquake:
      GEOLOGY_KNOWLEDGE,

    "plate tectonics":
      GEOLOGY_KNOWLEDGE,

    tectonics:
      GEOLOGY_KNOWLEDGE,


    // ========================================================
    // METEOROLOGY
    // ========================================================

    meteorology:
      METEOROLOGY_KNOWLEDGE,

    weather:
      METEOROLOGY_KNOWLEDGE,

    atmosphere:
      METEOROLOGY_KNOWLEDGE,

    clouds:
      METEOROLOGY_KNOWLEDGE,

    storms:
      METEOROLOGY_KNOWLEDGE,

    hurricanes:
      METEOROLOGY_KNOWLEDGE,

    tornadoes:
      METEOROLOGY_KNOWLEDGE,

    tornado:
      METEOROLOGY_KNOWLEDGE,

    climate:
      METEOROLOGY_KNOWLEDGE,


    // ========================================================
    // OCEANOGRAPHY
    // ========================================================

    oceanography:
      OCEANOGRAPHY_KNOWLEDGE,

    ocean:
      OCEANOGRAPHY_KNOWLEDGE,

    oceans:
      OCEANOGRAPHY_KNOWLEDGE,

    marine:
      OCEANOGRAPHY_KNOWLEDGE,

    seas:
      OCEANOGRAPHY_KNOWLEDGE,

    sea:
      OCEANOGRAPHY_KNOWLEDGE,

    tides:
      OCEANOGRAPHY_KNOWLEDGE,

    currents:
      OCEANOGRAPHY_KNOWLEDGE,


    // ========================================================
    // ECOLOGY
    // ========================================================

    ecology:
      ECOLOGY_KNOWLEDGE,

    ecological:
      ECOLOGY_KNOWLEDGE,

    ecosystem:
      ECOLOGY_KNOWLEDGE,

    ecosystems:
      ECOLOGY_KNOWLEDGE,

    biodiversity:
      ECOLOGY_KNOWLEDGE,

    conservation:
      ECOLOGY_KNOWLEDGE,

    "food chain":
      ECOLOGY_KNOWLEDGE,

    "food web":
      ECOLOGY_KNOWLEDGE,


    // ========================================================
    // GENETICS
    // ========================================================

    genetics:
      GENETICS_KNOWLEDGE,

    genetic:
      GENETICS_KNOWLEDGE,

    genes:
      GENETICS_KNOWLEDGE,

    gene:
      GENETICS_KNOWLEDGE,

    dna:
      GENETICS_KNOWLEDGE,

    rna:
      GENETICS_KNOWLEDGE,

    chromosomes:
      GENETICS_KNOWLEDGE,

    heredity:
      GENETICS_KNOWLEDGE,

    mutations:
      GENETICS_KNOWLEDGE,

    mutation:
      GENETICS_KNOWLEDGE,


    // ========================================================
    // NEUROSCIENCE
    // ========================================================

    neuroscience:
      NEUROSCIENCE_KNOWLEDGE,

    neurological:
      NEUROSCIENCE_KNOWLEDGE,

    brain:
      NEUROSCIENCE_KNOWLEDGE,

    brains:
      NEUROSCIENCE_KNOWLEDGE,

    neurons:
      NEUROSCIENCE_KNOWLEDGE,

    neuron:
      NEUROSCIENCE_KNOWLEDGE,

    synapses:
      NEUROSCIENCE_KNOWLEDGE,

    neurotransmitters:
      NEUROSCIENCE_KNOWLEDGE,

    cognition:
      NEUROSCIENCE_KNOWLEDGE,

    memory:
      NEUROSCIENCE_KNOWLEDGE,


    // ========================================================
    // MATHEMATICS
    // ========================================================

    mathematics:
      MATHEMATICS_KNOWLEDGE,

    mathematics:
      MATHEMATICS_KNOWLEDGE,

    math:
      MATHEMATICS_KNOWLEDGE,

    algebra:
      MATHEMATICS_KNOWLEDGE,

    geometry:
      MATHEMATICS_KNOWLEDGE,

    calculus:
      MATHEMATICS_KNOWLEDGE,

    probability:
      MATHEMATICS_KNOWLEDGE,

    statistics:
      MATHEMATICS_KNOWLEDGE,

    trigonometry:
      MATHEMATICS_KNOWLEDGE,

    number:
      MATHEMATICS_KNOWLEDGE,

    numbers:
      MATHEMATICS_KNOWLEDGE,


    // ========================================================
    // COMPUTER SCIENCE
    // ========================================================

    computer:
      COMPUTER_SCIENCE_KNOWLEDGE,

    computers:
      COMPUTER_SCIENCE_KNOWLEDGE,

    computing:
      COMPUTER_SCIENCE_KNOWLEDGE,

    "computer science":
      COMPUTER_SCIENCE_KNOWLEDGE,

    programming:
      COMPUTER_SCIENCE_KNOWLEDGE,

    program:
      COMPUTER_SCIENCE_KNOWLEDGE,

    software:
      COMPUTER_SCIENCE_KNOWLEDGE,

    algorithms:
      COMPUTER_SCIENCE_KNOWLEDGE,

    algorithm:
      COMPUTER_SCIENCE_KNOWLEDGE,

    ai:
      COMPUTER_SCIENCE_KNOWLEDGE,

    "artificial intelligence":
      COMPUTER_SCIENCE_KNOWLEDGE,

    machine:
      COMPUTER_SCIENCE_KNOWLEDGE,

    "machine learning":
      COMPUTER_SCIENCE_KNOWLEDGE,

    "deep learning":
      COMPUTER_SCIENCE_KNOWLEDGE,

    "neural networks":
      COMPUTER_SCIENCE_KNOWLEDGE,

    cybersecurity:
      COMPUTER_SCIENCE_KNOWLEDGE,

    networking:
      COMPUTER_SCIENCE_KNOWLEDGE,

    databases:
      COMPUTER_SCIENCE_KNOWLEDGE,


    // ========================================================
    // MATERIALS SCIENCE
    // ========================================================

    materials:
      MATERIALS_SCIENCE_KNOWLEDGE,

    "materials science":
      MATERIALS_SCIENCE_KNOWLEDGE,

    material:
      MATERIALS_SCIENCE_KNOWLEDGE,

    metals:
      MATERIALS_SCIENCE_KNOWLEDGE,

    metal:
      MATERIALS_SCIENCE_KNOWLEDGE,

    ceramics:
      MATERIALS_SCIENCE_KNOWLEDGE,

    polymers:
      MATERIALS_SCIENCE_KNOWLEDGE,

    composites:
      MATERIALS_SCIENCE_KNOWLEDGE,

    nanomaterials:
      MATERIALS_SCIENCE_KNOWLEDGE,

    graphene:
      MATERIALS_SCIENCE_KNOWLEDGE,

    semiconductors:
      MATERIALS_SCIENCE_KNOWLEDGE,


    // ========================================================
    // ENVIRONMENTAL SCIENCE
    // ========================================================

    environment:
      ENVIRONMENTAL_SCIENCE_KNOWLEDGE,

    environmental:
      ENVIRONMENTAL_SCIENCE_KNOWLEDGE,

    "environmental science":
      ENVIRONMENTAL_SCIENCE_KNOWLEDGE,

    pollution:
      ENVIRONMENTAL_SCIENCE_KNOWLEDGE,

    sustainability:
      ENVIRONMENTAL_SCIENCE_KNOWLEDGE,

    waste:
      ENVIRONMENTAL_SCIENCE_KNOWLEDGE,

    recycling:
      ENVIRONMENTAL_SCIENCE_KNOWLEDGE,

    "climate change":
      ENVIRONMENTAL_SCIENCE_KNOWLEDGE,

    globalwarming:
      ENVIRONMENTAL_SCIENCE_KNOWLEDGE,

    "global warming":
      ENVIRONMENTAL_SCIENCE_KNOWLEDGE,
  };

  return (
    topicMap[
      normalized
    ] || null
  );
}


// ============================================================
// GET KNOWLEDGE BY CATEGORY
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

  if (
    normalizedCategory === "roman" ||
    normalizedCategory === "rome" ||
    normalizedCategory === "roman history"
  ) {

    return getRomanKnowledge(
      topic
    );
  }

  if (
    normalizedCategory === "science" ||
    normalizedCategory === "scientific"
  ) {

    return getScienceKnowledge(
      topic
    );
  }

  return null;
}


// ============================================================
// DEFAULT EXPORT
// ============================================================

export default REZE_KNOWLEDGE;
