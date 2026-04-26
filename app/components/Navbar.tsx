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
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY.current + 8) setScrollDir("down");
      else if (y < lastY.current - 8) setScrollDir("up");
      setScrollY(y);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const creamVisible = scrollY > 80 && scrollDir === "up";

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-[#EDEDE1] border-b border-[#363025]/10 transition-transform duration-500 ${
        creamVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Desktop */}
      <div className="hidden md:grid grid-cols-3 items-center px-10 py-1">
        <a href="/" className="justify-self-start">
          <Image
            src="/images/horizontal_black.svg"
            alt="Nicol Weddings and Events"
            width={100}
            height={28}
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
            className="font-[family-name:var(--font-italianno)] text-[#363025]/70 text-xl italic hover:text-[#363025] transition-colors duration-300"
          >
            Ingyenes konzultáció
          </a>
        </div>
      </div>

      {/* Mobil */}
      <div className="md:hidden flex items-center justify-between px-6 py-2">
        <a href="/">
          <Image
            src="/images/horizontal_black.svg"
            alt="Nicol Weddings and Events"
            width={100}
            height={32}
            className="object-contain"
            style={{ height: "auto" }}
          />
        </a>
        <a href="/kapcsolat" className="font-[family-name:var(--font-italianno)] text-[#363025]/70 text-lg italic">
          Konzultáció
        </a>
      </div>
    </div>
  );
}
