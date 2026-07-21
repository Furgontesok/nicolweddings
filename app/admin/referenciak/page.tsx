"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

type Couple = {
  id: string;
  slug: string;
  name: string;
  display_order: number;
  header_image_url?: string;
  header_position?: string;
  testimonial_quote?: string;
  testimonial_text?: string;
};

type CoupleImage = {
  id: string;
  couple_id: string;
  url: string;
  display_order: number;
  is_cover: boolean;
  is_header: boolean;
};

type Vendor = {
  id: string;
  couple_id: string;
  label: string;
  handle?: string;
  plain?: string;
  display_order: number;
};

const inputCls = "w-full bg-[#F5F3ED] border border-[#363025]/10 px-4 py-2.5 font-[family-name:var(--font-nunito)] text-[12px] text-[#363025] focus:outline-none focus:border-[#363025]/30 transition-colors";
const labelCls = "font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.25em] uppercase text-[#363025]/40 mb-1 block";

export default function AdminReferenciak() {
  const [couples, setCouples] = useState<Couple[]>([]);
  const [selected, setSelected] = useState<Couple | null>(null);
  const [images, setImages] = useState<CoupleImage[]>([]);
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [tab, setTab] = useState<"images" | "info" | "vendors">("images");
  const [dragOver, setDragOver] = useState(false);
  const [form, setForm] = useState({
    name: "",
    slug: "",
    header_position: "center",
    testimonial_quote: "",
    testimonial_text: "",
  });
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => { loadCouples(); }, []);

  async function loadCouples() {
    if (!supabase) return;
    const { data } = await supabase.from("couples").select("*").order("display_order");
    setCouples(data ?? []);
    setLoading(false);
  }

  async function selectCouple(c: Couple) {
    setSelected(c);
    setForm({
      name: c.name,
      slug: c.slug,
      header_position: c.header_position ?? "center",
      testimonial_quote: c.testimonial_quote ?? "",
      testimonial_text: c.testimonial_text ?? "",
    });
    setTab("images");
    if (!supabase) return;
    const [imgRes, vendRes] = await Promise.all([
      supabase.from("couple_images").select("*").eq("couple_id", c.id).order("display_order"),
      supabase.from("couple_vendors").select("*").eq("couple_id", c.id).order("display_order"),
    ]);
    setImages(imgRes.data ?? []);
    setVendors(vendRes.data ?? []);
  }

  async function createCouple() {
    if (!supabase) return;
    const slug = `uj-par-${Date.now()}`;
    const maxOrder = couples.length > 0 ? Math.max(...couples.map(c => c.display_order)) + 1 : 0;
    const { data } = await supabase.from("couples").insert({
      name: "Új pár",
      slug,
      display_order: maxOrder,
    }).select().single();
    if (data) {
      await loadCouples();
      selectCouple(data);
      setTab("info");
    }
  }

  async function saveInfo() {
    if (!supabase || !selected) return;
    setSaving(true);
    await supabase.from("couples").update(form).eq("id", selected.id);
    setSaving(false);
    await loadCouples();
  }

  async function deleteCouple() {
    if (!supabase || !selected) return;
    if (!confirm(`Törlöd: ${selected.name}? A Supabase-ben tárolt képek is törlődnek.`)) return;
    await supabase.from("couple_images").delete().eq("couple_id", selected.id);
    await supabase.from("couple_vendors").delete().eq("couple_id", selected.id);
    await supabase.from("couples").delete().eq("id", selected.id);
    setSelected(null);
    setImages([]);
    setVendors([]);
    loadCouples();
  }

  async function moveCouple(c: Couple, dir: -1 | 1) {
    if (!supabase) return;
    const idx = couples.findIndex(x => x.id === c.id);
    const swapIdx = idx + dir;
    if (swapIdx < 0 || swapIdx >= couples.length) return;
    const swap = couples[swapIdx];
    await Promise.all([
      supabase.from("couples").update({ display_order: swap.display_order }).eq("id", c.id),
      supabase.from("couples").update({ display_order: c.display_order }).eq("id", swap.id),
    ]);
    loadCouples();
  }

  async function uploadFiles(files: FileList) {
    if (!supabase || !selected || !files.length) return;
    setUploading(true);
    setUploadError(null);
    const maxOrder = images.length > 0 ? Math.max(...images.map(i => i.display_order)) + 1 : 0;
    const sorted = Array.from(files).sort((a, b) =>
      a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" })
    );
    for (let i = 0; i < sorted.length; i++) {
      const file = sorted[i];
      const ext = file.name.split(".").pop() ?? "jpg";
      const path = `${selected.slug}/${Date.now()}-${i}.${ext}`;
      const { error } = await supabase.storage.from("referenciak").upload(path, file);
      if (error) {
        setUploadError(`Feltöltési hiba: ${error.message}`);
        setUploading(false);
        return;
      }
      const { data: { publicUrl } } = supabase.storage.from("referenciak").getPublicUrl(path);
      const isFirst = images.length === 0 && i === 0;
      await supabase.from("couple_images").insert({
        couple_id: selected.id,
        url: publicUrl,
        display_order: maxOrder + i,
        is_cover: isFirst,
        is_header: isFirst,
      });
    }
    const { data } = await supabase.from("couple_images").select("*").eq("couple_id", selected.id).order("display_order");
    setImages(data ?? []);
    setUploading(false);
  }

  async function moveImage(img: CoupleImage, dir: -1 | 1) {
    if (!supabase) return;
    const sorted = [...images].sort((a, b) => a.display_order - b.display_order);
    const idx = sorted.findIndex(i => i.id === img.id);
    const swapIdx = idx + dir;
    if (swapIdx < 0 || swapIdx >= sorted.length) return;
    const swap = sorted[swapIdx];
    const newImages = sorted.map(i => {
      if (i.id === img.id) return { ...i, display_order: swap.display_order };
      if (i.id === swap.id) return { ...i, display_order: img.display_order };
      return i;
    });
    setImages(newImages.sort((a, b) => a.display_order - b.display_order));
    await Promise.all([
      supabase.from("couple_images").update({ display_order: swap.display_order }).eq("id", img.id),
      supabase.from("couple_images").update({ display_order: img.display_order }).eq("id", swap.id),
    ]);
  }

  async function setCover(img: CoupleImage) {
    if (!supabase || !selected) return;
    await supabase.from("couple_images").update({ is_cover: false }).eq("couple_id", selected.id);
    await supabase.from("couple_images").update({ is_cover: true }).eq("id", img.id);
    setImages(images.map(i => ({ ...i, is_cover: i.id === img.id })));
  }

  async function setHeader(img: CoupleImage) {
    if (!supabase || !selected) return;
    await supabase.from("couple_images").update({ is_header: false }).eq("couple_id", selected.id);
    await supabase.from("couple_images").update({ is_header: true }).eq("id", img.id);
    await supabase.from("couples").update({ header_image_url: img.url }).eq("id", selected.id);
    setImages(images.map(i => ({ ...i, is_header: i.id === img.id })));
  }

  async function deleteImage(img: CoupleImage) {
    if (!supabase) return;
    const urlPath = img.url.split("/referenciak/")[1];
    if (urlPath && !img.url.startsWith("/")) {
      await supabase.storage.from("referenciak").remove([urlPath]);
    }
    await supabase.from("couple_images").delete().eq("id", img.id);
    setImages(images.filter(i => i.id !== img.id));
  }

  async function addLocalImage(url: string) {
    if (!supabase || !selected || !url) return;
    const maxOrder = images.length > 0 ? Math.max(...images.map(i => i.display_order)) + 1 : 0;
    const isFirst = images.length === 0;
    const { data } = await supabase.from("couple_images").insert({
      couple_id: selected.id,
      url,
      display_order: maxOrder,
      is_cover: isFirst,
      is_header: isFirst,
    }).select().single();
    if (data) setImages(prev => [...prev, data]);
  }

  async function addVendor() {
    if (!supabase || !selected) return;
    const maxOrder = vendors.length > 0 ? Math.max(...vendors.map(v => v.display_order)) + 1 : 0;
    const { data } = await supabase.from("couple_vendors").insert({
      couple_id: selected.id,
      label: "Szolgáltató neve",
      handle: "",
      display_order: maxOrder,
    }).select().single();
    if (data) setVendors(prev => [...prev, data]);
  }

  async function updateVendor(id: string, fields: Partial<Vendor>) {
    setVendors(prev => prev.map(v => v.id === id ? { ...v, ...fields } : v));
  }

  async function saveVendor(v: Vendor) {
    if (!supabase) return;
    await supabase.from("couple_vendors").update({ label: v.label, handle: v.handle, plain: v.plain }).eq("id", v.id);
  }

  async function deleteVendor(id: string) {
    if (!supabase) return;
    await supabase.from("couple_vendors").delete().eq("id", id);
    setVendors(prev => prev.filter(v => v.id !== id));
  }

  async function moveVendor(v: Vendor, dir: -1 | 1) {
    if (!supabase) return;
    const sorted = [...vendors].sort((a, b) => a.display_order - b.display_order);
    const idx = sorted.findIndex(x => x.id === v.id);
    const swapIdx = idx + dir;
    if (swapIdx < 0 || swapIdx >= sorted.length) return;
    const swap = sorted[swapIdx];
    const newVendors = sorted.map(x => {
      if (x.id === v.id) return { ...x, display_order: swap.display_order };
      if (x.id === swap.id) return { ...x, display_order: v.display_order };
      return x;
    });
    setVendors(newVendors.sort((a, b) => a.display_order - b.display_order));
    await Promise.all([
      supabase.from("couple_vendors").update({ display_order: swap.display_order }).eq("id", v.id),
      supabase.from("couple_vendors").update({ display_order: v.display_order }).eq("id", swap.id),
    ]);
  }

  const sortedImages = [...images].sort((a, b) => a.display_order - b.display_order);
  const sortedVendors = [...vendors].sort((a, b) => a.display_order - b.display_order);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Bal panel */}
      <div className="w-72 shrink-0 bg-white border-r border-[#363025]/8 flex flex-col">
        <div className="px-6 pt-8 pb-4 border-b border-[#363025]/8">
          <p className={labelCls}>Admin</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#363025]">Referenciák</h1>
        </div>

        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-widest uppercase text-[#363025]/30 text-center py-8">Betöltés...</p>
          ) : couples.length === 0 ? (
            <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-wide text-[#363025]/30 text-center py-8 px-4">
              Még nincsenek párok. Hozz létre egyet, vagy futtasd a seed SQL-t.
            </p>
          ) : (
            <ul>
              {couples.map((c, idx) => (
                <li key={c.id}
                  className={`flex items-center gap-2 px-4 py-3 border-b border-[#363025]/5 cursor-pointer transition-colors ${selected?.id === c.id ? "bg-[#363025]/5" : "hover:bg-[#F5F3ED]/60"}`}
                  onClick={() => selectCouple(c)}
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-[family-name:var(--font-nunito)] text-[11px] text-[#363025] truncate">{c.name}</p>
                    <p className="font-[family-name:var(--font-nunito)] text-[9px] text-[#363025]/30 tracking-wide truncate">{c.slug}</p>
                  </div>
                  <div className="flex flex-col gap-0.5 shrink-0">
                    <button onClick={e => { e.stopPropagation(); moveCouple(c, -1); }} disabled={idx === 0}
                      className="text-[#363025]/25 hover:text-[#363025]/60 disabled:opacity-20 text-[10px] leading-none px-1">▲</button>
                    <button onClick={e => { e.stopPropagation(); moveCouple(c, 1); }} disabled={idx === couples.length - 1}
                      className="text-[#363025]/25 hover:text-[#363025]/60 disabled:opacity-20 text-[10px] leading-none px-1">▼</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="p-4 border-t border-[#363025]/8">
          <button onClick={createCouple}
            className="w-full font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.2em] uppercase py-3 border border-[#363025]/25 text-[#363025]/50 hover:border-[#363025]/50 hover:text-[#363025] transition-all duration-200">
            + Új pár
          </button>
        </div>
      </div>

      {/* Jobb panel */}
      {!selected ? (
        <div className="flex-1 flex items-center justify-center">
          <p className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#363025]/25 italic">Válassz ki egy párt a szerkesztéshez</p>
        </div>
      ) : (
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Fejléc + tabok */}
          <div className="px-8 pt-6 pb-0 border-b border-[#363025]/8 bg-white shrink-0">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className={labelCls}>Szerkesztés</p>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#363025]">{selected.name}</h2>
              </div>
              <button onClick={deleteCouple}
                className="font-[family-name:var(--font-nunito)] text-[10px] tracking-widest uppercase text-red-400/40 hover:text-red-500 transition-colors">
                Törlés
              </button>
            </div>
            <div className="flex gap-6">
              {(["images", "info", "vendors"] as const).map(t => (
                <button key={t} onClick={() => setTab(t)}
                  className={`font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.2em] uppercase pb-3 border-b-2 transition-colors ${tab === t ? "border-[#363025] text-[#363025]" : "border-transparent text-[#363025]/35 hover:text-[#363025]/60"}`}>
                  {t === "images" ? `Képek (${images.length})` : t === "info" ? "Adatok" : `Szolgáltatók (${vendors.length})`}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-8">

            {/* KÉPEK */}
            {tab === "images" && (
              <div>
                <div
                  className={`border-2 border-dashed transition-colors duration-200 mb-6 ${dragOver ? "border-[#363025]/50 bg-[#363025]/3" : "border-[#363025]/15"}`}
                  onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={e => { e.preventDefault(); setDragOver(false); if (e.dataTransfer.files) uploadFiles(e.dataTransfer.files); }}
                >
                  <div className="text-center py-8 px-6">
                    {uploadError && (
                      <p className="font-[family-name:var(--font-nunito)] text-[11px] text-red-500 mb-4 bg-red-50 border border-red-200 px-4 py-3">{uploadError}</p>
                    )}
                {uploading ? (
                      <p className="font-[family-name:var(--font-nunito)] text-[11px] tracking-widest uppercase text-[#363025]/40 animate-pulse">Feltöltés folyamatban...</p>
                    ) : (
                      <>
                        <p className="font-[family-name:var(--font-cormorant)] text-xl font-light text-[#363025]/40 mb-2">Húzd ide a képeket</p>
                        <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-wide text-[#363025]/25 mb-4">vagy</p>
                        <button onClick={() => fileRef.current?.click()}
                          className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.2em] uppercase px-6 py-2.5 border border-[#363025]/30 text-[#363025]/50 hover:border-[#363025] hover:text-[#363025] transition-all duration-200">
                          Fájl kiválasztása
                        </button>
                        <input ref={fileRef} type="file" accept="image/*" multiple className="hidden"
                          onChange={e => e.target.files && uploadFiles(e.target.files)} />
                        <p className="font-[family-name:var(--font-nunito)] text-[9px] text-[#363025]/25 mt-3">JPG, PNG — több fájl egyszerre is</p>
                      </>
                    )}
                  </div>
                </div>

                {sortedImages.length === 0 ? (
                  <p className="font-[family-name:var(--font-nunito)] text-[11px] tracking-wide text-[#363025]/30 text-center py-8">Még nincsenek képek</p>
                ) : (
                  <div className="grid grid-cols-3 xl:grid-cols-4 gap-3">
                    {sortedImages.map((img, idx) => (
                      <div key={img.id} className="group relative aspect-[3/4] bg-[#E8E5DC] overflow-hidden">
                        <Image src={img.url} alt="" fill
                          className="object-cover"
                          sizes="25vw"
                          unoptimized={img.url.startsWith("/")}
                        />
                        {/* Sorszám */}
                        <div className="absolute top-2 left-2 bg-black/60 text-white font-[family-name:var(--font-nunito)] text-[9px] px-1.5 py-0.5 leading-none">
                          #{idx + 1}
                        </div>
                        {/* Jelzők */}
                        <div className="absolute top-2 right-2 flex flex-col gap-1 items-end">
                          {img.is_cover && <span className="bg-[#363025] text-white font-[family-name:var(--font-nunito)] text-[8px] tracking-wide uppercase px-1.5 py-0.5">Borító</span>}
                          {img.is_header && <span className="bg-white/85 text-[#363025] font-[family-name:var(--font-nunito)] text-[8px] tracking-wide uppercase px-1.5 py-0.5">Header</span>}
                        </div>
                        {/* Hover akciók */}
                        <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 p-3">
                          <div className="flex gap-1.5 w-full">
                            <button onClick={() => moveImage(img, -1)} disabled={idx === 0}
                              className="flex-1 bg-white/20 hover:bg-white/40 text-white disabled:opacity-25 font-[family-name:var(--font-nunito)] text-[11px] py-1.5 transition-colors">
                              ←
                            </button>
                            <button onClick={() => moveImage(img, 1)} disabled={idx === sortedImages.length - 1}
                              className="flex-1 bg-white/20 hover:bg-white/40 text-white disabled:opacity-25 font-[family-name:var(--font-nunito)] text-[11px] py-1.5 transition-colors">
                              →
                            </button>
                          </div>
                          {!img.is_cover && (
                            <button onClick={() => setCover(img)}
                              className="w-full bg-[#363025]/90 hover:bg-[#363025] text-white font-[family-name:var(--font-nunito)] text-[9px] tracking-wide uppercase py-1.5 transition-colors">
                              Borítókép
                            </button>
                          )}
                          {!img.is_header && (
                            <button onClick={() => setHeader(img)}
                              className="w-full bg-white/20 hover:bg-white/40 text-white font-[family-name:var(--font-nunito)] text-[9px] tracking-wide uppercase py-1.5 transition-colors">
                              Header kép
                            </button>
                          )}
                          <button onClick={() => deleteImage(img)}
                            className="w-full bg-red-500/70 hover:bg-red-500 text-white font-[family-name:var(--font-nunito)] text-[9px] tracking-wide uppercase py-1.5 transition-colors">
                            Törlés
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Helyi kép URL hozzáadása (meglévő párokhoz) */}
                <details className="mt-8">
                  <summary className="font-[family-name:var(--font-nunito)] text-[10px] tracking-widest uppercase text-[#363025]/30 cursor-pointer hover:text-[#363025]/50 select-none">
                    Helyi kép hozzáadása URL alapján (meglévő párokhoz)
                  </summary>
                  <div className="mt-3 flex gap-2">
                    <input id="localurl" type="text" placeholder="/images/Bia & Bence/1.jpg" className={`${inputCls} flex-1`} />
                    <button
                      onClick={() => {
                        const el = document.getElementById("localurl") as HTMLInputElement;
                        if (el?.value) { addLocalImage(el.value); el.value = ""; }
                      }}
                      className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.15em] uppercase px-4 py-2 bg-[#363025] text-white hover:bg-[#363025]/80 transition-colors whitespace-nowrap">
                      Hozzáad
                    </button>
                  </div>
                </details>
              </div>
            )}

            {/* ADATOK */}
            {tab === "info" && (
              <div className="max-w-lg space-y-5">
                <div>
                  <label className={labelCls}>Pár neve</label>
                  <input className={inputCls} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Anna & Bence" />
                </div>
                <div>
                  <label className={labelCls}>Slug (URL)</label>
                  <input className={inputCls} value={form.slug} onChange={e => setForm(f => ({ ...f, slug: e.target.value.toLowerCase().replace(/\s+/g, "-") }))} placeholder="anna-bence" />
                  <p className="font-[family-name:var(--font-nunito)] text-[9px] text-[#363025]/30 mt-1">nicolweddings.hu/referenciak/{form.slug}</p>
                </div>
                <div>
                  <label className={labelCls}>Header kép pozíciója</label>
                  <input className={inputCls} value={form.header_position} onChange={e => setForm(f => ({ ...f, header_position: e.target.value }))} placeholder="center, center 30%, center 80%" />
                  <p className="font-[family-name:var(--font-nunito)] text-[9px] text-[#363025]/30 mt-1">CSS object-position érték</p>
                </div>
                <div className="pt-3 border-t border-[#363025]/8">
                  <label className={labelCls}>Visszajelzés — rövid idézet</label>
                  <textarea className={`${inputCls} resize-none`} rows={2} value={form.testimonial_quote} onChange={e => setForm(f => ({ ...f, testimonial_quote: e.target.value }))} placeholder="Rövid idézet a visszajelzésből..." />
                </div>
                <div>
                  <label className={labelCls}>Visszajelzés — teljes szöveg</label>
                  <textarea className={`${inputCls} resize-none`} rows={5} value={form.testimonial_text} onChange={e => setForm(f => ({ ...f, testimonial_text: e.target.value }))} placeholder="A teljes visszajelzés szövege..." />
                </div>
                <button onClick={saveInfo} disabled={saving}
                  className="font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.2em] uppercase px-10 py-3 bg-[#363025] text-white hover:bg-[#363025]/80 transition-colors disabled:opacity-50">
                  {saving ? "Mentés..." : "Mentés"}
                </button>
              </div>
            )}

            {/* SZOLGÁLTATÓK */}
            {tab === "vendors" && (
              <div>
                <div className="space-y-2 mb-6">
                  {sortedVendors.map((v, idx) => (
                    <div key={v.id} className="flex items-center gap-2 bg-white border border-[#363025]/8 px-3 py-2.5">
                      <div className="flex flex-col gap-0.5 shrink-0">
                        <button onClick={() => moveVendor(v, -1)} disabled={idx === 0} className="text-[#363025]/25 hover:text-[#363025]/60 disabled:opacity-20 text-[10px] leading-none px-1">▲</button>
                        <button onClick={() => moveVendor(v, 1)} disabled={idx === sortedVendors.length - 1} className="text-[#363025]/25 hover:text-[#363025]/60 disabled:opacity-20 text-[10px] leading-none px-1">▼</button>
                      </div>
                      <input
                        value={v.label}
                        onChange={e => updateVendor(v.id, { label: e.target.value })}
                        onBlur={() => saveVendor(v)}
                        className="bg-[#F5F3ED] border border-[#363025]/10 px-3 py-2 font-[family-name:var(--font-nunito)] text-[11px] text-[#363025] focus:outline-none w-32 shrink-0"
                        placeholder="Fotó"
                      />
                      <div className="flex-1 flex items-center gap-2 min-w-0">
                        {v.plain !== undefined ? (
                          <input
                            value={v.plain ?? ""}
                            onChange={e => updateVendor(v.id, { plain: e.target.value })}
                            onBlur={() => saveVendor(v)}
                            className="flex-1 bg-[#F5F3ED] border border-[#363025]/10 px-3 py-2 font-[family-name:var(--font-nunito)] text-[11px] text-[#363025] focus:outline-none"
                            placeholder="Szöveges érték"
                          />
                        ) : (
                          <div className="flex-1 flex items-center gap-1 min-w-0">
                            <span className="font-[family-name:var(--font-nunito)] text-[11px] text-[#363025]/30 shrink-0">@</span>
                            <input
                              value={v.handle ?? ""}
                              onChange={e => updateVendor(v.id, { handle: e.target.value })}
                              onBlur={() => saveVendor(v)}
                              className="flex-1 min-w-0 bg-[#F5F3ED] border border-[#363025]/10 px-3 py-2 font-[family-name:var(--font-nunito)] text-[11px] text-[#363025] focus:outline-none"
                              placeholder="instagram_handle"
                            />
                            {v.handle && (
                              <a
                                href={`https://www.instagram.com/${v.handle}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0 font-[family-name:var(--font-nunito)] text-[9px] text-[#363025]/40 hover:text-[#363025] underline transition-colors"
                              >
                                ↗
                              </a>
                            )}
                          </div>
                        )}
                        <button
                          onClick={() => {
                            const updated = v.plain !== undefined
                              ? { ...v, plain: undefined, handle: "" }
                              : { ...v, handle: undefined, plain: "" };
                            updateVendor(v.id, updated);
                            supabase?.from("couple_vendors").update({ plain: updated.plain ?? null, handle: updated.handle ?? null }).eq("id", v.id);
                          }}
                          className="font-[family-name:var(--font-nunito)] text-[8px] tracking-wide uppercase text-[#363025]/25 hover:text-[#363025] border border-[#363025]/10 px-2 py-1 transition-colors whitespace-nowrap shrink-0">
                          {v.plain !== undefined ? "@" : "abc"}
                        </button>
                      </div>
                      <button onClick={() => deleteVendor(v.id)} className="text-[#363025]/20 hover:text-red-400 transition-colors text-xl leading-none shrink-0 ml-1">×</button>
                    </div>
                  ))}
                </div>
                <button onClick={addVendor}
                  className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.2em] uppercase px-8 py-3 border border-[#363025]/25 text-[#363025]/50 hover:border-[#363025] hover:text-[#363025] transition-all duration-200">
                  + Szolgáltató hozzáadása
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
