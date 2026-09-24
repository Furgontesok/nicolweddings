import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import AjanlatClient from "./AjanlatClient";

async function getProposal(token: string) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  const sb = createClient(url, key);
  const { data } = await sb.from("proposals").select("*").eq("token", token).single();
  return data;
}

export default async function AjanlatPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const p = await getProposal(token);
  if (!p) notFound();

  return <AjanlatClient proposal={p} />;
}
