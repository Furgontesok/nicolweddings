"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

type TestimonialItem = {
  name: string;
  photo: string;
  objectPosition: string;
  quote: string;
  text: string;
};

const hardcoded: TestimonialItem[] = [
  {
    name: "Ani & Peti",
    photo: "/images/visszajelzes-ani-peti.jpg",
    objectPosition: "center 20%",
    quote: "Ha valaki elbizonytalanodna az esküvőszervező szükségessége miatt, szeretnénk megerősíteni abban, hogy óriási terhet vesz le az ember válláról.",
    text: "Végtelenül hálásak vagyunk azért a sok-sok segítségért, támogatásért, amit az elmúlt félévben Nicol nyújtott nekünk. Határozott, ugyanakkor mindig kedves volt velünk. Magabiztosan kezelte az esküvő napján is a különböző helyzeteket. Biztonságban éreztük magunkat, hiszen ott volt velünk az összes bejáráson, ruhapróbán, vagy fontosabb megbeszélésen. Pozitív kisugárzása mindig erőt és hitet adott, hogy a nagy napon minden rendben lesz. Ha valaki elbizonytalanodna az esküvőszervező szükségessége miatt, szeretnénk megerősíteni abban, hogy óriási terhet vesz le az ember válláról.",
  },
  {
    name: "Dr. Pozsonyi Petra",
    photo: "/images/visszajelzes-pozsonyi-petra.jpg",
    objectPosition: "center top",
    quote: "Pontossága, precizitása, odafigyelése és kedvessége az első egyeztetéstől az utolsó vendég távozásáig jellemezte munkáját.",
    text: "Nicol egy számomra nagyon fontos személy születésnapját szervezte meg és koordinálta. Pontossága, precizitása, odafigyelése és kedvessége az első egyeztetéstől az utolsó vendég távozásáig jellemezte munkáját. Segített rátalálni a megfelelő szolgáltatókra, végig lelkiismeretesen egyeztetett velük, majd az esemény napján a közös munkájuk is maximálisan gördülékenyen ment. Nekünk, résztvevőknek csupán egy feladatunk volt, igazán jól érezni magunkat. Nem is kérdés, ha egyszer férjhez megyek kire fogom rábízni az esküvőmet. Köszönünk mindent!",
  },
  {
    name: "Orsi & Krisz",
    photo: "/images/visszajelzes-orsi-krisz.jpg",
    objectPosition: "center top",
    quote: "Aztán a saját bőrünkön tapasztaltuk meg, mekkora segítséget nyújt, és milyen hihetetlen terhet vesz le rólunk.",
    text: "Őszintén, mi először nem gondoltuk, hogy az esküvőszervező must have szolgáltató… Aztán a saját bőrünkön tapasztaltuk meg, mekkora segítséget nyújt, és milyen hihetetlen terhet vesz le rólunk. Nicol rengeteg kreatív ötlettel látott el minket már a legelején, amik hozzájárultak ahhoz, hogy a végeredmény ízléses, stílusos és teljesen ránk szabott legyen. Minden apró részletre gondolt, mindig kedves, figyelmes és határozott volt. Kéz a kézben készültünk a nagy napra, és amikor elérkezett a pillanat, teljesen elengedhettük magunkat. Hálásan köszönjük, Nicol!",
  },
  {
    name: "Réka & Ádám",
    photo: "/images/visszajelzes-reka-adam.jpg",
    objectPosition: "center top",
    quote: "A nagy napunkon minden gördülékenyen zajlott, Nicol mindenhol ott volt és odafigyelt, hogy ne csússzon hiba a terveinkbe.",
    text: "Nicol óriási segítség volt számunkra, és nagyon örülünk, hogy ő kísért végig az esküvőnk szervezésén. Nemcsak a feladatokban segített, hanem tartotta a kapcsolatot a szolgáltatókkal is, ami nagy terhet vett le a vállunkról. A nagy napunkon minden gördülékenyen zajlott, Nicol mindenhol ott volt és odafigyelt, hogy ne csússzon hiba a terveinkbe. Nagyon lelkiismeretes, precíz, és mindenben lehet rá számítani. Őszintén ajánljuk mindenkinek.",
  },
  {
    name: "Szerus & Andris",
    photo: "/images/visszajelzes-szerus-andris.jpg",
    objectPosition: "center top",
    quote: "A szervezés első pillanatától kezdve a lagzi végéig teljes biztonságban éreztük magunkat.",
    text: "Szívből hálásak vagyunk a közös munkáért, egyszerűen fantasztikus volt minden! A szervezés első pillanatától kezdve a lagzi végéig teljes biztonságban éreztük magunkat, mert Nicol mindent maximálisan a kezében tartott, így mi és a családunk is felhőtlenül megélhettük a pillanatot. Kiváló szakembereket és szolgáltatókat ajánlott nekünk, amiért külön köszönet jár! Hihetetlenül magas szépérzéke van, a dekoráció és a hangulat minden elemében visszaköszönt a stílusossága. A vendégeinktől is rengeteg olyan visszajelzést kaptunk, hogy minden apró részlet tökéletes volt. Tiszta szívből, bátran ajánljuk mindenkinek, akik stresszmentes és álomszép esküvőt szeretnének, amire egész hátralévő életükben örömmel emlékeznek majd vissza!",
  },
];

export default function Testimonials() {
  const [items, setItems] = useState<TestimonialItem[]>(hardcoded);
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!supabase) return;
    supabase
      .from("testimonials")
      .select("*")
      .order("display_order")
      .then(({ data }) => {
        if (!data?.length) return;
        const hardcodedNames = new Set(hardcoded.map(h => h.name.toLowerCase()));
        const extra: TestimonialItem[] = data
          .filter(r => !hardcodedNames.has(r.name.toLowerCase()))
          .map(r => ({
            name: r.name,
            photo: r.photo_url ?? "",
            objectPosition: r.object_position ?? "center top",
            quote: r.quote,
            text: r.text,
          }));
        if (extra.length > 0) setItems([...hardcoded, ...extra]);
      });
  }, []);

  const goTo = (i: number) => {
    setFading(true);
    setTimeout(() => { setActive(i); setFading(false); }, 350);
  };

  const prev = () => goTo((active - 1 + items.length) % items.length);
  const next = () => goTo((active + 1) % items.length);

  useEffect(() => {
    const t = setInterval(next, 8000);
    return () => clearInterval(t);
  }, [active, items.length]);

  const t = items[active];

  return (
    <section id="velemenyek" className="pt-3 pb-2 md:pb-20 px-6" style={{ backgroundColor: "#D6D8CA" }}>
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="font-[family-name:var(--font-nunito)] text-[12px] tracking-[0.3em] uppercase text-[#363025]/40 mb-3">Visszajelzések</p>
          <h2 className="font-[family-name:var(--font-italianno)] text-4xl md:text-5xl lg:text-6xl text-[#363025]">Emlékezetes napok, hálás szívek</h2>
        </div>
        <div
          style={{ opacity: fading ? 0 : 1, transition: "opacity 0.35s" }}
        >
          <div className="flex flex-col md:flex-row items-start">
            {/* Fehér kártya — 58% szélesség */}
            <div
              className="relative bg-white flex flex-col px-6 md:px-12 pt-8 pb-8 md:py-10 w-full"
              style={{ flex: "0 0 58%", minHeight: "514px" }}
            >
              {/* Mobilos boltíves kép — kártyán belül */}
              <div
                className="md:hidden relative overflow-hidden w-full mx-auto mb-6"
                style={{ height: "380px", borderRadius: "9999px 9999px 0 0" }}
              >
                <Image
                  src={t.photo}
                  alt={t.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: t.objectPosition ?? "center top" }}
                  sizes="65vw"
                />
              </div>
              <p className="font-[family-name:var(--font-cormorant)] text-[#363025] text-2xl font-light leading-snug mb-7 italic">
                &bdquo;{t.quote}&rdquo;
              </p>
              <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-[14px] leading-relaxed mb-6">
                {t.text}
              </p>

              {/* Név + nyilak */}
              <div className="flex items-end justify-between pr-0 md:pr-16 mt-auto">
                <p className="font-[family-name:var(--font-italianno)] text-[#363025] text-3xl">
                  {t.name.replace(" & ", " &  ")}
                </p>
                <div className="flex items-center gap-7">
                  <button
                    onClick={prev}
                    className="text-[#363025]/40 hover:text-[#363025] transition-colors duration-200 text-xl leading-none"
                  >
                    ←
                  </button>
                  <button
                    onClick={next}
                    className="text-[#363025]/40 hover:text-[#363025] transition-colors duration-200 text-xl leading-none"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* Boltíves fotó — desktop only */}
            <div
              className="hidden md:block relative overflow-hidden flex-shrink-0 -ml-10"
              style={{
                flex: "0 0 38%",
                borderRadius: "9999px 9999px 0 0",
                marginTop: "-82px",
                minHeight: "616px",
              }}
            >
              <Image
                src={t.photo}
                alt={t.name}
                fill
                className="object-cover object-top"
                sizes="42vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
