# Escenario B · Prompt corto con contexto estructurado (Módulo 1, lección 1.3)

> Este es el prompt del **escenario B**. Es de dos líneas porque el contexto ya vive en el
> proyecto: el `AGENTS.md` (raíz y por paquete) y la documentación de `docs/`. Usa la
> versión de referencia en `ejemplos/contexto-referencia/`.

---

```text
Añade expiración de enlaces a enlaza: que un enlace pueda tener fecha y deje de
redirigir después de esa fecha. Sigue el AGENTS.md y ejecuta las pruebas al terminar.
```

---

## Por qué funciona

- El **qué** está en el prompt (dos líneas, sin ruido).
- El **cómo** vive en el proyecto: convenciones, estructura, fronteras y dominio
  (en `AGENTS.md` y `docs/`), no en el mensaje.
- Pide el **criterio de cierre** (ejecutar las pruebas) sin repetir el proceso.

Compáralo con el escenario A (`ejemplos/prompt-largo-A.md`): el prompt de B es más corto y,
aun así, el resultado es mejor, porque el contexto vive donde debe vivir.
