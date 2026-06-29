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

      {/* ── Hero ── */}
      <div className="pt-16 bg-[#F5F3ED]">
        <div className="relative overflow-hidden" style={{ height: "55vh", minHeight: 360 }}>
          <Image
            src="/images/vivi-bence-15.jpg"
            alt="Rólam"
            fill
            className="object-cover"
            style={{ objectPosition: "center 25%" }}
            sizes="100vw"
            priority
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10"
            style={{ height: "40%", background: "linear-gradient(to bottom, transparent, rgba(245,243,237,0.9))" }}
          />
        </div>
        <div className="text-center relative z-10 -mt-[2.5rem] pb-4">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-[6.3rem] font-light text-[#363025] tracking-[0.01em] uppercase">
            Rólam
          </h1>
        </div>
      </div>

      {/* ── Amiben hiszek ── */}
      <section className="bg-[#F5F3ED] py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-10">
          <div className="md:w-[58%] pt-2">
            <p className="font-[family-name:var(--font-cormorant)] text-[#363025]/40 text-xl italic mb-5">
              amiben hiszek
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[#363025] text-4xl md:text-[46px] font-light leading-none italic">
              Ez nem csupán egy esküvő, hanem az örökkévalóságotok első fejezete.
            </h2>
          </div>
          <div className="md:w-[42%] pt-4 md:pt-8">
            <div className="font-[family-name:var(--font-quicksand)] text-[#363025]/65 leading-relaxed text-[15px] space-y-4">
              <p>
                Hiszek abban, hogy minden esküvő egyedi, és a párok történetéhez kell illeszkednie. Számomra ugyanolyan fontosak az apró részletek, mint a nagy pillanatok, mert ezek együtt teszik a napot harmonikussá és felejthetetlenné.
              </p>
              <p>
                A saját esküvőm szervezése közben tanultam meg igazán, mennyit számít egy támogató, nyugodt jelenlét a háttérben. Ezért ma már nemcsak szervezőként, hanem biztonságot adó társaként kísérem végig a párokat – a legelső ötlettől az utolsó táncig.
              </p>
            </div>
            <div className="w-10 h-px bg-[#363025]/20 mt-7 mb-5" />
            <p className="font-[family-name:var(--font-cormorant)] text-[#363025] text-xl font-light italic">
              Ez az, amiért a Nicol Weddings & Events több, mint egy szervezői szolgáltatás.
            </p>
          </div>
        </div>
      </section>

      {/* ── Bemutatkozás: szöveg bal + portré jobb ── */}
      <section className="bg-[#F5F3ED] py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse gap-14 items-start">

          {/* Portré */}
          <div className="shrink-0 md:w-[38%]">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1/2" }}>
              <Image
                src="/images/R%C3%B3lam%20mell%C3%A9k1.jpg"
                alt="Gőz-Csongrádi Nicol"
                fill
                className="object-cover object-top"
                sizes="38vw"
              />
            </div>
          </div>

          {/* Szöveg */}
          <div className="flex-1 pt-4">
            <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.3em] uppercase text-[#363025]/50 mb-3">
              Alapító · Esküvőszervező · Magyarország
            </p>
            <h2 className="font-[family-name:var(--font-italianno)] text-5xl md:text-6xl text-[#363025] leading-tight mb-6">
              Gőz-Csongrádi Nicol
            </h2>
            <div className="w-10 h-px bg-[#363025]/25 mb-8" />
            <div className="font-[family-name:var(--font-quicksand)] text-[#363025]/65 leading-relaxed text-[15px] space-y-5">
              <p>
                Az esküvőszervezés világában 2022 óta tevékenykedem, ez idő alatt számos tapasztalatot szereztem nemcsak esküvők, hanem kisebb, ünnepi alkalmak, mint születésnapok, lánybúcsúk, babavárók vagy más rendezvények lebonyolításában is. Emellett a családi vállalkozásunk is szorosan kapcsolódik az esküvőkhöz, így már hosszabb ideje betekintést nyerhettem ebbe a különleges és izgalmas szakmába.
              </p>
              <p>
                A részletek összehangolása, a koncepció megálmodása és a rendezvény napjának zavartalan levezetése számomra nem csupán munka, hanem igazi szenvedély. Imádom azt az érzést, amikor minden a helyére kerül, és egy esemény valódi élménnyé válik.
              </p>
              <p>
                Ha olyan szervezőt keresel, aki precízen, megbízhatóan és szívvel-lélekkel kísér végig az előkészületek során, akkor örömmel várlak, hogy együtt valóra váltsuk elképzeléseiteket, bármilyen különleges alkalomról is legyen szó.
              </p>
            </div>
            <p className="font-[family-name:var(--font-italianno)] text-[#363025] text-4xl mt-8 mb-8">
              Nicol
            </p>
            <a
              href="/szolgaltatasok"
              className="inline-block border border-[#363025] text-[#363025] font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.25em] uppercase px-12 py-4 hover:bg-[#363025] hover:text-white transition-all duration-300"
            >
              Dolgozzunk együtt
            </a>
          </div>
        </div>
      </section>

      {/* ── 2024 történet: kép bal + szöveg jobb ── */}
      <section className="bg-[#F5F3ED] py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-14 items-center">

          <div className="shrink-0 md:w-[42%]">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <Image
                src="/images/amikor-2024.jpg"
                alt="Nicol saját esküvője"
                fill
                className="object-cover object-center"
                sizes="42vw"
              />
            </div>
          </div>

          <div className="flex-1">
            <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.3em] uppercase text-[#363025]/35 mb-5">
              2024
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[#363025] text-3xl md:text-4xl font-light leading-snug mb-5">
              Amikor a saját esküvőm szervezésébe kezdtem…
            </h2>
            <div className="w-10 h-px bg-[#363025]/25 mb-7" />
            <div className="font-[family-name:var(--font-quicksand)] text-[#363025]/65 leading-relaxed text-[15px] space-y-4">
              <p>
                …még nem tudtam, hogy ezzel egy új fejezet indul az életemben. Imádtam minden pillanatát, és ekkor született meg bennem az elhatározás, hogy másoknak is segítsek átélni ugyanezt az örömöt. Így jött létre a Nicol Weddings & Events, az első saját vállalkozásom.
              </p>
              <p>
                Számomra a legfontosabb, hogy ne csak megszervezzem a napotokat, hanem valódi támaszotok legyek. Egy nyugodt jelenlét a kulisszák mögött, aki gondoskodik arról, hogy Ti csak megéljétek a pillanatot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Érdekességek rólam ── */}
      <section className="bg-[#EDEDE1] py-20 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Fejléc: ovális kép + cím */}
          <div className="flex flex-col md:flex-row items-end gap-8 mb-14">
            <div
              className="relative overflow-hidden shrink-0"
              style={{ width: 120, height: 160, borderRadius: "50%" }}
            >
              <Image
                src="/images/R%C3%B3lam%20mell%C3%A9k3.jpg"
                alt="Nicol"
                fill
                className="object-cover object-center"
                sizes="120px"
              />
            </div>
            <div>
              <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.3em] uppercase text-[#363025]/35 mb-3">
                Személyes
              </p>
              <h2 className="font-[family-name:var(--font-italianno)] text-3xl md:text-5xl text-[#363025] leading-tight">
                Érdekességek rólam
              </h2>
            </div>
          </div>

          {/* Q&A 2 oszlop */}
          <div className="grid md:grid-cols-2 gap-x-16">
            {[
              { q: "Mi az, ami nélkül nem tudnék élni?", a: "A rendszerezés. Számomra ez nemcsak rendet jelent, hanem szabadságot: ha minden a helyén van, a fejemben is tisztább lesz." },
              { q: "Egy apró érdekesség magamról", a: "Három lánytestvér közül a középső vagyok, ami valószínűleg megmagyarázza, miért vagyok annyira jó a békítésben és a kompromisszumokban." },
              { q: "Kedvenc helyem a világon?", a: "Zanzibár mindig különleges hely marad számomra. Ott töltöttük a nászutunkat, és az a varázslat máig velem van." },
              { q: "Mi az, ami feltölt egy hosszú nap után?", a: "Ha pihenésre vágyom, olvasok. Egy jó könyv mindig kikapcsol, bárhogy telt is a napom." },
              { q: "Mi az, amit mindig magammal viszek?", a: "Kézfertőtlenítő, szájfény és egy kis cukorka. Az élet apró meglepetéseire mindig felkészülten várok." },
            ].map((item, i) => (
              <div key={i} className="py-6 border-t border-[#363025]/10">
                <p className="font-[family-name:var(--font-nunito)] text-sm tracking-[0.1em] uppercase text-[#363025]/50 mb-2 font-semibold">
                  {item.q}
                </p>
                <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/70 text-base leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <Image
          src="/images/rolam-hosszu-kep.jpg"
          alt="Esküvői háttér"
          fill
          className="object-cover object-bottom"
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
            className="inline-block border border-white/60 text-white font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.25em] uppercase px-12 py-4 hover:bg-white hover:text-[#363025] transition-all duration-300"
          >
            Keress bizalommal
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
