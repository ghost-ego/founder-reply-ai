"use client";

import { useState } from "react";
import { createClient } from "../../lib/supabase/client";

export default function AuthPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAuth(event) {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;

        setMessage(
          "Account created. Check your email if confirmation is required."
        );
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        window.location.href = "/";
      }
    } catch (error) {
      setMessage(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050609",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "22px",
          padding: "30px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              color: "#94a3b8",
              marginBottom: "10px",
            }}
          >
            FounderReply AI
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "30px",
            }}
          >
            {mode === "login"
              ? "Welcome back"
              : "Create your account"}
          </h1>

          <p
            style={{
              color: "#94a3b8",
              lineHeight: "1.6",
            }}
          >
            {mode === "login"
              ? "Log in to continue."
              : "Create a free FounderReply AI account."}
          </p>
        </div>

        <form onSubmit={handleAuth}>
          <label
            style={{
              display: "block",
              marginBottom: "7px",
              fontSize: "14px",
            }}
          >
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="you@example.com"
            required
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "13px",
              marginBottom: "18px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(0,0,0,0.3)",
              color: "#fff",
              outline: "none",
            }}
          />

          <label
            style={{
              display: "block",
              marginBottom: "7px",
              fontSize: "14px",
            }}
          >
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="••••••••"
            required
            minLength={6}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "13px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(0,0,0,0.3)",
              color: "#fff",
              outline: "none",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "11px",
              border: "none",
              background:
                "linear-gradient(90deg, #2563eb, #7c3aed)",
              color: "#fff",
              fontWeight: "700",
              fontSize: "15px",
              cursor: loading
                ? "not-allowed"
                : "pointer",
            }}
          >
            {loading
              ? "Please wait..."
              : mode === "login"
              ? "Log in"
              : "Create account"}
          </button>
        </form>

        {message && (
          <p
            style={{
              marginTop: "18px",
              color: "#cbd5e1",
              fontSize: "14px",
              lineHeight: "1.5",
            }}
          >
            {message}
          </p>
        )}

        <div
          style={{
            textAlign: "center",
            marginTop: "22px",
          }}
        >
          <button
            onClick={() => {
              setMode(
                mode === "login"
                  ? "signup"
                  : "login"
              );
              setMessage("");
            }}
            style={{
              background: "none",
              border: "none",
              color: "#93c5fd",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            {mode === "login"
              ? "Don't have an account? Sign up"
              : "Already have an account? Log in"}
          </button>
        </div>
      </div>
    </main>
  );
}
