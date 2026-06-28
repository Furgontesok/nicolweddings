"use client";

import { useEffect, useState } from "react";
import { supabase, supabaseConfigured } from "@/lib/supabase";

type EmailRow = { id: string; email: string; name?: string; downloaded_at: string };

export default function AdminEmailek() {
  const [emails, setEmails] = useState<EmailRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (!supabase || !supabaseConfigured) { setLoading(false); return; }
      const { data } = await supabase
        .from("ebook_downloads")
        .select("*")
        .order("downloaded_at", { ascending: false });
      setEmails(data ?? []);
      setLoading(false);
    }
    load();
  }, []);

  const copyAll = () => {
    const text = emails.map(e => e.email).join("\n");
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="p-10">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.3em] uppercase text-[#363025]/40 mb-2">Admin</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#363025]">E-book letöltők</h1>
        </div>
        {emails.length > 0 && (
          <button
            onClick={copyAll}
            className="font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.2em] uppercase px-8 py-3 border border-[#363025]/50 text-[#363025] hover:bg-[#363025] hover:text-white transition-all duration-300"
          >
            Másolás
          </button>
        )}
      </div>

      {!supabaseConfigured && (
        <div className="bg-white border border-[#363025]/10 p-10 text-center">
          <p className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#363025]/50 mb-3 italic">
            Supabase nincs konfigurálva
          </p>
          <p className="font-[family-name:var(--font-nunito)] text-[11px] tracking-wide text-[#363025]/35 leading-relaxed max-w-sm mx-auto">
            Hozz létre egy <strong>ebook_downloads</strong> táblát Supabase-ben, majd add hozzá a projekt env változóit a <code>.env.local</code> fájlhoz.
          </p>
          <div className="mt-6 bg-[#F5F3ED] p-4 text-left max-w-md mx-auto">
            <pre className="font-mono text-[10px] text-[#363025]/60 leading-relaxed">{`create table ebook_downloads (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  name text,
  downloaded_at timestamptz default now()
);`}</pre>
          </div>
        </div>
      )}

      {supabaseConfigured && loading && (
        <div className="text-center py-20">
          <p className="font-[family-name:var(--font-nunito)] text-[11px] tracking-widest uppercase text-[#363025]/30">Betöltés...</p>
        </div>
      )}

      {supabaseConfigured && !loading && emails.length === 0 && (
        <div className="bg-white border border-[#363025]/10 p-10 text-center">
          <p className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#363025]/40 italic">
            Még nincs letöltés
          </p>
          <p className="font-[family-name:var(--font-nunito)] text-[11px] tracking-wide text-[#363025]/30 mt-3">
            Az e-mail cím bekérő form elkészítése után jelennek meg itt a letöltők.
          </p>
        </div>
      )}

      {supabaseConfigured && !loading && emails.length > 0 && (
        <div className="bg-white border border-[#363025]/8">
          <div className="grid grid-cols-3 px-6 py-3 border-b border-[#363025]/8">
            <span className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.25em] uppercase text-[#363025]/35">E-mail</span>
            <span className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.25em] uppercase text-[#363025]/35">Név</span>
            <span className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.25em] uppercase text-[#363025]/35">Dátum</span>
          </div>
          {emails.map((row) => (
            <div key={row.id} className="grid grid-cols-3 px-6 py-4 border-b border-[#363025]/5 hover:bg-[#F5F3ED]/50 transition-colors">
              <span className="font-[family-name:var(--font-nunito)] text-[12px] text-[#363025]">{row.email}</span>
              <span className="font-[family-name:var(--font-nunito)] text-[12px] text-[#363025]/60">{row.name ?? "—"}</span>
              <span className="font-[family-name:var(--font-nunito)] text-[11px] text-[#363025]/40">
                {new Date(row.downloaded_at).toLocaleDateString("hu-HU")}
              </span>
            </div>
          ))}
          <div className="px-6 py-3 border-t border-[#363025]/8">
            <span className="font-[family-name:var(--font-nunito)] text-[10px] tracking-widest uppercase text-[#363025]/30">
              Összesen: {emails.length} letöltő
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
