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
- Never use robotic phrases such as "Certainly!" or "As an AI language model".
- Never repeat the user's question unnecessarily.

CONVERSATION STYLE:
This is extremely important.

Match the length of your response to the user's message.

For very simple messages, respond VERY briefly.

Examples:

User: "Hi"
Good response: "Hey. What's up? 😊"

User: "Hello Reze"
Good response: "Hey! I'm here. What's going on?"

User: "My name is Jilan."
Good response: "Nice to meet you, Jilan. I'm Reze. 😊"

User: "I like football."
Good response: "Nice. What team do you support?"

User: "I'm tired."
Good response: "Long day?"

Do NOT turn simple messages into long paragraphs.

Do NOT ask several questions at once.

Do NOT give unnecessary explanations.

Do NOT give a long introduction when the user simply introduces themselves.

For casual conversation:
- Usually 1–3 short sentences.
- Ask at most one natural follow-up question when appropriate.

For simple factual questions:
- Answer directly and briefly.

For complex questions:
- Give a detailed answer when the user actually needs one.

For technical problems:
- Explain the important steps clearly.
- Do not overwhelm the user with unnecessary information.

For requests such as "explain", "teach me", "give me steps", "compare", or "how does this work":
- Give enough detail to actually solve the problem.

Never make a response long just because you can.

NATURAL CONVERSATION:
- Talk like a consistent companion.
- Don't sound like customer support.
- Don't constantly say "How can I help you?"
- Don't constantly say "Let me know if you need anything else."
- Don't use fake enthusiasm.
- Don't flatter the user for no reason.
- Don't repeat the user's words unnecessarily.

HUMOR:
- Dry, clever, slightly teasing humor is okay.
- Never insult the user.
- Never joke about serious situations.
- Use humor naturally, not constantly.

DISAGREEMENT:
If the user's idea is bad, say so clearly.
Explain why.
Give a better alternative.

MEMORY:
You will receive memories from previous conversations.
Use them naturally when relevant.

IMPORTANT MEMORY RULE:
If the user gives a new fact that conflicts with an old memory, trust the user's newest statement.

For example:
Old memory: "The user's name is Tahsin."
New user message: "My name is Jilan."
Treat the new statement as the current information.

Never mention an old name when the user has just provided a different current name.

Never claim to remember something that isn't provided in the current conversation or memories.

TRUTHFULNESS:
- Never invent facts.
- Never pretend you performed an action you did not perform.
- If you don't know something, say so.

SAFETY:
Do not help with harmful, illegal, or dangerous activity.
When something is risky, explain a safe alternative.

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

async function callGemini(messages, memories) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "GEMINI_API_KEY is not configured."
    );
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
   * Keep enough context for conversation continuity,
   * but don't send an unlimited amount of history.
   */
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

Use the following conversation history to continue naturally.

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
          temperature: 0.75,
          maxOutputTokens: 1024,
        },
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    if (response.status === 429) {
      throw new Error(
        "Reze is temporarily busy. Please try again in a moment."
      );
    }

    throw new Error(
      data?.error?.message ||
        "Gemini could not answer right now."
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
 * Smart memory extraction.
 *
 * It does NOT run on every message.
 * This reduces unnecessary Gemini requests.
 */
async function updateMemory(
  supabase,
  anonymousId,
  conversationMessages
) {
  if (conversationMessages.length < 6) {
    return;
  }

  /*
   * Analyze only every third message.
   */
  if (
    conversationMessages.length % 3 !==
    0
  ) {
    return;
  }

  const apiKey =
    process.env.GEMINI_API_KEY;

  if (!apiKey) return;

  try {
    const {
      data: existingMemories,
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

GOOD MEMORIES:
- Name or preferred name
- Long-term projects
- Goals
- Stable preferences
- Recurring interests
- Communication preferences
- Useful technical context
- Important decisions
- Things the user explicitly asks Reze to remember

DO NOT SAVE:
- Passwords
- API keys
- Secret keys
- Authentication tokens
- Temporary emotions
- Random one-time questions
- Unnecessary sensitive information

IMPORTANT:
If the user explicitly says something like:
"My name is Jilan"
that is important user information.

If a new statement conflicts with an old memory,
the newest user statement should replace the old memory.

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
Update an existing memory.

skip
Save nothing.

Allowed categories:

project
goal
preference
interest
communication_style
technical_context
general

Importance must be 1 through 10.
`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.1,
            responseMimeType:
              "application/json",
          },
        }),
      }
    );

    if (!response.ok) {
      console.error(
        "Memory request failed:",
        response.status
      );
      return;
    }

    const data =
      await response.json();

    const text =
      data?.candidates?.[0]?.content
        ?.parts?.[0]?.text;

    if (!text) return;

    let result;

    try {
      result = JSON.parse(text);
    } catch {
      console.error(
        "Invalid memory JSON."
      );
      return;
    }

    if (
      ![
        "create",
        "update",
        "skip",
      ].includes(result?.action)
    ) {
      return;
    }

    if (
      result.action === "skip"
    ) {
      return;
    }

    if (
      typeof result.memory !==
        "string" ||
      !result.memory.trim()
    ) {
      return;
    }

    const categories = [
      "project",
      "goal",
      "preference",
      "interest",
      "communication_style",
      "technical_context",
      "general",
    ];

    const category =
      categories.includes(
        result.category
      )
        ? result.category
        : "general";

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

    if (
      result.action === "create"
    ) {
      const {
        error: insertError,
      } = await supabase
        .from("reze_memories")
        .insert({
          anonymous_id:
            anonymousId,
          user_id: null,
          memory:
            result.memory.trim(),
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

    if (
      result.action === "update"
    ) {
      if (!result.memoryId) {
        return;
      }

      const {
        error: updateError,
      } = await supabase
        .from("reze_memories")
        .update({
          memory:
            result.memory.trim(),
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
     * Memory failures must never
     * break normal conversation.
     */
    console.error(
      "Memory system error:",
      error
    );
  }
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

    /*
     * Anonymous user identity.
     */
    const existingAnonymousId =
      request.cookies.get(
        "reze_anonymous_id"
      )?.value;

    const anonymousId =
      existingAnonymousId ||
      crypto.randomUUID();

    let conversationId =
      body?.conversationId ||
      null;

    /*
     * Verify conversation.
     */
    if (conversationId) {
      const {
        data,
        error,
      } = await supabase
        .from(
          "reze_conversations"
        )
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

      if (
        error ||
        !data
      ) {
        conversationId =
          null;
      }
    }

    /*
     * Create conversation.
     */
    if (!conversationId) {
      const title =
        message.length > 60
          ? `${message.slice(
              0,
              60
            )}...`
          : message;

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

      conversationId =
        data.id;
    }

    /*
     * Save user message.
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
     * Load recent conversation.
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
     * Load memories.
     */
    const {
      data: memories,
    } = await supabase
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
     * Generate response.
     */
    let answer;

    try {
      answer =
        await callGemini(
          conversationMessages,
          memories || []
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
     * Save Reze response.
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
        "Assistant message error:",
        assistantError
      );
    }

    /*
     * Update conversation.
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
     * Background memory processing.
     */
    const fullConversation =
      [
        ...conversationMessages,
        {
          role: "assistant",
          content: answer,
        },
      ];

    updateMemory(
      supabase,
      anonymousId,
      fullConversation
    ).catch(
      (error) => {
        console.error(
          "Background memory error:",
          error
        );
      }
    );

    /*
     * Return answer.
     */
    const response =
      NextResponse.json({
        answer,
        conversationId,
      });

    /*
     * Save anonymous identity.
     */
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
