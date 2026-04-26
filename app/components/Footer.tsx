import Image from "next/image";

export default function Footer() {
  const navLinks = [
    { label: "Főoldal", href: "/" },
    { label: "Rólam", href: "/#rolam" },
    { label: "Szolgáltatások", href: "/szolgaltatasok" },
    { label: "Referenciák", href: "/referenciak" },
    { label: "Kapcsolat", href: "/kapcsolat" },
  ];

  return (
    <footer className="bg-[#363025] py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Logo */}
        <a href="/">
          <Image
            src="/images/horizontal_white.svg"
            alt="Nicol Weddings and Events"
            width={180}
            height={56}
            className="object-contain"
            style={{ height: "auto" }}
          />
        </a>

        <div className="w-16 h-px bg-white/20" />

        {/* Nav linkek */}
        <nav>
          <ul className="flex flex-wrap justify-center gap-6">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-[family-name:var(--font-nunito)] text-white/50 text-xs tracking-widest uppercase hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social ikonok */}
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/nicolweddings"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@nicolweddings"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
            </svg>
          </a>
        </div>

        {/* Kontakt */}
        <div className="font-[family-name:var(--font-quicksand)] text-white/40 text-sm space-y-1">
          <p><a href="mailto:nicol.weddings@gmail.com" className="hover:text-white/70 transition-colors">nicol.weddings@gmail.com</a></p>
          <p><a href="tel:+36305444676" className="hover:text-white/70 transition-colors">+36 30 544 4676</a></p>
        </div>

        <div className="w-16 h-px bg-white/20" />

        <p className="font-[family-name:var(--font-nunito)] text-white/30 text-xs tracking-widest">
          © {new Date().getFullYear()} Nicol Weddings and Events
        </p>
      </div>
    </footer>
  );
}
