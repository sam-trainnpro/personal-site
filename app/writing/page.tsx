import type { Metadata } from "next";
import { posts, site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Writing - ${site.name}`,
};

export default function Writing() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-3xl px-6 pt-16 pb-24 sm:px-10 sm:pt-20">
        <h1 className="text-2xl font-medium tracking-tight text-stone-900 dark:text-stone-100">
          Writing
        </h1>
        <ul className="mt-12 space-y-10">
          {posts.map((post, i) => {
            const title = (
              <span className="text-[15px] font-medium text-stone-900 dark:text-stone-100">
                {post.title}
              </span>
            );
            return (
              <li key={i}>
                <p className="flex items-baseline gap-2.5">
                  {post.href ? (
                    <a
                      href={post.href}
                      className="transition-opacity hover:opacity-70"
                    >
                      {title}
                    </a>
                  ) : (
                    title
                  )}
                  <span className="text-sm text-stone-400 dark:text-stone-500">
                    {post.year}
                  </span>
                </p>
                <p className="mt-1.5 text-[15px] text-stone-400 dark:text-stone-500">
                  {post.summary}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
