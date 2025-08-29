import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { AuthProvider } from "@/contexts/AuthContext";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JavaScriptLearning",
  description:
    "Practice frontend interview questions and learn from detailed solutions.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "JavaScriptLearning",
    description:
      "Practice frontend interview questions and learn from detailed solutions.",
    type: "website",
    images: [
      {
        url: "/Images/logo.png",
        width: 1200,
        height: 630,
        alt: "JavaScriptLearning Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScriptLearning",
    description:
      "Practice frontend interview questions and learn from detailed solutions.",
    images: ["/Images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-1749438252884284"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <GoogleAnalytics
            GA_TRACKING_ID={
              process.env.NEXT_PUBLIC_GA_TRACKING_ID || "G-0HD1V0CS5Z"
            }
          />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </AuthProvider>

        {/* ✅ Google AdSense script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1749438252884284"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* ✅ Example AdSense ad unit */}
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-1749438252884284"
          data-ad-slot="9850469009"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>

        <Script id="adsbygoogle-init" strategy="afterInteractive">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>
      </body>
    </html>
  );
}
