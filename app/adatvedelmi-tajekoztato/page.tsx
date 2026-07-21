import NavbarSimple from "../components/NavbarSimple";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adatvédelmi tájékoztató — Nicol Weddings and Events",
};

export default function Adatvedelmi() {
  return (
    <>
      <NavbarSimple />

      <main className="pt-32 pb-24 px-6 min-h-screen bg-[#F5F3ED]">
        <div className="max-w-2xl mx-auto">

          <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.3em] uppercase text-[#363025]/40 mb-3">Jogi információk</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#363025] mb-3">Adatvédelmi tájékoztató</h1>
          <p className="font-[family-name:var(--font-nunito)] text-[11px] text-[#363025]/40 mb-14">Hatályos: 2025. január 1-től</p>

          <div className="space-y-10 font-[family-name:var(--font-nunito)] text-[13px] leading-relaxed text-[#363025]/80">

            <section>
              <h2 className="text-[9px] tracking-[0.3em] uppercase text-[#363025]/40 mb-3">1. Az adatkezelő adatai</h2>
              <p><span className="text-[#363025]">Név:</span> Gőz-Csongrádi Nikol</p>
              <p><span className="text-[#363025]">Cím:</span> 2090 Remeteszőlős, Galamb utca 10., Magyarország</p>
              <p>
                <span className="text-[#363025]">E-mail:</span>{" "}
                <a href="mailto:nicol.weddings@gmail.com" className="underline underline-offset-2 hover:text-[#363025] transition-colors">
                  nicol.weddings@gmail.com
                </a>
              </p>
              <p>
                <span className="text-[#363025]">Telefon:</span>{" "}
                <a href="tel:+36305444676" className="underline underline-offset-2 hover:text-[#363025] transition-colors">
                  +36 30 544 4676
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-[9px] tracking-[0.3em] uppercase text-[#363025]/40 mb-3">2. Kezelt személyes adatok és azok célja</h2>

              <p className="text-[#363025] mb-2">Kapcsolati és ajánlatkérő űrlap</p>
              <p className="mb-4">
                Az oldalon található kapcsolatfelvételi és ajánlatkérő űrlapok kitöltésekor a következő adatokat kezeljük:
                név, e-mail cím, telefonszám, esküvő tervezett időpontja, vendégek száma, igényelt szolgáltatás típusa,
                illetve hogy honnan hallott rólunk. Az adatkezelés célja az ajánlatkérés feldolgozása és a kapcsolatfelvétel.
                Jogalapja: az érintett hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont).
              </p>

              <p className="text-[#363025] mb-2">Ingyenes e-book letöltés</p>
              <p className="mb-4">
                Az ingyenes helyszín-ajánló letöltésekor e-mail címet kérünk. Az adatkezelés célja az e-book
                elküldése és kapcsolattartás. Jogalapja: az érintett hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont).
              </p>

              <p className="text-[#363025] mb-2">E-mailes kapcsolattartás</p>
              <p>
                Az e-mailes levelezés során megadott személyes adatokat (név, e-mail cím, az üzenetben szereplő
                egyéb adatok) a levelezés lebonyolítása érdekében kezeljük. Jogalapja: az érintett hozzájárulása,
                illetve szerződéses kapcsolat esetén a szerződés teljesítése (GDPR 6. cikk (1) bekezdés b) pont).
              </p>
            </section>

            <section>
              <h2 className="text-[9px] tracking-[0.3em] uppercase text-[#363025]/40 mb-3">3. Az adatkezelés időtartama</h2>
              <p>
                A kapcsolati és ajánlatkérő űrlapon megadott adatokat az utolsó kapcsolatfelvételtől számított
                <span className="text-[#363025]"> 2 évig</span> tároljuk, vagy az érintett törlési kérelméig.
                Szerződéses kapcsolat esetén az adatokat a polgári jogi elévülési idő (5 év) végéig őrizzük meg.
                Az e-book letöltéshez megadott e-mail címet az érintett leiratkozásáig kezeljük.
              </p>
            </section>

            <section>
              <h2 className="text-[9px] tracking-[0.3em] uppercase text-[#363025]/40 mb-3">4. Adatfeldolgozók</h2>
              <p className="mb-4">Az adatkezelő az alábbi adatfeldolgozókat veszi igénybe:</p>
              <div className="space-y-3">
                <div>
                  <p className="text-[#363025]">Supabase Inc.</p>
                  <p>Az űrlapok adatait tároló adatbázis-szolgáltatás.</p>
                  <p>970 Toa Payoh North, #07-04, Singapore 318992</p>
                  <p>
                    <a href="https://supabase.com/privacy" className="underline underline-offset-2 hover:text-[#363025] transition-colors">
                      supabase.com/privacy
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-[#363025]">Google LLC (Gmail)</p>
                  <p>Az e-mailes levelezés lebonyolítására használt szolgáltatás.</p>
                  <p>1600 Amphitheatre Parkway, Mountain View, CA 94043, Egyesült Államok</p>
                  <p>
                    <a href="https://policies.google.com/privacy" className="underline underline-offset-2 hover:text-[#363025] transition-colors">
                      policies.google.com/privacy
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-[#363025]">RACKFOREST ZRT.</p>
                  <p>Tárhelyszolgáltató.</p>
                  <p>1132 Budapest, Victor Hugo utca 11. 5. em. B05001., Magyarország</p>
                  <p>
                    <a href="https://rackforest.hu" className="underline underline-offset-2 hover:text-[#363025] transition-colors">
                      rackforest.hu
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-[9px] tracking-[0.3em] uppercase text-[#363025]/40 mb-3">5. Adattovábbítás harmadik félnek</h2>
              <p>
                Az adatkezelő a személyes adatokat harmadik félnek nem adja át, kivéve a fent felsorolt
                adatfeldolgozókat, illetve ha azt jogszabály kötelezővé teszi (pl. hatósági megkeresés esetén).
              </p>
            </section>

            <section>
              <h2 className="text-[9px] tracking-[0.3em] uppercase text-[#363025]/40 mb-3">6. Az érintett jogai</h2>
              <p className="mb-3">Az adatkezelés kapcsán az érintettet az alábbi jogok illetik meg:</p>
              <ul className="space-y-2 list-none">
                {[
                  ["Hozzáférés joga", "Tájékoztatást kérhet arról, hogy milyen adatait kezeljük."],
                  ["Helyesbítés joga", "Kérheti pontatlan adatainak kijavítását."],
                  ["Törlés joga", "Kérheti adatai törlését, ha az adatkezelésnek nincs jogszerű alapja."],
                  ["Adatkezelés korlátozásának joga", "Bizonyos esetekben kérheti az adatkezelés felfüggesztését."],
                  ["Tiltakozás joga", "Tiltakozhat személyes adatainak kezelése ellen."],
                  ["Adathordozhatóság joga", "Kérheti adatait géppel olvasható formátumban."],
                ].map(([cim, szoveg]) => (
                  <li key={cim}>
                    <span className="text-[#363025]">{cim}:</span> {szoveg}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Jogai gyakorlásához kérjük, vegye fel a kapcsolatot az adatkezelővel a fenti elérhetőségeken.
                A kérelemre 30 napon belül válaszolunk.
              </p>
            </section>

            <section>
              <h2 className="text-[9px] tracking-[0.3em] uppercase text-[#363025]/40 mb-3">7. Sütik (cookie-k)</h2>
              <p>
                A weboldal működéséhez szükséges, munkamenet-kezelő sütiket használ, amelyek az oldal elhagyásakor
                automatikusan törlődnek. Ezek a sütik személyes adatot nem tárolnak, és az oldal helyes
                működéséhez elengedhetetlenek.
              </p>
            </section>

            <section>
              <h2 className="text-[9px] tracking-[0.3em] uppercase text-[#363025]/40 mb-3">8. Jogorvoslati lehetőségek</h2>
              <p className="mb-3">
                Ha úgy véli, hogy adatainak kezelése során jogsértés történt, panaszt tehet az adatvédelmi
                felügyeleti hatóságnál:
              </p>
              <p className="text-[#363025]">Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)</p>
              <p>1055 Budapest, Falk Miksa utca 9-11.</p>
              <p>
                <a href="https://naih.hu" className="underline underline-offset-2 hover:text-[#363025] transition-colors">
                  naih.hu
                </a>
              </p>
              <p>
                <a href="mailto:ugyfelszolgalat@naih.hu" className="underline underline-offset-2 hover:text-[#363025] transition-colors">
                  ugyfelszolgalat@naih.hu
                </a>
              </p>
              <p>+36 1 391 1400</p>
            </section>

            <section>
              <h2 className="text-[9px] tracking-[0.3em] uppercase text-[#363025]/40 mb-3">9. A tájékoztató módosítása</h2>
              <p>
                Az adatkezelő fenntartja a jogot, hogy jelen tájékoztatót módosítsa. A módosításokról az érintetteket
                a weboldalon tájékoztatjuk. A tájékoztató mindig hatályos változata ezen az oldalon érhető el.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
