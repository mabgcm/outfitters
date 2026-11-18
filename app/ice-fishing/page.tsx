import type { Metadata } from "next";
import { IMG } from "@/lib/images";
import { contactMailto, site } from "@/lib/site";

/**
 * ICE FISHING LANDING PAGE — the template future activity pages copy.
 * Sections: hero / who it's for / included + not included / licence box /
 * sample day / season + logistics / safety + cancellation / photos / FAQ / CTA.
 *
 * All service details, times, prices, and policies on this page are DRAFT
 * copy Matt will verify. See README.md ("Placeholders Matt must replace").
 */

export const metadata: Metadata = {
  title: `Ice Fishing — ${site.brandName}`,
  description: `Private, guided ice fishing days on ${site.lake} from ${site.base}. Heated huts, all gear included, Toronto pickup. Season ${site.iceSeason.toLowerCase()}.`,
};

const WHO = [
  [
    "First-timers",
    "Never held a rod? Good. The guide drills the holes, sets the lines, and shows you what to do. Most of our guests have never ice fished before.",
  ],
  [
    "Families",
    "Kids are welcome with a parent or guardian. Heated huts, hot drinks, and short walks from the truck to the ice.",
  ],
  [
    "GTA day-trippers",
    "Leave Toronto in the morning, fish all day, be home for dinner. Pickup is available, or meet us at the lake.",
  ],
  [
    "Small groups",
    "Friends, birthdays, team days. Your group only — up to 6 guests per guide, never mixed with strangers.",
  ],
];

const INCLUDED = [
  "Heated ice hut, set up before you arrive",
  "Rods, reels, tackle, and bait",
  "Holes drilled, lines set, fish finder on the ice",
  "Transport from shore to the hut and back",
  "Hot drinks through the day",
  "Your catch cleaned and bagged, within Ontario limits",
  "A guide with you all day",
];

const NOT_INCLUDED = [
  "Ontario fishing licence — your own responsibility (see below)",
  "Warm clothing and waterproof boots",
  "Lunch — bring your own, or ask us about options when booking",
  "Gratuities",
];

const DAY_PLAN: Array<[string, string]> = [
  ["07:30", "Toronto pickup (pickup point confirmed at booking)"],
  ["09:00", "Arrive at the lake, gear up, walk the ice plan with your guide"],
  ["09:30", "On the ice — lines down"],
  ["12:30", "Warm-up break and lunch in the hut"],
  ["15:30", "Last lines, pack up, catch cleaned and bagged"],
  ["17:00", "Back in Toronto (approximate)"],
];

const FAQS: Array<[string, string]> = [
  [
    "Do I need experience?",
    "No. Most guests are first-timers. The guide handles the holes, the gear, and the technique — you hold the rod.",
  ],
  [
    "Do I need a fishing licence?",
    "Yes. An Ontario fishing licence is your own responsibility and is not included in the trip price. One-day licences are available online from the Ontario government. Bring proof of your licence on the day.",
  ],
  [
    "What should I wear?",
    "Warm layers, a windproof outer layer, waterproof boots, gloves, and a hat. The hut is heated, but you will spend time standing on the ice. Sunglasses help — the glare off the snow is real.",
  ],
  [
    "Can kids come?",
    "Yes, with a parent or guardian. Children stay with their group in and around the hut, and the guide keeps the day moving at a pace that works for them.",
  ],
  [
    "Do we keep the fish?",
    "Within Ontario's limits for the day, yes — the guide cleans and bags your catch. Anything outside the limit goes back in the lake.",
  ],
  [
    "What if the ice isn't safe?",
    "Ice decides the dates. We check conditions daily, and if the ice or the weather isn't safe, we reschedule or refund — your choice. Never fish on ice you haven't checked.",
  ],
];

export default function IceFishingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[92svh] min-h-[520px] overflow-hidden bg-carbon-ink">
        <img
          src={IMG.iceHero.src}
          alt={IMG.iceHero.alt}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/55 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 px-5 pb-10 text-highlighter-mint md:px-10 md:pb-12">
          <p className="text-[12px] leading-[1.2] uppercase">
            {site.lake} — Winter
          </p>
          <h1 className="display text-display-hero mt-4 uppercase">
            Ice fishing
          </h1>
          <p className="mt-4 max-w-[46ch] text-[16px] leading-[1.4]">
            A private, guided day on the hardest-fished ice in Ontario. Heated
            hut, all gear included, your group only.
          </p>
          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-[12px] leading-[1.2] uppercase">
            <div>
              <dt className="opacity-70">Season</dt>
              <dd className="mt-1">{site.iceSeason}</dd>
            </div>
            <div>
              <dt className="opacity-70">Group size</dt>
              <dd className="mt-1">Up to 6 per guide</dd>
            </div>
            <div>
              <dt className="opacity-70">From</dt>
              <dd className="mt-1">
                ${site.prices.iceFishingFrom} / person
              </dd>
            </div>
          </dl>
          <div className="mt-6">
            <a href="#availability" className="btn-outline btn-outline-mint">
              Check availability
            </a>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-topo-gray px-5 py-[67px] md:px-10 md:py-[70px]">
        <p className="text-[12px] leading-[1.2] uppercase">Who it&apos;s for</p>
        <h2 className="display text-display-section mt-4 uppercase">
          Built for beginners
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {WHO.map(([title, body]) => (
            <div key={title} className="border-t border-forest-charcoal/25 pt-4">
              <h3 className="text-[12px] leading-[1.2] font-bold uppercase">
                {title}
              </h3>
              <p className="mt-3 max-w-[52ch] text-[16px] leading-[1.4]">
                {body}
              </p>
            </div>
          ))}
        </div>
        <img
          src={IMG.iceSup4.src}
          alt={IMG.iceSup4.alt}
          loading="lazy"
          className="mt-12 aspect-[16/9] w-full object-cover md:aspect-[21/9]"
        />
      </section>

      {/* INCLUDED / NOT INCLUDED */}
      <section className="bg-carbon-ink px-5 py-[67px] text-highlighter-mint md:px-10 md:py-[70px]">
        <p className="text-[12px] leading-[1.2] uppercase">The fine print</p>
        <h2 className="display text-display-section mt-4 uppercase">
          What&apos;s included
        </h2>
        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-[12px] leading-[1.2] font-bold uppercase">
              Included in the price
            </h3>
            <ul className="mt-4">
              {INCLUDED.map((item) => (
                <li
                  key={item}
                  className="border-t border-highlighter-mint/25 py-3 text-[16px] leading-[1.4] last:border-b"
                >
                  + {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[12px] leading-[1.2] font-bold uppercase">
              Not included
            </h3>
            <ul className="mt-4">
              {NOT_INCLUDED.map((item) => (
                <li
                  key={item}
                  className="border-t border-highlighter-mint/25 py-3 text-[16px] leading-[1.4] last:border-b"
                >
                  — {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* LICENCE BOX — plain language, up front. */}
        <div className="mt-12 border border-highlighter-mint p-5 md:p-6">
          <h3 className="text-[12px] leading-[1.2] font-bold uppercase">
            Licence — read this first
          </h3>
          <p className="mt-3 max-w-[72ch] text-[16px] leading-[1.5]">
            An Ontario fishing licence is your own responsibility. It is not
            included in the trip price and we cannot sell you one on the ice.
            One-day licences are available online from the Ontario government —
            buy yours before the trip and bring proof with you. No licence, no
            lines in the water. No exceptions.
          </p>
        </div>
      </section>

      {/* SAMPLE DAY */}
      <section className="bg-topo-gray px-5 py-[67px] md:px-10 md:py-[70px]">
        <p className="text-[12px] leading-[1.2] uppercase">A sample day</p>
        <h2 className="display text-display-section mt-4 uppercase">
          How the day runs
        </h2>
        <p className="mt-4 max-w-[60ch] text-[16px] leading-[1.4]">
          Times are approximate and shift with ice conditions, weather, and
          where the fish are. The guide sets the plan on the morning of the
          trip.
        </p>
        <dl className="mt-10">
          {DAY_PLAN.map(([time, what]) => (
            <div
              key={time}
              className="flex items-baseline gap-6 border-t border-forest-charcoal/25 py-4 last:border-b md:gap-12"
            >
              <dt className="display w-20 shrink-0 text-[40px] leading-[0.9]">
                {time}
              </dt>
              <dd className="text-[16px] leading-[1.4]">{what}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* SEASON + LOGISTICS */}
      <section className="bg-carbon-ink px-5 py-[67px] text-highlighter-mint md:px-10 md:py-[70px]">
        <p className="text-[12px] leading-[1.2] uppercase">Season + logistics</p>
        <h2 className="display text-display-section mt-4 uppercase">
          Ice decides
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div className="border-t border-highlighter-mint/25 pt-4">
            <h3 className="text-[12px] leading-[1.2] font-bold uppercase">
              Season
            </h3>
            <p className="mt-3 max-w-[52ch] text-[16px] leading-[1.4]">
              Roughly {site.iceSeason.toLowerCase()}. Exact dates are set by
              ice conditions every year — we open bookings when the ice is
              checked and safe, and we close them the day it stops being safe.
            </p>
          </div>
          <div className="border-t border-highlighter-mint/25 pt-4">
            <h3 className="text-[12px] leading-[1.2] font-bold uppercase">
              Group size
            </h3>
            <p className="mt-3 max-w-[52ch] text-[16px] leading-[1.4]">
              Up to 6 guests per guide. Larger groups run with extra guides and
              extra huts — ask when booking.
            </p>
          </div>
          <div className="border-t border-highlighter-mint/25 pt-4">
            <h3 className="text-[12px] leading-[1.2] font-bold uppercase">
              Toronto pickup
            </h3>
            <p className="mt-3 max-w-[52ch] text-[16px] leading-[1.4]">
              Pickup from Toronto is available on private tours — from $
              {site.prices.privateTourFrom} per person. The pickup point is
              confirmed when you book.
            </p>
          </div>
          <div className="border-t border-highlighter-mint/25 pt-4">
            <h3 className="text-[12px] leading-[1.2] font-bold uppercase">
              Meeting point
            </h3>
            <p className="mt-3 max-w-[52ch] text-[16px] leading-[1.4]">
              Meet us at the lake access point near {site.base}. The exact pin
              and parking details are sent after booking — access points change
              with ice conditions.
            </p>
          </div>
        </div>

        {/* SAFETY + CANCELLATION */}
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="display text-display-small uppercase">Safety</h3>
            <p className="mt-4 max-w-[56ch] text-[16px] leading-[1.5]">
              Ice is checked daily before any guest steps on it. The guide
              carries ice picks, a throw rope, and first aid. Hut heaters are
              ventilated, and nobody fishes alone on the ice. If conditions
              turn, the day ends early — no discussion, no refund debate.
            </p>
          </div>
          <div>
            <h3 className="display text-display-small uppercase">
              Weather + cancellation
            </h3>
            <p className="mt-4 max-w-[56ch] text-[16px] leading-[1.5]">
              If we cancel for ice or severe weather: full refund or a new
              date, your choice. If you cancel 7 or more days out: full refund.
              Inside 7 days: one free reschedule, no refund. Trips run in cold,
              snow, and wind — they do not run on unsafe ice.
            </p>
          </div>
        </div>
      </section>

      {/* PHOTO CLUSTER — tilted, on a light band with dark gaps. */}
      <section className="overflow-hidden bg-topo-gray px-5 py-[67px] md:px-10 md:py-[70px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-center">
          <img
            src={IMG.iceSup1.src}
            alt={IMG.iceSup1.alt}
            loading="lazy"
            className="w-full max-w-[360px] rotate-[-8deg] object-cover"
          />
          <img
            src={IMG.iceSup2.src}
            alt={IMG.iceSup2.alt}
            loading="lazy"
            className="w-full max-w-[300px] rotate-[12deg] self-end object-cover md:-ml-10 md:self-auto"
          />
          <img
            src={IMG.iceSup3.src}
            alt={IMG.iceSup3.alt}
            loading="lazy"
            className="w-full max-w-[340px] rotate-[4deg] object-cover md:-ml-10"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-topo-gray px-5 pb-[67px] md:px-10 md:pb-[70px]">
        <p className="text-[12px] leading-[1.2] uppercase">Questions</p>
        <h2 className="display text-display-section mt-4 uppercase">
          Before you ask
        </h2>
        <div className="mt-10">
          {FAQS.map(([q, a]) => (
            <div
              key={q}
              className="grid gap-2 border-t border-forest-charcoal/25 py-5 last:border-b md:grid-cols-12 md:gap-6"
            >
              <h3 className="text-[12px] leading-[1.3] font-bold uppercase md:col-span-4">
                {q}
              </h3>
              <p className="max-w-[64ch] text-[16px] leading-[1.4] md:col-span-8">
                {a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — mint accent surface. */}
      <section
        id="availability"
        className="bg-highlighter-mint px-5 py-[67px] text-carbon-ink md:px-10 md:py-[70px]"
      >
        <p className="text-[12px] leading-[1.2] uppercase">
          Season: {site.iceSeason}
        </p>
        <h2 className="display text-display-section mt-4 uppercase">
          Check availability
        </h2>
        <p className="mt-6 max-w-[56ch] text-[16px] leading-[1.5]">
          Ice season is short and weekends go first. Tell us your date and
          group size — from ${site.prices.iceFishingFrom} per person for a day
          on the ice, from ${site.prices.privateTourFrom} per person with
          Toronto pickup.
        </p>
        <p className="mt-6 text-[16px] leading-[1.5]">
          <a
            href={contactMailto("Ice fishing availability")}
            className="serif-link text-carbon-ink"
          >
            {site.email}
          </a>
        </p>
        <p className="mt-2 text-[12px] leading-[1.2] uppercase">{site.phone}</p>
        <p className="mt-8">
          <a
            href={contactMailto("Ice fishing availability")}
            className="btn-outline btn-outline-ink"
          >
            Email us about ice fishing
          </a>
        </p>
      </section>
    </>
  );
}
