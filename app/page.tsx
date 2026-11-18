import Link from "next/link";
import { IMG, type SiteImage } from "@/lib/images";
import { contactMailto, site } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Activity entries                                                    */
/*                                                                     */
/* Only Ice Fishing links to a real page. Every other entry shows a    */
/* COMING SOON tag and NO link, so there are no dead routes.           */
/* ------------------------------------------------------------------ */

type Activity = {
  image: SiteImage;
  name: string;
  blurb: string;
  href?: string;
};

const EXPERIENCES: Activity[] = [
  {
    image: IMG.iceCard,
    name: "Ice Fishing",
    blurb:
      "Heated huts, drilled holes, and a guide who knows where the fish are. You bring warm layers — we bring the rest.",
    href: "/ice-fishing",
  },
  {
    image: IMG.tourCard,
    name: "Private Ice Fishing Tours",
    blurb:
      "A private day on the ice with pickup from Toronto. Your group only, start to finish.",
  },
  {
    image: IMG.campCard,
    name: "Backcountry Camping",
    blurb:
      "Overnight canoe trips into quiet lakes and Crown land country, staged from our Barrie base.",
  },
  {
    image: IMG.survivalCard,
    name: "Survival Training",
    blurb:
      "Private skills days built around you: fire, shelter, navigation, and staying calm when plans change.",
  },
];

const HUNTS: Activity[] = [
  {
    image: IMG.duckCard,
    name: "Waterfowl Hunting — Boat & Field",
    blurb:
      "Ducks and geese: layout boats on open water and field hunts over decoys, on private land and Simcoe-area waters.",
  },
  {
    image: IMG.deerCard,
    name: "White-Tailed Deer",
    blurb:
      "Stand and still hunts on private land, guided by people who hunt these woods every season.",
  },
  {
    image: IMG.bearCard,
    name: "Black Bear",
    blurb:
      "Spring and fall bear hunts over established bait sites, run to the letter of Ontario's rules.",
  },
];

function ActivityEntry({
  activity,
  flip,
  dark,
  index,
}: {
  activity: Activity;
  flip: boolean;
  dark: boolean;
  index: number;
}) {
  const border = dark ? "border-highlighter-mint/25" : "border-forest-charcoal/25";
  return (
    <article
      className={`grid gap-6 border-t py-10 md:grid-cols-12 md:gap-10 md:py-12 ${border} ${
        index % 2 === 1 ? "md:pl-[8%]" : ""
      }`}
    >
      <div className={`md:col-span-5 ${flip ? "md:order-2" : ""}`}>
        <img
          src={activity.image.src}
          alt={activity.image.alt}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover"
        />
      </div>
      <div
        className={`flex flex-col justify-between gap-6 md:col-span-7 ${
          flip ? "md:order-1" : ""
        }`}
      >
        <div>
          <p className="text-[10px] leading-[1.2] uppercase opacity-70">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="display text-display-activity mt-2 uppercase">
            {activity.name}
          </h3>
          <p className="mt-4 max-w-[52ch] text-[16px] leading-[1.4]">
            {activity.blurb}
          </p>
        </div>
        <div>
          {activity.href ? (
            <Link
              href={activity.href}
              className={`btn-outline ${dark ? "btn-outline-mint" : "btn-outline-dark"}`}
            >
              View the trip →
            </Link>
          ) : (
            <span className="tag-outline">Coming soon</span>
          )}
        </div>
      </div>
    </article>
  );
}

function DoorSection({
  id,
  label,
  title,
  activities,
  dark,
  note,
}: {
  id: string;
  label: string;
  title: string;
  activities: Activity[];
  dark: boolean;
  note?: string;
}) {
  return (
    <section
      id={id}
      className={`px-5 py-[67px] md:px-10 md:py-[70px] ${
        dark ? "bg-carbon-ink text-highlighter-mint" : "bg-topo-gray"
      }`}
    >
      <p className="text-[12px] leading-[1.2] uppercase">{label}</p>
      <h2 className="display text-display-section mt-4 uppercase">{title}</h2>
      <div className="mt-10">
        {activities.map((activity, i) => (
          <ActivityEntry
            key={activity.name}
            activity={activity}
            flip={i % 2 === 1}
            dark={dark}
            index={i}
          />
        ))}
      </div>
      {note ? (
        <p className="mt-4 max-w-[72ch] text-[12px] leading-[1.4] uppercase">
          {note}
        </p>
      ) : null}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Homepage                                                            */
/* ------------------------------------------------------------------ */

const TRUST_ITEMS = [
  "Private only — never mixed groups",
  "All gear included",
  "Small groups",
  "Toronto pickup",
  "Private land access",
];

const SEASONS: Array<[string, string]> = [
  ["Winter", "Ice fishing + private tours"],
  ["Spring", "Black bear + survival training"],
  ["Summer", "Backcountry camping + survival training"],
  ["Fall", "Waterfowl + deer + black bear"],
];

const STEPS: Array<[string, string, string]> = [
  [
    "01",
    "Pick your day",
    "Tell us the trip, the date, and who's coming. Every trip is private, so the day is built around your group.",
  ],
  [
    "02",
    "We check the details",
    "Licences, ice conditions, weather, and access. If something doesn't work, we say so before you pay anything.",
  ],
  [
    "03",
    "Meet us at the lake",
    "Toronto pickup, or meet us in Barrie. The gear is ready when you arrive.",
  ],
];

export default function HomePage() {
  return (
    <>
      {/* HERO — full-bleed photo, massive display headline overlapping it. */}
      <section className="relative h-[100svh] min-h-[560px] overflow-hidden bg-carbon-ink">
        <img
          src={IMG.heroHome.src}
          alt={IMG.heroHome.alt}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Legibility scrims, top (nav) and bottom (headline). */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/55 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 px-5 pb-10 text-highlighter-mint hero-text-halo md:px-10 md:pb-12">
          <p className="text-[12px] leading-[1.2] uppercase">
            {site.base} — {site.lake}
          </p>
          <h1 className="display text-display-hero hero-display-outline mt-4 uppercase">
            <span className="block whitespace-nowrap">Wild Simcoe</span>
            <span className="block whitespace-nowrap">Outfitters</span>
          </h1>
          <p className="mt-4 max-w-[46ch] text-[16px] leading-[1.4]">
            {site.tagline} Private, guided days on the ice, in the field, and
            in the bush — {site.driveTime.toLowerCase()}.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/ice-fishing" className="btn-outline btn-outline-mint">
              See ice fishing →
            </Link>
            <a href="#contact" className="btn-outline btn-outline-mint">
              Check availability
            </a>
          </div>
        </div>

        {/* Scroll cue: small 1px-stroke circle, bottom-right. */}
        <a
          href="#about"
          aria-label="Scroll down"
          className="absolute right-5 bottom-10 hidden h-10 w-10 items-center justify-center rounded-full border border-highlighter-mint text-highlighter-mint md:flex"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7 1v11M2 8l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </a>
      </section>

      {/* TRUST STRIP */}
      <section
        aria-label="What every trip includes"
        className="border-y border-forest-charcoal/25 bg-topo-gray"
      >
        <ul className="grid grid-cols-2 md:grid-cols-5">
          {TRUST_ITEMS.map((item, i) => (
            <li
              key={item}
              className={`px-5 py-5 text-[12px] leading-[1.2] uppercase md:px-6 ${
                i > 0 ? "border-l border-forest-charcoal/25" : ""
              } ${i >= 2 ? "max-md:border-t max-md:border-forest-charcoal/25" : ""} ${
                i === 2 ? "max-md:border-l-0" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* INTRO — the company, in short. */}
      <section
        id="about"
        className="bg-topo-gray px-5 py-[67px] md:px-10 md:py-[70px]"
      >
        <div className="grid gap-6 md:grid-cols-12">
          <p className="text-[12px] leading-[1.2] uppercase md:col-span-3">
            The outfitter
          </p>
          <div className="md:col-span-7 md:col-start-5">
            <p className="text-[16px] leading-[1.5]">
              We are a small outfitter based in {site.base}, on {site.lake} —{" "}
              {site.driveTime.toLowerCase()}. We run private, small-group days
              outside: on the ice in winter, in the bush the rest of the year.
              Every trip is guided, every piece of gear is provided, and your
              group is never mixed with strangers.
            </p>
            <p className="mt-6 text-[16px] leading-[1.5]">
              Winter starts with{" "}
              <a href="/ice-fishing" className="serif-link text-forest-charcoal">
                ice fishing
              </a>
              . The rest of the year runs through the two doors below.
            </p>
          </div>
        </div>
      </section>

      {/* DOOR 01 — EXPERIENCES (dark band) */}
      <DoorSection
        id="experiences"
        label="Door 01 — No licence needed"
        title="Experiences"
        activities={EXPERIENCES}
        dark
      />

      {/* DOOR 02 — HUNTS (light band, visually separated) */}
      <DoorSection
        id="hunts"
        label="Door 02 — Licensed hunters"
        title="Hunts"
        activities={HUNTS}
        dark={false}
        note="Hunts are for licensed hunters only. Licences, tags, and eligibility are checked before any booking is confirmed."
      />

      {/* FOUR SEASONS — tilted photo cluster on a dark band. */}
      <section className="overflow-hidden bg-carbon-ink px-5 py-[67px] text-highlighter-mint md:px-10 md:py-[70px]">
        <div className="relative flex flex-col gap-8 md:h-[420px] md:flex-row md:items-start">
          <img
            src={IMG.clusterSnowmobile.src}
            alt={IMG.clusterSnowmobile.alt}
            loading="lazy"
            className="w-full max-w-[360px] rotate-[-8deg] object-cover md:absolute md:top-0 md:left-0 md:w-[320px]"
          />
          <img
            src={IMG.clusterTent.src}
            alt={IMG.clusterTent.alt}
            loading="lazy"
            className="w-full max-w-[300px] rotate-[12deg] self-end object-cover md:absolute md:top-16 md:left-[260px] md:w-[280px] md:self-auto"
          />
          <img
            src={IMG.clusterLake.src}
            alt={IMG.clusterLake.alt}
            loading="lazy"
            className="w-full max-w-[320px] rotate-[4deg] object-cover md:absolute md:top-4 md:left-[500px] md:w-[300px]"
          />
          {/* Circular icon badge, style-guide marker. */}
          <span
            aria-hidden="true"
            className="hidden h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-highlighter-mint md:absolute md:top-0 md:right-0 md:flex"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M9 4.5v9M4.5 9h9" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </span>
        </div>

        <h2 className="display text-display-section mt-14 uppercase md:mt-4">
          Four seasons
        </h2>
        <p className="mt-4 max-w-[60ch] text-[16px] leading-[1.4]">
          One base, one guide team, all year. Most guests come back for the
          next season — winter on the ice, spring and fall in the field,
          summer under canvas.
        </p>
        <dl className="mt-10">
          {SEASONS.map(([season, activities]) => (
            <div
              key={season}
              className="flex items-baseline justify-between gap-6 border-t border-highlighter-mint/25 py-4 last:border-b"
            >
              <dt className="display text-[40px] leading-[0.9] uppercase">
                {season}
              </dt>
              <dd className="text-right text-[12px] leading-[1.2] uppercase">
                {activities}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="bg-topo-gray px-5 py-[67px] md:px-10 md:py-[70px]"
      >
        <p className="text-[12px] leading-[1.2] uppercase">How it works</p>
        <h2 className="display text-display-section mt-4 uppercase">
          Three steps
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {STEPS.map(([num, title, body]) => (
            <div key={num} className="border-t border-forest-charcoal/25 pt-4">
              <p className="display text-[48px] leading-[0.9]">{num}</p>
              <h3 className="mt-4 text-[12px] leading-[1.2] font-bold uppercase">
                {title}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.4]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GUIDES — generic on purpose: no invented names or credentials.
          Matt drops the partner's real bio in here. */}
      <section className="bg-carbon-ink px-5 py-[67px] text-highlighter-mint md:px-10 md:py-[70px]">
        <div className="grid items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <img
              src={IMG.guideBand.src}
              alt={IMG.guideBand.alt}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
          <div className="md:col-span-6">
            <p className="text-[12px] leading-[1.2] uppercase">The guides</p>
            <h2 className="display text-display-activity mt-4 uppercase">
              Local guides, private land
            </h2>
            <p className="mt-6 max-w-[56ch] text-[16px] leading-[1.5]">
              Our guides live here. They fish this lake, hunt these woods, and
              know which access points, fields, and bait sites are worth your
              time — because they have been using them for years. Trips run
              through private land connections and local knowledge you cannot
              buy off a map.
            </p>
            <p className="mt-6">
              <span className="tag-outline">Guide profiles — to be added</span>
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-topo-gray px-5 py-[67px] md:px-10 md:py-[70px]"
      >
        <p className="text-[12px] leading-[1.2] uppercase">Booking</p>
        <h2 className="display text-display-section mt-4 uppercase">
          Book your day outside
        </h2>
        <p className="mt-6 max-w-[56ch] text-[16px] leading-[1.5]">
          Tell us the trip, the date, and who&apos;s coming — we&apos;ll take it
          from there.
        </p>
        <p className="mt-6 text-[16px] leading-[1.5]">
          <a
            href={contactMailto("Trip enquiry")}
            className="serif-link text-forest-charcoal"
          >
            {site.email}
          </a>
        </p>
        <p className="mt-2 text-[12px] leading-[1.2] uppercase">{site.phone}</p>
        <p className="mt-8">
          <a
            href={contactMailto("Trip enquiry")}
            className="btn-outline btn-outline-dark"
          >
            Email us
          </a>
        </p>
      </section>
    </>
  );
}
