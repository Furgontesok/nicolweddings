import type { Metadata } from "next";
import { Italianno, Quicksand, Nunito_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const italianno = Italianno({
  weight: "400",
  variable: "--font-italianno",
  subsets: ["latin"],
});

const quicksand = Quicksand({
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

export const metadata: Metadata = {
  title: "Nicol Weddings and Events",
  description: "Esküvőszervező és dekorátor — álmai esküvője valóra válik",
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
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
