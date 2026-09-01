import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Mic,
  MapPin,
  Users,
  Building2,
  Mail,
  ArrowRight,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { NewsletterDark } from "@/components/NewsletterDark";

export const metadata: Metadata = {
  title: "Events & AMAs — Workshops for PhD Researchers | PhDSetu",
  description:
    "Workshops, AMAs, and community events for PhD and M.Tech researchers navigating career transitions. Host a workshop at your institution.",
};

const upcomingEvents = [
  {
    icon: Mic,
    title: "Ask an Industry Researcher — AMA",
    date: "Monthly · Recurring",
    format: "Virtual · Live Q&A",
    desc: "Monthly AMA with researchers who've transitioned to industry R&D, consulting, and product roles. Ask anything — interviews, salary, daily work.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: MapPin,
    title: "Career Navigation Workshop",
    date: "Upcoming · Dates announced monthly",
    format: "In-person · 90-minute workshop",
    desc: "Our flagship workshop covering Capability Mapping, Career Adjacencies, and the 7-Day Career Experiment. Want us at your institution? Call +91 84335 40271.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Users,
    title: "Career Path Show & Tell",
    date: "Quarterly · Next session TBA",
    format: "Virtual · Community event",
    desc: "Researchers share their transition stories in 10-minute lightning talks. Learn from peers who've made the leap — and ask questions in real time.",
    color: "bg-purple-50 text-purple-600",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-bg text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl animate-float" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm mb-8">
              <Calendar className="w-4 h-4" />
              <span>Events & AMAs</span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Learn From Those
              <br />
              <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Who&apos;ve Been There
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Workshops, AMAs, and community events designed for researchers
              navigating career transitions — not generic career fairs.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Upcoming Events
            </h2>
            <p className="mt-4 text-lg text-muted">
              Register early — spots fill quickly for in-person workshops
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-surface rounded-2xl p-8 border border-border card-hover flex flex-col"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${event.color} mb-5`}
                >
                  <event.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-sm text-primary font-medium mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  {event.date}
                </div>
                <p className="text-xs text-muted mb-4">{event.format}</p>
                <p className="text-sm text-muted leading-relaxed flex-1">
                  {event.desc}
                </p>
                <Link
                  href="/workshop"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Register / Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Past Events
            </h2>
          </div>

          <div className="max-w-2xl mx-auto text-center p-12 rounded-2xl bg-white border border-dashed border-border">
            <Calendar className="w-12 h-12 mx-auto mb-4 text-muted" />
            <h3 className="font-bold text-lg mb-2">Coming Soon</h3>
            <p className="text-sm text-muted">
              Recordings and recaps from past workshops and AMAs will appear
              here. Subscribe to Career Signals to get notified when they&apos;re
              available.
            </p>
          </div>
        </div>
      </section>

      {/* Host a Workshop */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                For Institutions
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Host a Workshop at Your Institution
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Bring PhDSetu&apos;s career navigation workshop to your
                university. We partner with research offices, placement cells,
                and faculty to deliver hands-on sessions covering Capability
                Mapping, Career Adjacencies, and the 7-Day Career Experiment.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Free for students at partner institutions",
                  "Customizable for your research domains",
                  "Includes Career Map access for all participants",
                  "Campus Setu ambassador program for ongoing support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/workshop"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-bg-accent text-white font-semibold hover:opacity-90 transition-opacity"
                >
                  Partner With Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+918433540271"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-border text-foreground font-semibold hover:bg-surface transition-colors"
                >
                  Call: +91 84335 40271
                </a>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-8 border border-border">
              <h3 className="font-bold text-lg mb-4">What institutions get</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Workshop Kit",
                    desc: "Full facilitator guide, slides, and exercises",
                  },
                  {
                    title: "Career Map Access",
                    desc: "Platform access for all registered students",
                  },
                  {
                    title: "Outcome Report",
                    desc: "Anonymized insights on student career interests",
                  },
                  {
                    title: "Ongoing Support",
                    desc: "Campus Setu ambassadors and virtual AMAs",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-white border border-border"
                  >
                    <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 gradient-bg text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-10 h-10 mx-auto mb-6 text-indigo-300" />
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Career Signals
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Biweekly newsletter with market trends, transition stories, event
            announcements, and career intelligence for researchers.
          </p>

          <NewsletterDark />
        </div>
      </section>
    </>
  );
}
