// Converts the Unsplash photos the original site hot-linked into local WebP files.
// Usage: node scripts/optimize-unsplash.mjs <dir-with-downloaded-jpgs>
import sharp from 'sharp';
import { readdirSync } from 'node:fs';
import { join, parse } from 'node:path';

const dir = process.argv[2];
for (const f of readdirSync(dir).filter((f) => f.endsWith('.jpg'))) {
  const info = await sharp(join(dir, f))
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(join('src/assets/img', `${parse(f).name}.webp`));
  console.log(f, `${info.width}x${info.height}`, `${(info.size / 1024).toFixed(0)}kB`);
}
