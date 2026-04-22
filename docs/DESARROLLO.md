# Guía de Desarrollo

Instrucciones para desarrolladores que quieran contribuir al proyecto.

## Requisitos

- Node.js 18+
- npm o yarn

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tuuser/portfolio.git
cd portfolio

# Instalar dependencias
npm install
```

## Estructura del Proyecto

```
portfolio/
├── app/              # Next.js app directory
├── components/       # Componentes React
│   └── portfolio/    # Componentes del portfolio
├── docs/            # Documentación
├── lib/             # Funciones auxiliares
│   └── hooks/       # Custom hooks
├── messages/        # Traducciones i18n
├── public/          # Archivos estáticos
├── types/           # Tipos TypeScript
└── README.md        # Documentación principal
```

## Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Producción
npm start

# Linting
npm run lint

# Typecheck
npm run type-check
```

## Patrones de Código

### Componentes

```tsx
"use client";

import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export function MyComponent({ children, className }: Props) {
  return <div className={className}>{children}</div>;
}
```

### Hooks

```tsx
export function useMyHook() {
  const [state, setState] = useState(initialValue);
  
  useEffect(() => {
    // effect logic
  }, [dependencies]);
  
  return { state, setState };
}
```

### Utilities

```typescript
/**
 * Descripción de la función
 */
export function myUtility(param: string): string {
  return param.toUpperCase();
}
```

## Localización

Agregar traducción en cada archivo `messages/XX.json`:

```json
{
  "mySection": {
    "title": "Mi Título",
    "description": "Mi descripción"
  }
}
```

Usar en componentes:

```tsx
const t = useTranslations("mySection");
t("title");
```

## Testing

Por agregar.

## Buenas Prácticas

- Usar TypeScript siempre
- Componentes funcionales si es posible
- Props tipadas correctamente
- JSDoc para funciones públicas
- Variables descriptivas
- No usar `any` type

## Commits

Seguir convención:

```
feat: agregar nueva característica
fix: corregir bug
docs: actualizar documentación
style: cambios de formato
refactor: refactorizar código
perf: mejora de performance
test: agregar tests
```

## Pull Requests

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/my-feature`
3. Commit cambios: `git commit -m "feat: my feature"`
4. Push: `git push origin feature/my-feature`
5. Abre un PR

## Contacto

Para preguntas: hello@felipnarvaez.com
