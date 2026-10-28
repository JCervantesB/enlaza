# Dominio de enlaza

## Términos

- **Enlace** — una URL original registrada en el sistema, asociada a un `slug`.
- **Slug** — identificador corto y único que apunta a un enlace.
- **Clic** — una visita registrada cuando alguien abre el enlace corto.
- **Expiración** — fecha opcional a partir de la cual el enlace deja de redirigir.

## Reglas de negocio

- El `slug` se genera automáticamente y **no** se elige a mano.
- Un enlace **sin** fecha de expiración dura para siempre.
- Un enlace **con** fecha pasada responde con "expirado" y no redirige.
- No se registran clics de enlaces inexistentes ni expirados.
- Las URLs solo pueden ser `http` o `https`.
