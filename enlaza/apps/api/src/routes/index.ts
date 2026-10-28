import type { IncomingMessage, ServerResponse } from 'node:http';
import { existsSync, readFileSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';
import { crearEnlace, verEnlaces, verClics } from './enlaces';
import { redirigir } from './redirigir';

const DIRECTORIO_WEB = join(__dirname, '..', '..', '..', 'web', 'public');

const TIPOS: Record<string, string> = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

/** Enruta cada petición al manejador correspondiente. */
export async function enrutar(req: IncomingMessage, res: ServerResponse): Promise<void> {
  const url = new URL(req.url ?? '/', 'http://localhost');
  const ruta = url.pathname;

  if (req.method === 'POST' && ruta === '/api/enlaces') {
    await crearEnlace(req, res);
    return;
  }
  if (req.method === 'GET' && ruta === '/api/enlaces') {
    verEnlaces(res);
    return;
  }

  const clics = ruta.match(/^\/api\/enlaces\/([^/]+)\/clics$/);
  if (req.method === 'GET' && clics) {
    verClics(decodeURIComponent(clics[1]), res);
    return;
  }

  const redireccion = ruta.match(/^\/r\/([^/]+)$/);
  if (req.method === 'GET' && redireccion) {
    redirigir(decodeURIComponent(redireccion[1]), res);
    return;
  }

  servirEstatico(ruta, res);
}

function servirEstatico(ruta: string, res: ServerResponse): void {
  const relativo = ruta === '/' ? 'index.html' : ruta.slice(1);
  const candidato = normalize(join(DIRECTORIO_WEB, relativo));

  if (!candidato.startsWith(normalize(DIRECTORIO_WEB)) || !existsSync(candidato)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('No encontrado');
    return;
  }

  const tipo = TIPOS[extname(candidato)] ?? 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': `${tipo}; charset=utf-8` });
  res.end(readFileSync(candidato));
}
