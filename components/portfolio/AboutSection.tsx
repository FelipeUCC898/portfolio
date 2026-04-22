"use client";

import {
  faCogs,
  faPalette,
  faShareAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

import type { SectionId } from "@/types/section";

import { SectionPanel } from "./SectionPanel";
import { SectionWithNav } from "./SectionWithNav";

type Props = {
  setSection: (id: SectionId) => void;
};

export function AboutSection({ setSection }: Props) {
  const t = useTranslations("about");
  const skillsTech = t.raw("skillsTech") as string[];
  const skillsSoft = t.raw("skillsSoft") as string[];

  return (
    <SectionWithNav section="about" setSection={setSection}>
      <SectionPanel>
        <h2 className="font-[family-name:var(--font-raleway)] text-2xl font-semibold text-[#05DFD7] sm:text-3xl md:text-4xl">
          {t("title")}
        </h2>

        <div className="mt-6 grid gap-6 sm:mt-8 sm:gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-[#05DFD7]">
              {t("introTitle")}
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-justify text-zinc-800 dark:text-white/80">
              {t("intro1")}
            </p>
            <p className="mb-3 text-sm leading-relaxed text-justify text-zinc-800 dark:text-white/80">
              {t("intro2")}
            </p>
            <p className="mb-3 text-sm leading-relaxed text-justify text-zinc-800 dark:text-white/80">{t("intro3")}</p>
            <div className="my-4 flex justify-center">
              <a
                href="https://open.spotify.com/intl-es/artist/74SidSBDGeNveuIm1uzHKA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#1DB954] px-6 py-3 font-semibold text-white transition hover:bg-[#1ed760] hover:shadow-lg hover:shadow-[#1DB954]/50"
              >
                <FontAwesomeIcon icon={faSpotify} className="text-lg" />
                Spotify
              </a>
            </div>
          </div>
          <div className="flex aspect-square items-center justify-center overflow-hidden rounded-lg border-2 border-[#05DFD7]">
            <img 
              src="/img/imagen_portafolio_2.jpeg" 
              alt="Felipe Narváez Gómez" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <h3 className="mt-10 font-[family-name:var(--font-raleway)] text-xl text-zinc-900 dark:text-white">
          {t("goalsTitle")}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-justify text-zinc-800 dark:text-white/80">{t("goals1")}</p>
        <p className="mt-3 text-sm leading-relaxed text-justify text-zinc-800 dark:text-white/80">{t("goals2")}</p>

        <h3 className="mt-10 font-[family-name:var(--font-raleway)] text-xl text-zinc-900 dark:text-white">
          {t("skillsTechTitle")}
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {skillsTech.map((skill) => (
            <div
              key={skill}
              className="rounded border border-[#05DFD7] bg-[rgba(5,223,215,0.1)] px-3 py-3 text-center text-sm text-[#05DFD7] transition hover:-translate-y-1 hover:bg-[rgba(5,223,215,0.2)]"
            >
              {skill}
            </div>
          ))}
        </div>

        <h3 className="mt-10 font-[family-name:var(--font-raleway)] text-xl text-zinc-900 dark:text-white">
          {t("skillsSoftTitle")}
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {skillsSoft.map((skill) => (
            <div
              key={skill}
              className="rounded border border-[#05DFD7] bg-[rgba(5,223,215,0.1)] px-3 py-3 text-center text-sm text-[#05DFD7]"
            >
              {skill}
            </div>
          ))}
        </div>

        <h3 className="mt-10 font-[family-name:var(--font-raleway)] text-xl text-zinc-900 dark:text-white">
          {t("servicesTitle")}
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded border border-[#05DFD7]/60 bg-[rgba(5,223,215,0.05)] p-5 transition hover:-translate-y-1 hover:bg-[rgba(5,223,215,0.12)]">
            <div className="mb-4 flex h-24 items-center justify-center overflow-hidden rounded">
              <img 
                src="/img_2/diseño_ui.jpg" 
                alt="Diseño Web & UX/UI"
                className="h-full w-full object-cover"
              />
            </div>
            <h4 className="mb-2 text-base text-[#05DFD7]">
              {t("services.web.title")}
            </h4>
            <p className="text-sm leading-relaxed text-justify text-zinc-800 dark:text-white/80">
              {t("services.web.body")}
            </p>
          </div>
          <div className="rounded border border-[#05DFD7]/60 bg-[rgba(5,223,215,0.05)] p-5 transition hover:-translate-y-1 hover:bg-[rgba(5,223,215,0.12)]">
            <div className="mb-4 flex h-24 items-center justify-center overflow-hidden rounded">
              <img 
                src="/img_2/social_media.jpg" 
                alt="Redes Sociales"
                className="h-full w-full object-cover"
              />
            </div>
            <h4 className="mb-2 text-base text-[#05DFD7]">
              {t("services.social.title")}
            </h4>
            <p className="text-sm leading-relaxed text-justify text-zinc-800 dark:text-white/80">
              {t("services.social.body")}
            </p>
          </div>
          <div className="rounded border border-[#05DFD7]/60 bg-[rgba(5,223,215,0.05)] p-5 transition hover:-translate-y-1 hover:bg-[rgba(5,223,215,0.12)]">
            <div className="mb-4 flex h-24 items-center justify-center overflow-hidden rounded">
              <img 
                src="/img_2/automatizacion_img.jpg" 
                alt="Automatización"
                className="h-full w-full object-cover"
              />
            </div>
            <h4 className="mb-2 text-base text-[#05DFD7]">
              {t("services.automation.title")}
            </h4>
            <p className="text-sm leading-relaxed text-justify text-zinc-800 dark:text-white/80">
              {t("services.automation.body")}
            </p>
          </div>
        </div>
      </SectionPanel>
    </SectionWithNav>
  );
}
