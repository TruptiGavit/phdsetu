import Link from "next/link";
import {
  Clock,
  MapPin,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const agenda = [
  { time: "0-10 min", title: "Reset the Career Lens", desc: "Why your degree is finished but your career isn't. The translation problem." },
  { time: "10-20 min", title: "Tell Me About Yourself", desc: "4 versions of the same introduction. Watch what changes." },
  { time: "20-30 min", title: "The Capability Map", desc: "Interactive exercise: Map what you CAN do, not what you studied." },
  { time: "30-40 min", title: "Career Adjacencies", desc: "Your next career move is probably lateral, not linear." },
  { time: "40-55 min", title: "Industry Deep Dive", desc: "AI era job search, company evaluation, interview strategies." },
  { time: "55-65 min", title: "Beyond Industry R&D", desc: "16+ career paths: consulting, policy, IP, startups, science communication." },
  { time: "65-80 min", title: "The Hard Truths", desc: "Financial reality, rejection handling, mental health, peer support." },
  { time: "80-90 min", title: "Your 7-Day Experiment", desc: "Leave with a concrete action plan, not just motivation." },
];

const takeaways = [
  "Capability Map worksheet — personalized to your research",
  "Evidence Bank template to document your achievements",
  "Career Adjacency Map for your specific domain",
  "Company Fundamentals Checklist for evaluating employers",
  "7-Day Career Experiment action planner",
  "Access to PhDSetu community and toolkit",
];

export default function WorkshopPage() {
  return (
    <>
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Live Workshop</span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What After the Degree?
            </h1>
            <p className="mt-4 text-xl text-gray-300">
              A Practical Toolkit for Careers, Opportunities &amp; Industry
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> At Your Institution
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> 90 Minutes
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" /> PhD &amp; M.Tech Scholars
              </span>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#register"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-surface-dark font-semibold text-base hover:bg-gray-100 transition-colors"
              >
                Request a Workshop
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+918433540271"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-colors"
              >
                Call Us: +91 84335 40271
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What This Is NOT */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-red-50 border border-red-100">
              <h3 className="font-bold text-red-700 mb-4">
                This is NOT
              </h3>
              <ul className="space-y-3 text-sm text-red-800/80">
                {[
                  "A placement talk or company pitch",
                  "Generic 'follow your passion' advice",
                  "A LinkedIn optimization session",
                  "Motivational talk without actionable takeaways",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-red-400">✕</span> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100">
              <h3 className="font-bold text-emerald-700 mb-4">
                This IS
              </h3>
              <ul className="space-y-3 text-sm text-emerald-800/80">
                {[
                  "A practical toolkit you use during and after the session",
                  "Interactive exercises with real-time self-discovery",
                  "Honest, evidence-based career navigation",
                  "Your starting point for a structured career experiment",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-emerald-400">✓</span> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold mb-10 text-center"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            90-Minute Workshop Agenda
          </h2>

          <div className="space-y-4">
            {agenda.map((a, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-border card-hover"
              >
                <span className="flex-shrink-0 text-xs font-mono font-bold text-primary bg-indigo-50 px-3 py-1.5 rounded-lg whitespace-nowrap">
                  {a.time}
                </span>
                <div>
                  <h3 className="font-bold text-sm">{a.title}</h3>
                  <p className="text-sm text-muted mt-1">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Take Away */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold mb-10 text-center"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What You Take Away
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {takeaways.map((t) => (
              <div
                key={t}
                className="flex items-start gap-3 p-4 rounded-xl bg-surface"
              >
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="register" className="py-16 gradient-bg text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Bring This Workshop to Your Institution
          </h2>
          <p className="text-gray-300 mb-8">
            We partner with universities, research institutions, and placement cells to deliver
            career navigation workshops for PhD &amp; M.Tech scholars. Free for students.
          </p>

          <form className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
            />
            <input
              type="text"
              placeholder="Institution Name"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
            />
            <input
              type="text"
              placeholder="Department / Research Area"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
            />
            <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-gray-300 focus:outline-none focus:border-white/40">
              <option value="">You Are...</option>
              <option value="student">PhD / M.Tech Scholar</option>
              <option value="faculty">Faculty / Research Supervisor</option>
              <option value="placement">Placement / Career Cell Officer</option>
              <option value="admin">Research Administration</option>
              <option value="other">Other</option>
            </select>
            <button
              type="submit"
              className="w-full px-8 py-4 rounded-xl bg-white text-surface-dark font-semibold text-base hover:bg-gray-100 transition-colors"
            >
              Request Workshop
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-400">
            Or call us directly at{" "}
            <a href="tel:+918433540271" className="text-white underline font-medium">
              +91 84335 40271
            </a>
          </p>
          <p className="mt-2 text-xs text-gray-500">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </section>
    </>
  );
}
