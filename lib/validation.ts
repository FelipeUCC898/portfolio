/**
 * Funciones de validación para formularios
 */

export interface ValidationRule {
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  custom?: (value: string) => boolean;
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Valida un campo contra un conjunto de reglas
 */
export function validateField(
  value: string,
  rules: ValidationRule,
  fieldName: string
): ValidationResult {
  if (rules.required && !value.trim()) {
    return {
      isValid: false,
      error: `${fieldName} es requerido`,
    };
  }

  if (rules.minLength && value.length < rules.minLength) {
    return {
      isValid: false,
      error: `${fieldName} debe tener al menos ${rules.minLength} caracteres`,
    };
  }

  if (rules.maxLength && value.length > rules.maxLength) {
    return {
      isValid: false,
      error: `${fieldName} no puede exceder ${rules.maxLength} caracteres`,
    };
  }

  if (rules.pattern && !rules.pattern.test(value)) {
    return {
      isValid: false,
      error: `${fieldName} no tiene el formato correcto`,
    };
  }

  if (rules.custom && !rules.custom(value)) {
    return {
      isValid: false,
      error: `${fieldName} no es válido`,
    };
  }

  return { isValid: true };
}

/**
 * Valida un email
 */
export function validateEmail(email: string): ValidationResult {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return validateField(email, { pattern, required: true }, "Email");
}

/**
 * Valida un teléfono
 */
export function validatePhone(phone: string): ValidationResult {
  const pattern = /^[\d\s\-\+\(\)]+$/;
  return validateField(
    phone,
    { pattern, minLength: 10, required: true },
    "Teléfono"
  );
}

/**
 * Valida que dos campos sean iguales
 */
export function validateMatch(
  value1: string,
  value2: string,
  fieldName: string
): ValidationResult {
  if (value1 !== value2) {
    return {
      isValid: false,
      error: `${fieldName} no coinciden`,
    };
  }
  return { isValid: true };
}
