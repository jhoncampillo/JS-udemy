//Lo puedo Hacer de forma automatica sin Uar el Btn
//document.addEventListener("DOMContentLoaded", obtenerDatos);

//Cragar un JSON que es un array
const cargarJSONArrayBtn = document.querySelector("#cargarJSONArray");
//
cargarJSONArrayBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  const url = "./data/empleados.json";

  fetch(url)
    .then((respuesta) => respuesta.json())

    //.then((resultado) => console.log(resultado))
    .then((resultado) => mostrarHTML(resultado));
}
function mostrarHTML(empleados) {
  const contenido = document.querySelector(".contenido");
  //genero un html que es string
  let html = ``;

  empleados.forEach((empleado) => {
    //destructuring
    const { id, nombre, empresa, trabajo } = empleado;

    //+= concatena el html
    html += `
          <p>Empleado : ${nombre}</p>
          <p>ID : ${id}</p>
          <p>Empresa : ${empresa}</p>
          <p>Trabajo : ${trabajo}</p>
        `;
  });
  contenido.innerHTML = html;
}
