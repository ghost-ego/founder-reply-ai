// lib/knowledge/science/neuroscience.js

// ============================================================
// NEUROSCIENCE KNOWLEDGE BASE
// ============================================================
// Comprehensive foundational knowledge about the nervous system,
// brain structure and function, neural communication, cognition,
// behavior, development, disorders, and neuroscience methods.
//
// This file is intentionally self-contained.
// Add/export it from lib/knowledge/index.js LAST.
// ============================================================

export const NEUROSCIENCE_KNOWLEDGE = {
  name: "Neuroscience",
  category: "science",
  description:
    "The scientific study of the nervous system, including the brain, spinal cord, peripheral nerves, neurons, glial cells, neural circuits, behavior, cognition, sensation, movement, development, disease, and neuroplasticity.",

  // ============================================================
  // 1. CORE DEFINITION
  // ============================================================

  definition: {
    neuroscience:
      "Neuroscience is the interdisciplinary scientific study of the nervous system and how neural structures and processes produce sensation, movement, behavior, cognition, emotion, and physiological regulation.",

    nervous_system:
      "The nervous system is a biological communication and control network consisting of neurons, glial cells, specialized sensory structures, and interconnected neural circuits.",

    brain:
      "The brain is the central organ of the vertebrate nervous system and integrates sensory information, coordinates movement, regulates internal states, supports learning and memory, and contributes to cognition and behavior.",

    spinal_cord:
      "The spinal cord is a long central nervous system structure that carries information between the brain and body and contains neural circuits involved in reflexes and movement.",

    peripheral_nervous_system:
      "The peripheral nervous system consists of neural structures outside the brain and spinal cord, including nerves, ganglia, and sensory receptors.",

    neural_circuit:
      "A neural circuit is an interconnected group of neurons whose coordinated activity contributes to specific physiological, sensory, motor, cognitive, or behavioral functions.",

    interdisciplinary_nature: [
      "biology",
      "anatomy",
      "physiology",
      "psychology",
      "medicine",
      "chemistry",
      "physics",
      "computer science",
      "statistics",
      "engineering",
      "linguistics",
      "philosophy",
      "artificial intelligence",
    ],
  },

  // ============================================================
  // 2. MAJOR BRANCHES OF NEUROSCIENCE
  // ============================================================

  branches: {
    cellular_neuroscience:
      "Studies neurons, glia, membranes, ion channels, synapses, and intracellular signaling.",

    molecular_neuroscience:
      "Studies molecules involved in neural function, including receptors, neurotransmitters, enzymes, genes, and signaling pathways.",

    systems_neuroscience:
      "Studies how groups of neurons and brain regions work together to perform functions.",

    cognitive_neuroscience:
      "Studies the neural mechanisms underlying cognition such as attention, memory, language, reasoning, and decision-making.",

    behavioral_neuroscience:
      "Studies relationships between nervous system activity and behavior.",

    computational_neuroscience:
      "Uses mathematical and computational models to understand neural processing and information representation.",

    developmental_neuroscience:
      "Studies how the nervous system forms, matures, reorganizes, and changes throughout life.",

    clinical_neuroscience:
      "Studies neurological and psychiatric disorders and their diagnosis, mechanisms, prevention, and treatment.",

    neuropsychology:
      "Studies relationships between brain function and psychological processes, often using effects of brain injury or neurological disease.",

    neuroendocrinology:
      "Studies interactions between the nervous system and endocrine system.",

    neuroimmunology:
      "Studies interactions between neural and immune systems.",

    neuropharmacology:
      "Studies how drugs and chemicals affect neural signaling and behavior.",

    neurogenetics:
      "Studies genetic contributions to nervous-system development, function, and disease.",

    neuroengineering:
      "Applies engineering principles to neural systems, including brain-computer interfaces and neural prosthetics.",

    social_neuroscience:
      "Studies neural mechanisms involved in social interaction, social cognition, and interpersonal behavior.",
  },

  // ============================================================
  // 3. ORGANIZATION OF THE NERVOUS SYSTEM
  // ============================================================

  nervous_system_organization: {
    central_nervous_system: {
      components: [
        "brain",
        "spinal cord",
      ],
      function:
        "The central nervous system processes and integrates information and coordinates many physiological and behavioral functions.",
    },

    peripheral_nervous_system: {
      components: [
        "cranial nerves",
        "spinal nerves",
        "ganglia",
        "sensory receptors",
        "peripheral nerve endings",
      ],
    },

    somatic_nervous_system:
      "The somatic nervous system is associated with conscious sensation and voluntary skeletal-muscle control.",

    autonomic_nervous_system:
      "The autonomic nervous system regulates many involuntary physiological processes.",

    autonomic_divisions: {
      sympathetic:
        "Generally prepares the body for increased activity or emergency demands.",

      parasympathetic:
        "Generally supports rest, digestion, energy conservation, and recovery.",

      enteric:
        "A complex neural network within the gastrointestinal tract that regulates many aspects of digestive function.",
    },
  },

  // ============================================================
  // 4. NEURONS
  // ============================================================

  neurons: {
    definition:
      "Neurons are electrically excitable cells specialized for receiving, processing, and transmitting information.",

    major_parts: {
      soma:
        "The cell body containing the nucleus and much of the metabolic machinery.",

      dendrites:
        "Branching neuronal structures that commonly receive synaptic input.",

      axon:
        "A neuronal projection specialized for conducting electrical signals away from the cell body.",

      axon_hillock:
        "A region near the soma where synaptic inputs are integrated and action potentials may be initiated.",

      axon_initial_segment:
        "A specialized axonal region with a high density of voltage-gated ion channels that commonly initiates action potentials.",

      myelin:
        "An electrically insulating membrane structure surrounding many axons and increasing conduction efficiency.",

      axon_terminal:
        "The distal end of an axon where neurotransmitters or other signals can be released.",

      synaptic_terminal:
        "A specialized axon-terminal structure involved in communication with another cell.",
    },

    neuron_types: {
      sensory_neuron:
        "Carries information from sensory receptors toward the central nervous system.",

      motor_neuron:
        "Carries signals that influence muscles or other effectors.",

      interneuron:
        "Connects neurons within neural circuits and is especially abundant in the central nervous system.",

      projection_neuron:
        "A neuron that sends information over relatively long distances to another neural structure.",

      local_circuit_neuron:
        "A neuron whose connections are primarily restricted to a relatively local region.",

      pyramidal_neuron:
        "A major excitatory neuron type found in cerebral cortex and other regions.",

      purkinje_neuron:
        "A distinctive neuron in the cerebellar cortex involved in cerebellar information processing.",

      motor_neuron:
        "Neuron specialized to control skeletal muscle or other motor targets.",
    },

    morphology: [
      "unipolar",
      "pseudounipolar",
      "bipolar",
      "multipolar",
    ],
  },

  // ============================================================
  // 5. GLIAL CELLS
  // ============================================================

  glia: {
    definition:
      "Glial cells are non-neuronal cells that support, regulate, protect, and interact with neurons and neural circuits.",

    astrocytes:
      "Astrocytes support neurons, regulate extracellular ions and neurotransmitters, participate in metabolic support, interact with synapses, and contribute to the blood-brain barrier.",

    oligodendrocytes:
      "Oligodendrocytes produce myelin around axons in the central nervous system.",

    schwann_cells:
      "Schwann cells produce myelin around peripheral axons and participate in peripheral nerve support and repair.",

    microglia:
      "Microglia are immune-related cells of the central nervous system involved in surveillance, immune responses, debris clearance, and synaptic remodeling.",

    ependymal_cells:
      "Ependymal cells line parts of the ventricular system and are associated with cerebrospinal-fluid-related functions.",

    satellite_cells:
      "Satellite glial cells support neurons within peripheral ganglia.",
  },

  // ============================================================
  // 6. ELECTRICAL SIGNALING
  // ============================================================

  electrical_signaling: {
    membrane_potential:
      "The membrane potential is the electrical voltage difference across a cell membrane.",

    resting_membrane_potential:
      "Many neurons maintain a negative resting membrane potential relative to the extracellular environment.",

    ion_gradients:
      "Differences in concentrations of ions such as sodium, potassium, chloride, and calcium across the membrane contribute to electrical signaling.",

    sodium:
      "Sodium ions play a major role in depolarization during action potentials.",

    potassium:
      "Potassium ions contribute strongly to resting membrane potential and repolarization.",

    chloride:
      "Chloride gradients can influence inhibitory or excitatory effects of neurotransmitter receptors.",

    calcium:
      "Calcium ions have important roles in neurotransmitter release, intracellular signaling, gene regulation, and cellular plasticity.",

    depolarization:
      "A reduction in the negativity of membrane potential.",

    hyperpolarization:
      "A change in membrane potential toward a more negative value.",

    repolarization:
      "The process by which membrane potential returns toward its resting state after depolarization.",

    action_potential:
      "A rapid, transient electrical event that propagates along an excitable membrane.",

    threshold:
      "The membrane-potential condition at which voltage-dependent processes trigger an action potential.",

    refractory_period:
      "A period following an action potential during which another action potential is difficult or impossible to initiate.",

    absolute_refractory_period:
      "A period during which another action potential cannot normally be generated.",

    relative_refractory_period:
      "A period during which a stronger-than-usual stimulus may be required to trigger another action potential.",

    saltatory_conduction:
      "Rapid action-potential propagation along myelinated axons through successive nodes of Ranvier.",

    nodes_of_ranvier:
      "Short gaps between myelinated segments where voltage-gated ion channels are concentrated.",
  },

  // ============================================================
  // 7. SYNAPSES
  // ============================================================

  synapses: {
    definition:
      "A synapse is a specialized site where a neuron communicates with another neuron or target cell.",

    chemical_synapse:
      "A chemical synapse communicates using neurotransmitter release and receptor activation.",

    electrical_synapse:
      "An electrical synapse directly couples cells through gap junctions, allowing ionic currents to pass between cells.",

    presynaptic_terminal:
      "The signaling side of a chemical synapse that releases neurotransmitter.",

    postsynaptic_membrane:
      "The receiving membrane containing receptors and associated signaling machinery.",

    synaptic_cleft:
      "The narrow extracellular space separating cells at a chemical synapse.",

    synaptic_vesicles:
      "Membrane-bound structures containing neurotransmitters for regulated release.",

    exocytosis:
      "The process by which synaptic vesicles fuse with the presynaptic membrane and release neurotransmitter.",

    receptor:
      "A protein that recognizes a signaling molecule and changes cellular activity in response.",

    reuptake:
      "Removal of neurotransmitter from the synaptic space by transporters.",

    enzymatic_degradation:
      "Breakdown of neurotransmitters by enzymes.",

    diffusion:
      "Movement of neurotransmitter molecules away from the synaptic site through extracellular space.",
  },

  // ============================================================
  // 8. NEUROTRANSMITTERS
  // ============================================================

  neurotransmitters: {
    definition:
      "Neurotransmitters are signaling molecules released by neurons that influence other cells through receptors.",

    glutamate:
      "The major excitatory neurotransmitter in much of the mammalian central nervous system and an important participant in learning and synaptic plasticity.",

    GABA:
      "The major inhibitory neurotransmitter in the mature mammalian central nervous system.",

    glycine:
      "An important inhibitory neurotransmitter, especially in spinal cord and brainstem circuits.",

    acetylcholine:
      "A neurotransmitter involved in neuromuscular transmission, autonomic signaling, attention, learning, memory, and other functions.",

    dopamine:
      "A neuromodulator involved in movement, reward-related processing, motivation, learning, and several cognitive functions.",

    serotonin:
      "A neuromodulatory transmitter involved in mood regulation, sleep, appetite, sensory processing, and many other functions.",

    norepinephrine:
      "A neuromodulator involved in arousal, attention, stress responses, and autonomic regulation.",

    epinephrine:
      "A catecholamine hormone and signaling molecule associated strongly with sympathetic responses and physiological arousal.",

    histamine:
      "A neurotransmitter and neuromodulator involved in wakefulness, arousal, appetite, and other processes.",

    endorphins:
      "Endogenous opioid peptides involved in pain modulation and other physiological processes.",

    enkephalins:
      "Endogenous opioid peptides involved in pain regulation and neural signaling.",

    endocannabinoids:
      "Lipid-derived signaling molecules involved in synaptic modulation, appetite, stress, pain, memory, and other processes.",

    substance_P:
      "A neuropeptide involved in nociceptive signaling and other physiological processes.",
  },

  // ============================================================
  // 9. RECEPTOR TYPES
  // ============================================================

  receptor_types: {
    ionotropic:
      "Ionotropic receptors are ligand-gated ion channels that produce relatively rapid changes in membrane conductance.",

    metabotropic:
      "Metabotropic receptors influence cellular signaling through G proteins and intracellular pathways.",

    GPCR:
      "G-protein-coupled receptors regulate intracellular signaling through G proteins and downstream effectors.",

    NMDA:
      "NMDA receptors are glutamate-sensitive ionotropic receptors important for synaptic plasticity and calcium-dependent signaling.",

    AMPA:
      "AMPA receptors mediate much of the fast excitatory transmission produced by glutamate.",

    GABA_A:
      "GABA-A receptors are ligand-gated chloride channels that usually mediate fast inhibition in mature neurons.",

    GABA_B:
      "GABA-B receptors are metabotropic receptors that produce slower inhibitory effects.",

    nicotinic_acetylcholine:
      "Nicotinic acetylcholine receptors are ligand-gated ion channels.",

    muscarinic_acetylcholine:
      "Muscarinic acetylcholine receptors are metabotropic receptors.",

    dopamine_receptors:
      "Dopamine receptors are divided into major D1-like and D2-like families with different signaling properties.",

    serotonin_receptors:
      "Serotonin acts through multiple receptor families with diverse cellular effects.",
  },

  // ============================================================
  // 10. BRAIN ANATOMY
  // ============================================================

  brain_anatomy: {
    cerebral_cortex:
      "The cerebral cortex is the outer layer of the cerebral hemispheres and supports numerous sensory, motor, cognitive, and associative functions.",

    cerebral_hemispheres:
      "The cerebrum is divided into left and right hemispheres connected by major commissural pathways.",

    corpus_callosum:
      "The corpus callosum is a large bundle of axons connecting corresponding regions of the two cerebral hemispheres.",

    frontal_lobe:
      "The frontal lobe participates in voluntary movement, planning, decision-making, executive functions, language, and social behavior.",

    parietal_lobe:
      "The parietal lobe processes somatosensory information and contributes to spatial representation, attention, and multisensory integration.",

    temporal_lobe:
      "The temporal lobe contains auditory-processing regions and contributes to memory, language, object recognition, and emotional processing.",

    occipital_lobe:
      "The occipital lobe contains major visual-processing areas.",

    insula:
      "The insular cortex participates in interoception, taste, pain processing, emotion, and integration of bodily and external information.",

    thalamus:
      "The thalamus is a major subcortical relay and integration structure involved in sensory processing, motor circuits, attention, and consciousness.",

    hypothalamus:
      "The hypothalamus regulates homeostasis, endocrine function, autonomic processes, feeding, thirst, temperature, circadian rhythms, and motivated behaviors.",

    hippocampus:
      "The hippocampal formation is critically involved in episodic memory formation, spatial navigation, and contextual learning.",

    amygdala:
      "The amygdala participates in emotional processing, threat learning, salience, and memory modulation.",

    basal_ganglia:
      "The basal ganglia are interconnected subcortical structures involved in movement selection, habit learning, action selection, and reward-related processes.",

    striatum:
      "The striatum is a major basal-ganglia structure receiving substantial cortical input.",

    caudate:
      "The caudate nucleus is part of the striatum and participates in motor and cognitive circuits.",

    putamen:
      "The putamen is part of the striatum and is strongly involved in motor-related circuits.",

    globus_pallidus:
      "The globus pallidus contributes to basal-ganglia output and movement regulation.",

    substantia_nigra:
      "The substantia nigra contains important dopaminergic neurons involved in movement and reward-related circuits.",

    subthalamic_nucleus:
      "The subthalamic nucleus participates in basal-ganglia circuits controlling movement.",

    cerebellum:
      "The cerebellum coordinates movement, balance, timing, motor learning, and contributes to some cognitive functions.",

    brainstem:
      "The brainstem includes the midbrain, pons, and medulla and contains pathways and nuclei involved in arousal, cranial-nerve functions, autonomic regulation, and movement.",

    midbrain:
      "The midbrain participates in motor control, sensory processing, arousal, and reward-related circuits.",

    pons:
      "The pons participates in communication between brain regions and contributes to respiration, sleep, arousal, and cranial-nerve functions.",

    medulla:
      "The medulla contains circuits important for breathing, cardiovascular regulation, swallowing, vomiting, and other vital functions.",

    reticular_formation:
      "A distributed brainstem network involved in arousal, attention, sleep-wake regulation, and autonomic functions.",
  },

  // ============================================================
  // 11. MENINGES AND CSF
  // ============================================================

  protective_structures: {
    skull:
      "The skull provides physical protection for the brain.",

    vertebral_column:
      "The vertebral column protects the spinal cord.",

    meninges:
      "The meninges are protective connective-tissue layers surrounding the central nervous system.",

    dura_mater:
      "The outermost tough meningeal layer.",

    arachnoid_mater:
      "The middle meningeal layer associated with the subarachnoid space.",

    pia_mater:
      "The delicate innermost meningeal layer closely associated with the surface of the brain and spinal cord.",

    cerebrospinal_fluid:
      "Cerebrospinal fluid cushions the central nervous system and contributes to chemical and physical homeostasis.",

    ventricles:
      "The ventricular system consists of interconnected cavities containing cerebrospinal fluid.",

    choroid_plexus:
      "Specialized tissue responsible for much of cerebrospinal-fluid production.",
  },

  // ============================================================
  // 12. BLOOD-BRAIN BARRIER
  // ============================================================

  blood_brain_barrier: {
    definition:
      "The blood-brain barrier is a selective physiological interface that restricts movement of many substances from blood into brain tissue.",

    components: [
      "brain endothelial cells",
      "tight junctions",
      "basement membrane",
      "pericytes",
      "astrocytic processes",
    ],

    functions: [
      "chemical stability",
      "protection from toxins",
      "controlled transport",
      "maintenance of neural environment",
    ],

    blood_csf_barrier:
      "A related barrier regulates exchange between blood and cerebrospinal fluid.",
  },

  // ============================================================
  // 13. SPINAL CORD
  // ============================================================

  spinal_cord: {
    definition:
      "The spinal cord is a central nervous system structure that connects the brain with much of the peripheral nervous system.",

    regions: [
      "cervical",
      "thoracic",
      "lumbar",
      "sacral",
      "coccygeal",
    ],

    gray_matter:
      "Central regions containing many neuronal cell bodies, dendrites, synapses, and local circuits.",

    white_matter:
      "Regions containing many myelinated axons organized into pathways.",

    dorsal_horn:
      "A region involved strongly in processing sensory information.",

    ventral_horn:
      "A region containing motor neurons involved in skeletal-muscle control.",

    dorsal_root:
      "Carries sensory information toward the spinal cord.",

    ventral_root:
      "Carries motor output away from the spinal cord.",

    reflex_arc:
      "A neural pathway allowing relatively rapid responses to stimuli, often involving sensory neurons, interneurons, and motor neurons.",
  },

  // ============================================================
  // 14. CRANIAL NERVES
  // ============================================================

  cranial_nerves: [
    {
      number: "I",
      name: "Olfactory",
      function: "smell",
    },
    {
      number: "II",
      name: "Optic",
      function: "vision",
    },
    {
      number: "III",
      name: "Oculomotor",
      function: "eye movement and pupil-related functions",
    },
    {
      number: "IV",
      name: "Trochlear",
      function: "eye movement",
    },
    {
      number: "V",
      name: "Trigeminal",
      function: "facial sensation and mastication",
    },
    {
      number: "VI",
      name: "Abducens",
      function: "lateral eye movement",
    },
    {
      number: "VII",
      name: "Facial",
      function: "facial expression, taste, and autonomic functions",
    },
    {
      number: "VIII",
      name: "Vestibulocochlear",
      function: "hearing and balance",
    },
    {
      number: "IX",
      name: "Glossopharyngeal",
      function: "taste, swallowing, and sensory/autonomic functions",
    },
    {
      number: "X",
      name: "Vagus",
      function: "major parasympathetic and visceral sensory functions",
    },
    {
      number: "XI",
      name: "Accessory",
      function: "neck and shoulder movement",
    },
    {
      number: "XII",
      name: "Hypoglossal",
      function: "tongue movement",
    },
  ],

  // ============================================================
  // 15. SENSORY NEUROSCIENCE
  // ============================================================

  sensory_systems: {
    definition:
      "Sensory neuroscience studies how organisms detect environmental and internal signals and transform them into neural representations.",

    modalities: [
      "vision",
      "hearing",
      "touch",
      "temperature",
      "pain",
      "taste",
      "smell",
      "balance",
      "proprioception",
      "interoception",
    ],

    sensory_transduction:
      "Sensory transduction is the conversion of physical or chemical stimuli into neural signals.",

    receptors: {
      mechanoreceptors:
        "Detect mechanical forces such as pressure, vibration, stretch, and movement.",

      thermoreceptors:
        "Detect temperature-related stimuli.",

      nociceptors:
        "Detect potentially tissue-damaging or threatening stimuli.",

      photoreceptors:
        "Detect light.",

      chemoreceptors:
        "Detect chemical stimuli.",
    },
  },

  // ============================================================
  // 16. VISION
  // ============================================================

  vision: {
    retina:
      "The retina is neural tissue at the back of the eye that converts light into neural signals.",

    rods:
      "Photoreceptors specialized for low-light sensitivity and generally not color-specific.",

    cones:
      "Photoreceptors supporting high-acuity and color vision under brighter conditions.",

    fovea:
      "A specialized retinal region supporting high visual acuity.",

    optic_nerve:
      "Carries visual information from the retina toward the brain.",

    optic_chiasm:
      "A structure where some optic nerve fibers cross to the opposite side.",

    lateral_geniculate_nucleus:
      "A thalamic relay structure involved in visual processing.",

    primary_visual_cortex:
      "A cortical region receiving major input from the visual pathway and performing early visual processing.",

    visual_streams: {
      ventral_stream:
        "Often described as important for object identification and visual recognition.",

      dorsal_stream:
        "Often described as important for spatial processing and visually guided action.",
    },

    visual_features: [
      "brightness",
      "contrast",
      "color",
      "orientation",
      "motion",
      "depth",
      "shape",
      "spatial location",
    ],
  },

  // ============================================================
  // 17. HEARING
  // ============================================================

  auditory_system: {
    outer_ear:
      "Collects and directs sound toward the eardrum.",

    middle_ear:
      "Uses the tympanic membrane and ossicles to transmit mechanical vibrations.",

    inner_ear:
      "Contains the cochlea and vestibular organs.",

    cochlea:
      "A spiral inner-ear structure containing sensory mechanisms for hearing.",

    hair_cells:
      "Mechanosensory cells that convert mechanical vibration into electrical signals.",

    auditory_nerve:
      "Carries auditory information toward the brain.",

    auditory_cortex:
      "Cortical regions involved in processing sound.",

    auditory_features: [
      "frequency",
      "intensity",
      "timing",
      "location",
      "speech features",
      "sound identity",
    ],
  },

  // ============================================================
  // 18. SOMATOSENSATION
  // ============================================================

  somatosensory_system: {
    touch:
      "The nervous system detects mechanical interactions with the body through specialized receptors.",

    pressure:
      "Pressure is detected through mechanosensory systems.",

    vibration:
      "Rapid mechanical oscillations can be detected by specialized mechanoreceptors.",

    temperature:
      "Thermosensory systems detect changes in temperature.",

    pain:
      "Nociceptive systems detect potentially harmful stimuli and contribute to protective responses.",

    proprioception:
      "Proprioception provides information about body position and movement.",

    body_map:
      "Primary somatosensory cortex contains an organized representation of different body regions.",
  },

  // ============================================================
  // 19. TASTE AND SMELL
  // ============================================================

  chemosensation: {
    taste:
      "Taste is a chemical sensory system detecting dissolved substances in the mouth.",

    basic_taste_categories: [
      "sweet",
      "salty",
      "sour",
      "bitter",
      "umami",
    ],

    olfaction:
      "Olfaction is the sensory system responsible for detecting airborne chemical molecules.",

    olfactory_receptors:
      "Specialized receptor proteins in olfactory sensory neurons detect odor-related molecules.",

    olfactory_bulb:
      "A forebrain structure receiving early neural input from olfactory sensory neurons.",

    olfactory_cortex:
      "A collection of cortical regions involved in processing odor information.",

    smell_memory:
      "Olfactory information can strongly interact with memory and emotion.",
  },

  // ============================================================
  // 20. MOTOR SYSTEM
  // ============================================================

  motor_system: {
    definition:
      "The motor system generates and controls movements through coordinated activity across cortical, subcortical, brainstem, spinal, and peripheral systems.",

    primary_motor_cortex:
      "A major cortical region involved in voluntary movement control.",

    premotor_cortex:
      "Contributes to movement planning and selection, particularly in relation to sensory and contextual information.",

    supplementary_motor_area:
      "Contributes to internally generated movement planning and sequencing.",

    corticospinal_tract:
      "A major descending pathway carrying cortical motor commands toward spinal motor circuits.",

    upper_motor_neuron:
      "A neuron in the central nervous system that influences lower motor neurons.",

    lower_motor_neuron:
      "A neuron that directly controls skeletal muscle fibers.",

    motor_unit:
      "A motor neuron and the muscle fibers it innervates.",

    neuromuscular_junction:
      "A specialized synapse between a motor neuron and skeletal muscle fiber.",
  },

  // ============================================================
  // 21. CEREBELLUM
  // ============================================================

  cerebellar_neuroscience: {
    functions: [
      "coordination",
      "balance",
      "timing",
      "motor learning",
      "error correction",
      "movement precision",
      "posture",
    ],

    cerebellar_cortex:
      "The cerebellar cortex contains organized layers and specialized neurons involved in cerebellar computation.",

    purkinje_cells:
      "Large inhibitory neurons forming a major output pathway from cerebellar cortex.",

    deep_cerebellar_nuclei:
      "Major output structures receiving processed information from cerebellar cortex.",

    motor_learning:
      "The cerebellum contributes to adaptation of movements through experience-dependent changes in neural circuits.",
  },

  // ============================================================
  // 22. BASAL GANGLIA
  // ============================================================

  basal_ganglia_system: {
    structures: [
      "striatum",
      "globus pallidus",
      "subthalamic nucleus",
      "substantia nigra",
    ],

    functions: [
      "movement selection",
      "action selection",
      "habit formation",
      "reward processing",
      "procedural learning",
      "motor vigor",
    ],

    direct_pathway:
      "One major basal-ganglia circuit facilitates selected actions.",

    indirect_pathway:
      "Another circuit can suppress competing actions.",

    dopamine_role:
      "Dopaminergic signals from the midbrain influence basal-ganglia circuits and learning about actions and outcomes.",
  },

  // ============================================================
  // 23. AUTONOMIC NERVOUS SYSTEM
  // ============================================================

  autonomic_neuroscience: {
    sympathetic_functions: [
      "increased cardiac activity",
      "pupil dilation",
      "reduced digestive activity during acute stress",
      "redistribution of blood flow",
      "mobilization of energy",
    ],

    parasympathetic_functions: [
      "digestive activity",
      "restoration",
      "energy conservation",
      "cardiac regulation",
    ],

    enteric_functions: [
      "intestinal motility",
      "secretion",
      "local blood-flow regulation",
      "coordination of digestive activity",
    ],
  },

  // ============================================================
  // 24. HOMEOSTASIS
  // ============================================================

  homeostasis: {
    definition:
      "Homeostasis is the regulation of internal physiological conditions within functional ranges.",

    hypothalamic_regulation: [
      "body temperature",
      "fluid balance",
      "food intake",
      "energy balance",
      "circadian timing",
      "endocrine regulation",
      "stress responses",
    ],

    thirst:
      "Neural systems detect changes in fluid balance and contribute to thirst and drinking behavior.",

    hunger:
      "Brain circuits integrate metabolic, hormonal, sensory, and environmental information to regulate feeding.",

    thermoregulation:
      "The nervous system coordinates physiological and behavioral responses to changes in body temperature.",
  },

  // ============================================================
  // 25. MEMORY
  // ============================================================

  memory: {
    definition:
      "Memory is the capacity of nervous systems to encode, retain, modify, and retrieve information.",

    sensory_memory:
      "Brief retention of sensory information.",

    working_memory:
      "A limited-capacity system for temporarily maintaining and manipulating information.",

    short_term_memory:
      "Temporary retention of information over relatively short periods.",

    long_term_memory:
      "Information retained over longer periods.",

    episodic_memory:
      "Memory for personally experienced events and their contextual details.",

    semantic_memory:
      "Memory for facts, concepts, and general knowledge.",

    procedural_memory:
      "Memory supporting skills and learned procedures.",

    implicit_memory:
      "Memory effects that influence behavior without requiring conscious recollection.",

    explicit_memory:
      "Memory that can generally be consciously recalled.",

    hippocampus_role:
      "The hippocampal formation is especially important for forming and organizing many forms of episodic and spatial memory.",

    consolidation:
      "A set of processes through which newly encoded memories become more stable.",

    reconsolidation:
      "A process in which a retrieved memory can become temporarily modifiable before being stored again.",

    forgetting:
      "Loss or reduced accessibility of previously encoded information can result from interference, decay-like processes, retrieval competition, or other mechanisms.",
  },

  // ============================================================
  // 26. LEARNING
  // ============================================================

  learning: {
    definition:
      "Learning involves relatively persistent changes in knowledge, behavior, or neural function resulting from experience.",

    classical_conditioning:
      "Learning in which an initially neutral stimulus becomes associated with another stimulus through repeated pairing.",

    operant_conditioning:
      "Learning in which behavior is influenced by its consequences.",

    observational_learning:
      "Learning that occurs through observing other individuals or models.",

    reinforcement:
      "A consequence that increases the probability of a behavior.",

    punishment:
      "A consequence that decreases the probability of a behavior.",

    reward_prediction_error:
      "A difference between expected and received outcomes that can influence learning.",

    dopamine_and_learning:
      "Dopaminergic systems contribute to reinforcement learning and the updating of action-outcome expectations.",
  },

  // ============================================================
  // 27. SYNAPTIC PLASTICITY
  // ============================================================

  neuroplasticity: {
    definition:
      "Neuroplasticity is the capacity of neural systems to change their structure, connectivity, function, or responsiveness in response to development, experience, learning, or injury.",

    synaptic_plasticity:
      "Activity-dependent changes in the strength or properties of synaptic connections.",

    LTP:
      "Long-term potentiation is a persistent strengthening of synaptic transmission following particular patterns of activity.",

    LTD:
      "Long-term depression is a persistent weakening of synaptic transmission following particular patterns of activity.",

    hebbian_learning:
      "A family of ideas in which correlated activity between neurons can strengthen their functional connection.",

    homeostatic_plasticity:
      "Mechanisms that stabilize overall neural activity while allowing local synaptic changes.",

    structural_plasticity:
      "Changes in neural structure, such as dendritic spines, axonal connections, or synapse number.",

    experience_dependent_plasticity:
      "Experience can modify neural circuits throughout life, although the nature and extent of plasticity vary by brain region and developmental stage.",
  },

  // ============================================================
  // 28. COGNITION
  // ============================================================

  cognition: {
    definition:
      "Cognition includes mental processes involved in acquiring, representing, transforming, storing, and using information.",

    attention:
      "Attention involves selective allocation of processing resources toward particular information or tasks.",

    perception:
      "Perception is the organization and interpretation of sensory information.",

    reasoning:
      "Reasoning involves using information to derive conclusions or guide decisions.",

    problem_solving:
      "Problem solving involves constructing and evaluating strategies to achieve goals.",

    decision_making:
      "Decision-making involves selecting among alternatives based on goals, information, preferences, and expected consequences.",

    executive_functions: [
      "planning",
      "inhibition",
      "cognitive flexibility",
      "working memory",
      "goal management",
      "monitoring",
    ],

    cognitive_control:
      "Cognitive control allows behavior and thought to be adjusted according to goals and context.",
  },

  // ============================================================
  // 29. LANGUAGE
  // ============================================================

  language_neuroscience: {
    definition:
      "Language neuroscience studies neural mechanisms supporting speech, comprehension, reading, writing, and linguistic representation.",

    speech_production:
      "Speech production involves coordinated activity across language, motor, auditory, and respiratory systems.",

    language_comprehension:
      "Language comprehension involves distributed temporal, frontal, parietal, and subcortical networks.",

    broca_region:
      "A frontal cortical region historically associated with speech production and language-related processing.",

    wernicke_region:
      "A posterior temporal region historically associated with language comprehension.",

    arcuate_fasciculus:
      "A white-matter pathway associated with communication between frontal and temporal language-related regions.",

    aphasia:
      "A language impairment resulting from damage to relevant neural systems.",
  },

  // ============================================================
  // 30. EMOTION
  // ============================================================

  emotion: {
    definition:
      "Emotion involves coordinated physiological, behavioral, cognitive, and subjective responses associated with significant events or states.",

    amygdala:
      "The amygdala contributes to emotional learning, threat processing, salience, and modulation of memory.",

    hypothalamus:
      "The hypothalamus links motivational and emotional states with autonomic and endocrine responses.",

    prefrontal_cortex:
      "Prefrontal systems contribute to evaluation, regulation, decision-making, and context-sensitive control of emotional responses.",

    insula:
      "The insula contributes to awareness of internal bodily states and affective processing.",

    stress_response:
      "Stress engages interacting neural, endocrine, and autonomic systems.",
  },

  // ============================================================
  // 31. MOTIVATION AND REWARD
  // ============================================================

  reward_system: {
    definition:
      "Reward-related neural systems help organisms learn which actions, stimuli, and situations are valuable or beneficial.",

    mesolimbic_pathway:
      "A dopaminergic pathway involving midbrain regions and limbic targets that contributes to reward-related processing and motivation.",

    ventral_tegmental_area:
      "A midbrain region containing many dopamine-producing neurons involved in reward, motivation, learning, and other processes.",

    nucleus_accumbens:
      "A ventral-striatal structure involved in reward-related processing, motivation, and reinforcement learning.",

    orbitofrontal_cortex:
      "A prefrontal region involved in evaluating rewards, punishments, and changing outcome values.",

    motivation:
      "Motivation involves neural and physiological processes that influence goal-directed behavior.",
  },

  // ============================================================
  // 32. SLEEP
  // ============================================================

  sleep_neuroscience: {
    definition:
      "Sleep is a recurring biological state characterized by altered consciousness, reduced responsiveness, and coordinated physiological changes.",

    sleep_stages: [
      "N1",
      "N2",
      "N3",
      "REM",
    ],

    N1:
      "A light transitional stage between wakefulness and sleep.",

    N2:
      "A sleep stage characterized by distinctive patterns such as sleep spindles and K-complexes.",

    N3:
      "Deep non-REM sleep associated with slow-wave activity.",

    REM:
      "A sleep state characterized by rapid eye movements, distinctive brain activity, muscle atonia, and frequent vivid dreaming.",

    circadian_rhythm:
      "A roughly 24-hour biological timing system regulating sleep-wake cycles and many physiological processes.",

    suprachiasmatic_nucleus:
      "A hypothalamic structure that functions as a major circadian timing center.",

    melatonin:
      "A hormone produced primarily by the pineal gland that provides a timing signal related to the light-dark cycle.",

    sleep_functions: [
      "memory processing",
      "metabolic regulation",
      "synaptic regulation",
      "immune interactions",
      "emotional processing",
      "physiological restoration",
    ],
  },

  // ============================================================
  // 33. CONSCIOUSNESS
  // ============================================================

  consciousness: {
    definition:
      "Consciousness refers broadly to subjective experience and awareness, although scientific definitions vary depending on theoretical framework.",

    arousal:
      "A basic dimension of consciousness involving wakefulness and responsiveness.",

    awareness:
      "Awareness involves the availability of information for conscious experience or report.",

    brainstem_role:
      "Brainstem and associated arousal systems are important for maintaining wakefulness.",

    thalamocortical_systems:
      "Interactions between thalamus and cortex are important in many models of conscious processing.",

    altered_states: [
      "sleep",
      "anesthesia",
      "coma",
      "vegetative or unresponsive wakefulness",
      "minimally conscious states",
    ],
  },

  // ============================================================
  // 34. DEVELOPMENTAL NEUROSCIENCE
  // ============================================================

  development: {
    neurogenesis:
      "The generation of new neurons.",

    neuronal_migration:
      "Movement of developing neurons to their appropriate locations.",

    differentiation:
      "Process through which developing cells acquire specialized properties.",

    axon_guidance:
      "Processes directing growing axons toward appropriate targets.",

    synaptogenesis:
      "Formation of synaptic connections.",

    pruning:
      "Activity- and development-related elimination or reduction of some neural connections.",

    myelination:
      "Formation of myelin around axons, which continues across development and varies among brain regions.",

    critical_period:
      "A developmental period during which certain experiences can have particularly strong effects on neural development.",

    sensitive_period:
      "A developmental period during which a system may be especially responsive to particular experiences, though effects can remain possible outside that period.",
  },

  // ============================================================
  // 35. AGING
  // ============================================================

  aging: {
    definition:
      "Neural aging involves changes in brain structure, connectivity, physiology, and cognitive function across the lifespan.",

    common_changes: [
      "changes in processing speed",
      "changes in memory",
      "changes in brain volume",
      "altered connectivity",
      "vascular changes",
      "changes in neurotransmitter systems",
    ],

    cognitive_reserve:
      "The capacity to maintain cognitive performance despite age-related or pathological brain changes, influenced by factors such as education and lifelong cognitive activity.",

    neuroplasticity_in_aging:
      "Plasticity remains possible throughout adulthood, although some forms of plasticity may change with age.",
  },

  // ============================================================
  // 36. NEUROENDOCRINOLOGY
  // ============================================================

  neuroendocrinology: {
    definition:
      "Neuroendocrinology studies interactions between neural systems and hormones.",

    hypothalamus:
      "The hypothalamus coordinates neural and endocrine regulation.",

    pituitary_gland:
      "A major endocrine gland whose activity is regulated by hypothalamic signals.",

    HPA_axis:
      "The hypothalamic-pituitary-adrenal axis coordinates many physiological responses to stress.",

    cortisol:
      "A glucocorticoid hormone involved in metabolism, immune regulation, and stress responses.",

    oxytocin:
      "A peptide hormone and neuromodulator involved in reproductive, social, and physiological processes.",

    vasopressin:
      "A hormone and neuromodulatory peptide involved in fluid balance and various behavioral and physiological processes.",
  },

  // ============================================================
  // 37. NEUROIMMUNOLOGY
  // ============================================================

  neuroimmunology: {
    definition:
      "Neuroimmunology studies interactions between the nervous and immune systems.",

    microglia:
      "Resident immune-related cells of the central nervous system.",

    neuroinflammation:
      "Inflammatory responses within nervous tissue that can be protective, damaging, or context-dependent.",

    blood_brain_barrier:
      "A selective barrier influencing interactions between circulating immune factors and brain tissue.",

    cytokines:
      "Signaling proteins that can influence immune and neural processes.",
  },

  // ============================================================
  // 38. NEUROGENETICS
  // ============================================================

  neurogenetics: {
    definition:
      "Neurogenetics studies how genes influence neural development, structure, function, and disease.",

    gene_expression:
      "The process by which information encoded in genes contributes to production of functional molecules.",

    transcription:
      "The synthesis of RNA from DNA templates.",

    translation:
      "The synthesis of proteins using information carried by messenger RNA.",

    epigenetics:
      "Regulation of gene activity through mechanisms that can occur without changing the underlying DNA sequence.",

    genetic_risk:
      "Some neurological and psychiatric traits involve genetic susceptibility interacting with environmental and developmental factors.",
  },

  // ============================================================
  // 39. NEUROPHARMACOLOGY
  // ============================================================

  neuropharmacology: {
    definition:
      "Neuropharmacology studies how drugs and other chemicals alter nervous-system function.",

    agonist:
      "A substance that activates a receptor or produces an effect similar to an endogenous signaling molecule.",

    antagonist:
      "A substance that blocks or reduces receptor activation.",

    partial_agonist:
      "A substance that activates a receptor but produces less than the maximal effect achievable by a full agonist.",

    reuptake_inhibitor:
      "A substance that reduces transporter-mediated removal of neurotransmitter from extracellular spaces.",

    tolerance:
      "A reduced response to a substance following repeated exposure.",

    withdrawal:
      "Physical or psychological effects that can occur when a substance to which the nervous system has adapted is reduced or stopped.",

    receptor_adaptation:
      "Changes in receptor number, sensitivity, or signaling can occur after prolonged exposure to drugs or altered neurotransmitter levels.",
  },

  // ============================================================
  // 40. PAIN NEUROSCIENCE
  // ============================================================

  pain: {
    definition:
      "Pain is a complex sensory and emotional experience associated with actual or potential tissue damage.",

    nociception:
      "Neural processing of potentially tissue-damaging stimuli.",

    nociceptors:
      "Sensory receptors specialized for detecting potentially damaging stimuli.",

    acute_pain:
      "Pain occurring over a relatively short period, often associated with injury or inflammation.",

    chronic_pain:
      "Pain that persists or recurs over an extended period and can involve changes in neural processing.",

    spinal_modulation:
      "Spinal circuits can increase or decrease transmission of nociceptive information.",

    descending_modulation:
      "Brain systems can alter pain processing through descending pathways.",

    placebo_effect:
      "Changes in symptoms or physiological responses associated with expectations and context, including in pain.",
  },

  // ============================================================
  // 41. NEUROLOGICAL DISORDERS
  // ============================================================

  neurological_disorders: {
    definition:
      "Neurological disorders involve dysfunction of the nervous system and can affect movement, sensation, cognition, communication, consciousness, or autonomic functions.",

    stroke:
      "A neurological injury caused by interruption of blood flow to brain tissue or bleeding within or around the brain.",

    epilepsy:
      "A neurological disorder characterized by a tendency toward recurrent unprovoked seizures.",

    parkinsons_disease:
      "A neurodegenerative disorder involving motor and non-motor symptoms and associated with dysfunction of basal-ganglia circuits and dopaminergic systems.",

    alzheimers_disease:
      "A neurodegenerative disorder characterized by progressive cognitive impairment and pathological changes involving proteins such as amyloid-beta and tau.",

    multiple_sclerosis:
      "An immune-mediated disease involving damage to central nervous system myelin and other neural structures.",

    amyotrophic_lateral_sclerosis:
      "A neurodegenerative disease affecting motor neurons and leading to progressive motor impairment.",

    huntingtons_disease:
      "A genetic neurodegenerative disorder associated with abnormal movements, cognitive changes, and psychiatric symptoms.",

    migraine:
      "A neurological disorder characterized by recurrent attacks that can involve headache and other sensory or neurological symptoms.",

    traumatic_brain_injury:
      "Brain dysfunction or structural injury caused by an external mechanical force.",

    spinal_cord_injury:
      "Damage to the spinal cord that can disrupt sensory, motor, and autonomic functions.",
  },

  // ============================================================
  // 42. NEUROPSYCHIATRY
  // ============================================================

  psychiatric_neuroscience: {
    depression:
      "A psychiatric condition involving persistent changes in mood, motivation, cognition, behavior, and physiological functioning.",

    anxiety_disorders:
      "Conditions involving excessive or persistent anxiety and fear-related responses.",

    schizophrenia:
      "A psychiatric disorder involving disturbances in perception, thought, behavior, and cognition.",

    bipolar_disorder:
      "A psychiatric disorder characterized by episodes involving significant changes in mood, energy, activity, and cognition.",

    obsessive_compulsive_disorder:
      "A condition involving intrusive thoughts and/or repetitive behaviors or mental acts.",

    PTSD:
      "A disorder that can develop after exposure to traumatic events and involves persistent trauma-related symptoms.",

    neurobiological_basis:
      "Psychiatric conditions generally involve complex interactions among genetics, development, neural circuits, physiology, learning, environment, and experience.",
  },

  // ============================================================
  // 43. BRAIN IMAGING
  // ============================================================

  neuroscience_methods: {
    structural_MRI:
      "Magnetic resonance imaging used to visualize brain anatomy with high spatial detail.",

    functional_MRI:
      "A method that estimates changes associated with brain activity, commonly through blood-oxygen-level-dependent signals.",

    CT:
      "Computed tomography uses X-rays to create cross-sectional images of the brain and skull.",

    PET:
      "Positron emission tomography uses radioactive tracers to measure selected physiological or molecular processes.",

    EEG:
      "Electroencephalography records electrical activity from electrodes placed on the scalp.",

    MEG:
      "Magnetoencephalography measures magnetic fields associated with neural electrical activity.",

    DTI:
      "Diffusion tensor imaging uses water diffusion measurements to estimate properties of white-matter pathways.",

    ultrasound:
      "Ultrasound uses sound waves and has specialized applications in neuroscience and neurovascular research.",
  },

  // ============================================================
  // 44. ELECTROPHYSIOLOGY
  // ============================================================

  electrophysiology: {
    single_unit_recording:
      "Records electrical activity from individual neurons.",

    multi_unit_recording:
      "Records activity from multiple nearby neurons.",

    intracellular_recording:
      "Measures electrical properties from within a cell.",

    extracellular_recording:
      "Measures electrical activity from outside neurons.",

    patch_clamp:
      "An electrophysiological technique used to measure ion-channel and cellular electrical properties.",

    field_potential:
      "Measures aggregate electrical activity from populations of neurons.",

    EEG:
      "Measures electrical potential differences at the scalp produced by coordinated neural activity.",
  },

  // ============================================================
  // 45. LESION STUDIES
  // ============================================================

  lesion_neuroscience: {
    definition:
      "Lesion studies investigate relationships between brain regions and behavior by examining effects of damage.",

    natural_lesion:
      "Damage resulting from injury, stroke, disease, or other naturally occurring causes.",

    experimental_lesion:
      "Controlled neural disruption used in animal research under ethical and scientific constraints.",

    double_dissociation:
      "A pattern in which two brain functions are selectively impaired by different lesions, providing evidence that the functions depend on partly distinct systems.",
  },

  // ============================================================
  // 46. OPTICAL METHODS
  // ============================================================

  optical_neuroscience: {
    calcium_imaging:
      "Uses calcium-sensitive indicators to infer neural activity from changes in intracellular calcium.",

    fluorescence_imaging:
      "Uses fluorescent signals to visualize cellular structures, molecules, or activity.",

    optogenetics:
      "Uses genetically introduced light-sensitive proteins to control activity of selected cells with light.",

    fiber_photometry:
      "Measures bulk fluorescence signals from neural populations through implanted optical fibers.",

    two_photon_microscopy:
      "A microscopy method that allows imaging of neural structures and activity relatively deep within tissue.",
  },

  // ============================================================
  // 47. COMPUTATIONAL NEUROSCIENCE
  // ============================================================

  computational_neuroscience: {
    definition:
      "Computational neuroscience uses mathematical and computational models to understand neural systems.",

    neuron_models: [
      "integrate-and-fire model",
      "leaky integrate-and-fire model",
      "Hodgkin-Huxley model",
      "conductance-based models",
    ],

    network_models: [
      "recurrent neural networks",
      "attractor networks",
      "spiking neural networks",
      "rate-based models",
    ],

    information_theory:
      "Information theory provides mathematical tools for analyzing information representation and transmission in neural systems.",

    reinforcement_learning:
      "Computational models of reinforcement learning describe how agents update action values based on rewards and prediction errors.",

    neural_decoding:
      "Neural decoding attempts to infer stimuli, movements, decisions, or other variables from neural activity.",

    neural_encoding:
      "Neural encoding investigates how information about stimuli or variables is represented in neural activity.",
  },

  // ============================================================
  // 48. ARTIFICIAL NEURAL NETWORK CONNECTIONS
  // ============================================================

  neuro_ai: {
    biological_neuron:
      "A biological neuron is a living excitable cell with complex biochemical and electrical dynamics.",

    artificial_neuron:
      "An artificial neuron is a mathematical computational unit inspired loosely by aspects of biological neurons.",

    neural_network:
      "An artificial neural network consists of interconnected computational units whose parameters can be adjusted through learning algorithms.",

    deep_learning:
      "Deep learning uses neural networks with multiple computational layers to learn representations from data.",

    important_difference:
      "Artificial neural networks are mathematical models and should not be assumed to reproduce the full complexity of biological nervous systems.",

    spiking_neural_networks:
      "Spiking neural networks model neural computation using discrete spike-like events and temporal dynamics.",
  },

  // ============================================================
  // 49. BRAIN LATERALIZATION
  // ============================================================

  lateralization: {
    definition:
      "Lateralization refers to differences in processing or function between the two cerebral hemispheres.",

    left_hemisphere:
      "The left hemisphere is often dominant for language in many people, but functions are distributed and individual variation exists.",

    right_hemisphere:
      "The right hemisphere contributes strongly to aspects of spatial processing, attention, prosody, and other functions.",

    corpus_callosum:
      "The corpus callosum enables extensive communication between hemispheres.",

    caution:
      "Claims that people are simply 'left-brained' or 'right-brained' personality types are oversimplifications unsupported by modern neuroscience.",
  },

  // ============================================================
  // 50. MEMORY STRUCTURES
  // ============================================================

  memory_structures: {
    hippocampus:
      "Supports formation and organization of many episodic and spatial memories.",

    amygdala:
      "Modulates emotional learning and memory.",

    prefrontal_cortex:
      "Supports working memory, strategic encoding, retrieval, and monitoring.",

    striatum:
      "Supports procedural and habit-related learning.",

    cerebellum:
      "Supports certain forms of motor learning.",

    neocortex:
      "Stores and represents long-term information across distributed cortical networks.",
  },

  // ============================================================
  // 51. ATTENTION
  // ============================================================

  attention: {
    definition:
      "Attention is the selective allocation of processing resources toward particular stimuli, information, or tasks.",

    selective_attention:
      "Selecting particular information while reducing processing of competing information.",

    divided_attention:
      "Attempting to process multiple tasks or information streams simultaneously.",

    sustained_attention:
      "Maintaining attention over an extended period.",

    spatial_attention:
      "Allocating processing toward particular locations in space.",

    executive_attention:
      "Control of attention in situations involving conflict, goals, or task demands.",

    attention_networks:
      "Attention depends on distributed interactions among frontal, parietal, subcortical, and sensory systems.",
  },

  // ============================================================
  // 52. EXECUTIVE FUNCTION
  // ============================================================

  executive_function: {
    planning:
      "Generating and organizing steps toward a future goal.",

    inhibition:
      "Suppressing inappropriate or competing responses.",

    flexibility:
      "Changing strategies or behavior when circumstances change.",

    working_memory:
      "Maintaining and manipulating information during ongoing tasks.",

    monitoring:
      "Evaluating performance, errors, and outcomes.",

    prefrontal_networks:
      "Prefrontal cortical systems interact with parietal, basal-ganglia, limbic, and other networks during executive control.",
  },

  // ============================================================
  // 53. SOCIAL NEUROSCIENCE
  // ============================================================

  social_neuroscience: {
    definition:
      "Social neuroscience examines neural systems involved in understanding and responding to other people.",

    social_cognition: [
      "emotion recognition",
      "mental-state inference",
      "empathy",
      "social decision-making",
      "self-other distinction",
      "social learning",
    ],

    theory_of_mind:
      "The ability to represent that other individuals may possess beliefs, intentions, knowledge, or perspectives different from one's own.",

    empathy:
      "A multidimensional phenomenon involving aspects of emotional responsiveness and understanding of another person's state.",

    social_reward:
      "Social interaction can engage neural systems involved in reward and motivation.",
  },

  // ============================================================
  // 54. SELF AND BODY REPRESENTATION
  // ============================================================

  body_and_self: {
    interoception:
      "Perception and representation of internal bodily states.",

    proprioception:
      "Information about body position and movement.",

    body_schema:
      "A functional representation of body position and movement used for action.",

    body_image:
      "A perceptual and cognitive representation of one's body.",

    self_processing:
      "Self-related processing involves distributed neural systems rather than a single isolated brain region.",
  },

  // ============================================================
  // 55. NEUROPLASTICITY AFTER INJURY
  // ============================================================

  recovery_after_injury: {
    definition:
      "Recovery after nervous-system injury can involve restoration, compensation, reorganization, and adaptation.",

    mechanisms: [
      "synaptic remodeling",
      "axonal sprouting",
      "changes in network activity",
      "recruitment of alternative pathways",
      "motor relearning",
      "sensory adaptation",
    ],

    rehabilitation:
      "Neurorehabilitation uses structured training and therapeutic strategies to improve function after neurological injury.",

    limitation:
      "Plasticity does not guarantee complete recovery, and outcomes depend on injury type, location, severity, timing, and individual factors.",
  },

  // ============================================================
  // 56. NEURODEGENERATION
  // ============================================================

  neurodegeneration: {
    definition:
      "Neurodegeneration refers to progressive dysfunction and loss of neurons or neural structures.",

    mechanisms: [
      "protein misfolding",
      "impaired protein clearance",
      "mitochondrial dysfunction",
      "oxidative stress",
      "excitotoxicity",
      "neuroinflammation",
      "synaptic dysfunction",
      "axonal degeneration",
    ],

    examples: [
      "Alzheimer's disease",
      "Parkinson's disease",
      "Huntington's disease",
      "amyotrophic lateral sclerosis",
    ],
  },

  // ============================================================
  // 57. EXCITOTOXICITY
  // ============================================================

  excitotoxicity: {
    definition:
      "Excitotoxicity refers to neuronal injury caused by excessive excitatory signaling and associated intracellular processes.",

    glutamate:
      "Excessive glutamatergic signaling can contribute to pathological calcium influx and downstream cellular injury.",

    calcium:
      "Excess intracellular calcium can activate enzymes and pathways that damage cellular structures.",

    relevance: [
      "stroke",
      "traumatic brain injury",
      "some neurodegenerative diseases",
    ],
  },

  // ============================================================
  // 58. MITOCHONDRIA AND NEURONS
  // ============================================================

  neural_metabolism: {
    mitochondria:
      "Mitochondria generate ATP and participate in calcium regulation and other cellular processes.",

    ATP:
      "Neurons require substantial energy to maintain ion gradients, membrane potentials, synaptic transmission, and cellular maintenance.",

    glucose:
      "Glucose is an important energy substrate for the brain under ordinary physiological conditions.",

    oxygen:
      "Neural tissue requires continuous oxygen supply because of its high metabolic demand.",

    metabolic_vulnerability:
      "Because neurons have high energy demands, interruption of blood flow can rapidly impair neural function.",
  },

  // ============================================================
  // 59. NEUROVASCULAR SYSTEM
  // ============================================================

  neurovascular: {
    definition:
      "The neurovascular system describes interactions among neurons, glial cells, blood vessels, and vascular regulatory mechanisms.",

    cerebral_blood_flow:
      "The brain requires continuous blood flow to supply oxygen and metabolic substrates and remove waste products.",

    neurovascular_coupling:
      "Local neural activity is associated with changes in blood flow and metabolism.",

    blood_vessels:
      "Brain blood vessels are specialized to support neural tissue while contributing to barrier functions.",

    stroke_relevance:
      "Interruption of cerebral blood flow can damage neurons and other neural cells.",
  },

  // ============================================================
  // 60. NEURAL OSCILLATIONS
  // ============================================================

  neural_oscillations: {
    definition:
      "Neural oscillations are rhythmic patterns of electrical or population-level neural activity.",

    delta:
      "Slow-frequency activity prominent during deep sleep.",

    theta:
      "An oscillatory frequency range associated with several cognitive, memory, and navigation processes.",

    alpha:
      "An oscillatory rhythm often prominent in relaxed wakefulness, particularly over posterior cortex.",

    beta:
      "A faster rhythm associated with sensorimotor and cognitive processes.",

    gamma:
      "Higher-frequency activity associated with diverse perceptual, cognitive, and neural integration processes.",

    synchronization:
      "Coordinated timing of neural activity across neurons or brain regions can support communication and computation.",
  },

  // ============================================================
  // 61. NEURAL CODING
  // ============================================================

  neural_coding: {
    rate_coding:
      "Information may be represented partly through firing rates of neurons.",

    temporal_coding:
      "Information may be represented through the timing of neural spikes.",

    population_coding:
      "Information can be represented collectively by patterns across many neurons.",

    sparse_coding:
      "Some representations use relatively small subsets of active neurons.",

    distributed_representation:
      "Information may be represented across distributed populations rather than a single neuron.",
  },

  // ============================================================
  // 62. ENCODING AND DECODING
  // ============================================================

  information_processing: {
    encoding:
      "Encoding describes how information about stimuli or internal variables is represented in neural activity.",

    decoding:
      "Decoding attempts to infer information from observed neural activity.",

    sensory_encoding:
      "Sensory systems transform physical stimuli into neural representations.",

    motor_decoding:
      "Neural signals can sometimes be used to estimate intended movement.",

    brain_machine_interface:
      "A brain-machine interface uses neural signals to control an external device or communicate information.",
  },

  // ============================================================
  // 63. BRAIN-COMPUTER INTERFACES
  // ============================================================

  brain_computer_interfaces: {
    definition:
      "Brain-computer interfaces translate neural activity into commands for external systems.",

    invasive_BCI:
      "Uses neural recordings obtained through implanted electrodes or other implanted sensors.",

    noninvasive_BCI:
      "Uses signals measured without surgical implantation, such as EEG.",

    applications: [
      "communication assistance",
      "prosthetic control",
      "motor rehabilitation",
      "research",
      "neurotechnology",
    ],

    challenges: [
      "signal noise",
      "long-term stability",
      "individual variability",
      "training requirements",
      "device safety",
      "ethical considerations",
    ],
  },

  // ============================================================
  // 64. NEURAL PROSTHETICS
  // ============================================================

  neural_prosthetics: {
    definition:
      "Neural prosthetics are technologies designed to restore or support functions through interaction with neural systems.",

    examples: [
      "cochlear implants",
      "visual prosthetic research",
      "motor prostheses",
      "deep brain stimulation systems",
    ],

    cochlear_implant:
      "A device that electrically stimulates the auditory nerve through an implanted electrode array to provide hearing-related information.",

    deep_brain_stimulation:
      "A therapy involving electrical stimulation of selected deep brain structures for certain neurological conditions.",
  },

  // ============================================================
  // 65. NEUROETHICS
  // ============================================================

  neuroethics: {
    definition:
      "Neuroethics examines ethical, legal, and social questions arising from neuroscience and neurotechnology.",

    topics: [
      "mental privacy",
      "brain data",
      "neural enhancement",
      "consent",
      "autonomy",
      "neurotechnology access",
      "identity",
      "responsibility",
      "AI and neuroscience",
      "dual-use technology",
    ],

    mental_privacy:
      "Emerging neural technologies raise questions about protection and ownership of information derived from brain activity.",

    enhancement:
      "Neuroscience raises ethical questions about technologies intended not only to treat disease but also to enhance human abilities.",
  },

  // ============================================================
  // 66. EXPERIMENTAL DESIGN
  // ============================================================

  research_design: {
    hypothesis:
      "A testable scientific explanation or prediction.",

    control_group:
      "A comparison group used to help determine whether an intervention or condition produces an effect.",

    randomization:
      "Assigning participants or experimental units to conditions using a random process.",

    blinding:
      "Reducing bias by preventing participants, researchers, or both from knowing condition assignments when appropriate.",

    replication:
      "Repeating studies or analyses to evaluate reliability and generalizability.",

    correlation:
      "A statistical relationship between variables that does not by itself establish causation.",

    causation:
      "A relationship in which changing one factor contributes to changes in another under specified conditions.",
  },

  // ============================================================
  // 67. STATISTICS IN NEUROSCIENCE
  // ============================================================

  statistics: {
    mean:
      "The arithmetic average of a set of values.",

    median:
      "The middle value of an ordered dataset.",

    variance:
      "A measure of dispersion based on squared deviations from the mean.",

    standard_deviation:
      "A measure of variability expressed in the same units as the measured variable.",

    correlation:
      "A measure describing statistical association between variables.",

    regression:
      "A family of statistical methods used to model relationships between variables.",

    p_value:
      "A probability measure used in certain statistical hypothesis-testing frameworks.",

    confidence_interval:
      "An interval estimate representing uncertainty around a parameter estimate under a specified statistical procedure.",

    multiple_comparisons:
      "Testing many hypotheses can increase the probability of false-positive findings unless appropriately accounted for.",
  },

  // ============================================================
  // 68. IMPORTANT HISTORICAL FIGURES
  // ============================================================

  historical_figures: [
    {
      name: "Santiago Ramón y Cajal",
      contribution:
        "Pioneered detailed neuronal anatomy and strongly supported the neuron doctrine.",
    },
    {
      name: "Camillo Golgi",
      contribution:
        "Developed a staining technique that enabled detailed visualization of individual neurons.",
    },
    {
      name: "Charles Sherrington",
      contribution:
        "Made major contributions to understanding reflexes and neural integration and popularized the term synapse.",
    },
    {
      name: "Hodgkin and Huxley",
      contribution:
        "Developed a quantitative model explaining ionic mechanisms underlying the action potential.",
    },
    {
      name: "Brenda Milner",
      contribution:
        "Made influential contributions to understanding memory systems through neuropsychological studies.",
    },
    {
      name: "Wilder Penfield",
      contribution:
        "Mapped functional organization of human cortex through stimulation during neurosurgical procedures.",
    },
    {
      name: "Eric Kandel",
      contribution:
        "Studied cellular mechanisms of learning and memory and synaptic plasticity.",
    },
    {
      name: "Donald Hebb",
      contribution:
        "Developed influential theories concerning learning and changes in neural connections.",
    },
  ],

  // ============================================================
  // 69. IMPORTANT CONCEPTS
  // ============================================================

  key_concepts: {
    neuron_doctrine:
      "The neuron doctrine proposes that neurons are fundamental cellular units of the nervous system and communicate through specialized connections.",

    localization:
      "Some neural functions are associated disproportionately with particular brain regions, although most complex functions depend on distributed networks.",

    distributed_processing:
      "Many cognitive and behavioral functions depend on interactions among multiple brain regions.",

    network_neuroscience:
      "Network neuroscience studies brain function using patterns of connectivity and interactions among neural systems.",

    connectome:
      "A connectome is a representation of neural connectivity at a specified scale.",

    functional_connectivity:
      "Functional connectivity describes statistical relationships between activity patterns in different neural regions.",

    structural_connectivity:
      "Structural connectivity describes physical neural pathways or anatomical connections.",

    effective_connectivity:
      "Effective connectivity attempts to characterize directed causal influences among neural systems using specific modeling assumptions.",
  },

  // ============================================================
  // 70. COMMON NEUROSCIENCE TERMS
  // ============================================================

  terminology: {
    afferent:
      "Carrying information toward a central neural structure.",

    efferent:
      "Carrying information away from a central neural structure.",

    ipsilateral:
      "Located on or affecting the same side.",

    contralateral:
      "Located on or affecting the opposite side.",

    rostral:
      "Toward the front or anterior direction, depending on anatomical context.",

    caudal:
      "Toward the back or posterior direction, depending on anatomical context.",

    dorsal:
      "Toward the back or upper surface, depending on anatomical context.",

    ventral:
      "Toward the belly or lower surface, depending on anatomical context.",

    anterior:
      "Toward the front.",

    posterior:
      "Toward the back.",

    medial:
      "Toward the midline.",

    lateral:
      "Away from the midline.",

    gray_matter:
      "Neural tissue containing many neuronal cell bodies, dendrites, and synapses.",

    white_matter:
      "Neural tissue containing many myelinated axonal pathways.",
  },

  // ============================================================
  // 71. NEURAL CIRCUITS
  // ============================================================

  neural_circuits: {
    feedforward:
      "Information primarily flows from earlier processing stages toward later stages.",

    feedback:
      "Later processing stages send signals back toward earlier stages.",

    recurrent:
      "Neural activity can circulate through interconnected neurons, allowing persistent or dynamic processing.",

    inhibitory_circuit:
      "A circuit in which inhibitory neurons reduce activity of target neurons.",

    excitatory_circuit:
      "A circuit in which excitatory neurons increase the likelihood of target-cell activation.",

    disinhibition:
      "Reducing inhibition on a target neuron or circuit, thereby allowing increased activity.",

    winner_take_all:
      "A computational motif in which stronger activity suppresses competing alternatives.",
  },

  // ============================================================
  // 72. HOMEOSTATIC NEURAL MECHANISMS
  // ============================================================

  homeostatic_neural_mechanisms: {
    definition:
      "Neural homeostasis refers to mechanisms that stabilize neural function despite changing internal and external conditions.",

    mechanisms: [
      "synaptic scaling",
      "intrinsic excitability regulation",
      "ion concentration regulation",
      "neurotransmitter clearance",
      "metabolic regulation",
      "network inhibition",
    ],

    importance:
      "Without stabilizing mechanisms, excessive excitation or insufficient activity could disrupt neural network function.",
  },

  // ============================================================
  // 73. NEURAL COMMUNICATION SPEED
  // ============================================================

  signal_speed: {
    factors: [
      "axon diameter",
      "myelination",
      "temperature",
      "membrane properties",
      "ion-channel distribution",
    ],

    myelination:
      "Myelination generally increases the speed and efficiency of action-potential propagation.",

    axon_diameter:
      "Larger axons generally conduct electrical signals faster than smaller axons under comparable conditions.",
  },

  // ============================================================
  // 74. NEURAL INTEGRATION
  // ============================================================

  neural_integration: {
    definition:
      "Neural integration is the process by which neurons combine multiple inputs to determine their output.",

    temporal_summation:
      "Inputs arriving close together in time can combine to influence neuronal activation.",

    spatial_summation:
      "Inputs arriving from multiple locations on a neuron can combine.",

    excitatory_postsynaptic_potential:
      "A postsynaptic change that increases the likelihood of neuronal firing.",

    inhibitory_postsynaptic_potential:
      "A postsynaptic change that decreases the likelihood of neuronal firing.",
  },

  // ============================================================
  // 75. NEUROTRANSMITTER CLEARANCE
  // ============================================================

  neurotransmitter_clearance: {
    reuptake:
      "Transporters move neurotransmitters from extracellular spaces into cells.",

    enzymatic_breakdown:
      "Enzymes chemically modify or break down signaling molecules.",

    diffusion:
      "Molecules can move away from synaptic sites through extracellular spaces.",

    glial_uptake:
      "Glial cells can remove neurotransmitters and help maintain extracellular chemical balance.",
  },

  // ============================================================
  // 76. NEURAL DEVELOPMENTAL DISORDERS
  // ============================================================

  neurodevelopmental_conditions: {
    autism_spectrum:
      "A neurodevelopmental condition involving differences in social communication, behavior, sensory processing, and development.",

    ADHD:
      "A neurodevelopmental condition involving persistent patterns of inattention and/or hyperactivity-impulsivity that affect functioning.",

    intellectual_disability:
      "A condition involving limitations in intellectual functioning and adaptive behavior with developmental onset.",

    developmental_language_disorder:
      "A condition involving persistent difficulties in language development and use.",
  },

  // ============================================================
  // 77. NEURAL INJURY
  // ============================================================

  neural_injury: {
    traumatic_injury:
      "Mechanical forces can damage neurons, axons, blood vessels, and supporting cells.",

    ischemia:
      "Reduced blood flow can deprive neural tissue of oxygen and metabolic substrates.",

    hypoxia:
      "Insufficient oxygen availability can impair neural function and cause injury.",

    hemorrhage:
      "Bleeding can damage nervous tissue through direct injury, pressure, inflammation, and altered blood flow.",

    edema:
      "Accumulation of excess fluid in tissue can increase pressure and impair function.",
  },

  // ============================================================
  // 78. NEUROREHABILITATION
  // ============================================================

  neurorehabilitation: {
    definition:
      "Neurorehabilitation aims to improve function, independence, and adaptation after neurological injury or disease.",

    approaches: [
      "physical therapy",
      "occupational therapy",
      "speech-language therapy",
      "motor training",
      "cognitive rehabilitation",
      "assistive technology",
      "neuroprosthetics",
    ],

    principles: [
      "repetition",
      "task specificity",
      "feedback",
      "progressive challenge",
      "motivation",
      "adaptation",
    ],
  },

  // ============================================================
  // 79. NEUROSCIENCE AND BEHAVIOR
  // ============================================================

  behavior: {
    definition:
      "Behavior results from interactions among neural circuits, body physiology, environment, learning, genetics, and context.",

    biological_behavior:
      "Neural systems influence behavior through perception, motivation, decision-making, movement, learning, and physiological regulation.",

    environment:
      "Environmental conditions can alter neural activity, learning, stress responses, and long-term neural organization.",

    genes_and_environment:
      "Complex behavioral traits generally arise from interactions between genetic and environmental factors rather than a single cause.",
  },

  // ============================================================
  // 80. COMMON MISCONCEPTIONS
  // ============================================================

  misconceptions: [
    {
      misconception:
        "Humans use only 10 percent of their brains.",
      correction:
        "There is no scientific basis for the claim that humans normally use only 10 percent of their brain. Different neural systems become active to different degrees depending on the task and state.",
    },
    {
      misconception:
        "People are either left-brained or right-brained personalities.",
      correction:
        "The two hemispheres have some functional specializations, but complex behavior depends on extensive communication between distributed neural networks.",
    },
    {
      misconception:
        "Neurons never regenerate.",
      correction:
        "Neural regeneration and neurogenesis occur in some contexts, but their extent varies greatly by species, region, developmental stage, and injury.",
    },
    {
      misconception:
        "Every brain region has exactly one function.",
      correction:
        "Although some regions have specialized roles, most complex functions involve distributed networks and interactions among regions.",
    },
    {
      misconception:
        "Dopamine is simply the pleasure chemical.",
      correction:
        "Dopamine has diverse roles including movement, learning, motivation, salience, and reward-related processing.",
    },
  ],

  // ============================================================
  // 81. QUICK FACTS
  // ============================================================

  quick_facts: [
    "The human brain contains billions of neurons.",
    "Neurons communicate through electrical and chemical mechanisms.",
    "Glial cells perform many essential functions beyond simply supporting neurons.",
    "The spinal cord contains both sensory and motor neural circuits.",
    "The cerebellum contributes strongly to coordination and motor learning.",
    "The hippocampus is important for many forms of episodic and spatial memory.",
    "The hypothalamus plays a major role in homeostasis.",
    "The thalamus is an important relay and integration structure.",
    "The cerebral cortex is organized into specialized but interconnected areas.",
    "Neural circuits can change through learning and experience.",
    "Sleep changes brain activity and physiology.",
    "Sensory systems transform physical stimuli into neural representations.",
    "Brain activity can be measured using methods such as EEG, MRI, MEG, and electrophysiology.",
    "Neuroscience combines biology, psychology, medicine, physics, chemistry, mathematics, and computer science.",
  ],

  // ============================================================
  // 82. STUDY TOPICS
  // ============================================================

  study_topics: [
    "neuron anatomy",
    "action potentials",
    "synaptic transmission",
    "neurotransmitters",
    "receptors",
    "glial cells",
    "brain anatomy",
    "spinal cord",
    "cranial nerves",
    "sensory neuroscience",
    "vision",
    "hearing",
    "touch",
    "pain",
    "taste",
    "olfaction",
    "motor control",
    "cerebellum",
    "basal ganglia",
    "autonomic nervous system",
    "homeostasis",
    "memory",
    "learning",
    "attention",
    "language",
    "emotion",
    "motivation",
    "sleep",
    "consciousness",
    "development",
    "aging",
    "neuroplasticity",
    "neurodegeneration",
    "neurological disorders",
    "neuropharmacology",
    "neurogenetics",
    "neuroimmunology",
    "brain imaging",
    "electrophysiology",
    "computational neuroscience",
    "brain-computer interfaces",
    "neuroethics",
  ],

  // ============================================================
  // 83. QUESTION PATTERNS
  // ============================================================

  question_patterns: [
    "what is neuroscience",
    "what is a neuron",
    "how do neurons communicate",
    "how does an action potential work",
    "what is a synapse",
    "what is a neurotransmitter",
    "what does dopamine do",
    "what does serotonin do",
    "what does GABA do",
    "what does glutamate do",
    "what is the hippocampus",
    "what does the amygdala do",
    "what does the cerebellum do",
    "what does the thalamus do",
    "what does the hypothalamus do",
    "what are the basal ganglia",
    "how does memory work",
    "how does learning change the brain",
    "what is neuroplasticity",
    "how does sleep affect the brain",
    "what is consciousness",
    "how does vision work",
    "how does hearing work",
    "how does pain work",
    "what is the autonomic nervous system",
    "what is the blood-brain barrier",
    "what is an EEG",
    "what is an MRI",
    "what is fMRI",
    "what is a brain-computer interface",
  ],

  // ============================================================
  // 84. RELATIONSHIPS BETWEEN MAJOR SYSTEMS
  // ============================================================

  system_relationships: {
    cortex_and_thalamus:
      "The cerebral cortex and thalamus communicate extensively and participate in sensory, motor, cognitive, and state-dependent processing.",

    cortex_and_basal_ganglia:
      "Cortical regions interact with basal-ganglia circuits to influence movement, action selection, learning, and cognition.",

    cortex_and_cerebellum:
      "Cortical and cerebellar systems interact through distributed pathways involved in movement and cognitive processing.",

    hippocampus_and_cortex:
      "The hippocampal formation interacts with widespread cortical regions during memory formation and retrieval.",

    amygdala_and_prefrontal_cortex:
      "Interactions between amygdala and prefrontal systems contribute to emotional evaluation and regulation.",

    hypothalamus_and_endocrine_system:
      "The hypothalamus connects neural regulation with endocrine control.",

    brain_and_spinal_cord:
      "The brain and spinal cord form an integrated central nervous system through ascending sensory and descending motor pathways.",

    nervous_and_immune_system:
      "Neural and immune systems communicate through cellular, molecular, and physiological pathways.",
  },

  // ============================================================
  // 85. SCIENTIFIC LIMITATIONS
  // ============================================================

  scientific_caution: {
    complexity:
      "Brain function emerges from interactions among enormous numbers of neurons, glial cells, synapses, molecules, and networks.",

    individual_variability:
      "Human brains differ in anatomy, connectivity, development, genetics, and experience.",

    correlation_vs_causation:
      "Observing brain activity alongside behavior does not automatically demonstrate that the observed activity causes the behavior.",

    localization_limitations:
      "Finding activity in a brain region does not mean that region is exclusively responsible for the behavior.",

    model_limitations:
      "Animal models, computational models, and simplified laboratory tasks provide valuable evidence but do not reproduce every aspect of human neuroscience.",

    reproducibility:
      "Robust neuroscience depends on appropriate statistics, replication, transparent methods, and converging evidence from multiple approaches.",
  },

  // ============================================================
  // 86. SUMMARY
  // ============================================================

  summary:
    "Neuroscience is the multidisciplinary study of the nervous system. It investigates neurons and glial cells, electrical and chemical signaling, synapses, neural circuits, brain anatomy, sensation, movement, cognition, memory, emotion, sleep, consciousness, development, aging, disease, and neuroplasticity. Modern neuroscience combines molecular biology, cellular physiology, anatomy, psychology, medicine, imaging, electrophysiology, computational modeling, genetics, and engineering to understand how nervous systems produce behavior and maintain the body's internal state.",
};

// ============================================================
// DEFAULT EXPORT
// ============================================================

export default NEUROSCIENCE_KNOWLEDGE;
