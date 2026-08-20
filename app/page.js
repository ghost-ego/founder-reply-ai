"use client";

import { useState } from "react";

export default function Home() {
  const [post, setPost] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  async function generateComments() {
    if (!post.trim()) return;

    setLoading(true);
    setComments([]);

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
        throw new Error(data.error || "Failed to generate comment.");
      }

      if (data.reply) {
        setComments([data.reply]);
      } else {
        setComments(["No comment was generated."]);
      }
    } catch (error) {
      console.error(error);
      setComments([
        error.message || "Something went wrong. Please try again.",
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>FounderReply AI</h1>

      <p>
        Generate thoughtful LinkedIn comments that sound like a real founder.
      </p>

      <textarea
        value={post}
        onChange={(e) => setPost(e.target.value)}
        placeholder="Paste a LinkedIn post here..."
        style={{
          width: "100%",
          minHeight: "220px",
          padding: "15px",
          fontSize: "16px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          boxSizing: "border-box",
        }}
      />

      <button
        onClick={generateComments}
        disabled={loading}
        style={{
          marginTop: "15px",
          padding: "14px 22px",
          fontSize: "16px",
          borderRadius: "10px",
          border: "none",
          cursor: loading ? "wait" : "pointer",
        }}
      >
        {loading ? "Generating..." : "Generate Comments"}
      </button>

      <section style={{ marginTop: "30px" }}>
        {comments.map((comment, index) => (
          <div
            key={index}
            style={{
              padding: "18px",
              marginBottom: "15px",
              border: "1px solid #ddd",
              borderRadius: "12px",
            }}
          >
            <strong>Comment {index + 1}</strong>

            <p>{comment}</p>

            <button
              onClick={() => navigator.clipboard.writeText(comment)}
            >
              Copy
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
