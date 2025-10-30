import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, '..');
const DATA_FILE = path.join(ROOT, 'src', 'data', 'articles.ts');
const PUBLIC_DIR = path.join(ROOT, 'public');
const OUT_FILE = path.join(PUBLIC_DIR, 'sitemap.xml');

function extractIds(tsSource) {
  const ids = new Set();
  const regex = /\bid\s*:\s*(\d+)/g;
  let m;
  while ((m = regex.exec(tsSource))) {
    ids.add(Number(m[1]));
  }
  return Array.from(ids).sort((a, b) => a - b);
}

function buildXml(articleIds) {
  const today = new Date().toISOString();
  const urls = [
    { loc: 'https://blogkeeper.site/', changefreq: 'daily', priority: '1.0', lastmod: today },
    { loc: 'https://blogkeeper.site/home', changefreq: 'daily', priority: '0.9', lastmod: today },
    { loc: 'https://blogkeeper.site/blogs', changefreq: 'daily', priority: '0.9', lastmod: today },
    { loc: 'https://blogkeeper.site/about', changefreq: 'monthly', priority: '0.6', lastmod: today },
    { loc: 'https://blogkeeper.site/contact', changefreq: 'monthly', priority: '0.5', lastmod: today },
    { loc: 'https://blogkeeper.site/terms', changefreq: 'yearly', priority: '0.4', lastmod: today },
    { loc: 'https://blogkeeper.site/privacy', changefreq: 'yearly', priority: '0.4', lastmod: today },
    { loc: 'https://blogkeeper.site/cookie', changefreq: 'yearly', priority: '0.3', lastmod: today }
  ];
  for (const id of articleIds) {
    urls.push({ loc: `https://blogkeeper.site/blog/${id}`, changefreq: 'weekly', priority: '0.7', lastmod: today });
  }
  const entries = urls
    .map(
      (u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}

try {
  const ts = fs.readFileSync(DATA_FILE, 'utf8');
  const ids = extractIds(ts);
  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  const xml = buildXml(ids);
  fs.writeFileSync(OUT_FILE, xml, 'utf8');
  console.log(`Sitemap generated with ${ids.length} articles -> ${OUT_FILE}`);
} catch (e) {
  console.error('Failed to generate sitemap:', e);
  process.exitCode = 0; // do not fail build
}
