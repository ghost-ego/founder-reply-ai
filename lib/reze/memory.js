import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;

  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    throw new Error("Supabase environment variables are missing.");
  }

  return createClient(url, key);
}

/**
 * Get the user's stored memories.
 */
export async function getMemories(anonymousId) {
  if (!anonymousId) return [];

  try {
    const supabase = getSupabase();

    const { data, error } = await supabase
      .from("reze_memories")
      .select("id, memory, category, importance, created_at")
      .eq("anonymous_id", anonymousId)
      .order("importance", { ascending: false })
      .order("created_at", { ascending: false })
      .limit(10);

    if (error) {
      console.error("Memory read error:", error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error("Memory system error:", error);
    return [];
  }
}

/**
 * Save or update a memory.
 */
export async function saveMemory(
  anonymousId,
  category,
  memory,
  importance = 8
) {
  if (!anonymousId || !category || !memory) {
    return false;
  }

  try {
    const supabase = getSupabase();

    const safeImportance = Math.min(
      10,
      Math.max(1, Number(importance) || 5)
    );

    const { data: existing, error: findError } = await supabase
      .from("reze_memories")
      .select("id")
      .eq("anonymous_id", anonymousId)
      .eq("category", category)
      .limit(1)
      .maybeSingle();

    if (findError) {
      console.error("Memory lookup error:", findError);
      return false;
    }

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
        return false;
      }

      return true;
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
      return false;
    }

    return true;
  } catch (error) {
    console.error("Memory save error:", error);
    return false;
  }
}

/**
 * Detect memories from natural user messages.
 */
export function detectMemory(message) {
  if (!message || typeof message !== "string") {
    return null;
  }

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

/**
 * Answer questions about stored memories.
 */
export function answerMemoryQuestion(message, memories) {
  if (!message) return null;

  const text = message
    .toLowerCase()
    .trim();

  const nameMemory = memories.find(
    (memory) => memory.category === "name"
  );

  const crushMemory = memories.find(
    (memory) => memory.category === "crush"
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

  function extractName(memory) {
    if (!memory?.memory) return null;

    return memory.memory
      .replace("The user's name is ", "")
      .replace(/\.$/, "");
  }

  function extractCrush(memory) {
    if (!memory?.memory) return null;

    return memory.memory
      .replace("The user's crush's name is ", "")
      .replace(/\.$/, "");
  }

  if (asksName && asksCrush) {
    if (nameMemory && crushMemory) {
      return `Your name is ${extractName(
        nameMemory
      )}, and your crush is ${extractCrush(crushMemory)}. 😉`;
    }

    if (nameMemory) {
      return `Your name is ${extractName(
        nameMemory
      )}. I haven't saved your crush's name yet.`;
    }

    if (crushMemory) {
      return `Your crush is ${extractCrush(
        crushMemory
      )}. I don't have your name saved yet.`;
    }

    return "I don't have your name or your crush's name saved yet.";
  }

  if (asksName && nameMemory) {
    return `Your name is ${extractName(nameMemory)}. 😊`;
  }

  if (asksCrush && crushMemory) {
    return `Your crush is ${extractCrush(crushMemory)}. 😉`;
  }

  return null;
}
