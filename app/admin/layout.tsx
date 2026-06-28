"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const nav = [
  { label: "Referenciák", href: "/admin/referenciak", icon: "◇" },
  { label: "Ajánlatok", href: "/admin/ajanlatok", icon: "◈" },
  { label: "Megkeresések", href: "/admin/megkeresesek", icon: "◁" },
  { label: "Statisztika", href: "/admin/statisztika", icon: "◻" },
  { label: "E-book emailek", href: "/admin/emailek", icon: "◻" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

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
                    {item.label}
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
