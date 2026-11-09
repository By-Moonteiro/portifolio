import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["pt", "en"].flatMap((locale) =>
    ["", "/projects/ecommerce"].map((path) => ({
      url: `${SITE_URL}/${locale}${path}`,
    })),
  );
}
