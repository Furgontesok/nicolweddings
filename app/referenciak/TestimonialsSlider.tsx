"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Ani & Peti",
    photo: "/images/Ani%20%26%20Peti%20visszajelz%C3%A9s.jpg",
    quote: "Biztonságban éreztük magunkat.",
    text: "Végtelenül hálásak vagyunk azért a sok-sok segítségért, támogatásért, amit az elmúlt félévben Nicol nyújtott nekünk. Határozott, ugyanakkor mindig kedves volt velünk. Magabiztosan kezelte az esküvő napján is a különböző helyzeteket. Biztonságban éreztük magunkat, hiszen ott volt velünk az összes bejáráson, ruhapróbán, vagy fontosabb megbeszélésen. Pozitív kisugárzása mindig erőt és hitet adott, hogy a nagy napon minden rendben lesz. Ha valaki elbizonytalanodna az esküvőszervező szükségessége miatt, szeretnénk megerősíteni abban, hogy óriási terhet vesz le az ember válláról.",
  },
  {
    name: "Dr. Pozsonyi Petra",
    photo: "/images/Pozsonyi%20Petra%20visszajelz%C3%A9s.jpg",
    quote: "Pontossága, precizitása, odafigyelése és kedvessége az első egyeztetéstől az utolsó vendég távozásáig jellemezte munkáját.",
    text: "Nicol egy számomra nagyon fontos személy születésnapját szervezte meg és koordinálta. Pontossága, precizitása, odafigyelése és kedvessége az első egyeztetéstől az utolsó vendég távozásáig jellemezte munkáját. Segített rátalálni a megfelelő szolgáltatókra, végig lelkiismeretesen egyeztetett velük, majd az esemény napján a közös munkájuk is maximálisan gördülékenyen ment. Nekünk, résztvevőknek csupán egy feladatunk volt, igazán jól érezni magunkat. Nem is kérdés, ha egyszer férjhez megyek kire fogom rábízni az esküvőmet. Köszönünk mindent!",
  },
  {
    name: "Orsi & Krisz",
    photo: "/images/Orsi%20%26%20Krisz%20visszajelz%C3%A9s.jpg",
    quote: "Aztán a saját bőrünkön tapasztaltuk meg, mekkora segítséget nyújt, és milyen hihetetlen terhet vesz le rólunk.",
    text: "Őszintén, mi először nem gondoltuk, hogy az esküvőszervező must have szolgáltató… Aztán a saját bőrünkön tapasztaltuk meg, mekkora segítséget nyújt, és milyen hihetetlen terhet vesz le rólunk. Nicol rengeteg kreatív ötlettel látott el minket már a legelején, amik hozzájárultak ahhoz, hogy a végeredmény ízléses, stílusos és teljesen ránk szabott legyen. Minden apró részletre gondolt, mindig kedves, figyelmes és határozott volt. Tapasztalata, tanácsai és stílusérzéke végig felbecsülhetetlenek voltak számunkra. Kéz a kézben készültünk a nagy napra, és amikor elérkezett a pillanat, teljesen elengedhettük magunkat. Tudtuk, hogy minden a legjobb kezekben van, így csak megélnünk kellett az esküvőnk minden varázslatos percét. Hálásan köszönjük, Nicol!",
  },
  {
    name: "Réka & Ádám",
    photo: "/images/R%C3%A9ka%20%26%20%C3%81d%C3%A1m%20visszajelz%C3%A9s_.jpg",
    quote: "A nagy napunkon minden gördülékenyen zajlott, Nicol mindenhol ott volt és odafigyelt, hogy ne csússzon hiba a terveinkbe.",
    text: "Nicol óriási segítség volt számunkra, és nagyon örülünk, hogy ő kísért végig az esküvőnk szervezésén. Nemcsak a feladatokban segített, hanem tartotta a kapcsolatot a szolgáltatókkal is, ami nagy terhet vett le a vállunkról. A nagy napunkon minden gördülékenyen zajlott, Nicol mindenhol ott volt és odafigyelt, hogy ne csússzon hiba a terveinkbe. Nagyon lelkiismeretes, precíz, és mindenben lehet rá számítani. Őszintén ajánljuk mindenkinek.",
  },
];

export default function TestimonialsSlider() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((i) => (i + 1) % testimonials.length);
  const t = testimonials[active];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, 20000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#F5F3ED] py-14 px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* Fejléc */}
        <p className="font-[family-name:var(--font-nunito)] text-[13px] tracking-[0.35em] uppercase text-[#363025]/40 mb-10">
          Kedves szavak
        </p>

        {/* Kiemelt idézet */}
        <p className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl italic text-[#363025] leading-tight mb-8">
          „{t.quote}"
        </p>

        {/* Teljes szöveg */}
        <p className="font-[family-name:var(--font-quicksand)] text-[17px] text-[#363025]/55 leading-relaxed mb-10">
          {t.text}
        </p>

        {/* Név */}
        <div className="mb-12">
          <p className="font-[family-name:var(--font-italianno)] text-4xl text-[#363025]/80">
            {t.name.replace('&', '& ')}
          </p>
        </div>

        {/* Navigáció */}
        <div className="flex items-center gap-6 justify-center">
          <button onClick={prev} className="text-[#363025]/40 hover:text-[#363025] transition-colors duration-200 text-xl">←</button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === active ? "bg-[#363025]" : "bg-[#363025]/25"}`}
              />
            ))}
          </div>
          <button onClick={next} className="text-[#363025]/40 hover:text-[#363025] transition-colors duration-200 text-xl">→</button>
        </div>

      </div>
    </section>
  );
}
