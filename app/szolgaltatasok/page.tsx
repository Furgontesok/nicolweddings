"use client";

import NavbarSimple from "../components/NavbarSimple";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState, Fragment } from "react";

const heroImages = [
  "/images/szolgaltatasok-header-4.jpg",   // SZEMÉLY F-F  ← első
  "/images/proba/H88A3995-3.jpg",          // DEKOR  szín
  "/images/proba/H88A4720.jpg",            // SZEMÉLY szín
  "/images/szolgaltatasok-header-8.jpg",   // DEKOR  szín
  "/images/proba/H88A4451copy.jpg",        // SZEMÉLY F-F
  "/images/szolgaltatasok-header-2.jpg",   // DEKOR  szín
  "/images/szolgaltatasok-header-7.jpg",   // SZEMÉLY szín
  "/images/proba/H88A4819.jpg",            // SZEMÉLY szín
  "/images/szolgaltatasok-header-3.jpg",   // SZEMÉLY szín
  "/images/szolgaltatasok-header-1.jpg",   // DEKOR  szín
  "/images/szolgaltatasok-header-5.jpg",   // SZEMÉLY szín
  "/images/szolgaltatasok-header-6.jpg",   // DEKOR  szín
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
      "Megbízható szolgáltatók ajánlása és szerződtetése — Az esküvőtök minden területére megbízható szolgáltatókat ajánlok, hogy a legjobb csapat segítse a napotokat.",
      "Szolgáltatói találkozók leszervezése — A szolgáltatókkal való találkozókat leszervezem, és minden alkalommal mellettetek leszek, legyen az személyesen vagy online.",
      "Koncepció és stílus kidolgozása — Segítek megtalálni a hozzátok illő színeket, tematikát és hangulatot.",
      "Folyamatos kapcsolattartás — A szervezés teljes ideje alatt veletek és a szolgáltatókkal is folyamatosan tartom a kapcsolatot.",
      "Költségvetés kezelése — Átlátható online táblázatban vezetem a kiadásokat és a költségeket.",
      "Esküvői forgatókönyv összeállítása — Részletes menetrendet készítek, amit közösen átbeszélünk.",
      "Esküvő lebonyolítása — A nagy napotok során ott vagyok a háttérben, koordinálom az előkészületeket és a szolgáltatókat, hogy minden a helyére kerüljön.",
    ],
    image: "/images/szolgaltatas-01-teljes-koru.jpg",
  },
  {
    num: "02",
    title: "30 nap a nagy napig",
    desc: "Az 1 hónapos esküvői koordináció tökéletes választás azoknak a pároknak, akik saját maguk szervezik az esküvőt, de a nagy napra szeretnének egy tapasztalt szakembert maguk mellé. Az esküvő előtti utolsó hónapban kapcsolódom be: segítek a részletes forgatókönyv összeállításában, egyeztetek a szolgáltatókkal és koordinálom a feladatokat. ||A nagy napon végig jelen vagyok a helyszínen, figyelem a menetrendet, kezelem a felmerülő helyzeteket, és gondoskodom róla, hogy minden a terveitek szerint alakuljon. Így Ti valóban megélhetitek a pillanatot, miközben én a háttérből gondoskodom a zavartalan lebonyolításról.",
    items: [
      "Első konzultáció — Egy személyes vagy online találkozó során megismerkedünk és átbeszéljük az esküvőtök főbb elképzeléseit.",
      "Ajánlatadás — Az ajánlat elfogadása után kezdetét veszi a közös munka.",
      "Helyszínbejárás — Személyesen is bejárjuk a helyszínt, ahol minden részletet egyeztetünk a gördülékeny lebonyolítás érdekében.",
      "Szolgáltatókkal való kapcsolatfelvétel — Felveszem a kapcsolatot az általatok választott szolgáltatókkal, egyeztetem velük a pontos menetrendet, a technikai igényeket és az érkezési időpontokat.",
      "Forgatókönyv elkészítése és átbeszélése — Összeállítom az esküvőtök teljes programtervét, majd közösen átbeszéljük, hogy minden a Ti elképzeléseitek szerint valósuljon meg.",
      "Esküvő teljes koordinálása — Az esküvő napján jelen vagyok a helyszínen, figyelek az előkészületekre, segítem a szolgáltatókat, és gondoskodom róla, hogy minden a megbeszéltek szerint alakuljon.",
    ],
    image: "/images/szolgaltatas-02-30nap.jpg",
  },
  {
    num: "03",
    title: "Esküvői tanácsadás",
    desc: "Amennyiben saját magatok szervezitek az esküvőtöket, de bizonyos pontokon elakadtok, vagy kérdések merülnek fel a szervezési folyamat során, lehetőségetek van alkalmi tanácsadás igénybevételére. Segítséget nyújtok a szolgáltatók kiválasztásában, programok megtervezésében, eligazítalak benneteket a teendők között, és gyakorlati tippekkel támogatom az esküvőtök sikeres megvalósítását.",
    items: [
      "Egyéni konzultáció — Személyesen vagy online átbeszéljük, hol tartotok a szervezésben, és pontosan mely területeken van szükségetek támogatásra.",
      "Checklista és idővonal áttekintése — Közösen végigmegyünk a feladatokon, hogy biztosan semmi se maradjon ki a szervezésből.",
      "Szolgáltatókkal kapcsolatos kérdések — Megbeszéljük a fontos szempontokat és kérdéseket, hogy könnyebb legyen megtalálni a hozzátok illő szolgáltatókat.",
      "Költségkeret optimalizálása — Segítek átlátni a kiadásokat, és priorizálni a legfontosabb tételeket.",
      "Általános útmutatás és bátorítás — Támogatást és iránymutatást kaptok, hogy magabiztosan haladjatok tovább a szervezésben.",
    ],
    image: "/images/szolgaltatas-03-tanacsadas.jpg",
  },
  {
    num: "04",
    title: "Egyéb rendezvények",
    desc: "Az igazán emlékezetes pillanatok mögött mindig gondos tervezés és szeretettel végzett munka áll. Esküvők mellett örömmel vállalok születésnapok, lánybúcsúk, babavárók vagy más privát rendezvények teljes körű megszervezését is. Célom, hogy minden esemény tükrözze az egyéniségeteket és az alkalom különlegességét, miközben Ti nyugodtan megélhetitek a pillanatot. Inspiráló ötletekkel, letisztult stílussal és precíz lebonyolítással gondoskodom arról, hogy minden teljesen hozzátok passzoljon.",
    items: [
      "Első konzultáció — Egy kötetlen beszélgetés személyesen vagy online, ahol átbeszéljük az esemény típusát, időpontját, helyszínét és az elképzeléseiteket.",
      "Ajánlatadás — A megbeszéltek alapján személyre szabott ajánlatot készítek.",
      "Koncepciótervezés — Közösen kialakítjuk a rendezvény stílusát, tematikáját és színvilágát, valamint egyeztetjük a szükséges szolgáltatókat.",
      "Szervezési szakasz — Lefoglalom a helyszínt, egyeztetek a szolgáltatókkal, és gondoskodom minden részlet összehangolásáról.",
      "Forgatókönyv elkészítése és átbeszélése — Részletes menetrendet állítok össze, majd közösen átbeszéljük a zavartalan lebonyolítás érdekében.",
      "Az esemény napja — Teljes körű lebonyolítást, koordinációt és háttértámogatást biztosítok, hogy a nap valóban gondtalan és emlékezetes legyen.",
    ],
    image: "/images/szolgaltatas-04-rendezveny.jpg",
  },
];

const faqs = [
  {
    q: "Miben tud segíteni egy esküvőszervező?",
    a: "Esküvőszervezőként az első ötlettől a nagy nap utolsó pillanatáig mellettetek vagyok. Segítek az elképzelések megvalósításában, a költségvetés megtervezésében, a szolgáltatók kiválasztásában, és a helyszínen mindent kézben tartok. Nektek csak annyi a dolgotok, hogy megéljétek a nap varázsát.",
  },
  {
    q: "Mennyi idővel az esküvő előtt érdemes felkérni?",
    a: "Egy esküvő megszervezésére általában 12 hónap elegendő, a nagyobb népszerűségnek örvendő helyszíneknél azonban már 18 hónappal korábban is célszerű elkezdeni a foglalást. Rövidebb határidő mellett is megvalósítható a nagy nap, de a korai kezdés nagyobb nyugalmat és több választási lehetőséget ad.",
  },
  {
    q: "Miért érdemes esküvőszervezőt felkérni?",
    a: "Egy esküvő megszervezése rengeteg időt, energiát és utánajárást igényel. Szervezőként leveszem a vállatokról a terhet, hogy ne a stressz, hanem a boldog készülődés határozza meg ezt az időszakot. Célom, hogy ne csupán egy szépen megszervezett napotok legyen, hanem egy örök emlék, amely mindig mosolyt csal az arcotokra.",
  },
  {
    q: "Vállalsz részleges szervezést is, vagy csak teljes körűt?",
    a: "Rugalmasan alkalmazkodom az igényeitekhez, lehet szó teljes szervezésről, vagy akár csak a nagy nap koordinációjáról. Mindenben számíthattok rám.",
  },
  {
    q: "Hogyan történik a közös munka?",
    a: "Az első, díjmentes konzultáción megismerem a történeteteket és elképzeléseiteket. Ezt követően készítek egy személyre szabott ajánlatot, és ha elfogadjátok, kezdetét veszi a közös munka. Lépésről lépésre haladunk, amíg minden részlet a helyére kerül, hogy a nagy nap pontosan olyan legyen, amilyennek megálmodtátok.",
  },
  {
    q: "Segítesz szolgáltatók kiválasztásában is?",
    a: "Ez a munkám egyik legfontosabb része. Olyan szolgáltatókat ajánlok Nektek, akikről tudom, hogy szívvel-lélekkel dolgoznak, és gördülékennyé teszik az esküvőtöket. A végső döntés mindig a Tiétek.",
  },
  {
    q: "Hogyan alakul a díjazásod?",
    a: "A díjazás mindig személyre szabott, az elképzeléseitektől és a szervezés részleteitől függ. Az első konzultáció után készítek egy átlátható ajánlatot, így pontosan tudjátok majd, mire számíthattok.",
  },
  {
    q: "Mi történik, ha már van lefoglalt szolgáltatóm?",
    a: "Ez természetesen nem probléma, szívesen dolgozom együtt az általatok választott szolgáltatókkal. Fontos azonban tudnotok, hogy ha korábban nem dolgoztam velük, teljes felelősséget nem tudok vállalni a munkájukért, ugyanakkor mindent megteszek, hogy a közös munka zökkenőmentes legyen.",
  },
  {
    q: "Vállalsz más eseményeket is az esküvők mellett?",
    a: "Az esküvők mellett örömmel szervezek születésnapokat, lánybúcsúkat, lánykéréseket vagy babaváró ünnepségeket, hogy még szebbé tegyük ezeket a különleges alkalmakat.",
  },
];

function ServiceItem({ s, i }: { s: typeof services[0]; i: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id={`service-${s.num}`} className="border-t border-[#D6D6C9]">
      <div className="py-8 flex flex-col md:flex-row gap-4 md:gap-12">

        {/* Bal: álló kép + szám */}
        <div className="shrink-0 md:w-[40%]">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image
              src={s.image}
              alt={s.title}
              fill
              className="object-cover object-center"
              sizes="40vw"
            />
          </div>
        </div>

        {/* Jobb: szám + cím + leírás */}
        <div className="flex-1 flex flex-col">
          <p className="font-[family-name:var(--font-cormorant)] text-[#363025]/20 text-6xl font-light leading-none mb-2 select-none">
            {s.num}
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#363025] leading-tight mb-8">
            {s.title}
          </h2>
          <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/65 text-[15px] leading-[1.9] whitespace-pre-line">
            {s.desc.split("||").map((part, i) => i === 0 ? part : <Fragment key={i}><br className="md:hidden" />{part}</Fragment>)}
          </p>
          <div className="flex justify-end mt-8">
            <a
              href="/kapcsolat"
              className="group/btn2 relative inline-flex items-center border border-[#363025]/40 text-[#363025] font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.25em] uppercase px-12 py-4 overflow-hidden hover:border-[#363025] transition-colors duration-300"
            >
              <span className="absolute inset-0 bg-[#363025] translate-y-full group-hover/btn2:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative z-10 group-hover/btn2:text-white transition-colors duration-300">Árajánlat kérése</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sor: "Tartalma:" — klikk nyitja az accordiont */}
      <div className="border-t border-[#D6D6C9]">
        <div className="flex items-center py-5">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group/tartalma flex items-center gap-3 cursor-pointer"
          >
            <span className="font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.35em] uppercase text-[#363025]/50 group-hover/tartalma:text-[#363025] transition-colors duration-200">
              Tartalma
            </span>
            <span
              className="text-[#363025]/50 text-lg font-light leading-none group-hover/tartalma:text-[#363025] transition-all duration-300"
              style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block" }}
            >
              +
            </span>
          </button>
        </div>

        {/* Accordion tartalom */}
        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{ maxHeight: isOpen ? "3000px" : "0px", opacity: isOpen ? 1 : 0 }}
        >
          <ul className="pb-6 md:columns-2 gap-x-12">
            {s.items.map((item, j) => {
              const parts = item.split(" — ");
              const keyword = parts[0];
              const rest = parts.slice(1).join(" — ");
              return (
                <li
                  key={j}
                  className="flex gap-4 py-3.5 border-b border-[#D6D6C9]/40 break-inside-avoid"
                  style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "translateY(0)" : "translateY(8px)",
                    transitionProperty: "opacity, transform",
                    transitionDuration: "0.35s",
                    transitionTimingFunction: "ease",
                    transitionDelay: isOpen ? `${j * 40}ms` : "0ms",
                  }}
                >
                  <span className="w-px shrink-0 bg-[#363025]/20 self-stretch" />
                  <div>
                    <p className="font-[family-name:var(--font-cormorant)] text-[#363025] text-[17px] font-semibold italic leading-snug">
                      {keyword}
                    </p>
                    {rest && (
                      <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/50 text-[15px] leading-[1.9] mt-0.5">
                        {rest}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ServicesList() {
  return (
    <section className="bg-[#F5F3ED] pt-4 pb-8 px-6">
      <div className="max-w-5xl mx-auto">
        {services.map((s, i) => (
          <ServiceItem key={i} s={s} i={i} />
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
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-336vw); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-336vw); }
          to   { transform: translateX(0); }
        }
        @keyframes marquee-left-mobile {
          from { transform: translateX(0); }
          to   { transform: translateX(-660vw); }
        }
        @keyframes marquee-right-mobile {
          from { transform: translateX(-660vw); }
          to   { transform: translateX(0); }
        }
        .hero-row-1 { animation: marquee-left 82s linear infinite; }
        .hero-row-2 { animation: marquee-right 82s linear infinite; }
        @media (max-width: 767px) {
          .hero-row-1 { animation: marquee-left-mobile 91s linear infinite; }
          .hero-row-2 { animation: marquee-right-mobile 91s linear infinite; }
          .hero-img-wrap { width: 55vw !important; }
        }
      `}</style>

      <div className="pt-16 bg-[#F5F3ED]">
        {/* Képsáv — desktop: 1 sor, mobil: 2 sor */}
        <div className="relative overflow-hidden">
          {/* Desktop: 1 sor */}
          <div className="hidden md:block" style={{ height: "55vh", minHeight: 360 }}>
            <div className="hero-row-1 flex h-full">
              {[...heroImages, ...heroImages].map((src, i) => (
                <div key={i} className="relative h-full flex-shrink-0" style={{ width: "28vw" }}>
                  <Image src={src} alt="Esküvői szervezés és koordináció — Nicol Weddings" fill className="object-cover object-center" sizes="28vw" priority={i < 4} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobil: 1 sor */}
          <div className="md:hidden" style={{ height: "35vh", minHeight: 200 }}>
            <div className="hero-row-1 flex h-full">
              {[...heroImages, ...heroImages].map((src, i) => (
                <div key={i} className="hero-img-wrap relative flex-shrink-0 h-full" style={{ width: "55vw" }}>
                  <Image src={src} alt="Esküvői szervezés és koordináció — Nicol Weddings" fill className="object-cover object-center" sizes="55vw" priority={i < 4} />
                </div>
              ))}
            </div>
          </div>

          {/* Gradient */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
            style={{ height: "28%", background: "linear-gradient(to bottom, transparent, #F5F3ED)" }}
          />
        </div>

        {/* Felirat — a gradient zónában */}
        <div className="text-center relative z-10 -mt-[2rem] md:-mt-[5rem] pb-4">
          <h1 className="font-[family-name:var(--font-cormorant)] text-[2.5rem] md:text-[6.3rem] font-light text-[#363025] tracking-[0.01em] uppercase">SZOLGÁLTATÁSOK</h1>
        </div>
      </div>

      {/* Subtitle ribbon */}
      <section className="bg-[#F5F3ED] -mt-3 pt-4 md:pt-0 pb-4 px-6 text-center">
        <p className="font-[family-name:var(--font-quicksand)] text-[13px] md:text-[15px] text-[#363025]/65 max-w-2xl mx-auto leading-[1.9]">
          Minden szolgáltatásom célja, hogy a Ti napotok valóban gondtalan és felejthetetlen legyen.
        </p>
      </section>

      {/* Szolgáltatások */}
      <ServicesList />

      {/* GYIK */}
      <section className="bg-[#363025] pt-12 pb-14 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-[family-name:var(--font-nunito)] text-xs tracking-[0.3em] uppercase text-white/35 mb-3">
              Gyakran ismételt kérdések
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-white tracking-wide">
              Van kérdésed?
            </h2>
            <div className="w-12 h-px bg-white/20 mx-auto mt-6" />
            <p className="font-[family-name:var(--font-quicksand)] text-white/50 text-[15px] mt-6">
              Összegyűjtöttem a leggyakrabban feltett kérdéseket. Ha nem találod köztük a választ, írj nekem bátran.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {faqs.map((faq, i) => (
              <div key={i} className="border-t border-white/10 pt-8">
                <h3 className="font-[family-name:var(--font-cormorant)] text-[19px] font-light text-white mb-4 leading-snug">
                  {faq.q}
                </h3>
                <p className="font-[family-name:var(--font-quicksand)] text-white/45 text-[15px] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="/kapcsolat"
              className="inline-block border border-white/60 text-white font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.25em] uppercase px-12 py-4 hover:bg-white hover:text-[#363025] transition-all duration-300"
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
