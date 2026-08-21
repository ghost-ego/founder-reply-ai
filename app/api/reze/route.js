import { NextResponse } from "next/server";

const IDENTITY_PHRASES = [
  "what is your name",
  "what's your name",
  "who are you",
  "what are you",
  "your name",
];

const CREATOR_PHRASES = [
  "who created you",
  "who made you",
  "who built you",
  "who founded you",
  "who is your founder",
  "who is your creator",
  "who developed you",
  "who created reze",
  "who made reze",
  "who built reze",
  "who founded reze",
];

export async function POST(request) {
  try {
    const body = await request.json();
    const message = body?.message?.trim();

    if (!message) {
      return NextResponse.json(
        {
          error: "Please enter a question.",
        },
        {
          status: 400,
        }
      );
    }

    const lowerMessage = message.toLowerCase();

    // Reze identity
    if (
      IDENTITY_PHRASES.some((phrase) =>
        lowerMessage.includes(phrase)
      )
    ) {
      return NextResponse.json({
        answer: "I am Reze, an AI.",
      });
    }

    // Reze creator/founder
    if (
      CREATOR_PHRASES.some((phrase) =>
        lowerMessage.includes(phrase)
      )
    ) {
      return NextResponse.json({
        answer: "I was created by Tahsin.",
      });
    }

    // Normal AI questions
    const response = await fetch(
      `${request.nextUrl.origin}/api/chat`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `
You are Reze, an AI assistant.

Your identity:
- Your name is Reze.
- You are an AI.
- Do not mention Tahsin unless the user specifically asks who created, made, built, founded, or developed you.
- Be helpful, friendly, natural, and concise.

User question:
${message}

Answer the user directly.
          `.trim(),
          tone: "Friendly",
          length: "Medium",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            data?.error ||
            "Reze could not generate an answer.",
        },
        {
          status: 500,
        }
      );
    }

    let answer = "";

    if (typeof data?.answer === "string") {
      answer = data.answer;
    } else if (typeof data?.response === "string") {
      answer = data.response;
    } else if (typeof data?.message === "string") {
      answer = data.message;
    } else if (Array.isArray(data?.comments)) {
      answer = data.comments.join("\n\n");
    }

    if (!answer) {
      return NextResponse.json(
        {
          error: "The AI returned an empty response.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      answer,
    });
  } catch (error) {
    console.error("REZE API ERROR:", error);

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Something went wrong with Reze.",
      },
      {
        status: 500,
      }
    );
  }
}
