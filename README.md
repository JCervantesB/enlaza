# Materiales de inicio · Curso Context Engineering para Desarrolladores

Este paquete acompaña el curso. Contiene el proyecto de práctica `enlaza` y algunos
ejemplos de apoyo para las demos.

```text
materiales-inicio/
├── enlaza/                  # el monorepo funcional (SIN archivos de contexto)
└── ejemplos/                # apoyo para las demos
    ├── prompt-largo-A.md    # Módulo 1: escenario A (prompt improvisado) del A/B
    ├── prompt-corto-B.md    # Módulo 1: escenario B (prompt mínimo) del A/B
    ├── sesion-larga.md      # Módulo 5: detector de contexto
    ├── resumen-compaction.md# Módulo 6: compresión
    ├── archivo-progreso.md  # Módulo 6: contexto persistente
    └── contexto-referencia/ # Módulo 1 y 8: la versión "B" del experimento A/B
```

## `enlaza`

Un monorepo pequeño y **funcional** (acortador de URLs): `apps/api`, `apps/web` y
`packages/shared`. Sin dependencias de runtime (usa `node:http` y `node:sqlite`).

```bash
cd enlaza
npm install
npm run dev        # http://localhost:3000
npm test
```

**Importante:** `enlaza` **no incluye** los archivos de contexto. Durante el curso vas a
crear:

- `AGENTS.md` en la raíz y uno por paquete.
- `docs/arquitectura.md`, `docs/convenciones.md` y `docs/dominio.md`.
- Un archivo de progreso para el contexto persistente.

Puedes ver una versión completa de esos archivos en
`ejemplos/contexto-referencia/` (es la que se usa para el experimento A/B).
