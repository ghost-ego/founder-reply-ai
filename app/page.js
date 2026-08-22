"use client";

import { useEffect, useRef, useState } from "react";

export default function RezePage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversationId, setConversationId] = useState(null);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  /* =========================================================
     SCROLL TO BOTTOM
  ========================================================= */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  /* =========================================================
     NEW CHAT
  ========================================================= */

  function newChat() {
    setMessages([]);
    setInput("");
    setConversationId(null);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }

  /* =========================================================
     SEND MESSAGE
  ========================================================= */

  async function sendMessage() {
    const text = input.trim();

    if (!text || loading) return;

    const userMessage = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setInput("");
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
        setConversationId(
          data.conversationId
        );
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data?.answer ||
            "I couldn't generate a response.",
        },
      ]);
    } catch (error) {
      console.error("Reze chat error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          error: true,
          content:
            error?.message ||
            "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);

      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }

  /* =========================================================
     ENTER KEY
  ========================================================= */

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

  /* =========================================================
     FORMAT MESSAGE
  ========================================================= */

  function formatMessage(text) {
    if (!text) return null;

    const lines = text.split("\n");

    return lines.map((line, index) => (
      <span key={index}>
        {line}

        {index !== lines.length - 1 && (
          <br />
        )}
      </span>
    ));
  }

  /* =========================================================
     UI
  ========================================================= */

  return (
    <main className="reze-app">

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <header className="top-bar">

        <div className="brand">
          <span className="brand-name">
            Reze
          </span>
        </div>

        <button
          className="new-chat-button"
          onClick={newChat}
          aria-label="New chat"
        >
          +
        </button>

      </header>

      {/* =====================================================
          CHAT AREA
      ===================================================== */}

      <section className="chat-area">

        {messages.length === 0 ? (

          /* =================================================
             WELCOME SCREEN
          ================================================= */

          <div className="welcome">

            <h1>Reze</h1>

            <p>
              How can Reze assist you today?
            </p>

          </div>

        ) : (

          /* =================================================
             MESSAGES
          ================================================= */

          <div className="messages">

            {messages.map(
              (message, index) => {

                const isUser =
                  message.role === "user";

                return (
                  <div
                    key={index}
                    className={
                      isUser
                        ? "message-row user-row"
                        : "message-row assistant-row"
                    }
                  >

                    <div
                      className={
                        isUser
                          ? "message user-message"
                          : message.error
                          ? "message assistant-message error-message"
                          : "message assistant-message"
                      }
                    >
                      {formatMessage(
                        message.content
                      )}
                    </div>

                  </div>
                );
              }
            )}

            {/* =============================================
                LOADING
            ============================================= */}

            {loading && (
              <div className="message-row assistant-row">

                <div className="message assistant-message typing">

                  <span></span>
                  <span></span>
                  <span></span>

                </div>

              </div>
            )}

            <div ref={messagesEndRef} />

          </div>
        )}

      </section>

      {/* =====================================================
          INPUT AREA
      ===================================================== */}

      <div className="input-container">

        <div className="input-box">

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
            className="send-button"
            onClick={sendMessage}
            disabled={
              loading ||
              !input.trim()
            }
            aria-label="Send message"
          >
            ↑
          </button>

        </div>

      </div>

      {/* =====================================================
          STYLES
      ===================================================== */}

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
          background: #151820;
          color: #f4f4f7;
          font-family:
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

        /* ===================================================
           APP
        =================================================== */

        .reze-app {
          width: 100%;
          height: 100dvh;
          min-height: 100dvh;

          display: flex;
          flex-direction: column;

          background:
            radial-gradient(
              circle at 50% 20%,
              rgba(76, 68, 108, 0.08),
              transparent 35%
            ),
            #151820;

          overflow: hidden;
        }

        /* ===================================================
           TOP BAR
        =================================================== */

        .top-bar {
          height: 92px;
          min-height: 92px;

          width: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          position: relative;

          border-bottom: 1px solid
            rgba(255, 255, 255, 0.055);

          background:
            rgba(15, 18, 25, 0.92);

          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .brand {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-name {
          font-size: 25px;
          font-weight: 700;
          letter-spacing: -0.5px;
          color: #f4f4f7;
        }

        /* ===================================================
           NEW CHAT
        =================================================== */

        .new-chat-button {
          position: absolute;

          right: 24px;
          top: 50%;
          transform: translateY(-50%);

          width: 58px;
          height: 58px;

          border-radius: 20px;

          border: 1px solid
            rgba(116, 108, 151, 0.45);

          background: #1b1d27;

          color: #f4f4f7;

          font-size: 38px;
          font-weight: 300;

          line-height: 1;

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;

          transition:
            background 0.2s ease,
            transform 0.2s ease,
            border-color 0.2s ease;
        }

        .new-chat-button:hover {
          background: #272638;
          border-color: #716a91;
        }

        .new-chat-button:active {
          transform:
            translateY(-50%)
            scale(0.94);
        }

        /* ===================================================
           CHAT AREA
        =================================================== */

        .chat-area {
          flex: 1;

          width: 100%;

          overflow-y: auto;
          overflow-x: hidden;

          padding:
            45px
            24px
            170px;

          scrollbar-width: thin;
          scrollbar-color:
            #353746
            transparent;
        }

        .chat-area::-webkit-scrollbar {
          width: 6px;
        }

        .chat-area::-webkit-scrollbar-track {
          background: transparent;
        }

        .chat-area::-webkit-scrollbar-thumb {
          background: #353746;
          border-radius: 20px;
        }

        /* ===================================================
           WELCOME
        =================================================== */

        .welcome {
          min-height: 100%;

          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: center;

          text-align: center;

          padding:
            20px
            0
            100px;
        }

        .welcome h1 {
          margin: 0;

          font-size: clamp(
            42px,
            8vw,
            64px
          );

          line-height: 1.05;

          font-weight: 500;

          letter-spacing: -2px;

          color: #f1f1f4;
        }

        .welcome p {
          margin:
            24px
            0
            0;

          font-size: clamp(
            20px,
            4vw,
            30px
          );

          line-height: 1.3;

          font-weight: 400;

          color: #d0d0d6;
        }

        /* ===================================================
           MESSAGES
        =================================================== */

        .messages {
          width: 100%;
          max-width: 900px;

          margin: 0 auto;

          display: flex;
          flex-direction: column;

          gap: 22px;
        }

        .message-row {
          width: 100%;

          display: flex;
        }

        .user-row {
          justify-content: flex-end;
        }

        .assistant-row {
          justify-content: flex-start;
        }

        .message {
          max-width: min(
            78%,
            720px
          );

          padding:
            18px
            21px;

          border-radius: 24px;

          font-size: 18px;
          line-height: 1.55;

          word-wrap: break-word;
          overflow-wrap: anywhere;

          white-space: normal;
        }

        /* ===================================================
           USER MESSAGE
        =================================================== */

        .user-message {
          color: #f4f2fb;

          background:
            linear-gradient(
              135deg,
              #373149,
              #403952
            );

          border:
            1px solid
            rgba(122, 112, 153, 0.35);

          border-bottom-right-radius: 8px;

          box-shadow:
            0 8px 30px
            rgba(0, 0, 0, 0.12);
        }

        /* ===================================================
           ASSISTANT MESSAGE
        =================================================== */

        .assistant-message {
          color: #eeeeF2;

          background:
            rgba(36, 39, 49, 0.92);

          border:
            1px solid
            rgba(93, 97, 111, 0.42);

          border-bottom-left-radius: 8px;

          box-shadow:
            0 8px 30px
            rgba(0, 0, 0, 0.1);
        }

        .error-message {
          border-color:
            rgba(220, 91, 91, 0.6);

          color: #f0caca;
        }

        /* ===================================================
           TYPING
        =================================================== */

        .typing {
          display: flex;
          align-items: center;

          gap: 6px;

          min-width: 72px;
          min-height: 58px;
        }

        .typing span {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #aaa9b7;

          animation:
            typingAnimation
            1.2s
            infinite ease-in-out;
        }

        .typing span:nth-child(1) {
          animation-delay: 0s;
        }

        .typing span:nth-child(2) {
          animation-delay: 0.15s;
        }

        .typing span:nth-child(3) {
          animation-delay: 0.3s;
        }

        @keyframes typingAnimation {

          0%,
          60%,
          100% {
            opacity: 0.3;
            transform: translateY(0);
          }

          30% {
            opacity: 1;
            transform:
              translateY(-4px);
          }
        }

        /* ===================================================
           INPUT CONTAINER
        =================================================== */

        .input-container {
          position: fixed;

          left: 0;
          right: 0;
          bottom: 0;

          width: 100%;

          padding:
            18px
            24px
            calc(
              18px +
              env(safe-area-inset-bottom)
            );

          background:
            linear-gradient(
              to top,
              #151820 72%,
              rgba(21, 24, 32, 0)
            );

          z-index: 20;
        }

        .input-box {
          width: 100%;
          max-width: 900px;

          margin: 0 auto;

          min-height: 86px;

          display: flex;
          align-items: center;

          padding:
            8px
            8px
            8px
            24px;

          border-radius: 28px;

          border:
            1px solid
            rgba(87, 91, 108, 0.65);

          background:
            rgba(19, 22, 30, 0.96);

          box-shadow:
            0 12px 45px
            rgba(0, 0, 0, 0.28);

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .input-box:focus-within {
          border-color:
            rgba(113, 106, 145, 0.9);

          box-shadow:
            0 12px 45px
            rgba(0, 0, 0, 0.32),
            0 0 0 3px
            rgba(91, 82, 123, 0.08);
        }

        .input-box textarea {
          flex: 1;

          width: 100%;

          min-width: 0;

          max-height: 130px;

          resize: none;

          overflow-y: auto;

          border: 0;
          outline: 0;

          background: transparent;

          color: #f1f1f5;

          font-size: 20px;
          line-height: 1.4;

          padding:
            12px
            0;
        }

        .input-box textarea::placeholder {
          color: #777987;
          opacity: 1;
        }

        .input-box textarea:disabled {
          opacity: 0.65;
        }

        /* ===================================================
           SEND BUTTON
        =================================================== */

        .send-button {
          flex-shrink: 0;

          width: 66px;
          height: 66px;

          margin-left: 12px;

          border: 0;

          border-radius: 22px;

          background:
            #37324b;

          color: #dcd8e8;

          font-size: 35px;
          font-weight: 300;

          line-height: 1;

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;

          transition:
            background 0.2s ease,
            transform 0.2s ease,
            opacity 0.2s ease;
        }

        .send-button:hover:not(:disabled) {
          background: #46405d;
        }

        .send-button:active:not(:disabled) {
          transform: scale(0.94);
        }

        .send-button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        /* ===================================================
           MOBILE
        =================================================== */

        @media (max-width: 700px) {

          .top-bar {
            height: 78px;
            min-height: 78px;
          }

          .brand-name {
            font-size: 24px;
          }

          .new-chat-button {
            right: 14px;

            width: 50px;
            height: 50px;

            border-radius: 17px;

            font-size: 32px;
          }

          .chat-area {
            padding:
              28px
              14px
              145px;
          }

          .welcome {
            padding:
              0
              0
              80px;
          }

          .welcome h1 {
            font-size: 44px;
            letter-spacing: -1.5px;
          }

          .welcome p {
            margin-top: 18px;

            font-size: 21px;

            max-width: 330px;
          }

          .messages {
            gap: 16px;
          }

          .message {
            max-width: 88%;

            padding:
              14px
              17px;

            font-size: 17px;

            line-height: 1.5;

            border-radius: 20px;
          }

          .user-message {
            border-bottom-right-radius: 7px;
          }

          .assistant-message {
            border-bottom-left-radius: 7px;
          }

          .input-container {
            padding:
              12px
              12px
              calc(
                12px +
                env(safe-area-inset-bottom)
              );
          }

          .input-box {
            min-height: 72px;

            border-radius: 23px;

            padding:
              6px
              6px
              6px
              17px;
          }

          .input-box textarea {
            font-size: 17px;

            padding:
              10px
              0;
          }

          .send-button {
            width: 58px;
            height: 58px;

            margin-left: 8px;

            border-radius: 19px;

            font-size: 31px;
          }
        }

        /* ===================================================
           VERY SMALL PHONES
        =================================================== */

        @media (max-width: 380px) {

          .top-bar {
            height: 70px;
            min-height: 70px;
          }

          .brand-name {
            font-size: 22px;
          }

          .new-chat-button {
            width: 46px;
            height: 46px;

            right: 10px;

            border-radius: 15px;
          }

          .chat-area {
            padding:
              22px
              10px
              135px;
          }

          .welcome h1 {
            font-size: 40px;
          }

          .welcome p {
            font-size: 19px;
          }

          .message {
            max-width: 92%;
            font-size: 16px;
          }

          .input-box {
            min-height: 68px;
            padding-left: 14px;
          }

          .send-button {
            width: 54px;
            height: 54px;
          }
        }

      `}</style>

    </main>
  );
}
