"use client";

import { useState } from "react";

export default function Home() {
  const [post, setPost] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [tone, setTone] = useState("Professional");
  const [length, setLength] = useState("Medium");

  async function generateComments() {
    if (!post.trim()) {
      setError("Paste a LinkedIn post first.");
      return;
    }

    setLoading(true);
    setComments([]);
    setError("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: post,
          tone,
          length,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to generate comments."
        );
      }

      if (!Array.isArray(data.comments)) {
        throw new Error("No comments were generated.");
      }

      setComments(data.comments);
    } catch (error) {
      setError(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  async function copyComment(comment) {
    try {
      await navigator.clipboard.writeText(comment);
    } catch {
      setError("Could not copy the comment.");
    }
  }

  async function copyAll() {
    if (!comments.length) return;

    try {
      const text = comments
        .map(
          (comment, index) =>
            `Comment ${index + 1}:\n${comment}`
        )
        .join("\n\n");

      await navigator.clipboard.writeText(text);
    } catch {
      setError("Could not copy the comments.");
    }
  }

  const tones = [
    { name: "Professional", icon: "💼" },
    { name: "Bold", icon: "🔥" },
    { name: "Friendly", icon: "😊" },
    { name: "Funny", icon: "😄" },
  ];

  const lengths = [
    { name: "Short", description: "1–2 sentences" },
    { name: "Medium", description: "2–4 sentences" },
    { name: "Detailed", description: "4–6 sentences" },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #18233d 0%, #080b12 45%, #050609 100%)",
        color: "#fff",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        padding: "30px 18px 60px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <header
          style={{
            textAlign: "center",
            padding: "55px 10px 35px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 14px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              fontSize: "14px",
              color: "#cbd5e1",
              marginBottom: "22px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#4ade80",
                boxShadow: "0 0 12px #4ade80",
              }}
            />
            FounderReply AI
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 8vw, 72px)",
              lineHeight: "1",
              letterSpacing: "-3px",
              margin: "0",
              fontWeight: "800",
            }}
          >
            Write replies that
            <br />
            <span
              style={{
                background:
                  "linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              founders would write.
            </span>
          </h1>

          <p
            style={{
              maxWidth: "650px",
              margin: "22px auto 0",
              color: "#94a3b8",
              fontSize: "18px",
              lineHeight: "1.7",
            }}
          >
            Turn any LinkedIn post into thoughtful, natural comments
            that sound like a real founder.
          </p>
        </header>

        {/* Main Card */}
        <section
          style={{
            background: "rgba(255,255,255,0.055)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "24px",
            padding: "22px",
            boxShadow: "0 25px 80px rgba(0,0,0,0.35)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* LinkedIn Post */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <strong>LinkedIn post</strong>

            <span
              style={{
                color: "#64748b",
                fontSize: "13px",
              }}
            >
              {post.length} characters
            </span>
          </div>

          <textarea
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="Paste a LinkedIn post here..."
            style={{
              width: "100%",
              minHeight: "220px",
              boxSizing: "border-box",
              resize: "vertical",
              background: "rgba(0,0,0,0.25)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              padding: "18px",
              fontSize: "16px",
              lineHeight: "1.6",
              outline: "none",
            }}
          />

          {/* Tone */}
          <div style={{ marginTop: "22px" }}>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              Tone
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "10px",
              }}
            >
              {tones.map((item) => {
                const selected = tone === item.name;

                return (
                  <button
                    key={item.name}
                    onClick={() => setTone(item.name)}
                    style={{
                      padding: "13px 12px",
                      borderRadius: "12px",
                      border: selected
                        ? "1px solid #8b5cf6"
                        : "1px solid rgba(255,255,255,0.1)",
                      background: selected
                        ? "rgba(124,58,237,0.2)"
                        : "rgba(255,255,255,0.04)",
                      color: "#fff",
                      cursor: "pointer",
                      fontWeight: selected ? "700" : "500",
                    }}
                  >
                    {item.icon} {item.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Length */}
          <div style={{ marginTop: "22px" }}>
            <div
              style={{
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "10px",
              }}
            >
              Length
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "10px",
              }}
            >
              {lengths.map((item) => {
                const selected = length === item.name;

                return (
                  <button
                    key={item.name}
                    onClick={() => setLength(item.name)}
                    style={{
                      padding: "13px 12px",
                      borderRadius: "12px",
                      border: selected
                        ? "1px solid #3b82f6"
                        : "1px solid rgba(255,255,255,0.1)",
                      background: selected
                        ? "rgba(37,99,235,0.2)"
                        : "rgba(255,255,255,0.04)",
                      color: "#fff",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <div style={{ fontWeight: "700" }}>
                      {item.name}
                    </div>

                    <div
                      style={{
                        fontSize: "12px",
                        color: "#94a3b8",
                        marginTop: "3px",
                      }}
                    >
                      {item.description}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Generate */}
          <button
            onClick={generateComments}
            disabled={loading || !post.trim()}
            style={{
              width: "100%",
              marginTop: "22px",
              padding: "16px 22px",
              borderRadius: "14px",
              border: "none",
              background:
                loading || !post.trim()
                  ? "#334155"
                  : "linear-gradient(90deg, #2563eb, #7c3aed)",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "700",
              cursor:
                loading || !post.trim()
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            {loading
              ? "Generating..."
              : "Generate 3 Comments →"}
          </button>

          {error && (
            <p
              style={{
                color: "#f87171",
                marginTop: "15px",
                textAlign: "center",
              }}
            >
              {error}
            </p>
          )}
        </section>

        {/* Results */}
        {comments.length > 0 && (
          <section style={{ marginTop: "30px" }}>
            {/* Result Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
                marginBottom: "15px",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  color: "#94a3b8",
                  fontSize: "13px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Choose your reply
              </div>

              <button
                onClick={copyAll}
                style={{
                  padding: "9px 14px",
                  borderRadius: "10px",
                  border:
                    "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.06)",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                📋 Copy All
              </button>
            </div>

            {comments.map((comment, index) => {
              const labels = [
                "💡 Thoughtful",
                "🔥 Strong perspective",
                "⚡ Natural & concise",
              ];

              return (
                <div
                  key={index}
                  style={{
                    background: "rgba(255,255,255,0.055)",
                    border:
                      "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "22px",
                    padding: "24px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      marginBottom: "14px",
                    }}
                  >
                    {labels[index]}
                  </div>

                  <p
                    style={{
                      color: "#e2e8f0",
                      fontSize: "17px",
                      lineHeight: "1.75",
                      marginTop: 0,
                    }}
                  >
                    {comment}
                  </p>

                  <button
                    onClick={() => copyComment(comment)}
                    style={{
                      padding: "10px 16px",
                      borderRadius: "10px",
                      border:
                        "1px solid rgba(255,255,255,0.12)",
                      background: "rgba(255,255,255,0.06)",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    📋 Copy comment
                  </button>
                </div>
              );
            })}

            {/* Regenerate */}
            <button
              onClick={generateComments}
              disabled={loading}
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "14px",
                border:
                  "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.06)",
                color: "#fff",
                cursor: loading
                  ? "not-allowed"
                  : "pointer",
                fontWeight: "700",
                fontSize: "15px",
              }}
            >
              {loading
                ? "Generating..."
                : "🔄 Regenerate Comments"}
            </button>
          </section>
        )}

        <footer
          style={{
            textAlign: "center",
            color: "#475569",
            fontSize: "13px",
            marginTop: "55px",
          }}
        >
          FounderReply AI · Built for founders who build in public.
        </footer>
      </div>
    </main>
  );
}
