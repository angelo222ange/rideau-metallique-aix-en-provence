import { siteConfig, services, zones } from "@/config/site";

type ReplacementMap = Record<string, string>;

export function replaceVariables(
  text: string,
  zone?: string,
  zonePostal?: string
): string {
  const replacements: ReplacementMap = {
    "{name}": siteConfig.fullName,
    "{brand}": siteConfig.brand,
    "{phone}": siteConfig.phone || "",
    "{phoneLink}": siteConfig.phoneLink,
    "{email}": siteConfig.email,
    "{city}": siteConfig.city,
    "{cityShort}": siteConfig.cityShort,
    "{postalCode}": siteConfig.postalCode,
    "{department}": siteConfig.department,
    "{departmentCode}": siteConfig.departmentCode,
    "{region}": siteConfig.region,
    "{address}": siteConfig.address,
    "{domain}": siteConfig.domain,
    "{url}": siteConfig.url,
    "{experience}": siteConfig.experience,
    "{delai}": siteConfig.delai,
    "{rating}": siteConfig.rating,
    "{ratingCount}": siteConfig.ratingCount,
    "{interventions}": siteConfig.interventions,
  };

  if (zone) replacements["{zone}"] = zone;
  if (zonePostal) replacements["{zonePostal}"] = zonePostal;

  let result = text;
  for (const [key, value] of Object.entries(replacements)) {
    result = result.split(key).join(value);
  }
  return result;
}

export function getZoneBySlug(slug: string) {
  return zones.find((z) => z.slug === slug);
}

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug || s.id === slug);
}

export function generateSlug(service: string, zone: string): string {
  return `${service}-${zone}`;
}

export function parseSlug(slug: string): { service: typeof services[0]; zone: typeof zones[0] | null } | null {
  for (const service of services) {
    if (slug.startsWith(service.slug + "-")) {
      const zoneSlug = slug.slice(service.slug.length + 1);
      const zone = zones.find((z) => z.slug === zoneSlug);
      if (zone) return { service, zone };
      const citySlug = siteConfig.city.toLowerCase().replace(/[\s']/g, "-");
      if (zoneSlug === citySlug) {
        return {
          service,
          zone: {
            name: siteConfig.city,
            slug: citySlug,
            postalCode: siteConfig.postalCode,
            distance: "0 km",
            lat: siteConfig.geo.latitude,
            lng: siteConfig.geo.longitude,
          },
        };
      }
    }
  }
  return null;
}
