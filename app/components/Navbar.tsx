"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const links = [
  { label: "Főoldal", href: "/" },
  { label: "Rólam", href: "/#rolam" },
  { label: "Szolgáltatások", href: "/szolgaltatasok" },
  { label: "Referenciák", href: "/referenciak" },
  { label: "Kapcsolat", href: "/kapcsolat" },
];

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY.current + 8) {
        setScrollDir("down");
      } else if (y < lastY.current - 8) {
        setScrollDir("up");
      }
      setScrollY(y);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const atTop = scrollY < 80;
  // Lebegő (csak hero tetején): eltűnik ha legörgetünk
  const floatingVisible = atTop;
  // Cream navbar: csak ha felfelé görgetünk és nem vagyunk a tetején
  const creamVisible = !atTop && scrollDir === "up";

  return (
    <>
      {/* ── Lebegő: logo + nav, háttér nélkül, csak a hero felett ── */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          floatingVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {/* Desktop */}
        <div className="hidden md:flex flex-col items-center gap-3 pt-7">
          <a href="/">
            <Image
              src="/images/horizontal_white.svg"
              alt="Nicol Weddings and Events"
              width={280}
              height={84}
              priority
              className="object-contain"
              style={{ height: "auto" }}
            />
          </a>
          <ul className="flex items-center gap-12">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-[family-name:var(--font-nunito)] text-white/90 text-[12px] tracking-[0.25em] uppercase hover:text-white transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobil */}
        <div className="md:hidden flex items-center justify-between px-6 pt-4">
          <a href="/">
            <Image
              src="/images/horizontal_white.svg"
              alt="Nicol Weddings and Events"
              width={120}
              height={38}
              priority
              className="object-contain"
              style={{ height: "auto" }}
            />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Menü"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
        {open && (
          <div className="md:hidden bg-[#363025]/90 backdrop-blur-sm px-6 pb-6 pt-3">
            <ul className="flex flex-col gap-5">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-[family-name:var(--font-nunito)] text-white/80 text-xs tracking-[0.25em] uppercase hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* ── Cream navbar: felfelé görgetésnél jön elő ── */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-[#EDEDE1] border-b border-[#363025]/10 transition-transform duration-500 ${
          creamVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-3 items-center px-10 py-2">
          <a href="/" className="justify-self-start">
            <Image
              src="/images/horizontal_black.svg"
              alt="Nicol Weddings and Events"
              width={130}
              height={40}
              className="object-contain"
              style={{ height: "auto" }}
            />
          </a>
          <ul className="flex items-center justify-center gap-10">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-[family-name:var(--font-nunito)] text-[#363025]/70 text-[11px] tracking-[0.25em] uppercase hover:text-[#363025] transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="justify-self-end">
            <a
              href="/kapcsolat"
              className="font-[family-name:var(--font-italianno)] text-[#363025]/70 text-2xl italic hover:text-[#363025] transition-colors duration-300"
            >
              Ingyenes konzultáció
            </a>
          </div>
        </div>

        {/* Mobil */}
        <div className="md:hidden flex items-center justify-between px-6 py-2.5">
          <a href="/">
            <Image
              src="/images/horizontal_black.svg"
              alt="Nicol Weddings and Events"
              width={110}
              height={34}
              className="object-contain"
              style={{ height: "auto" }}
            />
          </a>
          <a href="/kapcsolat" className="font-[family-name:var(--font-italianno)] text-[#363025]/70 text-xl italic">
            Konzultáció
          </a>
        </div>
      </div>
    </>
  );
}
