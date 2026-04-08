"use client";

import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LINKS = [
  { href: "https://github.com", icon: faGithub, label: "GitHub" },
  {
    href: "https://www.linkedin.com",
    icon: faLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com",
    icon: faInstagram,
    label: "Instagram",
  },
] as const;

type Props = {
  className?: string;
};

export function SocialLinks({ className = "" }: Props) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {LINKS.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#05DFD7] text-[#05DFD7] transition-colors hover:bg-[#05DFD7] hover:text-zinc-900 dark:hover:text-[#040404]"
        >
          <FontAwesomeIcon icon={icon} className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
