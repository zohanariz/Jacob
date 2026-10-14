import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0b0c0e",
};

export const metadata: Metadata = {
  title: "The Hidden Job Market – Jacob Levy | Career Coach & Advocate",
  description:
    "Discover a smarter way to find opportunities beyond traditional job boards, reach decision-makers, and create more ways to get hired.",
  keywords: [
    "Jacob Levy",
    "Hidden Job Market",
    "Career Coach",
    "Unposted Jobs",
    "Job Search Strategy",
    "Hiring Managers",
    "Career Advancement",
  ],
  authors: [{ name: "Jacob Levy" }],
  openGraph: {
    title: "The Hidden Job Market – Jacob Levy",
    description:
      "The best job opportunities aren't always posted. Learn the step-by-step system to tap into the hidden job market.",
    url: "https://thehiddenjobmarket.com",
    siteName: "The Hidden Job Market",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#0b0c0e] text-[#f3f4f6] font-sans antialiased selection:bg-[#ff7a45] selection:text-[#0b0c0e]">
        {children}
      </body>
    </html>
  );
}
