// lib/knowledge/science/materialsScience.js

// ============================================================
// MATERIALS SCIENCE KNOWLEDGE BASE
// ============================================================
// Covers:
// - Fundamentals of materials science
// - Atomic structure and bonding
// - Crystal structures
// - Defects
// - Diffusion
// - Phase diagrams
// - Phase transformations
// - Metals and alloys
// - Ceramics and glasses
// - Polymers
// - Composites
// - Semiconductors
// - Biomaterials
// - Nanomaterials
// - Smart materials
// - Magnetic materials
// - Optical materials
// - Electrical materials
// - Thermal materials
// - Mechanical properties
// - Corrosion
// - Degradation
// - Processing and manufacturing
// - Characterization
// - Material selection
// - Advanced materials
// - Energy materials
// - Electronic materials
// - Sustainable materials
// - Applications
// ============================================================

export const MATERIALS_SCIENCE_KNOWLEDGE = {

  name: "Materials Science",
  category: "science",
  field: "materials_science",

  description:
    "Materials science is the interdisciplinary study of the structure, properties, processing, performance, and applications of materials. It connects atomic and molecular structure to macroscopic behavior and includes metals, ceramics, polymers, composites, semiconductors, biomaterials, nanomaterials, and advanced functional materials.",

  aliases: [
    "materials science",
    "material science",
    "materials engineering",
    "material engineering",
    "materials technology",
    "engineering materials",
    "advanced materials"
  ],

  // ==========================================================
  // FUNDAMENTALS
  // ==========================================================

  fundamentals: {

    definition:
      "Materials science studies how a material's composition and structure determine its physical, chemical, mechanical, electrical, magnetic, optical, and thermal properties, and how processing changes those properties.",

    materials_engineering:
      "Materials engineering applies materials science principles to design, manufacture, process, test, select, and improve materials for practical applications.",

    structure_property_relationship:
      "A central principle of materials science is the structure-property-processing-performance relationship. Processing determines structure; structure strongly influences properties; properties determine performance.",

    materials_classes: [
      "Metals",
      "Ceramics",
      "Polymers",
      "Composites",
      "Semiconductors",
      "Glasses",
      "Biomaterials",
      "Nanomaterials",
      "Electronic materials",
      "Magnetic materials",
      "Optical materials",
      "Energy materials"
    ],

    length_scales: {
      atomic:
        "Atomic-scale structure includes atoms, ions, electrons, and bonding.",
      nanometer:
        "Nanostructure generally describes features approximately 1–100 nm in scale.",
      microscopic:
        "Microstructure includes grains, phases, pores, precipitates, inclusions, and defects visible using microscopy.",
      macroscopic:
        "Macrostructure describes large-scale features observable without high magnification."
    },

    four_materials_questions: [
      "What is the material made of?",
      "How are its atoms arranged?",
      "How was it processed?",
      "How does its structure determine its properties?"
    ]
  },

  // ==========================================================
  // ATOMIC STRUCTURE
  // ==========================================================

  atomic_structure: {

    atom:
      "An atom consists of a positively charged nucleus containing protons and neutrons surrounded by electrons.",

    proton:
      "A positively charged subatomic particle located in the atomic nucleus.",

    neutron:
      "A neutral subatomic particle located in the atomic nucleus.",

    electron:
      "A negatively charged particle associated with atomic orbitals and responsible for many aspects of chemical bonding and electrical behavior.",

    atomic_number:
      "The number of protons in an atom's nucleus.",

    mass_number:
      "The total number of protons and neutrons in an atomic nucleus.",

    isotope:
      "Atoms of the same element having the same number of protons but different numbers of neutrons.",

    ion:
      "An electrically charged atom or molecule formed by gaining or losing electrons.",

    cation:
      "A positively charged ion produced by loss of electrons.",

    anion:
      "A negatively charged ion produced by gain of electrons.",

    electron_shell:
      "A principal energy level occupied by electrons.",

    valence_electrons:
      "Electrons in the outermost occupied shell that strongly influence chemical bonding and material behavior.",

    electronegativity:
      "The tendency of an atom to attract electrons toward itself in a chemical bond.",

    atomic_radius:
      "A characteristic measure of atomic size.",

    periodic_trends: [
      "Atomic radius",
      "Ionization energy",
      "Electronegativity",
      "Electron affinity",
      "Metallic character"
    ]
  },

  // ==========================================================
  // CHEMICAL BONDING
  // ==========================================================

  bonding: {

    overview:
      "Chemical bonding determines how atoms interact and is fundamental to material structure and properties.",

    primary_bonds: {

      ionic:
        "Ionic bonding involves electrostatic attraction between oppositely charged ions. It is common in many ceramics and ionic compounds.",

      covalent:
        "Covalent bonding involves sharing electrons between atoms. It can produce strong, directional bonds.",

      metallic:
        "Metallic bonding involves positive atomic cores surrounded by relatively delocalized electrons. It contributes to electrical conductivity and ductility in metals."
    },

    secondary_bonds: {

      van_der_waals:
        "Weak intermolecular attractions caused by permanent or induced dipoles.",

      dipole_dipole:
        "Attraction between molecules possessing permanent electric dipoles.",

      hydrogen_bond:
        "A relatively strong directional secondary interaction involving hydrogen bonded to an electronegative atom."
    },

    bond_effects: [
      "Bond strength",
      "Bond length",
      "Melting temperature",
      "Elastic modulus",
      "Thermal expansion",
      "Electrical conductivity",
      "Chemical stability",
      "Hardness"
    ]
  },

  // ==========================================================
  // CRYSTAL STRUCTURE
  // ==========================================================

  crystal_structures: {

    definition:
      "A crystal is a solid with atoms arranged in a periodic long-range order.",

    crystalline:
      "Crystalline materials possess long-range atomic order.",

    amorphous:
      "Amorphous materials lack long-range periodic atomic order, although short-range order may exist.",

    unit_cell:
      "The smallest repeating geometric unit used to describe a crystal lattice.",

    lattice:
      "A periodic arrangement of points representing equivalent positions in a crystal.",

    coordination_number:
      "The number of nearest-neighbor atoms surrounding a reference atom.",

    atomic_packing_factor:
      "The fraction of a unit cell volume occupied by atoms modeled as hard spheres.",

    common_structures: {

      BCC: {
        name: "Body-Centered Cubic",
        description:
          "A cubic unit cell with atoms at the corners and one atom at the center.",
        examples: [
          "Alpha iron",
          "Chromium",
          "Tungsten",
          "Molybdenum",
          "Vanadium"
        ]
      },

      FCC: {
        name: "Face-Centered Cubic",
        description:
          "A cubic unit cell with atoms at the corners and centers of all faces.",
        examples: [
          "Aluminum",
          "Copper",
          "Nickel",
          "Silver",
          "Gold",
          "Gamma iron"
        ]
      },

      HCP: {
        name: "Hexagonal Close-Packed",
        description:
          "A close-packed hexagonal crystal structure.",
        examples: [
          "Magnesium",
          "Titanium at low temperature",
          "Zinc",
          "Cobalt"
        ]
      }
    },

    crystal_directions:
      "Directions in a crystal describe specific atomic or geometric directions and are commonly represented using crystallographic notation.",

    crystal_planes:
      "Crystal planes describe sets of parallel lattice planes and are commonly represented by Miller indices.",

    miller_indices:
      "Miller indices are integer values used to identify crystal planes.",

    anisotropy:
      "Anisotropy means that a material property depends on direction. Single crystals often exhibit strong anisotropy.",

    isotropy:
      "Isotropy means that a property is approximately the same in all directions."
  },

  // ==========================================================
  // POLYCRYSTALLINE MATERIALS
  // ==========================================================

  polycrystalline_materials: {

    definition:
      "Polycrystalline materials consist of many small crystals or grains with different orientations.",

    grain:
      "A grain is a region within a polycrystalline material having a relatively uniform crystal orientation.",

    grain_boundary:
      "A grain boundary is an interface between grains of different crystallographic orientation.",

    grain_size:
      "Grain size strongly influences mechanical properties, diffusion, corrosion, and other material behavior.",

    grain_refinement:
      "Reducing grain size can increase strength in many metals through grain-boundary strengthening.",

    hall_petch:
      "The Hall-Petch relationship generally describes increasing yield strength as grain size decreases.",

    texture:
      "Crystallographic texture is a preferred orientation distribution of grains produced by processing such as rolling or drawing."
  },

  // ==========================================================
  // CRYSTAL DEFECTS
  // ==========================================================

  defects: {

    overview:
      "Real materials contain imperfections. Defects strongly influence diffusion, strength, conductivity, optical behavior, and other properties.",

    point_defects: {

      vacancy:
        "A vacancy is a missing atom from an otherwise occupied lattice site.",

      interstitial:
        "An interstitial defect occurs when an atom occupies a normally unoccupied position between lattice sites.",

      substitutional:
        "A substitutional impurity replaces a host atom in the lattice.",

      schottky:
        "A Schottky defect is a paired vacancy defect commonly discussed in ionic crystals.",

      frenkel:
        "A Frenkel defect occurs when an ion leaves its normal lattice site and occupies an interstitial position."
    },

    line_defects: {

      dislocation:
        "A dislocation is a line defect in a crystal lattice.",

      edge_dislocation:
        "An edge dislocation can be represented as an extra half-plane of atoms terminating within the crystal.",

      screw_dislocation:
        "A screw dislocation involves a helical displacement of the crystal lattice.",

      mixed_dislocation:
        "Many real dislocations have both edge and screw character."
    },

    planar_defects: [
      "Grain boundaries",
      "Twin boundaries",
      "Stacking faults",
      "Phase boundaries",
      "External surfaces"
    ],

    volume_defects: [
      "Voids",
      "Pores",
      "Cracks",
      "Inclusions",
      "Precipitates"
    ]
  },

  // ==========================================================
  // DIFFUSION
  // ==========================================================

  diffusion: {

    definition:
      "Diffusion is the thermally activated movement of atoms, ions, or molecules through a material.",

    importance: [
      "Alloying",
      "Heat treatment",
      "Sintering",
      "Oxidation",
      "Carburizing",
      "Nitriding",
      "Semiconductor doping",
      "Creep",
      "Phase transformations"
    ],

    mechanisms: {

      vacancy_diffusion:
        "Atoms move into neighboring vacant lattice sites.",

      interstitial_diffusion:
        "Small atoms move between interstitial positions."
    },

    fick_first_law:
      "Fick's first law relates diffusion flux to concentration gradient under steady-state conditions.",

    fick_second_law:
      "Fick's second law describes concentration changes with time under non-steady-state diffusion.",

    diffusion_factors: [
      "Temperature",
      "Concentration gradient",
      "Atomic size",
      "Crystal structure",
      "Defect concentration",
      "Bonding",
      "Diffusion path"
    ],

    activation_energy:
      "Diffusion commonly follows thermally activated behavior characterized by an activation energy."
  },

  // ==========================================================
  // PHASES
  // ==========================================================

  phases: {

    definition:
      "A phase is a chemically and physically homogeneous region with a distinct structure and composition.",

    examples: [
      "Ferrite",
      "Austenite",
      "Cementite",
      "Liquid phase",
      "Solid solution",
      "Precipitate",
      "Glass phase"
    ],

    phase_equilibrium:
      "Phase equilibrium describes conditions under which multiple phases coexist without net transformation.",

    solid_solution:
      "A solid solution is a single solid phase containing dissolved components.",

    substitutional_solution:
      "Solute atoms replace host atoms at normal lattice positions.",

    interstitial_solution:
      "Small solute atoms occupy interstitial positions.",

    phase_fraction:
      "The relative amount of each phase present in a multiphase material."
  },

  // ==========================================================
  // PHASE DIAGRAMS
  // ==========================================================

  phase_diagrams: {

    definition:
      "A phase diagram maps stable phases as a function of variables such as temperature, pressure, and composition.",

    binary_phase_diagram:
      "A binary phase diagram describes equilibrium phase relationships between two components.",

    important_features: [
      "Liquidus",
      "Solidus",
      "Solvus",
      "Eutectic point",
      "Eutectoid point",
      "Peritectic point",
      "Peritectoid point",
      "Single-phase regions",
      "Two-phase regions"
    ],

    lever_rule:
      "The lever rule is used to estimate phase fractions in a two-phase region of an equilibrium binary phase diagram.",

    eutectic:
      "A eutectic reaction transforms a liquid into two solid phases at a characteristic composition and temperature.",

    eutectoid:
      "A eutectoid reaction transforms one solid phase into two different solid phases.",

    peritectic:
      "A peritectic reaction involves a liquid and one solid phase transforming into another solid phase.",

    tie_line:
      "A horizontal line in a binary phase diagram used to determine equilibrium phase compositions in a two-phase region."
  },

  // ==========================================================
  // PHASE TRANSFORMATIONS
  // ==========================================================

  phase_transformations: {

    overview:
      "Phase transformations involve changes in phase, structure, composition, or ordering caused by changes in temperature, pressure, composition, or other conditions.",

    types: [
      "Solidification",
      "Melting",
      "Precipitation",
      "Eutectic transformation",
      "Eutectoid transformation",
      "Martensitic transformation",
      "Polymorphic transformation",
      "Glass transition"
    ],

    nucleation:
      "Nucleation is the initial formation of small stable regions of a new phase.",

    homogeneous_nucleation:
      "Nucleation occurs uniformly within a parent phase.",

    heterogeneous_nucleation:
      "Nucleation occurs preferentially at defects, surfaces, grain boundaries, or interfaces.",

    growth:
      "After nucleation, a new phase can grow as atoms or molecules rearrange and diffuse.",

    kinetics:
      "Transformation kinetics describe how rapidly a phase transformation occurs.",

    driving_force:
      "A thermodynamic driving force encourages a system to transform toward a lower free-energy state.",

    jominy_and_ttt:
      "Time-temperature-transformation and related diagrams are used to study transformation kinetics in alloys such as steels."
  },

  // ==========================================================
  // MECHANICAL PROPERTIES
  // ==========================================================

  mechanical_properties: {

    stress:
      "Stress is force divided by the area over which the force acts.",

    strain:
      "Strain measures deformation relative to the original dimension.",

    elastic_deformation:
      "Elastic deformation is recoverable when the applied load is removed.",

    plastic_deformation:
      "Plastic deformation is permanent deformation remaining after unloading.",

    youngs_modulus:
      "Young's modulus measures stiffness in tension or compression and is the ratio of normal stress to elastic strain in the linear elastic region.",

    shear_modulus:
      "Shear modulus measures resistance to shear deformation.",

    bulk_modulus:
      "Bulk modulus measures resistance to uniform volumetric compression.",

    poissons_ratio:
      "Poisson's ratio describes the ratio of transverse strain to axial strain in elastic deformation.",

    yield_strength:
      "Yield strength characterizes the onset of significant plastic deformation.",

    ultimate_tensile_strength:
      "Ultimate tensile strength is the maximum engineering stress reached during a tensile test.",

    fracture_strength:
      "Fracture strength is the stress associated with failure under specified conditions.",

    hardness:
      "Hardness measures resistance to localized plastic deformation or indentation.",

    toughness:
      "Toughness describes the ability to absorb energy before fracture.",

    ductility:
      "Ductility describes the ability to undergo significant plastic deformation before fracture.",

    brittleness:
      "Brittleness describes fracture with relatively little plastic deformation.",

    resilience:
      "Resilience is the ability to absorb elastic energy.",

    stiffness:
      "Stiffness describes resistance to deformation and is strongly related to elastic modulus and geometry.",

    strength:
      "Strength is the ability to withstand applied stress without failure or unacceptable deformation."
  },

  // ==========================================================
  // STRENGTHENING MECHANISMS
  // ==========================================================

  strengthening: {

    overview:
      "Strengthening mechanisms impede dislocation motion and increase resistance to plastic deformation.",

    mechanisms: {

      grain_boundary_strengthening:
        "Smaller grains provide more grain boundaries that can hinder dislocation motion.",

      solid_solution_strengthening:
        "Solute atoms distort the lattice and interfere with dislocation motion.",

      strain_hardening:
        "Plastic deformation increases dislocation density, making further deformation more difficult.",

      precipitation_hardening:
        "Fine precipitates obstruct dislocation movement.",

      dispersion_strengthening:
        "Stable dispersed particles impede dislocation motion and improve high-temperature strength.",

      transformation_hardening:
        "Microstructural transformations can produce harder phases."
    }
  },

  // ==========================================================
  // FRACTURE
  // ==========================================================

  fracture: {

    definition:
      "Fracture is the separation of a material into two or more pieces under applied stress.",

    ductile_fracture:
      "Ductile fracture is associated with substantial plastic deformation and often microvoid coalescence.",

    brittle_fracture:
      "Brittle fracture occurs with limited plastic deformation and may involve cleavage or rapid crack propagation.",

    crack:
      "A crack is a discontinuity capable of concentrating stress.",

    stress_concentration:
      "Geometric discontinuities such as holes, notches, and cracks can locally amplify stress.",

    fracture_toughness:
      "Fracture toughness measures resistance to crack growth under specified conditions.",

    fatigue_crack:
      "Repeated cyclic loading can initiate and propagate cracks even when the applied stress is below the static strength.",

    crack_growth:
      "Crack growth may occur through mechanisms controlled by cyclic loading, environment, temperature, or stress intensity."
  },

  // ==========================================================
  // FATIGUE
  // ==========================================================

  fatigue: {

    definition:
      "Fatigue is progressive damage caused by repeated or fluctuating stresses.",

    stages: [
      "Crack initiation",
      "Stable crack growth",
      "Accelerated crack growth",
      "Final fracture"
    ],

    fatigue_factors: [
      "Stress amplitude",
      "Mean stress",
      "Surface finish",
      "Temperature",
      "Corrosion",
      "Residual stress",
      "Microstructure",
      "Loading frequency"
    ],

    S_N_curve:
      "An S-N curve relates stress amplitude to the number of cycles to failure.",

    endurance_limit:
      "Some materials, especially certain steels, can exhibit an approximate stress level below which fatigue life is very long under particular test conditions."
  },

  // ==========================================================
  // CREEP
  // ==========================================================

  creep: {

    definition:
      "Creep is time-dependent permanent deformation under sustained load, especially significant at elevated temperature.",

    stages: [
      "Primary creep",
      "Secondary creep",
      "Tertiary creep"
    ],

    mechanisms: [
      "Dislocation creep",
      "Diffusion creep",
      "Grain-boundary sliding",
      "Vacancy diffusion"
    ],

    creep_resistance:
      "Creep resistance can be improved through suitable alloying, microstructure control, grain structure, precipitates, and high-temperature stable phases."
  },

  // ==========================================================
  // METALS
  // ==========================================================

  metals: {

    definition:
      "Metals generally exhibit metallic bonding, relatively high electrical and thermal conductivity, and useful combinations of strength and ductility.",

    common_metals: [
      "Iron",
      "Aluminum",
      "Copper",
      "Titanium",
      "Nickel",
      "Magnesium",
      "Zinc",
      "Cobalt",
      "Chromium",
      "Silver",
      "Gold",
      "Platinum"
    ],

    properties: [
      "Electrical conductivity",
      "Thermal conductivity",
      "Ductility",
      "Malleability",
      "Strength",
      "Toughness",
      "Reflectivity",
      "Machinability"
    ]
  },

  // ==========================================================
  // STEELS
  // ==========================================================

  steels: {

    definition:
      "Steel is primarily an iron-carbon alloy, often containing additional alloying elements.",

    categories: [
      "Low-carbon steel",
      "Medium-carbon steel",
      "High-carbon steel",
      "Low-alloy steel",
      "High-alloy steel",
      "Stainless steel",
      "Tool steel",
      "Spring steel",
      "Electrical steel"
    ],

    phases: {

      ferrite:
        "Ferrite is a relatively soft body-centered cubic iron phase capable of dissolving limited carbon.",

      austenite:
        "Austenite is a face-centered cubic iron phase that can dissolve substantially more carbon than ferrite.",

      cementite:
        "Cementite is iron carbide, Fe3C, and is hard and brittle.",

      pearlite:
        "Pearlite is a lamellar mixture of ferrite and cementite formed through a eutectoid transformation.",

      bainite:
        "Bainite is a microstructure containing ferrite and carbide formed under suitable intermediate transformation conditions.",

      martensite:
        "Martensite is a hard metastable structure formed by rapid transformation of austenite, typically during quenching."
    },

    heat_treatment: [
      "Annealing",
      "Normalizing",
      "Quenching",
      "Tempering",
      "Austempering",
      "Martempering",
      "Carburizing",
      "Nitriding"
    ]
  },

  // ==========================================================
  // STAINLESS STEELS
  // ==========================================================

  stainless_steel: {

    definition:
      "Stainless steels are iron-based alloys containing sufficient chromium to form a protective chromium-rich passive surface film.",

    families: [
      "Austenitic",
      "Ferritic",
      "Martensitic",
      "Duplex",
      "Precipitation-hardening"
    ],

    corrosion_resistance:
      "Corrosion resistance depends on chromium content, alloy composition, environment, surface condition, temperature, and microstructure.",

    applications: [
      "Food equipment",
      "Chemical processing",
      "Medical instruments",
      "Architecture",
      "Automotive components",
      "Power generation"
    ]
  },

  // ==========================================================
  // ALUMINUM ALLOYS
  // ==========================================================

  aluminum_alloys: {

    properties: [
      "Low density",
      "Good corrosion resistance",
      "Good electrical conductivity",
      "Good thermal conductivity",
      "Good formability",
      "Useful strength-to-weight ratio"
    ],

    strengthening: [
      "Solid solution strengthening",
      "Work hardening",
      "Precipitation hardening",
      "Grain refinement"
    ],

    applications: [
      "Aircraft",
      "Automobiles",
      "Packaging",
      "Buildings",
      "Electrical conductors",
      "Consumer products"
    ]
  },

  // ==========================================================
  // COPPER ALLOYS
  // ==========================================================

  copper_alloys: {

    major_types: [
      "Brass",
      "Bronze",
      "Cupronickel"
    ],

    properties: [
      "High electrical conductivity",
      "High thermal conductivity",
      "Good corrosion resistance",
      "Good ductility",
      "Good machinability in selected alloys"
    ],

    applications: [
      "Electrical wiring",
      "Heat exchangers",
      "Plumbing",
      "Electronics",
      "Marine equipment"
    ]
  },

  // ==========================================================
  // TITANIUM ALLOYS
  // ==========================================================

  titanium_alloys: {

    properties: [
      "Low density relative to many structural metals",
      "High specific strength",
      "Excellent corrosion resistance",
      "Good high-temperature performance",
      "Biocompatibility in many applications"
    ],

    applications: [
      "Aerospace",
      "Medical implants",
      "Chemical processing",
      "Marine systems",
      "High-performance engineering"
    ]
  },

  // ==========================================================
  // NICKEL ALLOYS
  // ==========================================================

  nickel_alloys: {

    properties: [
      "High-temperature strength",
      "Oxidation resistance",
      "Corrosion resistance",
      "Good creep resistance",
      "Useful mechanical properties at elevated temperatures"
    ],

    applications: [
      "Gas turbines",
      "Jet engines",
      "Chemical plants",
      "Power generation",
      "High-temperature components"
    ],

    superalloys:
      "Nickel-, cobalt-, and iron-based superalloys are engineered for demanding high-temperature applications."
  },

  // ==========================================================
  // CERAMICS
  // ==========================================================

  ceramics: {

    definition:
      "Ceramics are inorganic, nonmetallic materials generally characterized by strong ionic and/or covalent bonding.",

    properties: [
      "High hardness",
      "High melting temperature",
      "Good chemical stability",
      "Good wear resistance",
      "Good high-temperature stability",
      "Often low ductility",
      "Often low fracture toughness",
      "Electrical insulation in many compositions"
    ],

    examples: [
      "Alumina",
      "Zirconia",
      "Silicon carbide",
      "Silicon nitride",
      "Titanium carbide",
      "Titanium nitride",
      "Porcelain",
      "Brick",
      "Cement-based ceramics"
    ],

    applications: [
      "Cutting tools",
      "Thermal barriers",
      "Electrical insulators",
      "Construction",
      "Dental materials",
      "Biomedical implants",
      "Aerospace"
    ]
  },

  // ==========================================================
  // GLASS
  // ==========================================================

  glass: {

    definition:
      "Glass is an amorphous solid formed when a material solidifies without developing long-range crystalline order.",

    glass_transition:
      "The glass transition is a temperature range over which an amorphous material changes from a rigid glassy state toward a softer, more viscous state.",

    common_glasses: [
      "Soda-lime glass",
      "Borosilicate glass",
      "Fused silica",
      "Aluminosilicate glass",
      "Phosphate glass"
    ],

    properties: [
      "Transparency in selected wavelength ranges",
      "Chemical resistance",
      "Hardness",
      "Electrical insulation",
      "Brittleness",
      "Low crystallinity"
    ]
  },

  // ==========================================================
  // POLYMERS
  // ==========================================================

  polymers: {

    definition:
      "Polymers are materials composed of long molecular chains made from repeating structural units.",

    polymerization: [
      "Addition polymerization",
      "Condensation polymerization",
      "Ring-opening polymerization"
    ],

    classifications: [
      "Thermoplastics",
      "Thermosets",
      "Elastomers"
    ],

    thermoplastics:
      "Thermoplastics soften when heated and can often be reshaped repeatedly.",

    thermosets:
      "Thermosetting polymers form crosslinked networks that generally cannot be remelted without chemical degradation.",

    elastomers:
      "Elastomers are polymers capable of large reversible elastic deformation.",

    examples: [
      "Polyethylene",
      "Polypropylene",
      "Polystyrene",
      "Polyvinyl chloride",
      "Polyethylene terephthalate",
      "Nylon",
      "Polycarbonate",
      "Polytetrafluoroethylene",
      "Epoxy",
      "Silicone rubber"
    ]
  },

  // ==========================================================
  // POLYMER STRUCTURE
  // ==========================================================

  polymer_structure: {

    molecular_weight:
      "Polymer molecular weight strongly influences viscosity, strength, toughness, and processing behavior.",

    chain_length:
      "Longer polymer chains can increase entanglement and alter mechanical and thermal properties.",

    branching:
      "Branching changes density, crystallinity, flexibility, melting behavior, and mechanical properties.",

    crosslinking:
      "Crosslinks connect polymer chains and generally increase dimensional stability and resistance to flow.",

    crystallinity:
      "Some polymers contain crystalline regions while others are largely amorphous.",

    glass_transition_temperature:
      "The glass transition temperature strongly affects polymer flexibility and stiffness.",

    melting_temperature:
      "Crystalline polymer regions can melt at characteristic temperatures or ranges."
  },

  // ==========================================================
  // COMPOSITES
  // ==========================================================

  composites: {

    definition:
      "A composite combines two or more distinct materials to achieve properties not easily obtained from a single constituent.",

    components: [
      "Matrix",
      "Reinforcement",
      "Interface"
    ],

    matrix_types: [
      "Polymer matrix",
      "Metal matrix",
      "Ceramic matrix"
    ],

    reinforcement_types: [
      "Continuous fibers",
      "Short fibers",
      "Particles",
      "Whiskers",
      "Laminates"
    ],

    examples: [
      "Carbon-fiber-reinforced polymer",
      "Glass-fiber-reinforced polymer",
      "Kevlar composites",
      "Concrete",
      "Wood",
      "Ceramic matrix composites"
    ],

    advantages: [
      "High specific strength",
      "High specific stiffness",
      "Tailored properties",
      "Corrosion resistance",
      "Weight reduction"
    ],

    limitations: [
      "Manufacturing complexity",
      "Anisotropy",
      "Delamination",
      "Repair difficulty",
      "Higher material cost in some applications"
    ]
  },

  // ==========================================================
  // FIBER-REINFORCED COMPOSITES
  // ==========================================================

  fiber_composites: {

    fiber_orientation:
      "Fiber orientation strongly affects composite stiffness and strength.",

    unidirectional:
      "Unidirectional composites have fibers primarily aligned in one direction and are highly anisotropic.",

    woven:
      "Woven reinforcements provide multidirectional load-carrying capability.",

    laminate:
      "Laminates are stacks of individual composite plies arranged with selected orientations.",

    failure_modes: [
      "Fiber fracture",
      "Matrix cracking",
      "Fiber-matrix debonding",
      "Delamination",
      "Buckling",
      "Interfacial failure"
    ]
  },

  // ==========================================================
  // SEMICONDUCTORS
  // ==========================================================

  semiconductors: {

    definition:
      "Semiconductors have electrical conductivity intermediate between good conductors and insulators and can be strongly controlled by composition, defects, temperature, and external fields.",

    examples: [
      "Silicon",
      "Germanium",
      "Gallium arsenide",
      "Gallium nitride",
      "Silicon carbide",
      "Indium phosphide"
    ],

    intrinsic:
      "An intrinsic semiconductor is relatively pure and conducts through thermally generated electrons and holes.",

    extrinsic:
      "An extrinsic semiconductor contains intentional dopants that modify carrier concentration.",

    n_type:
      "N-type semiconductors are doped to increase electron concentration.",

    p_type:
      "P-type semiconductors are doped to increase hole concentration.",

    band_gap:
      "The band gap is an energy range separating the valence band and conduction band in an idealized semiconductor band structure.",

    applications: [
      "Transistors",
      "Diodes",
      "Integrated circuits",
      "Solar cells",
      "LEDs",
      "Laser diodes",
      "Sensors",
      "Power electronics"
    ]
  },

  // ==========================================================
  // ELECTRICAL MATERIALS
  // ==========================================================

  electrical_materials: {

    conductors:
      "Materials with high concentrations of mobile charge carriers and relatively high electrical conductivity.",

    insulators:
      "Materials that strongly resist electrical current.",

    dielectrics:
      "Electrical insulating materials that can become polarized in an electric field.",

    ferroelectrics:
      "Materials capable of possessing switchable spontaneous polarization under appropriate conditions.",

    piezoelectrics:
      "Materials that generate electrical polarization in response to mechanical stress and can deform under an applied electric field.",

    superconductors:
      "Materials that under appropriate conditions exhibit zero DC electrical resistance and other characteristic phenomena such as magnetic flux exclusion.",

    dielectric_constant:
      "A parameter describing a material's electric polarization response relative to vacuum."
  },

  // ==========================================================
  // MAGNETIC MATERIALS
  // ==========================================================

  magnetic_materials: {

    magnetism:
      "Magnetic behavior arises from electronic structure, particularly electron spin and orbital contributions.",

    categories: [
      "Diamagnetic",
      "Paramagnetic",
      "Ferromagnetic",
      "Antiferromagnetic",
      "Ferrimagnetic"
    ],

    ferromagnetism:
      "Ferromagnetic materials can exhibit spontaneous parallel alignment of magnetic moments and form magnetic domains.",

    antiferromagnetism:
      "Antiferromagnetic materials tend toward opposing alignment of neighboring magnetic moments.",

    ferrimagnetism:
      "Ferrimagnetic materials contain opposing magnetic sublattices with unequal magnetic moments, producing net magnetization.",

    domains:
      "Magnetic domains are regions where magnetic moments are relatively aligned.",

    applications: [
      "Motors",
      "Generators",
      "Transformers",
      "Data storage",
      "Sensors",
      "Speakers",
      "Magnetic shielding"
    ]
  },

  // ==========================================================
  // OPTICAL MATERIALS
  // ==========================================================

  optical_materials: {

    refractive_index:
      "The refractive index describes how electromagnetic radiation propagates through a material relative to vacuum.",

    reflection:
      "Reflection occurs when electromagnetic radiation is redirected at an interface.",

    refraction:
      "Refraction is the change in propagation direction associated with a change in optical medium.",

    absorption:
      "Absorption converts electromagnetic radiation into other forms of energy within a material.",

    transparency:
      "Transparency occurs when light can pass through a material with relatively low absorption and scattering.",

    photoluminescence:
      "Photoluminescence is light emission following optical excitation.",

    luminescent_materials: [
      "Phosphors",
      "Quantum dots",
      "Rare-earth-doped materials",
      "Organic emitters"
    ],

    applications: [
      "Optical fibers",
      "Displays",
      "LEDs",
      "Lasers",
      "Solar cells",
      "Sensors"
    ]
  },

  // ==========================================================
  // THERMAL MATERIALS
  // ==========================================================

  thermal_properties: {

    thermal_conductivity:
      "Thermal conductivity measures a material's ability to conduct heat.",

    thermal_expansion:
      "Thermal expansion describes dimensional changes caused by temperature changes.",

    heat_capacity:
      "Heat capacity measures the heat required to change a material's temperature.",

    thermal_diffusivity:
      "Thermal diffusivity describes how rapidly temperature changes propagate through a material.",

    thermal_shock:
      "Thermal shock is damage caused by rapid or nonuniform temperature changes that produce thermal stresses.",

    refractory_materials:
      "Refractory materials retain useful properties at very high temperatures.",

    thermal_barrier_coatings:
      "Thermal barrier coatings protect components from high temperatures and reduce heat transfer."
  },

  // ==========================================================
  // NANOMATERIALS
  // ==========================================================

  nanomaterials: {

    definition:
      "Nanomaterials contain structural features or particles in the nanoscale range, commonly around 1–100 nanometers.",

    importance:
      "Nanomaterials can exhibit properties significantly different from bulk materials because of high surface-to-volume ratio and size-dependent physical effects.",

    types: [
      "Nanoparticles",
      "Nanotubes",
      "Nanowires",
      "Nanorods",
      "Nanoplates",
      "Quantum dots",
      "Graphene",
      "Nanocomposites"
    ],

    examples: [
      "Carbon nanotubes",
      "Graphene",
      "Gold nanoparticles",
      "Silver nanoparticles",
      "Titanium dioxide nanoparticles",
      "Silica nanoparticles"
    ],

    properties: [
      "High surface area",
      "Size-dependent optical properties",
      "Enhanced catalytic activity",
      "Modified mechanical behavior",
      "Unique electrical behavior",
      "Modified magnetic behavior"
    ],

    applications: [
      "Catalysis",
      "Electronics",
      "Medicine",
      "Sensors",
      "Energy storage",
      "Coatings",
      "Water treatment"
    ]
  },

  // ==========================================================
  // CARBON NANOMATERIALS
  // ==========================================================

  carbon_nanostructures: {

    graphene:
      "Graphene is a two-dimensional carbon material consisting of a single atomic layer arranged in a hexagonal lattice.",

    carbon_nanotube:
      "Carbon nanotubes are cylindrical carbon nanostructures with exceptional mechanical, electrical, and thermal properties.",

    fullerene:
      "Fullerenes are closed carbon cage molecules with structures such as spherical or ellipsoidal carbon frameworks.",

    diamond:
      "Diamond has a three-dimensional covalent carbon network and is extremely hard with high thermal conductivity.",

    graphite:
      "Graphite consists of layered carbon sheets with strong in-plane bonding and weaker interactions between layers."
  },

  // ==========================================================
  // BIOMATERIALS
  // ==========================================================

  biomaterials: {

    definition:
      "Biomaterials are materials engineered to interact with biological systems for medical or biological applications.",

    categories: [
      "Metals",
      "Ceramics",
      "Polymers",
      "Composites",
      "Hydrogels",
      "Bioactive glasses"
    ],

    requirements: [
      "Biocompatibility",
      "Appropriate mechanical properties",
      "Chemical stability",
      "Controlled degradation when desired",
      "Sterilizability",
      "Low toxicity"
    ],

    applications: [
      "Bone implants",
      "Dental implants",
      "Joint replacements",
      "Sutures",
      "Drug delivery",
      "Tissue engineering",
      "Cardiovascular devices"
    ],

    bioactive_materials:
      "Bioactive materials can interact with biological environments and promote specific biological responses."
  },

  // ==========================================================
  // SMART MATERIALS
  // ==========================================================

  smart_materials: {

    definition:
      "Smart materials respond to external stimuli such as temperature, stress, electric fields, magnetic fields, light, or chemical environments.",

    examples: [
      "Shape-memory alloys",
      "Piezoelectric materials",
      "Magnetostrictive materials",
      "Electrochromic materials",
      "Thermochromic materials",
      "Electrorheological materials",
      "Magnetorheological materials"
    ],

    shape_memory_alloys:
      "Shape-memory alloys can recover a predefined shape after deformation when subjected to suitable thermal conditions.",

    piezoelectric_materials:
      "Piezoelectric materials couple mechanical deformation and electrical polarization.",

    electrochromic_materials:
      "Electrochromic materials reversibly change optical properties when electrically stimulated."
  },

  // ==========================================================
  // PHASE-CHANGE MATERIALS
  // ==========================================================

  phase_change_materials: {

    definition:
      "Phase-change materials absorb or release substantial latent heat during a phase transition.",

    applications: [
      "Thermal energy storage",
      "Building temperature control",
      "Electronics cooling",
      "Cold-chain systems",
      "Thermal management"
    ],

    examples: [
      "Paraffins",
      "Salt hydrates",
      "Fatty acids",
      "Ice-water systems"
    ]
  },

  // ==========================================================
  // ENERGY MATERIALS
  // ==========================================================

  energy_materials: {

    batteries: {
      components: [
        "Cathode",
        "Anode",
        "Electrolyte",
        "Separator",
        "Current collectors"
      ],

      important_properties: [
        "Energy density",
        "Power density",
        "Cycle life",
        "Safety",
        "Rate capability",
        "Cost"
      ]
    },

    lithium_ion:
      "Lithium-ion batteries use reversible lithium-ion intercalation or related electrochemical mechanisms and are widely used in portable electronics, electric vehicles, and energy storage.",

    solid_state_batteries:
      "Solid-state batteries use a solid electrolyte instead of a conventional liquid electrolyte and are an active area of materials research.",

    fuel_cells:
      "Fuel cells convert chemical energy into electrical energy through electrochemical reactions.",

    solar_materials: [
      "Crystalline silicon",
      "Thin-film semiconductors",
      "Perovskite materials",
      "Organic photovoltaic materials",
      "III-V semiconductor materials"
    ],

    thermoelectric_materials:
      "Thermoelectric materials convert temperature differences into electrical voltage and can also provide solid-state refrigeration."
  },

  // ==========================================================
  // CORROSION
  // ==========================================================

  corrosion: {

    definition:
      "Corrosion is the degradation of a material, particularly metals, caused by chemical or electrochemical interaction with the environment.",

    electrochemical_corrosion:
      "Electrochemical corrosion involves anodic oxidation and cathodic reduction reactions.",

    anodic_reaction:
      "At an anodic region, metal atoms can lose electrons and enter the environment as ions.",

    cathodic_reaction:
      "At a cathodic region, reduction reactions consume electrons.",

    forms: [
      "Uniform corrosion",
      "Galvanic corrosion",
      "Pitting corrosion",
      "Crevice corrosion",
      "Intergranular corrosion",
      "Stress-corrosion cracking",
      "Erosion-corrosion",
      "Selective leaching",
      "Fretting corrosion"
    ],

    prevention: [
      "Protective coatings",
      "Cathodic protection",
      "Alloy selection",
      "Corrosion inhibitors",
      "Environmental control",
      "Proper design",
      "Passivation"
    ]
  },

  // ==========================================================
  // OXIDATION
  // ==========================================================

  oxidation: {

    definition:
      "Oxidation involves chemical interaction with oxygen or another oxidizing species and can form surface oxides.",

    protective_oxide:
      "Some metals form dense adherent oxide layers that slow further oxidation.",

    nonprotective_oxide:
      "Some oxide layers are porous, cracked, volatile, or poorly adherent and provide limited protection.",

    high_temperature_oxidation:
      "At elevated temperature, oxidation rates and oxide-scale growth can become important engineering considerations."
  },

  // ==========================================================
  // MATERIAL DEGRADATION
  // ==========================================================

  degradation: {

    mechanisms: [
      "Corrosion",
      "Oxidation",
      "Wear",
      "Fatigue",
      "Creep",
      "Radiation damage",
      "Hydrolysis",
      "Photodegradation",
      "Thermal degradation",
      "Biological degradation"
    ],

    wear:
      "Wear is progressive material loss or damage caused by mechanical interaction with another surface or environment.",

    adhesive_wear:
      "Material transfer can occur when contacting surfaces adhere locally and then separate.",

    abrasive_wear:
      "Hard particles or asperities can remove material from a softer surface.",

    erosive_wear:
      "High-speed particles or fluids can progressively remove material.",

    fretting:
      "Fretting is surface damage caused by small-amplitude oscillatory motion between contacting surfaces."
  },

  // ==========================================================
  // PROCESSING
  // ==========================================================

  processing: {

    casting:
      "Casting produces components by pouring or injecting molten material into a mold and allowing it to solidify.",

    forging:
      "Forging shapes material using compressive forces, often at elevated temperature.",

    rolling:
      "Rolling reduces thickness or changes cross-sectional shape by passing material between rotating rolls.",

    extrusion:
      "Extrusion forces material through a die to produce a continuous cross-sectional shape.",

    drawing:
      "Drawing pulls material through a die to reduce cross-sectional dimensions.",

    machining:
      "Machining removes material using cutting tools.",

    welding:
      "Welding joins materials through heat, pressure, or a combination of both.",

    additive_manufacturing:
      "Additive manufacturing creates objects layer by layer from digital designs.",

    powder_metallurgy:
      "Powder metallurgy produces components from powders through compaction, sintering, and related processing.",

    sintering:
      "Sintering bonds particles through heating below the material's melting temperature.",

    injection_molding:
      "Injection molding forces molten polymer into a mold and is widely used for high-volume plastic manufacturing.",

    extrusion_polymer:
      "Polymer extrusion continuously produces profiles, films, sheets, pipes, and fibers."
  },

  // ==========================================================
  // HEAT TREATMENT
  // ==========================================================

  heat_treatment: {

    annealing:
      "Annealing generally involves controlled heating and cooling to reduce hardness, relieve stresses, improve ductility, or modify microstructure.",

    normalizing:
      "Normalizing is commonly applied to steels to refine or homogenize microstructure and obtain desired mechanical properties.",

    quenching:
      "Quenching rapidly cools a material to produce a desired microstructure.",

    tempering:
      "Tempering is a heat treatment applied after hardening, especially in steels, to adjust hardness, toughness, and internal stresses.",

    precipitation_hardening:
      "Precipitation hardening strengthens suitable alloys by forming fine precipitate particles.",

    solution_treatment:
      "Solution heat treatment dissolves soluble phases into a solid solution before controlled cooling and possible aging.",

    aging:
      "Aging allows precipitation or structural changes that modify material properties."
  },

  // ==========================================================
  // SURFACE ENGINEERING
  // ==========================================================

  surface_engineering: {

    definition:
      "Surface engineering modifies the surface or near-surface region of a material to improve performance.",

    techniques: [
      "Coating",
      "Plating",
      "Nitriding",
      "Carburizing",
      "Anodizing",
      "Shot peening",
      "Laser surface treatment",
      "Thermal spraying",
      "Physical vapor deposition",
      "Chemical vapor deposition"
    ],

    surface_hardening:
      "Surface hardening creates a hard wear-resistant outer region while maintaining a tougher interior.",

    shot_peening:
      "Shot peening plastically deforms a surface and can introduce compressive residual stresses that improve fatigue resistance."
  },

  // ==========================================================
  // COATINGS
  // ==========================================================

  coatings: {

    purpose: [
      "Corrosion protection",
      "Wear resistance",
      "Thermal protection",
      "Electrical insulation",
      "Decoration",
      "Optical control",
      "Reduced friction",
      "Chemical resistance"
    ],

    physical_vapor_deposition:
      "PVD deposits thin films through physical vapor-phase processes in a controlled environment.",

    chemical_vapor_deposition:
      "CVD forms coatings through chemical reactions involving gaseous precursors.",

    thermal_spraying:
      "Thermal spraying deposits molten or semi-molten particles onto a substrate.",

    electroplating:
      "Electroplating deposits a metal layer using an electrochemical process."
  },

  // ==========================================================
  // MATERIAL CHARACTERIZATION
  // ==========================================================

  characterization: {

    purpose:
      "Characterization determines composition, structure, microstructure, properties, defects, and performance.",

    optical_microscopy:
      "Optical microscopy uses visible light to examine microstructure.",

    SEM:
      "Scanning electron microscopy produces high-resolution images using an electron beam scanned across a surface.",

    TEM:
      "Transmission electron microscopy transmits electrons through a thin specimen to reveal extremely fine structure.",

    EDS:
      "Energy-dispersive X-ray spectroscopy can provide elemental composition information associated with electron microscopy.",

    XRD:
      "X-ray diffraction identifies crystal structures, phases, lattice parameters, and related crystallographic information.",

    AFM:
      "Atomic force microscopy measures surface topography and other nanoscale properties using a sharp probe.",

    Raman:
      "Raman spectroscopy provides information about molecular and lattice vibrational states.",

    FTIR:
      "Fourier-transform infrared spectroscopy identifies chemical bonds and molecular functional groups.",

    XPS:
      "X-ray photoelectron spectroscopy provides surface-sensitive chemical-state and elemental information.",

    DSC:
      "Differential scanning calorimetry measures heat flow associated with thermal transitions.",

    TGA:
      "Thermogravimetric analysis measures mass changes as a function of temperature or time.",

    tensile_test:
      "A tensile test measures stress-strain behavior and properties such as elastic modulus, yield strength, tensile strength, and ductility.",

    hardness_test: [
      "Brinell",
      "Rockwell",
      "Vickers",
      "Knoop"
    ],

    impact_test:
      "Impact testing measures material response to sudden loading.",

    fatigue_test:
      "Fatigue testing evaluates behavior under cyclic loading.",

    creep_test:
      "Creep testing measures time-dependent deformation under sustained load, often at elevated temperature."
  },

  // ==========================================================
  // MICROSTRUCTURE
  // ==========================================================

  microstructure: {

    definition:
      "Microstructure is the structure of a material observed at microscopic scales.",

    features: [
      "Grains",
      "Grain boundaries",
      "Phases",
      "Precipitates",
      "Inclusions",
      "Pores",
      "Dislocations",
      "Cracks",
      "Second-phase particles"
    ],

    importance:
      "Microstructure controls many engineering properties and can be intentionally modified through composition and processing."
  },

  // ==========================================================
  // MATERIAL SELECTION
  // ==========================================================

  material_selection: {

    factors: [
      "Strength",
      "Stiffness",
      "Density",
      "Toughness",
      "Hardness",
      "Fatigue resistance",
      "Creep resistance",
      "Corrosion resistance",
      "Temperature capability",
      "Electrical conductivity",
      "Thermal conductivity",
      "Manufacturability",
      "Cost",
      "Availability",
      "Recyclability",
      "Environmental impact",
      "Service life",
      "Safety"
    ],

    performance_index:
      "Materials selection can use performance indices that combine properties such as stiffness, strength, density, and cost.",

    design_constraints:
      "Material selection must consider both required performance and manufacturing constraints."
  },

  // ==========================================================
  // FRACTURE MECHANICS
  // ==========================================================

  fracture_mechanics: {

    definition:
      "Fracture mechanics studies crack initiation and propagation using stress, crack geometry, material resistance, and loading conditions.",

    stress_intensity_factor:
      "The stress intensity factor characterizes the intensity of the stress field near a crack tip for appropriate linear-elastic conditions.",

    critical_stress_intensity:
      "Fracture occurs when the relevant crack-driving force reaches a critical material resistance under specified conditions.",

    energy_release_rate:
      "Energy release rate describes the change in potential energy associated with crack extension.",

    ductile_fracture_mechanics:
      "Elastic-plastic fracture mechanics accounts for significant plastic deformation near the crack tip."
  },

  // ==========================================================
  // RESIDUAL STRESS
  // ==========================================================

  residual_stress: {

    definition:
      "Residual stresses are internal stresses that remain in a material after external loads or thermal gradients responsible for producing them have been removed.",

    causes: [
      "Welding",
      "Machining",
      "Heat treatment",
      "Casting",
      "Forging",
      "Rolling",
      "Coating deposition",
      "Phase transformations"
    ],

    effects: [
      "Fatigue life",
      "Distortion",
      "Crack initiation",
      "Dimensional stability",
      "Stress-corrosion behavior"
    ]
  },

  // ==========================================================
  // WELDING MATERIALS SCIENCE
  // ==========================================================

  welding: {

    zones: [
      "Fusion zone",
      "Heat-affected zone",
      "Base metal"
    ],

    heat_affected_zone:
      "The heat-affected zone is the portion of the base material whose microstructure or properties change because of welding heat without necessarily melting.",

    welding_effects: [
      "Grain growth",
      "Phase transformation",
      "Residual stress",
      "Distortion",
      "Porosity",
      "Solidification cracking",
      "Hydrogen-assisted cracking"
    ]
  },

  // ==========================================================
  // ADDITIVE MANUFACTURING
  // ==========================================================

  additive_manufacturing: {

    definition:
      "Additive manufacturing builds components layer by layer from digital geometry.",

    major_processes: [
      "Fused filament fabrication",
      "Stereolithography",
      "Selective laser melting",
      "Laser powder bed fusion",
      "Electron beam melting",
      "Binder jetting",
      "Directed energy deposition"
    ],

    advantages: [
      "Complex geometries",
      "Topology optimization",
      "Rapid prototyping",
      "Reduced material waste",
      "Customization"
    ],

    challenges: [
      "Porosity",
      "Residual stress",
      "Surface roughness",
      "Anisotropy",
      "Process variability",
      "Post-processing requirements"
    ]
  },

  // ==========================================================
  // POWDER METALLURGY
  // ==========================================================

  powder_metallurgy: {

    stages: [
      "Powder production",
      "Blending",
      "Compaction",
      "Sintering",
      "Finishing"
    ],

    advantages: [
      "Near-net-shape production",
      "Controlled composition",
      "Efficient material usage",
      "Porosity control",
      "Special alloy production"
    ],

    applications: [
      "Gears",
      "Cutting tools",
      "Bearings",
      "Filters",
      "Magnetic components"
    ]
  },

  // ==========================================================
  // ELECTRONIC MATERIALS
  // ==========================================================

  electronic_materials: {

    categories: [
      "Semiconductors",
      "Conductors",
      "Dielectrics",
      "Piezoelectrics",
      "Ferroelectrics",
      "Superconductors",
      "Transparent conductors"
    ],

    integrated_circuit_materials:
      "Modern integrated circuits depend on carefully engineered semiconductor, dielectric, conductor, barrier, and interconnect materials.",

    transparent_conductors:
      "Transparent conducting materials combine optical transmission with electrical conductivity and are used in displays, touchscreens, and photovoltaic devices."
  },

  // ==========================================================
  // OPTICAL FIBER MATERIALS
  // ==========================================================

  optical_fibers: {

    core:
      "The core is the central light-guiding region of an optical fiber.",

    cladding:
      "The cladding surrounds the core and has a lower refractive index to support optical confinement.",

    materials:
      "High-purity silica is widely used for optical fibers, with specialized compositions used for specific applications.",

    applications: [
      "Internet communications",
      "Telecommunications",
      "Medical endoscopy",
      "Sensors",
      "Industrial inspection"
    ]
  },

  // ==========================================================
  // POLYMER COMPOSITES
  // ==========================================================

  polymer_composites: {

    examples: [
      "Glass fiber reinforced polymer",
      "Carbon fiber reinforced polymer",
      "Aramid fiber reinforced polymer",
      "Natural fiber composites"
    ],

    properties:
      "Properties depend strongly on fiber type, fiber volume fraction, orientation, matrix chemistry, interface quality, void content, and processing.",

    applications: [
      "Aircraft",
      "Automobiles",
      "Bicycles",
      "Wind turbines",
      "Sports equipment",
      "Marine structures"
    ]
  },

  // ==========================================================
  // CERAMIC MATRIX COMPOSITES
  // ==========================================================

  ceramic_matrix_composites: {

    definition:
      "Ceramic matrix composites contain ceramic matrices reinforced with fibers or other phases.",

    advantages: [
      "High-temperature capability",
      "Improved toughness compared with monolithic ceramics",
      "Low density in selected systems",
      "Wear resistance"
    ],

    applications: [
      "Aerospace",
      "Turbine components",
      "Brake systems",
      "High-temperature structures"
    ]
  },

  // ==========================================================
  // METAL MATRIX COMPOSITES
  // ==========================================================

  metal_matrix_composites: {

    definition:
      "Metal matrix composites combine a metallic matrix with reinforcing particles, fibers, or other phases.",

    matrices: [
      "Aluminum",
      "Magnesium",
      "Titanium",
      "Copper"
    ],

    reinforcements: [
      "Silicon carbide",
      "Alumina",
      "Carbon fibers",
      "Graphite"
    ],

    advantages: [
      "High stiffness",
      "Improved wear resistance",
      "Improved high-temperature performance",
      "Tailored thermal properties"
    ]
  },

  // ==========================================================
  // MATERIALS FOR AEROSPACE
  // ==========================================================

  aerospace_materials: {

    requirements: [
      "High strength-to-weight ratio",
      "Fatigue resistance",
      "Damage tolerance",
      "Temperature resistance",
      "Corrosion resistance",
      "Reliability"
    ],

    materials: [
      "Aluminum alloys",
      "Titanium alloys",
      "Nickel superalloys",
      "Carbon-fiber composites",
      "Ceramic matrix composites",
      "Advanced coatings"
    ]
  },

  // ==========================================================
  // MATERIALS FOR AUTOMOTIVE APPLICATIONS
  // ==========================================================

  automotive_materials: {

    goals: [
      "Weight reduction",
      "Crash safety",
      "Durability",
      "Corrosion resistance",
      "Cost reduction",
      "Thermal management",
      "Fuel efficiency",
      "Electrification"
    ],

    materials: [
      "Advanced high-strength steels",
      "Aluminum alloys",
      "Magnesium alloys",
      "Polymer composites",
      "Engineering plastics",
      "Battery materials"
    ]
  },

  // ==========================================================
  // CONSTRUCTION MATERIALS
  // ==========================================================

  construction_materials: {

    materials: [
      "Concrete",
      "Steel",
      "Brick",
      "Glass",
      "Wood",
      "Aluminum",
      "Polymers",
      "Composite materials"
    ],

    concrete:
      "Concrete is a composite construction material consisting primarily of cementitious binder, aggregates, and water, often with additional admixtures.",

    reinforced_concrete:
      "Reinforced concrete combines concrete's compressive strength with reinforcement that carries tensile loads.",

    durability:
      "Construction materials must resist environmental exposure, moisture, temperature changes, chemical attack, and mechanical loading."
  },

  // ==========================================================
  // MATERIALS FOR MEDICINE
  // ==========================================================

  medical_materials: {

    applications: [
      "Joint replacements",
      "Dental implants",
      "Bone fixation",
      "Cardiovascular devices",
      "Drug delivery",
      "Tissue scaffolds",
      "Surgical tools"
    ],

    metals: [
      "Titanium alloys",
      "Stainless steels",
      "Cobalt-chromium alloys"
    ],

    ceramics: [
      "Alumina",
      "Zirconia",
      "Hydroxyapatite",
      "Bioactive glass"
    ],

    polymers: [
      "Silicone",
      "Polyethylene",
      "Polyurethane",
      "Polylactic acid",
      "Polyglycolic acid"
    ]
  },

  // ==========================================================
  // MATERIALS FOR ENERGY STORAGE
  // ==========================================================

  battery_materials: {

    lithium_ion_components: {

      cathodes: [
        "Lithium cobalt oxide",
        "Lithium iron phosphate",
        "Lithium nickel manganese cobalt oxides",
        "Lithium nickel cobalt aluminum oxides"
      ],

      anodes: [
        "Graphite",
        "Silicon-containing materials",
        "Lithium titanate"
      ],

      electrolytes: [
        "Liquid organic electrolytes",
        "Polymer electrolytes",
        "Solid electrolytes"
      ]
    },

    research_directions: [
      "Higher energy density",
      "Faster charging",
      "Longer cycle life",
      "Improved safety",
      "Reduced dependence on scarce materials",
      "Recyclability",
      "Solid-state batteries",
      "Sodium-ion batteries"
    ]
  },

  // ==========================================================
  // HYDROGEN MATERIALS
  // ==========================================================

  hydrogen_materials: {

    applications: [
      "Hydrogen storage",
      "Fuel cells",
      "Electrolysis",
      "Hydrogen pipelines",
      "Hydrogen-resistant alloys"
    ],

    challenges: [
      "Hydrogen embrittlement",
      "Storage density",
      "Permeation",
      "Material compatibility",
      "Corrosion"
    ]
  },

  // ==========================================================
  // NUCLEAR MATERIALS
  // ==========================================================

  nuclear_materials: {

    requirements: [
      "Radiation resistance",
      "High-temperature stability",
      "Dimensional stability",
      "Corrosion resistance",
      "Mechanical reliability"
    ],

    materials: [
      "Uranium alloys",
      "Zirconium alloys",
      "Stainless steels",
      "Nickel alloys",
      "Ceramics",
      "Graphite"
    ],

    radiation_damage:
      "Energetic particles can displace atoms from their lattice sites, producing defects and changing material properties."
  },

  // ==========================================================
  // RADIATION DAMAGE
  // ==========================================================

  radiation_damage: {

    mechanisms: [
      "Atomic displacement",
      "Point-defect formation",
      "Defect clustering",
      "Swelling",
      "Embrittlement",
      "Radiation-induced segregation"
    ],

    affected_properties: [
      "Strength",
      "Ductility",
      "Thermal conductivity",
      "Dimensional stability",
      "Fracture toughness"
    ]
  },

  // ==========================================================
  // MATERIALS FOR ELECTRIC VEHICLES
  // ==========================================================

  electric_vehicle_materials: {

    categories: [
      "Battery materials",
      "Electric motor magnets",
      "Power electronics semiconductors",
      "Lightweight structural materials",
      "Thermal interface materials",
      "Electrical conductors"
    ],

    motor_materials: [
      "Copper",
      "Electrical steel",
      "Permanent magnet materials",
      "Aluminum"
    ],

    power_semiconductors: [
      "Silicon",
      "Silicon carbide",
      "Gallium nitride"
    ]
  },

  // ==========================================================
  // SUSTAINABLE MATERIALS
  // ==========================================================

  sustainability: {

    definition:
      "Sustainable materials engineering seeks to minimize environmental impact while meeting functional, economic, and safety requirements.",

    principles: [
      "Reduce material consumption",
      "Increase service life",
      "Improve recyclability",
      "Use renewable feedstocks where appropriate",
      "Reduce energy consumption",
      "Reduce toxic substances",
      "Design for repair",
      "Design for reuse",
      "Design for recycling"
    ],

    lifecycle:
      "Material sustainability should consider extraction, processing, manufacturing, transportation, use, maintenance, recycling, and disposal.",

    circular_economy:
      "A circular materials system attempts to keep materials and products in productive use for as long as possible."
  },

  // ==========================================================
  // RECYCLING
  // ==========================================================

  recycling: {

    metal_recycling:
      "Metals can often be recycled by remelting and refining, although contamination and alloy mixing can complicate recycling.",

    polymer_recycling: [
      "Mechanical recycling",
      "Chemical recycling",
      "Feedstock recycling"
    ],

    composite_recycling:
      "Composite recycling can be challenging because fibers and matrices are strongly integrated.",

    battery_recycling:
      "Battery recycling aims to recover valuable metals and materials while reducing waste and environmental impact."
  },

  // ==========================================================
  // MATERIALS FAILURE
  // ==========================================================

  failure_analysis: {

    purpose:
      "Failure analysis identifies why a material or component failed and determines mechanisms responsible for failure.",

    steps: [
      "Collect service history",
      "Inspect failed component",
      "Document fracture surfaces",
      "Perform nondestructive testing",
      "Analyze chemical composition",
      "Examine microstructure",
      "Perform mechanical tests",
      "Identify failure mechanism",
      "Determine root cause",
      "Recommend corrective action"
    ],

    common_causes: [
      "Overload",
      "Fatigue",
      "Corrosion",
      "Wear",
      "Manufacturing defects",
      "Incorrect material selection",
      "Poor heat treatment",
      "Design stress concentration",
      "Environmental attack",
      "Improper maintenance"
    ]
  },

  // ==========================================================
  // NONDESTRUCTIVE TESTING
  // ==========================================================

  nondestructive_testing: {

    definition:
      "Nondestructive testing evaluates materials and components without permanently damaging them.",

    methods: [
      "Visual inspection",
      "Ultrasonic testing",
      "Radiographic testing",
      "Magnetic particle testing",
      "Liquid penetrant testing",
      "Eddy current testing",
      "Thermography"
    ],

    ultrasonic_testing:
      "Ultrasonic testing uses high-frequency sound waves to detect internal discontinuities and measure thickness.",

    radiography:
      "Radiographic testing uses penetrating radiation to reveal internal features.",

    magnetic_particle:
      "Magnetic particle testing detects surface and near-surface discontinuities in suitable ferromagnetic materials.",

    liquid_penetrant:
      "Liquid penetrant testing reveals surface-breaking defects in nonporous materials.",

    eddy_current:
      "Eddy-current testing detects electrical-property and discontinuity-related changes in conductive materials."
  },

  // ==========================================================
  // MATERIALS THERMODYNAMICS
  // ==========================================================

  thermodynamics: {

    free_energy:
      "Gibbs free energy is central to determining phase stability at constant temperature and pressure.",

    entropy:
      "Entropy measures the number of accessible microscopic configurations and plays an important role in phase stability.",

    enthalpy:
      "Enthalpy represents a thermodynamic state function particularly useful for processes involving heat transfer under constant pressure.",

    chemical_potential:
      "Chemical potential describes the change in free energy associated with changing the amount of a component.",

    equilibrium:
      "Thermodynamic equilibrium corresponds to a state in which relevant driving forces for further transformation vanish under specified constraints."
  },

  // ==========================================================
  // MATERIALS KINETICS
  // ==========================================================

  kinetics: {

    definition:
      "Materials kinetics studies the rates of processes such as diffusion, phase transformations, grain growth, and reaction.",

    rate_factors: [
      "Temperature",
      "Diffusion coefficient",
      "Concentration",
      "Interface area",
      "Defect density",
      "Driving force",
      "Microstructure"
    ],

    grain_growth:
      "Grain growth occurs when larger grains grow at the expense of smaller grains, reducing total grain-boundary energy.",

    recrystallization:
      "Recrystallization produces new relatively strain-free grains in a deformed material during heating.",

    recovery:
      "Recovery reduces stored deformation energy through processes such as dislocation rearrangement and annihilation."
  },

  // ==========================================================
  // PLASTIC DEFORMATION
  // ==========================================================

  plasticity: {

    definition:
      "Plastic deformation is permanent deformation caused by mechanisms such as dislocation motion, twinning, or structural rearrangement.",

    slip:
      "Slip is plastic deformation caused by dislocation motion along favorable crystallographic planes and directions.",

    twinning:
      "Deformation twinning occurs when a portion of a crystal changes orientation in a coordinated manner relative to the parent lattice.",

    slip_system:
      "A slip system consists of a crystallographic plane and direction along which dislocations move.",

    cold_working:
      "Cold working plastically deforms a material below a temperature where significant recrystallization occurs.",

    effects_of_cold_working: [
      "Increased strength",
      "Increased hardness",
      "Reduced ductility",
      "Residual stress",
      "Preferred orientation",
      "Stored deformation energy"
    ]
  },

  // ==========================================================
  // MATERIAL ANISOTROPY
  // ==========================================================

  anisotropy: {

    definition:
      "Anisotropy occurs when material properties vary with direction.",

    causes: [
      "Single-crystal structure",
      "Texture",
      "Fiber reinforcement",
      "Layered microstructure",
      "Additive manufacturing",
      "Directional solidification"
    ],

    examples: [
      "Wood",
      "Carbon-fiber composites",
      "Rolled metals",
      "Single crystals"
    ]
  },

  // ==========================================================
  // POROSITY
  // ==========================================================

  porosity: {

    definition:
      "Porosity refers to voids or pores within a material.",

    causes: [
      "Gas entrapment",
      "Incomplete densification",
      "Solidification shrinkage",
      "Processing defects",
      "Powder packing",
      "Moisture"
    ],

    effects: [
      "Reduced strength",
      "Reduced fatigue life",
      "Reduced density",
      "Reduced thermal conductivity",
      "Leakage",
      "Crack initiation"
    ]
  },

  // ==========================================================
  // INTERFACES
  // ==========================================================

  interfaces: {

    definition:
      "An interface separates two regions with different structures, compositions, or phases.",

    examples: [
      "Grain boundaries",
      "Phase boundaries",
      "Fiber-matrix interfaces",
      "Coating-substrate interfaces",
      "Metal-semiconductor interfaces"
    ],

    importance:
      "Interfaces can control diffusion, fracture, adhesion, electrical transport, catalytic activity, and mechanical strengthening."
  },

  // ==========================================================
  // ADHESION
  // ==========================================================

  adhesion: {

    definition:
      "Adhesion is the attraction and bonding between dissimilar materials at an interface.",

    mechanisms: [
      "Mechanical interlocking",
      "Chemical bonding",
      "Physical adsorption",
      "Diffusion",
      "Electrostatic interactions"
    ],

    applications: [
      "Coatings",
      "Adhesives",
      "Composite materials",
      "Electronic packaging",
      "Biomedical devices"
    ]
  },

  // ==========================================================
  // FRICTION
  // ==========================================================

  tribology: {

    definition:
      "Tribology is the study of friction, lubrication, wear, and interacting surfaces in relative motion.",

    friction:
      "Friction is resistance to relative motion between contacting surfaces.",

    lubrication:
      "Lubrication reduces friction and wear by introducing a material between contacting surfaces.",

    regimes: [
      "Boundary lubrication",
      "Mixed lubrication",
      "Hydrodynamic lubrication",
      "Elastohydrodynamic lubrication"
    ],

    applications: [
      "Bearings",
      "Engines",
      "Gears",
      "Seals",
      "Industrial machinery"
    ]
  },

  // ==========================================================
  // ADVANCED MATERIALS
  // ==========================================================

  advanced_materials: {

    categories: [
      "Nanomaterials",
      "Metamaterials",
      "High-entropy alloys",
      "Metal-organic frameworks",
      "Aerogels",
      "Graphene-based materials",
      "2D materials",
      "Bioinspired materials",
      "Self-healing materials",
      "Multifunctional materials"
    ],

    high_entropy_alloys:
      "High-entropy alloys contain multiple principal elements and can exhibit unusual combinations of mechanical, thermal, chemical, and physical properties.",

    metamaterials:
      "Metamaterials are engineered structures whose effective properties arise strongly from designed architecture and can produce unusual electromagnetic, acoustic, or mechanical responses.",

    aerogels:
      "Aerogels are highly porous solids with very low density and often very low thermal conductivity.",

    self_healing_materials:
      "Self-healing materials are designed to repair or partially restore functionality after damage through intrinsic or embedded mechanisms."
  },

  // ==========================================================
  // BIOINSPIRED MATERIALS
  // ==========================================================

  bioinspired_materials: {

    definition:
      "Bioinspired materials imitate structures or strategies found in biological systems.",

    examples: [
      "Nacre-inspired composites",
      "Gecko-inspired adhesives",
      "Shark-skin-inspired surfaces",
      "Bone-inspired scaffolds",
      "Lotus-effect surfaces"
    ],

    principles: [
      "Hierarchical structure",
      "Damage tolerance",
      "Self-assembly",
      "Lightweight reinforcement",
      "Surface functionality",
      "Adaptive behavior"
    ]
  },

  // ==========================================================
  // SELF-ASSEMBLY
  // ==========================================================

  self_assembly: {

    definition:
      "Self-assembly is the spontaneous organization of components into ordered structures through local interactions.",

    applications: [
      "Nanotechnology",
      "Drug delivery",
      "Molecular electronics",
      "Surface coatings",
      "Supramolecular materials"
    ]
  },

  // ==========================================================
  // METAMATERIALS
  // ==========================================================

  metamaterials: {

    electromagnetic:
      "Electromagnetic metamaterials use engineered structures to control electromagnetic waves in ways not easily achieved with conventional materials.",

    acoustic:
      "Acoustic metamaterials manipulate sound propagation through engineered microstructures.",

    mechanical:
      "Mechanical metamaterials derive unusual mechanical behavior from geometry and architecture.",

    applications: [
      "Wave control",
      "Sensors",
      "Acoustics",
      "Vibration isolation",
      "Structural design"
    ]
  },

  // ==========================================================
  // AEROGELS
  // ==========================================================

  aerogels: {

    definition:
      "Aerogels are highly porous solids produced by replacing liquid in a gel with gas while preserving much of the solid network.",

    properties: [
      "Very low density",
      "High porosity",
      "Low thermal conductivity",
      "Large surface area",
      "Low acoustic transmission in selected structures"
    ],

    applications: [
      "Thermal insulation",
      "Energy systems",
      "Catalysis",
      "Sensors",
      "Aerospace"
    ]
  },

  // ==========================================================
  // METAL FOAMS
  // ==========================================================

  metal_foams: {

    definition:
      "Metal foams are metals containing a significant volume fraction of pores or cellular structures.",

    properties: [
      "Low density",
      "Energy absorption",
      "Low thermal mass",
      "Potential acoustic damping",
      "High specific stiffness"
    ],

    applications: [
      "Crash absorbers",
      "Lightweight structures",
      "Heat exchangers",
      "Sound absorption"
    ]
  },

  // ==========================================================
  // HYBRID MATERIALS
  // ==========================================================

  hybrid_materials: {

    definition:
      "Hybrid materials combine different material classes or functional components to achieve complementary properties.",

    examples: [
      "Organic-inorganic hybrids",
      "Polymer-metal hybrids",
      "Ceramic-polymer hybrids",
      "Bioinorganic composites",
      "Multilayer materials"
    ]
  },

  // ==========================================================
  // MATERIALS IN SPACE
  // ==========================================================

  space_materials: {

    environmental_challenges: [
      "Vacuum",
      "Extreme temperature variation",
      "Radiation",
      "Atomic oxygen in low Earth orbit",
      "Micrometeoroids",
      "Thermal cycling",
      "Low gravity"
    ],

    materials: [
      "Aluminum alloys",
      "Titanium alloys",
      "Nickel superalloys",
      "Carbon composites",
      "Ceramics",
      "Thermal protection materials"
    ]
  },

  // ==========================================================
  // THERMAL PROTECTION SYSTEMS
  // ==========================================================

  thermal_protection: {

    purpose:
      "Thermal protection systems protect structures from extreme heat.",

    materials: [
      "Ceramics",
      "Ablative materials",
      "Carbon-carbon composites",
      "Thermal barrier coatings",
      "Insulating foams"
    ],

    ablation:
      "Ablation protects an underlying structure by consuming or transforming material while absorbing and carrying away heat."
  },

  // ==========================================================
  // MATERIALS FOR 3D PRINTING
  // ==========================================================

  additive_materials: {

    polymers: [
      "PLA",
      "ABS",
      "PETG",
      "Nylon",
      "PEEK",
      "Photopolymer resins"
    ],

    metals: [
      "Stainless steels",
      "Titanium alloys",
      "Aluminum alloys",
      "Nickel alloys",
      "Cobalt-chromium alloys"
    ],

    ceramics: [
      "Alumina",
      "Zirconia",
      "Silica-based ceramics"
    ]
  },

  // ==========================================================
  // MATERIALS IN ROBOTICS
  // ==========================================================

  robotics_materials: {

    requirements: [
      "Low mass",
      "High strength",
      "Wear resistance",
      "Fatigue resistance",
      "Electrical functionality",
      "Thermal stability"
    ],

    materials: [
      "Aluminum",
      "Carbon composites",
      "Engineering polymers",
      "Titanium",
      "Shape-memory alloys",
      "Piezoelectric materials",
      "Soft elastomers"
    ]
  },

  // ==========================================================
  // SOFT MATERIALS
  // ==========================================================

  soft_materials: {

    examples: [
      "Elastomers",
      "Hydrogels",
      "Gels",
      "Foams",
      "Colloids",
      "Soft composites"
    ],

    applications: [
      "Soft robotics",
      "Biomedical devices",
      "Flexible electronics",
      "Wearable technology",
      "Drug delivery"
    ]
  },

  // ==========================================================
  // FLEXIBLE ELECTRONICS
  // ==========================================================

  flexible_electronics: {

    materials: [
      "Flexible polymers",
      "Organic semiconductors",
      "Conductive polymers",
      "Nanowires",
      "Graphene",
      "Liquid metals",
      "Thin metal films"
    ],

    applications: [
      "Wearable sensors",
      "Flexible displays",
      "Electronic skin",
      "Foldable devices",
      "Medical monitoring"
    ]
  },

  // ==========================================================
  // MATERIALS FOR SENSORS
  // ==========================================================

  sensor_materials: {

    properties: [
      "Electrical sensitivity",
      "Mechanical sensitivity",
      "Chemical sensitivity",
      "Optical response",
      "Magnetic response",
      "Thermal response"
    ],

    materials: [
      "Semiconductors",
      "Piezoelectrics",
      "Graphene",
      "Carbon nanotubes",
      "Metal oxides",
      "Conductive polymers",
      "Magnetoresistive materials"
    ]
  },

  // ==========================================================
  // MATERIALS FOR WATER TECHNOLOGY
  // ==========================================================

  water_materials: {

    applications: [
      "Filtration",
      "Desalination",
      "Adsorption",
      "Photocatalysis",
      "Membrane separation",
      "Water purification"
    ],

    materials: [
      "Activated carbon",
      "Ceramic membranes",
      "Polymer membranes",
      "Graphene-based membranes",
      "Zeolites",
      "Metal-organic frameworks"
    ]
  },

  // ==========================================================
  // CEMENT AND CONCRETE MATERIALS SCIENCE
  // ==========================================================

  cement_science: {

    cement:
      "Cement is a hydraulic binder that reacts with water to form hardened products.",

    hydration:
      "Hydration involves chemical reactions between cement phases and water that produce binding phases and heat.",

    concrete_properties: [
      "Compressive strength",
      "Durability",
      "Workability",
      "Shrinkage",
      "Creep",
      "Permeability"
    ],

    degradation: [
      "Carbonation",
      "Chloride ingress",
      "Sulfate attack",
      "Freeze-thaw damage",
      "Alkali-silica reaction"
    ]
  },

  // ==========================================================
  // WOOD AS A MATERIAL
  // ==========================================================

  wood: {

    definition:
      "Wood is a natural hierarchical composite consisting primarily of cellulose, hemicellulose, and lignin.",

    properties: [
      "Low density",
      "High specific stiffness",
      "Anisotropy",
      "Moisture sensitivity",
      "Renewability"
    ],

    applications: [
      "Construction",
      "Furniture",
      "Paper",
      "Structural engineering",
      "Composite products"
    ]
  },

  // ==========================================================
  // NATURAL FIBERS
  // ==========================================================

  natural_fibers: {

    examples: [
      "Flax",
      "Hemp",
      "Jute",
      "Sisal",
      "Bamboo",
      "Cotton"
    ],

    applications: [
      "Polymer composites",
      "Textiles",
      "Construction",
      "Packaging",
      "Biodegradable products"
    ]
  },

  // ==========================================================
  // MATERIALS PROCESSING VARIABLES
  // ==========================================================

  processing_variables: {

    temperature:
      "Temperature strongly influences diffusion, phase transformations, viscosity, grain growth, and reaction rates.",

    pressure:
      "Pressure can affect phase stability, deformation, densification, and processing behavior.",

    cooling_rate:
      "Cooling rate can determine the microstructure formed during solidification or phase transformation.",

    heating_rate:
      "Heating rate affects transformation kinetics, thermal gradients, and microstructure.",

    atmosphere:
      "Processing atmosphere can control oxidation, reduction, contamination, and chemical reactions.",

    time:
      "Processing time controls diffusion distances, grain growth, reaction completion, and transformation extent."
  },

  // ==========================================================
  // QUALITY CONTROL
  // ==========================================================

  quality_control: {

    objectives: [
      "Verify material composition",
      "Confirm mechanical properties",
      "Detect defects",
      "Control dimensions",
      "Verify heat treatment",
      "Ensure consistency",
      "Prevent premature failure"
    ],

    tools: [
      "Chemical analysis",
      "Hardness testing",
      "Tensile testing",
      "Microscopy",
      "Nondestructive testing",
      "Dimensional inspection",
      "Surface analysis"
    ]
  },

  // ==========================================================
  // MATERIAL DATABASE CONCEPT
  // ==========================================================

  common_material_comparison: {

    steel: {
      strengths: [
        "High strength",
        "Low cost in many applications",
        "Wide property range",
        "Excellent engineering infrastructure"
      ],
      weaknesses: [
        "High density",
        "Possible corrosion",
        "Potential thermal limitations"
      ]
    },

    aluminum: {
      strengths: [
        "Low density",
        "Corrosion resistance",
        "Good conductivity",
        "Good formability"
      ],
      weaknesses: [
        "Lower stiffness than steel",
        "Some alloys have limited high-temperature capability"
      ]
    },

    titanium: {
      strengths: [
        "High specific strength",
        "Excellent corrosion resistance",
        "Good temperature capability"
      ],
      weaknesses: [
        "Higher cost",
        "More difficult processing"
      ]
    },

    polymer: {
      strengths: [
        "Low density",
        "Easy processing for many types",
        "Electrical insulation",
        "Chemical resistance in selected polymers"
      ],
      weaknesses: [
        "Lower stiffness",
        "Temperature sensitivity",
        "Creep"
      ]
    },

    ceramic: {
      strengths: [
        "High hardness",
        "High temperature capability",
        "Chemical stability",
        "Wear resistance"
      ],
      weaknesses: [
        "Brittleness",
        "Low fracture toughness in many ceramics",
        "Processing challenges"
      ]
    },

    composite: {
      strengths: [
        "Tailored properties",
        "High specific strength",
        "High specific stiffness"
      ],
      weaknesses: [
        "Anisotropy",
        "Complex manufacturing",
        "Difficult recycling for some systems"
      ]
    }
  },

  // ==========================================================
  // KEY EQUATIONS
  // ==========================================================

  equations: {

    density:
      "density = mass / volume",

    stress:
      "stress = force / area",

    strain:
      "strain = change in length / original length",

    youngs_modulus:
      "Young's modulus = stress / elastic strain",

    thermal_expansion:
      "linear thermal expansion is commonly represented as change in length proportional to coefficient of thermal expansion and temperature change.",

    heat_transfer:
      "Fourier's law relates heat flux to the temperature gradient.",

    diffusion:
      "Fick's laws relate atomic flux and concentration changes to concentration gradients and time.",

    hookes_law:
      "Within the linear elastic range, stress is proportional to strain.",

    fracture:
      "Linear elastic fracture mechanics relates crack-tip stress intensity to applied stress, crack size, and geometry.",

    phase_fraction:
      "The lever rule can be used to estimate phase fractions in suitable two-phase equilibrium regions."
  },

  // ==========================================================
  // IMPORTANT TERMINOLOGY
  // ==========================================================

  glossary: {

    alloy:
      "A metallic material containing multiple elements, with at least one being metallic in character.",

    phase:
      "A chemically and physically distinct region of material.",

    grain:
      "A crystalline region within a polycrystalline material.",

    defect:
      "An imperfection in an otherwise ideal material structure.",

    dislocation:
      "A line defect responsible for much plastic deformation in crystalline materials.",

    precipitate:
      "A distinct phase formed within a matrix during precipitation or related transformations.",

    matrix:
      "The continuous phase surrounding another phase or reinforcement.",

    reinforcement:
      "A constituent added to a matrix to improve or modify properties.",

    microstructure:
      "The structure of a material observable at microscopic length scales.",

    heat_treatment:
      "Controlled heating and cooling used to modify material structure and properties.",

    toughness:
      "Ability to absorb energy before fracture.",

    ductility:
      "Ability to undergo plastic deformation before fracture.",

    hardness:
      "Resistance to localized deformation.",

    stiffness:
      "Resistance to elastic deformation.",

    strength:
      "Ability to resist failure or unacceptable deformation under load.",

    fatigue:
      "Progressive damage from repeated loading.",

    creep:
      "Time-dependent deformation under sustained load.",

    corrosion:
      "Chemical or electrochemical degradation of a material.",

    diffusion:
      "Movement of atoms, ions, or molecules through a material.",

    anisotropy:
      "Directional dependence of material properties.",

    isotropy:
      "Approximate direction-independent behavior.",

    amorphous:
      "Lacking long-range crystalline order.",

    crystalline:
      "Possessing long-range periodic atomic order.",

    nanomaterial:
      "Material containing nanoscale structural features or particles.",

    biomaterial:
      "Material designed for interaction with biological systems.",

    composite:
      "Material made from two or more distinct constituents.",

    semiconductor:
      "Material whose electrical conductivity can be controlled and is intermediate between typical conductors and insulators.",

    superconductor:
      "Material exhibiting superconducting behavior below appropriate critical conditions.",

    tribology:
      "Study of friction, lubrication, and wear."
  },

  // ==========================================================
  // APPLICATION AREAS
  // ==========================================================

  applications: [

    "Aerospace engineering",
    "Automotive engineering",
    "Civil engineering",
    "Mechanical engineering",
    "Electrical engineering",
    "Electronics",
    "Semiconductor manufacturing",
    "Energy storage",
    "Renewable energy",
    "Nuclear power",
    "Medical implants",
    "Dental materials",
    "Construction",
    "Robotics",
    "Consumer electronics",
    "Telecommunications",
    "Spacecraft",
    "Defense technology",
    "Marine engineering",
    "Chemical processing",
    "Manufacturing",
    "Nanotechnology",
    "Biotechnology",
    "Environmental technology"
  ],

  // ==========================================================
  // CORE PRINCIPLES
  // ==========================================================

  core_principles: [

    "Material properties arise from structure and composition.",
    "Processing changes microstructure.",
    "Microstructure strongly influences mechanical behavior.",
    "Defects can be harmful or beneficial depending on their type and distribution.",
    "Dislocation motion is central to plastic deformation in crystalline metals.",
    "Grain boundaries can strengthen materials but may also affect diffusion and corrosion.",
    "Temperature strongly affects diffusion and transformation kinetics.",
    "Phase diagrams describe equilibrium relationships but do not by themselves describe transformation rates.",
    "Heat treatment can deliberately modify microstructure.",
    "Composite properties depend strongly on interfaces and reinforcement architecture.",
    "Nanostructure can create size-dependent properties.",
    "Material selection requires balancing performance, manufacturability, cost, safety, and environmental impact.",
    "Failure analysis requires understanding both material behavior and service conditions.",
    "Surface properties can be engineered independently from bulk properties.",
    "Materials engineering connects scientific principles with practical product design."
  ],

  // ==========================================================
  // COMMON QUESTIONS
  // ==========================================================

  common_questions: {

    what_is_materials_science:
      "Materials science is the study of how composition, atomic structure, microstructure, processing, and environment determine material properties and performance.",

    why_are_materials_important:
      "Materials determine what technologies can be built, how efficiently they operate, how long they last, and how safely they perform.",

    why_are_metals_ductile:
      "Metallic bonding and the availability of dislocation-mediated slip systems allow many metals to undergo substantial plastic deformation.",

    why_are_ceramics_brittle:
      "Strong directional bonding and limited available mechanisms for plastic deformation make many ceramics susceptible to brittle fracture.",

    why_are_polymers_light:
      "Polymers are composed primarily of relatively light elements and often have low density compared with metals and ceramics.",

    why_are_composites_strong:
      "Composites can combine strong reinforcement with a load-transferring matrix, producing high specific strength and stiffness.",

    why_is_microstructure_important:
      "Microstructure determines how cracks, dislocations, diffusion, phase transformations, and other mechanisms occur.",

    why_does_grain_size_matter:
      "Grain size affects strength, toughness, diffusion, corrosion, creep, and other properties.",

    why_do_materials_fail:
      "Materials fail when stresses, environmental conditions, defects, degradation, or combinations of these exceed the material's ability to maintain required performance.",

    why_are_nanomaterials_different:
      "At nanoscale dimensions, high surface area and size-dependent physical effects can substantially alter material behavior."
  }
};

export default MATERIALS_SCIENCE_KNOWLEDGE;
