"use client";

import {
  faCheckCircle,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

import type { SectionId } from "@/types/section";

import { ContactForm } from "./ContactForm";
import { SectionPanel } from "./SectionPanel";
import { SectionWithNav } from "./SectionWithNav";

type Props = {
  setSection: (id: SectionId) => void;
};

const SOCIAL = [
  { href: "https://github.com", icon: faGithub, label: "GitHub" },
  { href: "https://linkedin.com", icon: faLinkedin, label: "LinkedIn" },
  { href: "https://instagram.com", icon: faInstagram, label: "Instagram" },
  { href: "https://twitter.com", icon: faTwitter, label: "Twitter" },
] as const;

export function ContactSection({ setSection }: Props) {
  const t = useTranslations("contact");

  return (
    <SectionWithNav section="contact" setSection={setSection}>
      <SectionPanel>
        <h2 className="font-[family-name:var(--font-raleway)] text-3xl font-semibold text-[#05DFD7] md:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-white/70">{t("subtitle")}</p>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <ContactForm />

          <div className="flex flex-col gap-6">
            <div className="rounded-lg border border-[#05DFD7]/60 bg-[rgba(5,223,215,0.05)] p-6 transition hover:translate-x-1 hover:bg-[rgba(5,223,215,0.12)]">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(5,223,215,0.2)] text-[#05DFD7]">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
              </div>
              <h4 className="text-lg text-[#05DFD7]">{t("info.emailTitle")}</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-white/80">{t("info.emailLead")}</p>
              <a
                href={`mailto:${t("email")}`}
                className="mt-2 inline-block text-[#05DFD7] hover:text-[#0D7377]"
              >
                {t("email")}
              </a>
              <p className="mt-2 text-xs text-zinc-500 dark:text-white/50">
                <FontAwesomeIcon icon={faCheckCircle} className="mr-1 text-[#05DFD7]" />
                {t("info.active")}
              </p>
            </div>

            <div className="rounded-lg border border-[#05DFD7]/60 bg-[rgba(5,223,215,0.05)] p-6 transition hover:translate-x-1 hover:bg-[rgba(5,223,215,0.12)]">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(5,223,215,0.2)] text-[#05DFD7]">
                <FontAwesomeIcon icon={faPhone} className="text-xl" />
              </div>
              <h4 className="text-lg text-[#05DFD7]">{t("info.phoneTitle")}</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-white/80">{t("info.phoneLead")}</p>
              <a
                href={`tel:${t("phoneHref")}`}
                className="mt-2 inline-block text-[#05DFD7] hover:text-[#0D7377]"
              >
                {t("phone")}
              </a>
              <p className="mt-2 text-xs text-zinc-500 dark:text-white/50">
                <FontAwesomeIcon icon={faCheckCircle} className="mr-1 text-[#05DFD7]" />
                {t("info.active")}
              </p>
            </div>

            <div className="rounded-lg border border-[#05DFD7]/60 bg-[rgba(5,223,215,0.05)] p-6 transition hover:translate-x-1 hover:bg-[rgba(5,223,215,0.12)]">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(5,223,215,0.2)] text-[#05DFD7]">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
              </div>
              <h4 className="text-lg text-[#05DFD7]">{t("info.locationTitle")}</h4>
              <p className="mt-1 text-sm text-zinc-700 dark:text-white/80">{t("info.locationBody")}</p>
              <p className="mt-2 text-xs text-zinc-500 dark:text-white/50">{t("info.locationHint")}</p>
            </div>

            <div>
              <h4 className="mb-3 text-lg text-[#05DFD7]">{t("socialTitle")}</h4>
              <div className="flex flex-wrap gap-3">
                {SOCIAL.map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#05DFD7] text-[#05DFD7] transition hover:bg-[#05DFD7] hover:text-zinc-900 dark:hover:text-[#040404]"
                  >
                    <FontAwesomeIcon icon={icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionPanel>
    </SectionWithNav>
  );
}
