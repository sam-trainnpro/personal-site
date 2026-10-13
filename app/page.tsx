import Image from "next/image";
import { projects } from "@/lib/content";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col md:justify-center">
      <div className="flex flex-col gap-10 px-6 pt-6 pb-14 md:flex-row md:items-end md:gap-12 md:overflow-x-auto md:snap-x md:scroll-px-8 md:px-[max(2rem,calc((100vw-80rem)/2+2rem))] md:pt-2 md:pb-16 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {projects.map((project, i) => (
          <article
            key={i}
            className="group w-full shrink-0 md:w-[min(70vw,35rem)] md:snap-start"
          >
            <div
              className={`relative aspect-[3/2] overflow-hidden rounded-xl bg-gradient-to-br ${project.gradient} transition-transform duration-500 motion-safe:group-hover:scale-[1.015]`}
            >
              {project.image && (
                <div className="absolute inset-0 flex items-center justify-center p-[6%]">
                  <Image
                    src={project.image.src}
                    alt={`${project.title} screenshot`}
                    width={project.image.width}
                    height={project.image.height}
                    sizes="(min-width: 768px) 500px, 90vw"
                    loading={i === 0 ? "eager" : "lazy"}
                    className="h-auto max-h-full w-auto max-w-full rounded-md shadow-xl shadow-black/10"
                  />
                </div>
              )}
            </div>
            <div className="mt-3">
              <h2 className="text-base font-medium text-stone-900 dark:text-stone-100">
                {project.title}
              </h2>
              <p className="mt-0.5 text-sm text-stone-400 dark:text-stone-500">
                {[project.company, project.year].filter(Boolean).join(" · ")}
              </p>
              <p className="mt-2 max-w-md text-sm text-stone-500 dark:text-stone-400">
                {project.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
