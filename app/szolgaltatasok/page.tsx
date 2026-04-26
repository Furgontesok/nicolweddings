import NavbarSimple from "../components/NavbarSimple";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Szolgáltatások — Nicol Weddings and Events",
  description: "Teljes körű esküvőszervezés, helyszíni koordináció, esküvői tanácsadás és egyéb szolgáltatások.",
};

const services = [
  {
    num: "01",
    title: "Teljes körű esküvőszervezés",
    subtitle: "Komplett megoldás az Ön álom napjához",
    desc: "Az első konzultációtól az utolsó táncig minden részletet gondosan megtervezünk és koordinálunk. Helyszín keresés, vendéglátás, dekoráció, fotós, virágkötő — mindent egy kézből. Melletted vagyok minden lépésnél, hogy te csak a szerelemre koncentrálhass.",
    items: ["Helyszín keresés és bejárás", "Szállítók koordinálása", "Költségvetés tervezés", "Menetrendkészítés", "Dekoráció tervezés és lebonyolítás", "Vendég koordináció"],
  },
  {
    num: "02",
    title: "Helyszíni koordináció",
    subtitle: "Professzionális koordináció a nagy napon",
    desc: "Már megvan a helyszín, a szállítók, az elképzelés — de valakinek kell, aki a nagy napon mindenre figyel. Ez az én feladatom. Koordinálom a szállítókat, kezelem a váratlan helyzeteket, és gondoskodom arról, hogy minden a tervek szerint haladjon.",
    items: ["Szállítókkal való kommunikáció", "Menetrend felügyelete", "Vendégek fogadása", "Szükség esetén problémamegoldás", "Dekoráció felügyelete"],
  },
  {
    num: "03",
    title: "Esküvői tanácsadás",
    subtitle: "Segítség a tervezés során",
    desc: "Nem kell mindent egyedül kitalálni. Tapasztalatomra és kapcsolatrendszeremre támaszkodva segítek neked a legjobb döntéseket meghozni — legyen szó helyszínről, szállítókról, stílusról vagy bármi másról.",
    items: ["1-1 konzultációk", "Szállítói ajánlások", "Stílus és koncepció tanácsadás", "Árak és szerződések áttekintése"],
  },
  {
    num: "04",
    title: "Egyéb szolgáltatások",
    subtitle: "Bridesmaids partyk, dekoráció és más események",
    desc: "Az esküvőn túl is számíthatsz rám. Lánybúcsúk, eljegyzések, baby shower-ek, keresztelők és egyéb különleges alkalmak tervezésében és lebonyolításában is szívesen segítek.",
    items: ["Lánybúcsú szervezés", "Eljegyzési party", "Baby shower", "Keresztelő", "Évfordulós rendezvény"],
  },
];

const faqs = [
  {
    q: "Mikor érdemes felvenni a kapcsolatot?",
    a: "Minél hamarabb, annál jobb! A legjobb helyszínek és szállítók gyorsan foglalódnak — ideális esetben legalább 12-18 hónappal az esküvő előtt.",
  },
  {
    q: "Milyen méretű esküvőkkel dolgoztok?",
    a: "Minden méretű esküvővel foglalkozom, az intim 20 fős ceremóniától a nagyszabású 200+ fős buliig. Minden esküvő egyedi figyelmet kap.",
  },
  {
    q: "Hogyan zajlik az első konzultáció?",
    a: "Az első találkozó ingyenes és kötésmentes. Megismerkedünk, elmeséltek az elképzeléseiteket, és én felvázolom, hogyan tudok segíteni.",
  },
  {
    q: "Dolgozol Budapest határain kívül is?",
    a: "Igen! Magyarország egész területén vállalok munkát, sőt, külföldön tartott esküvőkhöz is.",
  },
];

export default function Szolgaltatasok() {
  return (
    <>
      <NavbarSimple />

      {/* Hero */}
      <section className="bg-[#363025] pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[family-name:var(--font-nunito)] text-xs tracking-[0.3em] uppercase text-white/40 mb-4">
            Amit kínálok
          </p>
          <h1 className="font-[family-name:var(--font-italianno)] text-7xl md:text-8xl text-white">
            Szolgáltatások
          </h1>
          <div className="w-16 h-px bg-white/20 mx-auto mt-8" />
        </div>
      </section>

      {/* Szolgáltatások */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-0">
          {services.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row gap-12 py-20 border-b border-[#D6D6C9] ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Szám + cím */}
              <div className="md:w-2/5 shrink-0">
                <span className="font-[family-name:var(--font-cormorant)] text-8xl font-light text-[#D6D6C9]">
                  {s.num}
                </span>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light text-[#363025] mt-2 leading-tight">
                  {s.title}
                </h2>
                <p className="font-[family-name:var(--font-nunito)] text-xs tracking-widest uppercase text-[#363025]/40 mt-3">
                  {s.subtitle}
                </p>
              </div>

              {/* Leírás + lista */}
              <div className="flex-1">
                <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/70 leading-relaxed mb-8">
                  {s.desc}
                </p>
                <ul className="space-y-2">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 font-[family-name:var(--font-quicksand)] text-[#363025]/70 text-sm">
                      <span className="w-1 h-1 rounded-full bg-[#363025]/30 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GYIK */}
      <section className="bg-[#363025] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-[family-name:var(--font-nunito)] text-xs tracking-[0.3em] uppercase text-white/40 mb-3">
              Kérdéseid vannak?
            </p>
            <h2 className="font-[family-name:var(--font-italianno)] text-6xl text-white">
              Gyakori kérdések
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border-t border-white/10 pt-8">
                <h3 className="font-[family-name:var(--font-quicksand)] font-semibold text-white mb-4">
                  {faq.q}
                </h3>
                <p className="font-[family-name:var(--font-quicksand)] text-white/50 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="/kapcsolat"
              className="inline-block border border-white text-white font-[family-name:var(--font-nunito)] text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-white hover:text-[#363025] transition-all duration-300"
            >
              Írj nekem
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
