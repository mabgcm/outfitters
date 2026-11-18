import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Footer: wordmark + nav + placeholder contact, with the style guide's
 * right-aligned footer caption block.
 */
export default function Footer() {
  return (
    <footer className="bg-carbon-ink px-5 pt-[67px] pb-10 text-highlighter-mint md:px-10">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="display text-display-small uppercase">
            {site.brandName}
          </p>
          <p className="mt-4 text-[12px] leading-[1.2] uppercase">
            {site.tagline}
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-col gap-2 text-[12px] leading-[1.2] uppercase"
        >
          <Link href="/" className="underline-offset-4 hover:underline">
            Home
          </Link>
          <Link
            href="/ice-fishing"
            className="underline-offset-4 hover:underline"
          >
            Ice fishing
          </Link>
          <a href="/#contact" className="underline-offset-4 hover:underline">
            Contact
          </a>
        </nav>

        <div className="text-[12px] leading-[1.2] uppercase">
          <p>
            <a
              href={`mailto:${site.email}`}
              className="underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </p>
          <p className="mt-2">
            <a
              href={site.phoneHref}
              className="underline-offset-4 hover:underline"
            >
              {site.phone}
            </a>
          </p>
        </div>
      </div>

      {/* Footer caption block: right-aligned, small mono caps. */}
      <div className="mt-[67px] text-right text-[10px] leading-[1.2] uppercase md:mt-[190px]">
        <p>
          {site.base} — {site.lake} — Canada
        </p>
        <p className="mt-1">Private trips only</p>
        <p className="mt-1">
          © 2026 {site.brandName} — Working name, photography: Pexels
        </p>
      </div>
    </footer>
  );
}
