"use client";

import { useEffect, useRef, useState } from "react";

export default function HomePage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [conversationId, setConversationId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  function startNewChat() {
    setMessages([]);
    setConversationId(null);
    setInput("");
    setSidebarOpen(false);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }

  async function sendMessage() {
    const message = input.trim();

    if (!message || loading) {
      return;
    }

    setInput("");

    const userMessage = {
      role: "user",
      content: message,
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
    ]);

    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
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
        setConversationId(
          data.conversationId
        );
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            data?.answer ||
            "I'm here. Try asking me again.",
        },
      ]);
    } catch (error) {
      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            error?.message ||
            "Something went wrong. Try again.",
          error: true,
        },
      ]);
    } finally {
      setLoading(false);

      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

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
          color: #ffffff;
          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Helvetica,
            Arial,
            sans-serif;
        }

        body {
          overflow-x: hidden;
        }

        button,
        textarea {
          font-family: inherit;
        }

        ::-webkit-scrollbar {
          width: 7px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: #363442;
          border-radius: 10px;
        }
      `}</style>

      <div className="app">
        {/* =================================================
            MOBILE TOP BAR
        ================================================= */}

        <header className="mobileTopBar">
          <button
            className="menuButton"
            onClick={() =>
              setSidebarOpen(true)
            }
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>

          <div className="mobileBrand">
            <div className="miniAvatar">
              <img
                src="/reze-avatar.png"
                alt="Reze"
                onError={(event) => {
                  event.currentTarget.style.display =
                    "none";
                }}
              />
            </div>

            <span>Reze</span>
          </div>

          <button
            className="newChatMobile"
            onClick={startNewChat}
            aria-label="New chat"
          >
            +
          </button>
        </header>

        {/* =================================================
            SIDEBAR OVERLAY
        ================================================= */}

        {sidebarOpen && (
          <div
            className="sidebarOverlay"
            onClick={() =>
              setSidebarOpen(false)
            }
          />
        )}

        {/* =================================================
            SIDEBAR
        ================================================= */}

        <aside
          className={`sidebar ${
            sidebarOpen ? "sidebarVisible" : ""
          }`}
        >
          <div className="sidebarInner">
            <button
              className="newChatButton"
              onClick={startNewChat}
            >
              <span className="plus">+</span>
              <span>New Chat</span>
            </button>

            <div className="navItems">
              <button
                className="navItem active"
                onClick={() => {
                  setSidebarOpen(false);
                }}
              >
                <span className="navIcon">
                  🤖
                </span>

                <span>Reze</span>
              </button>

              <button
                className="navItem"
                onClick={() => {
                  window.location.href =
                    "/founder-reply";
                }}
              >
                <span className="navIcon">
                  💼
                </span>

                <span>FounderReply AI</span>
              </button>
            </div>
          </div>
        </aside>

        {/* =================================================
            MAIN
        ================================================= */}

        <main className="main">
          {/* =================================================
              DESKTOP HEADER
          ================================================= */}

          <div className="desktopHeader">
            <button
              className="desktopMenuButton"
              aria-label="Menu"
            >
              <span>⋮</span>
            </button>
          </div>

          {/* =================================================
              WELCOME AREA
          ================================================= */}

          <section
            className={`welcome ${
              messages.length > 0
                ? "welcomeSmall"
                : ""
            }`}
          >
            {messages.length === 0 ? (
              <>
                <h1>Reze</h1>

                <p className="welcomeText">
                  How can Reze assist you today?
                </p>

                <div className="heroAvatar">
                  <img
                    src="/reze-avatar.png"
                    alt="Reze"
                    onError={(event) => {
                      event.currentTarget.style.display =
                        "none";

                      event.currentTarget.parentElement.classList.add(
                        "avatarFallback"
                      );
                    }}
                  />

                  <span className="onlineDot" />
                </div>
              </>
            ) : (
              <div className="smallBrand">
                <div className="smallBrandAvatar">
                  <img
                    src="/reze-avatar.png"
                    alt="Reze"
                    onError={(event) => {
                      event.currentTarget.style.display =
                        "none";
                    }}
                  />

                  <span className="smallOnlineDot" />
                </div>

                <span>Reze</span>
              </div>
            )}
          </section>

          {/* =================================================
              CHAT
          ================================================= */}

          <section className="chatArea">
            <div className="messages">
              {messages.map(
                (message, index) => (
                  <div
                    key={`${index}-${message.role}`}
                    className={`messageRow ${
                      message.role === "user"
                        ? "userRow"
                        : "assistantRow"
                    }`}
                  >
                    {message.role ===
                      "assistant" && (
                      <div className="messageAvatar">
                        <img
                          src="/reze-avatar.png"
                          alt="Reze"
                          onError={(event) => {
                            event.currentTarget.style.display =
                              "none";
                          }}
                        />
                      </div>
                    )}

                    <div
                      className={`messageBubble ${
                        message.role === "user"
                          ? "userBubble"
                          : "assistantBubble"
                      } ${
                        message.error
                          ? "errorBubble"
                          : ""
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                )
              )}

              {loading && (
                <div className="messageRow assistantRow">
                  <div className="messageAvatar">
                    <img
                      src="/reze-avatar.png"
                      alt="Reze"
                      onError={(event) => {
                        event.currentTarget.style.display =
                          "none";
                      }}
                    />
                  </div>

                  <div className="typingBubble">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </section>

          {/* =================================================
              INPUT AREA
          ================================================= */}

          <div className="inputSection">
            <div className="inputBox">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                onKeyDown={handleKeyDown}
                placeholder="Ask Reze anything..."
                rows={1}
                disabled={loading}
              />

              <button
                className={`sendButton ${
                  input.trim()
                    ? "sendActive"
                    : ""
                }`}
                onClick={sendMessage}
                disabled={
                  !input.trim() || loading
                }
              >
                {loading ? (
                  <span className="sendLoader">
                    •••
                  </span>
                ) : (
                  <>
                    <span className="sendText">
                      Send
                    </span>

                    <span className="sendArrow">
                      ↑
                    </span>
                  </>
                )}
              </button>
            </div>

            <div className="inputHint">
              Reze can make mistakes. Check
              important information.
            </div>
          </div>

          {/* =================================================
              BOTTOM BRAND
          ================================================= */}

          {messages.length === 0 && (
            <div className="bottomBrand">
              <span className="sparkle">
                ✨
              </span>

              <span>REZE</span>

              <span className="statusLine" />
            </div>
          )}
        </main>
      </div>

      <style jsx>{`
        .app {
          width: 100%;
          min-height: 100dvh;
          display: flex;
          background: #11131b;
          overflow: hidden;
        }

        /* ================================================
           SIDEBAR
        ================================================= */

        .sidebar {
          width: 340px;
          min-width: 340px;
          min-height: 100dvh;
          background: #121520;
          border-right: 1px solid #252735;
          position: relative;
          z-index: 30;
        }

        .sidebarInner {
          padding: 32px 28px;
        }

        .newChatButton {
          width: 100%;
          height: 88px;
          border: 2px solid #50556a;
          border-radius: 22px;
          background: transparent;
          color: #ffffff;
          display: flex;
          align-items: center;
          padding: 0 30px;
          gap: 18px;
          font-size: 28px;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .newChatButton:hover {
          background: #1a1d2a;
          border-color: #696f87;
        }

        .plus {
          font-size: 34px;
          font-weight: 300;
        }

        .navItems {
          margin-top: 38px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .navItem {
          width: 100%;
          height: 80px;
          border: 0;
          border-radius: 20px;
          background: transparent;
          color: #9ea2b6;
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 0 24px;
          font-size: 27px;
          text-align: left;
          cursor: pointer;
        }

        .navItem.active {
          background: #302e3c;
          color: #ffffff;
        }

        .navIcon {
          font-size: 29px;
        }

        /* ================================================
           MAIN
        ================================================= */

        .main {
          flex: 1;
          min-width: 0;
          min-height: 100dvh;
          position: relative;
          display: flex;
          flex-direction: column;
          background:
            radial-gradient(
              circle at 50% 25%,
              rgba(89, 82, 117, 0.08),
              transparent 38%
            ),
            #181a22;
        }

        .desktopHeader {
          position: absolute;
          top: 32px;
          right: 32px;
          z-index: 10;
        }

        .desktopMenuButton {
          width: 82px;
          height: 82px;
          border-radius: 22px;
          border: 1px solid #3c3b49;
          background: #1d1c28;
          color: white;
          font-size: 43px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .desktopMenuButton span {
          transform: translateY(-6px);
        }

        /* ================================================
           WELCOME
        ================================================= */

        .welcome {
          padding-top: 105px;
          text-align: center;
          transition: 0.25s ease;
        }

        .welcome h1 {
          margin: 0;
          font-size: 62px;
          line-height: 1.1;
          font-weight: 400;
          letter-spacing: -1px;
        }

        .welcomeText {
          margin: 26px 20px 30px;
          color: #e5e5eb;
          font-size: 29px;
          font-weight: 400;
        }

        .heroAvatar {
          width: 112px;
          height: 112px;
          margin: 0 auto;
          border-radius: 50%;
          background: #f0eff5;
          position: relative;
          overflow: visible;
          border: 2px solid rgba(
            255,
            255,
            255,
            0.35
          );
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .heroAvatar img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          display: block;
        }

        .onlineDot {
          width: 21px;
          height: 21px;
          background: #32d86d;
          border-radius: 50%;
          position: absolute;
          right: 3px;
          bottom: 3px;
          border: 3px solid #181a22;
        }

        .avatarFallback::after {
          content: "R";
          font-size: 48px;
          font-weight: 700;
          color: #292735;
        }

        .welcomeSmall {
          padding-top: 35px;
        }

        .smallBrand {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 24px;
          font-weight: 600;
          color: #eeeeF4;
        }

        .smallBrandAvatar {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          overflow: visible;
          background: #eeeef3;
          position: relative;
        }

        .smallBrandAvatar img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .smallOnlineDot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #32d86d;
          position: absolute;
          right: 0;
          bottom: 0;
          border: 2px solid #181a22;
        }

        /* ================================================
           CHAT
        ================================================= */

        .chatArea {
          flex: 1;
          width: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 30px 7% 170px;
        }

        .messages {
          width: 100%;
          max-width: 850px;
          margin: 0 auto;
        }

        .messageRow {
          width: 100%;
          display: flex;
          margin-bottom: 24px;
          gap: 12px;
          align-items: flex-end;
        }

        .userRow {
          justify-content: flex-end;
        }

        .assistantRow {
          justify-content: flex-start;
        }

        .messageAvatar {
          width: 38px;
          height: 38px;
          min-width: 38px;
          border-radius: 50%;
          overflow: hidden;
          background: #eeeeF3;
        }

        .messageAvatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .messageBubble {
          max-width: min(78%, 720px);
          padding: 17px 21px;
          border-radius: 20px;
          font-size: 18px;
          line-height: 1.55;
          white-space: pre-wrap;
          word-break: break-word;
        }

        .userBubble {
          background: #3a374d;
          border: 1px solid #4a465e;
          border-bottom-right-radius: 7px;
        }

        .assistantBubble {
          background: #292934;
          border: 1px solid #3c3c48;
          border-bottom-left-radius: 7px;
        }

        .errorBubble {
          border-color: #7e4242;
        }

        .typingBubble {
          min-width: 72px;
          height: 48px;
          border-radius: 18px;
          background: #292934;
          border: 1px solid #3c3c48;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }

        .typingBubble span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #aaa8b8;
          animation: typing 1.2s infinite;
        }

        .typingBubble span:nth-child(2) {
          animation-delay: 0.15s;
        }

        .typingBubble span:nth-child(3) {
          animation-delay: 0.3s;
        }

        @keyframes typing {
          0%,
          60%,
          100% {
            opacity: 0.3;
            transform: translateY(0);
          }

          30% {
            opacity: 1;
            transform: translateY(-4px);
          }
        }

        /* ================================================
           INPUT
        ================================================= */

        .inputSection {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 18px 6% 24px;
          background: linear-gradient(
            to top,
            #181a22 65%,
            rgba(24, 26, 34, 0)
          );
          z-index: 15;
        }

        .inputBox {
          max-width: 900px;
          margin: 0 auto;
          min-height: 76px;
          border-radius: 21px;
          border: 1px solid #3d3d4d;
          background: #171923;
          display: flex;
          align-items: center;
          padding: 8px 9px 8px 20px;
          box-shadow:
            0 12px 40px rgba(0, 0, 0, 0.22);
        }

        textarea {
          flex: 1;
          min-width: 0;
          resize: none;
          border: 0;
          outline: none;
          background: transparent;
          color: white;
          font-size: 19px;
          line-height: 1.4;
          padding: 13px 10px;
          max-height: 130px;
        }

        textarea::placeholder {
          color: #8c8d9a;
        }

        .sendButton {
          min-width: 105px;
          height: 58px;
          border: 0;
          border-radius: 15px;
          background: #302d42;
          color: #777589;
          font-size: 17px;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .sendButton:disabled {
          cursor: not-allowed;
        }

        .sendActive {
          background: #7068c8;
          color: white;
        }

        .sendArrow {
          display: none;
        }

        .sendLoader {
          letter-spacing: 3px;
        }

        .inputHint {
          max-width: 900px;
          margin: 8px auto 0;
          text-align: center;
          color: #6f707c;
          font-size: 11px;
        }

        /* ================================================
           BOTTOM BRAND
        ================================================= */

        .bottomBrand {
          position: absolute;
          bottom: 125px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 7px;
          color: #aaaab5;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          pointer-events: none;
        }

        .sparkle {
          position: absolute;
          bottom: -55px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 28px;
        }

        .statusLine {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #32d86d;
        }

        /* ================================================
           MOBILE HEADER
        ================================================= */

        .mobileTopBar {
          display: none;
        }

        /* ================================================
           MOBILE
        ================================================= */

        @media (max-width: 700px) {
          .app {
            min-height: 100dvh;
            height: 100dvh;
          }

          .mobileTopBar {
            display: flex;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 64px;
            z-index: 50;
            align-items: center;
            justify-content: space-between;
            padding: 8px 14px;
            background: rgba(
              17,
              19,
              27,
              0.92
            );
            backdrop-filter: blur(14px);
            border-bottom: 1px solid
              rgba(255, 255, 255, 0.05);
          }

          .menuButton,
          .newChatMobile {
            width: 44px;
            height: 44px;
            border-radius: 13px;
            border: 1px solid #383948;
            background: #1b1c27;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .menuButton {
            flex-direction: column;
            gap: 4px;
            padding: 10px;
          }

          .menuButton span {
            display: block;
            width: 19px;
            height: 2px;
            background: #dedee5;
            border-radius: 5px;
          }

          .newChatMobile {
            font-size: 27px;
            font-weight: 300;
            cursor: pointer;
          }

          .mobileBrand {
            display: flex;
            align-items: center;
            gap: 9px;
            font-size: 18px;
            font-weight: 600;
          }

          .miniAvatar {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            overflow: hidden;
            background: #eeeef3;
          }

          .miniAvatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .sidebar {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            width: min(82vw, 320px);
            min-width: 0;
            transform: translateX(-105%);
            transition: transform 0.25s ease;
            box-shadow: 15px 0 50px
              rgba(0, 0, 0, 0.35);
          }

          .sidebarVisible {
            transform: translateX(0);
          }

          .sidebarInner {
            padding: 88px 20px 25px;
          }

          .newChatButton {
            height: 62px;
            border-radius: 16px;
            padding: 0 20px;
            font-size: 20px;
          }

          .plus {
            font-size: 27px;
          }

          .navItems {
            margin-top: 25px;
            gap: 9px;
          }

          .navItem {
            height: 59px;
            border-radius: 15px;
            padding: 0 17px;
            font-size: 19px;
          }

          .navIcon {
            font-size: 21px;
          }

          .sidebarOverlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.55);
            z-index: 25;
            backdrop-filter: blur(2px);
          }

          .main {
            width: 100%;
            min-width: 0;
            height: 100dvh;
            min-height: 100dvh;
          }

          .desktopHeader {
            display: none;
          }

          .welcome {
            padding: 105px 20px 20px;
          }

          .welcome h1 {
            font-size: 42px;
            letter-spacing: -0.5px;
          }

          .welcomeText {
            margin: 14px auto 23px;
            max-width: 330px;
            font-size: 19px;
            line-height: 1.35;
          }

          .heroAvatar {
            width: 88px;
            height: 88px;
          }

          .onlineDot {
            width: 17px;
            height: 17px;
            border-width: 2px;
          }

          .welcomeSmall {
            padding-top: 78px;
            padding-bottom: 0;
          }

          .smallBrand {
            font-size: 18px;
          }

          .smallBrandAvatar {
            width: 35px;
            height: 35px;
          }

          .chatArea {
            padding:
              15px 13px
              120px;
          }

          .messages {
            max-width: 100%;
          }

          .messageRow {
            margin-bottom: 14px;
            gap: 8px;
          }

          .messageAvatar {
            width: 30px;
            height: 30px;
            min-width: 30px;
          }

          .messageBubble {
            max-width: 86%;
            padding: 12px 15px;
            border-radius: 17px;
            font-size: 15.5px;
            line-height: 1.48;
          }

          .typingBubble {
            min-width: 60px;
            height: 42px;
          }

          .inputSection {
            padding:
              9px 11px
              max(10px, env(safe-area-inset-bottom));
            background: linear-gradient(
              to top,
              #181a22 78%,
              rgba(24, 26, 34, 0)
            );
          }

          .inputBox {
            min-height: 58px;
            border-radius: 18px;
            padding: 5px 6px 5px 13px;
          }

          textarea {
            font-size: 15.5px;
            padding: 10px 6px;
            max-height: 90px;
          }

          .sendButton {
            min-width: 55px;
            width: 55px;
            height: 46px;
            border-radius: 13px;
            font-size: 21px;
          }

          .sendText {
            display: none;
          }

          .sendArrow {
            display: inline;
            font-size: 24px;
          }

          .inputHint {
            display: none;
          }

          .bottomBrand {
            bottom: 93px;
            font-size: 11px;
          }

          .sparkle {
            bottom: -38px;
            font-size: 20px;
          }
        }

        /* ================================================
           VERY SMALL PHONES
        ================================================= */

        @media (max-width: 380px) {
          .welcome {
            padding-top: 95px;
          }

          .welcome h1 {
            font-size: 38px;
          }

          .welcomeText {
            font-size: 17px;
          }

          .heroAvatar {
            width: 78px;
            height: 78px;
          }

          .messageBubble {
            max-width: 88%;
            font-size: 15px;
          }
        }
      `}</style>
    </>
  );
}
