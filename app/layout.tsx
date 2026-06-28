import type { Metadata, Viewport } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FloatingActions } from "@/components/floating-actions";
import { LeadPopup } from "@/components/lead-popup";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/data/site";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-syne-next",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter-next",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "DiGi Trend | Branding & Digital Growth Agency in Rajkot", template: "%s | DiGi Trend" },
  description: siteConfig.description,
  keywords: ["branding agency in Rajkot", "digital marketing agency in Rajkot", "website development in Rajkot", "logo design agency Rajkot", "social media marketing Rajkot", "ERP software development Rajkot", "CGI video agency India", "brand growth agency"],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_IN", url: siteConfig.url, siteName: siteConfig.name, title: "DiGi Trend | Complete Brand Growth Partner", description: siteConfig.description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "DiGi Trend branding and digital growth agency" }] },
  twitter: { card: "summary_large_image", title: "DiGi Trend | Complete Brand Growth Partner", description: siteConfig.description, images: ["/opengraph-image"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: "/favicon.svg" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#06142f" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    "@context": "https://schema.org", "@type": ["Organization", "ProfessionalService"], name: siteConfig.name, url: siteConfig.url, logo: `${siteConfig.url}/favicon.svg`, description: siteConfig.description,
    telephone: siteConfig.phone, email: siteConfig.email, address: { "@type": "PostalAddress", ...siteConfig.address }, areaServed: ["Rajkot", "Gujarat", "India"], sameAs: [siteConfig.instagram],
  };
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className={inter.className}>
        <JsonLd data={organization} />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
        <LeadPopup />
      </body>
    </html>
  );
}
