"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type CoupleItem = {
  slug: string;
  name: string;
  cover: string;
  objectPosition?: string;
};

const fallback: CoupleItem[] = [
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
  const [items, setItems] = useState<CoupleItem[]>(fallback);

  useEffect(() => {
    if (!supabase) return;

    async function load() {
      const { data: couples } = await supabase!
        .from("couples")
        .select("id, slug, name, display_order, header_position")
        .order("display_order");

      if (!couples?.length) return;

      const { data: covers } = await supabase!
        .from("couple_images")
        .select("couple_id, url")
        .eq("is_cover", true);

      const coverMap: Record<string, string> = {};
      covers?.forEach(c => { coverMap[c.couple_id] = c.url; });

      const loaded = couples.map(c => ({
        slug: c.slug,
        name: c.name,
        cover: coverMap[c.id] ?? fallback.find(f => f.slug === c.slug)?.cover ?? "",
        objectPosition: c.header_position ?? fallback.find(f => f.slug === c.slug)?.objectPosition,
      })).filter(c => c.cover);

      if (loaded.length > 0) setItems(loaded);
    }

    load();
  }, []);

  return (
    <section className="bg-white pt-0 md:pt-10 pb-6 md:pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((c, i) => (
            <div
              key={i}
              id={c.slug}
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
                unoptimized={c.cover.startsWith("/")}
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
