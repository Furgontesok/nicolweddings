"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

type Proposal = {
  id: string;
  token: string;
  couple_name: string;
  wedding_date: string;
  guest_count: string;
  service: string;
  price_teljes: string;
  price_30nap: string;
  price_tanacsadas: string;
  price_egyeb: string;
  custom_note: string;
  created_at: string;
};

type Acceptance = {
  id: string;
  token: string;
  selected_package: string;
  nev: string;
  szuletesi_hely: string;
  szuletesi_ido: string;
  lakcim: string;
  telefon: string;
  email: string;
  megjegyzes: string;
  created_at: string;
  couple_name?: string;
};

const packageLabels: Record<string, string> = {
  teljes: "Teljes körű esküvőszervezés",
  "30nap": "30 nap a nagy napig",
  tanacsadas: "Esküvői tanácsadás",
  egyeb: "Egyéb rendezvény",
};

const inputCls = "w-full bg-[#F5F3ED] border border-[#363025]/10 px-4 py-3 font-[family-name:var(--font-nunito)] text-[12px] text-[#363025] focus:outline-none focus:border-[#363025]/30 transition-colors";
const labelCls = "font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.25em] uppercase text-[#363025]/40 mb-1.5 block";

const emptyForm = {
  couple_name: "",
  wedding_date: "",
  guest_count: "",
  service: "standard",
  price_teljes: "",
  price_30nap: "",
  price_tanacsadas: "",
  price_egyeb: "",
  custom_note: "",
};

export default function AdminAjanlatok() {
  const [tab, setTab] = useState<"ajanlatok" | "elfogadasok">("ajanlatok");
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [acceptances, setAcceptances] = useState<Acceptance[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);
  const [newToken, setNewToken] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => { load(); }, []);

  async function load() {
    if (!supabase) return;
    const [{ data: props }, { data: accs }] = await Promise.all([
      supabase.from("proposals").select("*").order("created_at", { ascending: false }),
      supabase.from("proposal_acceptances").select("*").order("created_at", { ascending: false }),
    ]);
    const proposalMap: Record<string, string> = {};
    (props ?? []).forEach((p: Proposal) => { proposalMap[p.token] = p.couple_name; });
    const enriched = (accs ?? []).map((a: Acceptance) => ({ ...a, couple_name: proposalMap[a.token] ?? a.token }));
    setProposals(props ?? []);
    setAcceptances(enriched);
    setLoading(false);
  }

  function toSlug(name: string) {
    return name.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/&/g, "es").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function openNew() { setEditingId(null); setForm(emptyForm); setShowForm(true); setNewToken(null); }
  function openEdit(p: Proposal) {
    setEditingId(p.id);
    setForm({ couple_name: p.couple_name ?? "", wedding_date: p.wedding_date ?? "", guest_count: p.guest_count ?? "",
      service: p.service ?? "standard", price_teljes: p.price_teljes ?? "", price_30nap: p.price_30nap ?? "",
      price_tanacsadas: p.price_tanacsadas ?? "", price_egyeb: p.price_egyeb ?? "", custom_note: p.custom_note ?? "" });
    setShowForm(true); setNewToken(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function create(e: React.FormEvent) {
    e.preventDefault(); if (!supabase) return; setSaving(true);
    const baseSlug = toSlug(form.couple_name);
    const { data: existing } = await supabase.from("proposals").select("token").like("token", `${baseSlug}%`);
    const token = existing && existing.length > 0 ? `${baseSlug}-${existing.length + 1}` : baseSlug;
    const { data } = await supabase.from("proposals").insert({ ...form, token }).select().single();
    if (data) { setNewToken(data.token); setForm(emptyForm); setShowForm(false); load(); }
    setSaving(false);
  }

  async function update(e: React.FormEvent) {
    e.preventDefault(); if (!supabase || !editingId) return; setSaving(true);
    await supabase.from("proposals").update({ couple_name: form.couple_name, wedding_date: form.wedding_date,
      guest_count: form.guest_count, service: form.service, price_teljes: form.price_teljes,
      price_30nap: form.price_30nap, price_tanacsadas: form.price_tanacsadas,
      price_egyeb: form.price_egyeb, custom_note: form.custom_note }).eq("id", editingId);
    setShowForm(false); setEditingId(null); setForm(emptyForm); load(); setSaving(false);
  }

  async function deleteProposal(id: string) {
    if (!supabase || !confirm("Biztosan törlöd?")) return;
    await supabase.from("proposals").delete().eq("id", id);
    setProposals(prev => prev.filter(p => p.id !== id));
  }

  async function deleteAcceptance(id: string) {
    if (!supabase || !confirm("Biztosan törlöd ezt az elfogadást?")) return;
    await supabase.from("proposal_acceptances").delete().eq("id", id);
    setAcceptances(prev => prev.filter(a => a.id !== id));
  }

  function copyLink(token: string) {
    navigator.clipboard.writeText(`${window.location.origin}/ajanlat/${token}`);
    setCopied(true); setTimeout(() => setCopied(false), 2000);
  }

  const isEgyeb = form.service === "egyeb";

  return (
    <div className="p-10">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className={labelCls}>Admin</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#363025]">Ajánlatok</h1>
        </div>
        {tab === "ajanlatok" && (
          <button onClick={openNew}
            className="font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.2em] uppercase px-8 py-3 border border-[#363025]/50 text-[#363025] hover:bg-[#363025] hover:text-white transition-all duration-300">
            + Új ajánlat
          </button>
        )}
      </div>

      {/* Tabok */}
      <div className="flex gap-1 mb-8 border-b border-[#363025]/10">
        {[
          { key: "ajanlatok", label: "Ajánlatok" },
          { key: "elfogadasok", label: `Elfogadások${acceptances.length > 0 ? ` (${acceptances.length})` : ""}` },
        ].map(t => (
          <button key={t.key} onClick={() => setTab(t.key as typeof tab)}
            className={`font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.2em] uppercase px-6 py-3 border-b-2 -mb-px transition-colors duration-200 ${
              tab === t.key ? "border-[#363025] text-[#363025]" : "border-transparent text-[#363025]/35 hover:text-[#363025]/60"
            }`}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Elkészült link */}
      {newToken && (
        <div className="bg-[#363025] text-white px-8 py-6 mb-8 flex items-center justify-between">
          <div>
            <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.25em] uppercase text-white/50 mb-1">Ajánlat elkészült — küldd el a párnak</p>
            <p className="font-[family-name:var(--font-nunito)] text-[12px] text-white/80">{window.location.origin}/ajanlat/{newToken}</p>
          </div>
          <button onClick={() => copyLink(newToken)}
            className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.2em] uppercase px-6 py-2.5 border border-white/30 text-white hover:bg-white/10 transition-colors whitespace-nowrap">
            {copied ? "Másolva ✓" : "Link másolása"}
          </button>
        </div>
      )}

      {/* ── AJÁNLATOK TAB ── */}
      {tab === "ajanlatok" && (
        <>
          {showForm && (
            <div className="bg-white border border-[#363025]/10 p-8 mb-10">
              <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#363025] mb-8">
                {editingId ? "Ajánlat szerkesztése" : "Új ajánlat készítése"}
              </h2>
              <div className="flex gap-3 mb-8">
                {[{ val: "standard", label: "3 fő esküvős szolgáltatás" }, { val: "egyeb", label: "Egyéb rendezvény" }].map(opt => (
                  <button key={opt.val} type="button" onClick={() => setForm(f => ({ ...f, service: opt.val }))}
                    className={`font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.2em] uppercase px-6 py-2.5 border transition-all duration-200 ${
                      form.service === opt.val ? "bg-[#363025] text-white border-[#363025]" : "border-[#363025]/25 text-[#363025]/50 hover:border-[#363025]/50"
                    }`}>{opt.label}</button>
                ))}
              </div>
              <form onSubmit={editingId ? update : create} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div><label className={labelCls}>Pár neve *</label>
                  <input required className={inputCls} value={form.couple_name} onChange={e => setForm(f => ({ ...f, couple_name: e.target.value }))} placeholder="Gréti & Domán" /></div>
                <div><label className={labelCls}>Esküvő tervezett dátuma</label>
                  <input className={inputCls} value={form.wedding_date} onChange={e => setForm(f => ({ ...f, wedding_date: e.target.value }))} placeholder="2026. szeptember" /></div>
                <div><label className={labelCls}>Vendégek létszáma</label>
                  <input className={inputCls} value={form.guest_count} onChange={e => setForm(f => ({ ...f, guest_count: e.target.value }))} placeholder="80–100 fő" /></div>
                {!isEgyeb && (
                  <>
                    <div className="md:col-span-2"><div className="w-full h-px bg-[#363025]/8 mb-5" /><p className={`${labelCls} mb-4`}>Szolgáltatások árai</p></div>
                    <div><label className={labelCls}>Teljes körű esküvőszervezés — ár</label>
                      <input className={inputCls} value={form.price_teljes} onChange={e => setForm(f => ({ ...f, price_teljes: e.target.value }))} placeholder="pl. 450.000 Ft" /></div>
                    <div><label className={labelCls}>30 nap a nagy napig — ár</label>
                      <input className={inputCls} value={form.price_30nap} onChange={e => setForm(f => ({ ...f, price_30nap: e.target.value }))} placeholder="pl. 240.000 Ft" /></div>
                    <div><label className={labelCls}>Esküvőszervezési tanácsadás — ár</label>
                      <input className={inputCls} value={form.price_tanacsadas} onChange={e => setForm(f => ({ ...f, price_tanacsadas: e.target.value }))} placeholder="pl. 20.000 Ft/óra" /></div>
                  </>
                )}
                {isEgyeb && (
                  <div><label className={labelCls}>Egyéb rendezvény díja</label>
                    <input className={inputCls} value={form.price_egyeb} onChange={e => setForm(f => ({ ...f, price_egyeb: e.target.value }))} placeholder="pl. egyedi árazás alapján" /></div>
                )}
                <div className="md:col-span-2"><label className={labelCls}>Személyes megjegyzés (opcionális)</label>
                  <textarea className={`${inputCls} resize-none`} rows={3} value={form.custom_note} onChange={e => setForm(f => ({ ...f, custom_note: e.target.value }))} placeholder="Különleges megjegyzés, egyedi feltételek..." /></div>
                <div className="md:col-span-2 flex gap-4 items-center">
                  <button type="submit" disabled={saving}
                    className="font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.2em] uppercase px-10 py-3 bg-[#363025] text-white hover:bg-[#363025]/80 transition-colors disabled:opacity-50">
                    {saving ? "Mentés..." : editingId ? "Mentés" : "Ajánlat generálása"}
                  </button>
                  <button type="button" onClick={() => { setShowForm(false); setEditingId(null); setForm(emptyForm); }}
                    className="font-[family-name:var(--font-nunito)] text-[11px] tracking-wide text-[#363025]/40 hover:text-[#363025] transition-colors">
                    Mégsem
                  </button>
                </div>
              </form>
            </div>
          )}

          {loading ? (
            <p className="font-[family-name:var(--font-nunito)] text-[11px] tracking-widest uppercase text-[#363025]/30 text-center py-12">Betöltés...</p>
          ) : proposals.length === 0 ? (
            <div className="bg-white border border-[#363025]/10 p-10 text-center">
              <p className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#363025]/40 italic">Még nincs ajánlat</p>
              <p className="font-[family-name:var(--font-nunito)] text-[11px] tracking-wide text-[#363025]/30 mt-2">Kattints az „+ Új ajánlat" gombra.</p>
            </div>
          ) : (
            <div className="bg-white border border-[#363025]/8">
              <div className="grid grid-cols-4 px-6 py-3 border-b border-[#363025]/8">
                {["Pár neve", "Típus", "Létrehozva", "Műveletek"].map(h => (
                  <span key={h} className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.25em] uppercase text-[#363025]/35">{h}</span>
                ))}
              </div>
              {proposals.map(p => (
                <div key={p.id} className="grid grid-cols-4 px-6 py-4 border-b border-[#363025]/5 hover:bg-[#F5F3ED]/40 transition-colors items-center">
                  <span className="font-[family-name:var(--font-nunito)] text-[12px] text-[#363025]">{p.couple_name}</span>
                  <span className="font-[family-name:var(--font-nunito)] text-[11px] text-[#363025]/50">{p.service === "egyeb" ? "Egyéb rendezvény" : "3 fő szolgáltatás"}</span>
                  <span className="font-[family-name:var(--font-nunito)] text-[11px] text-[#363025]/40">{new Date(p.created_at).toLocaleDateString("hu-HU")}</span>
                  <div className="flex items-center gap-4">
                    <button onClick={() => copyLink(p.token)} className="font-[family-name:var(--font-nunito)] text-[10px] tracking-widest uppercase text-[#363025]/50 hover:text-[#363025] transition-colors">Link</button>
                    <a href={`/ajanlat/${p.token}`} target="_blank" className="font-[family-name:var(--font-nunito)] text-[10px] tracking-widest uppercase text-[#363025]/50 hover:text-[#363025] transition-colors">Megtekint</a>
                    <button onClick={() => openEdit(p)} className="font-[family-name:var(--font-nunito)] text-[10px] tracking-widest uppercase text-[#363025]/50 hover:text-[#363025] transition-colors">Szerkeszt</button>
                    <button onClick={() => deleteProposal(p.id)} className="font-[family-name:var(--font-nunito)] text-[10px] tracking-widest uppercase text-red-400/40 hover:text-red-500 transition-colors">Törlés</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* ── ELFOGADÁSOK TAB ── */}
      {tab === "elfogadasok" && (
        <>
          {loading ? (
            <p className="font-[family-name:var(--font-nunito)] text-[11px] tracking-widest uppercase text-[#363025]/30 text-center py-12">Betöltés...</p>
          ) : acceptances.length === 0 ? (
            <div className="bg-white border border-[#363025]/10 p-10 text-center">
              <p className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#363025]/40 italic">Még nincs elfogadott ajánlat</p>
            </div>
          ) : (
            <div className="space-y-3">
              {acceptances.map(a => (
                <div key={a.id} className="bg-white border border-[#363025]/8">
                  {/* Fejléc sor */}
                  <button
                    onClick={() => setExpandedId(expandedId === a.id ? null : a.id)}
                    className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#F5F3ED]/40 transition-colors text-left"
                  >
                    <div className="flex items-center gap-8">
                      <div>
                        <p className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.2em] uppercase text-[#363025]/35 mb-0.5">Pár</p>
                        <p className="font-[family-name:var(--font-nunito)] text-[13px] text-[#363025]">{a.couple_name}</p>
                      </div>
                      <div>
                        <p className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.2em] uppercase text-[#363025]/35 mb-0.5">Név</p>
                        <p className="font-[family-name:var(--font-nunito)] text-[13px] text-[#363025]">{a.nev}</p>
                      </div>
                      <div>
                        <p className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.2em] uppercase text-[#363025]/35 mb-0.5">Csomag</p>
                        <p className="font-[family-name:var(--font-nunito)] text-[12px] text-[#363025]/70">{packageLabels[a.selected_package] ?? a.selected_package}</p>
                      </div>
                      <div>
                        <p className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.2em] uppercase text-[#363025]/35 mb-0.5">Elfogadva</p>
                        <p className="font-[family-name:var(--font-nunito)] text-[12px] text-[#363025]/50">{new Date(a.created_at).toLocaleDateString("hu-HU")}</p>
                      </div>
                    </div>
                    <span className="text-[#363025]/30 text-sm">{expandedId === a.id ? "▲" : "▼"}</span>
                  </button>

                  {/* Részletek */}
                  {expandedId === a.id && (
                    <div className="border-t border-[#363025]/8 px-6 py-6">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {[
                          ["Teljes név", a.nev],
                          ["Születési hely", a.szuletesi_hely],
                          ["Születési idő", a.szuletesi_ido],
                          ["Lakcím", a.lakcim],
                          ["Telefonszám", a.telefon],
                          ["E-mail", a.email],
                        ].map(([label, value]) => (
                          <div key={label}>
                            <p className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.25em] uppercase text-[#363025]/35 mb-1">{label}</p>
                            <p className="font-[family-name:var(--font-nunito)] text-[13px] text-[#363025]">{value || "—"}</p>
                          </div>
                        ))}
                        <div>
                          <p className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.25em] uppercase text-[#363025]/35 mb-1">Választott csomag</p>
                          <p className="font-[family-name:var(--font-nunito)] text-[13px] text-[#363025]">{packageLabels[a.selected_package] ?? a.selected_package}</p>
                        </div>
                        {a.megjegyzes && (
                          <div className="md:col-span-3">
                            <p className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.25em] uppercase text-[#363025]/35 mb-1">Megjegyzés</p>
                            <p className="font-[family-name:var(--font-quicksand)] text-[14px] text-[#363025]/70 leading-relaxed italic">{a.megjegyzes}</p>
                          </div>
                        )}
                        <div className="md:col-span-3 pt-2 border-t border-[#363025]/8 flex justify-end">
                          <button
                            onClick={() => deleteAcceptance(a.id)}
                            className="font-[family-name:var(--font-nunito)] text-[10px] tracking-widest uppercase text-red-400/40 hover:text-red-500 transition-colors"
                          >
                            Törlés
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
