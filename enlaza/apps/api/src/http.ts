import type { IncomingMessage, ServerResponse } from 'node:http';

/** Responde con JSON. */
export function responderJson(res: ServerResponse, estado: number, datos: unknown): void {
  res.writeHead(estado, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(datos));
}

/** Lee y parsea el cuerpo JSON de la petición. */
export function leerCuerpo(req: IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    let cuerpo = '';
    req.on('data', (fragmento) => {
      cuerpo += fragmento;
    });
    req.on('end', () => {
      try {
        resolve(cuerpo ? JSON.parse(cuerpo) : {});
      } catch {
        reject(new Error('JSON inválido'));
      }
    });
  });
}
