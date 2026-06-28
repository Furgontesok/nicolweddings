const services = [
  {
    num: "01",
    title: "Teljes körű esküvőszervezés",
    desc: "Az első ötlettől az utolsó tánclépésig végigkísérlek benneteket. Helyszíntől, stílustól, szolgáltatóktól egészen a nagy nap zavartalan lebonyolításáig.",
    href: "/szolgaltatasok#service-01",
  },
  {
    num: "02",
    title: "30 nap a nagy napig",
    desc: "Ti szervezitek, én a célegyenesben kapcsolódom be. Az utolsó hónapban átveszem a koordinációt, hogy a nagy napon csak egymásra figyeljetek.",
    href: "/szolgaltatasok#service-02",
  },
  {
    num: "03",
    title: "Esküvői tanácsadás",
    desc: "Elakadtatok a szervezésben? Egy konzultáció alatt eligazítalak benneteket a teendők között, és gyakorlati tippekkel segítem tovább az utatokat.",
    href: "/szolgaltatasok#service-03",
  },
  {
    num: "04",
    title: "Egyéb rendezvények",
    desc: "Születésnapok, lánybúcsúk, babavárók és más különleges alkalmak. Ugyanolyan gondossággal és szeretettel, mint egy esküvőt.",
    href: "/szolgaltatasok#service-04",
  },
];

export default function Services() {
  return (
    <section className="bg-[#D6D6C9] py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Fejléc */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#363025]">
            Szolgáltatások
          </h2>
          <a
            href="/szolgaltatasok"
            className="self-start md:self-auto shrink-0 inline-block border border-[#363025]/50 text-[#363025] font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-[#363025] hover:text-white transition-all duration-300"
          >
            További információk
          </a>
        </div>

        {/* Lista */}
        <div>
          {services.map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="group flex items-start gap-8 border-t border-[#363025]/15 py-8 hover:border-[#363025]/40 transition-colors duration-300"
            >
              <span className="font-[family-name:var(--font-cormorant)] text-[#363025]/20 text-4xl font-light leading-none shrink-0 group-hover:text-[#363025]/40 transition-colors duration-300">
                {s.num}
              </span>
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-cormorant)] text-[26px] font-light text-[#363025] mb-2 group-hover:tracking-wide transition-all duration-300">
                  {s.title}
                </h3>
                <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/55 text-[15px] leading-[1.8]">
                  {s.desc}
                </p>
              </div>
              <span className="text-[#363025]/25 group-hover:text-[#363025]/60 group-hover:translate-x-1 transition-all duration-300 text-lg mt-1 shrink-0">
                →
              </span>
            </a>
          ))}
          <div className="border-t border-[#363025]/15" />
        </div>

      </div>
    </section>
  );
}
