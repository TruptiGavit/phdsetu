import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | PhDSetu",
  description:
    "PhDSetu privacy policy. Learn how we collect, use, and protect your data in compliance with India's DPDP Act 2023.",
};

const sections = [
  {
    title: "Information We Collect",
    content: [
      "Account information: When you sign up, we collect your name, email address, institution (optional), and research domain (optional).",
      "Usage data: We collect anonymized information about how you interact with the platform — pages visited, features used, and session duration.",
      "Research content: If you use Decode My Research or the Evidence Bank, we process the content you submit (abstracts, capability descriptions) to provide our services.",
      "Communication data: When you contact us, subscribe to newsletters, or join workshops, we collect the information you provide.",
      "We follow the principle of minimal data collection — we only collect what's necessary to deliver our services.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To provide career navigation services, including Career Map personalization, Decode My Research translations, and Evidence Bank storage.",
      "To send you relevant content — workshop invitations, Career Signals newsletter, and platform updates. You can unsubscribe at any time.",
      "To improve our platform through anonymized, aggregated analytics. We never use your personal research content to train external AI models.",
      "To communicate with you about your account, support requests, or partnership inquiries.",
      "To comply with legal obligations under applicable Indian law.",
    ],
  },
  {
    title: "Data Sharing",
    content: [
      "We do not sell, rent, or trade your personal information to third parties.",
      "We may share anonymized, aggregated data for research purposes (e.g., PhD career outcome surveys) — never identifiable personal data.",
      "We use trusted service providers for hosting, email delivery, and analytics. These providers are bound by data processing agreements.",
      "We may disclose information if required by law, court order, or to protect the rights and safety of our users.",
      "If PhDSetu is involved in a merger or acquisition, user data may be transferred as part of that transaction with prior notice.",
    ],
  },
  {
    title: "Your Rights (DPDP Act Compliance)",
    content: [
      "Under India's Digital Personal Data Protection (DPDP) Act 2023, you have the following rights:",
      "Right to access: Request a copy of the personal data we hold about you.",
      "Right to correction: Request correction of inaccurate or incomplete personal data.",
      "Right to erasure: Request deletion of your personal data, subject to legal retention requirements.",
      "Right to withdraw consent: Withdraw consent for data processing at any time. This may limit your access to certain features.",
      "Right to grievance redressal: Lodge a complaint with our Data Protection Officer or with the Data Protection Board of India.",
      "To exercise any of these rights, contact us at privacy@phdsetu.org. We will respond within 30 days.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We implement industry-standard security measures including encryption in transit (TLS/SSL) and at rest for sensitive data.",
      "Access to personal data is restricted to authorized personnel on a need-to-know basis.",
      "We conduct regular security reviews and update our practices as threats evolve.",
      "While we take reasonable precautions, no system is 100% secure. We encourage you to use strong passwords and report any suspected breaches immediately.",
      "Research content submitted to Decode My Research is processed securely and deleted from processing systems after translation, unless you explicitly save it to your Evidence Bank.",
    ],
  },
  {
    title: "Contact Information",
    content: [
      "Data Protection Officer: privacy@phdsetu.org",
      "General inquiries: hello@phdsetu.org",
      "Phone: +91 84335 40271",
      "PhDSetu, India",
      "Last updated: September 2026",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-bg text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm mb-8">
              <Shield className="w-4 h-4" />
              <span>Legal</span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Privacy Policy
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Your data belongs to you. We collect the minimum necessary and
              protect it in compliance with India&apos;s DPDP Act 2023.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Policy Content */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 p-6 rounded-2xl bg-surface border border-border">
            <p className="text-sm text-muted leading-relaxed">
              PhDSetu (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              operates the PhDSetu career navigation platform. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you use our website and services. By using
              PhDSetu, you agree to the collection and use of information in
              accordance with this policy.
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted leading-relaxed flex items-start gap-3"
                    >
                      <span className="text-primary mt-1 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-surface border border-border text-center">
            <Mail className="w-8 h-8 mx-auto mb-4 text-primary" />
            <h3 className="font-bold mb-2">Questions about your data?</h3>
            <p className="text-sm text-muted mb-4">
              Contact our Data Protection Officer at{" "}
              <a
                href="mailto:privacy@phdsetu.org"
                className="text-primary hover:underline"
              >
                privacy@phdsetu.org
              </a>
            </p>
            <Link
              href="/faq"
              className="text-sm text-primary hover:underline"
            >
              Visit our FAQ →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
