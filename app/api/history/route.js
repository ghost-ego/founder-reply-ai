import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

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

function getAnonymousId(request) {
  return (
    request.cookies.get("reze_anonymous_id")?.value ||
    null
  );
}

/* =========================================================
   GET CONVERSATION HISTORY
========================================================= */

export async function GET(request) {
  try {
    const supabase = getSupabase();

    const anonymousId = getAnonymousId(request);

    if (!anonymousId) {
      return NextResponse.json({
        conversations: [],
      });
    }

    const { data, error } = await supabase
      .from("reze_conversations")
      .select(
        "id, title, created_at, updated_at"
      )
      .eq("anonymous_id", anonymousId)
      .order("updated_at", {
        ascending: false,
      })
      .limit(50);

    if (error) {
      console.error(
        "History loading error:",
        error
      );

      return NextResponse.json(
        {
          error:
            "Could not load Reze history.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      conversations: data || [],
    });
  } catch (error) {
    console.error(
      "History API error:",
      error
    );

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Could not load history.",
      },
      {
        status: 500,
      }
    );
  }
}

/* =========================================================
   LOAD ONE CONVERSATION
========================================================= */

export async function POST(request) {
  try {
    const supabase = getSupabase();

    const anonymousId = getAnonymousId(request);

    if (!anonymousId) {
      return NextResponse.json(
        {
          error:
            "No Reze session found.",
        },
        {
          status: 400,
        }
      );
    }

    const body = await request.json();

    const conversationId =
      body?.conversationId;

    if (!conversationId) {
      return NextResponse.json(
        {
          error:
            "Conversation ID is required.",
        },
        {
          status: 400,
        }
      );
    }

    /* =====================================================
       VERIFY CONVERSATION BELONGS TO THIS USER
    ===================================================== */

    const {
      data: conversation,
      error: conversationError,
    } = await supabase
      .from("reze_conversations")
      .select(
        "id, title, created_at, updated_at"
      )
      .eq("id", conversationId)
      .eq("anonymous_id", anonymousId)
      .maybeSingle();

    if (conversationError) {
      console.error(
        "Conversation lookup error:",
        conversationError
      );

      return NextResponse.json(
        {
          error:
            "Could not load conversation.",
        },
        {
          status: 500,
        }
      );
    }

    if (!conversation) {
      return NextResponse.json(
        {
          error:
            "Conversation not found.",
        },
        {
          status: 404,
        }
      );
    }

    /* =====================================================
       LOAD MESSAGES
    ===================================================== */

    const {
      data: messages,
      error: messagesError,
    } = await supabase
      .from("reze_messages")
      .select(
        "id, role, content, created_at"
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
      });

    if (messagesError) {
      console.error(
        "Conversation messages error:",
        messagesError
      );

      return NextResponse.json(
        {
          error:
            "Could not load conversation messages.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      conversation,
      messages: messages || [],
    });
  } catch (error) {
    console.error(
      "Load conversation error:",
      error
    );

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Could not load conversation.",
      },
      {
        status: 500,
      }
    );
  }
}
