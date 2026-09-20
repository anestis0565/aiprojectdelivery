"use client";
import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("both");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, interest }),
    });
    if (res.ok) setStatus("done");
    else {
      const d = await res.json().catch(() => ({}));
      setMsg(d.error || "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "done")
    return (
      <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-6 text-center">
        <p className="text-lg font-semibold text-emerald-800">You&apos;re on the list.</p>
        <p className="text-emerald-700 mt-1">We&apos;ll email you before launch with early access and a discount.</p>
      </div>
    );

  return (
    <form onSubmit={submit} className="space-y-3">
      <input type="email" required placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-teal-600 focus:outline-none" />
      <input type="text" placeholder="Your name (optional)" value={name} onChange={(e) => setName(e.target.value)}
        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-teal-600 focus:outline-none" />
      <select value={interest} onChange={(e) => setInterest(e.target.value)}
        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-teal-600 focus:outline-none">
        <option value="both">I&apos;m interested in: both options</option>
        <option value="self-paced">Self-paced course</option>
        <option value="cohort">Live instructor-led cohort</option>
      </select>
      <button type="submit" disabled={status === "loading"}
        className="w-full rounded-lg bg-teal-700 px-4 py-3 font-semibold text-white hover:bg-teal-800 disabled:opacity-60">
        {status === "loading" ? "Joining…" : "Join the waitlist"}
      </button>
      {status === "error" && <p className="text-red-600 text-sm">{msg}</p>}
      <p className="text-xs text-slate-500 text-center">No spam — just a launch note and an early-bird discount.</p>
    </form>
  );
}