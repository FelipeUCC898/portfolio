import type { Metadata } from "next";
import { Open_Sans, Raleway } from "next/font/google";

import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Felipe Narváez Gómez — Portafolio",
  description:
    "Desarrollador y diseñador creativo. Proyectos web, diseño UX/UI y producción audiovisual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${raleway.variable} ${openSans.variable} h-full antialiased dark`}
    >
      <body className="min-h-full overflow-hidden bg-zinc-100 font-sans text-zinc-900 dark:bg-[#040404] dark:text-white">
        {children}
      </body>
    </html>
  );
}
