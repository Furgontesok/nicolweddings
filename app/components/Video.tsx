export default function Video() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Cím */}
        <div className="text-center mb-12">
          <p className="font-[family-name:var(--font-nunito)] text-xs tracking-[0.3em] uppercase text-[#363025]/50 mb-3">
            Érezd az hangulatot
          </p>
          <h2 className="font-[family-name:var(--font-italianno)] text-6xl md:text-7xl text-[#363025]">
            Videó
          </h2>
          <div className="w-16 h-px bg-[#363025]/30 mx-auto mt-6" />
        </div>

        {/* Videó placeholder */}
        <div className="relative w-full aspect-video bg-[#D6D6C9] overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            {/* Play gomb */}
            <div className="w-20 h-20 rounded-full border-2 border-[#363025]/40 flex items-center justify-center hover:border-[#363025] transition-colors cursor-pointer group">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-[#363025]/60 border-b-[10px] border-b-transparent ml-2 group-hover:border-l-[#363025] transition-colors" />
            </div>
            <span className="font-[family-name:var(--font-cormorant)] text-[#363025]/40 text-sm tracking-widest uppercase">
              Videó ide kerül
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
