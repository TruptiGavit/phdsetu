import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  Users,
  TrendingUp,
  Heart,
  ArrowRight,
  Clock,
  ThumbsUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Community — Researchers Helping Researchers | PhDSetu",
  description:
    "Join 5,000+ researchers navigating career transitions. Career Transitions, Interview Prep, PhD Wellness, and Domain Hub channels.",
};

const channels = [
  {
    icon: TrendingUp,
    title: "Career Transitions",
    desc: "Share your journey, ask questions, get advice from researchers who've made the leap.",
    members: "1.2K",
    posts: "340+",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: MessageSquare,
    title: "Interview Prep",
    desc: "Mock interviews, question banks, and real-time feedback from peers and mentors.",
    members: "890",
    posts: "210+",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Heart,
    title: "PhD Wellness",
    desc: "Mental health, impostor syndrome, supervisor challenges. A safe space for honest conversations.",
    members: "1.5K",
    posts: "520+",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Users,
    title: "Domain Hubs",
    desc: "Find researchers in your exact field — Materials, Chemistry, Biology, CS, Humanities, and more.",
    members: "2.1K",
    posts: "890+",
    color: "bg-purple-50 text-purple-600",
  },
];

const discussions = [
  {
    title: "How I prepared for my first industry interview after 6 years in academia",
    author: "Materials Science Researcher",
    time: "2 hours ago",
    replies: 24,
    likes: 67,
    tag: "Career Transitions",
  },
  {
    title: "Is a postdoc worth it in India? My honest analysis after completing one",
    author: "Chemistry PhD",
    time: "5 hours ago",
    replies: 31,
    likes: 89,
    tag: "Career Transitions",
  },
  {
    title: "How to explain a 2-year publication gap in interviews",
    author: "Physics PhD Candidate",
    time: "8 hours ago",
    replies: 18,
    likes: 42,
    tag: "Interview Prep",
  },
  {
    title: "Dealing with a supervisor who won't let you explore industry options",
    author: "Anonymous",
    time: "12 hours ago",
    replies: 56,
    likes: 134,
    tag: "PhD Wellness",
  },
  {
    title: "Data Science career path from a Bio PhD — 3 month transition story",
    author: "Computational Biology PhD",
    time: "1 day ago",
    replies: 42,
    likes: 156,
    tag: "Career Transitions",
  },
];

export default function CommunityPage() {
  return (
    <>
      <section className="gradient-bg text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Community
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Researchers helping researchers. A space where career anxiety meets
            collective wisdom — no judgment, no gatekeeping.
          </p>
        </div>
      </section>

      {/* Channels */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl md:text-3xl font-bold mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Community Channels
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {channels.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-2xl p-6 border border-border card-hover"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl ${c.color} flex items-center justify-center`}
                  >
                    <c.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold">{c.title}</h3>
                    <p className="text-sm text-muted mt-1 mb-3">{c.desc}</p>
                    <div className="flex items-center gap-4 text-xs text-muted">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" /> {c.members} members
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5" /> {c.posts}{" "}
                        posts
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Discussions */}
          <h2
            className="text-2xl md:text-3xl font-bold mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Trending Discussions
          </h2>

          <div className="space-y-4">
            {discussions.map((d) => (
              <div
                key={d.title}
                className="bg-white rounded-xl p-6 border border-border hover:border-primary/30 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full bg-surface text-muted mb-2">
                      {d.tag}
                    </span>
                    <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
                      {d.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted">
                      <span>{d.author}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {d.time}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted">
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-3.5 h-3.5" /> {d.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5" /> {d.replies}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/workshop"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-bg-accent text-white font-semibold hover:opacity-90"
            >
              Join the Community
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="mt-3 text-sm text-muted">
              Free to join. 5,000+ researchers already here. Call us at{" "}
              <a href="tel:+918433540271" className="text-primary hover:underline font-medium">
                +91 84335 40271
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
