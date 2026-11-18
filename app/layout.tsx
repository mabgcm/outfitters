import type { Metadata } from "next";
import { Bebas_Neue, JetBrains_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
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
  title: `${site.brandName} — ${site.tagline}`,
  description: `Private, small-group outdoor trips based in ${site.base} on ${site.lake}: ice fishing, private ice fishing tours, backcountry camping, survival training, waterfall day trips, duck, deer and black bear hunts. ${site.driveTime}.`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${bebas.variable} ${jetbrains.variable} antialiased`}
      >
        <TopBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
