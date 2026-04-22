/**
 * Tipo para los datos del formulario de contacto
 */
export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

/**
 * Tipo para la información de contacto social
 */
export type SocialLink = {
  href: string;
  label: string;
};
