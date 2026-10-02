// One-off brand asset generator. NOT part of the regular build.
// Usage: LOGO_SRC="/path/to/tr_logo.png" node scripts/build-brand.mjs
// The 2048×2048 original is intentionally NOT stored in the repo (≈4 MB);
// only the optimized derivatives in public/ are committed.
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const SRC = process.env.LOGO_SRC || '/Users/tokc/Desktop/AnKo Software Labs/tr_logo.png';
const OUT = new URL('../public/', import.meta.url).pathname;
const BG = '#121214';

await mkdir(`${OUT}brand`, { recursive: true });

// Square crop of the icon-only mark (circular arrow + tap gesture) from the
// full logo. Coordinates found manually on the 2048×2048 original.
const markCrop = { left: 518, top: 270, width: 1040, height: 1040 };
const mark = await sharp(SRC).extract(markCrop).toBuffer();
// Full logo (mark + wordmark), trimmed of large empty margins.
const full = await sharp(SRC).extract({ left: 224, top: 300, width: 1600, height: 1600 }).toBuffer();

const roundMask = (size, r) =>
  Buffer.from(`<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${r}" ry="${r}"/></svg>`);

async function roundedTile(input, size, radius, file, fmt = 'png') {
  let img = sharp(input).resize(size, size).composite([{ input: roundMask(size, radius), blend: 'dest-in' }]);
  img = fmt === 'webp' ? img.webp({ quality: 86 }) : img.png({ compressionLevel: 9 });
  await img.toFile(`${OUT}${file}`);
}

// Header / UI logo tile (rounded square, transparent corners)
await roundedTile(mark, 512, 112, 'brand/logo-512.webp', 'webp');
await roundedTile(mark, 96, 22, 'brand/logo-96.webp', 'webp');
await roundedTile(full, 640, 0, 'brand/logo-full-640.webp', 'webp');
// PWA / platform icons: full-bleed squares (platforms apply their own masks)
await sharp(mark).resize(192, 192).png({ compressionLevel: 9 }).toFile(`${OUT}brand/logo-192.png`);
await sharp(mark).resize(512, 512).png({ compressionLevel: 9 }).toFile(`${OUT}brand/logo-512.png`);
await sharp(mark).resize(180, 180).png({ compressionLevel: 9 }).toFile(`${OUT}apple-touch-icon.png`);
await sharp(mark).resize(32, 32).png({ compressionLevel: 9 }).toFile(`${OUT}favicon-32.png`);
await sharp(mark).resize(16, 16).png({ compressionLevel: 9 }).toFile(`${OUT}favicon-16.png`);

// Open Graph image 1200×630
const ogMark = await sharp(mark)
  .resize(380, 380)
  .composite([{ input: roundMask(380, 84), blend: 'dest-in' }])
  .png()
  .toBuffer();
const ogText = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g" cx="0.27" cy="0.5" r="0.45">
      <stop offset="0" stop-color="#FF6B00" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#FF6B00" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="${BG}"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <g font-family="Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif">
    <text x="560" y="250" font-size="72" font-weight="700" fill="#FFFFFF" letter-spacing="-2">TapReply</text>
    <text x="560" y="330" font-size="38" font-weight="500" fill="#FFFFFF">Reply to every review —</text>
    <text x="560" y="382" font-size="38" font-weight="500" fill="#FFFFFF">in your guest's language.</text>
    <text x="560" y="450" font-size="26" fill="#B8B8C4">Google · Yandex · 2GIS · Tripadvisor · Booking</text>
  </g>
</svg>`);
await sharp(ogText)
  .composite([{ input: ogMark, left: 120, top: 125 }])
  .png({ compressionLevel: 9 })
  .toFile(`${OUT}og-image.png`);

console.log('Brand assets written to public/');

// favicon.ico — ICO container with embedded 16/32/48 PNGs (supported by all modern browsers)
{
  const sizes = [16, 32, 48];
  const pngs = await Promise.all(sizes.map((s) => sharp(mark).resize(s, s).png({ compressionLevel: 9 }).toBuffer()));
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(sizes.length, 4);
  const dir = Buffer.alloc(16 * sizes.length);
  let offset = 6 + dir.length;
  sizes.forEach((s, i) => {
    const o = i * 16;
    dir.writeUInt8(s, o);
    dir.writeUInt8(s, o + 1);
    dir.writeUInt8(0, o + 2);
    dir.writeUInt8(0, o + 3);
    dir.writeUInt16LE(1, o + 4);
    dir.writeUInt16LE(32, o + 6);
    dir.writeUInt32LE(pngs[i].length, o + 8);
    dir.writeUInt32LE(offset, o + 12);
    offset += pngs[i].length;
  });
  const { writeFile } = await import('node:fs/promises');
  await writeFile(`${OUT}favicon.ico`, Buffer.concat([header, dir, ...pngs]));
}
console.log('favicon.ico written');
