import NavbarSimple from "../components/NavbarSimple";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gyakori kérdések — Nicol Weddings and Events",
  description: "Összegyűjtöttem a leggyakrabban feltett kérdéseket az esküvőszervezéssel kapcsolatban.",
};

const faqs = [
  {
    q: "Miért érdemes esküvőszervezőt felkérni?",
    a: "Egy esküvő megszervezése rengeteg időt, energiát és utánajárást igényel. Szervezőként leveszem a vállatokról a terhet, hogy ne a stressz, hanem a boldog készülődés határozza meg ezt az időszakot. Célom, hogy ne csupán egy szépen megszervezett napotok legyen, hanem egy örök emlék, amely mindig mosolyt csal az arcotokra.",
  },
  {
    q: "Vállalsz részleges szervezést is, vagy csak teljes körűt?",
    a: "Rugalmasan alkalmazkodom az igényeitekhez, lehet szó teljes szervezésről, vagy akár csak a nagy nap koordinációjáról. Mindenben számíthattok rám.",
  },
  {
    q: "Hogyan történik a közös munka?",
    a: "Az első, díjmentes konzultáción megismerem a történeteteket és elképzeléseiteket. Ezt követően készítek egy személyre szabott ajánlatot, és ha elfogadjátok, kezdetét veszi a közös munka. Lépésről lépésre haladunk, amíg minden részlet a helyére kerül, hogy a nagy nap pontosan olyan legyen, amilyennek megálmodtátok.",
  },
  {
    q: "Segítesz szolgáltatók kiválasztásában is?",
    a: "Ez a munkám egyik legfontosabb része. Olyan szolgáltatókat ajánlok Nektek, akikről tudom, hogy szívvel-lélekkel dolgoznak, és gördülékennyé teszik az esküvőtöket. A végső döntés mindig a Tiétek.",
  },
  {
    q: "Hogyan alakul a díjazásod?",
    a: "A díjazás mindig személyre szabott, az elképzeléseitektől és a szervezés részleteitől függ. Az első konzultáció után készítek egy átlátható ajánlatot, így pontosan tudjátok majd, mire számíthattok.",
  },
  {
    q: "Mi történik, ha már van lefoglalt szolgáltatóm?",
    a: "Ez természetesen nem probléma, szívesen dolgozom együtt az általatok választott szolgáltatókkal. Fontos azonban tudnotok, hogy ha korábban nem dolgoztam velük, teljes felelősséget nem tudok vállalni a munkájukért, ugyanakkor mindent megteszek, hogy a közös munka zökkenőmentes legyen.",
  },
  {
    q: "Vállalsz más eseményeket is az esküvők mellett?",
    a: "Az esküvők mellett örömmel szervezek születésnapokat, lánybúcsúkat, lánykéréseket vagy babaváró ünnepségeket, hogy még szebbé tegyük ezeket a különleges alkalmakat.",
  },
];

export default function Gyik() {
  return (
    <>
      <NavbarSimple />

      {/* Hero */}
      <section className="bg-[#F5F3ED] pt-32 pb-16 px-6 text-center">
        <p className="font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.4em] uppercase text-[#363025]/35 mb-4">
          Gyakran ismételt kérdések
        </p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-light text-[#363025] tracking-wide mb-6">
          Van kérdésed?
        </h1>
        <div className="w-10 h-px bg-[#363025]/20 mx-auto mb-6" />
        <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/50 text-[15px] max-w-md mx-auto leading-relaxed">
          Összegyűjtöttem a leggyakrabban feltett kérdéseket. Ha nem találod köztük a választ, írj nekem bátran.
        </p>
      </section>

      {/* FAQ grid */}
      <section className="bg-[#363025] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {faqs.map((faq, i) => (
              <div key={i} className="border-t border-white/10 pt-8">
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-light text-white mb-4 leading-snug">
                  {faq.q}
                </h3>
                <p className="font-[family-name:var(--font-quicksand)] text-white/45 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="/kapcsolat"
              className="inline-block border border-white/60 text-white font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.25em] uppercase px-12 py-4 hover:bg-white hover:text-[#363025] transition-all duration-300"
            >
              Írj nekem
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
