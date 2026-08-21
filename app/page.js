"use client";

import { useEffect, useState } from "react";
import { createClient } from "../lib/supabase/client";

export default function Home() {
  const [supabase, setSupabase] = useState(null);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const [mode, setMode] = useState("founder");

  const [post, setPost] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [tone, setTone] = useState("Professional");
  const [length, setLength] = useState("Medium");
  const [recent, setRecent] = useState([]);

  const [menuOpen, setMenuOpen] = useState(false);

  const [rezeMessage, setRezeMessage] = useState("");
  const [rezeMessages, setRezeMessages] = useState([]);
  const [rezeLoading, setRezeLoading] = useState(false);
  const [rezeError, setRezeError] = useState("");

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

  async function sendToReze() {
    const message = rezeMessage.trim();

    if (!message || rezeLoading) {
      return;
    }

    setRezeMessage("");

    // Always clear any previous Reze error before sending.
    setRezeError("");

    setRezeMessages((previous) => [
      ...previous,
      {
        role: "user",
        content: message,
      },
    ]);

    setRezeLoading(true);

    try {
      const response = await fetch("/api/reze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      let data = null;

      try {
        data = await response.json();
      } catch {
        data = null;
      }

      if (!response.ok) {
        throw new Error("REZE_REQUEST_FAILED");
      }

      if (!data?.answer) {
        throw new Error("REZE_EMPTY_RESPONSE");
      }

      setRezeMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: data.answer,
        },
      ]);
    } catch (err) {
      // Never expose Gemini/Supabase/server error details
      // to the user. Show one clean message only.
      console.error("Reze request failed:", err);

      setRezeError(
        "Something went wrong. Please try again."
      );
    } finally {
      setRezeLoading(false);
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

  function selectMode(selectedMode) {
    setMode(selectedMode);
    setMenuOpen(false);
    setError("");
    setRezeError("");
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
          fontFamily: "Inter, system-ui, sans-serif",
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
        padding: "20px 18px 60px",
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
            marginBottom: "20px",
          }}
        >
          <strong
            style={{
              fontSize: "18px",
            }}
          >
            {mode === "founder"
              ? "FounderReply AI"
              : "Reze"}
          </strong>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
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

            <div
              style={{
                position: "relative",
              }}
            >
              <button
                onClick={() =>
                  setMenuOpen(!menuOpen)
                }
                aria-label="Open AI menu"
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "12px",
                  border:
                    "1px solid rgba(255,255,255,0.12)",
                  background:
                    "rgba(255,255,255,0.06)",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: "22px",
                  lineHeight: "1",
                }}
              >
                ⋮
              </button>

              {menuOpen && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    top: "50px",
                    width: "210px",
                    background: "#111827",
                    border:
                      "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "16px",
                    padding: "8px",
                    boxShadow:
                      "0 20px 50px rgba(0,0,0,0.5)",
                    zIndex: 50,
                  }}
                >
                  <button
                    onClick={() =>
                      selectMode("founder")
                    }
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "13px",
                      borderRadius: "10px",
                      border: "none",
                      background:
                        mode === "founder"
                          ? "rgba(124,58,237,0.2)"
                          : "transparent",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    💼 Founder AI
                    <div
                      style={{
                        color: "#94a3b8",
                        fontSize: "12px",
                        marginTop: "4px",
                      }}
                    >
                      Generate founder comments
                    </div>
                  </button>

                  <button
                    onClick={() =>
                      selectMode("reze")
                    }
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "13px",
                      borderRadius: "10px",
                      border: "none",
                      background:
                        mode === "reze"
                          ? "rgba(124,58,237,0.2)"
                          : "transparent",
                      color: "#fff",
                      cursor: "pointer",
                      marginTop: "4px",
                    }}
                  >
                    🤖 Reze
                    <div
                      style={{
                        color: "#94a3b8",
                        fontSize: "12px",
                        marginTop: "4px",
                      }}
                    >
                      Ask Reze anything
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* REZE */}

        {mode === "reze" ? (
          <>
            <header
              style={{
                textAlign: "center",
                padding: "55px 10px 35px",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  margin: "0 auto 18px",
                  borderRadius: "22px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg, #2563eb, #7c3aed)",
                  fontSize: "32px",
                  boxShadow:
                    "0 15px 45px rgba(59,130,246,0.25)",
                }}
              >
                🤖
              </div>

              <h1
                style={{
                  margin: 0,
                  fontSize:
                    "clamp(40px, 8vw, 64px)",
                  fontWeight: "800",
                  letterSpacing: "-3px",
                }}
              >
                Reze
              </h1>

              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "17px",
                  lineHeight: "1.6",
                  maxWidth: "600px",
                  margin: "16px auto 0",
                }}
              >
                Ask me anything. I'm Reze,
                your AI assistant.
              </p>
            </header>

            <section
              style={{
                background:
                  "rgba(255,255,255,0.055)",
                border:
                  "1px solid rgba(255,255,255,0.1)",
                borderRadius: "24px",
                padding: "20px",
                boxShadow:
                  "0 25px 80px rgba(0,0,0,0.35)",
              }}
            >
              <div
                style={{
                  minHeight: "360px",
                  maxHeight: "55vh",
                  overflowY: "auto",
                  padding: "5px",
                }}
              >
                {rezeMessages.length === 0 ? (
                  <div
                    style={{
                      minHeight: "330px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      color: "#64748b",
                      padding: "20px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "40px",
                          marginBottom: "12px",
                        }}
                      >
                        ✨
                      </div>

                      <div
                        style={{
                          color: "#cbd5e1",
                          fontWeight: "700",
                          fontSize: "18px",
                        }}
                      >
                        Hello, I'm Reze.
                      </div>

                      <div
                        style={{
                          marginTop: "8px",
                          fontSize: "14px",
                        }}
                      >
                        Ask me a question to
                        get started.
                      </div>
                    </div>
                  </div>
                ) : (
                  rezeMessages.map(
                    (item, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          justifyContent:
                            item.role === "user"
                              ? "flex-end"
                              : "flex-start",
                          marginBottom: "14px",
                        }}
                      >
                        <div
                          style={{
                            maxWidth: "85%",
                            padding: "13px 15px",
                            borderRadius: "16px",
                            background:
                              item.role === "user"
                                ? "linear-gradient(90deg, #2563eb, #7c3aed)"
                                : "rgba(255,255,255,0.07)",
                            color: "#fff",
                            lineHeight: "1.6",
                            whiteSpace: "pre-wrap",
                          }}
                        >
                          {item.content}
                        </div>
                      </div>
                    )
                  )
                )}

                {rezeLoading && (
                  <div
                    style={{
                      color: "#94a3b8",
                      padding: "12px",
                    }}
                  >
                    Reze is thinking...
                  </div>
                )}
              </div>

              {/* ONE CLEAN REZE ERROR MESSAGE */}

              {rezeError && (
                <div
                  role="alert"
                  style={{
                    color: "#f87171",
                    padding: "10px 4px",
                    fontSize: "14px",
                    textAlign: "center",
                  }}
                >
                  {rezeError}
                </div>
              )}

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  sendToReze();
                }}
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "15px",
                }}
              >
                <input
                  value={rezeMessage}
                  onChange={(event) =>
                    setRezeMessage(
                      event.target.value
                    )
                  }
                  placeholder="Ask Reze anything..."
                  disabled={rezeLoading}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    padding: "15px",
                    borderRadius: "13px",
                    border:
                      "1px solid rgba(255,255,255,0.12)",
                    background:
                      "rgba(0,0,0,0.3)",
                    color: "#fff",
                    outline: "none",
                    fontSize: "15px",
                  }}
                />

                <button
                  type="submit"
                  disabled={
                    rezeLoading ||
                    !rezeMessage.trim()
                  }
                  style={{
                    padding: "0 19px",
                    borderRadius: "13px",
                    border: "none",
                    background:
                      rezeLoading ||
                      !rezeMessage.trim()
                        ? "#334155"
                        : "linear-gradient(90deg, #2563eb, #7c3aed)",
                    color: "#fff",
                    fontWeight: "700",
                    cursor:
                      rezeLoading ||
                      !rezeMessage.trim()
                        ? "not-allowed"
                        : "pointer",
                  }}
                >
                  Send
                </button>
              </form>
            </section>
          </>
        ) : (
          /* FOUNDER AI */

          <>
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
                Turn any LinkedIn post
                into thoughtful, natural
                comments that sound like a
                real founder.
              </p>
            </header>

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
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                }}
              >
                <strong>
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

              <div
                style={{
                  marginTop: "22px",
                }}
              >
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
                          fontWeight: selected
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

              <div
                style={{
                  marginTop: "22px",
                }}
              >
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

              <button
                onClick={generateComments}
                disabled={
                  loading ||
                  !post.trim()
                }
                style={{
                  width: "100%",
                  marginTop: "22px",
                  padding: "16px 22px",
                  borderRadius: "14px",
                  border: "none",
                  background:
                    loading ||
                    !post.trim()
                      ? "#334155"
                      : "linear-gradient(90deg, #2563eb, #7c3aed)",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "700",
                  cursor:
                    loading ||
                    !post.trim()
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

            {comments.length > 0 && (
              <section
                style={{
                  marginTop: "30px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "15px",
                    flexWrap: "wrap",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      color: "#94a3b8",
                      fontSize: "13px",
                      fontWeight: "600",
                      textTransform: "uppercase",
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
                    }}
                  >
                    📋 Copy All
                  </button>
                </div>

                {comments.map(
                  (comment, index) => (
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
                          fontWeight: "700",
                          marginBottom: "14px",
                        }}
                      >
                        {
                          [
                            "💡 Thoughtful",
                            "🔥 Strong perspective",
                            "⚡ Natural & concise",
                          ][index]
                        }
                      </div>

                      <p
                        style={{
                          color: "#e2e8f0",
                          fontSize: "17px",
                          lineHeight: "1.75",
                        }}
                      >
                        {comment}
                      </p>

                      <button
                        onClick={() =>
                          copyComment(comment)
                        }
                        style={{
                          padding: "10px 16px",
                          borderRadius: "10px",
                          border:
                            "1px solid rgba(255,255,255,0.12)",
                          background:
                            "rgba(255,255,255,0.06)",
                          color: "#fff",
                          cursor: "pointer",
                        }}
                      >
                        📋 Copy
                      </button>
                    </div>
                  )
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
                    cursor: "pointer",
                    fontWeight: "700",
                  }}
                >
                  🔄 Regenerate
                </button>
              </section>
            )}

            {recent.length > 0 && (
              <section
                style={{
                  marginTop: "45px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <h2
                    style={{
                      margin: 0,
                    }}
                  >
                    Recent Generations
                  </h2>

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
                        color: "#cbd5e1",
                        lineHeight: "1.6",
                      }}
                    >
                      {item.post.length > 180
                        ? `${item.post.slice(
                            0,
                            180
                          )}...`
                        : item.post}
                    </p>

                    <button
                      onClick={() =>
                        useAgain(item)
                      }
                      style={{
                        padding: "8px 13px",
                        borderRadius: "9px",
                        border:
                          "1px solid rgba(255,255,255,0.1)",
                        background:
                          "rgba(255,255,255,0.06)",
                        color: "#fff",
                      }}
                    >
                      Use Again
                    </button>
                  </div>
                ))}
              </section>
            )}
          </>
        )}

        <footer
          style={{
            textAlign: "center",
            color: "#475569",
            fontSize: "13px",
            marginTop: "55px",
          }}
        >
          FounderReply AI · Reze
        </footer>
      </div>
    </main>
  );
}
