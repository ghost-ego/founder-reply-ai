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

  // AI MENU
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAI, setActiveAI] = useState("founder");

  // REZE
  const [rezeInput, setRezeInput] = useState("");
  const [rezeMessages, setRezeMessages] = useState([]);
  const [rezeLoading, setRezeLoading] = useState(false);

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

  // -----------------------------
  // REZE AI
  // -----------------------------

  function getRezeAnswer(question) {
    const q = question.toLowerCase().trim();

    if (
      q.includes("what is your name") ||
      q.includes("your name") ||
      q === "name"
    ) {
      return "I am Reze. 🤖";
    }

    if (
      q.includes("who are you") ||
      q.includes("what are you")
    ) {
      return "I am an AI called Reze. I am here to answer your questions and help you.";
    }

    if (
      q.includes("who is your founder") ||
      q.includes("who founded you") ||
      q.includes("who made you") ||
      q.includes("who created you") ||
      q.includes("who built you")
    ) {
      return "My founder is Tahsin. He created me as Reze. 🤖";
    }

    if (
      q.includes("who is tahsin") ||
      q.includes("who is your owner")
    ) {
      return "Tahsin is my founder and the person who created me.";
    }

    if (
      q.includes("hello") ||
      q.includes("hi") ||
      q.includes("hey")
    ) {
      return "Hey! 👋 I'm Reze. What would you like to know?";
    }

    if (
      q.includes("how are you")
    ) {
      return "I'm doing great! I'm ready to help you. 😊";
    }

    if (
      q.includes("what can you do")
    ) {
      return "I can answer questions, help you understand things, and eventually search the internet for up-to-date information.";
    }

    return "I'm Reze. I received your question, but my internet search system isn't connected yet. We'll add that next.";
  }

  async function askReze() {
    const question = rezeInput.trim();

    if (!question || rezeLoading) return;

    setRezeLoading(true);

    const userMessage = {
      role: "user",
      text: question,
    };

    const answer = getRezeAnswer(question);

    const aiMessage = {
      role: "assistant",
      text: answer,
    };

    setRezeMessages((previous) => [
      ...previous,
      userMessage,
      aiMessage,
    ]);

    setRezeInput("");
    setRezeLoading(false);
  }

  function openFounderAI() {
    setActiveAI("founder");
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function openReze() {
    setActiveAI("reze");
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
        padding: "30px 18px 100px",
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
          <strong>
            {activeAI === "reze"
              ? "Reze"
              : "FounderReply AI"}
          </strong>

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

        {/* ========================= */}
        {/* REZE PAGE */}
        {/* ========================= */}

        {activeAI === "reze" ? (
          <section
            style={{
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <header
              style={{
                textAlign: "center",
                padding: "55px 10px 30px",
              }}
            >
              <div
                style={{
                  fontSize: "60px",
                  marginBottom: "15px",
                }}
              >
                🤖
              </div>

              <h1
                style={{
                  fontSize:
                    "clamp(42px, 8vw, 68px)",
                  margin: 0,
                  fontWeight: "800",
                  letterSpacing: "-3px",
                }}
              >
                Meet{" "}
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
                  Reze
                </span>
              </h1>

              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "18px",
                  lineHeight: "1.7",
                  maxWidth: "620px",
                  margin:
                    "18px auto 0",
                }}
              >
                Ask Reze anything. Reze is
                your personal AI assistant.
              </p>
            </header>

            {/* CHAT */}

            <div
              style={{
                background:
                  "rgba(255,255,255,0.055)",
                border:
                  "1px solid rgba(255,255,255,0.1)",
                borderRadius: "24px",
                padding: "20px",
                minHeight: "420px",
              }}
            >
              {rezeMessages.length === 0 ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "80px 20px",
                    color: "#64748b",
                  }}
                >
                  <div
                    style={{
                      fontSize: "40px",
                      marginBottom: "15px",
                    }}
                  >
                    ✨
                  </div>

                  <div
                    style={{
                      fontSize: "18px",
                      color: "#cbd5e1",
                      marginBottom: "8px",
                    }}
                  >
                    Hello, I'm Reze.
                  </div>

                  <div>
                    Ask me something.
                  </div>
                </div>
              ) : (
                <div>
                  {rezeMessages.map(
                    (message, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          justifyContent:
                            message.role ===
                            "user"
                              ? "flex-end"
                              : "flex-start",
                          marginBottom:
                            "14px",
                        }}
                      >
                        <div
                          style={{
                            maxWidth: "80%",
                            padding:
                              "13px 16px",
                            borderRadius:
                              "16px",
                            background:
                              message.role ===
                              "user"
                                ? "linear-gradient(90deg, #2563eb, #7c3aed)"
                                : "rgba(255,255,255,0.07)",
                            color: "#fff",
                            lineHeight:
                              "1.6",
                          }}
                        >
                          {message.text}
                        </div>
                      </div>
                    )
                  )}
                </div>
              )}

              {/* INPUT */}

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <input
                  value={rezeInput}
                  onChange={(e) =>
                    setRezeInput(
                      e.target.value
                    )
                  }
                  onKeyDown={(e) => {
                    if (
                      e.key === "Enter"
                    ) {
                      askReze();
                    }
                  }}
                  placeholder="Ask Reze anything..."
                  style={{
                    flex: 1,
                    minWidth: 0,
                    padding: "15px",
                    borderRadius: "13px",
                    border:
                      "1px solid rgba(255,255,255,0.1)",
                    background:
                      "rgba(0,0,0,0.3)",
                    color: "#fff",
                    outline: "none",
                    fontSize: "15px",
                  }}
                />

                <button
                  onClick={askReze}
                  disabled={
                    rezeLoading ||
                    !rezeInput.trim()
                  }
                  style={{
                    padding:
                      "0 20px",
                    borderRadius:
                      "13px",
                    border: "none",
                    background:
                      rezeLoading ||
                      !rezeInput.trim()
                        ? "#334155"
                        : "linear-gradient(90deg, #2563eb, #7c3aed)",
                    color: "#fff",
                    fontWeight: "700",
                    cursor:
                      "pointer",
                  }}
                >
                  →
                </button>
              </div>
            </div>

            {/* BACK BUTTON */}

            <button
              onClick={openFounderAI}
              style={{
                width: "100%",
                marginTop: "18px",
                padding: "14px",
                borderRadius: "13px",
                border:
                  "1px solid rgba(255,255,255,0.1)",
                background:
                  "rgba(255,255,255,0.05)",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "700",
              }}
            >
              ← Back to Founder AI
            </button>
          </section>
        ) : (

          /* ========================= */
          /* FOUNDER AI PAGE */
          /* ========================= */

          <>
            {/* HEADER */}

            <header
              style={{
                textAlign: "center",
                padding: "45px 10px 35px",
              }}
            >
              <div
                style={{
                  display:
                    "inline-flex",
                  alignItems:
                    "center",
                  gap: "8px",
                  padding:
                    "8px 14px",
                  borderRadius:
                    "999px",
                  background:
                    "rgba(255,255,255,0.06)",
                  border:
                    "1px solid rgba(255,255,255,0.1)",
                  fontSize: "14px",
                  color: "#cbd5e1",
                  marginBottom:
                    "22px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius:
                      "50%",
                    background:
                      "#4ade80",
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
                  letterSpacing:
                    "-3px",
                  margin: 0,
                  fontWeight:
                    "800",
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
                  margin:
                    "22px auto 0",
                  color: "#94a3b8",
                  fontSize: "18px",
                  lineHeight:
                    "1.7",
                }}
              >
                Turn any LinkedIn post
                into thoughtful,
                natural comments that
                sound like a real founder.
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
                backdropFilter:
                  "blur(20px)",
              }}
            >
              <div
                style={{
                  display:
                    "flex",
                  justifyContent:
                    "space-between",
                  marginBottom:
                    "12px",
                }}
              >
                <strong>
                  LinkedIn post
                </strong>

                <span
                  style={{
                    color:
                      "#64748b",
                    fontSize:
                      "13px",
                  }}
                >
                  {post.length}{" "}
                  characters
                </span>
              </div>

              <textarea
                value={post}
                onChange={(e) =>
                  setPost(
                    e.target.value
                  )
                }
                placeholder="Paste a LinkedIn post here..."
                style={{
                  width: "100%",
                  minHeight:
                    "220px",
                  boxSizing:
                    "border-box",
                  resize: "vertical",
                  background:
                    "rgba(0,0,0,0.25)",
                  color: "#fff",
                  border:
                    "1px solid rgba(255,255,255,0.1)",
                  borderRadius:
                    "16px",
                  padding: "18px",
                  fontSize: "16px",
                  lineHeight:
                    "1.6",
                  outline: "none",
                }}
              />

              {/* TONE */}

              <div
                style={{
                  marginTop:
                    "22px",
                }}
              >
                <div
                  style={{
                    fontSize:
                      "14px",
                    fontWeight:
                      "700",
                    marginBottom:
                      "10px",
                  }}
                >
                  Tone
                </div>

                <div
                  style={{
                    display:
                      "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(140px, 1fr))",
                    gap: "10px",
                  }}
                >
                  {tones.map(
                    (item) => {
                      const selected =
                        tone ===
                        item.name;

                      return (
                        <button
                          key={
                            item.name
                          }
                          onClick={() =>
                            setTone(
                              item.name
                            )
                          }
                          style={{
                            padding:
                              "13px 12px",
                            borderRadius:
                              "12px",
                            border:
                              selected
                                ? "1px solid #8b5cf6"
                                : "1px solid rgba(255,255,255,0.1)",
                            background:
                              selected
                                ? "rgba(124,58,237,0.2)"
                                : "rgba(255,255,255,0.04)",
                            color:
                              "#fff",
                            cursor:
                              "pointer",
                            fontWeight:
                              selected
                                ? "700"
                                : "500",
                          }}
                        >
                          {
                            item.icon
                          }{" "}
                          {
                            item.name
                          }
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              {/* LENGTH */}

              <div
                style={{
                  marginTop:
                    "22px",
                }}
              >
                <div
                  style={{
                    fontSize:
                      "14px",
                    fontWeight:
                      "700",
                    marginBottom:
                      "10px",
                  }}
                >
                  Length
                </div>

                <div
                  style={{
                    display:
                      "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(140px, 1fr))",
                    gap: "10px",
                  }}
                >
                  {lengths.map(
                    (item) => {
                      const selected =
                        length ===
                        item.name;

                      return (
                        <button
                          key={
                            item.name
                          }
                          onClick={() =>
                            setLength(
                              item.name
                            )
                          }
                          style={{
                            padding:
                              "13px 12px",
                            borderRadius:
                              "12px",
                            border:
                              selected
                                ? "1px solid #3b82f6"
                                : "1px solid rgba(255,255,255,0.1)",
                            background:
                              selected
                                ? "rgba(37,99,235,0.2)"
                                : "rgba(255,255,255,0.04)",
                            color:
                              "#fff",
                            cursor:
                              "pointer",
                            textAlign:
                              "left",
                          }}
                        >
                          <div
                            style={{
                              fontWeight:
                                "700",
                            }}
                          >
                            {
                              item.name
                            }
                          </div>

                          <div
                            style={{
                              fontSize:
                                "12px",
                              color:
                                "#94a3b8",
                              marginTop:
                                "3px",
                            }}
                          >
                            {
                              item.description
                            }
                          </div>
                        </button>
                      );
                    }
                  )}
                </div>
              </div>

              {/* GENERATE */}

              <button
                onClick={
                  generateComments
                }
                disabled={
                  loading ||
                  !post.trim()
                }
                style={{
                  width: "100%",
                  marginTop:
                    "22px",
                  padding:
                    "16px 22px",
                  borderRadius:
                    "14px",
                  border: "none",
                  background:
                    loading ||
                    !post.trim()
                      ? "#334155"
                      : "linear-gradient(90deg, #2563eb, #7c3aed)",
                  color: "#fff",
                  fontSize:
                    "16px",
                  fontWeight:
                    "700",
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
                    color:
                      "#f87171",
                    marginTop:
                      "15px",
                    textAlign:
                      "center",
                  }}
                >
                  {error}
                </p>
              )}
            </section>

            {/* RESULTS */}

            {comments.length >
              0 && (
              <section
                style={{
                  marginTop:
                    "30px",
                }}
              >
                <div
                  style={{
                    display:
                      "flex",
                    justifyContent:
                      "space-between",
                    alignItems:
                      "center",
                    gap: "12px",
                    marginBottom:
                      "15px",
                    flexWrap:
                      "wrap",
                  }}
                >
                  <div
                    style={{
                      color:
                        "#94a3b8",
                      fontSize:
                        "13px",
                      fontWeight:
                        "600",
                      textTransform:
                        "uppercase",
                      letterSpacing:
                        "1px",
                    }}
                  >
                    Choose your reply
                  </div>

                  <button
                    onClick={
                      copyAll
                    }
                    style={{
                      padding:
                        "9px 14px",
                      borderRadius:
                        "10px",
                      border:
                        "1px solid rgba(255,255,255,0.12)",
                      background:
                        "rgba(255,255,255,0.06)",
                      color:
                        "#fff",
                      cursor:
                        "pointer",
                      fontWeight:
                        "600",
                    }}
                  >
                    📋 Copy All
                  </button>
                </div>

                {comments.map(
                  (
                    comment,
                    index
                  ) => {
                    const labels =
                      [
                        "💡 Thoughtful",
                        "🔥 Strong perspective",
                        "⚡ Natural & concise",
                      ];

                    return (
                      <div
                        key={
                          index
                        }
                        style={{
                          background:
                            "rgba(255,255,255,0.055)",
                          border:
                            "1px solid rgba(255,255,255,0.1)",
                          borderRadius:
                            "22px",
                          padding:
                            "24px",
                          marginBottom:
                            "16px",
                        }}
                      >
                        <div
                          style={{
                            fontSize:
                              "14px",
                            fontWeight:
                              "700",
                            marginBottom:
                              "14px",
                          }}
                        >
                          {
                            labels[
                              index
                            ]
                          }
                        </div>

                        <p
                          style={{
                            color:
                              "#e2e8f0",
                            fontSize:
                              "17px",
                            lineHeight:
                              "1.75",
                            marginTop:
                              0,
                          }}
                        >
                          {
                            comment
                          }
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
                            borderRadius:
                              "10px",
                            border:
                              "1px solid rgba(255,255,255,0.12)",
                            background:
                              "rgba(255,255,255,0.06)",
                            color:
                              "#fff",
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
                  onClick={
                    generateComments
                  }
                  disabled={
                    loading
                  }
                  style={{
                    width:
                      "100%",
                    padding:
                      "15px",
                    borderRadius:
                      "14px",
                    border:
                      "1px solid rgba(255,255,255,0.12)",
                    background:
                      "rgba(255,255,255,0.06)",
                    color:
                      "#fff",
                    cursor:
                      loading
                        ? "not-allowed"
                        : "pointer",
                    fontWeight:
                      "700",
                    fontSize:
                      "15px",
                  }}
                >
                  {loading
                    ? "Generating..."
                    : "🔄 Regenerate Comments"}
                </button>
              </section>
            )}

            {/* RECENT */}

            {recent.length >
              0 && (
              <section
                style={{
                  marginTop:
                    "45px",
                }}
              >
                <div
                  style={{
                    display:
                      "flex",
                    justifyContent:
                      "space-between",
                    alignItems:
                      "center",
                    marginBottom:
                      "16px",
                  }}
                >
                  <div>
                    <h2
                      style={{
                        margin: 0,
                        fontSize:
                          "24px",
                      }}
                    >
                      Recent Generations
                    </h2>

                    <p
                      style={{
                        margin:
                          "6px 0 0",
                        color:
                          "#64748b",
                        fontSize:
                          "13px",
                      }}
                    >
                      Your latest
                      generations
                      from this
                      session.
                    </p>
                  </div>

                  <button
                    onClick={
                      clearRecent
                    }
                    style={{
                      padding:
                        "8px 12px",
                      borderRadius:
                        "9px",
                      border:
                        "1px solid rgba(255,255,255,0.1)",
                      background:
                        "rgba(255,255,255,0.04)",
                      color:
                        "#94a3b8",
                      cursor:
                        "pointer",
                    }}
                  >
                    Clear
                  </button>
                </div>

                {recent.map(
                  (item) => (
                    <div
                      key={
                        item.id
                      }
                      style={{
                        background:
                          "rgba(255,255,255,0.04)",
                        border:
                          "1px solid rgba(255,255,255,0.08)",
                        borderRadius:
                          "18px",
                        padding:
                          "18px",
                        marginBottom:
                          "12px",
                      }}
                    >
                      <p
                        style={{
                          margin:
                            "0 0 14px",
                          color:
                            "#cbd5e1",
                          lineHeight:
                            "1.6",
                        }}
                      >
                        {item
                          .post
                          .length >
                        180
                          ? `${item.post.slice(
                              0,
                              180
                            )}...`
                          : item.post}
                      </p>

                      <div
                        style={{
                          display:
                            "flex",
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
                          {
                            item.tone
                          }
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
                          {
                            item.length
                          }
                        </span>

                        <button
                          onClick={() =>
                            useAgain(
                              item
                            )
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
                            color:
                              "#fff",
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
                  )
                )}
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
          FounderReply AI · Built for founders
          who build in public.
        </footer>
      </div>

      {/* ================================= */}
      {/* THREE DOT AI MENU */}
      {/* ================================= */}

      <div
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          zIndex: 9999,
        }}
      >
        {menuOpen && (
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: "62px",
              width: "220px",
              background:
                "rgba(15,23,42,0.97)",
              border:
                "1px solid rgba(255,255,255,0.12)",
              borderRadius: "18px",
              padding: "8px",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.5)",
              backdropFilter:
                "blur(20px)",
            }}
          >
            <button
              onClick={openFounderAI}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "13px",
                borderRadius: "12px",
                border: "none",
                background:
                  activeAI === "founder"
                    ? "rgba(124,58,237,0.2)"
                    : "transparent",
                color: "#fff",
                cursor: "pointer",
                marginBottom: "4px",
              }}
            >
              <div
                style={{
                  fontWeight: "700",
                }}
              >
                ✍️ Founder AI
              </div>

              <div
                style={{
                  fontSize: "12px",
                  color: "#94a3b8",
                  marginTop: "3px",
                }}
              >
                Generate founder comments
              </div>
            </button>

            <button
              onClick={openReze}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "13px",
                borderRadius: "12px",
                border: "none",
                background:
                  activeAI === "reze"
                    ? "rgba(37,99,235,0.2)"
                    : "transparent",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  fontWeight: "700",
                }}
              >
                🤖 Reze
              </div>

              <div
                style={{
                  fontSize: "12px",
                  color: "#94a3b8",
                  marginTop: "3px",
                }}
              >
                Ask Reze anything
              </div>
            </button>
          </div>
        )}

        {/* 3 DOT BUTTON */}

        <button
          onClick={() =>
            setMenuOpen(
              !menuOpen
            )
          }
          aria-label="Open AI menu"
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            border:
              "1px solid rgba(255,255,255,0.15)",
            background:
              "linear-gradient(135deg, #2563eb, #7c3aed)",
            color: "#fff",
            fontSize: "25px",
            cursor: "pointer",
            boxShadow:
              "0 10px 35px rgba(0,0,0,0.4)",
          }}
        >
          ⋮
        </button>
      </div>
    </main>
  );
}
