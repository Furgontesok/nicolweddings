"use client";

import { useEffect, useState } from "react";

type PageStat = { page: string; count: number };
type ReferrerStat = { source: string; visits: number; pct: number };

function parseReferrer(raw: string | null): string {
  if (!raw) return "Közvetlen (direct)";
  try {
    const host = new URL(raw).hostname.replace("www.", "");
    if (host.includes("instagram")) return "Instagram";
    if (host.includes("facebook")) return "Facebook";
    if (host.includes("google")) return "Google";
    if (host.includes("tiktok")) return "TikTok";
    return host;
  } catch {
    return "Közvetlen (direct)";
  }
}

export default function AdminStatisztika() {
  const [pageStats, setPageStats] = useState<PageStat[]>([]);
  const [referrerStats, setReferrerStats] = useState<ReferrerStat[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState<7 | 30 | 90>(30);

  useEffect(() => { load(); }, [range]);

  async function load() {
    setLoading(true);
    const since = new Date(Date.now() - range * 24 * 60 * 60 * 1000).toISOString();
    const res = await fetch(`/api/admin/stats?since=${since}`);
    if (!res.ok) { setLoading(false); return; }
    const data: { page: string; referrer: string | null }[] = await res.json();

    setTotal(data.length);

    // Oldalak
    const pageMap: Record<string, number> = {};
    data.forEach(r => { pageMap[r.page] = (pageMap[r.page] ?? 0) + 1; });
    setPageStats(Object.entries(pageMap).sort((a, b) => b[1] - a[1]).map(([page, count]) => ({ page, count })));

    // Referrerek
    const refMap: Record<string, number> = {};
    data.forEach(r => {
      const src = parseReferrer(r.referrer);
      refMap[src] = (refMap[src] ?? 0) + 1;
    });
    const refTotal = data.length || 1;
    setReferrerStats(
      Object.entries(refMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map(([source, visits]) => ({ source, visits, pct: Math.round((visits / refTotal) * 100) }))
    );

    setLoading(false);
  }

  return (
    <div className="p-10">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.3em] uppercase text-[#363025]/40 mb-2">Admin</p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#363025]">Statisztika</h1>
        </div>
        <div className="flex gap-2">
          {([7, 30, 90] as const).map(d => (
            <button
              key={d}
              onClick={() => setRange(d)}
              className={`font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-200 ${
                range === d
                  ? "bg-[#363025] text-white border-[#363025]"
                  : "border-[#363025]/20 text-[#363025]/50 hover:border-[#363025]/50 hover:text-[#363025]"
              }`}
            >
              {d} nap
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <p className="font-[family-name:var(--font-nunito)] text-[11px] tracking-widest uppercase text-[#363025]/30">Betöltés...</p>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Összes látogatás", value: total },
              { label: "Oldalak száma", value: pageStats.length },
              { label: "Legtöbb látogató", value: pageStats[0]?.count ?? 0 },
              { label: "Forrás típusok", value: referrerStats.length },
            ].map((card, i) => (
              <div key={i} className="bg-white border border-[#363025]/8 p-6">
                <p className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.25em] uppercase text-[#363025]/35 mb-3">{card.label}</p>
                <p className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#363025]">{card.value}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#363025]/8 p-6">
              <h2 className="font-[family-name:var(--font-cormorant)] text-xl font-light text-[#363025] mb-6">Oldalak látogatottsága</h2>
              {pageStats.length === 0 ? (
                <p className="font-[family-name:var(--font-nunito)] text-[11px] text-[#363025]/30">Még nincs adat ebben az időszakban.</p>
              ) : (
                <div className="space-y-3">
                  {pageStats.map((row, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="font-[family-name:var(--font-nunito)] text-[11px] text-[#363025]/70">{row.page}</span>
                        <span className="font-[family-name:var(--font-nunito)] text-[11px] text-[#363025] font-medium">{row.count}</span>
                      </div>
                      <div className="h-1 bg-[#363025]/8 rounded-full overflow-hidden">
                        <div className="h-full bg-[#363025]/30 rounded-full" style={{ width: `${(row.count / (pageStats[0]?.count || 1)) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-white border border-[#363025]/8 p-6">
              <h2 className="font-[family-name:var(--font-cormorant)] text-xl font-light text-[#363025] mb-6">Forgalmi források</h2>
              {referrerStats.length === 0 ? (
                <p className="font-[family-name:var(--font-nunito)] text-[11px] text-[#363025]/30">Még nincs adat ebben az időszakban.</p>
              ) : (
                <div className="space-y-4">
                  {referrerStats.map((r, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="font-[family-name:var(--font-nunito)] text-[11px] text-[#363025]/70">{r.source}</span>
                        <span className="font-[family-name:var(--font-nunito)] text-[11px] text-[#363025]">{r.visits} · {r.pct}%</span>
                      </div>
                      <div className="h-1 bg-[#363025]/8 rounded-full overflow-hidden">
                        <div className="h-full bg-[#363025]/30 rounded-full" style={{ width: `${r.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
