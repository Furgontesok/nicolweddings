"use client";

import NavbarSimple from "../components/NavbarSimple";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Kapcsolat() {
  const [nev, setNev] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [datum, setDatum] = useState("");
  const [uzenet, setUzenet] = useState("");
  const [sent, setSent] = useState(false);

  const inputClass =
    "border-b border-[#363025]/30 bg-transparent py-2 w-full focus:outline-none focus:border-[#363025] font-[family-name:var(--font-quicksand)] text-[#363025] placeholder:text-[#363025]/30 transition-colors";

  return (
    <>
      <NavbarSimple />

      {/* Section 1 — Hero */}
      <section className="bg-[#F5F3ED] pt-12 py-16 px-6 text-center">
        <h1 className="font-[family-name:var(--font-italianno)] text-5xl md:text-6xl text-[#363025]">
          Alig várom, hogy megismerjük egymást!
        </h1>
        <div className="w-14 h-px bg-[#363025]/20 mx-auto my-6" />
        <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/55 text-sm">
          Írj nekem, és 48 órán belül visszajelzek!
        </p>
      </section>

      {/* Section 2 — Contact layout */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Left col — Contact info */}
          <div>
            <p className="font-[family-name:var(--font-nunito)] text-xs tracking-widest uppercase text-[#363025]/40 mb-8">
              Kapcsolat
            </p>

            <div className="space-y-6 font-[family-name:var(--font-quicksand)] text-[#363025]/70 text-sm mb-10">
              <div>
                <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-widest uppercase text-[#363025]/40 mb-1">
                  Email
                </p>
                <a
                  href="mailto:nicol.weddings@gmail.com"
                  className="hover:text-[#363025] transition-colors"
                >
                  nicol.weddings@gmail.com
                </a>
              </div>
              <div>
                <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-widest uppercase text-[#363025]/40 mb-1">
                  Telefon
                </p>
                <a
                  href="tel:+36305444676"
                  className="hover:text-[#363025] transition-colors"
                >
                  +36 30 544 4676
                </a>
              </div>
            </div>

            <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-widest uppercase text-[#363025]/40 mb-3">
              Kövess a közösségi médiában
            </p>
            <div className="flex gap-5 font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-sm">
              <a
                href="https://instagram.com/nicolweddings"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#363025] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com/@nicolweddings"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#363025] transition-colors"
              >
                TikTok
              </a>
              <a
                href="https://facebook.com/nicolweddings"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#363025] transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Right col — Contact form */}
          <div>
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16 gap-4">
                <div className="font-[family-name:var(--font-italianno)] text-7xl text-[#363025]">✓</div>
                <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/70 leading-relaxed">
                  Köszönöm a megkeresést! Hamarosan felveszem veled a kapcsolatot.
                </p>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div>
                  <label className="block font-[family-name:var(--font-nunito)] text-[10px] tracking-widest uppercase text-[#363025]/40 mb-1">
                    Név
                  </label>
                  <input
                    type="text"
                    value={nev}
                    onChange={(e) => setNev(e.target.value)}
                    className={inputClass}
                    placeholder="Pl. Kiss Anna"
                  />
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-nunito)] text-[10px] tracking-widest uppercase text-[#363025]/40 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                    placeholder="anna@example.com"
                  />
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-nunito)] text-[10px] tracking-widest uppercase text-[#363025]/40 mb-1">
                    Telefonszám
                  </label>
                  <input
                    type="tel"
                    value={telefon}
                    onChange={(e) => setTelefon(e.target.value)}
                    className={inputClass}
                    placeholder="+36 …"
                  />
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-nunito)] text-[10px] tracking-widest uppercase text-[#363025]/40 mb-1">
                    Tervezett esküvő dátuma
                  </label>
                  <input
                    type="date"
                    value={datum}
                    onChange={(e) => setDatum(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-nunito)] text-[10px] tracking-widest uppercase text-[#363025]/40 mb-1">
                    Üzenet
                  </label>
                  <textarea
                    rows={4}
                    value={uzenet}
                    onChange={(e) => setUzenet(e.target.value)}
                    className={`${inputClass} resize-none`}
                    placeholder="Meséljetek az elképzeléseitekről..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#363025] text-white font-[family-name:var(--font-nunito)] text-xs tracking-[0.2em] uppercase py-4 hover:bg-[#363025]/80 transition-colors duration-300"
                >
                  Küldés
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
