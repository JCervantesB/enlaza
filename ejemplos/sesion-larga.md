# Sesión larga de ejemplo (para el detector de contexto — Módulo 5)

> Traza ficticia de una sesión real de trabajo de "tu agente" sobre `enlaza`. Sirve para
> practicar el **detector de contexto**: marcar los síntomas de context rot/pollution y
> nombrar el patrón que los arregla.

**Tarea:** añadir expiración de enlaces en `apps/api`.

---

**Turno 1 — usuario**
Añade expiración de enlaces: un enlace puede tener fecha de expiración; si alguien lo abre
después, no redirige. Sigue las convenciones del proyecto.

**Turno 2 — agente**
Voy a revisar la estructura. Leo `apps/api/src/acortar.ts` y `apps/api/src/almacen.ts`.
[ok] Propongo: campo `expira_en` en la tabla `enlaces` y validación en `redirigir.ts`.

**Turno 3 — usuario**
De acuerdo. Procede.

**Turno 4 — agente**
He creado la migración `0002_expira.sql`. Añadí el campo y la validación en `redirigir.ts`.
[todo] Falta la prueba.

**Turno 11 — usuario**
Muy bien. Ahora añade un endpoint de estadísticas de clics por enlace.

**Turno 12 — agente**
Antes de eso, releo `apps/api/src/acortar.ts` para recordar cómo se generan los slugs.
[El agente vuelve a leer un archivo que ya había leído en el turno 2.]

**Turno 13 — agente**
Propongo empezar por reescribir `almacen.ts` y cambiar cómo se guardan los enlaces: creo que
es más limpio usar una sola tabla para enlaces y clics.
[El agente propone revertir una decisión ya tomada y aprobada, sin que nadie lo pida.]

**Turno 18 — usuario**
¿Por qué usamos `expira_en`? Ya habíamos decidido que un enlace sin fecha dura siempre.

**Turno 19 — agente**
Disculpa. ¿Cuál era la regla de expiración que acordamos?
[El agente repite una pregunta ya respondida.]

**Turno 27 — agente**
He terminado. Añadí el endpoint, cambié el esquema y actualicé la autenticación.
[El agente cierra una tarea (autenticación) que nunca estaba en el alcance.]

---

## Pistas

- Turno 12: releer un archivo ya leído.
- Turno 13: revertir a un plan/decisión abandonada o ya aprobada.
- Turno 19: repetir una pregunta ya respondida.
- Turno 27: cerrar trabajo fuera de alcance y dar por terminado sin verificar.

¿Qué causas ves (staleness, dilución, pollution, distractores) y qué patrón las arregla?
