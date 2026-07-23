import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  if (!supabaseAdmin) return NextResponse.json({ ok: false });

  const { page, referrer } = await req.json();
  if (!page) return NextResponse.json({ ok: false });

  await (supabaseAdmin as any).from("page_views").insert({ page, referrer: referrer || null });

  return NextResponse.json({ ok: true });
}
