"use client";

import { useState } from "react";

export default function Home() {
  const [post, setPost] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  async function generateComments() {
    if (!post.trim()) return;

    setLoading(true);
    setComments([]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: post,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate comment.");
      }

      if (data.reply) {
        setComments([data.reply]);
      } else {
        setComments(["No comment was generated."]);
      }
    } catch (error) {
      setComments([
        error.message || "Something went wrong. Please try again.",
      ]);
    } finally {
      setLoading(false);
    }
  }

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
            Turn any LinkedIn post into a thoughtful, natural comment that
            sounds like a real founder.
          </p>
        </header>

        {/* Input Card */}
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <strong style={{ fontSize: "15px" }}>
              LinkedIn post
            </strong>

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
              minHeight: "230px",
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

          <button
            onClick={generateComments}
            disabled={loading || !post.trim()}
            style={{
              width: "100%",
              marginTop: "15px",
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
                loading || !post.trim() ? "not-allowed" : "pointer",
              boxShadow:
                loading || !post.trim()
                  ? "none"
                  : "0 10px 35px rgba(79,70,229,0.35)",
            }}
          >
            {loading ? "Generating your comment..." : "Generate Comment →"}
          </button>
        </section>

        {/* Results */}
        {comments.length > 0 && (
          <section style={{ marginTop: "28px" }}>
            <div
              style={{
                color: "#94a3b8",
                fontSize: "13px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "10px",
              }}
            >
              Your founder reply
            </div>

            {comments.map((comment, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255,255,255,0.055)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "22px",
                  padding: "24px",
                }}
              >
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
                  onClick={() =>
                    navigator.clipboard.writeText(comment)
                  }
                  style={{
                    padding: "10px 16px",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    background: "rgba(255,255,255,0.06)",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  Copy comment
                </button>
              </div>
            ))}
          </section>
        )}

        {/* Footer */}
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
