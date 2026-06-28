"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const couples = [
  { name: "Bia & Bence", cover: "/images/Bia%20%26%20Bence/1.jpg", slug: "bia-bence" },
  { name: "Betti & Levi", cover: "/images/Betti%20%26%20Levi/1.jpg", slug: "betti-levi", objectPosition: "center 80%" },
  { name: "Nicol & Roli", cover: "/images/galeria-nicol-roli.jpg", slug: "nicol-roli" },
  { name: "Vivi & Bence", cover: "/images/galeria-vivi-bence.jpg", slug: "vivi-bence" },
  { name: "Panni & Sanyi", cover: "/images/galeria-panni-sanyi.jpg", slug: "panni-sanyi" },
  { name: "Ani & Peti", cover: "/images/galeria-ani-peti.jpg", slug: "ani-peti", objectPosition: "center 90%" },
  { name: "Réka & Ádám", cover: "/images/galeria-reka-adam.jpg", slug: "reka-adam" },
];

export default function CoupleGrid() {
  const router = useRouter();

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {couples.map((c, i) => (
            <div
              key={i}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
              onClick={() => router.push(`/referenciak/${c.slug}`)}
            >
              <Image
                src={c.cover}
                alt={c.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                style={c.objectPosition ? { objectPosition: c.objectPosition } : undefined}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-white font-light tracking-wide">
                  {c.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
