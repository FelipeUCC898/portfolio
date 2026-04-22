/**
 * Funciones auxiliares para manipulación de texto y formatos
 */

/**
 * Capitaliza la primera letra de un texto
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/**
 * Obtiene las iniciales de un nombre
 */
export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();
}

/**
 * Trunca un texto a una longitud específica
 */
export function truncateText(text: string, length: number): string {
  return text.length > length ? text.substring(0, length) + "..." : text;
}

/**
 * Convierte un texto a slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

/**
 * Verifica si un email es válido
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Formatea un número como moneda
 */
export function formatCurrency(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency,
  }).format(amount);
}

/**
 * Formatea una fecha de manera legible
 */
export function formatDate(date: Date, locale = "es-CO"): string {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
