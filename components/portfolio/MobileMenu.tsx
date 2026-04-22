"use client";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";

import { useEscapeKey } from "@/lib/hooks/useEscapeKey";

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
  currentSection: SectionId;
  onSelect: (id: SectionId) => void;
};

export function MobileMenu({ currentSection, onSelect }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("nav");

  const closeMenu = useCallback(() => setIsOpen(false), []);
  useEscapeKey(closeMenu, isOpen);

  const handleSelect = (id: SectionId) => {
    onSelect(id);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      {/* Botón hamburguesa */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menú"
        className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-[#05DFD7] text-[#05DFD7] transition hover:bg-[#05DFD7]/10"
      >
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars}
          className="text-lg"
        />
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setIsOpen(false)}
            aria-hidden
          />

          {/* Menú */}
          <div className="fixed left-0 right-0 top-16 z-50 mx-3 rounded-lg border-2 border-[#05DFD7] bg-white dark:bg-zinc-950">
            <nav className="flex flex-col divide-y divide-[#05DFD7]/30">
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

                const isActive = currentSection === id;

                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => handleSelect(id)}
                    className={`px-4 py-3 text-left transition-colors ${
                      isActive
                        ? "bg-[rgba(5,223,215,0.1)] text-[#05DFD7] font-semibold"
                        : "text-zinc-800 dark:text-white hover:bg-[rgba(5,223,215,0.05)] hover:text-[#05DFD7]"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
