import type { Metadata } from "next";
import { Bebas_Neue, JetBrains_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import TopBar from "@/components/TopBar";
import { IMG } from "@/lib/images";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

/* Display face (style guide substitute for F37stout) + mono face. */
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brandName} — ${site.tagline}`,
    template: `%s — ${site.brandName}`,
  },
  description: `Private, small-group outdoor trips based in ${site.base} on ${site.lake}: ice fishing, private ice fishing tours, backcountry camping, survival training, and waterfowl, deer, and black bear hunts. ${site.driveTime}.`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: site.url,
    siteName: site.brandName,
    title: `${site.brandName} — ${site.tagline}`,
    description: `Private, small-group outdoor trips based in ${site.base} on ${site.lake}. ${site.driveTime}.`,
    images: [{ url: IMG.heroHome.src, alt: IMG.heroHome.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brandName} — ${site.tagline}`,
    description: `Private, small-group outdoor trips based in ${site.base} on ${site.lake}. ${site.driveTime}.`,
    images: [IMG.heroHome.src],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${bebas.variable} ${jetbrains.variable} antialiased`}
      >
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <TopBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
