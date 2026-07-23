import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function GET(req: NextRequest) {
  const cookieStore = await cookies();
  const adminCookie = cookieStore.get("admin_auth");
  if (!adminCookie?.value) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (!supabaseAdmin) return NextResponse.json([], { status: 200 });

  const since = req.nextUrl.searchParams.get("since") ?? new Date(0).toISOString();

  const { data, error } = await (supabaseAdmin as any)
    .from("page_views")
    .select("page, referrer")
    .gte("created_at", since)
    .order("created_at", { ascending: false })
    .limit(10000);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data ?? []);
}
