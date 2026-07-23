import Image from "next/image";

export default function About() {
  return (
    <section id="rolam" className="bg-[#F5F3ED] pt-6 pb-8 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-1 md:gap-y-8 items-start">

          {/* 1. Heading + idézet — mobilon első, desktopon bal-felső */}
          <div className="order-1 md:col-start-1 md:row-start-1">
            <div className="w-40 h-px bg-[#363025]/30 mb-2" />
            <h2 className="font-[family-name:var(--font-italianno)] text-4xl md:text-4xl text-[#363025] mb-1 leading-tight">
              Ismerj meg
            </h2>
            <p className="font-[family-name:var(--font-cormorant)] text-[#363025]/80 text-[1.75rem] md:text-[2.5rem] text-balance" style={{ lineHeight: "1.15", letterSpacing: "-0.02em" }}>
              Hiszem, hogy az apró részletek formálják az esküvő egyediségét, ettől lesz minden utánozhatatlan.
            </p>
          </div>

          {/* 2. Kép — mobilon második, desktopon jobb (2 sort átfog) */}
          <div className="order-2 md:col-start-2 md:row-start-1 md:row-span-2 flex justify-center md:block my-6 md:my-0">
            <div className="w-[90%] md:w-full max-w-[440px] h-[520px] md:h-[620px] relative overflow-hidden">
              <Image
                src="/images/R%C3%B3lam%20f%C5%91oldal.jpg"
                alt="Nicol — esküvőszervező"
                fill
                className="object-cover"
                style={{ objectPosition: "center 85%" }}
                sizes="(max-width: 768px) 100vw, 440px"
              />
            </div>
          </div>

          {/* 3. Szöveg + gomb — mobilon harmadik, desktopon bal-alsó */}
          <div className="order-3 md:col-start-1 md:row-start-2">
            <div className="font-[family-name:var(--font-quicksand)] text-[#363025]/70 leading-relaxed space-y-4">
              <p>
                <strong>Szia, Nicol vagyok</strong> 2022 óta tevékenykedem az esküvőszervezés világában, emellett számos ünnepi alkalom – születésnap, lánybúcsú, babaváró lebonyolításában is tapasztalatot szereztem. A részletek összehangolása, a koncepció megálmodása és a rendezvény napjának zavartalan levezetése számomra igazi szenvedély.<br className="md:hidden" /> Hiszek abban, hogy minden esküvő egyedi,<br className="md:hidden" /> és a párok történetéhez kell illeszkednie. Precízen, megbízhatóan és szívvel-lélekkel kísérem végig az előkészületeket, hogy a nap valódi élménnyé váljon.
              </p>
            </div>
            <a
              href="/rolam"
              className="inline-block mt-10 border border-[#363025] text-[#363025] font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.25em] uppercase px-12 py-4 hover:bg-[#363025] hover:text-white transition-all duration-300"
            >
              Bemutatkozom
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
