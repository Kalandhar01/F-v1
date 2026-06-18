import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import SplashCursor from "@/components/layout/SplashCursor";
import ClickSpark from "@/components/ClickSpark";
import HashScrollHandler from "@/components/HashScrollHandler";
import { BRAND } from "@/config/brand";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const socialPreviewUrl = new URL(BRAND.assets.socialPreview, BRAND.url).toString();

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BRAND.name,
  alternateName: BRAND.shortName,
  slogan: BRAND.tagline,
  description: BRAND.description,
  url: BRAND.url,
  logo: new URL(BRAND.assets.logo, BRAND.url).toString(),
  image: socialPreviewUrl,
  email: BRAND.email,
  telephone: BRAND.phone,
  areaServed: "Worldwide",
  address: {
    "@type": "PostalAddress",
    addressLocality: BRAND.location,
  },
  serviceType: [
    "Website Development",
    "App Development",
    "SEO",
    "Digital Marketing",
    "Branding",
    "Performance Marketing",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.url),
  title: {
    default: BRAND.seoTitle,
    template: `%s | ${BRAND.name}`,
  },
  description: BRAND.description,
  applicationName: BRAND.name,
  keywords: [
    BRAND.name,
    BRAND.shortName,
    "digital agency",
    "digital growth agency",
    "web development",
    "app development",
    "SEO",
    "digital marketing",
    "branding",
    "performance marketing",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: BRAND.assets.favicon, sizes: "any" },
      { url: BRAND.assets.icon32, sizes: "32x32", type: "image/png" },
      { url: BRAND.assets.icon192, sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: BRAND.assets.appleIcon, sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: BRAND.seoTitle,
    description: BRAND.description,
    url: BRAND.url,
    type: "website",
    siteName: BRAND.name,
    images: [
      {
        url: socialPreviewUrl,
        width: 1200,
        height: 630,
        alt: `${BRAND.name} - ${BRAND.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND.seoTitle,
    description: BRAND.description,
    images: [socialPreviewUrl],
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
    <html lang="en" className={`${inter.variable} overflow-x-hidden`}>
      <body className="bg-black text-white antialiased overflow-x-hidden relative w-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <HashScrollHandler />
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
