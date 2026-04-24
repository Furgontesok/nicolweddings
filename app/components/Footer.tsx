export default function Footer() {
  return (
    <footer className="bg-[#363025] py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Logo */}
        <a href="#kezdooldal" className="font-[family-name:var(--font-italianno)] text-white text-4xl tracking-wide">
          Nicol Weddings
        </a>

        <div className="w-16 h-px bg-white/20" />

        {/* Nav linkek */}
        <nav>
          <ul className="flex flex-wrap justify-center gap-6">
            {["Kezdőoldal", "Szolgáltatások", "Galéria", "Rólam", "Referenciák", "Kapcsolat"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace("ő", "o").replace("á", "a").replace("é", "e").replace("í", "i")}`}
                  className="font-[family-name:var(--font-nunito)] text-white/50 text-xs tracking-widest uppercase hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social ikonok */}
        <div className="flex gap-6">
          <a
            href="https://instagram.com"
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
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>

        {/* Kontakt */}
        <div className="font-[family-name:var(--font-quicksand)] text-white/40 text-sm space-y-1">
          <p><a href="mailto:info@nicolweddings.hu" className="hover:text-white/70 transition-colors">info@nicolweddings.hu</a></p>
          <p>Magyarország</p>
        </div>

        <div className="w-16 h-px bg-white/20" />

        {/* Copyright */}
        <p className="font-[family-name:var(--font-nunito)] text-white/30 text-xs tracking-widest">
          © {new Date().getFullYear()} Nicol Weddings and Events
        </p>
      </div>
    </footer>
  );
}
