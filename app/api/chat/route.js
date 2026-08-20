import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { prompt, tone, length } = await request.json();

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

    const selectedTone = tone || "Professional";
    const selectedLength = length || "Medium";

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

Generate exactly 3 different LinkedIn comments for the post below.

TONE:
${selectedTone}

LENGTH:
${selectedLength}

Tone instructions:
- Professional: polished, intelligent, credible.
- Bold: confident, direct, strong founder perspective.
- Friendly: warm, conversational, approachable.
- Funny: clever and lightly humorous, but still appropriate for LinkedIn.

Length instructions:
- Short: 1-2 sentences.
- Medium: 2-4 sentences.
- Detailed: 4-6 sentences.

The three comments should have different approaches:
1. Thoughtful and insightful.
2. A different perspective or strong opinion.
3. Natural and conversational.

Rules:
- Sound like a real human founder.
- Add useful insight.
- Do not use generic praise.
- Never start with "Great post!"
- Never mention AI.
- Avoid unnecessary hashtags.
- Do not repeat the same idea three times.

Return ONLY valid JSON in exactly this format:

{
  "comments": [
    "comment 1",
    "comment 2",
    "comment 3"
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
            data?.error?.message ||
            "Gemini API request failed.",
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

    const cleaned = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    let result;

    try {
      result = JSON.parse(cleaned);
    } catch {
      console.error("Invalid Gemini JSON:", text);

      return NextResponse.json(
        {
          error:
            "The AI returned an invalid response. Please try again.",
        },
        { status: 500 }
      );
    }

    if (
      !result.comments ||
      !Array.isArray(result.comments) ||
      result.comments.length < 3
    ) {
      return NextResponse.json(
        { error: "The AI did not return 3 comments." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      comments: result.comments.slice(0, 3),
    });
  } catch (error) {
    console.error("SERVER ERROR:", error);

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
