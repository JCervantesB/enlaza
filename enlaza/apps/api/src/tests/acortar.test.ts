import { test } from 'node:test';
import assert from 'node:assert/strict';
import { generarSlug, urlValida } from '../acortar';

test('generarSlug devuelve un slug de la longitud pedida', () => {
  assert.equal(generarSlug(7).length, 7);
  assert.equal(generarSlug(10).length, 10);
});

test('generarSlug produce slugs distintos', () => {
  assert.notEqual(generarSlug(), generarSlug());
});

test('generarSlug solo usa caracteres del alfabeto', () => {
  assert.match(generarSlug(), /^[a-zA-Z0-9]+$/);
});

test('urlValida acepta http y https', () => {
  assert.equal(urlValida('https://ejemplo.com'), true);
  assert.equal(urlValida('http://ejemplo.com/ruta?x=1'), true);
});

test('urlValida rechaza lo que no es una URL http(s)', () => {
  assert.equal(urlValida('no-es-una-url'), false);
  assert.equal(urlValida('ftp://ejemplo.com'), false);
});
