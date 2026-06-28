"use client";

import { useEffect, useState } from "react";
import { supabase, supabaseConfigured } from "@/lib/supabase";

type Submission = {
  id: string;
  nev: string;
  email: string;
  telefon: string;
  datum?: string;
  letszam?: string;
  szolgaltatas?: string;
  honnan?: string;
  uzenet?: string;
  forras?: string;
  created_at: string;
};

const szolgaltatasLabel: Record<string, string> = {
  teljes: "Teljes körű szervezés",
  "30nap": "30 nap a nagy napig",
  tanacsadas: "Tanácsadás",
  egyeb: "Egyéb",
};

const honnanLabel: Record<string, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  google: "Google",
  ismeros: "Ismerős",
  szolgaltato: "Szolgáltató",
  egyeb: "Egyéb",
};

export default function AdminMegkeresesek() {
  const [rows, setRows] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Submission | null>(null);

  useEffect(() => {
    async function load() {
      if (!supabase || !supabaseConfigured) { setLoading(false); return; }
      const { data } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });
      setRows(data ?? []);
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div className="p-10 min-h-full">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.3em] uppercase text-[#363025]/40 mb-2">Admin</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#363025]">Megkeresések</h1>
        </div>
        {rows.length > 0 && (
          <span className="font-[family-name:var(--font-nunito)] text-[10px] tracking-widest uppercase text-[#363025]/30">
            {rows.length} beérkezett
          </span>
        )}
      </div>

      {!supabaseConfigured && (
        <div className="bg-white border border-[#363025]/10 p-10 text-center">
          <p className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#363025]/50 mb-3 italic">
            Supabase nincs konfigurálva
          </p>
        </div>
      )}

      {supabaseConfigured && loading && (
        <div className="text-center py-20">
          <p className="font-[family-name:var(--font-nunito)] text-[11px] tracking-widest uppercase text-[#363025]/30">Betöltés...</p>
        </div>
      )}

      {supabaseConfigured && !loading && rows.length === 0 && (
        <div className="bg-white border border-[#363025]/10 p-10 text-center">
          <p className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#363025]/40 italic">
            Még nincs megkeresés
          </p>
          <p className="font-[family-name:var(--font-nunito)] text-[11px] tracking-wide text-[#363025]/30 mt-3">
            A kapcsolati űrlap kitöltése után jelennek meg itt a megkeresések.
          </p>
        </div>
      )}

      {supabaseConfigured && !loading && rows.length > 0 && (
        <div className="flex gap-6">
          {/* Lista */}
          <div className="flex-1 bg-white border border-[#363025]/8">
            <div className="grid grid-cols-4 px-6 py-3 border-b border-[#363025]/8">
              <span className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.25em] uppercase text-[#363025]/35">Név</span>
              <span className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.25em] uppercase text-[#363025]/35">Szolgáltatás</span>
              <span className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.25em] uppercase text-[#363025]/35">Forrás</span>
              <span className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.25em] uppercase text-[#363025]/35">Dátum</span>
            </div>
            {rows.map((row) => (
              <div
                key={row.id}
                onClick={() => setSelected(selected?.id === row.id ? null : row)}
                className={`grid grid-cols-4 px-6 py-4 border-b border-[#363025]/5 cursor-pointer transition-colors ${
                  selected?.id === row.id ? "bg-[#363025]/5" : "hover:bg-[#F5F3ED]/50"
                }`}
              >
                <span className="font-[family-name:var(--font-nunito)] text-[12px] text-[#363025]">{row.nev}</span>
                <span className="font-[family-name:var(--font-nunito)] text-[11px] text-[#363025]/60">
                  {row.szolgaltatas ? (szolgaltatasLabel[row.szolgaltatas] ?? row.szolgaltatas) : "—"}
                </span>
                <span className="font-[family-name:var(--font-nunito)] text-[11px] text-[#363025]/40">
                  {row.forras === "kapcsolat-oldal" ? "Kapcsolat oldal" : "Főoldal"}
                </span>
                <span className="font-[family-name:var(--font-nunito)] text-[11px] text-[#363025]/40">
                  {new Date(row.created_at).toLocaleDateString("hu-HU")}
                </span>
              </div>
            ))}
          </div>

          {/* Részletek panel */}
          {selected && (
            <div className="w-80 shrink-0 bg-white border border-[#363025]/8 p-6 self-start">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.25em] uppercase text-[#363025]/35 mb-1">Megkereső</p>
                  <p className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#363025]">{selected.nev}</p>
                </div>
                <button onClick={() => setSelected(null)} className="text-[#363025]/30 hover:text-[#363025] transition-colors text-lg">×</button>
              </div>

              <div className="space-y-4">
                <Field label="Email" value={<a href={`mailto:${selected.email}`} className="underline">{selected.email}</a>} />
                <Field label="Telefon" value={<a href={`tel:${selected.telefon}`} className="underline">{selected.telefon}</a>} />
                {selected.datum && <Field label="Esküvő dátuma" value={new Date(selected.datum).toLocaleDateString("hu-HU")} />}
                {selected.letszam && <Field label="Létszám" value={`${selected.letszam} fő`} />}
                {selected.szolgaltatas && <Field label="Szolgáltatás" value={szolgaltatasLabel[selected.szolgaltatas] ?? selected.szolgaltatas} />}
                {selected.honnan && <Field label="Honnan hallott" value={honnanLabel[selected.honnan] ?? selected.honnan} />}
                {selected.uzenet && (
                  <div>
                    <p className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.25em] uppercase text-[#363025]/35 mb-1">Üzenet</p>
                    <p className="font-[family-name:var(--font-quicksand)] text-[12px] text-[#363025]/70 leading-relaxed">{selected.uzenet}</p>
                  </div>
                )}
                <Field label="Beérkezett" value={new Date(selected.created_at).toLocaleString("hu-HU")} />
                <Field label="Forrás" value={selected.forras === "kapcsolat-oldal" ? "Kapcsolat oldal" : "Főoldal"} />
              </div>

              <a
                href={`mailto:${selected.email}`}
                className="mt-8 block text-center font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.2em] uppercase px-6 py-3 bg-[#363025] text-white hover:bg-[#363025]/80 transition-colors duration-300"
              >
                Válasz küldése
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Field({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <p className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.25em] uppercase text-[#363025]/35 mb-1">{label}</p>
      <p className="font-[family-name:var(--font-nunito)] text-[12px] text-[#363025]/80">{value}</p>
    </div>
  );
}
