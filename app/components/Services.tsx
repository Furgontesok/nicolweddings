import Image from "next/image";

const services = [
  {
    num: "01",
    title: "Teljes körű esküvőszervezés",
    desc: "Az első ötlettől az utolsó tánclépésig végigkísérlek benneteket. Helyszíntől, stílustól, szolgáltatóktól egészen a nagy nap zavartalan lebonyolításáig.",
    href: "/szolgaltatasok#service-01",
    img: "/images/egyeb-5.jpg",
    objectPosition: "center 72%",
  },
  {
    num: "02",
    title: "30 nap a nagy napig",
    desc: "Ti szervezitek, én a célegyenesben kapcsolódom be. Az utolsó hónapban átveszem a koordinációt, hogy a nagy napon csak egymásra figyeljetek.",
    href: "/szolgaltatasok#service-02",
    img: "/images/egyeb-6.jpg",
    objectPosition: "center 70%",
  },
  {
    num: "03",
    title: "Esküvői tanácsadás",
    desc: "Elakadtatok a szervezésben? Egy konzultáció alatt eligazítalak benneteket a teendők között, és gyakorlati tippekkel segítem tovább az utatokat.",
    href: "/szolgaltatasok#service-03",
    img: "/images/fooldal-referenciak/11..jpg",
    objectPosition: "center 30%",
  },
  {
    num: "04",
    title: "Egyéb rendezvények",
    desc: "Születésnapok, lánybúcsúk, babavárók és más különleges alkalmak. Ugyanolyan gondossággal és szeretettel, mint egy esküvőt.",
    href: "/szolgaltatasok#service-04",
    img: "/images/egyeb-11.jpg",
    objectPosition: "center 80%",
  },
];

export default function Services() {
  return (
    <section className="bg-[#EDEDE1] py-12 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Fejléc */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#363025]">
            Szolgáltatások
          </h2>
          <a
            href="/szolgaltatasok"
            className="hidden md:inline-block self-start md:self-auto shrink-0 border border-[#363025]/50 text-[#363025] font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-[#363025] hover:text-white transition-all duration-300"
          >
            További információk
          </a>
        </div>

        {/* Képkártyák rács */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="group relative overflow-hidden block"
              style={{ height: "320px" }}
            >
              <Image
                src={s.img}
                alt={s.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={s.objectPosition ? { objectPosition: s.objectPosition } : undefined}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#363025]/80 via-[#363025]/20 to-transparent transition-opacity duration-300 group-hover:from-[#363025]/90" />
              {/* Szöveg */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <span className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.25em] uppercase text-white/50 block mb-2">
                  {s.num}
                </span>
                <h3 className="font-[family-name:var(--font-cormorant)] text-[22px] font-light text-white leading-snug mb-3">
                  {s.title}
                </h3>
                <p className="font-[family-name:var(--font-quicksand)] text-white/70 text-[13px] leading-relaxed overflow-hidden max-h-24 md:max-h-0 md:group-hover:max-h-24 md:transition-all md:duration-500">
                  {s.desc}
                </p>
              </div>
              {/* Nyíl */}
              <span className="absolute top-5 right-6 text-white/30 group-hover:text-white/70 group-hover:translate-x-1 transition-all duration-300 text-lg">
                →
              </span>
            </a>
          ))}
        </div>

        {/* Mobil: gomb a kártyák alatt */}
        <div className="md:hidden flex justify-center mt-8">
          <a
            href="/szolgaltatasok"
            className="inline-block border border-[#363025]/50 text-[#363025] font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-[#363025] hover:text-white transition-all duration-300"
          >
            További információk
          </a>
        </div>

      </div>
    </section>
  );
}
