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
      <section className="relative w-full overflow-hidden" style={{ height: "70vh", minHeight: 420 }}>
        <Image
          src="/images/Nicol%20%26%20Roli/12.-min.jpg"
          alt="Váltsuk valóra álmaitok esküvőjét"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-7xl font-light text-white mb-4 leading-tight tracking-[-0.02em]">
            Váltsuk valóra álmaitok esküvőjét!
          </h2>
          <p className="font-[family-name:var(--font-quicksand)] text-white text-[16px] mb-10 max-w-xl">
            Kezdjük el a szervezést, és alkossunk meg valami igazán különlegeset.
          </p>
          <a
            href="/kapcsolat"
            className="inline-block border border-white text-white font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.25em] uppercase px-12 py-4 hover:bg-white hover:text-[#363025] transition-all duration-300"
          >
            Kezdjük el együtt!
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
