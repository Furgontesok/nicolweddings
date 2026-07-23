"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const SEEN_KEY = "admin_last_seen";

type SeenMap = Record<string, string>;

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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    if (!supabase) return;

    const raw = localStorage.getItem(SEEN_KEY);
    const seen: SeenMap = raw ? JSON.parse(raw) : {};

    const current = nav.find(n => n.href === pathname);
    if (current?.table) {
      const updated = { ...seen, [current.href]: new Date().toISOString() };
      localStorage.setItem(SEEN_KEY, JSON.stringify(updated));
      seen[current.href] = updated[current.href];
    }

    const trackable = nav.filter(n => n.table);
    Promise.all(
      trackable.map(async (item) => {
        const lastSeen = seen[item.href];
        if (!lastSeen) {
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

  const currentLabel = nav.find(n => n.href === pathname)?.label ?? "Admin";

  const NavContent = () => (
    <>
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

      <nav className="flex-1 px-4 py-8 overflow-y-auto">
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
    </>
  );

  return (
    <div className="min-h-screen flex bg-[#F5F3ED]">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 bg-[#2C2B27] flex-col min-h-screen">
        <NavContent />
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[#2C2B27] flex items-center justify-between px-4 h-14">
        <span className="font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.2em] uppercase text-white/70">
          {currentLabel}
        </span>
        <button
          onClick={() => setMobileOpen(v => !v)}
          className="text-white/60 hover:text-white p-2"
          aria-label="Menü"
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <aside className="w-72 bg-[#2C2B27] flex flex-col h-full overflow-hidden">
            <NavContent />
          </aside>
          <div className="flex-1 bg-black/40" onClick={() => setMobileOpen(false)} />
        </div>
      )}

      {/* Content */}
      <main className="flex-1 overflow-auto md:min-h-screen min-h-screen pt-14 md:pt-0">
        {children}
      </main>
    </div>
  );
}
