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
    company: "Founder",
    year: "Now",
    summary: "PLACEHOLDER: one line on what Trainn is and who it's for.",
    gradient: "from-sky-200 via-indigo-200 to-violet-300",
    image: { src: "/work/trainn.webp", width: 2000, height: 1055 },
  },
  {
    title: "Trainn: Promo Codes + Credits",
    year: "Sept 2025",
    summary: "PLACEHOLDER: the problem, what you did, and the result.",
    gradient: "from-amber-200 via-orange-200 to-rose-300",
    image: { src: "/work/trainn-promo-codes.jpg", width: 718, height: 1488 },
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
    "Founder and former ops, strategy, and finance leader moving into product management. PLACEHOLDER: a personal line, like family, hometown, and what you do for fun.",
  bio: [
    "I'm interested in AI developer tools, product strategy, and the details that make software genuinely useful.",
    "Previously I worked at Sunrun, Fenix, Clean Focus, Stion and the Hackett Group. These days I'm building Trainn and energized at bringing ideas to life quickly.",
  ],
  contactLine: "PLACEHOLDER: Always happy to talk product, startups, or ___.",
};

export type Row = { label: string; detail: string; href?: string };

export const career: Row[] = [
  { label: "Trainn", detail: "Founder · Now" },
  { label: "Sunrun", detail: "PLACEHOLDER role · years" },
  { label: "Fenix", detail: "PLACEHOLDER role · years" },
  { label: "Clean Focus", detail: "PLACEHOLDER role · years" },
  { label: "Stion", detail: "PLACEHOLDER role · years" },
  { label: "The Hackett Group", detail: "PLACEHOLDER role · years" },
];

// Add `src: "/photos/your-file.jpg"` once photos are in /public/photos.
export const cameraRoll: { caption: string; src?: string }[] = [
  { caption: "PLACEHOLDER: place, city" },
  { caption: "PLACEHOLDER: place, city" },
  { caption: "PLACEHOLDER: place, city" },
  { caption: "PLACEHOLDER: place, city" },
  { caption: "PLACEHOLDER: place, city" },
  { caption: "PLACEHOLDER: place, city" },
];

export const personalLists: { title: string; rows: Row[] }[] = [
  {
    title: "Favorite reads",
    rows: [
      { label: "PLACEHOLDER book title", detail: "Author" },
      { label: "PLACEHOLDER book title", detail: "Author" },
      { label: "PLACEHOLDER book title", detail: "Author" },
    ],
  },
  {
    title: "On repeat",
    rows: [
      { label: "PLACEHOLDER album or podcast", detail: "Artist · year" },
      { label: "PLACEHOLDER album or podcast", detail: "Artist · year" },
      { label: "PLACEHOLDER album or podcast", detail: "Artist · year" },
    ],
  },
  {
    title: "Life",
    rows: [
      { label: "PLACEHOLDER: home base", detail: "City" },
      { label: "PLACEHOLDER: family or pets", detail: "Names" },
      { label: "PLACEHOLDER: sport or hobby", detail: "Detail" },
      { label: "PLACEHOLDER: team you root for", detail: "Detail" },
      { label: "PLACEHOLDER: food or drink opinion", detail: "Detail" },
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
    title: "PLACEHOLDER: Building with AI developer tools",
    year: "2026",
    summary: "PLACEHOLDER: one-line summary of the post.",
  },
];
