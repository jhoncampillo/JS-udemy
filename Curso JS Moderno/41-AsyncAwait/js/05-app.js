//API

const url = "https://picsum.photos/list";

document.addEventListener("DOMContentLoaded", obtenerDatos);

function obtenerDatos() {
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));
}

//con Async - await

async function obtenerDatos2() {
  try {
    const respueta = await fetch(url);
    const resultado = await respuesta.json();
  } catch (error) {
    console.log(error);
  }
}
