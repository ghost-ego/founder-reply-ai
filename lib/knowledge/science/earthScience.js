// lib/knowledge/science/earthScience.js

// ============================================================
// REZE KNOWLEDGE ENGINE
// EARTH SCIENCE KNOWLEDGE
//
// Covers:
// - Earth system science
// - Geophysics
// - Geochemistry
// - Earth's structure
// - Plate tectonics
// - Geological time
// - Rocks and minerals
// - Earth surface processes
// - Natural hazards
// - Climate
// - Hydrology
// - Atmosphere
// - Oceans
// - Soils
// - Paleontology
// - Earth's history
// - Biogeochemical cycles
// - Earth observation
// - Planetary Earth science
// ============================================================

export const EARTH_SCIENCE_KNOWLEDGE = {

  name: "Earth Science",

  description:
    "Earth science is the interdisciplinary study of Earth, including its solid interior, rocks, minerals, atmosphere, hydrosphere, biosphere, climate, surface processes, geological history, and interactions among Earth's systems.",


  // ==========================================================
  // GENERAL EARTH SCIENCE
  // ==========================================================

  overview: {

    definition:
      "Earth science studies the physical, chemical, biological, and historical processes that shape and operate on Earth.",

    majorBranches: [
      "Geology",
      "Geophysics",
      "Geochemistry",
      "Meteorology",
      "Climatology",
      "Oceanography",
      "Hydrology",
      "Glaciology",
      "Soil science",
      "Paleontology",
      "Environmental science",
      "Earth system science",
      "Planetary science",
    ],

    earthSystems: [
      "Geosphere",
      "Hydrosphere",
      "Atmosphere",
      "Biosphere",
      "Cryosphere",
      "Pedosphere",
    ],

    majorProcesses: [
      "Plate tectonics",
      "Rock formation",
      "Weathering",
      "Erosion",
      "Sedimentation",
      "Volcanism",
      "Earthquakes",
      "Mountain building",
      "Glaciation",
      "Ocean circulation",
      "Atmospheric circulation",
      "Climate change",
      "Biogeochemical cycling",
    ],
  },


  // ==========================================================
  // EARTH'S STRUCTURE
  // ==========================================================

  earthStructure: {

    layers: {

      crust: {
        description:
          "The crust is Earth's outermost solid layer.",

        types: [
          "Continental crust",
          "Oceanic crust",
        ],

        continentalCrust: [
          "Generally thicker",
          "Generally less dense than oceanic crust",
          "Contains abundant granitic rocks",
          "Forms most continents",
        ],

        oceanicCrust: [
          "Generally thinner",
          "Denser than continental crust",
          "Commonly composed of basaltic rocks",
          "Forms ocean basins",
        ],
      },

      mantle: {
        description:
          "The mantle is the thick silicate-rich layer between the crust and core.",

        regions: [
          "Upper mantle",
          "Transition zone",
          "Lower mantle",
        ],

        importantFeatures: [
          "Solid but capable of slow deformation",
          "Contains abundant magnesium- and iron-rich silicate minerals",
          "Convection contributes to plate tectonic processes",
          "Extends to great depth beneath the crust",
        ],
      },

      outerCore: {
        description:
          "The outer core is a deep layer composed primarily of iron and nickel and is liquid.",

        characteristics: [
          "Liquid metallic material",
          "Extremely high temperature",
          "Contributes to Earth's magnetic field through dynamo processes",
        ],
      },

      innerCore: {
        description:
          "The inner core is Earth's central solid region.",

        characteristics: [
          "Primarily iron-rich",
          "Extremely high pressure",
          "Extremely high temperature",
          "Solid because of immense pressure",
        ],
      },
    },

    mechanicalLayers: [
      "Lithosphere",
      "Asthenosphere",
      "Mesosphere",
      "Outer core",
      "Inner core",
    ],

    chemicalLayers: [
      "Crust",
      "Mantle",
      "Core",
    ],
  },


  // ==========================================================
  // GEOPHYSICS
  // ==========================================================

  geophysics: {

    definition:
      "Geophysics applies physics to understand Earth's interior, surface, gravity, magnetic field, seismic behavior, and physical processes.",

    subjects: [
      "Seismology",
      "Geomagnetism",
      "Gravity",
      "Geodesy",
      "Heat flow",
      "Earthquake physics",
      "Rock physics",
      "Tectonophysics",
      "Volcanophysics",
    ],

    methods: [
      "Seismic waves",
      "Gravity measurements",
      "Magnetic measurements",
      "Electrical resistivity",
      "Electromagnetic surveys",
      "Satellite observations",
      "GPS measurements",
      "Remote sensing",
    ],
  },


  // ==========================================================
  // PLATE TECTONICS
  // ==========================================================

  plateTectonics: {

    definition:
      "Plate tectonics describes the movement and interaction of large rigid plates forming Earth's lithosphere.",

    majorPlates: [
      "African Plate",
      "Antarctic Plate",
      "Arabian Plate",
      "Australian Plate",
      "Caribbean Plate",
      "Cocos Plate",
      "Eurasian Plate",
      "Indian Plate",
      "Juan de Fuca Plate",
      "Nazca Plate",
      "North American Plate",
      "Pacific Plate",
      "Philippine Sea Plate",
      "Scotia Plate",
      "South American Plate",
    ],

    boundaryTypes: {

      divergent: [
        "Plates move apart",
        "New crust may form",
        "Mid-ocean ridges are common",
        "Continental rifting can occur",
      ],

      convergent: [
        "Plates move toward one another",
        "Subduction may occur",
        "Mountain ranges may form",
        "Volcanic arcs may form",
        "Strong earthquakes may occur",
      ],

      transform: [
        "Plates slide laterally past each other",
        "Earthquakes are common",
        "Crust is generally neither created nor destroyed at the boundary",
      ],
    },

    drivingProcesses: [
      "Mantle convection",
      "Slab pull",
      "Ridge push",
      "Gravitational forces",
      "Basal traction",
    ],

    consequences: [
      "Earthquakes",
      "Volcanism",
      "Mountain building",
      "Ocean basin formation",
      "Continental drift",
      "Seafloor spreading",
      "Trench formation",
    ],
  },


  // ==========================================================
  // CONTINENTAL DRIFT
  // ==========================================================

  continentalDrift: {

    definition:
      "Continental drift is the movement of continents across geological time.",

    history: [
      "Alfred Wegener proposed continental drift in the early twentieth century.",
      "The supercontinent Pangaea is an important example in Earth's geological history.",
      "Modern plate tectonics provides the mechanism explaining continental movement.",
    ],

    evidence: [
      "Matching continental coastlines",
      "Fossil similarities across separated continents",
      "Matching rock formations",
      "Ancient climate indicators",
      "Paleomagnetic evidence",
      "Seafloor spreading",
    ],

    supercontinents: [
      "Pangaea",
      "Gondwana",
      "Laurasia",
      "Rodinia",
      "Columbia",
      "Kenorland",
    ],
  },


  // ==========================================================
  // GEOLOGICAL TIME
  // ==========================================================

  geologicalTime: {

    definition:
      "The geological time scale organizes Earth's history into nested intervals based on geological, biological, and chronological evidence.",

    largestDivisions: [
      "Eon",
      "Era",
      "Period",
      "Epoch",
      "Age",
    ],

    eons: [
      "Hadean",
      "Archean",
      "Proterozoic",
      "Phanerozoic",
    ],

    phanerozoicEras: [
      "Paleozoic",
      "Mesozoic",
      "Cenozoic",
    ],

    paleozoicPeriods: [
      "Cambrian",
      "Ordovician",
      "Silurian",
      "Devonian",
      "Carboniferous",
      "Permian",
    ],

    mesozoicPeriods: [
      "Triassic",
      "Jurassic",
      "Cretaceous",
    ],

    cenozoicPeriods: [
      "Paleogene",
      "Neogene",
      "Quaternary",
    ],

    datingMethods: [
      "Relative dating",
      "Radiometric dating",
      "Stratigraphy",
      "Biostratigraphy",
      "Magnetostratigraphy",
      "Chemostratigraphy",
    ],
  },


  // ==========================================================
  // ROCKS
  // ==========================================================

  rocks: {

    definition:
      "Rocks are naturally occurring solid aggregates of minerals, mineraloids, or other geological materials.",

    majorTypes: {

      igneous: {

        definition:
          "Igneous rocks form from the cooling and solidification of molten rock.",

        examples: [
          "Granite",
          "Basalt",
          "Diorite",
          "Gabbro",
          "Obsidian",
          "Pumice",
          "Andesite",
          "Rhyolite",
        ],

        environments: [
          "Volcanic eruptions",
          "Magma chambers",
          "Dikes",
          "Sills",
          "Plutons",
          "Mid-ocean ridges",
        ],
      },

      sedimentary: {

        definition:
          "Sedimentary rocks form from deposited sediments, chemical precipitation, or biological material.",

        examples: [
          "Sandstone",
          "Shale",
          "Limestone",
          "Conglomerate",
          "Breccia",
          "Mudstone",
          "Coal",
          "Chert",
        ],

        processes: [
          "Weathering",
          "Erosion",
          "Transportation",
          "Deposition",
          "Compaction",
          "Cementation",
          "Chemical precipitation",
        ],
      },

      metamorphic: {

        definition:
          "Metamorphic rocks form when existing rocks are altered by heat, pressure, fluids, or chemical conditions without completely melting.",

        examples: [
          "Marble",
          "Slate",
          "Gneiss",
          "Schist",
          "Quartzite",
          "Amphibolite",
          "Phyllite",
        ],

        processes: [
          "Recrystallization",
          "Foliation",
          "Mineral transformation",
          "Pressure solution",
          "Fluid-assisted reactions",
        ],
      },
    },

    rockCycle: [
      "Magma",
      "Crystallization",
      "Igneous rock",
      "Weathering",
      "Sedimentation",
      "Sedimentary rock",
      "Burial",
      "Heat and pressure",
      "Metamorphic rock",
      "Melting",
      "Magma",
    ],
  },


  // ==========================================================
  // MINERALS
  // ==========================================================

  minerals: {

    definition:
      "A mineral is a naturally occurring inorganic solid with an ordered atomic structure and characteristic chemical composition.",

    properties: [
      "Color",
      "Streak",
      "Luster",
      "Hardness",
      "Cleavage",
      "Fracture",
      "Density",
      "Crystal form",
      "Specific gravity",
      "Magnetism",
    ],

    mohsScale: [
      "Talc",
      "Gypsum",
      "Calcite",
      "Fluorite",
      "Apatite",
      "Orthoclase",
      "Quartz",
      "Topaz",
      "Corundum",
      "Diamond",
    ],

    majorMineralGroups: [
      "Silicates",
      "Carbonates",
      "Oxides",
      "Sulfides",
      "Sulfates",
      "Halides",
      "Phosphates",
      "Native elements",
    ],

    commonMinerals: [
      "Quartz",
      "Feldspar",
      "Mica",
      "Calcite",
      "Dolomite",
      "Pyroxene",
      "Amphibole",
      "Olivine",
      "Gypsum",
      "Halite",
      "Hematite",
      "Magnetite",
    ],
  },


  // ==========================================================
  // WEATHERING
  // ==========================================================

  weathering: {

    definition:
      "Weathering is the breakdown or alteration of rocks and minerals at or near Earth's surface.",

    physicalWeathering: [
      "Freeze-thaw expansion",
      "Thermal expansion",
      "Pressure release",
      "Salt crystal growth",
      "Abrasion",
      "Root wedging",
    ],

    chemicalWeathering: [
      "Dissolution",
      "Hydrolysis",
      "Oxidation",
      "Carbonation",
      "Hydration",
    ],

    biologicalWeathering: [
      "Root growth",
      "Burrowing organisms",
      "Microbial activity",
      "Organic acids",
    ],

    controllingFactors: [
      "Temperature",
      "Water availability",
      "Rock composition",
      "Surface area",
      "Climate",
      "Biological activity",
    ],
  },


  // ==========================================================
  // EROSION
  // ==========================================================

  erosion: {

    definition:
      "Erosion is the removal and transport of weathered material by natural agents.",

    agents: [
      "Running water",
      "Waves",
      "Wind",
      "Glaciers",
      "Gravity",
      "Groundwater",
    ],

    processes: [
      "Abrasion",
      "Plucking",
      "Deflation",
      "Hydraulic action",
      "Attrition",
      "Solution",
      "Mass movement",
    ],

    landforms: [
      "Canyons",
      "Valleys",
      "Gullies",
      "Cliffs",
      "Dunes",
      "U-shaped valleys",
      "River channels",
    ],
  },


  // ==========================================================
  // RIVERS AND FLUVIAL SYSTEMS
  // ==========================================================

  rivers: {

    riverProcesses: [
      "Erosion",
      "Transportation",
      "Deposition",
      "Flooding",
      "Meandering",
      "Channel migration",
    ],

    transportationTypes: [
      "Traction",
      "Saltation",
      "Suspension",
      "Dissolved load",
    ],

    landforms: [
      "V-shaped valleys",
      "Waterfalls",
      "Gorges",
      "Meanders",
      "Oxbow lakes",
      "Floodplains",
      "Levees",
      "Alluvial fans",
      "Deltas",
    ],

    drainagePatterns: [
      "Dendritic",
      "Trellis",
      "Radial",
      "Rectangular",
      "Annular",
    ],

    hydrology: [
      "River discharge",
      "Drainage basin",
      "Watershed",
      "Stream order",
      "Runoff",
      "Infiltration",
      "Baseflow",
    ],
  },


  // ==========================================================
  // GLACIERS
  // ==========================================================

  glaciers: {

    definition:
      "Glaciers are persistent masses of flowing ice formed from accumulated and compacted snow.",

    types: [
      "Valley glaciers",
      "Ice caps",
      "Ice sheets",
      "Cirque glaciers",
      "Tidewater glaciers",
    ],

    processes: [
      "Plucking",
      "Abrasion",
      "Freeze-on",
      "Ice flow",
      "Calving",
      "Accumulation",
      "Ablation",
    ],

    landforms: [
      "Cirques",
      "Arêtes",
      "Horns",
      "U-shaped valleys",
      "Moraines",
      "Drumlins",
      "Eskers",
      "Kettle lakes",
      "Fjords",
      "Outwash plains",
    ],

    massBalance: [
      "Accumulation",
      "Ablation",
      "Net mass balance",
    ],
  },


  // ==========================================================
  // DESERTS
  // ==========================================================

  deserts: {

    definition:
      "Deserts are regions characterized by very low long-term precipitation relative to atmospheric water demand.",

    types: [
      "Subtropical deserts",
      "Coastal deserts",
      "Rain-shadow deserts",
      "Polar deserts",
      "Interior deserts",
    ],

    processes: [
      "Wind erosion",
      "Deflation",
      "Abrasion",
      "Flash flooding",
      "Salt weathering",
      "Thermal weathering",
    ],

    landforms: [
      "Sand dunes",
      "Ergs",
      "Yardangs",
      "Alluvial fans",
      "Playas",
      "Pediments",
      "Desert pavements",
      "Badlands",
    ],
  },


  // ==========================================================
  // COASTAL GEOLOGY
  // ==========================================================

  coastalGeology: {

    processes: [
      "Wave erosion",
      "Longshore transport",
      "Deposition",
      "Tidal action",
      "Storm surge",
      "Coastal weathering",
      "Sea-level change",
    ],

    landforms: [
      "Sea cliffs",
      "Wave-cut platforms",
      "Sea caves",
      "Arches",
      "Stacks",
      "Beaches",
      "Spits",
      "Bars",
      "Barrier islands",
      "Tombolos",
      "Deltas",
      "Estuaries",
      "Lagoons",
    ],

    coastalHazards: [
      "Coastal erosion",
      "Storm surge",
      "Tsunamis",
      "Sea-level rise",
      "Saltwater intrusion",
    ],
  },


  // ==========================================================
  // KARST
  // ==========================================================

  karst: {

    definition:
      "Karst landscapes develop where soluble rocks, especially limestone, are dissolved by water.",

    processes: [
      "Carbonic acid dissolution",
      "Groundwater circulation",
      "Cave formation",
      "Collapse",
      "Chemical precipitation",
    ],

    landforms: [
      "Sinkholes",
      "Caves",
      "Caverns",
      "Karst towers",
      "Poljes",
      "Limestone pavements",
      "Springs",
      "Disappearing streams",
    ],

    caveFeatures: [
      "Stalactites",
      "Stalagmites",
      "Columns",
      "Flowstone",
      "Cave pearls",
    ],
  },


  // ==========================================================
  // VOLCANOES
  // ==========================================================

  volcanoes: {

    definition:
      "Volcanoes are openings or structures through which magma, gases, and volcanic material reach Earth's surface.",

    volcanicTypes: [
      "Shield volcanoes",
      "Stratovolcanoes",
      "Cinder cones",
      "Lava domes",
      "Submarine volcanoes",
      "Calderas",
      "Fissure volcanoes",
    ],

    magmaTypes: [
      "Basaltic magma",
      "Andesitic magma",
      "Dacitic magma",
      "Rhyolitic magma",
    ],

    volcanicProducts: [
      "Lava",
      "Ash",
      "Lapilli",
      "Volcanic bombs",
      "Pumice",
      "Scoria",
      "Pyroclastic flows",
      "Volcanic gases",
    ],

    volcanicHazards: [
      "Lava flows",
      "Ashfall",
      "Pyroclastic density currents",
      "Lahars",
      "Volcanic gases",
      "Landslides",
      "Tsunamis",
    ],

    eruptionStyles: [
      "Effusive",
      "Explosive",
      "Hawaiian",
      "Strombolian",
      "Vulcanian",
      "Plinian",
      "Surtseyan",
    ],
  },


  // ==========================================================
  // EARTHQUAKES
  // ==========================================================

  earthquakes: {

    definition:
      "An earthquake is the sudden release of stored elastic energy in Earth's crust or upper mantle, producing seismic waves.",

    causes: [
      "Fault movement",
      "Plate interactions",
      "Volcanic activity",
      "Induced seismicity",
      "Collapse events",
    ],

    seismicWaves: {

      primary: [
        "P waves",
        "Compressional motion",
        "Travel through solids and fluids",
      ],

      secondary: [
        "S waves",
        "Shear motion",
        "Travel through solids but not fluids",
      ],

      surface: [
        "Love waves",
        "Rayleigh waves",
        "Often produce strong surface motion",
      ],
    },

    measurements: [
      "Magnitude",
      "Intensity",
      "Seismograms",
      "Seismometers",
    ],

    hazards: [
      "Ground shaking",
      "Surface rupture",
      "Liquefaction",
      "Landslides",
      "Tsunamis",
      "Fires",
      "Infrastructure damage",
    ],

    relatedTerms: [
      "Hypocenter",
      "Epicenter",
      "Fault",
      "Aftershock",
      "Foreshock",
      "Seismic gap",
    ],
  },


  // ==========================================================
  // TSUNAMIS
  // ==========================================================

  tsunamis: {

    definition:
      "Tsunamis are long-wavelength ocean waves generated by the sudden displacement of a large volume of water.",

    causes: [
      "Undersea earthquakes",
      "Submarine landslides",
      "Volcanic eruptions",
      "Volcanic flank collapse",
      "Rarely large impacts",
    ],

    characteristics: [
      "Long wavelengths",
      "Rapid movement in deep water",
      "Increasing wave height near shore",
      "Multiple waves may arrive",
      "Strong currents can accompany inundation",
    ],

    hazards: [
      "Coastal flooding",
      "Strong currents",
      "Debris impact",
      "Erosion",
      "Infrastructure destruction",
    ],
  },


  // ==========================================================
  // LANDSLIDES
  // ==========================================================

  landslides: {

    definition:
      "Landslides are downslope movements of soil, rock, debris, or earth under gravity.",

    types: [
      "Rockfall",
      "Rockslide",
      "Debris flow",
      "Mudflow",
      "Earthflow",
      "Slump",
      "Debris avalanche",
      "Creep",
    ],

    triggers: [
      "Heavy rainfall",
      "Earthquakes",
      "Volcanic activity",
      "Slope undercutting",
      "Freeze-thaw",
      "Weathering",
      "Deforestation",
      "Construction",
    ],

    controllingFactors: [
      "Slope angle",
      "Rock structure",
      "Water content",
      "Vegetation",
      "Geology",
      "Ground shaking",
    ],
  },


  // ==========================================================
  // SOILS
  // ==========================================================

  soils: {

    definition:
      "Soil is a dynamic natural material consisting of minerals, organic matter, water, air, and living organisms.",

    components: [
      "Mineral particles",
      "Organic matter",
      "Water",
      "Air",
      "Microorganisms",
      "Roots",
      "Soil fauna",
    ],

    horizons: [
      "O horizon",
      "A horizon",
      "E horizon",
      "B horizon",
      "C horizon",
      "R horizon",
    ],

    soilProcesses: [
      "Weathering",
      "Humification",
      "Leaching",
      "Mineralization",
      "Erosion",
      "Pedogenesis",
    ],

    properties: [
      "Texture",
      "Structure",
      "Porosity",
      "Permeability",
      "pH",
      "Organic matter",
      "Water-holding capacity",
      "Cation exchange capacity",
    ],

    particleSizes: [
      "Clay",
      "Silt",
      "Sand",
      "Gravel",
    ],
  },


  // ==========================================================
  // HYDROLOGY
  // ==========================================================

  hydrology: {

    definition:
      "Hydrology studies the movement, distribution, storage, and properties of water on and beneath Earth's surface.",

    waterStores: [
      "Oceans",
      "Ice sheets",
      "Glaciers",
      "Groundwater",
      "Lakes",
      "Rivers",
      "Soil moisture",
      "Atmospheric water",
      "Wetlands",
      "Biosphere",
    ],

    waterCycle: [
      "Evaporation",
      "Transpiration",
      "Sublimation",
      "Condensation",
      "Precipitation",
      "Infiltration",
      "Percolation",
      "Runoff",
      "Groundwater flow",
      "Collection",
    ],

    groundwater: [
      "Aquifers",
      "Aquitards",
      "Water table",
      "Recharge",
      "Discharge",
      "Springs",
      "Wells",
      "Groundwater flow",
    ],
  },


  // ==========================================================
  // ATMOSPHERIC EARTH SCIENCE
  // ==========================================================

  atmosphere: {

    composition: [
      "Nitrogen",
      "Oxygen",
      "Argon",
      "Carbon dioxide",
      "Water vapor",
      "Trace gases",
    ],

    layers: [
      "Troposphere",
      "Stratosphere",
      "Mesosphere",
      "Thermosphere",
      "Exosphere",
    ],

    atmosphericProcesses: [
      "Convection",
      "Radiation",
      "Advection",
      "Condensation",
      "Evaporation",
      "Precipitation",
      "Pressure changes",
      "Atmospheric circulation",
    ],

    importantPhenomena: [
      "Clouds",
      "Storms",
      "Jet streams",
      "Fronts",
      "Monsoons",
      "Cyclones",
      "Thunderstorms",
      "Lightning",
      "Auroras",
    ],
  },


  // ==========================================================
  // CLIMATE SYSTEM
  // ==========================================================

  climate: {

    definition:
      "Climate describes the long-term statistical characteristics of weather and environmental conditions in a region or across Earth.",

    components: [
      "Atmosphere",
      "Ocean",
      "Cryosphere",
      "Land surface",
      "Biosphere",
    ],

    climateControls: [
      "Latitude",
      "Altitude",
      "Ocean currents",
      "Land distribution",
      "Topography",
      "Atmospheric circulation",
      "Solar radiation",
    ],

    climateProcesses: [
      "Radiative balance",
      "Greenhouse effect",
      "Ocean heat transport",
      "Cloud feedbacks",
      "Ice-albedo feedback",
      "Water-vapor feedback",
      "Carbon cycling",
    ],
  },


  // ==========================================================
  // CARBON CYCLE
  // ==========================================================

  carbonCycle: {

    reservoirs: [
      "Atmosphere",
      "Oceans",
      "Soils",
      "Vegetation",
      "Sediments",
      "Fossil carbon",
      "Crust",
    ],

    processes: [
      "Photosynthesis",
      "Respiration",
      "Decomposition",
      "Ocean-atmosphere exchange",
      "Sedimentation",
      "Weathering",
      "Volcanism",
      "Combustion",
    ],
  },


  // ==========================================================
  // NITROGEN CYCLE
  // ==========================================================

  nitrogenCycle: {

    processes: [
      "Nitrogen fixation",
      "Nitrification",
      "Assimilation",
      "Ammonification",
      "Denitrification",
      "Anammox",
    ],

    reservoirs: [
      "Atmosphere",
      "Soils",
      "Biomass",
      "Oceans",
      "Sediments",
    ],
  },


  // ==========================================================
  // PHOSPHORUS CYCLE
  // ==========================================================

  phosphorusCycle: {

    majorReservoirs: [
      "Rocks",
      "Soils",
      "Sediments",
      "Biomass",
      "Oceans",
    ],

    processes: [
      "Rock weathering",
      "Erosion",
      "Plant uptake",
      "Animal consumption",
      "Decomposition",
      "Sedimentation",
      "Geological uplift",
    ],
  },


  // ==========================================================
  // WATER CYCLE
  // ==========================================================

  waterCycle: {

    stages: [
      "Evaporation",
      "Transpiration",
      "Evapotranspiration",
      "Condensation",
      "Cloud formation",
      "Precipitation",
      "Infiltration",
      "Groundwater recharge",
      "Surface runoff",
      "River flow",
      "Ocean return",
    ],

    formsOfPrecipitation: [
      "Rain",
      "Snow",
      "Sleet",
      "Hail",
      "Freezing rain",
    ],
  },


  // ==========================================================
  // OCEAN-EARTH INTERACTIONS
  // ==========================================================

  oceanEarthInteractions: {

    processes: [
      "Coastal erosion",
      "Sediment transport",
      "Carbon exchange",
      "Heat exchange",
      "Plate tectonics",
      "Seafloor spreading",
      "Subduction",
      "Hydrothermal circulation",
    ],

    geologicalFeatures: [
      "Mid-ocean ridges",
      "Ocean trenches",
      "Seamounts",
      "Guyots",
      "Abyssal plains",
      "Submarine volcanoes",
      "Hydrothermal vents",
    ],
  },


  // ==========================================================
  // EARTH'S MAGNETIC FIELD
  // ==========================================================

  magneticField: {

    origin:
      "Earth's magnetic field is generated mainly by fluid motion in the electrically conducting outer core through the geodynamo process.",

    features: [
      "Magnetic poles",
      "Magnetosphere",
      "Magnetic field lines",
      "Magnetic declination",
      "Magnetic inclination",
      "Magnetic anomalies",
    ],

    importance: [
      "Deflects much of the solar wind",
      "Produces auroral phenomena",
      "Provides navigational information",
      "Records past magnetic reversals in rocks",
    ],

    reversals: [
      "Geomagnetic reversals",
      "Normal polarity",
      "Reversed polarity",
      "Magnetic polarity timescale",
    ],
  },


  // ==========================================================
  // GRAVITY AND GEOID
  // ==========================================================

  gravity: {

    topics: [
      "Gravitational acceleration",
      "Gravity anomalies",
      "Mass distribution",
      "Geoid",
      "Isostasy",
      "Free-air gravity",
      "Bouguer gravity",
    ],

    applications: [
      "Mapping subsurface structures",
      "Studying Earth's interior",
      "Geodesy",
      "Resource exploration",
      "Tectonic studies",
    ],
  },


  // ==========================================================
  // ISOSTASY
  // ==========================================================

  isostasy: {

    definition:
      "Isostasy describes gravitational equilibrium between Earth's lithosphere and underlying material, with variations related to density and thickness.",

    concepts: [
      "Airy isostasy",
      "Pratt isostasy",
      "Lithospheric loading",
      "Glacial isostatic adjustment",
      "Crustal thickness",
    ],
  },


  // ==========================================================
  // PALEONTOLOGY
  // ==========================================================

  paleontology: {

    definition:
      "Paleontology studies ancient life using fossils and geological evidence.",

    fossilTypes: [
      "Body fossils",
      "Trace fossils",
      "Molds",
      "Casts",
      "Petrified remains",
      "Carbon films",
      "Amber inclusions",
      "Microfossils",
    ],

    evidence: [
      "Fossilized bones",
      "Shells",
      "Leaves",
      "Tracks",
      "Burrows",
      "Coprolites",
      "Pollen",
      "Microscopic remains",
    ],

    methods: [
      "Stratigraphy",
      "Radiometric dating",
      "Biostratigraphy",
      "Comparative anatomy",
      "Paleoecology",
      "Taphonomy",
    ],
  },


  // ==========================================================
  // MASS EXTINCTIONS
  // ==========================================================

  massExtinctions: {

    definition:
      "A mass extinction is an interval during which extinction rates rise substantially above background levels across many groups.",

    majorEvents: [

      {
        name: "End-Ordovician extinction",
        causes: [
          "Major climatic changes",
          "Glaciation",
          "Sea-level changes",
        ],
      },

      {
        name: "Late Devonian extinctions",
        causes: [
          "Ocean environmental changes",
          "Anoxia",
          "Climate changes",
          "Ecological disruption",
        ],
      },

      {
        name: "End-Permian extinction",
        causes: [
          "Large-scale volcanism",
          "Climate warming",
          "Ocean acidification",
          "Ocean anoxia",
          "Major ecosystem disruption",
        ],
      },

      {
        name: "End-Triassic extinction",
        causes: [
          "Large-scale volcanism",
          "Climate change",
          "Ocean chemistry changes",
        ],
      },

      {
        name: "Cretaceous-Paleogene extinction",
        causes: [
          "Large asteroid impact",
          "Environmental disruption",
          "Climate effects",
        ],
      },
    ],
  },


  // ==========================================================
  // PALEOCLIMATE
  // ==========================================================

  paleoclimate: {

    definition:
      "Paleoclimatology reconstructs Earth's past climates using geological, biological, chemical, and physical evidence.",

    proxies: [
      "Ice cores",
      "Tree rings",
      "Corals",
      "Lake sediments",
      "Ocean sediments",
      "Pollen",
      "Fossils",
      "Stable isotopes",
      "Speleothems",
      "Glacial deposits",
    ],

    evidenceForPastClimate: [
      "Glacial deposits",
      "Evaporites",
      "Coal deposits",
      "Coral growth",
      "Fossil distribution",
      "Isotope ratios",
      "Sedimentary structures",
    ],
  },


  // ==========================================================
  // STRATIGRAPHY
  // ==========================================================

  stratigraphy: {

    definition:
      "Stratigraphy studies rock layers and their relationships through geological time.",

    principles: [
      "Superposition",
      "Original horizontality",
      "Lateral continuity",
      "Cross-cutting relationships",
      "Inclusions",
      "Faunal succession",
    ],

    methods: [
      "Lithostratigraphy",
      "Biostratigraphy",
      "Chronostratigraphy",
      "Magnetostratigraphy",
      "Chemostratigraphy",
      "Sequence stratigraphy",
    ],

    structures: [
      "Beds",
      "Layers",
      "Unconformities",
      "Faults",
      "Folds",
      "Intrusions",
    ],
  },


  // ==========================================================
  // UNCONFORMITIES
  // ==========================================================

  unconformities: {

    types: [
      "Angular unconformity",
      "Disconformity",
      "Nonconformity",
      "Paraconformity",
    ],

    meaning:
      "Unconformities represent gaps in the geological record caused by erosion, non-deposition, or both.",
  },


  // ==========================================================
  // FOLDING
  // ==========================================================

  folding: {

    definition:
      "Folding occurs when rock layers deform into curved structures under stress.",

    types: [
      "Anticline",
      "Syncline",
      "Monocline",
      "Dome",
      "Basin",
      "Overturned fold",
      "Recumbent fold",
    ],

    controls: [
      "Temperature",
      "Pressure",
      "Rock composition",
      "Strain rate",
      "Depth",
      "Fluid presence",
    ],
  },


  // ==========================================================
  // FAULTS
  // ==========================================================

  faults: {

    definition:
      "A fault is a fracture or zone of fractures along which rocks have experienced displacement.",

    types: [
      "Normal fault",
      "Reverse fault",
      "Thrust fault",
      "Strike-slip fault",
      "Oblique-slip fault",
    ],

    components: [
      "Fault plane",
      "Hanging wall",
      "Footwall",
      "Fault trace",
      "Fault scarp",
    ],

    importance: [
      "Earthquake generation",
      "Mountain building",
      "Crustal deformation",
      "Fluid movement",
      "Mineralization",
    ],
  },


  // ==========================================================
  // SEDIMENTOLOGY
  // ==========================================================

  sedimentology: {

    definition:
      "Sedimentology studies sediments, sedimentary processes, and sedimentary rocks.",

    sedimentSources: [
      "Weathered rocks",
      "Volcanic material",
      "Biological material",
      "Chemical precipitates",
    ],

    transportAgents: [
      "Rivers",
      "Wind",
      "Glaciers",
      "Waves",
      "Ocean currents",
      "Gravity",
    ],

    sedimentaryStructures: [
      "Bedding",
      "Cross-bedding",
      "Ripple marks",
      "Mud cracks",
      "Graded bedding",
      "Imbrication",
      "Bioturbation",
    ],
  },


  // ==========================================================
  // IGNEOUS PROCESSES
  // ==========================================================

  igneousProcesses: {

    magmaFormation: [
      "Decompression melting",
      "Flux melting",
      "Heat transfer",
    ],

    magmaEvolution: [
      "Fractional crystallization",
      "Assimilation",
      "Magma mixing",
      "Partial melting",
    ],

    intrusiveStructures: [
      "Batholith",
      "Stock",
      "Laccolith",
      "Sill",
      "Dike",
      "Pluton",
    ],

    volcanicStructures: [
      "Vent",
      "Crater",
      "Caldera",
      "Cone",
      "Lava dome",
      "Fissure",
    ],
  },


  // ==========================================================
  // METAMORPHISM
  // ==========================================================

  metamorphism: {

    definition:
      "Metamorphism is the solid-state alteration of rocks caused by changing temperature, pressure, stress, fluids, or chemical environment.",

    types: [
      "Contact metamorphism",
      "Regional metamorphism",
      "Dynamic metamorphism",
      "Hydrothermal metamorphism",
      "Burial metamorphism",
      "Shock metamorphism",
    ],

    factors: [
      "Temperature",
      "Pressure",
      "Differential stress",
      "Fluids",
      "Time",
      "Original rock composition",
    ],

    textures: [
      "Foliation",
      "Lineation",
      "Granoblastic texture",
      "Porphyroblastic texture",
    ],
  },


  // ==========================================================
  // HYDROTHERMAL SYSTEMS
  // ==========================================================

  hydrothermalSystems: {

    definition:
      "Hydrothermal systems involve heated water circulating through rocks and interacting chemically with minerals.",

    environments: [
      "Mid-ocean ridges",
      "Volcanic regions",
      "Geothermal fields",
      "Continental crust",
    ],

    features: [
      "Hot springs",
      "Geysers",
      "Hydrothermal vents",
      "Mineral deposits",
      "Alteration zones",
    ],

    importance: [
      "Geothermal energy",
      "Mineral formation",
      "Chemical cycling",
      "Unique ecosystems",
    ],
  },


  // ==========================================================
  // NATURAL RESOURCES
  // ==========================================================

  naturalResources: {

    mineralResources: [
      "Iron",
      "Copper",
      "Gold",
      "Silver",
      "Aluminum",
      "Zinc",
      "Lead",
      "Nickel",
      "Lithium",
      "Cobalt",
      "Rare earth elements",
    ],

    energyResources: [
      "Coal",
      "Oil",
      "Natural gas",
      "Uranium",
      "Geothermal energy",
      "Hydropower",
    ],

    geologicalMaterials: [
      "Limestone",
      "Sand",
      "Gravel",
      "Clay",
      "Gypsum",
      "Dimension stone",
    ],

    extractionMethods: [
      "Open-pit mining",
      "Underground mining",
      "Quarrying",
      "Drilling",
      "In-situ extraction",
    ],
  },


  // ==========================================================
  // EARTH OBSERVATION
  // ==========================================================

  earthObservation: {

    methods: [
      "Satellite imagery",
      "Radar",
      "LiDAR",
      "Multispectral imaging",
      "Hyperspectral imaging",
      "Thermal imaging",
      "Aerial photography",
      "GPS",
      "Ground surveys",
    ],

    applications: [
      "Land-use mapping",
      "Deforestation monitoring",
      "Glacier monitoring",
      "Flood mapping",
      "Agriculture",
      "Urban growth",
      "Volcano monitoring",
      "Earthquake deformation",
      "Coastal change",
      "Climate studies",
    ],
  },


  // ==========================================================
  // GEOLOGICAL MAPPING
  // ==========================================================

  geologicalMapping: {

    objectives: [
      "Identify rock units",
      "Map faults",
      "Map folds",
      "Identify mineral resources",
      "Understand geological history",
      "Assess natural hazards",
    ],

    tools: [
      "Geological compass",
      "Topographic maps",
      "GPS",
      "Satellite imagery",
      "Geophysical surveys",
      "Rock samples",
      "Drill cores",
    ],
  },


  // ==========================================================
  // EARTH'S HISTORY
  // ==========================================================

  earthHistory: {

    majorStages: [
      "Formation of Earth",
      "Early differentiation",
      "Formation of oceans",
      "Development of early atmosphere",
      "Origin of life",
      "Development of photosynthesis",
      "Rise of atmospheric oxygen",
      "Complex multicellular life",
      "Cambrian diversification",
      "Colonization of land",
      "Age of reptiles",
      "Rise of mammals",
      "Evolution of humans",
    ],

    majorEvents: [
      "Formation of the Moon",
      "Great Oxidation Event",
      "Snowball Earth episodes",
      "Cambrian diversification",
      "End-Permian extinction",
      "Mesozoic breakup of Pangaea",
      "Cretaceous-Paleogene extinction",
      "Quaternary glaciations",
    ],
  },


  // ==========================================================
  // EARTH-MOON SYSTEM
  // ==========================================================

  earthMoonSystem: {

    topics: [
      "Moon formation",
      "Lunar phases",
      "Tides",
      "Earth-Moon gravity",
      "Tidal locking",
      "Lunar geology",
      "Impact craters",
      "Lunar maria",
      "Lunar highlands",
    ],

    lunarGeology: [
      "Basaltic maria",
      "Anorthositic highlands",
      "Impact breccias",
      "Regolith",
      "Impact craters",
    ],
  },


  // ==========================================================
  // IMPACT GEOLOGY
  // ==========================================================

  impactGeology: {

    definition:
      "Impact geology studies the effects of asteroids, comets, and other high-energy impacts on planetary surfaces.",

    features: [
      "Impact craters",
      "Shock metamorphism",
      "Shatter cones",
      "Impact breccias",
      "Melt rocks",
      "Ejecta blankets",
      "Tektites",
    ],

    consequences: [
      "Crater formation",
      "Local destruction",
      "Atmospheric dust",
      "Climate effects",
      "Tsunamis",
      "Wildfires",
      "Ecological disruption",
    ],
  },


  // ==========================================================
  // ENVIRONMENTAL EARTH SCIENCE
  // ==========================================================

  environmentalEarthScience: {

    subjects: [
      "Groundwater contamination",
      "Soil contamination",
      "Air quality",
      "Water resources",
      "Waste disposal",
      "Mining impacts",
      "Coastal change",
      "Climate change",
      "Natural hazards",
    ],

    geologicalHazards: [
      "Earthquakes",
      "Volcanic eruptions",
      "Landslides",
      "Sinkholes",
      "Tsunamis",
      "Ground subsidence",
      "Avalanches",
    ],
  },


  // ==========================================================
  // GEOLOGICAL METHODS
  // ==========================================================

  methods: {

    fieldMethods: [
      "Rock sampling",
      "Outcrop analysis",
      "Structural measurements",
      "Stratigraphic logging",
      "Fossil collection",
      "Soil sampling",
      "Groundwater sampling",
    ],

    laboratoryMethods: [
      "Thin-section microscopy",
      "X-ray diffraction",
      "Mass spectrometry",
      "Electron microscopy",
      "Geochemical analysis",
      "Isotope analysis",
      "Mineral analysis",
    ],

    datingMethods: [
      "Uranium-lead dating",
      "Potassium-argon dating",
      "Argon-argon dating",
      "Rubidium-strontium dating",
      "Carbon-14 dating",
      "Samarium-neodymium dating",
      "Fission-track dating",
      "Luminescence dating",
    ],
  },


  // ==========================================================
  // EARTH SCIENCE TERMS
  // ==========================================================

  glossary: {

    aquifer:
      "A geological formation capable of storing and transmitting groundwater.",

    asthenosphere:
      "A mechanically weak region of the upper mantle beneath the lithosphere.",

    crust:
      "Earth's outer rocky layer.",

    erosion:
      "The removal and transport of weathered material.",

    fault:
      "A fracture along which rocks have moved.",

    fossil:
      "Preserved evidence of ancient life.",

    geosphere:
      "The solid Earth, including its rocks and interior.",

    hydrosphere:
      "All of Earth's water in its various forms.",

    lithosphere:
      "The rigid outer layer consisting of crust and uppermost mantle.",

    magma:
      "Molten or partially molten rock beneath Earth's surface.",

    mineral:
      "A naturally occurring inorganic solid with an ordered structure and characteristic composition.",

    mantle:
      "The thick silicate-rich layer between the crust and core.",

    metamorphism:
      "Solid-state alteration of rocks caused by changing physical and chemical conditions.",

    plate:
      "A relatively rigid piece of lithosphere that moves over Earth's interior.",

    sediment:
      "Loose particles produced by weathering, erosion, biological activity, or chemical precipitation.",

    stratigraphy:
      "The study of rock layers and their relationships through time.",

    tectonics:
      "The study of Earth's crustal deformation and large-scale geological structures.",

    weathering:
      "The breakdown or alteration of rocks at or near Earth's surface.",
  },
};


// ============================================================
// SIMPLE ACCESS HELPERS
// ============================================================

export function getEarthScienceTopic(
  topic
) {

  if (
    !topic ||
    typeof topic !== "string"
  ) {
    return EARTH_SCIENCE_KNOWLEDGE;
  }

  const normalized =
    topic
      .toLowerCase()
      .trim();

  const topicMap = {

    overview:
      EARTH_SCIENCE_KNOWLEDGE.overview,

    earth:
      EARTH_SCIENCE_KNOWLEDGE.overview,

    structure:
      EARTH_SCIENCE_KNOWLEDGE.earthStructure,

    "earth structure":
      EARTH_SCIENCE_KNOWLEDGE.earthStructure,

    geophysics:
      EARTH_SCIENCE_KNOWLEDGE.geophysics,

    tectonics:
      EARTH_SCIENCE_KNOWLEDGE.plateTectonics,

    "plate tectonics":
      EARTH_SCIENCE_KNOWLEDGE.plateTectonics,

    "continental drift":
      EARTH_SCIENCE_KNOWLEDGE.continentalDrift,

    geology:
      EARTH_SCIENCE_KNOWLEDGE,

    "geological time":
      EARTH_SCIENCE_KNOWLEDGE.geologicalTime,

    "geologic time":
      EARTH_SCIENCE_KNOWLEDGE.geologicalTime,

    rocks:
      EARTH_SCIENCE_KNOWLEDGE.rocks,

    rock:
      EARTH_SCIENCE_KNOWLEDGE.rocks,

    minerals:
      EARTH_SCIENCE_KNOWLEDGE.minerals,

    mineral:
      EARTH_SCIENCE_KNOWLEDGE.minerals,

    weathering:
      EARTH_SCIENCE_KNOWLEDGE.weathering,

    erosion:
      EARTH_SCIENCE_KNOWLEDGE.erosion,

    rivers:
      EARTH_SCIENCE_KNOWLEDGE.rivers,

    river:
      EARTH_SCIENCE_KNOWLEDGE.rivers,

    glaciers:
      EARTH_SCIENCE_KNOWLEDGE.glaciers,

    glacier:
      EARTH_SCIENCE_KNOWLEDGE.glaciers,

    deserts:
      EARTH_SCIENCE_KNOWLEDGE.deserts,

    desert:
      EARTH_SCIENCE_KNOWLEDGE.deserts,

    coast:
      EARTH_SCIENCE_KNOWLEDGE.coastalGeology,

    coastal:
      EARTH_SCIENCE_KNOWLEDGE.coastalGeology,

    karst:
      EARTH_SCIENCE_KNOWLEDGE.karst,

    volcano:
      EARTH_SCIENCE_KNOWLEDGE.volcanoes,

    volcanoes:
      EARTH_SCIENCE_KNOWLEDGE.volcanoes,

    volcanism:
      EARTH_SCIENCE_KNOWLEDGE.volcanoes,

    earthquake:
      EARTH_SCIENCE_KNOWLEDGE.earthquakes,

    earthquakes:
      EARTH_SCIENCE_KNOWLEDGE.earthquakes,

    seismic:
      EARTH_SCIENCE_KNOWLEDGE.earthquakes,

    tsunami:
      EARTH_SCIENCE_KNOWLEDGE.tsunamis,

    tsunamis:
      EARTH_SCIENCE_KNOWLEDGE.tsunamis,

    landslide:
      EARTH_SCIENCE_KNOWLEDGE.landslides,

    landslides:
      EARTH_SCIENCE_KNOWLEDGE.landslides,

    soil:
      EARTH_SCIENCE_KNOWLEDGE.soils,

    soils:
      EARTH_SCIENCE_KNOWLEDGE.soils,

    hydrology:
      EARTH_SCIENCE_KNOWLEDGE.hydrology,

    water:
      EARTH_SCIENCE_KNOWLEDGE.waterCycle,

    "water cycle":
      EARTH_SCIENCE_KNOWLEDGE.waterCycle,

    atmosphere:
      EARTH_SCIENCE_KNOWLEDGE.atmosphere,

    climate:
      EARTH_SCIENCE_KNOWLEDGE.climate,

    "carbon cycle":
      EARTH_SCIENCE_KNOWLEDGE.carbonCycle,

    carbon:
      EARTH_SCIENCE_KNOWLEDGE.carbonCycle,

    "nitrogen cycle":
      EARTH_SCIENCE_KNOWLEDGE.nitrogenCycle,

    nitrogen:
      EARTH_SCIENCE_KNOWLEDGE.nitrogenCycle,

    "phosphorus cycle":
      EARTH_SCIENCE_KNOWLEDGE.phosphorusCycle,

    phosphorus:
      EARTH_SCIENCE_KNOWLEDGE.phosphorusCycle,

    magnetism:
      EARTH_SCIENCE_KNOWLEDGE.magneticField,

    "magnetic field":
      EARTH_SCIENCE_KNOWLEDGE.magneticField,

    gravity:
      EARTH_SCIENCE_KNOWLEDGE.gravity,

    isostasy:
      EARTH_SCIENCE_KNOWLEDGE.isostasy,

    fossils:
      EARTH_SCIENCE_KNOWLEDGE.paleontology,

    fossil:
      EARTH_SCIENCE_KNOWLEDGE.paleontology,

    paleontology:
      EARTH_SCIENCE_KNOWLEDGE.paleontology,

    extinction:
      EARTH_SCIENCE_KNOWLEDGE.massExtinctions,

    "mass extinction":
      EARTH_SCIENCE_KNOWLEDGE.massExtinctions,

    paleoclimate:
      EARTH_SCIENCE_KNOWLEDGE.paleoclimate,

    stratigraphy:
      EARTH_SCIENCE_KNOWLEDGE.stratigraphy,

    unconformity:
      EARTH_SCIENCE_KNOWLEDGE.unconformities,

    unconformities:
      EARTH_SCIENCE_KNOWLEDGE.unconformities,

    folds:
      EARTH_SCIENCE_KNOWLEDGE.folding,

    folding:
      EARTH_SCIENCE_KNOWLEDGE.folding,

    faults:
      EARTH_SCIENCE_KNOWLEDGE.faults,

    fault:
      EARTH_SCIENCE_KNOWLEDGE.faults,

    sedimentology:
      EARTH_SCIENCE_KNOWLEDGE.sedimentology,

    sediment:
      EARTH_SCIENCE_KNOWLEDGE.sedimentology,

    magma:
      EARTH_SCIENCE_KNOWLEDGE.igneousProcesses,

    igneous:
      EARTH_SCIENCE_KNOWLEDGE.igneousProcesses,

    metamorphism:
      EARTH_SCIENCE_KNOWLEDGE.metamorphism,

    metamorphic:
      EARTH_SCIENCE_KNOWLEDGE.metamorphism,

    hydrothermal:
      EARTH_SCIENCE_KNOWLEDGE.hydrothermalSystems,

    resources:
      EARTH_SCIENCE_KNOWLEDGE.naturalResources,

    "natural resources":
      EARTH_SCIENCE_KNOWLEDGE.naturalResources,

    "remote sensing":
      EARTH_SCIENCE_KNOWLEDGE.earthObservation,

    "earth observation":
      EARTH_SCIENCE_KNOWLEDGE.earthObservation,

    mapping:
      EARTH_SCIENCE_KNOWLEDGE.geologicalMapping,

    "geological mapping":
      EARTH_SCIENCE_KNOWLEDGE.geologicalMapping,

    history:
      EARTH_SCIENCE_KNOWLEDGE.earthHistory,

    "earth history":
      EARTH_SCIENCE_KNOWLEDGE.earthHistory,

    moon:
      EARTH_SCIENCE_KNOWLEDGE.earthMoonSystem,

    "earth moon":
      EARTH_SCIENCE_KNOWLEDGE.earthMoonSystem,

    impacts:
      EARTH_SCIENCE_KNOWLEDGE.impactGeology,

    "impact geology":
      EARTH_SCIENCE_KNOWLEDGE.impactGeology,

    environment:
      EARTH_SCIENCE_KNOWLEDGE.environmentalEarthScience,

    environmental:
      EARTH_SCIENCE_KNOWLEDGE.environmentalEarthScience,

    methods:
      EARTH_SCIENCE_KNOWLEDGE.methods,

    glossary:
      EARTH_SCIENCE_KNOWLEDGE.glossary,
  };

  return (
    topicMap[
      normalized
    ] || null
  );
}


// ============================================================
// DEFAULT EXPORT
// ============================================================

export default EARTH_SCIENCE_KNOWLEDGE;
