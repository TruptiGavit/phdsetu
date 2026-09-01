import Link from "next/link";
import {
  Compass,
  Map,
  BookOpen,
  Users,
  Briefcase,
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  FileText,
  GraduationCap,
  Globe,
  Heart,
  Lightbulb,
  ChevronRight,
  Star,
} from "lucide-react";

const methodology = [
  {
    step: "01",
    title: "Research",
    desc: "Understand your thesis, skills, and domain deeply",
    color: "from-indigo-500 to-violet-500",
  },
  {
    step: "02",
    title: "Capability",
    desc: "Map what you CAN do — not just what you studied",
    color: "from-violet-500 to-purple-500",
  },
  {
    step: "03",
    title: "Possibility",
    desc: "Discover career adjacencies beyond the obvious",
    color: "from-purple-500 to-pink-500",
  },
  {
    step: "04",
    title: "Evidence",
    desc: "Build proof through experiments, projects, and stories",
    color: "from-pink-500 to-rose-500",
  },
  {
    step: "05",
    title: "Action",
    desc: "Execute with clarity — applications, interviews, transitions",
    color: "from-rose-500 to-orange-500",
  },
];

const features = [
  {
    icon: Map,
    title: "Career Map",
    desc: "Interactive pathfinder showing 16+ career avenues for every research domain. See where your PhD skills translate.",
    href: "/career-map",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: BookOpen,
    title: "Researcher Stories",
    desc: "Real transition narratives from PhDs who made the leap — from Materials Science to Product Management, Chemistry to Patent Law.",
    href: "/stories",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: FileText,
    title: "Career Playbooks",
    desc: "Domain-specific 90-day transition plans. Not generic advice — actionable roadmaps for your exact field.",
    href: "/toolkit#playbooks",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Target,
    title: "Evidence Bank",
    desc: "Document your capabilities, experiments, and wins. Build a portfolio that speaks the language employers understand.",
    href: "/toolkit#evidence-bank",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Connect with 5,000+ researchers navigating the same journey. Peer support, mentorship, and shared wisdom.",
    href: "/community",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Sparkles,
    title: "AI Career Translator",
    desc: "Paste your thesis abstract — get an industry-readable professional summary in 30 seconds. Coming soon.",
    href: "#",
    color: "bg-cyan-50 text-cyan-600",
    badge: "Coming Soon",
  },
];

const stats = [
  { num: "16+", label: "Career Paths Mapped" },
  { num: "80%", label: "PhDs face career anxiety" },
  { num: "₹1L Cr", label: "India's RDI Fund" },
  { num: "68K+", label: "Patents filed in 2024-25" },
];

const careerPaths = [
  { icon: Briefcase, label: "Industry R&D", color: "text-indigo-500" },
  { icon: GraduationCap, label: "Faculty / Postdoc", color: "text-emerald-500" },
  { icon: TrendingUp, label: "Consulting", color: "text-amber-500" },
  { icon: Lightbulb, label: "Deep-Tech Startup", color: "text-purple-500" },
  { icon: Globe, label: "Science Policy", color: "text-cyan-500" },
  { icon: FileText, label: "Patent & IP", color: "text-rose-500" },
  { icon: Heart, label: "Science Communication", color: "text-pink-500" },
  { icon: Star, label: "Data Science", color: "text-orange-500" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-bg text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm mb-8">
              <Compass className="w-4 h-4" />
              <span>Career Navigation for Researchers</span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Your Research Opens
              <br />
              <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                More Doors
              </span>{" "}
              Than You Think
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              India&apos;s first capability-based career platform for PhD,
              M.Tech &amp; postgraduate researchers. Stop translating your CV.
              Start discovering your career adjacencies.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/career-map"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-surface-dark font-semibold text-base hover:bg-gray-100 transition-colors"
              >
                Explore Career Map
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/workshop"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-colors"
              >
                Join Free Workshop
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-8 z-10 max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-border p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">
                {s.num}
              </div>
              <div className="text-sm text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The gap isn&apos;t between you and the job
            </h2>
            <p className="mt-4 text-lg text-muted">
              It&apos;s between what you{" "}
              <span className="font-semibold text-foreground">CAN</span> do and
              what you can{" "}
              <span className="font-semibold text-foreground">COMMUNICATE</span>
              . Your CV shows credentials. Employers need capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-red-50 border-l-4 border-red-400">
              <h3 className="font-bold text-red-700 uppercase tracking-wider text-sm mb-4">
                Credential (What your CV shows)
              </h3>
              <ul className="space-y-3 text-red-900/80">
                {[
                  "Degree & university name",
                  "CGPA / publication count",
                  "Thesis title",
                  "Technical skills list",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">&#8594;</span> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-emerald-50 border-l-4 border-emerald-400">
              <h3 className="font-bold text-emerald-700 uppercase tracking-wider text-sm mb-4">
                Capability (What employers need)
              </h3>
              <ul className="space-y-3 text-emerald-900/80">
                {[
                  "Problem framing & experimental design",
                  "Evidence evaluation & troubleshooting",
                  "Learning new domains rapidly",
                  "Communicating complex ideas clearly",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">&#8594;</span> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center mt-10 text-lg font-semibold text-muted">
            PhDSetu bridges this gap with a proven methodology.
          </p>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The PhDSetu Methodology
            </h2>
            <p className="mt-4 text-lg text-muted">
              Five stages from research identity to career action
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 max-w-5xl mx-auto">
            {methodology.map((m, i) => (
              <div key={m.step} className="flex-1 group">
                <div className="bg-white rounded-2xl p-6 border border-border card-hover h-full">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${m.color} text-white text-sm font-bold mb-4`}
                  >
                    {m.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{m.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {m.desc}
                  </p>
                </div>
                {i < methodology.length - 1 && (
                  <div className="hidden md:flex justify-center py-2">
                    <ChevronRight className="w-5 h-5 text-muted rotate-90 md:rotate-0" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Your PhD Opens 16+ Career Doors
            </h2>
            <p className="mt-4 text-lg text-muted">
              Industry R&amp;D is one path. Here are many more.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {careerPaths.map((cp) => (
              <div
                key={cp.label}
                className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-border card-hover cursor-pointer"
              >
                <cp.icon className={`w-5 h-5 ${cp.color}`} />
                <span className="text-sm font-medium">{cp.label}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/career-map"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-bg-accent text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Explore Full Career Map
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Everything You Need to Navigate Your Career
            </h2>
            <p className="mt-4 text-lg text-muted">
              Tools built specifically for researchers — not recycled corporate
              advice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <Link
                href={f.href}
                key={f.title}
                className="group bg-white rounded-2xl p-8 border border-border card-hover relative"
              >
                {f.badge && (
                  <span className="absolute top-4 right-4 text-xs font-medium px-3 py-1 rounded-full bg-cyan-100 text-cyan-700">
                    {f.badge}
                  </span>
                )}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${f.color} mb-5`}
                >
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {f.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Quote */}
      <section className="py-24 gradient-bg text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote
            className="text-2xl md:text-3xl font-medium leading-relaxed"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            &ldquo;The problem isn&apos;t that PhDs can&apos;t get jobs. The
            problem is that nobody teaches them to translate their extraordinary
            skills into language the world understands.&rdquo;
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="w-px h-8 bg-white/30" />
            <p className="text-sm text-gray-400">The PhDSetu Thesis</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to Discover Your Career Adjacencies?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Join thousands of researchers who are navigating their careers with
            clarity, not confusion.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/career-map"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full gradient-bg-accent text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Exploring
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/workshop"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-border text-foreground font-semibold hover:bg-surface transition-colors"
            >
              Attend Free Workshop
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
