"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const links = [
  { label: "Főoldal", href: "/" },
  { label: "Rólam", href: "/rolam" },
  { label: "Szolgáltatások", href: "/szolgaltatasok" },
  { label: "Referenciák", href: "/referenciak" },
  { label: "Kapcsolat", href: "/kapcsolat" },
  { label: "Blog", href: "/blog" },
];

const slides: { left: string; right: string; leftPos?: string; rightPos?: string; leftTransform?: string; rightTransform?: string }[] = [
  {
    left: "/images/header2/fokep1-bal.jpg",
    right: "/images/header2/fokep1-jobb.jpg",
  },
  {
    left: "/images/header2/fokep2-bal.jpg",
    right: "/images/header2/fokep2-jobb.jpg",
  },
  {
    left: "/images/header2/fokep3-bal.jpg",
    right: "/images/header2/fokep3-jobb.jpg",
  },
  {
    left: "/images/header2/fokep4-bal.jpg",
    right: "/images/header2/fokep4-jobb.jpg",
    rightPos: "0% 80%",
  },
  {
    left: "/images/header2/fokep5-bal.jpg",
    right: "/images/header2/fokep5-jobb.jpg",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [heroVisible, setHeroVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setHeroVisible(window.scrollY < 120);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Fix logo + nav: csak a hero felett látszik ── */}
      <div
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 40 }}
        className={`transition-opacity duration-300 ${heroVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Desktop */}
        <div className="hidden md:flex flex-col items-center gap-4 pt-8">
          <a href="/">
            <Image
              src="/images/horizontal_white.svg"
              alt="Nicol Weddings and Events"
              width={260}
              height={78}
              priority
              className="object-contain drop-shadow-lg"
              style={{ height: "auto" }}
            />
          </a>
          <ul className="flex items-center gap-10">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative group font-[family-name:var(--font-nunito)] text-white text-[15px] tracking-[0.05em] uppercase font-light drop-shadow"
                >
                  {l.label}
                  <span className="absolute bottom-[-3px] left-0 h-px w-0 bg-white/70 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobil */}
        <div className="md:hidden flex items-center justify-between px-5 pt-6">
          <a href="/">
            <Image
              src="/images/horizontal_white.svg"
              alt="Nicol Weddings and Events"
              width={160}
              height={48}
              priority
              className="object-contain drop-shadow-lg"
              style={{ height: "auto" }}
            />
          </a>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="text-white drop-shadow p-1"
            aria-label="Menü"
          >
            {menuOpen ? (
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/>
              </svg>
            ) : (
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobil full-screen menü */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#EDEDE1] z-50 flex flex-col items-center justify-center"
            style={{ animation: "slideUp 0.35s cubic-bezier(0.16,1,0.3,1) both" }}>
          <style>{`@keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }`}</style>
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-[#363025]/60 hover:text-[#363025]"
              aria-label="Bezár"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/>
              </svg>
            </button>
            <Image src="/images/horizontal_black.svg" alt="Nicol Weddings and Events" width={160} height={48} className="object-contain mb-12 -mt-16" style={{ height: "auto" }} />
            <ul className="flex flex-col items-center gap-7">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="relative group font-[family-name:var(--font-nunito)] text-[#363025]/70 text-[13px] tracking-[0.12em] uppercase hover:text-[#363025] transition-colors"
                  >
                    {l.label}
                    <span className="absolute bottom-[-3px] left-0 h-px w-0 bg-[#363025]/50 group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="absolute bottom-10 flex gap-6 items-center">
              <a href="https://www.instagram.com/nicolweddings" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#363025]/40 hover:text-[#363025] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://www.facebook.com/nicolweddingsandevents" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#363025]/40 hover:text-[#363025] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@nicolweddings" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-[#363025]/40 hover:text-[#363025] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* ── Hero képek ── */}
      <section id="kezdooldal" className="relative w-full h-screen overflow-hidden mb-[-2px]">

        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 flex transition-opacity duration-[700ms] ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            {/* Mobil: egy teljes kép */}
            <div className="md:hidden absolute inset-0">
              <Image
                src={slide.left}
                alt="Esküvői fotó"
                fill
                priority={i === 0}
                className="object-cover"
                style={{ objectPosition: slide.leftPos ?? "center" }}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Desktop: osztott kép */}
            <div className="hidden md:block absolute inset-y-0 left-0 w-1/2">
              <Image
                src={slide.left}
                alt="Esküvői fotó"
                fill
                priority={i === 0}
                className="object-cover"
                style={{ objectFit: "cover", objectPosition: slide.leftPos ?? "center", transform: slide.leftTransform }}
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="hidden md:block absolute inset-y-0 right-0 left-1/2">
              <Image
                src={slide.right}
                alt="Esküvői fotó"
                fill
                priority={i === 0}
                className="object-cover"
                style={{ objectFit: "cover", objectPosition: slide.rightPos ?? "center", transform: slide.rightTransform }}
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        ))}

        {/* Szöveg */}
        <div className="absolute bottom-32 left-0 right-0 text-center pointer-events-none px-6 z-10">
          <h1 className="font-[family-name:var(--font-cormorant)] text-white text-3xl md:text-5xl font-light leading-snug drop-shadow-lg">
            Egy nap, ami örökre a tiétek.
          </h1>
        </div>


        {/* Pont navigáció */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-white w-5" : "bg-white/40 w-1.5"
              }`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
