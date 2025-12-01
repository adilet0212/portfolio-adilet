import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import SpaceETHBackground from "@/components/SpaceETHBackground";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adilet Masalbekov",
  description: "Software Developer • AI Specialist • QA Engineer",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  openGraph: {
    title: "Adilet Masalbekov",
    description: "Software Developer • AI Specialist • QA Engineer",
    url: "https://adiletmasalbekov.com",
    siteName: "Adilet Masalbekov",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adilet Masalbekov",
    description: "Software Developer • AI Specialist • QA Engineer",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        {domain && (
          <Script
            defer
            data-domain={domain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}

        <SpaceETHBackground />

        <div className="relative z-10">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}