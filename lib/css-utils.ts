/**
 * Funciones auxiliares para clases y estilos
 */

/**
 * Combina múltiples clases CSS de manera segura
 */
export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Crea clases condicionales
 */
export function conditionalClass(
  condition: boolean,
  trueClass: string,
  falseClass?: string
): string {
  return condition ? trueClass : falseClass || "";
}

/**
 * Obtiene clases de sombra según profundidad
 */
export function shadowClass(depth: 1 | 2 | 3 | 4 = 1): string {
  const shadows = {
    1: "shadow-sm",
    2: "shadow-md",
    3: "shadow-lg",
    4: "shadow-xl",
  };
  return shadows[depth];
}

/**
 * Obtiene clases de borde según grosor
 */
export function borderClass(width: 1 | 2 | 4 = 1): string {
  const borders = {
    1: "border",
    2: "border-2",
    4: "border-4",
  };
  return borders[width];
}

/**
 * Obtiene clases de spacing
 */
export function spacingClass(size: "xs" | "sm" | "md" | "lg" | "xl"): {
  padding: string;
  margin: string;
  gap: string;
} {
  const spacing = {
    xs: { padding: "p-2", margin: "m-2", gap: "gap-2" },
    sm: { padding: "p-3", margin: "m-3", gap: "gap-3" },
    md: { padding: "p-4", margin: "m-4", gap: "gap-4" },
    lg: { padding: "p-6", margin: "m-6", gap: "gap-6" },
    xl: { padding: "p-8", margin: "m-8", gap: "gap-8" },
  };
  return spacing[size];
}
