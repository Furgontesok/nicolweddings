const photos = [
  { id: 1, aspect: "tall" },
  { id: 2, aspect: "wide" },
  { id: 3, aspect: "square" },
  { id: 4, aspect: "tall" },
  { id: 5, aspect: "wide" },
  { id: 6, aspect: "square" },
  { id: 7, aspect: "tall" },
  { id: 8, aspect: "wide" },
];

const aspectClass: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
};

const bgColors = [
  "bg-[#D6D6C9]",
  "bg-[#EDEDE1]",
  "bg-[#F5F3ED]",
  "bg-[#D6D6C9]",
  "bg-[#EDEDE1]",
  "bg-[#F5F3ED]",
  "bg-[#D6D6C9]",
  "bg-[#EDEDE1]",
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Cím */}
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-nunito)] text-xs tracking-[0.3em] uppercase text-[#363025]/50 mb-3">
            Pillanatok
          </p>
          <h2 className="font-[family-name:var(--font-italianno)] text-6xl md:text-7xl text-[#363025]">
            Galéria
          </h2>
          <div className="w-16 h-px bg-[#363025]/30 mx-auto mt-6" />
        </div>

        {/* Fotó rács */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3">
          {photos.map((p, i) => (
            <div
              key={p.id}
              className={`
                ${bgColors[i % bgColors.length]}
                ${aspectClass[p.aspect]}
                relative overflow-hidden group cursor-pointer
              `}
            >
              <div className="absolute inset-0 bg-[#363025]/0 group-hover:bg-[#363025]/20 transition-all duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-[family-name:var(--font-cormorant)] text-sm tracking-widest uppercase">
                  Megtekintés
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <span className="font-[family-name:var(--font-cormorant)] text-[#363025] text-sm">
                  Fotó {p.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
