import { DatabaseSync } from 'node:sqlite';
import type { Enlace } from '@enlaza/shared';

let db: DatabaseSync | null = null;

/** Abre la base de datos y la deja lista para usarse. */
export function iniciar(ruta: string): DatabaseSync {
  db = new DatabaseSync(ruta);
  return db;
}

function conexion(): DatabaseSync {
  if (!db) {
    throw new Error('La base de datos no está iniciada');
  }
  return db;
}

export function guardarEnlace(enlace: Enlace): void {
  conexion()
    .prepare('INSERT INTO enlaces (slug, url, creado_en, expira_en) VALUES (?, ?, ?, ?)')
    .run(enlace.slug, enlace.url, enlace.creadoEn, enlace.expiraEn);
}

export function buscarPorSlug(slug: string): Enlace | null {
  const fila = conexion()
    .prepare(
      'SELECT slug, url, creado_en AS creadoEn, expira_en AS expiraEn FROM enlaces WHERE slug = ?'
    )
    .get(slug) as Enlace | undefined;
  return fila ?? null;
}

export function listarEnlaces(): Enlace[] {
  return conexion()
    .prepare(
      'SELECT slug, url, creado_en AS creadoEn, expira_en AS expiraEn FROM enlaces ORDER BY creado_en DESC'
    )
    .all() as unknown as Enlace[];
}

export function registrarClic(slug: string, fecha: string): void {
  conexion().prepare('INSERT INTO clics (slug, fecha) VALUES (?, ?)').run(slug, fecha);
}

export function contarClics(slug: string): number {
  const fila = conexion()
    .prepare('SELECT COUNT(*) AS total FROM clics WHERE slug = ?')
    .get(slug) as { total: number };
  return fila.total;
}
