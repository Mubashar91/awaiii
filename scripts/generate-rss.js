import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, '..');
const DATA_FILE = path.join(ROOT, 'src', 'data', 'articles.ts');
const PUBLIC_DIR = path.join(ROOT, 'public');
const OUT_FILE = path.join(PUBLIC_DIR, 'feed.xml');

function parseArticles(ts) {
  const items = [];
  const blocks = ts.split(/\n\s*},\s*\{/g);
  for (const block of blocks) {
    const id = (block.match(/\bid\s*:\s*(\d+)/) || [])[1];
    const title = (block.match(/\btitle\s*:\s*"([^"]+)"/) || [])[1];
    const excerpt = (block.match(/\bexcerpt\s*:\s*`([\s\S]*?)`|\bexcerpt\s*:\s*"([^"]+)"/) || [])[1] || (block.match(/\bexcerpt\s*:\s*"([^"]+)"/) || [])[1];
    const published = (block.match(/\bpublished\s*:\s*"([^"]+)"/) || [])[1];
    if (id && title) {
      items.push({ id: Number(id), title, description: (excerpt || '').replace(/\n/g, ' ').trim(), pubDate: published || '' });
    }
  }
  // remove duplicates, sort by id desc
  const seen = new Set();
  const unique = [];
  for (const it of items) {
    if (seen.has(it.id)) continue;
    seen.add(it.id);
    unique.push(it);
  }
  unique.sort((a,b)=>b.id-a.id);
  return unique.slice(0, 50);
}

function buildRss(items) {
  const site = 'https://blogkeeper.site';
  const now = new Date().toUTCString();
  const itemXml = items.map(i => `    <item>\n      <title><![CDATA[${i.title}]]></title>\n      <link>${site}/blog/${i.id}</link>\n      <guid>${site}/blog/${i.id}</guid>\n      <pubDate>${now}</pubDate>\n      <description><![CDATA[${i.description}]]></description>\n    </item>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>Blog Keeper</title>\n    <link>${site}</link>\n    <description>Latest articles from Blog Keeper</description>\n    <lastBuildDate>${now}</lastBuildDate>\n${itemXml}\n  </channel>\n</rss>\n`;
}

try {
  const ts = fs.readFileSync(DATA_FILE, 'utf8');
  const items = parseArticles(ts);
  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  const rss = buildRss(items);
  fs.writeFileSync(OUT_FILE, rss, 'utf8');
  console.log(`RSS generated with ${items.length} items -> ${OUT_FILE}`);
} catch (e) {
  console.error('Failed to generate RSS:', e);
  process.exitCode = 0;
}
