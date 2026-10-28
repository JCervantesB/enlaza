import { randomBytes } from 'node:crypto';

const ALFABETO = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

/** Genera un slug aleatorio del largo indicado. */
export function generarSlug(longitud = 7): string {
  const bytes = randomBytes(longitud);
  let slug = '';
  for (let i = 0; i < longitud; i += 1) {
    slug += ALFABETO[bytes[i] % ALFABETO.length];
  }
  return slug;
}

/** Comprueba que el texto sea una URL http(s) válida. */
export function urlValida(url: string): boolean {
  try {
    const analizada = new URL(url);
    return analizada.protocol === 'http:' || analizada.protocol === 'https:';
  } catch {
    return false;
  }
}
