import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import SplashCursor from "@/components/layout/SplashCursor";
import ClickSpark from "@/components/ClickSpark";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NEXUS | Premium Digital Agency",
  description:
    "World-class digital agency crafting web experiences that drive business growth. Strategy, design, and engineering delivered with precision.",
  keywords: [
    "digital agency",
    "web development",
    "UI/UX design",
    "SaaS development",
    "e-commerce",
    "branding",
    "Next.js",
  ],
  openGraph: {
    title: "NEXUS | Premium Digital Agency",
    description:
      "World-class digital agency crafting web experiences that drive business growth.",
    type: "website",
    siteName: "NEXUS",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-black text-white antialiased">
        <ClickSpark sparkColor="#5831f5" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
          <SplashCursor />
          <div className="relative z-10">
            <Navbar />
            <PageTransition>
              <main>{children}</main>
            </PageTransition>
            <Footer />
          </div>
        </ClickSpark>
      </body>
    </html>
  );
}
