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

  async function handleAuth(event) {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
        });

        if (error) {
          throw error;
        }

        setMessage(
          "Account created successfully! Check your email if confirmation is required."
        );
      } else {
        const { error } =
          await supabase.auth.signInWithPassword({
            email: email.trim(),
            password,
          });

        if (error) {
          throw error;
        }

        window.location.href = "/";
      }
    } catch (error) {
      setMessage(
        error?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  function switchMode() {
    setMode(
      mode === "login"
        ? "signup"
        : "login"
    );
    setMessage("");
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
          border:
            "1px solid rgba(255,255,255,0.1)",
          borderRadius: "24px",
          padding: "30px",
          boxSizing: "border-box",
          boxShadow:
            "0 25px 80px rgba(0,0,0,0.4)",
          backdropFilter: "blur(20px)",
        }}
      >
        {/* Logo / Header */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "28px",
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
              color: "#cbd5e1",
              fontSize: "14px",
              marginBottom: "18px",
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
              margin: 0,
              fontSize: "30px",
              fontWeight: "800",
              letterSpacing: "-1px",
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
              marginTop: "10px",
              marginBottom: 0,
            }}
          >
            {mode === "login"
              ? "Log in to continue to FounderReply AI."
              : "Create your free FounderReply AI account."}
          </p>
        </div>

        {/* Form */}

        <form onSubmit={handleAuth}>
          {/* Email */}

          <label
            style={{
              display: "block",
              marginBottom: "7px",
              fontSize: "14px",
              fontWeight: "600",
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
            autoComplete="email"
            disabled={loading}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px",
              marginBottom: "18px",
              borderRadius: "11px",
              border:
                "1px solid rgba(255,255,255,0.12)",
              background:
                "rgba(0,0,0,0.3)",
              color: "#fff",
              outline: "none",
              fontSize: "15px",
            }}
          />

          {/* Password */}

          <label
            style={{
              display: "block",
              marginBottom: "7px",
              fontSize: "14px",
              fontWeight: "600",
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
            placeholder="Minimum 6 characters"
            required
            minLength={6}
            autoComplete={
              mode === "login"
                ? "current-password"
                : "new-password"
            }
            disabled={loading}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "14px",
              marginBottom: "20px",
              borderRadius: "11px",
              border:
                "1px solid rgba(255,255,255,0.12)",
              background:
                "rgba(0,0,0,0.3)",
              color: "#fff",
              outline: "none",
              fontSize: "15px",
            }}
          />

          {/* Submit */}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "12px",
              border: "none",
              background:
                loading
                  ? "#334155"
                  : "linear-gradient(90deg, #2563eb, #7c3aed)",
              color: "#fff",
              fontWeight: "700",
              fontSize: "15px",
              cursor: loading
                ? "not-allowed"
                : "pointer",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading
              ? "Please wait..."
              : mode === "login"
              ? "Log in"
              : "Create account"}
          </button>
        </form>

        {/* Message */}

        {message && (
          <div
            style={{
              marginTop: "18px",
              padding: "13px",
              borderRadius: "10px",
              background:
                "rgba(255,255,255,0.05)",
              border:
                "1px solid rgba(255,255,255,0.08)",
              color: "#cbd5e1",
              fontSize: "14px",
              lineHeight: "1.5",
              wordBreak: "break-word",
            }}
          >
            {message}
          </div>
        )}

        {/* Switch Login / Signup */}

        <div
          style={{
            textAlign: "center",
            marginTop: "22px",
          }}
        >
          <button
            type="button"
            onClick={switchMode}
            disabled={loading}
            style={{
              background: "none",
              border: "none",
              color: "#93c5fd",
              cursor: loading
                ? "not-allowed"
                : "pointer",
              fontSize: "14px",
              opacity: loading ? 0.6 : 1,
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
