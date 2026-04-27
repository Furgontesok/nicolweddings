"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const links = [
  { label: "Főoldal", href: "/" },
  { label: "Rólam", href: "/rolam" },
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
      className={`fixed top-0 left-0 right-0 z-50 bg-[#EDEDE1] border-b border-[#363025]/10 transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Desktop */}
      <div className="hidden md:flex items-center h-12 px-10">
        {/* Bal: Logo */}
        <div className="w-1/4">
          <a href="/">
            <Image
              src="/images/horizontal_black.svg"
              alt="Nicol Weddings and Events"
              width={100}
              height={30}
              priority
              className="object-contain"
              style={{ height: "auto" }}
            />
          </a>
        </div>

        {/* Közép: Nav linkek */}
        <ul className="flex-1 flex items-center justify-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-[family-name:var(--font-nunito)] text-[#363025]/70 text-[11px] tracking-[0.25em] uppercase hover:text-[#363025] hover:[text-shadow:0.4px_0_0_#363025,_-0.4px_0_0_#363025] transition-all duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Jobb: CTA */}
        <div className="w-1/4 flex justify-end">
          <a
            href="/kapcsolat"
            className="font-[family-name:var(--font-italianno)] text-[#363025]/70 text-xl italic hover:text-[#363025] transition-colors duration-300"
          >
            Ingyenes konzultáció
          </a>
        </div>
      </div>

      {/* Mobil */}
      <div className="md:hidden flex items-center justify-between px-6 py-3">
        <a href="/">
          <Image
            src="/images/horizontal_black.svg"
            alt="Nicol Weddings and Events"
            width={110}
            height={34}
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
          <span className={`block w-6 h-0.5 bg-[#363025] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#363025] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#363025] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#EDEDE1] px-6 pb-6 pt-2 border-t border-[#363025]/10">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-[family-name:var(--font-nunito)] text-[#363025]/70 text-xs tracking-[0.25em] uppercase hover:text-[#363025] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/kapcsolat"
            className="mt-5 block font-[family-name:var(--font-italianno)] text-[#363025]/70 text-2xl italic"
          >
            Ingyenes konzultáció
          </a>
        </div>
      )}
    </nav>
  );
}
