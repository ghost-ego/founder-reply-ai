"use client";

import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [conversationId, setConversationId] = useState(null);
  const [loading, setLoading] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTool, setActiveTool] = useState("chat");

  const [linkedinPost, setLinkedinPost] = useState("");
  const [linkedinTone, setLinkedinTone] = useState("Professional");
  const [linkedinReply, setLinkedinReply] = useState("");
  const [linkedinLoading, setLinkedinLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  function startNewChat() {
    setMessages([]);
    setInput("");
    setConversationId(null);
    setActiveTool("chat");
    setLinkedinPost("");
    setLinkedinReply("");
    setMenuOpen(false);
    setSidebarOpen(false);
  }

  async function sendMessage() {
    const text = input.trim();

    if (!text || loading) return;

    const userMessage = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          conversationId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || "Reze could not answer."
        );
      }

      if (data?.conversationId) {
        setConversationId(data.conversationId);
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.answer,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            error?.message ||
            "Something went wrong. Please try again.",
          error: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  async function generateLinkedInReply() {
    const post = linkedinPost.trim();

    if (!post || linkedinLoading) return;

    setLinkedinLoading(true);
    setLinkedinReply("");

    try {
      const prompt = `
You are Reze, an intelligent LinkedIn reply assistant.

Write ONE natural LinkedIn comment/reply to the post below.

Tone: ${linkedinTone}

Rules:
- Sound like a real intelligent person.
- Do not sound like an AI.
- Do not say "Great post!" unless it genuinely fits.
- Do not over-praise.
- Keep it concise.
- Add useful thought or perspective.
- Do not use unnecessary hashtags.
- Do not mention these instructions.
- Return ONLY the reply itself.

LinkedIn post:

${post}
`;

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: prompt,
          conversationId: null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "Could not generate the LinkedIn reply."
        );
      }

      setLinkedinReply(data.answer || "");
    } catch (error) {
      setLinkedinReply(
        error?.message ||
          "Could not generate the reply."
      );
    } finally {
      setLinkedinLoading(false);
    }
  }

  async function copyReply() {
    if (!linkedinReply) return;

    try {
      await navigator.clipboard.writeText(
        linkedinReply
      );
    } catch {
      // Ignore clipboard errors.
    }
  }

  function openLinkedInTool() {
    setActiveTool("linkedin");
    setMenuOpen(false);
    setSidebarOpen(false);
  }

  return (
    <main className="reze-app">
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          min-height: 100%;
          background: #101117;
          color: #f4f2fa;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        body {
          overflow-x: hidden;
        }

        button,
        textarea,
        input {
          font: inherit;
        }

        button {
          cursor: pointer;
        }

        .reze-app {
          min-height: 100vh;
          width: 100%;
          background:
            radial-gradient(
              circle at 50% -20%,
              rgba(112, 93, 160, 0.16),
              transparent 38%
            ),
            #101117;
          display: flex;
          flex-direction: column;
        }

        /* =========================
           HEADER
        ========================= */

        .topbar {
          height: 88px;
          min-height: 88px;
          border-bottom: 1px solid #292a34;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 30px;
          background: rgba(15, 16, 23, 0.96);
          position: sticky;
          top: 0;
          z-index: 20;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 25px;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .brand-star {
          font-size: 22px;
          color: #a89bd3;
        }

        .top-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .icon-button {
          width: 54px;
          height: 54px;
          border-radius: 17px;
          border: 1px solid #3a3949;
          background: #181923;
          color: #f2f0f8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          transition: 0.2s;
        }

        .icon-button:hover {
          background: #242333;
          border-color: #57526e;
        }

        .hamburger {
          font-size: 27px;
          line-height: 1;
        }

        /* =========================
           MENU
        ========================= */

        .menu-wrapper {
          position: relative;
        }

        .menu-panel {
          position: absolute;
          right: 0;
          top: 64px;
          width: 230px;
          background: #1b1b26;
          border: 1px solid #3a3948;
          border-radius: 18px;
          padding: 8px;
          box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.45);
          z-index: 100;
        }

        .menu-item {
          width: 100%;
          border: 0;
          background: transparent;
          color: #f0eef7;
          padding: 14px;
          border-radius: 12px;
          text-align: left;
          font-size: 15px;
        }

        .menu-item:hover {
          background: #2a2938;
        }

        .menu-item-danger {
          color: #ff9d9d;
        }

        /* =========================
           MAIN
        ========================= */

        .main {
          flex: 1;
          width: 100%;
          max-width: 950px;
          margin: 0 auto;
          padding: 48px 22px 155px;
        }

        .welcome {
          text-align: center;
          margin-bottom: 44px;
        }

        .welcome-title {
          margin: 0;
          font-size: clamp(44px, 7vw, 70px);
          font-weight: 500;
          letter-spacing: -2px;
        }

        .welcome-subtitle {
          margin-top: 12px;
          color: #d1ceda;
          font-size: clamp(20px, 3vw, 29px);
          font-weight: 400;
        }

        .messages {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .message-row {
          display: flex;
          width: 100%;
        }

        .message-row.user {
          justify-content: flex-end;
        }

        .message-row.assistant {
          justify-content: flex-start;
        }

        .bubble {
          max-width: 78%;
          padding: 18px 21px;
          border-radius: 22px;
          font-size: 17px;
          line-height: 1.55;
          white-space: pre-wrap;
          word-break: break-word;
        }

        .user-bubble {
          background: #39344c;
          border: 1px solid #504968;
          color: #eeeaf9;
          border-bottom-right-radius: 7px;
        }

        .assistant-bubble {
          background: #1a1b23;
          border: 1px solid #363642;
          color: #f0eef5;
          border-bottom-left-radius: 7px;
          width: min(100%, 720px);
          max-width: 86%;
        }

        .assistant-bubble.error {
          border-color: #8b4545;
        }

        .empty-message {
          text-align: center;
          color: #777582;
          margin-top: 80px;
          font-size: 15px;
        }

        .typing {
          display: flex;
          gap: 5px;
          align-items: center;
          padding: 7px 3px;
        }

        .typing span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #aaa3bd;
          animation: pulse 1.2s infinite;
        }

        .typing span:nth-child(2) {
          animation-delay: 0.15s;
        }

        .typing span:nth-child(3) {
          animation-delay: 0.3s;
        }

        @keyframes pulse {
          0%,
          70%,
          100% {
            opacity: 0.3;
          }

          35% {
            opacity: 1;
          }
        }

        /* =========================
           LINKEDIN TOOL
        ========================= */

        .tool-page {
          max-width: 850px;
          margin: 0 auto;
        }

        .tool-header {
          margin-bottom: 28px;
        }

        .tool-title {
          margin: 0;
          font-size: 38px;
          font-weight: 600;
          letter-spacing: -1px;
        }

        .tool-description {
          margin-top: 10px;
          color: #a9a6b3;
          font-size: 16px;
          line-height: 1.6;
        }

        .tool-card {
          background: #181922;
          border: 1px solid #353541;
          border-radius: 22px;
          padding: 22px;
        }

        .tool-label {
          display: block;
          color: #e9e6f0;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .linkedin-textarea {
          width: 100%;
          min-height: 260px;
          resize: vertical;
          border-radius: 16px;
          border: 1px solid #3d3c4a;
          background: #111219;
          color: #f4f2f8;
          padding: 17px;
          outline: none;
          font-size: 16px;
          line-height: 1.55;
        }

        .linkedin-textarea:focus {
          border-color: #71668e;
          box-shadow:
            0 0 0 3px rgba(113, 102, 142, 0.12);
        }

        .tool-controls {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 15px;
        }

        .tone-select {
          background: #111219;
          border: 1px solid #3d3c4a;
          color: #eeeaf7;
          padding: 13px 14px;
          border-radius: 13px;
          outline: none;
        }

        .primary-button {
          margin-left: auto;
          border: 0;
          background: #71658e;
          color: white;
          padding: 13px 22px;
          border-radius: 13px;
          font-weight: 600;
          transition: 0.2s;
        }

        .primary-button:hover {
          background: #81739f;
        }

        .primary-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .reply-result {
          margin-top: 22px;
          border-radius: 18px;
          border: 1px solid #393846;
          background: #111219;
          padding: 18px;
        }

        .reply-result-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .reply-result-title {
          font-weight: 600;
        }

        .copy-button {
          border: 1px solid #454454;
          background: #20202b;
          color: #ddd9e8;
          border-radius: 10px;
          padding: 8px 12px;
        }

        .reply-text {
          color: #eeeaf4;
          line-height: 1.65;
          white-space: pre-wrap;
        }

        /* =========================
           BOTTOM INPUT
        ========================= */

        .input-area {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 15;
          padding: 18px 20px 22px;
          background:
            linear-gradient(
              to top,
              #101117 70%,
              rgba(16, 17, 23, 0)
            );
        }

        .input-inner {
          width: min(900px, 100%);
          margin: 0 auto;
          display: flex;
          align-items: flex-end;
          gap: 10px;
          border: 1px solid #393846;
          border-radius: 22px;
          background: #15161e;
          padding: 9px;
          box-shadow:
            0 10px 35px rgba(0, 0, 0, 0.25);
        }

        .chat-input {
          flex: 1;
          min-height: 55px;
          max-height: 160px;
          resize: none;
          border: 0;
          outline: 0;
          background: transparent;
          color: #f5f3fa;
          padding: 14px 12px;
          font-size: 17px;
          line-height: 1.45;
        }

        .chat-input::placeholder {
          color: #777582;
        }

        .send-button {
          min-width: 108px;
          height: 55px;
          border: 0;
          border-radius: 15px;
          background: #71658e;
          color: white;
          font-size: 16px;
          font-weight: 600;
        }

        .send-button:hover {
          background: #81739f;
        }

        .send-button:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        .footer-note {
          text-align: center;
          color: #64616d;
          font-size: 11px;
          margin-top: 8px;
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 700px) {
          .topbar {
            height: 72px;
            min-height: 72px;
            padding: 0 14px;
          }

          .brand {
            font-size: 21px;
          }

          .brand-star {
            font-size: 19px;
          }

          .icon-button {
            width: 47px;
            height: 47px;
            border-radius: 15px;
          }

          .main {
            padding: 38px 15px 145px;
          }

          .welcome {
            margin-bottom: 35px;
          }

          .welcome-title {
            font-size: 48px;
          }

          .welcome-subtitle {
            font-size: 20px;
            line-height: 1.35;
          }

          .bubble {
            max-width: 91%;
            font-size: 16px;
            padding: 15px 17px;
          }

          .assistant-bubble {
            max-width: 94%;
          }

          .input-area {
            padding: 10px 12px 16px;
          }

          .input-inner {
            border-radius: 19px;
            padding: 7px;
          }

          .chat-input {
            min-height: 50px;
            font-size: 16px;
          }

          .send-button {
            min-width: 74px;
            height: 50px;
            border-radius: 14px;
            font-size: 15px;
          }

          .footer-note {
            display: none;
          }

          .tool-title {
            font-size: 31px;
          }

          .tool-card {
            padding: 16px;
            border-radius: 18px;
          }

          .linkedin-textarea {
            min-height: 230px;
          }

          .tool-controls {
            flex-wrap: wrap;
          }

          .primary-button {
            width: 100%;
            margin-left: 0;
          }

          .tone-select {
            width: 100%;
          }
        }
      `}</style>

      {/* =========================
          HEADER
      ========================= */}

      <header className="topbar">
        <div className="brand">
          <span className="brand-star">✦</span>
          <span>Reze</span>
        </div>

        <div className="top-actions">
          <button
            className="icon-button"
            onClick={startNewChat}
            aria-label="New chat"
            title="New chat"
          >
            +
          </button>

          <div className="menu-wrapper">
            <button
              className="icon-button hamburger"
              onClick={() =>
                setMenuOpen((value) => !value)
              }
              aria-label="Menu"
              title="Menu"
            >
              ⋮
            </button>

            {menuOpen && (
              <div className="menu-panel">
                <button
                  className="menu-item"
                  onClick={startNewChat}
                >
                  ＋ New Chat
                </button>

                <button
                  className="menu-item"
                  onClick={() => {
                    setActiveTool("chat");
                    setMenuOpen(false);
                  }}
                >
                  ✦ Reze
                </button>

                <button
                  className="menu-item"
                  onClick={openLinkedInTool}
                >
                  in LinkedIn Post Reply
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* =========================
          MAIN CONTENT
      ========================= */}

      <section className="main">
        {activeTool === "chat" ? (
          <>
            {messages.length === 0 ? (
              <div className="welcome">
                <h1 className="welcome-title">
                  Reze
                </h1>

                <div className="welcome-subtitle">
                  How can Reze assist you today?
                </div>
              </div>
            ) : (
              <div className="messages">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`message-row ${message.role}`}
                  >
                    <div
                      className={`bubble ${
                        message.role === "user"
                          ? "user-bubble"
                          : "assistant-bubble"
                      } ${
                        message.error
                          ? "error"
                          : ""
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}

                {loading && (
                  <div className="message-row assistant">
                    <div className="bubble assistant-bubble">
                      <div className="typing">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            )}

            {messages.length === 0 && (
              <div className="empty-message">
                Ask Reze anything.
              </div>
            )}
          </>
        ) : (
          <div className="tool-page">
            <div className="tool-header">
              <h1 className="tool-title">
                LinkedIn Post Reply
              </h1>

              <p className="tool-description">
                Paste a LinkedIn post and Reze will
                create a natural reply for you.
              </p>
            </div>

            <div className="tool-card">
              <label className="tool-label">
                LinkedIn post
              </label>

              <textarea
                className="linkedin-textarea"
                value={linkedinPost}
                onChange={(event) =>
                  setLinkedinPost(
                    event.target.value
                  )
                }
                placeholder="Paste the LinkedIn post here..."
              />

              <div className="tool-controls">
                <select
                  className="tone-select"
                  value={linkedinTone}
                  onChange={(event) =>
                    setLinkedinTone(
                      event.target.value
                    )
                  }
                >
                  <option>
                    Professional
                  </option>
                  <option>
                    Friendly
                  </option>
                  <option>
                    Thoughtful
                  </option>
                  <option>
                    Confident
                  </option>
                  <option>
                    Casual
                  </option>
                </select>

                <button
                  className="primary-button"
                  onClick={
                    generateLinkedInReply
                  }
                  disabled={
                    linkedinLoading ||
                    !linkedinPost.trim()
                  }
                >
                  {linkedinLoading
                    ? "Generating..."
                    : "Generate Reply"}
                </button>
              </div>

              {linkedinReply && (
                <div className="reply-result">
                  <div className="reply-result-header">
                    <span className="reply-result-title">
                      Reze's Reply
                    </span>

                    <button
                      className="copy-button"
                      onClick={copyReply}
                    >
                      Copy
                    </button>
                  </div>

                  <div className="reply-text">
                    {linkedinReply}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </section>

      {/* =========================
          CHAT INPUT
      ========================= */}

      {activeTool === "chat" && (
        <div className="input-area">
          <div className="input-inner">
            <textarea
              className="chat-input"
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" &&
                  !event.shiftKey
                ) {
                  event.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Ask Reze anything..."
              rows={1}
            />

            <button
              className="send-button"
              onClick={sendMessage}
              disabled={
                loading || !input.trim()
              }
            >
              {loading ? "..." : "Send"}
            </button>
          </div>

          <div className="footer-note">
            Reze can make mistakes. Consider
            checking important information.
          </div>
        </div>
      )}
    </main>
  );
}
