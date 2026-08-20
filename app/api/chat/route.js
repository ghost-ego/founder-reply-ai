"use client";

import { useState } from "react";

export default function Home() {
  const [post, setPost] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function generateReply() {
    if (!post.trim()) {
      setError("Paste a LinkedIn post first.");
      return;
    }

    setLoading(true);
    setError("");
    setReply("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: post,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate reply.");
      }

      setReply(data.reply);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function copyReply() {
    if (!reply) return;

    navigator.clipboard.writeText(reply);
  }

  function clearAll() {
    setPost("");
    setReply("");
    setError("");
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">

        {/* Header */}
        <header className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
            <span className="h-2 w-2 rounded-full bg-green-400"></span>
            FounderReply AI
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Write better LinkedIn replies
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Paste a LinkedIn post and let FounderReply AI create a natural,
            thoughtful reply in seconds.
          </p>
        </header>

        {/* Main Card */}
        <section className="grid gap-6 md:grid-cols-2">

          {/* Input */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">
                  LinkedIn post
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Paste the post you want to reply to.
                </p>
              </div>

              <button
                onClick={clearAll}
                className="text-sm text-gray-500 transition hover:text-white"
              >
                Clear
              </button>
            </div>

            <textarea
              value={post}
              onChange={(e) => setPost(e.target.value)}
              placeholder="Paste a LinkedIn post here..."
              className="h-80 w-full resize-none rounded-2xl border border-white/10 bg-black/40 p-4 text-sm leading-6 text-white outline-none placeholder:text-gray-600 focus:border-white/30"
            />

            {error && (
              <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300">
                {error}
              </div>
            )}

            <button
              onClick={generateReply}
              disabled={loading}
              className="mt-4 w-full rounded-2xl bg-white px-5 py-4 font-semibold text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Generating..." : "Generate Reply →"}
            </button>
          </div>

          {/* Output */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">
                  Your reply
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  Your AI-generated LinkedIn response.
                </p>
              </div>

              {reply && (
                <button
                  onClick={copyReply}
                  className="rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-300 transition hover:bg-white/10"
                >
                  Copy
                </button>
              )}
            </div>

            <div className="min-h-80 rounded-2xl border border-white/10 bg-black/40 p-5">
              {loading ? (
                <div className="flex h-64 items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white"></div>
                    <p className="text-sm text-gray-400">
                      FounderReply AI is thinking...
                    </p>
                  </div>
                </div>
              ) : reply ? (
                <p className="whitespace-pre-wrap text-sm leading-7 text-gray-200">
                  {reply}
                </p>
              ) : (
                <div className="flex h-64 items-center justify-center text-center">
                  <div>
                    <div className="mb-3 text-3xl">✦</div>
                    <p className="text-sm text-gray-500">
                      Your generated reply will appear here.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {reply && (
              <button
                onClick={copyReply}
                className="mt-4 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-medium text-white transition hover:bg-white/10"
              >
                Copy Reply
              </button>
            )}
          </div>
        </section>

        {/* Features */}
        <section className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-3 text-xl">⚡</div>
            <h3 className="font-semibold">Fast</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Generate a useful LinkedIn reply in seconds.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-3 text-xl">🧠</div>
            <h3 className="font-semibold">Smart</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Replies are designed to be relevant and thoughtful.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-3 text-xl">💬</div>
            <h3 className="font-semibold">Natural</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Keep your LinkedIn conversations human and authentic.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-gray-600">
          FounderReply AI · Built for better conversations
        </footer>
      </div>
    </main>
  );
}
