/* =========================================================
   REZE — ROMAN HISTORY KNOWLEDGE
   File:
   app/api/reze/romanKnowledge.js

   This file contains Roman-history knowledge only.

   The main Reze route imports the functions:
   - isRomanQuestion()
   - getRomanContext()
   - getRomanTopics()
========================================================= */


/* =========================================================
   ROMAN HISTORY DATABASE
========================================================= */

const ROMAN_KNOWLEDGE = {

  /* =======================================================
     GENERAL
  ======================================================= */

  general: `
Ancient Rome was one of the most influential civilizations
in world history.

Roman history is commonly divided into three major periods:

1. Roman Kingdom
   Traditionally dated from 753 BCE to 509 BCE.

2. Roman Republic
   Traditionally dated from 509 BCE to 27 BCE.

3. Roman Empire
   Traditionally beginning in 27 BCE, when Octavian became
   Augustus, although the transition from Republic to Empire
   occurred gradually.

Rome developed from a settlement in central Italy into a
Mediterranean superpower and eventually controlled territories
across Europe, North Africa, and the Middle East.

Roman influence remains important in law, government,
architecture, engineering, language, military organization,
literature, religion, and political thought.
`,

  /* =======================================================
     ROMAN KINGDOM
  ======================================================= */

  kingdom: `
The traditional Roman foundation date is 753 BCE.

According to Roman tradition, Rome was founded by Romulus,
who became its first king. The legendary story says that
Romulus and his twin brother Remus were sons of Rhea Silvia
and were associated with the god Mars.

Roman tradition lists seven kings:

1. Romulus
2. Numa Pompilius
3. Tullus Hostilius
4. Ancus Marcius
5. Lucius Tarquinius Priscus
6. Servius Tullius
7. Lucius Tarquinius Superbus

The historical details of the early kings are mixed with
legend, and modern historians do not treat all traditional
stories as verified historical facts.

The Roman monarchy traditionally ended in 509 BCE after the
overthrow of Tarquinius Superbus, the last king.

The Roman Republic was then established.
`,

  /* =======================================================
     ROMAN REPUBLIC
  ======================================================= */

  republic: `
The Roman Republic traditionally began in 509 BCE.

Instead of a king, Rome developed a republican political
system involving elected magistrates, the Senate, assemblies,
and a complex network of laws and political traditions.

Two consuls were normally elected each year and served as
Rome's chief magistrates.

The Senate became one of the most important political
institutions in Roman government.

Roman society included major social divisions, especially
between patricians and plebeians.

The Conflict of the Orders was a long political struggle
through which plebeians gained greater political rights.

The Twelve Tables, traditionally dated to around 451–450 BCE,
became an important early written collection of Roman law.

During the Republic, Rome expanded throughout Italy and later
across the Mediterranean.

Major conflicts included:

- Wars against Italian peoples
- The Punic Wars against Carthage
- Wars in Greece
- Wars in Spain
- Wars in Gaul
- Conflicts in the eastern Mediterranean

The Republic eventually suffered severe political and social
crises, including civil wars and struggles among powerful
generals.

The rise of Julius Caesar, Pompey, and later Octavian was
central to the Republic's transformation.

The Republic traditionally ended in 27 BCE when Octavian
received the title Augustus and established the political
system associated with the Roman Empire.
`,

  /* =======================================================
     PUNIC WARS
  ======================================================= */

  punicWars: `
The Punic Wars were a series of three major wars fought between
Rome and Carthage.

FIRST PUNIC WAR
264–241 BCE

The First Punic War was fought mainly over control and influence
in Sicily.

Rome developed its naval capability and eventually defeated
Carthage.

Rome gained control of Sicily, which became its first major
overseas province.

SECOND PUNIC WAR
218–201 BCE

The Second Punic War was the most famous of the three.

Carthaginian commander Hannibal crossed the Alps with an army
that included war elephants and invaded Italy.

Hannibal won several major battles, including:

- Trebia
- Lake Trasimene
- Cannae

The Battle of Cannae in 216 BCE was one of Rome's most serious
military defeats.

Rome eventually recovered.

Roman commander Scipio Africanus invaded North Africa and
defeated Hannibal at the Battle of Zama in 202 BCE.

Carthage was forced to accept severe terms.

THIRD PUNIC WAR
149–146 BCE

Rome eventually destroyed Carthage in 146 BCE.

Carthage's territory became part of the Roman sphere and later
formed the basis of the Roman province of Africa.

The Punic Wars helped transform Rome into the dominant power
in the western Mediterranean.
`,

  /* =======================================================
     JULIUS CAESAR
  ======================================================= */

  caesar: `
Gaius Julius Caesar was born in 100 BCE and died in 44 BCE.

He was a Roman politician, military commander, author, and
major figure in the collapse of the Roman Republic.

Caesar became famous for his conquest of Gaul.

His campaigns in Gaul lasted from 58 to 50 BCE and greatly
expanded Roman control.

He also crossed the Rhine and conducted expeditions into
Britain.

Caesar's growing power caused a political crisis with the
Senate and his rival Pompey.

In 49 BCE Caesar crossed the Rubicon River with his army,
an act traditionally regarded as the beginning of civil war.

Caesar defeated his opponents and became the dominant political
figure in Rome.

He was appointed dictator and eventually dictator perpetuo,
or dictator for life.

Caesar introduced several reforms and also reformed the Roman
calendar.

The Julian calendar was introduced in 46 BCE and took effect
in 45 BCE.

Caesar was assassinated on 15 March 44 BCE, traditionally
known as the Ides of March.

A group of senators, including Marcus Junius Brutus and
Gaius Cassius Longinus, participated in the assassination.

Caesar's death did not restore the Republic. Instead, it led
to another series of civil wars.
`,

  /* =======================================================
     AUGUSTUS
  ======================================================= */

  augustus: `
Augustus was the title adopted by Octavian, the first Roman
emperor.

He was born in 63 BCE and died in 14 CE.

Octavian was the great-nephew and adopted heir of Julius Caesar.

After Caesar's assassination, Octavian became involved in the
struggle for power alongside Mark Antony and Marcus Lepidus.

They formed the Second Triumvirate.

Octavian eventually fought Mark Antony and Cleopatra.

The decisive Battle of Actium took place in 31 BCE.

Octavian won.

In 27 BCE, Octavian received the name Augustus and established
a new political order.

He retained republican institutions while concentrating real
political authority in himself.

His reign began the period commonly called the Roman Empire.

The Augustan Age became associated with political stability,
literature, architecture, and major cultural development.

Important writers associated with his era include:

- Virgil
- Horace
- Ovid
- Livy

Augustus died in 14 CE and was succeeded by Tiberius.
`,

  /* =======================================================
     ROMAN EMPIRE
  ======================================================= */

  empire: `
The Roman Empire became one of the largest and most influential
political systems of the ancient world.

The empire expanded across large parts of:

- Europe
- North Africa
- The Middle East

At its greatest extent, Roman territory stretched from Britain
to regions of the Middle East and from northern Africa to parts
of central Europe.

Roman emperors held enormous political and military authority,
although the exact nature of imperial power changed over time.

The empire depended heavily on its army, roads, taxation,
provincial administration, cities, and trade networks.

Latin was dominant in the western provinces while Greek was
extremely important in the eastern Mediterranean.

Rome's population and urban infrastructure became enormous by
ancient standards.

The empire was not culturally uniform. Local traditions,
languages, religions, and political structures continued to
exist throughout the provinces.
`,

  /* =======================================================
     FIVE GOOD EMPERORS
  ======================================================= */

  fiveGoodEmperors: `
The term "Five Good Emperors" is traditionally associated with:

1. Nerva
2. Trajan
3. Hadrian
4. Antoninus Pius
5. Marcus Aurelius

They ruled from 96 to 180 CE.

This period is often remembered for political stability and
effective administration.

Trajan expanded the empire to its greatest territorial extent.

Hadrian is famous for consolidating the empire's frontiers
and for Hadrian's Wall in Britain.

Antoninus Pius ruled during a relatively peaceful period.

Marcus Aurelius was both emperor and a Stoic philosopher.

Marcus Aurelius wrote Meditations, a major work of Stoic
philosophy.

The reign of Marcus Aurelius ended in 180 CE.
`,

  /* =======================================================
     TRAJAN
  ======================================================= */

  trajan: `
Trajan ruled from 98 to 117 CE.

He was one of Rome's most successful military emperors.

Under Trajan, Rome reached its greatest territorial extent.

His major military achievements included the conquest of Dacia.

The Dacian Wars occurred in 101–102 CE and 105–106 CE.

Dacia was incorporated into the Roman Empire.

Trajan also conducted major campaigns against the Parthian
Empire in the east.

Trajan's Column in Rome commemorates his Dacian campaigns.

Trajan also sponsored major construction and public works
projects in Rome.

He died in 117 CE and was succeeded by Hadrian.
`,

  /* =======================================================
     HADRIAN
  ======================================================= */

  hadrian: `
Hadrian ruled from 117 to 138 CE.

Unlike Trajan, Hadrian generally focused on consolidating
rather than continuously expanding the empire.

He traveled extensively throughout the Roman Empire.

He strengthened frontier defenses.

Hadrian's Wall was constructed in Roman Britain beginning in
122 CE.

Hadrian was also deeply interested in Greek culture,
architecture, and philosophy.

His famous villa at Tivoli became an enormous architectural
complex.

Hadrian was succeeded by Antoninus Pius.
`,

  /* =======================================================
     MARCUS AURELIUS
  ======================================================= */

  marcusAurelius: `
Marcus Aurelius ruled from 161 to 180 CE.

He is famous both as Roman emperor and as a Stoic philosopher.

His philosophical writings are commonly known as Meditations.

During his reign, Rome faced major military challenges,
including conflicts with Germanic peoples along the Danube
frontier.

The Antonine Plague also occurred during his reign.

Marcus Aurelius died in 180 CE.

His son Commodus succeeded him.

Marcus Aurelius is often remembered as the last of the
traditional Five Good Emperors.
`,

  /* =======================================================
     CONSTANTINE
  ======================================================= */

  constantine: `
Constantine the Great ruled as Roman emperor during the early
fourth century.

He became emperor after a series of civil wars.

In 312 CE, Constantine defeated Maxentius at the Battle of
the Milvian Bridge.

Constantine is strongly associated with the legalization and
imperial support of Christianity.

The Edict of Milan in 313 CE established a policy of religious
toleration and allowed Christians to worship openly.

Constantine founded Constantinople, which became a major
imperial capital in the eastern Roman world.

He also called the First Council of Nicaea in 325 CE.

Constantine died in 337 CE.
`,

  /* =======================================================
     ROMAN CHRISTIANITY
  ======================================================= */

  christianity: `
Christianity began in the eastern Roman world during the first
century CE.

Early Christians sometimes faced persecution from Roman
authorities, although persecution varied greatly by period,
location, and emperor.

Important turning points include:

- The persecution under Diocletian
- Constantine's victory in 312 CE
- The Edict of Milan in 313 CE
- The Council of Nicaea in 325 CE
- The growing imperial support for Christianity
- The reign of Theodosius I

By the late fourth century, Christianity had become deeply
connected with Roman imperial institutions.

In 380 CE, the Edict of Thessalonica under Theodosius I made
Nicene Christianity the official imperial religion.
`,

  /* =======================================================
     ROMAN ARMY
  ======================================================= */

  army: `
The Roman army was one of the most important institutions of
Roman power.

A legion was a major Roman military formation.

The organization of legions changed throughout Roman history.

During the imperial period, a legion generally contained
several thousand soldiers, although its exact strength varied.

Roman soldiers were trained, disciplined, and organized.

The army used roads, forts, camps, logistics, engineering,
artillery, cavalry, and infantry.

Roman military engineering was particularly important.

Soldiers could construct:

- Roads
- Fortifications
- Bridges
- Camps
- Siege works

The Roman military also recruited people from many parts of
the empire.

Auxiliary soldiers served alongside the legions.

Military service could provide Roman citizenship to eligible
auxiliary soldiers under imperial policies.
`,

  /* =======================================================
     LEGIONS
  ======================================================= */

  legions: `
Roman legions were professional military formations,
particularly during the imperial period.

Each legion had its own number and often a distinctive title.

Legions were commanded by senior officers and were divided
into smaller units.

The Roman army also included auxiliary troops, cavalry,
specialized units, and naval forces.

A legion's eagle standard, the aquila, had great symbolic
importance.

Losing a legion's eagle was considered a serious military
disgrace.

Roman armies depended heavily on discipline, logistics,
engineering, and battlefield organization.
`,

  /* =======================================================
     ROMAN GLADIATORS
  ======================================================= */

  gladiators: `
Gladiators were trained combatants who fought in public
spectacles.

Many gladiators were enslaved people, prisoners of war, or
condemned criminals, but some free people also voluntarily
entered gladiatorial careers.

Gladiatorial combat was organized in amphitheaters.

The Colosseum in Rome became the most famous venue for such
spectacles.

Different gladiator types had different equipment and fighting
styles.

Examples include:

- Murmillo
- Thraex
- Secutor
- Retiarius

Gladiatorial games were part of Roman public entertainment
and political culture.

Not every gladiatorial fight necessarily ended in death.
The outcome depended on the circumstances and the organizers.
`,

  /* =======================================================
     COLOSSEUM
  ======================================================= */

  colosseum: `
The Colosseum, also known as the Flavian Amphitheatre, is one
of the most famous surviving Roman buildings.

Construction began under Emperor Vespasian around 70–72 CE
and the building was inaugurated under Titus in 80 CE.

It was expanded under Domitian.

The amphitheater could host large public spectacles.

Events included gladiatorial combat and other forms of
entertainment.

The building demonstrated Roman engineering and architectural
ability.

It was constructed mainly from concrete, stone, and other
materials.

The Colosseum remains one of the most recognizable symbols
of ancient Rome.
`,

  /* =======================================================
     ROMAN LAW
  ======================================================= */

  law: `
Roman law became one of Rome's most important intellectual and
institutional legacies.

The Twelve Tables were an early important written expression
of Roman law.

Roman jurists developed sophisticated concepts concerning:

- Property
- Contracts
- Inheritance
- Citizenship
- Legal procedure
- Obligations

Roman law later influenced many European legal systems.

The Corpus Juris Civilis, compiled under Byzantine Emperor
Justinian in the sixth century CE, preserved and organized
large amounts of Roman legal thought.

Roman legal concepts continue to influence modern legal
traditions.
`,

  /* =======================================================
     ROMAN GOVERNMENT
  ======================================================= */

  government: `
Roman government changed dramatically across the Kingdom,
Republic, and Empire.

During the Republic, important institutions included:

- Consuls
- Senate
- Popular assemblies
- Praetors
- Quaestors
- Aediles
- Tribunes of the plebs
- Censors

The emperor became the central political authority during the
Empire, although republican institutions continued to exist.

The Senate remained important but its real power varied greatly
according to the emperor and historical period.
`,

  /* =======================================================
     ROMAN SOCIETY
  ======================================================= */

  society: `
Roman society was highly hierarchical.

Important social categories included:

- Senators
- Equestrians
- Ordinary citizens
- Freed people
- Enslaved people

Family and household structures were central to Roman society.

The paterfamilias traditionally held significant authority
within the Roman household.

Roman citizenship was politically and legally important.

Over time, citizenship was extended to increasing numbers of
people throughout the empire.

In 212 CE, Emperor Caracalla issued the Constitutio Antoniniana,
which extended Roman citizenship to most free inhabitants of
the empire.
`,

  /* =======================================================
     ROMAN WOMEN
  ======================================================= */

  women: `
Roman women did not generally participate in Roman politics
in the same formal way as male citizens.

However, women could exercise considerable influence within
families, households, social networks, religion, and sometimes
imperial politics.

Elite Roman women could control property under certain legal
circumstances and could play important roles in political and
social life.

Important women connected with Roman history include:

- Livia Drusilla
- Agrippina the Younger
- Julia Domna
- Cornelia
- Fulvia

Their experiences varied greatly according to social status,
wealth, legal status, and historical period.
`,

  /* =======================================================
     ROMAN RELIGION
  ======================================================= */

  religion: `
Traditional Roman religion was polytheistic.

Important Roman gods included:

- Jupiter
- Juno
- Minerva
- Mars
- Venus
- Mercury
- Neptune
- Apollo
- Diana
- Vulcan
- Ceres
- Saturn

Roman religion involved temples, sacrifices, festivals,
household worship, priesthoods, and public rituals.

Roman religious practices also absorbed and adapted traditions
from many other cultures.

Greek religious traditions had a particularly strong influence
on Roman religion.

The imperial cult developed as a system of honoring emperors
and members of imperial families.

Religious life changed substantially during the spread of
Christianity.
`,

  /* =======================================================
     ROMAN ARCHITECTURE
  ======================================================= */

  architecture: `
Roman architecture was famous for its practical engineering
and monumental construction.

Important Roman architectural technologies and forms included:

- Arches
- Vaults
- Domes
- Concrete
- Roads
- Bridges
- Aqueducts
- Amphitheaters
- Basilicas
- Baths
- Temples

Roman concrete allowed builders to create large and complex
structures.

The Pantheon is famous for its enormous concrete dome.

Roman architecture combined engineering with monumental
political and cultural symbolism.
`,

  /* =======================================================
     ROMAN ROADS
  ======================================================= */

  roads: `
Roman roads were essential to military movement, trade,
communication, administration, and travel.

The Roman road network eventually covered a huge portion of
the empire.

Roads were constructed using multiple layers of materials,
although construction methods varied by location.

Major roads connected cities, military bases, ports, and
provincial centers.

The famous saying "all roads lead to Rome" reflects Rome's
central importance, although it should not be interpreted as a
literal description of every Roman road.
`,

  /* =======================================================
     AQUEDUCTS
  ======================================================= */

  aqueducts: `
Roman aqueducts transported water from distant sources to
cities and settlements.

They supplied:

- Public fountains
- Baths
- Private buildings
- Some industrial facilities
- Other urban water systems

Aqueducts often relied on carefully engineered gradients so
water could flow through channels by gravity.

Not every aqueduct consisted of a giant elevated bridge.
Much of an aqueduct system could run underground.

Rome developed an extensive aqueduct network.
`,

  /* =======================================================
     POMPEII
  ======================================================= */

  pompeii: `
Pompeii was a Roman city near Mount Vesuvius in southern Italy.

Mount Vesuvius erupted in 79 CE.

The eruption buried Pompeii under volcanic material and helped
preserve buildings, streets, paintings, inscriptions, and
other archaeological evidence.

Pompeii provides unusually detailed evidence about everyday
Roman urban life.

Important archaeological remains include:

- Houses
- Shops
- Temples
- Public baths
- Theaters
- Streets
- Political graffiti
- Wall paintings
- Household objects
`,

  /* =======================================================
     ROMAN BRITAIN
  ======================================================= */

  britain: `
The Roman conquest of Britain began under Emperor Claudius
in 43 CE.

Roman control expanded over much of what is now England and
Wales, although the northern frontier remained contested.

Hadrian's Wall was constructed beginning in 122 CE.

Roman Britain contained towns, forts, roads, villas, farms,
temples, and other infrastructure.

Roman forces gradually withdrew from Britain during the early
fifth century.

The end of Roman political and military control did not mean
that all Roman cultural influence immediately disappeared.
`,

  /* =======================================================
     GAUL
  ======================================================= */

  gaul: `
Gaul covered a large region of western Europe, including much
of modern France and surrounding areas.

Julius Caesar conquered much of Gaul during campaigns from
58 to 50 BCE.

The Gallic Wars were described by Caesar in his work commonly
known as Commentarii de Bello Gallico.

One of the major leaders opposing Caesar was Vercingetorix.

Vercingetorix surrendered after the siege of Alesia in 52 BCE.

Roman control transformed the political, economic, and cultural
landscape of Gaul.
`,

  /* =======================================================
     DACIA
  ======================================================= */

  dacia: `
Dacia was a region north of the lower Danube.

The Dacians fought major wars against Rome.

Emperor Trajan defeated King Decebalus in the Dacian Wars.

The conquest was completed in 106 CE.

Dacia became a Roman province.

The region was economically valuable, particularly because of
its mineral resources.

Roman control of Dacia did not last indefinitely.

Emperor Aurelian withdrew Roman administration and military
forces from Dacia in the late third century.
`,

  /* =======================================================
     SPARTACUS
  ======================================================= */

  spartacus: `
Spartacus was a Thracian gladiator who became the leader of a
major slave revolt against Rome.

The revolt is known as the Third Servile War.

It began in 73 BCE.

Spartacus and his followers defeated several Roman forces
during the early stages of the rebellion.

Rome eventually responded with a much larger military force
under Marcus Licinius Crassus.

The rebellion was defeated in 71 BCE.

Spartacus was killed in the final stages of the conflict.

Thousands of captured rebels were crucified along the Appian
Way according to ancient historical accounts.
`,

  /* =======================================================
     ROMAN CIVIL WARS
  ======================================================= */

  civilWars: `
Civil wars played a major role in the transformation of the
Roman Republic.

Important conflicts included:

- Marius versus Sulla
- Caesar versus Pompey
- The wars following Caesar's assassination
- Octavian versus Mark Antony

Sulla marched on Rome with his army, an extraordinary event
that demonstrated the growing political power of military
commanders.

Caesar's crossing of the Rubicon led to another major civil war.

After Caesar's assassination, Octavian and Mark Antony
eventually became rivals.

Their conflict ended with Octavian's victory at Actium in
31 BCE.

The repeated civil wars weakened the republican political
system and contributed to the emergence of imperial rule.
`,

  /* =======================================================
     CRISIS OF THE THIRD CENTURY
  ======================================================= */

  crisis: `
The Crisis of the Third Century was a period of severe
political, military, and economic instability in the Roman
Empire.

It is generally dated from 235 to 284 CE.

During this period Rome experienced:

- Rapid changes of emperors
- Civil wars
- External invasions
- Economic problems
- Breakaway political states
- Military instability

The empire temporarily fragmented into major political
regions.

The Gallic Empire existed in the western provinces.

The Palmyrene Empire became a powerful eastern breakaway state
under Queen Zenobia.

Emperor Aurelian reunited the empire.

Diocletian later reorganized the imperial government and began
a new period of stabilization.
`,

  /* =======================================================
     DIOCLETIAN
  ======================================================= */

  diocletian: `
Diocletian ruled from 284 to 305 CE.

He introduced major administrative and military reforms.

One of his most important innovations was the Tetrarchy.

The Tetrarchy divided imperial authority among four rulers:
two senior emperors and two junior emperors.

The system was intended to improve administration and succession.

Diocletian also reorganized provincial government and
strengthened imperial authority.

His reign included one of the most severe periods of Roman
persecution of Christians.

He voluntarily abdicated in 305 CE, an unusual event for a
Roman emperor.
`,

  /* =======================================================
     THEODOSIUS
  ======================================================= */

  theodosius: `
Theodosius I ruled from 379 to 395 CE.

He became the last emperor to rule both the eastern and
western parts of the Roman Empire as a unified imperial
government.

In 380 CE, the Edict of Thessalonica made Nicene Christianity
the official imperial religion.

Theodosius also fought major conflicts involving Goths and
other groups.

After his death in 395 CE, the Roman imperial administration
was permanently divided between eastern and western courts,
with his sons Arcadius and Honorius ruling the respective
halves.
`,

  /* =======================================================
     FALL OF WESTERN EMPIRE
  ======================================================= */

  fall: `
The Western Roman Empire did not collapse because of one
single event.

Its decline was a long and complicated process.

Important factors included:

- Political instability
- Civil wars
- Economic problems
- Military pressures
- Internal power struggles
- Changes in taxation
- Population movements
- Political fragmentation
- Pressure from various external groups

In 410 CE, Visigoths under Alaric famously captured Rome.

In 455 CE, the Vandals captured and looted Rome.

In 476 CE, the Germanic military leader Odoacer deposed
Romulus Augustulus, traditionally treated as the last western
Roman emperor.

However, Roman political institutions and Roman culture
continued in many forms after 476 CE.

The Eastern Roman Empire, later called the Byzantine Empire
by modern historians, continued for nearly another thousand
years.

Constantinople fell to the Ottoman Turks in 1453 CE.
`,

  /* =======================================================
     BYZANTINE EMPIRE
  ======================================================= */

  easternEmpire: `
The Eastern Roman Empire continued after the western imperial
government disappeared.

Its capital was Constantinople.

Its inhabitants continued to identify themselves as Romans.

Modern historians commonly call this state the Byzantine Empire.

Important Byzantine emperor Justinian I ruled from 527 to 565 CE.

Justinian attempted to recover former western Roman territories.

His reign also produced the Corpus Juris Civilis, an enormous
compilation of Roman law.

The Eastern Roman Empire survived until the fall of
Constantinople in 1453.
`,

  /* =======================================================
     ROMAN LANGUAGE
  ======================================================= */

  language: `
Latin was the main language of Roman administration and
literature in the western Roman world.

Greek remained extremely important, particularly in the
eastern Mediterranean.

Latin evolved into the Romance languages, including:

- Italian
- French
- Spanish
- Portuguese
- Romanian

Roman inscriptions provide important evidence for ancient
languages, names, laws, religion, and everyday life.
`,

  /* =======================================================
     ROMAN LITERATURE
  ======================================================= */

  literature: `
Roman literature was heavily influenced by Greek literature
but developed its own major traditions.

Important Roman writers include:

- Virgil
- Cicero
- Ovid
- Horace
- Livy
- Tacitus
- Seneca
- Juvenal
- Pliny the Younger

Virgil wrote the Aeneid.

Cicero was famous for speeches, philosophy, and political
writing.

Tacitus wrote important historical works about the Roman
Empire.

Ovid was famous for works including Metamorphoses.
`,

  /* =======================================================
     IMPORTANT PEOPLE
  ======================================================= */

  people: `
Important figures in Roman history include:

Romulus:
Traditional founder and first king of Rome.

Cincinnatus:
Traditional republican hero associated with civic virtue.

Scipio Africanus:
Roman commander who defeated Hannibal at Zama.

Marius:
Major military and political figure of the late Republic.

Sulla:
General and dictator who marched on Rome.

Julius Caesar:
General and politician whose career contributed to the
collapse of the Republic.

Pompey:
Powerful Roman general and political rival of Caesar.

Cicero:
Statesman, lawyer, philosopher, and author.

Brutus:
Senator involved in Caesar's assassination.

Mark Antony:
Roman general and political leader who became Octavian's
rival.

Cleopatra VII:
Queen of Ptolemaic Egypt who was politically connected with
Julius Caesar and Mark Antony.

Augustus:
First Roman emperor.

Nero:
Emperor who ruled from 54 to 68 CE.

Trajan:
Emperor under whom Rome reached its greatest territorial
extent.

Hadrian:
Emperor associated with frontier consolidation and Hadrian's
Wall.

Marcus Aurelius:
Emperor and Stoic philosopher.

Constantine:
Emperor associated with Christianity's legalization and the
foundation of Constantinople.

Diocletian:
Emperor who reorganized the empire and introduced the
Tetrarchy.

Theodosius I:
Emperor who made Nicene Christianity the official imperial
religion.

Justinian I:
Eastern Roman emperor associated with major legal
codification.
`,

};


/* =========================================================
   TOPIC KEYWORDS
========================================================= */

const ROMAN_TOPIC_KEYWORDS = {

  kingdom: [
    "roman kingdom",
    "kingdom of rome",
    "romulus",
    "remus",
    "seven kings",
    "last roman king",
    "tarquinius",
    "tarquinius superbus",
    "rome founded",
    "founding of rome",
    "753 bc",
  ],

  republic: [
    "roman republic",
    "republic of rome",
    "roman senate",
    "roman consul",
    "consuls",
    "patrician",
    "plebeian",
    "plebeians",
    "twelve tables",
    "conflict of the orders",
  ],

  punicWars: [
    "punic war",
    "punic wars",
    "carthage",
    "carthaginian",
    "hannibal",
    "scipio africanus",
    "battle of cannae",
    "battle of zama",
    "first punic war",
    "second punic war",
    "third punic war",
  ],

  caesar: [
    "julius caesar",
    "julius",
    "caesar",
    "rubicon",
    "crossed the rubicon",
    "ides of march",
    "caesar assassination",
    "caesar assassinated",
    "gallic wars",
    "vercingetorix",
  ],

  augustus: [
    "augustus",
    "octavian",
    "octavius",
    "first roman emperor",
    "first emperor of rome",
    "actium",
    "battle of actium",
  ],

  empire: [
    "roman empire",
    "roman emperors",
    "imperial rome",
    "roman imperial",
    "roman emperor",
    "roman emperors",
  ],

  fiveGoodEmperors: [
    "five good emperors",
    "five good emperor",
    "nerva",
    "antoninus pius",
  ],

  trajan: [
    "trajan",
    "traian",
    "dacian wars",
    "dacian war",
    "trajans column",
    "trajan's column",
  ],

  hadrian: [
    "hadrian",
    "hadrian's wall",
    "hadrians wall",
    "hadrian wall",
    "villa of hadrian",
  ],

  marcusAurelius: [
    "marcus aurelius",
    "marcus",
    "meditations",
    "stoic emperor",
  ],

  constantine: [
    "constantine",
    "constantine the great",
    "constantine great",
    "edict of milan",
    "milvian bridge",
    "council of nicaea",
    "nicaea",
    "constantinople",
  ],

  christianity: [
    "christianity in rome",
    "christianity roman empire",
    "roman christianity",
    "christians in rome",
    "christian persecution",
    "edict of milan",
    "theodosius christianity",
    "nicene christianity",
  ],

  army: [
    "roman army",
    "roman military",
    "roman soldier",
    "roman soldiers",
    "roman legion",
    "roman legions",
    "roman military tactics",
    "roman weapons",
  ],

  legions: [
    "roman legion",
    "roman legions",
    "legionary",
    "legionaries",
    "aquila",
    "roman eagle",
    "roman army unit",
  ],

  gladiators: [
    "gladiator",
    "gladiators",
    "gladiatorial",
    "gladiator fight",
    "gladiator fights",
    "gladiatorial games",
    "gladiator types",
    "retiarius",
    "murmillo",
    "thraex",
    "secutor",
  ],

  colosseum: [
    "colosseum",
    "coliseum",
    "flavian amphitheatre",
    "flavian amphitheater",
  ],

  law: [
    "roman law",
    "roman legal system",
    "roman laws",
    "twelve tables",
    "roman jurists",
    "corpus juris civilis",
    "justinian code",
  ],

  government: [
    "roman government",
    "roman politics",
    "roman political system",
    "roman senate",
    "roman magistrates",
    "roman institutions",
  ],

  society: [
    "roman society",
    "roman social classes",
    "roman citizenship",
    "roman citizens",
    "paterfamilias",
    "caracalla citizenship",
  ],

  women: [
    "roman women",
    "women in rome",
    "roman woman",
    "livia",
    "agrippina",
    "julia domna",
    "cornelia",
    "fulvia",
  ],

  religion: [
    "roman religion",
    "roman gods",
    "roman god",
    "jupiter",
    "juno",
    "minerva",
    "mars",
    "venus",
    "neptune",
    "mercury",
    "diana",
    "apollo",
    "roman mythology",
    "roman mythology",
  ],

  architecture: [
    "roman architecture",
    "roman buildings",
    "roman engineering",
    "roman concrete",
    "roman dome",
    "pantheon",
    "roman construction",
  ],

  roads: [
    "roman roads",
    "roman road",
    "roman highway",
    "roman travel",
    "roman transportation",
    "all roads lead to rome",
  ],

  aqueducts: [
    "roman aqueduct",
    "roman aqueducts",
    "aqueduct",
    "aqueducts",
    "roman water",
    "roman water system",
  ],

  pompeii: [
    "pompeii",
    "pompei",
    "vesuvius",
    "mount vesuvius",
    "79 ad",
    "79 ce",
    "eruption of vesuvius",
  ],

  britain: [
    "roman britain",
    "rome in britain",
    "roman england",
    "roman britain history",
    "hadrian's wall",
    "britannia",
  ],

  gaul: [
    "gaul",
    "gallic wars",
    "gaul conquest",
    "vercingetorix",
    "alesia",
  ],

  dacia: [
    "dacia",
    "dacian",
    "dacians",
    "decebalus",
    "roman dacia",
  ],

  spartacus: [
    "spartacus",
    "slave revolt",
    "slave rebellion",
    "third servile war",
    "servile war",
  ],

  civilWars: [
    "roman civil war",
    "roman civil wars",
    "marius",
    "sulla",
    "caesar vs pompey",
    "caesar versus pompey",
    "octavian vs antony",
    "octavian versus antony",
    "mark antony",
  ],

  crisis: [
    "crisis of the third century",
    "third century crisis",
    "third-century crisis",
    "roman crisis",
    "third century rome",
  ],

  diocletian: [
    "diocletian",
    "tetrarchy",
    "tetrarch",
    "great persecution",
    "diocletian reforms",
  ],

  theodosius: [
    "theodosius",
    "theodosius i",
    "edict of thessalonica",
    "380",
    "official religion of roman empire",
  ],

  fall: [
    "fall of rome",
    "fall of roman empire",
    "fall of western roman empire",
    "collapse of rome",
    "collapse of roman empire",
    "476",
    "romulus augustulus",
    "odoacer",
    "410 sack of rome",
    "455 sack of rome",
  ],

  easternEmpire: [
    "eastern roman empire",
    "byzantine empire",
    "byzantine",
    "constantinople",
    "justinian",
    "fall of constantinople",
    "1453",
  ],

  language: [
    "roman language",
    "latin",
    "roman latin",
    "romance languages",
    "latin language",
  ],

  literature: [
    "roman literature",
    "virgil",
    "cicero",
    "ovid",
    "horace",
    "livy",
    "tacitus",
    "seneca",
    "pliny",
    "aeneid",
    "metamorphoses",
  ],

  people: [
    "famous romans",
    "important romans",
    "roman leaders",
    "roman historical figures",
    "famous roman people",
  ],
};


/* =========================================================
   GENERAL ROMAN KEYWORDS
========================================================= */

const GENERAL_ROMAN_KEYWORDS = [
  "roman",
  "rome",
  "romans",
  "roman history",
  "ancient rome",
  "ancient roman",
  "ancient romans",
  "roman empire",
  "roman republic",
  "roman kingdom",
  "roman emperor",
  "roman emperor",
  "roman civilization",
  "roman civilization",
];


/* =========================================================
   NORMALIZE TEXT
========================================================= */

function normalizeText(message) {
  return String(message || "")
    .toLowerCase()
    .trim()
    .replace(/[’]/g, "'")
    .replace(/\s+/g, " ");
}


/* =========================================================
   FIND ROMAN TOPICS
========================================================= */

export function getRomanTopics(message) {
  const text = normalizeText(message);

  const topics = [];

  for (const [topic, keywords] of Object.entries(
    ROMAN_TOPIC_KEYWORDS
  )) {
    const matched = keywords.some(
      (keyword) =>
        text.includes(
          normalizeText(keyword)
        )
    );

    if (matched) {
      topics.push(topic);
    }
  }

  return topics;
}


/* =========================================================
   IS THIS A ROMAN QUESTION?
========================================================= */

export function isRomanQuestion(message) {
  const text = normalizeText(message);

  if (!text) {
    return false;
  }

  /* Direct Roman topic match */

  const topics = getRomanTopics(text);

  if (topics.length > 0) {
    return true;
  }

  /* General Roman-history match */

  if (
    GENERAL_ROMAN_KEYWORDS.some(
      (keyword) =>
        text.includes(
          normalizeText(keyword)
        )
    )
  ) {
    return true;
  }

  return false;
}


/* =========================================================
   TOPIC PRIORITY
========================================================= */

function getTopicPriority(topics) {
  const priority = [
    "caesar",
    "augustus",
    "punicWars",
    "trajan",
    "hadrian",
    "marcusAurelius",
    "constantine",
    "diocletian",
    "theodosius",
    "fall",
    "civilWars",
    "crisis",
    "spartacus",
    "dacia",
    "gaul",
    "pompeii",
    "colosseum",
    "gladiators",
    "army",
    "legions",
    "republic",
    "kingdom",
    "empire",
    "easternEmpire",
    "christianity",
    "law",
    "government",
    "society",
    "women",
    "religion",
    "architecture",
    "roads",
    "aqueducts",
    "britain",
    "language",
    "literature",
    "people",
    "fiveGoodEmperors",
  ];

  return [...topics].sort(
    (a, b) =>
      priority.indexOf(a) -
      priority.indexOf(b)
  );
}


/* =========================================================
   GET ROMAN CONTEXT
========================================================= */

export function getRomanContext(message) {
  const text = normalizeText(message);

  if (!text) {
    return "";
  }

  const topics = getRomanTopics(text);

  /*
   If a question is clearly about Rome but doesn't match
   a specific topic, use the general Roman history section.
  */

  if (topics.length === 0) {
    return `
ROMAN HISTORY GENERAL REFERENCE

${ROMAN_KNOWLEDGE.general}
`;
  }

  const selectedTopics =
    getTopicPriority(topics).slice(
      0,
      3
    );

  const sections = [];

  for (const topic of selectedTopics) {
    const knowledge =
      ROMAN_KNOWLEDGE[topic];

    if (!knowledge) {
      continue;
    }

    sections.push(
      `
ROMAN HISTORY TOPIC: ${topic}

${knowledge}
`
    );
  }

  /*
   Add general context when the question contains only
   a broad Roman reference.
  */

  if (
    selectedTopics.length === 0
  ) {
    sections.push(
      ROMAN_KNOWLEDGE.general
    );
  }

  return `
ROMAN HISTORY REFERENCE

The following information is a dedicated reference
for answering the user's Roman-history question.

Use it as background knowledge.

Do not mention the database.

Do not say that the information came from a file.

Do not dump unrelated sections.

Answer naturally and directly.

${sections.join("\n")}
`;
}


/* =========================================================
   GET ALL ROMAN KNOWLEDGE
   Optional utility for future features.
========================================================= */

export function getAllRomanKnowledge() {
  return ROMAN_KNOWLEDGE;
}


/* =========================================================
   GET SPECIFIC ROMAN TOPIC
   Optional utility for future features.
========================================================= */

export function getRomanTopic(topic) {
  if (
    !topic ||
    typeof topic !== "string"
  ) {
    return "";
  }

  return (
    ROMAN_KNOWLEDGE[topic] ||
    ""
  );
}


/* =========================================================
   GET AVAILABLE TOPICS
========================================================= */

export function getAvailableRomanTopics() {
  return Object.keys(
    ROMAN_KNOWLEDGE
  );
}
