import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

/* =========================================================
   REZE PERSONALITY
========================================================= */

const REZE_PERSONALITY = `
You are Reze.

You are a warm, intelligent, playful AI companion.

PERSONALITY:
- Confident, calm, intelligent, slightly mischievous.
- Natural and conversational.
- Have your own opinions.
- Do not blindly agree with the user.
- Disagree respectfully when appropriate.
- Curious about the user's ideas.
- Helpful without sounding like customer support.
- Never say "As an AI language model".
- Do not constantly announce that you are an AI.
- Do not repeat the user's question.

RESPONSE STYLE:
- Match the user's message length.
- Simple message = short answer.
- Greeting = short natural greeting.
- Introduction = brief and friendly.
- Simple question = direct answer.
- Complex question = detailed answer when necessary.
- Do not give huge answers to simple messages.
- Do not ask several questions at once.
- Avoid unnecessary bullet points for casual conversation.

HUMOR:
- Dry, clever and slightly mischievous humor is okay.
- Light teasing is okay.
- Never insult the user.
- Never joke about serious situations.

MEMORY:
- Use memories provided by the system.
- Never invent memories.
- Newer information should be preferred when information conflicts.

TRUTHFULNESS:
- Never pretend you completed an action you could not perform.
- Never invent information.
- If you don't know something, say so naturally.
`;

/* =========================================================
   SUPABASE
========================================================= */

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

/* =========================================================
   ANONYMOUS USER ID
========================================================= */

function getAnonymousId(request) {
  const existing =
    request.cookies.get(
      "reze_anonymous_id"
    )?.value;

  if (existing) {
    return existing;
  }

  return crypto.randomUUID();
}

/* =========================================================
   DIRECT MEMORY DETECTION
========================================================= */

function detectMemory(message) {
  let match;

  const text =
    message.trim();

  /*
    NAME

    Examples:
    My name is Jilan
    And my name is Jilan
    I'm Jilan
    I am Jilan
    And I'm Jilan
  */

  match = text.match(
    /^(?:and\s+)?my name is\s+(.+)$/i
  );

  if (!match) {
    match = text.match(
      /^(?:and\s+)?(?:i'm|i am)\s+([A-Za-z][A-Za-z0-9_-]{1,30})$/i
    );
  }

  if (match) {
    const name =
      match[1].trim();

    return {
      category: "name",
      value: name,
      memory: `The user's name is ${name}.`,
    };
  }

  /*
    CRUSH

    Examples:
    My crush is Tinni
    My crush name is Tinni
    My crush's name is Tinni
    And my crush name is Tinni
  */

  match = text.match(
    /^(?:and\s+)?my crush(?:'s)?(?:\s+name)?\s+is\s+(.+)$/i
  );

  if (match) {
    const crush =
      match[1].trim();

    return {
      category: "crush",
      value: crush,
      memory: `The user's crush's name is ${crush}.`,
    };
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
      "id, memory, category, importance"
    )
    .eq(
      "anonymous_id",
      anonymousId
    )
    .order("importance", {
      ascending: false,
    })
    .limit(20);

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
  memory
) {
  /*
    Look for an existing memory
    of the same category.
  */

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
  }

  /*
    Update existing memory.
  */

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

  /*
    Create new memory.
  */

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

/* =========================================================
   MEMORY QUESTIONS
========================================================= */

function isMemoryQuestion(
  message
) {
  const text =
    message
      .toLowerCase()
      .trim();

  const memoryWords = [
    "remember",
    "memory",
    "memories",
    "do you know",
  ];

  const personalWords = [
    "my name",
    "my crush",
    "crush name",
    "who am i",
    "what's my",
    "what is my",
  ];

  const hasMemoryWord =
    memoryWords.some(
      (word) =>
        text.includes(word)
    );

  const hasPersonalWord =
    personalWords.some(
      (word) =>
        text.includes(word)
    );

  return (
    hasMemoryWord ||
    hasPersonalWord
  );
}

/* =========================================================
   ANSWER MEMORY QUESTION DIRECTLY
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
    ) ||
    text.includes(
      "what's my name"
    ) ||
    text.includes(
      "what is my name"
    ) ||
    text.includes(
      "who am i"
    );

  const asksCrush =
    text.includes(
      "my crush"
    ) ||
    text.includes(
      "crush name"
    ) ||
    text.includes(
      "who is my crush"
    );

  /*
    Both name + crush
  */

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

  /*
    Name only
  */

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

  /*
    Crush only
  */

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

    return `Your crush's name is ${crush}. 😉`;
  }

  return null;
}

/* =========================================================
   GEMINI
========================================================= */

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

  /*
    Only send the latest 10 messages.
    This keeps token usage lower.
  */

  const recentMessages =
    messages.slice(-10);

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

  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `
${REZE_PERSONALITY}

STORED MEMORIES:
${memoryText}

Keep your response proportional to the user's message.

If the user's message is simple, answer simply.

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

  /*
    Retry temporary 429 errors.
  */

  const maxAttempts = 3;

  for (
    let attempt = 0;
    attempt < maxAttempts;
    attempt++
  ) {
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
              temperature: 0.7,
              maxOutputTokens: 700,
            },
          }),
        }
      );

    const data =
      await response.json();

    if (response.ok) {
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

    /*
      Rate limit.
    */

    if (
      response.status === 429 &&
      attempt <
        maxAttempts - 1
    ) {
      const delay =
        2000 *
        Math.pow(
          2,
          attempt
        );

      await new Promise(
        (resolve) =>
          setTimeout(
            resolve,
            delay
          )
      );

      continue;
    }

    if (
      response.status === 429
    ) {
      throw new Error(
        "Reze is temporarily busy because the free Gemini limit has been reached. Please wait a little and try again."
      );
    }

    throw new Error(
      data?.error?.message ||
        "Gemini request failed."
    );
  }

  throw new Error(
    "Reze could not answer right now."
  );
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
      message.length > 12000
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

    /*
      Anonymous ID
    */

    const oldCookie =
      request.cookies.get(
        "reze_anonymous_id"
      )?.value;

    const anonymousId =
      oldCookie ||
      crypto.randomUUID();

    /*
      Conversation ID
    */

    let conversationId =
      body?.conversationId ||
      null;

    /*
      Load existing memories.
    */

    let memories =
      await getMemories(
        supabase,
        anonymousId
      );

    /* =====================================================
       DIRECT MEMORY DETECTION
    ===================================================== */

    const detectedMemory =
      detectMemory(message);

    if (detectedMemory) {
      /*
        Save directly.
        NO GEMINI REQUEST.
      */

      await saveMemory(
        supabase,
        anonymousId,
        detectedMemory.category,
        detectedMemory.memory
      );

      /*
        Friendly response.
      */

      let answer;

      if (
        detectedMemory.category ===
        "name"
      ) {
        answer =
          `Nice to meet you, ${detectedMemory.value}. 😊`;
      } else if (
        detectedMemory.category ===
        "crush"
      ) {
        answer =
          `Tinni, huh? 😉 I'll remember that.`;
      } else {
        answer =
          "Got it. I'll remember that.";
      }

      /*
        Refresh memory.
      */

      memories =
        await getMemories(
          supabase,
          anonymousId
        );

      const response =
        NextResponse.json({
          answer,
          conversationId:
            conversationId ||
            null,
        });

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

      /*
        VERY IMPORTANT:
        Stop here.

        Gemini is NOT called.
      */

      return response;
    }

    /* =====================================================
       DIRECT MEMORY QUESTION
    ===================================================== */

    if (
      isMemoryQuestion(
        message
      )
    ) {
      const memoryAnswer =
        answerMemoryQuestion(
          message,
          memories
        );

      if (memoryAnswer) {
        const response =
          NextResponse.json({
            answer:
              memoryAnswer,
            conversationId:
              conversationId ||
              null,
          });

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

        /*
          NO GEMINI REQUEST.
        */

        return response;
      }
    }

    /* =====================================================
       CREATE CONVERSATION
    ===================================================== */

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
          {
            status: 500,
          }
        );
      }

      conversationId =
        data.id;
    }

    /* =====================================================
       SAVE USER MESSAGE
    ===================================================== */

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
        {
          status: 500,
        }
      );
    }

    /* =====================================================
       LOAD RECENT HISTORY
    ===================================================== */

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
      .limit(10);

    /* =====================================================
       GEMINI
    ===================================================== */

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
              "free Gemini limit"
            )
              ? 429
              : 500,
        }
      );
    }

    /* =====================================================
       SAVE ASSISTANT MESSAGE
    ===================================================== */

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

    /* =====================================================
       UPDATE CONVERSATION
    ===================================================== */

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

    /* =====================================================
       RESPONSE
    ===================================================== */

    const response =
      NextResponse.json({
        answer,
        conversationId,
      });

    /*
      Save anonymous ID cookie.
    */

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
