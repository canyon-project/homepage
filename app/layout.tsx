import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Canyon - More accurate JavaScript coverage data collection",
  description: "Canyon enables JavaScript coverage collection and real-time report generation through simple Babel configuration, solving the challenge of coverage collection in end-to-end testing.",
  keywords: "JavaScript, coverage, testing, babel, end-to-end, e2e, code coverage, testing tools",
  authors: [{ name: "travzhang" }],
  creator: "travzhang",
  openGraph: {
    title: "Canyon - More accurate JavaScript coverage data collection",
    description: "Canyon enables JavaScript coverage collection and real-time report generation through simple Babel configuration.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN", "ja_JP"],
    images: [
      {
        url: "/logo.svg",
        width: 250,
        height: 250,
        alt: "Canyon Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canyon - More accurate JavaScript coverage data collection",
    description: "Canyon enables JavaScript coverage collection and real-time report generation through simple Babel configuration.",
    creator: "@wr_zhang25",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
