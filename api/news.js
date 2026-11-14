const queries = {
  national: {
    en: { q: "Brazil OR Lula when:7d", hl: "en-US", gl: "BR", ceid: "BR:en" },
    es: { q: "Brasil OR Lula when:7d", hl: "es-419", gl: "BR", ceid: "BR:es-419" },
    pt: { q: "Brasil OR Lula OR Congresso OR Senado when:7d", hl: "pt-BR", gl: "BR", ceid: "BR:pt-419" },
  },
  international: {
    en: { hl: "en-US", gl: "US", ceid: "US:en" },
    es: { hl: "es-419", gl: "MX", ceid: "MX:es-419" },
    pt: { hl: "pt-BR", gl: "BR", ceid: "BR:pt-419" },
  },
};
const trusted = [
  "reuters.com", "apnews.com", "bbc.com", "bbc.co.uk", "theguardian.com",
  "dw.com", "france24.com", "aljazeera.com", "efe.com", "elpais.com",
  "agenciabrasil.ebc.com.br", "g1.globo.com", "oglobo.globo.com",
  "poder360.com.br", "folha.uol.com.br", "valorinternational.globo.com",
  "bloomberg.com", "bloomberglinea.com", "ft.com", "npr.org", "cnn.com",
  "cnnbrasil.com.br", "pbs.org", "nytimes.com", "axios.com", "politico.com",
  "foreignpolicy.com", "infomoney.com.br", "estadao.com.br", "nbcnews.com",
  "cbsnews.com", "news.sky.com", "lemonde.fr",
];
const topic = /polit|polít|econ|govern|gobiern|congres|senad|parlament|elec|elei|vot|presiden|minister|war|guer|sanction|sanci|sanç|tariff|tarif|tax|impost|climat|climát|nato|otan|peace|paz|militar|diplom|fiscal|inflation|infla|interest|juros|interés|dólar|dollar|mercad|trade|comerc|gaza|ukrain|ucrani|ucrâni|russ|rúss|china|israel|iran|irã|energia|energy|petróle|oil|finan|bank|banco|debt|dívid|tens[ãa]o|crise|crisis/i;
const brazil = /brazil|brasil|lula|bolsonaro|brasília|congresso|senado|stf|banco central|petrobras|real\b/i;
const trustedHost = (url) => {
  try {
    const host = new URL(url).hostname.toLowerCase();
    return trusted.some((allowed) => host === allowed || host.endsWith("." + allowed));
  } catch { return false; }
};

function decode(value = "") {
  return value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([\da-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&quot;/g, '"').replace(/&apos;|&#39;/g, "'")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")
    .trim();
}
const field = (xml, name) => decode(xml.match(new RegExp("<" + name + "(?:\\s[^>]*)?>([\\s\\S]*?)<\\/" + name + ">"))?.[1] || "");

module.exports = async (req, res) => {
  const scope = String(req.query.scope || "national");
  const lang = String(req.query.lang || "en");
  const feed = queries[scope]?.[lang];
  if (!feed) return res.status(400).json({ error: "Invalid feed" });
  const url = new URL(scope === "international"
    ? "https://news.google.com/rss/headlines/section/topic/WORLD"
    : "https://news.google.com/rss/search");
  for (const [key, value] of Object.entries(feed)) url.searchParams.set(key, value);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8500);
  try {
    const response = await fetch(url, { signal: controller.signal, headers: { "user-agent": "Colherinha/1.0 news reader" } });
    if (!response.ok) throw new Error("Feed error");
    const xml = await response.text();
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((match) => {
      const entry = match[1];
      const title = field(entry, "title");
      const source = field(entry, "source") || title.split(" - ").at(-1);
      const sourceUrl = decode(entry.match(/<source\s+url="([^"]+)"/)?.[1] || "");
      const link = field(entry, "link");
      const published = new Date(field(entry, "pubDate"));
      if (Number.isNaN(published.getTime())) return null;
      return { title: title.replace(new RegExp(" - " + source.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "$"), ""), source, sourceUrl, link, publishedAt: published.toISOString() };
    }).filter((item) => item && trustedHost(item.sourceUrl) && topic.test(item.title)
      && (scope !== "national" || brazil.test(item.title) || item.sourceUrl.includes("agenciabrasil.ebc.com.br"))
      && /^https:\/\/news\.google\.com\//.test(item.link)
      && Date.now() - new Date(item.publishedAt).getTime() < 8 * 86400000
    ).slice(0, 9).map(({ sourceUrl, ...item }) => item);
    res.setHeader("Cache-Control", "public, s-maxage=1800, stale-while-revalidate=3600");
    return res.status(200).json({ items, attribution: "Google News RSS" });
  } catch {
    return res.status(502).json({ error: "News feed unavailable" });
  } finally {
    clearTimeout(timeout);
  }
};
