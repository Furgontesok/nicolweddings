import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Esküvőszervezés Budapest — Csomagok és árak | Nicol Weddings",
  description: "Teljes körű esküvőszervezés, 30 napos koordináció és esküvői tanácsadás Budapesten és Magyarország szerte. Nézd meg milyen csomagokkal tudok segíteni.",
  alternates: { canonical: "https://www.nicolweddings.hu/szolgaltatasok" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
