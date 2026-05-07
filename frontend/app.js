const form = document.getElementById("form-pelicula");
const lista = document.getElementById("lista-peliculas");

const API_URL = "/peliculas";

let peliculas = [];

// OBTENER
async function obtenerPeliculas() {
  const res = await fetch(API_URL);
  peliculas = await res.json();
  renderizarPeliculas();
}

// CREATE / UPDATE
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const id = document.getElementById("pelicula-id").value;

  const datos = {
    titulo: document.getElementById("titulo").value.trim(),
    director: document.getElementById("director").value.trim(),
    anio: Number(document.getElementById("anio").value),
    genero: document.getElementById("genero").value.trim(),
    calificacion: Number(document.getElementById("calificacion").value)
  };

  let res;

  if (id) {
    res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datos)
    });
  } else {
    res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datos)
    });
  }

  const data = await res.json();

  if (!res.ok) {
    alert(data.error);
    return;
  }

  form.reset();
  document.getElementById("pelicula-id").value = "";

  obtenerPeliculas();
});

// RENDER
function renderizarPeliculas() {
  lista.innerHTML = "";

  peliculas.forEach((p) => {
    lista.innerHTML += `
      <div>
        <h3>${p.titulo}</h3>
        <p>Director: ${p.director}</p>
        <p>Año: ${p.anio}</p>
        <p>Género: ${p.genero}</p>
        <p>Calificación: ${p.calificacion}</p>

        <button type="button" onclick="editarPelicula(${p.id})">Editar</button>
        <button type="button" onclick="eliminarPelicula(${p.id})">Eliminar</button>
      </div>
      <hr>
    `;
  });
}

// DELETE
async function eliminarPelicula(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  obtenerPeliculas();
}

// EDIT
function editarPelicula(id) {
  const pelicula = peliculas.find(
    (p) => Number(p.id) === Number(id)
  );

  if (!pelicula) return;

  document.getElementById("pelicula-id").value = pelicula.id;
  document.getElementById("titulo").value = pelicula.titulo;
  document.getElementById("director").value = pelicula.director;
  document.getElementById("anio").value = pelicula.anio;
  document.getElementById("genero").value = pelicula.genero;
  document.getElementById("calificacion").value = pelicula.calificacion;
}

obtenerPeliculas();