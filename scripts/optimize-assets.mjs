// Pulls raster assets from the original site (read-only) and writes web-sized WebP copies.
import sharp from 'sharp';
import { mkdirSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';

const SRC = '../tpc-main-website/src/assets';
const OUT = 'src/assets/img';
mkdirSync(OUT, { recursive: true });

const jobs = [
  ['RISHIKESH.jpg', 'rishikesh', 1400],
  ['FASION.jpg', 'fashion', 1400],
  ['landing.jpg', 'landing', 1600],
  ['1landing.jpg', 'landing-alt', 1600],
  ['main.jpg', 'main', 1600],
  ['flexible.png', 'flexible', 1400],
  ['flexible-2.png', 'flexible-2', 1400],
  ['4-PC.png', 'ops-bg', 1800],
  ['Vendor Portal.png', 'ui-vendor-portal', 1044],
  ['Booking Data.png', 'ui-booking-data', 1044],
  ['Analytics.png', 'ui-analytics', 1044],
  ['Counter Booking.png', 'ui-counter-booking', 1044],
  ['mock.png', 'app-mock', 756],
];

for (const [file, name, width] of jobs) {
  const info = await sharp(join(SRC, file))
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(join(OUT, `${name}.webp`));
  console.log(`${name}.webp  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)}kB`);
}

// Logo lockup: trimmed PNGs so the mark and wordmark align exactly.
for (const [file, name] of [['blueicon.png', 'logo-mark'], ['bluetext.png', 'logo-text']]) {
  await sharp(join(SRC, file)).trim().resize({ height: 96 }).png().toFile(join(OUT, `${name}.png`));
}

// QR must stay pixel-crisp: keep PNG.
copyFileSync(join(SRC, 'app-qr.png'), join(OUT, 'app-qr.png'));
await sharp(join(SRC, 'favicon.png')).resize(64).png().toFile('public/favicon.png');
console.log('done');

// Small variants for the hero arc tickets (rendered ≤ 290px wide).
for (const name of ['hampta', 'rishikesh', 'fashion', 'landing-alt', 'main', 'tarang', 'landing']) {
  const info = await sharp(join(OUT, `${name}.webp`))
    .resize({ width: 600, height: 640, fit: 'cover' })
    .webp({ quality: 74 })
    .toFile(join(OUT, `card-${name}.webp`));
  console.log(`card-${name}.webp  ${(info.size / 1024).toFixed(0)}kB`);
}
