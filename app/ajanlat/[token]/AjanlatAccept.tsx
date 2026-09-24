"use client";

import { useState } from "react";
import DateInput from "@/app/components/DateInput";

interface Package {
  key: string;
  title: string;
  price: string;
}

interface Props {
  token: string;
  packages: Package[];
  coupleName: string;
  lang?: "hu" | "en";
}

const inputClass =
  "w-full bg-[#EEECEA] px-4 py-3 font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.2em] uppercase text-[#363025] placeholder:text-[#363025]/40 focus:outline-none focus:bg-[#E5E3E0] transition-colors duration-200";

const acceptT = {
  hu: {
    decided: "Döntésre jutottatok?",
    accept: "Elfogadom az ajánlatot",
    acceptBtn: "Elfogadom",
    selectedPkg: "Kért csomag *",
    personalData: "Személyes adatok",
    fullName: "Teljes név *",
    birthPlace: "Születési hely *",
    birthDate: "Születési idő *",
    address: "Lakcím *",
    phone: "Telefonszám *",
    email: "E-mail cím *",
    note: "Megjegyzés (opcionális)",
    sending: "Küldés...",
    finalize: "Ajánlat véglegesítése",
    thankYou: "Köszönöm!",
    followUp: "Hamarosan felveszem veled a kapcsolatot a következő lépésekkel kapcsolatban.",
  },
  en: {
    decided: "Have you made your decision?",
    accept: "I accept the proposal",
    acceptBtn: "Accept",
    selectedPkg: "Selected package *",
    personalData: "Personal information",
    fullName: "Full name *",
    birthPlace: "Place of birth *",
    birthDate: "Date of birth *",
    address: "Address *",
    phone: "Phone number *",
    email: "E-mail address *",
    note: "Notes (optional)",
    sending: "Sending...",
    finalize: "Finalise proposal",
    thankYou: "Thank you!",
    followUp: "I will be in touch shortly with the next steps.",
  },
};

export default function AjanlatAccept({ token, packages, coupleName, lang = "hu" }: Props) {
  const t = acceptT[lang];
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
    fetch("/api/notify/acceptance", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        coupleName,
        selectedPackage: selectedPkg,
        nev,
        szuletesiHely: szulHely,
        szuletesiIdo: szulIdo,
        lakcim,
        telefon,
        email,
        megjegyzes,
      }),
    }).catch(() => {});
    setSent(true);
    setLoading(false);
  };

  if (sent) {
    return (
      <section className="bg-[#F5F3ED] pt-14 pb-24 px-8 text-center">
        <p className="font-[family-name:var(--font-italianno)] text-6xl text-[#363025] mb-5">{t.thankYou}</p>
        <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/55 text-[15px]">
          {t.followUp}
        </p>
      </section>
    );
  }

  return (
    <section className="bg-[#F5F3ED] pt-10 pb-10 px-8">
      <div className="max-w-xl mx-auto">

        {/* Fejléc + gomb — mindig látszik */}
        <div className="text-center mb-6">
          <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.35em] uppercase text-[#363025]/40 mb-5">
            {t.decided}
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#363025] italic mb-3 leading-snug">
            {t.accept}
          </h2>

          {/* Gomb */}
          {!open && (
            <button
              onClick={() => setOpen(true)}
              className="inline-block border border-[#363025] text-[#363025] font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.25em] uppercase w-full max-w-xs py-4 text-center hover:bg-[#363025] hover:text-white transition-all duration-300"
            >
              {t.acceptBtn}
            </button>
          )}
        </div>

        {/* Form — legördül */}
        <div
          style={{
            maxHeight: open ? "2000px" : "0px",
            opacity: open ? 1 : 0,
            overflow: "hidden",
            transition: open
              ? "max-height 0.8s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease 0.15s"
              : "max-height 0.4s ease, opacity 0.2s ease",
          }}
        >
          <div className="pb-2">
            <div className="w-10 h-px bg-[#363025]/15 mx-auto mt-2 mb-10" />

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Csomag kiválasztása */}
              {packages.length >= 1 && (
                <div>
                  <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.35em] uppercase text-[#363025]/40 mb-3">
                    {t.selectedPkg}
                  </p>
                  <div className="space-y-2">
                    {packages.map((pkg) => (
                      <label
                        key={pkg.key}
                        className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 px-4 py-4 cursor-pointer transition-all duration-300 ${
                          selectedPkg === pkg.key
                            ? "bg-[#363025] text-white"
                            : "bg-[#EEECEA] text-[#363025] hover:bg-[#E5E3E0]"
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
                          <span className="font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.12em] uppercase">
                            {pkg.title}
                          </span>
                        </div>
                        <span className="font-[family-name:var(--font-cormorant)] text-lg font-light sm:shrink-0 pl-0 sm:pl-0">
                          {pkg.price}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Személyes adatok */}
              <div>
                <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.35em] uppercase text-[#363025]/40 mb-3">
                  {t.personalData}
                </p>
                <div className="space-y-2">
                  <input required type="text" value={nev} onChange={(e) => setNev(e.target.value)}
                    className={inputClass} placeholder={t.fullName} />
                  <input required type="text" value={szulHely} onChange={(e) => setSzulHely(e.target.value)}
                    className={inputClass} placeholder={t.birthPlace} />
                  <DateInput
                    value={szulIdo}
                    onChange={setSzulIdo}
                    placeholder={t.birthDate}
                    required
                    className="w-full bg-[#EEECEA] focus-within:bg-[#E5E3E0] transition-colors duration-200"
                    inputClassName="text-[#363025] placeholder:text-[#363025]/40"
                    textColor="#363025"
                  />
                  <input required type="text" value={lakcim} onChange={(e) => setLakcim(e.target.value)}
                    className={inputClass} placeholder={t.address} />
                  <input required type="tel" value={telefon} onChange={(e) => setTelefon(e.target.value)}
                    className={inputClass} placeholder={t.phone} />
                  <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    className={inputClass} placeholder={t.email} />
                  <textarea value={megjegyzes} onChange={(e) => setMegjegyzes(e.target.value)}
                    className={`${inputClass} resize-none normal-case tracking-normal`}
                    rows={3}
                    placeholder={t.note} />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || !selectedPkg}
                className="w-full bg-[#363025] text-white font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.3em] uppercase py-4 hover:bg-[#363025]/80 transition-colors duration-300 disabled:opacity-40"
              >
                {loading ? t.sending : t.finalize}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
