import { notFound } from "next/navigation";
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";
import AjanlatAccept from "./AjanlatAccept";

const services = {
  teljes: {
    num: "01",
    title: "Teljes körű esküvőszervezés",
    tagline: "",
    image: "/images/szolgaltatas-01-teljes-koru.jpg",
    desc: "Egy esküvő megszervezése tele van izgalommal, álmodozással és rengeteg döntéssel. Olyan részletek is fontossá válnak, amikre talán elsőre nem is gondolnátok, mégis ezek adják meg azt a különleges, személyes hangulatot, amitől a nap valóban rólatok szól. Ugyanakkor a sok egyeztetés, időzítés és feladat könnyen feszültté teheti az előkészületeket. Éppen ezért jó, ha van mellettetek valaki, aki nemcsak tapasztalattal és jó ötletekkel segít, hanem végigkísér a szervezési folyamaton. Így Ti arra koncentrálhattok, ami a legfontosabb: egymásra és az élményre.",
    items: [] as string[],
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
    tagline: "",
    image: "/images/szolgaltatas-02-30nap.jpg",
    desc: "Az 1 hónapos esküvői koordináció tökéletes választás azoknak a pároknak, akik saját maguk szervezik az esküvőt, de a nagy napra szeretnének egy tapasztalt szakembert maguk mellé. Az esküvő előtti utolsó hónapban kapcsolódom be: segítek a részletes forgatókönyv összeállításában, egyeztetek a szolgáltatókkal és koordinálom a feladatokat. A nagy napon végig jelen vagyok a helyszínen, figyelem a menetrendet, kezelem a felmerülő helyzeteket, és gondoskodom róla, hogy minden a terveitek szerint alakuljon. Így Ti valóban megélhetitek a pillanatot, miközben én a háttérből gondoskodom a zavartalan lebonyolításról.",
    note: "",
    items: [] as string[],
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
    tagline: "",
    image: "/images/szolgaltatas-03-tanacsadas.jpg",
    desc: "Amennyiben saját magatok szervezitek az esküvőtöket, de bizonyos pontokon elakadtok, vagy kérdések merülnek fel a szervezési folyamat során, lehetőségetek van alkalmi tanácsadás igénybevételére. Segítséget nyújtok a szolgáltatók kiválasztásában, programok megtervezésében, eligazítalak benneteket a teendők között, és gyakorlati tippekkel támogatom az esküvőtök sikeres megvalósítását.",
    note: "",
    items: [] as string[],
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
    tagline: "",
    image: "/images/szolgaltatas-04-rendezveny.jpg",
    desc: "Az igazán emlékezetes pillanatok mögött mindig gondos tervezés és szeretettel végzett munka áll. Esküvők mellett örömmel vállalok születésnapok, lánybúcsúk, babavárók vagy más privát rendezvények teljes körű megszervezését is. Célom, hogy minden esemény tükrözze az egyéniségeteket és az alkalom különlegességét, miközben Ti nyugodtan megélhetitek a pillanatot. Inspiráló ötletekkel, letisztult stílussal és precíz lebonyolítással gondoskodom arról, hogy minden teljesen hozzátok passzoljon.",
    note: "",
    items: [] as string[],
    detailItems: [
      { title: "Első konzultáció", desc: "Egy kötetlen beszélgetés személyesen vagy online, ahol átbeszéljük az esemény típusát, időpontját, helyszínét és az alapelképzeléseiteket." },
      { title: "Ajánlatadás", desc: "A megbeszéltek alapján személyre szabott ajánlatot készítek." },
      { title: "Koncepciótervezés", desc: "Közösen kialakítjuk a rendezvény stílusát, tematikáját és színvilágát, valamint egyeztetjük a szükséges szolgáltatókat." },
      { title: "Szervezési szakasz", desc: "Lefoglalom a helyszínt, egyeztetek a szolgáltatókkal, és gondoskodom minden részlet összehangolásáról." },
      { title: "Forgatókönyv elkészítése és átbeszélése", desc: "Részletes menetrendet állítok össze, majd közösen átbeszéljük a zavartalan lebonyolítás érdekében." },
      { title: "Az esemény napja", desc: "Teljes körű lebonyolítást, koordinációt és háttértámogatást biztosítok, hogy a nap valóban gondtalan és emlékezetes legyen." },
    ],
  },
};

async function getProposal(token: string) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  const sb = createClient(url, key);
  const { data } = await sb.from("proposals").select("*").eq("token", token).single();
  return data;
}

function ServiceBlock({ svc, price, hideNum }: { svc: typeof services.teljes & { note?: string; desc?: string; detailItems?: { title: string; desc: string }[] }; price?: string; hideNum?: boolean }) {
  return (
    <div className="py-10 md:py-14 px-4 md:px-8 border-t border-[#363025]/8">
      <div className="max-w-6xl mx-auto">

        {/* Felső sor: kép + szöveg */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Bal: álló kép */}
          <div className="shrink-0 md:w-[36%]">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image src={svc.image} alt={svc.title} fill className="object-cover object-center" sizes="(max-width:768px) 100vw, 44vw" />
            </div>
          </div>

          {/* Jobb: szám + cím + leírás + ár (ha nincs detailItems) */}
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
            {!svc.detailItems && svc.items.length > 0 && (
              <div className="space-y-2.5 mb-8">
                {svc.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="font-[family-name:var(--font-cormorant)] text-[#363025]/20 text-lg mt-0.5 shrink-0">◇</span>
                    <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/65 text-[14px] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            )}
            {!svc.detailItems && price && (
              <div className="mt-auto pt-6 border-t border-[#363025]/8">
                <p className="font-[family-name:var(--font-nunito)] text-[12px] tracking-[0.4em] uppercase text-[#363025]/30 mb-2">Szolgáltatás díja</p>
                <p className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#363025]">{price}</p>
              </div>
            )}
          </div>
        </div>

        {/* Tartalma szekció — teljes szélesség, 2 oszlop */}
        {svc.detailItems && svc.detailItems.length > 0 && (
          <div className="mt-10 border-t border-[#363025]/10">
            <div className="py-5">
              <span className="font-[family-name:var(--font-nunito)] text-[12px] tracking-[0.4em] uppercase text-[#363025]/30">
                Tartalma
              </span>
            </div>
            <ul className="grid md:grid-cols-2 gap-x-12 pb-6">
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
                <p className="font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.35em] uppercase text-[#363025]/50 mb-2">Szolgáltatás díja</p>
                <p className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#363025]">{price}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default async function AjanlatPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const p = await getProposal(token);
  if (!p) notFound();

  const isEgyeb = p.service === "egyeb";
  const createdDate = new Date(p.created_at);
  const validUntil = new Date(createdDate);
  validUntil.setDate(validUntil.getDate() + 14);

  return (
    <div className="bg-[#F5F3ED] min-h-screen">

      {/* 1. Borítólap */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-8 relative overflow-hidden">
        <Image src="/images/visszajelzes-pozsonyi-petra.jpg" alt="" fill
          className="object-cover" style={{ objectPosition: "center 40%" }} sizes="100vw" />
        <div className="absolute inset-0 bg-[#363025]/70" />
        <div className="relative z-10 flex flex-col items-center">
          <Image src="/images/horizontal_white.svg" alt="Nicol Weddings and Events"
            width={260} height={60} className="object-contain opacity-65 mb-16" style={{ height: "auto" }} />
          <p className="font-[family-name:var(--font-nunito)] text-[13px] tracking-[0.5em] uppercase text-white/35 mb-6">
            Személyre szabott
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl lg:text-8xl font-light text-white mb-10"
            style={{ letterSpacing: "0.06em" }}>
            ÁRAJÁNLAT
          </h1>
          <p className="font-[family-name:var(--font-italianno)] text-3xl md:text-4xl lg:text-5xl text-white/75">
            {p.couple_name.replace(" & ", " &  ").replace(" and ", " and  ")}
          </p>
          {p.wedding_date && (
            <p className="font-[family-name:var(--font-nunito)] text-[13px] tracking-[0.3em] uppercase text-white/25 mt-5">
              {p.wedding_date}
            </p>
          )}
        </div>
      </section>

      {/* 2. Üdvözlő */}
      <section className="max-w-2xl mx-auto pt-14 pb-24 px-8 text-center">
        <p className="font-[family-name:var(--font-nunito)] text-[12px] tracking-[0.4em] uppercase text-[#363025]/30 mb-8">
          {isEgyeb ? "Köszönöm a bizalmadat!" : "Gratulálok az eljegyzésetekhez!"}
        </p>
        <p className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-light text-[#363025] leading-relaxed mb-8 italic">
          {isEgyeb
            ? "Remélem, hogy ezt a különleges napot együtt tehetjük igazán emlékezetessé."
            : "Hatalmas öröm számomra, hogy életetek egyik legszebb időszakában találkozunk."}
        </p>
        <div className="w-10 h-px bg-[#363025]/15 mx-auto mb-8" />
        <div className="space-y-5">
          {isEgyeb ? (
            <>
              <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-[15px] leading-loose">
                Egy rendezvény megszervezése sok figyelmet, kreativitást és egyeztetést igényel. Az a célom, hogy ez a folyamat számotokra minél gördülékenyebb és örömtelibb legyen, az első konzultációtól az esemény napjáig.
              </p>
              <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-[15px] leading-loose">
                Fontos számomra, hogy a szervezés során pontosan azt a ritmust kövessük, amely nektek a legtermészetesebb. Lehet, hogy már most tele vagytok ötletekkel, vagy épp csak most kezditek megfogalmazni az elképzeléseiteket. Mindkét esetben az a célom, hogy átlátható és nyugodt legyen a folyamat.
              </p>
              <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-[15px] leading-loose">
                Szeretném, ha a közös munka során valódi bizalmi kapcsolat alakulna ki közöttünk, ahol minden kérdésetekre válasz születik, és minden döntés mögött ott van a szakmai figyelem és a tapasztalat.
              </p>
            </>
          ) : (
            <>
              <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-[15px] leading-loose">
                Az esküvőszervezés izgalmas, kreatív és érzelmekkel teli folyamat, amelynek minden lépése rólatok szól, arról, hogy biztonságban, inspiráltan és valódi támogatással élhessétek meg ezt a különleges utazást.
              </p>
              <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-[15px] leading-loose">
                Minden pár útja egyedi, és számomra fontos, hogy a szervezés során pontosan azt a ritmust kövessük, amely számotokra a legtermészetesebb. Lehet, hogy már most tele vagytok ötletekkel, vagy épp csak most kezditek megfogalmazni, hogyan is képzelitek ezt a napot. Mindkét esetben az a célom, hogy átlátható, nyugodt és örömteli legyen a folyamat.
              </p>
              <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-[15px] leading-loose">
                Szeretném, ha a közös munka során valódi bizalmi kapcsolat alakulna ki közöttünk, ahol minden kérdésetekre válasz születik, és minden döntés mögött ott van a szakmai támogatás és a figyelem. Bízom benne, hogy együtt olyan élményeket teremtünk, amelyek nemcsak a nagy napon, hanem már a készülődés hónapjaiban is örömet adnak.
              </p>
            </>
          )}
        </div>
      </section>

      {/* 3. Esemény adatai */}
      <section className="bg-[#363025] py-16 px-8">
        <div className="max-w-sm mx-auto">
          <p className="font-[family-name:var(--font-nunito)] text-[12px] tracking-[0.4em] uppercase text-white/40 mb-10 text-center">
            {isEgyeb ? "Rendezvény részletei" : "Esküvő részletei"}
          </p>
          <div className="divide-y divide-white/10">
            {[
              [isEgyeb ? "Megrendelő neve" : "Pár neve", p.couple_name],
              ...(p.wedding_date ? [["Tervezett dátum", p.wedding_date]] : []),
              ...(p.guest_count ? [["Létszám", p.guest_count]] : []),
            ].map(([label, value]) => (
              <div key={label} className="py-5">
                <span className="block font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.2em] uppercase text-white/35 mb-1">{label}</span>
                <span className="font-[family-name:var(--font-cormorant)] text-xl font-light text-white/80">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Szolgáltatások */}
      <section className="max-w-6xl mx-auto">
        {!isEgyeb && (
          <div className="text-center pt-20 pb-4 px-8">
            <p className="font-[family-name:var(--font-nunito)] text-[12px] tracking-[0.4em] uppercase text-[#363025]/30">
              Ismerd meg a szolgáltatásaim
            </p>
          </div>
        )}

        {isEgyeb ? (
          <ServiceBlock svc={services.egyeb} price={p.price_egyeb} hideNum />
        ) : (
          <>
            <ServiceBlock svc={services.teljes} price={p.price_teljes} />
            <ServiceBlock svc={services["30nap"]} price={p.price_30nap} />
            <ServiceBlock svc={services.tanacsadas} price={p.price_tanacsadas} />
          </>
        )}
      </section>

      {/* 5. Kiegészítő infók */}
      <section className="bg-white py-20 px-8">
        <div className="max-w-2xl mx-auto">
          <p className="font-[family-name:var(--font-nunito)] text-[12px] tracking-[0.4em] uppercase text-[#363025]/30 mb-8 text-center">
            Kiegészítő információk
          </p>
          <div className="divide-y divide-[#363025]/6">
            {[
              ["Útiköltség", "Budapesten belül ingyenes, Budapesten kívül 180 Ft/km."],
              ["Szállás", "Budapesttől 50 km-nél távolabb eső helyszín esetén 30.000 Ft/éj szállásdíjjal szükséges számolni az előre egyeztetett napokra a megrendelés és annak kivitelezhetősége függvényében."],
              ["Érvényesség", `Az ajánlat ${validUntil.toLocaleDateString("hu-HU")}-ig érvényes.`],
            ].map(([title, text]) => (
              <div key={title} className="py-5">
                <span className="block font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.4em] uppercase text-[#363025]/30 mb-1.5">{title}</span>
                <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-[14px] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {p.custom_note && (
            <div className="mt-8 border-l-2 border-[#363025]/15 pl-6 py-2">
              <p className="font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.4em] uppercase text-[#363025]/30 mb-2">Személyes megjegyzés</p>
              <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/65 text-[14px] leading-relaxed italic">{p.custom_note}</p>
            </div>
          )}
        </div>
      </section>

      {/* 6. Elfogadás */}
      <AjanlatAccept
        token={token}
        packages={
          isEgyeb
            ? (p.price_egyeb ? [{ key: "egyeb", title: services.egyeb.title, price: p.price_egyeb }] : [])
            : [
                ...(p.price_teljes ? [{ key: "teljes", title: services.teljes.title, price: p.price_teljes }] : []),
                ...(p.price_30nap ? [{ key: "30nap", title: services["30nap"].title, price: p.price_30nap }] : []),
                ...(p.price_tanacsadas ? [{ key: "tanacsadas", title: services.tanacsadas.title, price: p.price_tanacsadas }] : []),
              ]
        }
      />

      {/* 7. Zárólap */}
      <section className="bg-[#363025] pt-12 pb-16 px-6 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-12 items-stretch">

          {/* Bal: Nicol fotója */}
          <div className="shrink-0 md:w-[26%]">
            {/* Mobil: feljebb pozicionálva */}
            <div className="md:hidden relative w-full overflow-hidden" style={{ height: "600px" }}>
              <Image src="/images/R%C3%B3lam%20f%C5%91oldal.jpg" alt="Gőz-Csongrádi Nicol" fill
                className="object-cover" style={{ objectPosition: "50% 10%" }} sizes="100vw" />
            </div>
            {/* Desktop: eredeti */}
            <div className="hidden md:block relative w-full overflow-hidden" style={{ height: "480px" }}>
              <Image src="/images/R%C3%B3lam%20f%C5%91oldal.jpg" alt="Gőz-Csongrádi Nicol" fill
                className="object-cover object-bottom" sizes="26vw" />
            </div>
          </div>

          {/* Jobb: logo + szöveg + kontaktok */}
          <div className="flex-1 flex flex-col justify-center py-4 md:py-8">
            <Image src="/images/horizontal_white.svg" alt="Nicol Weddings and Events"
              width={130} height={40} className="object-contain opacity-55 mb-6" style={{ height: "auto" }} />
            <p className="hidden md:block font-[family-name:var(--font-cormorant)] text-xl md:text-2xl font-light text-white/75 italic mb-6 leading-relaxed">
              Bízom benne, hogy ajánlatom elnyeri tetszéseteket!<br />Szeretettel várom visszajelzéseteket!
            </p>
            <p className="md:hidden font-[family-name:var(--font-cormorant)] text-xl font-light text-white/75 italic mb-6 leading-relaxed">
              Bízom benne, hogy ajánlatom elnyeri tetszéseteket! Szeretettel várom visszajelzéseteket!
            </p>
            <p className="font-[family-name:var(--font-italianno)] text-3xl text-white/50 mb-3 mt-4">Gőz-Csongrádi Nicol</p>

            {/* Elérhetőségek */}
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

            {/* Social ikonok */}
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
