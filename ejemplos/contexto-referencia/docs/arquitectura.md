# Arquitectura de enlaza

## Visión general

```text
        apps/web  ──HTTP──▶  apps/api  ──▶  SQLite (data/enlaza.db)
                              │
                             usa
                              ▼
                        packages/shared
```

## Paquetes

- **apps/api** — servidor HTTP (`node:http`), acceso a datos (`node:sqlite`), rutas y
  migraciones. Es el único que habla con la base de datos.
- **apps/web** — panel web estático (HTML/CSS/JS). Consume la API por HTTP.
- **packages/shared** — tipos (`Enlace`, `Clic`) y utilidades puras.

## Fronteras

- `packages/shared` **no** importa de `apps/`.
- `apps/web` **no** accede a la base de datos; solo a la API.
- Las rutas de la API viven en `apps/api/src/routes/`.

## Flujo de una petición

1. La web hace `POST /api/enlaces` con una URL.
2. `routes/enlaces.ts` valida y llama a `acortar.ts` para generar el slug.
3. `almacen.ts` guarda el enlace en SQLite.
4. Al abrir `GET /r/:slug`, `routes/redirigir.ts` registra el clic y redirige.
