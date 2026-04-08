"use client";

import { useTranslations } from "next-intl";

import type { SectionId } from "@/types/section";

const SECTION_ORDER: SectionId[] = [
  "hero",
  "about",
  "experience",
  "projects",
  "testimonials",
  "contact",
];

type Props = {
  active: SectionId;
  onSelect: (id: SectionId) => void;
  variant?: "hero" | "compact";
};

export function Navbar({ active, onSelect, variant = "hero" }: Props) {
  const t = useTranslations("nav");

  const base =
    variant === "hero"
      ? "flex flex-wrap gap-6 text-base md:gap-8"
      : "flex flex-wrap gap-3 text-sm md:gap-5";

  return (
    <nav aria-label="Principal" className={base}>
      {SECTION_ORDER.map((id) => {
        const label =
          id === "hero"
            ? t("home")
            : id === "about"
              ? t("about")
              : id === "experience"
                ? t("experience")
                : id === "projects"
                  ? t("projects")
                  : id === "testimonials"
                    ? t("testimonials")
                    : t("contact");

        const isActive = active === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onSelect(id)}
            className={`relative transition-colors hover:text-[#05DFD7] ${
              isActive ? "text-[#05DFD7]" : "text-zinc-800 dark:text-white"
            }`}
          >
            {label}
            {isActive ? (
              <span
                className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#05DFD7]"
                aria-hidden
              />
            ) : null}
          </button>
        );
      })}
    </nav>
  );
}
