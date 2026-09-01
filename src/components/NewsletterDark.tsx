"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function NewsletterDark() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleNewsletter(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <>
      <form
        onSubmit={handleNewsletter}
        className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@university.ac.in"
          required
          className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-surface-dark font-semibold hover:bg-gray-100 transition-colors"
        >
          Subscribe
        </button>
      </form>

      {submitted && (
        <p className="mt-4 text-sm text-emerald-300 flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          Subscribed! Watch your inbox for Career Signals.
        </p>
      )}
    </>
  );
}
