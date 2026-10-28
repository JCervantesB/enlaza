import { createServer } from 'node:http';
import { mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { iniciar } from './almacen';
import { migrar } from './migrar';
import { enrutar } from './routes';

const PUERTO = Number(process.env.PORT ?? 3000);
const RUTA_DB = process.env.ENLAZA_DB ?? join(process.cwd(), 'data', 'enlaza.db');

mkdirSync(dirname(RUTA_DB), { recursive: true });

const db = iniciar(RUTA_DB);
migrar(db, join(__dirname, '..', 'migrations'));

const servidor = createServer((req, res) => {
  enrutar(req, res).catch(() => {
    res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ error: 'Error interno' }));
  });
});

servidor.listen(PUERTO, '0.0.0.0', () => {
  console.log(`enlaza en http://localhost:${PUERTO}`);
});
