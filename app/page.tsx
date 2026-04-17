export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-start px-8 py-16 sm:px-16 md:px-24 lg:px-32">
      <div className="max-w-xl w-full space-y-6">
        {/* Avatar placeholder — replace with <Image src="/avatar.png" ...> when ready */}
        <div className="w-20 h-20 rounded-sm bg-neutral-200" aria-hidden="true" />

        {/* Name + location */}
        <div className="space-y-1">
          <p className="text-base font-semibold text-neutral-900 leading-snug">
            Your Name
          </p>
          <p className="text-sm text-neutral-400 leading-snug">
            San Francisco, CA
          </p>
        </div>

        {/* Bio */}
        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <p>
            I&apos;m a founder and former ops and strategy leader transitioning to be a product manager interested in developer tools, product
            strategy, and the details that make software genuinely useful. 
          </p>
          <p>
            Previously I worked at a couple of early-stage startups. These days
            I&apos;m focused on building things that last.
          </p>
          <p>
            Feel free to reach out at{" "}
            <a
              href="mailto:hello@yourname.com"
              className="text-neutral-900 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-600 transition-colors"
            >
              hello@yourname.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
