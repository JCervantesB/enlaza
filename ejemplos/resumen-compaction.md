# Resumen de compaction de ejemplo (Módulo 6)

> Ejemplo del tipo de resumen que se produce al comprimir una sesión larga. Úsalo como
> referencia del **formato**: estado, no narrativa.

```text
# Estado de la tarea: expiración de enlaces (enlaza)

## Objetivo
Que un enlace pueda expirar y deje de redirigir después de su fecha.

## Decisiones tomadas
- Campo opcional `expira_en` en la tabla `enlaces`.
- Un enlace sin fecha dura siempre.
- La validación de expiración vive en `apps/api/src/routes/redirigir.ts`.

## Restricciones vigentes
- No cambiar el esquema existente sin aprobación.
- No añadir dependencias.

## Hecho
- Migración `0002_expira.sql` y campo en el modelo.
- Validación en la redirección.

## Pendiente
- Tarea programada diaria de limpieza (opcional).
- Prueba de expiración en `apps/api/src/tests`.

## Próximo paso
Escribir la prueba de expiración y ejecutar `npm test`.
```

**Por qué funciona:** conserva objetivo, decisiones, restricciones y pendientes; descarta
resultados de herramientas ya consumidos, intentos fallidos y ruido. No cuenta "qué pasó",
dice "qué importa para seguir".
