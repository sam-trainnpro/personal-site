import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";

// Cross-posted from Trainn.pro.
const original =
  "https://trainn.pro/blog/vibe-coding-key-steps-and-lessons-learned";
const title = "Vibe Coding: Key Steps and Lessons Learned";

export const metadata: Metadata = {
  title: `${title} - ${site.name}`,
  description:
    "The five steps and seven lessons from building Trainn as a non-technical founder with AI coding tools.",
  // Points search engines at the original post so the copy isn't treated as a duplicate.
  alternates: { canonical: original },
};

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-14 text-lg font-medium tracking-tight text-stone-900 dark:text-stone-100">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 text-[15px] font-medium text-stone-900 dark:text-stone-100">
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-[15px] leading-7 text-stone-600 dark:text-stone-400">
      {children}
    </p>
  );
}

function Bullets({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-7 text-stone-600 marker:text-stone-300 dark:text-stone-400 dark:marker:text-stone-700">
      {children}
    </ul>
  );
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-stone-900 underline underline-offset-2 transition-opacity hover:opacity-70 dark:text-stone-100"
    >
      {children}
    </a>
  );
}

export default function Article() {
  return (
    <main className="flex-1">
      <article className="mx-auto max-w-2xl px-6 pt-16 pb-24 sm:px-10 sm:pt-20">
        <Link
          href="/writing"
          className="text-sm text-stone-400 transition-colors hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300"
        >
          ← Writing
        </Link>
        <h1 className="mt-8 text-2xl font-medium tracking-tight text-stone-900 sm:text-3xl dark:text-stone-100">
          {title}
        </h1>
        <p className="mt-3 text-sm text-stone-400 dark:text-stone-500">
          September 9, 2025 · 12 min read · Originally published on{" "}
          <a
            href={original}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 transition-opacity hover:opacity-70"
          >
            Trainn.pro
          </a>
        </p>

        <Image
          src="/writing/vibe-coding.jpg"
          alt="Illustration of a founder coding on a laptop alongside an AI assistant and floating code windows"
          width={1200}
          height={800}
          sizes="(min-width: 672px) 592px, calc(100vw - 3rem)"
          loading="eager"
          className="mt-10 h-auto w-full rounded-xl"
        />

        <P>
          Back in May 2025, I kept seeing the term <em>vibe coding</em> pop up on
          LinkedIn and Facebook. I had a desire to build something, so I gave it
          a shot. After just one day, I was hooked. Watching my idea come to life
          on my screen in real time was thrilling—and empowering. It made me
          think: How far can I take this?
        </P>
        <P>
          That&apos;s how <A href="https://www.trainn.pro">Trainn</A>{" "}
          got started. This post is for any founder or aspiring entrepreneur who
          wants to bring an idea to life using vibe coding. I&apos;ll share the 5
          key steps that worked for me and 7 lessons I wish I had known earlier.
        </P>

        <H2>5 Steps to Bring an Idea to Life with Vibe Coding</H2>

        <H3>1. Start with a real problem</H3>
        <P>
          Some people use AI to brainstorm ideas. For me, Trainn came from two
          personal pain points:
        </P>
        <Bullets>
          <li>
            My 5-year-old wanted to play soccer, but we missed the league
            signup—and the season-long commitment felt tough with summer travel.
          </li>
          <li>
            I wanted to try outdoor workouts at Dolores Park, but couldn&apos;t
            find a reliable schedule (and most weren&apos;t on ClassPass).
          </li>
        </Bullets>
        <P>I designed Trainn to solve those challenges.</P>

        <H3>2. Pick the right platform</H3>
        <P>
          I started on Lovable, then switched to Replit and never looked back.
          Their Cloud Development Environment (CDE) bundles client (front end),
          server (back end), database, and deployment into one place. Their Agent
          is impressive, and they have made some useful feature updates even in
          the last 3 months. Check out Collin Matthew&apos;s{" "}
          <A href="https://www.lennysnewsletter.com/p/a-guide-to-ai-prototyping-for-product">
            post
          </A>{" "}
          on Lenny&apos;s Blog to read a useful summary of some of the options
          available.
        </P>

        <H3>3. Write a Product Requirements Doc (PRD)</H3>
        <P>
          My neighbor, who is an AI PM, gave me this tip: draft your PRD in two
          AI tools (e.g., ChatGPT and Claude), then merge them. Break your work
          into phases so you don&apos;t overwhelm your CDE by trying to build
          everything at once.
        </P>

        <H3>4. Bring your PRD into the CDE</H3>
        <P>
          This is where the magic happens. Paste your PRD, and you&apos;ll
          quickly see a prototype take shape. Even with no engineering
          background, I had something clickable within minutes.
        </P>

        <H3>5. Test, troubleshoot, iterate</H3>
        <P>
          Your first version will have issues – that&apos;s normal. Follow one
          user flow at a time (like login → book class → payment) until each step
          works. I focused on functionality first, then circled back to polish
          layouts and styling.
        </P>
        <P>
          As you build your working MVP, integrate APIs (I used Google Maps for
          class locations and Stripe for payments) and grab a domain. From there,
          you&apos;re off to the races.
        </P>

        <H2>7 Things I&apos;d Do Differently</H2>
        <Bullets>
          <li>
            <strong className="font-medium text-stone-900 dark:text-stone-100">
              One change at a time
            </strong>{" "}
            – CDEs respond better, and you can deploy incrementally.
          </li>
          <li>
            <strong className="font-medium text-stone-900 dark:text-stone-100">
              Think SEO early
            </strong>{" "}
            – Even basic optimization helps once you&apos;re ready for traffic.
          </li>
          <li>
            <strong className="font-medium text-stone-900 dark:text-stone-100">
              Weekly feedback
            </strong>{" "}
            – Customer conversations are fuel.
          </li>
          <li>
            <strong className="font-medium text-stone-900 dark:text-stone-100">
              Try premium models
            </strong>{" "}
            – On Replit, &ldquo;extended thinking&rdquo; and &ldquo;high
            power&rdquo; can save time (and money) compared to cheaper defaults.
          </li>
          <li>
            <strong className="font-medium text-stone-900 dark:text-stone-100">
              Roll back often
            </strong>{" "}
            – Don&apos;t stack prompts on broken code. Reset and rebuild.
          </li>
          <li>
            <strong className="font-medium text-stone-900 dark:text-stone-100">
              Use the agent as a thought partner
            </strong>{" "}
            – Especially before big features (like Trainn&apos;s promo codes and
            packages).
          </li>
          <li>
            <strong className="font-medium text-stone-900 dark:text-stone-100">
              Be detailed
            </strong>{" "}
            – Reference database tables, fields, and expected outputs in your
            prompts.
          </li>
        </Bullets>

        <H2>Final Thought</H2>
        <P>
          Vibe coding won&apos;t replace traditional engineering, but it&apos;s a
          powerful way for non-technical founders to start. For me, it turned a
          vague idea into a live product in days.
        </P>
        <P>
          If you&apos;re thinking about building something, my advice is simple:
          just start. The tools are better than ever, and the learning curve is
          less steep than you think.
        </P>
        <P>
          And if you&apos;re in SF, check out{" "}
          <A href="https://www.trainn.pro">Trainn</A>. We&apos;re making it
          easier for people to find flexible fitness, creative, and sports
          classes for adults and kids, and in doing so, building stronger
          communities.
        </P>
      </article>
    </main>
  );
}
