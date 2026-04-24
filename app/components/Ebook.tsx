export default function Ebook() {
  return (
    <section className="bg-[#363025] py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Ebook mockup */}
        <div className="shrink-0">
          <div className="w-52 h-72 bg-[#D6D6C9] shadow-2xl relative">
            <div className="absolute inset-4 border border-[#363025]/20 flex flex-col items-center justify-center text-center gap-2 p-4">
              <p className="font-[family-name:var(--font-italianno)] text-[#363025] text-2xl leading-tight">
                Nicol Weddings
              </p>
              <div className="w-8 h-px bg-[#363025]/30" />
              <p className="font-[family-name:var(--font-cormorant)] text-[#363025]/60 text-xs tracking-widest uppercase">
                E-book
              </p>
            </div>
          </div>
        </div>

        {/* Szöveg */}
        <div className="text-center md:text-left">
          <p className="font-[family-name:var(--font-nunito)] text-xs tracking-[0.3em] uppercase text-white/40 mb-3">
            Ingyenes útmutató
          </p>
          <h2 className="font-[family-name:var(--font-italianno)] text-5xl md:text-6xl text-white mb-6 leading-tight">
            Töltsd le az ingyenes
            <br />
            esküvői útmutatómat
          </h2>
          <p className="font-[family-name:var(--font-quicksand)] text-white/60 text-sm leading-relaxed mb-8 max-w-md">
            Összegyűjtöttem a legfontosabb tudnivalókat, amelyek segítenek abban, hogy
            a tervezés ne legyen stresszes, hanem élvezetes folyamat legyen.
          </p>
          <a
            href="#kapcsolat"
            className="inline-block border border-white text-white font-[family-name:var(--font-nunito)] text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-white hover:text-[#363025] transition-all duration-300"
          >
            Feliratkozás
          </a>
        </div>
      </div>
    </section>
  );
}
