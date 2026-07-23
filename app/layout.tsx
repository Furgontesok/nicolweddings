import type { Metadata } from "next";
import { Italianno, Raleway, Nunito_Sans, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import PageTracker from "./components/PageTracker";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const italianno = Italianno({
  weight: "400",
  variable: "--font-italianno",
  subsets: ["latin"],
});

const quicksand = Raleway({
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  weight: ["400", "600"],
  variable: "--font-nunito",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400"],
  variable: "--font-cormorant",
  subsets: ["latin"],
});

const BASE_URL = "https://www.nicolweddings.hu";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Nicol Weddings — Esküvőszervező Budapest és Magyarország",
    template: "%s | Nicol Weddings and Events",
  },
  description: "Gőz-Csongrádi Nicol esküvőszervező Budapest és Magyarország szerte. Teljes körű esküvőszervezés, 30 napos koordináció, díjmentes konzultáció. Álmai esküvője valóra válik.",
  keywords: ["esküvőszervező", "esküvő szervező", "esküvő koordinátor", "esküvő dekorátor", "Nicol Weddings", "magyarország esküvőszervező", "Budapest esküvőszervező"],
  authors: [{ name: "Gőz-Csongrádi Nicol" }],
  creator: "Nicol Weddings and Events",
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: BASE_URL,
    siteName: "Nicol Weddings and Events",
    title: "Nicol Weddings — Esküvőszervező Budapest és Magyarország",
    description: "Gőz-Csongrádi Nicol esküvőszervező Budapest és Magyarország szerte. Álmai esküvője valóra válik.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Nicol Weddings and Events" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicol Weddings and Events",
    description: "Esküvőszervező és dekorátor Magyarországon.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  verification: { google: "cV4qVzrKzMGCBSEPeuqDBItwdBD2vQ0Z4xmJ4LaoGs0" },
  alternates: { canonical: BASE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hu"
      className={`${italianno.variable} ${quicksand.variable} ${nunitoSans.variable} ${cormorant.variable}`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
        <PageTracker />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
