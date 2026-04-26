import Image from "next/image";

export default function About() {
  return (
    <section id="rolam" className="bg-[#F5F3ED] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Szöveg — bal */}
          <div className="flex-1 order-2 md:order-1">
            <p className="font-[family-name:var(--font-nunito)] text-xs tracking-[0.3em] uppercase text-[#363025]/50 mb-4">
              Bemutatkozás
            </p>
            <h2 className="font-[family-name:var(--font-italianno)] text-5xl md:text-6xl text-[#363025] mb-6 leading-tight">
              Rólam
            </h2>
            <div className="w-12 h-px bg-[#363025]/30 mb-8" />
            <div className="font-[family-name:var(--font-quicksand)] text-[#363025]/70 leading-relaxed space-y-4">
              <p>
                Nicol vagyok, esküvőszervező és dekorátor. Több éve segítek pároknak megvalósítani
                álmaik esküvőjét — legyen az intim, kis ceremónia vagy nagyszabású ünnepség.
              </p>
              <p>
                Számomra minden esküvő egyedi történet. Az a célom, hogy a ti személyiségetek
                és szerelmetek tükröződjön minden apró részletben, a virágkötéstől a terítékig.
              </p>
              <p>
                Mellettetek vagyok az első konzultációtól egészen addig, amíg az utolsó vendég
                is hazaér — hogy ti csak egymásra figyelhessetek.
              </p>
            </div>
            <a
              href="/kapcsolat"
              className="inline-block mt-10 border border-[#363025] text-[#363025] font-[family-name:var(--font-nunito)] text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#363025] hover:text-white transition-all duration-300"
            >
              Bővebben
            </a>
          </div>

          {/* Kép — jobb */}
          <div className="order-1 md:order-2 shrink-0">
            <div
              className="w-64 h-80 relative overflow-hidden"
              style={{ borderRadius: "130px 130px 0 0" }}
            >
              <Image
                src="/images/R%C3%B3lam%20f%C5%91k%C3%A9p.jpg"
                alt="Nicol — esküvőszervező"
                fill
                className="object-cover object-top"
                sizes="256px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
