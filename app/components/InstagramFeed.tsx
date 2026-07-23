"use client";

import { useEffect } from "react";

export default function InstagramFeed() {
  useEffect(() => {
    if ((window as any).__bhldScript) return;
    (window as any).__bhldScript = true;
    const s = document.createElement("script");
    s.type = "module";
    s.src = "https://w.behold.so/widget.js";
    document.head.appendChild(s);
  }, []);

  return (
    <section className="bg-white py-12 md:py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="font-[family-name:var(--font-nunito)] text-[12px] tracking-[0.3em] uppercase text-[#363025]/40 mb-3">Instagram</p>
          <h2 className="font-[family-name:var(--font-italianno)] text-4xl md:text-5xl lg:text-6xl text-[#363025]">Kövess minket</h2>
        </div>
        <style>{`
          behold-widget { --columns: 3; --rows: 2; }
          @media (min-width: 768px) { behold-widget { --columns: 6; --rows: 1; } }
        `}</style>
        <div dangerouslySetInnerHTML={{ __html: '<behold-widget feed-id="zGSeoX5yXQWaM1H0QDI5"></behold-widget>' }} />
      </div>
    </section>
  );
}
