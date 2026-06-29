import NavbarSimple from "../components/NavbarSimple";
import Footer from "../components/Footer";
import Image from "next/image";
import type { Metadata } from "next";
import ReferencjakHero from "./ReferencjakHero";
import CoupleGrid from "./CoupleGrid";
import TestimonialsSlider from "./TestimonialsSlider";

export const metadata: Metadata = {
  title: "Referenciák — Nicol Weddings and Events",
  description: "Minden esküvő egy egyedi történet. Nézd meg eddigi munkáimat és ügyfeleink visszajelzéseit.",
};

export default function Referenciak() {
  return (
    <>
      <NavbarSimple />

      <ReferencjakHero />

      <CoupleGrid />

      <TestimonialsSlider />

      {/* Section 4 — CTA képpel */}
      <section className="relative py-28 px-6 text-center overflow-hidden">
        <Image
          src="/images/Nicol%20%26%20Roli/12.-min.jpg"
          alt="Váltsuk valóra álmaitok esküvőjét"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10">
          <h2 className="font-[family-name:var(--font-italianno)] text-5xl md:text-6xl text-white mb-4 leading-tight">
            Váltsuk valóra álmaitok esküvőjét!
          </h2>
          <p className="font-[family-name:var(--font-quicksand)] text-white/70 text-sm mb-10 max-w-md mx-auto">
            Kezdjük el a szervezést, és alkossunk meg valami igazán különlegeset.
          </p>
          <a
            href="/kapcsolat"
            className="inline-block border border-white/60 text-white font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.25em] uppercase px-12 py-4 hover:bg-white hover:text-[#363025] transition-all duration-300"
          >
            Kezdjük el együtt!
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
