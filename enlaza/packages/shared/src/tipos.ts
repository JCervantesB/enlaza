/** Un enlace acortado. */
export interface Enlace {
  slug: string;
  url: string;
  creadoEn: string;
  expiraEn: string | null;
}

/** Un clic registrado sobre un enlace. */
export interface Clic {
  id: number;
  slug: string;
  fecha: string;
}
