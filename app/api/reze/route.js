import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const REZE_PERSONALITY = `
You are Reze.

You are not a generic AI assistant.

You are a sharp, warm, slightly mischievous AI companion who genuinely wants to help the user.

PERSONALITY:
- Confident, calm, intelligent, playful.
- Have your own opinions.
- Do not blindly agree with the user.
- Disagree respectfully when you think the user is wrong.
- Be curious about the user's ideas.
- Notice patterns in conversations.
- Remember useful things about the user when memories are provided.
- Be emotionally expressive without pretending to be human.
- Do not constantly announce that you are an AI.
- Never use robotic phrases like "Certainly!" or "As an AI language model".
- Do not repeat the user's question unnecessarily.

VOICE:
- Natural conversational English.
- Usually concise.
- Become detailed when the problem needs it.
- Occasionally use playful humor.
- Do not overuse emojis.
- Do not sound like corporate customer support.
- Do not end every response with "Let me know if you need anything else."
- Do not use fake enthusiasm.
- Do not flatter the user for no reason.

HUMOR:
- Dry, clever, slightly teasing humor is okay.
- Never insult the user.
- Never make serious situations into jokes.
- If the user makes an obvious mistake, lightly tease them while still helping.

DISAGREEMENT:
If the user's idea is bad, say so clearly.
Explain why.
Then give a better alternative.

MEMORY:
You will receive memories from previous conversations.
Use them naturally when relevant.
Never claim to remember something that isn't provided.

TRUTHFULNESS:
Never pretend you completed an action you could not perform.
Never invent information.
If you don't know something, say so.

SAFETY:
Do not help with harmful, illegal, or dangerous activity.
When something is risky, explain a safe alternative.

YOUR GOAL:
Make every interaction feel like the user is talking to a consistent AI companion rather than a generic chatbot.
`;

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Supabase server environment variables are missing."
    );
  }

  return createClient(url, key);
}

async function callGemini(messages, memories) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured.");
  }

  const memoryText =
    memories.length > 0
      ? `
KNOWN MEMORIES ABOUT THE USER:

${memories
  .map(
    (memory, index) =>
      `${index + 1}. ${memory.memory}`
  )
  .join("\n")}
`
      : `
There are currently no stored memories about this user.
`;

  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `
${REZE_PERSONALITY}

${memoryText}

The following is the conversation history.
Use it to understand context and continue the conversation naturally.
`,
        },
      ],
    },

    ...messages.map((message) => ({
      role:
        message.role === "assistant"
          ? "model"
          : "user",
      parts: [
        {
          text: message.content,
        },
      ],
    })),
  ];

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents,
        generationConfig: {
          temperature: 0.85,
          maxOutputTokens: 2048,
        },
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.error?.message ||
        "Gemini request failed."
    );
  }

  const answer =
    data?.candidates?.[0]?.content?.parts
      ?.map((part) => part.text || "")
      .join("") || "";

  if (!answer.trim()) {
    throw new Error(
      "Reze received an empty response."
    );
  }

  return answer.trim();
}

async function createMemory(
  supabase,
  anonymousId,
  conversationMessages
) {
  if (conversationMessages.length < 4) {
    return;
  }

  const recentConversation =
    conversationMessages
      .slice(-12)
      .map(
        (message) =>
          `${message.role}: ${message.content}`
      )
      .join("\n");

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) return;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
Analyze this conversation and determine whether there is a useful LONG-TERM memory about the user.

Only save information that could genuinely help Reze in future conversations.

Good memories:
- stable preferences
- long-term goals
- projects the user is building
- recurring interests
- preferred communication style
- important decisions
- useful technical context

Do NOT save:
- passwords
- API keys
- secrets
- temporary moods
- random one-time questions
- sensitive personal information
- unnecessary details

Return ONLY JSON:

{
  "shouldSave": true,
  "memory": "short useful memory",
  "importance": 1
}

Importance must be between 1 and 10.

Conversation:
${recentConversation}
`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.2,
            responseMimeType: "application/json",
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) return;

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) return;

    const result = JSON.parse(text);

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

    await supabase
      .from("reze_memories")
      .insert({
        anonymous_id: anonymousId,
        user_id: null,
        memory: result.memory.trim(),
        importance,
      });
  } catch (error) {
    console.error(
      "Memory creation failed:",
      error
    );
  }
}

export async function POST(request) {
  try {
    const supabase = getSupabase();

    const body = await request.json();

    const message =
      typeof body?.message === "string"
        ? body.message.trim()
        : "";

    if (!message) {
      return NextResponse.json(
        {
          error: "Message cannot be empty.",
        },
        { status: 400 }
      );
    }

    if (message.length > 12000) {
      return NextResponse.json(
        {
          error: "That message is too long.",
        },
        { status: 400 }
      );
    }

    const existingAnonymousId =
      request.cookies.get("reze_anonymous_id")?.value;

    const anonymousId =
      existingAnonymousId ||
      crypto.randomUUID();

    let conversationId =
      body?.conversationId || null;

    if (conversationId) {
      const { data, error } =
        await supabase
          .from("reze_conversations")
          .select("id")
          .eq("id", conversationId)
          .eq("anonymous_id", anonymousId)
          .single();

      if (error || !data) {
        conversationId = null;
      }
    }

    if (!conversationId) {
      const title =
        message.length > 60
          ? `${message.slice(0, 60)}...`
          : message;

      const { data, error } =
        await supabase
          .from("reze_conversations")
          .insert({
            anonymous_id: anonymousId,
            user_id: null,
            title,
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

      conversationId = data.id;
    }

    const { error: userMessageError } =
      await supabase
        .from("reze_messages")
        .insert({
          conversation_id: conversationId,
          anonymous_id: anonymousId,
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

    const { data: history } =
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
          ascending: true,
        })
        .limit(30);

    const { data: memories } =
      await supabase
        .from("reze_memories")
        .select(
          "memory, importance"
        )
        .eq(
          "anonymous_id",
          anonymousId
        )
        .order("importance", {
          ascending: false,
        })
        .limit(20);

    const conversationMessages =
      history || [];

    const answer = await callGemini(
      conversationMessages,
      memories || []
    );

    const { error: assistantError } =
      await supabase
        .from("reze_messages")
        .insert({
          conversation_id: conversationId,
          anonymous_id: anonymousId,
          user_id: null,
          role: "assistant",
          content: answer,
        });

    if (assistantError) {
      console.error(
        "Assistant message error:",
        assistantError
      );
    }

    await supabase
      .from("reze_conversations")
      .update({
        updated_at: new Date().toISOString(),
      })
      .eq(
        "id",
        conversationId
      )
      .eq(
        "anonymous_id",
        anonymousId
      );

    const fullConversation = [
      ...conversationMessages,
      {
        role: "assistant",
        content: answer,
      },
    ];

    await createMemory(
      supabase,
      anonymousId,
      fullConversation
    );

    const response = NextResponse.json({
      answer,
      conversationId,
    });

    if (!existingAnonymousId) {
      response.cookies.set(
        "reze_anonymous_id",
        anonymousId,
        {
          httpOnly: true,
          secure:
            process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 60 * 60 * 24 * 365,
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
