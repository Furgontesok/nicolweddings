export async function adminDelete(table: string, id: string, column = "id"): Promise<string | null> {
  const res = await fetch("/api/admin/delete", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ table, id, column }),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    return data.error ?? "Ismeretlen hiba";
  }
  return null;
}
