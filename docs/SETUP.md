# Guía de Configuración

Esta guía explica cómo configurar el portfolio.

## Variables de Entorno

Crear un archivo `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

## Configuración de Temas

### Colores

El color principal está definido en `globals.css`:

```css
--color-accent: #05dfd7;
```

Para cambiar el color, modifica este valor en todos los archivos CSS/Tailwind.

### Fuentes

Las fuentes están configuradas en `app/layout.tsx`:

- **Raleway**: Headings
- **Open Sans**: Body

## Configuración de Idiomas

Los idiomas soportados están en `messages/`:
- `en.json` - Inglés
- `es.json` - Español
- `fr.json` - Francés

Para agregar un nuevo idioma:

1. Crea `messages/new-lang.json`
2. Agrega la siguiendo la misma estructura
3. Actualiza `lib/messages.ts`

## Configuración de Rutas

Las secciones disponibles están definidas en `types/section.ts`:

```typescript
export type SectionId = 
  | "hero"
  | "about"
  | "experience"
  | "projects"
  | "testimonials"
  | "contact";
```

## Configuración de Next.js

Ver `next.config.ts` para optimizaciones y plugins.

## Información de Contacto

Actualiza la información en `lib/constants.ts`:

```typescript
export const CONTACT_INFO = {
  email: "tu-email@dominio.com",
  phone: "+57 XXX XXXX XXX",
  location: "Tu ubicación",
};
```

## URLs de Redes Sociales

Actualiza en `lib/constants.ts`:

```typescript
export const SOCIAL_LINKS = {
  github: "tu-url",
  linkedin: "tu-url",
  // ... más
};
```

## Construcción y Despliegue

### Desarrollo

```bash
npm run dev
```

### Producción

```bash
npm run build
npm start
```

### Despliegue en Vercel

```bash
vercel deploy --prod
```
