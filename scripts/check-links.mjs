// Internal link & asset checker for the built site (dist/).
// - every internal href/src resolves to a file in dist/
// - every in-page #anchor exists on the target page
// - every page has exactly one <h1>, a <title>, a meta description, canonical and hreflang (except 404)
// Usage: npm run build && npm run check:links
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;
const SITE = 'https://www.tapreply.net';

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

function resolveTarget(pathname) {
  let p = decodeURI(pathname);
  if (p.endsWith('/')) p += 'index.html';
  return join(DIST, p);
}

const files = (await walk(DIST)).filter((f) => f.endsWith('.html'));
const htmlCache = new Map();
const ids = async (file) => {
  if (!htmlCache.has(file)) {
    const html = await readFile(file, 'utf8');
    htmlCache.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  }
  return htmlCache.get(file);
};

const errors = [];
let checked = 0;

for (const file of files) {
  const rel = '/' + relative(DIST, file);
  const html = await readFile(file, 'utf8');
  const is404 = rel.endsWith('404.html');

  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) errors.push(`${rel}: expected 1 <h1>, found ${h1}`);
  if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${rel}: missing <title>`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) errors.push(`${rel}: missing meta description`);
  if (!is404) {
    if (!/<link rel="canonical"/.test(html)) errors.push(`${rel}: missing canonical`);
    for (const l of ['en', 'ru', 'x-default'])
      if (!html.includes(`hreflang="${l}"`)) errors.push(`${rel}: missing hreflang ${l}`);
  }
  if (/<img(?![^>]*\balt=)[^>]*>/.test(html)) errors.push(`${rel}: <img> without alt`);
  for (const tag of html.match(/<script[^>]*>/g) || [])
    if (!/\ssrc="/.test(tag) && !tag.includes('type="application/ld+json"'))
      errors.push(`${rel}: inline <script> (breaks CSP)`);
  if (/\sstyle="/.test(html)) errors.push(`${rel}: inline style attribute (breaks CSP)`);

  const refs = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
  for (const ref of refs) {
    if (/^(mailto:|tel:|data:)/.test(ref)) continue;
    let url;
    try {
      url = new URL(ref.replaceAll('&amp;', '&'), SITE + rel);
    } catch {
      errors.push(`${rel}: bad URL ${ref}`);
      continue;
    }
    if (url.origin !== SITE) continue; // external links are not checked
    checked++;
    const target = url.pathname === rel.replace(/index\.html$/, '') && !url.pathname.endsWith('/') ? file : resolveTarget(url.pathname);
    if (!(await exists(target))) {
      errors.push(`${rel}: broken link ${ref}`);
      continue;
    }
    if (url.hash && target.endsWith('.html')) {
      const id = decodeURIComponent(url.hash.slice(1));
      if (!(await ids(target)).has(id)) errors.push(`${rel}: missing anchor ${ref}`);
    }
  }
}

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s):\n` + errors.map((e) => '  ' + e).join('\n'));
  process.exit(1);
}
console.log(`✓ ${files.length} HTML files, ${checked} internal links/assets — all OK`);
