import { site } from "@/lib/content";

// Outline brand icons in the same style as the lucide icons used elsewhere (lucide no longer ships brand logos).
const icons = {
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  github: (
    <>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </>
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </>
  ),
};

const labels: Record<keyof typeof icons, string> = {
  linkedin: "LinkedIn",
  github: "GitHub",
  instagram: "Instagram",
};

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-5 ${className ?? ""}`}>
      {(Object.keys(icons) as (keyof typeof icons)[]).map((key) => (
        <a
          key={key}
          href={site.socials[key]}
          target="_blank"
          rel="noreferrer"
          aria-label={labels[key]}
          className="text-stone-400 transition-colors hover:text-stone-900 dark:text-stone-500 dark:hover:text-stone-100"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            {icons[key]}
          </svg>
        </a>
      ))}
    </div>
  );
}
