import NavbarSimple from "../components/NavbarSimple";
import Footer from "../components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rólam — Nicol Weddings and Events",
  description: "Nicol vagyok, esküvőszervező és dekorátor. Megismerkedünk?",
};

export default function Rolam() {
  return (
    <>
      <NavbarSimple />

      {/* Hero — 4 fotós mozaik */}
      <section className="relative flex" style={{ height: "65vh", minHeight: 400 }}>
        {[
          "/images/R%C3%B3lam%20mell%C3%A9k1.jpg",
          "/images/R%C3%B3lam%20f%C5%91k%C3%A9p.jpg",
          "/images/R%C3%B3lam%20mell%C3%A9k2.jpg",
          "/images/R%C3%B3lam%20mell%C3%A9k3.jpg",
        ].map((src, i) => (
          <div key={i} className="relative flex-1 overflow-hidden">
            <Image
              src={src}
              alt="Nicol esküvőszervező"
              fill
              className="object-cover object-top"
              sizes="25vw"
              priority={i < 2}
            />
            <div className="absolute inset-0 bg-black/25" />
          </div>
        ))}

        <div className="absolute bottom-0 left-0 right-0 pb-8 px-6 text-center pointer-events-none">
          <h1 className="font-[family-name:var(--font-cormorant)] text-7xl md:text-9xl font-light text-white tracking-widest uppercase drop-shadow-lg">
            RÓLAM
          </h1>
        </div>
      </section>

      {/* Bemutatkozás */}
      <section className="bg-[#F5F3ED] py-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-16">

          {/* Kép */}
          <div className="shrink-0 md:w-2/5">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4", borderRadius: "120px 120px 0 0" }}>
              <Image
                src="/images/R%C3%B3lam%20f%C5%91k%C3%A9p.jpg"
                alt="Nicol — esküvőszervező"
                fill
                className="object-cover object-top"
                sizes="40vw"
              />
            </div>
          </div>

          {/* Szöveg */}
          <div className="flex-1 pt-4">
            <p className="font-[family-name:var(--font-nunito)] text-xs tracking-[0.3em] uppercase text-[#363025]/50 mb-4">
              Bemutatkozás
            </p>
            <h2 className="font-[family-name:var(--font-italianno)] text-5xl md:text-6xl text-[#363025] leading-tight mb-6">
              Szia, Nicol vagyok
            </h2>
            <div className="w-12 h-px bg-[#363025]/30 mb-8" />
            <div className="font-[family-name:var(--font-quicksand)] text-[#363025]/70 leading-relaxed space-y-5 text-base">
              <p>
                Esküvőszervező és dekorátor vagyok, és mélyen hiszem, hogy minden esküvőnek egyedinek kell lennie — olyannak, ami valóban rólatok szól. Több éve kísérem végig a párokat az álmaik napjának megvalósításában.
              </p>
              <p>
                A munkám nem csak koordinálásból áll: figyelem a részleteket, érzem a hangulatot, és minden döntésben a ti személyiségetek és szerelmetek vezérel. A virágkötéstől a terítékig, a menetrendtől az utolsó percig — ott vagyok.
              </p>
              <p>
                Hiszek abban, hogy a szervezés nem kell, hogy stresszes legyen. Az a dolgom, hogy ti csak egymásra figyelhessetek azon a különleges napon.
              </p>
              <p>
                Ha úgy érzed, hogy jól passzolnánk egymáshoz — írj bátran, az első konzultáció ingyenes és kötésmentes.
              </p>
            </div>
            <a
              href="/kapcsolat"
              className="inline-block mt-10 border border-[#363025] text-[#363025] font-[family-name:var(--font-nunito)] text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#363025] hover:text-white transition-all duration-300"
            >
              Vegyük fel a kapcsolatot
            </a>
          </div>
        </div>
      </section>

      {/* Munka közben fotó + idézet */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">

          {/* Idézet bal */}
          <div className="flex-1 text-center md:text-left">
            <div className="font-[family-name:var(--font-cormorant)] text-7xl text-[#363025]/15 leading-none mb-4 select-none">"</div>
            <p className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-light text-[#363025] italic leading-relaxed">
              Minden esküvő egy egyedi történet. Az én feladatom, hogy a tiétek tökéletesen szóljon.
            </p>
            <div className="w-12 h-px bg-[#363025]/30 mt-8 md:ml-0 mx-auto" />
            <p className="font-[family-name:var(--font-nunito)] text-xs tracking-[0.25em] uppercase text-[#363025]/50 mt-4">
              Nicol — esküvőszervező
            </p>
          </div>

          {/* Kép jobb */}
          <div className="shrink-0 md:w-2/5">
            <div className="relative w-full overflow-hidden rounded-sm" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/images/R%C3%B3lam%20munka%20k%C3%B6zben.JPG"
                alt="Nicol munka közben"
                fill
                className="object-cover"
                sizes="40vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Értékeim */}
      <section className="bg-[#F5F3ED] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="font-[family-name:var(--font-nunito)] text-xs tracking-[0.3em] uppercase text-[#363025]/50 mb-3">
            Ami fontos nekem
          </p>
          <h2 className="font-[family-name:var(--font-italianno)] text-5xl md:text-6xl text-[#363025]">
            Az én megközelítésem
          </h2>
          <div className="w-12 h-px bg-[#363025]/30 mx-auto mt-6" />
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            { num: "01", title: "Személyes figyelem", desc: "Minden pár más. Nem sablonokat alkalmazok, hanem rátok szabom az egész folyamatot." },
            { num: "02", title: "Átlátható kommunikáció", desc: "Mindig tudni fogjátok, hol tartunk. Nincs rejtett díj, nincs meglepetés." },
            { num: "03", title: "Nyugalom a nagy napon", desc: "A ti dolgotok az, hogy élvezzétek. Az enyém, hogy minden a helyén legyen." },
          ].map((v, i) => (
            <div key={i}>
              <span className="font-[family-name:var(--font-cormorant)] text-5xl font-light text-[#363025]/20 block mb-4">{v.num}</span>
              <h3 className="font-[family-name:var(--font-quicksand)] font-semibold text-[#363025] mb-3">{v.title}</h3>
              <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#363025] py-20 px-6 text-center">
        <p className="font-[family-name:var(--font-nunito)] text-xs tracking-[0.3em] uppercase text-white/40 mb-4">
          Kezdjük el együtt
        </p>
        <h2 className="font-[family-name:var(--font-italianno)] text-5xl md:text-6xl text-white mb-10">
          Ismerkedjünk meg!
        </h2>
        <a
          href="/kapcsolat"
          className="inline-block border border-white/60 text-white font-[family-name:var(--font-nunito)] text-xs tracking-[0.25em] uppercase px-12 py-4 hover:bg-white hover:text-[#363025] transition-all duration-300"
        >
          Ingyenes konzultáció
        </a>
      </section>

      <Footer />
    </>
  );
}
