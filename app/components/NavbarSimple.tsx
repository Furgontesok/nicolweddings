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

export default function NavbarSimple() {
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 60) {
        setVisible(true);
      } else if (y > lastY.current + 8) {
        setVisible(false);
        setOpen(false);
      } else if (y < lastY.current - 8) {
        setVisible(true);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#363025] transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between px-10 py-4">
        <a href="/">
          <Image
            src="/images/horizontal_white.svg"
            alt="Nicol Weddings and Events"
            width={150}
            height={46}
            priority
            className="object-contain"
            style={{ height: "auto" }}
          />
        </a>
        <ul className="flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-[family-name:var(--font-nunito)] text-white/80 text-[12px] tracking-[0.22em] uppercase hover:text-white transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobil */}
      <div className="md:hidden flex items-center justify-between px-6 py-4">
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
        <div className="md:hidden px-6 pb-6 pt-2 border-t border-white/10">
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
