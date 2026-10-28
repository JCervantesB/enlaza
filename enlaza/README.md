# enlaza

Monorepo de práctica del curso **Context Engineering para Desarrolladores**.

Es un **acortador de URLs** con:

- `apps/api` — servidor y acceso a datos.
- `apps/web` — panel web mínimo (vanilla).
- `packages/shared` — tipos y utilidades compartidas.

Sin dependencias de runtime: el API usa `node:http` y `node:sqlite` (incluidos en Node).

## Requisitos

- Node.js 24 o superior.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`. La web y la API se sirven desde el mismo proceso.

## Pruebas

```bash
npm test
```

## Estructura

```text
enlaza/
├── apps/
│   ├── api/          # servidor + base de datos + rutas + migraciones + pruebas
│   └── web/          # panel web (archivos estáticos)
├── packages/
│   └── shared/       # tipos compartidos (Enlace, Clic)
└── data/             # base de datos SQLite (no versionada)
```

## Endpoints

- `POST /api/enlaces` — crea un enlace acortado.
- `GET /api/enlaces` — lista los enlaces.
- `GET /api/enlaces/:slug/clics` — estadísticas de clics de un enlace.
- `GET /r/:slug` — registra un clic y redirige.
