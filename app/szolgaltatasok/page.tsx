"use client";

import NavbarSimple from "../components/NavbarSimple";
import Footer from "../components/Footer";
import Image from "next/image";

const heroImages = [
  "/images/Betti%26Levi_SLW_001.jpg",
  "/images/5V5A0670-2.jpg",
  "/images/TheKilroyProject-286.jpg",
  "/images/zsambek_wedding_styled_shoot-001_web.jpg",
  "/images/Nicol%26Roli-543.jpg",
  "/images/JE5A0336.jpg",
  "/images/4K2A1978-2.jpg",
  "/images/zsambek_wedding_styled_shoot-052_web.jpg",
];

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

      {/* Hero — folyamatos CSS scroll */}
      {/* 8 kép × 28vw = 224vw → animáció végpontja */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-224vw); }
        }
        .hero-marquee { animation: marquee 55s linear infinite; }
      `}</style>

      <div className="pt-16">
        {/* Képsáv */}
        <div className="relative overflow-hidden" style={{ height: "55vh", minHeight: 360 }}>
          <div className="hero-marquee flex h-full">
            {[...heroImages, ...heroImages].map((src, i) => (
              <div
                key={i}
                className="relative h-full flex-shrink-0"
                style={{ width: "28vw" }}
              >
                <Image
                  src={src}
                  alt="Esküvői fotó"
                  fill
                  className="object-cover object-center"
                  sizes="28vw"
                  priority={i < 4}
                />
              </div>
            ))}
          </div>
          {/* Alap gradient — csak az utolsó 28% fadul el */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
            style={{ height: "28%", background: "linear-gradient(to bottom, transparent, #F5F3ED)" }}
          />
        </div>

        {/* Felirat — közvetlenül alatta, nincs felhúzás */}
        <div className="bg-[#F5F3ED] text-center pt-6 pb-2 relative z-10">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-semibold text-[#363025] tracking-[0.05em] uppercase">
            SZOLGÁLTATÁSOK
          </h1>
        </div>
      </div>

      {/* Subtitle ribbon */}
      <section className="bg-[#F5F3ED] py-12 px-6 text-center">
        <p className="font-[family-name:var(--font-quicksand)] text-lg md:text-xl italic text-[#363025]/70 max-w-2xl mx-auto leading-relaxed">
          Minden szolgáltatásom célja, hogy a Ti napotok valóban gondtalan és felejthetetlen legyen.
        </p>
      </section>

      {/* Szolgáltatások */}
      <section className="bg-[#F5F3ED] pt-12 pb-8 px-6">
        <div className="max-w-5xl mx-auto">
          {services.map((s, i) => (
            <div
              key={i}
              className="border-t border-[#D6D6C9] py-16 flex flex-col md:flex-row gap-12"
            >
              {/* Szám + cím */}
              <div className="md:w-2/5 shrink-0">
                <span className="font-[family-name:var(--font-cormorant)] text-[7rem] font-light text-[#D6D6C9] leading-none block">
                  {s.num}
                </span>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light text-[#363025] mt-1 leading-snug">
                  {s.title}
                </h2>
                <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.25em] uppercase text-[#363025]/40 mt-3">
                  {s.subtitle}
                </p>
              </div>

              {/* Leírás + lista */}
              <div className="flex-1 flex flex-col justify-center">
                <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/65 leading-relaxed mb-8">
                  {s.desc}
                </p>
                <ul className="space-y-2.5">
                  {s.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-sm">
                      <span className="w-px h-4 bg-[#363025]/25 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="border-t border-[#D6D6C9]" />
        </div>
      </section>

      {/* GYIK */}
      <section className="bg-[#363025] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-[family-name:var(--font-nunito)] text-xs tracking-[0.3em] uppercase text-white/35 mb-3">
              Kérdéseid vannak?
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-white tracking-wide">
              Gyakori kérdések
            </h2>
            <div className="w-12 h-px bg-white/20 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {faqs.map((faq, i) => (
              <div key={i} className="border-t border-white/10 pt-8">
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-light text-white mb-4 leading-snug">
                  {faq.q}
                </h3>
                <p className="font-[family-name:var(--font-quicksand)] text-white/45 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="/kapcsolat"
              className="inline-block border border-white/60 text-white font-[family-name:var(--font-nunito)] text-xs tracking-[0.25em] uppercase px-12 py-4 hover:bg-white hover:text-[#363025] transition-all duration-300"
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
