import Image from "next/image";

const navLinks = [
  { label: "Főoldal", href: "/" },
  { label: "Rólam", href: "/rolam" },
  { label: "Szolgáltatások", href: "/szolgaltatasok" },
  { label: "Referenciák", href: "/referenciak" },
  { label: "Kapcsolat", href: "/kapcsolat" },
  { label: "Blog", href: "/blog" },
];

const igPreviews = [
  "/images/Bia%20%26%20Bence/3.jpg",
  "/images/Betti%20%26%20Levi/4.jpg",
  "/images/Nicol%20%26%20Roli/5.-min.jpg",
  "/images/Vivi%20%26%20Bence/2..jpg",
  "/images/Panni%20%26%20Sanyi/6.jpg",
  "/images/R%C3%A9ka%20%26%20%C3%81d%C3%A1m/7.jpg",
];

export default function Footer() {
  return (
    <footer className="bg-[#F5F3ED]">

      {/* Follow Along sáv */}
      <div className="px-6 pt-16 pb-10 text-center">
        <h2 className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl tracking-[0.05em] uppercase text-[#363025] whitespace-nowrap">
          Follow me on Instagram
        </h2>
        <div className="mb-8" />
        <div className="grid grid-cols-3 md:grid-cols-6 w-full gap-1">
          {igPreviews.map((src, i) => (
            <a
              key={i}
              href="https://www.instagram.com/nicolweddings"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden"
              style={{ aspectRatio: "1/1" }}
            >
              <Image
                src={src}
                alt="Instagram"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 33vw, 17vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>

      {/* Elválasztó */}
      <div className="border-t border-[#363025]/10" />

      {/* Footer grid */}
      <div className="max-w-5xl mx-auto px-6 pt-6 pb-12 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">

        {/* Közép — logo + tagline (mobilon első) */}
        <div className="flex flex-col items-center text-center gap-3 order-1 md:order-2">
          <a href="/">
            <Image
              src="/images/horizontal_black.svg"
              alt="Nicol Weddings and Events"
              width={150}
              height={46}
              className="object-contain opacity-75"
              style={{ height: "auto" }}
            />
          </a>
          <p className="font-[family-name:var(--font-cormorant)] italic text-[#363025]/45 text-[16px] leading-snug max-w-[200px]">
            Minden esküvő egy egyedi és megismételhetetlen történet.
          </p>
          <p className="hidden md:block font-[family-name:var(--font-nunito)] text-[#363025]/30 text-[10px] tracking-[0.15em] uppercase mt-2">
            © {new Date().getFullYear()} Nicol Weddings and Events
          </p>
        </div>

        {/* Bal — navigáció */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 md:flex-col md:gap-3 order-2 md:order-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.2em] uppercase text-[#363025]/50 hover:text-[#363025] transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Jobb — social */}
        <div className="flex flex-col items-center md:items-end gap-4 order-3">
          <p className="font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.25em] uppercase text-[#363025]/40">
            Social
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/nicolweddings"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#363025]/40 hover:text-[#363025] transition-colors duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/nicolweddingsandevents"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#363025]/40 hover:text-[#363025] transition-colors duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@nicolweddings"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-[#363025]/40 hover:text-[#363025] transition-colors duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
              </svg>
            </a>
          </div>
          <a
            href="mailto:nicol.weddings@gmail.com"
            className="font-[family-name:var(--font-quicksand)] text-[#363025]/40 text-[12px] hover:text-[#363025] transition-colors duration-300 mt-2"
          >
            nicol.weddings@gmail.com
          </a>
          <a
            href="tel:+36305444676"
            className="font-[family-name:var(--font-quicksand)] text-[#363025]/40 text-[12px] hover:text-[#363025] transition-colors duration-300"
          >
            +36 30 544 4676
          </a>
        </div>
      </div>

      {/* Copyright — mobilon a csík felett */}
      <p className="md:hidden text-center font-[family-name:var(--font-nunito)] text-[#363025]/30 text-[10px] tracking-[0.15em] uppercase pb-6">
        © {new Date().getFullYear()} Nicol Weddings and Events
      </p>

      {/* Alsó vonal */}
      <div className="border-t border-[#363025]/10" />

      {/* Jogi linkek */}
      <div className="flex justify-center gap-8 py-4">
        <a href="/impresszum" className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.15em] uppercase text-[#363025]/30 hover:text-[#363025]/60 transition-colors duration-300">
          Impresszum
        </a>
        <a href="/adatvedelmi-nyilatkozat" className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.15em] uppercase text-[#363025]/30 hover:text-[#363025]/60 transition-colors duration-300">
          Adatvédelmi nyilatkozat
        </a>
      </div>

    </footer>
  );
}
