/**
 * SEO foundation — one place every page draws from.
 *
 * - ROUTES: every public route. Add a new landing page here and it lands
 *   in the sitemap automatically.
 * - pageMetadata(): shared title/description/canonical/OG/Twitter builder.
 * - Schema builders: JSON-LD objects rendered by <JsonLd />.
 *
 * Contact details and prices are deliberately LEFT OUT of schema until
 * Matt confirms the real ones — structured data must only assert true
 * facts. The values in lib/site.ts are still placeholders.
 */

import type { Metadata } from "next";
import type { SiteImage } from "@/lib/images";
import { site } from "@/lib/site";

export const ROUTES: Array<{
  path: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/ice-fishing", changeFrequency: "monthly", priority: 0.9 },
];

export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: SiteImage;
}): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle = `${title} — ${site.brandName}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.brandName,
      locale: "en_CA",
      type: "website",
      images: image ? [{ url: image.src, alt: image.alt }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: image ? [image.src] : undefined,
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.brandName,
    description: `Private, small-group outdoor trips based in ${site.base} on ${site.lake}: ice fishing, private ice fishing tours, backcountry camping, survival training, and waterfowl, deer, and black bear hunts.`,
    url: site.url,
    areaServed: [
      { "@type": "City", name: "Barrie" },
      { "@type": "BodyOfWater", name: "Lake Simcoe" },
      { "@type": "City", name: "Toronto" },
      { "@type": "AdministrativeArea", name: "Ontario" },
    ],
    // telephone + email deliberately omitted: the values in lib/site.ts
    // are placeholders. Add them here once the real ones are confirmed.
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.brandName,
    url: site.url,
    inLanguage: "en-CA",
  };
}

export function touristTripSchema({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name,
    description,
    url: `${site.url}${path}`,
    provider: {
      "@type": "LocalBusiness",
      name: site.brandName,
      url: site.url,
    },
    // offers omitted: prices in lib/site.ts are draft placeholders.
  };
}

export function faqSchema(faqs: Array<[string, string]>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
