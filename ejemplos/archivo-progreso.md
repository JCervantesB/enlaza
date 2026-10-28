# Archivo de progreso de ejemplo (Módulo 6)

> Ejemplo de **contexto persistente**: un archivo en el repo que permite reiniciar una
> sesión sin perder el hilo. En un proyecto real viviría en `docs/progreso.md` o similar.

```markdown
# Progreso: expiración de enlaces (enlaza)

_Actualizado: 2026-10-06_

## Hecho
- Campo `expira_en` en la tabla `enlaces` (migración `0002_expira.sql`).
- Validación de expiración en `apps/api/src/routes/redirigir.ts`.

## En curso
- Prueba de expiración en `apps/api/src/tests/acortar.test.ts`.

## Pendiente
- Tarea diaria de limpieza de enlaces vencidos.

## Decisiones
- Un enlace sin `expira_en` dura siempre.
- La expiración se comprueba al redirigir, no al crear.

## Contexto útil
- La generación de slugs vive en `apps/api/src/acortar.ts`.
- Las rutas están en `apps/api/src/routes/`.
```

**Cómo se usa:** al empezar una nueva sesión, tu agente lee este archivo y retoma desde el
"En curso" sin necesidad del historial completo. Recuerda: el estado persistente también
envejece, por eso lleva fecha.
