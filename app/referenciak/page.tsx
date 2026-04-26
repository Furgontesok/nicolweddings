import NavbarSimple from "../components/NavbarSimple";
import Footer from "../components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referenciák — Nicol Weddings and Events",
  description: "Minden esküvő egy egyedi történet. Nézd meg eddigi munkáimat és ügyfeleink visszajelzéseit.",
};

const couples = [
  { name: "Vivi & Bence", cover: "/images/Vivi%20%26%20Bence/1.jpg" },
  { name: "Bia & Bence", cover: "/images/Bia%20%26%20Bence/1.jpg" },
  { name: "Panni & Sanyi", cover: "/images/4K2A2166.jpg" },
  { name: "Betti & Levi", cover: "/images/Betti%20%26%20Levi/1.jpg" },
  { name: "Ani & Peti", cover: "/images/Ani%20%26%20Peti%20esk%C3%BCv%C5%91%20referenci%C3%A1k%20album/1.jpg" },
  { name: "Nicol & Roli", cover: "/images/Nicol%26Roli-128.jpg" },
  { name: "Réka & Ádám", cover: "/images/R%C3%A9ka%20%26%20%C3%81d%C3%A1m%20visszajelz%C3%A9s_.jpg" },
];

const testimonials = [
  {
    name: "Ani & Peti",
    photo: "/images/Ani%20%26%20Peti%20visszajelz%C3%A9s.jpg",
    text: "Nicol nélkül nem tudtuk volna megvalósítani az álomesküvőnket. Minden apró részletről gondoskodott, mi csak élvezhettük a napot.",
  },
  {
    name: "Dr. Pozsonyi Petra",
    photo: "/images/Pozsonyi%20Petra%20visszajelz%C3%A9s.jpg",
    text: "Profizmus és szívvel végzett munka — ez jellemzi Nicolt. Az egész szervezési folyamat alatt biztonságban éreztem magam.",
  },
  {
    name: "Orsi & Krisz",
    photo: "/images/Orsi%20%26%20Krisz%20visszajelz%C3%A9s.jpg",
    text: "Csodás nap volt, minden tökéletesen ment. Nicol energiája és lelkesedése sugárzott belőle az egész nap.",
  },
  {
    name: "Réka & Ádám",
    photo: "/images/R%C3%A9ka%20%26%20%C3%81d%C3%A1m%20visszajelz%C3%A9s_.jpg",
    text: "Mesebeli esküvőnk volt, teljesen Nicol érdeme. Figyelt minden apró részletre és mindig mosolyogva megoldott mindent.",
  },
];

export default function Referenciak() {
  return (
    <>
      <NavbarSimple />

      {/* Section 1 — Hero */}
      <section className="bg-[#F5F3ED] pt-12 py-20 px-6 text-center">
        <p className="font-[family-name:var(--font-nunito)] text-xs tracking-widest uppercase text-[#363025]/40 mb-4">
          Munkáim
        </p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-7xl md:text-8xl font-light text-[#363025]">
          Referenciák
        </h1>
        <div className="w-14 h-px bg-[#363025]/20 mx-auto my-8" />
        <p className="font-[family-name:var(--font-quicksand)] text-lg italic text-[#363025]/55 max-w-xl mx-auto leading-relaxed">
          Minden esküvő egy egyedi történet, íme néhány, amelynek részese lehettem.
        </p>
      </section>

      {/* Section 2 — Couple grid */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {couples.map((c, i) => (
              <div key={i} className="group relative aspect-[3/4] overflow-hidden cursor-pointer">
                <Image
                  src={c.cover}
                  alt={c.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Couple name */}
                <div className="absolute bottom-0 left-0 px-5 pb-5">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-white font-light leading-tight">
                    {c.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Testimonials */}
      <section className="bg-[#F5F3ED] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-[family-name:var(--font-nunito)] text-xs tracking-[0.3em] uppercase text-[#363025]/40 mb-3">
              Amit mondanak rólam
            </p>
            <h2 className="font-[family-name:var(--font-italianno)] text-6xl text-[#363025]">
              Kedves szavak
            </h2>
            <div className="w-12 h-px bg-[#363025]/20 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="border border-[#D6D6C9] p-8 hover:border-[#363025]/30 transition-colors duration-300">
                <div className="font-[family-name:var(--font-cormorant)] text-6xl text-[#363025]/15 leading-none mb-4 select-none">
                  "
                </div>
                <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 leading-relaxed italic mb-8 text-sm">
                  {t.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0 ring-1 ring-[#D6D6C9]">
                    <Image src={t.photo} alt={t.name} fill className="object-cover object-top" sizes="40px" />
                  </div>
                  <span className="font-[family-name:var(--font-nunito)] text-[#363025]/60 text-xs tracking-widest uppercase">
                    {t.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — CTA */}
      <section className="bg-[#363025] py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-[family-name:var(--font-italianno)] text-5xl md:text-6xl text-white mb-8">
            Valtsuk valóra álmaitok esküvőjét!
          </h2>
          <a
            href="/kapcsolat"
            className="inline-block border border-white text-white font-[family-name:var(--font-nunito)] text-xs tracking-[0.25em] uppercase px-12 py-4 hover:bg-white hover:text-[#363025] transition-all duration-300"
          >
            Ingyenes konzultáció
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
