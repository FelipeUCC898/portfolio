"use client";

import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import { useState } from "react";

import type { Locale, SectionId } from "@/types/section";

import { LanguageSelector } from "./LanguageSelector";
import { Navbar } from "./Navbar";
import { SocialLinks } from "./SocialLinks";

type Props = {
  setSection: (id: SectionId) => void;
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

function HeroVideoEmbed({ locale }: { locale: Locale }) {
  const t = useTranslations("hero");
  const [videoFailed, setVideoFailed] = useState(false);
  const src = `/videos/intro-${locale}.mp4`;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg border-2 border-[#05DFD7] bg-gradient-to-br from-zinc-200 to-teal-50 dark:from-[#1a1a2e] dark:to-[#16213e]">
      {!videoFailed ? (
        <video
          className="h-full w-full object-cover"
          controls
          playsInline
          preload="metadata"
          onError={() => setVideoFailed(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="flex h-full min-h-[180px] flex-col items-center justify-center gap-3 px-4 text-center">
          <FontAwesomeIcon
            icon={faCirclePlay}
            className="text-5xl text-[#05DFD7]"
            aria-hidden
          />
          <p className="text-sm text-zinc-600 dark:text-white/80">{t("videoPlaceholder")}</p>
          <p className="text-xs text-zinc-400 dark:text-white/40">{t("videoHint")}</p>
        </div>
      )}
    </div>
  );
}

export function HeroSection({ setSection, locale, setLocale }: Props) {
  const t = useTranslations("hero");

  return (
    <div className="flex w-full max-w-6xl flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-14">
      <div className="flex-1 text-left">
        <h1 className="font-[family-name:var(--font-raleway)] text-4xl font-bold text-[#05DFD7] md:text-5xl">
          {t("name")}
        </h1>
        <h2 className="mt-2 inline-block border-b-2 border-[#05DFD7] pb-2 text-lg text-zinc-600 dark:text-white/80 md:text-xl">
          {t("role")}
        </h2>

        <div className="mt-8">
          <Navbar active="hero" onSelect={setSection} variant="hero" />
        </div>

        <SocialLinks className="mt-8" />
      </div>

      <div className="flex w-full flex-1 flex-col items-stretch gap-4">
        <HeroVideoEmbed key={locale} locale={locale} />
        <LanguageSelector locale={locale} onChange={setLocale} />
      </div>
    </div>
  );
}
