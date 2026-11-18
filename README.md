# Wild Simcoe Outfitters — website (v1)

> Working brand name. Matt has NOT chosen a business name yet — see
> "Placeholders Matt must replace" below.

Private, small-group outdoor trips based in Barrie, Ontario, on Lake Simcoe:
ice fishing, private ice fishing tours, backcountry camping, survival
training, waterfowl hunting (boat & field), white-tailed
deer, and black bear.

Built with Next.js (App Router) + TypeScript + Tailwind CSS v4. Design
adapts the San Rita style guide (field-guide / topo-map look: Bebas Neue
display type, JetBrains Mono body, Highlighter Mint `#e2ffcc` on Carbon Ink
`#161b13`, 0px radius, no shadows, 1px outlined buttons, tilted photo
clusters, full-bleed alternating bands).

## Pages in v1

- `/` — Homepage: sells the company. All 7 activities appear as headings,
  grouped into two doors (Experiences / Hunts). ONLY Ice Fishing links to a
  real page; the other 6 show a "Coming soon" tag and no link.
- `/ice-fishing` — Full landing-page template future activity pages copy:
  hero, who it's for, included/not included, licence box, sample day,
  season + logistics, safety + cancellation, photo cluster, FAQ, CTA.

## Run it locally

```bash
npm install
npm run dev     # http://localhost:3000
```

Production check:

```bash
npm run build
npm run start   # http://localhost:3000
```

## Rename the business (one file)

All brand/contact details live in `lib/site.ts` — brand name, tagline,
email, phone, prices, ice season. Edit that file and the whole site
renames. (The `name` field in `package.json` is cosmetic; update it too
if you like.)

## Images

All photography is free-licence stock from Pexels, served from the Pexels
CDN (plain `<img>` tags — no image optimizer needed at deploy time).
Every URL was verified on 2026-11-18 (HTTP 200, real JPEG bytes).
Image URLs live in `lib/images.ts`; credits in
`public/images/CREDITS.md`. Matt plans to replace them with his own photos.

## Placeholders Matt must replace

Everything below is invented draft content. Do not launch with it
unreviewed.

1. **Business name** — "Wild Simcoe Outfitters" is a working name only.
   Rename in `lib/site.ts` (and `package.json`).
2. **Contact details** — email `hello@wildsimcoeoutfitters.com` and phone
   `+1 (705) 555-0100` are fake (555 numbers are fictional). Replace in
   `lib/site.ts`. No social links are set up yet.
3. **Prices** — "from $89/person" (ice fishing day) and "from $169/person"
   (with Toronto pickup) are draft placeholders, roughly in line with the
   local market (hut-style days $60–100, private Toronto-pickup tours
   $159–169). Replace in `lib/site.ts` (`site.prices`).
4. **Dates & times** — ice season "mid-January to mid-March" is the usual
   window; exact dates depend on ice conditions. The sample day plan times
   (07:30 pickup, 17:00 return) are invented.
5. **Pickup & meeting point** — Toronto pickup point is "confirmed at
   booking" and the lake access point/pin is "sent after booking". Both
   need real locations.
6. **Group size** — "up to 6 guests per guide" is invented.
7. **Included/not included + lunch** — the included list (heated hut, gear,
   bait, hot drinks, fish cleaning) and "bring your own lunch" are draft
   service details. Verify against what is actually provided.
8. **Safety + cancellation policy** — the 7-day cancellation terms and
   safety wording are invented draft policy. Replace with the real policy
   (and check it with the partner/insurer).
9. **Guide section** — deliberately generic: no guide names, bios, or
   credentials are shown. The "Guide profiles — to be added" tag marks
   where the partner's real bio goes. Do not invent credentials.
10. **All other copy** — every activity blurb, FAQ answer, and section
    description is draft text Matt will rewrite. No testimonials, reviews,
    licence numbers, or business registration claims appear anywhere —
    none were invented.
11. **Photos** — all Pexels stock. Replace with real trip photos
    (`lib/images.ts` + `public/images/CREDITS.md`).
12. **Other 6 landing pages** — not built yet: Private Ice Fishing Tours,
    Backcountry Camping, Survival Training, Waterfowl Hunting
    (Boat & Field), White-Tailed Deer, Black Bear. Copy
    `app/ice-fishing/page.tsx` as the template.

## Deploy

Matt deploys himself. This repo is deploy-ready for Vercel (or any
Next.js host): `npm run build` must pass, no environment variables are
required, and there is no database or API dependency.
