/**
 * Barrel export para todos los hooks personalizados
 */

export { useIntersectionObserver } from "./useIntersectionObserver";
export {
  useIsMobile,
  useIsTablet,
  useIsDesktop,
  useMediaQuery,
  usePrefersDarkMode,
  usePrefersReducedMotion,
} from "./useMediaQuery";
export { useTheme } from "./useTheme";
export type { Theme } from "./useTheme";
