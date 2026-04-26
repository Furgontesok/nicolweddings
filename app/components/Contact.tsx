"use client";

export default function Contact() {
  return (
    <section id="kapcsolat" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Bal — info */}
          <div className="flex-1">
            <p className="font-[family-name:var(--font-nunito)] text-xs tracking-[0.3em] uppercase text-[#363025]/50 mb-3">
              Lépj kapcsolatba
            </p>
            <h2 className="font-[family-name:var(--font-italianno)] text-5xl md:text-6xl text-[#363025] mb-6">
              Írj nekem
            </h2>
            <div className="w-12 h-px bg-[#363025]/30 mb-10" />

            <div className="space-y-6 font-[family-name:var(--font-quicksand)] text-[#363025]/70">
              <div className="flex items-start gap-4">
                <span className="text-[#363025]/30 text-xl mt-0.5">✉</span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#363025]/40 mb-1">Email</p>
                  <a href="mailto:nicol.weddings@gmail.com" className="hover:text-[#363025] transition-colors">
                    nicol.weddings@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#363025]/30 text-xl mt-0.5">✆</span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#363025]/40 mb-1">Telefon</p>
                  <a href="tel:+36305444676" className="hover:text-[#363025] transition-colors">
                    +36 30 544 4676
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#363025]/30 text-xl mt-0.5">◎</span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#363025]/40 mb-1">Helyszín</p>
                  <p>Magyarország</p>
                </div>
              </div>
            </div>
          </div>

          {/* Jobb — form */}
          <div className="flex-1">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block font-[family-name:var(--font-nunito)] text-xs tracking-widest uppercase text-[#363025]/50 mb-2">
                  Neved
                </label>
                <input
                  type="text"
                  className="w-full border-b border-[#D6D6C9] bg-transparent py-3 font-[family-name:var(--font-quicksand)] text-[#363025] outline-none focus:border-[#363025] transition-colors placeholder:text-[#363025]/30"
                  placeholder="Pl. Kiss Anna"
                />
              </div>
              <div>
                <label className="block font-[family-name:var(--font-nunito)] text-xs tracking-widest uppercase text-[#363025]/50 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border-b border-[#D6D6C9] bg-transparent py-3 font-[family-name:var(--font-quicksand)] text-[#363025] outline-none focus:border-[#363025] transition-colors placeholder:text-[#363025]/30"
                  placeholder="anna@example.com"
                />
              </div>
              <div>
                <label className="block font-[family-name:var(--font-nunito)] text-xs tracking-widest uppercase text-[#363025]/50 mb-2">
                  Telefonszám
                </label>
                <input
                  type="tel"
                  className="w-full border-b border-[#D6D6C9] bg-transparent py-3 font-[family-name:var(--font-quicksand)] text-[#363025] outline-none focus:border-[#363025] transition-colors placeholder:text-[#363025]/30"
                  placeholder="+36 30 …"
                />
              </div>
              <div>
                <label className="block font-[family-name:var(--font-nunito)] text-xs tracking-widest uppercase text-[#363025]/50 mb-2">
                  Üzenet
                </label>
                <textarea
                  rows={4}
                  className="w-full border-b border-[#D6D6C9] bg-transparent py-3 font-[family-name:var(--font-quicksand)] text-[#363025] outline-none focus:border-[#363025] transition-colors placeholder:text-[#363025]/30 resize-none"
                  placeholder="Miben segíthetek?"
                />
              </div>
              <button
                type="submit"
                className="mt-4 w-full border border-[#363025] text-[#363025] font-[family-name:var(--font-nunito)] text-xs tracking-[0.2em] uppercase py-4 hover:bg-[#363025] hover:text-white transition-all duration-300"
              >
                Üzenetet küldenék
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
