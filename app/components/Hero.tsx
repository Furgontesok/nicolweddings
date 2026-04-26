import Image from "next/image";

export default function Hero() {
  return (
    <section id="kezdooldal" className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Bal oldali kép */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden">
        <Image
          src="/images/4K2A1978-2.jpg"
          alt="Esküvői fotó"
          fill
          priority
          className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-[#363025]/30" />
      </div>

      {/* Jobb oldali kép */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden">
        <Image
          src="/images/5V5A0579-2.jpg"
          alt="Esküvői fotó"
          fill
          priority
          className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-[#363025]/20" />
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
