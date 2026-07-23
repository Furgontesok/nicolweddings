"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { adminDelete } from "@/lib/admin-delete";

type Testimonial = {
  id: string;
  name: string;
  quote: string;
  text: string;
  photo_url: string | null;
  object_position: string;
  display_order: number;
};

const inputCls = "w-full bg-[#F5F3ED] border border-[#363025]/10 px-4 py-2.5 font-[family-name:var(--font-nunito)] text-[12px] text-[#363025] focus:outline-none focus:border-[#363025]/30 transition-colors";
const labelCls = "font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.25em] uppercase text-[#363025]/40 mb-1 block";

const empty = { name: "", quote: "", text: "", photo_url: "", object_position: "center top" };

export default function AdminVissza() {
  const [rows, setRows] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [form, setForm] = useState(empty);
  const [editId, setEditId] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => { load(); }, []);

  async function load() {
    if (!supabase) return;
    setLoading(true);
    const { data } = await supabase.from("testimonials").select("*").order("display_order");
    setRows(data ?? []);
    setLoading(false);
  }

  async function uploadPhoto(file: File): Promise<string | null> {
    if (!supabase) return null;
    setUploading(true);
    setUploadError(null);
    const ext = file.name.split(".").pop() ?? "jpg";
    const path = `${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from("visszajelzesek").upload(path, file);
    if (error) {
      setUploadError(`Fotó feltöltési hiba: ${error.message}`);
      setUploading(false);
      return null;
    }
    const { data: { publicUrl } } = supabase.storage.from("visszajelzesek").getPublicUrl(path);
    setUploading(false);
    return publicUrl;
  }

  async function save() {
    if (!supabase || !form.name || !form.quote || !form.text) return;
    setSaving(true);
    const payload = {
      name: form.name,
      quote: form.quote,
      text: form.text,
      photo_url: form.photo_url || null,
      object_position: form.object_position || "center top",
    };
    if (editId) {
      await supabase.from("testimonials").update(payload).eq("id", editId);
    } else {
      const maxOrder = rows.length > 0 ? Math.max(...rows.map(r => r.display_order)) + 1 : 0;
      await supabase.from("testimonials").insert({ ...payload, display_order: maxOrder });
    }
    setForm(empty);
    setEditId(null);
    setSaving(false);
    load();
  }

  async function deleteRow(id: string) {
    if (!confirm("Biztosan törlöd?")) return;
    const err = await adminDelete("testimonials", id);
    if (err) { alert("Törlés sikertelen: " + err); return; }
    setRows(prev => prev.filter(r => r.id !== id));
  }

  async function move(row: Testimonial, dir: -1 | 1) {
    if (!supabase) return;
    const sorted = [...rows].sort((a, b) => a.display_order - b.display_order);
    const idx = sorted.findIndex(r => r.id === row.id);
    const swapIdx = idx + dir;
    if (swapIdx < 0 || swapIdx >= sorted.length) return;
    const swap = sorted[swapIdx];
    await Promise.all([
      supabase.from("testimonials").update({ display_order: swap.display_order }).eq("id", row.id),
      supabase.from("testimonials").update({ display_order: row.display_order }).eq("id", swap.id),
    ]);
    load();
  }

  function startEdit(row: Testimonial) {
    setEditId(row.id);
    setForm({
      name: row.name,
      quote: row.quote,
      text: row.text,
      photo_url: row.photo_url ?? "",
      object_position: row.object_position ?? "center top",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function cancelEdit() {
    setEditId(null);
    setForm(empty);
    setUploadError(null);
  }

  const sorted = [...rows].sort((a, b) => a.display_order - b.display_order);

  return (
    <div className="p-10 min-h-full max-w-3xl">
      <div className="mb-10">
        <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.3em] uppercase text-[#363025]/40 mb-2">Admin</p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#363025]">Visszajelzések</h1>
        <p className="font-[family-name:var(--font-nunito)] text-[11px] text-[#363025]/40 mt-2">A főoldalon és a referenciák oldalon jelenik meg.</p>
      </div>

      {/* Űrlap */}
      <div className="bg-white border border-[#363025]/8 p-8 mb-10">
        <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#363025] mb-6">
          {editId ? "Szerkesztés" : "Új visszajelzés"}
        </h2>

        <div className="space-y-4">
          <div>
            <label className={labelCls}>Név *</label>
            <input className={inputCls} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Ani & Peti" />
          </div>
          <div>
            <label className={labelCls}>Rövid idézet * (ez jelenik meg kiemelt formában)</label>
            <textarea className={`${inputCls} resize-none`} rows={2} value={form.quote} onChange={e => setForm(f => ({ ...f, quote: e.target.value }))} placeholder="Egy-két mondat, amit kiemelünk..." />
          </div>
          <div>
            <label className={labelCls}>Teljes szöveg *</label>
            <textarea className={`${inputCls} resize-none`} rows={5} value={form.text} onChange={e => setForm(f => ({ ...f, text: e.target.value }))} placeholder="A teljes visszajelzés..." />
          </div>
          <div>
            <label className={labelCls}>Fotó</label>
            {form.photo_url && (
              <div className="relative w-24 h-32 mb-3 overflow-hidden rounded-sm">
                <Image
                  src={form.photo_url}
                  alt="Előnézet"
                  fill
                  className="object-cover object-top"
                  unoptimized={form.photo_url.startsWith("https://")}
                />
                <button
                  onClick={() => setForm(f => ({ ...f, photo_url: "" }))}
                  className="absolute top-1 right-1 bg-black/60 text-white text-[11px] w-5 h-5 flex items-center justify-center leading-none"
                >
                  ×
                </button>
              </div>
            )}
            {uploadError && (
              <p className="font-[family-name:var(--font-nunito)] text-[11px] text-red-500 mb-2">{uploadError}</p>
            )}
            <div className="flex items-center gap-3">
              <button
                onClick={() => fileRef.current?.click()}
                disabled={uploading}
                className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.15em] uppercase px-5 py-2.5 border border-[#363025]/25 text-[#363025]/50 hover:border-[#363025] hover:text-[#363025] transition-all disabled:opacity-40"
              >
                {uploading ? "Feltöltés..." : "Fotó feltöltése"}
              </button>
              <span className="font-[family-name:var(--font-nunito)] text-[10px] text-[#363025]/30">vagy</span>
              <input
                className={`${inputCls} flex-1`}
                value={form.photo_url}
                onChange={e => setForm(f => ({ ...f, photo_url: e.target.value }))}
                placeholder="/images/visszajelzes-neve.jpg"
              />
            </div>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={async e => {
                const file = e.target.files?.[0];
                if (!file) return;
                const url = await uploadPhoto(file);
                if (url) setForm(f => ({ ...f, photo_url: url }));
                e.target.value = "";
              }}
            />
          </div>
          <div>
            <label className={labelCls}>Fotó pozíciója (CSS object-position)</label>
            <input className={inputCls} value={form.object_position} onChange={e => setForm(f => ({ ...f, object_position: e.target.value }))} placeholder="center top" />
            <p className="font-[family-name:var(--font-nunito)] text-[9px] text-[#363025]/30 mt-1">Pl.: center top, center 30%, center 80%</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={save}
            disabled={saving || !form.name || !form.quote || !form.text}
            className="font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.2em] uppercase px-10 py-3 bg-[#363025] text-white hover:bg-[#363025]/80 transition-colors disabled:opacity-40"
          >
            {saving ? "Mentés..." : editId ? "Módosítás mentése" : "Hozzáadás"}
          </button>
          {editId && (
            <button onClick={cancelEdit} className="font-[family-name:var(--font-nunito)] text-[10px] tracking-widest uppercase text-[#363025]/40 hover:text-[#363025] transition-colors">
              Mégse
            </button>
          )}
        </div>
      </div>

      {/* Lista */}
      <div>
        <p className={`${labelCls} mb-4`}>Meglévő visszajelzések ({rows.length})</p>
        {loading ? (
          <p className="font-[family-name:var(--font-nunito)] text-[11px] tracking-widest uppercase text-[#363025]/30">Betöltés...</p>
        ) : rows.length === 0 ? (
          <div className="bg-white border border-[#363025]/8 p-8 text-center">
            <p className="font-[family-name:var(--font-cormorant)] text-xl font-light text-[#363025]/40 italic">Még nincsenek visszajelzések a Supabase-ben</p>
            <p className="font-[family-name:var(--font-nunito)] text-[10px] text-[#363025]/30 mt-2">A hardcoded visszajelzések addig is megjelennek a főoldalon.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {sorted.map((row, idx) => (
              <div key={row.id} className="bg-white border border-[#363025]/8 flex items-start gap-4 p-5">
                {/* Fotó */}
                <div className="shrink-0 w-14 h-20 relative overflow-hidden bg-[#E8E5DC]">
                  {row.photo_url ? (
                    <Image
                      src={row.photo_url}
                      alt={row.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: row.object_position ?? "center top" }}
                      unoptimized={row.photo_url.startsWith("https://")}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-[#363025]/20 text-2xl">◇</span>
                    </div>
                  )}
                </div>

                {/* Tartalom */}
                <div className="flex-1 min-w-0">
                  <p className="font-[family-name:var(--font-nunito)] text-[12px] text-[#363025] font-medium">{row.name}</p>
                  <p className="font-[family-name:var(--font-cormorant)] text-[14px] italic text-[#363025]/60 mt-1 line-clamp-2">{row.quote}</p>
                </div>

                {/* Akciók */}
                <div className="flex flex-col gap-1 shrink-0 items-end">
                  <div className="flex gap-1 mb-1">
                    <button onClick={() => move(row, -1)} disabled={idx === 0} className="text-[#363025]/25 hover:text-[#363025]/60 disabled:opacity-20 text-[10px] px-1.5 py-1 border border-[#363025]/10">▲</button>
                    <button onClick={() => move(row, 1)} disabled={idx === sorted.length - 1} className="text-[#363025]/25 hover:text-[#363025]/60 disabled:opacity-20 text-[10px] px-1.5 py-1 border border-[#363025]/10">▼</button>
                  </div>
                  <button onClick={() => startEdit(row)} className="font-[family-name:var(--font-nunito)] text-[9px] tracking-widest uppercase text-[#363025]/40 hover:text-[#363025] transition-colors">Szerkeszt</button>
                  <button onClick={() => deleteRow(row.id)} className="font-[family-name:var(--font-nunito)] text-[9px] tracking-widest uppercase text-red-400/40 hover:text-red-500 transition-colors">Törlés</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
