import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PhDSetu — Career Navigation for Researchers",
  description:
    "India's first capability-based career navigation platform for PhD, M.Tech & postgraduate researchers. Discover career paths beyond academia.",
  keywords: [
    "PhD careers",
    "researcher career navigation",
    "PhD to industry",
    "career after PhD",
    "research careers India",
    "PhDSetu",
  ],
  openGraph: {
    title: "PhDSetu — Your Research Opens More Doors Than You Think",
    description:
      "Career navigation platform for PhD & postgraduate researchers. Discover 16+ career paths, build your evidence bank, join 5000+ researchers.",
    type: "website",
    siteName: "PhDSetu",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
