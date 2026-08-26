// lib/knowledge/science/genetics.js
// ============================================================
// REZE SCIENCE KNOWLEDGE — GENETICS
// Comprehensive Genetics Knowledge Base
// ============================================================

export const GENETICS_KNOWLEDGE = {
  name: "Genetics",
  category: "science",
  description:
    "The scientific study of heredity, genes, DNA, chromosomes, genomes, genetic variation, gene expression, mutation, inheritance, evolution, and the molecular mechanisms that transmit biological information.",

  definition: {
    title: "What is Genetics?",
    summary:
      "Genetics is the branch of biology concerned with heredity and biological variation. It explains how characteristics are transmitted from parents to offspring and how differences arise within populations and species.",

    majorQuestions: [
      "What is a gene?",
      "How is genetic information stored in DNA?",
      "How is DNA copied?",
      "How are genes expressed?",
      "How are traits inherited?",
      "Why are siblings genetically different?",
      "How do mutations arise?",
      "How does genetic variation contribute to evolution?",
      "How do chromosomes carry genetic information?",
      "How does gene regulation control cell behavior?",
      "How do organisms repair damaged DNA?",
      "How can scientists study genomes?",
      "How do genetic diseases arise?",
      "How do populations change genetically over generations?"
    ],

    majorBranches: [
      "Classical genetics",
      "Mendelian genetics",
      "Molecular genetics",
      "Population genetics",
      "Quantitative genetics",
      "Evolutionary genetics",
      "Medical genetics",
      "Human genetics",
      "Cytogenetics",
      "Genomics",
      "Epigenetics",
      "Developmental genetics",
      "Microbial genetics",
      "Plant genetics",
      "Animal genetics",
      "Behavioral genetics",
      "Conservation genetics",
      "Statistical genetics",
      "Computational genetics",
      "Pharmacogenetics",
      "Pharmacogenomics",
      "Cancer genetics",
      "Neurogenetics",
      "Immunogenetics"
    ]
  },

  // ============================================================
  // BASIC GENETIC TERMINOLOGY
  // ============================================================

  terminology: {
    gene:
      "A region of DNA that contributes to a functional product, usually a protein or functional RNA, together with regulatory sequences that control its activity.",

    allele:
      "One of two or more alternative versions of a genetic sequence at a particular genomic location.",

    locus:
      "The physical position of a gene or other DNA sequence on a chromosome.",

    genome:
      "The complete genetic material of an organism or cell.",

    genotype:
      "The genetic constitution of an organism, particularly with respect to specified genes or loci.",

    phenotype:
      "The observable characteristics of an organism resulting from genetic factors, environmental influences, and their interactions.",

    chromosome:
      "A DNA-protein structure that packages genetic material and helps organize and transmit it during cell division.",

    chromatin:
      "The complex of DNA and associated proteins that makes up chromosomes in eukaryotic cells.",

    chromatid:
      "One of the two copies of a replicated chromosome before they separate during cell division.",

    homologousChromosomes:
      "A pair of chromosomes, one inherited from each parent, containing corresponding loci but potentially different alleles.",

    haploid:
      "Having one complete set of chromosomes.",

    diploid:
      "Having two complete sets of chromosomes.",

    homozygous:
      "Having two identical alleles at a particular locus.",

    heterozygous:
      "Having two different alleles at a particular locus.",

    dominant:
      "An allele whose associated phenotype is expressed in a heterozygote under the relevant genetic model.",

    recessive:
      "An allele whose associated phenotype is generally masked in a heterozygote under a simple dominance model.",

    carrier:
      "An individual carrying an allele associated with a recessive condition who may not show the condition themselves.",

    mutation:
      "A change in the DNA sequence.",

    variant:
      "A difference in DNA sequence between individuals or genomes; the term does not itself imply that the change is harmful or beneficial.",

    polymorphism:
      "A genetic variation present at appreciable frequency in a population.",

    genome:
      "The complete set of genetic material in an organism.",

    epigenome:
      "The collection of chemical modifications and chromatin states that influence genome activity without changing the underlying DNA sequence.",

    transcriptome:
      "The complete collection of RNA molecules produced in a cell, tissue, or organism under particular conditions.",

    proteome:
      "The complete collection of proteins produced by a cell, tissue, organism, or biological system under particular conditions.",

    geneticCode:
      "The rules by which nucleotide triplets in messenger RNA specify amino acids or translation termination.",

    codon:
      "A sequence of three nucleotides in mRNA that specifies an amino acid or a stop signal.",

    anticodon:
      "A three-nucleotide sequence in transfer RNA that base-pairs with a complementary mRNA codon.",

    exon:
      "A portion of a gene transcript retained in mature RNA after RNA processing.",

    intron:
      "A transcribed region removed from a precursor RNA during RNA splicing.",

    promoter:
      "A regulatory DNA region near a gene where transcription machinery and regulatory proteins assemble to initiate transcription.",

    enhancer:
      "A regulatory DNA sequence that can increase transcription when bound by appropriate regulatory proteins.",

    silencer:
      "A regulatory DNA sequence that can reduce gene transcription.",

    operon:
      "A group of genes in prokaryotes controlled by a common regulatory system and transcribed together.",

    plasmid:
      "A usually circular DNA molecule separate from the main bacterial chromosome that can replicate independently.",

    transposon:
      "A mobile genetic element capable of moving to different genomic locations.",

    centromere:
      "A chromosome region important for kinetochore formation and accurate chromosome segregation.",

    telomere:
      "A repetitive DNA-protein structure at the end of a linear chromosome that helps protect chromosome ends.",

    kinetochore:
      "A protein structure assembled at the centromere that interacts with spindle microtubules during chromosome segregation.",

    geneticMarker:
      "A detectable genetic feature used to identify a genomic region or track inheritance.",

    haplotype:
      "A group of genetic variants inherited together on the same chromosome segment.",

    pedigree:
      "A diagram showing biological relationships across generations, often used to study inheritance.",

    penetrance:
      "The proportion of individuals with a particular genotype who display the associated phenotype.",

    expressivity:
      "The degree or range to which a genotype is expressed phenotypically.",

    pleiotropy:
      "A situation in which one gene influences multiple phenotypic traits.",

    epistasis:
      "An interaction in which the effect of one gene or locus depends on another gene or locus.",

    heritability:
      "A statistical measure describing how much of the variation in a trait within a particular population and environment is associated with genetic differences."
  },

  // ============================================================
  // DNA
  // ============================================================

  DNA: {
    title: "DNA — Deoxyribonucleic Acid",

    description:
      "DNA is the principal hereditary material in cellular organisms and stores biological information in the sequence of its nucleotides.",

    fullName: "Deoxyribonucleic acid",

    components: [
      "Deoxyribose sugar",
      "Phosphate group",
      "Adenine",
      "Thymine",
      "Guanine",
      "Cytosine"
    ],

    bases: {
      adenine: "A",
      thymine: "T",
      guanine: "G",
      cytosine: "C"
    },

    basePairing: {
      A_T: "Adenine pairs with thymine in DNA.",
      G_C: "Guanine pairs with cytosine in DNA."
    },

    structure: [
      "DNA is generally arranged as a double-stranded helix.",
      "The two strands are antiparallel.",
      "The sugar-phosphate backbones form the outside of the molecule.",
      "The nitrogenous bases face inward.",
      "Hydrogen bonding contributes to base pairing.",
      "The sequence of bases stores genetic information.",
      "DNA can be copied because each strand can serve as a template."
    ],

    bonds: {
      phosphodiester:
        "Phosphodiester bonds connect adjacent nucleotides within a DNA strand.",

      hydrogen:
        "Hydrogen bonds contribute to interactions between complementary bases on opposite DNA strands.",

      glycosidic:
        "A glycosidic bond connects a nitrogenous base to the sugar."
    },

    antiparallel:
      "The two DNA strands run in opposite chemical directions, one from 5′ to 3′ and the other from 3′ to 5′.",

    informationStorage:
      "Genetic information is encoded by the order of nucleotides along DNA.",

    majorAndMinorGrooves:
      "The DNA double helix contains major and minor grooves that provide surfaces for interactions with DNA-binding proteins.",

    denaturation:
      "DNA strands can separate when hydrogen-bonding interactions are disrupted by heat or chemical conditions.",

    renaturation:
      "Complementary DNA strands can re-form a double-stranded structure under suitable conditions.",

    complementarySequence:
      "A DNA sequence can be paired with its complementary strand according to base-pairing rules."
  },

  // ============================================================
  // RNA
  // ============================================================

  RNA: {
    title: "RNA — Ribonucleic Acid",

    fullName: "Ribonucleic acid",

    majorDifferencesFromDNA: [
      "RNA generally contains ribose rather than deoxyribose.",
      "RNA generally uses uracil instead of thymine.",
      "RNA is commonly single-stranded, although it can form complex structures.",
      "RNA can function as information carrier, structural molecule, catalyst, regulator, or guide."
    ],

    bases: [
      "Adenine",
      "Uracil",
      "Guanine",
      "Cytosine"
    ],

    majorTypes: {
      mRNA:
        "Messenger RNA carries information from DNA to the ribosome for protein synthesis.",

      tRNA:
        "Transfer RNA helps deliver amino acids during translation.",

      rRNA:
        "Ribosomal RNA forms a major structural and catalytic component of ribosomes.",

      miRNA:
        "MicroRNAs are small regulatory RNAs that can reduce expression of target genes.",

      siRNA:
        "Small interfering RNAs can guide sequence-specific gene silencing.",

      snRNA:
        "Small nuclear RNAs participate in RNA processing, particularly splicing.",

      snoRNA:
        "Small nucleolar RNAs participate in modification and processing of certain RNAs.",

      lncRNA:
        "Long noncoding RNAs are transcripts longer than about 200 nucleotides that can perform diverse regulatory functions.",

      circRNA:
        "Circular RNAs are RNA molecules with covalently closed circular structures and can have regulatory roles."
    }
  },

  // ============================================================
  // GENOME ORGANIZATION
  // ============================================================

  genomeOrganization: {
    title: "Genome Organization",

    eukaryoticGenome: {
      nucleus:
        "Most nuclear DNA in eukaryotic cells is organized into linear chromosomes.",

      mitochondrialDNA:
        "Mitochondria contain their own genomes, generally inherited differently from nuclear chromosomes.",

      nuclearDNA:
        "Nuclear DNA is packaged with histone and non-histone proteins into chromatin."
    },

    prokaryoticGenome: {
      chromosome:
        "Many bacteria possess a major chromosome containing essential genetic information.",

      plasmids:
        "Many bacteria can contain plasmids carrying additional genes.",

      nucleoid:
        "The bacterial chromosome occupies a DNA-rich region called the nucleoid."
    },

    noncodingDNA: [
      "Introns",
      "Regulatory regions",
      "Intergenic regions",
      "Repeated sequences",
      "Structural chromosome regions",
      "Noncoding RNA genes",
      "Transposable elements",
      "Pseudogenes"
    ],

    repetitiveDNA: [
      "Tandem repeats",
      "Satellite DNA",
      "Minisatellites",
      "Microsatellites",
      "Interspersed repeats",
      "Transposable-element-derived sequences"
    ]
  },

  // ============================================================
  // CHROMOSOMES
  // ============================================================

  chromosomes: {
    title: "Chromosomes",

    functions: [
      "Package DNA",
      "Organize genes",
      "Facilitate DNA replication",
      "Enable accurate chromosome segregation",
      "Help maintain genome stability",
      "Provide structural organization for genetic material"
    ],

    chromosomeParts: [
      "Short arm (p arm)",
      "Long arm (q arm)",
      "Centromere",
      "Telomeres",
      "Chromatin",
      "Replication origins"
    ],

    chromosomeNumber:
      "Different species possess characteristic chromosome numbers, although chromosome number alone does not determine biological complexity.",

    karyotype:
      "A karyotype is an organized representation of an individual's chromosomes, usually arranged by size and other structural characteristics.",

    autosomes:
      "Chromosomes other than sex chromosomes.",

    sexChromosomes:
      "Chromosomes involved in sex determination in many organisms.",

    homologousPairs:
      "In diploid organisms, homologous chromosome pairs contain corresponding loci inherited from different parents.",

    chromosomalAbnormalities: [
      "Deletion",
      "Duplication",
      "Inversion",
      "Translocation",
      "Insertion",
      "Aneuploidy",
      "Polyploidy",
      "Ring chromosome",
      "Isochromosome"
    ]
  },

  // ============================================================
  // DNA REPLICATION
  // ============================================================

  DNAReplication: {
    title: "DNA Replication",

    definition:
      "DNA replication is the process by which a DNA molecule is copied before cell division.",

    model:
      "DNA replication is semiconservative: each daughter DNA molecule contains one parental strand and one newly synthesized strand.",

    majorSteps: [
      "Replication origins are activated.",
      "DNA strands are separated.",
      "Replication forks form.",
      "Primers provide starting points for DNA synthesis.",
      "DNA polymerases synthesize new DNA.",
      "The leading strand is synthesized continuously.",
      "The lagging strand is synthesized discontinuously.",
      "RNA primers are removed or replaced.",
      "DNA fragments are joined.",
      "Replication termination completes chromosome duplication."
    ],

    majorProteinsAndEnzymes: {
      helicase:
        "Unwinds and separates the DNA strands.",

      primase:
        "Synthesizes RNA primers.",

      DNApolymerase:
        "Adds nucleotides to a growing DNA strand.",

      ligase:
        "Joins DNA fragments by forming phosphodiester bonds.",

      topoisomerase:
        "Relieves torsional stress associated with DNA unwinding.",

      singleStrandBindingProteins:
        "Stabilize separated DNA strands and prevent inappropriate reannealing."
    },

    leadingStrand:
      "The leading strand is synthesized continuously in the direction of replication-fork movement.",

    laggingStrand:
      "The lagging strand is synthesized discontinuously as Okazaki fragments.",

    okazakiFragments:
      "Short DNA fragments synthesized on the lagging strand during replication.",

    fidelity:
      "Replication accuracy is supported by nucleotide-selection mechanisms, proofreading, and DNA repair systems."
  },

  // ============================================================
  // TRANSCRIPTION
  // ============================================================

  transcription: {
    title: "Transcription",

    definition:
      "Transcription is the synthesis of RNA using a DNA template.",

    majorSteps: [
      "Transcription machinery recognizes a regulatory region near a gene.",
      "DNA locally unwinds.",
      "RNA polymerase begins RNA synthesis.",
      "RNA nucleotides are added according to complementary base pairing.",
      "The RNA transcript elongates.",
      "Transcription terminates.",
      "The RNA may undergo processing before becoming mature."
    ],

    enzyme:
      "RNA polymerase",

    templateStrand:
      "The DNA strand used as the template for RNA synthesis.",

    codingStrand:
      "The DNA strand whose sequence resembles the RNA sequence except that DNA contains thymine instead of uracil.",

    direction:
      "RNA polymerase synthesizes RNA in the 5′ to 3′ direction.",

    eukaryoticRNAProcessing: [
      "5′ capping",
      "3′ polyadenylation",
      "Intron removal",
      "Exon joining",
      "Alternative splicing",
      "RNA editing in some systems"
    ]
  },

  // ============================================================
  // TRANSLATION
  // ============================================================

  translation: {
    title: "Translation",

    definition:
      "Translation is the process in which ribosomes use mRNA information to synthesize a polypeptide.",

    majorComponents: [
      "mRNA",
      "Ribosome",
      "tRNA",
      "Amino acids",
      "Translation factors",
      "Energy molecules"
    ],

    stages: [
      "Initiation",
      "Elongation",
      "Termination"
    ],

    initiation:
      "The ribosome assembles with mRNA and an initiator tRNA at the translation start site.",

    elongation:
      "Aminoacyl-tRNAs enter the ribosome, peptide bonds form, and the ribosome moves along the mRNA.",

    termination:
      "A stop codon is recognized by release factors, causing release of the newly synthesized polypeptide.",

    startCodon:
      "AUG is the most common translation initiation codon.",

    stopCodons: [
      "UAA",
      "UAG",
      "UGA"
    ],

    geneticCodeProperties: [
      "Triplet",
      "Degenerate",
      "Nearly universal",
      "Non-overlapping in the standard interpretation",
      "Contains start and stop signals"
    ]
  },

  // ============================================================
  // CENTRAL DOGMA
  // ============================================================

  centralDogma: {
    title: "Central Dogma of Molecular Biology",

    basicFlow:
      "DNA → RNA → Protein",

    processes: {
      replication:
        "DNA → DNA",

      transcription:
        "DNA → RNA",

      translation:
        "RNA → Protein"
    },

    exceptionsAndExtensions: [
      "RNA → DNA through reverse transcription",
      "RNA viruses can replicate RNA",
      "Some RNAs function without being translated into proteins",
      "Protein folding and modification add layers beyond translation"
    ]
  },

  // ============================================================
  // MENDELIAN GENETICS
  // ============================================================

  MendelianGenetics: {
    title: "Mendelian Genetics",

    founder:
      "Gregor Mendel is widely recognized for establishing foundational principles of inheritance through experiments with pea plants.",

    laws: {
      segregation:
        "The two alleles of a gene separate during gamete formation so that each gamete receives one allele.",

      independentAssortment:
        "Allele pairs for different genes can assort independently during gamete formation when the genes are sufficiently unlinked or located on different chromosomes.",

      dominance:
        "In a simple dominance model, one allele can determine the phenotype in a heterozygote while another is masked."
    },

    concepts: [
      "Trait",
      "Gene",
      "Allele",
      "Genotype",
      "Phenotype",
      "Dominance",
      "Recessiveness",
      "Segregation",
      "Independent assortment"
    ],

    monohybridCross:
      "A genetic cross examining inheritance at one locus.",

    dihybridCross:
      "A genetic cross examining inheritance at two loci.",

    testCross:
      "A cross between an individual with an unknown genotype and a homozygous recessive individual, historically used to infer genotype.",

    backcross:
      "A cross between an offspring and one of its parents or a genetically similar parental genotype."
  },

  // ============================================================
  // NON-MENDELIAN INHERITANCE
  // ============================================================

  nonMendelianInheritance: {
    incompleteDominance:
      "The heterozygote has a phenotype intermediate between the two homozygotes.",

    codominance:
      "Both alleles contribute distinctly to the phenotype of a heterozygote.",

    multipleAlleles:
      "A gene can have more than two allelic forms within a population, although an individual diploid organism generally carries only two alleles at a locus.",

    lethalAlleles:
      "Some alleles can cause death under particular genotypes or conditions.",

    sexLinkedInheritance:
      "Inheritance of genes located on sex chromosomes.",

    sexLimitedTraits:
      "Traits whose phenotypic expression is restricted to one sex even though genes may be present in both sexes.",

    sexInfluencedTraits:
      "Traits whose expression or dominance relationships differ between sexes.",

    mitochondrialInheritance:
      "Traits caused by mitochondrial DNA variants can follow inheritance patterns different from typical nuclear Mendelian inheritance.",

    genomicImprinting:
      "Gene expression can depend on whether a particular allele was inherited from the mother or father.",

    maternalEffect:
      "In some organisms, offspring phenotype depends strongly on gene products supplied by the mother during egg formation or development."
  },

  // ============================================================
  // LINKAGE AND RECOMBINATION
  // ============================================================

  linkage: {
    title: "Genetic Linkage and Recombination",

    geneticLinkage:
      "Genes located near each other on the same chromosome tend to be inherited together more often than genes located far apart.",

    crossingOver:
      "Exchange of DNA between homologous chromosomes during meiosis.",

    recombination:
      "The generation of new combinations of genetic variants, including through crossing over and independent assortment.",

    recombinationFrequency:
      "The proportion of recombinant offspring or gametes used to estimate genetic distance between loci.",

    geneticMap:
      "A map representing relative positions of genes or markers based on recombination.",

    centimorgan:
      "A genetic map unit historically corresponding approximately to a 1% recombination frequency under suitable assumptions.",

    linkageDisequilibrium:
      "A non-random association of alleles at different loci in a population."
  },

  // ============================================================
  // MEIOSIS
  // ============================================================

  meiosis: {
    title: "Meiosis",

    definition:
      "Meiosis is a specialized form of cell division that reduces chromosome number and produces genetically diverse haploid cells.",

    purposes: [
      "Reduction of chromosome number",
      "Production of gametes or meiotic products",
      "Generation of genetic diversity"
    ],

    stages: [
      "Prophase I",
      "Metaphase I",
      "Anaphase I",
      "Telophase I",
      "Prophase II",
      "Metaphase II",
      "Anaphase II",
      "Telophase II"
    ],

    prophaseIEvents: [
      "Chromosome condensation",
      "Homolog pairing",
      "Synapsis",
      "Crossing over",
      "Chiasmata formation",
      "Recombination"
    ],

    geneticVariationSources: [
      "Crossing over",
      "Independent assortment",
      "Random fertilization",
      "Mutation"
    ],

    nondisjunction:
      "Failure of chromosomes or chromatids to separate properly during cell division, potentially producing cells with abnormal chromosome numbers."
  },

  // ============================================================
  // MITOSIS
  // ============================================================

  mitosis: {
    title: "Mitosis",

    definition:
      "Mitosis is nuclear division that generally produces daughter cells with chromosome sets equivalent to the parent cell, subject to replication and segregation accuracy.",

    stages: [
      "Prophase",
      "Prometaphase",
      "Metaphase",
      "Anaphase",
      "Telophase"
    ],

    functions: [
      "Growth",
      "Tissue maintenance",
      "Cell replacement",
      "Asexual reproduction in some organisms"
    ],

    comparisonWithMeiosis: {
      mitosis:
        "Usually produces two genetically similar daughter cells after one division.",

      meiosis:
        "Includes two successive divisions and produces haploid products with substantial genetic variation."
    }
  },

  // ============================================================
  // MUTATIONS
  // ============================================================

  mutations: {
    title: "Mutations",

    definition:
      "A mutation is a change in DNA sequence. Mutations can occur spontaneously or result from environmental mutagens.",

    pointMutations: {
      substitution:
        "Replacement of one nucleotide by another.",

      transition:
        "A substitution between two purines or between two pyrimidines.",

      transversion:
        "A substitution between a purine and a pyrimidine."
    },

    codingSequenceEffects: {
      silent:
        "A nucleotide change that does not alter the encoded amino acid in the standard genetic code.",

      missense:
        "A nucleotide change that alters the encoded amino acid.",

      nonsense:
        "A nucleotide change that creates a premature stop codon.",

      startLoss:
        "A change that disrupts a translation initiation signal.",

      stopLoss:
        "A change that disrupts a normal stop codon."
    },

    indels: {
      insertion:
        "Addition of one or more nucleotides.",

      deletion:
        "Removal of one or more nucleotides.",

      frameshift:
        "An insertion or deletion that changes the reading frame, typically when its length is not a multiple of three."
    },

    structuralMutations: [
      "Deletion",
      "Duplication",
      "Inversion",
      "Translocation",
      "Insertion",
      "Copy-number variation"
    ],

    mutationSources: [
      "DNA replication errors",
      "Spontaneous chemical changes",
      "DNA damage",
      "Ultraviolet radiation",
      "Ionizing radiation",
      "Certain chemical mutagens",
      "Mobile genetic elements"
    ],

    biologicalConsequences: [
      "Neutral effects",
      "Harmful effects",
      "Beneficial effects",
      "Context-dependent effects",
      "Altered gene regulation",
      "Altered protein sequence",
      "Loss of gene function",
      "Gain or alteration of function"
    ]
  },

  // ============================================================
  // DNA REPAIR
  // ============================================================

  DNARepair: {
    title: "DNA Repair",

    importance:
      "DNA repair systems detect and correct many forms of DNA damage and replication errors, helping maintain genome stability.",

    majorPathways: {
      proofreading:
        "DNA polymerases can detect and remove some incorrectly incorporated nucleotides during replication.",

      mismatchRepair:
        "Corrects certain base-pairing errors that remain after DNA replication.",

      baseExcisionRepair:
        "Repairs damaged individual bases through removal and replacement of the affected nucleotide.",

      nucleotideExcisionRepair:
        "Removes short stretches of DNA containing bulky lesions and replaces them with newly synthesized DNA.",

      homologousRecombination:
        "Can repair certain DNA double-strand breaks using homologous DNA as a template.",

      nonHomologousEndJoining:
        "Repairs double-strand breaks by directly joining DNA ends, sometimes introducing small sequence changes.",

      directRepair:
        "Some forms of DNA damage can be directly reversed by specialized enzymes."
    },

    genomeStability:
      "Accurate replication and effective DNA repair are major defenses against accumulation of harmful mutations."
  },

  // ============================================================
  // GENE EXPRESSION
  // ============================================================

  geneExpression: {
    title: "Gene Expression",

    definition:
      "Gene expression is the process through which information encoded by genes is used to produce functional RNA or protein products.",

    levelsOfRegulation: [
      "Chromatin accessibility",
      "Transcription initiation",
      "Transcription elongation",
      "RNA processing",
      "RNA transport",
      "RNA stability",
      "Translation",
      "Protein modification",
      "Protein localization",
      "Protein degradation"
    ],

    expressionSpecificity:
      "Different cell types can express different sets of genes even though they usually contain the same genome.",

    geneRegulation:
      "Cells regulate genes to respond to developmental programs, environmental conditions, signals, metabolism, and cellular needs."
  },

  // ============================================================
  // GENE REGULATION
  // ============================================================

  geneRegulation: {
    title: "Gene Regulation",

    regulatoryElements: [
      "Promoters",
      "Enhancers",
      "Silencers",
      "Insulators",
      "Operator regions",
      "Response elements"
    ],

    transcriptionFactors:
      "Proteins that bind specific DNA sequences or interact with regulatory machinery to influence transcription.",

    activators:
      "Regulatory proteins that generally increase transcription of target genes.",

    repressors:
      "Regulatory proteins that generally decrease transcription of target genes.",

    prokaryoticRegulation: {
      operons: [
        "Lac operon",
        "Trp operon"
      ],

      lacOperon:
        "A classic bacterial regulatory system controlling genes involved in lactose utilization.",

      trpOperon:
        "A bacterial regulatory system controlling genes involved in tryptophan biosynthesis."
    },

    eukaryoticRegulation:
      "Eukaryotic gene regulation involves chromatin organization, transcription factors, regulatory DNA elements, RNA processing, noncoding RNAs, and post-translational mechanisms."
  },

  // ============================================================
  // EPIGENETICS
  // ============================================================

  epigenetics: {
    title: "Epigenetics",

    definition:
      "Epigenetics studies heritable or persistent changes in gene activity that do not require changes to the underlying DNA sequence.",

    mechanisms: [
      "DNA methylation",
      "Histone modification",
      "Chromatin remodeling",
      "Nucleosome positioning",
      "Noncoding RNA regulation"
    ],

    DNA_methylation:
      "Addition of methyl groups to DNA bases at particular sites can influence gene activity.",

    histoneModification:
      "Chemical modifications of histone proteins can influence chromatin structure and gene accessibility.",

    chromatinStates: [
      "Open chromatin",
      "Closed chromatin",
      "Euchromatin",
      "Heterochromatin"
    ],

    imprinting:
      "Genomic imprinting causes expression differences based on parental origin for particular genomic regions.",

    XInactivation:
      "In many female mammals, one X chromosome in each somatic cell becomes largely transcriptionally inactive through a developmental process involving Xist RNA and chromatin changes."
  },

  // ============================================================
  // GENETIC VARIATION
  // ============================================================

  geneticVariation: {
    title: "Genetic Variation",

    sources: [
      "Mutation",
      "Recombination",
      "Independent assortment",
      "Gene flow",
      "Sexual reproduction"
    ],

    commonVariationTypes: [
      "Single-nucleotide variants",
      "Insertions",
      "Deletions",
      "Microsatellites",
      "Copy-number variants",
      "Structural variants",
      "Inversions",
      "Translocations"
    ],

    SNP:
      "A single-nucleotide polymorphism is a common single-base difference among individuals in a population.",

    CNV:
      "Copy-number variation refers to differences among individuals in the number of copies of particular genomic regions.",

    structuralVariation:
      "Large-scale genomic differences can include deletions, duplications, inversions, insertions, and translocations."
  },

  // ============================================================
  // POPULATION GENETICS
  // ============================================================

  populationGenetics: {
    title: "Population Genetics",

    definition:
      "Population genetics studies the distribution and change of genetic variation within populations.",

    alleleFrequency:
      "The proportion of a particular allele among copies of a gene in a population.",

    genotypeFrequency:
      "The proportion of individuals or genetic copies belonging to a particular genotype.",

    majorForces: [
      "Natural selection",
      "Genetic drift",
      "Mutation",
      "Gene flow",
      "Non-random mating"
    ],

    geneticDrift:
      "Random changes in allele frequencies caused by sampling effects, especially in small populations.",

    founderEffect:
      "A form of genetic drift that occurs when a new population is established by a relatively small number of individuals.",

    bottleneckEffect:
      "A reduction in population size that can cause random loss of genetic variation.",

    geneFlow:
      "Movement of alleles between populations through migration and reproduction.",

    mutation:
      "Introduces new DNA variants into populations.",

    naturalSelection:
      "Differences in survival or reproduction can cause heritable variants associated with greater reproductive success to become more common.",

    nonRandomMating:
      "Mating patterns that are not random with respect to genotype or phenotype can alter genotype frequencies and influence evolutionary processes."
  },

  // ============================================================
  // HARDY-WEINBERG
  // ============================================================

  hardyWeinberg: {
    title: "Hardy-Weinberg Principle",

    purpose:
      "Provides a mathematical baseline for genotype frequencies in an idealized population.",

    assumptions: [
      "Very large population",
      "Random mating",
      "No mutation",
      "No migration",
      "No natural selection"
    ],

    alleleRelationship:
      "For two alleles, p + q = 1.",

    genotypeRelationship:
      "For two alleles under Hardy-Weinberg conditions, p² + 2pq + q² = 1.",

    interpretation:
      "If assumptions are met, allele frequencies remain constant and genotype frequencies follow predictable proportions across generations."
  },

  // ============================================================
  // EVOLUTIONARY GENETICS
  // ============================================================

  evolutionaryGenetics: {
    title: "Evolutionary Genetics",

    definition:
      "Evolutionary genetics examines how genetic variation changes across generations and contributes to evolutionary change.",

    mechanisms: [
      "Natural selection",
      "Genetic drift",
      "Mutation",
      "Gene flow",
      "Recombination",
      "Sexual selection"
    ],

    adaptation:
      "A population becomes better suited to its environment when heritable traits associated with greater reproductive success become more common.",

    geneticDivergence:
      "Populations can accumulate genetic differences over time, particularly when gene flow is limited.",

    speciation:
      "Genetic divergence can contribute to the formation of reproductively distinct lineages.",

    molecularEvolution:
      "The study of changes in DNA and protein sequences across evolutionary time."
  },

  // ============================================================
  // QUANTITATIVE GENETICS
  // ============================================================

  quantitativeGenetics: {
    title: "Quantitative Genetics",

    definition:
      "Quantitative genetics studies traits influenced by many genes and environmental factors.",

    polygenicTraits: [
      "Height",
      "Many aspects of pigmentation",
      "Body size",
      "Some physiological characteristics",
      "Many agricultural traits"
    ],

    additiveEffects:
      "Multiple alleles can contribute incremental effects to a phenotype.",

    environmentalInfluence:
      "Environmental factors can contribute substantially to variation in quantitative traits.",

    heritability:
      "Heritability describes the fraction of phenotypic variance associated with genetic variance in a particular population and environment; it does not indicate how genetically determined an individual's trait is."
  },

  // ============================================================
  // GENETIC INTERACTIONS
  // ============================================================

  geneInteractions: {
    title: "Gene Interactions",

    epistasis:
      "The effect of one gene depends on the genotype at another locus.",

    pleiotropy:
      "One gene influences multiple traits.",

    geneGeneInteraction:
      "Multiple genes can interact to influence the same phenotype.",

    geneEnvironmentInteraction:
      "The effect of a genotype can vary depending on environmental conditions.",

    examples: [
      "Metabolic pathways",
      "Pigmentation pathways",
      "Developmental networks",
      "Immune responses",
      "Drug responses"
    ]
  },

  // ============================================================
  // HUMAN GENETICS
  // ============================================================

  humanGenetics: {
    title: "Human Genetics",

    areas: [
      "Human inheritance",
      "Chromosome biology",
      "Genetic variation",
      "Population genetics",
      "Medical genetics",
      "Genomics",
      "Developmental genetics",
      "Cancer genetics",
      "Pharmacogenomics"
    ],

    inheritancePatterns: [
      "Autosomal dominant",
      "Autosomal recessive",
      "X-linked dominant",
      "X-linked recessive",
      "Y-linked",
      "Mitochondrial",
      "Multifactorial"
    ],

    pedigreeAnalysis:
      "Pedigrees can help researchers infer possible inheritance patterns within families.",

    geneticCounseling:
      "Genetic counseling helps individuals and families understand genetic information, inheritance patterns, testing options, and potential implications."
  },

  // ============================================================
  // MEDICAL GENETICS
  // ============================================================

  medicalGenetics: {
    title: "Medical Genetics",

    definition:
      "Medical genetics applies genetic principles to human health, disease, diagnosis, risk assessment, and treatment.",

    geneticConditions: [
      "Single-gene disorders",
      "Chromosomal disorders",
      "Mitochondrial disorders",
      "Multifactorial disorders",
      "Cancer predisposition syndromes",
      "Developmental genetic conditions"
    ],

    causesOfGeneticDisease: [
      "Pathogenic variants",
      "Chromosomal abnormalities",
      "Gene dosage changes",
      "Altered gene regulation",
      "Mitochondrial variants",
      "Complex interactions between genes and environment"
    ],

    diagnosisMethods: [
      "Clinical examination",
      "Family history",
      "Karyotyping",
      "Chromosomal microarray",
      "DNA sequencing",
      "Targeted genetic testing",
      "Whole-exome sequencing",
      "Whole-genome sequencing",
      "Biochemical testing"
    ]
  },

  // ============================================================
  // CHROMOSOMAL DISORDERS
  // ============================================================

  chromosomalDisorders: {
    title: "Chromosomal Abnormalities",

    numericalAbnormalities: [
      "Monosomy",
      "Trisomy",
      "Other aneuploidies",
      "Polyploidy"
    ],

    structuralAbnormalities: [
      "Deletion",
      "Duplication",
      "Inversion",
      "Translocation",
      "Insertion",
      "Ring chromosome",
      "Isochromosome"
    ],

    aneuploidy:
      "A condition in which chromosome number differs from the normal chromosome complement by the gain or loss of individual chromosomes.",

    polyploidy:
      "A condition involving additional complete sets of chromosomes.",

    nondisjunction:
      "An error in chromosome separation that can produce cells with abnormal chromosome numbers."
  },

  // ============================================================
  // GENOMICS
  // ============================================================

  genomics: {
    title: "Genomics",

    definition:
      "Genomics studies genomes on a large scale, including their sequences, structures, functions, variation, and interactions.",

    branches: [
      "Structural genomics",
      "Functional genomics",
      "Comparative genomics",
      "Population genomics",
      "Metagenomics",
      "Transcriptomics",
      "Epigenomics",
      "Proteomics"
    ],

    genomeSequencing:
      "Genome sequencing determines DNA sequence information across large portions or the entirety of a genome.",

    comparativeGenomics:
      "Compares genomes between organisms or populations to identify conserved and variable regions.",

    functionalGenomics:
      "Studies gene functions and interactions using large-scale experimental approaches."
  },

  // ============================================================
  // GENETIC ENGINEERING
  // ============================================================

  geneticEngineering: {
    title: "Genetic Engineering",

    definition:
      "Genetic engineering involves deliberately modifying genetic material using molecular biology techniques.",

    applications: [
      "Research",
      "Medicine",
      "Agriculture",
      "Industrial biotechnology",
      "Production of biological molecules",
      "Functional studies"
    ],

    techniques: [
      "Recombinant DNA technology",
      "DNA cloning",
      "Gene insertion",
      "Gene deletion",
      "Gene replacement",
      "Genome editing",
      "Transgenesis"
    ],

    recombinantDNA:
      "DNA molecules assembled from genetic material originating from different sources.",

    transgenicOrganism:
      "An organism carrying introduced genetic material from another biological source."
  },

  // ============================================================
  // CRISPR
  // ============================================================

  CRISPR: {
    title: "CRISPR Genome Editing",

    definition:
      "CRISPR-based systems use guide RNA and CRISPR-associated proteins to recognize specific nucleic acid sequences and modify or regulate genetic material.",

    majorComponents: [
      "Guide RNA",
      "CRISPR-associated protein",
      "Target DNA sequence"
    ],

    CRISPRCas9:
      "A widely used genome-editing system in which guide RNA directs Cas9 to a complementary DNA target adjacent to a suitable PAM sequence.",

    genomeEditingOutcomes: [
      "Gene disruption",
      "Sequence correction",
      "Targeted insertion",
      "Targeted deletion",
      "Regulation of gene expression"
    ],

    applications: [
      "Basic research",
      "Functional genomics",
      "Disease research",
      "Agricultural biotechnology",
      "Cell engineering"
    ],

    limitations: [
      "Off-target editing",
      "Delivery challenges",
      "Variable editing efficiency",
      "Potential unintended genomic consequences",
      "Complexity of editing multicellular organisms"
    ]
  },

  // ============================================================
  // DNA SEQUENCING
  // ============================================================

  sequencing: {
    title: "DNA Sequencing",

    purpose:
      "DNA sequencing determines the order of nucleotides in DNA.",

    majorMethods: {
      Sanger:
        "A sequencing method based on chain termination using labeled dideoxynucleotides.",

      nextGenerationSequencing:
        "A family of massively parallel sequencing technologies capable of processing many DNA molecules simultaneously.",

      thirdGenerationSequencing:
        "Sequencing approaches capable of reading individual DNA molecules, often producing long reads."
    },

    applications: [
      "Disease diagnosis",
      "Research",
      "Genome projects",
      "Evolutionary studies",
      "Pathogen surveillance",
      "Population genetics",
      "Cancer genomics",
      "Forensic genetics"
    ]
  },

  // ============================================================
  // PCR
  // ============================================================

  PCR: {
    title: "Polymerase Chain Reaction",

    fullName: "Polymerase Chain Reaction",

    definition:
      "PCR is a laboratory method used to amplify a selected DNA region.",

    basicStages: [
      "Denaturation",
      "Primer annealing",
      "Extension"
    ],

    components: [
      "Template DNA",
      "Primers",
      "DNA polymerase",
      "Nucleotides",
      "Reaction buffer"
    ],

    applications: [
      "DNA detection",
      "Genotyping",
      "Mutation analysis",
      "Cloning",
      "Forensics",
      "Research",
      "Diagnostic testing"
    ],

    variants: [
      "RT-PCR",
      "qPCR",
      "Digital PCR",
      "Multiplex PCR",
      "Long-range PCR"
    ]
  },

  // ============================================================
  // GENETIC TESTING
  // ============================================================

  geneticTesting: {
    title: "Genetic Testing",

    types: [
      "Diagnostic testing",
      "Carrier testing",
      "Predictive testing",
      "Presymptomatic testing",
      "Prenatal testing",
      "Newborn screening",
      "Pharmacogenetic testing",
      "Tumor genetic testing"
    ],

    methods: [
      "Targeted variant testing",
      "Gene panels",
      "Exome sequencing",
      "Genome sequencing",
      "Chromosome analysis",
      "Microarray analysis"
    ],

    interpretation:
      "Genetic test results must be interpreted in their clinical and family context; a detected variant is not automatically disease-causing."
  },

  // ============================================================
  // PHARMACOGENETICS
  // ============================================================

  pharmacogenetics: {
    title: "Pharmacogenetics",

    definition:
      "Pharmacogenetics studies how genetic variation influences an individual's response to particular drugs.",

    factors: [
      "Drug metabolism",
      "Drug transport",
      "Drug targets",
      "Drug toxicity",
      "Drug effectiveness"
    ],

    pharmacogenomics:
      "Pharmacogenomics examines drug response using broader genomic information."
  },

  // ============================================================
  // CANCER GENETICS
  // ============================================================

  cancerGenetics: {
    title: "Cancer Genetics",

    definition:
      "Cancer genetics studies genetic and genomic changes involved in cancer development, progression, and treatment response.",

    majorGeneClasses: [
      "Oncogenes",
      "Tumor suppressor genes",
      "DNA repair genes"
    ],

    somaticMutations:
      "Genetic changes acquired by cells during an individual's lifetime can contribute to cancer.",

    germlineVariants:
      "Inherited genetic variants can increase susceptibility to certain cancers.",

    genomicProcesses: [
      "Mutation accumulation",
      "Copy-number changes",
      "Chromosomal rearrangements",
      "Altered gene regulation",
      "Genome instability",
      "Clonal evolution"
    ]
  },

  // ============================================================
  // MITOCHONDRIAL GENETICS
  // ============================================================

  mitochondrialGenetics: {
    title: "Mitochondrial Genetics",

    mitochondrialDNA:
      "Mitochondrial DNA is a relatively small genome located within mitochondria.",

    characteristics: [
      "Multiple copies can exist within a cell.",
      "It encodes a subset of mitochondrial proteins and RNAs.",
      "Mitochondrial inheritance often differs from nuclear inheritance.",
      "Mitochondrial genomes can accumulate their own variants."
    ],

    heteroplasmy:
      "The presence of more than one mitochondrial DNA type within a cell or individual.",

    homoplasmy:
      "A state in which mitochondrial DNA copies are effectively the same type with respect to a particular variant."
  },

  // ============================================================
  // DEVELOPMENTAL GENETICS
  // ============================================================

  developmentalGenetics: {
    title: "Developmental Genetics",

    definition:
      "Developmental genetics investigates how genes control the growth, differentiation, organization, and development of organisms.",

    processes: [
      "Cell differentiation",
      "Cell signaling",
      "Pattern formation",
      "Morphogenesis",
      "Organ development",
      "Programmed cell death"
    ],

    regulatoryNetworks:
      "Development depends on complex networks of transcription factors, signaling pathways, regulatory DNA, and cell-cell interactions.",

    homeoticGenes:
      "Genes involved in specifying developmental identities and body-plan organization."
  },

  // ============================================================
  // MICROBIAL GENETICS
  // ============================================================

  microbialGenetics: {
    title: "Microbial Genetics",

    topics: [
      "Bacterial chromosomes",
      "Plasmids",
      "Horizontal gene transfer",
      "Mutation",
      "Gene regulation",
      "Phage genetics",
      "Antibiotic resistance"
    ],

    horizontalGeneTransfer: {
      transformation:
        "Uptake of genetic material from the environment.",

      transduction:
        "Transfer of bacterial DNA mediated by bacteriophages.",

      conjugation:
        "Direct transfer of DNA between cells through cell-to-cell contact, often involving plasmids."
    },

    antibioticResistance:
      "Bacteria can acquire or evolve genetic changes that reduce susceptibility to antimicrobial drugs."
  },

  // ============================================================
  // PLANT GENETICS
  // ============================================================

  plantGenetics: {
    title: "Plant Genetics",

    topics: [
      "Plant breeding",
      "Crop genetics",
      "Polyploidy",
      "Hybridization",
      "Quantitative traits",
      "Seed genetics",
      "Plant genome evolution",
      "Genetic modification"
    ],

    importance:
      "Plant genetics supports understanding of crop traits, breeding, adaptation, disease resistance, yield, and genetic diversity.",

    polyploidy:
      "Polyploidy is particularly important in plant evolution and breeding, with many plant species possessing more than two chromosome sets."
  },

  // ============================================================
  // ANIMAL GENETICS
  // ============================================================

  animalGenetics: {
    title: "Animal Genetics",

    topics: [
      "Inheritance",
      "Breeding",
      "Population genetics",
      "Quantitative traits",
      "Genetic diversity",
      "Evolution",
      "Conservation",
      "Animal disease genetics"
    ],

    applications: [
      "Livestock breeding",
      "Companion animal genetics",
      "Wildlife conservation",
      "Evolutionary studies",
      "Disease research"
    ]
  },

  // ============================================================
  // CONSERVATION GENETICS
  // ============================================================

  conservationGenetics: {
    title: "Conservation Genetics",

    definition:
      "Conservation genetics uses genetic information to understand and protect biodiversity.",

    concerns: [
      "Loss of genetic diversity",
      "Inbreeding",
      "Population fragmentation",
      "Genetic drift",
      "Small population size",
      "Loss of adaptive potential"
    ],

    applications: [
      "Population identification",
      "Genetic monitoring",
      "Species management",
      "Population connectivity studies",
      "Inbreeding assessment",
      "Wildlife forensic analysis"
    ]
  },

  // ============================================================
  // FORENSIC GENETICS
  // ============================================================

  forensicGenetics: {
    title: "Forensic Genetics",

    definition:
      "Forensic genetics applies genetic analysis to identification and biological evidence.",

    commonMarkers:
      "Short tandem repeats are widely used for human identification because they vary substantially among individuals.",

    applications: [
      "Human identification",
      "Kinship analysis",
      "Missing-person investigations",
      "Disaster victim identification",
      "Biological evidence analysis"
    ],

    DNAProfiling:
      "DNA profiling examines selected variable genetic markers to produce a genetic profile useful for identification or relationship analysis."
  },

  // ============================================================
  // BEHAVIORAL GENETICS
  // ============================================================

  behavioralGenetics: {
    title: "Behavioral Genetics",

    definition:
      "Behavioral genetics studies how genetic variation and environmental factors contribute to variation in behavior.",

    importantPrinciples: [
      "Most complex behaviors involve many genes.",
      "Environmental factors can strongly influence behavior.",
      "Genetic effects can depend on environmental conditions.",
      "Heritability is population-specific and does not imply genetic determinism."
    ]
  },

  // ============================================================
  // NEUROGENETICS
  // ============================================================

  neurogenetics: {
    title: "Neurogenetics",

    definition:
      "Neurogenetics studies the genetic basis of nervous-system development, function, variation, and disease.",

    topics: [
      "Neural development",
      "Synaptic function",
      "Ion channels",
      "Neurotransmitter systems",
      "Brain development",
      "Inherited neurological disorders",
      "Gene regulation in neurons"
    ]
  },

  // ============================================================
  // IMMUNOGENETICS
  // ============================================================

  immunogenetics: {
    title: "Immunogenetics",

    definition:
      "Immunogenetics studies the genetic basis of immune-system development and function.",

    topics: [
      "Antibody genes",
      "T-cell receptor genes",
      "Major histocompatibility complex",
      "Immune diversity",
      "Autoimmune susceptibility",
      "Host-pathogen interactions"
    ],

    VDJRecombination:
      "V(D)J recombination generates diverse antigen receptors in developing B and T lymphocytes."
  },

  // ============================================================
  // GENE THERAPY
  // ============================================================

  geneTherapy: {
    title: "Gene Therapy",

    definition:
      "Gene therapy aims to treat disease by modifying genetic material or genetic activity in cells.",

    strategies: [
      "Gene addition",
      "Gene replacement",
      "Gene editing",
      "Gene silencing",
      "Cell-based genetic modification"
    ],

    deliveryMethods: [
      "Viral vectors",
      "Nonviral delivery systems",
      "Ex vivo cell modification",
      "In vivo delivery"
    ],

    challenges: [
      "Target-cell delivery",
      "Immune responses",
      "Durability",
      "Safety",
      "Off-target effects",
      "Manufacturing complexity"
    ]
  },

  // ============================================================
  // RNA INTERFERENCE
  // ============================================================

  RNAInterference: {
    title: "RNA Interference",

    definition:
      "RNA interference is a gene-regulatory mechanism in which small RNA molecules guide sequence-specific suppression of gene expression.",

    majorMolecules: [
      "siRNA",
      "miRNA"
    ],

    mechanism:
      "Small RNAs associate with protein complexes that recognize complementary RNA sequences and can reduce target RNA stability or translation."
  },

  // ============================================================
  // TRANSCRIPTIONAL REGULATION
  // ============================================================

  transcriptionalRegulation: {
    title: "Transcriptional Regulation",

    factors: [
      "Transcription factors",
      "Chromatin remodelers",
      "Histone-modifying enzymes",
      "DNA methylation machinery",
      "Enhancers",
      "Promoters",
      "Insulators"
    ],

    combinatorialControl:
      "Genes are often regulated by combinations of transcription factors rather than a single regulatory switch.",

    cellSpecificExpression:
      "Different combinations of regulatory proteins help establish cell-type-specific gene-expression patterns."
  },

  // ============================================================
  // RNA SPLICING
  // ============================================================

  RNAsplicing: {
    title: "RNA Splicing",

    definition:
      "RNA splicing removes introns from precursor RNA and joins exons to generate mature RNA.",

    spliceosome:
      "A large RNA-protein complex responsible for much of eukaryotic pre-mRNA splicing.",

    alternativeSplicing:
      "Different exon combinations can be selected from the same precursor RNA, allowing one gene to produce multiple RNA or protein products.",

    importance: [
      "Protein diversity",
      "Cell-type-specific expression",
      "Development",
      "Regulation of gene function"
    ]
  },

  // ============================================================
  // PROTEIN MODIFICATION
  // ============================================================

  postTranslationalModification: {
    title: "Post-Translational Modification",

    definition:
      "Post-translational modifications alter proteins after translation and can influence their activity, localization, stability, and interactions.",

    examples: [
      "Phosphorylation",
      "Acetylation",
      "Methylation",
      "Glycosylation",
      "Ubiquitination",
      "Lipidation",
      "Proteolytic cleavage"
    ],

    importance:
      "Protein modification provides another level of biological regulation beyond DNA sequence and transcription."
  },

  // ============================================================
  // GENETIC SCREENING
  // ============================================================

  geneticScreening: {
    title: "Genetic Screening",

    definition:
      "Genetic screening examines individuals or populations for particular genetic variants or conditions, often before symptoms appear.",

    examples: [
      "Newborn screening",
      "Carrier screening",
      "Population screening",
      "Prenatal screening",
      "Cancer susceptibility screening"
    ],

    screeningVsDiagnosis:
      "Screening estimates risk or identifies individuals who may need further evaluation, whereas diagnostic testing is intended to determine whether a condition is present."
  },

  // ============================================================
  // BIOINFORMATICS
  // ============================================================

  bioinformatics: {
    title: "Genetics and Bioinformatics",

    definition:
      "Bioinformatics applies computational methods to biological data, especially large genomic and molecular datasets.",

    applications: [
      "Sequence alignment",
      "Genome assembly",
      "Variant detection",
      "Gene prediction",
      "Phylogenetics",
      "Genome annotation",
      "Population analysis",
      "RNA analysis",
      "Protein prediction"
    ],

    commonDataTypes: [
      "DNA sequences",
      "RNA sequences",
      "Protein sequences",
      "Variant datasets",
      "Genome assemblies",
      "Expression datasets"
    ]
  },

  // ============================================================
  // PHYLOGENETICS
  // ============================================================

  phylogenetics: {
    title: "Molecular Phylogenetics",

    definition:
      "Molecular phylogenetics reconstructs evolutionary relationships using DNA, RNA, or protein sequence information.",

    concepts: [
      "Common ancestry",
      "Homology",
      "Sequence divergence",
      "Phylogenetic trees",
      "Molecular clocks",
      "Orthologs",
      "Paralogs"
    ],

    ortholog:
      "Genes in different species that descended from a common ancestral gene through speciation.",

    paralog:
      "Genes related by duplication within a genome."
  },

  // ============================================================
  // GENETIC MARKERS
  // ============================================================

  geneticMarkers: {
    title: "Genetic Markers",

    types: [
      "SNPs",
      "STRs",
      "Microsatellites",
      "RFLPs",
      "Indels",
      "Copy-number variants",
      "Sequence-tagged sites"
    ],

    uses: [
      "Genetic mapping",
      "Population studies",
      "Forensics",
      "Disease association studies",
      "Evolutionary analysis",
      "Breeding programs"
    ]
  },

  // ============================================================
  // GENETIC MAPPING
  // ============================================================

  geneticMapping: {
    title: "Genetic Mapping",

    definition:
      "Genetic mapping determines the relative positions of genes or markers on chromosomes.",

    types: [
      "Linkage mapping",
      "Physical mapping",
      "Association mapping",
      "Fine mapping"
    ],

    linkageMapping:
      "Uses recombination frequencies between markers to estimate their relative positions.",

    physicalMapping:
      "Determines genomic positions using DNA sequence or physical distances."
  },

  // ============================================================
  // GWAS
  // ============================================================

  GWAS: {
    title: "Genome-Wide Association Studies",

    fullName: "Genome-Wide Association Study",

    definition:
      "GWAS examines genetic variants across genomes to identify statistical associations between variants and traits or diseases.",

    basicProcess: [
      "Collect phenotype information.",
      "Genotype or sequence participants.",
      "Test genetic variants for association with traits.",
      "Account for population structure and statistical factors.",
      "Identify candidate genomic regions.",
      "Perform further biological validation."
    ],

    limitations: [
      "Association does not prove causation.",
      "Population structure can produce misleading associations.",
      "Associated variants may not themselves be causal.",
      "Many complex traits involve many variants with small effects.",
      "Findings may not generalize equally across populations."
    ]
  },

  // ============================================================
  // GENETIC DRIFT
  // ============================================================

  geneticDriftDetailed: {
    title: "Genetic Drift",

    definition:
      "Genetic drift is random change in allele frequencies caused by chance sampling of individuals or gametes.",

    strongestIn:
      "Small populations",

    consequences: [
      "Loss of alleles",
      "Fixation of alleles",
      "Reduced genetic diversity",
      "Population differentiation"
    ],

    founderEffect:
      "A new population founded by a small number of individuals may have allele frequencies that differ substantially from the source population.",

    bottleneck:
      "A sharp reduction in population size can randomly remove genetic variants."
  },

  // ============================================================
  // NATURAL SELECTION
  // ============================================================

  naturalSelection: {
    title: "Natural Selection and Genetics",

    definition:
      "Natural selection changes allele frequencies when heritable differences affect survival or reproductive success.",

    requirements: [
      "Variation",
      "Heritability",
      "Differences in reproductive success"
    ],

    forms: [
      "Directional selection",
      "Stabilizing selection",
      "Disruptive selection",
      "Balancing selection",
      "Sexual selection"
    ],

    directionalSelection:
      "Favors variants associated with one end of a phenotypic distribution.",

    stabilizingSelection:
      "Favors intermediate phenotypes and can reduce variation around the population mean.",

    disruptiveSelection:
      "Favors contrasting extremes over intermediate phenotypes.",

    balancingSelection:
      "Maintains multiple genetic variants in a population under certain conditions."
  },

  // ============================================================
  // GENETIC LOAD
  // ============================================================

  geneticLoad: {
    title: "Genetic Load",

    definition:
      "Genetic load describes the reduction in average population fitness associated with deleterious genetic variants relative to a reference genotype or idealized state.",

    sources: [
      "Deleterious mutations",
      "Inbreeding",
      "Mutation-selection balance",
      "Population structure"
    ]
  },

  // ============================================================
  // INBREEDING
  // ============================================================

  inbreeding: {
    title: "Inbreeding",

    definition:
      "Inbreeding occurs when individuals that are more closely related than expected under random mating reproduce.",

    effects: [
      "Increased homozygosity",
      "Increased probability of expressing recessive deleterious variants",
      "Potential reduction in fitness",
      "Reduced genetic diversity in some populations"
    ],

    inbreedingDepression:
      "Reduced biological fitness associated with increased homozygosity in certain populations."
  },

  // ============================================================
  // GENETIC RESCUE
  // ============================================================

  geneticRescue: {
    title: "Genetic Rescue",

    definition:
      "Genetic rescue can occur when introducing individuals or genetic material from another population increases genetic diversity and improves population fitness."
  },

  // ============================================================
  // HORIZONTAL GENE TRANSFER
  // ============================================================

  horizontalGeneTransfer: {
    title: "Horizontal Gene Transfer",

    definition:
      "Horizontal gene transfer is the movement of genetic material between organisms outside ordinary parent-to-offspring inheritance.",

    mechanisms: [
      "Transformation",
      "Transduction",
      "Conjugation"
    ],

    importance: [
      "Bacterial adaptation",
      "Antibiotic resistance",
      "Acquisition of metabolic capabilities",
      "Microbial evolution"
    ]
  },

  // ============================================================
  // TRANSPOSABLE ELEMENTS
  // ============================================================

  transposableElements: {
    title: "Transposable Elements",

    definition:
      "Transposable elements are DNA sequences capable of moving or copying themselves to different genomic locations.",

    majorTypes: [
      "DNA transposons",
      "Retrotransposons"
    ],

    effects: [
      "Insertional mutation",
      "Gene regulation changes",
      "Genome rearrangement",
      "Genome expansion",
      "Generation of genetic variation"
    ]
  },

  // ============================================================
  // PSEUDOGENES
  // ============================================================

  pseudogenes: {
    title: "Pseudogenes",

    definition:
      "Pseudogenes are genomic sequences resembling functional genes but generally lacking the ability to produce the original functional product.",

    origins: [
      "Gene duplication followed by loss of function",
      "Reverse transcription and reinsertion",
      "Other genomic processes"
    ],

    possibleRoles:
      "Some pseudogenes can have regulatory or other biological functions despite their historical classification as nonfunctional."
  },

  // ============================================================
  // TELOMERES
  // ============================================================

  telomeres: {
    title: "Telomeres",

    definition:
      "Telomeres are repetitive DNA-protein structures at chromosome ends that help protect linear chromosomes.",

    functions: [
      "Protect chromosome ends",
      "Prevent inappropriate chromosome-end fusion",
      "Help distinguish natural chromosome ends from DNA breaks"
    ],

    telomerase:
      "Telomerase is an enzyme complex that can extend telomeric DNA in cells where it is active.",

    biologicalImportance:
      "Telomere maintenance is particularly important in cells that undergo extensive proliferation."
  },

  // ============================================================
  // HISTONES AND CHROMATIN
  // ============================================================

  chromatinBiology: {
    title: "Chromatin Biology",

    histones:
      "Histones are DNA-associated proteins around which DNA can wrap to form nucleosomes.",

    nucleosome:
      "A nucleosome consists of DNA wrapped around a histone protein core.",

    chromatinTypes: {
      euchromatin:
        "Generally less condensed chromatin associated with greater genomic accessibility.",

      heterochromatin:
        "Generally more condensed chromatin associated with reduced accessibility and specialized genomic functions."
    },

    remodeling:
      "Chromatin-remodeling complexes use energy to alter nucleosome positioning or composition."
  },

  // ============================================================
  // GENETIC INFORMATION FLOW
  // ============================================================

  informationFlow: {
    title: "Flow of Genetic Information",

    stages: [
      "DNA storage",
      "DNA replication",
      "Transcription",
      "RNA processing",
      "RNA transport",
      "Translation",
      "Protein folding",
      "Post-translational modification",
      "Protein localization",
      "Cellular function"
    ],

    principle:
      "Genetic information is expressed through multiple molecular steps, each of which can be regulated."
  },

  // ============================================================
  // GENETIC DIVERSITY
  // ============================================================

  geneticDiversity: {
    title: "Genetic Diversity",

    definition:
      "Genetic diversity refers to variation in DNA sequences among individuals, populations, or species.",

    importance: [
      "Evolutionary potential",
      "Adaptation",
      "Population resilience",
      "Disease resistance",
      "Conservation",
      "Agricultural improvement"
    ],

    threats: [
      "Population bottlenecks",
      "Inbreeding",
      "Habitat fragmentation",
      "Small population size",
      "Loss of populations"
    ]
  },

  // ============================================================
  // GENETICS IN AGRICULTURE
  // ============================================================

  agriculturalGenetics: {
    title: "Agricultural Genetics",

    applications: [
      "Crop breeding",
      "Livestock breeding",
      "Disease resistance",
      "Pest resistance",
      "Yield improvement",
      "Stress tolerance",
      "Nutritional improvement",
      "Marker-assisted selection",
      "Genomic selection"
    ],

    selectiveBreeding:
      "Humans can alter populations by preferentially breeding individuals with desired heritable traits.",

    markerAssistedSelection:
      "Genetic markers can help breeders select individuals likely to possess desired traits.",

    genomicSelection:
      "Genome-wide genetic information can be used to predict breeding values for complex traits."
  },

  // ============================================================
  // GENETICALLY MODIFIED ORGANISMS
  // ============================================================

  GMO: {
    title: "Genetically Modified Organisms",

    definition:
      "A genetically modified organism has genetic material deliberately altered using biotechnology.",

    applications: [
      "Agriculture",
      "Research",
      "Industrial biotechnology",
      "Pharmaceutical production"
    ],

    examplesOfTraits: [
      "Pest resistance",
      "Herbicide tolerance",
      "Altered nutritional characteristics",
      "Production of useful proteins"
    ]
  },

  // ============================================================
  // GENETIC DATABASE CONCEPTS
  // ============================================================

  genomicData: {
    title: "Genomic Data",

    dataTypes: [
      "Reference genomes",
      "Genome assemblies",
      "Raw sequencing reads",
      "Variant calls",
      "Gene annotations",
      "Expression profiles",
      "Epigenetic data",
      "Population frequencies"
    ],

    annotation:
      "Genome annotation identifies and describes genes, regulatory regions, repeated sequences, and other functional or structural features."
  },

  // ============================================================
  // GENETICS AND EVOLUTION
  // ============================================================

  geneticsAndEvolution: {
    title: "Relationship Between Genetics and Evolution",

    principles: [
      "Evolution requires heritable variation.",
      "Mutation introduces new genetic variants.",
      "Recombination creates new combinations of existing variants.",
      "Natural selection can favor particular heritable variants.",
      "Genetic drift changes allele frequencies randomly.",
      "Gene flow moves genetic variants between populations.",
      "Isolation can allow populations to diverge genetically."
    ]
  },

  // ============================================================
  // IMPORTANT GENETIC CONCEPTS
  // ============================================================

  keyConcepts: [
    "DNA",
    "RNA",
    "Genes",
    "Alleles",
    "Chromosomes",
    "Genomes",
    "Genotypes",
    "Phenotypes",
    "Inheritance",
    "Mutation",
    "Recombination",
    "Replication",
    "Transcription",
    "Translation",
    "Gene regulation",
    "Epigenetics",
    "Meiosis",
    "Mitosis",
    "Genetic variation",
    "Population genetics",
    "Natural selection",
    "Genetic drift",
    "Gene flow",
    "Genomics",
    "Genetic engineering",
    "Genome editing",
    "CRISPR",
    "Gene therapy",
    "DNA sequencing",
    "PCR",
    "Bioinformatics"
  ],

  // ============================================================
  // COMMON GENETICS QUESTIONS
  // ============================================================

  commonQuestions: {
    whatIsAGene:
      "A gene is a genomic region that contributes to a functional RNA or protein product, together with associated regulatory information.",

    whatIsDNA:
      "DNA is the primary hereditary material of cellular organisms and stores biological information in nucleotide sequences.",

    whatIsAnAllele:
      "An allele is an alternative version of a genetic sequence at a particular locus.",

    whatIsAGenotype:
      "A genotype describes an organism's genetic constitution, especially at specified loci.",

    whatIsAPhenotype:
      "A phenotype is an observable characteristic resulting from genetic, environmental, and developmental influences.",

    whyAreSiblingsDifferent:
      "Siblings can differ genetically because of independent assortment, crossing over, random fertilization, and new mutations.",

    whyDoMutationsMatter:
      "Mutations create new genetic variation and can have neutral, harmful, beneficial, or context-dependent effects.",

    whyIsGeneticVariationImportant:
      "Genetic variation provides the raw material on which evolutionary processes can act.",

    whatIsEvolution:
      "Evolution is change in inherited characteristics of populations across generations.",

    whatIsGeneExpression:
      "Gene expression is the use of genetic information to produce functional RNA or protein.",

    whatIsEpigenetics:
      "Epigenetics concerns regulation and inheritance of gene activity through mechanisms that do not require changing the underlying DNA sequence.",

    whatIsGenome:
      "A genome is the complete genetic material of an organism or cell.",

    whatIsGenomics:
      "Genomics is the large-scale study of genomes and their structure, variation, and function.",

    whatIsCRISPR:
      "CRISPR is a family of biological systems adapted for targeted nucleic-acid recognition and widely developed as genome-editing technology.",

    whatIsPCR:
      "PCR is a laboratory technique that amplifies a selected DNA sequence.",

    whatIsDNASequencing:
      "DNA sequencing determines the nucleotide order within DNA."
  }
};

// ============================================================
// QUICK FACTS
// ============================================================

export const GENETICS_QUICK_FACTS = {
  facts: [
    "DNA stands for deoxyribonucleic acid.",
    "RNA stands for ribonucleic acid.",
    "Genes are regions of DNA associated with biological functions.",
    "Alleles are alternative versions of genetic sequences.",
    "DNA uses adenine, thymine, guanine, and cytosine.",
    "RNA generally uses uracil instead of thymine.",
    "Adenine pairs with thymine in DNA.",
    "Guanine pairs with cytosine in DNA.",
    "DNA replication is semiconservative.",
    "RNA polymerase performs transcription.",
    "Ribosomes perform translation.",
    "mRNA carries information used for protein synthesis.",
    "tRNA helps deliver amino acids during translation.",
    "rRNA is a major component of ribosomes.",
    "A codon contains three nucleotides.",
    "AUG is the most common translation start codon.",
    "UAA, UAG, and UGA are stop codons.",
    "Chromosomes package DNA.",
    "Centromeres help chromosomes segregate.",
    "Telomeres protect chromosome ends.",
    "Mitosis usually produces two daughter cells.",
    "Meiosis reduces chromosome number.",
    "Crossing over occurs during meiosis.",
    "Genetic recombination contributes to variation.",
    "Mutations are changes in DNA sequence.",
    "A substitution changes one nucleotide for another.",
    "A frameshift can result from an insertion or deletion.",
    "Genetic drift is a random evolutionary process.",
    "Gene flow moves alleles between populations.",
    "Natural selection can change allele frequencies.",
    "Hardy-Weinberg equilibrium provides an idealized population-genetic baseline.",
    "Epigenetic regulation can alter gene activity without changing DNA sequence.",
    "DNA methylation can influence gene expression.",
    "Histones help package DNA.",
    "PCR amplifies selected DNA sequences.",
    "DNA sequencing determines nucleotide order.",
    "Genomics studies genomes on a large scale.",
    "CRISPR systems can be used for targeted genome editing.",
    "Genetic variation is essential for evolutionary change.",
    "Genetic diversity is important for population resilience.",
    "Plasmids can carry genes in bacteria.",
    "Bacteria can exchange DNA through horizontal gene transfer.",
    "Transposable elements can move within genomes.",
    "GWAS identifies statistical associations between genetic variants and traits.",
    "Heritability is a population-level statistical concept.",
    "Phenotype is influenced by both genes and environment.",
    "Genotype and phenotype are not interchangeable terms.",
    "A carrier can possess a recessive disease-associated allele without expressing the condition.",
    "Genetic counseling helps interpret genetic information in family and clinical contexts."
  ]
};

// ============================================================
// GENETICS METADATA
// ============================================================

export const GENETICS_METADATA = {
  subject: "Genetics",
  branch: "Biology",
  category: "Science",

  keywords: [
    "genetics",
    "gene",
    "genes",
    "genome",
    "DNA",
    "RNA",
    "chromosome",
    "chromosomes",
    "allele",
    "alleles",
    "heredity",
    "inheritance",
    "genotype",
    "phenotype",
    "mutation",
    "mutations",
    "variation",
    "genetic variation",
    "genetic diversity",
    "Mendel",
    "Mendelian genetics",
    "dominant",
    "recessive",
    "homozygous",
    "heterozygous",
    "Punnett square",
    "meiosis",
    "mitosis",
    "replication",
    "transcription",
    "translation",
    "codon",
    "protein",
    "gene expression",
    "gene regulation",
    "epigenetics",
    "DNA methylation",
    "histone",
    "chromatin",
    "genomics",
    "sequencing",
    "PCR",
    "CRISPR",
    "gene editing",
    "gene therapy",
    "population genetics",
    "Hardy-Weinberg",
    "genetic drift",
    "gene flow",
    "natural selection",
    "recombination",
    "crossing over",
    "linkage",
    "genetic mapping",
    "GWAS",
    "bioinformatics",
    "medical genetics",
    "human genetics",
    "cancer genetics",
    "mitochondrial genetics",
    "forensic genetics",
    "pharmacogenetics",
    "conservation genetics"
  ],

  relatedSubjects: [
    "Biology",
    "Molecular Biology",
    "Cell Biology",
    "Evolution",
    "Biochemistry",
    "Medicine",
    "Bioinformatics",
    "Biotechnology",
    "Microbiology",
    "Neuroscience",
    "Ecology"
  ],

  difficultyLevels: {
    beginner: [
      "DNA",
      "genes",
      "chromosomes",
      "inheritance",
      "dominant and recessive traits",
      "genotype",
      "phenotype",
      "basic mutations"
    ],

    intermediate: [
      "DNA replication",
      "transcription",
      "translation",
      "meiosis",
      "linkage",
      "recombination",
      "population genetics",
      "gene regulation",
      "epigenetics"
    ],

    advanced: [
      "genome architecture",
      "quantitative genetics",
      "GWAS",
      "population genomics",
      "epigenomics",
      "comparative genomics",
      "gene regulatory networks",
      "CRISPR systems",
      "molecular evolution",
      "computational genetics"
    ]
  }
};

// ============================================================
// DEFAULT EXPORT
// ============================================================

export default GENETICS_KNOWLEDGE;
