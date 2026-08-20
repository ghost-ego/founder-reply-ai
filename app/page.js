import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured" },
        { status: 500 }
      );
    }

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
                  text: `You are FounderReply AI, an expert LinkedIn comment assistant.

Analyze the LinkedIn post below and generate exactly 3 different comments.

COMMENT 1 — THOUGHTFUL:
Give a useful insight and sound conversational.

COMMENT 2 — BOLD:
Give a confident founder-style perspective.

COMMENT 3 — CONCISE:
Give a short, punchy comment that feels natural.

Rules:
- Sound human.
- Do not mention AI.
- Do not use generic praise.
- Do not start with "Great post!"
- Do not use unnecessary hashtags.
- Each comment should be different.
- Keep each comment under 80 words.

Return ONLY valid JSON in exactly this format:

{
  "comments": [
    "Thoughtful comment",
    "Bold comment",
    "Concise comment"
  ]
}

LinkedIn post:
${prompt}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        {
          error:
            data?.error?.message || "Gemini API request failed.",
        },
        { status: response.status }
      );
    }

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return NextResponse.json(
        { error: "Gemini returned an empty response." },
        { status: 500 }
      );
    }

    let result;

    try {
      const cleaned = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      result = JSON.parse(cleaned);
    } catch {
      return NextResponse.json(
        { error: "AI returned an invalid response. Please try again." },
        { status: 500 }
      );
    }

    if (!Array.isArray(result.comments) || result.comments.length !== 3) {
      return NextResponse.json(
        { error: "AI did not return exactly 3 comments." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      comments: result.comments,
    });
  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Something went wrong while generating comments.",
      },
      { status: 500 }
    );
  }
}
