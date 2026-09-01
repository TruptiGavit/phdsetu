"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <div className="mt-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your.email@university.ac.in"
          required
          className="flex-1 px-5 py-3.5 rounded-full border border-border bg-white text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full gradient-bg-accent text-white font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>

      {submitted && (
        <p className="mt-4 text-sm text-emerald-600 flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          Subscribed! Watch your inbox for Career Signals.
        </p>
      )}
    </div>
  );
}
