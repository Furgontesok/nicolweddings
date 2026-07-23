"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const links = [
  { label: "Főoldal", href: "/" },
  { label: "Rólam", href: "/rolam" },
  { label: "Szolgáltatások", href: "/szolgaltatasok" },
  { label: "Referenciák", href: "/referenciak" },
  { label: "Kapcsolat", href: "/kapcsolat" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY.current + 8) { setScrollDir("down"); setOpen(false); }
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
      className={`fixed top-0 left-0 right-0 z-50 bg-[#EDEDE1] border-b border-[#363025]/10 ${
        open ? "" : `transition-transform duration-500 ${creamVisible ? "translate-y-0" : "-translate-y-full"}`
      }`}
    >
      {/* Desktop */}
      <div className="hidden md:flex items-center h-[72px] lg:h-[86px] 2xl:h-[76px] px-6 lg:px-10">
        <div className="w-1/4">
          <a href="/">
            <Image
              src="/images/horizontal_black.svg"
              alt="Nicol Weddings and Events"
              width={140}
              height={42}
              className="object-contain"
              style={{ height: "auto" }}
            />
          </a>
        </div>
        <ul className="flex-1 flex items-center justify-center gap-6 lg:gap-10 2xl:gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative group font-[family-name:var(--font-nunito)] text-[#363025]/70 text-[15px] tracking-[0.05em] uppercase hover:text-[#363025] transition-colors duration-300"
              >
                {l.label}
                <span className="absolute bottom-[-3px] left-0 h-px w-0 bg-[#363025]/50 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>
        <div className="w-1/4 flex items-center justify-end gap-4">
          <a href="https://www.instagram.com/nicolweddings" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#363025]/40 hover:text-[#363025] transition-colors duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="https://www.facebook.com/nicolweddings/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#363025]/40 hover:text-[#363025] transition-colors duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.tiktok.com/@nicolweddings" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-[#363025]/40 hover:text-[#363025] transition-colors duration-300">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
          </a>
        </div>
      </div>

      {/* Mobil */}
      <div className="md:hidden flex items-center justify-between px-6 py-4">
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
        <button
          onClick={() => setOpen(!open)}
          className="p-1 text-[#363025]"
          aria-label="Menü"
        >
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/>
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 bg-[#EDEDE1] z-50 flex flex-col items-center justify-center"
          style={{ animation: "slideUp 0.35s cubic-bezier(0.16,1,0.3,1) both" }}>
          <style>{`@keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }`}</style>
          <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-[#363025]/60 hover:text-[#363025]" aria-label="Bezár">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/>
            </svg>
          </button>
          <Image src="/images/horizontal_black.svg" alt="Nicol Weddings and Events" width={160} height={48} className="object-contain mb-12 -mt-16" style={{ height: "auto" }} />
          <ul className="flex flex-col items-center gap-7">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}
                  className="relative group font-[family-name:var(--font-nunito)] text-[#363025]/70 text-[13px] tracking-[0.12em] uppercase hover:text-[#363025] transition-colors">
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
            <a href="https://www.facebook.com/nicolweddings/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#363025]/40 hover:text-[#363025] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@nicolweddings" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-[#363025]/40 hover:text-[#363025] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
