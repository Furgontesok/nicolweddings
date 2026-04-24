export default function Hero() {
  return (
    <section id="kezdooldal" className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Bal oldali kép */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen bg-[#D6D6C9] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#363025]/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#363025]/40 font-[family-name:var(--font-cormorant)] text-xl">Kép 1</span>
        </div>
      </div>

      {/* Jobb oldali kép */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen bg-[#EDEDE1] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#363025]/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#363025]/40 font-[family-name:var(--font-cormorant)] text-xl">Kép 2</span>
        </div>
      </div>

      {/* Szöveg overlay — középen */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
        <div className="bg-[#363025]/40 backdrop-blur-[2px] px-10 py-8 rounded-sm">
          <h1 className="font-[family-name:var(--font-italianno)] text-white text-6xl md:text-8xl leading-none tracking-wide drop-shadow-lg">
            Tökéletesen
            <br />
            összeillünk
          </h1>
          <p className="mt-4 text-white/80 font-[family-name:var(--font-cormorant)] text-lg md:text-xl tracking-widest uppercase">
            Nicol Weddings &amp; Events
          </p>
        </div>
      </div>

      {/* Scroll lefelé nyíl */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <div className="w-px h-12 bg-white/60 animate-pulse" />
      </div>
    </section>
  );
}
