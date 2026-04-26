"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

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
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Egyszerre fade ki mindkét kép
      setVisible(false);
      setTimeout(() => {
        // 2. Mindkét kép egyszerre vált
        setCurrent((prev) => (prev + 1) % slides.length);
        // 3. Egyszerre fade be
        setVisible(true);
      }, 600);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="kezdooldal" className="relative w-full h-screen overflow-hidden">

      {/* Egyetlen fade wrapper — mindkét kép egyszerre vált */}
      <div
        className="absolute inset-0 flex transition-opacity duration-[600ms] ease-in-out"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {/* Bal kép */}
        <div className="w-1/2 h-full relative">
          <Image
            src={slides[current].left}
            alt="Esküvői fotó"
            fill
            priority
            className="object-cover object-center"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Jobb kép */}
        <div className="w-1/2 h-full relative">
          <Image
            src={slides[current].right}
            alt="Esküvői fotó"
            fill
            priority
            className="object-cover object-center"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
      </div>

      {/* Szöveg — alul középen */}
      <div className="absolute bottom-20 left-0 right-0 text-center pointer-events-none px-6 z-10">
        <h1 className="font-[family-name:var(--font-cormorant)] text-white text-3xl md:text-4xl font-light leading-snug drop-shadow-lg">
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
  );
}
