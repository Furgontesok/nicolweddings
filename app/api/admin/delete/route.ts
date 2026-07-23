import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { supabaseAdmin } from "@/lib/supabase-admin";

const ALLOWED_TABLES = [
  "contact_submissions",
  "testimonials",
  "couples",
  "couple_images",
  "couple_vendors",
  "ajanlatok",
  "proposals",
  "proposal_acceptances",
  "save_the_dates",
];

export async function DELETE(req: NextRequest) {
  const cookieStore = await cookies();
  const adminCookie = cookieStore.get("admin_session");
  if (!adminCookie?.value) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!supabaseAdmin) {
    return NextResponse.json({ error: "Server not configured" }, { status: 500 });
  }

  const { table, id, column = "id" } = await req.json();

  if (!ALLOWED_TABLES.includes(table)) {
    return NextResponse.json({ error: "Invalid table" }, { status: 400 });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { error } = await (supabaseAdmin as any).from(table).delete().eq(column, id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
