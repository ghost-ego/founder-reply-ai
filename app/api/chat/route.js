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
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
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
                  text: `You are FounderReply AI, an expert LinkedIn reply assistant.

Write natural, intelligent and human-sounding LinkedIn replies.

Rules:
- Keep replies concise.
- Sound like a real person, not a robot.
- Add useful insight when possible.
- Avoid generic phrases.
- Match the tone of the original post.
- Do not use unnecessary hashtags.
- Do not mention that you are an AI.

User request:
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
        { error: data.error?.message || "Gemini API error" },
        { status: response.status }
      );
    }

    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a reply.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
