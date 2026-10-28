CREATE TABLE enlaces (
  slug TEXT PRIMARY KEY,
  url TEXT NOT NULL,
  creado_en TEXT NOT NULL,
  expira_en TEXT
);

CREATE TABLE clics (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT NOT NULL REFERENCES enlaces (slug),
  fecha TEXT NOT NULL
);
