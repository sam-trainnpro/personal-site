import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { site } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.name,
  description: "Operator, PM, Founder. Building Trainn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <div className="w-full max-w-7xl mx-auto">
          <header className="flex items-start justify-between gap-4 text-sm sm:text-base px-6 pt-6 pb-4 md:px-8">
            <Link
              href="/"
              className="space-y-0.5 whitespace-nowrap transition-opacity hover:opacity-70"
            >
              <p className="leading-4 text-stone-900 dark:text-stone-100">
                {site.name}
              </p>
              <p className="text-stone-500 dark:text-stone-400">
                {site.tagline}
              </p>
            </Link>
            <Nav />
          </header>
        </div>
        {children}
      </body>
    </html>
  );
}
