/**
 * Hook para manejar navegación con teclado (Escape para cerrar menús, etc.)
 */

import { useEffect } from "react";

/**
 * Ejecuta un callback cuando se presiona la tecla Escape
 */
export function useEscapeKey(callback: () => void, enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [callback, enabled]);
}
