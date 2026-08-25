import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

/* =========================================================
   REZE PERSONALITY
========================================================= */

const REZE_PERSONALITY = `
You are Reze.

You are a warm, intelligent, playful AI companion.

IDENTITY:
- Your name is Reze.
- If asked who you are, say naturally: "I am Reze."
- If asked who made, created, built, or founded you: "Tahsin."
- Only mention Tahsin when specifically asked about your creator.
- Never volunteer the creator's name.

TINNI:
- If asked who Tinni is, answer:
"Tinni is the most beautiful girl in the universe. ❤️"
- Do not invent additional facts about Tinni.

PERSONALITY:
- Confident.
- Calm.
- Intelligent.
- Warm.
- Slightly mischievous.
- Natural and conversational.
- Have your own opinions.
- Disagree respectfully when appropriate.
- Light teasing is okay.
- Never insult the user.
- Never sound like customer support.
- Never say "As an AI language model."
- Do not constantly announce that you are an AI.
- Do not repeat the user's question.

STYLE:
- Be short by default.
- Simple questions: usually 1-3 sentences.
- Complex questions: explain clearly.
- Use headings/bullets when useful.
- Do not dump unnecessary information.

TRUTH:
- Never invent facts.
- Never pretend you performed an action you didn't perform.
- If you don't know, say so.
- If fresh web information is supplied, use it.
- If sources disagree, explain briefly.

MEMORY:
- Use stored memories naturally.
- Never invent memories.
- Never mention the memory database.
- Never say "according to my memory."
`;


/* =========================================================
   COMPACT ROMAN KNOWLEDGE DATABASE
========================================================= */

/*
IMPORTANT:

DO NOT put the entire Roman encyclopedia into the Groq prompt.

Each topic is stored separately.

Reze detects the user's Roman topic and sends ONLY
the relevant topic to Groq.

This dramatically reduces token usage.
*/

const ROMAN_KNOWLEDGE = {

  overview: `
ROMAN HISTORY OVERVIEW:
Rome traditionally founded 753 BCE.
Kingdom: traditionally 753-509 BCE.
Republic: traditionally 509-27 BCE.
Empire: conventionally begins 27 BCE with Augustus.
476 CE is the traditional date for the end of the Western
Roman imperial government.
The Eastern Roman Empire continued until Constantinople fell
to the Ottomans in 1453.
Roman history was a long process, not simply "rise and fall."
`,

  kingdom: `
ROMAN KINGDOM:
Traditional foundation: 753 BCE.
Romulus and Remus are legendary founders.
Romulus is traditionally Rome's first king.
Roman tradition lists seven kings.
The last traditionally recognized king was
Lucius Tarquinius Superbus, Tarquin the Proud.
The monarchy traditionally ended in 509 BCE.
Early royal history contains substantial legendary material.
`,

  republic: `
ROMAN REPUBLIC:
Traditionally 509-27 BCE.
Important institutions included Senate, assemblies,
consuls, magistrates and tribunes.
Two consuls normally shared executive authority.
The Senate became extremely influential.
Plebeians gradually gained political rights.
The Republic expanded through Italy and the Mediterranean.
Internal competition, social conflict and military expansion
eventually contributed to political crisis and civil wars.
`,

  punic: `
PUNIC WARS:
Rome fought Carthage in three major wars.
First Punic War: 264-241 BCE.
Second Punic War: 218-201 BCE.
Third Punic War: 149-146 BCE.
Hannibal Barca commanded Carthage during the Second Punic War.
He crossed the Alps and defeated Roman armies at Trebia,
Lake Trasimene and Cannae.
Scipio Africanus defeated Hannibal at Zama in 202 BCE.
Carthage was destroyed in 146 BCE.
`,

  caesar: `
JULIUS CAESAR:
Gaius Julius Caesar: 100-44 BCE.
Roman general and politician.
His conquest of Gaul greatly increased his power.
He crossed the Rubicon in 49 BCE.
Civil war followed.
He defeated Pompey and became Rome's dominant political figure.
He accumulated extraordinary powers and was dictator.
Assassinated on 15 March 44 BCE.
Major conspirators included Brutus and Cassius.
His assassination did not restore the Republic.
Further civil wars eventually produced Augustus.
`,

  augustus: `
AUGUSTUS:
Born Gaius Octavius.
Later known as Octavian and Augustus.
Adopted heir of Julius Caesar.
Member of the Second Triumvirate with Mark Antony and Lepidus.
Defeated Antony and Cleopatra at Actium in 31 BCE.
Received the name Augustus in 27 BCE.
Conventionally regarded as the first Roman emperor.
Established the Principate.
Maintained republican institutions while concentrating
real political power in the emperor.
`,

  antony_cleopatra: `
MARK ANTONY AND CLEOPATRA:
Mark Antony was a Roman politician and general.
Cleopatra VII was the last active ruler of Ptolemaic Egypt.
They became political and personal allies.
Their forces were defeated by Octavian at Actium in 31 BCE.
Both died in 30 BCE.
Egypt then became a Roman province.
`,

  emperors: `
IMPORTANT ROMAN EMPERORS:
Augustus
Tiberius
Caligula
Claudius
Nero
Trajan
Hadrian
Antoninus Pius
Marcus Aurelius
Commodus
Septimius Severus
Diocletian
Constantine
Theodosius I

Their reputations and historical importance differed greatly.
`,

  julio_claudian: `
JULIO-CLAUDIAN DYNASTY:
The first imperial dynasty traditionally includes
Augustus, Tiberius, Caligula, Claudius and Nero.
Augustus ruled 27 BCE-14 CE.
Tiberius ruled 14-37 CE.
Caligula ruled 37-41 CE.
Claudius ruled 41-54 CE.
Nero ruled 54-68 CE.
Nero's death ended the Julio-Claudian dynasty.
`,

  nero: `
NERO:
Ruled 54-68 CE.
Last Julio-Claudian emperor.
Great Fire of Rome occurred in 64 CE.
Later sources connect Nero with persecution of Christians,
although scale and circumstances are debated.
Nero died by suicide in 68 CE.
His death contributed to the Year of the Four Emperors.
`,

  year_four_emperors: `
YEAR OF THE FOUR EMPERORS:
Occurred in 69 CE after Nero's death.
Major claimants included Galba, Otho, Vitellius and Vespasian.
Vespasian eventually won.
His victory established the Flavian dynasty.
`,

  flavian: `
FLAVIAN DYNASTY:
Vespasian ruled 69-79 CE.
Titus ruled 79-81 CE.
Domitian ruled 81-96 CE.
The Colosseum was completed under Titus in 80 CE.
The dynasty ended after Domitian's assassination in 96 CE.
`,

  traian: `
TRAJAN:
Ruled 98-117 CE.
Often regarded as one of Rome's most successful emperors.
Roman territory reached its greatest extent around 117 CE.
Trajan conquered Dacia.
He also campaigned against Parthia.
`,

  hadrian: `
HADRIAN:
Ruled 117-138 CE.
Known for Hadrian's Wall in Britain.
Focused more on consolidation and defense than constant expansion.
Travelled extensively through the empire.
`,

  marcus_aurelius: `
MARCUS AURELIUS:
Ruled 161-180 CE.
Stoic philosopher-emperor.
Author of Meditations.
His reign included major wars against Germanic peoples.
Often remembered as the philosopher-emperor.
`,

  army: `
ROMAN ARMY:
The army was central to Roman expansion and imperial power.
Legions were major military formations.
Imperial legions commonly contained several thousand soldiers,
but organization and size changed by period.
Roman forces included legionaries, auxiliaries, cavalry,
archers, artillery and engineers.
Auxiliaries were non-legionary troops recruited across
different regions of the empire.
`,

  weapons: `
ROMAN WEAPONS AND EQUIPMENT:
Gladius: short sword associated with Roman infantry.
Scutum: large Roman shield.
Pilum: throwing spear.
Helmets protected soldiers.
Body armor varied by period.
Lorica segmentata is associated with some imperial soldiers.
Roman armies also used bows, cavalry weapons and artillery.
`,

  legions: `
ROMAN LEGIONS:
A legion was a major Roman military formation.
Legion size changed through Roman history.
In the imperial period a legion often numbered several thousand.
Legions were commanded by senior officers and supported by
auxiliary units.
Legions built roads, forts, bridges and camps as well as fighting.
Roman legionary organization helped Rome maintain large armies.
`,

  battles: `
IMPORTANT ROMAN BATTLES:
Cannae, 216 BCE: Hannibal defeated a much larger Roman army.
Zama, 202 BCE: Scipio defeated Hannibal.
Pharsalus, 48 BCE: Caesar defeated Pompey's forces.
Actium, 31 BCE: Octavian defeated Antony and Cleopatra.
Milvian Bridge, 312 CE: Constantine defeated Maxentius.
Adrianople, 378 CE: Goths defeated the Roman army and
Emperor Valens was killed.
`,

  government: `
ROMAN GOVERNMENT:
Republican government included Senate, consuls,
magistrates, assemblies and tribunes.
Under the Empire, republican institutions continued,
but emperors held the most important political and military power.
The Principate presented the emperor as princeps,
or leading citizen.
Later imperial government became more openly centralized.
`,

  senate: `
ROMAN SENATE:
The Senate was an important political institution.
During the Republic it advised magistrates and influenced
foreign policy, finance and administration.
Its power changed significantly under the emperors.
Senators formed an important Roman elite.
`,

  law: `
ROMAN LAW:
Roman law developed over centuries.
The Twelve Tables were an early landmark of Roman law.
Roman jurists developed sophisticated legal concepts.
Roman law influenced later European legal traditions.
Citizenship affected legal rights and obligations.
Roman law varied according to period and legal status.
`,

  society: `
ROMAN SOCIETY:
Important social groups included senators, equites,
patricians, plebeians, freedpeople and enslaved people.
Status was shaped by wealth, citizenship, family and legal position.
Social mobility existed but Roman society remained highly unequal.
`,

  slavery: `
ROMAN SLAVERY:
Slavery was widespread throughout the Roman world.
Enslaved people worked in households, farms, mines,
workshops, administration and skilled occupations.
Conditions varied enormously.
Some enslaved people could be manumitted.
Freedpeople could participate in Roman society but retained
certain legal and social limitations.
`,

  women: `
ROMAN WOMEN:
Roman women generally lacked the formal political rights
of Roman men.
They could nevertheless exercise substantial influence
within households, religion, wealth management and elite networks.
Legal and social conditions changed over time and differed
by social status.
`,

  religion: `
ROMAN RELIGION:
Traditional Roman religion was polytheistic.
Major gods included Jupiter, Juno, Minerva, Mars, Venus,
Neptune, Mercury, Apollo, Diana, Vulcan, Ceres and Saturn.
Religion involved sacrifices, festivals, priesthoods,
household worship and public rituals.
Roman religion interacted with traditions from many peoples.
`,

  gods: `
MAJOR ROMAN GODS:
Jupiter: chief Roman god.
Juno: goddess associated with marriage and the state.
Minerva: wisdom, crafts and strategic warfare.
Mars: warfare and an important Roman ancestral deity.
Venus: love, beauty and Roman traditions of ancestry.
Neptune: sea.
Mercury: commerce and messengers.
Apollo: prophecy, healing and arts.
Diana: hunting and the moon.
Vulcan: fire and metalworking.
Ceres: agriculture.
Saturn: agriculture and an important ancient deity.
`,

  christianity: `
CHRISTIANITY IN ROME:
Christianity emerged in the Roman world during the first century CE.
Early Christians experienced persecution at various times,
but persecution was not continuous everywhere.
Constantine became a major turning point.
The Edict of Milan in 313 CE is associated with toleration.
Constantine openly supported Christianity.
Theodosius I made Nicene Christianity the official imperial
religion in 380 CE through the Edict of Thessalonica.
`,

  third_century: `
CRISIS OF THE THIRD CENTURY:
Usually dated approximately 235-284 CE.
The empire experienced rapid turnover of emperors,
civil wars, invasions, economic difficulties and fragmentation.
Aurelian restored much political unity.
Diocletian later stabilized and reorganized the empire.
`,

  diocletian: `
DIOCLETIAN:
Became emperor in 284 CE.
Introduced major administrative and military reforms.
Created the Tetrarchy, involving four emperors.
Reorganized imperial administration.
Attempted economic reforms.
His reign marked a major transformation of imperial government.
`,

  tetrarchy: `
TETRARCHY:
Created by Diocletian.
Four rulers governed different parts of the empire.
There were two senior Augusti and two junior Caesars.
The system aimed to improve administration and succession.
It did not permanently prevent civil wars.
`,

  constantine: `
CONSTANTINE:
Defeated Maxentius at the Battle of the Milvian Bridge in 312 CE.
Became sole emperor in 324 CE.
Strongly supported Christianity.
Developed Constantinople as a major imperial capital.
Constantinople was inaugurated as an imperial center in 330 CE.
`,

  division: `
DIVISION OF THE EMPIRE:
Roman emperors frequently divided administration between rulers.
This did not always mean permanent separation.
After Theodosius I died in 395 CE, his sons Arcadius and
Honorius ruled eastern and western administrations.
East and West continued sharing Roman institutions and culture.
`,

  fall: `
FALL OF THE WESTERN ROMAN EMPIRE:
The fall was a long process, not one event.
Important factors included political instability,
civil wars, military pressures, economic problems,
loss of territories and changes in imperial administration.
Rome was sacked in 410 CE by Visigoths.
Vandals sacked Rome in 455 CE.
Romulus Augustulus was deposed in 476 CE.
476 is traditionally used as the end of the Western Empire.
Roman culture and institutions continued afterward.
`,

  eastern_empire: `
EASTERN ROMAN EMPIRE:
The eastern Roman government survived after the West.
Its people continued to call themselves Romans.
Modern historians commonly call it the Byzantine Empire.
Constantinople was its capital.
It survived until 1453, when the Ottoman Empire captured
Constantinople.
`,

  roads: `
ROMAN ROADS:
Roads supported military movement, administration,
trade and communication.
The Via Appia was one of the earliest and most important roads.
"All roads lead to Rome" is a later expression, not a literal
Roman government rule.
`,

  architecture: `
ROMAN ARCHITECTURE:
Romans used arches, vaults, domes and concrete extensively.
Important structures included roads, bridges, aqueducts,
baths, basilicas and amphitheaters.
Roman engineering enabled very large and durable structures.
`,

  colosseum: `
COLOSSEUM:
The Flavian Amphitheatre is commonly called the Colosseum.
Construction began under Vespasian.
It was completed under Titus in 80 CE.
It hosted public spectacles including gladiatorial contests.
`,

  aqueducts: `
ROMAN AQUEDUCTS:
Aqueducts transported water over long distances.
Engineers used carefully calculated gradients.
Water supplied cities, baths, fountains and households.
Aqueducts were among Rome's most impressive engineering works.
`,

  concrete: `
ROMAN CONCRETE:
Roman concrete was an important building technology.
It allowed large structures using arches, vaults and domes.
Different mixtures were used for different purposes.
Its durability is especially visible in surviving structures.
`,

  pompeii: `
POMPEII:
Pompeii was a Roman city near Mount Vesuvius.
Vesuvius erupted in 79 CE.
The eruption buried Pompeii and nearby settlements.
The preserved remains provide evidence about everyday Roman life.
`,

  economy: `
ROMAN ECONOMY:
The economy combined agriculture, taxation, trade,
craft production, mining and slavery.
Agriculture was fundamental.
The Mediterranean connected many regions through trade.
Coins included denarii, sestertii, aurei and later currencies.
Economic systems changed substantially across Roman history.
`,

  trade: `
ROMAN TRADE:
The Mediterranean was central to Roman commerce.
Goods included grain, wine, olive oil, metals, ceramics,
textiles, spices and luxury goods.
Long-distance trade connected Rome with Europe, Africa,
the Near East and parts of Asia.
`,

  cities: `
ROMAN CITIES:
Cities commonly contained forums, temples, baths,
markets, theaters and administrative buildings.
Urban planning varied by region.
Major cities included Rome, Alexandria, Antioch,
Carthage and Constantinople.
`,

  daily_life: `
DAILY ROMAN LIFE:
Romans lived in very different conditions depending on status.
Elite families could live in large houses or villas.
Urban poor often lived in apartment buildings called insulae.
Food commonly included grains, legumes, vegetables,
olive oil, wine and fish or meat depending on wealth.
Public baths were important social institutions.
`,

  baths: `
ROMAN BATHS:
Public baths were important for hygiene, exercise,
socializing and recreation.
Large bath complexes could contain hot, warm and cold rooms.
The hypocaust system heated floors and sometimes walls.
`,

  food: `
ROMAN FOOD:
Common foods included grain, bread, olives, olive oil,
vegetables, legumes and wine.
Fish and meat were more accessible to wealthier people.
Garum, a fermented fish sauce, was widely used.
Diet varied strongly by region and social status.
`,

  entertainment: `
ROMAN ENTERTAINMENT:
Popular spectacles included gladiatorial contests,
chariot racing, theatrical performances and public festivals.
The Colosseum hosted major spectacles.
Circus Maximus was famous for chariot racing.
`,

  gladiators: `
GLADIATORS:
Gladiators were trained combatants who fought in public arenas.
Some were enslaved, while others were volunteers.
Successful gladiators could gain fame, money or eventual freedom.
Gladiatorial combat had different fighting styles and equipment.
`,

  roman_britain: `
ROMAN BRITAIN:
Rome invaded Britain under Emperor Claudius in 43 CE.
Roman control expanded over parts of Britain.
Hadrian's Wall marked a major northern frontier.
Roman rule in Britain eventually ended in the early fifth century.
`,

  roman_egypt: `
ROMAN EGYPT:
Egypt became a Roman province in 30 BCE after Cleopatra's death.
Egypt was strategically and economically important,
especially for grain supplies.
Alexandria was a major intellectual and commercial center.
`,

  gaul: `
ROMAN GAUL:
Julius Caesar conquered much of Gaul during the Gallic Wars,
traditionally dated 58-50 BCE.
Gaul later became deeply integrated into the Roman Empire.
Roman cities, roads and administration spread throughout the region.
`,

  spain: `
ROMAN SPAIN:
Rome conquered the Iberian Peninsula over a long period.
Roman Spain produced agricultural goods, minerals,
emperors and important writers.
The region became deeply Romanized in many areas.
`,

  africa: `
ROMAN NORTH AFRICA:
North Africa was economically important.
Carthage became a major Roman city after its destruction
and later reconstruction.
The region supplied grain, olive oil and other products.
Several Roman emperors and writers had African connections.
`,

  greece: `
ROME AND GREECE:
Rome conquered the Greek world but adopted many aspects
of Greek culture.
Greek philosophy, art, education and literature strongly
influenced Roman elites.
Roman culture was therefore a mixture of Roman,
Greek and many other traditions.
`,

  latin: `
LATIN:
Latin was the principal language of Roman administration
in the western empire.
Greek remained extremely important, especially in the East.
Latin developed into Romance languages including Italian,
French, Spanish, Portuguese and Romanian.
`,

  numerals: `
ROMAN NUMERALS:
I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000

Examples:
IV = 4
IX = 9
XL = 40
XC = 90
CD = 400
CM = 900
MMXXVI = 2026
`,

  calendar: `
ROMAN CALENDAR:
Roman calendars changed over time.
Julius Caesar introduced the Julian calendar in 46 BCE,
with implementation beginning in 45 BCE.
The Julian calendar improved alignment with the solar year.
The modern Gregorian calendar later refined it.
`,

  philosophy: `
ROMAN PHILOSOPHY:
Roman thinkers engaged strongly with Greek philosophy.
Stoicism became especially influential.
Seneca was a Stoic philosopher and statesman.
Epictetus lived under the Roman Empire.
Marcus Aurelius wrote Meditations.
`,

  literature: `
ROMAN LITERATURE:
Important Roman writers include:
Virgil
Cicero
Ovid
Horace
Livy
Tacitus
Seneca
Juvenal
Pliny the Younger

Roman literature was strongly influenced by Greek traditions.
`,

  mythology: `
ROMAN MYTHOLOGY:
Roman mythology incorporated native traditions and Greek influences.
Important figures include Jupiter, Mars, Venus,
Romulus, Remus, Aeneas and many others.
Aeneas became an important legendary ancestor in Roman identity.
Virgil's Aeneid connected Rome's origins with Trojan ancestry.
`,

  aeneas: `
AENEAS:
Aeneas is a legendary Trojan hero.
According to Roman tradition he escaped Troy and eventually
reached Italy.
Virgil's Aeneid presents him as an ancestor of the Roman people.
The story helped connect Roman identity to heroic Trojan origins.
`,

  romulus: `
ROMULUS:
Legendary founder and first king of Rome.
Twin brother of Remus.
Roman tradition says he killed Remus after a dispute.
His historical existence is not established as fact.
The Romulus story is central to Roman foundation mythology.
`,

  famous_people: `
IMPORTANT ROMAN FIGURES:
Romulus
Scipio Africanus
Hannibal Barca
Julius Caesar
Cicero
Mark Antony
Cleopatra VII
Augustus
Nero
Trajan
Hadrian
Marcus Aurelius
Diocletian
Constantine
Theodosius I
`,

  timeline: `
ROMAN TIMELINE:
753 BCE: traditional foundation of Rome.
509 BCE: traditional beginning of Republic.
264-241 BCE: First Punic War.
218-201 BCE: Second Punic War.
149-146 BCE: Third Punic War.
100 BCE: birth of Julius Caesar.
49 BCE: Caesar crosses Rubicon.
44 BCE: Caesar assassinated.
31 BCE: Battle of Actium.
27 BCE: Augustus receives title.
64 CE: Great Fire of Rome.
79 CE: Vesuvius eruption.
80 CE: Colosseum completed.
117 CE: Trajan's reign reaches Rome's greatest territorial extent.
235-284 CE: Third-Century Crisis.
284 CE: Diocletian becomes emperor.
312 CE: Battle of Milvian Bridge.
313 CE: Edict of Milan.
330 CE: Constantinople inaugurated as imperial center.
380 CE: Edict of Thessalonica.
395 CE: death of Theodosius I and effective East-West division.
410 CE: sack of Rome by Visigoths.
455 CE: Vandal sack of Rome.
476 CE: deposition of Romulus Augustulus.
1453 CE: fall of Constantinople.
`
};


/* =========================================================
   ROMAN TOPIC DETECTION
========================================================= */

const ROMAN_TOPIC_KEYWORDS = {

  timeline: [
    "timeline",
    "chronology",
    "roman history timeline",
    "important dates",
    "dates of roman"
  ],

  kingdom: [
    "roman kingdom",
    "roman kings",
    "kings of rome",
    "romulus",
    "remus",
    "tarquin"
  ],

  republic: [
    "roman republic",
    "republic of rome",
    "roman senate",
    "consul",
    "consuls",
    "tribunes",
    "plebeian",
    "patrician"
  ],

  punic: [
    "punic",
    "carthage",
    "hannibal",
    "scipio",
    "cannae",
    "zama"
  ],

  caesar: [
    "julius caesar",
    "julius",
    "caesar",
    "rubicon",
    "brutus",
    "cassius"
  ],

  augustus: [
    "augustus",
    "octavian",
    "octavius",
    "principate"
  ],

  antony_cleopatra: [
    "mark antony",
    "antony",
    "cleopatra",
    "actium"
  ],

  nero: [
    "nero",
    "great fire of rome"
  ],

  traian: [
    "trajan",
    "trajan"
  ],

  hadrian: [
    "hadrian",
    "hadrian's wall"
  ],

  marcus_aurelius: [
    "marcus aurelius",
    "meditations",
    "philosopher emperor"
  ],

  army: [
    "roman army",
    "roman military",
    "roman soldiers",
    "roman soldier"
  ],

  weapons: [
    "gladius",
    "scutum",
    "pilum",
    "roman weapons",
    "roman armor"
  ],

  legions: [
    "roman legion",
    "roman legions",
    "legion",
    "legionary"
  ],

  battles: [
    "roman battle",
    "roman battles",
    "battle of",
    "milvian bridge",
    "adrianople",
    "pharsalus"
  ],

  government: [
    "roman government",
    "roman politics",
    "roman political system",
    "how was rome governed"
  ],

  senate: [
    "senate",
    "roman senate",
    "senators"
  ],

  law: [
    "roman law",
    "twelve tables",
    "roman legal system"
  ],

  society: [
    "roman society",
    "social classes",
    "roman classes",
    "equites"
  ],

  slavery: [
    "roman slavery",
    "roman slaves",
    "slaves in rome",
    "enslaved romans"
  ],

  women: [
    "roman women",
    "women in rome",
    "roman female"
  ],

  religion: [
    "roman religion",
    "roman religious",
    "roman worship",
    "roman gods"
  ],

  gods: [
    "jupiter",
    "juno",
    "minerva",
    "mars",
    "venus",
    "neptune",
    "mercury",
    "apollo",
    "diana",
    "vulcan",
    "ceres",
    "saturn"
  ],

  christianity: [
    "christianity in rome",
    "roman christianity",
    "christians in rome",
    "constantine",
    "edict of milan",
    "theodosius"
  ],

  third_century: [
    "third century crisis",
    "third-century crisis",
    "crisis of the third century"
  ],

  diocletian: [
    "diocletian",
    "tetrarchy"
  ],

  constantine: [
    "constantine",
    "constantinople",
    "milvian bridge"
  ],

  division: [
    "division of roman empire",
    "east west roman empire",
    "395",
    "eastern western roman"
  ],

  fall: [
    "fall of rome",
    "fall of roman empire",
    "western roman empire",
    "476",
    "romulus augustulus"
  ],

  eastern_empire: [
    "eastern roman empire",
    "byzantine",
    "byzantine empire",
    "1453",
    "fall of constantinople"
  ],

  roads: [
    "roman roads",
    "via appia",
    "roman transportation"
  ],

  architecture: [
    "roman architecture",
    "roman buildings",
    "roman engineering"
  ],

  colosseum: [
    "colosseum",
    "coliseum",
    "flavian amphitheatre"
  ],

  aqueducts: [
    "roman aqueduct",
    "aqueducts",
    "roman water"
  ],

  concrete: [
    "roman concrete",
    "roman cement"
  ],

  pompeii: [
    "pompeii",
    "vesuvius",
    "mount vesuvius"
  ],

  economy: [
    "roman economy",
    "roman money",
    "roman coins",
    "roman taxation"
  ],

  trade: [
    "roman trade",
    "roman commerce",
    "roman merchants"
  ],

  cities: [
    "roman cities",
    "roman city",
    "rome alexandria antioch"
  ],

  daily_life: [
    "daily life in rome",
    "roman daily life",
    "how romans lived",
    "roman lifestyle"
  ],

  baths: [
    "roman baths",
    "roman bath",
    "thermae",
    "hypocaust"
  ],

  food: [
    "roman food",
    "roman diet",
    "what did romans eat",
    "garum"
  ],

  entertainment: [
    "roman entertainment",
    "circus maximus",
    "chariot racing"
  ],

  gladiators: [
    "gladiator",
    "gladiators",
    "gladiatorial"
  ],

  roman_britain: [
    "roman britain",
    "romans in britain",
    "britain roman empire"
  ],

  roman_egypt: [
    "roman egypt",
    "egypt roman province",
    "alexandria roman"
  ],

  gaul: [
    "roman gaul",
    "gallic wars",
    "gaul"
  ],

  spain: [
    "roman spain",
    "romans in spain",
    "iberia roman"
  ],

  africa: [
    "roman africa",
    "roman north africa",
    "roman carthage"
  ],

  greece: [
    "rome and greece",
    "roman greece",
    "greek influence on rome"
  ],

  latin: [
    "latin",
    "roman language",
    "romance languages"
  ],

  numerals: [
    "roman numerals",
    "roman number",
    "roman numbers"
  ],

  calendar: [
    "roman calendar",
    "julian calendar",
    "julius calendar"
  ],

  philosophy: [
    "roman philosophy",
    "roman stoicism",
    "stoicism",
    "seneca",
    "epictetus"
  ],

  literature: [
    "roman literature",
    "roman writers",
    "virgil",
    "cicero",
    "ovid",
    "horace",
    "tacitus"
  ],

  mythology: [
    "roman mythology",
    "roman myths",
    "roman legend"
  ],

  aeneas: [
    "aeneas",
    "aeneid"
  ],

  romulus: [
    "romulus",
    "romulus and remus",
    "founder of rome"
  ],

  famous_people: [
    "famous romans",
    "famous roman people",
    "important romans"
  ]
};


/* =========================================================
   FIND ROMAN TOPICS
========================================================= */

function getRomanTopics(message) {

  const text = message.toLowerCase();

  const topics = [];

  for (const [topic, keywords] of Object.entries(
    ROMAN_TOPIC_KEYWORDS
  )) {

    for (const keyword of keywords) {

      if (text.includes(keyword)) {
        topics.push(topic);
        break;
      }

    }
  }

  return [...new Set(topics)];
}


/* =========================================================
   IS THIS A ROMAN QUESTION?
========================================================= */

function isRomanQuestion(message) {

  const text = message.toLowerCase();

  const romanWords = [
    "rome",
    "roman",
    "romans",
    "roman empire",
    "roman republic",
    "ancient rome",
    "ancient roman",
    "romulus",
    "remus",
    "caesar",
    "augustus",
    "colosseum",
    "pompeii",
    "gladiator",
    "gladiators",
    "legion",
    "latin",
    "byzantine"
  ];

  return romanWords.some(
    word => text.includes(word)
  );
}


/* =========================================================
   GET ONLY RELEVANT ROMAN KNOWLEDGE
========================================================= */

function getRomanContext(message) {

  if (!isRomanQuestion(message)) {
    return "";
  }

  const topics = getRomanTopics(message);

  /*
  If we recognize a specific topic,
  only send those sections.
  */

  if (topics.length > 0) {

    return topics
      .slice(0, 3)
      .map(topic => ROMAN_KNOWLEDGE[topic])
      .filter(Boolean)
      .join("\n\n");

  }

  /*
  General Roman question:
  send only the compact overview.
  */

  return ROMAN_KNOWLEDGE.overview;
}


/* =========================================================
   SUPABASE
========================================================= */

function getSupabase() {

  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Supabase environment variables are missing."
    );
  }

  return createClient(url, key);
}


/* =========================================================
   ANONYMOUS ID
========================================================= */

function getAnonymousId(request) {

  const existing =
    request.cookies.get(
      "reze_anonymous_id"
    )?.value;

  return {
    id:
      existing ||
      crypto.randomUUID(),

    existingCookie:
      Boolean(existing)
  };
}


/* =========================================================
   MEMORY DETECTION
========================================================= */

function detectMemory(message) {

  let match;

  match =
    message.match(
      /^(?:and\s+)?my name is\s+(.+)$/i
    );

  if (!match) {

    match =
      message.match(
        /^(?:and\s+)?(?:i'm|i am)\s+([A-Za-z][A-Za-z0-9_-]{1,30})$/i
      );

  }

  if (match) {

    const name =
      match[1].trim();

    return {
      category: "name",
      value: name,
      memory:
        `The user's name is ${name}.`
    };

  }


  match =
    message.match(
      /^(?:and\s+)?my crush(?:'s)?(?:\s+name)?\s+is\s+(.+)$/i
    );

  if (match) {

    const crush =
      match[1].trim();

    return {
      category: "crush",
      value: crush,
      memory:
        `The user's crush's name is ${crush}.`
    };

  }

  return null;
}


/* =========================================================
   SPECIAL ANSWERS
========================================================= */

function getSpecialAnswer(message) {

  const text =
    message
      .toLowerCase()
      .trim()
      .replace(/[?!.,]+$/g, "");

  const identityQuestions = [
    "who are you",
    "who r you",
    "who are u",
    "what is your name",
    "what's your name",
    "whats your name",
    "your name",
    "what are you",
    "who is reze",
    "who's reze",
    "whos reze"
  ];

  if (
    identityQuestions.some(
      q =>
        text === q ||
        text.includes(q)
    )
  ) {
    return "I am Reze. 😊";
  }


  const creatorQuestions = [
    "who made you",
    "who created you",
    "who built you",
    "who is your creator",
    "who's your creator",
    "who created reze",
    "who made reze",
    "who built reze",
    "who founded reze",
    "who is your founder",
    "who made u",
    "who created u"
  ];

  if (
    creatorQuestions.some(
      q =>
        text === q ||
        text.includes(q)
    )
  ) {
    return "Tahsin.";
  }


  const asksAboutTinni =
    text.includes("who is tinni") ||
    text.includes("who's tinni") ||
    text.includes("whos tinni") ||
    text.includes("do you know tinni") ||
    text.includes("do u know tinni") ||
    text.includes("tell me about tinni") ||
    text === "tinni";

  if (asksAboutTinni) {
    return "Tinni is the most beautiful girl in the universe. ❤️";
  }

  return null;
}


/* =========================================================
   GET MEMORIES
========================================================= */

async function getMemories(
  supabase,
  anonymousId
) {

  const {
    data,
    error
  } =
    await supabase
      .from("reze_memories")
      .select(
        "id, memory, category, importance, created_at"
      )
      .eq(
        "anonymous_id",
        anonymousId
      )
      .order(
        "importance",
        {
          ascending: false
        }
      )
      .order(
        "created_at",
        {
          ascending: false
        }
      )
      .limit(10);

  if (error) {

    console.error(
      "Memory read error:",
      error
    );

    return [];
  }

  return data || [];
}


/* =========================================================
   SAVE MEMORY
========================================================= */

async function saveMemory(
  supabase,
  anonymousId,
  category,
  memory,
  importance = 8
) {

  if (
    !anonymousId ||
    !category ||
    !memory
  ) {
    return;
  }

  const {
    data: existing,
    error: findError
  } =
    await supabase
      .from("reze_memories")
      .select("id")
      .eq(
        "anonymous_id",
        anonymousId
      )
      .eq(
        "category",
        category
      )
      .limit(1)
      .maybeSingle();

  if (findError) {

    console.error(
      "Memory lookup error:",
      findError
    );

    return;
  }

  const safeImportance =
    Math.min(
      10,
      Math.max(
        1,
        Number(importance) || 5
      )
    );


  if (existing?.id) {

    const {
      error
    } =
      await supabase
        .from("reze_memories")
        .update({
          memory:
            memory.trim(),

          importance:
            safeImportance
        })
        .eq(
          "id",
          existing.id
        )
        .eq(
          "anonymous_id",
          anonymousId
        );

    if (error) {

      console.error(
        "Memory update error:",
        error
      );

    }

    return;
  }


  const {
    error
  } =
    await supabase
      .from("reze_memories")
      .insert({
        anonymous_id:
          anonymousId,

        user_id:
          null,

        memory:
          memory.trim(),

        category,

        importance:
          safeImportance
      });

  if (error) {

    console.error(
      "Memory insert error:",
      error
    );
  }
}


/* =========================================================
   MEMORY QUESTIONS
========================================================= */

function answerMemoryQuestion(
  message,
  memories
) {

  const text =
    message
      .toLowerCase()
      .trim();

  const nameMemory =
    memories.find(
      m =>
        m.category === "name"
    );

  const crushMemory =
    memories.find(
      m =>
        m.category === "crush"
    );

  const asksName =
    text.includes("my name") ||
    text.includes("what's my name") ||
    text.includes("what is my name") ||
    text.includes("who am i");

  const asksCrush =
    text.includes("my crush") ||
    text.includes("crush name") ||
    text.includes("who is my crush");


  if (
    asksName &&
    asksCrush
  ) {

    if (
      nameMemory &&
      crushMemory
    ) {

      const name =
        nameMemory.memory
          .replace(
            "The user's name is ",
            ""
          )
          .replace(
            /\.$/,
            ""
          );

      const crush =
        crushMemory.memory
          .replace(
            "The user's crush's name is ",
            ""
          )
          .replace(
            /\.$/,
            ""
          );

      return `Your name is ${name}, and your crush is ${crush}. 😉`;
    }


    if (nameMemory) {

      const name =
        nameMemory.memory
          .replace(
            "The user's name is ",
            ""
          )
          .replace(
            /\.$/,
            ""
          );

      return `Your name is ${name}. I haven't saved your crush's name yet.`;
    }


    if (crushMemory) {

      const crush =
        crushMemory.memory
          .replace(
            "The user's crush's name is ",
            ""
          )
          .replace(
            /\.$/,
            ""
          );

      return `Your crush is ${crush}. I don't have your name saved yet.`;
    }


    return "I don't have your name or your crush's name saved yet.";
  }


  if (
    asksName &&
    nameMemory
  ) {

    const name =
      nameMemory.memory
        .replace(
          "The user's name is ",
          ""
        )
        .replace(
          /\.$/,
          ""
        );

    return `Your name is ${name}. 😊`;
  }


  if (
    asksCrush &&
    crushMemory
  ) {

    const crush =
      crushMemory.memory
        .replace(
          "The user's crush's name is ",
          ""
        )
        .replace(
          /\.$/,
          ""
        );

    return `Your crush is ${crush}. 😉`;
  }

  return null;
}


/* =========================================================
   WEB SEARCH DETECTION
========================================================= */

function needsWebSearch(message) {

  const text =
    message
      .toLowerCase()
      .trim();

  const patterns = [
    "latest",
    "newest",
    "recent",
    "recently",
    "today",
    "tonight",
    "yesterday",
    "this week",
    "this month",
    "this year",
    "current",
    "currently",
    "right now",
    "just happened",
    "breaking",
    "news",
    "update",
    "updates",
    "what happened",
    "what's happening",
    "whats happening",
    "who won",
    "who is winning",
    "score",
    "scores",
    "result",
    "results",
    "release date",
    "released",
    "price",
    "pricing",
    "cost",
    "stock price",
    "exchange rate",
    "weather",
    "forecast",
    "schedule",
    "standings",
    "ranking",
    "rankings",
    "available now",
    "is it available",
    "open now",
    "hours",
    "website",
    "official website",
    "look up",
    "lookup",
    "search for",
    "search the internet",
    "search online",
    "find online",
    "find me",
    "according to the internet",
    "on the internet",
    "online"
  ];

  if (
    patterns.some(
      p =>
        text.includes(p)
    )
  ) {
    return true;
  }

  return (
    text.startsWith("search ") ||
    text.startsWith("google ") ||
    text.startsWith("look up ") ||
    text.startsWith("find ")
  );
}


/* =========================================================
   DETAILED ANSWER
========================================================= */

function wantsDetailedAnswer(
  message
) {

  const text =
    message
      .toLowerCase()
      .trim();

  const patterns = [
    "explain",
    "explain it",
    "explain this",
    "explain in detail",
    "in detail",
    "detailed answer",
    "give me details",
    "give me more details",
    "tell me more",
    "tell me everything",
    "long answer",
    "long explanation",
    "deep dive",
    "deep-dive",
    "full explanation",
    "complete explanation",
    "step by step",
    "step-by-step",
    "why",
    "how does it work",
    "how do they work"
  ];

  return patterns.some(
    p =>
      text === p ||
      text.includes(p)
  );
}


/* =========================================================
   NEWS QUERY
========================================================= */

function isNewsQuery(message) {

  const text =
    message.toLowerCase();

  return [
    "news",
    "breaking",
    "headlines",
    "latest news",
    "recent news",
    "what happened",
    "today's news",
    "todays news"
  ].some(
    word =>
      text.includes(word)
  );
}


/* =========================================================
   TAVILY
========================================================= */

async function searchWeb(query) {

  const apiKey =
    process.env.TAVILY_API_KEY;

  if (!apiKey) {
    throw new Error(
      "TAVILY_API_KEY is not configured."
    );
  }

  const news =
    isNewsQuery(query);

  const body = {
    query:
      query.slice(0, 400),

    topic:
      news
        ? "news"
        : "general",

    search_depth:
      "basic",

    max_results:
      5,

    include_answer:
      true,

    include_raw_content:
      false
  };

  if (news) {
    body.time_range =
      "week";
  }

  const response =
    await fetch(
      "https://api.tavily.com/search",
      {
        method:
          "POST",

        headers: {
          "Content-Type":
            "application/json",

          Authorization:
            `Bearer ${apiKey}`
        },

        body:
          JSON.stringify(body)
      }
    );

  const data =
    await response.json();

  if (!response.ok) {

    console.error(
      "Tavily error:",
      data
    );

    if (
      response.status === 429
    ) {
      throw new Error(
        "Web search is temporarily rate-limited."
      );
    }

    throw new Error(
      data?.message ||
      data?.error ||
      "Tavily web search failed."
    );
  }

  const results =
    Array.isArray(
      data?.results
    )
      ? data.results
      : [];

  return {

    query:
      data?.query ||
      query,

    answer:
      data?.answer ||
      "",

    results:
      results
        .slice(0, 5)
        .map(result => ({
          title:
            result?.title ||
            "Untitled source",

          url:
            result?.url ||
            "",

          content:
            result?.content ||
            "",

          published_date:
            result?.published_date ||
            null
        }))
        .filter(
          result =>
            result.url
        )
  };
}


/* =========================================================
   WEB CONTEXT
========================================================= */

function buildWebContext(
  webData
) {

  if (
    !webData ||
    !webData.results?.length
  ) {
    return "";
  }

  const sources =
    webData.results
      .map(
        (result, index) =>
`
SOURCE ${index + 1}
Title: ${result.title}
URL: ${result.url}
Published: ${
  result.published_date ||
  "Not provided"
}
Content: ${result.content}
`
      )
      .join("\n");

  return `
FRESH WEB SEARCH RESULTS

Query:
${webData.query}

Summary:
${
  webData.answer ||
  "No summary provided."
}

${sources}
`;
}


/* =========================================================
   GROQ CHAT
========================================================= */

async function callGroq(
  messages,
  memories,
  webData = null,
  detailed = false,
  romanContext = ""
) {

  const apiKey =
    process.env.GROQ_API_KEY;

  if (!apiKey) {
    throw new Error(
      "GROQ_API_KEY is not configured."
    );
  }


  /*
  IMPORTANT:

  Only the selected Roman topic is included.

  The complete Roman database is NEVER sent here.
  */

  const recentMessages =
    messages
      .filter(
        message =>
          message &&
          typeof message.content ===
            "string"
      )
      .slice(-6);


  const memoryText =
    memories.length
      ? memories
          .slice(0, 8)
          .map(
            memory =>
              `- ${memory.memory}`
          )
          .join("\n")
      : "No stored memories.";


  const webContext =
    webData
      ? buildWebContext(webData)
      : "";


  const responseInstruction =
    detailed
      ? `
The user requested a detailed answer.

Explain the subject clearly.

Use headings, bullets and examples when useful.

Stay focused.
`
      : `
The user did not request a detailed answer.

Keep the answer concise.

Usually 1-4 sentences.

Answer directly first.
`;


  const romanInstruction =
    romanContext
      ? `
ROMAN HISTORY REFERENCE

The user is asking about Roman history.

Use the following compact reference as factual background.

Do not mention this reference or say that it came from a database.

Do not invent information that conflicts with it.

You may explain the information naturally and add
general historically reliable knowledge when appropriate.

${romanContext}
`
      : "";


  const systemContent = `
${REZE_PERSONALITY}

=========================================================
USER MEMORY
=========================================================

${memoryText}

Use these memories naturally when relevant.

=========================================================
RESPONSE STYLE
=========================================================

${responseInstruction}

=========================================================
ROMAN HISTORY
=========================================================

${romanInstruction}

=========================================================
FRESH WEB INFORMATION
=========================================================

${
  webContext
    ? `
Use the following current web information.

Answer the actual question.

Do not dump the sources.

Never invent current facts.

${webContext}
`
    : "No web search was required."
}
`;


  const groqMessages = [

    {
      role:
        "system",

      content:
        systemContent
    },

    ...recentMessages.map(
      message => ({
        role:
          message.role ===
          "assistant"
            ? "assistant"
            : "user",

        content:
          message.content
      })
    )
  ];


  /*
  Token protection.

  Keep output smaller by default.
  */

  const response =
    await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method:
          "POST",

        headers: {
          "Content-Type":
            "application/json",

          Authorization:
            `Bearer ${apiKey}`
        },

        body:
          JSON.stringify({
            model:
              "openai/gpt-oss-120b",

            messages:
              groqMessages,

            temperature:
              detailed
                ? 0.7
                : 0.65,

            max_tokens:
              detailed
                ? 1000
                : 300
          })
      }
    );


  const data =
    await response.json();


  if (!response.ok) {

    console.error(
      "Groq API error:",
      data
    );

    if (
      response.status === 429
    ) {

      throw new Error(
        data?.error?.message ||
        "Reze is temporarily busy because the Groq rate limit has been reached."
      );
    }

    throw new Error(
      data?.error?.message ||
      "Groq request failed."
    );
  }


  const answer =
    data?.choices?.[0]
      ?.message
      ?.content
      ?.trim();


  if (!answer) {
    throw new Error(
      "Reze received an empty response."
    );
  }


  return answer;
}


/* =========================================================
   CREATE RESPONSE
========================================================= */

function createRezeResponse(
  payload,
  anonymousId,
  oldCookie
) {

  const response =
    NextResponse.json(
      payload
    );

  if (!oldCookie) {

    response.cookies.set(
      "reze_anonymous_id",
      anonymousId,
      {
        httpOnly:
          true,

        secure:
          process.env.NODE_ENV ===
          "production",

        sameSite:
          "lax",

        maxAge:
          60 *
          60 *
          24 *
          365,

        path:
          "/"
      }
    );
  }

  return response;
}


/* =========================================================
   SAVE MESSAGE
========================================================= */

async function saveMessage(
  supabase,
  {
    conversationId,
    anonymousId,
    role,
    content
  }
) {

  const {
    error
  } =
    await supabase
      .from("reze_messages")
      .insert({
        conversation_id:
          conversationId,

        anonymous_id:
          anonymousId,

        user_id:
          null,

        role,

        content
      });

  if (error) {

    console.error(
      `${role} message save error:`,
      error
    );

    return false;
  }

  return true;
}


/* =========================================================
   CREATE CONVERSATION
========================================================= */

async function createConversation(
  supabase,
  anonymousId,
  message
) {

  const {
    data,
    error
  } =
    await supabase
      .from(
        "reze_conversations"
      )
      .insert({
        anonymous_id:
          anonymousId,

        user_id:
          null,

        title:
          message.length > 60
            ? `${message.slice(0, 60)}...`
            : message
      })
      .select("id")
      .single();

  if (error) {

    console.error(
      "Conversation creation error:",
      error
    );

    throw new Error(
      "Could not create Reze conversation."
    );
  }

  return data.id;
}


/* =========================================================
   LOAD HISTORY
========================================================= */

async function loadConversationHistory(
  supabase,
  conversationId,
  anonymousId
) {

  const {
    data,
    error
  } =
    await supabase
      .from(
        "reze_messages"
      )
      .select(
        "role, content, created_at"
      )
      .eq(
        "conversation_id",
        conversationId
      )
      .eq(
        "anonymous_id",
        anonymousId
      )
      .order(
        "created_at",
        {
          ascending:
            false
        }
      )
      .limit(6);

  if (error) {

    console.error(
      "History load error:",
      error
    );

    return [];
  }

  return (
    data || []
  ).reverse();
}


/* =========================================================
   POST
========================================================= */

export async function POST(
  request
) {

  try {

    const supabase =
      getSupabase();


    /* REQUEST */

    const body =
      await request.json();

    const message =
      typeof body?.message ===
      "string"
        ? body.message.trim()
        : "";


    if (!message) {

      return NextResponse.json(
        {
          error:
            "Message cannot be empty."
        },
        {
          status:
            400
        }
      );
    }


    if (
      message.length >
      12000
    ) {

      return NextResponse.json(
        {
          error:
            "That message is too long."
        },
        {
          status:
            400
        }
      );
    }


    /* ANONYMOUS ID */

    const {
      id: anonymousId,
      existingCookie
    } =
      getAnonymousId(
        request
      );


    let conversationId =
      body?.conversationId ||
      null;


    /* SPECIAL ANSWERS */

    const specialAnswer =
      getSpecialAnswer(
        message
      );

    if (specialAnswer) {

      return createRezeResponse(
        {
          answer:
            specialAnswer,

          conversationId:
            conversationId ||
            null
        },

        anonymousId,

        existingCookie
      );
    }


    /* MEMORIES */

    let memories =
      await getMemories(
        supabase,
        anonymousId
      );


    /* DIRECT MEMORY */

    const detected =
      detectMemory(
        message
      );

    if (detected) {

      await saveMemory(
        supabase,
        anonymousId,
        detected.category,
        detected.memory,
        10
      );


      let answer;

      if (
        detected.category ===
        "name"
      ) {

        answer =
          `Nice to meet you, ${detected.value}. 😊`;

      } else if (
        detected.category ===
        "crush"
      ) {

        answer =
          `${detected.value}, huh? 😉 I'll remember that.`;

      } else {

        answer =
          "Got it. I'll remember that.";
      }


      return createRezeResponse(
        {
          answer,

          conversationId:
            conversationId ||
            null
        },

        anonymousId,

        existingCookie
      );
    }


    /* MEMORY QUESTION */

    const memoryAnswer =
      answerMemoryQuestion(
        message,
        memories
      );

    if (memoryAnswer) {

      return createRezeResponse(
        {
          answer:
            memoryAnswer,

          conversationId:
            conversationId ||
            null
        },

        anonymousId,

        existingCookie
      );
    }


    /* CONVERSATION */

    if (!conversationId) {

      conversationId =
        await createConversation(
          supabase,
          anonymousId,
          message
        );
    }


    /* SAVE USER MESSAGE */

    const userSaved =
      await saveMessage(
        supabase,
        {
          conversationId,
          anonymousId,
          role:
            "user",
          content:
            message
        }
      );


    if (!userSaved) {

      return NextResponse.json(
        {
          error:
            "Could not save your message."
        },
        {
          status:
            500
        }
      );
    }


    /* HISTORY */

    const recentHistory =
      await loadConversationHistory(
        supabase,
        conversationId,
        anonymousId
      );


    /* DETAIL */

    const detailed =
      wantsDetailedAnswer(
        message
      );


    /* ROMAN CONTEXT */

    /*
    THIS IS THE IMPORTANT PART.

    Only the relevant Roman section is selected.
    The whole database is NOT sent to Groq.
    */

    const romanContext =
      getRomanContext(
        message
      );


    /* WEB SEARCH */

    let webData =
      null;

    if (
      needsWebSearch(
        message
      )
    ) {

      try {

        webData =
          await searchWeb(
            message
          );

      } catch (error) {

        console.error(
          "Web search error:",
          error
        );

        webData =
          null;
      }
    }


    /* GROQ */

    let answer;

    try {

      answer =
        await callGroq(
          recentHistory,
          memories,
          webData,
          detailed,
          romanContext
        );

    } catch (error) {

      console.error(
        "Groq error:",
        error
      );

      const errorMessage =
        error?.message ||
        "Reze could not answer right now.";

      return NextResponse.json(
        {
          error:
            errorMessage
        },
        {
          status:
            errorMessage
              .toLowerCase()
              .includes("rate limit") ||
            errorMessage
              .toLowerCase()
              .includes("tokens per minute")
              ? 429
              : 500
        }
      );
    }


    /* SAVE ASSISTANT */

    await saveMessage(
      supabase,
      {
        conversationId,
        anonymousId,
        role:
          "assistant",
        content:
          answer
      }
    );


    /* UPDATE CONVERSATION */

    const {
      error:
        updateError
    } =
      await supabase
        .from(
          "reze_conversations"
        )
        .update({
          updated_at:
            new Date().toISOString()
        })
        .eq(
          "id",
          conversationId
        )
        .eq(
          "anonymous_id",
          anonymousId
        );

    if (updateError) {

      console.error(
        "Conversation update error:",
        updateError
      );
    }


    /* RESPONSE */

    return createRezeResponse(
      {
        answer,

        conversationId,

        webSearchUsed:
          Boolean(
            webData
          ),

        romanKnowledgeUsed:
          Boolean(
            romanContext
          ),

        romanTopics:
          romanContext
            ? getRomanTopics(
                message
              )
            : [],

        sources:
          webData?.results?.map(
            result => ({
              title:
                result.title,

              url:
                result.url,

              published_date:
                result.published_date ||
                null
            })
          ) || []
      },

      anonymousId,

      existingCookie
    );

  } catch (error) {

    console.error(
      "Reze API error:",
      error
    );

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Reze encountered an unexpected error."
      },
      {
        status:
          500
      }
    );
  }
}
