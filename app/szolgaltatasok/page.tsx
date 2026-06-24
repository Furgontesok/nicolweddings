"use client";

import NavbarSimple from "../components/NavbarSimple";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState } from "react";

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
    desc: "Egy esküvő szervezése tele van izgalommal, álmodozással és rengeteg döntéssel. Olyan részletek is fontossá válnak, amikre talán elsőre nem is gondolnátok, mégis ezek adják meg azt a különleges, személyes hangulatot, amitől a nap valóban rólatok szól. Ugyanakkor a sok egyeztetés, időzítés és feladat könnyen feszültté teheti az előkészületeket. Éppen ezért jó, ha van mellettetek valaki, aki nemcsak tapasztalattal és jó ötletekkel segít, hanem végigkísér a szervezési folyamaton. Így Ti arra koncentrálhattok, ami a legfontosabb: egymásra és az élményre.",
    items: [
      "Ingyenes első konzultáció — Egy személyes vagy online találkozó során megismerjük egymást, és átbeszéljük az elképzeléseiteket.",
      "Ajánlatadás — Az igényeitek alapján személyre szabott ajánlatot készítek.",
      "Helyszínkeresés és helyszínbejárások egyeztetése — Segítek megtalálni a számotokra tökéletes helyszínt, és egyeztetem a bejárásokat.",
      "Megbízható szolgáltatók ajánlása és szerződtetése minden területen — Az esküvőtök minden területére megbízható szolgáltatókat ajánlok, hogy a legjobb csapat segítse a napotokat.",
      "Szolgáltatói találkozók leszervezése — A szolgáltatókkal való találkozókat leszervezem, és minden alkalommal mellettetek leszek, legyen az személyesen vagy online.",
      "Koncepció és stílus kidolgozása — Segítek megtalálni a hozzátok illő színeket, tematikát és hangulatot.",
      "Folyamatos kapcsolattartás — A szervezés teljes ideje alatt veletek és a szolgáltatókkal is folyamatosan tartom a kapcsolatot.",
      "Költségvetés kezelése — Átlátható online táblázatban vezetem a kiadásokat és a költségeket.",
      "Esküvői forgatókönyv összeállítása — Részletes menetrendet készítek, amit közösen átbeszélünk.",
      "Esküvő lebonyolítása — A nagy napotok során ott vagyok a háttérben, koordinálom az előkészületeket és a szolgáltatókat, hogy minden a helyére kerüljön.",
    ],
    image: "/images/zsambek_wedding_styled_shoot-001_web.jpg",
  },
  {
    num: "02",
    title: "Helyszíni koordináció",
    desc: "Már megvan a helyszín, a szállítók, az elképzelés — de valakinek kell, aki a nagy napon mindenre figyel. Ez az én feladatom. Koordinálom a szállítókat, kezelem a váratlan helyzeteket, és gondoskodom arról, hogy minden a tervek szerint haladjon.",
    items: ["Szállítókkal való kommunikáció", "Menetrend felügyelete", "Vendégek fogadása", "Problémamegoldás szükség esetén", "Dekoráció felügyelete"],
    image: "/images/TheKilroyProject-286.jpg",
  },
  {
    num: "03",
    title: "Esküvői tanácsadás",
    desc: "Nem kell mindent egyedül kitalálni. Tapasztalatomra és kapcsolatrendszeremre támaszkodva segítek neked a legjobb döntéseket meghozni — legyen szó helyszínről, szállítókról, stílusról vagy bármi másról.",
    items: ["1-1 konzultációk", "Szállítói ajánlások", "Stílus és koncepció tanácsadás", "Árak és szerződések áttekintése"],
    image: "/images/Betti%26Levi_SLW_001.jpg",
  },
  {
    num: "04",
    title: "Egyéb szolgáltatások",
    desc: "Az esküvőn túl is számíthatsz rám. Lánybúcsúk, eljegyzések, baby shower-ek, keresztelők és egyéb különleges alkalmak tervezésében és lebonyolításában is szívesen segítek.",
    items: ["Lánybúcsú szervezés", "Eljegyzési party", "Baby shower", "Keresztelő", "Évfordulós rendezvény"],
    image: "/images/5V5A0670-2.jpg",
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

function ServiceItem({ s, i, isOpen, onToggle }: {
  s: typeof services[0]; i: number; isOpen: boolean; onToggle: () => void;
}) {
  return (
    <div className="border-t border-[#D6D6C9]">
      <div className="py-14 flex flex-col md:flex-row gap-12">

        {/* Bal: kép 3D hover effekttel */}
        <div className="shrink-0 md:w-[40%] group/img" style={{ perspective: "800px" }}>
          <div
            className="relative overflow-hidden transition-transform duration-500 ease-out group-hover/img:[transform:rotateY(-3deg)_rotateX(2deg)_scale(1.02)] shadow-md group-hover/img:shadow-2xl"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              className="object-cover object-center transition-transform duration-700 group-hover/img:scale-105"
              sizes="40vw"
            />
            {/* Overlay shimmer on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover/img:from-white/5 group-hover/img:via-white/10 group-hover/img:to-white/0 transition-all duration-500" />
            {/* Dekoratív szám a képen */}
            <span
              className="absolute bottom-3 right-4 font-[family-name:var(--font-cormorant)] text-[6rem] font-light text-white/20 leading-none select-none pointer-events-none"
            >
              {s.num}
            </span>
          </div>
        </div>

        {/* Jobb: tartalom */}
        <div className="flex-1 flex flex-col">

          {/* Vékony dekor vonal + cím */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-px bg-[#363025]/30" />
              <span className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.35em] uppercase text-[#363025]/40">
                {s.num}
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light text-[#363025] leading-snug">
              {s.title}
            </h2>
          </div>

          {/* Leírás */}
          <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-sm leading-relaxed mb-7">
            {s.desc}
          </p>

          {/* Accordion */}
          <div className="border-t border-[#D6D6C9]/60">
            <button
              onClick={onToggle}
              className="w-full flex items-center justify-between py-4 text-left group/btn"
            >
              <span className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.35em] uppercase text-[#363025]/40 group-hover/btn:text-[#363025] transition-colors duration-200">
                Mit tartalmaz?
              </span>
              <span
                className="w-5 h-5 border border-[#363025]/30 rounded-full flex items-center justify-center text-[#363025]/40 text-sm transition-all duration-300 group-hover/btn:border-[#363025]/60 group-hover/btn:text-[#363025]"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </button>

            {/* Animált tartalom */}
            <div
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: isOpen ? "800px" : "0px", opacity: isOpen ? 1 : 0 }}
            >
              <ul className="pb-6 space-y-0">
                {s.items.map((item, j) => {
                  const parts = item.split(" — ");
                  const keyword = parts[0];
                  const rest = parts.slice(1).join(" — ");
                  return (
                    <li
                      key={j}
                      className="flex gap-4 py-3 border-b border-[#D6D6C9]/40 last:border-0"
                      style={{
                        transitionDelay: isOpen ? `${j * 40}ms` : "0ms",
                        opacity: isOpen ? 1 : 0,
                        transform: isOpen ? "translateY(0)" : "translateY(6px)",
                        transition: "opacity 0.3s ease, transform 0.3s ease",
                      }}
                    >
                      <span className="w-1 shrink-0 rounded-full bg-[#363025]/15 self-stretch mt-1" />
                      <div>
                        <span className="font-[family-name:var(--font-cormorant)] text-[#363025] text-base font-semibold italic">
                          {keyword}
                        </span>
                        {rest && (
                          <span className="font-[family-name:var(--font-quicksand)] text-[#363025]/55 text-xs leading-relaxed">
                            {" — "}{rest}
                          </span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Árajánlat gomb */}
          <div className="mt-auto pt-5 flex justify-end">
            <a
              href="/kapcsolat"
              className="group/btn2 relative inline-flex items-center gap-3 border border-[#363025]/30 text-[#363025] font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.3em] uppercase px-8 py-3.5 overflow-hidden transition-all duration-400 hover:border-[#363025]"
            >
              <span className="absolute inset-0 bg-[#363025] translate-y-full group-hover/btn2:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 group-hover/btn2:text-white transition-colors duration-300">Árajánlat kérése</span>
              <span className="relative z-10 w-4 h-px bg-[#363025] group-hover/btn2:bg-white transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServicesList() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-[#F5F3ED] pt-12 pb-8 px-6">
      <div className="max-w-5xl mx-auto">
        {services.map((s, i) => (
          <ServiceItem
            key={i}
            s={s}
            i={i}
            isOpen={open === i}
            onToggle={() => setOpen(open === i ? null : i)}
          />
        ))}
        <div className="border-t border-[#D6D6C9]" />
      </div>
    </section>
  );
}

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

      <div className="pt-16 bg-[#F5F3ED]">
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

        {/* Felirat — a gradient zónában */}
        <div className="text-center relative z-10 -mt-[2.5rem] pb-4">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-[6.3rem] font-light text-[#363025] tracking-[0.01em] uppercase">SZOLGÁLTATÁSOK</h1>
        </div>
      </div>

      {/* Subtitle ribbon */}
      <section className="bg-[#F5F3ED] pt-12 pb-10 px-6 text-center">
        <p className="font-[family-name:var(--font-quicksand)] text-lg md:text-xl italic text-[#363025]/70 max-w-2xl mx-auto leading-relaxed">
          Minden szolgáltatásom célja, hogy a Ti napotok valóban gondtalan és felejthetetlen legyen.
        </p>
      </section>

      {/* Szolgáltatások */}
      <ServicesList />

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
