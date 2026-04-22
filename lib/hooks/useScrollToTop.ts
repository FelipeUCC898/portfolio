/**
 * Hook para hacer scroll al inicio de un contenedor o la ventana
 */

import { useCallback, useRef } from "react";

/**
 * Retorna una ref y una función para hacer scroll al inicio del elemento
 */
export function useScrollToTop<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  const scrollToTop = useCallback(() => {
    if (ref.current) {
      ref.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return { ref, scrollToTop };
}
