"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Lock,
  FileText,
  ChevronLeft,
  Search,
  FolderOpen,
  Eye,
  LogOut,
  Compass,
} from "lucide-react";

interface DocEntry {
  slug: string;
  title: string;
  file: string;
}

const PASS_HASH = "trio@001";

const categoryOrder = [
  { prefix: "00_", label: "Master Index" },
  { prefix: "PhDSetu_FINAL", label: "Final Bible" },
  { prefix: "PhDSetu_Master", label: "Master Brainstorming" },
  { prefix: "PhDSetu_Brainstorm", label: "Brainstorm Sessions" },
  { prefix: "PhDSetu_Career", label: "Career Research" },
  { prefix: "PhDSetu_Workshop", label: "Workshop Master Plan" },
  { prefix: "IIT_Ropar", label: "Workshop Slides" },
  { prefix: "02_", label: "GTM Strategy" },
  { prefix: "03_", label: "Community" },
  { prefix: "04_", label: "Financial" },
  { prefix: "05_", label: "Legal" },
  { prefix: "06_", label: "Technical" },
  { prefix: "07_", label: "Content & SEO" },
  { prefix: "08_", label: "UX/UI Design" },
  { prefix: "09_", label: "Founders Brand" },
  { prefix: "10_", label: "Partnerships" },
  { prefix: "11_", label: "Competition" },
  { prefix: "12_", label: "Impact" },
  { prefix: "13_", label: "Global Expansion" },
  { prefix: "14_", label: "Team & Hiring" },
  { prefix: "15_", label: "Career Report" },
  { prefix: "16_", label: "Investor Deck" },
  { prefix: "17_", label: "AI & Ethics" },
  { prefix: "18_", label: "Sonali Playbook" },
  { prefix: "19_", label: "Radha Playbook" },
  { prefix: "20_", label: "Trupti Playbook" },
  { prefix: "21_", label: "Scrum Board" },
  { prefix: "22_", label: "POC Tech Spec" },
  { prefix: "23_", label: "Stealth Ops" },
  { prefix: "24_", label: "Stealth GTM" },
];

function getCategoryLabel(slug: string): string {
  for (const cat of categoryOrder) {
    if (slug.startsWith(cat.prefix)) return cat.label;
  }
  return slug.replace(/_/g, " ");
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [docs, setDocs] = useState<DocEntry[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<DocEntry | null>(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("phdsetu_admin");
      if (stored === "authenticated") setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (authenticated) {
      fetch("/docs/manifest.json")
        .then((r) => r.json())
        .then((data: DocEntry[]) => setDocs(data))
        .catch(() => {});
    }
  }, [authenticated]);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (password === PASS_HASH) {
      setAuthenticated(true);
      setError("");
      sessionStorage.setItem("phdsetu_admin", "authenticated");
    } else {
      setError("Incorrect password. Try again.");
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    setSelectedDoc(null);
    setContent("");
    sessionStorage.removeItem("phdsetu_admin");
  }

  const loadDoc = useCallback(async (doc: DocEntry) => {
    setSelectedDoc(doc);
    setLoading(true);
    try {
      const res = await fetch(`/docs/${doc.file}`);
      const text = await res.text();
      setContent(text);
    } catch {
      setContent("Error loading document.");
    }
    setLoading(false);
  }, []);

  const filteredDocs = docs.filter(
    (d) =>
      d.title.toLowerCase().includes(search.toLowerCase()) ||
      d.slug.toLowerCase().includes(search.toLowerCase())
  );

  // Login Screen
  if (!authenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-surface">
        <div className="w-full max-w-md mx-4">
          <div className="bg-white rounded-2xl shadow-xl border border-border p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h1
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Admin Corner
              </h1>
              <p className="text-sm text-muted mt-2">
                Team-only access to all PhDSetu documentation
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter team password"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary"
                  autoFocus
                />
              </div>
              {error && (
                <p className="text-sm text-red-500 font-medium">{error}</p>
              )}
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-xl gradient-bg-accent text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Access Documents
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Document Viewer
  if (selectedDoc) {
    return (
      <div className="min-h-[80vh] bg-surface">
        {/* Top bar */}
        <div className="sticky top-16 z-40 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <button
              onClick={() => {
                setSelectedDoc(null);
                setContent("");
              }}
              className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Documents
            </button>
            <h2 className="text-sm font-bold truncate max-w-[50vw]">
              {selectedDoc.title}
            </h2>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-red-500 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              Logout
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {loading ? (
            <div className="flex items-center justify-center py-24">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <article className="bg-white rounded-2xl border border-border p-6 md:p-10 shadow-sm">
              <div className="prose prose-sm max-w-none whitespace-pre-wrap break-words text-sm leading-relaxed text-foreground/90 font-mono">
                {content}
              </div>
            </article>
          )}
        </div>
      </div>
    );
  }

  // Document List
  return (
    <div className="min-h-[80vh] bg-surface">
      {/* Header */}
      <div className="gradient-bg text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm mb-4">
                <FolderOpen className="w-4 h-4" />
                <span>Team Documents</span>
              </div>
              <h1
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Admin Corner
              </h1>
              <p className="mt-2 text-gray-300">
                {docs.length} documents — brainstorming, playbooks, strategy &
                research
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 text-sm font-medium hover:bg-white/10 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg border border-border p-4 flex items-center gap-3">
          <Search className="w-5 h-5 text-muted shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search documents..."
            className="flex-1 text-sm focus:outline-none bg-transparent"
          />
          <span className="text-xs text-muted whitespace-nowrap">
            {filteredDocs.length} of {docs.length}
          </span>
        </div>
      </div>

      {/* Document Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDocs.map((doc) => (
            <button
              key={doc.slug}
              onClick={() => loadDoc(doc)}
              className="text-left bg-white rounded-2xl p-6 border border-border card-hover group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted font-mono mb-1">
                    {getCategoryLabel(doc.slug)}
                  </p>
                  <h3 className="font-bold text-sm truncate group-hover:text-primary transition-colors">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-muted mt-1">{doc.file}</p>
                </div>
                <Eye className="w-4 h-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
              </div>
            </button>
          ))}
        </div>

        {filteredDocs.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-10 h-10 mx-auto mb-4 text-muted" />
            <p className="text-muted">No documents match your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
