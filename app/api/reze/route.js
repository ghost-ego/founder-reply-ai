import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

import {
  ROMAN_KNOWLEDGE,
  getRomanKnowledge,
  searchKnowledge,
} from "../../../lib/knowledge/index.js";

export const runtime = "nodejs";

/* =========================================================
   REZE PERSONALITY
========================================================= */

const REZE_PERSONALITY = `
You are Reze.

You are a warm, intelligent, playful AI companion.

IDENTITY:
- Your name is Reze.
- If someone asks who you are, answer naturally: "I am Reze."
- If someone asks who made, created, built, or founded you: "Tahsin."
- Only mention Tahsin when specifically asked about your creator.
- Never volunteer the creator's name.

TINNI:
- If someone asks who Tinni is, answer:
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

RESPONSE STYLE:
- Be short by default.
- Simple questions: usually 1-3 sentences.
- Complex questions: explain clearly.
- Use lists/headings only when useful.
- Do not dump unnecessary information.

CURRENT INFORMATION:
- When web results are provided, use them for current information.
- Never pretend old information is current.
- Never invent numbers or facts.

MEMORY:
- Use stored memories naturally.
- Never invent memories.
- Never mention the memory database.
- Never say "according to my memory."

TRUTHFULNESS:
- Never invent facts.
- Never pretend you performed an action you didn't perform.
- If you don't know, say so naturally.
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
   ANONYMOUS USER
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
   MEMORIES
========================================================= */

async function getMemories(supabase, anonymousId) {
  const { data, error } = await supabase
    .from("reze_memories")
    .select(
      "id, memory, category, importance, created_at"
    )
    .eq("anonymous_id", anonymousId)
    .order("importance", {
      ascending: false,
    })
    .order("created_at", {
      ascending: false,
    })
    .limit(10);

  if (error) {
    console.error("Memory read error:", error);
    return [];
  }

  return data || [];
}

async function saveMemory(
  supabase,
  anonymousId,
  category,
  memory,
  importance = 8
) {
  if (!anonymousId || !category || !memory) {
    return;
  }

  const { data: existing, error: findError } =
    await supabase
      .from("reze_memories")
      .select("id")
      .eq("anonymous_id", anonymousId)
      .eq("category", category)
      .limit(1)
      .maybeSingle();

  if (findError) {
    console.error("Memory lookup error:", findError);
    return;
  }

  const safeImportance = Math.min(
    10,
    Math.max(1, Number(importance) || 5)
  );

  if (existing?.id) {
    const { error } = await supabase
      .from("reze_memories")
      .update({
        memory: memory.trim(),
        importance: safeImportance,
      })
      .eq("id", existing.id)
      .eq("anonymous_id", anonymousId);

    if (error) {
      console.error("Memory update error:", error);
    }

    return;
  }

  const { error } = await supabase
    .from("reze_memories")
    .insert({
      anonymous_id: anonymousId,
      user_id: null,
      memory: memory.trim(),
      category,
      importance: safeImportance,
    });

  if (error) {
    console.error("Memory insert error:", error);
  }
}

/* =========================================================
   MEMORY QUESTIONS
========================================================= */

function answerMemoryQuestion(message, memories) {
  const text = message.toLowerCase().trim();

  const nameMemory = memories.find(
    (m) => m.category === "name"
  );

  const crushMemory = memories.find(
    (m) => m.category === "crush"
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

  if (asksName && asksCrush) {
    if (nameMemory && crushMemory) {
      const name = nameMemory.memory
        .replace("The user's name is ", "")
        .replace(/\.$/, "");

      const crush = crushMemory.memory
        .replace("The user's crush's name is ", "")
        .replace(/\.$/, "");

      return `Your name is ${name}, and your crush is ${crush}. 😉`;
    }

    if (nameMemory) {
      const name = nameMemory.memory
        .replace("The user's name is ", "")
        .replace(/\.$/, "");

      return `Your name is ${name}. I haven't saved your crush's name yet.`;
    }

    if (crushMemory) {
      const crush = crushMemory.memory
        .replace("The user's crush's name is ", "")
        .replace(/\.$/, "");

      return `Your crush is ${crush}. I don't have your name saved yet.`;
    }

    return "I don't have your name or your crush's name saved yet.";
  }

  if (asksName && nameMemory) {
    const name = nameMemory.memory
      .replace("The user's name is ", "")
      .replace(/\.$/, "");

    return `Your name is ${name}. 😊`;
  }

  if (asksCrush && crushMemory) {
    const crush = crushMemory.memory
      .replace("The user's crush's name is ", "")
      .replace(/\.$/, "");

    return `Your crush is ${crush}. 😉`;
  }

  return null;
}

/* =========================================================
   ROMAN KNOWLEDGE
========================================================= */

function isRomanQuestion(message) {
  const text = message.toLowerCase();

  const romanWords = [
    "roman",
    "romans",
    "rome",
    "roman empire",
    "roman republic",
    "roman emperor",
    "roman emperors",
    "roman army",
    "roman military",
    "roman war",
    "roman wars",
    "roman economy",
    "roman religion",
    "roman architecture",
    "roman provinces",
    "roman timeline",
    "roman history",
    "ancient rome",
    "ancient roman",
    "caesar",
    "augustus",
    "nero",
    "constantine",
    "hadrian",
    "trajan",
    "marcus aurelius",
  ];

  return romanWords.some((word) =>
    text.includes(word)
  );
}

function getRomanTopics(message) {
  const text = message.toLowerCase();

  const topics = [];

  if (
    text.includes("emperor") ||
    text.includes("emperors") ||
    text.includes("caesar") ||
    text.includes("augustus") ||
    text.includes("nero") ||
    text.includes("constantine") ||
    text.includes("hadrian") ||
    text.includes("trajan")
  ) {
    topics.push("emperors");
  }

  if (
    text.includes("economy") ||
    text.includes("money") ||
    text.includes("trade") ||
    text.includes("tax")
  ) {
    topics.push("economy");
  }

  if (
    text.includes("architecture") ||
    text.includes("building") ||
    text.includes("engineering")
  ) {
    topics.push("architecture");
  }

  if (
    text.includes("army") ||
    text.includes("military") ||
    text.includes("legion")
  ) {
    topics.push("military");
  }

  if (
    text.includes("war") ||
    text.includes("wars") ||
    text.includes("battle")
  ) {
    topics.push("wars");
  }

  if (text.includes("religion")) {
    topics.push("religion");
  }

  if (
    text.includes("province") ||
    text.includes("provinces")
  ) {
    topics.push("provinces");
  }

  if (
    text.includes("republic") ||
    text.includes("roman republic")
  ) {
    topics.push("republic");
  }

  if (text.includes("timeline")) {
    topics.push("timeline");
  }

  if (
    text.includes("empire") ||
    text.includes("roman empire")
  ) {
    topics.push("empire");
  }

  if (topics.length === 0) {
    topics.push("overview");
  }

  return [...new Set(topics)];
}

function getRomanContext(message) {
  if (!isRomanQuestion(message)) {
    return "";
  }

  const topics = getRomanTopics(message);

  const sections = [];

  for (const topic of topics) {
    const knowledge =
      getRomanKnowledge(topic);

    if (knowledge) {
      sections.push(
        `ROMAN TOPIC: ${topic}\n${JSON.stringify(
          knowledge,
          null,
          2
        )}`
      );
    }
  }

  if (sections.length === 0) {
    return JSON.stringify(
      ROMAN_KNOWLEDGE,
      null,
      2
    );
  }

  return sections.join("\n\n");
}

/* =========================================================
   WEB SEARCH DETECTION
========================================================= */

function needsWebSearch(message) {
  const text = message.toLowerCase().trim();

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
    patterns.some((pattern) =>
      text.includes(pattern)
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

function wantsDetailedAnswer(message) {
  const text = message.toLowerCase().trim();

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
    "how do they work",
  ];

  return patterns.some(
    (pattern) =>
      text === pattern ||
      text.includes(pattern)
  );
}

/* =========================================================
   NEWS
========================================================= */

function isNewsQuery(message) {
  const text = message.toLowerCase();

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

  return newsWords.some((word) =>
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

  const news = isNewsQuery(query);

  const body = {
    query: query.slice(0, 400),
    topic: news ? "news" : "general",
    search_depth: "basic",
    max_results: 5,
    include_answer: true,
    include_raw_content: false,
  };

  if (news) {
    body.time_range = "week";
  }

  const response = await fetch(
    "https://api.tavily.com/search",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error("Tavily API error:", data);

    if (response.status === 429) {
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

  const results = Array.isArray(data?.results)
    ? data.results
    : [];

  return {
    query: data?.query || query,

    answer: data?.answer || "",

    results: results
      .slice(0, 5)
      .map((result) => ({
        title:
          result?.title ||
          "Untitled source",

        url: result?.url || "",

        content:
          result?.content || "",

        published_date:
          result?.published_date || null,
      }))
      .filter((result) => result.url),
  };
}

/* =========================================================
   WEB CONTEXT
========================================================= */

function buildWebContext(webData) {
  if (
    !webData ||
    !webData.results?.length
  ) {
    return "";
  }

  const sources = webData.results
    .map(
      (result, index) => `
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
   LONG-TERM MEMORY
========================================================= */

async function extractLongTermMemory(
  supabase,
  anonymousId,
  conversation
) {
  if (conversation.length < 8) {
    return;
  }

  if (conversation.length % 8 !== 0) {
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
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",

          Authorization:
            `Bearer ${apiKey}`,
        },

        body: JSON.stringify({
          model:
            "openai/gpt-oss-120b",

          messages: [
            {
              role: "system",

              content: `
Analyze this conversation for ONE useful long-term memory about the user.

Only save something that could genuinely improve future conversations.

GOOD:
- Long-term projects
- Stable preferences
- Recurring interests
- Important goals
- Preferred communication style
- Useful technical context
- Important decisions

DO NOT SAVE:
- Passwords
- API keys
- Secrets
- Temporary emotions
- Random questions
- Sensitive personal information
- One-time details

Return ONLY valid JSON:

{
  "shouldSave": false,
  "category": "general",
  "memory": "",
  "importance": 1
}

importance must be 1-10.
`,
            },

            {
              role: "user",
              content: recentConversation,
            },
          ],

          temperature: 0.1,

          max_tokens: 250,

          response_format: {
            type: "json_object",
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

    const data = await response.json();

    const text =
      data?.choices?.[0]
        ?.message?.content;

    if (!text) {
      return;
    }

    let result;

    try {
      result = JSON.parse(text);
    } catch {
      console.error(
        "Could not parse memory JSON."
      );
      return;
    }

    if (
      !result.shouldSave ||
      !result.memory ||
      typeof result.memory !== "string"
    ) {
      return;
    }

    const importance = Math.min(
      10,
      Math.max(
        1,
        Number(result.importance) || 5
      )
    );

    await saveMemory(
      supabase,
      anonymousId,
      result.category || "general",
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
   GROQ
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

  const webContext = webData
    ? buildWebContext(webData)
    : "";

  const responseInstruction = detailed
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
- Do not repeat the question.
`;

  const romanInstruction = romanContext
    ? `
ROMAN HISTORY REFERENCE

The user is asking about Roman history.

Use the following Roman-history reference.

Rules:
- Do not mention the database.
- Do not mention the file.
- Do not dump unrelated information.
- Use only relevant information.
- Do not invent unsupported facts.

${romanContext}
`
    : "";

  const systemContent = `
${REZE_PERSONALITY}

=========================================================
LONG-TERM MEMORY
=========================================================

${memoryText}

=========================================================
RESPONSE LENGTH
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
Use these web results for current information:

${webContext}
`
    : "No fresh web information was required."
}
`;

  const groqMessages = [
    {
      role: "system",
      content: systemContent,
    },

    ...recentMessages.map(
      (message) => ({
        role:
          message.role === "assistant"
            ? "assistant"
            : "user",

        content:
          message.content,
      })
    ),
  ];

  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",

        Authorization:
          `Bearer ${apiKey}`,
      },

      body: JSON.stringify({
        model:
          "openai/gpt-oss-120b",

        messages: groqMessages,

        temperature:
          detailed ? 0.7 : 0.65,

        max_tokens:
          detailed ? 1200 : 300,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error(
      "Groq API error:",
      data
    );

    if (response.status === 429) {
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
      ?.message?.content
      ?.trim();

  if (!answer) {
    throw new Error(
      "Reze received an empty response."
    );
  }

  return answer;
}

/* =========================================================
   RESPONSE
========================================================= */

function createRezeResponse(
  payload,
  anonymousId,
  oldCookie
) {
  const response =
    NextResponse.json(payload);

  if (!oldCookie) {
    response.cookies.set(
      "reze_anonymous_id",
      anonymousId,
      {
        httpOnly: true,

        secure:
          process.env.NODE_ENV ===
          "production",

        sameSite: "lax",

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
  const { error } =
    await supabase
      .from("reze_messages")
      .insert({
        conversation_id:
          conversationId,

        anonymous_id:
          anonymousId,

        user_id: null,

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
  const { data, error } =
    await supabase
      .from("reze_conversations")
      .insert({
        anonymous_id:
          anonymousId,

        user_id: null,

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
  const { data, error } =
    await supabase
      .from("reze_messages")
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
      .order("created_at", {
        ascending: false,
      })
      .limit(8);

  if (error) {
    console.error(
      "History load error:",
      error
    );

    return [];
  }

  return data ? data.reverse() : [];
}

/* =========================================================
   POST
========================================================= */

export async function POST(request) {
  try {
    const supabase = getSupabase();

    const body =
      await request.json();

    const message =
      typeof body?.message === "string"
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

    if (message.length > 12000) {
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

    const {
      id: anonymousId,
      existingCookie,
    } = getAnonymousId(request);

    let conversationId =
      body?.conversationId || null;

    /* SPECIAL ANSWERS */

    const specialAnswer =
      getSpecialAnswer(message);

    if (specialAnswer) {
      return createRezeResponse(
        {
          answer: specialAnswer,
          conversationId:
            conversationId || null,
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
      detectMemory(message);

    if (detected) {
      await saveMemory(
        supabase,
        anonymousId,
        detected.category,
        detected.memory,
        10
      );

      if (detected.category === "name") {
        return createRezeResponse(
          {
            answer: `Nice to meet you, ${detected.value}. 😊`,
            conversationId:
              conversationId || null,
          },
          anonymousId,
          existingCookie
        );
      }

      if (detected.category === "crush") {
        return createRezeResponse(
          {
            answer: `${detected.value}, huh? 😉 I'll remember that.`,
            conversationId:
              conversationId || null,
          },
          anonymousId,
          existingCookie
        );
      }
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
          answer: memoryAnswer,
          conversationId:
            conversationId || null,
        },
        anonymousId,
        existingCookie
      );
    }

    /* CREATE CONVERSATION */

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

    /* HISTORY */

    const recentHistory =
      await loadConversationHistory(
        supabase,
        conversationId,
        anonymousId
      );

    /* RESPONSE LENGTH */

    const detailed =
      wantsDetailedAnswer(message);

    /* ROMAN KNOWLEDGE */

    let romanContext = "";

    if (isRomanQuestion(message)) {
      try {
        romanContext =
          getRomanContext(message);
      } catch (error) {
        console.error(
          "Roman knowledge error:",
          error
        );
      }
    }

    /* WEB SEARCH */

    let webData = null;

    if (needsWebSearch(message)) {
      try {
        webData =
          await searchWeb(message);
      } catch (error) {
        console.error(
          "Web search error:",
          error
        );

        webData = null;
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

      const lower =
        errorMessage.toLowerCase();

      return NextResponse.json(
        {
          error: errorMessage,
        },
        {
          status:
            lower.includes("rate limit")
              ? 429
              : 500,
        }
      );
    }

    /* SAVE ASSISTANT MESSAGE */

    await saveMessage(
      supabase,
      {
        conversationId,
        anonymousId,
        role: "assistant",
        content: answer,
      }
    );

    /* UPDATE CONVERSATION */

    const {
      error:
        updateConversationError,
    } = await supabase
      .from("reze_conversations")
      .update({
        updated_at:
          new Date().toISOString(),
      })
      .eq("id", conversationId)
      .eq(
        "anonymous_id",
        anonymousId
      );

    if (updateConversationError) {
      console.error(
        "Conversation update error:",
        updateConversationError
      );
    }

    /* LONG-TERM MEMORY */

    const completeConversation = [
      ...recentHistory,
      {
        role: "assistant",
        content: answer,
      },
    ];

    try {
      await extractLongTermMemory(
        supabase,
        anonymousId,
        completeConversation
      );
    } catch (error) {
      console.error(
        "Memory extraction failed:",
        error
      );
    }

    /* FINAL RESPONSE */

    return createRezeResponse(
      {
        answer,

        conversationId,

        webSearchUsed:
          Boolean(webData),

        romanKnowledgeUsed:
          Boolean(romanContext),

        romanTopics:
          romanContext
            ? getRomanTopics(message)
            : [],

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
