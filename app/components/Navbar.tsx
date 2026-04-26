"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Főoldal", href: "/" },
  { label: "Rólam", href: "/#rolam" },
  { label: "Szolgáltatások", href: "/szolgaltatasok" },
  { label: "Referenciák", href: "/referenciak" },
  { label: "Kapcsolat", href: "/kapcsolat" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#363025]/95 backdrop-blur-sm shadow-sm py-3" : "bg-transparent py-6"
      }`}
    >
      {/* Desktop */}
      <div className="hidden md:flex flex-col items-center gap-2">
        {/* NICOL logó */}
        <a href="/" className="flex flex-col items-center leading-none">
          <span
            className="font-[family-name:var(--font-cormorant)] text-white font-light tracking-[0.18em]"
            style={{ fontSize: scrolled ? "2rem" : "3.5rem", transition: "font-size 0.5s" }}
          >
            NICOL
          </span>
          <span
            className="font-[family-name:var(--font-nunito)] text-white/70 tracking-[0.45em] uppercase"
            style={{ fontSize: scrolled ? "7px" : "9px", transition: "font-size 0.5s" }}
          >
            Weddings and Events
          </span>
        </a>

        {/* Nav linkek */}
        <ul className="flex items-center gap-10 mt-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-[family-name:var(--font-nunito)] text-white/90 text-[11px] tracking-[0.28em] uppercase hover:text-white transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobil */}
      <div className="md:hidden flex items-center justify-between px-6">
        <a href="/" className="flex flex-col leading-none">
          <span className="font-[family-name:var(--font-cormorant)] text-white font-light tracking-[0.18em] text-3xl">
            NICOL
          </span>
          <span className="font-[family-name:var(--font-nunito)] text-white/70 tracking-[0.35em] uppercase text-[7px]">
            Weddings and Events
          </span>
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

      {/* Mobil menü */}
      {open && (
        <div className="md:hidden bg-[#363025] px-6 pb-6 pt-4">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-[family-name:var(--font-nunito)] text-white/80 text-xs tracking-[0.28em] uppercase hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
