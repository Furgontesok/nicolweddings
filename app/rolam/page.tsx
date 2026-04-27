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

      {/* ── 1. "Ez nem csupán egy esküvő..." ── */}
      <section id="rolam-elso-szekcio" className="bg-[#F5F3ED] pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-14">

          {/* Kör kép bal */}
          <div className="shrink-0 flex flex-col items-center gap-8">
            <div
              className="relative overflow-hidden"
              style={{ width: 240, height: 310, borderRadius: "120px 120px 0 0" }}
            >
              <Image
                src="/images/R%C3%B3lam%20f%C5%91k%C3%A9p.jpg"
                alt="Nicol esküvőszervező"
                fill
                className="object-cover object-top"
                sizes="240px"
                priority
              />
            </div>
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3", width: 240 }}>
              <Image
                src="/images/zsambek_wedding_styled_shoot-001_web.jpg"
                alt="Esküvői pillanat"
                fill
                className="object-cover object-center"
                sizes="240px"
              />
            </div>
          </div>

          {/* Szöveg jobb */}
          <div className="flex-1 pt-4">
            <h1 className="font-[family-name:var(--font-cormorant)] text-[#363025] text-3xl md:text-[42px] font-light leading-snug mb-8">
              Ez nem csupán egy esküvő, hanem az örökkévalóságotok első fejezete.
            </h1>
            <div className="w-10 h-px bg-[#363025]/30 mb-8" />
            <div className="font-[family-name:var(--font-quicksand)] text-[#363025]/70 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                Hiszem, hogy minden esküvő egyedi — olyan, ami valóban rólatok szól. A nagy pillanatok éppoly fontosak, mint a legapróbb részletek. Amikor a saját esküvőmet szerveztem, rájöttem, mennyire sokat jelent egy nyugodt, támogató jelenlét.
              </p>
              <p>
                Azóta minden pár oldalán ott vagyok az első ötlettől az utolsó tánclépésig — precizitással és meleséggel egyszerre.
              </p>
            </div>
            <p className="font-[family-name:var(--font-cormorant)] text-[#363025]/50 text-xl italic mt-8 mb-3">
              amiben hiszek
            </p>
            <div className="w-8 h-px bg-[#363025]/20 mb-5" />
            <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-sm leading-relaxed">
              Minden döntésnél a ti személyiségetek és szerelmetek vezérel — a virágkötéstől a terítékig, a menetrendtől az utolsó percig. Az én dolgom, hogy ti csak egymásra figyelhessetek azon a különleges napon.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. Gőz-Csongrádi Nicol ── */}
      <section className="bg-[#EDEDE1] py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-14">

          {/* Szöveg bal */}
          <div className="flex-1 pt-2">
            <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.3em] uppercase text-[#363025]/50 mb-4">
              Alapító · Esküvőszervező · Magyarország
            </p>
            <h2 className="font-[family-name:var(--font-italianno)] text-5xl md:text-6xl text-[#363025] leading-tight mb-6">
              Gőz-Csongrádi Nicol
            </h2>
            <div className="w-12 h-px bg-[#363025]/30 mb-8" />
            <div className="font-[family-name:var(--font-quicksand)] text-[#363025]/70 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                2022 óta foglalkozom esküvők, születésnapok, lánybúcsúk és más különleges alkalmak szervezésével. A rendezvényszervezés számomra nem csupán munka — a részletek összehangolása, a koncepció megalkotása és a kivitelezés az, ami igazán szenvedélyem.
              </p>
              <p>
                Családi hátterem szorosan kapcsolódik az esküvők világához, ami még mélyebb rálátást ad az iparágra. Megbízható, precíz szervezőként dolgozom, aki minden feladatot teljes odaadással végez el.
              </p>
              <p>
                Nem sablonokat alkalmazok — minden párnál nulláról indulok, hogy az eredmény valóban a tietek legyen.
              </p>
            </div>
            <a
              href="/szolgaltatasok"
              className="inline-block mt-10 border border-[#363025] text-[#363025] font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-[#363025] hover:text-white transition-all duration-300"
            >
              Dolgozzunk együtt
            </a>
          </div>

          {/* Portré jobb */}
          <div className="shrink-0 md:w-[38%]">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/images/R%C3%B3lam%20mell%C3%A9k1.jpg"
                alt="Gőz-Csongrádi Nicol"
                fill
                className="object-cover object-top"
                sizes="38vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Történet — 2024 ── */}
      <section className="bg-[#F5F3ED] py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-14">

          {/* Szöveg bal */}
          <div className="flex-1">
            <h2 className="font-[family-name:var(--font-cormorant)] text-[#363025] text-3xl md:text-4xl font-light leading-snug mb-6">
              Amikor 2024-ben a saját esküvőm szervezésébe kezdtem…
            </h2>
            <div className="w-10 h-px bg-[#363025]/30 mb-6" />
            <div className="font-[family-name:var(--font-quicksand)] text-[#363025]/70 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                …rájöttem, milyen sokat jelent, ha valaki valóban ott van melletted ebben a folyamatban. Nem csak szervez, hanem érti, mit álmodtál meg, és gondoskodik arról, hogy pontosan azt éljétek át.
              </p>
              <p>
                Ez az élmény ihlette a Nicol Weddings & Events megalapítását. Azt szeretném, hogy minden pár ugyanazt az örömöt és nyugalmat érezze — miközben én intézem a részleteket.
              </p>
            </div>
            <a
              href="/kapcsolat"
              className="inline-block mt-10 border border-[#363025] text-[#363025] font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-[#363025] hover:text-white transition-all duration-300"
            >
              Dolgozzunk együtt
            </a>
          </div>

          {/* Fotó jobb */}
          <div className="shrink-0 md:w-[38%]">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/images/Nicol%26Roli-543.jpg"
                alt="Nicol saját esküvője"
                fill
                className="object-cover object-center"
                sizes="38vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Érdekességek rólam ── */}
      <section className="bg-[#EDEDE1] py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-12">

          {/* Bal: fotó hover effekttel */}
          <div className="shrink-0 md:w-[38%] group">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/images/R%C3%B3lam%20munka%20k%C3%B6zben.JPG"
                alt="Nicol munka közben"
                fill
                className="object-cover object-center transition-opacity duration-500 group-hover:opacity-60"
                sizes="38vw"
              />
            </div>
          </div>

          {/* Jobb: Q&A */}
          <div className="flex-1 pt-2">
            <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.3em] uppercase text-[#363025]/50 mb-3">
              Egy kicsit közelebb
            </p>
            <h2 className="font-[family-name:var(--font-italianno)] text-5xl md:text-6xl text-[#363025] leading-tight mb-8">
              Érdekességek rólam
            </h2>

            {[
              {
                q: "Egy apró érdekesség magamról",
                a: "Három lánytestvér közül a középső vagyok — ami valószínűleg megmagyarázza, miért vagyok annyira jó a békítésben és a kompromisszumokban.",
              },
              {
                q: "Mi az, ami feltölt egy hosszú nap után?",
                a: "Ha pihenésre vágyom, olvasok. Egy jó könyv mindig kikapcsol, bárhogy telt is a napom.",
              },
              {
                q: "Kedvenc helyem a világon?",
                a: "Zanzibár mindig különleges hely marad számomra — ott töltöttük a nászutunkat, és az a varázslat máig velem van.",
              },
              {
                q: "Mi az, amit mindig magammal viszek?",
                a: "Kézfertőtlenítő, szájfény és egy kis cukorka. Az élet apró meglepetéseire mindig felkészülten várok.",
              },
              {
                q: "Mi az, ami nélkül nem tudnék élni?",
                a: "A rendszerezés. Számomra ez nemcsak rendet jelent, hanem szabadságot — ha minden a helyén van, a fejemben is tisztább lesz.",
              },
            ].map((item, i, arr) => (
              <div key={i}>
                <div className="py-5">
                  <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.25em] uppercase text-[#363025]/50 mb-2">
                    {item.q}
                  </p>
                  <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/75 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
                {i < arr.length - 1 && <div className="h-px bg-[#363025]/15" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA ── */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <Image
          src="/images/zsambek_wedding_styled_shoot-052_web.jpg"
          alt="Esküvői háttér"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10">
          <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.35em] uppercase text-white/50 mb-4">
            Kezdjük el együtt
          </p>
          <h2 className="font-[family-name:var(--font-italianno)] text-5xl md:text-6xl text-white mb-4 leading-tight">
            Tegyük együtt felejthetetlenné a napotokat!
          </h2>
          <p className="font-[family-name:var(--font-quicksand)] text-white/70 text-sm mb-10 max-w-md mx-auto">
            Vedd fel velem a kapcsolatot, és kezdjük el a szervezést.
          </p>
          <a
            href="/kapcsolat"
            className="inline-block border border-white/60 text-white font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.3em] uppercase px-12 py-4 hover:bg-white hover:text-[#363025] transition-all duration-300"
          >
            Keress bizalommal
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
