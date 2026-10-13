"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const links = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-4 sm:gap-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={clsx(
            "transition-colors",
            pathname === link.href
              ? "font-medium text-stone-900 dark:text-stone-100"
              : "text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
