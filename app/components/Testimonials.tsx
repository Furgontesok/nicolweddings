"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Ani és Peti",
    photo: "/images/Ani%20%26%20Peti%20visszajelz%C3%A9s.jpg",
    text: "Nicol nélkül nem tudtuk volna megvalósítani az álomesküvőnket. Minden apró részletről gondoskodott, mi csak élvezhettük a napot. Örökre hálásak vagyunk!",
  },
  {
    name: "Dr. Pozsonyi Petra",
    photo: "/images/Pozsonyi%20Petra%20visszajelz%C3%A9s.jpg",
    text: "Profizmus és szívvel végzett munka — ez jellemzi Nicolt. Az egész szervezési folyamat alatt biztonságban éreztem magam, tudtam, hogy minden a legjobb kezekben van.",
  },
  {
    name: "Orsi és Krisz",
    photo: "/images/Orsi%20%26%20Krisz%20visszajelz%C3%A9s.jpg",
    text: "Csodás nap volt, minden tökéletesen ment. Nicol energiája és lelkesedése sugárzott belőle az egész nap — ez nekünk is erőt adott. Szívből ajánljuk mindenkinek!",
  },
  {
    name: "Réka és Ádám",
    photo: "/images/R%C3%A9ka%20%26%20%C3%81d%C3%A1m%20visszajelz%C3%A9s_.jpg",
    text: "Mesebeli esküvőnk volt, teljesen Nicol érdeme. Figyelt minden apró részletre és mindig mosolyogva megoldott minden felmerülő kérdést. Köszönjük szépen!",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="velemenyek" className="bg-[#D6D6C9] py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-[family-name:var(--font-nunito)] text-xs tracking-[0.3em] uppercase text-[#363025]/50 mb-3">
          Amit mondanak rólam
        </p>
        <h2 className="font-[family-name:var(--font-italianno)] text-6xl md:text-7xl text-[#363025] mb-12">
          Kedves szavak
        </h2>

        <div className="font-[family-name:var(--font-cormorant)] text-7xl text-[#363025]/20 leading-none mb-6 select-none">
          "
        </div>

        <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/80 text-lg leading-relaxed italic min-h-[6rem] transition-all duration-500">
          {testimonials[active].text}
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="w-16 h-16 relative rounded-full overflow-hidden">
            <Image
              src={testimonials[active].photo}
              alt={testimonials[active].name}
              fill
              className="object-cover object-top"
              sizes="64px"
            />
          </div>
          <span className="font-[family-name:var(--font-nunito)] text-[#363025] text-sm tracking-widest uppercase font-semibold">
            {testimonials[active].name}
          </span>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "bg-[#363025] w-6" : "bg-[#363025]/30 w-2"
              }`}
              aria-label={`${i + 1}. vélemény`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
