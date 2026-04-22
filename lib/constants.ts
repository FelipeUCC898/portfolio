/**
 * Constantes globales del portfolio
 */

export const SITE_NAME = "Felipe Narváez Gómez";
export const SITE_DESCRIPTION = "Desarrollador, diseñador e innovador digital";
export const SITE_URL = "https://felipnarvaez.com";

export const SOCIAL_LINKS = {
  github: "https://github.com/felipnarvaez",
  linkedin: "https://linkedin.com/in/felipnarvaez",
  twitter: "https://twitter.com/felipnarvaez",
  instagram: "https://instagram.com/felipnarvaez",
};

export const CONTACT_INFO = {
  email: "hello@felipnarvaez.com",
  phone: "+57 302 277 7512",
  location: "Colombia",
};

export const SECTIONS = [
  "hero",
  "about",
  "experience",
  "projects",
  "testimonials",
  "contact",
] as const;

export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.55,
  slow: 0.8,
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};
