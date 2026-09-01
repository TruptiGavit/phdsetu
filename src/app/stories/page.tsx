import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Researcher Stories — Real PhD Career Transitions | PhDSetu",
  description:
    "Real transition stories from PhD researchers — Materials Science to R&D, Chemistry to IP Law, Biology to Data Science. Honest journeys with actionable lessons.",
};

const stories = [
  {
    name: "Dr. Ananya Rao",
    from: "PhD, Materials Science",
    to: "Senior R&D Scientist, Specialty Chemicals MNC",
    institution: "IIT Bombay",
    timeline: "8 months",
    quote:
      "I spent 5 years studying nanocomposite coatings. The hardest part wasn't the research — it was learning to say 'I developed corrosion-resistant materials that save ₹4 Cr/year in maintenance costs' instead of listing my publications.",
    tags: ["Materials Science", "Industry R&D", "Resume Translation"],
    color: "border-indigo-400",
  },
  {
    name: "Dr. Rahul Mishra",
    from: "PhD, Organic Chemistry",
    to: "Patent Analyst → IP Strategy Lead",
    institution: "Central University, MP",
    timeline: "6 months",
    quote:
      "I came from a tier-2 university. Nobody told me my ability to read and analyze 200-page patent documents was a marketable skill. Now I lead IP strategy for a pharma company's pipeline.",
    tags: ["Chemistry", "Patent & IP", "Tier-2 University"],
    color: "border-emerald-400",
  },
  {
    name: "Dr. Priya Krishnan",
    from: "PhD, Computational Biology",
    to: "Senior Data Scientist, HealthTech Startup",
    institution: "IISc Bangalore",
    timeline: "4 months",
    quote:
      "My PI told me Data Science was 'not real research.' Turns out my skills in statistical modeling, experiment design, and Python were exactly what startups were hiring for — at 3x my postdoc salary.",
    tags: ["Biology", "Data Science", "Startup"],
    color: "border-amber-400",
  },
  {
    name: "Dr. Arjun Deshmukh",
    from: "PhD, Environmental Engineering",
    to: "ESG Consultant, Big 4 Firm",
    institution: "IIT Delhi",
    timeline: "5 months",
    quote:
      "I was preparing for faculty positions for 2 years with no luck. Then I discovered that consulting firms were desperately hiring PhDs who understood lifecycle assessment and sustainability metrics.",
    tags: ["Environmental Science", "Consulting", "ESG"],
    color: "border-cyan-400",
  },
  {
    name: "Dr. Meera Joshi",
    from: "PhD, Physics → Career Break → Re-entry",
    to: "Application Scientist, Instrumentation Company",
    institution: "University of Pune",
    timeline: "10 months",
    quote:
      "After a 3-year maternity break, I thought my career was over. DST WOS-B gave me a project, and I used that to rebuild my confidence and portfolio. The gap doesn't define you — how you frame it does.",
    tags: ["Physics", "Career Break", "Women in Research", "Re-entry"],
    color: "border-rose-400",
  },
  {
    name: "Dr. Farhan Ahmed",
    from: "PhD, History",
    to: "Policy Researcher, Think Tank",
    institution: "JNU",
    timeline: "7 months",
    quote:
      "In humanities, we're told there's only one career: professor. Nobody mentioned policy research, museum curation, content strategy, or UX research. My archival research skills are exactly what policy analysis requires.",
    tags: ["Humanities", "Science Policy", "Non-STEM"],
    color: "border-purple-400",
  },
];

export default function StoriesPage() {
  return (
    <>
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Researcher Stories
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Real transitions from real researchers. Not generic success stories
            — specific journeys with honest details about what worked, what
            didn&apos;t, and what they wish they knew.
          </p>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {stories.map((s) => (
            <article
              key={s.name}
              className={`bg-white rounded-2xl border-l-4 ${s.color} p-8 card-hover`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold">{s.name}</h3>
                  <p className="text-sm text-muted mt-1">
                    <span className="text-red-500 line-through">{s.from}</span>
                    <span className="mx-2 text-muted">&rarr;</span>
                    <span className="text-emerald-600 font-semibold">
                      {s.to}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {s.institution}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {s.timeline}
                  </span>
                </div>
              </div>

              <blockquote className="text-base text-foreground/80 leading-relaxed italic border-l-2 border-border pl-4 my-4">
                &ldquo;{s.quote}&rdquo;
              </blockquote>

              <div className="flex flex-wrap gap-2 mt-4">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-surface text-muted font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 border border-border max-w-xl mx-auto">
            <Star className="w-8 h-8 text-amber-400 mx-auto mb-4" />
            <h3
              className="text-2xl font-bold mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Share Your Story
            </h3>
            <p className="text-muted mb-6">
              Made the transition? Your journey can help thousands of
              researchers find their path.
            </p>
            <Link
              href="mailto:stories@phdsetu.org"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full gradient-bg-accent text-white font-semibold hover:opacity-90"
            >
              Submit Your Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
