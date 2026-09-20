"use client";
import { useState } from "react";

export default function BuyButton({ courseId }: { courseId: string }) {
  const [loading, setLoading] = useState(false);

  async function handleBuy() {
    setLoading(true);
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ courseId }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert(data.error || "Something went wrong");
      setLoading(false);
    }
  }

  return (
    <button onClick={handleBuy} disabled={loading}
      style={{ padding: "10px 20px", fontSize: 16, cursor: "pointer" }}>
      {loading ? "Redirecting…" : "Buy this course"}
    </button>
  );
}