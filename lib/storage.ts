/**
 * Funciones auxiliares para localStorage
 */

export class LocalStorage {
  static getItem<T>(key: string, defaultValue?: T): T | null {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue ?? null;
    } catch {
      return defaultValue ?? null;
    }
  }

  static setItem<T>(key: string, value: T): void {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      console.warn(`Failed to set localStorage item: ${key}`);
    }
  }

  static removeItem(key: string): void {
    try {
      window.localStorage.removeItem(key);
    } catch {
      console.warn(`Failed to remove localStorage item: ${key}`);
    }
  }

  static clear(): void {
    try {
      window.localStorage.clear();
    } catch {
      console.warn("Failed to clear localStorage");
    }
  }

  static keys(): string[] {
    try {
      return Object.keys(window.localStorage);
    } catch {
      return [];
    }
  }
}

/**
 * Hook para usar localStorage con estado
 */
export function useLocalStorage<T>(
  key: string,
  initialValue?: T
): [T | null, (value: T) => void, () => void] {
  const [storedValue, setStoredValue] = React.useState<T | null>(() => {
    return LocalStorage.getItem<T>(key, initialValue ?? null);
  });

  const setValue = (value: T) => {
    LocalStorage.setItem(key, value);
    setStoredValue(value);
  };

  const removeValue = () => {
    LocalStorage.removeItem(key);
    setStoredValue(null);
  };

  return [storedValue, setValue, removeValue];
}
