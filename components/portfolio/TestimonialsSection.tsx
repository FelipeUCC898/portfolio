"use client";

import { faQuoteLeft, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

import type { SectionId } from "@/types/section";

import { SectionPanel } from "./SectionPanel";
import { SectionWithNav } from "./SectionWithNav";

type Props = {
  setSection: (id: SectionId) => void;
};

export function TestimonialsSection({ setSection }: Props) {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as Array<{
    quote: string;
    author: string;
    role: string;
    company: string;
  }>;

  // Generate initials from company name for avatar
  const getInitials = (company: string) => {
    return company
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <SectionWithNav section="testimonials" setSection={setSection}>
      <SectionPanel>
        <h2 className="font-[family-name:var(--font-raleway)] text-3xl font-semibold text-[#05DFD7] md:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-white/80">{t("intro")}</p>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {items.map((testimonial, index) => (
            <article
              key={index}
              className="relative flex flex-col rounded-lg border border-[#05DFD7]/80 bg-[rgba(5,223,215,0.05)] p-7 transition hover:-translate-y-2 hover:bg-[rgba(5,223,215,0.12)] hover:shadow-[0_15px_40px_rgba(5,223,215,0.2)]"
            >
              <span
                className="pointer-events-none absolute -top-2 left-2 font-serif text-7xl text-[rgba(5,223,215,0.12)]"
                aria-hidden
              >
                &ldquo;
              </span>
              <div className="mb-3 flex gap-1 text-[#05DFD7]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="text-sm" />
                ))}
              </div>
              <p className="relative z-[1] flex-1 text-sm italic leading-relaxed text-zinc-800 dark:text-white/85">
                {testimonial.quote}
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-[rgba(5,223,215,0.3)] pt-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#05DFD7] bg-gradient-to-br from-[rgba(5,223,215,0.3)] to-[rgba(5,223,215,0.1)] text-sm font-semibold text-[#05DFD7]">
                  {getInitials(testimonial.company)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#05DFD7]">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-[rgba(5,223,215,0.75)]">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-[#05DFD7]/60 bg-[rgba(5,223,215,0.05)] p-8 text-center">
          <h3 className="font-[family-name:var(--font-raleway)] text-lg text-[#05DFD7]">
            {t("ctaTitle")}
          </h3>
          <p className="mt-2 text-sm text-zinc-800 dark:text-white/80">{t("ctaBody")}</p>
          <button
            type="button"
            onClick={() => setSection("contact")}
            className="mt-5 inline-block rounded-md bg-[#05DFD7] px-8 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-[#0D7377] dark:text-[#040404]"
          >
            {t("ctaButton")}
          </button>
        </div>
      </SectionPanel>
    </SectionWithNav>
  );
}
