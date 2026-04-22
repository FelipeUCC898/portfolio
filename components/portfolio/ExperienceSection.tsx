"use client";

import { useTranslations } from "next-intl";

import type { ExperienceEntry } from "@/types/experience";
import type { SectionId } from "@/types/section";

import { SectionPanel } from "./SectionPanel";
import { SectionWithNav } from "./SectionWithNav";
import { TimelineBlock } from "./TimelineBlock";

type Props = {
  setSection: (id: SectionId) => void;
};

const CERT_IMAGES: Record<string, string> = {
  "Seminario de Ingeniería de Software": "/img/certificado_seminario.jpeg",
  "Hackathon Vibe Coding 2025": "/img/hackaton_prueba.jpeg",
  "Software Engineering Seminar": "/img/certificado_seminario.jpeg",
  "Vibe Coding Hackathon 2025": "/img/hackaton_prueba.jpeg",
  "Séminaire d'ingénierie logicielle": "/img/certificado_seminario.jpeg",
  "Hackathon Vibe Coding 2025": "/img/hackaton_prueba.jpeg",
};

export function ExperienceSection({ setSection }: Props) {
  const t = useTranslations("experience");
  const work = t.raw("work") as ExperienceEntry[];
  const academic = t.raw("academic") as ExperienceEntry[];
  const certs = t.raw("certs") as { title: string; body: string }[];

  return (
    <SectionWithNav section="experience" setSection={setSection}>
      <SectionPanel>
        <h2 className="font-[family-name:var(--font-raleway)] text-3xl font-semibold text-[#05DFD7] md:text-4xl">
          {t("title")}
        </h2>

        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <h3 className="font-[family-name:var(--font-raleway)] text-xl text-zinc-900 dark:text-white">
              {t("workTitle")}
            </h3>
            <TimelineBlock items={work} />
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-raleway)] text-xl text-zinc-900 dark:text-white">
              {t("academicTitle")}
            </h3>
            <TimelineBlock items={academic} />
          </div>
        </div>

        <h3 className="mt-10 font-[family-name:var(--font-raleway)] text-xl text-zinc-900 dark:text-white">
          {t("certsTitle")}
        </h3>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {certs.map((c) => {
            const imageSrc = CERT_IMAGES[c.title];
            return (
              <div
                key={c.title}
                className="group overflow-hidden rounded-lg border-2 border-[#05DFD7]/50 bg-[rgba(5,223,215,0.05)] transition hover:border-[#05DFD7] hover:bg-[rgba(5,223,215,0.12)]"
              >
                {imageSrc && (
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={imageSrc}
                      alt={c.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h5 className="text-base font-semibold text-[#05DFD7]">
                    {c.title}
                  </h5>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-white/70">{c.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </SectionPanel>
    </SectionWithNav>
  );
}
