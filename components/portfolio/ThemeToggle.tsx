"use client";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { startTransition, useEffect, useState } from "react";

import type { SectionId } from "@/types/section";

const STORAGE_KEY = "portfolio-theme";

type Props = {
  currentSection: SectionId;
};

export function ThemeToggle({ currentSection }: Props) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    startTransition(() => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY) as "light" | "dark" | null;
        if (stored === "light" || stored === "dark") {
          setTheme(stored);
        }
      } catch {
        /* ignore */
      }
    });
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const isDark = theme === "dark";
  const isVisible = currentSection === "hero";

  if (!isVisible) return null;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      className="fixed left-4 top-4 z-[100] hidden h-12 w-[7.25rem] shrink-0 items-center rounded-full border-4 border-zinc-900 bg-white shadow-sm transition-colors md:flex dark:border-zinc-100 dark:bg-zinc-950"
    >
      <span
        className="absolute left-1 top-1 flex h-8 w-8 translate-x-0 items-center justify-center rounded-full bg-zinc-900 text-white transition-transform duration-300 ease-out dark:translate-x-[3rem] dark:bg-zinc-100 dark:text-zinc-900"
        aria-hidden
      >
        <FontAwesomeIcon
          icon={isDark ? faMoon : faSun}
          className="h-4 w-4"
        />
      </span>
    </button>
  );
}
