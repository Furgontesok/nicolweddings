import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kapcsolat — Esküvőszervező Budapest | Nicol Weddings",
  description: "Vedd fel velem a kapcsolatot! Díjmentes konzultáción megismerjük egymást és megbeszéljük az esküvőtök részleteit. +36 30 544 4676",
  alternates: { canonical: "https://www.nicolweddings.hu/kapcsolat" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
