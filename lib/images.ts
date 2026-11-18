/**
 * All photography is free-licence stock from Pexels (Pexels License).
 * Every URL below was verified on 2026-11-18: HTTP 200 with real JPEG bytes.
 * Matt plans to replace these with his own photos.
 *
 * Credits: see public/images/CREDITS.md
 *
 * Pexels CDN sizing params are baked into the URLs (w=1920 heroes,
 * w=1200 cards, w=900 supporting). Plain <img> tags are used on purpose:
 * the Pexels CDN already serves sized images, so no image optimizer
 * is needed at deploy time.
 */

export type SiteImage = { src: string; alt: string };

export const IMG = {
  heroHome: {
    src: "https://images.pexels.com/photos/6831099/pexels-photo-6831099.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Fishermen ice fishing on a frozen lake with a yellow tent under a cloudy sky",
  },
  iceCard: {
    src: "https://images.pexels.com/photos/6830987/pexels-photo-6830987.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Bearded man ice fishing, holding a fresh catch on snow-covered ground",
  },
  tourCard: {
    src: "https://images.pexels.com/photos/6831095/pexels-photo-6831095.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Two fishermen setting up ice fishing equipment on a frozen lake with a yellow tent",
  },
  duckCard: {
    src: "https://images.pexels.com/photos/30460030/pexels-photo-30460030/free-photo-of-mallard-ducks-swimming-in-winter-pond.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Mallard ducks swimming in a winter pond",
  },
  deerCard: {
    src: "https://images.pexels.com/photos/30259462/pexels-photo-30259462/free-photo-of-white-tailed-deer-in-snowy-winnipeg-forest.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "White-tailed deer standing in a snowy forest",
  },
  bearCard: {
    src: "https://images.pexels.com/photos/28933883/pexels-photo-28933883/free-photo-of-american-black-bear-resting-on-log-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "American black bear resting on a log outdoors",
  },
  campCard: {
    src: "https://images.pexels.com/photos/38848613/pexels-photo-38848613/free-photo-of-serene-lakeside-beach-with-canoes-in-ontario.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Canoes on a lakeside beach in Ontario",
  },
  survivalCard: {
    src: "https://images.pexels.com/photos/30663377/pexels-photo-30663377/free-photo-of-campfire-burning-in-forest-setting.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Campfire burning in a forest setting",
  },
  fallsCard: {
    src: "https://images.pexels.com/photos/33015839/pexels-photo-33015839/free-photo-of-serene-twin-waterfalls-in-lush-forest-setting.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Twin waterfalls cascading in a lush forest",
  },
  clusterSnowmobile: {
    src: "https://images.pexels.com/photos/31761193/pexels-photo-31761193/free-photo-of-winter-scene-in-chevery-with-snowmobile.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Snowmobile by a frozen lake in a winter landscape",
  },
  clusterTent: {
    src: "https://images.pexels.com/photos/20305120/pexels-photo-20305120/free-photo-of-bonfire-by-tent-among-snow-in-winter.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Bonfire burning beside a tent in the snow",
  },
  clusterLake: {
    src: "https://images.pexels.com/photos/18643223/pexels-photo-18643223/free-photo-of-frozen-lake-in-snow.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Frozen lake covered in snow",
  },
  guideBand: {
    src: "https://images.pexels.com/photos/24030100/pexels-photo-24030100/free-photo-of-men-fishing-on-frozen-lake.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Group of adults ice fishing together on a frozen lake",
  },
  iceHero: {
    src: "https://images.pexels.com/photos/37657116/pexels-photo-37657116/free-photo-of-winter-ice-fishing-on-frozen-lake-in-ukraine.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "People ice fishing on a frozen lake, footprints crossing the snow",
  },
  iceSup1: {
    src: "https://images.pexels.com/photos/6830975/pexels-photo-6830975.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Caught pike lying beside an ice fishing hole on a snowy frozen lake",
  },
  iceSup2: {
    src: "https://images.pexels.com/photos/6830972/pexels-photo-6830972.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Bearded man catching a fish while ice fishing on a snowy lake",
  },
  iceSup3: {
    src: "https://images.pexels.com/photos/6831109/pexels-photo-6831109.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Two men ice fishing near a yellow tent on a frozen lake",
  },
  iceSup4: {
    src: "https://images.pexels.com/photos/6830985/pexels-photo-6830985.jpeg?auto=compress&cs=tinysrgb&w=900",
    alt: "Fisherman holding a freshly caught fish through the ice on a snowy day",
  },
} satisfies Record<string, SiteImage>;
