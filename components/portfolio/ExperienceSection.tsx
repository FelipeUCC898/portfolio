"use client";

import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

import type { ExperienceEntry } from "@/types/experience";
import type { SectionId } from "@/types/section";

import { SectionPanel } from "./SectionPanel";
import { SectionWithNav } from "./SectionWithNav";
import { TimelineBlock } from "./TimelineBlock";

type Props = {
  setSection: (id: SectionId) => void;
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
        <div className="mt-4 space-y-3">
          {certs.map((c) => (
            <div
              key={c.title}
              className="rounded border border-[#05DFD7]/50 bg-[rgba(5,223,215,0.05)] p-4 transition hover:translate-x-1 hover:bg-[rgba(5,223,215,0.12)]"
            >
              <h5 className="flex items-center gap-2 text-sm font-semibold text-[#05DFD7]">
                <FontAwesomeIcon icon={faCertificate} />
                {c.title}
              </h5>
              <p className="mt-1 text-sm text-zinc-600 dark:text-white/70">{c.body}</p>
            </div>
          ))}
        </div>
      </SectionPanel>
    </SectionWithNav>
  );
}
