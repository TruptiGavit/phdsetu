"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface WaitlistFormProps {
  variant?: "light" | "dark";
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
}

export function WaitlistForm({
  variant = "dark",
  placeholder = "Enter your email for early access",
  buttonText = "Join Waitlist",
  successMessage = "You're on the list! We'll notify you when Decode launches.",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  const isDark = variant === "dark";

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          className={`flex-1 px-5 py-3.5 rounded-full focus:outline-none focus:ring-2 ${
            isDark
              ? "bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:ring-primary-light"
              : "border border-border bg-white text-foreground placeholder:text-muted focus:ring-primary"
          }`}
        />
        <button
          type="submit"
          className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold transition-colors whitespace-nowrap ${
            isDark
              ? "bg-white text-surface-dark hover:bg-gray-100"
              : "gradient-bg-accent text-white hover:opacity-90"
          }`}
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      {submitted && (
        <p
          className={`mt-4 text-sm flex items-center justify-center gap-2 ${
            isDark ? "text-emerald-300" : "text-emerald-600"
          }`}
        >
          <CheckCircle2 className="w-4 h-4" />
          {successMessage}
        </p>
      )}
    </>
  );
}
