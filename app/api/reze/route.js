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
      `${index + 1}. [${memory.category || "general"}] ${memory.memory}`
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

/*
 * Smart memory system.
 *
 * Reze can:
 * - create a new memory
 * - update an existing memory
 * - skip useless information
 */
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
    /*
     * Load existing memories so Gemini can compare
     * new information with what Reze already knows.
     */
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
        "Could not load existing memories:",
        error
      );

      return;
    }

    const memoryText =
      existingMemories?.length > 0
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
You are Reze's long-term memory manager.

Analyze the recent conversation and decide whether it contains useful information that Reze should remember about the user.

The goal is NOT to remember everything.

Only remember information that could genuinely improve future conversations.

GOOD MEMORIES:
- Long-term projects
- Important goals
- Stable preferences
- Recurring interests
- Communication preferences
- Useful technical context
- Important decisions
- Information the user explicitly says Reze should remember

DO NOT SAVE:
- Passwords
- API keys
- Secret keys
- Authentication tokens
- Private credentials
- Temporary emotions
- Random one-time questions
- Unnecessary personal details
- Sensitive information that isn't necessary
- Information that is clearly irrelevant to future conversations

MEMORY CATEGORIES:
- project
- goal
- preference
- interest
- communication_style
- technical_context
- general

You already have these memories:

${memoryText}

Recent conversation:

${recentConversation}

Decide what should happen.

Return ONLY valid JSON in exactly this format:

{
  "action": "create",
  "memoryId": null,
  "memory": "short useful memory",
  "category": "project",
  "importance": 7
}

Allowed actions:

"create"
Create a new memory.

"update"
Update an existing memory because the new conversation changes or improves what Reze already knows.

"skip"
Do not save anything.

If action is "update", memoryId MUST be the ID of the existing memory being updated.

If action is "skip", use:

{
  "action": "skip",
  "memoryId": null,
  "memory": "",
  "category": "general",
  "importance": 1
}

Importance must be a number from 1 to 10.

Keep memories short, factual, and useful.
`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.15,
            responseMimeType: "application/json",
          },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error(
        "Memory Gemini request failed:",
        data?.error?.message
      );

      return;
    }

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]
        ?.text;

    if (!text) return;

    let result;

    try {
      result = JSON.parse(text);
    } catch (error) {
      console.error(
        "Invalid memory JSON:",
        error
      );

      return;
    }

    if (
      !result ||
      !["create", "update", "skip"].includes(
        result.action
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

    /*
     * CREATE NEW MEMORY
     */
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

    /*
     * UPDATE EXISTING MEMORY
     */
    if (result.action === "update") {
      if (!result.memoryId) {
        return;
      }

      const matchingMemory =
        existingMemories?.find(
          (memory) =>
            memory.id === result.memoryId
        );

      if (!matchingMemory) {
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

    /*
     * Get anonymous visitor ID.
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
     * Verify existing conversation.
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
     * Create conversation if necessary.
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
        .limit(30);

    /*
     * Load memories.
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
        .limit(20);

    const conversationMessages =
      history || [];

    /*
     * Ask Gemini to respond as Reze.
     */
    const answer = await callGemini(
      conversationMessages,
      memories || []
    );

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
     * Update conversation timestamp.
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
     * Build complete conversation
     * for memory analysis.
     */
    const fullConversation = [
      ...conversationMessages,
      {
        role: "assistant",
        content: answer,
      },
    ];

    /*
     * Smart memory extraction.
     */
    await createMemory(
      supabase,
      anonymousId,
      fullConversation
    );

    /*
     * Return response.
     */
    const response =
      NextResponse.json({
        answer,
        conversationId,
      });

    /*
     * Save anonymous ID in browser cookie.
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
