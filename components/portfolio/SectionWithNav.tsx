"use client";

import type { ReactNode } from "react";

import type { SectionId } from "@/types/section";

import { Navbar } from "./Navbar";

type Props = {
  section: SectionId;
  setSection: (id: SectionId) => void;
  children: ReactNode;
};

export function SectionWithNav({ section, setSection, children }: Props) {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="mb-6 w-full max-w-6xl">
        <Navbar active={section} onSelect={setSection} variant="compact" />
      </div>
      {children}
    </div>
  );
}
