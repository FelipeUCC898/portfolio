"use client";

import { useTranslations } from "next-intl";

import type { Locale } from "@/types/section";

const LOCALES: Locale[] = ["es", "en", "fr"];

type Props = {
  locale: Locale;
  onChange: (locale: Locale) => void;
};

export function LanguageSelector({ locale, onChange }: Props) {
  const t = useTranslations("languages");

  return (
    <div
      className="flex flex-wrap justify-center gap-2 md:justify-start"
      role="group"
      aria-label="Idioma"
    >
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => onChange(code)}
          className={`rounded-md border px-4 py-2 text-sm transition-colors ${
            locale === code
              ? "border-[#05DFD7] bg-[#05DFD7] text-zinc-900"
              : "border-[#05DFD7] text-[#05DFD7] hover:bg-[#05DFD7] hover:text-zinc-900 dark:hover:text-[#040404]"
          }`}
        >
          {t(code)}
        </button>
      ))}
    </div>
  );
}
