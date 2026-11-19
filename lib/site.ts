/**
 * SINGLE SOURCE OF TRUTH for brand + contact details.
 *
 * The business name has NOT been chosen yet. "Wild Simcoe Outfitters" is a
 * working placeholder. Rename the whole site by editing this file only
 * (plus the "name" field in package.json, which is cosmetic).
 *
 * EVERYTHING marked PLACEHOLDER below is invented draft content that Matt
 * must replace with real details before launch. See README.md
 * ("Placeholders Matt must replace") for the full list.
 */

export const site = {
  // PLACEHOLDER — working brand name, not yet chosen.
  brandName: "Wild Simcoe Outfitters",
  brandShort: "Wild Simcoe",
  tagline: "Private wilderness, an hour from Toronto.",
  base: "Barrie, Ontario",
  lake: "Lake Simcoe",
  driveTime: "About 70 minutes north of Toronto",

  // Live site URL — metadataBase, canonical base, and sitemap base.
  // Change to the real domain when it is registered.
  url: "https://outfitters-ten.vercel.app",

  // PLACEHOLDER — fake contact details. 555 numbers are fictional by design.
  email: "hello@wildsimcoeoutfitters.com",
  phone: "+1 (705) 555-0100",
  phoneHref: "tel:+17055550100",

  // PLACEHOLDER — social links not set up yet.
  instagramUrl: "",

  // PLACEHOLDER PRICING — draft only, roughly in line with the local market
  // (hut-style days $60–100/person, private Toronto-pickup tours $159–169).
  prices: {
    iceFishingFrom: 89,
    privateTourFrom: 169,
  },

  // Ice season is roughly mid-January to mid-March; exact dates are decided
  // by ice conditions every year.
  iceSeason: "Mid-January to mid-March",
};

export const contactMailto = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
