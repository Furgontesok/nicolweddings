"use client";

import { useEffect, useState } from "react";

type StatRow = { page: string; count: number; referrer: string; created_at: string };

const mockStats = [
  { page: "/", count: 124, referrer: "direct", created_at: "2025-06-28" },
  { page: "/rolam", count: 67, referrer: "instagram.com", created_at: "2025-06-28" },
  { page: "/szolgaltatasok", count: 54, referrer: "direct", created_at: "2025-06-28" },
  { page: "/referenciak", count: 48, referrer: "facebook.com", created_at: "2025-06-28" },
  { page: "/kapcsolat", count: 32, referrer: "google.com", created_at: "2025-06-28" },
  { page: "/blog", count: 28, referrer: "direct", created_at: "2025-06-28" },
];

const topReferrers = [
  { source: "Közvetlen (direct)", visits: 186, pct: 52 },
  { source: "Instagram", visits: 74, pct: 21 },
  { source: "Facebook", visits: 58, pct: 16 },
  { source: "Google", visits: 35, pct: 10 },
];

export default function AdminStatisztika() {
  const [stats] = useState<StatRow[]>(mockStats);

  const total = stats.reduce((s, r) => s + r.count, 0);

  return (
    <div className="p-10">
      <div className="mb-10">
        <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.3em] uppercase text-[#363025]/40 mb-2">Admin</p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#363025]">Statisztika</h1>
      </div>

      <div className="bg-amber-50/60 border border-amber-200/60 px-6 py-4 mb-8 flex items-start gap-3">
        <span className="text-amber-500 text-lg mt-0.5">⚠</span>
        <p className="font-[family-name:var(--font-nunito)] text-[11px] text-amber-700/80 leading-relaxed">
          Ezek demo adatok. Valós méréshez add hozzá a tracking kódot az oldalakhoz, és konfiguráld a Supabase kapcsolatot.
        </p>
      </div>

      {/* Összesítő kártyák */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: "Összes látogatás", value: total },
          { label: "Oldalak száma", value: stats.length },
          { label: "Legtöbb látogató", value: stats[0]?.count ?? 0 },
          { label: "Forrás típusok", value: topReferrers.length },
        ].map((card, i) => (
          <div key={i} className="bg-white border border-[#363025]/8 p-6">
            <p className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.25em] uppercase text-[#363025]/35 mb-3">{card.label}</p>
            <p className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#363025]">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Oldalak */}
        <div className="bg-white border border-[#363025]/8 p-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-xl font-light text-[#363025] mb-6">Oldalak látogatottsága</h2>
          <div className="space-y-3">
            {stats.map((row, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-[family-name:var(--font-nunito)] text-[11px] text-[#363025]/70">{row.page}</span>
                    <span className="font-[family-name:var(--font-nunito)] text-[11px] text-[#363025] font-medium">{row.count}</span>
                  </div>
                  <div className="h-1 bg-[#363025]/8 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#363025]/30 rounded-full"
                      style={{ width: `${(row.count / total) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Forgalmi források */}
        <div className="bg-white border border-[#363025]/8 p-6">
          <h2 className="font-[family-name:var(--font-cormorant)] text-xl font-light text-[#363025] mb-6">Forgalmi források</h2>
          <div className="space-y-4">
            {topReferrers.map((r, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1">
                  <span className="font-[family-name:var(--font-nunito)] text-[11px] text-[#363025]/70">{r.source}</span>
                  <span className="font-[family-name:var(--font-nunito)] text-[11px] text-[#363025]">{r.visits} · {r.pct}%</span>
                </div>
                <div className="h-1 bg-[#363025]/8 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#363025]/30 rounded-full"
                    style={{ width: `${r.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
