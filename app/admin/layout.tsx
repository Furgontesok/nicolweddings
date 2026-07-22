"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const SEEN_KEY = "admin_last_seen";

type SeenMap = Record<string, string>; // href -> ISO timestamp

const nav = [
  { label: "Ajánlatok", href: "/admin/ajanlatok", icon: "◈", table: "proposal_acceptances", timeField: "created_at" },
  { label: "Megkeresések", href: "/admin/megkeresesek", icon: "◁", table: "contact_submissions", timeField: "created_at" },
  { label: "E-book e-mailek", href: "/admin/emailek", icon: "◻", table: "ebook_downloads", timeField: "downloaded_at" },
  { label: "Visszajelzések", href: "/admin/visszajelzesek", icon: "◻" },
  { label: "Referenciák", href: "/admin/referenciak", icon: "◇" },
  { label: "Statisztika", href: "/admin/statisztika", icon: "◻" },
  { label: "Save the Date", href: "/admin/save-the-date", icon: "◇" },
  { label: "Studio", href: "/admin/studio", icon: "◈" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [badges, setBadges] = useState<Record<string, number>>({});

  useEffect(() => {
    if (!supabase) return;

    const raw = localStorage.getItem(SEEN_KEY);
    const seen: SeenMap = raw ? JSON.parse(raw) : {};

    // Mark current page as seen now
    const current = nav.find(n => n.href === pathname);
    if (current?.table) {
      const updated = { ...seen, [current.href]: new Date().toISOString() };
      localStorage.setItem(SEEN_KEY, JSON.stringify(updated));
      seen[current.href] = updated[current.href];
    }

    // Fetch new counts for all tracked nav items
    const trackable = nav.filter(n => n.table);
    Promise.all(
      trackable.map(async (item) => {
        const lastSeen = seen[item.href];
        if (!lastSeen) {
          // Never visited — count all
          const { count } = await supabase!
            .from(item.table!)
            .select("*", { count: "exact", head: true });
          return { href: item.href, count: count ?? 0 };
        }
        const { count } = await supabase!
          .from(item.table!)
          .select("*", { count: "exact", head: true })
          .gt(item.timeField!, lastSeen);
        return { href: item.href, count: count ?? 0 };
      })
    ).then(results => {
      const map: Record<string, number> = {};
      results.forEach(r => { if (r.count > 0) map[r.href] = r.count; });
      setBadges(map);
    });
  }, [pathname]);

  if (pathname === "/admin") return <>{children}</>;

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  };

  return (
    <div className="min-h-screen flex bg-[#F5F3ED]">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-[#2C2B27] flex flex-col min-h-screen">
        <div className="px-8 pt-10 pb-8 border-b border-white/5">
          <Link href="/" target="_blank">
            <Image
              src="/images/horizontal_white.svg"
              alt="Nicol Weddings"
              width={140}
              height={42}
              className="object-contain opacity-80"
              style={{ height: "auto" }}
            />
          </Link>
          <p className="font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.3em] uppercase text-white/25 mt-3">
            Admin felület
          </p>
        </div>

        <nav className="flex-1 px-4 py-8">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              const badge = badges[item.href] ?? 0;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded transition-colors duration-200 font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.15em] uppercase ${
                      active
                        ? "bg-white/10 text-white"
                        : "text-white/40 hover:text-white/70 hover:bg-white/5"
                    }`}
                  >
                    <span className="text-base leading-none">{item.icon}</span>
                    <span className="flex-1">{item.label}</span>
                    {badge > 0 && (
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#C9A97A] text-[#2C2B27] text-[10px] font-bold leading-none">
                        {badge > 9 ? "9+" : badge}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="px-4 pb-8">
          <button
            onClick={logout}
            className="w-full text-left flex items-center gap-3 px-4 py-3 font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.15em] uppercase text-white/25 hover:text-white/50 transition-colors duration-200"
          >
            <span>↩</span> Kilépés
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
