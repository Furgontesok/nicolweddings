import Image from "next/image";

const photos = [
  { src: "/images/zsambek_wedding_styled_shoot-001_web.jpg", aspect: "square" },
  { src: "/images/4K2A2166.jpg", aspect: "tall" },
  { src: "/images/zsambek_wedding_styled_shoot-021_web.jpg", aspect: "wide" },
  { src: "/images/5V5A0670-2.jpg", aspect: "square" },
  { src: "/images/4K2A2624.jpg", aspect: "tall" },
  { src: "/images/zsambek_wedding_styled_shoot-040_web.jpg", aspect: "square" },
  { src: "/images/4K2A2692.jpg", aspect: "wide" },
  { src: "/images/5V5A0754.jpg", aspect: "square" },
  { src: "/images/zsambek_wedding_styled_shoot-044_web.jpg", aspect: "tall" },
  { src: "/images/4K2A2918.jpg", aspect: "square" },
  { src: "/images/5V5A1027.jpg", aspect: "wide" },
  { src: "/images/zsambek_wedding_styled_shoot-052_web.jpg", aspect: "square" },
];

const aspectClass: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
};

export default function Gallery() {
  return (
    <section id="galeria" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-nunito)] text-xs tracking-[0.3em] uppercase text-[#363025]/50 mb-3">
            Pillanatok
          </p>
          <h2 className="font-[family-name:var(--font-italianno)] text-6xl md:text-7xl text-[#363025]">
            Galéria
          </h2>
          <div className="w-16 h-px bg-[#363025]/30 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`${aspectClass[p.aspect]} relative overflow-hidden group cursor-pointer bg-[#D6D6C9]`}
            >
              <Image
                src={p.src}
                alt="Esküvői fotó"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-[#363025]/0 group-hover:bg-[#363025]/25 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-[family-name:var(--font-cormorant)] text-sm tracking-widest uppercase drop-shadow">
                  Megtekintés
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
