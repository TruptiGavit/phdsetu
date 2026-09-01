"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "What is PhDSetu?",
    a: "PhDSetu is India's first capability-based career navigation platform for PhD, M.Tech, and postgraduate researchers. Instead of treating you like a job seeker with a credential, we help you discover what you CAN do, map career adjacencies beyond the obvious, and build evidence that speaks the language employers understand.",
  },
  {
    q: "How is PhDSetu different from a job board?",
    a: "Job boards show openings. PhDSetu shows possibilities. We start with your research identity and capabilities — not job titles — and help you discover 16+ career avenues, translate your skills for industry, build an Evidence Bank, and connect with a community of researchers on the same journey. We're a navigation system, not a listing site.",
  },
  {
    q: "Is PhDSetu free? What's the membership model?",
    a: "Core resources — Career Map, Stories, Toolkit basics, and community access — are free. Workshops are free for students at partner institutions. Premium features (Decode My Research AI tool, advanced playbooks, 1:1 mentorship matching) will be available through a membership tier launching soon. We believe career navigation shouldn't be paywalled for researchers who need it most.",
  },
  {
    q: "Who is PhDSetu for?",
    a: "All PhD and postgraduate researchers — not just STEM or IIT graduates. Whether you're in Materials Science at IIT Bombay, English Literature at a central university, or Chemistry at a state university, PhDSetu maps career paths for your domain. We also serve M.Tech students, postdocs, and researchers on career breaks.",
  },
  {
    q: "How does the Career Map work?",
    a: "The Career Map is an interactive pathfinder showing 16+ career avenues organized by domain and skill type. Select your research field, explore paths with salary benchmarks and skill requirements, and see how your specific capabilities map to each avenue. It's designed to expand your horizon beyond the default 'faculty or industry R&D' binary.",
  },
  {
    q: "What is a Career Adjacency?",
    a: "A career adjacency is a career path that's logically connected to your research but not immediately obvious. For example, a Materials Science PhD's adjacencies might include Patent Law, Product Management (deep-tech), Regulatory Affairs, or Technical Consulting — not just 'Industry R&D Scientist.' PhDSetu helps you discover these non-obvious connections.",
  },
  {
    q: "What is the Evidence Bank?",
    a: "The Evidence Bank is your capability portfolio — a structured way to document experiments, projects, skills demonstrations, and career wins in language employers understand. Instead of listing 'Published 5 papers,' you document 'Designed and executed corrosion testing protocol yielding 340mV improvement — directly applicable to QA and R&D roles.'",
  },
  {
    q: "What is the 7-Day Career Experiment?",
    a: "A structured micro-experiment where you test a career adjacency in 7 days — not by quitting your PhD, but by taking small actions: informational interviews, online courses, portfolio projects, or networking events. The goal is evidence, not commitment. Did you enjoy it? Could you see yourself doing this? The Evidence Bank captures your findings.",
  },
  {
    q: "How do I translate my research for industry?",
    a: "Use our Decode My Research tool (launching soon) to paste your thesis abstract and get an industry-readable summary. Beyond that, our Toolkit includes translation frameworks, resume templates designed for researchers, and Career Playbooks with domain-specific guidance. The core principle: lead with capabilities, not credentials.",
  },
  {
    q: "I'm from a tier-2/3 university. Is this relevant for me?",
    a: "Absolutely — and especially for you. Tier-2/3 researchers often have excellent technical skills but less access to career services, alumni networks, and industry exposure. PhDSetu was designed to reduce exactly this gap. Your university name doesn't define your capabilities. Our Campus Setu program helps researchers at any institution become career navigation ambassadors.",
  },
  {
    q: "I'm a humanities PhD. Does PhDSetu cover non-STEM fields?",
    a: "Yes. Career paths for humanities and social science PhDs include Science Communication, Science Policy, UX Research, Education Technology, Consulting, Think Tanks, Publishing, and more. The Career Map includes humanities-specific avenues, and our community has active Domain Hubs for non-STEM researchers.",
  },
  {
    q: "I'm on a career break. Can PhDSetu help?",
    a: "Yes. Career breaks — whether for caregiving, health, or exploration — are common among researchers. PhDSetu helps you reframe your gap productively, update your Evidence Bank, identify current market opportunities, and connect with others who've navigated similar transitions. Your research skills don't expire.",
  },
  {
    q: "How do I join the community?",
    a: "Visit our Community page to access discussion channels organized by topic (Career Transitions, Interview Prep, PhD Wellness, Domain Hubs). Attend a free workshop to meet peers in real-time. Subscribe to Career Signals, our biweekly newsletter with market trends and transition stories.",
  },
  {
    q: "What about privacy and data?",
    a: "We collect minimal data — only what's needed to provide our services. We never sell your personal information. We're compliant with India's Digital Personal Data Protection (DPDP) Act 2023. See our Privacy Policy for full details. Your research data in Decode My Research is processed securely and not used to train external models.",
  },
  {
    q: "Do you guarantee jobs?",
    a: "No — and we'd be suspicious of anyone who does. PhDSetu is a navigation platform, not a placement agency. We help you discover paths, build evidence, and connect with opportunities. The job offer comes from your capabilities, preparation, and persistence — we give you the map and tools.",
  },
  {
    q: "How can my institution partner with PhDSetu?",
    a: "We partner with universities for workshops, Career Map integration, and Campus Setu ambassador programs. If you're a faculty member, placement officer, or research administrator, visit our Workshop page or email hello@phdsetu.org to discuss hosting a session at your institution.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
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

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-bg text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm mb-8">
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Got Questions?
              <br />
              <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                We&apos;ve Got Answers
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Everything you need to know about PhDSetu — the platform, the
              methodology, and how it helps researchers navigate careers.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* FAQ List */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

          <div className="mt-16 text-center p-8 rounded-2xl bg-surface border border-border">
            <h3
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Still have questions?
            </h3>
            <p className="text-sm text-muted mb-6">
              Reach out at hello@phdsetu.org or join our community for
              peer-to-peer support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/community"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full gradient-bg-accent text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Join Community
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/workshop"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-border text-foreground font-semibold text-sm hover:bg-white transition-colors"
              >
                Attend a Workshop
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
