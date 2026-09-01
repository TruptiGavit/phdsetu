import Link from "next/link";
import {
  Compass,
  Target,
  Heart,
  Globe,
  Lightbulb,
  ArrowRight,
  Shield,
  Eye,
  Zap,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Capability Over Credential",
    desc: "We believe what you CAN do matters more than where you studied. Every tool we build starts with capabilities, not degrees.",
  },
  {
    icon: Heart,
    title: "Researchers Helping Researchers",
    desc: "Community-driven, not top-down. The best career advice comes from those who've walked the path.",
  },
  {
    icon: Eye,
    title: "Epistemic Humility",
    desc: "We present hypotheses, not declarations. Career paths are explored, not prescribed. Your agency comes first.",
  },
  {
    icon: Globe,
    title: "All of India's PhDs",
    desc: "Not just IITs. We build for scholars at regional universities, first-generation researchers, and those who need it most.",
  },
  {
    icon: Shield,
    title: "Evidence-Based",
    desc: "Every recommendation backed by data, every career path validated by real transitions. No overpromising.",
  },
  {
    icon: Zap,
    title: "Action Over Theory",
    desc: "Every interaction should lead to something you can DO — not just something you know.",
  },
];

const milestones = [
  { label: "Research", desc: "Understand the crisis: 80% of PhD scholars face career anxiety. No platform addresses this." },
  { label: "Design", desc: "Develop the Research → Capability → Possibility → Evidence → Action methodology." },
  { label: "Workshop", desc: "Validate with live workshops at premier institutions. IIT Ropar is our pilot." },
  { label: "Platform", desc: "Build tools that researchers actually use — Career Map, Evidence Bank, Community." },
  { label: "Scale", desc: "Expand to 50+ institutions, vernacular content, institutional partnerships." },
];

export default function AboutPage() {
  return (
    <>
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            About PhDSetu
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            India&apos;s first capability-based career navigation platform for
            PhD and postgraduate researchers.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6">
              <Compass className="w-8 h-8 text-white" />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The Problem We&apos;re Solving
            </h2>
            <div className="max-w-2xl mx-auto space-y-4 text-lg text-muted leading-relaxed">
              <p>
                India produces over 40,000 PhD graduates every year. 80% report
                career anxiety. 60% consider quitting. The gap between world-class
                research training and career readiness is staggering.
              </p>
              <p>
                There&apos;s no shortage of talent. There&apos;s a shortage of
                <strong className="text-foreground"> translation</strong> — helping
                researchers see that their PhD skills open 16+ career doors, not
                just the one they were told about.
              </p>
              <p className="font-semibold text-foreground">
                PhDSetu is the bridge.
              </p>
            </div>
          </div>

          {/* Methodology */}
          <div className="bg-surface rounded-2xl p-8 md:p-12 mb-16">
            <h3
              className="text-2xl font-bold mb-6 text-center"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Methodology
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-sm font-semibold">
              {["Research", "Capability", "Possibility", "Evidence", "Action"].map(
                (step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="px-5 py-3 rounded-xl bg-white border border-border shadow-sm">
                      {step}
                    </span>
                    {i < 4 && (
                      <span className="text-muted hidden md:block">&rarr;</span>
                    )}
                  </div>
                )
              )}
            </div>
            <p className="text-center text-muted mt-6 text-sm">
              Not a job board. Not a coaching service. A structured navigation
              system that puts you in control.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What We Stand For
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-8 border border-border card-hover"
              >
                <v.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold mb-12 text-center"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Journey
          </h2>

          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div
                key={m.label}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{m.label}</h3>
                  <p className="text-sm text-muted mt-1">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Whom */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Built For
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "PhD Scholars (all years)",
              "M.Tech Researchers",
              "Postdocs",
              "Recent PhD Graduates",
              "Career-break Researchers",
              "First-generation Scholars",
              "Humanities & Arts PhDs",
              "Tier-2/3 University Students",
              "Women in Research",
              "Differently-abled Researchers",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-white border border-border text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-muted">
            If you&apos;ve spent years pursuing knowledge and are wondering
            &ldquo;what next?&rdquo; — we built this for you.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-bg text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Join the Movement
          </h2>
          <p className="text-gray-300 mb-8">
            Whether you&apos;re a researcher, mentor, institution, or employer —
            there&apos;s a place for you in the PhDSetu ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/career-map"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-surface-dark font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Exploring
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="mailto:hello@phdsetu.org"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 font-semibold hover:bg-white/10 transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
