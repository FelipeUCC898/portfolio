"use client";

import dynamic from "next/dynamic";

const BackgroundScene = dynamic(
  () =>
    import("./BackgroundScene").then((m) => ({ default: m.BackgroundScene })),
  { ssr: false },
);

export function DynamicBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div
        className="absolute inset-0 bg-gradient-to-br from-zinc-100 via-sky-100/70 to-teal-50 dark:hidden"
        aria-hidden
      />
      <div
        className="absolute inset-0 hidden bg-[linear-gradient(135deg,#040404_0%,#1a1a2e_50%,#16213e_100%)] dark:block"
        aria-hidden
      />
      <div className="absolute inset-0 opacity-30 mix-blend-multiply dark:opacity-55 dark:mix-blend-screen">
        <BackgroundScene />
      </div>
    </div>
  );
}
