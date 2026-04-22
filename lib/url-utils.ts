/**
 * Funciones auxiliares para URLs y parámetros
 */

/**
 * Construye una URL con parámetros de consulta
 */
export function buildUrl(
  baseUrl: string,
  params?: Record<string, string | number | boolean>
): string {
  if (!params || Object.keys(params).length === 0) {
    return baseUrl;
  }

  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    searchParams.set(key, String(value));
  });

  return `${baseUrl}?${searchParams.toString()}`;
}

/**
 * Obtiene los parámetros de la URL
 */
export function getUrlParams(): Record<string, string> {
  const params: Record<string, string> = {};
  if (typeof window === "undefined") return params;

  const searchParams = new URLSearchParams(window.location.search);
  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  return params;
}

/**
 * Obtiene un parámetro específico de la URL
 */
export function getUrlParam(name: string): string | null {
  if (typeof window === "undefined") return null;
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

/**
 * Copia un texto al portapapeles
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/**
 * Comparte contenido usando la Web Share API
 */
export async function shareContent(
  data: ShareData
): Promise<boolean> {
  if (!navigator.share) {
    return false;
  }

  try {
    await navigator.share(data);
    return true;
  } catch {
    return false;
  }
}

/**
 * Abre un enlace en una nueva ventana
 */
export function openInNewTab(url: string, target = "_blank"): void {
  window.open(url, target);
}
