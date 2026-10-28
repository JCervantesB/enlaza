import type { ServerResponse } from 'node:http';
import { buscarPorSlug, registrarClic } from '../almacen';

/** GET /r/:slug — registra el clic y redirige. */
export function redirigir(slug: string, res: ServerResponse): void {
  const enlace = buscarPorSlug(slug);

  if (!enlace) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Enlace no encontrado');
    return;
  }

  if (enlace.expiraEn && new Date(enlace.expiraEn) < new Date()) {
    res.writeHead(410, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Enlace expirado');
    return;
  }

  registrarClic(slug, new Date().toISOString());
  res.writeHead(302, { Location: enlace.url });
  res.end();
}
