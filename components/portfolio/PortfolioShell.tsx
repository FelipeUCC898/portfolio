"use client";

import gsap from "gsap";
import { NextIntlClientProvider } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";

import { catalogs } from "@/lib/messages";
import type { Locale, SectionId } from "@/types/section";

import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { DynamicBackground } from "./DynamicBackground";
import { ExperienceSection } from "./ExperienceSection";
import { FontAwesomeSetup } from "./FontAwesomeSetup";
import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { ThemeToggle } from "./ThemeToggle";

export function PortfolioShell() {
  const [locale, setLocale] = useState<Locale>("es");
  const [section, setSection] = useState<SectionId>("hero");
  const messages = useMemo(() => catalogs[locale], [locale]);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },
    );
  }, [section]);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <FontAwesomeSetup />
      <ThemeToggle currentSection={section} />
      <div className="relative h-screen w-screen overflow-hidden bg-zinc-100 text-zinc-900 dark:bg-[#040404] dark:text-white">
        <DynamicBackground />
        <main className="relative z-10 flex h-full w-full items-center justify-center px-4 pb-6 pt-14 md:px-8 md:pt-6">
          <div ref={contentRef} key={section} className="w-full max-w-[1200px]">
            {section === "hero" ? (
              <HeroSection
                setSection={setSection}
                locale={locale}
                setLocale={setLocale}
              />
            ) : null}
            {section === "about" ? (
              <AboutSection setSection={setSection} />
            ) : null}
            {section === "experience" ? (
              <ExperienceSection setSection={setSection} />
            ) : null}
            {section === "projects" ? (
              <ProjectsSection setSection={setSection} />
            ) : null}
            {section === "testimonials" ? (
              <TestimonialsSection setSection={setSection} />
            ) : null}
            {section === "contact" ? (
              <ContactSection setSection={setSection} />
            ) : null}
          </div>
        </main>
      </div>
    </NextIntlClientProvider>
  );
}
