import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

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

function getAnonymousId(request) {
  return (
    request.cookies.get("reze_anonymous_id")?.value ||
    null
  );
}

/* =========================================================
   GET
   - Without conversationId:
     Return conversation history
   - With conversationId:
     Return messages from that conversation
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

    const { searchParams } = new URL(request.url);
    const conversationId =
      searchParams.get("conversationId");

    /* =====================================================
       LOAD ONE CONVERSATION
    ===================================================== */

    if (conversationId) {
      const { data: conversation, error: conversationError } =
        await supabase
          .from("reze_conversations")
          .select("id, title, created_at, updated_at")
          .eq("id", conversationId)
          .eq("anonymous_id", anonymousId)
          .maybeSingle();

      if (conversationError) {
        console.error(
          "Conversation load error:",
          conversationError
        );

        return NextResponse.json(
          {
            error: "Could not load conversation.",
          },
          { status: 500 }
        );
      }

      if (!conversation) {
        return NextResponse.json(
          {
            error: "Conversation not found.",
          },
          { status: 404 }
        );
      }

      const { data: messages, error: messagesError } =
        await supabase
          .from("reze_messages")
          .select("id, role, content, created_at")
          .eq("conversation_id", conversationId)
          .eq("anonymous_id", anonymousId)
          .order("created_at", {
            ascending: true,
          });

      if (messagesError) {
        console.error(
          "Message history error:",
          messagesError
        );

        return NextResponse.json(
          {
            error: "Could not load messages.",
          },
          { status: 500 }
        );
      }

      return NextResponse.json({
        conversation,
        messages: messages || [],
      });
    }

    /* =====================================================
       LOAD ALL CONVERSATIONS
    ===================================================== */

    const { data, error } = await supabase
      .from("reze_conversations")
      .select(
        "id, title, created_at, updated_at"
      )
      .eq("anonymous_id", anonymousId)
      .order("updated_at", {
        ascending: false,
      });

    if (error) {
      console.error(
        "Conversation history error:",
        error
      );

      return NextResponse.json(
        {
          error: "Could not load chat history.",
        },
        { status: 500 }
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
          "Something went wrong.",
      },
      { status: 500 }
    );
  }
}

/* =========================================================
   DELETE CONVERSATION
========================================================= */

export async function DELETE(request) {
  try {
    const supabase = getSupabase();
    const anonymousId = getAnonymousId(request);

    if (!anonymousId) {
      return NextResponse.json(
        {
          error: "No Reze session found.",
        },
        { status: 400 }
      );
    }

    const body = await request.json();

    const conversationId =
      body?.conversationId;

    if (!conversationId) {
      return NextResponse.json(
        {
          error: "Conversation ID is required.",
        },
        { status: 400 }
      );
    }

    /* =====================================================
       DELETE MESSAGES FIRST
    ===================================================== */

    const { error: messagesError } =
      await supabase
        .from("reze_messages")
        .delete()
        .eq(
          "conversation_id",
          conversationId
        )
        .eq(
          "anonymous_id",
          anonymousId
        );

    if (messagesError) {
      console.error(
        "Delete messages error:",
        messagesError
      );

      return NextResponse.json(
        {
          error:
            "Could not delete conversation messages.",
        },
        { status: 500 }
      );
    }

    /* =====================================================
       DELETE CONVERSATION
    ===================================================== */

    const { error: conversationError } =
      await supabase
        .from("reze_conversations")
        .delete()
        .eq(
          "id",
          conversationId
        )
        .eq(
          "anonymous_id",
          anonymousId
        );

    if (conversationError) {
      console.error(
        "Delete conversation error:",
        conversationError
      );

      return NextResponse.json(
        {
          error:
            "Could not delete conversation.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(
      "Delete history error:",
      error
    );

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Could not delete conversation.",
      },
      { status: 500 }
    );
  }
}
