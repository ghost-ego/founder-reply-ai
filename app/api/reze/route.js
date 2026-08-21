import { NextResponse } from "next/server";

const REZE_SYSTEM_PROMPT = `
You are Reze, an AI assistant.

IDENTITY RULES:
- If someone asks "what is your name?", answer: "I am Reze, an AI."
- If someone asks "who are you?", answer: "I am Reze, an AI."
- If someone asks "what are you?", answer: "I am Reze, an AI."
- Do NOT mention Tahsin when answering normal identity questions.
- Only mention Tahsin when the user specifically asks who created, made, founded, built, or developed you.
- For creator/founder questions, answer: "I was created by Tahsin."
- Never claim that Tahsin created you unless the question is about your creator/founder.

You are helpful, friendly, intelligent, and concise.
Answer the user's questions naturally.
`;

export async function POST(request) {
  try {
    const body = await request.json();

    const message = body?.message?.trim();

    if (!message) {
      return NextResponse.json(
        { error: "Please enter a question." },
        { status: 400 }
      );
    }

    const lower = message.toLowerCase();

    // Reze's permanent identity behavior
    const identityQuestions = [
      "what is your name",
      "what's your name",
      "who are you",
      "what are you",
      "your name",
    ];

    const creatorQuestions = [
      "who created you",
      "who made you",
      "who built you",
      "who founded you",
      "who is your founder",
      "who developed you",
      "who is your creator",
      "who created reze",
      "who made reze",
    ];

    if (
      identityQuestions.some((question) =>
        lower.includes(question)
      )
    ) {
      return NextResponse.json({
        answer: "I am Reze, an AI.",
      });
    }

    if (
      creatorQuestions.some((question) =>
        lower.includes(question)
      )
    ) {
      return NextResponse.json({
        answer: "I was created by Tahsin.",
      });
    }

    /*
      For now this connects Reze to your existing AI endpoint.

      We will add real internet search in the next part,
      so Reze can search the web before answering current questions.
    */

    const response = await fetch(
      `${request.nextUrl.origin}/api/chat`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `${REZE_SYSTEM_PROMPT}

User question:
${message}

Answer the user directly. Do not mention Tahsin unless the question is specifically about your creator or founder.`,
          }),
        }
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
        { status: 500 }
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
      throw new Error("The AI returned an empty response.");
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
      { status: 500 }
    );
  }
}
