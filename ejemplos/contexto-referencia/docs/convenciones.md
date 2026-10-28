# Convenciones de enlaza

## TypeScript

- Modo estricto activado.
- Exportar **por nombre** (`export function`, `export interface`); nunca `export default`.
- Tipos compartidos en `packages/shared/src/tipos.ts`.

## Nombres

- Archivos y carpetas en `kebab-case`.
- Funciones en `camelCase`.
- Tipos e interfaces en `PascalCase`.

## Rutas

- Cada recurso tiene su archivo en `apps/api/src/routes/`.
- La lógica de negocio no vive en las rutas: delega en módulos como `acortar.ts` o
  `almacen.ts`.

## Errores

- Las respuestas de error son JSON con la forma `{ error: "mensaje" }`.
- No exponer detalles internos ni credenciales en los mensajes.

## Pruebas

- Ubicación: `apps/api/src/tests/`.
- Se ejecutan con `npm test`.
- Cada comportamiento visible nuevo lleva una prueba.
