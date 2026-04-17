import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-start px-8 py-16 sm:px-16 md:px-24 lg:px-32">
      <div className="max-w-xl w-full space-y-6">
        <div className="w-20 h-20 rounded-sm overflow-hidden">
          <Image
            src="/avatar.jpg"
            alt="Sam Roth"
            width={80}
            height={80}
            className="object-cover object-top w-full h-full"
            priority
          />
        </div>

        {/* Name + location */}
        <div className="space-y-1">
          <p className="text-base font-semibold text-neutral-900 leading-snug">
            Sam Roth
          </p>
          <p className="text-sm text-neutral-400 leading-snug">
            San Francisco, CA
          </p>
        </div>

        {/* Bio */}
        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
          <p>
            I&apos;m a founder and former ops, strategy, and finance leader transitioning into product management. I&apos;m interested in AI developer tools, product
            strategy, and the details that make software genuinely useful.
          </p>
          <p>
            Previously I worked at Sunrun, Fenix, Clean Focus, Stion and the Hackett Group. These days
            I&apos;m building Trainn and energized at bringing ideas to life quickly.
          </p>
          <p>
            Feel free to reach out at{" "}
            <a
              href="mailto:sam@trainn.pro"
              className="text-neutral-900 underline underline-offset-2 decoration-neutral-300 hover:decoration-neutral-600 transition-colors"
            >
              sam@trainn.pro
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
