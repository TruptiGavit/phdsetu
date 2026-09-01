"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-2xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-surface/50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-foreground pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-muted shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 animate-fade-in">
          <p className="text-sm text-muted leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}
