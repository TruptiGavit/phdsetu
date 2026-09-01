import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ClipboardPaste,
  Wand2,
  Compass,
  Briefcase,
  Tags,
  FileText,
  Mail,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { WaitlistForm } from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Decode My Research — AI Career Translator | PhDSetu",
  description:
    "Paste your thesis abstract and get an industry-readable summary in 30 seconds. AI-powered research-to-career translation for PhD researchers.",
};

const steps = [
  {
    icon: ClipboardPaste,
    title: "Paste Research",
    desc: "Drop your thesis abstract, paper summary, or research description — no formatting needed.",
  },
  {
    icon: Wand2,
    title: "AI Translates",
    desc: "Our engine converts academic language into industry-readable capability profiles and keywords.",
  },
  {
    icon: Compass,
    title: "Discover Careers",
    desc: "See matched career paths, salary ranges, and next steps tailored to your research profile.",
  },
];

const sampleOutputs = [
  {
    icon: FileText,
    title: "Industry Profile Summary",
    example:
      "Materials scientist with 5+ years in surface engineering and corrosion-resistant coatings. Expert in electrochemical deposition, thermal barrier systems, and failure analysis — applicable to aerospace, automotive, and energy sectors.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Briefcase,
    title: "Matched Career Paths",
    example:
      "Industry R&D Scientist · Coatings Engineer · Quality & Reliability Engineer · Technical Sales (Materials) · Patent Analyst (Materials/IP)",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Tags,
    title: "Key Industry Keywords",
    example:
      "Corrosion resistance · Thermal barrier coatings · Electrochemical deposition · Failure analysis · ASTM testing · Process scale-up · Quality assurance · Cross-functional R&D",
    color: "bg-amber-50 text-amber-600",
  },
];

const academicInput = `We synthesized novel Al₂O₃–TiO₂ nanocomposite coatings via sol-gel assisted electrophoretic deposition on 316L stainless steel substrates. Characterization via SEM, XRD, and electrochemical impedance spectroscopy revealed enhanced corrosion resistance (E_corr shift of +340 mV) and thermal stability up to 800°C. The dual-phase microstructure demonstrates synergistic barrier effects, with potential applications in harsh marine and high-temperature industrial environments.`;

const industryOutput = `Developed advanced protective coatings for metal surfaces using nanocomposite materials — combining corrosion resistance with high-temperature durability. Skilled in materials characterization (SEM, XRD, electrochemical testing), process optimization, and translating lab results into scalable coating solutions for marine, energy, and industrial applications.`;

export default function DecodePage() {
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm mb-8">
              <Sparkles className="w-4 h-4" />
              <span>AI Career Translator — Early Access</span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Decode My Research
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Paste your thesis abstract. Get an industry-readable summary in 30
              seconds — plus matched career paths and keywords employers actually
              search for.
            </p>

            <WaitlistForm
              variant="dark"
              placeholder="Enter your email for early access"
              buttonText="Join Waitlist"
              successMessage="You're on the list! We'll notify you when Decode launches."
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Live Demo */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              See It in Action
            </h2>
            <p className="mt-4 text-lg text-muted">
              Academic language in. Industry-ready profile out.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="rounded-2xl border border-border overflow-hidden card-hover">
              <div className="px-6 py-4 bg-red-50 border-b border-red-100 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <span className="text-sm font-semibold text-red-700 uppercase tracking-wider">
                  Academic Abstract (Input)
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted leading-relaxed font-mono">
                  {academicInput}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border overflow-hidden card-hover relative">
              <div className="absolute top-1/2 -left-4 hidden lg:flex w-8 h-8 rounded-full bg-primary items-center justify-center -translate-y-1/2 z-10">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
              <div className="px-6 py-4 bg-emerald-50 border-b border-emerald-100 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">
                  Industry Translation (Output)
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm text-foreground leading-relaxed">
                  {industryOutput}
                </p>
              </div>
            </div>
          </div>

          <p className="text-center mt-8 text-sm text-muted">
            Demo uses a sample Materials Science abstract. Your research gets the
            same treatment.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted">
              Three steps from thesis to career clarity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="bg-white rounded-2xl p-8 border border-border card-hover text-center relative"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full gradient-bg-accent text-white text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-indigo-50 text-indigo-600 mb-5 mt-2">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Outputs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What You&apos;ll Get
            </h2>
            <p className="mt-4 text-lg text-muted">
              More than a summary — a complete career translation package
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sampleOutputs.map((output) => (
              <div
                key={output.title}
                className="bg-surface rounded-2xl p-8 border border-border card-hover"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${output.color} mb-5`}
                >
                  <output.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3">{output.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {output.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Why This Matters
            </h2>

            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                Your thesis abstract was written for academic peers — not hiring
                managers, recruiters, or industry R&D leads. It uses jargon,
                passive voice, and methodology-heavy framing that obscures the
                capabilities employers actually need.
              </p>
              <p>
                The translation problem is real:{" "}
                <span className="font-semibold text-foreground">
                  80% of PhDs report career anxiety
                </span>
                , not because they lack skills, but because they cannot
                articulate what those skills mean outside academia. A materials
                scientist who spent years on corrosion-resistant coatings gets
                filtered out by ATS systems searching for &ldquo;quality
                engineer&rdquo; or &ldquo;R&D scientist.&rdquo;
              </p>
              <p>
                Decode My Research bridges this gap instantly. It doesn&apos;t
                replace your expertise — it{" "}
                <span className="font-semibold text-foreground">
                  reframes it in the language of opportunity
                </span>
                . Use the output for LinkedIn, cover letters, networking
                conversations, and your Evidence Bank.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {[
                "Works for any research domain — STEM, humanities, social sciences",
                "Generates ATS-friendly keywords employers search for",
                "Maps to 16+ career avenues in the PhDSetu Career Map",
                "Feeds directly into your Evidence Bank portfolio",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-bg text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-10 h-10 mx-auto mb-6 text-indigo-300" />
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Be First to Decode Your Research
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Join the waitlist for early access. Free for the first 1,000
            researchers.
          </p>

          <WaitlistForm
            variant="dark"
            placeholder="your.email@university.ac.in"
            buttonText="Join Waitlist"
          />

          <p className="mt-6 text-sm text-gray-400">
            Or explore the{" "}
            <Link href="/career-map" className="text-indigo-300 hover:underline">
              Career Map
            </Link>{" "}
            while you wait.
          </p>
        </div>
      </section>
    </>
  );
}
