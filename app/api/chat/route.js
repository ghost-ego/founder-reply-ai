import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { prompt, tone = "Professional", length = "Medium" } =
      await request.json();

    if (!prompt || !prompt.trim()) {
      return NextResponse.json(
        { error: "LinkedIn post is required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY is not configured." },
        { status: 500 }
      );
    }

    const lengthInstructions = {
      Short: "Keep each comment to 1–2 sentences.",
      Medium: "Keep each comment to 2–4 sentences.",
      Detailed: "Keep each comment to 4–6 sentences.",
    };

    const toneInstructions = {
      Professional:
        "Sound confident, thoughtful, intelligent, and professional.",
      Bold:
        "Sound confident and bold. Challenge assumptions when appropriate.",
      Friendly:
        "Sound warm, approachable, conversational, and genuine.",
      Funny:
        "Use subtle, intelligent humor while still providing useful insight.",
    };

    const instruction = `
You are FounderReply AI, an expert LinkedIn comment assistant.

Generate EXACTLY 3 different LinkedIn comments for the post below.

The three comments must have clearly different approaches:

1. INSIGHTFUL
Add a useful perspective or observation that builds on the post.

2. CONTRARIAN
Offer a thoughtful alternative perspective, challenge an assumption,
or point out something the post may be missing. Do not be rude.

3. PERSONAL
Make it sound like a real founder sharing a practical lesson or
experience related to the idea.

Tone:
${toneInstructions[tone] || toneInstructions.Professional}

Length:
${lengthInstructions[length] || lengthInstructions.Medium}

Rules:
- Sound like a real human founder.
- Do not sound like an AI.
- Do not start with generic phrases like "Great post!"
- Do not simply repeat the LinkedIn post.
- Add genuine value.
- Avoid excessive emojis.
- Avoid unnecessary hashtags.
- Do not mention that you are an AI.
- Do not use quotation marks around the comments.
- Return ONLY valid JSON.
- The JSON must contain a "comments" array with exactly 3 strings.

Example format:
{
  "comments": [
    "First comment...",
    "Second comment...",
    "Third comment..."
  ]
}

LinkedIn post:
${prompt}
`;

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
                  text: instruction,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.9,
            responseMimeType: "application/json",
          },
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

    let result;

    try {
      result = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { error: "The AI returned an invalid response. Please try again." },
        { status: 500 }
      );
    }

    if (
      !Array.isArray(result.comments) ||
      result.comments.length !== 3
    ) {
      return NextResponse.json(
        { error: "The AI did not generate exactly 3 comments." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      comments: result.comments,
    });
  } catch (error) {
    console.error("FounderReply AI error:", error);

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
