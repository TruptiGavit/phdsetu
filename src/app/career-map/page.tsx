import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  TrendingUp,
  Lightbulb,
  Globe,
  FileText,
  Heart,
  Star,
  Microscope,
  BookOpen,
  Scale,
  Leaf,
  Shield,
  Cpu,
  Palette,
  Building2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Career Map — 16+ PhD Career Paths | PhDSetu",
  description:
    "Explore 16+ career avenues for PhD and M.Tech researchers — Industry R&D, Consulting, Data Science, Patent Law, Startups, Policy, and more with salary ranges.",
};

const careers = [
  {
    icon: Briefcase,
    title: "Industry R&D Scientist",
    desc: "Apply research expertise in corporate labs — pharma, chemicals, materials, electronics. Roles range from fundamental research to product development.",
    salary: "₹8-60 LPA",
    skills: ["Lab expertise", "Problem-solving", "Project management", "Cross-functional communication"],
    color: "border-indigo-400 bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: GraduationCap,
    title: "Faculty / Academic",
    desc: "The traditional path — but with new models like Professor of Practice. Combines teaching, research, and mentoring.",
    salary: "₹9-42 LPA",
    skills: ["Teaching", "Grant writing", "Mentorship", "Publishing"],
    color: "border-emerald-400 bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: Microscope,
    title: "Postdoctoral Researcher",
    desc: "Deepen specialization, build publication record, expand international network. A stepping stone — not a career endpoint.",
    salary: "₹47K-67K/mo (India)",
    skills: ["Deep specialization", "Publications", "Collaboration", "Independence"],
    color: "border-teal-400 bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    icon: TrendingUp,
    title: "Management Consulting",
    desc: "McKinsey, BCG, Bain actively recruit PhDs. Your analytical rigor and structured thinking are exactly what they need.",
    salary: "₹30-80 LPA",
    skills: ["Structured thinking", "Data analysis", "Presentation", "Client management"],
    color: "border-amber-400 bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Star,
    title: "Data Science / ML",
    desc: "Your statistical modeling, experimental design, and computational skills translate directly into data science roles.",
    salary: "₹10-60 LPA",
    skills: ["Statistics", "Python/R", "ML algorithms", "Data storytelling"],
    color: "border-orange-400 bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Cpu,
    title: "Product Management",
    desc: "Understand technical complexity AND user needs. PhD-trained PMs excel at deep-tech products where domain knowledge matters.",
    salary: "₹15-50 LPA",
    skills: ["Technical depth", "User empathy", "Roadmapping", "Stakeholder mgmt"],
    color: "border-violet-400 bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: FileText,
    title: "Patent & IP Law",
    desc: "India's patent filings tripled in 5 years. PhDs who understand both science and IP are in massive demand.",
    salary: "₹6-40 LPA",
    skills: ["Technical writing", "Legal analysis", "Prior art search", "Claim construction"],
    color: "border-rose-400 bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    icon: Heart,
    title: "Science Communication",
    desc: "Medical writing, science journalism, content strategy, EdTech. Turn complex research into accessible narratives.",
    salary: "₹5-25 LPA",
    skills: ["Writing", "Visual storytelling", "Audience adaptation", "Research synthesis"],
    color: "border-pink-400 bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    icon: Globe,
    title: "Science Policy & Think Tanks",
    desc: "Shape national research priorities at NITI Aayog, DST, CSIR. Evidence-based policy needs scientist voices.",
    salary: "₹8-25 LPA",
    skills: ["Policy analysis", "Report writing", "Stakeholder engagement", "Systems thinking"],
    color: "border-cyan-400 bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: Lightbulb,
    title: "Deep-Tech Startup",
    desc: "Your PhD IS the competitive moat. Deep-tech in robotics, biotech, climate-tech, quantum — investors value researcher-founders.",
    salary: "Variable (equity)",
    skills: ["Innovation", "Fundraising", "Team building", "Market validation"],
    color: "border-purple-400 bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Shield,
    title: "Defense & Government R&D",
    desc: "DRDO (52 labs), ISRO, BARC, DAE, CSIR (38 labs) — massive employers with stable careers and meaningful work.",
    salary: "₹8-35 LPA",
    skills: ["Domain expertise", "Security clearance", "Project execution", "Technical reporting"],
    color: "border-slate-400 bg-slate-50",
    iconColor: "text-slate-600",
  },
  {
    icon: Scale,
    title: "Regulatory Affairs",
    desc: "Pharma, chemicals, food safety need scientists who understand GLP/GMP, ICH guidelines, and regulatory science.",
    salary: "₹8-30 LPA",
    skills: ["Regulatory knowledge", "Documentation", "Quality systems", "Compliance"],
    color: "border-blue-400 bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Leaf,
    title: "ESG & Sustainability",
    desc: "Net-zero commitments creating new career categories. Green hydrogen, carbon capture, ESG reporting — all PhD-intensive.",
    salary: "₹10-40 LPA",
    skills: ["Sustainability metrics", "Life cycle assessment", "Reporting frameworks", "Climate science"],
    color: "border-green-400 bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: BookOpen,
    title: "EdTech & Course Creation",
    desc: "Design curricula, create courses, lead academic programs. Your expertise + pedagogy = high-impact education products.",
    salary: "₹8-30 LPA",
    skills: ["Curriculum design", "Content creation", "Platform knowledge", "Pedagogy"],
    color: "border-yellow-400 bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    icon: Building2,
    title: "Technical Sales & BD",
    desc: "Sell complex scientific products and services. Companies need people who understand both the science AND the customer.",
    salary: "₹10-40 LPA",
    skills: ["Domain knowledge", "Relationship building", "Negotiation", "Presentation"],
    color: "border-red-400 bg-red-50",
    iconColor: "text-red-600",
  },
  {
    icon: Palette,
    title: "UX Research",
    desc: "Your research methodology — hypotheses, experiments, data analysis — maps perfectly to user experience research.",
    salary: "₹12-40 LPA",
    skills: ["Research methods", "User interviews", "Data synthesis", "Empathy"],
    color: "border-fuchsia-400 bg-fuchsia-50",
    iconColor: "text-fuchsia-600",
  },
];

export default function CareerMapPage() {
  return (
    <>
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Career Map
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Your PhD opens more doors than you think. Explore 16+ career
            avenues — each one leverages your research skills differently.
          </p>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {careers.map((c) => (
              <div
                key={c.title}
                className={`rounded-2xl border-l-4 ${c.color} bg-white p-6 card-hover`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl ${c.color} flex items-center justify-center`}
                  >
                    <c.icon className={`w-6 h-6 ${c.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold">{c.title}</h3>
                      <span className="text-xs font-mono font-semibold text-muted bg-surface px-3 py-1 rounded-full">
                        {c.salary}
                      </span>
                    </div>
                    <p className="text-sm text-muted mb-4 leading-relaxed">
                      {c.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {c.skills.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-3 py-1 rounded-full bg-surface text-muted font-medium"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 border border-border max-w-2xl mx-auto">
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Not sure which path fits you?
              </h3>
              <p className="text-muted mb-6">
                Start with the Capability Map exercise to discover your hidden
                career adjacencies.
              </p>
              <Link
                href="/toolkit"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full gradient-bg-accent text-white font-semibold hover:opacity-90"
              >
                Download Capability Map
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
