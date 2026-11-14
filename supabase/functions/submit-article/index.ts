import { createClient } from "npm:@supabase/supabase-js@2";

const headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "POST, OPTIONS",
  "access-control-allow-headers": "content-type, apikey",
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
};
const respond = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers });
const clean = (value: unknown) =>
  typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response(null, { headers });
  if (request.method !== "POST") return respond({ error: "Method not allowed" }, 405);
  if (Number(request.headers.get("content-length") || 0) > 15000)
    return respond({ error: "Article too large" }, 413);

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return respond({ error: "Invalid JSON" }, 400);
  }

  const author = clean(data.author);
  const title = clean(data.title);
  const category = clean(data.category);
  const source = clean(data.source);
  const language = clean(data.language);
  const body = typeof data.body === "string" ? data.body.trim() : "";

  if (data.consent !== true) return respond({ error: "Consent required" }, 400);
  if (
    author.length < 2 || author.length > 60 ||
    title.length < 8 || title.length > 120 ||
    body.length < 150 || body.length > 10000 ||
    source.length > 300 ||
    !["politics", "geopolitics", "economy", "society", "opinion"].includes(category) ||
    !["en", "es", "pt"].includes(language)
  ) return respond({ error: "Invalid article fields" }, 400);
  if (/(?:https?:\/\/|www\.|<[^>]+>)/i.test(author + title + body))
    return respond({ error: "Links are allowed only in the source field" }, 400);

  const url = Deno.env.get("SUPABASE_URL");
  const secret = JSON.parse(Deno.env.get("SUPABASE_SECRET_KEYS") || "{}").default;
  if (!url || !secret) return respond({ error: "Service unavailable" }, 503);
  const db = createClient(url, secret);
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const day = new Date().toISOString().slice(0, 10);
  const key = await crypto.subtle.importKey(
    "raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"],
  );
  const digest = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(day + ":" + ip));
  const fingerprint = Array.from(new Uint8Array(digest), (v) => v.toString(16).padStart(2, "0")).join("");
  const hourAgo = new Date(Date.now() - 3600000).toISOString();
  const { count, error: countError } = await db.from("articles")
    .select("id", { count: "exact", head: true })
    .eq("ip_fingerprint", fingerprint).gte("created_at", hourAgo);
  if (countError) return respond({ error: "Service unavailable" }, 503);
  if ((count || 0) >= 3) return respond({ error: "Rate limit exceeded" }, 429);

  const { error } = await db.from("articles").insert({
    author, title, category, body, source, language, ip_fingerprint: fingerprint,
  });
  if (error) return respond({ error: "Could not publish article" }, 500);
  return respond({ ok: true }, 201);
});
