# enlaza

Monorepo de un acortador de URLs: API, panel web y paquete compartido. Sin dependencias
de runtime; el API usa `node:http` y `node:sqlite`.

## Comandos

- Desarrollo: `npm run dev`
- Pruebas: `npm test`
- Compilar: `npm run build`

## Estructura

- `apps/api` — servidor, acceso a datos y rutas.
- `apps/web` — panel web (archivos estáticos).
- `packages/shared` — tipos y utilidades compartidas.

## Convenciones

- TypeScript estricto; exportar por nombre, nunca por defecto.
- Rutas de la API en `apps/api/src/routes/`.
- Los tipos compartidos viven en `packages/shared/src/`.

## Fronteras

### Always

- Ejecutar `npm test` antes de dar una tarea por terminada.
- Añadir o actualizar una prueba cuando se cambia el comportamiento visible.

### Ask first

- Añadir dependencias.
- Cambiar el esquema de datos.

### Never

- Poner credenciales en el código.
- Modificar migraciones ya aplicadas.
- Importar desde `apps/` dentro de `packages/shared/`.
