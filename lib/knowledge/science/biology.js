// lib/knowledge/science/biology.js
// ============================================================
// REZE SCIENCE KNOWLEDGE — BIOLOGY
// ============================================================
// Large structured biology knowledge base.
// Covers:
// - General Biology
// - Cell Biology
// - Biomolecules
// - Genetics
// - Molecular Biology
// - Evolution
// - Taxonomy
// - Microbiology
// - Botany
// - Zoology
// - Human Biology
// - Anatomy
// - Physiology
// - Immunology
// - Ecology
// - Biotechnology
// - Reproduction
// - Developmental Biology
// - Neuroscience fundamentals
// - Biochemistry fundamentals
// - Experimental biology
// - Scientific concepts and terminology
//
// This file is designed to provide foundational knowledge.
// It is NOT a substitute for current medical/scientific sources
// when questions require up-to-date clinical or research data.
// ============================================================

export const BIOLOGY_KNOWLEDGE = {

  // ==========================================================
  // 1. GENERAL BIOLOGY
  // ==========================================================

  general_biology: {

    definition: {
      question: "What is biology?",
      answer:
        "Biology is the scientific study of life and living organisms. It examines how organisms are structured, how they function, how they reproduce, how they interact with one another and their environment, how they evolve, and how biological information is stored and transmitted."
    },

    characteristics_of_life: [
      "Organization",
      "Cellular structure",
      "Metabolism",
      "Homeostasis",
      "Growth",
      "Development",
      "Reproduction",
      "Response to stimuli",
      "Adaptation",
      "Evolution"
    ],

    major_branches: {
      cell_biology: "Study of cells and their structures and functions.",
      molecular_biology: "Study of biological molecules and molecular processes.",
      genetics: "Study of heredity, genes, genomes, and variation.",
      microbiology: "Study of microorganisms such as bacteria, archaea, fungi, and protists.",
      botany: "Study of plants.",
      zoology: "Study of animals.",
      anatomy: "Study of biological structures.",
      physiology: "Study of biological functions.",
      ecology: "Study of organisms and their interactions with the environment.",
      evolution: "Study of how populations and species change over generations.",
      taxonomy: "Science of identifying, naming, and classifying organisms.",
      immunology: "Study of the immune system.",
      neuroscience: "Study of the nervous system.",
      developmental_biology: "Study of biological development.",
      biotechnology: "Application of biological systems and organisms to useful technologies."
    },

    levels_of_organization: [
      "Atom",
      "Molecule",
      "Macromolecule",
      "Organelle",
      "Cell",
      "Tissue",
      "Organ",
      "Organ system",
      "Organism",
      "Population",
      "Community",
      "Ecosystem",
      "Biome",
      "Biosphere"
    ],

    scientific_method: [
      "Observation",
      "Question",
      "Hypothesis",
      "Prediction",
      "Experiment",
      "Data collection",
      "Analysis",
      "Conclusion",
      "Communication",
      "Replication"
    ]
  },


  // ==========================================================
  // 2. CELL BIOLOGY
  // ==========================================================

  cell_biology: {

    cell_theory: [
      "All known living organisms are composed of one or more cells.",
      "The cell is the basic structural and functional unit of life.",
      "Cells arise from pre-existing cells.",
      "Cells contain hereditary information that is passed to daughter cells."
    ],

    cell_types: {

      prokaryotic: {
        definition:
          "Prokaryotic cells are cells that lack a membrane-bound nucleus.",
        examples: [
          "Bacteria",
          "Archaea"
        ],
        features: [
          "No membrane-bound nucleus",
          "DNA located in a nucleoid region",
          "Usually smaller than eukaryotic cells",
          "Usually lack membrane-bound organelles",
          "Possess plasma membranes",
          "Ribosomes are present",
          "Many possess cell walls"
        ]
      },

      eukaryotic: {
        definition:
          "Eukaryotic cells contain a membrane-bound nucleus and various membrane-bound organelles.",
        examples: [
          "Animals",
          "Plants",
          "Fungi",
          "Protists"
        ],
        features: [
          "Membrane-bound nucleus",
          "Membrane-bound organelles",
          "Cytoplasm",
          "Cytoskeleton",
          "Ribosomes",
          "Plasma membrane"
        ]
      }
    },

    organelles: {

      nucleus: {
        function:
          "Stores most of the cell's DNA and regulates gene expression and many cellular activities.",
        structures: [
          "Nuclear envelope",
          "Nuclear pores",
          "Nucleoplasm",
          "Nucleolus",
          "Chromatin"
        ]
      },

      nucleolus: {
        function:
          "Produces ribosomal RNA and participates in ribosome assembly."
      },

      ribosome: {
        function:
          "Ribosomes synthesize proteins by translating messenger RNA.",
        locations: [
          "Free in cytoplasm",
          "Attached to rough endoplasmic reticulum"
        ]
      },

      mitochondrion: {
        function:
          "Produces much of the cell's ATP through cellular respiration.",
        features: [
          "Outer membrane",
          "Inner membrane",
          "Cristae",
          "Matrix",
          "Mitochondrial DNA",
          "Ribosomes"
        ],
        important_fact:
          "Mitochondria contain their own DNA and are thought to have originated through an ancient endosymbiotic relationship."
      },

      chloroplast: {
        function:
          "Performs photosynthesis in plants and many algae.",
        structures: [
          "Outer membrane",
          "Inner membrane",
          "Stroma",
          "Thylakoids",
          "Grana",
          "Chloroplast DNA"
        ]
      },

      endoplasmic_reticulum: {
        rough_ER:
          "Rough ER contains ribosomes and is involved in synthesis and initial processing of many proteins.",
        smooth_ER:
          "Smooth ER is involved in lipid synthesis, detoxification, calcium storage, and other functions."
      },

      golgi_apparatus: {
        function:
          "Modifies, sorts, and packages proteins and lipids for transport within or outside the cell."
      },

      lysosome: {
        function:
          "Contains hydrolytic enzymes that digest cellular waste, damaged components, and certain materials taken into the cell."
      },

      peroxisome: {
        function:
          "Participates in oxidation reactions, fatty-acid metabolism, and breakdown of hydrogen peroxide."
      },

      vacuole: {
        function:
          "Membrane-bound compartment involved in storage, water balance, digestion, and other functions.",
        plant_cells:
          "Plant cells commonly possess a large central vacuole important for storage and maintaining turgor."
      },

      cytoskeleton: {
        components: [
          "Microfilaments",
          "Intermediate filaments",
          "Microtubules"
        ],
        functions: [
          "Cell shape",
          "Cell movement",
          "Intracellular transport",
          "Cell division",
          "Organization of organelles"
        ]
      },

      centrosome: {
        function:
          "Major microtubule-organizing center in many animal cells and important during cell division."
      },

      cilia: {
        function:
          "Hair-like structures that can move fluid across cell surfaces or help cells move."
      },

      flagellum: {
        function:
          "A cellular structure used for movement in many cells."
      }
    },

    plasma_membrane: {
      structure:
        "The plasma membrane is primarily a phospholipid bilayer containing proteins, cholesterol, and other components.",
      model:
        "Fluid mosaic model",
      functions: [
        "Controls movement of substances",
        "Maintains internal environment",
        "Cell signaling",
        "Cell recognition",
        "Cell adhesion"
      ]
    },

    transport: {

      passive_transport: [
        "Simple diffusion",
        "Facilitated diffusion",
        "Osmosis"
      ],

      active_transport: [
        "Primary active transport",
        "Secondary active transport"
      ],

      bulk_transport: [
        "Endocytosis",
        "Phagocytosis",
        "Pinocytosis",
        "Receptor-mediated endocytosis",
        "Exocytosis"
      ],

      diffusion:
        "Movement of particles from an area of higher concentration toward an area of lower concentration.",

      osmosis:
        "Movement of water across a selectively permeable membrane in response to differences in water potential or solute concentration.",

      active_transport:
        "Movement of substances across a membrane using energy, often against an electrochemical gradient."
    }
  },


  // ==========================================================
  // 3. CELL CYCLE AND CELL DIVISION
  // ==========================================================

  cell_division: {

    cell_cycle: [
      "G1 phase",
      "S phase",
      "G2 phase",
      "M phase"
    ],

    interphase:
      "Interphase includes G1, S, and G2 and is the period in which cells grow, perform normal functions, and replicate DNA before division.",

    mitosis: {
      purpose:
        "Mitosis produces genetically similar daughter nuclei and supports growth, repair, and asexual reproduction in some organisms.",
      stages: [
        "Prophase",
        "Prometaphase",
        "Metaphase",
        "Anaphase",
        "Telophase",
        "Cytokinesis"
      ]
    },

    meiosis: {
      purpose:
        "Meiosis produces haploid cells and contributes to genetic variation during sexual reproduction.",
      divisions: [
        "Meiosis I",
        "Meiosis II"
      ],
      important_processes: [
        "Crossing over",
        "Independent assortment",
        "Reduction of chromosome number"
      ]
    },

    apoptosis:
      "Apoptosis is a regulated form of programmed cell death that helps maintain tissue development and cellular homeostasis.",

    cell_cycle_control:
      "Cell-cycle checkpoints help determine whether conditions are suitable for progression through the cell cycle."
  },


  // ==========================================================
  // 4. BIOMOLECULES
  // ==========================================================

  biomolecules: {

    carbohydrates: {
      definition:
        "Carbohydrates are molecules composed mainly of carbon, hydrogen, and oxygen and include sugars, starches, and structural polysaccharides.",
      functions: [
        "Energy source",
        "Energy storage",
        "Structural support",
        "Cell recognition"
      ],
      examples: [
        "Glucose",
        "Fructose",
        "Sucrose",
        "Starch",
        "Glycogen",
        "Cellulose",
        "Chitin"
      ]
    },

    lipids: {
      definition:
        "Lipids are a diverse group of largely hydrophobic molecules.",
      functions: [
        "Energy storage",
        "Membrane structure",
        "Hormone production",
        "Insulation",
        "Cell signaling"
      ],
      examples: [
        "Triglycerides",
        "Phospholipids",
        "Steroids",
        "Waxes"
      ]
    },

    proteins: {
      definition:
        "Proteins are polymers of amino acids that perform many structural, catalytic, transport, regulatory, and defensive functions.",
      structural_levels: [
        "Primary structure",
        "Secondary structure",
        "Tertiary structure",
        "Quaternary structure"
      ],
      functions: [
        "Enzymes",
        "Transport",
        "Structure",
        "Movement",
        "Signaling",
        "Defense",
        "Regulation"
      ]
    },

    nucleic_acids: {
      DNA:
        "DNA stores hereditary genetic information.",
      RNA:
        "RNA participates in gene expression, protein synthesis, regulation, and other cellular processes.",
      nucleotides:
        "Nucleotides are the basic building blocks of DNA and RNA."
    },

    ATP: {
      definition:
        "ATP, or adenosine triphosphate, is a major energy-transfer molecule used by cells.",
      function:
        "ATP couples energy-releasing reactions to energy-requiring cellular processes."
    }
  },


  // ==========================================================
  // 5. ENZYMES AND METABOLISM
  // ==========================================================

  metabolism: {

    metabolism:
      "Metabolism is the complete set of chemical reactions occurring within an organism.",

    catabolism:
      "Catabolic pathways break larger molecules into smaller molecules and often release usable energy.",

    anabolism:
      "Anabolic pathways build larger molecules from smaller components and generally require energy.",

    enzymes: {
      definition:
        "Enzymes are biological catalysts that accelerate chemical reactions without being consumed by the reaction.",
      characteristics: [
        "Lower activation energy",
        "Usually highly specific",
        "Affected by temperature",
        "Affected by pH",
        "Can be regulated",
        "Are often proteins, although some catalytic RNAs exist"
      ],
      terms: [
        "Active site",
        "Substrate",
        "Product",
        "Enzyme-substrate complex",
        "Activation energy",
        "Cofactor",
        "Coenzyme"
      ]
    },

    cellular_respiration: {
      purpose:
        "Cellular respiration extracts energy from nutrients and transfers some of that energy into ATP.",
      stages: [
        "Glycolysis",
        "Pyruvate oxidation",
        "Citric acid cycle",
        "Oxidative phosphorylation"
      ]
    },

    glycolysis:
      "Glycolysis is a pathway that breaks glucose into pyruvate and generates ATP and reduced electron carriers.",

    citric_acid_cycle:
      "The citric acid cycle oxidizes acetyl-CoA and produces reduced electron carriers and ATP or equivalent energy.",

    oxidative_phosphorylation:
      "Oxidative phosphorylation uses an electron transport chain and chemiosmosis to generate ATP.",

    fermentation:
      "Fermentation allows continued ATP production through glycolysis under conditions where oxidative metabolism cannot adequately regenerate NAD+."
  },


  // ==========================================================
  // 6. PHOTOSYNTHESIS
  // ==========================================================

  photosynthesis: {

    definition:
      "Photosynthesis is the process by which plants, algae, and some microorganisms convert light energy into chemical energy.",

    overall_process:
      "Carbon dioxide and water are used to produce carbohydrates, with oxygen released in oxygenic photosynthesis.",

    location:
      "In plants, photosynthesis occurs mainly in chloroplasts.",

    light_reactions: [
      "Light absorption",
      "Electron excitation",
      "Electron transport",
      "ATP production",
      "NADPH production",
      "Water splitting"
    ],

    calvin_cycle:
      "The Calvin cycle uses ATP and NADPH to incorporate carbon dioxide into organic molecules.",

    pigments: [
      "Chlorophyll a",
      "Chlorophyll b",
      "Carotenoids"
    ],

    adaptations: {
      C3:
        "Most plants use C3 carbon fixation.",
      C4:
        "C4 plants spatially separate initial carbon fixation from the Calvin cycle and can reduce photorespiration under certain conditions.",
      CAM:
        "CAM plants temporally separate carbon fixation steps, often opening stomata at night to reduce water loss."
    }
  },


  // ==========================================================
  // 7. GENETICS
  // ==========================================================

  genetics: {

    definition:
      "Genetics is the study of heredity, genes, genetic variation, and how traits are transmitted.",

    gene:
      "A gene is a region of DNA that contributes to a functional product or biological function.",

    allele:
      "An allele is one of multiple possible versions of a genetic locus.",

    chromosome:
      "A chromosome is a DNA-protein structure containing genetic material.",

    genome:
      "A genome is the complete genetic material of an organism or virus.",

    genotype:
      "Genotype refers to the genetic constitution relevant to a trait or organism.",

    phenotype:
      "Phenotype refers to observable or measurable characteristics resulting from genetic and environmental influences.",

    mendelian_genetics: {

      laws: [
        "Law of segregation",
        "Law of independent assortment"
      ],

      dominant:
        "A dominant allele can determine a phenotype when present in a suitable genotype.",

      recessive:
        "A recessive allele generally influences phenotype when no dominant allele masks its effect in a simple Mendelian model.",

      homozygous:
        "Having two identical alleles at a locus.",

      heterozygous:
        "Having two different alleles at a locus."
    },

    inheritance_patterns: [
      "Complete dominance",
      "Incomplete dominance",
      "Codominance",
      "Multiple alleles",
      "Polygenic inheritance",
      "Sex-linked inheritance",
      "Mitochondrial inheritance"
    ]
  },


  // ==========================================================
  // 8. MOLECULAR BIOLOGY
  // ==========================================================

  molecular_biology: {

    central_dogma:
      "The central dogma describes the major flow of genetic information from DNA to RNA to protein, while recognizing important biological exceptions and additional information flows.",

    DNA_replication: {
      definition:
        "DNA replication is the process by which DNA is copied before cell division.",
      characteristics: [
        "Semiconservative",
        "Template-directed",
        "Requires DNA polymerases",
        "Uses complementary base pairing"
      ],
      enzymes: [
        "Helicase",
        "Primase",
        "DNA polymerase",
        "Ligase",
        "Topoisomerase"
      ]
    },

    transcription:
      "Transcription is the synthesis of RNA using a DNA template.",

    translation:
      "Translation is the synthesis of a polypeptide using information carried by messenger RNA.",

    RNA_types: [
      "mRNA",
      "tRNA",
      "rRNA",
      "miRNA",
      "siRNA",
      "snRNA",
      "lncRNA"
    ],

    mutations: [
      "Substitution",
      "Insertion",
      "Deletion",
      "Duplication",
      "Inversion",
      "Translocation"
    ],

    mutation_effects: [
      "Silent",
      "Missense",
      "Nonsense",
      "Frameshift",
      "Regulatory changes"
    ],

    gene_regulation:
      "Gene expression can be regulated at transcriptional, RNA-processing, translational, and post-translational levels."
  },


  // ==========================================================
  // 9. EPIGENETICS
  // ==========================================================

  epigenetics: {

    definition:
      "Epigenetics studies heritable or persistent changes in gene activity that occur without changing the underlying DNA sequence.",

    mechanisms: [
      "DNA methylation",
      "Histone modification",
      "Chromatin remodeling",
      "Non-coding RNA regulation"
    ],

    importance: [
      "Development",
      "Cell differentiation",
      "Gene regulation",
      "Environmental responses",
      "Disease biology"
    ]
  },


  // ==========================================================
  // 10. EVOLUTION
  // ==========================================================

  evolution: {

    definition:
      "Evolution is change in heritable characteristics of populations across generations.",

    natural_selection:
      "Natural selection occurs when heritable variation affects survival or reproductive success, causing some traits to become more common over generations.",

    mechanisms: [
      "Natural selection",
      "Genetic drift",
      "Gene flow",
      "Mutation",
      "Non-random mating"
    ],

    selection_types: [
      "Directional selection",
      "Stabilizing selection",
      "Disruptive selection",
      "Balancing selection"
    ],

    genetic_drift: {
      definition:
        "Random changes in allele frequencies, especially important in small populations.",
      examples: [
        "Founder effect",
        "Population bottleneck"
      ]
    },

    gene_flow:
      "Gene flow is movement of genetic material between populations through migration and reproduction.",

    speciation:
      "Speciation is the evolutionary process through which populations become sufficiently distinct to form separate species.",

    evidence: [
      "Fossils",
      "Comparative anatomy",
      "Comparative embryology",
      "Biogeography",
      "Molecular biology",
      "Observed evolutionary change"
    ],

    homology:
      "Homologous structures share evolutionary ancestry even when their current functions differ.",

    analogy:
      "Analogous structures have similar functions but evolved independently rather than from the same ancestral structure."
  },


  // ==========================================================
  // 11. TAXONOMY AND CLASSIFICATION
  // ==========================================================

  taxonomy: {

    definition:
      "Taxonomy is the science of identifying, naming, and classifying organisms.",

    hierarchy: [
      "Domain",
      "Kingdom",
      "Phylum",
      "Class",
      "Order",
      "Family",
      "Genus",
      "Species"
    ],

    domains: [
      "Bacteria",
      "Archaea",
      "Eukarya"
    ],

    binomial_nomenclature:
      "Scientific names generally consist of a genus name followed by a specific epithet.",

    phylogeny:
      "Phylogeny describes evolutionary relationships among organisms.",

    cladistics:
      "Cladistics classifies organisms based on shared derived characteristics and evolutionary relationships."
  },


  // ==========================================================
  // 12. MICROBIOLOGY
  // ==========================================================

  microbiology: {

    microorganisms: [
      "Bacteria",
      "Archaea",
      "Protozoa",
      "Microscopic fungi",
      "Many algae",
      "Viruses"
    ],

    bacteria: {
      definition:
        "Bacteria are single-celled prokaryotic organisms with enormous diversity in metabolism and ecology.",

      structures: [
        "Plasma membrane",
        "Cytoplasm",
        "Ribosomes",
        "Nucleoid",
        "Cell wall",
        "Capsule in some species",
        "Pili in some species",
        "Flagella in some species"
      ],

      reproduction:
        "Many bacteria reproduce through binary fission.",

      importance: [
        "Decomposition",
        "Nutrient cycling",
        "Human microbiome",
        "Food production",
        "Biotechnology",
        "Disease"
      ]
    },

    archaea:
      "Archaea are prokaryotic organisms distinct from bacteria and include organisms adapted to diverse environments.",

    viruses: {
      definition:
        "Viruses are infectious biological entities consisting of genetic material enclosed in a protein coat, sometimes with a lipid envelope. They require host cells for replication.",
      components: [
        "Genome",
        "Capsid",
        "Envelope in some viruses"
      ],
      replication:
        "Viral replication involves entry into host cells, genome expression or replication, assembly, and release, with details varying among viruses."
    },

    fungi: {
      definition:
        "Fungi are eukaryotic organisms that obtain nutrients through absorption.",
      examples: [
        "Yeasts",
        "Molds",
        "Mushrooms"
      ],
      structures: [
        "Hyphae",
        "Mycelium",
        "Spores"
      ]
    }
  },


  // ==========================================================
  // 13. IMMUNOLOGY
  // ==========================================================

  immunology: {

    immune_system:
      "The immune system protects organisms against pathogens and abnormal cells while maintaining mechanisms of self-tolerance.",

    innate_immunity: [
      "Skin",
      "Mucous membranes",
      "Phagocytic cells",
      "Natural killer cells",
      "Complement",
      "Inflammation"
    ],

    adaptive_immunity: [
      "B lymphocytes",
      "T lymphocytes",
      "Antibodies",
      "Immunological memory"
    ],

    B_cells:
      "B cells can differentiate into plasma cells that produce antibodies and memory cells that support faster responses to later exposure.",

    T_cells: {
      helper:
        "Helper T cells coordinate immune responses through signaling.",
      cytotoxic:
        "Cytotoxic T cells can kill infected or abnormal cells.",
      regulatory:
        "Regulatory T cells help control immune responses."
    },

    antibodies:
      "Antibodies are immunoglobulin proteins produced by B-cell-derived plasma cells that bind specific molecular targets.",

    inflammation:
      "Inflammation is a coordinated biological response to injury, infection, or other stimuli.",

    vaccines:
      "Vaccines train the immune system to recognize specific antigens and can establish immunological memory without requiring natural infection with the target pathogen."
  },


  // ==========================================================
  // 14. HUMAN ANATOMY
  // ==========================================================

  human_anatomy: {

    body_organization: [
      "Cells",
      "Tissues",
      "Organs",
      "Organ systems"
    ],

    tissues: [
      "Epithelial tissue",
      "Connective tissue",
      "Muscle tissue",
      "Nervous tissue"
    ],

    organ_systems: [
      "Integumentary system",
      "Skeletal system",
      "Muscular system",
      "Nervous system",
      "Endocrine system",
      "Cardiovascular system",
      "Lymphatic system",
      "Immune system",
      "Respiratory system",
      "Digestive system",
      "Urinary system",
      "Reproductive system"
    ]
  },


  // ==========================================================
  // 15. HUMAN PHYSIOLOGY
  // ==========================================================

  physiology: {

    homeostasis:
      "Homeostasis is the maintenance of relatively stable internal conditions despite external changes.",

    nervous_system: {
      divisions: [
        "Central nervous system",
        "Peripheral nervous system"
      ],
      CNS: [
        "Brain",
        "Spinal cord"
      ],
      PNS: [
        "Somatic nervous system",
        "Autonomic nervous system"
      ]
    },

    endocrine_system: {
      function:
        "The endocrine system uses hormones to regulate processes such as metabolism, growth, reproduction, stress responses, and water balance.",
      glands: [
        "Hypothalamus",
        "Pituitary gland",
        "Thyroid gland",
        "Parathyroid glands",
        "Adrenal glands",
        "Pancreas",
        "Ovaries",
        "Testes",
        "Pineal gland"
      ]
    },

    cardiovascular_system: {
      components: [
        "Heart",
        "Blood",
        "Blood vessels"
      ],
      circulation: [
        "Pulmonary circulation",
        "Systemic circulation"
      ]
    },

    respiratory_system: {
      main_functions: [
        "Gas exchange",
        "Oxygen uptake",
        "Carbon dioxide removal",
        "Acid-base regulation"
      ],
      organs: [
        "Nose",
        "Pharynx",
        "Larynx",
        "Trachea",
        "Bronchi",
        "Bronchioles",
        "Lungs",
        "Alveoli"
      ]
    },

    digestive_system: {
      function:
        "Processes food into absorbable nutrients and eliminates indigestible material.",
      organs: [
        "Mouth",
        "Esophagus",
        "Stomach",
        "Small intestine",
        "Large intestine",
        "Rectum",
        "Anus"
      ],
      accessory_organs: [
        "Liver",
        "Gallbladder",
        "Pancreas"
      ]
    },

    urinary_system: {
      functions: [
        "Waste removal",
        "Water balance",
        "Electrolyte balance",
        "Acid-base balance",
        "Blood pressure regulation"
      ],
      organs: [
        "Kidneys",
        "Ureters",
        "Bladder",
        "Urethra"
      ]
    }
  },


  // ==========================================================
  // 16. BLOOD
  // ==========================================================

  blood: {

    components: [
      "Plasma",
      "Red blood cells",
      "White blood cells",
      "Platelets"
    ],

    red_blood_cells:
      "Red blood cells transport oxygen primarily using hemoglobin.",

    white_blood_cells:
      "White blood cells participate in immune defense.",

    platelets:
      "Platelets contribute to blood clotting and repair of damaged blood vessels.",

    plasma:
      "Plasma is the liquid component of blood containing water, proteins, electrolytes, nutrients, hormones, and waste products.",

    hemoglobin:
      "Hemoglobin is an oxygen-binding protein found in red blood cells."
  },


  // ==========================================================
  // 17. MUSCULAR SYSTEM
  // ==========================================================

  muscular_system: {

    muscle_types: [
      "Skeletal muscle",
      "Cardiac muscle",
      "Smooth muscle"
    ],

    skeletal_muscle:
      "Usually voluntary muscle attached to bones and responsible for movement and posture.",

    cardiac_muscle:
      "Specialized involuntary muscle forming most of the heart.",

    smooth_muscle:
      "Involuntary muscle found in organs and blood vessels."
  },


  // ==========================================================
  // 18. SKELETAL SYSTEM
  // ==========================================================

  skeletal_system: {

    functions: [
      "Support",
      "Protection",
      "Movement",
      "Mineral storage",
      "Blood-cell production"
    ],

    bone_types: [
      "Long bones",
      "Short bones",
      "Flat bones",
      "Irregular bones"
    ],

    joints:
      "Joints are locations where bones meet and can allow different degrees of movement."
  },


  // ==========================================================
  // 19. NERVOUS SYSTEM
  // ==========================================================

  neuroscience_basics: {

    neuron:
      "A neuron is a specialized cell capable of receiving, processing, and transmitting information.",

    neuron_parts: [
      "Dendrites",
      "Cell body",
      "Axon",
      "Axon terminals"
    ],

    glial_cells:
      "Glial cells support, nourish, protect, and regulate neurons.",

    action_potential:
      "An action potential is a rapid change in membrane potential that propagates along an excitable cell.",

    synapse:
      "A synapse is a junction through which signals pass from one neuron to another cell.",

    neurotransmitter:
      "A neurotransmitter is a signaling molecule released by neurons that influences another cell.",

    brain_regions: [
      "Cerebrum",
      "Cerebellum",
      "Brainstem",
      "Thalamus",
      "Hypothalamus",
      "Hippocampus",
      "Amygdala"
    ]
  },


  // ==========================================================
  // 20. REPRODUCTION
  // ==========================================================

  reproduction: {

    types: [
      "Asexual reproduction",
      "Sexual reproduction"
    ],

    asexual_reproduction:
      "Asexual reproduction involves a single parent and generally produces offspring genetically similar to the parent, aside from mutations.",

    sexual_reproduction:
      "Sexual reproduction involves genetic contributions from reproductive cells and usually increases genetic variation.",

    fertilization:
      "Fertilization is the fusion of gametes to form a zygote.",

    gametes: [
      "Sperm",
      "Egg"
    ]
  },


  // ==========================================================
  // 21. DEVELOPMENTAL BIOLOGY
  // ==========================================================

  development: {

    stages: [
      "Fertilization",
      "Zygote",
      "Cleavage",
      "Blastula",
      "Gastrulation",
      "Organogenesis"
    ],

    differentiation:
      "Cell differentiation is the process through which cells become specialized in structure and function.",

    stem_cells: {
      definition:
        "Stem cells are cells capable of self-renewal and differentiation into one or more specialized cell types.",
      categories: [
        "Totipotent",
        "Pluripotent",
        "Multipotent"
      ]
    }
  },


  // ==========================================================
  // 22. BOTANY
  // ==========================================================

  botany: {

    plant_organs: [
      "Roots",
      "Stems",
      "Leaves",
      "Flowers",
      "Fruits",
      "Seeds"
    ],

    roots:
      "Roots anchor plants and commonly absorb water and minerals from the soil.",

    stems:
      "Stems support leaves and reproductive structures and contain vascular tissues for transport.",

    leaves:
      "Leaves are major sites of photosynthesis and gas exchange in many plants.",

    xylem:
      "Xylem transports water and dissolved minerals, mainly from roots toward aerial parts.",

    phloem:
      "Phloem transports sugars and other organic substances throughout the plant.",

    stomata:
      "Stomata are pores in plant surfaces that regulate gas exchange and water loss.",

    transpiration:
      "Transpiration is the loss of water vapor from plant surfaces, especially through stomata."
  },


  // ==========================================================
  // 23. ZOOLOGY
  // ==========================================================

  zoology: {

    definition:
      "Zoology is the scientific study of animals.",

    major_groups: [
      "Porifera",
      "Cnidaria",
      "Platyhelminthes",
      "Nematoda",
      "Annelida",
      "Mollusca",
      "Arthropoda",
      "Echinodermata",
      "Chordata"
    ],

    arthropods:
      "Arthropods are animals with segmented bodies, jointed appendages, and an exoskeleton.",

    vertebrates: [
      "Fish",
      "Amphibians",
      "Reptiles",
      "Birds",
      "Mammals"
    ],

    mammals:
      "Mammals are vertebrates characterized by features including hair or fur and mammary glands."
  },


  // ==========================================================
  // 24. ECOLOGY
  // ==========================================================

  ecology: {

    definition:
      "Ecology studies interactions among organisms and between organisms and their physical environment.",

    levels: [
      "Individual",
      "Population",
      "Community",
      "Ecosystem",
      "Biome",
      "Biosphere"
    ],

    population:
      "A population is a group of individuals of the same species living in a particular area.",

    community:
      "A community consists of populations of different species living and interacting in an area.",

    ecosystem:
      "An ecosystem includes living organisms and their physical environment together with their interactions.",

    habitat:
      "A habitat is the environment in which an organism normally lives.",

    niche:
      "An ecological niche describes the role, resource use, and environmental relationships of a species.",

    food_chain:
      "A food chain represents a sequence of feeding relationships through which energy and matter move.",

    food_web:
      "A food web combines multiple interconnected food chains.",

    trophic_levels: [
      "Producers",
      "Primary consumers",
      "Secondary consumers",
      "Tertiary consumers",
      "Decomposers"
    ],

    producers:
      "Organisms that produce organic matter, commonly through photosynthesis or chemosynthesis.",

    consumers:
      "Organisms that obtain energy and nutrients by consuming other organisms or organic matter.",

    decomposers:
      "Organisms such as many fungi and bacteria that break down dead organic material.",

    carrying_capacity:
      "Carrying capacity is the population size that an environment can sustain under specified conditions.",

    limiting_factors: [
      "Food",
      "Water",
      "Space",
      "Predation",
      "Disease",
      "Competition",
      "Temperature",
      "Habitat availability"
    ]
  },


  // ==========================================================
  // 25. ECOLOGICAL INTERACTIONS
  // ==========================================================

  ecological_interactions: {

    competition:
      "Competition occurs when organisms use the same limited resource.",

    predation:
      "Predation occurs when one organism captures and consumes another.",

    herbivory:
      "Herbivory occurs when animals consume plants or algae.",

    parasitism:
      "Parasitism is an interaction in which one organism benefits while the host is harmed.",

    mutualism:
      "Mutualism is an interaction in which both participating organisms benefit.",

    commensalism:
      "Commensalism is an interaction in which one organism benefits while the other is generally neither significantly helped nor harmed.",

    symbiosis:
      "Symbiosis broadly refers to close and prolonged biological interactions between different species."
  },


  // ==========================================================
  // 26. BIOGEOCHEMICAL CYCLES
  // ==========================================================

  biogeochemical_cycles: {

    water_cycle: [
      "Evaporation",
      "Condensation",
      "Precipitation",
      "Infiltration",
      "Runoff",
      "Transpiration"
    ],

    carbon_cycle: [
      "Photosynthesis",
      "Respiration",
      "Decomposition",
      "Combustion",
      "Ocean-atmosphere exchange",
      "Carbon storage"
    ],

    nitrogen_cycle: [
      "Nitrogen fixation",
      "Nitrification",
      "Assimilation",
      "Ammonification",
      "Denitrification"
    ],

    phosphorus_cycle:
      "The phosphorus cycle moves phosphorus through rocks, soil, water, organisms, and sediments and lacks a major atmospheric phase.",

    sulfur_cycle:
      "The sulfur cycle involves movement of sulfur through rocks, soil, water, organisms, atmosphere, and microbial processes."
  },


  // ==========================================================
  // 27. BIODIVERSITY
  // ==========================================================

  biodiversity: {

    levels: [
      "Genetic diversity",
      "Species diversity",
      "Ecosystem diversity"
    ],

    importance: [
      "Ecosystem stability",
      "Food resources",
      "Medicines",
      "Pollination",
      "Nutrient cycling",
      "Genetic resources",
      "Cultural value"
    ],

    threats: [
      "Habitat destruction",
      "Overexploitation",
      "Invasive species",
      "Pollution",
      "Climate change",
      "Disease",
      "Fragmentation"
    ],

    conservation: [
      "Protected areas",
      "Habitat restoration",
      "Captive breeding",
      "Seed banks",
      "Sustainable resource use",
      "Wildlife corridors"
    ]
  },


  // ==========================================================
  // 28. BIOTECHNOLOGY
  // ==========================================================

  biotechnology: {

    definition:
      "Biotechnology uses biological organisms, cells, molecules, or processes to develop useful products and technologies.",

    techniques: [
      "PCR",
      "DNA sequencing",
      "Gel electrophoresis",
      "Recombinant DNA",
      "Cloning",
      "Cell culture",
      "Genetic engineering",
      "CRISPR-based genome editing"
    ],

    PCR:
      "Polymerase chain reaction amplifies specific DNA sequences through repeated cycles of denaturation, primer annealing, and DNA synthesis.",

    gel_electrophoresis:
      "Gel electrophoresis separates nucleic acids or proteins based on properties such as size and charge.",

    DNA_sequencing:
      "DNA sequencing determines the nucleotide order in DNA.",

    recombinant_DNA:
      "Recombinant DNA technology combines DNA molecules from different sources.",

    genetic_engineering:
      "Genetic engineering deliberately modifies genetic material using molecular biological techniques.",

    CRISPR:
      "CRISPR-based technologies can use guide RNAs and CRISPR-associated proteins to target specific nucleic acid sequences for editing or regulation."
  },


  // ==========================================================
  // 29. CLONING
  // ==========================================================

  cloning: {

    definition:
      "Cloning refers to producing genetically identical or highly similar copies of biological material.",

    types: [
      "Molecular cloning",
      "Cell cloning",
      "Reproductive cloning",
      "Therapeutic cloning"
    ],

    important_fact:
      "Cloning does not necessarily mean producing a completely identical organism in every characteristic because environmental and epigenetic factors can influence phenotype."
  },


  // ==========================================================
  // 30. GENOMICS
  // ==========================================================

  genomics: {

    definition:
      "Genomics is the study of complete genomes and their structure, function, evolution, and interactions.",

    fields: [
      "Comparative genomics",
      "Functional genomics",
      "Structural genomics",
      "Population genomics",
      "Transcriptomics",
      "Metagenomics"
    ],

    transcriptome:
      "The transcriptome is the collection of RNA molecules expressed in a cell, tissue, or organism under particular conditions.",

    proteome:
      "The proteome is the complete set of proteins produced by a cell, tissue, or organism under particular conditions."
  },


  // ==========================================================
  // 31. POPULATION GENETICS
  // ==========================================================

  population_genetics: {

    definition:
      "Population genetics studies genetic variation and allele-frequency changes within populations.",

    allele_frequency:
      "Allele frequency is the proportion of copies of a particular allele in a population's gene pool.",

    hardy_weinberg: {
      principle:
        "Under specified assumptions, allele and genotype frequencies remain constant across generations.",
      assumptions: [
        "Very large population",
        "Random mating",
        "No mutation",
        "No migration",
        "No natural selection"
      ]
    }
  },


  // ==========================================================
  // 32. ANIMAL PHYSIOLOGY
  // ==========================================================

  animal_physiology: {

    circulation:
      "Circulatory systems transport gases, nutrients, hormones, heat, and waste products.",

    respiration:
      "Respiration in physiology refers to processes involved in obtaining oxygen and removing carbon dioxide.",

    excretion:
      "Excretion removes metabolic waste products from organisms.",

    osmoregulation:
      "Osmoregulation maintains appropriate water and solute concentrations in body fluids.",

    thermoregulation:
      "Thermoregulation maintains body temperature within an appropriate range."
  },


  // ==========================================================
  // 33. PLANT PHYSIOLOGY
  // ==========================================================

  plant_physiology: {

    mineral_nutrition:
      "Plants require essential mineral nutrients for growth, metabolism, and reproduction.",

    plant_hormones: [
      "Auxin",
      "Gibberellins",
      "Cytokinins",
      "Abscisic acid",
      "Ethylene"
    ],

    tropisms: [
      "Phototropism",
      "Gravitropism",
      "Hydrotropism",
      "Thigmotropism"
    ],

    phototropism:
      "Phototropism is directional plant growth in response to light.",

    gravitropism:
      "Gravitropism is directional growth in response to gravity."
  },


  // ==========================================================
  // 34. CELL SIGNALING
  // ==========================================================

  cell_signaling: {

    definition:
      "Cell signaling allows cells to detect information and respond to signals.",

    stages: [
      "Reception",
      "Signal transduction",
      "Cellular response"
    ],

    signaling_types: [
      "Autocrine",
      "Paracrine",
      "Endocrine",
      "Synaptic",
      "Juxtacrine"
    ],

    receptors: [
      "Cell-surface receptors",
      "Intracellular receptors"
    ],

    second_messengers: [
      "cAMP",
      "Calcium ions",
      "IP3",
      "DAG"
    ]
  },


  // ==========================================================
  // 35. HOMEOSTASIS
  // ==========================================================

  homeostasis: {

    definition:
      "Homeostasis is the regulation of internal conditions within ranges compatible with life.",

    components: [
      "Sensor",
      "Control center",
      "Effector"
    ],

    feedback: [
      "Negative feedback",
      "Positive feedback"
    ],

    negative_feedback:
      "Negative feedback counteracts a change and tends to restore a variable toward its regulated range.",

    positive_feedback:
      "Positive feedback amplifies a process until a particular endpoint is reached."
  },


  // ==========================================================
  // 36. HUMAN REPRODUCTION
  // ==========================================================

  human_reproduction: {

    male_system: [
      "Testes",
      "Epididymis",
      "Vas deferens",
      "Seminal vesicles",
      "Prostate gland",
      "Urethra",
      "Penis"
    ],

    female_system: [
      "Ovaries",
      "Fallopian tubes",
      "Uterus",
      "Cervix",
      "Vagina"
    ],

    spermatogenesis:
      "Spermatogenesis is the process by which sperm cells develop in the testes.",

    oogenesis:
      "Oogenesis is the process through which female gametes develop.",

    menstrual_cycle:
      "The menstrual cycle involves coordinated changes in reproductive tissues and hormones that prepare for possible pregnancy."
  },


  // ==========================================================
  // 37. AGING AND CELLULAR BIOLOGY
  // ==========================================================

  aging_biology: {

    cellular_aging:
      "Biological aging involves progressive changes in cells and tissues over time.",

    associated_processes: [
      "Accumulation of cellular damage",
      "Changes in cellular senescence",
      "Altered protein homeostasis",
      "Changes in mitochondrial function",
      "Genomic instability",
      "Changes in stem-cell function"
    ],

    cellular_senescence:
      "Cellular senescence is a state in which cells permanently or persistently stop dividing while remaining metabolically active."
  },


  // ==========================================================
  // 38. PARASITOLOGY
  // ==========================================================

  parasitology: {

    definition:
      "Parasitology is the study of organisms that live in or on hosts and obtain resources from them.",

    parasite_types: [
      "Protozoan parasites",
      "Helminths",
      "Ectoparasites"
    ],

    host_types: [
      "Definitive host",
      "Intermediate host",
      "Reservoir host",
      "Vector"
    ],

    vector:
      "A vector is an organism that transmits a pathogen or parasite between hosts."
  },


  // ==========================================================
  // 39. PATHOGENS
  // ==========================================================

  pathogens: {

    major_types: [
      "Bacteria",
      "Viruses",
      "Fungi",
      "Protozoa",
      "Parasitic worms"
    ],

    pathogenicity:
      "Pathogenicity refers to the ability of an organism or agent to cause disease.",

    virulence:
      "Virulence describes the degree of harmfulness or disease-causing capacity of a pathogen."
  },


  // ==========================================================
  // 40. EPIDEMIOLOGY BASICS
  // ==========================================================

  epidemiology: {

    definition:
      "Epidemiology studies the distribution and determinants of health-related conditions in populations.",

    terms: [
      "Incidence",
      "Prevalence",
      "Risk",
      "Transmission",
      "Outbreak",
      "Epidemic",
      "Pandemic"
    ],

    incidence:
      "Incidence describes the occurrence of new cases within a population over a specified period.",

    prevalence:
      "Prevalence describes the proportion of a population that has a condition at a specified time or period."
  },


  // ==========================================================
  // 41. EXPERIMENTAL BIOLOGY
  // ==========================================================

  experimental_biology: {

    controls:
      "A control provides a reference condition against which experimental effects can be evaluated.",

    variables: [
      "Independent variable",
      "Dependent variable",
      "Controlled variables",
      "Confounding variables"
    ],

    replication:
      "Replication helps determine whether an observed biological result is reproducible.",

    sample_size:
      "Adequate sample size improves the reliability and statistical interpretation of biological experiments.",

    randomization:
      "Randomization can reduce systematic bias when assigning experimental subjects or samples.",

    correlation:
      "Correlation describes an association between variables but does not by itself establish causation."
  },


  // ==========================================================
  // 42. BIOLOGICAL CLASSIFICATION QUICK REFERENCE
  // ==========================================================

  classification_reference: {

    bacteria:
      "Prokaryotic organisms belonging to the domain Bacteria.",

    archaea:
      "Prokaryotic organisms belonging to the domain Archaea.",

    protists:
      "A diverse informal grouping of mostly eukaryotic organisms that do not fit traditional plant, animal, or fungal categories.",

    plants:
      "Multicellular eukaryotes including land plants and related lineages characterized by photosynthetic ancestry.",

    fungi:
      "Eukaryotic organisms that generally obtain nutrients through absorption.",

    animals:
      "Multicellular eukaryotes that obtain energy and nutrients by consuming organic material."
  },


  // ==========================================================
  // 43. IMPORTANT BIOLOGY DEFINITIONS
  // ==========================================================

  definitions: {

    adaptation:
      "A heritable characteristic that improves survival or reproductive success in a particular environment.",

    antigen:
      "A molecule or molecular structure that can be recognized by components of the adaptive immune system.",

    antibody:
      "An immunoglobulin protein produced by B-cell-derived plasma cells that binds specific antigens.",

    allele:
      "A variant form of a genetic locus.",

    chromosome:
      "A DNA-protein structure containing genetic information.",

    codon:
      "A sequence of three nucleotides in mRNA that specifies an amino acid or termination signal.",

    genome:
      "The complete genetic material of an organism or biological entity.",

    mutation:
      "A change in genetic material.",

    phenotype:
      "Observable characteristics produced by genetic and environmental influences.",

    genotype:
      "The genetic makeup relevant to a trait or organism.",

    enzyme:
      "A biological catalyst.",

    hormone:
      "A signaling molecule released by cells or glands that affects target cells.",

    tissue:
      "A group of cells and associated material performing a particular function.",

    organ:
      "A structure composed of multiple tissue types that performs specific functions.",

    species:
      "A taxonomic category representing a distinct evolutionary lineage; species concepts vary by context.",

    ecosystem:
      "A community of organisms and their physical environment interacting as a system."
  },


  // ==========================================================
  // 44. COMMON BIOLOGY COMPARISONS
  // ==========================================================

  comparisons: {

    DNA_vs_RNA: {
      DNA: [
        "Usually double-stranded",
        "Uses thymine",
        "Long-term genetic information storage",
        "Usually more chemically stable"
      ],
      RNA: [
        "Usually single-stranded",
        "Uses uracil",
        "Important in gene expression and regulation",
        "Can have catalytic functions"
      ]
    },

    mitosis_vs_meiosis: {
      mitosis: [
        "One division",
        "Usually produces two daughter cells",
        "Maintains chromosome number",
        "Used in growth and tissue maintenance"
      ],
      meiosis: [
        "Two divisions",
        "Produces haploid reproductive cells or their precursors",
        "Reduces chromosome number",
        "Generates genetic variation"
      ]
    },

    prokaryote_vs_eukaryote: {
      prokaryote: [
        "No membrane-bound nucleus",
        "Generally simpler internal organization",
        "Bacteria and archaea"
      ],
      eukaryote: [
        "Membrane-bound nucleus",
        "Membrane-bound organelles",
        "Animals, plants, fungi, many protists"
      ]
    },

    artery_vs_vein: {
      artery:
        "Carries blood away from the heart.",
      vein:
        "Carries blood toward the heart."
    },

    aerobic_vs_anaerobic: {
      aerobic:
        "Processes that require or use oxygen.",
      anaerobic:
        "Processes that occur without requiring oxygen."
    }
  },


  // ==========================================================
  // 45. BIOLOGY FORMULAS AND CONCEPTUAL RELATIONSHIPS
  // ==========================================================

  formulas: {

    population_growth:
      "Population growth depends on births, deaths, immigration, and emigration.",

    exponential_growth:
      "Exponential growth occurs when population growth is proportional to population size under idealized conditions.",

    logistic_growth:
      "Logistic growth incorporates environmental carrying capacity.",

    hardy_weinberg:
      "For a two-allele locus under Hardy-Weinberg assumptions: p + q = 1 and p² + 2pq + q² = 1.",

    magnification:
      "Magnification = image size / actual size.",

    photosynthesis_concept:
      "Light energy + carbon dioxide + water → chemical energy stored in organic molecules + oxygen in oxygenic photosynthesis.",

    respiration_concept:
      "Organic fuel + oxygen → carbon dioxide + water + usable cellular energy, with details depending on pathway."
  },


  // ==========================================================
  // 46. BIOLOGY KEYWORDS FOR ROUTING
  // ==========================================================

  keywords: [

    "biology",
    "biological",
    "cell",
    "cells",
    "cell biology",
    "organism",
    "organisms",
    "life",
    "living",
    "gene",
    "genes",
    "genetics",
    "genome",
    "DNA",
    "RNA",
    "chromosome",
    "chromosomes",
    "mutation",
    "heredity",
    "inheritance",
    "allele",
    "protein",
    "proteins",
    "enzyme",
    "enzymes",
    "amino acid",
    "carbohydrate",
    "lipid",
    "fat",
    "ATP",
    "metabolism",
    "respiration",
    "photosynthesis",
    "chloroplast",
    "mitochondria",
    "mitochondrion",
    "nucleus",
    "ribosome",
    "membrane",
    "osmosis",
    "diffusion",
    "mitosis",
    "meiosis",
    "evolution",
    "natural selection",
    "adaptation",
    "species",
    "taxonomy",
    "microbiology",
    "bacteria",
    "archaea",
    "virus",
    "viruses",
    "fungi",
    "fungus",
    "botany",
    "plant",
    "plants",
    "zoology",
    "animal",
    "animals",
    "ecology",
    "ecosystem",
    "population",
    "community",
    "biodiversity",
    "food chain",
    "food web",
    "environment",
    "immune system",
    "immunity",
    "antibody",
    "antigen",
    "vaccine",
    "immunology",
    "anatomy",
    "physiology",
    "human body",
    "brain",
    "neuron",
    "nervous system",
    "heart",
    "blood",
    "lungs",
    "kidney",
    "liver",
    "stomach",
    "hormone",
    "endocrine",
    "reproduction",
    "fertilization",
    "sperm",
    "egg",
    "embryo",
    "development",
    "stem cell",
    "biotechnology",
    "CRISPR",
    "PCR",
    "DNA sequencing",
    "genetic engineering",
    "genomics",
    "epigenetics",
    "parasitology",
    "pathogen",
    "epidemiology"
  ]
};


// ============================================================
// BIOLOGY QUICK ANSWER MAP
// ============================================================

export const BIOLOGY_QUICK_FACTS = {

  "what is biology":
    "Biology is the scientific study of life and living organisms.",

  "what is a cell":
    "A cell is the basic structural and functional unit of life.",

  "what is dna":
    "DNA is a nucleic acid that stores hereditary genetic information.",

  "what is rna":
    "RNA is a nucleic acid involved in gene expression, regulation, protein synthesis, and other biological processes.",

  "what is a gene":
    "A gene is a region of DNA that contributes to a functional biological product or function.",

  "what is genetics":
    "Genetics is the study of heredity, genes, genetic variation, and inheritance.",

  "what is evolution":
    "Evolution is change in heritable characteristics of populations across generations.",

  "what is natural selection":
    "Natural selection is differential survival or reproduction associated with heritable variation.",

  "what is photosynthesis":
    "Photosynthesis converts light energy into chemical energy and, in oxygenic photosynthesis, releases oxygen.",

  "what is cellular respiration":
    "Cellular respiration is a set of metabolic pathways that extract energy from nutrients and transfer some of it into ATP.",

  "what is mitosis":
    "Mitosis is nuclear division that usually produces genetically similar daughter nuclei.",

  "what is meiosis":
    "Meiosis is a specialized cell division that reduces chromosome number and contributes to genetic variation.",

  "what is osmosis":
    "Osmosis is movement of water across a selectively permeable membrane in response to differences in water potential.",

  "what is an enzyme":
    "An enzyme is a biological catalyst that accelerates a chemical reaction without being consumed.",

  "what is an ecosystem":
    "An ecosystem consists of organisms and their physical environment interacting as a system.",

  "what is biodiversity":
    "Biodiversity is the variety of life, including genetic, species, and ecosystem diversity.",

  "what is a virus":
    "A virus is an infectious biological entity containing genetic material and requiring host cells for replication.",

  "what is a bacterium":
    "A bacterium is a single-celled prokaryotic organism belonging to the domain Bacteria.",

  "what is a chromosome":
    "A chromosome is a DNA-protein structure containing genetic material.",

  "what is a mutation":
    "A mutation is a change in genetic material.",

  "what is homeostasis":
    "Homeostasis is the maintenance of relatively stable internal conditions.",

  "what is an antibody":
    "An antibody is an immunoglobulin protein produced by B-cell-derived plasma cells that binds a specific antigen.",

  "what is a neuron":
    "A neuron is a specialized cell that receives, processes, and transmits information.",

  "what is stem cell":
    "A stem cell is a cell capable of self-renewal and differentiation into one or more specialized cell types.",

  "what is biotechnology":
    "Biotechnology applies biological organisms, cells, molecules, or processes to develop useful products and technologies.",

  "what is crispr":
    "CRISPR-based technologies use targeted nucleic-acid recognition systems to edit or regulate genetic material."
};


// ============================================================
// EXPORT METADATA
// ============================================================

export const BIOLOGY_METADATA = {

  subject: "Biology",

  category: "Science",

  version: "1.0.0",

  description:
    "Large foundational biology knowledge base covering cellular biology, genetics, molecular biology, evolution, microbiology, anatomy, physiology, ecology, botany, zoology, immunology, biotechnology, and related fields.",

  topics: [
    "General Biology",
    "Cell Biology",
    "Cell Division",
    "Biomolecules",
    "Metabolism",
    "Photosynthesis",
    "Genetics",
    "Molecular Biology",
    "Epigenetics",
    "Evolution",
    "Taxonomy",
    "Microbiology",
    "Immunology",
    "Human Anatomy",
    "Human Physiology",
    "Blood",
    "Neuroscience",
    "Reproduction",
    "Development",
    "Botany",
    "Zoology",
    "Ecology",
    "Biodiversity",
    "Biotechnology",
    "Genomics",
    "Population Genetics",
    "Experimental Biology"
  ],

  source_type:
    "Foundational educational knowledge",

  intended_use:
    "Internal knowledge retrieval and educational question answering"
};


// ============================================================
// DEFAULT EXPORT
// ============================================================

export default BIOLOGY_KNOWLEDGE;
