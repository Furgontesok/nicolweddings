"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const links = [
  { label: "Főoldal", href: "/" },
  { label: "Rólam", href: "/rolam" },
  { label: "Szolgáltatások", href: "/szolgaltatasok" },
  { label: "Referenciák", href: "/referenciak" },
  { label: "Kapcsolat", href: "/kapcsolat" },
];

const slides = [
  {
    left: "/images/TheKilroyProject-51.jpg",
    right: "/images/Bia%20%26%20Bence/1.jpg",
  },
  {
    left: "/images/JE5A0336.jpg",
    right: "/images/zsambek_wedding_styled_shoot-052_web.jpg",
  },
  {
    left: "/images/4K2A1978-2.jpg",
    right: "/images/5V5A0579-2.jpg",
  },
  {
    left: "/images/Nicol%26Roli-543.jpg",
    right: "/images/zsambek_wedding_styled_shoot-001_web.jpg",
  },
  {
    left: "/images/TheKilroyProject-295.jpg",
    right: "/images/Bia%20%26%20Bence/10.jpg",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [heroVisible, setHeroVisible] = useState(true);

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
                  className="font-[family-name:var(--font-cormorant)] text-white text-[13px] tracking-[0.3em] uppercase font-light hover:text-white/80 hover:[text-shadow:0.4px_0_0_white,_-0.4px_0_0_white] transition-all duration-200 drop-shadow"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobil */}
        <div className="md:hidden flex flex-col items-center gap-3 pt-6">
          <a href="/">
            <Image
              src="/images/horizontal_white.svg"
              alt="Nicol Weddings and Events"
              width={200}
              height={60}
              priority
              className="object-contain drop-shadow-lg"
              style={{ height: "auto" }}
            />
          </a>
          <ul className="flex items-center gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-[family-name:var(--font-cormorant)] text-white text-[10px] tracking-[0.2em] uppercase font-light drop-shadow"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Hero képek ── */}
      <section id="kezdooldal" className="relative w-full h-screen overflow-hidden">

        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 flex transition-opacity duration-[700ms] ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <div className="w-1/2 h-full relative">
              <Image
                src={slide.left}
                alt="Esküvői fotó"
                fill
                priority={i === 0}
                className="object-cover object-center"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="w-1/2 h-full relative">
              <Image
                src={slide.right}
                alt="Esküvői fotó"
                fill
                priority={i === 0}
                className="object-cover object-center"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        ))}

        {/* Szöveg */}
        <div className="absolute bottom-32 left-0 right-0 text-center pointer-events-none px-6 z-10">
          <h1 className="font-[family-name:var(--font-cormorant)] text-white text-3xl md:text-5xl font-light leading-snug drop-shadow-lg">
            Esküvők, amik nyomot hagynak.
            <br />
            Bennetek és másokban.
          </h1>
        </div>

        {/* Scroll vonal */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none z-10">
          <div className="w-px h-10 bg-white/50" />
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
