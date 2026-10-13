"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clsx } from "clsx";

// A horizontally scrolling row with round previous/next buttons on md+ screens.
export function ScrollRow({
  className,
  buttonClassName = "top-1/2",
  children,
}: {
  // Classes for the scrolling element itself.
  className?: string;
  // Vertical position of the buttons within the row.
  buttonClassName?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState({ left: false, right: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setCanScroll({ left: el.scrollLeft > 4, right: el.scrollLeft < max - 4 });
    };
    // ResizeObserver also fires once on observe, which sets the initial state.
    const observer = new ResizeObserver(update);
    observer.observe(el);
    el.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      el.removeEventListener("scroll", update);
    };
  }, []);

  const scroll = (direction: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const button =
    "absolute z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-stone-700 shadow-md backdrop-blur-sm transition-colors hover:bg-white md:flex dark:bg-stone-800/90 dark:text-stone-200 dark:hover:bg-stone-700";

  return (
    <div className="relative">
      {canScroll.left && (
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scroll(-1)}
          className={clsx(button, buttonClassName, "left-2 md:left-6")}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}
      {canScroll.right && (
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scroll(1)}
          className={clsx(button, buttonClassName, "right-2 md:right-6")}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}
      <div ref={ref} className={className}>
        {children}
      </div>
    </div>
  );
}
