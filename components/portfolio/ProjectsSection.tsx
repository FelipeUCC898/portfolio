"use client";

import {
  faBullhorn,
  faCalculator,
  faChartLine,
  faFilm,
  faMusic,
  faPalette,
  faRocket,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useTranslations } from "next-intl";

import type { ProjectItem } from "@/types/project";
import type { SectionId } from "@/types/section";

import { ProjectCard } from "./ProjectCard";
import { SectionPanel } from "./SectionPanel";
import { SectionWithNav } from "./SectionWithNav";

const PROJECT_ICONS: IconDefinition[] = [
  faMusic,
  faWallet,
  faCalculator,
  faRocket,
  faFilm,
  faPalette,
  faChartLine,
  faBullhorn,
];

const PROJECT_IMAGES: Record<string, string> = {
  "Reproductor Musical": "/projects/reproductor_musical.jpeg",
  "Music Player": "/projects/reproductor_musical.jpeg",
  "Lecteur musical": "/projects/reproductor_musical.jpeg",
  "Gestor de Gastos e Ingresos": "/projects/control_gastos.jpeg",
  "Income & Expense Manager": "/projects/control_gastos.jpeg",
  "Gestionnaire de revenus et dépenses": "/projects/control_gastos.jpeg",
  "Calculadora Multivariada": "/projects/calculadora_3d.jpeg",
  "Multivariate Calculator": "/projects/calculadora_3d.jpeg",
  "Calculatrice multivariée": "/projects/calculadora_3d.jpeg",
};

type Props = {
  setSection: (id: SectionId) => void;
};

export function ProjectsSection({ setSection }: Props) {
  const t = useTranslations("projects");
  const items = t.raw("items") as ProjectItem[];

  return (
    <SectionWithNav section="projects" setSection={setSection}>
      <SectionPanel>
        <h2 className="font-[family-name:var(--font-raleway)] text-3xl font-semibold text-[#05DFD7] md:text-4xl">
          {t("title")}
        </h2>
        <h3 className="mt-6 font-[family-name:var(--font-raleway)] text-lg text-[#05DFD7]">
          {t("subtitle")}
        </h3>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              icon={PROJECT_ICONS[i] ?? faRocket}
              imageSrc={PROJECT_IMAGES[project.title]}
            />
          ))}
        </div>
      </SectionPanel>
    </SectionWithNav>
  );
}
