const formulario = document.getElementById('formulario');
const campoUrl = document.getElementById('url');
const lista = document.getElementById('enlaces');

async function cargar() {
  const res = await fetch('/api/enlaces');
  const enlaces = await res.json();

  lista.innerHTML = '';
  enlaces.forEach((enlace) => {
    const li = document.createElement('li');

    const enlaceCorto = document.createElement('a');
    enlaceCorto.href = `/r/${enlace.slug}`;
    enlaceCorto.textContent = `/${enlace.slug}`;

    const destino = document.createElement('span');
    destino.textContent = enlace.url;

    li.appendChild(enlaceCorto);
    li.appendChild(destino);
    lista.appendChild(li);
  });
}

formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault();
  if (!campoUrl.value) {
    return;
  }

  await fetch('/api/enlaces', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: campoUrl.value }),
  });

  campoUrl.value = '';
  cargar();
});

cargar();
