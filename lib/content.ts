// All site copy lives here. Anything marked PLACEHOLDER is a stand-in to replace.

export const site = {
  name: "Sam Roth",
  tagline: "Operator, PM, Founder",
  email: "sam@trainn.pro",
};

export type Project = {
  title: string;
  company?: string;
  year: string;
  summary: string;
  // Tailwind gradient classes for the card panel until a real image is added.
  gradient: string;
  // Optional screenshot in /public with its pixel size, shown whole on the gradient.
  image?: { src: string; width: number; height: number };
};

export const projects: Project[] = [
  {
    title: "Trainn",
    year: "Jun 2025",
    summary:
      "A booking platform for drop-in sports, fitness, music, and art classes for kids and adults across the Bay Area and LA.",
    gradient: "from-sky-200 via-indigo-200 to-violet-300",
    image: { src: "/work/trainn.webp", width: 2000, height: 1055 },
  },
  {
    title: "Trainn: Promo Codes + Credits",
    year: "Sept 2025",
    summary: "PLACEHOLDER: the problem, what you did, and the result.",
    gradient: "from-amber-200 via-orange-200 to-rose-300",
    image: { src: "/work/trainn-promo-codes.webp", width: 675, height: 1439 },
  },
  {
    title: "PLACEHOLDER project",
    company: "Fenix",
    year: "Year",
    summary: "PLACEHOLDER: the problem, what you did, and the result.",
    gradient: "from-emerald-200 via-teal-200 to-cyan-300",
  },
  {
    title: "PLACEHOLDER project",
    company: "Clean Focus",
    year: "Year",
    summary: "PLACEHOLDER: the problem, what you did, and the result.",
    gradient: "from-lime-200 via-emerald-200 to-teal-300",
  },
  {
    title: "PLACEHOLDER side project",
    company: "Side Project",
    year: "Year",
    summary: "PLACEHOLDER: something you built for fun.",
    gradient: "from-fuchsia-200 via-pink-200 to-rose-300",
  },
];

export const about = {
  headline:
    "15 years chasing impact locally and globally. GM/operator turned PM turned Founder. Dad of two, longboard surfer, campfire guitarist.",
  contactLine: "PLACEHOLDER: Always happy to talk product, startups, or ___.",
};

export type Row = {
  label: string;
  detail: string;
  href?: string;
  // Optional image in /public with its pixel size, shown to the right on hover.
  image?: { src: string; width: number; height: number };
};

export const career: Row[] = [
  { label: "Trainn", detail: "Founder · 2025 – Present" },
  { label: "Sunrun", detail: "Finance, Ops, Strategy & Product · 2019 – 2025" },
  { label: "Fenix", detail: "Product Strategy · 2018" },
  { label: "Clean Focus", detail: "Biz Dev · 2016 – 2017" },
  { label: "Stion", detail: "Biz Dev · 2013 – 2016" },
  { label: "The Hackett Group", detail: "Consultant · 2011 – 2013" },
];

// Photos live in /public/photos; width and height are the file's pixel size.
export const cameraRoll: {
  src: string;
  caption: string;
  width: number;
  height: number;
}[] = [
  { src: "/photos/01-dolores-park.jpg", caption: "Dolores Park, San Francisco", width: 1600, height: 1600 },
  { src: "/photos/02-great-wall-china.jpg", caption: "Great Wall, China", width: 1600, height: 2134 },
  { src: "/photos/03-aspen-bowl.jpg", caption: "Aspen Bowl", width: 1600, height: 1200 },
  { src: "/photos/04-elephants-zambia.jpg", caption: "Elephants, Zambia", width: 1600, height: 1200 },
  { src: "/photos/05-bora-bora-french-polynesia.jpg", caption: "Bora Bora, French Polynesia", width: 1600, height: 1200 },
  { src: "/photos/06-eifel-tower.jpg", caption: "Eiffel Tower, Paris", width: 1600, height: 2134 },
  { src: "/photos/07-el-salvador-surfing.jpg", caption: "Surfing, El Salvador", width: 1600, height: 1067 },
  { src: "/photos/08-gg-bridge.jpg", caption: "Golden Gate Bridge", width: 1600, height: 2134 },
  { src: "/photos/09-kao-lak-thailand.jpg", caption: "Khao Lak, Thailand", width: 1600, height: 1200 },
  { src: "/photos/10-morocco-tannery.jpg", caption: "Tannery, Morocco", width: 1600, height: 1200 },
  { src: "/photos/11-sunflowers-france.jpg", caption: "Sunflowers, France", width: 1600, height: 1200 },
  { src: "/photos/12-cape-town-helicopter.jpg", caption: "Helicopter, Cape Town", width: 953, height: 1160 },
  { src: "/photos/13-sushi-tokyo.jpg", caption: "Sushi, Tokyo", width: 1200, height: 1600 },
  { src: "/photos/14-oregon-hike.jpg", caption: "Hike, Oregon", width: 1600, height: 1200 },
  { src: "/photos/15-chichen-itza.jpg", caption: "Chichen Itza, Mexico", width: 1600, height: 1200 },
];

export const personalLists: { title: string; rows: Row[] }[] = [
  {
    title: "Favorite reads",
    rows: [
      { label: "The Hard Thing About Hard Things", detail: "Ben Horowitz" },
      { label: "Escaping the Build Trap", detail: "Melissa Perri" },
      { label: "The Power of Habit", detail: "Charles Duhigg" },
      { label: "Ready Player One", detail: "Ernest Cline" },
      { label: "Life", detail: "Keith Richards & James Fox" },
    ],
  },
  {
    title: "On repeat",
    rows: [
      { label: "Know No Better", detail: "Major Lazer · 2017" },
      { label: "Forty Licks", detail: "The Rolling Stones · 2002" },
      { label: "Bang Bang", detail: "Dispatch · 1997" },
    ],
  },
  {
    title: "Life",
    rows: [
      // TODO: show a family photo with this row once it's added.
      { label: "The fam", detail: "SF, CA" },
      {
        label: "Workout classes",
        detail: "Barry's, City is Our Gym, Asta Yoga, Body Rok",
      },
      { label: "Open mic concerts", detail: "Backyard" },
      { label: "Let's go Warriors", detail: "End of an era" },
      { label: "Steak connoisseur", detail: "Soy sauce marinade" },
      { label: "Tea over coffee", detail: "Most mornings" },
    ],
  },
];

export type Post = { title: string; year: string; summary: string; href?: string };

export const posts: Post[] = [
  {
    title: "PLACEHOLDER: From ops and finance to product",
    year: "2026",
    summary: "PLACEHOLDER: one-line summary of the post.",
  },
  {
    title: "PLACEHOLDER: What I learned building Trainn",
    year: "2026",
    summary: "PLACEHOLDER: one-line summary of the post.",
  },
  {
    title: "Vibe Coding: Key Steps and Lessons Learned",
    year: "2025",
    summary:
      "The five steps and seven lessons from building Trainn as a non-technical founder with AI coding tools.",
    href: "/writing/vibe-coding-key-steps-and-lessons-learned",
  },
];
