# 🌐 Felipe Narváez Gómez — Portfolio

Portfolio personal construido con **Next.js 16**, **TypeScript**, **Tailwind CSS 4** y **Three.js**. Soporta tres idiomas (ES, EN, FR), modo claro/oscuro, y animaciones con GSAP.

## ✨ Características

- 🎨 Diseño moderno con glassmorfismo y gradientes dinámicos
- 🌍 Multilenguaje (Español, Inglés, Francés) con `next-intl`
- 🌙 Modo claro / oscuro con persistencia en `localStorage`
- 🎬 Video de presentación con audio sincronizado por idioma
- 🔮 Fondo 3D interactivo con `@react-three/fiber` y `@react-three/drei`
- 📱 Diseño totalmente responsivo con menú móvil
- 💬 Botón de WhatsApp flotante
- 📄 Descarga directa de CV en PDF
- ⚡ Animaciones suaves de transición entre secciones con GSAP

## 🛠️ Tecnologías

| Tecnología | Versión |
|---|---|
| Next.js | 16.2.2 |
| React | 19.2.4 |
| TypeScript | ^5 |
| Tailwind CSS | ^4 |
| Three.js | ^0.182.0 |
| GSAP | ^3.14.2 |
| next-intl | ^4.7.0 |
| Font Awesome | ^7.1.0 |

## 📁 Estructura del Proyecto

```
portfolio/
├── app/                    # App Router de Next.js
│   ├── layout.tsx          # Layout raíz con fuentes y metadata
│   ├── page.tsx            # Página principal
│   ├── globals.css         # Estilos globales y tema Tailwind
│   └── favicon.ico
├── components/portfolio/   # Componentes de la aplicación
│   ├── PortfolioShell.tsx  # Shell principal con navegación
│   ├── HeroSection.tsx     # Sección hero con video
│   ├── AboutSection.tsx    # Sobre mí, habilidades y servicios
│   ├── ExperienceSection.tsx # Experiencia laboral y académica
│   ├── ProjectsSection.tsx # Proyectos destacados
│   ├── TestimonialsSection.tsx # Testimonios de clientes
│   ├── ContactSection.tsx  # Formulario de contacto
│   ├── Navbar.tsx          # Barra de navegación desktop
│   ├── MobileMenu.tsx      # Menú hamburguesa móvil
│   ├── ThemeToggle.tsx     # Toggle claro/oscuro
│   └── ...
├── lib/                    # Utilidades y hooks
│   ├── hooks/              # Custom hooks (useTheme, useMediaQuery, etc.)
│   ├── constants.ts        # Constantes globales
│   ├── validation.ts       # Validación de formularios
│   └── ...
├── messages/               # Archivos de traducción (es, en, fr)
├── types/                  # Definiciones de tipos TypeScript
├── public/                 # Assets estáticos (imágenes, videos, CV)
└── docs/                   # Documentación del proyecto
```

## 🚀 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/FelipeUCC898/portfolio.git

# Instalar dependencias
npm install

# Iniciar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📝 Secciones

1. **Hero** — Presentación con video, redes sociales y descarga de CV
2. **Sobre Mí** — Biografía, habilidades técnicas/blandas y servicios
3. **Experiencia** — Timeline de experiencia laboral, académica y certificados
4. **Proyectos** — Galería de proyectos con tecnologías y enlaces
5. **Testimonios** — Opiniones de clientes y colaboradores
6. **Contacto** — Formulario de contacto e información directa

## 📄 Licencia

Este proyecto es de uso personal. © 2025 Felipe Narváez Gómez