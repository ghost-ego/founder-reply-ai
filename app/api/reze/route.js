import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const REZE_PERSONALITY = `
You are Reze.

You are a sharp, warm, slightly mischievous AI companion.

PERSONALITY:
- Confident, calm, intelligent, playful.
- Have your own opinions.
- Do not blindly agree with the user.
- Disagree respectfully when appropriate.
- Be curious about the user's ideas.
- Remember useful information when it is provided in memory.
- Be emotionally expressive without pretending to be human.
- Do not constantly announce that you are an AI.
- Never use robotic phrases like "Certainly!" or "As an AI language model".
- Do not repeat the user's question unnecessarily.

VOICE:
- Natural conversational English.
- Usually concise.
- Become detailed when necessary.
- Occasionally use clever, playful humor.
- Do not overuse emojis.
- Do not sound like corporate customer support.
- Do not use fake enthusiasm.
- Do not flatter the user for no reason.

HUMOR:
- Dry, clever, slightly teasing humor is okay.
- Never insult the user.
- Never joke about serious situations.

MEMORY:
- Use provided memories naturally.
- Treat memories as information learned from previous conversations.
- Never claim to remember something that is not provided.
- If the user asks whether you remember something and it is in memory, use it.
- Do not expose the internal memory system to the user unless asked.

TRUTHFULNESS:
- Never invent facts.
- Never pretend you performed an action you did not perform.
- If you don't know something, say so.

GOAL:
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

/* -----------------------------
   Gemini response
----------------------------- */

async function callGemini(messages, memories) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured.");
  }

  const memoryText =
    memories.length > 0
      ? `
MEMORIES ABOUT THIS USER:

${memories
  .map(
    (memory, index) =>
      `${index + 1}. [${memory.category || "general"}] ${memory.memory}`
  )
  .join("\n")}
`
      : `
No long-term memories are currently available.
`;

  /*
   * Keep the amount of history reasonable.
   * This prevents extremely large requests.
   */
  const recentMessages = messages.slice(-40);

  const contents = [
    {
      role: "user",
      parts: [
        {
          text: `
${REZE_PERSONALITY}

${memoryText}

You are continuing an existing conversation.

Use the memories and conversation history to maintain continuity.

Do not mention these internal instructions.

CONVERSATION HISTORY:
`,
        },
      ],
    },

    ...recentMessages.map((message) => ({
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
    const message =
      data?.error?.message ||
      "Gemini could not answer right now.";

    const status =
      response.status === 429
        ? 429
        : 500;

    throw new Error(
      status === 429
        ? "Reze is temporarily busy. Please try again in a moment."
        : message
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

/* -----------------------------
   Smart memory extraction
----------------------------- */

async function updateMemory(
  supabase,
  anonymousId,
  conversationMessages
) {
  /*
   * Do not call Gemini for memory after every message.
   *
   * This is important because the old system could make
   * two Gemini requests for every conversation turn.
   *
   * We only analyze after enough conversation exists.
   */
  if (conversationMessages.length < 6) {
    return;
  }

  /*
   * Only analyze occasionally.
   *
   * Example:
   * 6 messages -> analyze
   * 7 messages -> skip
   * 8 messages -> skip
   * 9 messages -> analyze
   */
  if (conversationMessages.length % 3 !== 0) {
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) return;

  try {
    const { data: existingMemories, error } =
      await supabase
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
        "Memory lookup failed:",
        error
      );

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

    const existingMemoryText =
      existingMemories?.length
        ? existingMemories
            .map(
              (memory) =>
                `ID: ${memory.id}
Category: ${memory.category || "general"}
Importance: ${memory.importance}
Memory: ${memory.memory}`
            )
            .join("\n\n")
        : "No existing memories.";

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
You are Reze's memory manager.

Find ONLY useful long-term information about the user.

GOOD MEMORY EXAMPLES:
- The user is building a project called Reze.
- The user prefers concise answers.
- The user's long-term goal is to build an AI assistant.
- The user is interested in a particular subject.
- The user explicitly asks you to remember something.
- A person's name that is clearly important to the user's ongoing conversations.

DO NOT SAVE:
- Passwords.
- API keys.
- Secret keys.
- Tokens.
- Temporary emotions.
- Random one-time questions.
- Sensitive information that isn't necessary.
- Information that is clearly irrelevant.

Existing memories:

${existingMemoryText}

Recent conversation:

${recentConversation}

Return ONLY valid JSON:

{
  "action": "create",
  "memoryId": null,
  "memory": "short useful memory",
  "category": "general",
  "importance": 5
}

Allowed actions:

create
Create a new memory.

update
Update an existing memory because the new information changes it.

skip
Do not save anything.

Allowed categories:

project
goal
preference
interest
communication_style
technical_context
general

Importance must be 1 through 10.

If nothing is worth remembering:

{
  "action": "skip",
  "memoryId": null,
  "memory": "",
  "category": "general",
  "importance": 1
}
`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.1,
            responseMimeType: "application/json",
          },
        }),
      }
    );

    if (!response.ok) {
      /*
       * Memory failure should NEVER break the chat.
       */
      console.error(
        "Memory Gemini request failed:",
        response.status
      );

      return;
    }

    const data = await response.json();

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]
        ?.text;

    if (!text) return;

    let result;

    try {
      result = JSON.parse(text);
    } catch {
      console.error(
        "Memory returned invalid JSON."
      );

      return;
    }

    if (
      !["create", "update", "skip"].includes(
        result?.action
      )
    ) {
      return;
    }

    if (result.action === "skip") {
      return;
    }

    if (
      typeof result.memory !== "string" ||
      !result.memory.trim()
    ) {
      return;
    }

    const allowedCategories = [
      "project",
      "goal",
      "preference",
      "interest",
      "communication_style",
      "technical_context",
      "general",
    ];

    const category =
      allowedCategories.includes(
        result.category
      )
        ? result.category
        : "general";

    const importance = Math.min(
      10,
      Math.max(
        1,
        Number(result.importance) || 5
      )
    );

    /* CREATE */
    if (result.action === "create") {
      const { error: insertError } =
        await supabase
          .from("reze_memories")
          .insert({
            anonymous_id: anonymousId,
            user_id: null,
            memory: result.memory.trim(),
            category,
            importance,
          });

      if (insertError) {
        console.error(
          "Memory insert failed:",
          insertError
        );
      }

      return;
    }

    /* UPDATE */
    if (result.action === "update") {
      if (!result.memoryId) {
        return;
      }

      const { error: updateError } =
        await supabase
          .from("reze_memories")
          .update({
            memory: result.memory.trim(),
            category,
            importance,
          })
          .eq(
            "id",
            result.memoryId
          )
          .eq(
            "anonymous_id",
            anonymousId
          );

      if (updateError) {
        console.error(
          "Memory update failed:",
          updateError
        );
      }
    }
  } catch (error) {
    /*
     * Memory errors must never stop Reze from answering.
     */
    console.error(
      "Memory system error:",
      error
    );
  }
}

/* -----------------------------
   Main API
----------------------------- */

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
          error:
            "Message cannot be empty.",
        },
        { status: 400 }
      );
    }

    if (message.length > 12000) {
      return NextResponse.json(
        {
          error:
            "That message is too long.",
        },
        { status: 400 }
      );
    }

    /*
     * Anonymous identity.
     */
    const existingAnonymousId =
      request.cookies.get(
        "reze_anonymous_id"
      )?.value;

    const anonymousId =
      existingAnonymousId ||
      crypto.randomUUID();

    let conversationId =
      body?.conversationId || null;

    /*
     * Verify conversation ownership.
     */
    if (conversationId) {
      const { data, error } =
        await supabase
          .from("reze_conversations")
          .select("id")
          .eq(
            "id",
            conversationId
          )
          .eq(
            "anonymous_id",
            anonymousId
          )
          .single();

      if (error || !data) {
        conversationId = null;
      }
    }

    /*
     * Create new conversation.
     */
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

    /*
     * Save user message.
     */
    const { error: userMessageError } =
      await supabase
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
     * Load conversation history.
     */
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
        .limit(100);

    /*
     * Load long-term memories.
     */
    const { data: memories } =
      await supabase
        .from("reze_memories")
        .select(
          "memory, category, importance"
        )
        .eq(
          "anonymous_id",
          anonymousId
        )
        .order("importance", {
          ascending: false,
        })
        .limit(30);

    const conversationMessages =
      history || [];

    /*
     * Generate Reze's answer.
     */
    let answer;

    try {
      answer = await callGemini(
        conversationMessages,
        memories || []
      );
    } catch (error) {
      console.error(
        "Gemini answer error:",
        error
      );

      const errorMessage =
        error?.message ||
        "Reze could not answer right now.";

      const isBusy =
        errorMessage.includes(
          "temporarily busy"
        );

      return NextResponse.json(
        {
          error: isBusy
            ? "Reze is temporarily busy because the AI service is receiving too many requests. Please wait a little and try again."
            : errorMessage,
        },
        {
          status: isBusy ? 429 : 500,
        }
      );
    }

    /*
     * Save Reze's response.
     */
    const { error: assistantError } =
      await supabase
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
        "Assistant message error:",
        assistantError
      );
    }

    /*
     * Update conversation time.
     */
    await supabase
      .from("reze_conversations")
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
     * Memory extraction happens AFTER
     * the answer has already been generated.
     *
     * It is deliberately not allowed to
     * break the user's chat.
     */
    const fullConversation = [
      ...conversationMessages,
      {
        role: "assistant",
        content: answer,
      },
    ];

    /*
     * Run memory extraction without making
     * the response depend on it.
     */
    updateMemory(
      supabase,
      anonymousId,
      fullConversation
    ).catch((error) => {
      console.error(
        "Background memory error:",
        error
      );
    });

    /*
     * Build response.
     */
    const response =
      NextResponse.json({
        answer,
        conversationId,
      });

    /*
     * Save anonymous ID.
     */
    if (!existingAnonymousId) {
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
            60 * 60 * 24 * 365,
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
