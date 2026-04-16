import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Frank Painting | Professional Painting Services in Riverside, CA",
    template: "%s | Frank Painting"
  },
  description: "Frank Painting - 16+ years of professional interior & exterior painting services in Riverside, Inland Empire & Orange County. Licensed, insured, and committed to excellence. Free estimates!",
  keywords: ["painting services", "Riverside painting", "Inland Empire painters", "exterior painting", "interior painting", "commercial painting", "residential painting", "epoxy flooring", "cabinet refinishing", "Frank Painting"],
  authors: [{ name: "Frank Painting" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Frank Painting | Professional Painting Services",
    description: "Transform your space with expert painting services. 16+ years experience in Riverside & Orange County.",
    url: "https://frankspainting.net",
    siteName: "Frank Painting",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frank Painting | Professional Painting Services",
    description: "Transform your space with expert painting services. 16+ years experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Navigation />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
