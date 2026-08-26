// lib/knowledge/science/oceanography.js
// ============================================================
// REZE SCIENCE KNOWLEDGE — OCEANOGRAPHY
// Comprehensive oceanography knowledge base
// Covers physical, chemical, biological, geological,
// meteorological, observational, and applied oceanography.
// ============================================================

export const OCEANOGRAPHY_KNOWLEDGE = {
  name: "Oceanography",
  category: "science",
  description:
    "The scientific study of Earth's oceans and seas, including their physical properties, chemistry, biology, geology, circulation, waves, tides, ecosystems, climate interactions, resources, and human impacts.",

  // ============================================================
  // FUNDAMENTALS
  // ============================================================

  fundamentals: {
    definition:
      "Oceanography is the interdisciplinary scientific study of the oceans and marine environment.",

    majorBranches: [
      "physical oceanography",
      "chemical oceanography",
      "biological oceanography",
      "marine geology",
      "marine geophysics",
      "paleoceanography",
      "fisheries oceanography",
      "operational oceanography",
      "marine meteorology"
    ],

    importance: [
      "regulates Earth's climate",
      "stores and transports heat",
      "supports marine ecosystems",
      "supports fisheries",
      "influences weather",
      "participates in the global carbon cycle",
      "contains important mineral resources",
      "provides transportation routes",
      "supports coastal communities",
      "influences the global water cycle"
    ]
  },

  // ============================================================
  // WORLD OCEAN
  // ============================================================

  worldOcean: {
    definition:
      "The interconnected global ocean is commonly divided geographically into several major ocean basins.",

    majorOceans: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Southern Ocean",
      "Arctic Ocean"
    ],

    pacificOcean:
      "The Pacific is the largest and deepest major ocean basin.",

    atlanticOcean:
      "The Atlantic Ocean separates the Americas from Europe and Africa and contains important current systems such as the Gulf Stream.",

    indianOcean:
      "The Indian Ocean lies primarily between Africa, Asia, Australia, and the Southern Ocean and is strongly influenced by monsoon circulation.",

    southernOcean:
      "The Southern Ocean surrounds Antarctica and is dominated by the Antarctic Circumpolar Current.",

    arcticOcean:
      "The Arctic Ocean is the smallest major ocean basin and contains extensive seasonal and perennial sea ice."
  },

  // ============================================================
  // OCEAN BASINS
  // ============================================================

  oceanBasins: {
    definition:
      "Ocean basins are large depressions in Earth's crust occupied by seawater.",

    majorFeatures: [
      "continental margins",
      "continental shelves",
      "continental slopes",
      "continental rises",
      "abyssal plains",
      "mid-ocean ridges",
      "deep-sea trenches",
      "seamounts",
      "guyots",
      "fracture zones",
      "oceanic plateaus"
    ]
  },

  // ============================================================
  // OCEAN DEPTH
  // ============================================================

  oceanDepth: {
    surface:
      "The ocean surface forms the boundary between seawater and the atmosphere.",

    shallowWater:
      "Shallow marine environments receive relatively strong interaction with sunlight, atmosphere, waves, and coastal processes.",

    deepOcean:
      "The deep ocean is generally cold, dark, high-pressure, and relatively isolated from direct atmospheric influence.",

    abyssalZone:
      "The abyssal ocean consists of deep seafloor environments commonly several kilometers below sea level.",

    hadalZone:
      "The hadal zone includes the deepest ocean environments, especially deep trenches."
  },

  // ============================================================
  // MARINE ZONES
  // ============================================================

  marineZones: {
    byLight: {
      photicZone:
        "Upper ocean layer receiving enough sunlight to support significant photosynthesis.",

      euphoticZone:
        "The well-lit portion of the photic zone where photosynthesis is generally possible at substantial rates.",

      disphoticZone:
        "Dimly lit region below the euphotic zone where sunlight penetrates but is insufficient for most photosynthesis.",

      aphoticZone:
        "Region receiving little to no sunlight sufficient for photosynthesis."
    },

    byDepth: {
      epipelagic:
        "Approximately 0–200 meters; the surface ocean with abundant sunlight.",

      mesopelagic:
        "Approximately 200–1000 meters; the twilight zone.",

      bathypelagic:
        "Approximately 1000–4000 meters.",

      abyssopelagic:
        "Approximately 4000–6000 meters.",

      hadopelagic:
        "Water within the deepest ocean trenches, generally below about 6000 meters."
    },

    coastalZones: [
      "intertidal zone",
      "neritic zone",
      "continental shelf",
      "continental slope",
      "continental rise",
      "deep ocean"
    ]
  },

  // ============================================================
  // SEAWATER
  // ============================================================

  seawater: {
    definition:
      "Seawater is water containing dissolved salts, gases, nutrients, organic compounds, and suspended particles.",

    averageSalinity:
      "Open-ocean seawater has an average salinity of roughly 35 practical salinity units, although salinity varies geographically.",

    majorIons: [
      "chloride",
      "sodium",
      "sulfate",
      "magnesium",
      "calcium",
      "potassium",
      "bicarbonate"
    ],

    dissolvedGases: [
      "oxygen",
      "carbon dioxide",
      "nitrogen",
      "argon"
    ]
  },

  // ============================================================
  // SALINITY
  // ============================================================

  salinity: {
    definition:
      "Salinity describes the concentration of dissolved salts in seawater.",

    units: [
      "practical salinity units",
      "g/kg",
      "parts per thousand"
    ],

    controls: [
      "evaporation",
      "precipitation",
      "river discharge",
      "sea-ice formation",
      "sea-ice melting",
      "mixing",
      "groundwater input"
    ],

    highSalinity:
      "High salinity often occurs where evaporation exceeds freshwater input.",

    lowSalinity:
      "Low salinity commonly occurs near large river mouths, areas of heavy precipitation, or melting sea ice."
  },

  // ============================================================
  // TEMPERATURE
  // ============================================================

  oceanTemperature: {
    definition:
      "Ocean temperature describes the thermal state of seawater.",

    controls: [
      "solar radiation",
      "latitude",
      "season",
      "depth",
      "currents",
      "mixing",
      "upwelling",
      "downwelling",
      "atmospheric heat exchange",
      "ice cover"
    ],

    surfaceTemperature:
      "Sea-surface temperature varies strongly with latitude, season, currents, and atmospheric conditions.",

    deepOceanTemperature:
      "Deep ocean water is generally cold and changes more slowly than surface water."
  },

  // ============================================================
  // DENSITY
  // ============================================================

  density: {
    definition:
      "Seawater density depends primarily on temperature, salinity, and pressure.",

    temperatureEffect:
      "Colder seawater is generally denser than warmer seawater.",

    salinityEffect:
      "Saltier seawater is generally denser than fresher seawater.",

    pressureEffect:
      "Seawater becomes slightly denser as pressure increases with depth.",

    importance: [
      "ocean circulation",
      "water-mass formation",
      "stratification",
      "mixing",
      "thermohaline circulation"
    ]
  },

  // ============================================================
  // STRATIFICATION
  // ============================================================

  stratification: {
    definition:
      "Ocean stratification is the vertical layering of seawater caused mainly by differences in density.",

    thermocline:
      "A layer in which temperature changes relatively rapidly with depth.",

    halocline:
      "A layer in which salinity changes relatively rapidly with depth.",

    pycnocline:
      "A layer in which density changes relatively rapidly with depth.",

    mixedLayer:
      "Upper ocean layer that is relatively well mixed by wind, waves, and convection.",

    deepLayer:
      "Water below the strongly mixed upper ocean that is generally colder, denser, and more stable."
  },

  // ============================================================
  // OCEAN PRESSURE
  // ============================================================

  pressure: {
    definition:
      "Pressure in the ocean increases with depth because of the weight of water above.",

    effects: [
      "compresses seawater slightly",
      "affects gas solubility",
      "influences marine organisms",
      "creates extreme conditions in the deep ocean"
    ]
  },

  // ============================================================
  // WAVES
  // ============================================================

  waves: {
    definition:
      "Ocean waves are disturbances that propagate through or along the ocean surface.",

    windWaves:
      "Most common surface waves are generated by wind transferring energy to the ocean.",

    swell:
      "Longer-period waves that have traveled away from their generating region.",

    waveHeight:
      "Vertical distance between wave crest and trough.",

    wavelength:
      "Horizontal distance between successive wave crests or equivalent points.",

    wavePeriod:
      "Time between successive wave crests passing a fixed location.",

    frequency:
      "Number of wave cycles passing a point per unit time.",

    waveSpeed:
      "Rate at which a wave disturbance propagates.",

    fetch:
      "Distance over water across which wind blows in a relatively consistent direction.",

    factors: [
      "wind speed",
      "wind duration",
      "fetch",
      "water depth",
      "wave interaction"
    ]
  },

  // ============================================================
  // SHALLOW WATER WAVES
  // ============================================================

  shallowWaterWaves: {
    definition:
      "Waves whose behavior is strongly influenced by the seafloor because water depth is small relative to wavelength.",

    shoaling:
      "Increase in wave height as waves enter shallower water.",

    refraction:
      "Change in wave direction caused by differences in wave speed across varying depths.",

    breaking:
      "Wave instability that causes a wave to collapse and release energy as it reaches shallow water."
  },

  // ============================================================
  // TSUNAMIS
  // ============================================================

  tsunamis: {
    definition:
      "A tsunami is a series of long-wavelength ocean waves generated by a large displacement of seawater.",

    causes: [
      "undersea earthquakes",
      "submarine landslides",
      "volcanic eruptions",
      "volcanic flank collapse",
      "rarely large atmospheric disturbances or impacts"
    ],

    earthquakeMechanism:
      "Large undersea earthquakes can vertically displace the seafloor and the overlying water.",

    deepOcean:
      "Tsunamis can travel rapidly through deep water with relatively small wave heights.",

    coastalAmplification:
      "As tsunami waves approach shallow coastal water, they slow down and can increase greatly in height.",

    hazards: [
      "coastal flooding",
      "strong currents",
      "debris transport",
      "erosion",
      "structural destruction"
    ]
  },

  // ============================================================
  // TIDES
  // ============================================================

  tides: {
    definition:
      "Tides are periodic variations in sea level caused primarily by gravitational interactions involving the Moon and Sun and Earth's rotation.",

    primaryDriver:
      "The Moon is the dominant astronomical influence on Earth's tides.",

    secondaryDriver:
      "The Sun also contributes significantly to tidal forces.",

    tidalRange:
      "Difference between high tide and low tide.",

    highTide:
      "Period when local sea level reaches a tidal maximum.",

    lowTide:
      "Period when local sea level reaches a tidal minimum."
  },

  // ============================================================
  // SPRING AND NEAP TIDES
  // ============================================================

  tidalCycles: {
    springTide:
      "Tides with relatively large tidal ranges occurring near new and full moons when solar and lunar tidal effects reinforce each other.",

    neapTide:
      "Tides with relatively small tidal ranges occurring near first and third quarter moon phases.",

    semidiurnal:
      "Approximately two high tides and two low tides of similar magnitude per lunar day.",

    diurnal:
      "Approximately one high tide and one low tide per lunar day.",

    mixedSemidiurnal:
      "Two high and two low tides per lunar day with substantial differences in successive tidal heights."
  },

  // ============================================================
  // OCEAN CURRENTS
  // ============================================================

  currents: {
    definition:
      "Ocean currents are organized movements of seawater.",

    categories: [
      "surface currents",
      "deep currents",
      "tidal currents",
      "boundary currents",
      "equatorial currents",
      "coastal currents"
    ],

    drivers: [
      "wind",
      "density differences",
      "pressure gradients",
      "Earth's rotation",
      "tides",
      "coastal geometry",
      "seafloor topography"
    ]
  },

  // ============================================================
  // SURFACE CIRCULATION
  // ============================================================

  surfaceCirculation: {
    definition:
      "Large-scale movement of the upper ocean driven strongly by wind, Earth's rotation, and basin geometry.",

    gyres: [
      "North Pacific Gyre",
      "South Pacific Gyre",
      "North Atlantic Gyre",
      "South Atlantic Gyre",
      "Indian Ocean Gyre"
    ],

    subtropicalGyres:
      "Large-scale clockwise circulation in the Northern Hemisphere and counterclockwise circulation in the Southern Hemisphere.",

    westernBoundaryCurrents:
      "Fast, narrow currents on the western side of major ocean basins.",

    easternBoundaryCurrents:
      "Generally broader, slower currents on the eastern side of subtropical ocean basins."
  },

  // ============================================================
  // MAJOR OCEAN CURRENTS
  // ============================================================

  majorCurrents: {
    GulfStream:
      "A powerful warm western boundary current in the North Atlantic Ocean.",

    NorthAtlanticDrift:
      "Northward continuation of warm Atlantic circulation toward higher latitudes.",

    Kuroshio:
      "A strong western boundary current flowing northward along the western North Pacific.",

    CaliforniaCurrent:
      "A cool eastern boundary current flowing southward along the western coast of North America.",

    PeruCurrent:
      "Also called the Humboldt Current; a cool eastern boundary current along western South America.",

    BenguelaCurrent:
      "A cool eastern boundary current along southwestern Africa.",

    AgulhasCurrent:
      "A strong warm current flowing southward along southeastern Africa.",

    BrazilCurrent:
      "A warm western boundary current along eastern South America.",

    EastAustralianCurrent:
      "A major western boundary current flowing southward along eastern Australia.",

    AntarcticCircumpolarCurrent:
      "The world's largest ocean current system, flowing generally eastward around Antarctica."
  },

  // ============================================================
  // ANTARCTIC CIRCUMPOLAR CURRENT
  // ============================================================

  antarcticCircumpolarCurrent: {
    definition:
      "The Antarctic Circumpolar Current is a powerful eastward current encircling Antarctica.",

    importance: [
      "connects the Atlantic, Pacific, and Indian Oceans",
      "transports heat and freshwater",
      "influences global climate",
      "links major ocean basins",
      "supports strong biological and chemical gradients"
    ],

    drivers: [
      "strong Southern Hemisphere westerlies",
      "Coriolis effect",
      "ocean basin geometry",
      "density structure"
    ]
  },

  // ============================================================
  // THERMOHALINE CIRCULATION
  // ============================================================

  thermohalineCirculation: {
    definition:
      "Large-scale ocean circulation influenced by differences in seawater density caused mainly by temperature and salinity.",

    processes: [
      "deep-water formation",
      "surface transport",
      "upwelling",
      "mixing",
      "density-driven sinking"
    ],

    importance: [
      "heat transport",
      "carbon transport",
      "nutrient distribution",
      "climate regulation"
    ]
  },

  // ============================================================
  // MERIDIONAL OVERTURNING CIRCULATION
  // ============================================================

  overturningCirculation: {
    definition:
      "Large-scale circulation involving the movement of surface and deep water between different latitudes and depths.",

    AtlanticMeridionalOverturningCirculation:
      "A major Atlantic circulation system involving northward transport of warm surface waters and southward transport of cooler deep waters.",

    importance: [
      "heat transport",
      "regional climate",
      "carbon storage",
      "nutrient redistribution"
    ]
  },

  // ============================================================
  // UPWELLING
  // ============================================================

  upwelling: {
    definition:
      "Upward movement of deeper ocean water toward the surface.",

    causes: [
      "wind-driven Ekman transport",
      "coastal winds",
      "divergence",
      "equatorial circulation",
      "large-scale ocean dynamics"
    ],

    importance: [
      "brings nutrients to surface waters",
      "supports phytoplankton growth",
      "supports productive fisheries",
      "transports deep dissolved gases and chemicals"
    ],

    coastalUpwelling:
      "Occurs when winds and Earth's rotation move surface water away from a coast, allowing deeper water to rise."
  },

  // ============================================================
  // DOWNWELLING
  // ============================================================

  downwelling: {
    definition:
      "Movement of surface water downward into deeper ocean layers.",

    importance: [
      "transports oxygen downward",
      "moves carbon into deeper water",
      "contributes to water-mass formation",
      "redistributes heat and nutrients"
    ]
  },

  // ============================================================
  // EKMAN TRANSPORT
  // ============================================================

  ekmanTransport: {
    definition:
      "Net transport of surface ocean water at an angle to the direction of the wind due to wind stress and Earth's rotation.",

    northernHemisphere:
      "Net transport is approximately 90 degrees to the right of the wind direction.",

    southernHemisphere:
      "Net transport is approximately 90 degrees to the left of the wind direction.",

    importance: [
      "coastal upwelling",
      "coastal downwelling",
      "ocean gyres",
      "surface circulation"
    ]
  },

  // ============================================================
  // EL NIÑO
  // ============================================================

  elNino: {
    definition:
      "El Niño is the warm phase of ENSO characterized by unusual warming of central and eastern tropical Pacific surface waters together with atmospheric circulation changes.",

    processes: [
      "weakened trade winds",
      "eastward redistribution of warm surface water",
      "reduced eastern Pacific upwelling",
      "changes in atmospheric convection"
    ],

    impacts: [
      "global precipitation changes",
      "temperature anomalies",
      "fisheries changes",
      "drought",
      "flooding",
      "changes in tropical cyclone patterns"
    ]
  },

  // ============================================================
  // LA NIÑA
  // ============================================================

  laNina: {
    definition:
      "La Niña is the cool phase of ENSO characterized by unusually cool central and eastern tropical Pacific waters and associated atmospheric changes.",

    processes: [
      "strengthened trade winds",
      "enhanced westward movement of warm surface water",
      "stronger eastern Pacific upwelling",
      "changes in tropical atmospheric convection"
    ],

    impacts: [
      "regional precipitation changes",
      "temperature anomalies",
      "marine ecosystem changes",
      "drought",
      "flooding",
      "changes in storm patterns"
    ]
  },

  // ============================================================
  // ENSO
  // ============================================================

  enso: {
    name:
      "El Niño–Southern Oscillation",

    definition:
      "ENSO is a coupled ocean-atmosphere climate phenomenon centered in the tropical Pacific.",

    phases: [
      "El Niño",
      "La Niña",
      "neutral"
    ],

    importance:
      "ENSO is one of the most important sources of year-to-year climate variability worldwide."
  },

  // ============================================================
  // OCEAN CHEMISTRY
  // ============================================================

  chemicalOceanography: {
    definition:
      "Chemical oceanography studies the chemical composition of seawater and chemical processes occurring in marine environments.",

    topics: [
      "salinity",
      "pH",
      "dissolved oxygen",
      "carbon dioxide",
      "alkalinity",
      "nutrients",
      "trace metals",
      "organic matter",
      "pollutants",
      "carbon cycle"
    ]
  },

  // ============================================================
  // OCEAN ACIDIFICATION
  // ============================================================

  oceanAcidification: {
    definition:
      "Ocean acidification is the long-term decrease in seawater pH associated primarily with absorption of atmospheric carbon dioxide.",

    chemistry:
      "Dissolved carbon dioxide reacts with seawater to form carbonic acid and alters carbonate chemistry.",

    effects: [
      "lower pH",
      "reduced carbonate ion availability",
      "changes in shell formation",
      "changes in coral calcification",
      "ecosystem effects"
    ],

    vulnerableOrganisms: [
      "corals",
      "pteropods",
      "mollusks",
      "some plankton",
      "other calcifying organisms"
    ]
  },

  // ============================================================
  // MARINE CARBON CYCLE
  // ============================================================

  carbonCycle: {
    definition:
      "The marine carbon cycle describes movement and transformation of carbon among atmosphere, ocean water, organisms, sediments, and Earth's crust.",

    processes: [
      "air-sea gas exchange",
      "photosynthesis",
      "respiration",
      "decomposition",
      "carbonate chemistry",
      "particle sinking",
      "sedimentation",
      "upwelling",
      "downwelling"
    ],

    biologicalPump:
      "Biological processes transport carbon from surface waters into the deeper ocean through production, sinking particles, and decomposition.",

    solubilityPump:
      "Cold seawater can dissolve more carbon dioxide, and physical circulation can transport dissolved carbon into the deep ocean."
  },

  // ============================================================
  // DISSOLVED OXYGEN
  // ============================================================

  dissolvedOxygen: {
    definition:
      "Dissolved oxygen is oxygen gas present in seawater.",

    sources: [
      "atmospheric exchange",
      "photosynthesis"
    ],

    losses: [
      "respiration",
      "decomposition",
      "chemical oxidation"
    ],

    oxygenMinimumZone:
      "A region in the ocean where dissolved oxygen concentrations are relatively low, often associated with strong respiration and limited ventilation."
  },

  // ============================================================
  // MARINE NUTRIENTS
  // ============================================================

  nutrients: {
    majorNutrients: [
      "nitrogen",
      "phosphorus",
      "silicon"
    ],

    forms: [
      "nitrate",
      "nitrite",
      "ammonium",
      "phosphate",
      "silicic acid"
    ],

    importance:
      "Nutrients support marine primary production and strongly influence ocean ecosystem productivity."
  },

  // ============================================================
  // IRON
  // ============================================================

  iron: {
    definition:
      "Iron is a trace nutrient that limits biological productivity in some ocean regions.",

    sources: [
      "atmospheric dust",
      "sediments",
      "hydrothermal systems",
      "river inputs"
    ],

    importance:
      "Iron is required by phytoplankton for several biological and biochemical processes."
  },

  // ============================================================
  // BIOLOGICAL OCEANOGRAPHY
  // ============================================================

  biologicalOceanography: {
    definition:
      "Biological oceanography studies marine organisms, their interactions, distributions, productivity, and relationships with physical and chemical ocean processes.",

    topics: [
      "marine food webs",
      "plankton",
      "marine primary production",
      "fish ecology",
      "marine mammals",
      "coral reefs",
      "deep-sea ecosystems",
      "microbial ecology",
      "marine biodiversity"
    ]
  },

  // ============================================================
  // PLANKTON
  // ============================================================

  plankton: {
    definition:
      "Plankton are organisms that drift with ocean currents and have limited ability to move against them.",

    phytoplankton:
      "Photosynthetic plankton that form the foundation of many marine food webs.",

    zooplankton:
      "Animal or animal-like plankton that consume phytoplankton, other plankton, or organic material.",

    examples: [
      "diatoms",
      "dinoflagellates",
      "copepods",
      "krill",
      "foraminiferans",
      "pteropods"
    ]
  },

  // ============================================================
  // PHYTOPLANKTON
  // ============================================================

  phytoplankton: {
    definition:
      "Microscopic photosynthetic organisms that live suspended in aquatic environments.",

    majorGroups: [
      "diatoms",
      "dinoflagellates",
      "cyanobacteria",
      "coccolithophores"
    ],

    importance: [
      "primary production",
      "oxygen generation",
      "carbon fixation",
      "food-web support",
      "carbon export"
    ],

    photosynthesis:
      "Phytoplankton use light energy to convert carbon dioxide and water into organic matter, releasing oxygen as a byproduct."
  },

  // ============================================================
  // MARINE FOOD WEBS
  // ============================================================

  foodWebs: {
    definition:
      "Marine food webs describe interconnected feeding relationships among marine organisms.",

    trophicLevels: [
      "primary producers",
      "primary consumers",
      "secondary consumers",
      "tertiary consumers",
      "apex predators"
    ],

    examples: [
      "phytoplankton → zooplankton → small fish → large fish",
      "phytoplankton → krill → whales",
      "detritus → bacteria → small consumers → predators"
    ]
  },

  // ============================================================
  // PRIMARY PRODUCTION
  // ============================================================

  primaryProduction: {
    definition:
      "Production of organic matter by photosynthetic or chemosynthetic organisms.",

    photosyntheticProduction:
      "Uses sunlight as the energy source.",

    chemosyntheticProduction:
      "Uses chemical energy from inorganic compounds rather than sunlight.",

    limitingFactors: [
      "light",
      "nitrogen",
      "phosphorus",
      "iron",
      "silicon",
      "temperature",
      "mixing"
    ]
  },

  // ============================================================
  // MARINE MICROBES
  // ============================================================

  marineMicrobiology: {
    organisms: [
      "bacteria",
      "archaea",
      "viruses",
      "protists"
    ],

    roles: [
      "decomposition",
      "nutrient cycling",
      "carbon cycling",
      "primary production",
      "symbiosis",
      "disease",
      "food-web processes"
    ],

    microbialLoop:
      "The microbial loop describes the recycling of dissolved organic matter through microorganisms and its incorporation into marine food webs."
  },

  // ============================================================
  // DEEP SEA
  // ============================================================

  deepSea: {
    characteristics: [
      "darkness",
      "cold temperatures",
      "high pressure",
      "limited food",
      "low light",
      "specialized organisms"
    ],

    zones: [
      "bathypelagic",
      "abyssopelagic",
      "hadopelagic"
    ],

    foodSources: [
      "marine snow",
      "dead organisms",
      "particulate organic matter",
      "chemosynthetic production"
    ]
  },

  // ============================================================
  // MARINE SNOW
  // ============================================================

  marineSnow: {
    definition:
      "Marine snow consists of sinking particles of organic and inorganic material in the ocean.",

    components: [
      "dead plankton",
      "fecal pellets",
      "mucus",
      "mineral particles",
      "organic aggregates"
    ],

    importance: [
      "carbon export",
      "deep-sea food supply",
      "nutrient transport",
      "biogeochemical cycling"
    ]
  },

  // ============================================================
  // HYDROTHERMAL VENTS
  // ============================================================

  hydrothermalVents: {
    definition:
      "Hydrothermal vents are seafloor features where geothermally heated, chemically enriched fluids emerge from Earth's crust.",

    formation:
      "Seawater circulates through fractured oceanic crust, becomes heated by underlying magma or hot rock, reacts with surrounding minerals, and exits through the seafloor.",

    chemistry: [
      "hydrogen sulfide",
      "metals",
      "methane",
      "hydrogen",
      "carbon dioxide"
    ],

    ecosystems:
      "Vent ecosystems are often supported by chemosynthetic microorganisms that use chemical energy.",

    organisms: [
      "tube worms",
      "vent mussels",
      "vent clams",
      "shrimp",
      "microbial communities"
    ]
  },

  // ============================================================
  // COLD SEEPS
  // ============================================================

  coldSeeps: {
    definition:
      "Cold seeps are seafloor environments where methane-rich or chemically reduced fluids seep into the ocean.",

    organisms: [
      "chemosynthetic bacteria",
      "archaea",
      "mussels",
      "clams",
      "tube worms"
    ],

    importance:
      "Cold seeps support specialized ecosystems and play important roles in marine carbon and sulfur cycling."
  },

  // ============================================================
  // CORAL REEFS
  // ============================================================

  coralReefs: {
    definition:
      "Coral reefs are biologically constructed marine ecosystems dominated by reef-building corals and associated organisms.",

    requirements: [
      "warm water",
      "suitable light",
      "relatively clear water",
      "appropriate chemistry",
      "stable marine conditions"
    ],

    biodiversity:
      "Coral reefs support exceptionally diverse marine communities.",

    organisms: [
      "corals",
      "reef fish",
      "sponges",
      "crustaceans",
      "mollusks",
      "algae",
      "microorganisms"
    ]
  },

  // ============================================================
  // CORAL BLEACHING
  // ============================================================

  coralBleaching: {
    definition:
      "Coral bleaching occurs when corals lose or expel much of their symbiotic algae, causing their tissues to appear pale or white.",

    commonTrigger:
      "Elevated ocean temperatures are a major cause of widespread coral bleaching.",

    otherStressors: [
      "extreme temperature changes",
      "pollution",
      "sedimentation",
      "disease",
      "light stress",
      "changes in salinity"
    ],

    recovery:
      "Some corals can recover if stressful conditions are temporary, although prolonged or severe stress can cause mortality."
  },

  // ============================================================
  // MANGROVES
  // ============================================================

  mangroves: {
    definition:
      "Mangroves are salt-tolerant trees and shrubs that occupy tropical and subtropical coastal environments.",

    ecosystemServices: [
      "coastal protection",
      "nursery habitat",
      "carbon storage",
      "sediment trapping",
      "biodiversity support"
    ]
  },

  // ============================================================
  // SEAGRASS
  // ============================================================

  seagrass: {
    definition:
      "Seagrasses are flowering plants adapted to living submerged in marine environments.",

    functions: [
      "primary production",
      "sediment stabilization",
      "habitat creation",
      "carbon storage",
      "nursery habitat"
    ]
  },

  // ============================================================
  // KELP FORESTS
  // ============================================================

  kelpForests: {
    definition:
      "Kelp forests are highly productive coastal ecosystems dominated by large brown algae.",

    requirements: [
      "cool nutrient-rich water",
      "suitable rocky substrate",
      "sufficient light"
    ],

    organisms: [
      "kelp",
      "sea urchins",
      "fish",
      "sea otters",
      "invertebrates"
    ]
  },

  // ============================================================
  // ESTUARIES
  // ============================================================

  estuaries: {
    definition:
      "Estuaries are partially enclosed coastal waters where freshwater from rivers or streams mixes with seawater.",

    characteristics: [
      "variable salinity",
      "high nutrient availability",
      "strong biological productivity",
      "tidal influence",
      "sediment deposition"
    ],

    types: [
      "coastal plain estuary",
      "bar-built estuary",
      "fjord",
      "tectonic estuary"
    ],

    importance: [
      "nursery habitat",
      "fisheries",
      "water filtration",
      "shoreline protection",
      "nutrient cycling"
    ]
  },

  // ============================================================
  // CONTINENTAL SHELF
  // ============================================================

  continentalShelf: {
    definition:
      "The continental shelf is the relatively shallow submerged extension of a continent.",

    characteristics: [
      "relatively shallow water",
      "high biological productivity in many regions",
      "strong interaction with land",
      "important fisheries",
      "sediment accumulation"
    ]
  },

  // ============================================================
  // CONTINENTAL SLOPE
  // ============================================================

  continentalSlope: {
    definition:
      "The continental slope is the relatively steep region descending from the continental shelf toward the deep ocean basin.",

    processes: [
      "sediment transport",
      "submarine landslides",
      "turbidity currents",
      "deep-water circulation"
    ]
  },

  // ============================================================
  // ABYSSAL PLAINS
  // ============================================================

  abyssalPlains: {
    definition:
      "Broad, relatively flat regions of the deep ocean floor.",

    sediments: [
      "fine marine sediments",
      "clay",
      "biogenic particles",
      "terrigenous material"
    ]
  },

  // ============================================================
  // MID-OCEAN RIDGES
  // ============================================================

  midOceanRidges: {
    definition:
      "Long underwater mountain systems associated with divergent tectonic plate boundaries.",

    process:
      "New oceanic crust forms as tectonic plates move apart and magma rises and solidifies.",

    examples: [
      "Mid-Atlantic Ridge",
      "East Pacific Rise",
      "Central Indian Ridge"
    ],

    importance: [
      "seafloor spreading",
      "oceanic crust formation",
      "hydrothermal activity",
      "marine mineral cycling"
    ]
  },

  // ============================================================
  // SEAFLOOR SPREADING
  // ============================================================

  seafloorSpreading: {
    definition:
      "Process in which new oceanic crust forms at divergent boundaries and moves away from mid-ocean ridges.",

    evidence: [
      "magnetic striping",
      "young crust near ridges",
      "older crust farther from ridges",
      "high heat flow near ridges",
      "symmetrical magnetic anomalies"
    ]
  },

  // ============================================================
  // DEEP SEA TRENCHES
  // ============================================================

  trenches: {
    definition:
      "Long, narrow, very deep depressions in the seafloor commonly associated with subduction zones.",

    formation:
      "Oceanic lithosphere bends downward and sinks beneath another tectonic plate.",

    examples: [
      "Mariana Trench",
      "Tonga Trench",
      "Peru-Chile Trench",
      "Japan Trench"
    ]
  },

  // ============================================================
  // SEAMOUNTS
  // ============================================================

  seamounts: {
    definition:
      "Underwater mountains that rise from the seafloor but do not reach the ocean surface.",

    importance: [
      "alter currents",
      "create biological habitats",
      "enhance mixing",
      "support fisheries",
      "host specialized ecosystems"
    ]
  },

  // ============================================================
  // GUYOTS
  // ============================================================

  guyots: {
    definition:
      "Flat-topped underwater volcanic mountains.",

    formation:
      "Many formed as volcanic islands that were eroded near sea level and later subsided beneath the ocean."
  },

  // ============================================================
  // MARINE SEDIMENTS
  // ============================================================

  marineSediments: {
    definition:
      "Particles that accumulate on the seafloor.",

    categories: [
      "terrigenous sediment",
      "biogenous sediment",
      "hydrogenous sediment",
      "cosmogenous sediment"
    ],

    terrigenous:
      "Sediment derived primarily from land.",

    biogenous:
      "Sediment formed from remains or products of marine organisms.",

    hydrogenous:
      "Sediment formed through chemical processes in seawater.",

    cosmogenous:
      "Material originating from extraterrestrial sources."
  },

  // ============================================================
  // TURBIDITY CURRENTS
  // ============================================================

  turbidityCurrents: {
    definition:
      "Dense underwater flows of sediment-laden water moving downslope.",

    causes: [
      "submarine landslides",
      "sediment instability",
      "earthquakes",
      "storm activity",
      "rapid sediment deposition"
    ],

    deposits:
      "Turbidity currents can create graded sediment deposits called turbidites."
  },

  // ============================================================
  // SUBMARINE LANDSLIDES
  // ============================================================

  submarineLandslides: {
    definition:
      "Mass movements of sediment or rock downslope beneath the ocean.",

    triggers: [
      "earthquakes",
      "rapid sediment accumulation",
      "gas hydrate destabilization",
      "volcanic activity",
      "slope failure"
    ],

    hazards: [
      "tsunamis",
      "damage to submarine cables",
      "sediment redistribution"
    ]
  },

  // ============================================================
  // MARINE GEOLOGY
  // ============================================================

  marineGeology: {
    definition:
      "Study of geological processes and structures beneath and around the oceans.",

    topics: [
      "seafloor spreading",
      "plate tectonics",
      "marine sediments",
      "subduction",
      "seamounts",
      "trenches",
      "mid-ocean ridges",
      "hydrothermal vents",
      "marine minerals",
      "paleoceanography"
    ]
  },

  // ============================================================
  // MARINE GEOPHYSICS
  // ============================================================

  marineGeophysics: {
    definition:
      "Study of the physical properties and structure of Earth's crust and interior beneath the oceans.",

    methods: [
      "seismic reflection",
      "seismic refraction",
      "magnetic surveys",
      "gravity measurements",
      "bathymetric mapping",
      "heat-flow measurements"
    ]
  },

  // ============================================================
  // BATHYMETRY
  // ============================================================

  bathymetry: {
    definition:
      "Measurement and mapping of underwater depth and seafloor topography.",

    methods: [
      "multibeam sonar",
      "single-beam sonar",
      "satellite altimetry",
      "underwater vehicles",
      "lead-line measurements"
    ],

    products: [
      "bathymetric maps",
      "digital elevation models",
      "seafloor terrain maps"
    ]
  },

  // ============================================================
  // SONAR
  // ============================================================

  sonar: {
    definition:
      "Technology using sound waves to detect, locate, or map objects and structures underwater.",

    types: [
      "active sonar",
      "passive sonar",
      "single-beam sonar",
      "multibeam sonar",
      "side-scan sonar"
    ],

    multibeam:
      "Multibeam sonar emits multiple acoustic beams to map broad sections of the seafloor.",

    sideScan:
      "Side-scan sonar produces images of seafloor texture and objects using reflected acoustic energy."
  },

  // ============================================================
  // SATELLITE OCEANOGRAPHY
  // ============================================================

  satelliteOceanography: {
    definition:
      "Use of satellites to observe ocean properties and processes over large spatial scales.",

    measurements: [
      "sea-surface temperature",
      "sea-surface height",
      "ocean color",
      "chlorophyll",
      "sea-ice extent",
      "surface winds",
      "wave conditions"
    ],

    advantages: [
      "global coverage",
      "repeated observations",
      "large-scale monitoring",
      "remote observation of inaccessible regions"
    ]
  },

  // ============================================================
  // SEA SURFACE HEIGHT
  // ============================================================

  seaSurfaceHeight: {
    definition:
      "Elevation of the ocean surface relative to a reference level.",

    measurement:
      "Satellite radar altimetry can measure variations in sea-surface height.",

    applications: [
      "ocean currents",
      "sea-level monitoring",
      "climate studies",
      "storm surge",
      "ocean circulation"
    ]
  },

  // ============================================================
  // SEA LEVEL
  // ============================================================

  seaLevel: {
    definition:
      "The height of the ocean surface relative to a chosen reference.",

    variability: [
      "tides",
      "waves",
      "storm surge",
      "atmospheric pressure",
      "ocean temperature",
      "salinity",
      "currents",
      "seasonal cycles"
    ],

    longTermChange:
      "Long-term global mean sea level is affected by changes in ocean heat content, land ice, and other factors."
  },

  // ============================================================
  // SEA LEVEL RISE
  // ============================================================

  seaLevelRise: {
    definition:
      "Long-term increase in average sea level.",

    majorDrivers: [
      "thermal expansion of seawater",
      "melting glaciers",
      "melting ice sheets",
      "changes in land water storage"
    ],

    impacts: [
      "coastal flooding",
      "erosion",
      "saltwater intrusion",
      "wetland loss",
      "storm-surge amplification",
      "infrastructure risk"
    ]
  },

  // ============================================================
  // OCEAN HEAT CONTENT
  // ============================================================

  oceanHeatContent: {
    definition:
      "Amount of thermal energy stored in the ocean over a specified depth or volume.",

    importance: [
      "climate monitoring",
      "sea-level change",
      "hurricane intensity",
      "ocean circulation",
      "marine ecosystems"
    ],

    role:
      "The ocean absorbs and stores a large fraction of excess heat associated with Earth's changing energy balance."
  },

  // ============================================================
  // AIR-SEA INTERACTION
  // ============================================================

  airSeaInteraction: {
    definition:
      "Exchange of energy, momentum, gases, and water between the atmosphere and ocean.",

    exchanges: [
      "heat",
      "water vapor",
      "carbon dioxide",
      "oxygen",
      "momentum",
      "aerosols",
      "dust"
    ],

    importance: [
      "weather",
      "climate",
      "storms",
      "ocean circulation",
      "carbon cycle"
    ]
  },

  // ============================================================
  // OCEAN AND WEATHER
  // ============================================================

  oceanWeatherInteraction: {
    effects: [
      "sea-surface temperature influences atmospheric convection",
      "ocean evaporation supplies atmospheric moisture",
      "ocean heat affects tropical cyclones",
      "currents influence coastal climate",
      "waves influence air-sea exchange"
    ]
  },

  // ============================================================
  // TROPICAL CYCLONES AND OCEANS
  // ============================================================

  tropicalCyclones: {
    definition:
      "Tropical cyclones are atmospheric storms that derive substantial energy from warm ocean surfaces and associated heat and moisture exchanges.",

    oceanFactors: [
      "sea-surface temperature",
      "ocean heat content",
      "upper-ocean temperature",
      "mixed-layer depth",
      "cool-water upwelling"
    ],

    cooling:
      "Strong storms can mix cooler water toward the surface, potentially reducing their own energy supply."
  },

  // ============================================================
  // MARINE HEATWAVES
  // ============================================================

  marineHeatwaves: {
    definition:
      "Marine heatwaves are prolonged periods of unusually warm ocean temperatures relative to a local historical baseline.",

    causes: [
      "atmospheric circulation",
      "ocean currents",
      "air-sea heat exchange",
      "reduced mixing",
      "climate variability"
    ],

    impacts: [
      "coral bleaching",
      "species migration",
      "fisheries disruption",
      "ecosystem stress",
      "changes in productivity"
    ]
  },

  // ============================================================
  // OCEAN DEOXYGENATION
  // ============================================================

  deoxygenation: {
    definition:
      "Ocean deoxygenation refers to long-term decreases in dissolved oxygen in portions of the ocean.",

    causes: [
      "warming",
      "stratification",
      "changes in circulation",
      "biological oxygen consumption",
      "nutrient enrichment in coastal waters"
    ],

    impacts: [
      "habitat compression",
      "stress on marine organisms",
      "changes in nutrient cycling",
      "expansion of low-oxygen zones"
    ]
  },

  // ============================================================
  // EUTROPHICATION
  // ============================================================

  eutrophication: {
    definition:
      "Eutrophication is excessive nutrient enrichment of aquatic environments.",

    causes: [
      "agricultural runoff",
      "sewage",
      "fertilizer",
      "industrial discharge",
      "urban runoff"
    ],

    consequences: [
      "algal blooms",
      "oxygen depletion",
      "fish kills",
      "ecosystem changes"
    ]
  },

  // ============================================================
  // HARMFUL ALGAL BLOOMS
  // ============================================================

  harmfulAlgalBlooms: {
    definition:
      "Rapid increases in certain algae or phytoplankton that can produce toxins, deplete oxygen, or otherwise harm ecosystems.",

    causes: [
      "nutrient enrichment",
      "temperature",
      "water circulation",
      "light",
      "species-specific conditions"
    ],

    impacts: [
      "fish mortality",
      "shellfish toxicity",
      "oxygen depletion",
      "ecosystem disruption"
    ]
  },

  // ============================================================
  // MARINE POLLUTION
  // ============================================================

  marinePollution: {
    definition:
      "Introduction of harmful substances or materials into marine environments.",

    types: [
      "plastic pollution",
      "oil pollution",
      "chemical pollution",
      "nutrient pollution",
      "sewage",
      "heavy metals",
      "sediment pollution",
      "noise pollution"
    ]
  },

  // ============================================================
  // PLASTIC POLLUTION
  // ============================================================

  plasticPollution: {
    definition:
      "Accumulation of plastic materials in marine environments.",

    sources: [
      "land-based waste",
      "rivers",
      "fishing activities",
      "shipping",
      "industrial sources"
    ],

    types: [
      "macroplastics",
      "microplastics",
      "nanoplastics"
    ],

    impacts: [
      "ingestion",
      "entanglement",
      "habitat alteration",
      "transport of pollutants",
      "food-web interactions"
    ]
  },

  // ============================================================
  // OIL POLLUTION
  // ============================================================

  oilPollution: {
    definition:
      "Release of petroleum hydrocarbons into marine environments.",

    sources: [
      "oil spills",
      "shipping",
      "offshore production",
      "urban runoff",
      "natural seepage"
    ],

    effects: [
      "coating of organisms",
      "toxic exposure",
      "habitat damage",
      "food-web disruption",
      "shoreline contamination"
    ]
  },

  // ============================================================
  // MARINE NOISE
  // ============================================================

  marineNoise: {
    definition:
      "Anthropogenic or natural sound present in marine environments.",

    sources: [
      "shipping",
      "sonar",
      "construction",
      "seismic surveys",
      "explosions",
      "natural biological sounds"
    ],

    affectedOrganisms: [
      "whales",
      "dolphins",
      "seals",
      "fish",
      "invertebrates"
    ]
  },

  // ============================================================
  // MARINE CONSERVATION
  // ============================================================

  marineConservation: {
    definition:
      "Protection and sustainable management of marine ecosystems, species, habitats, and resources.",

    approaches: [
      "marine protected areas",
      "sustainable fisheries",
      "habitat restoration",
      "pollution reduction",
      "species protection",
      "ecosystem-based management"
    ]
  },

  // ============================================================
  // MARINE PROTECTED AREAS
  // ============================================================

  marineProtectedAreas: {
    definition:
      "Designated marine regions where human activities are managed or restricted to achieve conservation objectives.",

    goals: [
      "protect biodiversity",
      "protect habitats",
      "support fisheries",
      "preserve ecological processes",
      "protect vulnerable ecosystems"
    ]
  },

  // ============================================================
  // FISHERIES OCEANOGRAPHY
  // ============================================================

  fisheriesOceanography: {
    definition:
      "Study of how oceanographic conditions influence fish populations, fisheries productivity, and marine food webs.",

    factors: [
      "temperature",
      "currents",
      "upwelling",
      "nutrients",
      "primary productivity",
      "oxygen",
      "habitat"
    ]
  },

  // ============================================================
  // MARINE MIGRATION
  // ============================================================

  marineMigration: {
    definition:
      "Movement of marine organisms between different habitats or regions.",

    examples: [
      "salmon migration",
      "whale migration",
      "sea turtle migration",
      "tuna migration",
      "eel migration"
    ],

    navigationCues: [
      "temperature",
      "currents",
      "chemical gradients",
      "magnetic field",
      "sun position",
      "visual landmarks"
    ]
  },

  // ============================================================
  // MARINE MAMMALS
  // ============================================================

  marineMammals: {
    groups: [
      "whales",
      "dolphins",
      "seals",
      "sea lions",
      "walruses",
      "manatees",
      "dugongs"
    ],

    adaptations: [
      "blubber",
      "streamlined bodies",
      "diving physiology",
      "oxygen storage",
      "echolocation in toothed whales"
    ]
  },

  // ============================================================
  // MARINE REPTILES
  // ============================================================

  marineReptiles: {
    groups: [
      "sea turtles",
      "sea snakes",
      "marine iguanas",
      "saltwater crocodiles"
    ],

    adaptations: [
      "salt regulation",
      "streamlined bodies",
      "diving ability",
      "specialized feeding"
    ]
  },

  // ============================================================
  // MARINE INVERTEBRATES
  // ============================================================

  marineInvertebrates: {
    groups: [
      "mollusks",
      "crustaceans",
      "cnidarians",
      "echinoderms",
      "annelids",
      "sponges",
      "jellyfish",
      "cephalopods"
    ],

    examples: [
      "octopus",
      "squid",
      "crab",
      "lobster",
      "shrimp",
      "coral",
      "sea star",
      "sea urchin",
      "jellyfish"
    ]
  },

  // ============================================================
  // MARINE BIODIVERSITY
  // ============================================================

  biodiversity: {
    definition:
      "Marine biodiversity is the variety of organisms, genes, habitats, and ecosystems found in marine environments.",

    patterns: [
      "higher diversity in many tropical shallow-water ecosystems",
      "unique deep-sea communities",
      "strong gradients with depth",
      "strong geographic variation"
    ],

    threats: [
      "habitat loss",
      "overfishing",
      "pollution",
      "climate change",
      "invasive species",
      "ocean acidification"
    ]
  },

  // ============================================================
  // OVERFISHING
  // ============================================================

  overfishing: {
    definition:
      "Harvesting fish or other marine organisms at rates that exceed sustainable population replacement.",

    consequences: [
      "population decline",
      "food-web changes",
      "ecosystem alteration",
      "economic impacts",
      "loss of biodiversity"
    ],

    management: [
      "catch limits",
      "size limits",
      "seasonal closures",
      "gear restrictions",
      "protected areas",
      "monitoring"
    ]
  },

  // ============================================================
  // INVASIVE MARINE SPECIES
  // ============================================================

  invasiveSpecies: {
    definition:
      "Non-native organisms that establish and potentially cause ecological, economic, or social harm.",

    pathways: [
      "shipping",
      "ballast water",
      "aquaculture",
      "canals",
      "aquarium releases"
    ]
  },

  // ============================================================
  // BALLAST WATER
  // ============================================================

  ballastWater: {
    definition:
      "Water carried by ships to maintain stability and trim.",

    ecologicalIssue:
      "Discharge of untreated ballast water can transport organisms between marine ecosystems."
  },

  // ============================================================
  // MARINE RESOURCE GEOLOGY
  // ============================================================

  marineResources: {
    resources: [
      "oil",
      "natural gas",
      "sand",
      "gravel",
      "salt",
      "polymetallic nodules",
      "seafloor massive sulfides",
      "phosphorites"
    ],

    renewableResources: [
      "fisheries",
      "offshore wind",
      "tidal energy",
      "wave energy"
    ]
  },

  // ============================================================
  // POLYMETALLIC NODULES
  // ============================================================

  polymetallicNodules: {
    definition:
      "Rock-like mineral deposits that grow slowly on deep-ocean sediment surfaces.",

    metals: [
      "manganese",
      "iron",
      "nickel",
      "cobalt",
      "copper"
    ],

    location:
      "Large deposits occur in some abyssal regions of the global ocean."
  },

  // ============================================================
  // MARINE MINERAL DEPOSITS
  // ============================================================

  marineMinerals: {
    deposits: [
      "manganese nodules",
      "cobalt-rich crusts",
      "seafloor massive sulfides",
      "phosphorites",
      "marine placer deposits"
    ]
  },

  // ============================================================
  // OFFSHORE ENERGY
  // ============================================================

  offshoreEnergy: {
    sources: [
      "offshore wind",
      "tidal energy",
      "wave energy",
      "offshore oil",
      "offshore natural gas"
    ],

    considerations: [
      "environmental impacts",
      "engineering challenges",
      "marine spatial planning",
      "maintenance",
      "weather exposure"
    ]
  },

  // ============================================================
  // TIDAL ENERGY
  // ============================================================

  tidalEnergy: {
    definition:
      "Energy generated from predictable movement of seawater associated with tides and tidal currents.",

    advantages: [
      "highly predictable",
      "renewable",
      "low direct carbon emissions during operation"
    ],

    challenges: [
      "high infrastructure cost",
      "marine ecosystem interactions",
      "corrosion",
      "maintenance",
      "site limitations"
    ]
  },

  // ============================================================
  // WAVE ENERGY
  // ============================================================

  waveEnergy: {
    definition:
      "Energy extracted from the motion of ocean waves.",

    advantages: [
      "renewable",
      "high energy density in suitable locations"
    ],

    challenges: [
      "storm damage",
      "corrosion",
      "maintenance",
      "variable wave conditions",
      "environmental considerations"
    ]
  },

  // ============================================================
  // OFFSHORE WIND
  // ============================================================

  offshoreWind: {
    definition:
      "Generation of electricity from wind turbines installed in marine environments.",

    advantages: [
      "strong offshore winds",
      "large potential resource",
      "reduced land-use conflicts in some regions"
    ],

    challenges: [
      "installation",
      "marine construction",
      "corrosion",
      "cable infrastructure",
      "wildlife interactions"
    ]
  },

  // ============================================================
  // PALEOCEANOGRAPHY
  // ============================================================

  paleoceanography: {
    definition:
      "Study of ancient oceans and past ocean conditions.",

    evidence: [
      "marine sediment cores",
      "microfossils",
      "stable isotopes",
      "coral records",
      "ice cores",
      "sedimentary structures",
      "biomarkers"
    ],

    reconstructedVariables: [
      "past temperature",
      "past sea level",
      "ice volume",
      "ocean circulation",
      "productivity",
      "chemical composition"
    ]
  },

  // ============================================================
  // MARINE MICROFOSSILS
  // ============================================================

  microfossils: {
    examples: [
      "foraminifera",
      "diatoms",
      "coccolithophores",
      "radiolarians"
    ],

    importance: [
      "past climate reconstruction",
      "past ocean temperature",
      "past productivity",
      "marine sediment dating"
    ]
  },

  // ============================================================
  // OCEAN CLIMATE CONNECTION
  // ============================================================

  oceanClimate: {
    role:
      "The ocean is a major component of Earth's climate system because it stores heat, transports energy, exchanges gases with the atmosphere, and influences global circulation.",

    processes: [
      "heat storage",
      "heat transport",
      "carbon uptake",
      "evaporation",
      "sea-ice formation",
      "ocean circulation",
      "air-sea exchange"
    ]
  },

  // ============================================================
  // SEA ICE
  // ============================================================

  seaIce: {
    definition:
      "Sea ice is seawater that has frozen at the ocean surface.",

    formation:
      "As seawater cools sufficiently, ice crystals form and can consolidate into sea ice.",

    types: [
      "new ice",
      "young ice",
      "first-year ice",
      "multiyear ice",
      "pack ice",
      "fast ice"
    ],

    importance: [
      "albedo",
      "marine habitat",
      "ocean-atmosphere exchange",
      "ocean circulation",
      "climate feedbacks"
    ]
  },

  // ============================================================
  // SEA ICE AND SALINITY
  // ============================================================

  seaIceSalinity: {
    freezing:
      "When seawater freezes, much of its salt is excluded from the forming ice, leaving surrounding water relatively saltier.",

    brineRejection:
      "Salt rejection during sea-ice formation can increase the salinity and density of nearby seawater."
  },

  // ============================================================
  // OCEAN-ICE INTERACTION
  // ============================================================

  oceanIceInteraction: {
    processes: [
      "ice formation",
      "ice melting",
      "brine rejection",
      "freshwater input",
      "heat exchange",
      "ice drift",
      "wave-ice interaction"
    ]
  },

  // ============================================================
  // ARCTIC OCEANOGRAPHY
  // ============================================================

  arcticOceanography: {
    characteristics: [
      "high latitude",
      "seasonal sea ice",
      "strong freshwater influence",
      "low solar radiation during winter",
      "strong seasonal cycles"
    ],

    importantProcesses: [
      "sea-ice formation",
      "sea-ice melt",
      "river discharge",
      "Atlantic inflow",
      "Pacific inflow",
      "polar circulation"
    ]
  },

  // ============================================================
  // SOUTHERN OCEANOGRAPHY
  // ============================================================

  southernOceanography: {
    characteristics: [
      "surrounds Antarctica",
      "strong westerly winds",
      "Antarctic Circumpolar Current",
      "seasonal sea ice",
      "strong air-sea exchange"
    ],

    importance: [
      "global heat transport",
      "carbon uptake",
      "deep-water formation",
      "nutrient cycling"
    ]
  },

  // ============================================================
  // MONSOON-OCEAN INTERACTION
  // ============================================================

  monsoonOceanInteraction: {
    definition:
      "Seasonal atmospheric circulation interacts strongly with ocean temperatures, currents, and evaporation.",

    examples: [
      "Indian Ocean monsoon system",
      "Arabian Sea upwelling",
      "Bay of Bengal freshwater stratification"
    ]
  },

  // ============================================================
  // OCEAN CIRCULATION AND CLIMATE
  // ============================================================

  circulationClimate: {
    processes: [
      "surface currents transport heat",
      "deep circulation redistributes dense water",
      "upwelling returns nutrients to the surface",
      "downwelling transports surface properties downward"
    ]
  },

  // ============================================================
  // COASTAL OCEANOGRAPHY
  // ============================================================

  coastalOceanography: {
    definition:
      "Study of physical, chemical, biological, and geological processes in coastal marine environments.",

    processes: [
      "waves",
      "tides",
      "currents",
      "sediment transport",
      "upwelling",
      "river discharge",
      "estuarine circulation",
      "coastal erosion"
    ]
  },

  // ============================================================
  // COASTAL EROSION
  // ============================================================

  coastalErosion: {
    definition:
      "Removal and redistribution of sediment from coastal land or beaches.",

    causes: [
      "waves",
      "storms",
      "currents",
      "sea-level rise",
      "sediment supply changes",
      "human structures"
    ],

    impacts: [
      "beach loss",
      "cliff retreat",
      "habitat loss",
      "infrastructure damage"
    ]
  },

  // ============================================================
  // BEACH PROCESSES
  // ============================================================

  beaches: {
    definition:
      "Accumulations of unconsolidated sediment along shorelines.",

    sediments: [
      "sand",
      "gravel",
      "shell fragments",
      "volcanic material",
      "coral fragments"
    ],

    processes: [
      "wave erosion",
      "longshore transport",
      "deposition",
      "storm overwash"
    ]
  },

  // ============================================================
  // LONGSHORE TRANSPORT
  // ============================================================

  longshoreTransport: {
    definition:
      "Movement of sediment parallel to a coastline caused mainly by waves approaching the shore at an angle.",

    importance:
      "Longshore transport can redistribute sand along beaches and influence coastal erosion and deposition."
  },

  // ============================================================
  // STORM SURGE
  // ============================================================

  stormSurge: {
    definition:
      "Abnormal rise of coastal water above the predicted astronomical tide caused mainly by storm winds and atmospheric pressure.",

    oceanographicFactors: [
      "coastal geometry",
      "bathymetry",
      "storm size",
      "wind direction",
      "water depth",
      "storm track"
    ]
  },

  // ============================================================
  // RIP CURRENTS
  // ============================================================

  ripCurrents: {
    definition:
      "Narrow, fast-moving currents flowing away from the shoreline through the surf zone.",

    formation:
      "They can form when water brought toward shore by waves returns seaward through localized channels.",

    hazard:
      "Rip currents can pose a serious hazard to swimmers."
  },

  // ============================================================
  // OCEAN OPTICS
  // ============================================================

  oceanOptics: {
    definition:
      "Study of how light interacts with seawater, particles, dissolved substances, and organisms.",

    processes: [
      "absorption",
      "scattering",
      "reflection",
      "transmission"
    ],

    oceanColor:
      "Ocean color is influenced by phytoplankton, suspended sediments, dissolved organic matter, and water properties."
  },

  // ============================================================
  // OCEAN COLOR
  // ============================================================

  oceanColor: {
    factors: [
      "phytoplankton concentration",
      "chlorophyll",
      "sediment",
      "dissolved organic matter",
      "water depth"
    ],

    remoteSensing:
      "Satellite ocean-color measurements can be used to estimate chlorophyll concentration and monitor marine productivity."
  },

  // ============================================================
  // LIGHT PENETRATION
  // ============================================================

  lightPenetration: {
    definition:
      "The amount of sunlight that penetrates seawater decreases rapidly with depth.",

    controls: [
      "water clarity",
      "particles",
      "phytoplankton",
      "dissolved organic matter",
      "wavelength"
    ]
  },

  // ============================================================
  // OCEAN SOUND
  // ============================================================

  underwaterAcoustics: {
    definition:
      "Study of sound propagation through marine environments.",

    importance: [
      "sonar",
      "marine mammal communication",
      "seafloor mapping",
      "underwater navigation",
      "oceanographic measurements"
    ],

    soundSpeed:
      "Sound speed in seawater depends mainly on temperature, salinity, and pressure."
  },

  // ============================================================
  // ARGO
  // ============================================================

  argoProgram: {
    definition:
      "A global observing system using autonomous profiling floats to measure ocean conditions.",

    measurements: [
      "temperature",
      "salinity",
      "pressure"
    ],

    importance: [
      "ocean heat monitoring",
      "salinity monitoring",
      "climate research",
      "ocean circulation studies"
    ]
  },

  // ============================================================
  // OCEANOGRAPHIC INSTRUMENTS
  // ============================================================

  instruments: {
    CTD:
      "Conductivity-Temperature-Depth instrument used to measure seawater conductivity, temperature, and pressure.",

    ADCP:
      "Acoustic Doppler Current Profiler used to measure water velocity using Doppler shifts in acoustic signals.",

    currentMeter:
      "Instrument used to measure ocean current speed and direction.",

    tideGauge:
      "Instrument used to monitor sea-level variations at coastal locations.",

    fluorometer:
      "Instrument that can measure fluorescence associated with chlorophyll and other substances.",

    oxygenSensor:
      "Instrument used to measure dissolved oxygen concentration.",

    pHSensor:
      "Instrument used to measure seawater acidity.",

    salinometer:
      "Instrument used to determine seawater salinity.",

    thermistor:
      "Temperature-sensitive device used to measure water temperature."
  },

  // ============================================================
  // AUTONOMOUS UNDERWATER VEHICLES
  // ============================================================

  underwaterVehicles: {
    AUV:
      "Autonomous Underwater Vehicle capable of operating underwater without continuous physical connection to a surface vessel.",

    ROV:
      "Remotely Operated Vehicle controlled from a surface platform through a tether.",

    applications: [
      "seafloor mapping",
      "deep-sea exploration",
      "biological surveys",
      "infrastructure inspection",
      "hydrothermal vent studies",
      "environmental monitoring"
    ]
  },

  // ============================================================
  // RESEARCH VESSELS
  // ============================================================

  researchVessels: {
    definition:
      "Ships equipped for scientific investigation of the ocean.",

    equipment: [
      "CTD rosettes",
      "sonar",
      "sediment corers",
      "water samplers",
      "acoustic instruments",
      "laboratories",
      "ROVs",
      "AUVs"
    ]
  },

  // ============================================================
  // WATER SAMPLING
  // ============================================================

  waterSampling: {
    rosetteSampler:
      "A circular frame carrying multiple sampling bottles used to collect seawater at different depths.",

    niskinBottle:
      "A sampling bottle designed to collect water from a specified depth.",

    uses: [
      "nutrient measurements",
      "oxygen analysis",
      "carbon chemistry",
      "microbiology",
      "trace-metal analysis"
    ]
  },

  // ============================================================
  // OCEAN MODELS
  // ============================================================

  oceanModels: {
    definition:
      "Mathematical and computational models used to simulate ocean circulation, temperature, salinity, waves, ecosystems, and biogeochemical processes.",

    applications: [
      "weather forecasting",
      "climate modeling",
      "current prediction",
      "storm surge forecasting",
      "pollution tracking",
      "marine ecosystem modeling"
    ]
  },

  // ============================================================
  // OPERATIONAL OCEANOGRAPHY
  // ============================================================

  operationalOceanography: {
    definition:
      "Continuous observation and forecasting of ocean conditions for practical applications.",

    products: [
      "current forecasts",
      "wave forecasts",
      "sea-level forecasts",
      "temperature maps",
      "salinity maps",
      "storm surge predictions",
      "sea-ice forecasts"
    ]
  },

  // ============================================================
  // MARITIME APPLICATIONS
  // ============================================================

  maritimeApplications: {
    uses: [
      "navigation",
      "shipping",
      "fisheries",
      "offshore engineering",
      "search and rescue",
      "port management",
      "coastal planning",
      "naval operations",
      "renewable energy"
    ]
  },

  // ============================================================
  // MARINE WEATHER
  // ============================================================

  marineWeather: {
    variables: [
      "wind",
      "waves",
      "swell",
      "visibility",
      "air pressure",
      "temperature",
      "precipitation",
      "sea state",
      "storm systems"
    ]
  },

  // ============================================================
  // SEA STATE
  // ============================================================

  seaState: {
    definition:
      "Description of the condition of the ocean surface, particularly waves and swell.",

    factors: [
      "wind",
      "wave height",
      "wave period",
      "swell",
      "local currents",
      "storm systems"
    ]
  },

  // ============================================================
  // MARINE HEAT TRANSPORT
  // ============================================================

  heatTransport: {
    definition:
      "Transport of thermal energy by ocean circulation.",

    mechanisms: [
      "surface currents",
      "deep currents",
      "eddies",
      "mixing",
      "upwelling",
      "downwelling"
    ],

    importance:
      "Ocean heat transport helps redistribute solar energy from lower to higher latitudes."
  },

  // ============================================================
  // OCEAN EDDIES
  // ============================================================

  eddies: {
    definition:
      "Rotating masses of seawater that can persist from days to months or longer.",

    types: [
      "cyclonic eddies",
      "anticyclonic eddies",
      "mesoscale eddies",
      "submesoscale eddies"
    ],

    importance: [
      "heat transport",
      "nutrient transport",
      "carbon transport",
      "mixing",
      "biological productivity"
    ]
  },

  // ============================================================
  // WESTERN BOUNDARY CURRENTS
  // ============================================================

  westernBoundaryCurrents: {
    definition:
      "Strong, narrow currents occurring along the western boundaries of major subtropical ocean gyres.",

    characteristics: [
      "fast flow",
      "strong temperature gradients",
      "deep penetration",
      "significant heat transport"
    ]
  },

  // ============================================================
  // EASTERN BOUNDARY CURRENTS
  // ============================================================

  easternBoundaryCurrents: {
    definition:
      "Broad, relatively slow currents along the eastern sides of subtropical ocean basins.",

    characteristics: [
      "cool waters",
      "broad flow",
      "coastal upwelling",
      "high biological productivity in many regions"
    ]
  },

  // ============================================================
  // EQUATORIAL OCEANOGRAPHY
  // ============================================================

  equatorialOceanography: {
    processes: [
      "trade-wind forcing",
      "equatorial currents",
      "equatorial upwelling",
      "thermocline tilt",
      "ENSO variability"
    ],

    importance:
      "The tropical Pacific equatorial region plays a central role in global climate variability."
  },

  // ============================================================
  // THERMAL EXPANSION
  // ============================================================

  thermalExpansion: {
    definition:
      "Increase in seawater volume as its temperature rises.",

    importance:
      "Thermal expansion contributes to long-term sea-level rise."
  },

  // ============================================================
  // FRESHWATER FLUX
  // ============================================================

  freshwaterFlux: {
    sources: [
      "precipitation",
      "river discharge",
      "ice melt",
      "groundwater"
    ],

    losses: [
      "evaporation",
      "sea-ice formation"
    ],

    importance: [
      "salinity",
      "density",
      "stratification",
      "circulation"
    ]
  },

  // ============================================================
  // OCEAN MIXING
  // ============================================================

  mixing: {
    definition:
      "Physical process that redistributes heat, salt, nutrients, gases, and other properties within the ocean.",

    drivers: [
      "wind",
      "waves",
      "tides",
      "convection",
      "internal waves",
      "eddies",
      "currents"
    ]
  },

  // ============================================================
  // INTERNAL WAVES
  // ============================================================

  internalWaves: {
    definition:
      "Waves that propagate within a stratified ocean rather than primarily along the surface.",

    importance: [
      "mixing",
      "nutrient transport",
      "energy transfer",
      "interaction with currents"
    ]
  },

  // ============================================================
  // OCEAN FRONTS
  // ============================================================

  oceanFronts: {
    definition:
      "Sharp horizontal transitions in ocean temperature, salinity, density, or other properties.",

    importance: [
      "enhanced biological productivity",
      "current interactions",
      "mixing",
      "marine animal aggregation"
    ]
  },

  // ============================================================
  // OCEAN CONVERGENCE AND DIVERGENCE
  // ============================================================

  convergenceDivergence: {
    convergence:
      "Region where surface waters move toward one another.",

    divergence:
      "Region where surface waters move apart.",

    consequences: [
      "convergence can favor downwelling",
      "divergence can favor upwelling"
    ]
  },

  // ============================================================
  // OCEAN CIRCULATION FORCES
  // ============================================================

  circulationForces: {
    forces: [
      "wind stress",
      "pressure gradients",
      "Coriolis effect",
      "gravity",
      "buoyancy",
      "friction"
    ]
  },

  // ============================================================
  // MARINE CARBONATE SYSTEM
  // ============================================================

  carbonateSystem: {
    components: [
      "carbon dioxide",
      "carbonic acid",
      "bicarbonate",
      "carbonate ions"
    ],

    importance: [
      "ocean acidification",
      "shell formation",
      "coral calcification",
      "marine carbon storage"
    ]
  },

  // ============================================================
  // CALCIFICATION
  // ============================================================

  calcification: {
    definition:
      "Biological formation of calcium carbonate structures by marine organisms.",

    organisms: [
      "corals",
      "mollusks",
      "some plankton",
      "echinoderms",
      "calcareous algae"
    ],

    importance:
      "Calcification contributes to reef formation and marine carbonate sediments."
  },

  // ============================================================
  // MARINE CARBONATE SEDIMENTS
  // ============================================================

  carbonateSediments: {
    definition:
      "Seafloor sediments containing substantial calcium carbonate derived from biological or chemical sources.",

    sources: [
      "foraminifera",
      "coccolithophores",
      "coral fragments",
      "shells",
      "calcareous algae"
    ]
  },

  // ============================================================
  // CARBON COMPENSATION DEPTH
  // ============================================================

  carbonateCompensation: {
    definition:
      "Depth below which calcium carbonate tends to dissolve more rapidly than it accumulates.",

    importance:
      "Controls where carbonate-rich sediments can persist in the deep ocean."
  },

  // ============================================================
  // MARINE BIOGEOCHEMISTRY
  // ============================================================

  biogeochemistry: {
    definition:
      "Study of interactions among biological, chemical, and geological processes in marine systems.",

    cycles: [
      "carbon",
      "nitrogen",
      "phosphorus",
      "silicon",
      "sulfur",
      "iron"
    ]
  },

  // ============================================================
  // NITROGEN CYCLE
  // ============================================================

  nitrogenCycle: {
    processes: [
      "nitrogen fixation",
      "nitrification",
      "denitrification",
      "anammox",
      "assimilation",
      "remineralization"
    ],

    importance:
      "Controls availability of biologically usable nitrogen in many marine ecosystems."
  },

  // ============================================================
  // PHOSPHORUS CYCLE
  // ============================================================

  phosphorusCycle: {
    processes: [
      "uptake",
      "remineralization",
      "sedimentation",
      "resuspension"
    ],

    importance:
      "Phosphorus is an essential nutrient for marine organisms."
  },

  // ============================================================
  // SILICON CYCLE
  // ============================================================

  siliconCycle: {
    importance:
      "Silicon is especially important for organisms such as diatoms that construct silica-based structures.",

    processes: [
      "biological uptake",
      "sinking",
      "dissolution",
      "recycling"
    ]
  },

  // ============================================================
  // SULFUR CYCLE
  // ============================================================

  sulfurCycle: {
    processes: [
      "sulfate reduction",
      "sulfide oxidation",
      "organic sulfur cycling",
      "hydrothermal sulfur chemistry"
    ],

    importance:
      "Sulfur cycling is particularly important in oxygen-poor environments and hydrothermal ecosystems."
  },

  // ============================================================
  // MARINE DECOMPOSITION
  // ============================================================

  decomposition: {
    definition:
      "Breakdown of organic matter by microorganisms and chemical processes.",

    importance: [
      "nutrient recycling",
      "carbon cycling",
      "oxygen consumption",
      "marine food webs"
    ]
  },

  // ============================================================
  // REMINERALIZATION
  // ============================================================

  remineralization: {
    definition:
      "Conversion of organic nutrients back into inorganic forms through biological and chemical processes.",

    importance: [
      "nutrient recycling",
      "deep-ocean chemistry",
      "primary production"
    ]
  },

  // ============================================================
  // MARINE SNOW AND BIOLOGICAL PUMP
  // ============================================================

  biologicalPump: {
    definition:
      "The biological pump transports carbon from surface waters toward the deep ocean through biological production and sinking organic material.",

    stages: [
      "phytoplankton fixation of carbon",
      "consumption by organisms",
      "production of particles",
      "particle sinking",
      "decomposition at depth",
      "long-term carbon storage"
    ]
  },

  // ============================================================
  // MICROBIAL CARBON PUMP
  // ============================================================

  microbialCarbonPump: {
    definition:
      "Microbial processes transform dissolved organic carbon into forms that can persist for long periods in the ocean.",

    importance:
      "Contributes to long-term storage of carbon in marine dissolved organic matter."
  },

  // ============================================================
  // MARINE ECOSYSTEM SERVICES
  // ============================================================

  ecosystemServices: {
    services: [
      "food production",
      "carbon storage",
      "oxygen production",
      "coastal protection",
      "nutrient cycling",
      "recreation",
      "transportation",
      "cultural value",
      "climate regulation",
      "biodiversity"
    ]
  },

  // ============================================================
  // MARINE HABITATS
  // ============================================================

  habitats: [
    "coral reefs",
    "mangrove forests",
    "seagrass meadows",
    "kelp forests",
    "estuaries",
    "salt marshes",
    "rocky shores",
    "sandy beaches",
    "mudflats",
    "continental shelves",
    "deep-sea plains",
    "hydrothermal vents",
    "cold seeps",
    "seamounts",
    "polar oceans",
    "open ocean"
  ],

  // ============================================================
  // MARINE ECOLOGY
  // ============================================================

  marineEcology: {
    definition:
      "Study of interactions among marine organisms and their physical and chemical environment.",

    interactions: [
      "predation",
      "competition",
      "mutualism",
      "parasitism",
      "commensalism",
      "symbiosis"
    ]
  },

  // ============================================================
  // SYMBIOSIS
  // ============================================================

  marineSymbiosis: {
    definition:
      "Close biological association between different organisms.",

    examples: [
      "corals and photosynthetic symbionts",
      "chemosynthetic bacteria and vent animals",
      "cleaner organisms and reef fish"
    ]
  },

  // ============================================================
  // BIOLUMINESCENCE
  // ============================================================

  bioluminescence: {
    definition:
      "Production and emission of light by living organisms.",

    organisms: [
      "dinoflagellates",
      "jellyfish",
      "squid",
      "deep-sea fish",
      "many marine invertebrates"
    ],

    functions: [
      "predator avoidance",
      "prey attraction",
      "communication",
      "camouflage"
    ]
  },

  // ============================================================
  // DEEP SEA ADAPTATIONS
  // ============================================================

  deepSeaAdaptations: {
    adaptations: [
      "bioluminescence",
      "slow metabolism",
      "pressure tolerance",
      "low-light vision",
      "large mouths",
      "enhanced sensory systems",
      "efficient energy use"
    ]
  },

  // ============================================================
  // MARINE LIFE AND PRESSURE
  // ============================================================

  pressureAdaptation: {
    definition:
      "Deep-sea organisms have physiological adaptations that allow them to function under extreme hydrostatic pressure.",

    adaptations: [
      "pressure-tolerant proteins",
      "specialized membranes",
      "reduced gas-filled structures",
      "biochemical adaptations"
    ]
  },

  // ============================================================
  // OCEAN EXPLORATION
  // ============================================================

  oceanExploration: {
    history: [
      "early coastal navigation",
      "scientific voyages",
      "deep-sea sounding",
      "oceanographic expeditions",
      "submersible exploration",
      "satellite observation",
      "autonomous vehicle exploration"
    ],

    technologies: [
      "research ships",
      "submersibles",
      "ROVs",
      "AUVs",
      "sonar",
      "satellites",
      "profiling floats"
    ]
  },

  // ============================================================
  // DEEP-SEA SUBMERSIBLES
  // ============================================================

  submersibles: {
    definition:
      "Vehicles designed to carry instruments or people underwater.",

    types: [
      "human-occupied vehicles",
      "remotely operated vehicles",
      "autonomous underwater vehicles"
    ],

    uses: [
      "deep-sea exploration",
      "geological surveys",
      "biological sampling",
      "shipwreck investigation",
      "infrastructure inspection"
    ]
  },

  // ============================================================
  // OCEAN OBSERVING SYSTEMS
  // ============================================================

  observingSystems: {
    platforms: [
      "research vessels",
      "buoys",
      "moorings",
      "profiling floats",
      "gliders",
      "satellites",
      "tide gauges",
      "AUVs",
      "ROVs"
    ]
  },

  // ============================================================
  // OCEAN GLIDERS
  // ============================================================

  oceanGliders: {
    definition:
      "Autonomous underwater vehicles that use changes in buoyancy and hydrodynamic lift to move through the ocean.",

    measurements: [
      "temperature",
      "salinity",
      "depth",
      "oxygen",
      "chlorophyll",
      "currents"
    ]
  },

  // ============================================================
  // BUOYS
  // ============================================================

  oceanBuoys: {
    definition:
      "Floating platforms used to collect atmospheric and oceanographic observations.",

    measurements: [
      "wind",
      "air pressure",
      "air temperature",
      "sea-surface temperature",
      "waves",
      "currents",
      "salinity"
    ]
  },

  // ============================================================
  // TIDE GAUGES
  // ============================================================

  tideGauges: {
    definition:
      "Coastal instruments used to measure changes in sea level.",

    uses: [
      "tide prediction",
      "sea-level monitoring",
      "storm surge monitoring",
      "tsunami detection",
      "long-term coastal studies"
    ]
  },

  // ============================================================
  // OCEAN DATA ASSIMILATION
  // ============================================================

  oceanDataAssimilation: {
    definition:
      "Process of combining ocean observations with numerical models to estimate the current state of the ocean.",

    dataSources: [
      "satellites",
      "Argo floats",
      "ships",
      "buoys",
      "gliders",
      "moorings"
    ]
  },

  // ============================================================
  // MARINE SPATIAL PLANNING
  // ============================================================

  marineSpatialPlanning: {
    definition:
      "Process of organizing human activities in marine areas to reduce conflicts and support sustainable use.",

    activities: [
      "fishing",
      "shipping",
      "conservation",
      "offshore energy",
      "aquaculture",
      "tourism",
      "resource extraction"
    ]
  },

  // ============================================================
  // MARINE AQUACULTURE
  // ============================================================

  aquaculture: {
    definition:
      "Farming of aquatic organisms such as fish, shellfish, algae, and other marine species.",

    types: [
      "marine fish farming",
      "shellfish farming",
      "seaweed cultivation",
      "integrated aquaculture"
    ],

    challenges: [
      "disease",
      "nutrient waste",
      "escaped organisms",
      "feed requirements",
      "habitat interactions"
    ]
  },

  // ============================================================
  // BLUE ECONOMY
  // ============================================================

  blueEconomy: {
    definition:
      "Economic activities related to oceans and coastal environments that aim to balance economic use with environmental sustainability.",

    sectors: [
      "fisheries",
      "aquaculture",
      "shipping",
      "tourism",
      "offshore renewable energy",
      "marine biotechnology",
      "coastal industries"
    ]
  },

  // ============================================================
  // MARINE BIOTECHNOLOGY
  // ============================================================

  marineBiotechnology: {
    definition:
      "Use of marine organisms and biological processes for scientific, industrial, medical, or technological applications.",

    potentialApplications: [
      "pharmaceuticals",
      "enzymes",
      "biomaterials",
      "food products",
      "bioremediation",
      "industrial chemicals"
    ]
  },

  // ============================================================
  // BIOREMEDIATION
  // ============================================================

  marineBioremediation: {
    definition:
      "Use of organisms or biological processes to remove, transform, or reduce environmental contaminants.",

    organisms: [
      "bacteria",
      "fungi",
      "algae",
      "plants"
    ]
  },

  // ============================================================
  // MARINE DISEASE
  // ============================================================

  marineDisease: {
    definition:
      "Diseases affecting marine organisms caused by pathogens, parasites, environmental stressors, or combinations of factors.",

    pathogens: [
      "viruses",
      "bacteria",
      "fungi",
      "parasites"
    ],

    environmentalStressors: [
      "warming",
      "pollution",
      "oxygen depletion",
      "acidification",
      "habitat degradation"
    ]
  },

  // ============================================================
  // MARINE CONSERVATION BIOLOGY
  // ============================================================

  conservationBiology: {
    goals: [
      "prevent species extinction",
      "protect habitats",
      "restore ecosystems",
      "maintain genetic diversity",
      "support ecosystem functions"
    ]
  },

  // ============================================================
  // OCEAN GOVERNANCE
  // ============================================================

  oceanGovernance: {
    definition:
      "Frameworks and institutions used to manage marine resources, activities, and environmental protection.",

    topics: [
      "fisheries management",
      "shipping regulation",
      "pollution control",
      "marine protected areas",
      "resource management",
      "coastal planning"
    ]
  },

  // ============================================================
  // MARINE HAZARDS
  // ============================================================

  marineHazards: {
    natural: [
      "tsunamis",
      "storm surge",
      "extreme waves",
      "rip currents",
      "coastal flooding",
      "submarine landslides",
      "volcanic eruptions"
    ],

    humanRelated: [
      "oil spills",
      "plastic pollution",
      "ship collisions",
      "chemical pollution",
      "underwater noise"
    ]
  },

  // ============================================================
  // TSUNAMI DETECTION
  // ============================================================

  tsunamiDetection: {
    systems: [
      "seismic networks",
      "deep-ocean pressure sensors",
      "tide gauges",
      "satellite observations"
    ],

    principle:
      "Tsunami warning systems combine earthquake information with ocean observations to determine whether dangerous waves may occur."
  },

  // ============================================================
  // MARINE GEOHAZARDS
  // ============================================================

  marineGeohazards: {
    hazards: [
      "submarine landslides",
      "earthquakes",
      "tsunamis",
      "volcanic eruptions",
      "seafloor instability",
      "gas-related sediment instability"
    ]
  },

  // ============================================================
  // MARINE VOLCANOES
  // ============================================================

  marineVolcanoes: {
    definition:
      "Volcanoes located beneath or near the ocean.",

    importance: [
      "formation of new crust",
      "hydrothermal systems",
      "island formation",
      "chemical fluxes",
      "marine hazards"
    ]
  },

  // ============================================================
  // SEAFLOOR VOLCANISM
  // ============================================================

  seafloorVolcanism: {
    definition:
      "Volcanic activity occurring on the ocean floor.",

    role:
      "Submarine volcanism is a major mechanism for creation of oceanic crust and contributes heat and chemicals to the ocean."
  },

  // ============================================================
  // MARINE HEAT FLOW
  // ============================================================

  marineHeatFlow: {
    definition:
      "Transfer of heat from Earth's interior through the seafloor.",

    highHeatFlow:
      "High heat flow is commonly associated with mid-ocean ridges and tectonically active regions."
  },

  // ============================================================
  // GAS HYDRATES
  // ============================================================

  gasHydrates: {
    definition:
      "Ice-like crystalline structures in which gases, especially methane, are trapped within water molecules.",

    locations:
      "They occur in some marine sediments under suitable pressure and temperature conditions.",

    importance: [
      "carbon storage",
      "marine geology",
      "potential energy resource",
      "seafloor stability"
    ]
  },

  // ============================================================
  // MARINE SEDIMENT CORES
  // ============================================================

  sedimentCores: {
    definition:
      "Cylindrical samples of seafloor sediment used to study past and present marine conditions.",

    uses: [
      "paleoceanography",
      "climate reconstruction",
      "sediment history",
      "biogeochemistry",
      "microfossil analysis"
    ]
  },

  // ============================================================
  // OCEAN TIME SCALES
  // ============================================================

  timescales: {
    surfaceProcesses:
      "Surface ocean conditions can change over hours to days.",

    seasonal:
      "Many ocean processes vary strongly over seasonal cycles.",

    interannual:
      "ENSO produces important variations over years.",

    decadal:
      "Ocean circulation and climate variability can occur over decades.",

    centennial:
      "Long-term climate change can alter ocean properties over centuries.",

    geological:
      "Plate tectonics and sedimentation change ocean basins over millions of years."
  },

  // ============================================================
  // OCEAN MATHEMATICS
  // ============================================================

  equationsAndConcepts: {
    hydrostaticPressure:
      "Pressure increases with depth approximately according to the weight of water above.",

    density:
      "Seawater density depends primarily on temperature, salinity, and pressure.",

    waveRelationship:
      "Wave speed, wavelength, and frequency are related by c = λf.",

    coriolisParameter:
      "f = 2Ω sin(φ)",

    heatContent:
      "Ocean heat content depends on seawater heat capacity, density, temperature, and volume.",

    continuity:
      "Conservation of mass requires consistency between water inflow, outflow, and storage changes."
  },

  // ============================================================
  // MAJOR OCEANOGRAPHIC PHENOMENA
  // ============================================================

  phenomena: [
    "ocean currents",
    "gyres",
    "waves",
    "tides",
    "tsunamis",
    "upwelling",
    "downwelling",
    "thermohaline circulation",
    "ocean fronts",
    "eddies",
    "marine heatwaves",
    "ocean acidification",
    "coral bleaching",
    "harmful algal blooms",
    "hydrothermal vents",
    "cold seeps",
    "sea-ice formation",
    "sea-ice melting",
    "storm surge",
    "coastal erosion",
    "longshore transport",
    "seafloor spreading",
    "subduction",
    "deep-sea circulation",
    "bioluminescence",
    "marine snow",
    "ENSO",
    "ocean deoxygenation"
  ],

  // ============================================================
  // COMMON QUESTIONS
  // ============================================================

  commonQuestions: {
    "What is oceanography?":
      "Oceanography is the interdisciplinary scientific study of Earth's oceans and seas, including their physical, chemical, biological, and geological processes.",

    "What are the major branches of oceanography?":
      "The major branches include physical oceanography, chemical oceanography, biological oceanography, and marine geology.",

    "What is the largest ocean?":
      "The Pacific Ocean is the largest major ocean basin.",

    "What causes ocean currents?":
      "Ocean currents are driven by wind, density differences, pressure gradients, Earth's rotation, tides, and seafloor and coastal geometry.",

    "What causes tides?":
      "Tides are caused primarily by gravitational interactions involving the Moon and Sun together with Earth's rotation.",

    "What causes waves?":
      "Most surface ocean waves are generated by wind transferring energy to the water.",

    "What is a tsunami?":
      "A tsunami is a series of long-wavelength ocean waves caused by a large displacement of seawater, commonly from an undersea earthquake.",

    "What is upwelling?":
      "Upwelling is the movement of deeper, nutrient-rich water toward the surface.",

    "Why is upwelling important?":
      "Upwelling supplies nutrients to surface waters and can support high marine biological productivity.",

    "What is ocean acidification?":
      "Ocean acidification is the decrease in seawater pH associated mainly with ocean absorption of atmospheric carbon dioxide.",

    "What is a coral reef?":
      "A coral reef is a biologically constructed marine ecosystem dominated by reef-building corals and associated organisms.",

    "What is coral bleaching?":
      "Coral bleaching occurs when corals lose or expel much of their symbiotic algae, often because of environmental stress such as unusually warm water.",

    "What is the deep ocean?":
      "The deep ocean is the dark, cold, high-pressure region below the sunlit upper ocean.",

    "What is a hydrothermal vent?":
      "A hydrothermal vent is a seafloor opening where geothermally heated, chemically enriched water emerges from Earth's crust.",

    "What is the thermohaline circulation?":
      "Thermohaline circulation is large-scale ocean circulation influenced by density differences caused mainly by temperature and salinity.",

    "What is the Gulf Stream?":
      "The Gulf Stream is a powerful warm western boundary current in the North Atlantic.",

    "What is ENSO?":
      "ENSO is the El Niño–Southern Oscillation, a coupled ocean-atmosphere climate phenomenon centered in the tropical Pacific.",

    "What is El Niño?":
      "El Niño is the warm phase of ENSO involving unusual warming of central and eastern tropical Pacific waters and associated atmospheric changes.",

    "What is La Niña?":
      "La Niña is the cool phase of ENSO involving unusual cooling of central and eastern tropical Pacific waters and associated atmospheric changes.",

    "Why is the ocean important for climate?":
      "The ocean stores and transports enormous amounts of heat, exchanges gases with the atmosphere, and participates in global circulation and carbon cycling.",

    "What is sea level rise?":
      "Sea-level rise is a long-term increase in average ocean height driven mainly by thermal expansion and addition of water from melting land ice.",

    "What is marine snow?":
      "Marine snow consists of sinking particles of organic and inorganic material that transport carbon and nutrients toward the deep ocean.",

    "What is a seamount?":
      "A seamount is an underwater mountain that rises from the seafloor but does not reach the ocean surface.",

    "What is the Mariana Trench?":
      "The Mariana Trench is one of the deepest known ocean trenches and lies in the western Pacific near a subduction zone.",

    "What is ocean salinity?":
      "Ocean salinity describes the concentration of dissolved salts in seawater.",

    "Why is seawater salty?":
      "Seawater contains dissolved ions supplied by weathering of rocks, volcanic and hydrothermal processes, atmospheric inputs, river transport, and recycling within the ocean.",

    "Why is the deep ocean cold?":
      "Deep ocean water generally originates from cold high-latitude or polar regions and is isolated from direct solar heating.",

    "Why does the ocean have currents?":
      "Currents arise from wind stress, density differences, pressure gradients, Earth's rotation, tides, and interactions with coastlines and the seafloor."
  },

  // ============================================================
  // KEYWORDS FOR REZE ROUTER
  // ============================================================

  keywords: [
    "oceanography",
    "ocean",
    "oceans",
    "sea",
    "seas",
    "marine science",
    "physical oceanography",
    "chemical oceanography",
    "biological oceanography",
    "marine geology",
    "Pacific Ocean",
    "Atlantic Ocean",
    "Indian Ocean",
    "Southern Ocean",
    "Arctic Ocean",
    "seawater",
    "salinity",
    "ocean temperature",
    "sea temperature",
    "sea surface temperature",
    "density",
    "thermocline",
    "halocline",
    "pycnocline",
    "mixed layer",
    "deep ocean",
    "abyssal zone",
    "hadal zone",
    "photic zone",
    "twilight zone",
    "waves",
    "wave height",
    "wavelength",
    "wave period",
    "swell",
    "fetch",
    "tides",
    "high tide",
    "low tide",
    "spring tide",
    "neap tide",
    "tsunami",
    "tsunamis",
    "ocean current",
    "ocean currents",
    "surface currents",
    "deep currents",
    "gyre",
    "gyres",
    "Gulf Stream",
    "Kuroshio",
    "California Current",
    "Humboldt Current",
    "Peru Current",
    "Benguela Current",
    "Agulhas Current",
    "Brazil Current",
    "East Australian Current",
    "Antarctic Circumpolar Current",
    "thermohaline circulation",
    "overturning circulation",
    "AMOC",
    "upwelling",
    "downwelling",
    "Ekman transport",
    "eddy",
    "eddies",
    "ocean front",
    "equatorial ocean",
    "ENSO",
    "El Niño",
    "La Niña",
    "ocean chemistry",
    "ocean acidification",
    "carbon cycle",
    "marine carbon cycle",
    "carbon pump",
    "biological pump",
    "microbial carbon pump",
    "dissolved oxygen",
    "oxygen minimum zone",
    "ocean deoxygenation",
    "nutrients",
    "nitrogen",
    "phosphorus",
    "silicon",
    "iron",
    "phytoplankton",
    "zooplankton",
    "plankton",
    "marine food web",
    "marine ecosystem",
    "primary production",
    "marine biology",
    "marine biodiversity",
    "deep sea",
    "deep-sea",
    "marine snow",
    "hydrothermal vent",
    "hydrothermal vents",
    "cold seep",
    "cold seeps",
    "coral reef",
    "coral reefs",
    "coral bleaching",
    "mangrove",
    "mangroves",
    "seagrass",
    "seagrass meadow",
    "kelp forest",
    "estuaries",
    "estuary",
    "continental shelf",
    "continental slope",
    "abyssal plain",
    "mid-ocean ridge",
    "mid ocean ridge",
    "seafloor spreading",
    "deep sea trench",
    "ocean trench",
    "Mariana Trench",
    "subduction",
    "seamount",
    "seamounts",
    "guyot",
    "marine sediment",
    "turbidity current",
    "submarine landslide",
    "marine geology",
    "marine geophysics",
    "bathymetry",
    "sonar",
    "multibeam sonar",
    "side scan sonar",
    "satellite oceanography",
    "ocean satellite",
    "sea surface height",
    "sea level",
    "sea level rise",
    "ocean heat content",
    "air sea interaction",
    "marine heatwave",
    "marine heatwaves",
    "sea ice",
    "Arctic oceanography",
    "Southern Ocean",
    "marine pollution",
    "plastic pollution",
    "microplastics",
    "oil spill",
    "marine noise",
    "eutrophication",
    "harmful algal bloom",
    "overfishing",
    "marine conservation",
    "marine protected area",
    "MPA",
    "invasive species",
    "ballast water",
    "fisheries oceanography",
    "aquaculture",
    "marine biotechnology",
    "marine resources",
    "polymetallic nodules",
    "marine minerals",
    "offshore wind",
    "tidal energy",
    "wave energy",
    "paleoceanography",
    "marine sediment core",
    "ocean exploration",
    "research vessel",
    "CTD",
    "ADCP",
    "Argo",
    "Argo floats",
    "ocean glider",
    "AUV",
    "ROV",
    "underwater vehicle",
    "ocean buoy",
    "tide gauge",
    "ocean model",
    "operational oceanography",
    "coastal oceanography",
    "coastal erosion",
    "longshore transport",
    "rip current",
    "storm surge",
    "underwater acoustics",
    "bioluminescence",
    "marine mammals",
    "whales",
    "dolphins",
    "sea turtles",
    "marine invertebrates",
    "marine reptiles",
    "marine microbiology",
    "nitrogen cycle",
    "phosphorus cycle",
    "silicon cycle",
    "sulfur cycle",
    "remineralization",
    "decomposition",
    "carbonate system",
    "calcification",
    "carbonate sediments",
    "gas hydrates",
    "marine volcano",
    "seafloor volcanism",
    "marine heat flow",
    "blue economy"
  ]
};

// ============================================================
// DEFAULT EXPORT
// ============================================================

export default OCEANOGRAPHY_KNOWLEDGE;
