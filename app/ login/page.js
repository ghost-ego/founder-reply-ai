"use client";

import { useState } from "react";
import { createClient } from "../../lib/supabase/client";

export default function LoginPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [testing, setTesting] = useState(false);

  async function testConnection() {
    setTesting(true);
    setMessage("Testing Supabase connection...");

    try {
      const response = await fetch(
        "https://lfrfcqfkaiiqpykaluqw.supabase.co/auth/v1/health"
      );

      const text = await response.text();

      setMessage(
        `Connection test: HTTP ${response.status}\n${text}`
      );
    } catch (error) {
      setMessage(
        `Connection test FAILED:\n${error?.message || error}`
      );
    } finally {
      setTesting(false);
    }
  }

  async function handleAuth(e) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
        });

        if (error) throw error;

        setMessage(
          "Account created! Check your email for confirmation."
        );
      } else {
        const { error } =
          await supabase.auth.signInWithPassword({
            email: email.trim(),
            password,
          });

        if (error) throw error;

        window.location.href = "/";
      }
    } catch (error) {
      setMessage(
        error?.message || "Something went wrong."
      );
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
          borderRadius: "24px",
          padding: "30px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div
            style={{
              fontSize: "14px",
              color: "#94a3b8",
              marginBottom: "10px",
            }}
          >
            FounderReply AI
          </div>

          <h1 style={{ margin: 0, fontSize: "30px" }}>
            {mode === "login"
              ? "Welcome back"
              : "Create your account"}
          </h1>

          <p
            style={{
              color: "#94a3b8",
              lineHeight: "1.6",
              marginTop: "10px",
            }}
          >
            {mode === "login"
              ? "Log in to continue to FounderReply AI."
              : "Create your free FounderReply AI account."}
          </p>
        </div>

        <form onSubmit={handleAuth}>
          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px",
              margin: "8px 0 18px",
              borderRadius: "11px",
              border:
                "1px solid rgba(255,255,255,0.12)",
              background: "rgba(0,0,0,0.3)",
              color: "#fff",
              fontSize: "15px",
            }}
          />

          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Minimum 6 characters"
            required
            minLength={6}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px",
              margin: "8px 0 20px",
              borderRadius: "11px",
              border:
                "1px solid rgba(255,255,255,0.12)",
              background: "rgba(0,0,0,0.3)",
              color: "#fff",
              fontSize: "15px",
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "12px",
              border: "none",
              background:
                "linear-gradient(90deg, #2563eb, #7c3aed)",
              color: "#fff",
              fontWeight: "700",
              fontSize: "15px",
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
          <div
            style={{
              whiteSpace: "pre-wrap",
              marginTop: "18px",
              padding: "14px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.05)",
              color: "#cbd5e1",
              fontSize: "14px",
              lineHeight: "1.5",
            }}
          >
            {message}
          </div>
        )}

        <button
          type="button"
          onClick={testConnection}
          disabled={testing}
          style={{
            width: "100%",
            marginTop: "18px",
            padding: "12px",
            borderRadius: "10px",
            border:
              "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.05)",
            color: "#93c5fd",
          }}
        >
          {testing
            ? "Testing..."
            : "🔧 Test Supabase Connection"}
        </button>

        <div
          style={{
            textAlign: "center",
            marginTop: "22px",
          }}
        >
          <button
            type="button"
            onClick={() => {
              setMode(
                mode === "login" ? "signup" : "login"
              );
              setMessage("");
            }}
            style={{
              background: "none",
              border: "none",
              color: "#93c5fd",
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
