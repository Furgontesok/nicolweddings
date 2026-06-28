"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function ParallaxImage({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      setOffset(center * 0.2);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className="relative w-full h-[75vh] overflow-hidden" style={{ background: "linear-gradient(to bottom, #F5F3ED 50%, #D6D8CA 50%)" }}>
      <div
        className="absolute inset-0 scale-110"
        style={{ transform: `translateY(${offset}px) scale(1.15)` }}
      >
        <Image
          src={src}
          alt="Esküvői pillanat"
          fill
          className="object-cover"
                  style={{ objectPosition: "center 70%" }}
          sizes="100vw"
        />
      </div>
    </div>
  );
}
