const services = [
  {
    title: "Teljes körű esküvőszervezés",
    desc: "Az első találkozótól az utolsó táncig minden részletet gondosan megtervezünk és koordinálunk.",
  },
  {
    title: "Koordináció",
    desc: "Már van elképzelésed? Én gondoskodom arról, hogy a nagy napon minden zökkenőmentesen menjen.",
  },
  {
    title: "Dekoráció",
    desc: "Egyedi, stílusos dekorációs megoldások, amelyek tükrözik a személyiségeteket és az álmaitokat.",
  },
  {
    title: "Eseményszervezés",
    desc: "Esküvőn túl: eljegyzések, cross-baby shower, évfordulók és különleges eseményekre specializálódva.",
  },
];

export default function Services() {
  return (
    <section id="szolgaltatasok" className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Cím */}
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-nunito)] text-xs tracking-[0.3em] uppercase text-[#363025]/50 mb-3">
            Mit kínálok
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#363025]">
            Szolgáltatások
          </h2>
          <div className="w-16 h-px bg-[#363025]/30 mx-auto mt-6" />
        </div>

        {/* Szolgáltatás lista */}
        <ul className="divide-y divide-[#D6D6C9]">
          {services.map((s, i) => (
            <li
              key={i}
              className="group flex flex-col md:flex-row md:items-center gap-4 py-8 cursor-default hover:bg-[#F5F3ED] transition-colors duration-300 px-4 -mx-4"
            >
              <span className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#363025]/20 w-12 shrink-0 group-hover:text-[#363025]/40 transition-colors">
                0{i + 1}
              </span>
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-quicksand)] font-semibold text-xl text-[#363025] tracking-wide mb-1">
                  {s.title}
                </h3>
                <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <span className="text-[#363025]/30 group-hover:text-[#363025]/60 transition-colors text-2xl">→</span>
            </li>
          ))}
        </ul>

        {/* CTA gomb */}
        <div className="text-center mt-14">
          <a
            href="#kapcsolat"
            className="inline-block border border-[#363025] text-[#363025] font-[family-name:var(--font-nunito)] text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#363025] hover:text-white transition-all duration-300"
          >
            Referenciákat szeretnék
          </a>
        </div>
      </div>
    </section>
  );
}
