"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Kapcsolat() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#363025] pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[family-name:var(--font-nunito)] text-xs tracking-[0.3em] uppercase text-white/40 mb-4">
            Lépj kapcsolatba
          </p>
          <h1 className="font-[family-name:var(--font-italianno)] text-7xl md:text-8xl text-white">
            Alig várom, hogy megismerjük egymást!
          </h1>
          <div className="w-16 h-px bg-white/20 mx-auto mt-8" />
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">

          {/* Bal — elérhetőségek */}
          <div className="md:w-80 shrink-0">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#363025] mb-8">
              Elérhetőségek
            </h2>
            <div className="space-y-6 font-[family-name:var(--font-quicksand)] text-[#363025]/70 text-sm">
              <div>
                <p className="font-[family-name:var(--font-nunito)] text-xs tracking-widest uppercase text-[#363025]/40 mb-1">Email</p>
                <a href="mailto:nicol.weddings@gmail.com" className="hover:text-[#363025] transition-colors">
                  nicol.weddings@gmail.com
                </a>
              </div>
              <div>
                <p className="font-[family-name:var(--font-nunito)] text-xs tracking-widest uppercase text-[#363025]/40 mb-1">Telefon</p>
                <a href="tel:+36305444676" className="hover:text-[#363025] transition-colors">
                  +36 30 544 4676
                </a>
              </div>
              <div>
                <p className="font-[family-name:var(--font-nunito)] text-xs tracking-widest uppercase text-[#363025]/40 mb-1">Közösségi média</p>
                <div className="flex gap-4 mt-2">
                  <a href="https://instagram.com/nicolweddings" target="_blank" rel="noopener noreferrer" className="hover:text-[#363025] transition-colors">Instagram</a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#363025] transition-colors">Facebook</a>
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#363025] transition-colors">TikTok</a>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-[#F5F3ED]">
              <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-sm leading-relaxed">
                Az első konzultáció <strong className="text-[#363025]">ingyenes</strong> és kötésmentes. 48 órán belül felveszem veled a kapcsolatot!
              </p>
            </div>
          </div>

          {/* Jobb — form */}
          <div className="flex-1">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16 gap-4">
                <div className="font-[family-name:var(--font-italianno)] text-7xl text-[#363025]">✓</div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#363025]">
                  Köszönöm a megkeresést!
                </h3>
                <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60">
                  48 órán belül felveszem veled a kapcsolatot!
                </p>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-[family-name:var(--font-nunito)] text-xs tracking-widest uppercase text-[#363025]/50 mb-2">
                      Neved *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border-b border-[#D6D6C9] bg-transparent py-3 font-[family-name:var(--font-quicksand)] text-[#363025] outline-none focus:border-[#363025] transition-colors placeholder:text-[#363025]/30"
                      placeholder="Pl. Kiss Anna"
                    />
                  </div>
                  <div>
                    <label className="block font-[family-name:var(--font-nunito)] text-xs tracking-widest uppercase text-[#363025]/50 mb-2">
                      Partnered neve
                    </label>
                    <input
                      type="text"
                      className="w-full border-b border-[#D6D6C9] bg-transparent py-3 font-[family-name:var(--font-quicksand)] text-[#363025] outline-none focus:border-[#363025] transition-colors placeholder:text-[#363025]/30"
                      placeholder="Pl. Nagy Péter"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-nunito)] text-xs tracking-widest uppercase text-[#363025]/50 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
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
                    placeholder="+36 …"
                  />
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-nunito)] text-xs tracking-widest uppercase text-[#363025]/50 mb-2">
                    Tervezett esküvő dátuma
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-[#D6D6C9] bg-transparent py-3 font-[family-name:var(--font-quicksand)] text-[#363025] outline-none focus:border-[#363025] transition-colors placeholder:text-[#363025]/30"
                    placeholder="Pl. 2025 nyara"
                  />
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-nunito)] text-xs tracking-widest uppercase text-[#363025]/50 mb-2">
                    Üzenet
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border-b border-[#D6D6C9] bg-transparent py-3 font-[family-name:var(--font-quicksand)] text-[#363025] outline-none focus:border-[#363025] transition-colors placeholder:text-[#363025]/30 resize-none"
                    placeholder="Meséljetek az elképzeléseitekről..."
                  />
                </div>

                <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/40 text-xs">
                  Az űrlap beküldésével nyilatkozol, hogy elolvastad és elfogadod az{" "}
                  <a href="#" className="underline hover:text-[#363025]/70 transition-colors">
                    Adatkezelési tájékoztatót
                  </a>
                  .
                </p>

                <button
                  type="submit"
                  className="w-full border border-[#363025] text-[#363025] font-[family-name:var(--font-nunito)] text-xs tracking-[0.2em] uppercase py-4 hover:bg-[#363025] hover:text-white transition-all duration-300"
                >
                  Üzenetet küldenék
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
