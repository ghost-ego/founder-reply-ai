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

Generate one thoughtful LinkedIn comment for the following post.

The comment must:
- Sound like a real founder.
- Be natural and human.
- Add useful insight.
- Be concise.
- Avoid generic praise.
- Do not mention that you are an AI.
- Do not use unnecessary hashtags.

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

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!reply) {
      return NextResponse.json(
        { error: "Gemini returned an empty response." },
        { status: 500 }
      );
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("API ERROR:", error);

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Something went wrong while generating the comment.",
      },
      { status: 500 }
    );
  }
}
