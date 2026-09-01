"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Compass } from "lucide-react";

const links = [
  { href: "/career-map", label: "Career Map" },
  { href: "/stories", label: "Stories" },
  { href: "/toolkit", label: "Toolkit" },
  { href: "/community", label: "Community" },
  { href: "/workshop", label: "Workshop" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              PhD<span className="gradient-text">Setu</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-muted hover:text-foreground rounded-lg hover:bg-surface transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/workshop"
              className="ml-3 px-5 py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            >
              Join Workshop
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-surface"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-1 animate-fade-in">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-muted hover:text-foreground hover:bg-surface rounded-lg"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/workshop"
              onClick={() => setOpen(false)}
              className="block mx-4 mt-2 px-5 py-3 text-sm font-semibold text-white text-center rounded-full bg-gradient-to-r from-primary to-accent"
            >
              Join Workshop
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
