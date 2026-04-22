"use client";

import { faCirclePlay, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const audioMap: Record<Locale, string> = {
    es: "/audios/audio_español.WAV",
    en: "/audios/audio_ingles.WAV",
    fr: "/audios/audio_frances.WAV",
  };

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;

    if (!video || !audio) return;

    const syncAudio = () => {
      audio.currentTime = video.currentTime;
    };

    const handlePlay = () => {
      audio.play().catch(console.error);
    };

    const handlePause = () => {
      audio.pause();
    };

    const handleSeeking = () => {
      audio.currentTime = video.currentTime;
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("seeking", handleSeeking);
    video.addEventListener("timeupdate", syncAudio);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("seeking", handleSeeking);
      video.removeEventListener("timeupdate", syncAudio);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const audio = audioRef.current;

    if (!video || !audio) return;

    const wasPlaying = !video.paused;
    const currentTime = video.currentTime;

    if (wasPlaying) {
      video.pause();
    }

    audio.src = audioMap[locale];
    audio.load();

    audio.addEventListener(
      "loadeddata",
      () => {
        audio.currentTime = currentTime;
        if (wasPlaying) {
          video.play().catch(console.error);
        }
      },
      { once: true }
    );
  }, [locale]);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg border-2 border-[#05DFD7] bg-gradient-to-br from-zinc-200 to-teal-50 dark:from-[#1a1a2e] dark:to-[#16213e]">
      {!videoFailed ? (
        <>
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            controls
            playsInline
            preload="metadata"
            muted
            onError={() => setVideoFailed(true)}
          >
            <source src="/videos/video_peso_reducido_sin_audio.mp4#t=13" type="video/mp4" />
          </video>
          <audio ref={audioRef} preload="metadata">
            <source src={audioMap[locale]} type="audio/wav" />
          </audio>
        </>
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
    <div className="flex w-full max-w-6xl flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between md:gap-14">
      <div className="flex-1 text-left">
        <h1 className="font-[family-name:var(--font-raleway)] text-3xl font-bold text-[#05DFD7] sm:text-4xl md:text-5xl">
          {t("name")}
        </h1>
        <h2 className="mt-2 inline-block border-b-2 border-[#05DFD7] pb-2 text-base text-zinc-600 dark:text-white/80 sm:text-lg md:text-xl">
          {t("role")}
        </h2>

        <div className="mt-6 sm:mt-8">
          <Navbar active="hero" onSelect={setSection} variant="hero" />
        </div>

        <SocialLinks className="mt-6 sm:mt-8" />
      </div>

      <div className="flex w-full flex-1 flex-col items-stretch gap-3 sm:gap-4">
        <HeroVideoEmbed key={locale} locale={locale} />
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <LanguageSelector locale={locale} onChange={setLocale} />
          <a
            href="/CV/CV_felipe_narvaez.pdf"
            download="CV_Felipe_Narvaez.pdf"
            className="flex items-center gap-2 rounded-md border border-[#05DFD7] bg-transparent px-3 py-2 text-xs font-medium text-[#05DFD7] transition-all hover:bg-[#05DFD7] hover:text-zinc-900 dark:hover:text-zinc-900"
            title={t("downloadCV")}
          >
            <FontAwesomeIcon icon={faDownload} className="text-sm" />
            CV
          </a>
        </div>
      </div>
    </div>
  );
}
