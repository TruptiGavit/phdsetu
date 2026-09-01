import Link from "next/link";
import { Compass } from "lucide-react";

const footerLinks = {
  Platform: [
    { href: "/career-map", label: "Career Map" },
    { href: "/stories", label: "Researcher Stories" },
    { href: "/toolkit", label: "Toolkit & Resources" },
    { href: "/community", label: "Community" },
  ],
  Resources: [
    { href: "/workshop", label: "Workshops" },
    { href: "/toolkit#playbooks", label: "Career Playbooks" },
    { href: "/toolkit#evidence-bank", label: "Evidence Bank" },
    { href: "/about", label: "About PhDSetu" },
  ],
  Connect: [
    { href: "mailto:hello@phdsetu.org", label: "hello@phdsetu.org" },
    { href: "https://twitter.com/phdsetu", label: "Twitter / X" },
    { href: "https://linkedin.com/company/phdsetu", label: "LinkedIn" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                PhD<span className="text-primary-light">Setu</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              India&apos;s first capability-based career navigation platform for
              PhD &amp; postgraduate researchers.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} PhDSetu. Built for researchers, by
            researchers.
          </p>
          <p className="text-sm text-gray-500">
            Research &rarr; Capability &rarr; Possibility &rarr; Evidence &rarr;
            Action
          </p>
        </div>
      </div>
    </footer>
  );
}
