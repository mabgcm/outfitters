import Link from "next/link";
import { contactMailto, site } from "@/lib/site";

/**
 * Minimal top bar (style guide): wordmark left, ONE outlined CTA right.
 * Absolutely positioned so it sits over each page's full-bleed hero.
 * No sticky behaviour.
 */
export default function TopBar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between gap-3 px-4 py-5 md:px-10">
      <Link
        href="/"
        aria-label={`${site.brandName} — home`}
        className="display text-[20px] leading-[0.9] whitespace-nowrap text-highlighter-mint uppercase md:text-[40px]"
      >
        {site.brandName}
      </Link>
      <a
        href={contactMailto("Trip enquiry")}
        className="btn-outline btn-outline-sm btn-outline-mint shrink-0"
      >
        Check availability
      </a>
    </header>
  );
}
