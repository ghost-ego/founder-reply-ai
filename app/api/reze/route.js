import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const REZE_PERSONALITY = `
You are Reze.

You are a warm, intelligent, playful AI companion.

PERSONALITY:
- Confident, calm, intelligent, slightly mischievous.
- Natural and conversational.
- Have your own opinions.
- Disagree respectfully when appropriate.
- Never sound like corporate customer support.
- Never say "As an AI language model".
- Do not constantly announce that you are an AI.
- Do not repeat the user's question.

RESPONSE STYLE:
- Match the user's message length.
- Simple message = short answer.
- Greeting = short natural greeting.
- Simple introduction = brief response.
- Complex question = detailed response when necessary.
- Do not give huge answers to simple questions.
- Do not ask several questions at once.

HUMOR:
- Dry, clever and slightly teasing humor is okay.
- Never insult the user.
- Never joke about serious situations.

MEMORY:
- Use the memories provided.
- Never invent memories.
- The newest memory should be preferred when information conflicts.

TRUTHFULNESS:
- Never pretend you performed an action you did not perform.
- Never invent information.
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

function getAnonymousId(request) {
  return (
    request.cookies.get(
      "reze_anonymous_id"
    )?.value ||
    crypto.randomUUID()
  );
}

/*
  Detect important personal facts
  WITHOUT calling Gemini.
*/
function detectMemory(message) {
  let match;

  match = message.match(
    /^my name is\s+(.+)$/i
  );

  if (!match) {
    match = message.match(
      /^(?:i'm|i am)\s+([A-Za-z][A-Za-z0-9_-]{1,30})$/i
    );
  }

  if (match) {
    const name =
      match[1].trim();

    return {
      category: "name",
      memory: `The user's name is ${name}.`,
    };
  }

  match = message.match(
    /^my crush(?:'s)?(?: name)? is\s+(.+)$/i
  );

  if (match) {
    const crush =
      match[1].trim();

    return {
      category: "crush",
      memory: `The user's crush's name is ${crush}.`,
    };
  }

  return null;
}

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

async function saveMemory(
  supabase,
  anonymousId,
  category,
  memory
) {
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

function answerMemoryQuestion(
  message,
  memories
) {
  const text =
    message.toLowerCase();

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
    text.includes("what is my name");

  const asksCrush =
    text.includes("my crush") ||
    text.includes("crush name") ||
    text.includes("who is my crush");

  if (
    asksName &&
    asksCrush &&
    nameMemory &&
    crushMemory
  ) {
    return `${nameMemory.memory.replace(
      "The user's name is ",
      "Your name is "
    )} And your crush's name is ${crushMemory.memory.replace(
      "The user's crush's name is ",
      ""
    )}.`;
  }

  if (
    asksName &&
    nameMemory
  ) {
    return nameMemory.memory.replace(
      "The user's name is ",
      "Your name is "
    ) + ".";
  }

  if (
    asksCrush &&
    crushMemory
  ) {
    return (
      "Your crush's name is " +
      crushMemory.memory.replace(
        "The user's crush's name is ",
        ""
      ) +
      "."
    );
  }

  return null;
}

function looksLikeMemoryQuestion(
  message
) {
  const text =
    message.toLowerCase();

  return (
    text.includes("remember") ||
    text.includes("my name") ||
    text.includes("my crush") ||
    text.includes("what's my") ||
    text.includes("what is my")
  );
}

function isVerySimpleMessage(
  message
) {
  const text =
    message.toLowerCase().trim();

  const simple = [
    "hi",
    "hello",
    "hey",
    "yo",
    "sup",
    "good morning",
    "good afternoon",
    "good evening",
    "thanks",
    "thank you",
    "ok",
    "okay",
  ];

  return simple.includes(text);
}

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
    Only send the last 12 messages.
    This reduces token usage.
  */
  const recentMessages =
    messages.slice(-12);

  const memoryText =
    memories.length
      ? memories
          .slice(0, 10)
          .map(
            (m) =>
              `- ${m.memory}`
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
    Retry only when Gemini says 429.
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

    if (
      response.status === 429 &&
      attempt <
        maxAttempts - 1
    ) {
      /*
        2 sec → 4 sec
      */
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

    const oldCookie =
      request.cookies.get(
        "reze_anonymous_id"
      )?.value;

    const anonymousId =
      oldCookie ||
      crypto.randomUUID();

    let conversationId =
      body?.conversationId ||
      null;

    /*
      Load memories.
    */
    let memories =
      await getMemories(
        supabase,
        anonymousId
      );

    /*
      Save direct personal memory.
    */
    const detected =
      detectMemory(message);

    if (detected) {
      await saveMemory(
        supabase,
        anonymousId,
        detected.category,
        detected.memory
      );

      memories =
        await getMemories(
          supabase,
          anonymousId
        );
    }

    /*
      Answer memory questions
      WITHOUT Gemini.
    */
    if (
      looksLikeMemoryQuestion(
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
            conversationId,
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

        return response;
      }
    }

    /*
      Simple greetings still go to Gemini,
      but with tiny context and tiny output.
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
      Save user message.
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
      Load only recent conversation.
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
      .limit(12);

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

    /*
      Save Reze response.
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
      Update conversation.
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

    const response =
      NextResponse.json({
        answer,
        conversationId,
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
