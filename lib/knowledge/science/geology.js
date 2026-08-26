// lib/knowledge/science/geology.js
// ============================================================
// REZE SCIENCE KNOWLEDGE — GEOLOGY
// Comprehensive geology knowledge base
// ============================================================

export const GEOLOGY_KNOWLEDGE = {
  name: "Geology",
  category: "science",
  description:
    "The scientific study of Earth, its materials, structure, history, processes, and the physical and chemical changes that shape the planet.",

  definition: {
    title: "What is Geology?",
    summary:
      "Geology is the Earth science concerned with Earth's solid materials, structure, history, and the processes that have changed the planet over geological time.",
    majorQuestions: [
      "What is Earth made of?",
      "How are rocks and minerals formed?",
      "How does Earth's interior work?",
      "How do mountains and continents form?",
      "Why do earthquakes and volcanoes occur?",
      "How does plate tectonics reshape Earth?",
      "How has Earth changed through geological time?",
      "How are natural resources formed?",
      "How does erosion alter landscapes?",
      "What evidence reveals Earth's ancient history?"
    ]
  },

  // ============================================================
  // MAJOR BRANCHES OF GEOLOGY
  // ============================================================

  branches: {
    physicalGeology: {
      title: "Physical Geology",
      description:
        "Studies Earth's materials and the physical processes that shape the planet.",
      topics: [
        "minerals",
        "rocks",
        "volcanoes",
        "earthquakes",
        "weathering",
        "erosion",
        "plate tectonics",
        "mountain building",
        "sedimentation"
      ]
    },

    historicalGeology: {
      title: "Historical Geology",
      description:
        "Studies Earth's history and the sequence of geological events.",
      topics: [
        "geological time",
        "fossils",
        "stratigraphy",
        "mass extinctions",
        "ancient environments",
        "evolutionary history",
        "past climates"
      ]
    },

    mineralogy: {
      title: "Mineralogy",
      description:
        "Study of minerals, their chemical compositions, crystal structures, properties, and formation."
    },

    petrology: {
      title: "Petrology",
      description:
        "Study of rocks, including their origins, compositions, textures, and transformations."
    },

    structuralGeology: {
      title: "Structural Geology",
      description:
        "Study of deformation and structures within Earth's crust.",
      topics: [
        "faults",
        "folds",
        "joints",
        "foliation",
        "rock deformation",
        "stress",
        "strain"
      ]
    },

    geomorphology: {
      title: "Geomorphology",
      description:
        "Study of landforms and the processes responsible for their development."
    },

    geophysics: {
      title: "Geophysics",
      description:
        "Application of physics to investigate Earth's interior and large-scale physical properties."
    },

    geochemistry: {
      title: "Geochemistry",
      description:
        "Study of the chemical composition of Earth and the chemical processes operating within geological systems."
    },

    sedimentology: {
      title: "Sedimentology",
      description:
        "Study of sediments, sediment transport, deposition, and sedimentary environments."
    },

    stratigraphy: {
      title: "Stratigraphy",
      description:
        "Study of rock layers and their relative ages, relationships, and geological history."
    },

    paleontology: {
      title: "Paleontology",
      description:
        "Study of ancient life through fossils and other geological evidence."
    },

    volcanology: {
      title: "Volcanology",
      description:
        "Study of volcanoes, magma, eruptions, volcanic hazards, and volcanic processes."
    },

    seismology: {
      title: "Seismology",
      description:
        "Study of earthquakes and seismic waves."
    },

    economicGeology: {
      title: "Economic Geology",
      description:
        "Study of geological materials that have economic value, including ores, fossil fuels, and industrial minerals."
    },

    hydrogeology: {
      title: "Hydrogeology",
      description:
        "Study of groundwater, aquifers, groundwater movement, and interactions between water and rocks."
    },

    engineeringGeology: {
      title: "Engineering Geology",
      description:
        "Application of geological knowledge to construction, infrastructure, foundations, slopes, tunnels, and geological hazards."
    },

    planetaryGeology: {
      title: "Planetary Geology",
      description:
        "Study of the geological processes and materials of planets, moons, asteroids, and other solid bodies."
    }
  },

  // ============================================================
  // EARTH'S INTERNAL STRUCTURE
  // ============================================================

  earthStructure: {
    overview:
      "Earth has a layered internal structure produced by differentiation and changes in pressure, temperature, and composition.",

    layers: {
      crust: {
        name: "Crust",
        description:
          "The thin outermost solid layer of Earth.",
        types: {
          continentalCrust: {
            description:
              "Generally thicker, older, and less dense than oceanic crust.",
            typicalThickness:
              "Approximately 30–70 km, with thicker regions beneath major mountain ranges.",
            composition:
              "Rich in relatively silica- and aluminum-rich rocks such as granite and related rocks."
          },
          oceanicCrust: {
            description:
              "The relatively thin and dense crust underlying ocean basins.",
            typicalThickness:
              "Approximately 5–10 km.",
            composition:
              "Dominated by basaltic and gabbroic rocks."
          }
        }
      },

      mantle: {
        name: "Mantle",
        description:
          "A vast silicate-rich layer beneath the crust.",
        thickness:
          "Approximately 2,900 km.",
        composition:
          "Dominated by magnesium- and iron-bearing silicate minerals.",
        regions: [
          "upper mantle",
          "transition zone",
          "lower mantle"
        ]
      },

      core: {
        name: "Core",
        description:
          "Earth's metallic central region, dominated by iron and nickel.",
        regions: {
          outerCore: {
            state: "liquid",
            importance:
              "Convection in the outer core contributes to generation of Earth's magnetic field."
          },
          innerCore: {
            state: "solid",
            reason:
              "Extremely high pressure allows the inner core to remain solid despite its very high temperature."
          }
        }
      }
    },

    boundaries: {
      moho: {
        name: "Mohorovičić Discontinuity",
        description:
          "Boundary between Earth's crust and mantle."
      },
      gutenberg: {
        name: "Gutenberg Discontinuity",
        description:
          "Boundary between the mantle and outer core."
      },
      lehmann: {
        name: "Lehmann Discontinuity",
        description:
          "Boundary associated with the transition between Earth's outer and inner core."
      }
    },

    mechanicalLayers: {
      lithosphere: {
        description:
          "Rigid outer shell consisting of the crust and uppermost mantle.",
        role:
          "Divided into tectonic plates."
      },

      asthenosphere: {
        description:
          "Relatively weak and deformable region of the upper mantle beneath much of the lithosphere.",
        role:
          "Allows tectonic plates to move over geological time."
      },

      mesosphere: {
        description:
          "The stronger lower mantle beneath the asthenosphere."
      }
    }
  },

  // ============================================================
  // PLATE TECTONICS
  // ============================================================

  plateTectonics: {
    definition:
      "Plate tectonics is the theory that Earth's lithosphere is divided into moving plates that interact at their boundaries.",

    drivingProcesses: [
      "mantle convection",
      "slab pull",
      "ridge push",
      "gravitational forces",
      "thermal processes"
    ],

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
      "South American Plate"
    ],

    boundaries: {
      divergent: {
        description:
          "Two tectonic plates move apart.",
        results: [
          "new crust formation",
          "mid-ocean ridges",
          "continental rifting",
          "volcanism",
          "shallow earthquakes"
        ],
        examples: [
          "Mid-Atlantic Ridge",
          "East African Rift"
        ]
      },

      convergent: {
        description:
          "Two plates move toward one another.",
        types: {
          oceanicContinental: {
            process:
              "Dense oceanic lithosphere commonly subducts beneath continental lithosphere.",
            results: [
              "trenches",
              "volcanoes",
              "earthquakes",
              "mountain building"
            ]
          },
          oceanicOceanic: {
            process:
              "One oceanic plate commonly subducts beneath another.",
            results: [
              "deep ocean trenches",
              "volcanic island arcs",
              "earthquakes"
            ]
          },
          continentalContinental: {
            process:
              "Two continental masses collide.",
            results: [
              "large mountain ranges",
              "folding",
              "faulting",
              "crustal thickening"
            ],
            example: "Himalayas"
          }
        }
      },

      transform: {
        description:
          "Two plates slide horizontally past each other.",
        results: [
          "earthquakes",
          "fault zones"
        ],
        example:
          "San Andreas Fault"
      }
    },

    supercontinents: {
      pangaea: {
        description:
          "A supercontinent that assembled during the late Paleozoic and began breaking apart during the Mesozoic."
      },

      gondwana: {
        description:
          "A major southern supercontinental landmass involved in the assembly and breakup of later continental configurations."
      },

      rodinia: {
        description:
          "An ancient supercontinent that existed roughly around a billion years ago, although its exact configuration remains an area of research."
      }
    }
  },

  // ============================================================
  // MINERALS
  // ============================================================

  minerals: {
    definition:
      "A mineral is a naturally occurring inorganic solid with an ordered atomic structure and a characteristic chemical composition or compositional range.",

    essentialProperties: [
      "naturally occurring",
      "inorganic",
      "solid",
      "ordered internal structure",
      "definite or systematically variable chemical composition"
    ],

    identificationProperties: [
      "color",
      "streak",
      "luster",
      "hardness",
      "cleavage",
      "fracture",
      "density",
      "crystal habit",
      "magnetism",
      "reaction with acids"
    ],

    mohsScale: [
      { hardness: 1, mineral: "talc" },
      { hardness: 2, mineral: "gypsum" },
      { hardness: 3, mineral: "calcite" },
      { hardness: 4, mineral: "fluorite" },
      { hardness: 5, mineral: "apatite" },
      { hardness: 6, mineral: "orthoclase feldspar" },
      { hardness: 7, mineral: "quartz" },
      { hardness: 8, mineral: "topaz" },
      { hardness: 9, mineral: "corundum" },
      { hardness: 10, mineral: "diamond" }
    ],

    majorGroups: {
      silicates: {
        description:
          "Minerals built around silicon-oxygen tetrahedra.",
        examples: [
          "feldspar",
          "quartz",
          "mica",
          "pyroxene",
          "amphibole",
          "olivine",
          "clay minerals"
        ]
      },

      carbonates: {
        examples: [
          "calcite",
          "dolomite"
        ]
      },

      oxides: {
        examples: [
          "hematite",
          "magnetite",
          "corundum"
        ]
      },

      sulfides: {
        examples: [
          "pyrite",
          "galena",
          "chalcopyrite"
        ]
      },

      sulfates: {
        examples: [
          "gypsum",
          "barite"
        ]
      },

      halides: {
        examples: [
          "halite",
          "fluorite"
        ]
      },

      nativeElements: {
        examples: [
          "gold",
          "silver",
          "copper",
          "diamond",
          "graphite"
        ]
      },

      phosphates: {
        examples: [
          "apatite"
        ]
      }
    },

    importantMinerals: {
      quartz: {
        formula: "SiO₂",
        hardness: 7,
        uses: [
          "glass production",
          "electronics",
          "construction materials",
          "ornamental materials"
        ]
      },

      feldspar: {
        description:
          "The most abundant mineral group in Earth's crust.",
        importance:
          "Major component of many igneous, metamorphic, and sedimentary rocks."
      },

      mica: {
        properties: [
          "sheet-like cleavage",
          "elastic sheets",
          "good electrical insulation"
        ]
      },

      calcite: {
        formula: "CaCO₃",
        importance:
          "Major component of limestone and marble."
      },

      hematite: {
        formula: "Fe₂O₃",
        importance:
          "Important iron ore."
      },

      magnetite: {
        formula: "Fe₃O₄",
        importance:
          "Important iron ore and strongly magnetic mineral."
      },

      pyrite: {
        formula: "FeS₂",
        nickname:
          "Fool's gold"
      },

      diamond: {
        composition: "carbon",
        hardness: 10,
        description:
          "A carbon mineral with a three-dimensional crystal structure and exceptional hardness."
      },

      graphite: {
        composition: "carbon",
        description:
          "A carbon mineral with layered structure and good electrical conductivity."
      }
    }
  },

  // ============================================================
  // ROCKS
  // ============================================================

  rocks: {
    definition:
      "A rock is a naturally occurring solid aggregate of one or more minerals or mineraloids.",

    rockCycle: {
      description:
        "The rock cycle describes how rocks can be transformed between igneous, sedimentary, and metamorphic forms.",
      processes: [
        "melting",
        "cooling",
        "crystallization",
        "weathering",
        "erosion",
        "deposition",
        "compaction",
        "cementation",
        "burial",
        "metamorphism",
        "uplift"
      ]
    },

    igneous: {
      definition:
        "Rocks formed from the cooling and solidification of molten rock.",
      categories: {
        intrusive: {
          description:
            "Form underground from slowly cooling magma.",
          texture:
            "Usually coarse-grained.",
          examples: [
            "granite",
            "gabbro",
            "diorite"
          ]
        },

        extrusive: {
          description:
            "Form at or near Earth's surface from rapidly cooling lava or volcanic material.",
          texture:
            "Often fine-grained or glassy.",
          examples: [
            "basalt",
            "rhyolite",
            "andesite",
            "obsidian",
            "pumice"
          ]
        }
      },

      textures: [
        "phaneritic",
        "aphanitic",
        "porphyritic",
        "glassy",
        "vesicular",
        "pyroclastic"
      ]
    },

    sedimentary: {
      definition:
        "Rocks formed from accumulated sediments or from chemical or biological precipitation.",
      categories: {
        clastic: {
          description:
            "Made primarily from fragments of pre-existing rocks.",
          examples: [
            "conglomerate",
            "breccia",
            "sandstone",
            "siltstone",
            "shale"
          ]
        },

        chemical: {
          description:
            "Form from precipitation of dissolved minerals.",
          examples: [
            "rock salt",
            "gypsum",
            "some limestones"
          ]
        },

        biochemical: {
          description:
            "Form partly or largely from biological materials or activity.",
          examples: [
            "coal",
            "fossil-rich limestone",
            "chalk"
          ]
        }
      },

      processes: [
        "weathering",
        "erosion",
        "transport",
        "deposition",
        "compaction",
        "cementation",
        "lithification"
      ]
    },

    metamorphic: {
      definition:
        "Rocks formed when existing rocks are altered by heat, pressure, chemically active fluids, or deformation without completely melting.",

      types: {
        contact: {
          description:
            "Metamorphism caused mainly by heat from a nearby igneous intrusion."
        },

        regional: {
          description:
            "Large-scale metamorphism associated with mountain building and tectonic compression."
        },

        dynamic: {
          description:
            "Metamorphism strongly associated with deformation and fault zones."
        },

        hydrothermal: {
          description:
            "Alteration caused by hot chemically active fluids."
        }
      },

      examples: [
        "slate",
        "phyllite",
        "schist",
        "gneiss",
        "marble",
        "quartzite"
      ]
    }
  },

  // ============================================================
  // VOLCANOES
  // ============================================================

  volcanoes: {
    definition:
      "A volcano is a geological feature through which magma, gases, ash, and other volcanic materials reach Earth's surface.",

    magma: {
      definition:
        "Molten or partially molten rock beneath Earth's surface.",
      components: [
        "silicate melt",
        "crystals",
        "dissolved gases"
      ]
    },

    lava: {
      definition:
        "Magma that erupts onto Earth's surface."
    },

    volcanoTypes: {
      shield: {
        description:
          "Broad volcanoes built mainly by relatively fluid lava flows.",
        example:
          "Mauna Loa"
      },

      stratovolcano: {
        description:
          "Steep composite volcanoes built from alternating lava, ash, and other volcanic deposits.",
        example:
          "Mount Fuji"
      },

      cinderCone: {
        description:
          "Small steep-sided volcanic cones composed mainly of pyroclastic fragments."
      },

      lavaDome: {
        description:
          "Rounded volcanic structures formed by accumulation of viscous lava near a vent."
      },

      caldera: {
        description:
          "Large volcanic depression formed when a volcanic system collapses following major magma withdrawal or eruption."
      }
    },

    eruptionTypes: [
      "Hawaiian",
      "Strombolian",
      "Vulcanian",
      "Plinian",
      "Surtseyan"
    ],

    volcanicMaterials: [
      "lava",
      "ash",
      "lapilli",
      "volcanic bombs",
      "volcanic blocks",
      "pumice",
      "scoria",
      "pyroclastic flows",
      "volcanic gases"
    ],

    hazards: [
      "lava flows",
      "ashfall",
      "pyroclastic flows",
      "lahars",
      "volcanic gases",
      "debris avalanches",
      "volcanic landslides",
      "tsunamis",
      "climate effects from major eruptions"
    ]
  },

  // ============================================================
  // EARTHQUAKES
  // ============================================================

  earthquakes: {
    definition:
      "An earthquake is the sudden release of stored elastic energy in Earth's crust or lithosphere, producing seismic waves.",

    causes: [
      "fault rupture",
      "tectonic plate movement",
      "volcanic activity",
      "landslides",
      "human activities such as reservoir-induced seismicity or fluid injection"
    ],

    terms: {
      focus: {
        description:
          "The point within Earth where rupture begins."
      },

      epicenter: {
        description:
          "The point on Earth's surface directly above the focus."
      },

      fault: {
        description:
          "A fracture or zone of fractures along which rocks have moved."
      }
    },

    seismicWaves: {
      p: {
        name: "Primary waves",
        type: "compressional",
        speed:
          "Fastest major seismic body waves.",
        travelThrough:
          "solids, liquids, and gases"
      },

      s: {
        name: "Secondary waves",
        type: "shear",
        travelThrough:
          "solids but not liquids"
      },

      surfaceWaves: {
        description:
          "Seismic waves that travel along or near Earth's surface.",
        types: [
          "Love waves",
          "Rayleigh waves"
        ]
      }
    },

    measurement: {
      magnitude:
        "Quantifies earthquake size based on characteristics of the seismic source.",
      intensity:
        "Describes observed effects and shaking at a particular location.",
      momentMagnitude:
        "The modern standard magnitude scale widely used for large earthquakes."
    },

    hazards: [
      "ground shaking",
      "surface rupture",
      "liquefaction",
      "landslides",
      "tsunamis",
      "fires",
      "building collapse"
    ]
  },

  // ============================================================
  // FAULTS
  // ============================================================

  faults: {
    definition:
      "A fault is a fracture or zone of fractures in Earth's crust along which displacement has occurred.",

    types: {
      normal: {
        stress:
          "tensional",
        typicalMotion:
          "Hanging wall moves downward relative to footwall."
      },

      reverse: {
        stress:
          "compressional",
        typicalMotion:
          "Hanging wall moves upward relative to footwall."
      },

      thrust: {
        type:
          "low-angle reverse fault",
        importance:
          "Common in mountain-building regions."
      },

      strikeSlip: {
        stress:
          "shear",
        typicalMotion:
          "Blocks move mainly horizontally past one another."
      }
    }
  },

  // ============================================================
  // FOLDS
  // ============================================================

  folds: {
    definition:
      "Folds are bends or curves in originally planar rock layers caused mainly by deformation.",

    types: [
      "anticline",
      "syncline",
      "monocline",
      "recumbent fold",
      "overturned fold",
      "dome",
      "basin"
    ],

    anticline:
      "Generally arch-shaped fold with older rocks commonly exposed near the center.",
    syncline:
      "Generally trough-shaped fold with younger rocks commonly exposed near the center."
  },

  // ============================================================
  // WEATHERING
  // ============================================================

  weathering: {
    definition:
      "Weathering is the breakdown or alteration of rocks and minerals at or near Earth's surface.",

    physical: {
      description:
        "Mechanical breakdown without major chemical alteration.",
      processes: [
        "frost wedging",
        "thermal expansion",
        "pressure release",
        "abrasion",
        "salt crystal growth",
        "root wedging"
      ]
    },

    chemical: {
      description:
        "Chemical alteration or dissolution of minerals.",
      processes: [
        "oxidation",
        "hydrolysis",
        "dissolution",
        "carbonation",
        "hydration"
      ]
    },

    biological: {
      processes: [
        "root growth",
        "burrowing",
        "microbial activity",
        "organic acid production"
      ]
    }
  },

  // ============================================================
  // EROSION AND DEPOSITION
  // ============================================================

  erosion: {
    definition:
      "Erosion is the removal and transport of weathered rock and sediment.",

    agents: [
      "running water",
      "groundwater",
      "waves",
      "wind",
      "glaciers",
      "gravity"
    ],

    waterErosion: {
      landforms: [
        "canyons",
        "valleys",
        "gullies",
        "river terraces",
        "alluvial fans",
        "deltas"
      ]
    },

    windErosion: {
      processes: [
        "deflation",
        "abrasion"
      ],
      landforms: [
        "dunes",
        "yardangs",
        "desert pavements"
      ]
    },

    glacialErosion: {
      processes: [
        "plucking",
        "abrasion"
      ],
      landforms: [
        "U-shaped valleys",
        "cirques",
        "arêtes",
        "horns",
        "fjords",
        "moraines"
      ]
    }
  },

  // ============================================================
  // SEDIMENTS
  // ============================================================

  sediments: {
    definition:
      "Sediments are loose particles or precipitated materials that can accumulate and eventually become sedimentary rock.",

    grainSizes: [
      "clay",
      "silt",
      "sand",
      "gravel",
      "cobbles",
      "boulders"
    ],

    transport: [
      "traction",
      "saltation",
      "suspension",
      "dissolution"
    ],

    sedimentaryStructures: [
      "bedding",
      "cross-bedding",
      "graded bedding",
      "ripple marks",
      "mud cracks",
      "imbrication",
      "bioturbation"
    ]
  },

  // ============================================================
  // STRATIGRAPHY
  // ============================================================

  stratigraphy: {
    definition:
      "Stratigraphy is the study of rock layers and their relationships through space and geological time.",

    principles: {
      superposition:
        "In an undisturbed sequence of sedimentary layers, older layers are generally beneath younger layers.",

      originalHorizontality:
        "Sedimentary layers are generally deposited approximately horizontally.",

      lateralContinuity:
        "Layers tend to extend laterally until they thin out or encounter a barrier.",

      crossCutting:
        "A geological feature that cuts another feature is generally younger than what it cuts.",

      inclusions:
        "Fragments enclosed within a rock are generally older than the rock containing them.",

      faunalSuccession:
        "Fossil assemblages occur in recognizable chronological sequences."
    },

    methods: [
      "relative dating",
      "radiometric dating",
      "biostratigraphy",
      "magnetostratigraphy",
      "chemostratigraphy",
      "sequence stratigraphy"
    ]
  },

  // ============================================================
  // GEOLOGICAL TIME
  // ============================================================

  geologicalTime: {
    ageOfEarth:
      "Approximately 4.54 billion years.",

    eons: [
      {
        name: "Hadean",
        description:
          "Earliest interval of Earth's history."
      },
      {
        name: "Archean",
        description:
          "Ancient eon characterized by early crust, oceans, and ancient life."
      },
      {
        name: "Proterozoic",
        description:
          "Long interval including major atmospheric and biological changes before the Phanerozoic."
      },
      {
        name: "Phanerozoic",
        description:
          "Eon characterized by abundant visible fossil life."
      }
    ],

    eras: {
      paleozoic: [
        "Cambrian",
        "Ordovician",
        "Silurian",
        "Devonian",
        "Carboniferous",
        "Permian"
      ],

      mesozoic: [
        "Triassic",
        "Jurassic",
        "Cretaceous"
      ],

      cenozoic: [
        "Paleogene",
        "Neogene",
        "Quaternary"
      ]
    },

    majorEvents: [
      "formation of Earth",
      "formation of early oceans",
      "origin of early life",
      "Great Oxidation Event",
      "Cambrian diversification",
      "colonization of land",
      "formation and breakup of supercontinents",
      "Permian-Triassic mass extinction",
      "Mesozoic diversification",
      "Cretaceous-Paleogene extinction",
      "Cenozoic diversification of mammals and birds",
      "Quaternary glaciations"
    ]
  },

  // ============================================================
  // RADIOACTIVE DATING
  // ============================================================

 radiometricDating: {
    definition:
      "Radiometric dating determines numerical ages using predictable radioactive decay.",

    principle:
      "Radioactive parent isotopes decay into daughter products at characteristic rates.",

    importantSystems: {
      uraniumLead:
        "Widely used for dating ancient rocks and zircon crystals.",

      potassiumArgon:
        "Useful for dating volcanic rocks and minerals.",

      rubidiumStrontium:
        "Useful for dating older geological materials.",

      carbon14:
        "Useful for dating relatively recent organic material, generally up to tens of thousands of years under suitable conditions."
    },

    halfLife:
      "The time required for half of a radioactive parent isotope in a sample to decay."
  },

  // ============================================================
  // FOSSILS
  // ============================================================

  fossils: {
    definition:
      "Fossils are preserved remains, impressions, traces, or evidence of ancient organisms.",

    types: [
      "body fossils",
      "trace fossils",
      "molds",
      "casts",
      "permineralization",
      "carbon films",
      "amber preservation",
      "microfossils"
    ],

    importance: [
      "reconstructing ancient ecosystems",
      "studying evolution",
      "dating rock layers",
      "reconstructing ancient climates",
      "understanding extinction events",
      "correlating geological formations"
    ],

    indexFossil:
      "A fossil useful for correlating rocks because the organism had a relatively short geological range and broad distribution."
  },

  // ============================================================
  // PALEOCLIMATE
  // ============================================================

  paleoclimate: {
    definition:
      "Paleoclimatology studies Earth's climate in the geological past.",

    evidence: [
      "ice cores",
      "tree rings",
      "fossil pollen",
      "corals",
      "ocean sediments",
      "lake sediments",
      "stable isotopes",
      "fossil assemblages",
      "glacial deposits",
      "ancient soils"
    ],

    ancientClimateIndicators: [
      "coal deposits",
      "evaporites",
      "glacial deposits",
      "reef limestones",
      "red beds",
      "fossilized soils"
    ]
  },

  // ============================================================
  // GLACIERS
  // ============================================================

  glaciers: {
    definition:
      "A glacier is a persistent mass of flowing ice formed from accumulated and compacted snow.",

    types: [
      "valley glaciers",
      "ice caps",
      "ice sheets",
      "cirque glaciers",
      "piedmont glaciers"
    ],

    processes: [
      "accumulation",
      "compaction",
      "flow",
      "ablation",
      "plucking",
      "abrasion"
    ],

    landforms: {
      erosional: [
        "cirques",
        "arêtes",
        "horns",
        "U-shaped valleys",
        "hanging valleys",
        "fjords"
      ],

      depositional: [
        "moraines",
        "drumlins",
        "eskers",
        "kames",
        "outwash plains"
      ]
    }
  },

  // ============================================================
  // GROUNDWATER
  // ============================================================

  groundwater: {
    definition:
      "Groundwater is water stored and moving beneath Earth's surface within pore spaces and fractures.",

    terms: {
      aquifer:
        "A geological formation capable of storing and transmitting significant groundwater.",

      aquitard:
        "A relatively low-permeability layer that restricts groundwater movement.",

      waterTable:
        "The upper surface of the saturated groundwater zone in an unconfined aquifer.",

      recharge:
        "Addition of water to groundwater systems.",

      discharge:
        "Release of groundwater to springs, rivers, wetlands, oceans, or other systems."
    },

    properties: {
      porosity:
        "The proportion of a material's volume consisting of pore space.",

      permeability:
        "The ability of a material to transmit fluids through connected pore spaces or fractures."
    },

    karst: {
      definition:
        "Landscape produced mainly by dissolution of soluble rocks such as limestone.",
      features: [
        "caves",
        "sinkholes",
        "disappearing streams",
        "karst springs",
        "underground drainage"
      ]
    }
  },

  // ============================================================
  // MOUNTAIN BUILDING
  // ============================================================

  mountainBuilding: {
    definition:
      "Mountain building, or orogeny, refers to geological processes that produce major topographic and structural relief.",

    mechanisms: [
      "continental collision",
      "subduction",
      "volcanism",
      "faulting",
      "folding",
      "crustal thickening",
      "uplift"
    ],

    examples: [
      "Himalayas",
      "Alps",
      "Andes",
      "Rocky Mountains",
      "Appalachian Mountains"
    ]
  },

  // ============================================================
  // ISOSTASY
  // ============================================================

  isostasy: {
    definition:
      "Isostasy describes the gravitational balance between Earth's lithosphere and the underlying mantle.",

    concept:
      "Changes in crustal thickness, density, loading, or unloading can cause vertical adjustment of the lithosphere.",

    examples: [
      "post-glacial rebound",
      "mountain roots",
      "subsidence beneath sedimentary basins"
    ]
  },

  // ============================================================
  // LANDFORMS
  // ============================================================

  landforms: {
    tectonic: [
      "mountains",
      "rift valleys",
      "fault scarps",
      "uplands",
      "plateaus"
    ],

    fluvial: [
      "meanders",
      "oxbow lakes",
      "floodplains",
      "deltas",
      "alluvial fans",
      "canyons",
      "river terraces"
    ],

    coastal: [
      "sea cliffs",
      "beaches",
      "spits",
      "barrier islands",
      "tombolos",
      "wave-cut platforms",
      "estuaries"
    ],

    aeolian: [
      "sand dunes",
      "yardangs",
      "desert pavements"
    ],

    glacial: [
      "cirques",
      "arêtes",
      "horns",
      "moraines",
      "drumlins",
      "eskers",
      "fjords"
    ],

    volcanic: [
      "volcanic cones",
      "calderas",
      "lava plateaus",
      "lava domes",
      "volcanic craters"
    ],

    karst: [
      "sinkholes",
      "caves",
      "tower karst",
      "karst valleys",
      "springs"
    ]
  },

  // ============================================================
  // DESERT GEOLOGY
  // ============================================================

  desertGeology: {
    processes: [
      "wind erosion",
      "flash flooding",
      "weathering",
      "salt weathering",
      "sediment transport"
    ],

    features: [
      "sand dunes",
      "alluvial fans",
      "playas",
      "wadi systems",
      "inselbergs",
      "yardangs",
      "desert pavement"
    ]
  },

  // ============================================================
  // COASTAL GEOLOGY
  // ============================================================

  coastalGeology: {
    processes: [
      "wave erosion",
      "longshore transport",
      "sediment deposition",
      "sea-level change",
      "storm activity",
      "tectonic uplift",
      "subsidence"
    ],

    features: [
      "cliffs",
      "beaches",
      "barrier islands",
      "spits",
      "bars",
      "estuaries",
      "deltas",
      "wave-cut platforms",
      "sea caves",
      "arches",
      "stacks"
    ]
  },

  // ============================================================
  // MASS WASTING
  // ============================================================

  massWasting: {
    definition:
      "Mass wasting is the downslope movement of soil, rock, or debris under gravity.",

    types: [
      "rockfall",
      "rockslide",
      "debris flow",
      "mudflow",
      "earthflow",
      "landslide",
      "creep",
      "slump",
      "debris avalanche"
    ],

    triggers: [
      "heavy rainfall",
      "earthquakes",
      "volcanic activity",
      "undercutting",
      "weathering",
      "loss of vegetation",
      "human excavation",
      "freeze-thaw processes"
    ]
  },

  // ============================================================
  // NATURAL RESOURCES
  // ============================================================

  naturalResources: {
    metallic: [
      "iron",
      "copper",
      "gold",
      "silver",
      "aluminum",
      "lead",
      "zinc",
      "nickel",
      "chromium",
      "manganese",
      "uranium",
      "lithium"
    ],

    industrialMinerals: [
      "limestone",
      "gypsum",
      "salt",
      "clay",
      "sand",
      "gravel",
      "phosphate",
      "feldspar",
      "silica"
    ],

    fossilFuels: [
      "coal",
      "petroleum",
      "natural gas",
      "oil shale"
    ],

    groundwater:
      "A major geological resource stored in aquifers and fractured rocks."
  },

  // ============================================================
  // ORE DEPOSITS
  // ============================================================

  oreDeposits: {
    definition:
      "An ore deposit is a concentration of valuable minerals that can potentially be extracted economically.",

    formationProcesses: [
      "magmatic segregation",
      "hydrothermal activity",
      "weathering",
      "sedimentary concentration",
      "evaporation",
      "metamorphic processes",
      "placer concentration"
    ],

    examples: [
      "porphyry copper deposits",
      "volcanogenic massive sulfide deposits",
      "sedimentary iron formations",
      "placer gold deposits",
      "epithermal gold deposits"
    ]
  },

  // ============================================================
  // PETROLEUM GEOLOGY
  // ============================================================

  petroleumGeology: {
    petroleum:
      "Hydrocarbon fluids generated from organic-rich source rocks and accumulated in suitable geological traps.",

    petroleumSystem: [
      "source rock",
      "maturation",
      "migration",
      "reservoir rock",
      "seal rock",
      "trap"
    ],

    reservoirRocks: [
      "sandstone",
      "limestone",
      "dolostone"
    ],

    trapTypes: [
      "anticline traps",
      "fault traps",
      "stratigraphic traps",
      "salt-related traps"
    ]
  },

  // ============================================================
  // COAL GEOLOGY
  // ============================================================

  coal: {
    definition:
      "Coal is a combustible sedimentary rock formed mainly from accumulated plant material altered by burial, pressure, and heat.",

    ranks: [
      "peat",
      "lignite",
      "sub-bituminous coal",
      "bituminous coal",
      "anthracite"
    ],

    formation:
      "Coal commonly develops in swampy environments where plant material accumulates faster than it decomposes and is later buried and altered."
  },

  // ============================================================
  // ENGINEERING GEOLOGY
  // ============================================================

  engineeringGeology: {
    applications: [
      "building foundations",
      "dams",
      "roads",
      "bridges",
      "tunnels",
      "mines",
      "dams",
      "railways",
      "slope stability",
      "coastal infrastructure"
    ],

    concerns: [
      "faults",
      "landslides",
      "subsidence",
      "expansive soils",
      "karst cavities",
      "earthquake hazards",
      "groundwater",
      "weak rock",
      "permafrost"
    ]
  },

  // ============================================================
  // GEOLOGICAL HAZARDS
  // ============================================================

  hazards: {
    earthquakes: {
      description:
        "Sudden seismic events caused primarily by movement along faults."
    },

    volcanoes: {
      description:
        "Hazards associated with magma, lava, ash, gases, and volcanic debris."
    },

    landslides: {
      description:
        "Rapid or slow downslope movement of earth materials."
    },

    sinkholes: {
      description:
        "Ground depressions formed where soluble rocks dissolve or underground cavities collapse."
    },

    tsunamis: {
      description:
        "Long-wavelength ocean waves commonly generated by submarine earthquakes, landslides, or volcanic processes."
    },

    subsidence: {
      description:
        "Downward movement of Earth's surface caused by natural or human-related processes."
    }
  },

  // ============================================================
  // GEOLOGICAL PROCESSES
  // ============================================================

  processes: {
    internal: [
      "plate tectonics",
      "mantle convection",
      "magmatism",
      "volcanism",
      "metamorphism",
      "earthquakes",
      "mountain building",
      "crustal deformation"
    ],

    external: [
      "weathering",
      "erosion",
      "transport",
      "deposition",
      "soil formation",
      "mass wasting",
      "glacial activity",
      "coastal processes"
    ]
  },

  // ============================================================
  // GEOLOGICAL CYCLES
  // ============================================================

  cycles: {
    rockCycle:
      "Continuous transformation among igneous, sedimentary, and metamorphic rocks.",

    tectonicCycle:
      "Long-term creation, movement, modification, and recycling of lithosphere.",

    waterRockCycle:
      "Interaction between water and minerals through weathering, dissolution, precipitation, and alteration.",

    carbonGeologicalCycle:
      "Long-term movement of carbon among rocks, sediments, oceans, atmosphere, mantle, and living systems."
  },

  // ============================================================
  // GEOCHRONOLOGY
  // ============================================================

  geochronology: {
    relativeDating: [
      "superposition",
      "cross-cutting relationships",
      "inclusions",
      "faunal succession",
      "stratigraphic correlation"
    ],

    absoluteDating: [
      "radiometric dating",
      "magnetostratigraphy",
      "astrochronology",
      "luminescence dating",
      "cosmogenic nuclide dating"
    ]
  },

  // ============================================================
  // GEOCHEMISTRY
  // ============================================================

  geochemistry: {
    majorElements: [
      "oxygen",
      "silicon",
      "aluminum",
      "iron",
      "calcium",
      "sodium",
      "potassium",
      "magnesium"
    ],

    importantProcesses: [
      "weathering",
      "mineral precipitation",
      "melting",
      "crystallization",
      "metamorphic reactions",
      "element cycling",
      "isotope fractionation"
    ],

    isotopeGeochemistry:
      "Uses variations in isotopic composition to investigate geological processes, ages, sources, temperatures, and environmental conditions."
  },

  // ============================================================
  // IGNEOUS PROCESSES
  // ============================================================

  igneousProcesses: {
    magmaFormation: [
      "decompression melting",
      "flux melting",
      "heat-induced melting"
    ],

    crystallization:
      "As magma cools, minerals crystallize according to temperature, composition, pressure, and other conditions.",

    fractionalCrystallization:
      "Removal of early-forming crystals can change the composition of the remaining magma.",

    partialMelting:
      "Only part of a rock melts, producing magma with a composition different from the original source rock."
  },

  // ============================================================
  // BOWEN'S REACTION SERIES
  // ============================================================

  bowensReactionSeries: {
    definition:
      "A conceptual model describing the sequence in which common silicate minerals crystallize from cooling magma.",

    discontinuousSeries: [
      "olivine",
      "pyroxene",
      "amphibole",
      "biotite"
    ],

    continuousSeries:
      "Plagioclase feldspar progressively changes from calcium-rich to sodium-rich compositions as magma cools.",

    lateStageMinerals: [
      "potassium feldspar",
      "muscovite",
      "quartz"
    ]
  },

  // ============================================================
  // METAMORPHIC GRADE
  // ============================================================

  metamorphicGrade: {
    lowGrade: [
      "chlorite",
      "slate",
      "phyllite"
    ],

    mediumGrade: [
      "biotite",
      "garnet",
      "schist"
    ],

    highGrade: [
      "sillimanite",
      "gneiss",
      "migmatite"
    ],

    concept:
      "Metamorphic grade reflects the intensity of temperature, pressure, and deformation experienced by a rock."
  },

  // ============================================================
  // SOIL GEOLOGY
  // ============================================================

  soil: {
    definition:
      "Soil is a dynamic surface material composed of mineral particles, organic matter, water, gases, and living organisms.",

    formationFactors: [
      "parent material",
      "climate",
      "organisms",
      "topography",
      "time"
    ],

    horizons: [
      "O horizon",
      "A horizon",
      "E horizon",
      "B horizon",
      "C horizon",
      "R horizon"
    ],

    processes: [
      "addition",
      "loss",
      "translocation",
      "transformation"
    ]
  },

  // ============================================================
  // PERMAFROST
  // ============================================================

  permafrost: {
    definition:
      "Ground that remains at or below 0°C for at least two consecutive years.",

    components: [
      "frozen soil",
      "sediment",
      "rock",
      "ground ice"
    ],

    geologicalImportance: [
      "landscape stability",
      "carbon storage",
      "groundwater behavior",
      "thermokarst development"
    ]
  },

  // ============================================================
  // SEA-LEVEL CHANGE
  // ============================================================

  seaLevelChange: {
    causes: {
      eustatic: [
        "changes in global ice volume",
        "changes in ocean water volume",
        "ocean temperature"
      ],

      relative: [
        "tectonic uplift",
        "tectonic subsidence",
        "sediment compaction",
        "glacial isostatic adjustment"
      ]
    },

    geologicalEvidence: [
      "marine terraces",
      "fossil shorelines",
      "raised beaches",
      "submerged landscapes",
      "sedimentary sequences"
    ]
  },

  // ============================================================
  // CONTINENTAL DRIFT
  // ============================================================

  continentalDrift: {
    definition:
      "The historical hypothesis that continents move across Earth's surface.",

    evidence: [
      "matching continental coastlines",
      "matching fossils on separated continents",
      "continuity of rock formations",
      "paleoclimatic evidence",
      "paleomagnetic evidence"
    ],

    relationshipToPlateTectonics:
      "Continental drift was an important precursor to the modern theory of plate tectonics."
  },

  // ============================================================
  // PALEOMAGNETISM
  // ============================================================

  paleomagnetism: {
    definition:
      "The study of Earth's ancient magnetic field recorded in rocks.",

    applications: [
      "continental drift",
      "plate reconstruction",
      "seafloor spreading",
      "magnetic polarity history"
    ],

    magneticReversals:
      "Earth's magnetic field has reversed polarity many times through geological history."
  },

  // ============================================================
  // SEAFLOOR SPREADING
  // ============================================================

  seafloorSpreading: {
    definition:
      "Formation of new oceanic crust at mid-ocean ridges as plates move apart.",

    evidence: [
      "symmetrical magnetic striping",
      "youngest crust near ridges",
      "high heat flow",
      "ridge volcanism",
      "ocean-floor age patterns"
    ]
  },

  // ============================================================
  // OCEANIC CRUST
  // ============================================================

  oceanicCrust: {
    typicalSequence: [
      "sediments",
      "basaltic pillow lavas",
      "sheeted dikes",
      "gabbro",
      "ultramafic mantle rocks beneath"
    ],

    evolution:
      "Oceanic crust is generally created at spreading centers and eventually recycled into the mantle at subduction zones."
  },

  // ============================================================
  // CONTINENTAL CRUST
  // ============================================================

  continentalCrust: {
    characteristics: [
      "generally thicker than oceanic crust",
      "generally less dense",
      "contains rocks of many ages",
      "can preserve very ancient geological records"
    ],

    growthProcesses: [
      "magmatic addition",
      "arc accretion",
      "sedimentary accumulation",
      "metamorphism",
      "continental collision"
    ]
  },

  // ============================================================
  // GEOLOGICAL FIELD METHODS
  // ============================================================

  fieldMethods: {
    mapping: {
      description:
        "Recording geological units, structures, faults, folds, and contacts on maps."
    },

    outcropStudy:
      "Direct examination of exposed rock."
    ,

    strikeAndDip: {
      strike:
        "Compass direction of a horizontal line on a planar geological surface.",
      dip:
        "Angle and direction at which the surface slopes downward."
    },

    sampling: [
      "rock samples",
      "mineral samples",
      "soil samples",
      "sediment samples",
      "fossil samples"
    ],

    remoteSensing: [
      "satellite imagery",
      "aerial photography",
      "LiDAR",
      "radar",
      "hyperspectral imaging"
    ]
  },

  // ============================================================
  // GEOLOGICAL MAPS
  // ============================================================

  geologicalMaps: {
    definition:
      "Maps showing the distribution, age, type, and structural relationships of geological materials at Earth's surface.",

    commonFeatures: [
      "rock units",
      "faults",
      "folds",
      "contacts",
      "strike and dip symbols",
      "geological ages",
      "cross sections"
    ]
  },

  // ============================================================
  // GEOPHYSICAL METHODS
  // ============================================================

  geophysicalMethods: {
    seismic:
      "Uses seismic waves to investigate subsurface structure.",

    gravity:
      "Measures variations in Earth's gravitational field caused by differences in density.",

    magnetic:
      "Measures variations in Earth's magnetic field related to magnetic minerals and geological structures.",

    electrical:
      "Measures electrical properties of subsurface materials.",

    electromagnetic:
      "Uses electromagnetic responses to investigate subsurface conductivity.",

    geothermal:
      "Studies heat flow and temperature distribution within Earth."
  },

  // ============================================================
  // PLANETARY GEOLOGY
  // ============================================================

  planetaryGeology: {
    definition:
      "Study of the geology of planets, moons, asteroids, comets, and other solid bodies.",

    processes: [
      "impact cratering",
      "volcanism",
      "tectonics",
      "erosion",
      "sedimentation",
      "ice processes",
      "weathering"
    ],

    importantBodies: [
      "Moon",
      "Mars",
      "Mercury",
      "Venus",
      "Io",
      "Europa",
      "Titan",
      "asteroids"
    ],

    mars: {
      geologicalFeatures: [
        "Olympus Mons",
        "Valles Marineris",
        "impact craters",
        "ancient river channels",
        "polar ice deposits",
        "volcanic provinces"
      ]
    },

    moon: {
      features: [
        "impact craters",
        "maria",
        "highlands",
        "rilles",
        "regolith"
      ]
    }
  },

  // ============================================================
  // GEOLOGICAL PRINCIPLES
  // ============================================================

  principles: [
    {
      name: "Uniformitarianism",
      explanation:
        "The principle that geological processes observable today help explain geological features and events of the past."
    },

    {
      name: "Deep Time",
      explanation:
        "Earth's history spans immense intervals far longer than recorded human history."
    },

    {
      name: "Superposition",
      explanation:
        "In an undisturbed sedimentary sequence, lower layers are generally older than layers above them."
    },

    {
      name: "Cross-Cutting Relationships",
      explanation:
        "A geological feature that cuts another feature is generally younger than the feature it cuts."
    },

    {
      name: "Faunal Succession",
      explanation:
        "Fossil organisms occur in recognizable chronological sequences."
    }
  ],

  // ============================================================
  // IMPORTANT GEOLOGICAL TERMS
  // ============================================================

  glossary: {
    accretion:
      "Growth of a continent or tectonic plate through addition of material.",

    batholith:
      "A very large intrusive igneous body exposed over a large area.",

    breccia:
      "Clastic sedimentary rock composed mainly of angular fragments.",

    cleavage:
      "Preferred planes along which a mineral breaks.",

    conglomerate:
      "Clastic sedimentary rock containing rounded gravel-sized fragments.",

    craton:
      "Stable ancient interior portion of a continent.",

    diapir:
      "A body of relatively buoyant material that rises through surrounding rocks.",

    dike:
      "A tabular igneous intrusion that cuts across existing rock layers.",

    dyke:
      "Alternative spelling of dike.",

    erosion:
      "Removal and transport of weathered material.",

    escarpment:
      "A long steep slope or cliff separating areas of different elevation.",

    geode:
      "A hollow rock structure commonly lined internally with crystals.",

    geyser:
      "A hot spring that periodically erupts water and steam.",

    geyserite:
      "Siliceous sinter deposited around some geothermal systems.",

    intrusion:
      "Igneous body emplaced within pre-existing rock.",

    lava:
      "Magma erupted onto Earth's surface.",

    lithification:
      "Conversion of sediment into sedimentary rock.",

    magma:
      "Molten or partially molten rock beneath Earth's surface.",

    mantlePlume:
      "A proposed column of anomalously hot rising mantle material.",

    mineral:
      "Naturally occurring inorganic crystalline solid with characteristic composition or compositional range.",

    outcrop:
      "Exposed bedrock at Earth's surface.",

    porphyry:
      "Igneous texture containing larger crystals within a finer-grained groundmass.",

    regolith:
      "Loose unconsolidated material covering solid bedrock.",

    sill:
      "Tabular igneous intrusion generally parallel to surrounding layers.",

    subduction:
      "Downward movement of one tectonic plate beneath another.",

    xenolith:
      "Rock fragment enclosed within a different rock, commonly an igneous rock."
  },

  // ============================================================
  // COMMON GEOLOGY QUESTIONS
  // ============================================================

  commonQuestions: {
    "What is geology?":
      "Geology is the scientific study of Earth, including its rocks, minerals, structure, processes, and geological history.",

    "What are the three main types of rocks?":
      "The three major rock types are igneous, sedimentary, and metamorphic.",

    "What is plate tectonics?":
      "Plate tectonics is the theory that Earth's lithosphere is divided into moving plates that interact at their boundaries.",

    "What causes earthquakes?":
      "Most earthquakes occur when stress accumulated in Earth's crust is released suddenly, commonly through movement along faults.",

    "What causes volcanoes?":
      "Volcanoes form where magma reaches or approaches Earth's surface, especially at plate boundaries and certain intraplate settings.",

    "What is a mineral?":
      "A mineral is a naturally occurring inorganic solid with an ordered internal structure and characteristic chemical composition or compositional range.",

    "What is the rock cycle?":
      "The rock cycle describes the processes through which rocks are formed, altered, destroyed, and transformed among igneous, sedimentary, and metamorphic types.",

    "How old is Earth?":
      "Earth is approximately 4.54 billion years old.",

    "What is a fossil?":
      "A fossil is preserved physical evidence of ancient life or biological activity.",

    "What is erosion?":
      "Erosion is the removal and transport of weathered material by water, wind, ice, waves, or gravity."
  },

  // ============================================================
  // GEOLOGY KEYWORDS
  // ============================================================

  keywords: [
    "geology",
    "geologist",
    "earth science",
    "rock",
    "rocks",
    "mineral",
    "minerals",
    "crystal",
    "crystals",
    "igneous",
    "sedimentary",
    "metamorphic",
    "rock cycle",
    "plate tectonics",
    "tectonic plates",
    "continental drift",
    "seafloor spreading",
    "subduction",
    "fault",
    "faults",
    "fold",
    "folds",
    "earthquake",
    "earthquakes",
    "seismic",
    "seismology",
    "volcano",
    "volcanoes",
    "volcanology",
    "magma",
    "lava",
    "eruption",
    "erosion",
    "weathering",
    "sediment",
    "sediments",
    "stratigraphy",
    "geological time",
    "geologic time",
    "fossil",
    "fossils",
    "paleontology",
    "glacier",
    "glaciers",
    "groundwater",
    "aquifer",
    "cave",
    "caves",
    "karst",
    "landslide",
    "landslides",
    "mountain building",
    "orogeny",
    "mining",
    "ore",
    "ore deposit",
    "petroleum",
    "coal",
    "natural resources",
    "geochemistry",
    "geophysics",
    "mineralogy",
    "petrology",
    "geomorphology",
    "hydrogeology",
    "engineering geology",
    "planetary geology",
    "paleomagnetism",
    "isostasy",
    "crust",
    "mantle",
    "core",
    "lithosphere",
    "asthenosphere",
    "continental crust",
    "oceanic crust",
    "radiometric dating",
    "deep time"
  ]
};

// ============================================================
// DEFAULT EXPORT
// ============================================================

export default GEOLOGY_KNOWLEDGE;
