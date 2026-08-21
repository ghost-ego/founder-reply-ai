"use client";

import { useEffect, useState } from "react";
import { createClient } from "../lib/supabase/client";

export default function Home() {
  const [supabase, setSupabase] = useState(null);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Reze is now the FRONT page.
  const [mode, setMode] = useState("reze");

  // FounderReply AI
  const [post, setPost] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tone, setTone] = useState("Professional");
  const [length, setLength] = useState("Medium");
  const [recent, setRecent] = useState([]);

  // Menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Reze
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

    // Clear the input immediately.
    setRezeMessage("");

    // Clear only the previous error.
    setRezeError("");

    // Add user message.
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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Reze could not answer."
        );
      }

      if (!data?.answer) {
        throw new Error("Reze could not answer.");
      }

      setRezeMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: data.answer,
        },
      ]);
    } catch (err) {
      // Only ONE error message appears here.
      setRezeError(
        err?.message ||
          "Something went wrong with Reze."
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
          background: "#141622",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        Loading Reze...
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#2c2a38",
        color: "#e2e8f0",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        {/* =====================================================
            SIDEBAR
        ===================================================== */}

        <aside
          style={{
            width: "260px",
            background: "#141622",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
            flexShrink: 0,
          }}
        >
          <div>
            <button
              onClick={() => {
                setMode("reze");
                setRezeMessages([]);
                setRezeError("");
                setMenuOpen(false);
              }}
              style={{
                width: "100%",
                padding: "11px",
                border: "1px solid #4a5568",
                background: "transparent",
                color: "#fff",
                borderRadius: "8px",
                cursor: "pointer",
                textAlign: "left",
                fontSize: "14px",
              }}
            >
              + New Chat
            </button>

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  color:
                    mode === "reze"
                      ? "#fff"
                      : "#a0aec0",
                  background:
                    mode === "reze"
                      ? "#2d2b3a"
                      : "transparent",
                  cursor: "pointer",
                }}
                onClick={() => selectMode("reze")}
              >
                🤖 Reze
              </div>

              <div
                style={{
                  padding: "10px",
                  borderRadius: "8px",
                  color:
                    mode === "founder"
                      ? "#fff"
                      : "#a0aec0",
                  background:
                    mode === "founder"
                      ? "#2d2b3a"
                      : "transparent",
                  cursor: "pointer",
                }}
                onClick={() =>
                  selectMode("founder")
                }
              >
                💼 FounderReply AI
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid #2d3748",
              paddingTop: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              fontSize: "14px",
              color: "#a0aec0",
            }}
          >
            <div>
              👤{" "}
              {user
                ? user.email || "User"
                : "Guest"}
            </div>

            <div>⚙️ My Account</div>

            {user && (
              <button
                onClick={logout}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#a0aec0",
                  padding: 0,
                  textAlign: "left",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                🚪 Logout
              </button>
            )}
          </div>
        </aside>

        {/* =====================================================
            MAIN AREA
        ===================================================== */}

        <div
          style={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* TOP RIGHT MENU */}

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "18px 24px 0",
            }}
          >
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
                  borderRadius: "10px",
                  border:
                    "1px solid rgba(255,255,255,0.12)",
                  background:
                    "rgba(20,22,34,0.8)",
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
                    width: "220px",
                    background: "#141622",
                    border:
                      "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "14px",
                    padding: "8px",
                    boxShadow:
                      "0 20px 50px rgba(0,0,0,0.5)",
                    zIndex: 100,
                  }}
                >
                  <button
                    onClick={() =>
                      selectMode("reze")
                    }
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "13px",
                      borderRadius: "9px",
                      border: "none",
                      background:
                        mode === "reze"
                          ? "#2d2b3a"
                          : "transparent",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    🤖 Reze
                    <div
                      style={{
                        color: "#a0aec0",
                        fontSize: "12px",
                        marginTop: "4px",
                      }}
                    >
                      Your AI assistant
                    </div>
                  </button>

                  <button
                    onClick={() =>
                      selectMode("founder")
                    }
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "13px",
                      borderRadius: "9px",
                      border: "none",
                      background:
                        mode === "founder"
                          ? "#2d2b3a"
                          : "transparent",
                      color: "#fff",
                      cursor: "pointer",
                      marginTop: "4px",
                    }}
                  >
                    💼 FounderReply AI
                    <div
                      style={{
                        color: "#a0aec0",
                        fontSize: "12px",
                        marginTop: "4px",
                      }}
                    >
                      Generate founder comments
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* ===================================================
              REZE
          =================================================== */}

          {mode === "reze" ? (
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "800px",
                margin: "0 auto",
                padding:
                  "10px 24px 24px",
                boxSizing: "border-box",
              }}
            >
              {/* HEADER */}

              <div
                style={{
                  textAlign: "center",
                  paddingTop: "15px",
                }}
              >
                <h1
                  style={{
                    fontSize: "28px",
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  Hi, I'm REZE.
                </h1>

                <h1
                  style={{
                    fontSize: "28px",
                    color: "#fff",
                    margin:
                      "4px 0 0",
                  }}
                >
                  How can I help you today?
                </h1>

                <div
                  style={{
                    margin:
                      "16px auto 4px",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "#fff",
                    border:
                      "2px solid #a0aec0",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="https://api.dicebear.com/7.x/bottts/svg?seed=Reze"
                    width="100%"
                    height="100%"
                    alt="Reze"
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent:
                      "center",
                    gap: "6px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "#cbd5e0",
                  }}
                >
                  REZE
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      background: "#48bb78",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                  />
                </div>
              </div>

              {/* MESSAGES */}

              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  margin:
                    "20px 0",
                  minHeight: "200px",
                  padding:
                    "0 4px",
                }}
              >
                {rezeMessages.length ===
                0 ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection:
                        "column",
                      alignItems:
                        "center",
                      justifyContent:
                        "center",
                      minHeight:
                        "260px",
                      textAlign:
                        "center",
                      color: "#a0aec0",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "30px",
                        marginBottom:
                          "12px",
                      }}
                    >
                      ✨
                    </div>

                    <div
                      style={{
                        color: "#e2e8f0",
                        fontSize:
                          "15px",
                      }}
                    >
                      Ask REZE anything...
                    </div>
                  </div>
                ) : (
                  rezeMessages.map(
                    (item, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          flexDirection:
                            "column",
                          marginBottom:
                            "16px",
                        }}
                      >
                        <div
                          style={{
                            maxWidth:
                              "75%",
                            padding:
                              "14px 18px",
                            borderRadius:
                              "16px",
                            fontSize:
                              "14px",
                            lineHeight:
                              "1.5",
                            whiteSpace:
                              "pre-wrap",
                            alignSelf:
                              item.role ===
                              "user"
                                ? "flex-end"
                                : "flex-start",
                            background:
                              item.role ===
                              "user"
                                ? "#3c304f"
                                : "#363442",
                            color:
                              item.role ===
                              "user"
                                ? "#c5b5e8"
                                : "#e2e8f0",
                            borderBottomRightRadius:
                              item.role ===
                              "user"
                                ? "2px"
                                : "16px",
                            borderBottomLeftRadius:
                              item.role ===
                              "assistant"
                                ? "2px"
                                : "16px",
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
                      display: "flex",
                      justifyContent:
                        "flex-start",
                    }}
                  >
                    <div
                      style={{
                        padding:
                          "14px 18px",
                        borderRadius:
                          "16px",
                        borderBottomLeftRadius:
                          "2px",
                        background:
                          "#363442",
                        color:
                          "#a0aec0",
                        fontSize:
                          "14px",
                      }}
                    >
                      REZE is thinking...
                    </div>
                  </div>
                )}
              </div>

              {/* ONLY ONE ERROR MESSAGE */}

              {rezeError && (
                <div
                  style={{
                    background:
                      "rgba(220,38,38,0.10)",
                    border:
                      "1px solid rgba(248,113,113,0.25)",
                    color: "#fca5a5",
                    borderRadius:
                      "10px",
                    padding:
                      "10px 12px",
                    marginBottom:
                      "10px",
                    fontSize:
                      "13px",
                  }}
                >
                  {rezeError}
                </div>
              )}

              {/* INPUT */}

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  sendToReze();
                }}
                style={{
                  display: "flex",
                  background:
                    "#363442",
                  borderRadius:
                    "12px",
                  padding:
                    "8px 12px",
                  border:
                    "1px solid #4a5568",
                  gap: "8px",
                }}
              >
                <input
                  type="text"
                  value={rezeMessage}
                  onChange={(event) =>
                    setRezeMessage(
                      event.target.value
                    )
                  }
                  placeholder="Ask REZE anything..."
                  disabled={
                    rezeLoading
                  }
                  style={{
                    flex: 1,
                    minWidth: 0,
                    background:
                      "transparent",
                    border: "none",
                    outline: "none",
                    color: "#fff",
                    fontSize:
                      "14px",
                  }}
                />

                <button
                  type="submit"
                  disabled={
                    rezeLoading ||
                    !rezeMessage.trim()
                  }
                  style={{
                    background:
                      rezeLoading ||
                      !rezeMessage.trim()
                        ? "#4a5568"
                        : "#7052db",
                    color: "#fff",
                    border: "none",
                    padding:
                      "8px 18px",
                    borderRadius:
                      "8px",
                    cursor:
                      rezeLoading ||
                      !rezeMessage.trim()
                        ? "not-allowed"
                        : "pointer",
                    fontWeight:
                      "600",
                  }}
                >
                  Send
                </button>
              </form>
            </div>
          ) : (
            /* =================================================
               FOUNDERREPLY AI
            ================================================= */

            <div
              style={{
                width: "100%",
                maxWidth: "900px",
                margin:
                  "0 auto",
                padding:
                  "20px 24px 60px",
                boxSizing:
                  "border-box",
              }}
            >
              <header
                style={{
                  textAlign:
                    "center",
                  padding:
                    "30px 10px 35px",
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
                    fontSize:
                      "14px",
                    color:
                      "#cbd5e1",
                    marginBottom:
                      "22px",
                  }}
                >
                  <span
                    style={{
                      width:
                        "8px",
                      height:
                        "8px",
                      borderRadius:
                        "50%",
                      background:
                        "#4ade80",
                    }}
                  />

                  FounderReply AI
                </div>

                <h1
                  style={{
                    fontSize:
                      "clamp(40px, 8vw, 72px)",
                    lineHeight:
                      "1",
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
                    maxWidth:
                      "650px",
                    margin:
                      "22px auto 0",
                    color:
                      "#94a3b8",
                    fontSize:
                      "18px",
                    lineHeight:
                      "1.7",
                  }}
                >
                  Turn any LinkedIn
                  post into thoughtful,
                  natural comments
                  that sound like a
                  real founder.
                </p>
              </header>

              <section
                style={{
                  background:
                    "rgba(255,255,255,0.055)",
                  border:
                    "1px solid rgba(255,255,255,0.1)",
                  borderRadius:
                    "24px",
                  padding:
                    "22px",
                  boxShadow:
                    "0 25px 80px rgba(0,0,0,0.35)",
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
                    width:
                      "100%",
                    minHeight:
                      "220px",
                    boxSizing:
                      "border-box",
                    resize:
                      "vertical",
                    background:
                      "rgba(0,0,0,0.25)",
                    color:
                      "#fff",
                    border:
                      "1px solid rgba(255,255,255,0.1)",
                    borderRadius:
                      "16px",
                    padding:
                      "18px",
                    fontSize:
                      "16px",
                    lineHeight:
                      "1.6",
                    outline:
                      "none",
                  }}
                />

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
                      gap:
                        "10px",
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
                      gap:
                        "10px",
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

                <button
                  onClick={
                    generateComments
                  }
                  disabled={
                    loading ||
                    !post.trim()
                  }
                  style={{
                    width:
                      "100%",
                    marginTop:
                      "22px",
                    padding:
                      "16px 22px",
                    borderRadius:
                      "14px",
                    border:
                      "none",
                    background:
                      loading ||
                      !post.trim()
                        ? "#334155"
                        : "linear-gradient(90deg, #2563eb, #7c3aed)",
                    color:
                      "#fff",
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
                      marginBottom:
                        "15px",
                      flexWrap:
                        "wrap",
                      gap:
                        "12px",
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
                      }}
                    >
                      📋 Copy All
                    </button>
                  </div>

                  {comments.map(
                    (
                      comment,
                      index
                    ) => (
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
                            fontWeight:
                              "700",
                            marginBottom:
                              "14px",
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
                            color:
                              "#e2e8f0",
                            fontSize:
                              "17px",
                            lineHeight:
                              "1.75",
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
                          📋 Copy
                        </button>
                      </div>
                    )
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
                        "pointer",
                      fontWeight:
                        "700",
                    }}
                  >
                    🔄 Regenerate
                  </button>
                </section>
              )}

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
                    <h2
                      style={{
                        margin: 0,
                      }}
                    >
                      Recent Generations
                    </h2>

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
                            color:
                              "#cbd5e1",
                            lineHeight:
                              "1.6",
                          }}
                        >
                          {item.post
                            .length >
                          180
                            ? `${item.post.slice(
                                0,
                                180
                              )}...`
                            : item.post}
                        </p>

                        <button
                          onClick={() =>
                            useAgain(
                              item
                            )
                          }
                          style={{
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
                          }}
                        >
                          Use Again
                        </button>
                      </div>
                    )
                  )}
                </section>
              )}
            </div>
          )}

          <footer
            style={{
              textAlign: "center",
              color: "#475569",
              fontSize: "13px",
              padding:
                "0 20px 18px",
            }}
          >
            FounderReply AI · Reze
          </footer>
        </div>
      </div>
    </main>
  );
}
