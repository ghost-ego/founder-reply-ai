// lib/knowledge/science/chemistry.js

// ============================================
// REZE SCIENCE KNOWLEDGE
// CHEMISTRY
// ============================================

const CHEMISTRY_KNOWLEDGE = {
  name: "Chemistry",

  description:
    "A structured chemistry knowledge base covering matter, atoms, elements, periodic trends, chemical bonding, reactions, stoichiometry, acids and bases, thermochemistry, equilibrium, kinetics, electrochemistry, organic chemistry, inorganic chemistry, analytical chemistry, biochemistry, polymers, and materials.",

  topics: {
    fundamentals: {
      title: "Chemistry Fundamentals",

      definition:
        "Chemistry is the branch of science that studies matter, its composition, structure, properties, transformations, and the energy associated with those transformations.",

      matter:
        "Matter is anything that has mass and occupies space. It can exist as solids, liquids, gases, plasmas, and under specialized conditions other states such as Bose-Einstein condensates.",

      physical_change:
        "A physical change alters the form or state of a substance without changing its chemical identity.",

      chemical_change:
        "A chemical change produces one or more substances with different chemical identities and properties.",

      physical_property:
        "A physical property can be observed or measured without changing the chemical identity of a substance.",

      chemical_property:
        "A chemical property describes how a substance behaves during chemical reactions.",

      mixture:
        "A mixture contains two or more substances physically combined without forming a new chemical substance.",

      homogeneous_mixture:
        "A homogeneous mixture has a uniform composition throughout.",

      heterogeneous_mixture:
        "A heterogeneous mixture has a non-uniform composition.",

      pure_substance:
        "A pure substance has a fixed chemical composition and characteristic properties.",

      element:
        "An element is a pure substance consisting of atoms with the same number of protons.",

      compound:
        "A compound contains atoms of two or more different elements chemically bonded in definite proportions.",
    },

    atomic_structure: {
      title: "Atomic Structure",

      atom:
        "An atom is the smallest unit of an element that retains the chemical identity of that element.",

      nucleus:
        "The atomic nucleus contains protons and neutrons and holds most of an atom's mass.",

      proton:
        "A proton is a positively charged subatomic particle found in the nucleus.",

      neutron:
        "A neutron is a neutral subatomic particle found in the nucleus.",

      electron:
        "An electron is a negatively charged subatomic particle associated with regions around the nucleus.",

      atomic_number:
        "The atomic number is the number of protons in an atom's nucleus. It uniquely identifies an element.",

      mass_number:
        "The mass number is the total number of protons and neutrons in an atomic nucleus.",

      isotope:
        "Isotopes are atoms of the same element that have the same number of protons but different numbers of neutrons.",

      ion:
        "An ion is an atom or molecule with a net electric charge because it has gained or lost electrons.",

      cation:
        "A cation is a positively charged ion formed when an atom or molecule loses electrons.",

      anion:
        "An anion is a negatively charged ion formed when an atom or molecule gains electrons.",

      electron_configuration:
        "Electron configuration describes how electrons are distributed among atomic orbitals.",

      orbital:
        "An atomic orbital is a mathematical description of a region where an electron has a high probability of being found.",

      quantum_numbers:
        "Quantum numbers describe properties of electrons in atoms, including energy level, orbital shape, orbital orientation, and spin.",

      valence_electrons:
        "Valence electrons are electrons in the outermost occupied shell that strongly influence chemical bonding and reactivity.",
    },

    periodic_table: {
      title: "Periodic Table",

      periodic_table:
        "The periodic table organizes chemical elements according to their atomic numbers and recurring chemical properties.",

      period:
        "A period is a horizontal row of the periodic table.",

      group:
        "A group is a vertical column of the periodic table. Elements within a group often show related chemical behavior.",

      metals:
        "Metals generally have high electrical and thermal conductivity, metallic luster, and a tendency to lose electrons in chemical reactions.",

      nonmetals:
        "Nonmetals generally have properties distinct from metals and often tend to gain or share electrons in chemical bonding.",

      metalloids:
        "Metalloids have properties intermediate between metals and nonmetals.",

      alkali_metals:
        "Group 1 elements, excluding hydrogen in typical classification, are alkali metals. They are highly reactive and commonly form +1 ions.",

      alkaline_earth_metals:
        "Group 2 elements are alkaline earth metals and commonly form +2 ions.",

      transition_metals:
        "Transition metals occupy much of the central block of the periodic table and commonly exhibit multiple oxidation states.",

      halogens:
        "Group 17 elements are halogens. They are reactive nonmetals that commonly form -1 ions.",

      noble_gases:
        "Group 18 elements are noble gases. They have very low chemical reactivity under ordinary conditions.",

      lanthanides:
        "Lanthanides are a series of elements in the f-block commonly associated with atomic numbers 57 through 71.",

      actinides:
        "Actinides are a series of elements in the f-block commonly associated with atomic numbers 89 through 103. Many are radioactive.",

      periodic_trends: {
        title: "Periodic Trends",

        atomic_radius:
          "Atomic radius generally decreases across a period and increases down a group, although the exact trend depends on how atomic radius is defined.",

        ionization_energy:
          "Ionization energy generally increases across a period and decreases down a group.",

        electronegativity:
          "Electronegativity generally increases across a period and decreases down a group.",

        electron_affinity:
          "Electron affinity describes the energy change associated with adding an electron to a neutral atom in the gas phase. Trends are more complex than simple monotonic patterns.",

        metallic_character:
          "Metallic character generally decreases from left to right across a period and increases down a group.",
      },
    },

    chemical_bonding: {
      title: "Chemical Bonding",

      chemical_bond:
        "A chemical bond is an attractive interaction that holds atoms or ions together in a chemical substance.",

      ionic_bond:
        "An ionic bond is an electrostatic attraction between oppositely charged ions, commonly formed through electron transfer between atoms.",

      covalent_bond:
        "A covalent bond involves sharing electron pairs between atoms.",

      polar_covalent_bond:
        "A polar covalent bond involves unequal sharing of electrons because the bonded atoms have different electronegativities.",

      nonpolar_covalent_bond:
        "A nonpolar covalent bond involves relatively equal sharing of electrons.",

      metallic_bond:
        "Metallic bonding describes the attraction between metal ions and delocalized electrons within a metallic structure.",

      single_bond:
        "A single covalent bond contains one shared electron pair.",

      double_bond:
        "A double covalent bond contains two shared electron pairs.",

      triple_bond:
        "A triple covalent bond contains three shared electron pairs.",

      lewis_structure:
        "A Lewis structure represents valence electrons and bonding arrangements using symbols and electron-dot or line notation.",

      octet_rule:
        "The octet rule is a useful guideline stating that many atoms tend to achieve configurations with eight valence electrons, though there are important exceptions.",

      resonance:
        "Resonance describes situations where a molecule or ion is represented by multiple valid Lewis structures. The actual electronic structure is a resonance hybrid rather than rapidly switching between structures.",

      formal_charge:
        "Formal charge is a bookkeeping method used to assign hypothetical charges to atoms within a Lewis structure.",

      vsepr:
        "Valence Shell Electron Pair Repulsion theory predicts molecular geometry by considering repulsion between electron domains around a central atom.",

      molecular_geometry:
        "Molecular geometry describes the three-dimensional arrangement of atoms in a molecule.",

      hydrogen_bond:
        "A hydrogen bond is an attractive interaction involving hydrogen covalently bonded to a strongly electronegative atom and another electronegative atom or group.",

      intermolecular_forces:
        "Intermolecular forces are attractions between molecules or other chemical species and influence properties such as boiling point, melting point, viscosity, and solubility.",
    },

    stoichiometry: {
      title: "Stoichiometry",

      stoichiometry:
        "Stoichiometry is the quantitative study of relationships between reactants and products in chemical reactions.",

      mole:
        "The mole is the SI unit for amount of substance. One mole contains exactly 6.02214076 × 10^23 specified entities.",

      avogadro_constant:
        "The Avogadro constant is exactly 6.02214076 × 10^23 mol^-1.",

      molar_mass:
        "Molar mass is the mass of one mole of a substance, expressed in grams per mole when using common laboratory units.",

      molecular_mass:
        "Molecular mass is the sum of the atomic masses of the atoms in a molecule.",

      empirical_formula:
        "An empirical formula shows the simplest whole-number ratio of elements in a compound.",

      molecular_formula:
        "A molecular formula shows the actual number of atoms of each element in a molecule.",

      limiting_reagent:
        "The limiting reagent is the reactant that is consumed first and therefore limits the maximum amount of product that can form.",

      excess_reagent:
        "An excess reagent is present in an amount greater than required by the stoichiometric ratio.",

      theoretical_yield:
        "The theoretical yield is the maximum amount of product predicted from stoichiometry under ideal conditions.",

      actual_yield:
        "Actual yield is the amount of product experimentally obtained.",

      percent_yield:
        "Percent yield is calculated as actual yield divided by theoretical yield multiplied by 100.",
    },

    chemical_reactions: {
      title: "Chemical Reactions",

      chemical_reaction:
        "A chemical reaction rearranges atoms and changes reactants into products with different chemical identities.",

      reactant:
        "A reactant is a substance consumed during a chemical reaction.",

      product:
        "A product is a substance formed during a chemical reaction.",

      conservation_of_mass:
        "In ordinary chemical reactions, atoms are conserved, so a balanced chemical equation has the same number of atoms of each element on both sides.",

      synthesis:
        "A synthesis reaction combines substances to form a more complex product.",

      decomposition:
        "A decomposition reaction breaks a compound into simpler substances.",

      single_replacement:
        "A single-replacement reaction involves one element replacing another element in a compound.",

      double_replacement:
        "A double-replacement reaction involves exchange of ions between two compounds.",

      combustion:
        "Combustion is a reaction with an oxidizer, commonly oxygen, that often releases substantial energy. Hydrocarbon combustion commonly produces carbon dioxide and water when complete.",

      oxidation:
        "Oxidation involves an increase in oxidation state and can be described in electron-transfer terms as loss of electrons.",

      reduction:
        "Reduction involves a decrease in oxidation state and can be described in electron-transfer terms as gain of electrons.",

      redox:
        "A redox reaction involves oxidation and reduction occurring together.",

      catalyst:
        "A catalyst increases the rate of a reaction by providing an alternative reaction pathway with lower activation energy and is regenerated overall.",

      balanced_equation:
        "A balanced chemical equation uses coefficients so that the number of atoms of each element is conserved.",
    },

    gases: {
      title: "Gases",

      gas:
        "A gas has no fixed shape or volume and expands to fill its container.",

      pressure:
        "Gas pressure results from collisions of gas particles with the walls of their container.",

      temperature:
        "Temperature is related to the average kinetic energy of particles in a substance.",

      boyles_law:
        "Boyle's law states that for a fixed amount of gas at constant temperature, pressure is inversely proportional to volume.",

      charles_law:
        "Charles's law states that for a fixed amount of gas at constant pressure, volume is proportional to absolute temperature.",

      avogadros_law:
        "Avogadro's law states that at constant temperature and pressure, gas volume is proportional to the amount of gas.",

      ideal_gas_law:
        "The ideal gas law is PV = nRT.",

      ideal_gas:
        "An ideal gas is a simplified model whose particles have negligible volume and whose intermolecular interactions are neglected.",

      real_gas:
        "Real gases deviate from ideal behavior, especially at high pressures and low temperatures.",

      partial_pressure:
        "Dalton's law states that the total pressure of a mixture of gases equals the sum of the partial pressures of its components under the model's assumptions.",
    },

    liquids_and_solids: {
      title: "Liquids and Solids",

      liquid:
        "A liquid has a definite volume but takes the shape of its container.",

      solid:
        "A solid has a definite shape and volume.",

      crystalline_solid:
        "A crystalline solid has an ordered repeating arrangement of particles.",

      amorphous_solid:
        "An amorphous solid lacks long-range periodic crystal order.",

      melting:
        "Melting is the transition from solid to liquid.",

      freezing:
        "Freezing is the transition from liquid to solid.",

      vaporization:
        "Vaporization is the transition from liquid to gas.",

      condensation:
        "Condensation is the transition from gas to liquid.",

      sublimation:
        "Sublimation is the direct transition from solid to gas.",

      deposition:
        "Deposition is the direct transition from gas to solid.",

      vapor_pressure:
        "Vapor pressure is the pressure exerted by a vapor in equilibrium with its condensed phase at a given temperature.",
    },

    solutions: {
      title: "Solutions",

      solution:
        "A solution is a homogeneous mixture of substances.",

      solute:
        "A solute is a substance dissolved in a solvent.",

      solvent:
        "A solvent is the component of a solution that dissolves the solute and is often present in the greater amount.",

      concentration:
        "Concentration describes the amount of solute relative to a specified amount of solution or solvent.",

      molarity:
        "Molarity is the number of moles of solute per liter of solution.",

      molality:
        "Molality is the number of moles of solute per kilogram of solvent.",

      solubility:
        "Solubility is the maximum amount of a substance that can dissolve under specified conditions.",

      saturated_solution:
        "A saturated solution contains the maximum dissolved solute under specified equilibrium conditions.",

      unsaturated_solution:
        "An unsaturated solution contains less dissolved solute than its equilibrium solubility under the specified conditions.",

      supersaturated_solution:
        "A supersaturated solution contains more dissolved solute than the equilibrium amount and can be unstable.",

      miscibility:
        "Miscibility describes the ability of liquids to mix in all proportions to form a homogeneous mixture.",
    },

    acids_and_bases: {
      title: "Acids and Bases",

      acid:
        "An acid is a substance that can donate a proton under the Brønsted-Lowry definition.",

      base:
        "A base is a substance that can accept a proton under the Brønsted-Lowry definition.",

      bronsted_lowry:
        "The Brønsted-Lowry theory defines acids as proton donors and bases as proton acceptors.",

      lewis_acid:
        "A Lewis acid is an electron-pair acceptor.",

      lewis_base:
        "A Lewis base is an electron-pair donor.",

      strong_acid:
        "A strong acid ionizes essentially completely in water under ordinary dilute conditions.",

      weak_acid:
        "A weak acid only partially ionizes in water and establishes an equilibrium.",

      strong_base:
        "A strong base dissociates essentially completely in water under ordinary dilute conditions.",

      weak_base:
        "A weak base reacts only partially with water and establishes an equilibrium.",

      pH:
        "For dilute aqueous solutions, pH is commonly defined as the negative base-10 logarithm of hydrogen ion activity; concentration is often used as an approximation.",

      pOH:
        "For dilute aqueous solutions, pOH is commonly defined using hydroxide ion activity; concentration is often used as an approximation.",

      neutralization:
        "A neutralization reaction commonly involves an acid reacting with a base to form water and an ionic compound, depending on the substances involved.",

      buffer:
        "A buffer is a solution that resists large changes in pH when relatively small amounts of acid or base are added.",

      conjugate_acid:
        "A conjugate acid forms when a base accepts a proton.",

      conjugate_base:
        "A conjugate base forms when an acid donates a proton.",
    },

    thermochemistry: {
      title: "Thermochemistry",

      thermochemistry:
        "Thermochemistry studies heat changes associated with physical and chemical processes.",

      system:
        "In thermodynamics, the system is the part of the universe being studied.",

      surroundings:
        "The surroundings are everything outside the system.",

      exothermic:
        "An exothermic process releases energy as heat to the surroundings.",

      endothermic:
        "An endothermic process absorbs energy as heat from the surroundings.",

      enthalpy:
        "Enthalpy is a thermodynamic state function commonly used to describe heat changes at constant pressure.",

      enthalpy_change:
        "The enthalpy change, ΔH, describes the change in enthalpy between products and reactants.",

      hess_law:
        "Hess's law states that the total enthalpy change for a reaction is the same regardless of the pathway between initial and final states.",

      activation_energy:
        "Activation energy is the minimum energy barrier that reactants must effectively overcome to proceed through a particular reaction pathway.",

      entropy:
        "Entropy is a thermodynamic state function associated with the number of accessible microscopic states and energy dispersal.",

      gibbs_free_energy:
        "Gibbs free energy is a thermodynamic quantity useful for predicting spontaneity at constant temperature and pressure.",

      spontaneous_process:
        "A spontaneous process is thermodynamically favorable under specified conditions, although spontaneity does not determine how fast the process occurs.",
    },

    chemical_kinetics: {
      title: "Chemical Kinetics",

      kinetics:
        "Chemical kinetics studies reaction rates and the factors that affect them.",

      reaction_rate:
        "Reaction rate describes how quickly concentrations of reactants or products change with time.",

      activation_energy:
        "Activation energy is the energy barrier associated with a reaction pathway.",

      collision_theory:
        "Collision theory explains reaction rates in terms of particle collisions with sufficient energy and appropriate orientation.",

      temperature_effect:
        "Increasing temperature generally increases reaction rates because a greater fraction of particles can overcome the activation-energy barrier.",

      concentration_effect:
        "Changing reactant concentrations can affect reaction rates according to the reaction's rate law.",

      catalyst_effect:
        "A catalyst changes the reaction pathway and generally lowers the activation energy without being consumed overall.",

      rate_law:
        "A rate law relates reaction rate to reactant concentrations and experimentally determined reaction orders.",

      reaction_order:
        "Reaction order describes how the rate depends mathematically on concentration of a reactant or group of reactants.",

      half_life:
        "Half-life is the time required for the amount or concentration of a substance to decrease to half its initial value under specified conditions.",
    },

    chemical_equilibrium: {
      title: "Chemical Equilibrium",

      equilibrium:
        "Chemical equilibrium occurs when forward and reverse reaction rates are equal in a closed system and macroscopic concentrations remain constant.",

      dynamic_equilibrium:
        "Chemical equilibrium is dynamic because forward and reverse reactions continue even though their rates are equal.",

      equilibrium_constant:
        "The equilibrium constant expresses the relationship between equilibrium activities or concentrations of products and reactants for a reaction.",

      le_chatelier:
        "Le Châtelier's principle describes how an equilibrium system responds to changes in conditions by shifting in a direction that partially counteracts the disturbance.",

      reaction_quotient:
        "The reaction quotient has the same general form as an equilibrium constant but can be calculated for any composition, not only equilibrium.",

      equilibrium_shift:
        "Changing concentration, pressure, or temperature can alter the equilibrium composition depending on the reaction.",
    },

    electrochemistry: {
      title: "Electrochemistry",

      electrochemistry:
        "Electrochemistry studies chemical processes involving electron transfer and electrical energy.",

      oxidation:
        "Oxidation is an increase in oxidation state and commonly corresponds to loss of electrons.",

      reduction:
        "Reduction is a decrease in oxidation state and commonly corresponds to gain of electrons.",

      oxidation_anode:
        "Oxidation occurs at the anode in both galvanic and electrolytic cells.",

      reduction_cathode:
        "Reduction occurs at the cathode in both galvanic and electrolytic cells.",

      galvanic_cell:
        "A galvanic or voltaic cell converts energy from a spontaneous redox reaction into electrical energy.",

      electrolytic_cell:
        "An electrolytic cell uses electrical energy to drive a nonspontaneous chemical reaction.",

      electrode:
        "An electrode is a conductor through which electrons enter or leave an electrochemical system.",

      electrolyte:
        "An electrolyte is a substance that produces ions and conducts electrical current when molten or dissolved in a suitable solvent.",

      battery:
        "A battery is a device containing one or more electrochemical cells that supplies electrical energy.",

      corrosion:
        "Corrosion is the degradation of a material through chemical or electrochemical reactions with its environment.",
    },

    organic_chemistry: {
      title: "Organic Chemistry",

      organic_chemistry:
        "Organic chemistry primarily studies carbon-containing compounds and their structures, properties, reactions, and synthesis.",

      hydrocarbon:
        "A hydrocarbon contains only carbon and hydrogen.",

      alkane:
        "Alkanes are saturated hydrocarbons containing only single carbon-carbon bonds.",

      alkene:
        "Alkenes contain at least one carbon-carbon double bond.",

      alkyne:
        "Alkynes contain at least one carbon-carbon triple bond.",

      aromatic_compound:
        "Aromatic compounds contain cyclic conjugated systems with unusual stabilization associated with aromaticity.",

      functional_group:
        "A functional group is a specific arrangement of atoms within an organic molecule that gives characteristic chemical behavior.",

      alcohol:
        "Alcohols contain a hydroxyl group bonded to a saturated carbon atom.",

      aldehyde:
        "Aldehydes contain a carbonyl group with at least one hydrogen attached to the carbonyl carbon.",

      ketone:
        "Ketones contain a carbonyl group bonded to two carbon-containing groups.",

      carboxylic_acid:
        "Carboxylic acids contain a carboxyl functional group and can donate a proton under appropriate conditions.",

      ester:
        "Esters contain a carbonyl group bonded to an oxygen-containing substituent and are common in fragrances, fats, and many organic materials.",

      amine:
        "Amines are organic derivatives of ammonia in which one or more hydrogens are replaced by carbon-containing groups.",

      amide:
        "Amides contain a carbonyl group bonded directly to nitrogen.",

      polymer:
        "A polymer is a substance composed of large molecules built from repeating structural units.",
    },

    inorganic_chemistry: {
      title: "Inorganic Chemistry",

      inorganic_chemistry:
        "Inorganic chemistry studies compounds and elements outside the primary scope of organic chemistry, including metals, minerals, salts, coordination compounds, and many molecular inorganic substances.",

      salt:
        "A salt is an ionic compound formed from positively and negatively charged ions.",

      oxide:
        "An oxide is a compound containing oxygen combined with another element or group.",

      hydroxide:
        "A hydroxide contains the hydroxide ion, OH−, or chemically bonded hydroxyl groups depending on context.",

      coordination_compound:
        "A coordination compound contains a central metal atom or ion bonded to surrounding ligands.",

      ligand:
        "A ligand is an ion or molecule that donates one or more electron pairs to a central atom or ion in a coordination complex.",

      complex_ion:
        "A complex ion consists of a central atom or ion surrounded by coordinated ligands and carries an overall charge.",
    },

    analytical_chemistry: {
      title: "Analytical Chemistry",

      analytical_chemistry:
        "Analytical chemistry develops methods for identifying substances and determining their quantities.",

      qualitative_analysis:
        "Qualitative analysis identifies which chemical species are present.",

      quantitative_analysis:
        "Quantitative analysis determines how much of a substance is present.",

      titration:
        "Titration determines the concentration of an unknown solution by reacting it with a solution of known concentration.",

      indicator:
        "A chemical indicator changes an observable property, commonly color, over a particular range of conditions.",

      chromatography:
        "Chromatography separates components of a mixture based on differences in their interactions with stationary and mobile phases.",

      spectroscopy:
        "Spectroscopy studies how matter interacts with electromagnetic radiation or other forms of energy.",

      mass_spectrometry:
        "Mass spectrometry measures mass-to-charge ratios of ions and can provide information about molecular composition and structure.",
    },

    biochemistry: {
      title: "Biochemistry",

      biochemistry:
        "Biochemistry studies the chemical processes and molecules associated with living organisms.",

      carbohydrate:
        "Carbohydrates are molecules that include sugars and many polymers derived from sugar units.",

      lipid:
        "Lipids are a broad class of hydrophobic or amphipathic biological molecules including fats, oils, phospholipids, and steroids.",

      protein:
        "Proteins are polymers of amino acids whose sequences fold into structures that enable diverse biological functions.",

      amino_acid:
        "Amino acids are organic compounds containing amino and carboxyl groups and serve as the building blocks of proteins.",

      nucleic_acid:
        "Nucleic acids, including DNA and RNA, are polymers that store, transmit, or help express genetic information.",

      dna:
        "DNA is a nucleic acid that stores genetic information in most cellular organisms.",

      rna:
        "RNA is a nucleic acid involved in genetic information transfer, protein synthesis, regulation, and other cellular functions.",

      enzyme:
        "An enzyme is a biological catalyst that accelerates chemical reactions by lowering the activation energy of a reaction pathway.",

      metabolism:
        "Metabolism is the network of chemical reactions that maintains life, including pathways that break down molecules and pathways that build them.",
    },

    polymers_and_materials: {
      title: "Polymers and Materials Chemistry",

      polymerization:
        "Polymerization is a chemical process that links monomers or smaller molecules into polymer chains or networks.",

      thermoplastic:
        "Thermoplastics are polymers that can generally be softened by heating and reshaped repeatedly without major chemical crosslinking.",

      thermoset:
        "Thermosetting polymers form strongly crosslinked structures that generally cannot be remelted into their original form.",

      elastomer:
        "Elastomers are polymers capable of substantial elastic deformation.",

      composite:
        "A composite material combines two or more distinct materials to achieve useful combined properties.",

      nanomaterial:
        "Nanomaterials contain structures or components with nanoscale dimensions and can exhibit properties that differ from their larger-scale counterparts.",
    },

    nuclear_chemistry: {
      title: "Nuclear Chemistry",

      nuclear_chemistry:
        "Nuclear chemistry studies chemical consequences and processes involving atomic nuclei.",

      radioactivity:
        "Radioactivity is the spontaneous transformation of unstable atomic nuclei accompanied by the emission of radiation.",

      alpha_decay:
        "Alpha decay involves emission of an alpha particle, consisting of two protons and two neutrons.",

      beta_decay:
        "Beta decay involves transformations associated with beta particles and changes in nuclear composition.",

      gamma_radiation:
        "Gamma radiation is high-energy electromagnetic radiation emitted by atomic nuclei during certain nuclear transitions.",

      half_life_nuclear:
        "Nuclear half-life is the time required for half of the radioactive nuclei in a sample to undergo decay.",

      nuclear_fission:
        "Nuclear fission is the splitting of a heavy atomic nucleus into smaller nuclei, usually accompanied by energy release and additional particles.",

      nuclear_fusion:
        "Nuclear fusion combines light atomic nuclei into heavier nuclei and can release large amounts of energy under suitable conditions.",
    },
  },

  principles: {
    conservation_of_mass:
      "Atoms are conserved in ordinary chemical reactions; chemical equations must therefore be balanced.",

    definite_proportions:
      "A pure compound has a characteristic composition in which its constituent elements occur in definite proportions.",

    multiple_proportions:
      "When two elements form more than one compound, the masses of one element that combine with a fixed mass of the other often occur in small whole-number ratios.",

    energy_conservation:
      "Energy is conserved and can be transferred or transformed during chemical processes.",

    periodicity:
      "Chemical and physical properties of elements show recurring patterns when elements are arranged by atomic number.",

    equilibrium:
      "Chemical systems can reach dynamic equilibrium when forward and reverse processes occur at equal rates.",
  },

  common_formulas: {
    ideal_gas_law: "PV = nRT",

    molarity:
      "M = moles of solute / liters of solution",

    molality:
      "m = moles of solute / kilograms of solvent",

    density:
      "density = mass / volume",

    percent_yield:
      "percent yield = (actual yield / theoretical yield) × 100",

    pH:
      "pH = -log10(aH+), commonly approximated using hydrogen-ion concentration in dilute solutions",

    gibbs_free_energy:
      "ΔG = ΔH - TΔS",

    reaction_quotient:
      "Q has the same general product-over-reactant form as K, using the current composition rather than necessarily the equilibrium composition.",
  },

  laboratory_safety: {
    title: "Chemistry Laboratory Safety",

    basic_safety:
      "Chemistry experiments should be performed using appropriate laboratory procedures, protective equipment, ventilation, labeling, and supervision.",

    chemical_labels:
      "Chemical containers should be properly labeled so their contents and hazards can be identified.",

    protective_equipment:
      "Appropriate personal protective equipment may include safety glasses, gloves, lab coats, and other equipment required for the specific hazard.",

    ventilation:
      "Potentially hazardous vapors should be handled using appropriate ventilation, such as a functioning fume hood when required.",

    unknown_chemicals:
      "Unknown chemicals should not be tasted, intentionally inhaled, or mixed without proper identification and safety procedures.",

    chemical_storage:
      "Chemicals should be stored according to their compatibility and hazard characteristics.",

    waste:
      "Chemical waste should be collected and disposed of according to applicable laboratory procedures and regulations.",
  },

  misconceptions: {
    atom_is_indivisible:
      "The historical idea that atoms are indivisible is not consistent with modern chemistry; atoms contain subatomic particles.",

    electrons_orbit_like_planets:
      "The simple planetary model is not an accurate description of modern quantum mechanics. Electrons are described using quantum states and orbitals.",

    all_acids_are_dangerous:
      "Acid strength and hazard are different concepts. Some acids are weak but can still be hazardous at high concentrations, while hazard depends on concentration and other properties.",

    catalyst_changes_equilibrium:
      "A catalyst changes the rates of forward and reverse reactions but does not change the equilibrium constant or the equilibrium composition for a given temperature.",

    heavier_atom_always_more_reactive:
      "Atomic mass alone does not determine chemical reactivity. Reactivity depends on electronic structure, bonding, thermodynamics, kinetics, and environmental conditions.",

    water_is_always_neutral:
      "Pure water is neutral at a given temperature when hydrogen and hydroxide ion activities are equal, but water solutions can be acidic or basic.",
  },
};

// ============================================
// EXPORT
// ============================================

export default CHEMISTRY_KNOWLEDGE;

export { CHEMISTRY_KNOWLEDGE };
