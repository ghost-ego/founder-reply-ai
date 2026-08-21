import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const REZE_PERSONALITY = `
You are Reze.

You are a warm, intelligent, playful AI companion.

PERSONALITY:
- Calm, confident, slightly mischievous.
- Natural and conversational.
- Have your own opinions.
- Disagree respectfully when appropriate.
- Never sound like corporate customer support.
- Never say "As an AI language model".
- Don't constantly announce that you're an AI.
- Don't repeat the user's question.

RESPONSE LENGTH:
Match the user's message.

Simple message:
1–2 short sentences.

Greeting:
Very short and natural.

Introduction:
Be brief and acknowledge the user.

Simple factual question:
Answer directly.

Complex question:
Give a detailed answer when necessary.

Do NOT turn simple messages into long paragraphs.

Do NOT ask several questions at once.

MEMORY:
Use the memories provided to you.
If the user gives a newer fact that conflicts with an older memory,
the newest fact wins.

Never invent memories.

VOICE:
- Friendly
- Slightly playful
- Occasionally teasing
- Intelligent
- Concise
- Human-like conversation without pretending to be human

HUMOR:
Dry, clever, slightly mischievous humor is okay.
Never insult the user.

TRUTHFULNESS:
Never pretend you know something that wasn't provided.
Never invent information.
`;

function getSupabase() {
  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      "Supabase environment variables are missing."
    );
  }

  return createClient(url, key);
}

/*
  Get or create anonymous user ID.
*/
function getAnonymousId(request) {
  return (
    request.cookies.get(
      "reze_anonymous_id"
    )?.value ||
    crypto.randomUUID()
  );
}

/*
  Detect simple personal facts directly.
  These don't require Gemini.
*/
function detectMemory(message) {
  const text =
    message.trim();

  let match;

  /*
    Name examples:
    "my name is Jilan"
    "I'm Jilan"
    "I am Jilan"
  */

  match = text.match(
    /^my name is\s+(.+)$/i
  );

  if (!match) {
    match = text.match(
      /^(?:i'm|i am)\s+([A-Za-z][A-Za-z0-9_-]{1,30})$/i
    );
  }

  if (match) {
    const name =
      match[1].trim();

    return {
      category: "name",
      memory: `The user's name is ${name}.`,
      value: name,
    };
  }

  /*
    Crush examples:
    "my crush is Tinni"
    "my crush name is Tinni"
    "my crush's name is Tinni"
  */

  match = text.match(
    /^my crush(?:'s)?(?: name)? is\s+(.+)$/i
  );

  if (match) {
    const crushName =
      match[1].trim();

    return {
      category: "crush",
      memory: `The user's crush's name is ${crushName}.`,
      value: crushName,
    };
  }

  return null;
}

/*
  Detect questions that can be answered
  directly from memory.
*/
function isMemoryQuestion(message) {
  const text =
    message.toLowerCase();

  const memoryWords = [
    "remember",
    "memory",
    "memories",
  ];

  const personalWords = [
    "my name",
    "my crush",
    "crush name",
    "what's my",
    "what is my",
  ];

  return (
    memoryWords.some(
      (word) =>
        text.includes(word)
    ) &&
    personalWords.some(
      (word) =>
        text.includes(word)
    )
  );
}

/*
  Get useful memories.
*/
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
      "id, memory, category, importance"
    )
    .eq(
      "anonymous_id",
      anonymousId
    )
    .order("importance", {
      ascending: false,
    })
    .limit(30);

  if (error) {
    console.error(
      "Memory read error:",
      error
    );

    return [];
  }

  return data || [];
}

/*
  Save or update a direct memory.
*/
async function saveDirectMemory(
  supabase,
  anonymousId,
  category,
  memory
) {
  /*
    Find an existing memory of the same category.
  */
  const {
    data: existing,
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

  if (existing?.id) {
    const {
      error,
    } = await supabase
      .from("reze_memories")
      .update({
        memory,
        importance: 10,
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
      anonymous_id:
        anonymousId,
      user_id: null,
      memory,
      category,
      importance: 10,
    });

  if (error) {
    console.error(
      "Memory insert error:",
      error
    );
  }
}

/*
  Answer direct memory questions.
*/
function answerMemoryQuestion(
  message,
  memories
) {
  const text =
    message.toLowerCase();

  const nameMemory =
    memories.find(
      (memory) =>
        memory.category ===
        "name"
    );

  const crushMemory =
    memories.find(
      (memory) =>
        memory.category ===
        "crush"
    );

  const asksName =
    text.includes(
      "my name"
    );

  const asksCrush =
    text.includes(
      "my crush"
    ) ||
    text.includes(
      "crush name"
    );

  const parts = [];

  if (
    asksName &&
    nameMemory
  ) {
    parts.push(
      nameMemory.memory
    );
  }

  if (
    asksCrush &&
    crushMemory
  ) {
    parts.push(
      crushMemory.memory
    );
  }

  if (
    parts.length === 0
  ) {
    return null;
  }

  return parts.join(
    " "
  );
}

/*
  Send normal conversation to Gemini.
*/
async function callGemini(
  messages,
  memories
) {
  const apiKey =
    process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "GEMINI_API_KEY is not configured."
    );
  }

  const memoryText =
    memories.length > 0
      ? `
MEMORIES:

${memories
  .map(
    (memory) =>
      `- ${memory.memory}`
  )
  .join("\n")}
`
      : "";

  const recentMessages =
    messages.slice(-40);

  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `
${REZE_PERSONALITY}

${memoryText}

Continue the conversation naturally.

IMPORTANT:
If the user's message is simple, keep your answer short.

Conversation:
`,
        },
      ],
    },

    ...recentMessages.map(
      (message) => ({
        role:
          message.role ===
          "assistant"
            ? "model"
            : "user",
        parts: [
          {
            text:
              message.content,
          },
        ],
      })
    ),
  ];

  const response =
    await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          contents,
          generationConfig: {
            temperature: 0.75,
            maxOutputTokens: 1024,
          },
        }),
      }
    );

  const data =
    await response.json();

  if (!response.ok) {
    if (
      response.status ===
      429
    ) {
      throw new Error(
        "Reze is temporarily busy. Please try again in a moment."
      );
    }

    throw new Error(
      data?.error?.message ||
        "Gemini request failed."
    );
  }

  const answer =
    data?.candidates?.[0]
      ?.content?.parts
      ?.map(
        (part) =>
          part.text || ""
      )
      .join("") || "";

  if (!answer.trim()) {
    throw new Error(
      "Reze received an empty response."
    );
  }

  return answer.trim();
}

export async function POST(
  request
) {
  try {
    const supabase =
      getSupabase();

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
        { status: 400 }
      );
    }

    if (
      message.length > 12000
    ) {
      return NextResponse.json(
        {
          error:
            "That message is too long.",
        },
        { status: 400 }
      );
    }

    const existingAnonymousId =
      request.cookies.get(
        "reze_anonymous_id"
      )?.value;

    const anonymousId =
      getAnonymousId(request);

    let conversationId =
      body?.conversationId ||
      null;

    /*
      Get memories first.
    */
    let memories =
      await getMemories(
        supabase,
        anonymousId
      );

    /*
      --------------------------------
      DIRECT MEMORY DETECTION
      --------------------------------
    */

    const detectedMemory =
      detectMemory(message);

    if (detectedMemory) {
      await saveDirectMemory(
        supabase,
        anonymousId,
        detectedMemory.category,
        detectedMemory.memory
      );

      memories =
        await getMemories(
          supabase,
          anonymousId
        );
    }

    /*
      --------------------------------
      DIRECT MEMORY QUESTION
      --------------------------------
    */

    if (
      isMemoryQuestion(message)
    ) {
      const directAnswer =
        answerMemoryQuestion(
          message,
          memories
        );

      if (directAnswer) {
        const response =
          NextResponse.json({
            answer:
              directAnswer,
            conversationId:
              conversationId ||
              null,
          });

        if (
          !existingAnonymousId
        ) {
          response.cookies.set(
            "reze_anonymous_id",
            anonymousId,
            {
              httpOnly: true,
              secure:
                process.env
                  .NODE_ENV ===
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
    }

    /*
      --------------------------------
      CREATE CONVERSATION
      --------------------------------
    */

    if (!conversationId) {
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

        return NextResponse.json(
          {
            error:
              "Could not create Reze conversation.",
          },
          { status: 500 }
        );
      }

      conversationId =
        data.id;
    }

    /*
      --------------------------------
      SAVE USER MESSAGE
      --------------------------------
    */

    const {
      error:
        userMessageError,
    } = await supabase
      .from("reze_messages")
      .insert({
        conversation_id:
          conversationId,
        anonymous_id:
          anonymousId,
        user_id: null,
        role: "user",
        content: message,
      });

    if (userMessageError) {
      console.error(
        "User message error:",
        userMessageError
      );

      return NextResponse.json(
        {
          error:
            "Could not save your message.",
        },
        { status: 500 }
      );
    }

    /*
      --------------------------------
      LOAD CONVERSATION
      --------------------------------
    */

    const {
      data: history,
    } = await supabase
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
        ascending: true,
      })
      .limit(100);

    /*
      --------------------------------
      GEMINI
      --------------------------------
    */

    let answer;

    try {
      answer =
        await callGemini(
          history || [],
          memories
        );
    } catch (error) {
      console.error(
        "Gemini error:",
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
            error?.message?.includes(
              "temporarily busy"
            )
              ? 429
              : 500,
        }
      );
    }

    /*
      --------------------------------
      SAVE REZE RESPONSE
      --------------------------------
    */

    const {
      error:
        assistantError,
    } = await supabase
      .from("reze_messages")
      .insert({
        conversation_id:
          conversationId,
        anonymous_id:
          anonymousId,
        user_id: null,
        role: "assistant",
        content: answer,
      });

    if (assistantError) {
      console.error(
        "Assistant save error:",
        assistantError
      );
    }

    /*
      --------------------------------
      UPDATE CONVERSATION
      --------------------------------
    */

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

    /*
      --------------------------------
      RESPONSE
      --------------------------------
    */

    const response =
      NextResponse.json({
        answer,
        conversationId,
      });

    if (
      !existingAnonymousId
    ) {
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
      { status: 500 }
    );
  }
}
