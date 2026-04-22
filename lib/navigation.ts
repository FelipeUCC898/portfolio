/**
 * Funciones auxiliares para la navegación del portfolio
 */

import type { SectionId } from "@/types/section";

/**
 * Mapeo de sección ID a clave de traducción de navegación
 */
const SECTION_NAV_KEYS: Record<SectionId, string> = {
  hero: "home",
  about: "about",
  experience: "experience",
  projects: "projects",
  testimonials: "testimonials",
  contact: "contact",
};

/**
 * Obtiene la clave de traducción para una sección
 */
export function getNavTranslationKey(sectionId: SectionId): string {
  return SECTION_NAV_KEYS[sectionId];
}
