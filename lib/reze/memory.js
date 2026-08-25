/* =========================================================
   REZE MEMORY ENGINE
   =========================================================

   Purpose:
   - Detect important information from conversations
   - Decide what is worth remembering
   - Create clean memory records
   - Avoid saving ordinary/temporary messages
   - Prepare memory information for Reze

   This file does NOT directly call Supabase.
   The API route can use these functions with Supabase.
========================================================= */


/* =========================================================
   MEMORY CATEGORIES
========================================================= */

export const MEMORY_CATEGORIES = {
  IDENTITY: "identity",
  PREFERENCE: "preference",
  GOAL: "goal",
  PROJECT: "project",
  RELATIONSHIP: "relationship",
  INTEREST: "interest",
  SKILL: "skill",
  IMPORTANT_EVENT: "important_event",
  OTHER: "other"
};


/* =========================================================
   MEMORY IMPORTANCE
========================================================= */

export const MEMORY_IMPORTANCE = {
  LOW: 3,
  NORMAL: 5,
  IMPORTANT: 7,
  HIGH: 9,
  CRITICAL: 10
};


/* =========================================================
   CLEAN TEXT
========================================================= */

function cleanText(value) {

  if (
    typeof value !== "string"
  ) {
    return "";
  }

  return value
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 1000);
}


/* =========================================================
   NORMALIZE FOR COMPARISON
========================================================= */

function normalize(value) {

  return cleanText(value)
    .toLowerCase()
    .replace(/[.!?,;:]+$/g, "")
    .trim();
}


/* =========================================================
   CREATE MEMORY OBJECT
========================================================= */

function createMemory({
  category,
  memory,
  importance = MEMORY_IMPORTANCE.NORMAL,
  source = "conversation"
}) {

  const cleanMemory =
    cleanText(memory);

  if (!cleanMemory) {
    return null;
  }

  return {
    category,
    memory: cleanMemory,
    importance: Math.min(
      10,
      Math.max(
        1,
        Number(importance) || 5
      )
    ),
    source
  };
}


/* =========================================================
   EXPLICIT MEMORY
========================================================= */

/*
   These are the strongest memories.

   Example:

   "Remember that I am building Reze."

   "Remember I prefer dark mode."

   "Don't forget that my project is called Reze."
*/

function detectExplicitMemory(message) {

  const text =
    cleanText(message);

  if (!text) {
    return null;
  }


  /* -------------------------------------------------------
     REMEMBER THAT
  ------------------------------------------------------- */

  let match =
    text.match(
      /^(?:please\s+)?remember(?:\s+that)?\s+(.+)$/i
    );

  if (match) {

    const value =
      cleanText(match[1]);

    return createMemory({
      category:
        MEMORY_CATEGORIES.OTHER,

      memory:
        value,

      importance:
        MEMORY_IMPORTANCE.HIGH,

      source:
        "explicit"
    });
  }


  /* -------------------------------------------------------
     DON'T FORGET
  ------------------------------------------------------- */

  match =
    text.match(
      /^(?:please\s+)?don't\s+forget(?:\s+that)?\s+(.+)$/i
    );

  if (match) {

    const value =
      cleanText(match[1]);

    return createMemory({
      category:
        MEMORY_CATEGORIES.OTHER,

      memory:
        value,

      importance:
        MEMORY_IMPORTANCE.HIGH,

      source:
        "explicit"
    });
  }


  return null;
}


/* =========================================================
   NAME
========================================================= */

function detectName(message) {

  const text =
    cleanText(message);


  let match =
    text.match(
      /^(?:and\s+)?my\s+name\s+is\s+([A-Za-z][A-Za-z0-9_-]{1,40})$/i
    );

  if (!match) {

    match =
      text.match(
        /^(?:and\s+)?i\s+am\s+([A-Za-z][A-Za-z0-9_-]{1,40})$/i
      );
  }


  if (!match) {

    match =
      text.match(
        /^(?:and\s+)?i'm\s+([A-Za-z][A-Za-z0-9_-]{1,40})$/i
      );
  }


  if (!match) {
    return null;
  }


  const name =
    cleanText(match[1]);


  return createMemory({

    category:
      MEMORY_CATEGORIES.IDENTITY,

    memory:
      `The user's name is ${name}.`,

    importance:
      MEMORY_IMPORTANCE.CRITICAL,

    source:
      "conversation"
  });
}


/* =========================================================
   CRUSH / RELATIONSHIP
========================================================= */

function detectRelationship(message) {

  const text =
    cleanText(message);


  let match =
    text.match(
      /^(?:and\s+)?my\s+crush(?:'s)?(?:\s+name)?\s+is\s+(.+)$/i
    );


  if (!match) {
    return null;
  }


  const crush =
    cleanText(match[1]);


  return createMemory({

    category:
      MEMORY_CATEGORIES.RELATIONSHIP,

    memory:
      `The user's crush's name is ${crush}.`,

    importance:
      MEMORY_IMPORTANCE.HIGH,

    source:
      "conversation"
  });
}


/* =========================================================
   PROJECT DETECTION
========================================================= */

function detectProject(message) {

  const text =
    cleanText(message);


  let match =
    text.match(
      /^(?:i\s+am|i'm|i\s+am\s+currently)\s+(?:building|creating|developing|working\s+on)\s+(.+)$/i
    );


  if (!match) {
    return null;
  }


  const project =
    cleanText(match[1]);


  return createMemory({

    category:
      MEMORY_CATEGORIES.PROJECT,

    memory:
      `The user is working on ${project}.`,

    importance:
      MEMORY_IMPORTANCE.HIGH,

    source:
      "conversation"
  });
}


/* =========================================================
   GOAL DETECTION
========================================================= */

function detectGoal(message) {

  const text =
    cleanText(message);


  const patterns = [
    /^(?:my\s+goal\s+is|my\s+goal\s+is\s+to)\s+(.+)$/i,

    /^(?:i\s+want\s+to)\s+(.+)$/i,

    /^(?:i\s+plan\s+to)\s+(.+)$/i,

    /^(?:i\s+am\s+planning\s+to)\s+(.+)$/i,

    /^(?:i'm\s+planning\s+to)\s+(.+)$/i
  ];


  for (
    const pattern of patterns
  ) {

    const match =
      text.match(pattern);


    if (!match) {
      continue;
    }


    const goal =
      cleanText(match[1]);


    /*
      Ignore very short temporary statements.
    */

    if (
      goal.length < 5
    ) {
      continue;
    }


    return createMemory({

      category:
        MEMORY_CATEGORIES.GOAL,

      memory:
        `The user's goal is to ${goal}.`,

      importance:
        MEMORY_IMPORTANCE.HIGH,

      source:
        "conversation"
    });
  }


  return null;
}


/* =========================================================
   PREFERENCE DETECTION
========================================================= */

function detectPreference(message) {

  const text =
    cleanText(message);


  let match =
    text.match(
      /^(?:i\s+prefer|i\s+like|i\s+love|i\s+don't\s+like|i\s+hate)\s+(.+)$/i
    );


  if (!match) {
    return null;
  }


  const preference =
    cleanText(match[1]);


  if (
    preference.length < 2
  ) {
    return null;
  }


  return createMemory({

    category:
      MEMORY_CATEGORIES.PREFERENCE,

    memory:
      `The user ${text}.`,

    importance:
      MEMORY_IMPORTANCE.NORMAL,

    source:
      "conversation"
  });
}


/* =========================================================
   INTEREST DETECTION
========================================================= */

function detectInterest(message) {

  const text =
    cleanText(message);


  let match =
    text.match(
      /^(?:i\s+am\s+interested\s+in|i'm\s+interested\s+in|i\s+enjoy|i\s+am\s+really\s+into|i'm\s+really\s+into)\s+(.+)$/i
    );


  if (!match) {
    return null;
  }


  const interest =
    cleanText(match[1]);


  if (
    interest.length < 2
  ) {
    return null;
  }


  return createMemory({

    category:
      MEMORY_CATEGORIES.INTEREST,

    memory:
      `The user is interested in ${interest}.`,

    importance:
      MEMORY_IMPORTANCE.NORMAL,

    source:
      "conversation"
  });
}


/* =========================================================
   SKILL DETECTION
========================================================= */

function detectSkill(message) {

  const text =
    cleanText(message);


  let match =
    text.match(
      /^(?:i\s+know|i\s+can|i\s+am\s+good\s+at|i'm\s+good\s+at)\s+(.+)$/i
    );


  if (!match) {
    return null;
  }


  const skill =
    cleanText(match[1]);


  if (
    skill.length < 2
  ) {
    return null;
  }


  return createMemory({

    category:
      MEMORY_CATEGORIES.SKILL,

    memory:
      `The user knows or can ${skill}.`,

    importance:
      MEMORY_IMPORTANCE.NORMAL,

    source:
      "conversation"
  });
}


/* =========================================================
   TEMPORARY MESSAGE FILTER
========================================================= */

function isProbablyTemporary(message) {

  const text =
    normalize(message);


  const temporaryPatterns = [

    "hello",

    "hi",

    "hey",

    "ok",

    "okay",

    "thanks",

    "thank you",

    "good",

    "nice",

    "cool",

    "lol",

    "haha",

    "yes",

    "no",

    "sure",

    "fine",

    "what",

    "why",

    "how",

    "test",

    "testing"

  ];


  return temporaryPatterns.includes(
    text
  );
}


/* =========================================================
   MAIN MEMORY DETECTOR
========================================================= */

export function detectMemory(
  message
) {

  const text =
    cleanText(message);


  if (!text) {
    return null;
  }


  /*
    Never automatically remember extremely
    short conversational messages.
  */

  if (
    text.length < 5 &&
    !/^remember/i.test(text)
  ) {
    return null;
  }


  /*
    Explicit "remember" commands have
    the highest priority.
  */

  const explicit =
    detectExplicitMemory(text);

  if (explicit) {
    return explicit;
  }


  /*
    Temporary conversational messages
    should not become memories.
  */

  if (
    isProbablyTemporary(text)
  ) {
    return null;
  }


  /*
    Identity.
  */

  const name =
    detectName(text);

  if (name) {
    return name;
  }


  /*
    Relationships.
  */

  const relationship =
    detectRelationship(text);

  if (relationship) {
    return relationship;
  }


  /*
    Projects.
  */

  const project =
    detectProject(text);

  if (project) {
    return project;
  }


  /*
    Goals.
  */

  const goal =
    detectGoal(text);

  if (goal) {
    return goal;
  }


  /*
    Preferences.
  */

  const preference =
    detectPreference(text);

  if (preference) {
    return preference;
  }


  /*
    Interests.
  */

  const interest =
    detectInterest(text);

  if (interest) {
    return interest;
  }


  /*
    Skills.
  */

  const skill =
    detectSkill(text);

  if (skill) {
    return skill;
  }


  /*
    Nothing important detected.
  */

  return null;
}


/* =========================================================
   MEMORY DUPLICATE CHECK
========================================================= */

export function isDuplicateMemory(
  newMemory,
  existingMemories = []
) {

  if (!newMemory) {
    return false;
  }


  const newText =
    normalize(
      newMemory.memory
    );


  return existingMemories.some(
    memory => {

      const oldText =
        normalize(
          memory?.memory || ""
        );

      return (
        oldText === newText
      );
    }
  );
}


/* =========================================================
   FIND SAME CATEGORY
========================================================= */

export function findCategoryMemory(
  category,
  existingMemories = []
) {

  return existingMemories.find(
    memory =>
      memory?.category ===
      category
  ) || null;
}


/* =========================================================
   PREPARE MEMORY FOR DATABASE
========================================================= */

export function prepareMemoryForDatabase(
  anonymousId,
  detectedMemory
) {

  if (
    !anonymousId ||
    !detectedMemory
  ) {
    return null;
  }


  return {

    anonymous_id:
      anonymousId,

    user_id:
      null,

    memory:
      detectedMemory.memory,

    category:
      detectedMemory.category,

    importance:
      detectedMemory.importance

  };
}


/* =========================================================
   BUILD MEMORY CONTEXT
========================================================= */

export function buildMemoryContext(
  memories = [],
  limit = 10
) {

  if (
    !Array.isArray(memories) ||
    memories.length === 0
  ) {

    return "No stored memories.";
  }


  return memories

    .filter(
      memory =>
        memory &&
        typeof memory.memory ===
          "string"
    )

    .slice(0, limit)

    .map(
      memory =>
        `- ${memory.memory}`
    )

    .join("\n");
}


/* =========================================================
   MEMORY SUMMARY
========================================================= */

export function summarizeMemories(
  memories = []
) {

  if (
    !Array.isArray(memories)
  ) {

    return {
      total: 0,
      categories: {}
    };
  }


  const categories = {};


  for (
    const memory of memories
  ) {

    const category =
      memory?.category ||
      MEMORY_CATEGORIES.OTHER;


    categories[category] =
      (categories[category] || 0) + 1;
  }


  return {

    total:
      memories.length,

    categories

  };
}


/* =========================================================
   MEMORY COMMAND DETECTION
========================================================= */

export function detectMemoryCommand(
  message
) {

  const text =
    normalize(message);


  if (
    text === "what do you remember about me" ||
    text === "what do you remember about me?"
  ) {

    return "show";
  }


  if (
    text === "forget everything" ||
    text === "forget all my memories"
  ) {

    return "forget_all";
  }


  if (
    text.startsWith("forget ")
  ) {

    return "forget_specific";
  }


  if (
    text.startsWith("remember ")
  ) {

    return "remember";
  }


  return null;
}


/* =========================================================
   EXPORT DEFAULT
========================================================= */

export default {
  detectMemory,
  detectMemoryCommand,
  isDuplicateMemory,
  findCategoryMemory,
  prepareMemoryForDatabase,
  buildMemoryContext,
  summarizeMemories,
  MEMORY_CATEGORIES,
  MEMORY_IMPORTANCE
};
