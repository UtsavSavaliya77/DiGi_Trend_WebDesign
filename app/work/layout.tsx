import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding, Website, CGI & UI/UX Portfolio",
  description: "Explore selected DiGi Trend branding, website, social media, CGI, UI/UX and software projects.",
  alternates: { canonical: "/work" },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
