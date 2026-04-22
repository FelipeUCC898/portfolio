"use client";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

import type { ProjectItem } from "@/types/project";

type Props = {
  project: ProjectItem;
  icon: IconDefinition;
  imageSrc?: string;
};

export function ProjectCard({ project, icon, imageSrc }: Props) {
  const t = useTranslations("projects");
  const hasLink = Boolean(project.href && project.href !== "#");

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-[#05DFD7]/80 bg-[rgba(5,223,215,0.08)] transition hover:-translate-y-2 hover:bg-[rgba(5,223,215,0.14)] hover:shadow-[0_15px_40px_rgba(5,223,215,0.22)] dark:bg-[rgba(5,223,215,0.05)]">
      <div className="relative h-[140px] overflow-hidden border-b border-[#05DFD7] bg-gradient-to-br from-[rgba(5,223,215,0.2)] to-[rgba(5,223,215,0.05)]">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-5xl text-[#05DFD7]">
            <FontAwesomeIcon icon={icon} aria-hidden />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 inline-block w-fit rounded bg-[rgba(5,223,215,0.12)] px-2 py-0.5 text-xs font-medium text-[#05DFD7]">
          {project.category}
        </span>
        <h4 className="text-base font-semibold text-[#05DFD7]">{project.title}</h4>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-700 dark:text-white/80">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[rgba(5,223,215,0.5)] bg-[rgba(5,223,215,0.2)] px-2 py-0.5 text-[0.7rem] text-[#05DFD7]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-[rgba(5,223,215,0.3)] pt-3">
          <span className="text-xs italic text-[rgba(5,223,215,0.75)]">
            {t("roleLabel")}: {project.role}
          </span>
          {hasLink ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm font-semibold text-[#05DFD7] hover:text-[#0D7377]"
            >
              {t("view")}{" "}
              <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
            </a>
          ) : (
            <span className="text-xs text-zinc-600 dark:text-white/40">—</span>
          )}
        </div>
      </div>
    </article>
  );
}
