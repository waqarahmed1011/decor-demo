// Downloads all assets from theperfectaffair.in into public/
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const BASE = 'https://theperfectaffair.in/wp-content/uploads/2023/12/';
const OUT = new URL('../public/', import.meta.url).pathname;

// [remotePath, localPath]
const assets = [
  // Brand / logos
  ['tpa-logo-stock-circle.png', 'images/tpa-logo-circle.png'],
  ['tpa-logo-black.png', 'images/tpa-logo-black.png'],
  ['logo-white.png', 'images/logo-white.png'],
  // Hero
  ['Home-Banner-Video.mp4', 'videos/home-banner.mp4'],
  ['home-banner.jpg', 'images/home-banner.jpg'],
  // Who we are
  ['memories.jpg', 'images/memories.jpg'],
  ['decor-1.jpg', 'images/decor-alt.jpg'],
  // Services
  ['decor1.jpg', 'images/services/decor.jpg'],
  ['dj.jpg', 'images/services/dj.jpg'],
  ['invite.jpg', 'images/services/invite.jpg'],
  ['gifts.jpg', 'images/services/gifts.jpg'],
  ['vendor.jpg', 'images/services/vendor.jpg'],
  ['manage.jpg', 'images/services/manage.jpg'],
  // Expertise
  ['dual-ex1.jpg', 'images/dual-ex1.jpg'],
  ['dual-ex2.jpg', 'images/dual-ex2.jpg'],
  // Why choose
  ['elegant-design.jpg', 'images/why/elegant-design.jpg'],
  ['custom-made.jpg', 'images/why/custom-made.jpg'],
  ['coordinate.jpg', 'images/why/coordinate.jpg'],
  ['Diverse.jpg', 'images/why/diverse.jpg'],
  // Testimonials
  ['testimonial-banner.jpg', 'images/testimonial-banner.jpg'],
  // Events 3D icons
  ['Ring-Box.png', 'images/events/ring-box.png'],
  ['Wedding-Bell.png', 'images/events/wedding-bell.png'],
  ['Wedding-Balloon.png', 'images/events/wedding-balloon.png'],
  ['Wedding-Invitation.png', 'images/events/wedding-invitation.png'],
  ['Wedding-Cake.png', 'images/events/wedding-cake.png'],
  ['Love-Lock.png', 'images/events/love-lock.png'],
  ['Wedding-Location.png', 'images/events/wedding-location.png'],
  ['Champagne-Glass-.png', 'images/events/champagne-glass.png'],
  ['Wedding-Day.png', 'images/events/wedding-day.png'],
  ['Wedding-Video-Recorder.png', 'images/events/wedding-video-recorder.png'],
  ['Wedding-Gift.png', 'images/events/wedding-gift.png'],
  ['Wedding-Camera.png', 'images/events/wedding-camera.png'],
  // Social
  ['instagram-tpa.png', 'images/instagram.png'],
  ['youtube-tpa.png', 'images/youtube.png'],
];

async function download([remote, local]) {
  const url = BASE + remote;
  const dest = join(OUT, local);
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    console.log(`  ok  ${local} (${(buf.length / 1024).toFixed(0)} KB)`);
    return true;
  } catch (e) {
    console.error(`  FAIL ${remote}: ${e.message}`);
    return false;
  }
}

// batches of 4
let ok = 0;
for (let i = 0; i < assets.length; i += 4) {
  const results = await Promise.all(assets.slice(i, i + 4).map(download));
  ok += results.filter(Boolean).length;
}
console.log(`\nDone: ${ok}/${assets.length} downloaded.`);
