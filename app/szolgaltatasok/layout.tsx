import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Szolgáltatások — Esküvőszervezés és koordináció",
  description: "Teljes körű esküvőszervezés, 30 napos koordináció és esküvői tanácsadás. Nézd meg milyen csomagokkal tudok segíteni az álmai esküvő megvalósításában.",
  alternates: { canonical: "https://www.nicolweddings.hu/szolgaltatasok" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
