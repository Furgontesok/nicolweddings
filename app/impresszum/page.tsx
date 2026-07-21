import NavbarSimple from "../components/NavbarSimple";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impresszum — Nicol Weddings and Events",
};

export default function Impresszum() {
  return (
    <>
      <NavbarSimple />

      <main className="pt-32 pb-24 px-6 min-h-screen bg-[#F5F3ED]">
        <div className="max-w-2xl mx-auto">

          <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.3em] uppercase text-[#363025]/40 mb-3">Jogi információk</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#363025] mb-14">Impresszum</h1>

          <div className="space-y-10 font-[family-name:var(--font-nunito)] text-[13px] leading-relaxed text-[#363025]/80">

            <section>
              <h2 className="text-[9px] tracking-[0.3em] uppercase text-[#363025]/40 mb-3">A webhely üzemeltetője</h2>
              <p>Gőz-Csongrádi Nikol</p>
              <p>2090 Remeteszőlős, Galamb utca 10.</p>
              <p>Magyarország</p>
            </section>

            <section>
              <h2 className="text-[9px] tracking-[0.3em] uppercase text-[#363025]/40 mb-3">Elérhetőségek</h2>
              <p>
                E-mail:{" "}
                <a href="mailto:nicol.weddings@gmail.com" className="underline underline-offset-2 hover:text-[#363025] transition-colors">
                  nicol.weddings@gmail.com
                </a>
              </p>
              <p>
                Telefon:{" "}
                <a href="tel:+36305444676" className="underline underline-offset-2 hover:text-[#363025] transition-colors">
                  +36 30 544 4676
                </a>
              </p>
              <p>
                Weboldal:{" "}
                <a href="https://nicolweddings.hu" className="underline underline-offset-2 hover:text-[#363025] transition-colors">
                  https://nicolweddings.hu
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-[9px] tracking-[0.3em] uppercase text-[#363025]/40 mb-3">Tárhelyszolgáltató</h2>
              <p className="font-medium">RACKFOREST ZRT.</p>
              <p>1132 Budapest, Victor Hugo utca 11. 5. em. B05001.</p>
              <p>Magyarország</p>
              <p className="mt-1">
                <a href="https://rackforest.hu" className="underline underline-offset-2 hover:text-[#363025] transition-colors">
                  https://rackforest.hu
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-[9px] tracking-[0.3em] uppercase text-[#363025]/40 mb-3">Szerzői jog</h2>
              <p>
                A weboldalon található tartalmak (szövegek, képek, grafikai elemek) szerzői jogi védelem alatt állnak.
                Azok engedély nélküli felhasználása, másolása vagy terjesztése tilos.
              </p>
            </section>

            <section>
              <h2 className="text-[9px] tracking-[0.3em] uppercase text-[#363025]/40 mb-3">Adatkezelés</h2>
              <p>
                A weboldal használatával kapcsolatos adatkezelési információkért kérjük, tekintsd meg az{" "}
                <a href="/adatvedelmi-tajekoztato" className="underline underline-offset-2 hover:text-[#363025] transition-colors">
                  Adatvédelmi tájékoztatót
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-[9px] tracking-[0.3em] uppercase text-[#363025]/40 mb-3">Felelősség kizárása</h2>
              <p>
                A weboldal tartalma kizárólag tájékoztató jellegű. Az üzemeltető nem vállal felelősséget az esetleges
                hibákért, hiányosságokért, illetve a weboldal elérhetetlenségéből eredő károkért.
                A külső hivatkozások (linkek) mögötti tartalmakért az üzemeltető felelősséget nem vállal.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
