import type { Metadata } from "next";
import Link from "next/link";
import {
  IndianRupee,
  Globe,
  TrendingUp,
  Cpu,
  Leaf,
  Rocket,
  GraduationCap,
  Heart,
  Scale,
  Shield,
  ArrowRight,
  Lightbulb,
  Brain,
  MessageSquare,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Salary Guide — PhD Career Compensation | PhDSetu",
  description:
    "Compare PhD career salaries across 10 avenues in India and globally. Industry R&D, academia, consulting, data science, and more — with context on stipends and market forces.",
};

const salaryData = [
  {
    avenue: "Industry R&D",
    entryIndia: "₹8–15 LPA",
    midIndia: "₹15–30 LPA",
    seniorIndia: "₹30–60 LPA",
    global: "US $95K–$240K",
  },
  {
    avenue: "Academic Faculty",
    entryIndia: "₹9–13 LPA",
    midIndia: "₹13–18 LPA",
    seniorIndia: "₹24–42 LPA",
    global: "Varies by country",
  },
  {
    avenue: "Postdoc",
    entryIndia: "₹47K–67K/mo",
    midIndia: "—",
    seniorIndia: "—",
    global: "US $55K–$70K",
  },
  {
    avenue: "Consulting (MBB)",
    entryIndia: "₹30–50 LPA",
    midIndia: "₹40–80 LPA",
    seniorIndia: "₹80 LPA+",
    global: "~$245K Year 1 (US)",
  },
  {
    avenue: "Data Science",
    entryIndia: "₹10–30 LPA",
    midIndia: "₹20–40 LPA",
    seniorIndia: "₹40–60 LPA",
    global: "US $120K–$200K",
  },
  {
    avenue: "Product Management",
    entryIndia: "₹15–40 LPA",
    midIndia: "₹25–50 LPA",
    seniorIndia: "₹50 LPA+",
    global: "US $150K+",
  },
  {
    avenue: "Patent & IP",
    entryIndia: "₹6–20 LPA",
    midIndia: "₹15–30 LPA",
    seniorIndia: "₹30–40 LPA",
    global: "US $80K–$200K",
  },
  {
    avenue: "Science Communication",
    entryIndia: "₹5–15 LPA",
    midIndia: "₹10–20 LPA",
    seniorIndia: "₹15–25 LPA",
    global: "Medical writing $80K–$150K+",
  },
  {
    avenue: "Science Policy",
    entryIndia: "₹8–15 LPA",
    midIndia: "₹15–20 LPA",
    seniorIndia: "₹20–25 LPA",
    global: "Intl $70K–$130K",
  },
  {
    avenue: "Regulatory Affairs",
    entryIndia: "₹8–25 LPA",
    midIndia: "—",
    seniorIndia: "—",
    global: "US $70K–$130K",
  },
];

const globalForces = [
  {
    icon: TrendingUp,
    title: "India's R&D Revolution",
    desc: "ANRF launch, ₹1L Cr RDI Fund, and 68K+ patents filed in 2024–25 are creating unprecedented demand for research-trained talent in industry and government.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Cpu,
    title: "AI Transformation",
    desc: "Every sector needs researchers who understand both domain science and AI/ML. PhDs with computational skills command premium salaries across R&D, data science, and product roles.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Shield,
    title: "Geopolitical Realignment",
    desc: "Semiconductor, defense, and strategic materials sectors are hiring aggressively. India’s push for self-reliance opens new R&D corridors for PhDs.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Leaf,
    title: "Climate & Sustainability",
    desc: "Green energy, carbon capture, sustainable materials, and ESG consulting are fast-growing career avenues with strong funding and hiring momentum.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Rocket,
    title: "Deep-Tech Startup Boom",
    desc: "India’s startup ecosystem now spans biotech, quantum, space, and advanced materials. PhDs are founding and joining deep-tech ventures at record rates.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: GraduationCap,
    title: "Changing Academic Careers",
    desc: "Only 41% of PhD graduates end up in higher education. The rest need industry pathways — and platforms like PhDSetu to navigate them.",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: Heart,
    title: "Health / Pharma / Biotech Expansion",
    desc: "India’s $50B+ pharma industry and growing biotech sector need researchers for drug discovery, clinical research, and regulatory science.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: Scale,
    title: "Regulatory & Policy Environment",
    desc: "ANRF Act, DPDP Act, and NEP 2020 are reshaping research funding, data governance, and career pathways — creating new roles in policy and compliance.",
    color: "bg-orange-50 text-orange-600",
  },
];

const futureSkills = [
  {
    icon: Brain,
    title: "AI-Augmented Research",
    desc: "Using AI tools for literature review, experiment design, and data analysis — while maintaining scientific rigor.",
  },
  {
    icon: MessageSquare,
    title: "Cross-Domain Communication",
    desc: "Translating complex research for non-expert audiences — investors, policymakers, product teams, and the public.",
  },
  {
    icon: BarChart3,
    title: "Data Fluency",
    desc: "Statistical modeling, Python/R, and visualization — regardless of your primary domain.",
  },
  {
    icon: Lightbulb,
    title: "Systems Thinking",
    desc: "Connecting your research to broader industry problems, supply chains, and market needs.",
  },
  {
    icon: Globe,
    title: "Global Collaboration",
    desc: "Working across time zones, cultures, and regulatory environments — especially post-pandemic remote R&D.",
  },
  {
    icon: Shield,
    title: "Ethics & Compliance",
    desc: "Understanding data privacy (DPDP Act), research ethics, IP, and regulatory frameworks in your target sector.",
  },
];

export default function SalaryGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-bg text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-float" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm mb-8">
              <IndianRupee className="w-4 h-4" />
              <span>Career Compensation Guide</span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What Your PhD
              <br />
              <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Is Actually Worth
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Honest salary benchmarks across 10 career avenues — India and
              global reference points. Because you deserve to negotiate from
              knowledge, not guesswork.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stipend Context */}
      <section className="relative -mt-8 z-10 max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-border p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <IndianRupee className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Context: PhD Stipend in India</h3>
              <p className="text-sm text-muted leading-relaxed">
                Most PhD scholars in India receive ₹37K–42K/month through
                CSIR/UGC/DST fellowships. That&apos;s ₹4.4–5 LPA — a fraction of
                what the same skills command in industry. The jump from stipend
                to first industry role (often ₹8–15 LPA entry) is significant,
                but many researchers don&apos;t know how to negotiate it. This
                guide gives you the data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Salary Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Salary Comparison Across Avenues
            </h2>
            <p className="mt-4 text-lg text-muted">
              India benchmarks by career stage, plus global reference ranges
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface border-b border-border">
                  <th className="text-left px-6 py-4 font-semibold">Avenue</th>
                  <th className="text-left px-6 py-4 font-semibold whitespace-nowrap">
                    Entry (India)
                  </th>
                  <th className="text-left px-6 py-4 font-semibold whitespace-nowrap">
                    Mid (India)
                  </th>
                  <th className="text-left px-6 py-4 font-semibold whitespace-nowrap">
                    Senior (India)
                  </th>
                  <th className="text-left px-6 py-4 font-semibold whitespace-nowrap">
                    <span className="inline-flex items-center gap-1">
                      <Globe className="w-3.5 h-3.5" />
                      Global Reference
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {salaryData.map((row, i) => (
                  <tr
                    key={row.avenue}
                    className={`border-b border-border ${i % 2 === 0 ? "bg-white" : "bg-surface/50"} hover:bg-indigo-50/30 transition-colors`}
                  >
                    <td className="px-6 py-4 font-medium">{row.avenue}</td>
                    <td className="px-6 py-4 text-muted">{row.entryIndia}</td>
                    <td className="px-6 py-4 text-muted">{row.midIndia}</td>
                    <td className="px-6 py-4 text-muted">{row.seniorIndia}</td>
                    <td className="px-6 py-4 text-emerald-700 font-medium">
                      {row.global}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs text-muted text-center max-w-3xl mx-auto">
            Ranges are indicative based on 2024–25 market data across India and
            major global markets. Actual compensation varies by domain, company,
            location, and negotiation. CTC includes base, variable, and benefits
            — always ask for in-hand breakdown.
          </p>
        </div>
      </section>

      {/* Global Forces */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              8 Global Forces Shaping Research Careers
            </h2>
            <p className="mt-4 text-lg text-muted">
              Macro trends that will affect your salary trajectory over the next
              decade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalForces.map((force) => (
              <div
                key={force.title}
                className="bg-white rounded-2xl p-6 border border-border card-hover"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${force.color} mb-4`}
                >
                  <force.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">{force.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {force.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Skills */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Skills That Will Matter in 5 Years
            </h2>
            <p className="mt-4 text-lg text-muted">
              Beyond your domain expertise — capabilities that compound your
              career value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {futureSkills.map((skill) => (
              <div
                key={skill.title}
                className="flex items-start gap-4 p-6 rounded-2xl bg-surface border border-border card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <skill.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{skill.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-bg text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Know Your Worth. Plan Your Path.
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Explore career avenues matched to your research and build the
            evidence to get there.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/career-map"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-surface-dark font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Career Map
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/decode"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Decode My Research
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
