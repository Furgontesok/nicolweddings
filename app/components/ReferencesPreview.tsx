"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

function MobileSlider({ images, current, onAdvance, onBack, onGoTo }: {
  images: string[];
  current: number;
  onAdvance: () => void;
  onBack: () => void;
  onGoTo: (i: number) => void;
}) {
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      diff > 0 ? onAdvance() : onBack();
    }
    touchStartX.current = null;
  };

  return (
    <div className="md:hidden py-6">
      <div
        className="relative overflow-hidden mx-6"
        style={{ height: "420px" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              transform: `translateX(${(i - current) * 100}%)`,
              transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <Image src={src} alt="Referencia" fill className="object-contain" sizes="100vw" />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-1.5 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => onGoTo(i)}
            className={`h-1 rounded-full transition-all duration-300 ${i === current ? "bg-[#363025] w-5" : "bg-[#363025]/25 w-1.5"}`}
          />
        ))}
      </div>
    </div>
  );
}

const images = [
  "/images/fooldal-referenciak/1..jpg",   // álló  - SZEMÉLY
  "/images/fooldal-referenciak/7..jpg",   // álló  - DEKOR
  "/images/fooldal-referenciak/19..jpg",  // álló  - SZEMÉLY (H88A4879 — ÚJ)
  "/images/fooldal-referenciak/3..jpeg",  // fekvő - DEKOR
  "/images/fooldal-referenciak/2..jpg",   // álló  - SZEMÉLY
  "/images/fooldal-referenciak/9..jpg",   // álló  - DEKOR
  "/images/fooldal-referenciak/4..jpg",   // álló  - SZEMÉLY
  "/images/fooldal-referenciak/17..jpg",  // álló  - DEKOR  (JE5A4187 — ÚJ)
  "/images/fooldal-referenciak/6..jpg",   // álló  - SZEMÉLY
  "/images/fooldal-referenciak/5..jpg",   // fekvő - DEKOR
  "/images/fooldal-referenciak/10..jpg",  // álló  - SZEMÉLY
  "/images/fooldal-referenciak/16..jpg",  // álló  - DEKOR
  "/images/fooldal-referenciak/8..jpg",   // fekvő - SZEMÉLY
  "/images/fooldal-referenciak/14..jpg",  // álló  - DEKOR
  "/images/fooldal-referenciak/18..jpg",  // álló  - SZEMÉLY (JE5A3912 — ÚJ)
  "/images/fooldal-referenciak/11..jpg",  // fekvő - DEKOR
  "/images/fooldal-referenciak/12..jpg",  // álló  - SZEMÉLY
  "/images/fooldal-referenciak/15..jpg",  // fekvő - DEKOR
  "/images/fooldal-referenciak/13..jpg",  // álló  - SZEMÉLY
  "/images/fooldal-referenciak/20..jpg",  // fekvő - DEKOR  (H88A2251 — ÚJ)
];

// Klón az elejére (last image) + végére (first 3) → az első kép középen indul (current=0)
const N = images.length;
const track = [images[N - 1], ...images, images[0], images[1], images[2]];

export default function ReferencesPreview() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = () => {
    setCurrent((i) => i + 1);
    setTransitioning(true);
  };

  const back = () => {
    if (current === 0) return;
    setCurrent((i) => i - 1);
    setTransitioning(true);
  };

  // Amikor eléri a klónozott részt, ugrik vissza animáció nélkül
  useEffect(() => {
    if (current >= N) {
      const t = setTimeout(() => {
        setTransitioning(false);
        setCurrent(0);
      }, 700);
      return () => clearTimeout(t);
    }
    if (!transitioning) {
      const t = setTimeout(() => setTransitioning(true), 50);
      return () => clearTimeout(t);
    }
  }, [current, transitioning]);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(advance, 2000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const handleManual = (fn: () => void) => {
    fn();
    resetTimer();
  };

  // Egy kép szélessége = 1/3 a containernek → track eltolás = current * (100 / track.length) %
  const translatePct = (current * 100) / track.length;

  return (
    <section id="referenciak" className="bg-[#F5F3ED] pt-6 pb-6 md:py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Cím */}
        <div className="text-center mb-4">
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(3rem,7.5vw,7rem)] font-light text-[#363025] tracking-[-0.02em] leading-none uppercase">
            Referenciák
          </h2>
        </div>
      </div>

      {/* Mobil: 1 kép teljes szélességben, lapozó effekttel */}
      <MobileSlider images={images} current={current % N} onAdvance={() => handleManual(advance)} onBack={() => handleManual(back)} onGoTo={(i) => handleManual(() => { setTransitioning(true); setCurrent(i); })} />

      {/* Desktop: 3 képes karussel */}
      <div className="hidden md:block relative overflow-hidden py-8">
        <div
          ref={trackRef}
          className="flex items-center"
          style={{
            width: `${(track.length / 3) * 100}%`,
            transform: `translateX(-${translatePct}%)`,
            transition: transitioning ? "transform 0.7s ease-in-out" : "none",
          }}
        >
          {track.map((src, i) => {
            const isCenter = i === current + 1;
            return (
              <div
                key={i}
                className="flex-shrink-0"
                style={{
                  width: `${100 / track.length}%`,
                  padding: "0 6px",
                  transform: isCenter ? "scale(1.18)" : "scale(0.78)",
                  transition: "transform 0.7s ease-in-out",
                  zIndex: isCenter ? 10 : 1,
                }}
              >
                <div className="relative bg-[#F5F3ED] h-[560px]">
                  <Image
                    src={src}
                    alt="Referencia"
                    fill
                    className="object-contain"
                    sizes="33vw"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => handleManual(back)}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl transition-colors duration-200 px-2"
        >
          ←
        </button>
        <button
          onClick={() => handleManual(advance)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl transition-colors duration-200 px-2"
        >
          →
        </button>
      </div>

      {/* Gomb */}
      <div className="text-center mt-4 md:mt-10 px-6">
        <a
          href="/referenciak"
          className="inline-block border border-[#363025]/50 text-[#363025] font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.25em] uppercase px-12 py-4 hover:bg-[#363025] hover:text-white transition-all duration-300"
        >
          Tovább a referenciákhoz
        </a>
      </div>
    </section>
  );
}
