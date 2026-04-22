# Guía de Componentes

Esta guía describe los componentes principales del portfolio y cómo usarlos.

## Componentes Principales

### HeroSection
Componente de presentación principal con video y datos del desarrollador.

```tsx
<HeroSection 
  setSection={setSection} 
  currentSection={currentSection}
  locale={locale}
  setLocale={setLocale}
/>
```

### AboutSection
Sección sobre el desarrollador, habilidades y servicios.

```tsx
<AboutSection setSection={setSection} />
```

### ExperienceSection
Timeline de experiencia laboral y educativa.

```tsx
<ExperienceSection setSection={setSection} />
```

### ProjectsSection
Galería de proyectos destacados.

```tsx
<ProjectsSection setSection={setSection} />
```

### TestimonialsSection
Testimonios de clientes y colaboradores.

```tsx
<TestimonialsSection setSection={setSection} />
```

### ContactSection
Formulario de contacto e información de contacto.

```tsx
<ContactSection setSection={setSection} />
```

## Componentes Auxiliares

### Navbar
Barra de navegación horizontal (visible en desktop).

### MobileMenu
Menú hamburguesa para dispositivos móviles.

### ThemeToggle
Toggle para cambiar entre temas claro y oscuro.

### WhatsAppButton
Botón flotante de WhatsApp.

### SocialLinks
Enlaces a redes sociales.

### LanguageSelector
Selector de idiomas (ES, EN, FR).

## Props Comunes

Todos los componentes principales aceptan:
- `setSection: (id: SectionId) => void` - Función para cambiar de sección
- Algunos aceptan `currentSection: SectionId` - Sección actual

## Styling

Los componentes utilizan Tailwind CSS con color principal `#05DFD7`.

### Clases utiles:
- `text-[#05DFD7]` - Color principal
- `dark:text-white` - Modo oscuro
- `dark:bg-[#040404]` - Fondo oscuro

## Localización

Los componentes utilizan `next-intl` para soporte multiidioma.

```tsx
const t = useTranslations("sectionName");
```

## Accesibilidad

- Todos los botones tienen `aria-label` descriptivos
- Navegación con teclado soportada
- Contraste de colores accesible
