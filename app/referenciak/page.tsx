import NavbarSimple from "../components/NavbarSimple";
import Footer from "../components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referenciák — Nicol Weddings and Events",
  description: "Minden esküvő egy egyedi történet. Nézd meg eddigi munkáimat és ügyfeleink visszajelzéseit.",
};

const couples = [
  { name: "Vivi & Bence", year: "2024", cover: "/images/Vivi%20%26%20Bence/1..jpg" },
  { name: "Bia & Bence", year: "2024", cover: "/images/Bia%20%26%20Bence/1.jpg" },
  { name: "Panni & Sanyi", year: "2023", cover: "/images/Panni%20%26%20Sanyi/1.jpg" },
  { name: "Betti & Levi", year: "2023", cover: "/images/Betti%20%26%20Levi/1.jpg" },
  { name: "Réka & Ádám", year: "2023", cover: "/images/R%C3%A9ka%20%26%20%C3%81d%C3%A1m%20esk%C3%BCv%C5%91%20referenci%C3%A1k%20album/1.jpg" },
  { name: "Ani & Peti", year: "2022", cover: "/images/Ani%20%26%20Peti%20esk%C3%BCv%C5%91%20referenci%C3%A1k%20album/1.jpg" },
];

const testimonials = [
  {
    name: "Ani & Peti",
    photo: "/images/Ani%20%26%20Peti%20visszajelz%C3%A9s.jpg",
    text: "Biztonságban éreztük magunkat az egész tervezési folyamat alatt. Nicol mindig elérhető volt, mindig tudta a választ, és a nagy napon teljesen megbízhattunk benne. Nélküle nem lett volna ugyanaz.",
  },
  {
    name: "Dr. Pozsonyi Petra",
    photo: "/images/Pozsonyi%20Petra%20visszajelz%C3%A9s.jpg",
    text: "Pontossága, odafigyelése és a szállítókkal való kapcsolata felülmúlta az elvárásaimat. Az első konzultációtól a nagy napig minden percben éreztem, hogy profik kezében vagyok.",
  },
  {
    name: "Orsi & Krisz",
    photo: "/images/Orsi%20%26%20Krisz%20visszajelz%C3%A9s.jpg",
    text: "Mindenhol ott volt — a szállítókkal tárgyalt, a vendégeket fogadta, és mindig mosolyogva oldotta meg a felmerülő kérdéseket. Nekünk csak élvezni kellett a napot.",
  },
  {
    name: "Réka & Ádám",
    photo: "/images/R%C3%A9ka%20%26%20%C3%81d%C3%A1m%20visszajelz%C3%A9s_.jpg",
    text: "Kreatív ötletei és a stresszoldó jelenléte rengeteg terhet levett a vállunkról. Az esküvőnk pontosan olyan lett, amilyenről álmodtunk — sőt, még szebb.",
  },
];

export default function Referenciak() {
  return (
    <>
      <NavbarSimple />

      {/* Hero */}
      <section className="bg-[#F5F3ED] pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[family-name:var(--font-nunito)] text-xs tracking-[0.3em] uppercase text-[#363025]/40 mb-4">
            Eddigi munkáim
          </p>
          <h1 className="font-[family-name:var(--font-italianno)] text-7xl md:text-8xl text-[#363025]">
            Referenciák
          </h1>
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-[#363025]/60 mt-6 italic">
            Minden esküvő egy egyedi történet
          </p>
          <div className="w-16 h-px bg-[#363025]/20 mx-auto mt-8" />
        </div>
      </section>

      {/* Párok galéria */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {couples.map((c, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="w-full aspect-[3/4] bg-[#D6D6C9] relative overflow-hidden mb-4">
                  <Image
                    src={c.cover}
                    alt={c.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#363025]/0 group-hover:bg-[#363025]/20 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#363025]/80 py-4 px-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-[family-name:var(--font-cormorant)] text-white text-sm tracking-widest uppercase">
                      Megtekintés
                    </p>
                  </div>
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#363025]">
                  {c.name}
                </h3>
                <p className="font-[family-name:var(--font-nunito)] text-xs tracking-widest text-[#363025]/40 uppercase mt-1">
                  {c.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonialok */}
      <section className="bg-[#D6D6C9] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-[family-name:var(--font-nunito)] text-xs tracking-[0.3em] uppercase text-[#363025]/50 mb-3">
              Amit mondanak rólam
            </p>
            <h2 className="font-[family-name:var(--font-italianno)] text-6xl md:text-7xl text-[#363025]">
              Kedves szavak
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/60 p-8">
                <div className="font-[family-name:var(--font-cormorant)] text-5xl text-[#363025]/20 leading-none mb-4 select-none">
                  "
                </div>
                <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/70 leading-relaxed italic mb-8">
                  {t.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0">
                    <Image src={t.photo} alt={t.name} fill className="object-cover object-top" sizes="40px" />
                  </div>
                  <span className="font-[family-name:var(--font-nunito)] text-[#363025] text-xs tracking-widest uppercase font-semibold">
                    {t.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-[family-name:var(--font-italianno)] text-5xl md:text-6xl text-[#363025] mb-6">
            Váltsuk valóra álmaitok esküvőjét!
          </h2>
          <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 mb-10">
            Keress meg és meséljetek az elképzeléseitekről. Az első konzultáció ingyenes.
          </p>
          <a
            href="/kapcsolat"
            className="inline-block border border-[#363025] text-[#363025] font-[family-name:var(--font-nunito)] text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#363025] hover:text-white transition-all duration-300"
          >
            Kapcsolatfelvétel
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
