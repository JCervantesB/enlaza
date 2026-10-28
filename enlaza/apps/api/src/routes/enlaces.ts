import type { IncomingMessage, ServerResponse } from 'node:http';
import type { Enlace } from '@enlaza/shared';
import { generarSlug, urlValida } from '../acortar';
import { guardarEnlace, listarEnlaces, contarClics, buscarPorSlug } from '../almacen';
import { leerCuerpo, responderJson } from '../http';

interface CuerpoEnlace {
  url?: string;
  expiraEn?: string | null;
}

/** POST /api/enlaces */
export async function crearEnlace(req: IncomingMessage, res: ServerResponse): Promise<void> {
  let cuerpo: CuerpoEnlace;
  try {
    cuerpo = (await leerCuerpo(req)) as CuerpoEnlace;
  } catch {
    responderJson(res, 400, { error: 'Cuerpo inválido' });
    return;
  }

  if (!cuerpo.url || !urlValida(cuerpo.url)) {
    responderJson(res, 400, { error: 'URL inválida' });
    return;
  }

  const enlace: Enlace = {
    slug: generarSlug(),
    url: cuerpo.url,
    creadoEn: new Date().toISOString(),
    expiraEn: cuerpo.expiraEn ?? null,
  };

  guardarEnlace(enlace);
  responderJson(res, 201, enlace);
}

/** GET /api/enlaces */
export function verEnlaces(res: ServerResponse): void {
  responderJson(res, 200, listarEnlaces());
}

/** GET /api/enlaces/:slug/clics */
export function verClics(slug: string, res: ServerResponse): void {
  const enlace = buscarPorSlug(slug);
  if (!enlace) {
    responderJson(res, 404, { error: 'Enlace no encontrado' });
    return;
  }
  responderJson(res, 200, { slug, clics: contarClics(slug) });
}
