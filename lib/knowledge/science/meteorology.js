// lib/knowledge/science/meteorology.js
// ============================================================
// REZE SCIENCE KNOWLEDGE — METEOROLOGY
// Comprehensive meteorology and atmospheric science knowledge
// ============================================================

export const METEOROLOGY_KNOWLEDGE = {
  name: "Meteorology",
  category: "science",
  description:
    "The scientific study of Earth's atmosphere, weather, atmospheric processes, storms, climate interactions, and the physical and chemical processes that control atmospheric conditions.",

  // ============================================================
  // FUNDAMENTALS
  // ============================================================

  fundamentals: {
    definition:
      "Meteorology is the scientific study of the atmosphere and the physical processes responsible for weather.",

    atmosphere:
      "The atmosphere is the gaseous envelope surrounding Earth.",

    weather:
      "Weather describes the short-term state and behavior of the atmosphere at a particular place and time.",

    climate:
      "Climate describes long-term statistical patterns and variability of weather over regions and periods of time.",

    meteorologist:
      "A meteorologist is a scientist who studies the atmosphere and atmospheric processes.",

    majorQuestions: [
      "What causes wind?",
      "Why does rain form?",
      "How do clouds develop?",
      "Why do storms form?",
      "How do hurricanes develop?",
      "Why does atmospheric pressure change?",
      "How are weather forecasts produced?",
      "What causes lightning?",
      "How do fronts develop?",
      "How does the atmosphere transport heat?",
      "Why does atmospheric circulation occur?",
      "How do oceans influence weather?",
      "How does the atmosphere interact with Earth's surface?"
    ]
  },

  // ============================================================
  // ATMOSPHERIC COMPOSITION
  // ============================================================

  atmosphere: {
    composition: {
      nitrogen:
        "Nitrogen makes up about 78% of dry Earth's atmosphere by volume.",

      oxygen:
        "Oxygen makes up about 21% of dry Earth's atmosphere by volume.",

      argon:
        "Argon makes up about 0.93% of dry Earth's atmosphere.",

      carbonDioxide:
        "Carbon dioxide is a variable atmospheric gas important to the carbon cycle and Earth's energy balance.",

      waterVapor:
        "Water vapor is a highly variable atmospheric gas and is central to clouds, precipitation, and the water cycle.",

      traceGases: [
        "neon",
        "helium",
        "methane",
        "krypton",
        "hydrogen",
        "nitrous oxide",
        "ozone",
        "xenon"
      ]
    },

    aerosols: {
      definition:
        "Aerosols are tiny solid or liquid particles suspended in the atmosphere.",

      examples: [
        "dust",
        "sea salt",
        "smoke",
        "soot",
        "sulfate particles",
        "pollen",
        "volcanic ash",
        "organic particles"
      ],

      effects: [
        "cloud formation",
        "radiation scattering",
        "radiation absorption",
        "visibility reduction",
        "air quality changes"
      ]
    }
  },

  // ============================================================
  // ATMOSPHERIC LAYERS
  // ============================================================

  atmosphericLayers: {
    troposphere: {
      description:
        "The lowest major atmospheric layer and the layer where most weather occurs.",
      characteristics: [
        "contains most atmospheric water vapor",
        "temperature generally decreases with altitude",
        "contains clouds and most weather systems",
        "strong vertical mixing"
      ]
    },

    stratosphere: {
      description:
        "Atmospheric layer above the troposphere containing the major portion of atmospheric ozone.",
      characteristics: [
        "temperature generally increases with altitude",
        "relatively stable stratification",
        "contains the ozone layer",
        "commercial aircraft may cruise near the lower stratosphere"
      ]
    },

    mesosphere: {
      description:
        "Atmospheric layer above the stratosphere where temperature generally decreases with altitude.",
      importance:
        "Many meteoroids burn or ablate in this region."
    },

    thermosphere: {
      description:
        "Very high atmospheric layer in which temperature can increase strongly with altitude because of absorption of high-energy solar radiation.",
      phenomena: [
        "auroras",
        "ionization",
        "upper-atmospheric heating"
      ]
    },

    exosphere: {
      description:
        "The extremely thin outer region of Earth's atmosphere gradually transitioning toward interplanetary space."
    },

    ionosphere: {
      description:
        "Region of the upper atmosphere containing significant concentrations of charged particles.",
      importance: [
        "radio propagation",
        "auroras",
        "interaction with solar radiation",
        "space weather"
      ]
    }
  },

  // ============================================================
  // ATMOSPHERIC PRESSURE
  // ============================================================

  pressure: {
    definition:
      "Atmospheric pressure is the force exerted by the weight of air over a given area.",

    standardSeaLevelPressure:
      "Approximately 1013.25 hPa, or 1 atmosphere.",

    units: [
      "pascal",
      "hectopascal",
      "millibar",
      "atmosphere",
      "inches of mercury"
    ],

    highPressure: {
      description:
        "Regions where atmospheric pressure is relatively high.",
      typicalWeather:
        "Often associated with sinking air and generally more stable conditions."
    },

    lowPressure: {
      description:
        "Regions where atmospheric pressure is relatively low.",
      typicalWeather:
        "Often associated with rising air, clouds, precipitation, and unsettled weather."
    },

    pressureGradient:
      "A horizontal difference in atmospheric pressure over distance.",

    pressureGradientForce:
      "Force produced by horizontal pressure differences that contributes to atmospheric motion."
  },

  // ============================================================
  // TEMPERATURE
  // ============================================================

  temperature: {
    definition:
      "Temperature describes the thermal state of the atmosphere and is related to the average kinetic energy of particles.",

    scales: {
      celsius: {
        freezingWater:
          "0 °C under standard atmospheric pressure",
        boilingWater:
          "100 °C under standard atmospheric pressure"
      },

      fahrenheit: {
        freezingWater:
          "32 °F",
        boilingWater:
          "212 °F"
      },

      kelvin: {
        description:
          "Absolute temperature scale used extensively in atmospheric science."
      }
    },

    controls: [
      "solar radiation",
      "surface properties",
      "latitude",
      "altitude",
      "cloud cover",
      "humidity",
      "ocean currents",
      "atmospheric circulation",
      "season",
      "time of day"
    ]
  },

  // ============================================================
  // HEAT TRANSFER
  // ============================================================

  heatTransfer: {
    conduction:
      "Transfer of thermal energy through direct molecular interaction.",

    convection:
      "Vertical or three-dimensional transport of heat through moving fluids.",

    advection:
      "Horizontal transport of heat or other atmospheric properties by wind.",

    radiation:
      "Transfer of energy through electromagnetic radiation.",

    latentHeat:
      "Energy absorbed or released during a phase change without directly changing temperature.",

    sensibleHeat:
      "Heat transfer associated with a measurable temperature change."
  },

  // ============================================================
  // SOLAR RADIATION
  // ============================================================

  solarRadiation: {
    definition:
      "Electromagnetic energy emitted by the Sun that drives most atmospheric and surface processes.",

    spectrum: [
      "ultraviolet",
      "visible light",
      "infrared"
    ],

    controls: [
      "solar angle",
      "day length",
      "latitude",
      "season",
      "clouds",
      "surface reflectivity",
      "atmospheric composition"
    ],

    insolation:
      "Incoming solar radiation received by Earth or a specified surface."
  },

  // ============================================================
  // EARTH'S ENERGY BALANCE
  // ============================================================

  energyBalance: {
    definition:
      "Earth's energy balance describes the relationship between incoming solar energy and outgoing energy emitted back toward space.",

    components: [
      "incoming solar radiation",
      "reflection",
      "absorption by atmosphere",
      "absorption by land",
      "absorption by oceans",
      "outgoing infrared radiation"
    ],

    albedo:
      "The fraction of incoming radiation reflected by a surface or system.",

    greenhouseEffect:
      "Warming caused when atmospheric gases absorb and re-emit outgoing infrared radiation.",

    greenhouseGases: [
      "water vapor",
      "carbon dioxide",
      "methane",
      "nitrous oxide",
      "ozone"
    ]
  },

  // ============================================================
  // HUMIDITY
  // ============================================================

  humidity: {
    definition:
      "Humidity describes the amount of water vapor present in air.",

    absoluteHumidity:
      "Mass of water vapor per unit volume of air.",

    specificHumidity:
      "Mass of water vapor per unit mass of moist air.",

    mixingRatio:
      "Ratio of the mass of water vapor to the mass of dry air.",

    relativeHumidity:
      "Ratio of the actual water vapor amount to the saturation amount at a given temperature, usually expressed as a percentage.",

    dewPoint:
      "Temperature to which air must be cooled at constant pressure and moisture content for saturation to occur.",

    frostPoint:
      "Temperature at which air becomes saturated with respect to ice."
  },

  // ============================================================
  // ATMOSPHERIC STABILITY
  // ============================================================

  stability: {
    definition:
      "Atmospheric stability describes how strongly the atmosphere resists or encourages vertical displacement of air.",

    stable:
      "A stable atmosphere tends to suppress vertical motion.",

    unstable:
      "An unstable atmosphere tends to enhance vertical motion.",

    neutral:
      "A neutral atmosphere neither strongly suppresses nor enhances vertical displacement.",

    importance: [
      "cloud development",
      "thunderstorm formation",
      "turbulence",
      "pollution dispersion",
      "convection"
    ]
  },

  // ============================================================
  // ADIABATIC PROCESSES
  // ============================================================

  adiabaticProcesses: {
    definition:
      "An adiabatic process changes air temperature primarily through expansion or compression without direct heat exchange with the surrounding environment.",

    risingAir:
      "Rising air expands because surrounding pressure decreases and generally cools.",

    sinkingAir:
      "Sinking air is compressed as pressure increases and generally warms.",

    dryAdiabaticLapseRate:
      "Unsaturated air cools at approximately 9.8 °C per kilometer of ascent.",

    moistAdiabaticLapseRate:
      "Saturated air generally cools at a lower rate than dry air because condensation releases latent heat."
  },

  // ============================================================
  // CLOUDS
  // ============================================================

  clouds: {
    definition:
      "Clouds are visible collections of tiny liquid water droplets, ice crystals, or both suspended in the atmosphere.",

    formation:
      "Clouds commonly form when moist air rises, expands, cools, and reaches saturation.",

    condensationNuclei:
      "Small particles that provide surfaces on which water vapor can condense or freeze.",

    majorFamilies: {
      cirrus:
        "High-level clouds composed mainly of ice crystals and commonly appearing thin or wispy.",

      cumulus:
        "Clouds with a puffy or heaped appearance, often associated with convection.",

      stratus:
        "Layer-like clouds that spread horizontally across large areas.",

      nimbus:
        "Term associated with precipitation-producing clouds."
    },

    cloudTypes: [
      "cirrus",
      "cirrostratus",
      "cirrocumulus",
      "altostratus",
      "altocumulus",
      "stratus",
      "stratocumulus",
      "nimbostratus",
      "cumulus",
      "cumulonimbus"
    ],

    verticalDevelopment:
      "Cumulonimbus clouds can grow through a large depth of the troposphere."
  },

  // ============================================================
  // PRECIPITATION
  // ============================================================

  precipitation: {
    definition:
      "Precipitation is water that falls from clouds to Earth's surface.",

    forms: [
      "rain",
      "drizzle",
      "snow",
      "sleet",
      "freezing rain",
      "hail",
      "graupel"
    ],

    rain:
      "Liquid water drops large enough to fall from clouds to the surface.",

    snow:
      "Precipitation consisting mainly of ice crystals and snowflakes.",

    sleet:
      "Small ice pellets produced when precipitation partially melts and refreezes before reaching the ground.",

    freezingRain:
      "Liquid precipitation that freezes upon contact with surfaces at or below freezing.",

    hail:
      "Balls or irregular lumps of ice produced within strong convective storms.",

    graupel:
      "Soft ice pellets formed when supercooled droplets freeze onto snow crystals."
  },

  // ============================================================
  // PRECIPITATION PROCESSES
  // ============================================================

  precipitationProcesses: {
    collisionCoalescence:
      "Cloud droplets collide and merge, especially in relatively warm clouds.",

    BergeronProcess:
      "Ice crystals grow at the expense of supercooled water droplets because of differences in saturation vapor pressure over ice and liquid water.",

    convection:
      "Strong upward motion can support large hydrometeors and intense precipitation.",

    seederFeeder:
      "Interaction between precipitation falling from upper cloud layers and lower cloud layers can enhance precipitation."
  },

  // ============================================================
  // WIND
  // ============================================================

  wind: {
    definition:
      "Wind is the movement of air relative to Earth's surface.",

    primaryDrivers: [
      "pressure-gradient force",
      "Coriolis effect",
      "friction",
      "gravity"
    ],

    pressureGradientForce:
      "Accelerates air from higher pressure toward lower pressure.",

    coriolisEffect:
      "An apparent deflection of moving air caused by Earth's rotation.",

    coriolisDirection: {
      northernHemisphere:
        "Motion is deflected to the right.",
      southernHemisphere:
        "Motion is deflected to the left."
    },

    friction:
      "Near Earth's surface, friction slows wind and modifies its direction relative to pressure-gradient and Coriolis forces."
  },

  // ============================================================
  // WIND MEASUREMENT
  // ============================================================

  windMeasurement: {
    speed:
      "Usually measured with an anemometer.",

    direction:
      "Usually measured using a wind vane or similar instrument.",

    commonUnits: [
      "meters per second",
      "kilometers per hour",
      "miles per hour",
      "knots"
    ],

    beaufortScale:
      "A qualitative scale historically used to estimate wind force based on observed conditions."
  },

  // ============================================================
  // LOCAL WINDS
  // ============================================================

  localWinds: {
    seaBreeze:
      "Wind that generally moves from sea toward land during the day because land heats faster than water.",

    landBreeze:
      "Wind that generally moves from land toward sea at night because land cools faster than water.",

    valleyBreeze:
      "Upslope flow that commonly develops during daytime heating in mountainous regions.",

    mountainBreeze:
      "Downslope flow that commonly develops at night as mountain slopes cool.",

    katabaticWind:
      "Dense, cold air flowing downslope under gravity.",

    anabaticWind:
      "Warm air moving upslope, often due to daytime surface heating."
  },

  // ============================================================
  // GLOBAL ATMOSPHERIC CIRCULATION
  // ============================================================

  globalCirculation: {
    definition:
      "Large-scale atmospheric circulation transports heat and momentum around the planet.",

    circulationCells: {
      hadleyCell:
        "Tropical circulation cell characterized by rising air near the Intertropical Convergence Zone and sinking air in subtropical regions.",

      ferrelCell:
        "Mid-latitude circulation cell that interacts strongly with transient weather systems.",

      polarCell:
        "High-latitude circulation cell involving rising and sinking branches near polar regions."
    },

    majorWindBelts: [
      "trade winds",
      "westerlies",
      "polar easterlies"
    ],

    jetStreams: [
      "subtropical jet",
      "polar front jet",
      "polar night jet"
    ]
  },

  // ============================================================
  // HADLEY CIRCULATION
  // ============================================================

  hadleyCirculation: {
    process: [
      "strong solar heating near the equator",
      "warm air rises",
      "upper-level poleward flow",
      "air cools and sinks in subtropics",
      "surface flow returns toward the tropics"
    ],

    intertropicalConvergenceZone:
      "A near-equatorial region where trade winds converge and rising air commonly produces clouds and precipitation.",

    subtropicalHighs:
      "Large-scale regions of relatively high pressure associated with descending branches of the Hadley circulation."
  },

  // ============================================================
  // JET STREAMS
  // ============================================================

  jetStreams: {
    definition:
      "Narrow bands of strong winds near the upper troposphere.",

    causes: [
      "strong horizontal temperature gradients",
      "pressure differences",
      "Earth's rotation"
    ],

    importance: [
      "steering weather systems",
      "aircraft routing",
      "storm development",
      "transport of heat and momentum"
    ],

    polarJet:
      "Jet associated with strong temperature contrasts between polar and lower-latitude air masses.",

    subtropicalJet:
      "Jet located near the poleward edge of the Hadley circulation."
  },

  // ============================================================
  // FRONT SYSTEMS
  // ============================================================

  fronts: {
    definition:
      "A front is a transition zone between air masses with different temperature, humidity, or density characteristics.",

    coldFront: {
      description:
        "A colder air mass advances and replaces warmer air.",
      typicalWeather: [
        "showers",
        "thunderstorms",
        "gusty winds",
        "temperature drop"
      ]
    },

    warmFront: {
      description:
        "A warmer air mass advances over or replaces colder air.",
      typicalWeather: [
        "layered clouds",
        "widespread precipitation",
        "gradual temperature increase"
      ]
    },

    stationaryFront:
      "A front with little net movement.",

    occludedFront:
      "A front formed when a cold front catches up with a warm front.",

    dryline:
      "A boundary separating air masses with a strong contrast in moisture."
  },

  // ============================================================
  // AIR MASSES
  // ============================================================

  airMasses: {
    definition:
      "An air mass is a large body of air with relatively uniform temperature and moisture characteristics.",

    classification: {
      continental:
        "Forms mainly over land and tends to be relatively dry.",

      maritime:
        "Forms mainly over water and tends to be relatively moist.",

      tropical:
        "Originates in warm tropical or subtropical regions.",

      polar:
        "Originates in cold high-latitude regions.",

      arctic:
        "Originates in extremely cold polar regions."
    },

    combinations: [
      "continental tropical",
      "continental polar",
      "continental arctic",
      "maritime tropical",
      "maritime polar"
    ]
  },

  // ============================================================
  // CYCLONES AND ANTICYCLONES
  // ============================================================

  pressureSystems: {
    cyclone:
      "A weather system characterized by relatively low pressure and organized circulation.",

    anticyclone:
      "A weather system characterized by relatively high pressure and circulation opposite to that of a cyclone.",

    northernHemisphere: {
      cycloneRotation:
        "Generally counterclockwise.",
      anticycloneRotation:
        "Generally clockwise."
    },

    southernHemisphere: {
      cycloneRotation:
        "Generally clockwise.",
      anticycloneRotation:
        "Generally counterclockwise."
    }
  },

  // ============================================================
  // THUNDERSTORMS
  // ============================================================

  thunderstorms: {
    definition:
      "A thunderstorm is a convective storm containing lightning and thunder.",

    ingredients: [
      "moisture",
      "instability",
      "lifting mechanism"
    ],

    lifeCycle: {
      cumulusStage:
        "Strong updrafts dominate as the storm develops.",

      matureStage:
        "Updrafts and downdrafts coexist and precipitation is often strongest.",

      dissipatingStage:
        "Downdrafts dominate and progressively weaken the storm."
    },

    hazards: [
      "lightning",
      "hail",
      "damaging winds",
      "tornadoes",
      "flash flooding",
      "heavy rain"
    ]
  },

  // ============================================================
  // LIGHTNING
  // ============================================================

  lightning: {
    definition:
      "Lightning is a large electrical discharge occurring within clouds, between clouds, or between clouds and the ground.",

    chargeSeparation:
      "Complex collisions among ice particles, supercooled water, and graupel within thunderstorms contribute to electrical charge separation.",

    types: [
      "cloud-to-ground",
      "intra-cloud",
      "cloud-to-cloud",
      "cloud-to-air"
    ],

    thunder:
      "Sound produced by rapid expansion of air heated by a lightning channel."
  },

  // ============================================================
  // TORNADOES
  // ============================================================

  tornadoes: {
    definition:
      "A tornado is a violently rotating column of air extending from a convective cloud toward the surface.",

    formation:
      "Many strong tornadoes develop from severe thunderstorms with favorable wind shear and rotating updrafts.",

    ingredients: [
      "moisture",
      "instability",
      "lift",
      "vertical wind shear",
      "storm-scale rotation"
    ],

    measurement:
      "Tornado damage is commonly classified using the Enhanced Fujita scale.",

    hazards: [
      "extreme winds",
      "flying debris",
      "structural damage",
      "rapid changes in wind direction",
      "localized destruction"
    ]
  },

  // ============================================================
  // TROPICAL CYCLONES
  // ============================================================

  tropicalCyclones: {
    definition:
      "A tropical cyclone is a rotating low-pressure system that develops over sufficiently warm tropical or subtropical ocean waters and derives energy primarily from organized convection and ocean-atmosphere heat exchange.",

    regionalNames: [
      "hurricane",
      "typhoon",
      "tropical cyclone"
    ],

    formationRequirements: [
      "warm ocean water",
      "sufficient moisture",
      "atmospheric instability",
      "pre-existing disturbance",
      "adequate Coriolis effect",
      "relatively low vertical wind shear"
    ],

    structure: {
      eye:
        "Relatively calm central region of a mature tropical cyclone.",

      eyewall:
        "Ring of intense thunderstorms surrounding the eye and commonly containing the strongest winds.",

      rainbands:
        "Curved bands of showers and thunderstorms surrounding the central circulation."
    },

    hazards: [
      "extreme winds",
      "storm surge",
      "heavy rainfall",
      "river flooding",
      "flash flooding",
      "landslides",
      "large waves",
      "tornadoes"
    ],

    intensityFactors: [
      "sea surface temperature",
      "ocean heat content",
      "vertical wind shear",
      "moisture",
      "upper-level outflow",
      "land interaction"
    ]
  },

  // ============================================================
  // TROPICAL CYCLONE CATEGORIES
  // ============================================================

  tropicalCycloneClassification: {
    note:
      "Exact classification thresholds vary among regional meteorological agencies.",

    generalStages: [
      "tropical disturbance",
      "tropical depression",
      "tropical storm",
      "hurricane/typhoon or equivalent regional category"
    ],

    saffirSimpson:
      "A five-category scale used for hurricanes based primarily on maximum sustained wind speed."
  },

  // ============================================================
  // STORM SURGE
  // ============================================================

  stormSurge: {
    definition:
      "An abnormal rise of seawater above the predicted astronomical tide caused primarily by a storm's winds and atmospheric pressure.",

    factors: [
      "wind speed",
      "storm size",
      "storm track",
      "coastal shape",
      "bathymetry",
      "angle of approach",
      "atmospheric pressure"
    ],

    danger:
      "Storm surge can cause severe coastal flooding and is one of the most dangerous hazards associated with major tropical cyclones."
  },

  // ============================================================
  // WEATHER SYSTEMS
  // ============================================================

  weatherSystems: {
    lowPressure:
      "Large-scale region of relatively low atmospheric pressure.",

    highPressure:
      "Large-scale region of relatively high atmospheric pressure.",

    trough:
      "An elongated region of relatively low pressure.",

    ridge:
      "An elongated region of relatively high pressure.",

    upperLevelLow:
      "Low-pressure circulation located primarily in the middle or upper atmosphere.",

    blockingHigh:
      "A persistent high-pressure pattern that can slow or redirect normal atmospheric flow."
  },

  // ============================================================
  // SEVERE WEATHER
  // ============================================================

  severeWeather: {
    hazards: [
      "severe thunderstorms",
      "tornadoes",
      "large hail",
      "damaging winds",
      "flash floods",
      "tropical cyclones",
      "blizzards",
      "ice storms",
      "heat waves",
      "cold waves",
      "dust storms"
    ]
  },

  // ============================================================
  // FLOODS
  // ============================================================

  floods: {
    definition:
      "A flood occurs when water temporarily covers land that is normally dry.",

    types: [
      "river flood",
      "flash flood",
      "coastal flood",
      "urban flood",
      "pluvial flood",
      "ice-jam flood"
    ],

    causes: [
      "heavy rainfall",
      "snowmelt",
      "storm surge",
      "river overflow",
      "dam failure",
      "poor drainage",
      "tropical cyclones"
    ],

    flashFlood:
      "A rapid-onset flood that can develop within a short period, particularly after intense rainfall."
  },

  // ============================================================
  // DROUGHT
  // ============================================================

  drought: {
    definition:
      "A prolonged period of abnormally low water availability relative to expected conditions.",

    types: [
      "meteorological drought",
      "agricultural drought",
      "hydrological drought",
      "socioeconomic drought"
    ],

    causes: [
      "persistent precipitation deficits",
      "high temperatures",
      "changes in atmospheric circulation",
      "soil moisture loss",
      "reduced snowpack"
    ],

    impacts: [
      "crop losses",
      "water shortages",
      "wildfire risk",
      "ecosystem stress",
      "reduced reservoir levels"
    ]
  },

  // ============================================================
  // HEAT WAVES
  // ============================================================

  heatWaves: {
    definition:
      "A prolonged period of unusually hot conditions relative to a location's typical climate.",

    factors: [
      "persistent high pressure",
      "subsidence",
      "clear skies",
      "dry soils",
      "warm air advection",
      "land-atmosphere feedbacks"
    ],

    impacts: [
      "heat stress",
      "increased energy demand",
      "crop damage",
      "wildfire risk",
      "water demand"
    ]
  },

  // ============================================================
  // COLD WAVES
  // ============================================================

  coldWaves: {
    definition:
      "A period of unusually cold weather relative to typical local conditions.",

    causes: [
      "cold-air advection",
      "polar air outbreaks",
      "jet-stream changes",
      "blocking patterns",
      "snow-covered surfaces"
    ]
  },

  // ============================================================
  // WINTER WEATHER
  // ============================================================

  winterWeather: {
    hazards: [
      "heavy snow",
      "blizzards",
      "freezing rain",
      "sleet",
      "ice accumulation",
      "extreme cold",
      "lake-effect snow",
      "avalanche conditions"
    ],

    blizzard:
      "A severe snowstorm characterized by strong winds, blowing or falling snow, and greatly reduced visibility for a sustained period.",

    lakeEffectSnow:
      "Snow produced when cold air moves over relatively warmer lake water, gaining heat and moisture before rising over nearby land."
  },

  // ============================================================
  // FOG
  // ============================================================

  fog: {
    definition:
      "A cloud at or very near Earth's surface that reduces horizontal visibility.",

    types: [
      "radiation fog",
      "advection fog",
      "upslope fog",
      "steam fog",
      "evaporation fog",
      "freezing fog"
    ],

    formation:
      "Fog commonly forms when near-surface air reaches saturation."
  },

  // ============================================================
  // VISIBILITY
  // ============================================================

  visibility: {
    definition:
      "The greatest distance at which an object can be clearly recognized under specified conditions.",

    reducingFactors: [
      "fog",
      "mist",
      "rain",
      "snow",
      "dust",
      "smoke",
      "haze",
      "aerosols"
    ]
  },

  // ============================================================
  // HAZE AND AIRBORNE PARTICLES
  // ============================================================

  haze: {
    definition:
      "Reduced atmospheric clarity caused by suspended particles or gases.",

    sources: [
      "pollution",
      "wildfire smoke",
      "dust",
      "aerosols",
      "chemical reactions"
    ]
  },

  // ============================================================
  // DUST STORMS
  // ============================================================

  dustStorms: {
    definition:
      "Strong winds that lift and transport large amounts of dust or fine sediment.",

    causes: [
      "dry soil",
      "strong winds",
      "drought",
      "land degradation",
      "frontal passages",
      "thunderstorm outflows"
    ],

    impacts: [
      "poor visibility",
      "transport disruption",
      "air quality problems",
      "soil loss",
      "respiratory irritation"
    ]
  },

  // ============================================================
  // ATMOSPHERIC OPTICS
  // ============================================================

  atmosphericOptics: {
    rainbow:
      "An optical phenomenon produced by refraction, reflection, and dispersion of sunlight in water droplets.",

    halo:
      "An optical phenomenon produced by interaction of light with ice crystals.",

    sundog:
      "Bright spots appearing beside the Sun, commonly produced by refraction through plate-shaped ice crystals.",

    corona:
      "A series of colored rings around the Sun or Moon caused by diffraction by small droplets or particles.",

    glory:
      "A circular optical phenomenon produced by backscattering and diffraction around the antisolar point.",

    mirage:
      "An optical phenomenon caused by refraction through layers of air with different temperatures and densities."
  },

  // ============================================================
  // AURORAS
  // ============================================================

  auroras: {
    definition:
      "Auroras are luminous displays produced when energetic charged particles interact with gases in Earth's upper atmosphere.",

    northernLights:
      "Aurora borealis in the Northern Hemisphere.",

    southernLights:
      "Aurora australis in the Southern Hemisphere.",

    colors: [
      "green",
      "red",
      "blue",
      "purple"
    ],

    connectionToSpaceWeather:
      "Strong auroral activity is often associated with enhanced solar activity and geomagnetic disturbances."
  },

  // ============================================================
  // SPACE WEATHER
  // ============================================================

  spaceWeather: {
    definition:
      "Space weather describes changing conditions in near-Earth space driven largely by solar activity.",

    phenomena: [
      "solar flares",
      "coronal mass ejections",
      "solar energetic particles",
      "geomagnetic storms",
      "solar wind variations"
    ],

    effects: [
      "auroras",
      "radio communication disruptions",
      "satellite disturbances",
      "navigation errors",
      "power-grid impacts"
    ]
  },

  // ============================================================
  // ATMOSPHERIC ELECTRICITY
  // ============================================================

  atmosphericElectricity: {
    definition:
      "Study of electrical charges, fields, and currents in Earth's atmosphere.",

    phenomena: [
      "lightning",
      "fair-weather electric field",
      "thunderstorm electrification",
      "sprites",
      "elves",
      "blue jets"
    ],

    sprites:
      "Large transient electrical discharges occurring above some thunderstorms in the upper atmosphere.",

    elves:
      "Very brief expanding optical emissions in the upper atmosphere associated with electromagnetic pulses from lightning.",

    blueJets:
      "Narrow upward-moving electrical discharges that can emerge from thunderstorm tops."
  },

  // ============================================================
  // MESOSCALE METEOROLOGY
  // ============================================================

  mesoscaleMeteorology: {
    definition:
      "Study of atmospheric phenomena smaller than synoptic-scale systems but larger than individual turbulent eddies.",

    phenomena: [
      "thunderstorms",
      "sea breezes",
      "squall lines",
      "mesoscale convective systems",
      "mountain waves",
      "land-breeze circulations"
    ]
  },

  // ============================================================
  // MESOSCALE CONVECTIVE SYSTEMS
  // ============================================================

  mesoscaleConvectiveSystems: {
    definition:
      "Organized groups of thunderstorms that persist for several hours or longer and can cover large regions.",

    types: [
      "squall lines",
      "mesoscale convective complexes",
      "bow echoes"
    ],

    hazards: [
      "damaging winds",
      "heavy rainfall",
      "flash flooding",
      "large hail",
      "tornadoes"
    ]
  },

  // ============================================================
  // SYNOPTIC METEOROLOGY
  // ============================================================

  synopticMeteorology: {
    definition:
      "Study and analysis of large-scale weather systems using observations and weather maps.",

    systems: [
      "high-pressure systems",
      "low-pressure systems",
      "fronts",
      "troughs",
      "ridges",
      "jet streams"
    ]
  },

  // ============================================================
  // NUMERICAL WEATHER PREDICTION
  // ============================================================

  numericalWeatherPrediction: {
    definition:
      "Use of mathematical models and computers to simulate the atmosphere and forecast future weather.",

    components: [
      "atmospheric observations",
      "data assimilation",
      "physical equations",
      "numerical models",
      "initial conditions",
      "boundary conditions",
      "ensemble forecasting"
    ],

    equations: [
      "conservation of mass",
      "conservation of momentum",
      "conservation of energy",
      "thermodynamic equations",
      "moisture equations"
    ]
  },

  // ============================================================
  // WEATHER FORECASTING
  // ============================================================

  weatherForecasting: {
    definition:
      "The prediction of future atmospheric conditions using observations, physical understanding, statistical methods, and numerical models.",

    process: [
      "collect observations",
      "quality control data",
      "assimilate observations",
      "initialize numerical models",
      "run forecast models",
      "compare model guidance",
      "analyze ensembles",
      "produce forecast",
      "communicate uncertainty"
    ],

    forecastRanges: {
      nowcasting:
        "Very short-range forecasting, often focused on the next few hours.",

      shortRange:
        "Forecasts covering roughly the next several days.",

      mediumRange:
        "Forecasts extending beyond the short range, often approximately a week or more depending on the forecasting system.",

      extendedRange:
        "Forecasts extending into the subseasonal period.",

      seasonal:
        "Forecasts describing probabilities or anomalies over seasons rather than precise daily weather."
    }
  },

  // ============================================================
  // WEATHER OBSERVATIONS
  // ============================================================

  observations: {
    surfaceStations: [
      "temperature",
      "pressure",
      "humidity",
      "wind",
      "precipitation",
      "visibility"
    ],

    radiosonde:
      "Instrument package carried by a weather balloon to measure atmospheric conditions vertically.",

    weatherRadar:
      "Remote-sensing system that detects precipitation and can estimate its location, intensity, and movement.",

    satellite:
      "Space-based instruments used to observe clouds, atmospheric moisture, temperature, land surfaces, oceans, and weather systems."
  },

  // ============================================================
  // RADAR METEOROLOGY
  // ============================================================

  radarMeteorology: {
    definition:
      "Use of radar systems to observe precipitation and atmospheric targets.",

    principles: [
      "electromagnetic pulse transmission",
      "backscatter",
      "range measurement",
      "reflectivity",
      "Doppler velocity"
    ],

    dopplerRadar:
      "Radar capable of estimating radial motion of targets using the Doppler effect.",

    applications: [
      "rainfall monitoring",
      "storm tracking",
      "wind estimation",
      "hail detection",
      "tornado detection",
      "short-term forecasting"
    ],

    reflectivity:
      "A measure related to the strength of radar energy returned from targets such as precipitation particles."
  },

  // ============================================================
  // WEATHER SATELLITES
  // ============================================================

  satelliteMeteorology: {
    types: {
      geostationary:
        "Satellites that orbit at approximately geostationary altitude and remain over nearly the same longitude relative to Earth.",

      polarOrbiting:
        "Satellites that travel in near-polar orbits and provide global coverage over time."
    },

    instruments: [
      "visible imagers",
      "infrared imagers",
      "water-vapor channels",
      "microwave sensors",
      "sounders"
    ],

    applications: [
      "cloud monitoring",
      "storm tracking",
      "sea surface temperature",
      "atmospheric moisture",
      "fire detection",
      "weather analysis"
    ]
  },

  // ============================================================
  // ATMOSPHERIC SOUNDINGS
  // ============================================================

  soundings: {
    definition:
      "Measurements of atmospheric properties as a function of height.",

    measuredVariables: [
      "temperature",
      "dew point",
      "pressure",
      "wind speed",
      "wind direction"
    ],

    importance: [
      "forecasting",
      "storm analysis",
      "stability assessment",
      "aviation",
      "research"
    ]
  },

  // ============================================================
  // ATMOSPHERIC THERMODYNAMICS
  // ============================================================

  thermodynamics: {
    firstLaw:
      "Energy is conserved; changes in internal energy are related to heat transfer and work.",

    secondLaw:
      "Natural thermodynamic processes have a preferred direction associated with increasing entropy.",

    potentialTemperature:
      "Temperature an air parcel would have if brought adiabatically to a standard reference pressure.",

    equivalentPotentialTemperature:
      "A thermodynamic quantity useful for analyzing moist atmospheric processes and stability."
  },

  // ============================================================
  // ATMOSPHERIC DYNAMICS
  // ============================================================

  atmosphericDynamics: {
    definition:
      "Study of atmospheric motion and the forces controlling it.",

    majorForces: [
      "pressure-gradient force",
      "Coriolis force",
      "friction",
      "gravity",
      "centrifugal effect"
    ],

    geostrophicWind:
      "Wind resulting when the horizontal pressure-gradient force is balanced by the Coriolis force, approximately valid above the friction layer.",

    gradientWind:
      "Curved-flow wind in which pressure-gradient, Coriolis, and curvature effects are considered."
  },

  // ============================================================
  // PLANETARY BOUNDARY LAYER
  // ============================================================

  boundaryLayer: {
    definition:
      "Lowest part of the atmosphere directly influenced by Earth's surface over relatively short timescales.",

    processes: [
      "friction",
      "turbulence",
      "surface heating",
      "surface cooling",
      "moisture exchange",
      "momentum transfer"
    ],

    diurnalCycle:
      "The boundary layer commonly grows during daytime heating and becomes more stable near the surface at night."
  },

  // ============================================================
  // TURBULENCE
  // ============================================================

  turbulence: {
    definition:
      "Irregular, chaotic atmospheric motion involving eddies and fluctuations across many scales.",

    causes: [
      "surface friction",
      "convection",
      "wind shear",
      "mountain waves",
      "weather fronts",
      "jet streams"
    ],

    aviationImportance:
      "Atmospheric turbulence can affect aircraft comfort, operations, and safety."
  },

  // ============================================================
  // MOUNTAIN METEOROLOGY
  // ============================================================

  mountainMeteorology: {
    processes: [
      "orographic lifting",
      "downslope flow",
      "mountain waves",
      "foehn winds",
      "valley circulations",
      "cold-air pooling"
    ],

    orographicLift:
      "Air is forced upward when it encounters elevated terrain.",

    rainShadow:
      "A relatively dry region on the downwind side of mountains caused partly by precipitation and descending air after orographic lifting.",

    foehn:
      "A warm, dry downslope wind produced when air descends on the lee side of mountains."
  },

  // ============================================================
  // OROGRAPHIC PRECIPITATION
  // ============================================================

  orographicPrecipitation: {
    definition:
      "Precipitation caused or enhanced when moist air is lifted over terrain.",

    windwardSide:
      "The side facing prevailing moist airflow, often receiving enhanced precipitation.",

    leewardSide:
      "The sheltered side where descending air can become warmer and drier."
  },

  // ============================================================
  // URBAN METEOROLOGY
  // ============================================================

  urbanMeteorology: {
    urbanHeatIsland:
      "Urban areas are often warmer than surrounding rural areas because of built surfaces, reduced vegetation, waste heat, and altered radiation and airflow.",

    causes: [
      "concrete",
      "asphalt",
      "reduced vegetation",
      "building geometry",
      "waste heat",
      "reduced nighttime cooling"
    ],

    effects: [
      "higher nighttime temperatures",
      "modified local winds",
      "changes in convection",
      "increased cooling demand"
    ]
  },

  // ============================================================
  // AIR POLLUTION METEOROLOGY
  // ============================================================

  airPollutionMeteorology: {
    definition:
      "Study of how atmospheric conditions affect the emission, transport, transformation, dispersion, and removal of pollutants.",

    factors: [
      "wind",
      "temperature",
      "stability",
      "humidity",
      "precipitation",
      "boundary-layer depth",
      "topography"
    ],

    temperatureInversion:
      "A layer in which temperature increases with height, creating enhanced stability and potentially limiting vertical mixing.",

    pollutionTrapping:
      "Stable atmospheric conditions, weak winds, and shallow boundary layers can allow pollutants to accumulate near the surface."
  },

  // ============================================================
  // ATMOSPHERIC CHEMISTRY
  // ============================================================

  atmosphericChemistry: {
    definition:
      "Study of chemical composition and chemical reactions occurring in Earth's atmosphere.",

    importantSpecies: [
      "ozone",
      "nitrogen oxides",
      "sulfur dioxide",
      "carbon monoxide",
      "volatile organic compounds",
      "aerosols",
      "methane",
      "carbon dioxide"
    ],

    processes: [
      "photochemical reactions",
      "oxidation",
      "aerosol formation",
      "deposition",
      "transport",
      "chemical transformation"
    ]
  },

  // ============================================================
  // OZONE
  // ============================================================

  ozone: {
    formula:
      "O₃",

    stratosphericOzone:
      "Ozone in the stratosphere absorbs much of the Sun's harmful ultraviolet radiation.",

    troposphericOzone:
      "Ozone near Earth's surface is an air pollutant and can form through photochemical reactions involving precursor pollutants.",

    ozoneLayer:
      "Region of enhanced ozone concentration in the stratosphere.",

    ozoneDepletion:
      "Reduction in stratospheric ozone caused by chemical reactions involving human-produced halogen compounds and other processes."
  },

  // ============================================================
  // GREENHOUSE GASES
  // ============================================================

  greenhouseGases: {
    definition:
      "Atmospheric gases that absorb and emit infrared radiation.",

    majorGases: [
      "water vapor",
      "carbon dioxide",
      "methane",
      "nitrous oxide",
      "ozone"
    ],

    role:
      "Greenhouse gases are essential to Earth's natural greenhouse effect, while changes in their concentrations can alter Earth's energy balance."
  },

  // ============================================================
  // CLIMATE CONNECTIONS
  // ============================================================

  meteorologyAndClimate: {
    relationship:
      "Meteorology focuses primarily on atmospheric processes and weather, while climate science examines longer-term patterns, variability, and change. The two fields are closely connected.",

    climateVariables: [
      "temperature",
      "precipitation",
      "humidity",
      "wind",
      "pressure",
      "cloud cover",
      "radiation"
    ],

    climateDrivers: [
      "solar variability",
      "greenhouse gases",
      "aerosols",
      "land-surface changes",
      "ocean circulation",
      "volcanic eruptions"
    ]
  },

  // ============================================================
  // EL NIÑO AND LA NIÑA
  // ============================================================

  enso: {
    name:
      "El Niño–Southern Oscillation",

    definition:
      "A coupled ocean-atmosphere climate phenomenon centered in the tropical Pacific Ocean.",

    elNino:
      "A warm phase characterized by unusually warm sea-surface temperatures in parts of the central and eastern tropical Pacific and associated atmospheric changes.",

    laNina:
      "A cool phase characterized by unusually cool tropical Pacific sea-surface temperatures and associated atmospheric circulation changes.",

    neutral:
      "Conditions without a sustained El Niño or La Niña state.",

    impacts:
      "ENSO can influence precipitation, temperature, storms, drought, and other weather patterns across many regions."
  },

  // ============================================================
  // MONSOONS
  // ============================================================

  monsoons: {
    definition:
      "A monsoon is a seasonal reversal or major seasonal change in prevailing winds associated with land-sea thermal contrasts and broader atmospheric circulation.",

    processes: [
      "seasonal heating differences",
      "land-sea temperature contrasts",
      "pressure changes",
      "moisture transport",
      "large-scale circulation"
    ],

    phases: [
      "wet season",
      "dry season"
    ],

    importance: [
      "agriculture",
      "water supply",
      "flooding",
      "drought",
      "ecosystems",
      "regional climate"
    ]
  },

  // ============================================================
  // MJO
  // ============================================================

  maddenJulianOscillation: {
    definition:
      "The Madden-Julian Oscillation is a large-scale tropical atmospheric disturbance involving a moving region of enhanced and suppressed convection.",

    timescale:
      "Typically varies on intraseasonal timescales of roughly 30–60 days.",

    impacts: [
      "tropical rainfall",
      "monsoon behavior",
      "tropical cyclone activity",
      "mid-latitude weather interactions"
    ]
  },

  // ============================================================
  // ROSSBY WAVES
  // ============================================================

  rossbyWaves: {
    definition:
      "Large-scale planetary waves in the atmosphere influenced strongly by Earth's rotation and changes in the Coriolis parameter with latitude.",

    importance: [
      "jet-stream patterns",
      "weather-system steering",
      "blocking patterns",
      "heat transport"
    ]
  },

  // ============================================================
  // ATMOSPHERIC RIVERS
  // ============================================================

  atmosphericRivers: {
    definition:
      "Long, narrow corridors of enhanced water vapor transport in the atmosphere.",

    importance: [
      "heavy precipitation",
      "flooding",
      "snowpack accumulation",
      "water supply"
    ]
  },

  // ============================================================
  // PRECIPITABLE WATER
  // ============================================================

  precipitableWater: {
    definition:
      "The depth of liquid water that would result if all water vapor in an atmospheric column were condensed.",

    importance: [
      "heavy rainfall potential",
      "storm forecasting",
      "moisture analysis",
      "satellite meteorology"
    ]
  },

  // ============================================================
  // WEATHER RADIOS
  // ============================================================

  weatherInstruments: {
    thermometer:
      "Measures temperature.",

    barometer:
      "Measures atmospheric pressure.",

    hygrometer:
      "Measures humidity.",

    psychrometer:
      "Uses wet-bulb and dry-bulb measurements to estimate humidity.",

    anemometer:
      "Measures wind speed.",

    windVane:
      "Measures or indicates wind direction.",

    rainGauge:
      "Measures precipitation amount.",

    weatherRadar:
      "Detects and monitors precipitation and atmospheric targets.",

    ceilometer:
      "Measures cloud-base height or related atmospheric properties.",

    pyranometer:
      "Measures solar radiation.",

    radiosonde:
      "Measures atmospheric conditions aloft using a balloon-borne instrument package."
  },

  // ============================================================
  // WEATHER MAPS
  // ============================================================

  weatherMaps: {
    surfaceMap:
      "Map showing surface pressure, fronts, temperatures, winds, and other weather observations.",

    upperAirMap:
      "Map describing atmospheric conditions at a specified pressure or altitude level.",

    isobar:
      "Line connecting points of equal atmospheric pressure.",

    isotherm:
      "Line connecting points of equal temperature.",

    isotach:
      "Line connecting points of equal wind speed."
  },

  // ============================================================
  // PRESSURE LEVELS
  // ============================================================

  standardPressureLevels: [
    "1000 hPa",
    "925 hPa",
    "850 hPa",
    "700 hPa",
    "500 hPa",
    "300 hPa",
    "250 hPa",
    "200 hPa"
  ],

  // ============================================================
  // WEATHER FORECAST UNCERTAINTY
  // ============================================================

  forecastUncertainty: {
    definition:
      "Forecast uncertainty represents limits in knowledge about future atmospheric conditions.",

    sources: [
      "measurement uncertainty",
      "incomplete observations",
      "model limitations",
      "chaotic atmospheric behavior",
      "uncertain initial conditions",
      "physical parameterizations"
    ],

    ensembleForecasting:
      "Running multiple forecasts with varied initial conditions or model configurations to estimate a range of possible outcomes."
  },

  // ============================================================
  // CHAOS AND PREDICTABILITY
  // ============================================================

  atmosphericChaos: {
    definition:
      "The atmosphere is a chaotic system in which small differences in initial conditions can grow over time.",

    consequence:
      "Weather predictability generally decreases as forecast lead time increases.",

    butterflyEffect:
      "A popular description of sensitive dependence on initial conditions in chaotic systems."
  },

  // ============================================================
  // WEATHER VS CLIMATE
  // ============================================================

  weatherVsClimate: {
    weather:
      "Short-term atmospheric conditions.",

    climate:
      "Long-term statistics, patterns, variability, and trends of atmospheric conditions.",

    example:
      "A cold day is weather; the long-term frequency of cold days in a region is part of its climate."
  },

  // ============================================================
  // ATMOSPHERIC MOISTURE CYCLE
  // ============================================================

  atmosphericWaterCycle: {
    processes: [
      "evaporation",
      "transpiration",
      "sublimation",
      "condensation",
      "deposition",
      "cloud formation",
      "precipitation",
      "runoff",
      "infiltration"
    ],

    evapotranspiration:
      "Combined loss of water to the atmosphere through evaporation and plant transpiration."
  },

  // ============================================================
  // EVAPORATION
  // ============================================================

  evaporation: {
    definition:
      "Conversion of liquid water into water vapor at a surface.",

    controllingFactors: [
      "temperature",
      "humidity",
      "wind",
      "surface area",
      "water availability",
      "radiation"
    ]
  },

  // ============================================================
  // CONDENSATION
  // ============================================================

  condensation: {
    definition:
      "Conversion of water vapor into liquid water.",

    importance: [
      "cloud formation",
      "fog formation",
      "dew",
      "precipitation"
    ]
  },

  // ============================================================
  // DEPOSITION AND SUBLIMATION
  // ============================================================

  phaseChanges: {
    deposition:
      "Conversion of water vapor directly into ice.",

    sublimation:
      "Conversion of ice directly into water vapor.",

    freezing:
      "Conversion of liquid water into ice.",

    melting:
      "Conversion of ice into liquid water."
  },

  // ============================================================
  // DEW AND FROST
  // ============================================================

  surfaceCondensation: {
    dew:
      "Liquid water deposited on surfaces when they cool to the dew point.",

    frost:
      "Ice deposited directly onto surfaces when conditions favor deposition and the surface is sufficiently cold."
  },

  // ============================================================
  // WEATHER HAZARD COMMUNICATION
  // ============================================================

  warnings: {
    watch:
      "Indicates that conditions are favorable for a hazardous weather event.",

    warning:
      "Indicates that a hazardous weather event is occurring, imminent, or strongly expected depending on the agency's criteria.",

    advisory:
      "Provides information about weather that may cause inconvenience or moderate impacts but is generally less severe than warning-level conditions."
  },

  // ============================================================
  // AVIATION METEOROLOGY
  // ============================================================

  aviationMeteorology: {
    importance: [
      "turbulence",
      "icing",
      "visibility",
      "thunderstorms",
      "wind shear",
      "crosswinds",
      "fog",
      "jet streams",
      "volcanic ash"
    ],

    icing:
      "Accumulation of ice on aircraft surfaces when supercooled water droplets freeze upon contact.",

    windShear:
      "Change in wind speed or direction over a relatively short distance.",

    microburst:
      "A strong localized downdraft that spreads outward after reaching the surface and can create dangerous wind shear for aircraft."
  },

  // ============================================================
  // AGRICULTURAL METEOROLOGY
  // ============================================================

  agriculturalMeteorology: {
    definition:
      "Application of meteorological knowledge to agriculture and agricultural decision-making.",

    variables: [
      "temperature",
      "precipitation",
      "soil moisture",
      "humidity",
      "solar radiation",
      "wind",
      "frost risk",
      "evapotranspiration"
    ],

    applications: [
      "planting decisions",
      "irrigation",
      "frost protection",
      "pest forecasting",
      "crop yield assessment",
      "drought monitoring"
    ]
  },

  // ============================================================
  // HYDROMETEOROLOGY
  // ============================================================

  hydrometeorology: {
    definition:
      "Study of atmospheric and hydrological processes related to water in the atmosphere and on Earth's surface.",

    topics: [
      "precipitation",
      "floods",
      "drought",
      "snow",
      "evaporation",
      "soil moisture",
      "water balance"
    ]
  },

  // ============================================================
  // FIRE WEATHER
  // ============================================================

  fireWeather: {
    definition:
      "Atmospheric conditions that influence wildfire ignition, spread, and behavior.",

    importantFactors: [
      "temperature",
      "relative humidity",
      "wind speed",
      "wind direction",
      "fuel moisture",
      "drought",
      "atmospheric stability"
    ],

    dangerousConditions: [
      "hot temperatures",
      "low humidity",
      "strong winds",
      "dry fuels",
      "persistent drought"
    ]
  },

  // ============================================================
  // VOLCANIC ASH METEOROLOGY
  // ============================================================

  volcanicAsh: {
    definition:
      "Fine fragmented volcanic material that can be transported through the atmosphere.",

    atmosphericTransport:
      "Wind and atmospheric circulation can transport volcanic ash over large distances.",

    hazards: [
      "aviation engine damage",
      "reduced visibility",
      "air quality problems",
      "surface contamination"
    ]
  },

  // ============================================================
  // WEATHER MODIFICATION
  // ============================================================

  weatherModification: {
    definition:
      "Intentional attempts to alter certain atmospheric or precipitation processes.",

    cloudSeeding:
      "Introduction of suitable particles into clouds in an attempt to influence precipitation formation.",

    limitation:
      "Effectiveness depends strongly on cloud conditions and atmospheric environment and is not a universal method for producing rain."
  },

  // ============================================================
  // ATMOSPHERIC MODELS
  // ============================================================

  models: {
    globalModels:
      "Numerical models that simulate the atmosphere over large portions or all of Earth.",

    regionalModels:
      "Higher-resolution models focused on specific regions.",

    convectionAllowingModels:
      "High-resolution models designed to represent important convective processes more explicitly.",

    dataAssimilation:
      "Process of combining observations with a model's previous state to produce an improved estimate of current atmospheric conditions."
  },

  // ============================================================
  // IMPORTANT EQUATIONS AND CONCEPTS
  // ============================================================

  equationsAndConcepts: {
    idealGasLaw:
      "PV = nRT",

    hydrostaticBalance:
      "Vertical pressure changes in the atmosphere are closely related to the weight of the air above.",

    coriolisParameter:
      "f = 2Ω sin(φ)",

    geostrophicBalance:
      "Horizontal pressure-gradient force is approximately balanced by the Coriolis force in geostrophic flow.",

    relativeHumidity:
      "Relative humidity compares the actual water vapor content of air with the saturation amount at the same temperature.",

    lapseRate:
      "The rate at which atmospheric temperature changes with height."
  },

  // ============================================================
  // MAJOR ATMOSPHERIC PHENOMENA
  // ============================================================

  phenomena: [
    "clouds",
    "rain",
    "snow",
    "hail",
    "fog",
    "frost",
    "thunderstorms",
    "lightning",
    "tornadoes",
    "hurricanes",
    "typhoons",
    "cyclones",
    "monsoons",
    "jet streams",
    "fronts",
    "heat waves",
    "cold waves",
    "droughts",
    "floods",
    "dust storms",
    "blizzards",
    "auroras",
    "rainbows",
    "halos",
    "atmospheric rivers",
    "Rossby waves",
    "El Niño",
    "La Niña",
    "Madden-Julian Oscillation"
  ],

  // ============================================================
  // GLOSSARY
  // ============================================================

  glossary: {
    advection:
      "Horizontal transport of an atmospheric property by wind.",

    aerosol:
      "Tiny solid or liquid particle suspended in the atmosphere.",

    albedo:
      "Fraction of incoming radiation reflected by a surface or system.",

    anemometer:
      "Instrument used to measure wind speed.",

    anticyclone:
      "High-pressure circulation system.",

    atmosphere:
      "Gaseous envelope surrounding Earth.",

    barometer:
      "Instrument used to measure atmospheric pressure.",

    boundaryLayer:
      "Lowest atmospheric layer strongly influenced by Earth's surface.",

    condensation:
      "Conversion of water vapor into liquid water.",

    convection:
      "Transport of heat and mass through fluid motion.",

    CoriolisEffect:
      "Apparent deflection of moving objects caused by Earth's rotation.",

    cyclone:
      "Atmospheric circulation associated with relatively low pressure.",

    dewPoint:
      "Temperature at which air reaches saturation when cooled at constant pressure and moisture.",

    downdraft:
      "Downward-moving air within the atmosphere.",

    evaporation:
      "Conversion of liquid water into water vapor.",

    front:
      "Boundary between contrasting air masses.",

    humidity:
      "Amount of water vapor in air.",

    inversion:
      "Atmospheric layer where temperature increases with altitude.",

    isobar:
      "Line connecting equal atmospheric pressure.",

    isotherm:
      "Line connecting equal temperature.",

    jetStream:
      "Narrow region of strong winds near the upper troposphere.",

    lapseRate:
      "Rate of atmospheric temperature change with altitude.",

    lightning:
      "Large electrical discharge in the atmosphere.",

    moisture:
      "Water present in gaseous, liquid, or solid form within atmospheric processes.",

    precipitation:
      "Water falling from the atmosphere to Earth's surface.",

    pressureGradient:
      "Change in pressure over distance.",

    relativeHumidity:
      "Percentage comparison between actual and saturation water vapor content.",

    radiosonde:
      "Balloon-borne instrument used to measure atmospheric conditions aloft.",

    radiation:
      "Energy transported by electromagnetic waves.",

    saturation:
      "Condition in which air contains the maximum water vapor amount possible under specified conditions.",

    stormSurge:
      "Abnormal rise of coastal water caused mainly by storm winds and pressure.",

    thunder:
      "Sound generated by rapid expansion of air heated by lightning.",

    tornado:
      "Violently rotating column of air extending from a convective cloud toward the surface.",

    updraft:
      "Upward-moving air.",

    weather:
      "Short-term atmospheric conditions.",

    weatherRadar:
      "Radar system used to observe precipitation and atmospheric motion.",

    wind:
      "Movement of air relative to Earth's surface."
  },

  // ============================================================
  // COMMON QUESTIONS
  // ============================================================

  commonQuestions: {
    "What is meteorology?":
      "Meteorology is the scientific study of Earth's atmosphere and the processes that produce weather.",

    "What is weather?":
      "Weather is the short-term state of the atmosphere at a particular place and time.",

    "What is climate?":
      "Climate describes long-term patterns, averages, and variability of weather.",

    "What causes wind?":
      "Wind is driven primarily by pressure differences, with its motion modified by Earth's rotation and surface friction.",

    "What causes rain?":
      "Rain forms when cloud water droplets or ice particles grow large enough to fall to the surface as liquid precipitation.",

    "What causes clouds?":
      "Clouds form when moist air cools to saturation and water condenses or deposits onto atmospheric particles.",

    "What causes thunderstorms?":
      "Thunderstorms require moisture, atmospheric instability, and a lifting mechanism.",

    "What causes lightning?":
      "Lightning results from large electrical charge differences and electrical discharges within or between clouds or between clouds and the ground.",

    "What is a hurricane?":
      "A hurricane is a tropical cyclone reaching hurricane-strength winds in regions that use that term.",

    "What is a tornado?":
      "A tornado is a violently rotating column of air extending from a convective cloud toward the surface.",

    "What is atmospheric pressure?":
      "Atmospheric pressure is the force per unit area exerted by the weight of air.",

    "What is humidity?":
      "Humidity describes the amount of water vapor in the atmosphere.",

    "What is relative humidity?":
      "Relative humidity is the ratio of actual water vapor content to the saturation amount at the same temperature, expressed as a percentage.",

    "What is dew point?":
      "Dew point is the temperature to which air must be cooled for saturation to occur.",

    "What is a jet stream?":
      "A jet stream is a narrow region of very strong winds near the upper troposphere.",

    "What is a cold front?":
      "A cold front forms when a colder air mass advances and replaces warmer air.",

    "What is a warm front?":
      "A warm front forms when warmer air advances over or replaces colder air.",

    "What is El Niño?":
      "El Niño is the warm phase of the El Niño–Southern Oscillation involving unusual warming of parts of the tropical Pacific and associated atmospheric changes.",

    "What is La Niña?":
      "La Niña is the cool phase of ENSO involving unusual cooling of parts of the tropical Pacific and associated atmospheric changes.",

    "What is a monsoon?":
      "A monsoon is a seasonal change in atmospheric circulation and prevailing winds associated with strong land-sea thermal contrasts and other large-scale processes.",

    "What is a weather forecast?":
      "A weather forecast is a prediction of future atmospheric conditions based on observations, atmospheric science, and forecasting models."
  },

  // ============================================================
  // KEYWORDS FOR REZE ROUTER
  // ============================================================

  keywords: [
    "meteorology",
    "meteorologist",
    "atmosphere",
    "atmospheric science",
    "weather",
    "weather forecast",
    "forecast",
    "temperature",
    "pressure",
    "atmospheric pressure",
    "humidity",
    "relative humidity",
    "dew point",
    "wind",
    "wind speed",
    "wind direction",
    "air mass",
    "front",
    "cold front",
    "warm front",
    "stationary front",
    "occluded front",
    "dryline",
    "cloud",
    "clouds",
    "cirrus",
    "cumulus",
    "stratus",
    "cumulonimbus",
    "rain",
    "snow",
    "hail",
    "sleet",
    "freezing rain",
    "precipitation",
    "fog",
    "frost",
    "storm",
    "thunderstorm",
    "lightning",
    "thunder",
    "tornado",
    "hurricane",
    "typhoon",
    "cyclone",
    "tropical cyclone",
    "storm surge",
    "blizzard",
    "heat wave",
    "cold wave",
    "drought",
    "flood",
    "dust storm",
    "jet stream",
    "jet streams",
    "Coriolis",
    "coriolis effect",
    "pressure gradient",
    "high pressure",
    "low pressure",
    "cyclone",
    "anticyclone",
    "Hadley cell",
    "Ferrel cell",
    "polar cell",
    "trade winds",
    "westerlies",
    "polar easterlies",
    "monsoon",
    "El Niño",
    "La Niña",
    "ENSO",
    "Madden-Julian Oscillation",
    "MJO",
    "Rossby waves",
    "atmospheric river",
    "weather radar",
    "radar meteorology",
    "weather satellite",
    "satellite meteorology",
    "radiosonde",
    "barometer",
    "thermometer",
    "anemometer",
    "rain gauge",
    "weather instruments",
    "numerical weather prediction",
    "NWP",
    "weather model",
    "forecast model",
    "ensemble forecast",
    "weather forecasting",
    "atmospheric stability",
    "adiabatic",
    "lapse rate",
    "convection",
    "advection",
    "conduction",
    "radiation",
    "solar radiation",
    "insolation",
    "greenhouse effect",
    "greenhouse gases",
    "ozone",
    "ozone layer",
    "ozone depletion",
    "aerosol",
    "air pollution",
    "temperature inversion",
    "turbulence",
    "wind shear",
    "microburst",
    "aviation meteorology",
    "agricultural meteorology",
    "hydrometeorology",
    "fire weather",
    "atmospheric electricity",
    "aurora",
    "northern lights",
    "southern lights",
    "space weather",
    "rainbow",
    "halo",
    "sundog",
    "mirage",
    "urban heat island",
    "mountain meteorology",
    "orographic lift",
    "rain shadow",
    "foehn wind"
  ]
};

// ============================================================
// DEFAULT EXPORT
// ============================================================

export default METEOROLOGY_KNOWLEDGE;
