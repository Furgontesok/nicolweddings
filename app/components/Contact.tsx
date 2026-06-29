"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [nev, setNev] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [datum, setDatum] = useState("");
  const [letszam, setLetszam] = useState("");
  const [szolgaltatas, setSzolgaltatas] = useState("");
  const [honnan, setHonnan] = useState("");
  const [uzenet, setUzenet] = useState("");
  const [sent, setSent] = useState(false);

  const inputClass =
    "w-full bg-[#EEECEA] px-4 py-3 font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.2em] uppercase text-[#000000] placeholder:text-[#000000]/50 focus:outline-none focus:bg-[#E5E3E0] transition-colors duration-200";

  return (
    <>
      <style>{`
        input[type="date"]::-webkit-datetime-edit { color: rgba(0,0,0,0.7); }
        input[type="date"]::-webkit-datetime-edit-fields-wrapper { color: rgba(0,0,0,0.7); }
        input[type="date"].has-value::-webkit-datetime-edit,
        input[type="date"].has-value::-webkit-datetime-edit-fields-wrapper { color: #000000; }
      `}</style>
      <section id="kapcsolat" className="bg-white py-10 md:py-12 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Mobil fejléc + kép */}
        <div className="md:hidden text-center mb-8">
          <p className="font-[family-name:var(--font-nunito)] text-[12px] tracking-[0.3em] uppercase text-[#363025]/40 mb-7">
            Lépj kapcsolatba velem
          </p>
          {/* Ovális kép mobilon — cím alatt, középre */}
          <div
            className="relative overflow-hidden mx-auto mb-6"
            style={{ width: 160, height: 220, borderRadius: "9999px" }}
          >
            <Image
              src="/images/egyeb-8.jpg"
              alt="Esküvői pillanat"
              fill
              className="object-cover object-center"
              sizes="160px"
            />
          </div>

          {/* Elérhetőségek mobilon — vízszintesen */}
          <div className="flex justify-center gap-8 font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-[15px] mb-8">
            <a href="mailto:nicol.weddings@gmail.com" className="flex flex-col items-center gap-1.5 hover:text-[#363025] transition-colors">
              <span className="font-[family-name:var(--font-nunito)] text-[11px] tracking-widest uppercase text-[#363025]/35">Email</span>
              nicol.weddings@gmail.com
            </a>
            <a href="tel:+36305444676" className="flex flex-col items-center gap-1.5 hover:text-[#363025] transition-colors">
              <span className="font-[family-name:var(--font-nunito)] text-[11px] tracking-widest uppercase text-[#363025]/35">Telefon</span>
              +36 30 544 4676
            </a>
          </div>
        </div>

        {/* Fejléc — desktop */}
        <div className="hidden md:block text-center mb-12">
          <h2 className="font-[family-name:var(--font-cormorant)] italic text-[42px] md:text-[58px] font-light text-[#363025]">
            Alig várom, hogy megismerjük egymást!
          </h2>
          <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/55 text-[16px] mt-5">
            Írj nekem, és 48 órán belül visszajelzek!
          </p>
        </div>

        {/* Desktop + form */}
        <div className="flex flex-col md:flex-row gap-16 items-start">

          {/* Bal — info (desktop only) */}
          <div className="hidden md:block flex-shrink-0 md:w-[38%]">
            <p className="font-[family-name:var(--font-nunito)] text-[12px] tracking-[0.3em] uppercase text-[#363025]/40 mb-2">
              Lépj kapcsolatba velem
            </p>
            <div className="w-10 h-px bg-[#363025]/20 mb-5" />
            <div className="space-y-5 font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-sm">
              <div>
                <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-widest uppercase text-[#363025]/35 mb-1">Email</p>
                <a href="mailto:nicol.weddings@gmail.com" className="hover:text-[#363025] transition-colors">
                  nicol.weddings@gmail.com
                </a>
              </div>
              <div>
                <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-widest uppercase text-[#363025]/35 mb-1">Telefon</p>
                <a href="tel:+36305444676" className="hover:text-[#363025] transition-colors">
                  +36 30 544 4676
                </a>
              </div>
            </div>
            <div
              className="relative overflow-hidden mt-8 mx-auto"
              style={{ width: 220, height: 300, borderRadius: "50%" }}
            >
              <Image
                src="/images/egyeb-8.jpg"
                alt="Esküvői pillanat"
                fill
                className="object-cover object-center"
                sizes="220px"
              />
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 w-full">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16 gap-4">
                <p className="font-[family-name:var(--font-italianno)] text-6xl text-[#363025]">Köszönöm!</p>
                <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/60 text-sm leading-relaxed">
                  Hamarosan felveszem veled a kapcsolatot.
                </p>
              </div>
            ) : (
              <form
                className="space-y-3"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const { supabase } = await import("@/lib/supabase");
                  if (supabase) {
                    await supabase.from("contact_submissions").insert({
                      nev, email, telefon, datum, letszam, szolgaltatas, honnan, uzenet, forras: "fooldal"
                    });
                  }
                  setSent(true);
                }}
              >
                <input required type="text" value={nev} onChange={(e) => setNev(e.target.value)} className={inputClass} placeholder="Teljes név *" />
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} placeholder="Email cím *" />
                <input required type="tel" value={telefon} onChange={(e) => setTelefon(e.target.value)} className={inputClass} placeholder="Telefonszám *" />
                <input required type="date" value={datum} onChange={(e) => setDatum(e.target.value)} className={`${inputClass} ${datum ? "has-value" : ""}`} />
                <input type="text" inputMode="numeric" value={letszam} onChange={(e) => setLetszam(e.target.value)} className={inputClass} placeholder="Vendégek létszáma" />
                <select required value={szolgaltatas} onChange={(e) => setSzolgaltatas(e.target.value)} className={`${inputClass} cursor-pointer`} style={{ color: szolgaltatas ? "#363025" : "rgba(54,48,37,0.5)" }}>
                  <option value="" disabled>Szolgáltatás *</option>
                  <option value="teljes">Teljes körű esküvőszervezés</option>
                  <option value="30nap">30 nap a nagy napig</option>
                  <option value="tanacsadas">Esküvői tanácsadás</option>
                  <option value="egyeb">Egyéb rendezvények</option>
                </select>
                <select required value={honnan} onChange={(e) => setHonnan(e.target.value)} className={`${inputClass} cursor-pointer`} style={{ color: honnan ? "#363025" : "rgba(54,48,37,0.5)" }}>
                  <option value="" disabled>Honnan hallottál rólam? *</option>
                  <option value="instagram">Instagram</option>
                  <option value="facebook">Facebook</option>
                  <option value="google">Google</option>
                  <option value="ismeros">Ismerős ajánlott</option>
                  <option value="szolgaltato">Szolgáltató ajánlott</option>
                  <option value="egyeb">Egyéb</option>
                </select>
                <textarea required rows={5} value={uzenet} onChange={(e) => setUzenet(e.target.value)} className={`${inputClass} resize-none`} placeholder="Üzenet — meséljetek az elképzeléseitekről... *" />

                <p className="font-[family-name:var(--font-quicksand)] text-[#363025]/35 text-[13px] leading-relaxed pt-1">
                  Az űrlap beküldésével elfogadod az adatkezelési tájékoztatót.
                </p>

                <button
                  type="submit"
                  className="w-full bg-[#363025] text-white font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.25em] uppercase py-4 hover:bg-[#363025]/80 transition-colors duration-300"
                >
                  Küldés
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
