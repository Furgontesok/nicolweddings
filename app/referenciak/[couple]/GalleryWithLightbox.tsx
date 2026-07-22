"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function GalleryWithLightbox({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const prev = useCallback(() => setActive((i) => i === null ? null : (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setActive((i) => i === null ? null : (i + 1) % images.length), [images.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, prev, next]);

  useEffect(() => {
    document.body.style.overflow = active !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  return (
    <>
      {/* Masonry grid */}
      <div className="max-w-6xl mx-auto columns-3 lg:columns-3 gap-2 space-y-2">
        {images.map((src, i) => (
          <div
            key={i}
            className="break-inside-avoid overflow-hidden cursor-pointer group relative"
            onClick={() => setActive(i)}
          >
            <Image
              src={src}
              alt={`${name} - ${i + 1}`}
              width={800}
              height={600}
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[active]}
              alt={`${name} - ${active + 1}`}
              width={1600}
              height={1200}
              className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain"
              sizes="90vw"
              priority
            />
          </div>

          <button
            onClick={close}
            className="absolute top-5 right-6 text-white/70 hover:text-white text-3xl leading-none transition-colors duration-200"
          >
            ×
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl leading-none transition-colors duration-200 px-2"
          >
            ←
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl leading-none transition-colors duration-200 px-2"
          >
            →
          </button>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest font-light">
            {active + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
