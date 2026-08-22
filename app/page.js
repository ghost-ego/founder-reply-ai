"use client";

import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const [mode, setMode] = useState("reze");
  const [message, setMessage] = useState("");
  const [linkedinPost, setLinkedinPost] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [conversationId, setConversationId] = useState(null);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  /* =========================================================
     AUTO SCROLL
  ========================================================= */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  /* =========================================================
     RESET WHEN SWITCHING
  ========================================================= */

  function switchMode(newMode) {
    setMode(newMode);
    setMessages([]);
    setMessage("");
    setLinkedinPost("");
    setConversationId(null);
    setSidebarOpen(false);
  }

  /* =========================================================
     NEW CHAT
  ========================================================= */

  function newChat() {
    setMessages([]);
    setMessage("");
    setLinkedinPost("");
    setConversationId(null);
    setSidebarOpen(false);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }

  /* =========================================================
     SEND REZE MESSAGE
  ========================================================= */

  async function sendRezeMessage() {
    const text = message.trim();

    if (!text || loading) return;

    const userMessage = {
      role: "user",
      content: text,
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/reze", {
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
          data?.error ||
            "Reze could not answer right now."
        );
      }

      if (data?.conversationId) {
        setConversationId(data.conversationId);
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            data?.answer ||
            "I couldn't generate a response.",
        },
      ]);
    } catch (error) {
      console.error("Reze error:", error);

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          error: true,
          content:
            error?.message ||
            "Something went wrong while connecting to Reze.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  /* =========================================================
     SEND FOUNDER REPLY
  ========================================================= */

  async function sendFounderReply() {
    const post = linkedinPost.trim();

    if (!post || loading) return;

    const userMessage = {
      role: "user",
      content: post,
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
    ]);

    setLinkedinPost("");
    setLoading(true);

    try {
      /*
        IMPORTANT:
        FounderReply uses /api/chat.
        Reze NEVER uses this endpoint.
      */

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          linkedinPost: post,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            "FounderReply could not generate a reply."
        );
      }

      const answer =
        data?.reply ||
        data?.answer ||
        data?.content ||
        data?.message ||
        "I couldn't generate a reply.";

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: answer,
        },
      ]);
    } catch (error) {
      console.error(
        "FounderReply error:",
        error
      );

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          error: true,
          content:
            error?.message ||
            "Something went wrong while connecting to FounderReply AI.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  /* =========================================================
     SEND
  ========================================================= */

  function handleSend() {
    if (mode === "reze") {
      sendRezeMessage();
    } else {
      sendFounderReply();
    }
  }

  /* =========================================================
     ENTER KEY
  ========================================================= */

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  }

  /* =========================================================
     REZE WELCOME
  ========================================================= */

  const showWelcome =
    mode === "reze" &&
    messages.length === 0;

  /* =========================================================
     FOUNDER WELCOME
  ========================================================= */

  const showFounderWelcome =
    mode === "founder" &&
    messages.length === 0;

  return (
    <>
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
          background: #11131b;
          color: #f5f5f7;
          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        body {
          overflow: hidden;
        }

        button,
        textarea,
        input {
          font: inherit;
        }

        button {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>

      <div className="app">

        {/* =====================================================
            SIDEBAR
        ===================================================== */}

        <aside
          className={`sidebar ${
            sidebarOpen ? "open" : ""
          }`}
        >
          <div className="sidebarTop">
            <button
              className="newChat"
              onClick={newChat}
            >
              <span>＋</span>
              <span>New Chat</span>
            </button>
          </div>

          <div className="sidebarItems">

            <button
              className={`sidebarItem ${
                mode === "reze" ? "active" : ""
              }`}
              onClick={() =>
                switchMode("reze")
              }
            >
              <img
                src="/reze-avatar.png"
                alt="Reze"
                className="sidebarAvatar"
              />

              <span>Reze</span>
            </button>

            <button
              className={`sidebarItem ${
                mode === "founder"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                switchMode("founder")
              }
            >
              <span className="founderIcon">
                💼
              </span>

              <span>
                FounderReply AI
              </span>
            </button>

          </div>
        </aside>

        {/* =====================================================
            SIDEBAR OVERLAY MOBILE
        ===================================================== */}

        {sidebarOpen && (
          <button
            className="overlay"
            aria-label="Close menu"
            onClick={() =>
              setSidebarOpen(false)
            }
          />
        )}

        {/* =====================================================
            MAIN
        ===================================================== */}

        <main className="main">

          {/* ===================================================
              TOP BAR
          =================================================== */}

          <header className="topbar">

            <button
              className="topButton menuButton"
              onClick={() =>
                setSidebarOpen(true)
              }
              aria-label="Open menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className="topBrand">

              <div className="topAvatarWrap">
                <img
                  src="/reze-avatar.png"
                  alt="Reze"
                  className="topAvatar"
                />

                {mode === "reze" && (
                  <span className="onlineDot" />
                )}
              </div>

              <span className="topName">
                {mode === "reze"
                  ? "Reze"
                  : "FounderReply"}
              </span>

            </div>

            <button
              className="topButton plusButton"
              onClick={newChat}
              aria-label="New chat"
            >
              +
            </button>

          </header>

          {/* ===================================================
              CHAT AREA
          =================================================== */}

          <section className="chatArea">

            {/* =================================================
                REZE EMPTY STATE
            ================================================= */}

            {showWelcome && (
              <div className="welcome">

                <div className="welcomeAvatarWrap">

                  <img
                    src="/reze-avatar.png"
                    alt="Reze"
                    className="welcomeAvatar"
                  />

                  <span className="welcomeOnline" />

                </div>

                <h1>Reze</h1>

                <p>
                  How can Reze assist you
                  today?
                </p>

              </div>
            )}

            {/* =================================================
                FOUNDER EMPTY STATE
            ================================================= */}

            {showFounderWelcome && (
              <div className="welcome">

                <div className="welcomeAvatarWrap founderWelcomeAvatar">
                  💼
                </div>

                <h1>
                  FounderReply AI
                </h1>

                <p>
                  Turn LinkedIn posts into
                  thoughtful replies.
                </p>

              </div>
            )}

            {/* =================================================
                MESSAGES
            ================================================= */}

            <div className="messages">

              {messages.map(
                (item, index) => (
                  <div
                    key={index}
                    className={`messageRow ${
                      item.role ===
                      "user"
                        ? "userRow"
                        : "assistantRow"
                    }`}
                  >

                    {item.role ===
                      "assistant" && (
                      <div className="smallAvatarWrap">
                        {mode ===
                        "reze" ? (
                          <img
                            src="/reze-avatar.png"
                            alt="Reze"
                            className="smallAvatar"
                          />
                        ) : (
                          <div className="smallFounderAvatar">
                            💼
                          </div>
                        )}
                      </div>
                    )}

                    <div
                      className={`messageBubble ${
                        item.role ===
                        "user"
                          ? "userBubble"
                          : "assistantBubble"
                      } ${
                        item.error
                          ? "errorBubble"
                          : ""
                      }`}
                    >
                      {item.content}
                    </div>

                  </div>
                )
              )}

              {/* =================================================
                  LOADING
              ================================================= */}

              {loading && (
                <div className="messageRow assistantRow">

                  <div className="smallAvatarWrap">

                    {mode === "reze" ? (
                      <img
                        src="/reze-avatar.png"
                        alt="Reze"
                        className="smallAvatar"
                      />
                    ) : (
                      <div className="smallFounderAvatar">
                        💼
                      </div>
                    )}

                  </div>

                  <div className="typing">

                    <span></span>
                    <span></span>
                    <span></span>

                  </div>

                </div>
              )}

              <div
                ref={messagesEndRef}
              />

            </div>

          </section>

          {/* ===================================================
              INPUT
          =================================================== */}

          <div className="inputArea">

            <div className="inputBox">

              {mode === "reze" ? (
                <textarea
                  ref={inputRef}
                  value={message}
                  onChange={(event) =>
                    setMessage(
                      event.target.value
                    )
                  }
                  onKeyDown={
                    handleKeyDown
                  }
                  placeholder="Ask Reze anything..."
                  rows={1}
                  disabled={loading}
                />
              ) : (
                <textarea
                  ref={inputRef}
                  value={linkedinPost}
                  onChange={(event) =>
                    setLinkedinPost(
                      event.target.value
                    )
                  }
                  onKeyDown={
                    handleKeyDown
                  }
                  placeholder="Paste a LinkedIn post..."
                  rows={1}
                  disabled={loading}
                />
              )}

              <button
                className="sendButton"
                onClick={handleSend}
                disabled={
                  loading ||
                  (mode === "reze"
                    ? !message.trim()
                    : !linkedinPost.trim())
                }
                aria-label="Send"
              >
                {loading ? (
                  <span className="buttonLoader">
                    ...
                  </span>
                ) : (
                  "↑"
                )}
              </button>

            </div>

            <div className="bottomHint">
              {mode === "reze"
                ? "Reze can make mistakes. Check important information."
                : "FounderReply AI helps you create thoughtful LinkedIn replies."}
            </div>

          </div>

        </main>
      </div>

      {/* =======================================================
          CSS
      ======================================================= */}

      <style jsx>{`

        .app {
          width: 100vw;
          height: 100vh;
          display: flex;
          background: #11131b;
          overflow: hidden;
        }

        /* =====================================================
           SIDEBAR
        ===================================================== */

        .sidebar {
          width: 290px;
          height: 100vh;
          flex-shrink: 0;
          background: #121521;
          border-right: 1px solid #2a2d3b;
          padding: 28px 22px;
          position: relative;
          z-index: 50;
        }

        .sidebarTop {
          margin-bottom: 38px;
        }

        .newChat {
          width: 100%;
          height: 58px;
          border-radius: 18px;
          border: 1px solid #4a4e62;
          background: transparent;
          color: #f4f4f7;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 10px;
          padding: 0 22px;
          font-size: 18px;
          cursor: pointer;
          transition: 0.2s;
        }

        .newChat:hover {
          background: #1d2030;
        }

        .newChat span:first-child {
          font-size: 28px;
          line-height: 1;
        }

        .sidebarItems {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sidebarItem {
          width: 100%;
          height: 70px;
          border: none;
          border-radius: 18px;
          background: transparent;
          color: #a9adbd;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 0 20px;
          font-size: 20px;
          text-align: left;
          cursor: pointer;
        }

        .sidebarItem.active {
          background: #302e3d;
          color: #ffffff;
        }

        .sidebarAvatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          object-fit: cover;
        }

        .founderIcon {
          font-size: 26px;
        }

        /* =====================================================
           MAIN
        ===================================================== */

        .main {
          flex: 1;
          min-width: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #151821;
        }

        /* =====================================================
           TOPBAR
        ===================================================== */

        .topbar {
          height: 112px;
          min-height: 112px;
          border-bottom: 1px solid #292c38;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 30px;
          position: relative;
          z-index: 20;
          background: #12151d;
        }

        .topButton {
          width: 70px;
          height: 70px;
          border-radius: 24px;
          border: 1px solid #3c3f50;
          background: #181a27;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .menuButton {
          flex-direction: column;
          gap: 7px;
        }

        .menuButton span {
          width: 34px;
          height: 4px;
          border-radius: 5px;
          background: #e6e6eb;
        }

        .plusButton {
          font-size: 42px;
          font-weight: 300;
        }

        .topBrand {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .topAvatarWrap {
          width: 62px;
          height: 62px;
          position: relative;
        }

        .topAvatar {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          object-fit: cover;
        }

        .onlineDot {
          width: 18px;
          height: 18px;
          background: #2dde72;
          border: 3px solid #12151d;
          border-radius: 50%;
          position: absolute;
          right: -1px;
          bottom: 1px;
        }

        .topName {
          font-size: 30px;
          font-weight: 700;
        }

        /* =====================================================
           CHAT
        ===================================================== */

        .chatArea {
          flex: 1;
          min-height: 0;
          overflow-y: auto;
          position: relative;
          padding: 30px 8%;
        }

        .welcome {
          min-height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          padding-top: 55px;
          text-align: center;
        }

        .welcomeAvatarWrap {
          width: 82px;
          height: 82px;
          position: relative;
        }

        .welcomeAvatar {
          width: 82px;
          height: 82px;
          border-radius: 50%;
          object-fit: cover;
        }

        .welcomeOnline {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #2dde72;
          border: 3px solid #151821;
          position: absolute;
          right: 0;
          bottom: 2px;
        }

        .founderWelcomeAvatar {
          border-radius: 50%;
          background: #302e3d;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 38px;
        }

        .welcome h1 {
          margin: 20px 0 6px;
          font-size: 32px;
          font-weight: 700;
        }

        .welcome p {
          margin: 0;
          color: #aeb1bd;
          font-size: 18px;
        }

        .messages {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-bottom: 30px;
        }

        .messageRow {
          width: 100%;
          display: flex;
          align-items: flex-end;
          gap: 12px;
        }

        .userRow {
          justify-content: flex-end;
        }

        .assistantRow {
          justify-content: flex-start;
        }

        .messageBubble {
          max-width: min(760px, 78%);
          padding: 18px 22px;
          border-radius: 22px;
          font-size: 18px;
          line-height: 1.55;
          white-space: pre-wrap;
          word-break: break-word;
        }

        .userBubble {
          background: #39354f;
          border: 1px solid #514b6a;
          border-bottom-right-radius: 8px;
        }

        .assistantBubble {
          background: #20232d;
          border: 1px solid #3a3d48;
          border-bottom-left-radius: 8px;
        }

        .errorBubble {
          border-color: #9c4c4c;
          color: #ffb2b2;
        }

        .smallAvatarWrap {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
        }

        .smallAvatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          object-fit: cover;
        }

        .smallFounderAvatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #302e3d;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 21px;
        }

        /* =====================================================
           TYPING
        ===================================================== */

        .typing {
          height: 48px;
          min-width: 75px;
          padding: 0 20px;
          border-radius: 22px;
          background: #20232d;
          border: 1px solid #3a3d48;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }

        .typing span {
          width: 7px;
          height: 7px;
          background: #aaa;
          border-radius: 50%;
          animation: typing 1.2s infinite;
        }

        .typing span:nth-child(2) {
          animation-delay: 0.15s;
        }

        .typing span:nth-child(3) {
          animation-delay: 0.3s;
        }

        @keyframes typing {
          0%,
          60%,
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }

          30% {
            transform: translateY(-5px);
            opacity: 1;
          }
        }

        /* =====================================================
           INPUT
        ===================================================== */

        .inputArea {
          padding: 18px 5% 22px;
          background: #151821;
        }

        .inputBox {
          width: 100%;
          min-height: 82px;
          border-radius: 28px;
          border: 1px solid #3a3d4c;
          background: #151821;
          display: flex;
          align-items: center;
          padding: 10px 12px 10px 24px;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.02);
        }

        .inputBox textarea {
          flex: 1;
          min-width: 0;
          max-height: 150px;
          resize: none;
          border: none;
          outline: none;
          background: transparent;
          color: #f5f5f7;
          font-size: 20px;
          line-height: 1.4;
          padding: 12px 10px;
        }

        .inputBox textarea::placeholder {
          color: #777b8b;
        }

        .sendButton {
          width: 62px;
          height: 62px;
          flex-shrink: 0;
          border: none;
          border-radius: 21px;
          background: #37324e;
          color: #d9d6e8;
          font-size: 36px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sendButton:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        .buttonLoader {
          font-size: 20px;
          letter-spacing: 2px;
        }

        .bottomHint {
          text-align: center;
          color: #676b78;
          font-size: 12px;
          margin-top: 9px;
        }

        /* =====================================================
           OVERLAY
        ===================================================== */

        .overlay {
          display: none;
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {

          .sidebar {
            position: fixed;
            left: 0;
            top: 0;
            width: 290px;
            transform: translateX(-105%);
            transition: transform 0.25s ease;
            box-shadow: 20px 0 50px rgba(0,0,0,0.45);
          }

          .sidebar.open {
            transform: translateX(0);
          }

          .overlay {
            display: block;
            position: fixed;
            inset: 0;
            z-index: 40;
            border: none;
            background: rgba(0,0,0,0.55);
          }

          .topbar {
            height: 86px;
            min-height: 86px;
            padding: 0 14px;
          }

          .topButton {
            width: 58px;
            height: 58px;
            border-radius: 20px;
          }

          .menuButton span {
            width: 28px;
            height: 3px;
          }

          .plusButton {
            font-size: 34px;
          }

          .topAvatarWrap {
            width: 48px;
            height: 48px;
          }

          .topAvatar {
            width: 48px;
            height: 48px;
          }

          .topName {
            font-size: 23px;
          }

          .onlineDot {
            width: 15px;
            height: 15px;
            border-width: 2px;
          }

          .chatArea {
            padding: 20px 18px;
          }

          .welcome {
            padding-top: 45px;
          }

          .welcomeAvatarWrap {
            width: 76px;
            height: 76px;
          }

          .welcomeAvatar {
            width: 76px;
            height: 76px;
          }

          .welcome h1 {
            font-size: 28px;
            margin-top: 18px;
          }

          .welcome p {
            font-size: 17px;
          }

          .messageBubble {
            max-width: 84%;
            font-size: 17px;
            padding: 15px 18px;
          }

          .smallAvatarWrap,
          .smallAvatar,
          .smallFounderAvatar {
            width: 38px;
            height: 38px;
          }

          .inputArea {
            padding: 10px 12px 14px;
          }

          .inputBox {
            min-height: 72px;
            border-radius: 25px;
            padding-left: 15px;
          }

          .inputBox textarea {
            font-size: 18px;
            padding: 10px 5px;
          }

          .sendButton {
            width: 56px;
            height: 56px;
            border-radius: 19px;
            font-size: 31px;
          }

          .bottomHint {
            font-size: 10px;
          }
        }

        /* =====================================================
           VERY SMALL PHONES
        ===================================================== */

        @media (max-width: 380px) {

          .topbar {
            padding: 0 9px;
          }

          .topButton {
            width: 52px;
            height: 52px;
          }

          .topAvatarWrap,
          .topAvatar {
            width: 43px;
            height: 43px;
          }

          .topName {
            font-size: 21px;
          }

          .chatArea {
            padding-left: 12px;
            padding-right: 12px;
          }

          .messageBubble {
            max-width: 88%;
            font-size: 16px;
          }
        }

      `}</style>
    </>
  );
}
