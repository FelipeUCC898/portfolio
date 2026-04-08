"use client";

import { useTranslations } from "next-intl";

import type { ExperienceEntry } from "@/types/experience";

type BadgeKey =
  | "current"
  | "versatility"
  | "initiative"
  | "teamwork"
  | "inProgress"
  | "problemSolving"
  | "collaboration";

type Props = {
  items: ExperienceEntry[];
};

export function TimelineBlock({ items }: Props) {
  const tBadge = useTranslations("experience.badges");

  return (
    <div className="relative py-4">
      {items.map((item, index) => (
        <div
          key={`${item.title}-${index}`}
          className="relative mb-8 pl-10 last:mb-0 md:pl-12"
        >
          <span
            className="absolute left-0 top-1 h-5 w-5 rounded-full border-2 border-white bg-[#05DFD7] shadow-[0_0_0_2px_#05DFD7] dark:border-[#040404]"
            aria-hidden
          />
          {index < items.length - 1 ? (
            <span
              className="absolute left-[9px] top-6 w-0.5 bg-[#05DFD7] md:left-[11px]"
              style={{ height: "calc(100% + 0.5rem)" }}
              aria-hidden
            />
          ) : null}

          <h4 className="text-base font-semibold text-[#05DFD7]">{item.title}</h4>
          {item.company ? (
            <p className="text-sm text-[rgba(5,223,215,0.75)]">{item.company}</p>
          ) : null}
          {item.date ? (
            <p className="mt-1 text-xs italic text-zinc-500 dark:text-white/60">{item.date}</p>
          ) : null}
          <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-white/80">{item.body}</p>
          {item.bullets?.length ? (
            <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 dark:text-white/80">
              {item.bullets.map((b) => (
                <li key={b} className="mb-1">
                  {b}
                </li>
              ))}
            </ul>
          ) : null}
          {item.badges?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {item.badges.map((b) => (
                <span
                  key={b}
                  className="inline-block rounded-full border border-[#05DFD7] bg-[rgba(5,223,215,0.15)] px-3 py-1 text-xs text-[#05DFD7]"
                >
                  {tBadge(b as BadgeKey)}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
