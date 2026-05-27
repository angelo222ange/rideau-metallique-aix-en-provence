#!/usr/bin/env node
// Download all Roofer template assets from framerusercontent.com
import { mkdirSync, createWriteStream, existsSync } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, '..', 'public', 'images');
mkdirSync(OUT, { recursive: true });

const ASSETS = [
  // Logo + favicon
  { url: 'https://framerusercontent.com/modules/ykK7HvzNDbGccqT5qpT5/IMAe5knCU3QhBtfPrHYA/assets/ErSu0lDVH73VmxPaHDdCKNhteA.svg', name: 'logo.svg' },
  { url: 'https://framerusercontent.com/images/B5YFEI3iTwqQ6uw1vFUPSVGoZo.png', name: 'favicon.png' },

  // Hero bg (roof image)
  { url: 'https://framerusercontent.com/images/jtCsMyNN1Bz507p4JRtk26iOSA.png?scale-down-to=2048&width=3876&height=2586', name: 'hero-bg.png' },

  // Hero stat icons
  { url: 'https://framerusercontent.com/images/rUvU0HCqbM3y6fhIWNjGdGU0biI.svg?width=55&height=55', name: 'avatar-1.svg' },
  { url: 'https://framerusercontent.com/images/g5Wkr2KAbRVpUTnDbroYz6JKYw.svg?width=55&height=55', name: 'avatar-2.svg' },
  { url: 'https://framerusercontent.com/images/LLs8wchLs3r44It9RODtm3l93Gk.svg?width=55&height=55', name: 'avatar-3.svg' },
  { url: 'https://framerusercontent.com/images/1UAkBEASQFneMFzWgcwmPNVEfnQ.svg?width=55&height=55', name: 'avatar-4.svg' },

  // Content-1 "why choose us" image
  { url: 'https://framerusercontent.com/images/X35cosIbFTbHj0jVoH8ZChcxp1Y.jpg?scale-down-to=2048&width=4096&height=2731', name: 'why-choose-us.jpg' },

  // Content-1 bullet check icon
  { url: 'https://framerusercontent.com/images/QKMdLLvUQ5QKtJypCiTaLsprazc.svg?width=24&height=24', name: 'check.svg' },

  // Service icons (6)
  { url: 'https://framerusercontent.com/images/3Whfnk9xeYHuThItMxHsLozr8.svg?width=34&height=34', name: 'service-1.svg' },
  { url: 'https://framerusercontent.com/images/9sseofjvdoSNGw1OrsPwt7bA0U.svg?width=35&height=32', name: 'service-2.svg' },
  { url: 'https://framerusercontent.com/images/9XCWyPMau9AXyyigKsiuVZ8HPHU.svg?width=36&height=34', name: 'service-3.svg' },
  { url: 'https://framerusercontent.com/images/Ud21hKV9z8wiv761kEzRt0eRJt4.svg?width=38&height=34', name: 'service-4.svg' },
  { url: 'https://framerusercontent.com/images/VFZFNgIwxUJUbwpWBZ5Su9gY.svg?width=37&height=35', name: 'service-5.svg' },
  { url: 'https://framerusercontent.com/images/h2oDGruHsEqE4iNvDE1Oo3wRJlE.svg?width=32&height=32', name: 'service-6.svg' },

  // How-it-works images (3)
  { url: 'https://framerusercontent.com/images/FZtkK4swt3f1cwHBUp9PKWoIw.jpg?scale-down-to=1024&width=4096&height=2730', name: 'how-it-works-1.jpg' },
  { url: 'https://framerusercontent.com/images/YgaKaFYWYN4WRjhYhtOpYEgZSnk.jpg?scale-down-to=1024&width=2725&height=4096', name: 'how-it-works-2.jpg' },
  { url: 'https://framerusercontent.com/images/F8yQnLxSgV6sGiAZYpzI5Ig8yk.png?scale-down-to=1024&width=1972&height=1164', name: 'how-it-works-3.png' },

  // CTA bg (dark) + roof image
  { url: 'https://framerusercontent.com/modules/ccSx0kcas7UC3AniFU9l/Q3lB3Ms7q1MdjZXRGHBd/assets/tlFFcOfsDQeOVLdn0rGQStmqCsk.png', name: 'cta-dark-bg.png' },
  { url: 'https://framerusercontent.com/modules/ccSx0kcas7UC3AniFU9l/Q3lB3Ms7q1MdjZXRGHBd/assets/P7264pyjJIDEL91YOP40xlA3fro.png', name: 'roof-image.png' },

  // Testimonials: google logo + star
  { url: 'https://framerusercontent.com/modules/6RQ3QoeYM0Vt6BB2ICBv/SEcSpdKrpXBq7SQ9i1iZ/assets/cDioZKgHfk2VzE66TBcoAGajTQ.png', name: 'google-logo.png' },
  { url: 'https://framerusercontent.com/modules/6RQ3QoeYM0Vt6BB2ICBv/SEcSpdKrpXBq7SQ9i1iZ/assets/muAfHkIgMElCoKVd440z4fs6BGI.svg', name: 'stars-5.svg' },
  { url: 'https://framerusercontent.com/modules/6l63vgUCCi9zaLyeFdhw/C870zGhjrQUAVlEWOhav/assets/UsazcuY32OaGDvo4P5cEUW2EhZM.svg', name: 'google-badge.svg' },

  // Blog card images (3)
  { url: 'https://framerusercontent.com/images/9mSDjPF4BavLLgYkTAMXqvgvfc.png?width=750&height=480', name: 'blog-1.png' },
  { url: 'https://framerusercontent.com/images/eVWl1q9sWNQZc3f1xtIK1SvC9k.png?width=750&height=480', name: 'blog-2.png' },
  { url: 'https://framerusercontent.com/images/NYusHjAPpAzKKlQjM9k2lAe55mY.png?width=750&height=480', name: 'blog-3.png' },

  // FAQ chevron
  { url: 'https://framerusercontent.com/modules/eiLBpaLvdBTKAc0R5sca/CMkD7PamSRrsYIAiM7YT/assets/sN3Hf3u5TclMEcjtJRndVIZPBA.svg', name: 'chevron.svg' },

  // Footer
  { url: 'https://framerusercontent.com/modules/9i0kTcGTaJUbhtZtX8Jk/hQnToiNCoclhoSEIDxwK/assets/tlFFcOfsDQeOVLdn0rGQStmqCsk.png', name: 'footer-dark-bg.png' },
  { url: 'https://framerusercontent.com/modules/9i0kTcGTaJUbhtZtX8Jk/hQnToiNCoclhoSEIDxwK/assets/98yMav9J6nGw6CmCxbeLO1jLNOU.svg', name: 'footer-logo.svg' },
  { url: 'https://framerusercontent.com/modules/9i0kTcGTaJUbhtZtX8Jk/hQnToiNCoclhoSEIDxwK/assets/qlhIPe0aJp0BkXxx2TdwRpUVo.png', name: 'footer-big-logo.png' },
];

async function fetchOne({ url, name }) {
  const dest = path.join(OUT, name);
  if (existsSync(dest)) { console.log('skip', name); return; }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${name}`);
  await pipeline(res.body, createWriteStream(dest));
  console.log('ok', name);
}

async function main() {
  const batchSize = 4;
  for (let i = 0; i < ASSETS.length; i += batchSize) {
    const batch = ASSETS.slice(i, i + batchSize);
    await Promise.all(batch.map(a => fetchOne(a).catch(e => console.error('ERR', a.name, e.message))));
  }
  console.log('done');
}

main();
