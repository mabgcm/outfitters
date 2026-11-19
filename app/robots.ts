import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/** AI crawlers are intentionally allowed: GEO needs them to read the site. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
