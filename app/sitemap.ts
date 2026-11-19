import type { MetadataRoute } from "next";
import { ROUTES } from "@/lib/seo";
import { site } from "@/lib/site";

/** Dynamic sitemap: every route in lib/seo.ts ROUTES is included. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
