import { hashZoneSlug } from "@/lib/zone-local-data";

const heroPool = [
  "hero-bg-technicien-drm.webp",
  "hero-rideau-metallique-industriel.webp",
  "hero-rideau-lame-pleine.webp",
  "hero-rideau-micro-perforee.webp",
  "hero-rideau-polycarbonate.webp",
  "hero-grille-extensible.webp",
];

const galleryPool = [
  "depannage-rideau-metallique-drm-reparation.webp",
  "installation-rideau-metallique-drm.webp",
  "moteur-tubulaire-rideau-metallique-drm.webp",
  "entretien-rideau-metallique-drm-france.webp",
  "fabrication-rideau-metallique-entreprise-drm.webp",
  "realisation-rideau-metallique-lame-pleine-commerce.webp",
  "rideau-metallique-bloque-depannage-rideau-metallique.webp",
  "lame-pleine-rideau-metallique-france.webp",
  "grille-cobra-rideau-metallique.webp",
  "lame-micro-perforee-rideau-metallique.webp",
];

export function getZoneHero(zoneSlug: string): string {
  const idx = hashZoneSlug(zoneSlug) % heroPool.length;
  return `/images/gallery/${heroPool[idx]}`;
}

export function getZoneGallery(zoneSlug: string, count = 4): string[] {
  const base = hashZoneSlug(zoneSlug);
  const picked: string[] = [];
  for (let i = 0; i < count; i++) {
    picked.push(`/images/gallery/${galleryPool[(base + i * 3) % galleryPool.length]}`);
  }
  return picked;
}
