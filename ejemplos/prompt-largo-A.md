# Escenario A · Prompt largo improvisado (Módulo 1, lección 1.3)

> Este es el prompt del **escenario A** del experimento A/B. Es un prompt realista de
> "lo cuento todo de una vez": largo, sin estructura, mezcla contexto con instrucciones,
> incluye ruido y hasta una credencial. Cópialo tal cual en tu agente para ver el contraste
> con el escenario B (`ejemplos/prompt-corto-B.md`).

---

```text
Hola, necesito ayuda con un proyecto que tengo. Es un acortador de URLs que se llama
"enlaza" y la verdad es que es un proyecto bastante completo porque tiene varias partes.
A ver, te explico todo lo que puedas necesitar antes de pedirte lo que quiero, para que
no te equivoques.

Primero, la estructura: hay una carpeta apps y dentro hay dos, apps/api y apps/web, y
además hay una carpeta packages con shared. La api es donde está toda la lógica
importante, la web es el panel, y shared son tipos que se comparten entre ambas. Está en
un monorepo con npm workspaces. La api está hecha en TypeScript, con el modo estricto
activado, y usa node:http para el servidor y node:sqlite para la base de datos, así que
no hay dependencias externas, que es algo importante porque en el equipo queremos
mantenerlo sin dependencias. Los nombres de archivo van en kebab-case, las funciones en
camelCase y los tipos en PascalCase. Ah, y una cosa muy importante: nunca usamos export
default, siempre exportamos por nombre. Eso es una convención que respetamos muchísimo.

Sobre la base de datos: hay una carpeta migrations en apps/api con archivos .sql que se
aplican en orden y se registran en una tabla "migraciones". Ahora mismo hay una migración
inicial que crea las tablas "enlaces" y "clics". La tabla enlaces tiene slug (clave
primaria), url, creado_en y expira_en. La tabla clics tiene id, slug y fecha. El slug se
genera automáticamente con caracteres alfanuméricos, normalmente 7 caracteres, no lo
elige el usuario.

Las rutas de la API están en apps/api/src/routes. Ahora mismo tenemos POST /api/enlaces
para crear, GET /api/enlaces para listar, GET /api/enlaces/:slug/clics para las
estadísticas y GET /r/:slug que registra el clic y redirige con un 302. La lógica de
acortado está en apps/api/src/acortar.ts y el acceso a datos en apps/api/src/almacen.ts.
Las rutas no deberían tener lógica de negocio, solo llamar a esos módulos.

Reglas del proyecto: antes de dar algo por terminado hay que ejecutar npm test, que corre
las pruebas con node --test. No se pueden añadir dependencias sin hablarlo con el equipo.
No se puede cambiar el esquema de datos sin avisar. Y nunca, nunca, se meten credenciales
en el código. Tampoco se pueden modificar migraciones que ya se aplicaron, porque ya están
en producción. Tampoco se puede importar desde apps dentro de packages/shared, porque
shared tiene que ser independiente.

Otra cosa, el dominio: un enlace es una URL registrada que tiene un slug; un clic es una
visita; y la expiración es una fecha opcional a partir de la cual el enlace deja de
funcionar. Un enlace sin fecha de expiración dura para siempre. Las URLs solo pueden ser
http o https. Tenemos una carpeta docs con documentación pero todavía está incompleta.

Ah, y por si acaso, la contraseña de la base de datos de staging es "super-secreta-123",
no la uses pero te la digo para que la tengas en cuenta. También, el equipo está pensando
en migrar el frontend a React el año que viene, y hay una discusión abierta sobre si usar
Redis para los contadores de clics.

Vale, después de todo esto, lo que quiero es que me ayudes a añadir la funcionalidad de
expiración de enlaces: que un enlace pueda tener fecha de expiración y que si alguien lo
abre después de esa fecha, no redirija. Creo que hay que tocar la migración, la creación
del enlace y la redirección. Hazlo todo de una vez y me lo das completo. Gracias.
```

---

## Qué falla en este prompt (para comentarlo en la lección)

- **Es larguísimo y sin estructura**: todo es un párrafo. Cuesta leerlo y cuesta localizar
  lo importante.
- **Mezcla contexto con instrucciones**: no hay separación entre "esto es información del
  proyecto" y "esto es lo que quiero".
- **Da igual peso a todo**: la convención crítica (`no usar export default`) queda
  enterrada entre detalles menores.
- **Incluye ruido**: la migración del frontend a React y la discusión de Redis no tienen
  nada que ver con la tarea.
- **Incluye una credencial**: `super-secreta-123` nunca debería aparecer en un prompt
  (volveremos a esto en el Módulo 4).
- **Pide "todo de una vez"**: sin plan, sin criterios y sin delimitar el alcance.

Compáralo con el escenario B (`ejemplos/prompt-corto-B.md`) y con el proyecto de
referencia (`ejemplos/contexto-referencia/`).
