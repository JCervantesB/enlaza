import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { DatabaseSync } from 'node:sqlite';

/** Aplica las migraciones SQL pendientes, en orden alfabético. */
export function migrar(db: DatabaseSync, directorio: string): void {
  db.exec(
    'CREATE TABLE IF NOT EXISTS migraciones (nombre TEXT PRIMARY KEY, aplicada_en TEXT NOT NULL)'
  );

  const aplicadas = new Set(
    (db.prepare('SELECT nombre FROM migraciones').all() as { nombre: string }[]).map(
      (fila) => fila.nombre
    )
  );

  const archivos = readdirSync(directorio)
    .filter((archivo) => archivo.endsWith('.sql'))
    .sort();

  for (const archivo of archivos) {
    if (aplicadas.has(archivo)) {
      continue;
    }
    const sql = readFileSync(join(directorio, archivo), 'utf8');
    db.exec(sql);
    db.prepare('INSERT INTO migraciones (nombre, aplicada_en) VALUES (?, ?)').run(
      archivo,
      new Date().toISOString()
    );
  }
}
