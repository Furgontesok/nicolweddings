"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/admin/referenciak");
    } else {
      setError("Hibás jelszó. Próbáld újra.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F3ED] flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center mb-10">
          <Image
            src="/images/horizontal_black.svg"
            alt="Nicol Weddings and Events"
            width={180}
            height={54}
            className="object-contain opacity-80 mb-8"
            style={{ height: "auto" }}
          />
          <div className="w-8 h-px bg-[#363025]/20 mb-6" />
          <p className="font-[family-name:var(--font-nunito)] text-[10px] tracking-[0.3em] uppercase text-[#363025]/40">
            Admin belépés
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Jelszó"
            className="w-full bg-white border border-[#363025]/15 px-5 py-4 font-[family-name:var(--font-nunito)] text-[12px] tracking-[0.1em] text-[#363025] placeholder:text-[#363025]/30 focus:outline-none focus:border-[#363025]/40 transition-colors duration-200"
          />

          {error && (
            <p className="font-[family-name:var(--font-nunito)] text-[11px] text-red-500/70 text-center tracking-wide">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full bg-[#363025] text-white font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.25em] uppercase py-4 hover:bg-[#363025]/80 transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? "Belépés..." : "Belépés"}
          </button>
        </form>
      </div>
    </div>
  );
}
