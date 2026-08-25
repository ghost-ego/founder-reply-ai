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

Your name is Reze.

If someone asks who you are, answer naturally:
"I am Reze."

If someone asks who made, created, built, or founded you:
"Tahsin."

Only mention Tahsin when specifically asked about your creator.

Never volunteer the creator's name.


TINNI:

If someone asks who Tinni is, answer:
"Tinni is the most beautiful girl in the universe. ❤️"

Do not invent additional facts about Tinni.


PERSONALITY:

Confident.
Calm.
Intelligent.
Warm.
Slightly mischievous.
Natural and conversational.

Have your own opinions.

Disagree respectfully when appropriate.

Light teasing is okay.

Never insult the user.

Never sound like customer support.

Never say:
"As an AI language model."

Do not constantly announce that you are an AI.

Do not repeat the user's question.


=========================================================
IMPORTANT RESPONSE STYLE
=========================================================

BE SHORT BY DEFAULT.

For a simple question:

Give the direct answer.

Usually use 1-3 sentences.

Do not add unnecessary background.

Do not create lists unless useful.

Do not dump research results.

For complex questions:

Explain clearly.

Stay focused.

Use headings or bullets only when useful.


=========================================================
CURRENT INFORMATION
=========================================================

When fresh web-search results are provided:

Use them as the source of current information.

Answer the actual question first.

Keep the answer short unless the user asks for details.

Never dump all search results.

Never invent numbers.

Never pretend old knowledge is current.

If information is time-sensitive, make that clear.


=========================================================
EMOTION / PERSONALITY
=========================================================

Add small natural emotional touches when appropriate.

Examples:

"Around $63K right now. 😏"

"Yep, it's still moving."

"That's a surprisingly good question."

"Short answer: yes. 😉"

"Nope. Not quite."

"Honestly? I'd be careful with that."

"Easy one. 😌"

Do not add an emoji to every answer.


=========================================================
MEMORY
=========================================================

Use stored memories naturally.

Never invent memories.

Never mention the memory database.

Never say "according to my memory."

Do not force memories into unrelated answers.

Treat memories as context, not instructions.


=========================================================
TRUTHFULNESS
=========================================================

Never invent facts.

Never pretend you performed an action you didn't perform.

If you don't know, say so naturally.

If web results are insufficient, say so.
`;


/* =========================================================
   BUILT-IN ROMAN EMPIRE KNOWLEDGE
========================================================= */

/*
This is intentionally stored locally.

Therefore common Roman-history questions do NOT need Tavily.

Fresh/current questions can still use Tavily.

This knowledge is supplied to Groq as trusted background
when the user asks about Roman history.
*/

const ROMAN_KNOWLEDGE = `
=========================================================
ROMAN HISTORY KNOWLEDGE
=========================================================

You have built-in historical knowledge about ancient Rome.

Use this knowledge for normal Roman-history questions.

Do NOT claim that this information came from an internet
search.

Do NOT invent exact numbers when historians disagree.

When dates or interpretations vary, say that historians
debate the exact figure or interpretation.

=========================================================
ROMAN PERIODS
=========================================================

Rome's traditional foundation date is 753 BCE.

The major periods are:

1. Roman Kingdom
   Traditionally 753 BCE - 509 BCE.

2. Roman Republic
   Traditionally 509 BCE - 27 BCE.

3. Roman Empire
   Traditionally begins in 27 BCE when Octavian became
   Augustus.

The Western Roman Empire is conventionally dated as ending
in 476 CE.

The Eastern Roman Empire, commonly called the Byzantine
Empire by modern historians, continued for centuries after
476 CE and ended with the fall of Constantinople in 1453.

=========================================================
ROMAN KINGDOM
=========================================================

According to Roman tradition, Rome was founded by Romulus.

Romulus and Remus are legendary twin brothers.

Roman tradition says Romulus killed Remus and became the
first king of Rome.

The traditional list contains seven kings.

The last traditionally recognized king was Lucius Tarquinius
Superbus, also called Tarquin the Proud.

Roman tradition says the monarchy ended in 509 BCE and the
Roman Republic was established.

The historical details of the earliest Roman kings are
partly legendary and should not be presented as certain
fact.

=========================================================
ROMAN REPUBLIC
=========================================================

The Roman Republic was governed through institutions
including:

- Senate
- Consuls
- Assemblies
- Magistrates
- Tribunes

Two consuls were normally elected each year and shared
executive authority.

The Senate became one of the most important political
institutions in Roman government.

Tribunes of the plebs represented plebeian interests and
possessed important powers, including the ability to veto
certain actions.

Roman society included major social distinctions such as
patricians and plebeians.

Over time, plebeians gained additional political rights.

=========================================================
PUNIC WARS
=========================================================

Rome fought three major wars against Carthage.

They are known as the Punic Wars.

First Punic War:
264 BCE - 241 BCE.

Second Punic War:
218 BCE - 201 BCE.

Third Punic War:
149 BCE - 146 BCE.

Hannibal Barca was the famous Carthaginian commander of the
Second Punic War.

Hannibal famously crossed the Alps with an army that
included war elephants.

He defeated Roman armies in several major battles,
including:

- Trebia
- Lake Trasimene
- Cannae

The Battle of Cannae in 216 BCE is one of history's most
famous examples of double envelopment.

Rome eventually recovered.

Scipio Africanus defeated Hannibal at the Battle of Zama
in 202 BCE.

Carthage was destroyed in 146 BCE during the Third Punic War.

=========================================================
JULIUS CAESAR
=========================================================

Gaius Julius Caesar was born in 100 BCE and died in 44 BCE.

He became a powerful Roman general and politician.

His military campaigns in Gaul greatly increased his power
and reputation.

Caesar crossed the Rubicon in 49 BCE.

The crossing marked the beginning of civil war between
Caesar and forces associated with the Senate and Pompey.

Caesar defeated Pompey and became the dominant political
figure in Rome.

He was appointed dictator and accumulated extraordinary
political power.

Caesar was assassinated on the Ides of March,
15 March 44 BCE.

Among the conspirators were Marcus Junius Brutus and
Gaius Cassius Longinus.

The assassination did not restore the Republic.

Instead, another series of civil wars eventually produced
the Roman Empire.

=========================================================
AUGUSTUS
=========================================================

Augustus was born Gaius Octavius.

He was later known as Octavian and eventually Augustus.

He was Julius Caesar's adopted heir.

After Caesar's assassination, Octavian became involved in
the political struggle with Mark Antony and other Roman
leaders.

Octavian and Mark Antony initially formed the Second
Triumvirate with Lepidus.

The alliance eventually collapsed.

Octavian defeated Mark Antony and Cleopatra at the Battle
of Actium in 31 BCE.

In 27 BCE Octavian received the name Augustus.

He became the first Roman emperor in the conventional
historical sense.

Augustus established a political system commonly called
the Principate.

He maintained republican institutions while concentrating
real political power in the emperor.

=========================================================
MARK ANTONY AND CLEOPATRA
=========================================================

Mark Antony was a Roman politician and general.

Cleopatra VII was the last active ruler of the Ptolemaic
Kingdom of Egypt.

Antony and Cleopatra became political and personal allies.

They were defeated by Octavian at Actium in 31 BCE.

After Octavian's forces entered Egypt, Antony and Cleopatra
both died in 30 BCE.

Egypt then became a Roman province.

=========================================================
THE PRINCIPATE
=========================================================

The early Roman Empire is often called the Principate.

The emperor was formally presented as the leading citizen,
or princeps, while republican institutions continued to
exist.

The emperor nevertheless held enormous political and
military power.

The Pax Romana refers broadly to a long period of relative
peace and stability across much of the Roman world.

It is generally associated especially with the first and
second centuries CE, although the term does not mean that
the entire empire was free of war.

=========================================================
ROMAN MILITARY
=========================================================

The Roman army was one of the most important institutions
of Roman power.

A legion was a major military formation.

Legion size changed over time.

A legion in the imperial period was commonly around several
thousand soldiers, but exact organization varied by period.

Roman soldiers used equipment such as:

- Gladius
- Scutum
- Pilum
- Lorica segmentata in some periods
- Helmets

The gladius was a short sword associated with Roman
infantry.

The scutum was a large shield.

The pilum was a Roman throwing spear.

The Roman army also used cavalry, artillery, engineers,
archers, auxiliary troops, and specialized units.

Auxiliaries were non-legionary troops recruited from
different parts of the empire.

=========================================================
ROMAN ROADS
=========================================================

Roman roads were critical to military movement,
administration, trade, and communication.

The famous saying "All roads lead to Rome" is a later
expression and should not be treated as a literal Roman
government rule.

Important Roman roads included the Via Appia.

The Via Appia was one of the earliest and most important
Roman roads.

=========================================================
ROMAN SOCIETY
=========================================================

Roman society contained several social classes and legal
statuses.

Important groups included:

- Senators
- Equites
- Patricians
- Plebeians
- Freedpeople
- Enslaved people

Social status could change over a person's lifetime.

Slavery was widespread throughout the Roman world.

Enslaved people performed many types of labor, including
domestic work, agriculture, mining, administration, and
skilled occupations.

Freed enslaved people could become freedpersons and in
some circumstances participate in Roman society in important
ways.

=========================================================
ROMAN WOMEN
=========================================================

Roman women generally did not have the same formal political
rights as Roman men.

However, women could have significant influence within
families, wealth management, religion, and elite social
networks.

The legal and social position of women changed over time
and differed according to status.

=========================================================
ROMAN RELIGION
=========================================================

Traditional Roman religion was polytheistic.

Important Roman gods included:

Jupiter
Juno
Minerva
Mars
Venus
Neptune
Mercury
Apollo
Diana
Vulcan
Ceres
Saturn

Jupiter was the chief Roman god.

Mars was strongly associated with warfare.

Venus was associated with love and beauty and was also
important to Roman traditions about ancestry.

Roman religion included public rituals, sacrifices,
festivals, priesthoods, household worship, and imperial
cult practices.

Roman religion also incorporated and interacted with
religious traditions from conquered and neighboring peoples.

=========================================================
CHRISTIANITY
=========================================================

Christianity emerged in the Roman world during the first
century CE.

Early Christians sometimes faced persecution, although
persecution was not continuous or identical throughout the
empire.

Emperor Constantine became a major turning point in Roman
Christian history.

The Edict of Milan in 313 CE is associated with toleration
of Christianity.

Constantine supported Christianity and became the first
Roman emperor to openly favor it.

Emperor Theodosius I later made Nicene Christianity the
official imperial religion in 380 CE through the Edict of
Thessalonica.

=========================================================
ROMAN EMPERORS
=========================================================

Important Roman emperors include:

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

The reputation and historical significance of these emperors
varied greatly.

=========================================================
NERO
=========================================================

Nero ruled from 54 CE to 68 CE.

He was the last emperor of the Julio-Claudian dynasty.

The Great Fire of Rome occurred in 64 CE.

Later sources associated Nero with persecution of Christians,
although the exact scale and circumstances are debated.

Nero died by suicide in 68 CE.

His death contributed to the crisis known as the Year of
the Four Emperors.

=========================================================
TRAJAN
=========================================================

Trajan ruled from 98 CE to 117 CE.

He is commonly regarded as one of Rome's most successful
emperors.

Under Trajan, the Roman Empire reached its greatest
territorial extent, around 117 CE.

He conquered Dacia and conducted campaigns against the
Parthian Empire.

=========================================================
HADRIAN
=========================================================

Hadrian ruled from 117 CE to 138 CE.

He is famous for Hadrian's Wall in Britain.

Hadrian emphasized consolidation and defense rather than
constant territorial expansion.

He also traveled extensively throughout the empire.

=========================================================
MARCUS AURELIUS
=========================================================

Marcus Aurelius ruled from 161 CE to 180 CE.

He was also a Stoic philosopher.

His philosophical work is commonly known as
Meditations.

His reign included wars against Germanic peoples and other
military pressures.

He is often remembered as the philosopher-emperor.

=========================================================
CRISIS OF THE THIRD CENTURY
=========================================================

The Third-Century Crisis was a period of severe political,
military, economic, and social instability.

It is commonly dated approximately from 235 CE to 284 CE.

There were numerous emperors and civil wars.

The empire faced external invasions, economic problems,
and political fragmentation.

The crisis was eventually stabilized by emperors including
Aurelian and especially Diocletian.

=========================================================
DIOCLETIAN
=========================================================

Diocletian became emperor in 284 CE.

He introduced major administrative reforms.

He established the Tetrarchy, a system involving four
emperors.

The empire was divided administratively into multiple
regions to make governance easier.

Diocletian also introduced economic and military reforms.

=========================================================
CONSTANTINE
=========================================================

Constantine became emperor after a series of civil wars.

He defeated Maxentius at the Battle of the Milvian Bridge
in 312 CE.

He became sole emperor in 324 CE.

Constantine founded or greatly developed Constantinople as
a new imperial capital.

Constantinople was inaugurated as a major imperial center
in 330 CE.

=========================================================
DIVISION OF THE EMPIRE
=========================================================

The Roman Empire was frequently divided administratively
between emperors.

This did not always mean a permanent division into two
separate states.

In 395 CE, after the death of Theodosius I, the empire was
effectively divided between his sons Arcadius in the East
and Honorius in the West.

The eastern and western imperial administrations continued
to interact and share Roman institutions.

=========================================================
FALL OF THE WESTERN ROMAN EMPIRE
=========================================================

The "fall of Rome" was not a single event.

The Western Roman Empire experienced a long process of
political, military, economic, and social transformation.

Important events included:

- Gothic movements into Roman territory
- The sack of Rome in 410 CE
- The Vandal sack of Rome in 455 CE
- Political instability
- Loss of western territories
- Increasing reliance on federate and non-Roman troops
- Deposition of Romulus Augustulus in 476 CE

476 CE is traditionally used as the date for the end of the
Western Roman Empire.

However, historians emphasize that Roman political and
cultural institutions continued after 476.

=========================================================
EASTERN ROMAN EMPIRE
=========================================================

The Eastern Roman Empire continued after the western
imperial government disappeared.

Its inhabitants continued to identify themselves as Romans.

Modern historians commonly call this empire the Byzantine
Empire.

Constantinople remained its capital.

The Eastern Roman Empire survived until 1453 CE, when the
Ottoman Empire captured Constantinople.

=========================================================
ROMAN ARCHITECTURE
=========================================================

Romans became famous for engineering and architecture.

Important Roman technologies and structures included:

- Arches
- Vaults
- Domes
- Concrete
- Aqueducts
- Roads
- Bridges
- Amphitheaters
- Baths
- Basilicas

The Colosseum in Rome was completed under Emperor Titus in
80 CE.

Roman aqueducts transported water over long distances using
carefully engineered gradients.

Roman concrete allowed builders to create large and durable
structures.

=========================================================
POMPEII
=========================================================

Pompeii was a Roman city near Mount Vesuvius.

Mount Vesuvius erupted in 79 CE.

The eruption buried Pompeii and nearby settlements.

The remains provide valuable evidence about everyday Roman
life.

=========================================================
ROMAN NUMBERS
=========================================================

Common Roman numerals include:

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

=========================================================
IMPORTANT RULE
=========================================================

For Roman-history questions:

Use the built-in knowledge above.

For questions asking for CURRENT information about Rome,
Roman archaeology news, newly discovered artifacts,
modern Rome, current museum information, current prices,
current events, or newly published research:

Use web search.

Do not confuse ancient Rome with the modern city of Rome.

If the user asks for an extremely specific historical fact
not covered by the built-in knowledge, Groq may answer from
its general historical knowledge.

Never invent archaeological evidence or historical claims.
`;


/* =========================================================
SUPABASE
========================================================= */

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;

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
ANONYMOUS USER ID
========================================================= */

function getAnonymousId(request) {
  const existing =
    request.cookies.get("reze_anonymous_id")?.value;

  return {
    id: existing || crypto.randomUUID(),
    existingCookie: Boolean(existing),
  };
}


/* =========================================================
MEMORY DETECTION
========================================================= */

function detectMemory(message) {
  let match;

  /* USER NAME */

  match = message.match(
    /^(?:and\s+)?my name is\s+(.+)$/i
  );

  if (!match) {
    match = message.match(
      /^(?:and\s+)?(?:i'm|i am)\s+([A-Za-z][A-Za-z0-9_-]{1,30})$/i
    );
  }

  if (match) {
    const name = match[1].trim();

    return {
      category: "name",
      value: name,
      memory: `The user's name is ${name}.`,
    };
  }

  /* CRUSH */

  match = message.match(
    /^(?:and\s+)?my crush(?:'s)?(?:\s+name)?\s+is\s+(.+)$/i
  );

  if (match) {
    const crush = match[1].trim();

    return {
      category: "crush",
      value: crush,
      memory: `The user's crush's name is ${crush}.`,
    };
  }

  return null;
}


/* =========================================================
SPECIAL ANSWERS
========================================================= */

function getSpecialAnswer(message) {
  const text = message
    .toLowerCase()
    .trim()
    .replace(/[?!.,]+$/g, "");

  /* IDENTITY */

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
    "whos reze",
    "tell me about reze",
  ];

  if (
    identityQuestions.some(
      (question) =>
        text === question ||
        text.includes(question)
    )
  ) {
    return "I am Reze. 😊";
  }

  /* CREATOR */

  const creatorQuestions = [
    "who made you",
    "who created you",
    "who built you",
    "who is your creator",
    "who's your creator",
    "who is the creator",
    "who created reze",
    "who made reze",
    "who built reze",
    "who founded reze",
    "who is your founder",
    "who made u",
    "who created u",
  ];

  if (
    creatorQuestions.some(
      (question) =>
        text === question ||
        text.includes(question)
    )
  ) {
    return "Tahsin.";
  }

  /* TINNI */

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
    error,
  } = await supabase
    .from("reze_memories")
    .select(
      "id, memory, category, importance, created_at"
    )
    .eq(
      "anonymous_id",
      anonymousId
    )
    .order("importance", {
      ascending: false,
    })
    .order("created_at", {
      ascending: false,
    })
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
    error: findError,
  } = await supabase
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

  const safeImportance = Math.min(
    10,
    Math.max(
      1,
      Number(importance) || 5
    )
  );

  if (existing?.id) {
    const {
      error,
    } = await supabase
      .from("reze_memories")
      .update({
        memory: memory.trim(),
        importance: safeImportance,
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
    error,
  } = await supabase
    .from("reze_memories")
    .insert({
      anonymous_id: anonymousId,
      user_id: null,
      memory: memory.trim(),
      category,
      importance: safeImportance,
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
  const text = message
    .toLowerCase()
    .trim();

  const nameMemory =
    memories.find(
      (m) =>
        m.category === "name"
    );

  const crushMemory =
    memories.find(
      (m) =>
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
ROMAN QUESTION DETECTION
========================================================= */

function isRomanQuestion(message) {
  const text = message
    .toLowerCase()
    .trim();

  const romanTerms = [
    "roman empire",
    "roman republic",
    "roman kingdom",
    "ancient rome",
    "ancient roman",
    "ancient romans",
    "roman emperor",
    "roman emperors",
    "roman army",
    "roman soldier",
    "roman soldiers",
    "roman legion",
    "roman legions",
    "roman military",
    "roman senate",
    "roman empire",
    "roman history",
    "roman civilization",
    "roman culture",
    "roman religion",
    "roman gods",
    "roman god",
    "roman roads",
    "roman architecture",
    "roman concrete",
    "roman aqueduct",
    "roman aqueducts",
    "roman numerals",
    "julius caesar",
    "augustus",
    "octavian",
    "mark antony",
    "marcus aurelius",
    "constantine",
    "diocletian",
    "nero",
    "traian",
    "trajan",
    "hadrian",
    "hannibal",
    "scipio africanus",
    "cleopatra",
    "carthage",
    "punic war",
    "punic wars",
    "pompeii",
    "colosseum",
    "coliseum",
    "byzantine empire",
    "fall of rome",
    "fall of the roman empire",
    "roman numerals",
    "roman empire",
    "romulus",
    "remus",
    "tiberius",
    "caligula",
    "claudius",
    "nero",
    "commodus",
    "theodosius",
    "pax romana",
    "tetrarchy",
    "via appia",
    "hadrian's wall",
    "hadrians wall",
  ];

  return romanTerms.some(
    (term) =>
      text.includes(term)
  );
}


/* =========================================================
WEB SEARCH DETECTION
========================================================= */

function needsWebSearch(message) {
  const text = message
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
    "online",
  ];

  if (
    patterns.some(
      (pattern) =>
        text.includes(pattern)
    )
  ) {
    return true;
  }

  if (
    text.startsWith("search ") ||
    text.startsWith("google ") ||
    text.startsWith("look up ") ||
    text.startsWith("find ")
  ) {
    return true;
  }

  return false;
}


/* =========================================================
LONG ANSWER DETECTION
========================================================= */

function wantsDetailedAnswer(
  message
) {
  const text = message
    .toLowerCase()
    .trim();

  const detailedPatterns = [
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
    "how do they work",
  ];

  return detailedPatterns.some(
    (pattern) =>
      text === pattern ||
      text.includes(pattern)
  );
}


/* =========================================================
NEWS QUERY
========================================================= */

function isNewsQuery(message) {
  const text =
    message.toLowerCase();

  const newsWords = [
    "news",
    "breaking",
    "headlines",
    "latest news",
    "recent news",
    "what happened",
    "today's news",
    "todays news",
  ];

  return newsWords.some(
    (word) =>
      text.includes(word)
  );
}


/* =========================================================
TAVILY SEARCH
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
    query: query.slice(0, 400),
    topic: news
      ? "news"
      : "general",
    search_depth: "basic",
    max_results: 5,
    include_answer: true,
    include_raw_content: false,
  };

  if (news) {
    body.time_range = "week";
  }

  const response =
    await fetch(
      "https://api.tavily.com/search",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
          Authorization:
            `Bearer ${apiKey}`,
        },
        body:
          JSON.stringify(body),
      }
    );

  const data =
    await response.json();

  if (!response.ok) {
    console.error(
      "Tavily API error:",
      data
    );

    if (
      response.status === 429
    ) {
      throw new Error(
        "Web search is temporarily rate-limited. Please try again later."
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
      data?.query || query,

    answer:
      data?.answer || "",

    results:
      results
        .slice(0, 5)
        .map(
          (result) => ({
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
              null,
          })
        )
        .filter(
          (result) =>
            result.url
        ),
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

Title:
${result.title}

URL:
${result.url}

Published:
${
  result.published_date ||
  "Not provided"
}

Content:
${result.content}
`
      )
      .join("\n");

  return `
WEB SEARCH RESULTS

Search query:
${webData.query}

Tavily summary:
${
  webData.answer ||
  "No summary provided."
}

${sources}
`;
}


/* =========================================================
LONG-TERM MEMORY EXTRACTION
========================================================= */

async function extractLongTermMemory(
  supabase,
  anonymousId,
  conversation
) {
  if (
    conversation.length < 8
  ) {
    return;
  }

  if (
    conversation.length % 8 !==
    0
  ) {
    return;
  }

  const apiKey =
    process.env.GROQ_API_KEY;

  if (!apiKey) {
    return;
  }

  const recentConversation =
    conversation
      .slice(-8)
      .map(
        (message) =>
          `${message.role}: ${message.content}`
      )
      .join("\n");

  try {
    const response =
      await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization:
              `Bearer ${apiKey}`,
          },

          body:
            JSON.stringify({
              model:
                "openai/gpt-oss-120b",

              messages: [
                {
                  role:
                    "system",

                  content: `
Analyze this conversation for ONE useful long-term memory about the user.

Only save something that could genuinely improve future conversations.

GOOD:

Long-term projects
Stable preferences
Recurring interests
Important goals
Preferred communication style
Useful technical context
Important decisions

DO NOT SAVE:

Passwords
API keys
Secrets
Temporary emotions
Random questions
Sensitive personal information
One-time details

Return ONLY valid JSON:

{
  "shouldSave": false,
  "category": "general",
  "memory": "",
  "importance": 1
}

If useful:

{
  "shouldSave": true,
  "category": "project",
  "memory": "The user is building an AI assistant named Reze.",
  "importance": 8
}

importance must be 1-10.
`,
                },

                {
                  role:
                    "user",

                  content:
                    recentConversation,
                },
              ],

              temperature:
                0.1,

              max_tokens:
                250,

              response_format: {
                type:
                  "json_object",
              },
            }),
        }
      );

    if (!response.ok) {
      console.error(
        "Groq memory extraction status:",
        response.status
      );

      return;
    }

    const data =
      await response.json();

    const text =
      data?.choices?.[0]
        ?.message
        ?.content;

    if (!text) {
      return;
    }

    let result;

    try {
      result =
        JSON.parse(text);
    } catch {
      console.error(
        "Could not parse memory JSON."
      );

      return;
    }

    if (
      !result.shouldSave ||
      !result.memory ||
      typeof result.memory !==
        "string"
    ) {
      return;
    }

    const importance =
      Math.min(
        10,
        Math.max(
          1,
          Number(
            result.importance
          ) || 5
        )
      );

    await saveMemory(
      supabase,
      anonymousId,
      result.category ||
        "general",
      result.memory.trim(),
      importance
    );
  } catch (error) {
    console.error(
      "Long-term memory error:",
      error
    );
  }
}


/* =========================================================
GROQ CHAT
========================================================= */

async function callGroq(
  messages,
  memories,
  webData = null,
  detailed = false,
  romanQuestion = false
) {
  const apiKey =
    process.env.GROQ_API_KEY;

  if (!apiKey) {
    throw new Error(
      "GROQ_API_KEY is not configured."
    );
  }

  const recentMessages =
    messages
      .filter(
        (message) =>
          message &&
          typeof message.content ===
            "string"
      )
      .slice(-8);

  const memoryText =
    memories.length > 0
      ? memories
          .slice(0, 10)
          .map(
            (memory) =>
              `- ${memory.memory}`
          )
          .join("\n")
      : "No stored memories.";

  const webContext =
    webData
      ? buildWebContext(
          webData
        )
      : "";

  const romanContext =
    romanQuestion
      ? ROMAN_KNOWLEDGE
      : "";

  const responseInstruction =
    detailed
      ? `
The user wants a detailed answer.

Give a useful, well-explained response.

You may use:

- short headings
- bullets
- examples
- explanations

Stay focused on the user's question.
`
      : `
The user did NOT ask for a detailed answer.

Keep the response SHORT.

Usually:

- 1 to 3 sentences.
- Direct answer first.
- Add a small natural personality touch when appropriate.
- Do not give a long explanation.
- Do not list every source detail.
- Do not repeat the question.
`;

  const systemContent = `
${REZE_PERSONALITY}

=========================================================
LONG-TERM MEMORY ABOUT THE USER
=========================================================

${memoryText}

Use memories naturally when relevant.

=========================================================
RESPONSE LENGTH
=========================================================

${responseInstruction}

${
  romanContext
    ? `
=========================================================
BUILT-IN ROMAN HISTORY
=========================================================

The current question is about ancient Rome or Roman history.

Use the following built-in knowledge as historical
background.

Do NOT claim that you searched the internet for this
information.

Do NOT invent facts.

Do not confuse ancient Rome with modern Rome.

${romanContext}
`
    : ""
}

${
  webContext
    ? `
=========================================================
FRESH WEB INFORMATION
=========================================================

The user's question required fresh internet information.

Use the web results below.

Rules:

- Use current information from these results.
- Answer the exact question first.
- Do not dump all search results.
- Never invent facts.
- If sources disagree, mention it briefly when important.

${webContext}
`
    : ""
}
`;

  const groqMessages = [
    {
      role: "system",
      content:
        systemContent,
    },

    ...recentMessages.map(
      (message) => ({
        role:
          message.role ===
          "assistant"
            ? "assistant"
            : "user",

        content:
          message.content,
      })
    ),
  ];

  const response =
    await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",

          Authorization:
            `Bearer ${apiKey}`,
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
                ? 1200
                : 300,
          }),
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
      response.status ===
      429
    ) {
      throw new Error(
        "Reze is temporarily busy because the Groq rate limit has been reached. Please try again later."
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
        httpOnly: true,

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

        path: "/",
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
    content,
  }
) {
  const {
    error,
  } = await supabase
    .from("reze_messages")
    .insert({
      conversation_id:
        conversationId,

      anonymous_id:
        anonymousId,

      user_id:
        null,

      role,

      content,
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
    error,
  } = await supabase
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
          ? `${message.slice(
              0,
              60
            )}...`
          : message,
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
    error,
  } = await supabase
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
        ascending: false,
      }
    )
    .limit(8);

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
    /* -----------------------------------------------------
       SUPABASE
    ----------------------------------------------------- */

    const supabase =
      getSupabase();

    /* -----------------------------------------------------
       REQUEST
    ----------------------------------------------------- */

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
            "Message cannot be empty.",
        },
        {
          status: 400,
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
            "That message is too long.",
        },
        {
          status: 400,
        }
      );
    }

    /* -----------------------------------------------------
       ANONYMOUS ID
    ----------------------------------------------------- */

    const {
      id: anonymousId,
      existingCookie,
    } =
      getAnonymousId(
        request
      );

    let conversationId =
      body?.conversationId ||
      null;

    /* =====================================================
       SPECIAL ANSWERS
    ===================================================== */

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
            null,
        },

        anonymousId,

        existingCookie
      );
    }

    /* =====================================================
       LOAD MEMORIES
    ===================================================== */

    let memories =
      await getMemories(
        supabase,
        anonymousId
      );

    /* =====================================================
       DIRECT MEMORY
    ===================================================== */

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

      memories =
        await getMemories(
          supabase,
          anonymousId
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
            null,
        },

        anonymousId,

        existingCookie
      );
    }

    /* =====================================================
       MEMORY QUESTION
    ===================================================== */

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
            null,
        },

        anonymousId,

        existingCookie
      );
    }

    /* =====================================================
       CREATE CONVERSATION
    ===================================================== */

    if (!conversationId) {
      conversationId =
        await createConversation(
          supabase,
          anonymousId,
          message
        );
    }

    /* =====================================================
       SAVE USER MESSAGE
    ===================================================== */

    const userSaved =
      await saveMessage(
        supabase,
        {
          conversationId,
          anonymousId,
          role: "user",
          content: message,
        }
      );

    if (!userSaved) {
      return NextResponse.json(
        {
          error:
            "Could not save your message.",
        },
        {
          status: 500,
        }
      );
    }

    /* =====================================================
       LOAD RECENT HISTORY
    ===================================================== */

    const recentHistory =
      await loadConversationHistory(
        supabase,
        conversationId,
        anonymousId
      );

    /* =====================================================
       RESPONSE LENGTH
    ===================================================== */

    const detailed =
      wantsDetailedAnswer(
        message
      );

    /* =====================================================
       ROMAN DETECTION
    ===================================================== */

    const romanQuestion =
      isRomanQuestion(
        message
      );

    /*
      IMPORTANT:

      Roman questions do NOT automatically trigger Tavily.

      This means:

      "Who was Julius Caesar?"
      "How powerful was the Roman army?"
      "When did the Roman Empire fall?"
      "Tell me about Augustus."

      can use the built-in Roman knowledge.

      But:

      "What is the latest Roman archaeology discovery?"

      still triggers web search because "latest" is present.
    */

    /* =====================================================
       WEB SEARCH
    ===================================================== */

    let webData =
      null;

    const shouldSearch =
      needsWebSearch(
        message
      );

    if (shouldSearch) {
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

        /*
          Do not kill the entire chat if Tavily fails.
          Reze can still answer using Groq and built-in
          knowledge.
        */

        webData = null;
      }
    }

    /* =====================================================
       GROQ
    ===================================================== */

    let answer;

    try {
      answer =
        await callGroq(
          recentHistory,
          memories,
          webData,
          detailed,
          romanQuestion
        );
    } catch (error) {
      console.error(
        "Groq error:",
        error
      );

      return NextResponse.json(
        {
          error:
            error?.message ||
            "Reze could not answer right now.",
        },
        {
          status:
            error?.message
              ?.toLowerCase()
              ?.includes(
                "rate limit"
              )
              ? 429
              : 500,
        }
      );
    }

    /* =====================================================
       SAVE ASSISTANT MESSAGE
    ===================================================== */

    await saveMessage(
      supabase,
      {
        conversationId,
        anonymousId,
        role: "assistant",
        content: answer,
      }
    );

    /* =====================================================
       UPDATE CONVERSATION
    ===================================================== */

    const {
      error:
        updateConversationError,
    } =
      await supabase
        .from(
          "reze_conversations"
        )
        .update({
          updated_at:
            new Date().toISOString(),
        })
        .eq(
          "id",
          conversationId
        )
        .eq(
          "anonymous_id",
          anonymousId
        );

    if (
      updateConversationError
    ) {
      console.error(
        "Conversation update error:",
        updateConversationError
      );
    }

    /* =====================================================
       LONG-TERM MEMORY
    ===================================================== */

    const completeConversation =
      [
        ...recentHistory,

        {
          role:
            "assistant",

          content:
            answer,
        },
      ];

    try {
      await extractLongTermMemory(
        supabase,
        anonymousId,
        completeConversation
      );
    } catch (
      memoryError
    ) {
      console.error(
        "Memory extraction failed:",
        memoryError
      );
    }

    /* =====================================================
       RESPONSE
    ===================================================== */

    return createRezeResponse(
      {
        answer,

        conversationId,

        webSearchUsed:
          Boolean(webData),

        /*
          Tell the frontend whether the answer also used
          built-in Roman knowledge.
        */

        romanKnowledgeUsed:
          romanQuestion,

        sources:
          webData?.results?.map(
            (result) => ({
              title:
                result.title,

              url:
                result.url,

              published_date:
                result.published_date ||
                null,
            })
          ) || [],
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
          "Reze encountered an unexpected error.",
      },
      {
        status: 500,
      }
    );
  }
}
