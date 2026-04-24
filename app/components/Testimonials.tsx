"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Ani és Peti",
    text: "Nicol nélkül nem tudtuk volna megvalósítani az álomesküvőnket. Minden apró részletről gondoskodott, mi csak élvezhettük a napot. Örökre hálásak vagyunk!",
    initial: "A",
  },
  {
    name: "Dr. Pozsonyi Petra",
    text: "Profizmus és szívvel végzett munka — ez jellemzi Nicolt. Az egész szervezési folyamat alatt biztonságban éreztem magam, tudtam, hogy minden a legjobb kezekben van.",
    initial: "P",
  },
  {
    name: "Orsi és Krisz",
    text: "Csodás nap volt, minden tökéletesen ment. Nicol energia és lelkesedés sugárzott belőle az egész nap — ez nekünk is erőt adott. Szívből ajánljuk mindenkinek!",
    initial: "O",
  },
  {
    name: "Réka és Ádám",
    text: "Mesebeli esküvőnk volt, teljesen Nicol érdeme. Figyelt minden apró részletre és mindig mosolyogva megoldott minden felmerülő kérdést. Köszönjük szépen!",
    initial: "R",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="referenciak" className="bg-[#D6D6C9] py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Cím */}
        <p className="font-[family-name:var(--font-nunito)] text-xs tracking-[0.3em] uppercase text-[#363025]/50 mb-3">
          Amit mondanak rólam
        </p>
        <h2 className="font-[family-name:var(--font-italianno)] text-6xl md:text-7xl text-[#363025] mb-12">
          Kedves szavak
        </h2>

        {/* Idézet ikon */}
        <div className="font-[family-name:var(--font-cormorant)] text-7xl text-[#363025]/20 leading-none mb-6 select-none">
          "
        </div>

        {/* Idézet szöveg */}
        <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/80 text-lg leading-relaxed italic min-h-[6rem] transition-all duration-500">
          {testimonials[active].text}
        </p>

        {/* Profil */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <div
            className="w-16 h-16 bg-[#363025]/20 flex items-center justify-center"
            style={{ borderRadius: "50%" }}
          >
            <span className="font-[family-name:var(--font-cormorant)] text-[#363025] text-xl font-light">
              {testimonials[active].initial}
            </span>
          </div>
          <span className="font-[family-name:var(--font-nunito)] text-[#363025] text-sm tracking-widest uppercase font-semibold">
            {testimonials[active].name}
          </span>
        </div>

        {/* Navigáció */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === active ? "bg-[#363025] w-6" : "bg-[#363025]/30"
              }`}
              aria-label={`${i + 1}. vélemény`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
