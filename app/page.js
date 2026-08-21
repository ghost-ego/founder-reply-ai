"use client";

import { useEffect, useState } from "react";
import { createClient } from "../lib/supabase/client";

export default function Home() {
  const [supabase, setSupabase] = useState(null);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const [post, setPost] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [tone, setTone] = useState("Professional");
  const [length, setLength] = useState("Medium");
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const client = createClient();

    setSupabase(client);

    client.auth.getSession().then(({ data, error }) => {
      if (error) {
        console.error(error);
      }

      setUser(data?.session?.user || null);
      setAuthLoading(false);
    });

    const {
      data: { subscription },
    } = client.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

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
          prompt: post.trim(),
          tone,
          length,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Failed to generate comments."
        );
      }

      if (!Array.isArray(data?.comments)) {
        throw new Error("No comments were generated.");
      }

      setComments(data.comments);

      const generation = {
        id: Date.now(),
        post: post.trim(),
        tone,
        length,
        comments: data.comments,
      };

      setRecent((previous) =>
        [generation, ...previous].slice(0, 5)
      );
    } catch (err) {
      setError(
        err?.message ||
          "Something went wrong. Please try again."
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

  async function logout() {
    if (!supabase) return;

    await supabase.auth.signOut();
    setUser(null);
  }

  function useAgain(item) {
    setPost(item.post);
    setTone(item.tone);
    setLength(item.length);
    setComments(item.comments);
    setError("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function clearRecent() {
    setRecent([]);
  }

  const tones = [
    { name: "Professional", icon: "💼" },
    { name: "Bold", icon: "🔥" },
    { name: "Friendly", icon: "😊" },
    { name: "Funny", icon: "😄" },
  ];

  const lengths = [
    {
      name: "Short",
      description: "1–2 sentences",
    },
    {
      name: "Medium",
      description: "2–4 sentences",
    },
    {
      name: "Detailed",
      description: "4–6 sentences",
    },
  ];

  if (authLoading) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#050609",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily:
            "Inter, system-ui, sans-serif",
        }}
      >
        Loading FounderReply AI...
      </main>
    );
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
        {/* TOP BAR */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <strong>FounderReply AI</strong>

          {user && (
            <button
              onClick={logout}
              style={{
                padding: "8px 13px",
                borderRadius: "9px",
                border:
                  "1px solid rgba(255,255,255,0.1)",
                background:
                  "rgba(255,255,255,0.05)",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Log out
            </button>
          )}
        </div>

        {/* HEADER */}
        <header
          style={{
            textAlign: "center",
            padding: "45px 10px 35px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 14px",
              borderRadius: "999px",
              background:
                "rgba(255,255,255,0.06)",
              border:
                "1px solid rgba(255,255,255,0.1)",
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
                boxShadow:
                  "0 0 12px #4ade80",
              }}
            />

            FounderReply AI
          </div>

          <h1
            style={{
              fontSize:
                "clamp(40px, 8vw, 72px)",
              lineHeight: "1",
              letterSpacing: "-3px",
              margin: 0,
              fontWeight: "800",
            }}
          >
            Write replies that
            <br />

            <span
              style={{
                background:
                  "linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)",
                WebkitBackgroundClip:
                  "text",
                WebkitTextFillColor:
                  "transparent",
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
            Turn any LinkedIn post into
            thoughtful, natural comments
            that sound like a real founder.
          </p>
        </header>

        {/* INPUT CARD */}
        <section
          style={{
            background:
              "rgba(255,255,255,0.055)",
            border:
              "1px solid rgba(255,255,255,0.1)",
            borderRadius: "24px",
            padding: "22px",
            boxShadow:
              "0 25px 80px rgba(0,0,0,0.35)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
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
            onChange={(e) =>
              setPost(e.target.value)
            }
            placeholder="Paste a LinkedIn post here..."
            style={{
              width: "100%",
              minHeight: "220px",
              boxSizing: "border-box",
              resize: "vertical",
              background:
                "rgba(0,0,0,0.25)",
              color: "#fff",
              border:
                "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              padding: "18px",
              fontSize: "16px",
              lineHeight: "1.6",
              outline: "none",
            }}
          />

          {/* TONE */}
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
                const selected =
                  tone === item.name;

                return (
                  <button
                    key={item.name}
                    onClick={() =>
                      setTone(item.name)
                    }
                    style={{
                      padding:
                        "13px 12px",
                      borderRadius: "12px",
                      border: selected
                        ? "1px solid #8b5cf6"
                        : "1px solid rgba(255,255,255,0.1)",
                      background: selected
                        ? "rgba(124,58,237,0.2)"
                        : "rgba(255,255,255,0.04)",
                      color: "#fff",
                      cursor: "pointer",
                      fontWeight:
                        selected
                          ? "700"
                          : "500",
                    }}
                  >
                    {item.icon}{" "}
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* LENGTH */}
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
                const selected =
                  length === item.name;

                return (
                  <button
                    key={item.name}
                    onClick={() =>
                      setLength(item.name)
                    }
                    style={{
                      padding:
                        "13px 12px",
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
                    <div
                      style={{
                        fontWeight: "700",
                      }}
                    >
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

          {/* GENERATE */}
          <button
            onClick={generateComments}
            disabled={
              loading || !post.trim()
            }
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

        {/* RESULTS */}
        {comments.length > 0 && (
          <section
            style={{
              marginTop: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
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
                  textTransform:
                    "uppercase",
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
                  background:
                    "rgba(255,255,255,0.06)",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                📋 Copy All
              </button>
            </div>

            {comments.map(
              (comment, index) => {
                const labels = [
                  "💡 Thoughtful",
                  "🔥 Strong perspective",
                  "⚡ Natural & concise",
                ];

                return (
                  <div
                    key={index}
                    style={{
                      background:
                        "rgba(255,255,255,0.055)",
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
                        marginBottom:
                          "14px",
                      }}
                    >
                      {labels[index] ||
                        "💬 Reply"}
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
                      onClick={() =>
                        copyComment(
                          comment
                        )
                      }
                      style={{
                        padding:
                          "10px 16px",
                        borderRadius: "10px",
                        border:
                          "1px solid rgba(255,255,255,0.12)",
                        background:
                          "rgba(255,255,255,0.06)",
                        color: "#fff",
                        cursor:
                          "pointer",
                      }}
                    >
                      📋 Copy comment
                    </button>
                  </div>
                );
              }
            )}

            <button
              onClick={generateComments}
              disabled={loading}
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "14px",
                border:
                  "1px solid rgba(255,255,255,0.12)",
                background:
                  "rgba(255,255,255,0.06)",
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

        {/* RECENT */}
        {recent.length > 0 && (
          <section
            style={{
              marginTop: "45px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <div>
                <h2
                  style={{
                    margin: 0,
                    fontSize: "24px",
                  }}
                >
                  Recent Generations
                </h2>

                <p
                  style={{
                    margin:
                      "6px 0 0",
                    color: "#64748b",
                    fontSize: "13px",
                  }}
                >
                  Your latest generations
                  from this session.
                </p>
              </div>

              <button
                onClick={clearRecent}
                style={{
                  padding: "8px 12px",
                  borderRadius: "9px",
                  border:
                    "1px solid rgba(255,255,255,0.1)",
                  background:
                    "rgba(255,255,255,0.04)",
                  color: "#94a3b8",
                  cursor: "pointer",
                }}
              >
                Clear
              </button>
            </div>

            {recent.map((item) => (
              <div
                key={item.id}
                style={{
                  background:
                    "rgba(255,255,255,0.04)",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "18px",
                  padding: "18px",
                  marginBottom: "12px",
                }}
              >
                <p
                  style={{
                    margin:
                      "0 0 14px",
                    color: "#cbd5e1",
                    lineHeight: "1.6",
                  }}
                >
                  {item.post.length >
                  180
                    ? `${item.post.slice(
                        0,
                        180
                      )}...`
                    : item.post}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems:
                      "center",
                    gap: "8px",
                    flexWrap:
                      "wrap",
                  }}
                >
                  <span
                    style={{
                      padding:
                        "6px 9px",
                      borderRadius:
                        "8px",
                      background:
                        "rgba(124,58,237,0.15)",
                      color:
                        "#c4b5fd",
                      fontSize:
                        "12px",
                    }}
                  >
                    {item.tone}
                  </span>

                  <span
                    style={{
                      padding:
                        "6px 9px",
                      borderRadius:
                        "8px",
                      background:
                        "rgba(37,99,235,0.15)",
                      color:
                        "#93c5fd",
                      fontSize:
                        "12px",
                    }}
                  >
                    {item.length}
                  </span>

                  <button
                    onClick={() =>
                      useAgain(item)
                    }
                    style={{
                      marginLeft:
                        "auto",
                      padding:
                        "8px 13px",
                      borderRadius:
                        "9px",
                      border:
                        "1px solid rgba(255,255,255,0.1)",
                      background:
                        "rgba(255,255,255,0.06)",
                      color: "#fff",
                      cursor:
                        "pointer",
                      fontWeight:
                        "600",
                    }}
                  >
                    Use Again
                  </button>
                </div>
              </div>
            ))}
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
          FounderReply AI · Built for founders
          who build in public.
        </footer>
      </div>
    </main>
  );
}
