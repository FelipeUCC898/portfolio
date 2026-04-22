import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function SectionPanel({ children, className = "" }: Props) {
  return (
    <div
      className={`section-scroll mx-auto w-full max-w-6xl max-h-[85vh] overflow-y-auto rounded-xl border border-zinc-200/90 bg-white/85 px-4 py-6 text-zinc-900 shadow-[0_0_40px_rgba(5,223,215,0.12)] backdrop-blur-md dark:border-white/10 dark:bg-[rgba(20,20,40,0.82)] dark:text-white dark:shadow-[0_0_40px_rgba(5,223,215,0.08)] sm:px-6 sm:py-8 md:px-10 md:py-10 ${className}`}
    >
      {children}
    </div>
  );
}
