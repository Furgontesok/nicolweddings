"use client";

import { useState } from "react";

interface Package {
  key: string;
  title: string;
  price: string;
}

interface Props {
  token: string;
  packages: Package[];
}

const inputClass =
  "w-full bg-[#EEECEA] px-4 py-3 font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.2em] uppercase text-[#363025] placeholder:text-[#363025]/40 focus:outline-none focus:bg-[#E5E3E0] transition-colors duration-200";

export default function AjanlatAccept({ token, packages }: Props) {
  const [open, setOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState(packages.length === 1 ? packages[0].key : "");
  const [nev, setNev] = useState("");
  const [szulHely, setSzulHely] = useState("");
  const [szulIdo, setSzulIdo] = useState("");
  const [lakcim, setLakcim] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [megjegyzes, setMegjegyzes] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { supabase } = await import("@/lib/supabase");
    if (supabase) {
      await supabase.from("proposal_acceptances").insert({
        token,
        selected_package: selectedPkg,
        nev,
        szuletesi_hely: szulHely,
        szuletesi_ido: szulIdo,
        lakcim,
        telefon,
        email,
        megjegyzes,
      });
    }
    setSent(true);
    setLoading(false);
  };

  if (sent) {
    return (
      <section className="bg-[#F5F3ED] py-24 px-8 text-center">
        <p className="font-[family-name:var(--font-italianno)] text-6xl text-[#363025] mb-5">Köszönöm!</p>
        <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/55 text-[15px]">
          Hamarosan felveszem veled a kapcsolatot a következő lépésekkel kapcsolatban.
        </p>
      </section>
    );
  }

  return (
    <section className="bg-[#F5F3ED] py-20 px-8">
      <div className="max-w-xl mx-auto">

        {!open ? (
          <div className="text-center">
            <p className="font-[family-name:var(--font-nunito)] text-[12px] tracking-[0.4em] uppercase text-[#363025]/30 mb-6">
              Döntésre jutottatok?
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light text-[#363025] italic mb-10 leading-snug">
              Elfogadom az ajánlatot
            </h2>
            <button
              onClick={() => setOpen(true)}
              className="inline-block bg-[#363025] text-white font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.3em] uppercase px-14 py-4 hover:bg-[#363025]/80 transition-colors duration-300"
            >
              Elfogadom
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-8">
              <p className="font-[family-name:var(--font-nunito)] text-[12px] tracking-[0.4em] uppercase text-[#363025]/30 mb-3">
                Ajánlat elfogadása
              </p>
              <div className="w-10 h-px bg-[#363025]/15 mx-auto" />
            </div>

            {/* Csomag kiválasztása */}
            {packages.length > 1 && (
              <div>
                <p className="font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.3em] uppercase text-[#363025]/40 mb-3">
                  Kért csomag *
                </p>
                <div className="space-y-2">
                  {packages.map((pkg) => (
                    <label
                      key={pkg.key}
                      className={`flex items-center justify-between gap-4 px-4 py-3 cursor-pointer transition-colors duration-200 ${
                        selectedPkg === pkg.key ? "bg-[#363025] text-white" : "bg-[#EEECEA] text-[#363025]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="package"
                          value={pkg.key}
                          checked={selectedPkg === pkg.key}
                          onChange={() => setSelectedPkg(pkg.key)}
                          required
                          className="sr-only"
                        />
                        <span className="font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.15em] uppercase">
                          {pkg.title}
                        </span>
                      </div>
                      <span className="font-[family-name:var(--font-cormorant)] text-lg font-light shrink-0">
                        {pkg.price}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Személyes adatok */}
            <div>
              <p className="font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.3em] uppercase text-[#363025]/40 mb-3">
                Személyes adatok
              </p>
              <div className="space-y-2">
                <input required type="text" value={nev} onChange={(e) => setNev(e.target.value)}
                  className={inputClass} placeholder="Teljes név *" />
                <input required type="text" value={szulHely} onChange={(e) => setSzulHely(e.target.value)}
                  className={inputClass} placeholder="Születési hely *" />
                <input required type="date" value={szulIdo} onChange={(e) => setSzulIdo(e.target.value)}
                  className={inputClass} />
                <input required type="text" value={lakcim} onChange={(e) => setLakcim(e.target.value)}
                  className={inputClass} placeholder="Lakcím *" />
                <input required type="tel" value={telefon} onChange={(e) => setTelefon(e.target.value)}
                  className={inputClass} placeholder="Telefonszám *" />
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className={inputClass} placeholder="E-mail cím *" />
                <textarea value={megjegyzes} onChange={(e) => setMegjegyzes(e.target.value)}
                  className={`${inputClass} resize-none normal-case tracking-normal`}
                  rows={3}
                  placeholder="Megjegyzés (opcionális)" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || !selectedPkg}
              className="w-full bg-[#363025] text-white font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.3em] uppercase py-4 hover:bg-[#363025]/80 transition-colors duration-300 disabled:opacity-40"
            >
              {loading ? "Küldés..." : "Ajánlat véglegesítése"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
