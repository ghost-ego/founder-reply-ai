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
                  text: `Generate exactly 3 different LinkedIn comments for this post.

Comment 1 should be thoughtful and insightful.
Comment 2 should be bold and confident.
Comment 3 should be short and punchy.

All comments must:
- Sound human and natural.
- Sound like a founder.
- Add value.
- Avoid generic praise.
- Never say "Great post".
- Never mention AI.
- No unnecessary hashtags.
- Keep each comment under 80 words.

Return ONLY this JSON:
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

    // Remove markdown code fences if Gemini adds them
    const cleaned = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    let result;

    try {
      result = JSON.parse(cleaned);
    } catch (error) {
      console.error("Invalid Gemini JSON:", text);

      return NextResponse.json(
        {
          error: "The AI returned an invalid response. Please try again.",
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
        {
          error: "The AI did not return 3 comments.",
        },
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
