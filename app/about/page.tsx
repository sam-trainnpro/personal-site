import type { Metadata } from "next";
import Image from "next/image";
import { ScrollRow } from "@/components/scroll-row";
import {
  about,
  cameraRoll,
  career,
  personalLists,
  site,
  type Row,
} from "@/lib/content";

export const metadata: Metadata = {
  title: `About - ${site.name}`,
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-widest text-stone-400 dark:text-stone-600">
      {children}
    </p>
  );
}

function List({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div className="mb-12 last:mb-0">
      <div className="mb-2">
        <Label>{title}</Label>
      </div>
      {rows.map((row, i) => {
        const content = (
          <>
            <span className="text-[15px] font-medium text-stone-900 dark:text-stone-100">
              {row.label}
              {row.href && <span className="ml-0.5 text-stone-400">↗</span>}
            </span>
            <span className="text-sm text-stone-400 dark:text-stone-500">
              {row.detail}
            </span>
            {row.image && (
              // Pops up to the right of the row on hover; hidden on small and touch screens.
              <Image
                src={row.image.src}
                alt=""
                width={row.image.width}
                height={row.image.height}
                sizes="208px"
                className="pointer-events-none absolute top-1/2 left-[calc(100%+3rem)] z-10 hidden max-h-56 w-auto max-w-52 -translate-y-1/2 scale-95 rounded-lg opacity-0 shadow-xl transition duration-200 group-hover:scale-100 group-hover:opacity-100 lg:block [@media(hover:none)]:hidden"
              />
            )}
          </>
        );
        const className =
          "group relative flex flex-wrap items-baseline gap-x-3 gap-y-0.5 border-b border-stone-200/70 py-2.5 dark:border-stone-800/50";
        return row.href ? (
          <a
            key={i}
            href={row.href}
            target="_blank"
            rel="noreferrer"
            className={`${className} transition-opacity hover:opacity-70`}
          >
            {content}
          </a>
        ) : (
          <div key={i} className={className}>
            {content}
          </div>
        );
      })}
    </div>
  );
}

export default function About() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-5xl px-6 pt-20 sm:px-10 sm:pt-28">
        <h1 className="max-w-4xl text-[1.55rem] font-medium leading-snug tracking-tight text-stone-900 sm:text-[1.85rem] lg:text-[2rem] dark:text-stone-100">
          {about.headline}
        </h1>
      </section>

      <section className="mt-24 sm:mt-32">
        <div className="mx-auto mb-6 max-w-5xl px-6 sm:px-10">
          <Label>Camera roll</Label>
        </div>
        <ScrollRow
          className="flex gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] sm:px-[max(2.5rem,calc((100vw-64rem)/2+2.5rem))] [&::-webkit-scrollbar]:hidden"
          buttonClassName="top-[calc(50%-1rem)]"
        >
          {cameraRoll.map((photo) => (
            <figure key={photo.src} className="group shrink-0">
              <Image
                src={photo.src}
                alt={photo.caption}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 640px) 300px, 235px"
                className="aspect-[4/3] w-[235px] rounded-lg bg-stone-100 object-cover sm:w-[300px] dark:bg-stone-900"
              />
              <figcaption className="mt-2 whitespace-nowrap text-xs text-stone-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:text-stone-500 [@media(hover:none)]:opacity-100">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </ScrollRow>
      </section>

      <section className="mx-auto mt-20 max-w-5xl px-6 sm:mt-28 sm:px-10">
        {/* Text stays in the left half so hover images have room on the right. */}
        <div className="lg:w-1/2">
          <List title="Career" rows={career} />
          {personalLists.map((list) => (
            <List key={list.title} {...list} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-5xl px-6 pb-20 sm:px-10 sm:pb-28">
        <div className="border-t border-stone-200/70 pt-12 sm:pt-14 dark:border-stone-800/50">
          <p className="text-base text-stone-500 dark:text-stone-400">
            {about.contactLine}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="group mt-4 inline-block text-[1.55rem] font-medium tracking-tight text-stone-900 transition-colors hover:text-stone-600 sm:text-[1.85rem] lg:text-[2rem] dark:text-stone-100 dark:hover:text-stone-400"
          >
            Say hello{" "}
            <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
