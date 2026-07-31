"use client";

import Image from "next/image";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

const COVER_IMAGE = "/images/helyszin-ajanlo-kep.jpg";

export default function Ebook() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (supabase) {
      await supabase.from("ebook_downloads").insert({ name, email });
    }

    fetch("/api/notify/ebook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    }).catch(() => {});

    // PDF letöltés trigger
    const link = document.createElement("a");
    link.href = "/helyszin-ajanlо.pdf";
    link.download = "Helyszin-ajanlо-Nicol-Weddings.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDone(true);
    setLoading(false);
  };

  return (
    <section className="bg-[#363025] py-16 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-10 lg:gap-20">

        {/* Ebook mockup */}
        <div className="shrink-0 flex items-center justify-center md:pl-8 lg:pl-0" style={{ width: 320, paddingRight: 40 }}>
          <div className="relative" style={{ transform: "rotate(-4deg)" }}>
            <div
              className="absolute bg-[#2a2318]"
              style={{ width: 250, height: 340, top: 8, left: 8, borderRadius: 2 }}
            />
            <div
              className="relative bg-[#E8E5DC]"
              style={{ width: 250, height: 340, borderRadius: 2 }}
            >
              <div
                className="absolute left-0 top-0 bottom-0 bg-[#D6D2C6]"
                style={{ width: 16, borderRadius: "2px 0 0 2px" }}
              />
              {COVER_IMAGE ? (
                <div className="absolute inset-0" style={{ left: 16 }}>
                  <Image src={COVER_IMAGE} alt="E-book borító" fill className="object-cover" style={{ borderRadius: "0 2px 2px 0" }} />
                </div>
              ) : (
                <div className="absolute inset-5 border border-[#363025]/15 flex flex-col items-center justify-center text-center gap-3 p-4" style={{ left: 24 }}>
                  <p className="font-[family-name:var(--font-nunito)] text-[#363025]/35 text-[8px] tracking-[0.25em] uppercase">
                    Nicol Weddings & Events
                  </p>
                  <div className="w-6 h-px bg-[#363025]/20" />
                  <p className="font-[family-name:var(--font-italianno)] text-[#363025] text-[22px] leading-tight">
                    Esküvői útmutató
                  </p>
                  <div className="w-6 h-px bg-[#363025]/20" />
                  <p className="font-[family-name:var(--font-nunito)] text-[#363025]/35 text-[7px] tracking-[0.2em] uppercase">
                    Ingyenes e-book
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Szöveg + form */}
        <div className="text-center md:text-left w-full max-w-lg">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-[52px] text-white mb-8 font-light italic" style={{ lineHeight: 1.15 }}>
            Még nem találtátok meg
            <br />
            a tökéletes helyszínt az esküvőtökhöz?
          </h2>
          <p className="font-[family-name:var(--font-nunito)] text-[12px] tracking-[0.25em] uppercase text-white/70 mb-4">
            Töltsd le az ingyenes helyszín ajánlót!
          </p>
          <div className="w-10 h-px bg-white/20 mb-6 hidden md:block" />
          <p className="font-[family-name:var(--font-quicksand)] text-white/50 text-base leading-relaxed mb-10">
            Az esküvői helyszín kiválasztása az egyik legnagyobb döntés,<br className="hidden md:block" />ezért összegyűjtöttem Magyarország legnépszerűbb és legszebb helyszíneit, hogy időt spóroljak Nektek, és könnyebben megtaláljátok a számotokra tökéleteset.
          </p>

          {done ? (
            <div className="text-left">
              <p className="font-[family-name:var(--font-cormorant)] text-white text-2xl font-light italic mb-2">
                Köszönöm, letöltés elkezdődött!
              </p>
              <p className="font-[family-name:var(--font-nunito)] text-white/40 text-[11px] tracking-wide">
                Ha nem indult el, kattints{" "}
                <a href="/helyszin-ajanlо.pdf" download className="underline text-white/60 hover:text-white transition-colors">
                  ide
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-sm mx-auto md:mx-0">
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Neved"
                required
                className="bg-white/8 border border-white/20 px-5 py-3.5 font-[family-name:var(--font-nunito)] text-[12px] tracking-[0.05em] text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-colors duration-200"
              />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="E-mail cím"
                required
                className="bg-white/8 border border-white/20 px-5 py-3.5 font-[family-name:var(--font-nunito)] text-[12px] tracking-[0.05em] text-white placeholder:text-white/30 focus:outline-none focus:border-white/50 transition-colors duration-200"
              />
              {error && (
                <p className="font-[family-name:var(--font-nunito)] text-red-400/70 text-[11px]">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="border border-white/40 text-white font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.25em] uppercase px-12 py-4 hover:bg-white hover:text-[#363025] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed mt-1"
              >
                {loading ? "Küldés..." : "Kérem az e-bookot"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
