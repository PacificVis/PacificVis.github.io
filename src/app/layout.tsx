import type { Metadata } from "next";
import { Geist, Geist_Mono, Hedvig_Letters_Serif } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const hedvigSerif = Hedvig_Letters_Serif({
  variable: "--font-hedvig-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pacificvis.org"),
  title: "PacificVis — IEEE Pacific Visualization Conference",
  description:
    "IEEE Pacific Visualization Conference (PacificVis) — Advancing the frontiers of visualization research across the Pacific. Sponsored by IEEE VGTC.",
  keywords: [
    "PacificVis",
    "IEEE",
    "visualization",
    "Pacific Visualization",
    "VGTC",
    "computer graphics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="PacificVis" />
        <link rel="mask-icon" href="/icon.svg" color="#4166B0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hedvigSerif.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
