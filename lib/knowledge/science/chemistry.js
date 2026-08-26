// lib/knowledge/science/chemistry.js

// ============================================================
// REZE SCIENCE KNOWLEDGE
// CHEMISTRY
// ============================================================
//
// Purpose:
// A structured chemistry reference for Reze.
//
// This file is intentionally standalone.
// Do NOT modify lib/knowledge/index.js yet.
//
// Coverage:
// - Chemistry fundamentals
// - Matter
// - Atomic structure
// - Isotopes
// - Periodic table
// - Electron configuration
// - Chemical bonding
// - Molecular structure
// - Intermolecular forces
// - Chemical equations
// - Stoichiometry
// - Solutions
// - Acids and bases
// - pH
// - Buffers
// - Redox
// - Electrochemistry
// - Thermochemistry
// - Chemical kinetics
// - Chemical equilibrium
// - Le Chatelier's principle
// - Organic chemistry
// - Hydrocarbons
// - Functional groups
// - Polymers
// - Biochemistry
// - Inorganic chemistry
// - Coordination chemistry
// - Nuclear chemistry
// - Analytical chemistry
// - Environmental chemistry
// - Industrial chemistry
// - Materials chemistry
// - Laboratory concepts
// - Common chemical substances
// - Important equations
//
// ============================================================

const CHEMISTRY_KNOWLEDGE = {

  // ==========================================================
  // 1. CHEMISTRY OVERVIEW
  // ==========================================================

  overview: {
    definition:
      "Chemistry is the branch of science that studies matter, its composition, structure, properties, transformations, and the energy associated with those transformations.",

    majorBranches: [
      "Organic chemistry",
      "Inorganic chemistry",
      "Physical chemistry",
      "Analytical chemistry",
      "Biochemistry",
      "Theoretical chemistry",
      "Environmental chemistry",
      "Materials chemistry",
      "Nuclear chemistry",
      "Medicinal chemistry",
      "Industrial chemistry"
    ],

    centralIdeas: [
      "Matter is composed of atoms and molecules.",
      "Atoms contain nuclei surrounded by electrons.",
      "Chemical properties depend strongly on electronic structure.",
      "Chemical reactions rearrange atoms rather than normally creating or destroying them.",
      "Energy can be absorbed or released during chemical change.",
      "The behavior of substances depends on composition, structure, temperature, pressure, and environment.",
      "Chemical equilibrium describes competing forward and reverse processes.",
      "Reaction rates describe how quickly chemical changes occur."
    ]
  },


  // ==========================================================
  // 2. MATTER
  // ==========================================================

  matter: {

    definition:
      "Matter is physical substance that has mass and occupies space.",

    states: {
      solid: {
        description:
          "A solid has a definite shape and definite volume. Its particles are relatively close together and usually vibrate around relatively fixed positions."
      },

      liquid: {
        description:
          "A liquid has a definite volume but takes the shape of its container. Its particles can move relative to one another."
      },

      gas: {
        description:
          "A gas has neither a fixed shape nor a fixed volume. Its particles are widely separated and move freely."
      },

      plasma: {
        description:
          "Plasma is an ionized state of matter containing free charged particles. It occurs naturally in stars and lightning and is also produced in technologies such as plasma displays and fusion experiments."
      }
    },

    classifications: {
      pureSubstance: {
        description:
          "A substance with a constant composition.",
        types: [
          "Element",
          "Compound"
        ]
      },

      mixture: {
        description:
          "A physical combination of two or more substances.",
        types: [
          "Homogeneous mixture",
          "Heterogeneous mixture"
        ]
      }
    },

    physicalProperties: [
      "Mass",
      "Volume",
      "Density",
      "Melting point",
      "Boiling point",
      "Color",
      "Electrical conductivity",
      "Thermal conductivity",
      "Solubility",
      "Hardness"
    ],

    chemicalProperties: [
      "Flammability",
      "Reactivity with oxygen",
      "Reactivity with acids",
      "Reactivity with bases",
      "Oxidation behavior",
      "Reduction behavior",
      "Corrosiveness",
      "Chemical stability"
    ],

    physicalChange:
      "A physical change alters the physical state or appearance of a substance without changing its chemical identity.",

    chemicalChange:
      "A chemical change produces one or more substances with different chemical identities."
  },


  // ==========================================================
  // 3. ELEMENTS
  // ==========================================================

  elements: {

    definition:
      "An element is a pure substance consisting of atoms with the same number of protons in their nuclei.",

    atomicNumber:
      "The atomic number is the number of protons in an atom's nucleus.",

    examples: [
      {
        name: "Hydrogen",
        symbol: "H",
        atomicNumber: 1
      },
      {
        name: "Helium",
        symbol: "He",
        atomicNumber: 2
      },
      {
        name: "Carbon",
        symbol: "C",
        atomicNumber: 6
      },
      {
        name: "Nitrogen",
        symbol: "N",
        atomicNumber: 7
      },
      {
        name: "Oxygen",
        symbol: "O",
        atomicNumber: 8
      },
      {
        name: "Sodium",
        symbol: "Na",
        atomicNumber: 11
      },
      {
        name: "Magnesium",
        symbol: "Mg",
        atomicNumber: 12
      },
      {
        name: "Aluminum",
        symbol: "Al",
        atomicNumber: 13
      },
      {
        name: "Silicon",
        symbol: "Si",
        atomicNumber: 14
      },
      {
        name: "Chlorine",
        symbol: "Cl",
        atomicNumber: 17
      },
      {
        name: "Potassium",
        symbol: "K",
        atomicNumber: 19
      },
      {
        name: "Calcium",
        symbol: "Ca",
        atomicNumber: 20
      },
      {
        name: "Iron",
        symbol: "Fe",
        atomicNumber: 26
      },
      {
        name: "Copper",
        symbol: "Cu",
        atomicNumber: 29
      },
      {
        name: "Zinc",
        symbol: "Zn",
        atomicNumber: 30
      },
      {
        name: "Silver",
        symbol: "Ag",
        atomicNumber: 47
      },
      {
        name: "Gold",
        symbol: "Au",
        atomicNumber: 79
      },
      {
        name: "Mercury",
        symbol: "Hg",
        atomicNumber: 80
      },
      {
        name: "Lead",
        symbol: "Pb",
        atomicNumber: 82
      },
      {
        name: "Uranium",
        symbol: "U",
        atomicNumber: 92
      }
    ]
  },


  // ==========================================================
  // 4. ATOMIC STRUCTURE
  // ==========================================================

  atomicStructure: {

    atom:
      "An atom is the smallest unit of an element that retains the chemical identity of that element.",

    particles: {

      proton: {
        charge: "+1",
        location: "Nucleus",
        role:
          "Determines the atomic number and therefore the identity of the element."
      },

      neutron: {
        charge: "0",
        location: "Nucleus",
        role:
          "Contributes to nuclear mass and affects isotope identity and nuclear stability."
      },

      electron: {
        charge: "-1",
        location: "Electron orbitals around the nucleus",
        role:
          "Strongly influences chemical bonding and chemical reactivity."
      }
    },

    nucleus:
      "The atomic nucleus contains protons and neutrons and contains nearly all of an atom's mass.",

    neutrality:
      "A neutral atom has equal numbers of protons and electrons.",

    ion:
      "An ion is an atom or molecule with a net electric charge because electrons have been gained or lost.",

    cation:
      "A positively charged ion formed when an atom or molecule loses electrons.",

    anion:
      "A negatively charged ion formed when an atom or molecule gains electrons."
  },


  // ==========================================================
  // 5. ISOTOPES
  // ==========================================================

  isotopes: {

    definition:
      "Isotopes are atoms of the same element that have the same number of protons but different numbers of neutrons.",

    examples: [
      "Hydrogen-1",
      "Hydrogen-2 (deuterium)",
      "Hydrogen-3 (tritium)",
      "Carbon-12",
      "Carbon-13",
      "Carbon-14",
      "Chlorine-35",
      "Chlorine-37"
    ],

    massNumber:
      "Mass number is the total number of protons and neutrons in a nucleus.",

    notation:
      "An isotope can be written using the element name followed by its mass number, such as carbon-14.",

    radioactiveIsotope:
      "A radioactive isotope has an unstable nucleus that undergoes radioactive decay."
  },


  // ==========================================================
  // 6. ELECTRON CONFIGURATION
  // ==========================================================

  electronConfiguration: {

    principle:
      "Electrons occupy atomic orbitals according to quantum-mechanical rules.",

    shells:
      "Electrons can be organized into principal energy levels commonly represented by n = 1, 2, 3, and so on.",

    subshells: [
      "s",
      "p",
      "d",
      "f"
    ],

    orbitalCapacity: {
      s: 2,
      p: 6,
      d: 10,
      f: 14
    },

    rules: {
      aufbau:
        "Electrons generally occupy lower-energy orbitals before higher-energy orbitals.",

      pauli:
        "No two electrons in the same atom can have the same complete set of four quantum numbers.",

      hund:
        "Electrons occupy degenerate orbitals singly before pairing when following the lowest-energy arrangement."
    },

    examples: {
      hydrogen:
        "1s¹",

      helium:
        "1s²",

      carbon:
        "1s² 2s² 2p²",

      oxygen:
        "1s² 2s² 2p⁴",

      sodium:
        "1s² 2s² 2p⁶ 3s¹",

      chlorine:
        "1s² 2s² 2p⁶ 3s² 3p⁵"
    },

    valenceElectrons:
      "Valence electrons are electrons in the outermost occupied shell that often play a major role in chemical bonding."
  },


  // ==========================================================
  // 7. PERIODIC TABLE
  // ==========================================================

  periodicTable: {

    definition:
      "The periodic table organizes chemical elements primarily according to atomic number and recurring chemical properties.",

    periods:
      "Rows of the periodic table are called periods.",

    groups:
      "Columns of the periodic table are called groups.",

    importantGroups: {

      group1: {
        name: "Alkali metals",
        characteristics: [
          "Highly reactive metals",
          "One common valence electron",
          "Often form +1 ions"
        ]
      },

      group2: {
        name: "Alkaline earth metals",
        characteristics: [
          "Reactive metals",
          "Two common valence electrons",
          "Often form +2 ions"
        ]
      },

      group17: {
        name: "Halogens",
        characteristics: [
          "Reactive nonmetals",
          "Seven valence electrons",
          "Often form -1 ions"
        ]
      },

      group18: {
        name: "Noble gases",
        characteristics: [
          "Very low chemical reactivity under ordinary conditions",
          "Filled valence shell in the usual ground-state configuration"
        ]
      }
    },

    blocks: [
      "s-block",
      "p-block",
      "d-block",
      "f-block"
    ],

    broadCategories: [
      "Metals",
      "Nonmetals",
      "Metalloids"
    ],

    periodicTrends: {

      atomicRadius:
        "Atomic radius generally decreases from left to right across a period and increases down a group, although precise definitions and trends vary.",

      ionizationEnergy:
        "Ionization energy generally increases across a period and decreases down a group.",

      electronegativity:
        "Electronegativity generally increases toward the upper-right region of the periodic table, with important exceptions.",

      electronAffinity:
        "Electron affinity describes the energy change associated with adding an electron to a neutral atom in the gas phase; trends are less uniform than ionization-energy trends."
    }
  },


  // ==========================================================
  // 8. CHEMICAL BONDING
  // ==========================================================

  bonding: {

    overview:
      "Chemical bonds are interactions that hold atoms or ions together in chemical substances.",

    ionicBond:
      "An ionic bond results from electrostatic attraction between oppositely charged ions, commonly formed after electron transfer between atoms.",

    covalentBond:
      "A covalent bond involves sharing electrons between atoms.",

    metallicBond:
      "Metallic bonding involves metal atoms in a lattice with electrons that are delocalized across the structure.",

    covalentTypes: [
      "Nonpolar covalent",
      "Polar covalent"
    ],

    bondOrder: {
      single:
        "One shared electron pair between two atoms.",

      double:
        "Two shared electron pairs.",

      triple:
        "Three shared electron pairs."
    },

    bondStrength:
      "Bond strength describes how strongly atoms are held together. Bond energy is often used as an approximate measure of the energy required to break a particular bond in the gas phase.",

    bondLength:
      "Bond length is the average distance between the nuclei of bonded atoms."
  },


  // ==========================================================
  // 9. MOLECULAR STRUCTURE
  // ==========================================================

  molecularStructure: {

    molecule:
      "A molecule is a discrete group of atoms held together by covalent interactions.",

    chemicalFormula:
      "A chemical formula represents the elemental composition of a substance.",

    structuralFormula:
      "A structural formula provides information about how atoms are connected.",

    lewisStructures:
      "Lewis structures represent valence electrons and bonding patterns using symbols, lines, and electron dots.",

    octetRule:
      "The octet rule is a useful guideline stating that many main-group atoms tend to achieve eight valence electrons in stable compounds, although many important exceptions exist.",

    vbt:
      "Valence bond theory describes covalent bonds using overlapping atomic orbitals.",

    molecularOrbitalTheory:
      "Molecular orbital theory describes electrons as occupying orbitals that extend over multiple atoms in a molecule.",

    resonance:
      "Resonance is a representation technique in which multiple valid Lewis structures describe a delocalized electronic structure.",

    formalCharge:
      "Formal charge is a bookkeeping method used to evaluate electron distribution in Lewis structures."
  },


  // ==========================================================
  // 10. MOLECULAR GEOMETRY
  // ==========================================================

  molecularGeometry: {

    theory:
      "VSEPR theory predicts molecular geometry by considering repulsions between regions of electron density around a central atom.",

    geometries: {
      linear:
        "Approximately 180° bond angle in the ideal two-region case.",

      trigonalPlanar:
        "Approximately 120° in the ideal three-region case.",

      tetrahedral:
        "Approximately 109.5° in the ideal four-region case.",

      trigonalBipyramidal:
        "Five electron regions arranged around a central atom.",

      octahedral:
        "Six electron regions arranged around a central atom."
    },

    examples: {
      CO2: "Linear",
      BF3: "Trigonal planar",
      CH4: "Tetrahedral",
      NH3: "Trigonal pyramidal",
      H2O: "Bent"
    }
  },


  // ==========================================================
  // 11. INTERMOLECULAR FORCES
  // ==========================================================

  intermolecularForces: {

    definition:
      "Intermolecular forces are attractions between molecules or other chemical particles.",

    types: [
      "London dispersion forces",
      "Dipole-dipole interactions",
      "Hydrogen bonding",
      "Ion-dipole interactions"
    ],

    londonDispersion:
      "London dispersion forces arise from temporary fluctuations in electron distribution and occur between all atoms and molecules.",

    dipoleDipole:
      "Dipole-dipole interactions occur between molecules with permanent electric dipoles.",

    hydrogenBond:
      "Hydrogen bonding is a particularly strong dipole-related interaction involving hydrogen bonded to highly electronegative atoms such as nitrogen, oxygen, or fluorine and an appropriate electron-rich site.",

    ionDipole:
      "Ion-dipole interactions occur between ions and polar molecules and are important in dissolving ionic compounds in polar solvents."
  },


  // ==========================================================
  // 12. CHEMICAL REACTIONS
  // ==========================================================

  reactions: {

    definition:
      "A chemical reaction converts reactants into products through changes in chemical bonding and molecular or ionic arrangement.",

    commonTypes: [
      "Synthesis",
      "Decomposition",
      "Single displacement",
      "Double displacement",
      "Combustion",
      "Acid-base reaction",
      "Redox reaction",
      "Precipitation reaction"
    ],

    synthesis:
      "Two or more reactants combine to form a product.",

    decomposition:
      "A compound breaks into simpler substances.",

    singleDisplacement:
      "One element replaces another element in a compound.",

    doubleDisplacement:
      "Ions exchange partners between two compounds.",

    combustion:
      "A substance reacts with an oxidant, commonly oxygen, often producing substantial heat and sometimes light.",

    precipitation:
      "A reaction in solution produces an insoluble or sparingly soluble solid.",

    conservationOfMass:
      "In ordinary chemical reactions, atoms are conserved, so a balanced equation has the same number of each type of atom on both sides."
  },


  // ==========================================================
  // 13. CHEMICAL EQUATIONS
  // ==========================================================

  equations: {

    balancedEquation:
      "A balanced chemical equation has equal numbers of each element's atoms on both sides.",

    example:
      "2H₂ + O₂ → 2H₂O",

    coefficients:
      "Coefficients multiply entire chemical formulas and are used to balance equations.",

    states: {
      solid: "(s)",
      liquid: "(l)",
      gas: "(g)",
      aqueous: "(aq)"
    },

    reactionArrow:
      "The arrow generally indicates conversion of reactants into products."
  },


  // ==========================================================
  // 14. MOLES
  // ==========================================================

  moleConcept: {

    definition:
      "The mole is the SI unit for amount of substance.",

    avogadroConstant:
      "The Avogadro constant is approximately 6.02214076 × 10²³ entities per mole.",

    molarMass:
      "Molar mass is the mass of one mole of a substance, commonly expressed in g/mol.",

    equation:
      "n = m / M",

    variables: {
      n: "amount in moles",
      m: "mass",
      M: "molar mass"
    },

    particleRelationship:
      "Number of particles = moles × Avogadro constant."
  },


  // ==========================================================
  // 15. STOICHIOMETRY
  // ==========================================================

  stoichiometry: {

    definition:
      "Stoichiometry is the quantitative study of relationships between reactants and products in chemical reactions.",

    majorSteps: [
      "Write the correct chemical equation.",
      "Balance the equation.",
      "Convert known quantities into moles.",
      "Use mole ratios from the balanced equation.",
      "Convert the result into the requested unit."
    ],

    limitingReactant:
      "The limiting reactant is the reactant consumed first and therefore determines the maximum theoretical amount of product.",

    excessReactant:
      "An excess reactant remains after the limiting reactant has been consumed.",

    theoreticalYield:
      "The maximum amount of product predicted by stoichiometry.",

    actualYield:
      "The amount of product actually obtained experimentally.",

    percentYield:
      "% yield = (actual yield / theoretical yield) × 100"
  },


  // ==========================================================
  // 16. SOLUTIONS
  // ==========================================================

  solutions: {

    definition:
      "A solution is a homogeneous mixture consisting of one or more solutes dissolved in a solvent.",

    solvent:
      "The component present in greater amount that dissolves the solute.",

    solute:
      "A substance dissolved in a solvent.",

    concentration: {
      molarity:
        "Molarity is moles of solute per liter of solution.",

      equation:
        "M = n / V",

      molality:
        "Molality is moles of solute per kilogram of solvent.",

      massPercent:
        "Mass percent = (mass of solute / mass of solution) × 100"
    },

    dilution:
      "Dilution decreases concentration by adding solvent while keeping the amount of solute approximately constant.",

    dilutionEquation:
      "M₁V₁ = M₂V₂",

    solubility:
      "Solubility is the maximum amount of a substance that can dissolve under specified conditions."
  },


  // ==========================================================
  // 17. ACIDS AND BASES
  // ==========================================================

  acidsBases: {

    arrhenius: {
      acid:
        "An Arrhenius acid increases H⁺ concentration in aqueous solution.",

      base:
        "An Arrhenius base increases OH⁻ concentration in aqueous solution."
    },

    bronstedLowry: {
      acid:
        "A Brønsted-Lowry acid donates a proton.",

      base:
        "A Brønsted-Lowry base accepts a proton."
    },

    lewis: {
      acid:
        "A Lewis acid accepts an electron pair.",

      base:
        "A Lewis base donates an electron pair."
    },

    strongAcids: [
      "Hydrochloric acid",
      "Hydrobromic acid",
      "Hydroiodic acid",
      "Nitric acid",
      "Perchloric acid",
      "Sulfuric acid (for its first ionization)"
    ],

    commonWeakAcids: [
      "Acetic acid",
      "Carbonic acid",
      "Hydrofluoric acid",
      "Formic acid"
    ],

    commonBases: [
      "Sodium hydroxide",
      "Potassium hydroxide",
      "Calcium hydroxide",
      "Ammonia"
    ]
  },


  // ==========================================================
  // 18. pH
  // ==========================================================

  pH: {

    definition:
      "pH is a logarithmic measure related to hydrogen-ion activity in a solution.",

    simplifiedAqueousDefinition:
      "For dilute aqueous solutions, pH is often approximated as -log₁₀[H⁺].",

    equation:
      "pH = -log₁₀[H⁺]",

    pOH:
      "pOH = -log₁₀[OH⁻]",

    relationship:
      "At approximately 25°C in dilute aqueous solution, pH + pOH ≈ 14.",

    scale:
      "At about 25°C, pH 7 is neutral in pure water, values below 7 are acidic, and values above 7 are basic."
  },


  // ==========================================================
  // 19. BUFFERS
  // ==========================================================

  buffers: {

    definition:
      "A buffer is a solution that resists large changes in pH when relatively small amounts of acid or base are added.",

    composition:
      "A typical buffer contains a weak acid and its conjugate base, or a weak base and its conjugate acid.",

    hendersonHasselbalch:
      "pH = pKa + log₁₀([A⁻]/[HA])",

    importance: [
      "Biological systems",
      "Chemical laboratories",
      "Pharmaceutical formulations",
      "Industrial processes"
    ]
  },


  // ==========================================================
  // 20. CHEMICAL EQUILIBRIUM
  // ==========================================================

  equilibrium: {

    definition:
      "Chemical equilibrium occurs in a reversible reaction when the forward and reverse reaction rates are equal, producing constant macroscopic concentrations.",

    dynamicNature:
      "Equilibrium is dynamic because molecular reactions continue even though macroscopic concentrations remain approximately constant.",

    equilibriumConstant:
      "For a reaction, the equilibrium constant expresses the relative amounts of products and reactants at equilibrium, using activities or appropriate concentration/pressure forms.",

    example:
      "For aA + bB ⇌ cC + dD, K = (aC^c aD^d) / (aA^a aB^b) when expressed using activities."
  },


  // ==========================================================
  // 21. LE CHATELIER
  // ==========================================================

  leChatelier: {

    principle:
      "When an equilibrium system is disturbed, the system tends to shift in a direction that partially counteracts the disturbance.",

    disturbances: [
      "Changes in concentration",
      "Changes in pressure or volume for gaseous systems",
      "Changes in temperature"
    ],

    catalyst:
      "A catalyst speeds both forward and reverse reactions and therefore does not change the equilibrium constant or equilibrium composition."
  },


  // ==========================================================
  // 22. REDOX
  // ==========================================================

  redox: {

    definition:
      "Redox reactions involve changes in oxidation states and electron transfer or equivalent electron redistribution.",

    oxidation:
      "Oxidation is commonly described as loss of electrons or an increase in oxidation state.",

    reduction:
      "Reduction is commonly described as gain of electrons or a decrease in oxidation state.",

    mnemonic:
      "OIL RIG: Oxidation Is Loss, Reduction Is Gain.",

    oxidizingAgent:
      "An oxidizing agent accepts electrons and is reduced.",

    reducingAgent:
      "A reducing agent donates electrons and is oxidized.",

    oxidationNumber:
      "An oxidation number is a formal bookkeeping value used to track electron ownership in compounds and ions."
  },


  // ==========================================================
  // 23. ELECTROCHEMISTRY
  // ==========================================================

  electrochemistry: {

    definition:
      "Electrochemistry studies chemical processes involving electricity and electrical processes driven by chemical reactions.",

    galvanicCell:
      "A galvanic or voltaic cell generates electrical energy from a spontaneous redox reaction.",

    electrolyticCell:
      "An electrolytic cell uses electrical energy to drive a nonspontaneous chemical reaction.",

    anode:
      "Oxidation occurs at the anode.",

    cathode:
      "Reduction occurs at the cathode.",

    mnemonic:
      "An Ox, Red Cat: oxidation at the anode and reduction at the cathode.",

    faradaysLaw:
      "The amount of substance produced or consumed during electrolysis is related to the total electric charge transferred.",

    standardCellPotential:
      "For a galvanic cell under standard conditions, E°cell = E°cathode - E°anode."
  },


  // ==========================================================
  // 24. THERMOCHEMISTRY
  // ==========================================================

  thermochemistry: {

    definition:
      "Thermochemistry studies heat changes associated with chemical reactions and physical processes.",

    system:
      "The portion of the universe being studied.",

    surroundings:
      "Everything outside the system.",

    exothermic:
      "An exothermic process releases heat to the surroundings and commonly has ΔH < 0 for a reaction under constant pressure.",

    endothermic:
      "An endothermic process absorbs heat from the surroundings and commonly has ΔH > 0 for a reaction under constant pressure.",

    enthalpy:
      "Enthalpy is a thermodynamic state function commonly used to describe heat transfer at constant pressure.",

    hessLaw:
      "Hess's law states that the enthalpy change of a reaction depends only on the initial and final states, so reaction enthalpies can be added for a sequence of reactions.",

    heatEquation:
      "q = mcΔT",

    variables: {
      q: "heat transferred",
      m: "mass",
      c: "specific heat capacity",
      deltaT: "temperature change"
    }
  },


  // ==========================================================
  // 25. CHEMICAL KINETICS
  // ==========================================================

  kinetics: {

    definition:
      "Chemical kinetics studies reaction rates and the factors that affect them.",

    reactionRate:
      "Reaction rate describes how quickly reactants are consumed or products are formed.",

    factors: [
      "Concentration",
      "Temperature",
      "Surface area",
      "Pressure for gases",
      "Catalysts",
      "Nature of reactants"
    ],

    collisionTheory:
      "Collision theory explains reaction rates in terms of particle collisions with sufficient energy and suitable orientation.",

    activationEnergy:
      "Activation energy is the minimum energy barrier associated with a reaction pathway.",

    catalyst:
      "A catalyst provides an alternative reaction pathway with lower activation energy and is regenerated during the overall reaction.",

    rateLaw:
      "A rate law relates reaction rate to reactant concentrations through experimentally determined reaction orders.",

    example:
      "rate = k[A]^m[B]^n"
  },


  // ==========================================================
  // 26. ORGANIC CHEMISTRY
  // ==========================================================

  organicChemistry: {

    definition:
      "Organic chemistry primarily studies carbon-containing compounds, especially their structures, properties, reactions, and synthesis.",

    centralElement:
      "Carbon",

    carbonProperties: [
      "Forms four covalent bonds in many stable compounds.",
      "Forms chains and rings.",
      "Forms single, double, and triple bonds.",
      "Can bond strongly to itself.",
      "Forms compounds with hydrogen, oxygen, nitrogen, sulfur, phosphorus, and halogens."
    ],

    majorAreas: [
      "Hydrocarbons",
      "Functional groups",
      "Stereochemistry",
      "Organic reactions",
      "Polymer chemistry",
      "Biological organic chemistry"
    ]
  },


  // ==========================================================
  // 27. HYDROCARBONS
  // ==========================================================

  hydrocarbons: {

    definition:
      "Hydrocarbons contain only carbon and hydrogen.",

    classes: {

      alkane:
        "Saturated hydrocarbons containing primarily carbon-carbon single bonds.",

      alkene:
        "Hydrocarbons containing at least one carbon-carbon double bond.",

      alkyne:
        "Hydrocarbons containing at least one carbon-carbon triple bond.",

      aromatic:
        "Cyclic conjugated systems with special electronic stabilization, with benzene as a fundamental example."
    },

    examples: [
      "Methane",
      "Ethane",
      "Propane",
      "Butane",
      "Ethene",
      "Propene",
      "Ethyne",
      "Benzene"
    ]
  },


  // ==========================================================
  // 28. FUNCTIONAL GROUPS
  // ==========================================================

  functionalGroups: {

    hydroxyl:
      "Alcohol functional group: -OH",

    carbonyl:
      "Carbonyl group: C=O",

    aldehyde:
      "Aldehyde functional group contains a carbonyl carbon bonded to hydrogen.",

    ketone:
      "Ketone functional group contains a carbonyl carbon bonded to two carbon groups.",

    carboxylicAcid:
      "Carboxyl group: -COOH",

    ester:
      "Ester functional group commonly represented as -COOR.",

    ether:
      "Ether functional group contains an oxygen bonded to two carbon groups.",

    amine:
      "Amines are nitrogen-containing organic compounds derived conceptually from ammonia.",

    amide:
      "Amides contain a carbonyl group directly bonded to nitrogen.",

    nitrile:
      "Nitriles contain a carbon-nitrogen triple bond: -C≡N.",

    thiol:
      "Thiols contain a sulfur-hydrogen group: -SH."
  },


  // ==========================================================
  // 29. ORGANIC REACTIONS
  // ==========================================================

  organicReactions: {

    substitution:
      "One atom or group is replaced by another.",

    addition:
      "Atoms or groups add across a multiple bond.",

    elimination:
      "Atoms or groups are removed, often producing a multiple bond.",

    oxidation:
      "Organic oxidation often involves increased bonding to oxygen, decreased bonding to hydrogen, or changes in oxidation state.",

    reduction:
      "Organic reduction often involves increased bonding to hydrogen, decreased bonding to oxygen, or changes in oxidation state.",

    hydrolysis:
      "A bond is cleaved through reaction involving water.",

    esterification:
      "A common esterification reaction forms an ester from a carboxylic acid and an alcohol, often with acid catalysis."
  },


  // ==========================================================
  // 30. STEREOCHEMISTRY
  // ==========================================================

  stereochemistry: {

    definition:
      "Stereochemistry studies the three-dimensional arrangement of atoms in molecules.",

    stereoisomer:
      "Compounds with the same connectivity but different spatial arrangements.",

    enantiomer:
      "A pair of stereoisomers that are non-superimposable mirror images.",

    diastereomer:
      "Stereoisomers that are not mirror images of one another.",

    chirality:
      "A molecule is chiral when it is not superimposable on its mirror image.",

    importance: [
      "Drug activity",
      "Biochemistry",
      "Molecular recognition",
      "Materials science"
    ]
  },


  // ==========================================================
  // 31. POLYMERS
  // ==========================================================

  polymers: {

    definition:
      "Polymers are large molecules made from repeating structural units called monomers.",

    naturalPolymers: [
      "Cellulose",
      "Starch",
      "Proteins",
      "DNA",
      "Natural rubber"
    ],

    syntheticPolymers: [
      "Polyethylene",
      "Polypropylene",
      "Polystyrene",
      "Polyvinyl chloride",
      "Nylon",
      "Polyester",
      "Teflon"
    ],

    polymerization: {
      addition:
        "Chain-growth polymerization can add unsaturated monomers without eliminating a small molecule.",

      condensation:
        "Step-growth processes can form polymers while eliminating small molecules such as water or methanol in many cases."
    }
  },


  // ==========================================================
  // 32. BIOCHEMISTRY
  // ==========================================================

  biochemistry: {

    definition:
      "Biochemistry studies the chemical processes and molecules of living systems.",

    majorBiomolecules: [
      "Proteins",
      "Carbohydrates",
      "Lipids",
      "Nucleic acids"
    ],

    proteins:
      "Proteins are polymers of amino acids connected by peptide bonds and perform structural, catalytic, transport, signaling, and regulatory functions.",

    carbohydrates:
      "Carbohydrates include sugars and polysaccharides and commonly function in energy storage, metabolism, and structural materials.",

    lipids:
      "Lipids include diverse hydrophobic or amphiphilic molecules such as fats, oils, phospholipids, and steroids.",

    nucleicAcids:
      "DNA and RNA are nucleic acids involved in genetic information storage, transfer, and expression.",

    enzymes:
      "Enzymes are biological catalysts that accelerate reactions by providing favorable reaction pathways."
  },


  // ==========================================================
  // 33. AMINO ACIDS
  // ==========================================================

  aminoAcids: {

    definition:
      "Amino acids are molecules containing amino and carboxyl functional groups and serve as the building blocks of proteins.",

    proteinogenicExamples: [
      "Alanine",
      "Arginine",
      "Asparagine",
      "Aspartic acid",
      "Cysteine",
      "Glutamic acid",
      "Glutamine",
      "Glycine",
      "Histidine",
      "Isoleucine",
      "Leucine",
      "Lysine",
      "Methionine",
      "Phenylalanine",
      "Proline",
      "Serine",
      "Threonine",
      "Tryptophan",
      "Tyrosine",
      "Valine"
    ],

    peptideBond:
      "A peptide bond connects amino acids in proteins and forms between the carboxyl group of one amino acid and the amino group of another."
  },


  // ==========================================================
  // 34. NUCLEIC ACIDS
  // ==========================================================

  nucleicAcids: {

    DNA:
      "DNA stores hereditary information in organisms and many viruses.",

    RNA:
      "RNA performs diverse roles including information transfer, catalysis, regulation, and protein synthesis.",

    nucleotides:
      "Nucleotides contain a nitrogenous base, a sugar, and one or more phosphate groups.",

    DNA_Bases: [
      "Adenine",
      "Thymine",
      "Guanine",
      "Cytosine"
    ],

    RNA_Bases: [
      "Adenine",
      "Uracil",
      "Guanine",
      "Cytosine"
    ]
  },


  // ==========================================================
  // 35. INORGANIC CHEMISTRY
  // ==========================================================

  inorganicChemistry: {

    definition:
      "Inorganic chemistry studies chemical compounds and systems outside the traditional scope of organic chemistry, including metals, minerals, salts, coordination compounds, and many non-carbon substances.",

    majorTopics: [
      "Acids and bases",
      "Salts",
      "Metals",
      "Minerals",
      "Coordination compounds",
      "Transition-metal chemistry",
      "Solid-state chemistry"
    ]
  },


  // ==========================================================
  // 36. COORDINATION CHEMISTRY
  // ==========================================================

  coordinationChemistry: {

    definition:
      "Coordination chemistry studies compounds in which a central metal atom or ion is surrounded by ligands.",

    ligand:
      "A ligand is an ion or molecule that donates an electron pair to a central metal center.",

    coordinationNumber:
      "Coordination number is the number of donor atoms directly bonded to a central metal center.",

    examples: [
      "[Cu(NH₃)₄]²⁺",
      "[Fe(CN)₆]³⁻",
      "[Co(NH₃)₆]³⁺"
    ],

    applications: [
      "Catalysis",
      "Biochemistry",
      "Medicine",
      "Materials",
      "Analytical chemistry"
    ]
  },


  // ==========================================================
  // 37. TRANSITION METALS
  // ==========================================================

  transitionMetals: {

    definition:
      "Transition elements generally have partially filled d subshells in atoms or common ions.",

    properties: [
      "Variable oxidation states",
      "Colored compounds and ions",
      "Complex formation",
      "Catalytic activity",
      "Magnetic behavior"
    ],

    examples: [
      "Iron",
      "Copper",
      "Nickel",
      "Cobalt",
      "Chromium",
      "Manganese",
      "Titanium"
    ]
  },


  // ==========================================================
  // 38. NUCLEAR CHEMISTRY
  // ==========================================================

  nuclearChemistry: {

    definition:
      "Nuclear chemistry studies changes in atomic nuclei and the radiation associated with them.",

    radioactiveDecay: [
      "Alpha decay",
      "Beta-minus decay",
      "Beta-plus decay",
      "Electron capture",
      "Gamma emission"
    ],

    alpha:
      "Alpha decay emits a helium-4 nucleus.",

    betaMinus:
      "Beta-minus decay converts a neutron into a proton while emitting an electron and an electron antineutrino.",

    betaPlus:
      "Beta-plus decay converts a proton into a neutron while emitting a positron and an electron neutrino.",

    gamma:
      "Gamma emission releases high-energy electromagnetic radiation from an excited nucleus.",

    halfLife:
      "Half-life is the time required for half of a radioactive sample's unstable nuclei to decay."
  },


  // ==========================================================
  // 39. ANALYTICAL CHEMISTRY
  // ==========================================================

  analyticalChemistry: {

    definition:
      "Analytical chemistry develops methods for identifying substances and determining their quantities.",

    qualitativeAnalysis:
      "Determines what substances or chemical species are present.",

    quantitativeAnalysis:
      "Determines how much of a substance is present.",

    techniques: [
      "Titration",
      "Gravimetric analysis",
      "Spectroscopy",
      "Chromatography",
      "Mass spectrometry",
      "Electrochemical analysis"
    ],

    titration:
      "Titration determines an unknown concentration by reacting it with a solution of known concentration.",

    chromatography:
      "Chromatography separates components based on their different interactions with stationary and mobile phases."
  },


  // ==========================================================
  // 40. SPECTROSCOPY
  // ==========================================================

  spectroscopy: {

    definition:
      "Spectroscopy studies how matter interacts with electromagnetic radiation.",

    types: [
      "UV-visible spectroscopy",
      "Infrared spectroscopy",
      "Nuclear magnetic resonance spectroscopy",
      "Atomic absorption spectroscopy",
      "Atomic emission spectroscopy",
      "Raman spectroscopy"
    ],

    infrared:
      "Infrared spectroscopy is widely used to identify molecular vibrations and functional groups.",

    uvVisible:
      "UV-visible spectroscopy measures absorption of ultraviolet or visible light and is widely used for quantitative analysis.",

    nmr:
      "Nuclear magnetic resonance spectroscopy provides information about molecular environments of certain atomic nuclei, especially hydrogen and carbon in organic chemistry.",

    massSpectrometry:
      "Mass spectrometry measures mass-to-charge ratios of ions and is widely used for identifying and characterizing molecules."
  },


  // ==========================================================
  // 41. ENVIRONMENTAL CHEMISTRY
  // ==========================================================

  environmentalChemistry: {

    definition:
      "Environmental chemistry studies chemical processes occurring in air, water, soil, organisms, and the interactions among them.",

    topics: [
      "Air pollution",
      "Water pollution",
      "Soil contamination",
      "Acid deposition",
      "Ozone chemistry",
      "Greenhouse gases",
      "Persistent pollutants",
      "Nutrient cycles"
    ],

    airPollutants: [
      "Particulate matter",
      "Nitrogen oxides",
      "Sulfur dioxide",
      "Carbon monoxide",
      "Ground-level ozone",
      "Volatile organic compounds"
    ],

    greenhouseGases: [
      "Carbon dioxide",
      "Methane",
      "Nitrous oxide",
      "Water vapor"
    ],

    acidRain:
      "Acid deposition can result when atmospheric pollutants such as sulfur dioxide and nitrogen oxides are transformed into acidic substances."
  },


  // ==========================================================
  // 42. ATMOSPHERIC CHEMISTRY
  // ==========================================================

  atmosphericChemistry: {

    definition:
      "Atmospheric chemistry studies chemical reactions and transformations occurring in Earth's atmosphere.",

    topics: [
      "Photochemical reactions",
      "Ozone formation",
      "Ozone destruction",
      "Aerosols",
      "Smog",
      "Nitrogen chemistry",
      "Sulfur chemistry",
      "Carbon chemistry"
    ],

    ozone:
      "Ozone is O₃, a triatomic form of oxygen. Stratospheric ozone absorbs much of the Sun's biologically harmful ultraviolet radiation.",

    photochemistry:
      "Photochemistry studies chemical reactions initiated or influenced by light."
  },


  // ==========================================================
  // 43. INDUSTRIAL CHEMISTRY
  // ==========================================================

  industrialChemistry: {

    definition:
      "Industrial chemistry applies chemical principles to large-scale production and processing of materials and chemicals.",

    majorIndustries: [
      "Petrochemicals",
      "Fertilizers",
      "Pharmaceuticals",
      "Polymers",
      "Cement",
      "Glass",
      "Metals",
      "Food chemistry",
      "Paints",
      "Detergents"
    ],

    haberProcess:
      "The Haber-Bosch process produces ammonia from nitrogen and hydrogen using industrial catalysts and elevated pressure and temperature.",

    contactProcess:
      "The Contact process is an industrial method for producing sulfuric acid and includes catalytic oxidation of sulfur dioxide to sulfur trioxide.",

    petroleum:
      "Petroleum is a complex mixture of hydrocarbons and other compounds that can be separated and processed into fuels and chemical feedstocks."
  },


  // ==========================================================
  // 44. MATERIALS CHEMISTRY
  // ==========================================================

  materialsChemistry: {

    definition:
      "Materials chemistry studies the preparation, structure, properties, and applications of materials.",

    materials: [
      "Metals",
      "Ceramics",
      "Polymers",
      "Semiconductors",
      "Composites",
      "Glass",
      "Nanomaterials",
      "Biomaterials"
    ],

    nanomaterials:
      "Nanomaterials have structural features at approximately the nanometer scale and can exhibit properties different from bulk materials."
  },


  // ==========================================================
  // 45. SOLID-STATE CHEMISTRY
  // ==========================================================

  solidStateChemistry: {

    definition:
      "Solid-state chemistry studies the synthesis, structure, bonding, and properties of solid materials.",

    crystal:
      "A crystal has an ordered structure extending over substantial distances.",

    crystalLattice:
      "A crystal lattice is an idealized repeating arrangement describing the positions of particles in a crystalline solid.",

    types: [
      "Ionic solids",
      "Metallic solids",
      "Molecular solids",
      "Covalent-network solids"
    ],

    examples: {
      ionic:
        "Sodium chloride",

      metallic:
        "Copper",

      molecular:
        "Ice or solid carbon dioxide",

      network:
        "Diamond or silicon dioxide"
    }
  },


  // ==========================================================
  // 46. GASES
  // ==========================================================

  gases: {

    idealGasLaw:
      "PV = nRT",

    variables: {
      P: "Pressure",
      V: "Volume",
      n: "Amount of gas in moles",
      R: "Gas constant",
      T: "Absolute temperature"
    },

    laws: {

      boyle:
        "At constant temperature, pressure and volume are inversely related for a fixed amount of gas.",

      charles:
        "At constant pressure, gas volume is proportional to absolute temperature for a fixed amount of gas.",

      avogadro:
        "At constant temperature and pressure, gas volume is proportional to amount of gas.",

      dalton:
        "The total pressure of a mixture of ideal gases equals the sum of their partial pressures."
    },

    kineticMolecularTheory: [
      "Gas particles are in constant random motion.",
      "Particle collisions are approximately elastic in the idealized model.",
      "The average kinetic energy depends on absolute temperature.",
      "Particles are assumed to occupy negligible volume in the ideal model.",
      "Intermolecular forces are neglected in the ideal-gas approximation."
    ]
  },


  // ==========================================================
  // 47. LIQUIDS
  // ==========================================================

  liquids: {

    properties: [
      "Definite volume",
      "Variable shape",
      "Fluidity",
      "Surface tension",
      "Viscosity",
      "Evaporation"
    ],

    viscosity:
      "Viscosity describes a fluid's resistance to flow.",

    surfaceTension:
      "Surface tension results from cohesive intermolecular forces and causes a liquid surface to behave somewhat like an elastic film.",

    vaporPressure:
      "Vapor pressure is the equilibrium pressure exerted by vapor above a condensed phase at a specified temperature."
  },


  // ==========================================================
  // 48. SOLIDS
  // ==========================================================

  solids: {

    crystalline:
      "Crystalline solids possess long-range structural order.",

    amorphous:
      "Amorphous solids lack long-range periodic order comparable to crystals.",

    examples: {
      crystalline: [
        "Quartz",
        "Sodium chloride",
        "Diamond"
      ],

      amorphous: [
        "Common glass",
        "Many plastics"
      ]
    }
  },


  // ==========================================================
  // 49. PHASE CHANGES
  // ==========================================================

  phaseChanges: {

    melting:
      "Solid → liquid",

    freezing:
      "Liquid → solid",

    vaporization:
      "Liquid → gas",

    condensation:
      "Gas → liquid",

    sublimation:
      "Solid → gas",

    deposition:
      "Gas → solid",

    energy:
      "Phase changes involve energy transfer and changes in intermolecular organization without necessarily changing chemical identity."
  },


  // ==========================================================
  // 50. THERMODYNAMICS
  // ==========================================================

  thermodynamics: {

    firstLaw:
      "Energy is conserved; changes in internal energy result from heat transfer and work.",

    secondLaw:
      "The entropy of an isolated system tends to increase for spontaneous processes.",

    thirdLaw:
      "The entropy of a perfect crystal approaches zero as temperature approaches absolute zero.",

    entropy:
      "Entropy is a thermodynamic state function associated with the dispersal of energy and the number of accessible microscopic states.",

    gibbsFreeEnergy:
      "Gibbs free energy is useful for assessing spontaneity at constant temperature and pressure.",

    equation:
      "ΔG = ΔH - TΔS",

    interpretation: [
      "ΔG < 0: thermodynamically favorable in the specified conditions.",
      "ΔG > 0: thermodynamically unfavorable in the specified conditions.",
      "ΔG = 0: equilibrium under the specified conditions."
    ]
  },


  // ==========================================================
  // 51. CATALYSIS
  // ==========================================================

  catalysis: {

    definition:
      "Catalysis is the acceleration of a chemical reaction by a catalyst that participates in the mechanism but is regenerated overall.",

    types: [
      "Homogeneous catalysis",
      "Heterogeneous catalysis",
      "Enzyme catalysis",
      "Photocatalysis"
    ],

    importantPoint:
      "A catalyst changes reaction kinetics but does not change the overall thermodynamic equilibrium constant for a reaction."
  },


  // ==========================================================
  // 52. CHEMICAL SAFETY
  // ==========================================================

  laboratorySafety: {

    principles: [
      "Identify chemical hazards before working with a substance.",
      "Use appropriate personal protective equipment.",
      "Never intentionally taste laboratory chemicals.",
      "Avoid inhaling chemical vapors.",
      "Use appropriate ventilation or a fume hood when required.",
      "Keep incompatible chemicals separated.",
      "Label chemical containers clearly.",
      "Dispose of chemicals according to appropriate safety procedures.",
      "Know the location of emergency equipment.",
      "Never mix chemicals unless the procedure specifically calls for it."
    ],

    hazardCategories: [
      "Flammable",
      "Oxidizing",
      "Corrosive",
      "Toxic",
      "Acute toxicant",
      "Environmental hazard",
      "Explosive",
      "Compressed gas",
      "Reactive"
    ]
  },


  // ==========================================================
  // 53. COMMON CHEMICAL SUBSTANCES
  // ==========================================================

  commonSubstances: [

    {
      name: "Water",
      formula: "H₂O",
      type: "Molecular compound",
      importance:
        "Essential solvent and major component of biological systems."
    },

    {
      name: "Carbon dioxide",
      formula: "CO₂",
      type: "Molecular compound",
      importance:
        "Important in respiration, photosynthesis, atmospheric chemistry, and the carbon cycle."
    },

    {
      name: "Oxygen",
      formula: "O₂",
      type: "Elemental molecule",
      importance:
        "Important oxidizing agent and essential component of aerobic respiration."
    },

    {
      name: "Nitrogen",
      formula: "N₂",
      type: "Elemental molecule",
      importance:
        "Major component of Earth's atmosphere and essential to biological nitrogen chemistry."
    },

    {
      name: "Sodium chloride",
      formula: "NaCl",
      type: "Ionic compound",
      importance:
        "Common salt and important electrolyte."
    },

    {
      name: "Hydrochloric acid",
      formula: "HCl",
      type: "Strong acid in water",
      importance:
        "Important laboratory reagent and component of gastric acid."
    },

    {
      name: "Sulfuric acid",
      formula: "H₂SO₄",
      type: "Strong acid",
      importance:
        "Major industrial chemical."
    },

    {
      name: "Ammonia",
      formula: "NH₃",
      type: "Weak base in water",
      importance:
        "Important industrial chemical and nitrogen source."
    },

    {
      name: "Methane",
      formula: "CH₄",
      type: "Hydrocarbon",
      importance:
        "Major component of natural gas and an important greenhouse gas."
    },

    {
      name: "Glucose",
      formula: "C₆H₁₂O₆",
      type: "Carbohydrate",
      importance:
        "Important energy substrate in biology."
    }
  ],


  // ==========================================================
  // 54. IMPORTANT CONSTANTS
  // ==========================================================

  constants: {

    avogadro:
      "6.02214076 × 10²³ mol⁻¹",

    gasConstant:
      "8.314462618 J mol⁻¹ K⁻¹",

    speedOfLight:
      "299,792,458 m/s",

    elementaryCharge:
      "Approximately 1.602176634 × 10⁻¹⁹ C",

    absoluteZero:
      "0 K = -273.15°C"
  },


  // ==========================================================
  // 55. IMPORTANT EQUATIONS
  // ==========================================================

  equationsReference: {

    density:
      "ρ = m / V",

    moles:
      "n = m / M",

    molarity:
      "M = n / V",

    dilution:
      "M₁V₁ = M₂V₂",

    idealGas:
      "PV = nRT",

    pH:
      "pH = -log₁₀[H⁺]",

    pOH:
      "pOH = -log₁₀[OH⁻]",

    waterIonProduct:
      "Kᵥ or Kᵥ = [H⁺][OH⁻] in simplified notation commonly written as Kw",

    hendersonHasselbalch:
      "pH = pKa + log₁₀([A⁻]/[HA])",

    heat:
      "q = mcΔT",

    gibbs:
      "ΔG = ΔH - TΔS",

    percentYield:
      "% yield = actual yield / theoretical yield × 100"
  },


  // ==========================================================
  // 56. CHEMISTRY QUESTIONS REZE SHOULD UNDERSTAND
  // ==========================================================

  questionCategories: [

    "What is chemistry?",
    "What is an atom?",
    "What is an element?",
    "What is a molecule?",
    "What is an isotope?",
    "What is an ion?",
    "What is a proton?",
    "What is a neutron?",
    "What is an electron?",
    "What is the periodic table?",
    "What are valence electrons?",
    "What is an ionic bond?",
    "What is a covalent bond?",
    "What is metallic bonding?",
    "What is electronegativity?",
    "What is polarity?",
    "What is molecular geometry?",
    "What is VSEPR theory?",
    "What are intermolecular forces?",
    "What is a chemical reaction?",
    "How do you balance an equation?",
    "What is stoichiometry?",
    "What is a mole?",
    "What is Avogadro's number?",
    "What is molar mass?",
    "What is a limiting reactant?",
    "What is percent yield?",
    "What is a solution?",
    "What is molarity?",
    "What is molality?",
    "What is dilution?",
    "What is an acid?",
    "What is a base?",
    "What is pH?",
    "What is a buffer?",
    "What is equilibrium?",
    "What is Le Chatelier's principle?",
    "What is oxidation?",
    "What is reduction?",
    "What is a redox reaction?",
    "What is electrochemistry?",
    "What is a galvanic cell?",
    "What is an electrolytic cell?",
    "What is thermochemistry?",
    "What is enthalpy?",
    "What is entropy?",
    "What is Gibbs free energy?",
    "What is chemical kinetics?",
    "What is activation energy?",
    "What is a catalyst?",
    "What is organic chemistry?",
    "What are hydrocarbons?",
    "What are functional groups?",
    "What is stereochemistry?",
    "What are polymers?",
    "What is biochemistry?",
    "What are proteins?",
    "What are carbohydrates?",
    "What are lipids?",
    "What are nucleic acids?",
    "What is inorganic chemistry?",
    "What is coordination chemistry?",
    "What are transition metals?",
    "What is nuclear chemistry?",
    "What is radioactive decay?",
    "What is half-life?",
    "What is analytical chemistry?",
    "What is spectroscopy?",
    "What is chromatography?",
    "What is environmental chemistry?",
    "What is atmospheric chemistry?",
    "What is industrial chemistry?",
    "What is materials chemistry?"
  ],


  // ==========================================================
  // 57. KEYWORDS
  // ==========================================================

  keywords: [

    "chemistry",
    "chemical",
    "atom",
    "atoms",
    "element",
    "elements",
    "molecule",
    "molecules",
    "compound",
    "compounds",
    "matter",
    "proton",
    "neutron",
    "electron",
    "nucleus",
    "ion",
    "ions",
    "cation",
    "anion",
    "isotope",
    "isotopes",
    "periodic table",
    "periodic",
    "valence",
    "electron configuration",
    "orbital",
    "bond",
    "bonding",
    "ionic",
    "covalent",
    "metallic",
    "molecular",
    "polarity",
    "electronegativity",
    "reaction",
    "reactions",
    "reactant",
    "product",
    "stoichiometry",
    "mole",
    "moles",
    "molarity",
    "molality",
    "concentration",
    "solution",
    "solvent",
    "solute",
    "acid",
    "acids",
    "base",
    "bases",
    "pH",
    "buffer",
    "equilibrium",
    "redox",
    "oxidation",
    "reduction",
    "electrochemistry",
    "thermochemistry",
    "enthalpy",
    "entropy",
    "kinetics",
    "activation energy",
    "catalyst",
    "organic chemistry",
    "hydrocarbon",
    "functional group",
    "polymer",
    "biochemistry",
    "protein",
    "DNA",
    "RNA",
    "inorganic chemistry",
    "coordination chemistry",
    "transition metal",
    "nuclear chemistry",
    "radioactive",
    "half-life",
    "analytical chemistry",
    "spectroscopy",
    "chromatography",
    "environmental chemistry",
    "industrial chemistry",
    "materials chemistry",
    "gas",
    "liquid",
    "solid",
    "plasma"
  ]
};


// ============================================================
// DEFAULT EXPORT
// ============================================================

export default CHEMISTRY_KNOWLEDGE;
