"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import AjanlatAccept from "./AjanlatAccept";

type Lang = "hu" | "en";

// ─── Translations ────────────────────────────────────────────────────────────
const T = {
  hu: {
    personalised: "Személyre szabott",
    quote: "ÁRAJÁNLAT",
    greetingEgyeb: "Köszönöm a bizalmadat!",
    greetingEskuvo: "Gratulálok az eljegyzésetekhez!",
    introEgyeb1: "Egy rendezvény megszervezése sok figyelmet, kreativitást és egyeztetést igényel. Az a célom, hogy ez a folyamat számotokra minél gördülékenyebb és örömtelibb legyen, az első konzultációtól az esemény napjáig.",
    introEgyeb2: "Fontos számomra, hogy a szervezés során pontosan azt a ritmust kövessük, amely nektek a legtermészetesebb. Lehet, hogy már most tele vagytok ötletekkel, vagy épp csak most kezditek megfogalmazni az elképzeléseiteket. Mindkét esetben az a célom, hogy átlátható és nyugodt legyen a folyamat.",
    introEgyeb3: "Szeretném, ha a közös munka során valódi bizalmi kapcsolat alakulna ki közöttünk, ahol minden kérdésetekre válasz születik, és minden döntés mögött ott van a szakmai figyelem és a tapasztalat.",
    introEskuvo1: "Az esküvőszervezés izgalmas, kreatív és érzelmekkel teli folyamat, amelynek minden lépése rólatok szól, arról, hogy biztonságban, inspiráltan és valódi támogatással élhessétek meg ezt a különleges utazást.",
    introEskuvo2: "Minden pár útja egyedi, és számomra fontos, hogy a szervezés során pontosan azt a ritmust kövessük, amely számotokra a legtermészetesebb. Lehet, hogy már most tele vagytok ötletekkel, vagy épp csak most kezditek megfogalmazni, hogyan is képzelitek ezt a napot. Mindkét esetben az a célom, hogy átlátható, nyugodt és örömteli legyen a folyamat.",
    introEskuvo3: "Szeretném, ha a közös munka során valódi bizalmi kapcsolat alakulna ki közöttünk, ahol minden kérdésetekre válasz születik, és minden döntés mögött ott van a szakmai támogatás és a figyelem. Bízom benne, hogy együtt olyan élményeket teremtünk, amelyek nemcsak a nagy napon, hanem már a készülődés hónapjaiban is örömet adnak.",
    detailsEgyeb: "Rendezvény részletei",
    detailsEskuvo: "Esküvő részletei",
    clientName: "Megrendelő neve",
    coupleName: "Pár neve",
    plannedDate: "Tervezett dátum",
    guestCount: "Létszám",
    discoverServices: "Ismerd meg a szolgáltatásaim",
    includes: "Tartalma",
    serviceFee: "Szolgáltatás díja",
    additionalInfo: "Kiegészítő információk",
    travelLabel: "Útiköltség",
    travelText: "Budapesten belül ingyenes, Budapesten kívül 180 Ft/km.",
    accomLabel: "Szállás",
    accomText: "Budapesttől 50 km-nél távolabb eső helyszín esetén 30.000 Ft/éj szállásdíjjal szükséges számolni az előre egyeztetett napokra a megrendelés és annak kivitelezhetősége függvényében.",
    validityLabel: "Érvényesség",
    validityText: (d: string) => `Az ajánlat ${d}-ig érvényes.`,
    personalNote: "Személyes megjegyzés",
    closingDesktop: <>Bízom benne, hogy ajánlatom elnyeri tetszéseteket!<br />Szeretettel várom visszajelzéseteket!</>,
    closingMobile: "Bízom benne, hogy ajánlatom elnyeri tetszéseteket! Szeretettel várom visszajelzéseteket!",
  },
  en: {
    personalised: "Personalised",
    quote: "QUOTE",
    greetingEgyeb: "Thank you for your trust!",
    greetingEskuvo: "Congratulations on your engagement!",
    introEgyeb1: "Planning an event requires attention, creativity and coordination. My goal is to make this process as smooth and enjoyable as possible for you, from the first consultation to the day of the event.",
    introEgyeb2: "It is important to me that we follow exactly the pace that feels most natural to you. Perhaps you already have plenty of ideas, or you are just starting to shape your vision. In either case, my goal is for the process to be clear and calm.",
    introEgyeb3: "I would love for our collaboration to build a genuine relationship of trust, where every question is answered and every decision is backed by professional care and experience.",
    introEskuvo1: "Wedding planning is an exciting, creative and emotionally rich process, and every step of it is about you, so you can experience this special journey with confidence, inspiration and real support.",
    introEskuvo2: "Every couple's journey is unique, and it is important to me that we follow exactly the pace that feels most natural to you. Perhaps you already have plenty of ideas, or you are just starting to imagine what this day will look like. In either case, my goal is for the process to be clear, calm and joyful.",
    introEskuvo3: "I would love for our collaboration to build a genuine relationship of trust, where every question is answered and every decision is backed by professional care and attention. I believe that together we will create experiences that bring joy not only on the big day, but throughout the months of preparation as well.",
    detailsEgyeb: "Event details",
    detailsEskuvo: "Wedding details",
    clientName: "Client name",
    coupleName: "Couple's name",
    plannedDate: "Planned date",
    guestCount: "Guest count",
    discoverServices: "Discover my services",
    includes: "Includes",
    serviceFee: "Service fee",
    additionalInfo: "Additional information",
    travelLabel: "Travel costs",
    travelText: "Free within Budapest, 180 HUF/km outside Budapest.",
    accomLabel: "Accommodation",
    accomText: "For venues more than 50 km from Budapest, accommodation of 30,000 HUF/night is required for the pre-agreed days, depending on the booking and its feasibility.",
    validityLabel: "Validity",
    validityText: (d: string) => `This quote is valid until ${d}.`,
    personalNote: "Personal note",
    closingDesktop: <>I hope my proposal meets your expectations!<br />I look forward to hearing from you!</>,
    closingMobile: "I hope my proposal meets your expectations! I look forward to hearing from you!",
  },
};

// ─── Services (HU + EN) ──────────────────────────────────────────────────────
const services = {
  hu: {
    teljes: {
      num: "01",
      title: "Teljes körű esküvőszervezés",
      image: "/images/szolgaltatas-01-teljes-koru.jpg",
      desc: "Egy esküvő megszervezése tele van izgalommal, álmodozással és rengeteg döntéssel. Olyan részletek is fontossá válnak, amikre talán elsőre nem is gondolnátok, mégis ezek adják meg azt a különleges, személyes hangulatot, amitől a nap valóban rólatok szól. Ugyanakkor a sok egyeztetés, időzítés és feladat könnyen feszültté teheti az előkészületeket. Éppen ezért jó, ha van mellettetek valaki, aki nemcsak tapasztalattal és jó ötletekkel segít, hanem végigkísér a szervezési folyamaton. Így Ti arra koncentrálhattok, ami a legfontosabb: egymásra és az élményre.",
      detailItems: [
        { title: "Ingyenes első konzultáció", desc: "Egy személyes vagy online találkozó során megismerjük egymást, és átbeszéljük az elképzeléseiteket." },
        { title: "Ajánlatadás", desc: "Az igényeitek alapján személyre szabott ajánlatot készítek." },
        { title: "Helyszínkeresés és helyszínbejárások egyeztetése", desc: "Segítek megtalálni a számotokra tökéletes helyszínt, és egyeztetem a bejárásokat." },
        { title: "Megbízható szolgáltatók ajánlása és szerződtetése", desc: "Az esküvőtök minden területére megbízható szolgáltatókat ajánlok, hogy a legjobb csapat segítse a napotokat." },
        { title: "Szolgáltatói találkozók leszervezése", desc: "A szolgáltatókkal való találkozókat leszervezem, és minden alkalommal mellettetek leszek, legyen az személyesen vagy online." },
        { title: "Koncepció és stílus kidolgozása", desc: "Segítek megtalálni a hozzátok illő színeket, tematikát és hangulatot." },
        { title: "Folyamatos kapcsolattartás", desc: "A szervezés teljes ideje alatt veletek és a szolgáltatókkal is folyamatosan tartom a kapcsolatot." },
        { title: "Költségvetés kezelése", desc: "Átlátható online táblázatban vezetem a kiadásokat és a költségeket." },
        { title: "Esküvői forgatókönyv összeállítása", desc: "Részletes menetrendet készítek, amit közösen átbeszélünk." },
        { title: "Esküvő lebonyolítása", desc: "A nagy napotok során ott vagyok a háttérben, koordinálom az előkészületeket és a szolgáltatókat, hogy minden a helyére kerüljön." },
      ],
    },
    "30nap": {
      num: "02",
      title: "30 nap a nagy napig",
      image: "/images/szolgaltatas-02-30nap.jpg",
      desc: "Az 1 hónapos esküvői koordináció tökéletes választás azoknak a pároknak, akik saját maguk szervezik az esküvőt, de a nagy napra szeretnének egy tapasztalt szakembert maguk mellé. Az esküvő előtti utolsó hónapban kapcsolódom be: segítek a részletes forgatókönyv összeállításában, egyeztetek a szolgáltatókkal és koordinálom a feladatokat. A nagy napon végig jelen vagyok a helyszínen, figyelem a menetrendet, kezelem a felmerülő helyzeteket, és gondoskodom róla, hogy minden a terveitek szerint alakuljon. Így Ti valóban megélhetitek a pillanatot, miközben én a háttérből gondoskodom a zavartalan lebonyolításról.",
      detailItems: [
        { title: "Első konzultáció", desc: "Egy személyes vagy online találkozó során megismerkedünk és átbeszéljük az esküvőtök főbb elképzeléseit." },
        { title: "Ajánlatadás", desc: "Az ajánlat elfogadása után kezdetét veszi a közös munka." },
        { title: "Helyszínbejárás", desc: "Személyesen is bejárjuk a helyszínt, ahol minden részletet egyeztetünk a gördülékeny lebonyolítás érdekében." },
        { title: "Szolgáltatókkal való kapcsolatfelvétel", desc: "Felveszem a kapcsolatot az általatok választott szolgáltatókkal, egyeztetem velük a pontos menetrendet, a technikai igényeket és az érkezési időpontokat." },
        { title: "Forgatókönyv elkészítése és átbeszélése", desc: "Összeállítom az esküvőtök teljes programtervét, majd közösen átbeszéljük, hogy minden a Ti elképzeléseitek szerint valósuljon meg." },
        { title: "Esküvő teljes koordinálása", desc: "Az esküvő napján jelen vagyok a helyszínen, figyelek az előkészületekre, segítem a szolgáltatókat, és gondoskodom róla, hogy minden a megbeszéltek szerint alakuljon." },
      ],
    },
    tanacsadas: {
      num: "03",
      title: "Esküvői tanácsadás",
      image: "/images/szolgaltatas-03-tanacsadas.jpg",
      desc: "Amennyiben saját magatok szervezitek az esküvőtöket, de bizonyos pontokon elakadtok, vagy kérdések merülnek fel a szervezési folyamat során, lehetőségetek van alkalmi tanácsadás igénybevételére. Segítséget nyújtok a szolgáltatók kiválasztásában, programok megtervezésében, eligazítalak benneteket a teendők között, és gyakorlati tippekkel támogatom az esküvőtök sikeres megvalósítását.",
      detailItems: [
        { title: "Egyéni konzultáció", desc: "Személyesen vagy online átbeszéljük, hol tartotok a szervezésben, és pontosan mely területeken van szükségetek támogatásra." },
        { title: "Checklista és idővonal áttekintése", desc: "Közösen végigmegyünk a feladatokon, hogy biztosan semmi se maradjon ki a szervezésből." },
        { title: "Szolgáltatókkal kapcsolatos kérdések", desc: "Megbeszéljük a fontos szempontokat és kérdéseket, hogy könnyebb legyen megtalálni a hozzátok illő szolgáltatókat." },
        { title: "Költségkeret optimalizálása", desc: "Segítek átlátni a kiadásokat, és priorizálni a legfontosabb tételeket." },
        { title: "Általános útmutatás és bátorítás", desc: "Támogatást és iránymutatást kaptok, hogy magabiztosan haladjatok tovább a szervezésben." },
      ],
    },
    egyeb: {
      num: "04",
      title: "Egyéb rendezvények",
      image: "/images/szolgaltatas-04-rendezveny.jpg",
      desc: "Az igazán emlékezetes pillanatok mögött mindig gondos tervezés és szeretettel végzett munka áll. Esküvők mellett örömmel vállalok születésnapok, lánybúcsúk, babavárók vagy más privát rendezvények teljes körű megszervezését is. Célom, hogy minden esemény tükrözze az egyéniségeteket és az alkalom különlegességét, miközben Ti nyugodtan megélhetitek a pillanatot. Inspiráló ötletekkel, letisztult stílussal és precíz lebonyolítással gondoskodom arról, hogy minden teljesen hozzátok passzoljon.",
      detailItems: [
        { title: "Első konzultáció", desc: "Egy kötetlen beszélgetés személyesen vagy online, ahol átbeszéljük az esemény típusát, időpontját, helyszínét és az alapelképzeléseiteket." },
        { title: "Ajánlatadás", desc: "A megbeszéltek alapján személyre szabott ajánlatot készítek." },
        { title: "Koncepciótervezés", desc: "Közösen kialakítjuk a rendezvény stílusát, tematikáját és színvilágát, valamint egyeztetjük a szükséges szolgáltatókat." },
        { title: "Szervezési szakasz", desc: "Lefoglalom a helyszínt, egyeztetek a szolgáltatókkal, és gondoskodom minden részlet összehangolásáról." },
        { title: "Forgatókönyv elkészítése és átbeszélése", desc: "Részletes menetrendet állítok össze, majd közösen átbeszéljük a zavartalan lebonyolítás érdekében." },
        { title: "Az esemény napja", desc: "Teljes körű lebonyolítást, koordinációt és háttértámogatást biztosítok, hogy a nap valóban gondtalan és emlékezetes legyen." },
      ],
    },
  },
  en: {
    teljes: {
      num: "01",
      title: "Full wedding planning",
      image: "/images/szolgaltatas-01-teljes-koru.jpg",
      desc: "Planning a wedding is full of excitement, dreaming and countless decisions. Details you may not have thought of at first become important, and it is precisely these that create the special, personal atmosphere that makes the day truly yours. At the same time, the many meetings, timelines and tasks can easily make the preparations feel stressful. That is why it helps to have someone by your side who not only brings experience and great ideas, but guides you through the whole planning journey, so you can focus on what matters most: each other and the experience.",
      detailItems: [
        { title: "Free initial consultation", desc: "We get to know each other in a personal or online meeting and discuss your vision." },
        { title: "Personalised quote", desc: "I prepare a tailored proposal based on your needs." },
        { title: "Venue search and site visits", desc: "I help you find the perfect venue and coordinate all site visits." },
        { title: "Trusted vendor recommendations and contracts", desc: "I recommend reliable vendors for every aspect of your wedding so the best team supports your day." },
        { title: "Vendor meeting coordination", desc: "I schedule all vendor meetings and am present at each one, whether in person or online." },
        { title: "Concept and style development", desc: "I help you find the colours, theme and atmosphere that truly reflect you." },
        { title: "Ongoing communication", desc: "I stay in constant contact with you and all vendors throughout the planning process." },
        { title: "Budget management", desc: "I track all expenses and costs in a clear, shared online spreadsheet." },
        { title: "Wedding timeline creation", desc: "I prepare a detailed run-of-day schedule that we review together." },
        { title: "On-the-day coordination", desc: "On your big day I work behind the scenes, coordinating preparations and vendors so everything falls into place." },
      ],
    },
    "30nap": {
      num: "02",
      title: "30 days to the big day",
      image: "/images/szolgaltatas-02-30nap.jpg",
      desc: "The 1-month wedding coordination package is the perfect choice for couples who have been planning their own wedding but would like an experienced professional by their side for the big day. I step in during the final month before the wedding: I help finalise the detailed timeline, liaise with vendors and coordinate all remaining tasks. On the day itself I am present throughout, keeping track of the schedule, managing any situations that arise, and making sure everything unfolds exactly as you planned, so you can truly live in the moment while I take care of the smooth running behind the scenes.",
      detailItems: [
        { title: "Initial consultation", desc: "We meet in person or online to get acquainted and discuss the key plans for your wedding." },
        { title: "Proposal acceptance", desc: "Once the proposal is accepted, our collaboration begins." },
        { title: "Venue walkthrough", desc: "We visit the venue together to confirm every detail for a smooth day." },
        { title: "Vendor liaison", desc: "I contact all your chosen vendors to confirm the exact schedule, technical requirements and arrival times." },
        { title: "Timeline creation and review", desc: "I put together the full run-of-day plan, then we go through it together to make sure everything matches your vision." },
        { title: "Full on-the-day coordination", desc: "I am on site throughout your wedding day, monitoring preparations, supporting vendors and ensuring everything runs as agreed." },
      ],
    },
    tanacsadas: {
      num: "03",
      title: "Wedding consultation",
      image: "/images/szolgaltatas-03-tanacsadas.jpg",
      desc: "If you are planning your own wedding but find yourself stuck at certain points, or questions come up along the way, you can take advantage of occasional consultation sessions. I offer guidance on choosing vendors, planning programmes, navigating your to-do list, and practical tips to help you bring your wedding together successfully.",
      detailItems: [
        { title: "Individual consultation", desc: "We discuss in person or online where you are in the planning and exactly where you need support." },
        { title: "Checklist and timeline review", desc: "We go through all your tasks together to make sure nothing is missed." },
        { title: "Vendor questions", desc: "We talk through the key considerations so you can find the right vendors for you." },
        { title: "Budget optimisation", desc: "I help you understand your spending and prioritise the most important items." },
        { title: "General guidance and encouragement", desc: "You receive support and direction so you can move forward with confidence." },
      ],
    },
    egyeb: {
      num: "04",
      title: "Other events",
      image: "/images/szolgaltatas-04-rendezveny.jpg",
      desc: "Behind every truly memorable moment there is careful planning and work done with love. Alongside weddings, I am happy to take on the full organisation of birthdays, hen parties, baby showers and other private events. My aim is for every event to reflect your personality and the uniqueness of the occasion, while you can simply enjoy the moment. With inspiring ideas, a refined style and precise execution, I make sure everything is perfectly tailored to you.",
      detailItems: [
        { title: "Initial consultation", desc: "A relaxed conversation in person or online where we discuss the type, date, venue and basic ideas for your event." },
        { title: "Personalised quote", desc: "I prepare a tailored proposal based on our discussion." },
        { title: "Concept planning", desc: "Together we develop the style, theme and colour palette of the event and agree on the vendors needed." },
        { title: "Planning phase", desc: "I book the venue, liaise with vendors and take care of coordinating every detail." },
        { title: "Timeline creation and review", desc: "I put together a detailed schedule, which we then go through together to ensure smooth execution." },
        { title: "On the day", desc: "I provide full on-site coordination and behind-the-scenes support to make the day truly carefree and memorable." },
      ],
    },
  },
};

// ─── ServiceBlock ─────────────────────────────────────────────────────────────
function ServiceBlock({
  svc, price, hideNum, t, lang,
}: {
  svc: typeof services.hu.teljes;
  price?: string;
  hideNum?: boolean;
  t: typeof T.hu;
  lang: Lang;
}) {
  const rowCount = svc.num === "02" ? 4 : svc.num === "03" ? 3 : Math.ceil((svc.detailItems?.length ?? 0) / 2);
  return (
    <div className="py-10 md:py-14 px-4 md:px-8 border-t border-[#363025]/8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="shrink-0 md:w-[36%]">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image src={svc.image} alt={svc.title} fill className="object-cover object-center" sizes="(max-width:768px) 100vw, 44vw" />
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            {!hideNum && (
              <p className="font-[family-name:var(--font-cormorant)] text-[#363025]/15 text-5xl md:text-6xl font-light leading-none mb-3 select-none">
                {svc.num}
              </p>
            )}
            <h3 className="font-[family-name:var(--font-cormorant)] text-[1.6rem] md:text-[1.9rem] font-light text-[#363025] leading-tight mb-5">
              {svc.title}
            </h3>
            {svc.desc && (
              <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/65 text-[15px] leading-[1.9] mb-8">
                {svc.desc}
              </p>
            )}
          </div>
        </div>

        {svc.detailItems && svc.detailItems.length > 0 && (
          <div className="mt-10 border-t border-[#363025]/10">
            <div className="py-5">
              <span className="font-[family-name:var(--font-nunito)] text-[12px] tracking-[0.4em] uppercase text-[#363025]/30">
                {t.includes}
              </span>
            </div>
            <ul
              className="pb-6 md:grid md:[grid-auto-flow:column] md:[grid-auto-columns:1fr] md:[grid-template-rows:repeat(var(--rows),auto)] gap-x-12"
              style={{ "--rows": rowCount } as React.CSSProperties}
            >
              {svc.detailItems.map((item, i) => (
                <li key={i} className="flex gap-4 py-3.5 border-b border-[#363025]/8">
                  <span className="w-px shrink-0 bg-[#363025]/20 self-stretch" />
                  <div>
                    <p className="font-[family-name:var(--font-cormorant)] text-[#363025] text-[17px] font-semibold italic leading-snug">
                      {item.title}
                    </p>
                    <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/50 text-[14px] leading-[1.9] mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            {price && (
              <div className="pt-6 border-t border-[#363025]/8 text-center">
                <p className="font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.35em] uppercase text-[#363025]/50 mb-2">{t.serviceFee}</p>
                <p className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#363025]">{price}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main client component ────────────────────────────────────────────────────
interface Proposal {
  token: string;
  couple_name: string;
  wedding_date?: string;
  guest_count?: string;
  service: string;
  price_teljes?: string;
  price_30nap?: string;
  price_tanacsadas?: string;
  price_egyeb?: string;
  custom_note?: string;
  custom_note_en?: string;
  created_at: string;
}

export default function AjanlatClient({ proposal }: { proposal: Proposal }) {
  const [lang, setLang] = useState<Lang>("hu");
  const [toggleVisible, setToggleVisible] = useState(true);
  const coverRef = useRef<HTMLElement>(null);
  const t = T[lang];
  const svc = services[lang];

  useEffect(() => {
    const el = coverRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setToggleVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isEgyeb = proposal.service === "egyeb";
  const createdDate = new Date(proposal.created_at);
  const validUntil = new Date(createdDate);
  validUntil.setDate(validUntil.getDate() + 14);
  const validUntilStr = validUntil.toLocaleDateString(lang === "hu" ? "hu-HU" : "en-GB");

  const displayGuestCount = lang === "en" && proposal.guest_count
    ? proposal.guest_count.replace(/\s*fő$/i, " guests").replace(/\s*fő\b/gi, " guests")
    : proposal.guest_count;

  const packages = isEgyeb
    ? (proposal.price_egyeb ? [{ key: "egyeb", title: svc.egyeb.title, price: proposal.price_egyeb }] : [])
    : [
        ...(proposal.price_teljes ? [{ key: "teljes", title: svc.teljes.title, price: proposal.price_teljes }] : []),
        ...(proposal.price_30nap ? [{ key: "30nap", title: svc["30nap"].title, price: proposal.price_30nap }] : []),
        ...(proposal.price_tanacsadas ? [{ key: "tanacsadas", title: svc.tanacsadas.title, price: proposal.price_tanacsadas }] : []),
      ];

  return (
    <div className="bg-[#F5F3ED] min-h-screen">

      {/* Language toggle — only visible over cover section */}
      <div
        className="fixed top-4 right-4 z-50 flex bg-white/20 backdrop-blur-sm rounded-full p-1 gap-1 shadow-sm transition-all duration-300"
        style={{ opacity: toggleVisible ? 1 : 0, pointerEvents: toggleVisible ? "auto" : "none" }}
      >
        {(["hu", "en"] as Lang[]).map(l => (
          <button key={l} onClick={() => setLang(l)}
            className="px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-200"
            style={{
              background: lang === l ? "#fff" : "transparent",
              color: lang === l ? "#363025" : "rgba(255,255,255,0.65)",
              fontFamily: "var(--font-nunito), sans-serif",
            }}>
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {/* 1. Cover */}
      <section ref={coverRef} className="min-h-screen flex flex-col items-center justify-center text-center px-8 relative overflow-hidden">
        <Image src={isEgyeb ? "/images/visszajelzes-pozsonyi-petra.jpg" : "/images/egyeb-7.jpg"} alt="" fill
          className="object-cover" style={{ objectPosition: "center 40%" }} sizes="100vw" />
        <div className="absolute inset-0 bg-[#363025]/70" />
        <div className="relative z-10 flex flex-col items-center">
          <Image src="/images/horizontal_white.svg" alt="Nicol Weddings and Events"
            width={260} height={60} className="object-contain opacity-65 mb-16" style={{ height: "auto" }} />
          <p className="font-[family-name:var(--font-nunito)] text-[13px] tracking-[0.5em] uppercase text-white/35 mb-6">
            {t.personalised}
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl lg:text-8xl font-light text-white mb-10"
            style={{ letterSpacing: "0.06em" }}>
            {t.quote}
          </h1>
          <p className="font-[family-name:var(--font-italianno)] text-3xl md:text-4xl lg:text-5xl text-white/75">
            {proposal.couple_name.replace(" & ", " &  ").replace(" and ", " and  ")}
          </p>
          {proposal.wedding_date && (
            <p className="font-[family-name:var(--font-nunito)] text-[13px] tracking-[0.3em] uppercase text-white/25 mt-5">
              {proposal.wedding_date}
            </p>
          )}
        </div>
      </section>

      {/* 2. Greeting */}
      <section className="max-w-2xl mx-auto pt-14 pb-24 px-8 text-center">
        <p className="font-[family-name:var(--font-nunito)] text-[12px] tracking-[0.4em] uppercase text-[#363025]/30 mb-8">
          {isEgyeb ? t.greetingEgyeb : t.greetingEskuvo}
        </p>
        <p className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-light text-[#363025] leading-relaxed mb-8 italic">
          {isEgyeb
            ? (lang === "hu" ? "Remélem, hogy ezt a különleges napot együtt tehetjük igazán emlékezetessé." : "I hope we can make this special occasion truly memorable together.")
            : (lang === "hu" ? "Hatalmas öröm számomra, hogy életetek egyik legszebb időszakában találkozunk." : "It is a great joy for me to be part of one of the most beautiful chapters of your lives.")}
        </p>
        <div className="w-10 h-px bg-[#363025]/15 mx-auto mb-8" />
        <div className="space-y-5">
          {isEgyeb ? (
            <>
              <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-[15px] leading-loose">{t.introEgyeb1}</p>
              <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-[15px] leading-loose">{t.introEgyeb2}</p>
              <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-[15px] leading-loose">{t.introEgyeb3}</p>
            </>
          ) : (
            <>
              <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-[15px] leading-loose">{t.introEskuvo1}</p>
              <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-[15px] leading-loose">{t.introEskuvo2}</p>
              <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-[15px] leading-loose">{t.introEskuvo3}</p>
            </>
          )}
        </div>
      </section>

      {/* 3. Event details */}
      <section className="bg-[#363025] py-16 px-8">
        <div className="max-w-sm mx-auto">
          <p className="font-[family-name:var(--font-nunito)] text-[12px] tracking-[0.4em] uppercase text-white/40 mb-10 text-center">
            {isEgyeb ? t.detailsEgyeb : t.detailsEskuvo}
          </p>
          <div className="divide-y divide-white/10">
            {[
              [isEgyeb ? t.clientName : t.coupleName, proposal.couple_name],
              ...(proposal.wedding_date ? [[t.plannedDate, proposal.wedding_date]] : []),
              ...(displayGuestCount ? [[t.guestCount, displayGuestCount]] : []),
            ].map(([label, value]) => (
              <div key={label} className="py-5">
                <span className="block font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.2em] uppercase text-white/35 mb-1">{label}</span>
                <span className="font-[family-name:var(--font-cormorant)] text-xl font-light text-white/80">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services */}
      <section className="max-w-6xl mx-auto">
        {!isEgyeb && (
          <div className="text-center pt-20 pb-4 px-8">
            <p className="font-[family-name:var(--font-nunito)] text-[12px] tracking-[0.4em] uppercase text-[#363025]/30">
              {t.discoverServices}
            </p>
          </div>
        )}
        {isEgyeb ? (
          <ServiceBlock svc={svc.egyeb} price={proposal.price_egyeb} hideNum t={t} lang={lang} />
        ) : (
          <>
            <ServiceBlock svc={svc.teljes} price={proposal.price_teljes} t={t} lang={lang} />
            <ServiceBlock svc={svc["30nap"]} price={proposal.price_30nap} t={t} lang={lang} />
            <ServiceBlock svc={svc.tanacsadas} price={proposal.price_tanacsadas} t={t} lang={lang} />
          </>
        )}
      </section>

      {/* 5. Additional info */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-2xl mx-auto">
          <p className="font-[family-name:var(--font-nunito)] text-[12px] tracking-[0.4em] uppercase text-[#363025]/30 mb-8 text-center">
            {t.additionalInfo}
          </p>
          <div className="divide-y divide-[#363025]/6">
            {[
              [t.travelLabel, t.travelText],
              [t.accomLabel, t.accomText],
              [t.validityLabel, t.validityText(validUntilStr)],
            ].map(([title, text]) => (
              <div key={title} className="py-5">
                <span className="block font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.4em] uppercase text-[#363025]/30 mb-1.5">{title}</span>
                <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-[14px] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          {(() => {
            const note = lang === "en"
              ? (proposal.custom_note_en || null)
              : (proposal.custom_note || null);
            return note ? (
              <div className="mt-8 border-l-2 border-[#363025]/15 pl-6 py-2">
                <p className="font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.4em] uppercase text-[#363025]/30 mb-2">{t.personalNote}</p>
                <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/65 text-[14px] leading-relaxed italic">{note}</p>
              </div>
            ) : null;
          })()}
        </div>
      </section>

      {/* 6. Acceptance */}
      <AjanlatAccept token={proposal.token} coupleName={proposal.couple_name} packages={packages} lang={lang} />

      {/* 7. Closing */}
      <section className="bg-[#363025] pt-12 pb-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-12 items-stretch">
          <div className="shrink-0 md:w-[26%]">
            <div className="md:hidden relative w-full overflow-hidden" style={{ height: "600px" }}>
              <Image src="/images/R%C3%B3lam%20f%C5%91oldal.jpg" alt="Gőz-Csongrádi Nicol" fill
                className="object-cover" style={{ objectPosition: "50% 10%" }} sizes="100vw" />
            </div>
            <div className="hidden md:block relative w-full overflow-hidden" style={{ height: "480px" }}>
              <Image src="/images/R%C3%B3lam%20f%C5%91oldal.jpg" alt="Gőz-Csongrádi Nicol" fill
                className="object-cover object-bottom" sizes="26vw" />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center py-4 md:py-8">
            <Image src="/images/horizontal_white.svg" alt="Nicol Weddings and Events"
              width={130} height={40} className="object-contain opacity-55 mb-6" style={{ height: "auto" }} />
            <p className="hidden md:block font-[family-name:var(--font-cormorant)] text-xl md:text-2xl font-light text-white/75 italic mb-6 leading-relaxed">
              {t.closingDesktop}
            </p>
            <p className="md:hidden font-[family-name:var(--font-cormorant)] text-xl font-light text-white/75 italic mb-6 leading-relaxed">
              {t.closingMobile}
            </p>
            <p className="font-[family-name:var(--font-italianno)] text-3xl text-white/50 mb-3 mt-4">Gőz-Csongrádi Nicol</p>
            <div className="space-y-2 mb-3">
              {[
                ["nicol.weddings@gmail.com", "mailto:nicol.weddings@gmail.com"],
                ["+36 30 544 4676", "tel:+36305444676"],
                ["nicolweddings.hu", "https://nicolweddings.hu"],
              ].map(([label, href]) => (
                <a key={label} href={href}
                  className="block font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.2em] text-white/35 hover:text-white/65 transition-colors">
                  {label}
                </a>
              ))}
            </div>
            <div className="flex gap-5 items-center">
              <a href="https://instagram.com/nicolweddings" target="_blank" rel="noopener noreferrer"
                className="text-white/30 hover:text-white/70 transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="https://facebook.com/nicolweddings" target="_blank" rel="noopener noreferrer"
                className="text-white/30 hover:text-white/70 transition-colors" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://tiktok.com/@nicolweddings" target="_blank" rel="noopener noreferrer"
                className="text-white/30 hover:text-white/70 transition-colors" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
