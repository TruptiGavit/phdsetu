import {
  Download,
  FileText,
  Target,
  Map,
  ClipboardList,
  Lightbulb,
  BookOpen,
  CheckSquare,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const toolkitItems = [
  {
    id: "capability-map",
    icon: Map,
    title: "Capability Map Worksheet",
    desc: "Map every skill your PhD gave you — research design, data analysis, troubleshooting, communication, mentoring. Then discover which careers value each capability.",
    format: "PDF Worksheet",
    color: "bg-indigo-50 text-indigo-600 border-indigo-200",
  },
  {
    id: "evidence-bank",
    icon: Target,
    title: "Evidence Bank Template",
    desc: "Document your achievements as capability proof. Each entry: Situation → Task → Action → Result. Build a portfolio that speaks the language of employers.",
    format: "PDF + Notion Template",
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  {
    id: "career-adjacency",
    icon: Lightbulb,
    title: "Career Adjacency Exercise",
    desc: "Discover unexpected career paths by exploring how your core skills connect to roles you've never considered. The most powerful moves are lateral, not linear.",
    format: "Interactive PDF",
    color: "bg-amber-50 text-amber-600 border-amber-200",
  },
  {
    id: "company-checklist",
    icon: CheckSquare,
    title: "Company Fundamentals Checklist",
    desc: "10 questions to evaluate if a company's R&D culture is real. Check revenue %, patents, publications, PhD career tracks, and who leads R&D.",
    format: "PDF Checklist",
    color: "bg-rose-50 text-rose-600 border-rose-200",
  },
  {
    id: "playbooks",
    icon: BookOpen,
    title: "Career Playbooks",
    desc: "Domain-specific 90-day transition plans. 'From Organic Chemistry PhD to Pharma R&D,' 'Physics PhD to Quant Finance,' and 15+ more.",
    format: "PDF Guides",
    color: "bg-purple-50 text-purple-600 border-purple-200",
  },
  {
    id: "career-experiment",
    icon: ClipboardList,
    title: "7-Day Career Experiment",
    desc: "Don't decide your career in one day. Design a 7-day experiment: reach out to 3 people, explore 2 job descriptions, attend 1 event. Test before you commit.",
    format: "Action Planner",
    color: "bg-cyan-50 text-cyan-600 border-cyan-200",
  },
  {
    id: "resume-translator",
    icon: FileText,
    title: "PhD Resume vs Academic CV Guide",
    desc: "Your academic CV is the WRONG document for industry. Learn to translate: Grants won = budgets managed, lab mentoring = team leadership, thesis = project delivery.",
    format: "PDF Guide + Template",
    color: "bg-teal-50 text-teal-600 border-teal-200",
  },
  {
    id: "interview-prep",
    icon: Sparkles,
    title: "Researcher Interview Prep Kit",
    desc: "The 'Tell Me About Yourself' framework, behavioral question bank, and the 4 versions of your introduction — from CV Reader to Impact Storyteller.",
    format: "PDF + Audio Guide",
    color: "bg-orange-50 text-orange-600 border-orange-200",
  },
];

export default function ToolkitPage() {
  return (
    <>
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Toolkit &amp; Resources
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Practical tools designed specifically for researchers. Not generic
            career advice — actionable frameworks that translate your PhD into
            career opportunities.
          </p>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {toolkitItems.map((t) => (
              <div
                key={t.id}
                id={t.id}
                className={`bg-white rounded-2xl p-8 border ${t.color} card-hover`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl ${t.color} flex items-center justify-center`}
                  >
                    <t.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-lg font-bold">{t.title}</h3>
                      <span className="text-xs font-mono bg-surface px-2 py-1 rounded text-muted whitespace-nowrap">
                        {t.format}
                      </span>
                    </div>
                    <p className="text-sm text-muted leading-relaxed mb-4">
                      {t.desc}
                    </p>
                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
                      <Download className="w-4 h-4" />
                      Download Free
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              AI Career Translator — Coming Soon
            </h3>
            <p className="text-indigo-200 mb-6 max-w-xl mx-auto">
              Paste your thesis abstract and get an industry-readable
              professional summary in 30 seconds. Powered by AI trained on
              thousands of PhD-to-industry transitions.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-indigo-700 font-semibold hover:bg-gray-100 transition-colors">
              Get Early Access
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
