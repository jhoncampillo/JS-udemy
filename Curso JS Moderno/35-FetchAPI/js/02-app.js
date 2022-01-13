//Cargar json con fech
//json es una tecnologoia  de transpote
//parece un objeto pero la difererencia es que los datos van  "id": 1,
const cargarJSONBtn = document.querySelector("#cargarJSON");
cargarJSONBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  const url = "./data/empleado.json";
  fetch(url)
    .then((respuesta) => {
      console.log(respuesta);
      return respuesta.json();
    })
    .then((resultado) => {
      console.log(resultado);
      //le mando el resultado a la funcion mostrarHTML-destructuring
      mostrarHTML(resultado);
    })
    .catch((error) => {
      console.log(error);
    });
}
//mostra en  HTML
function mostrarHTML({ empresa, id, nombre, trabajo }) {
  const contenido = document.querySelector(".contenido");

  contenido.innerHTML = `
     <p>Empleado : ${nombre}</p>
     <p>ID : ${id}</p>
     <p>Empresa : ${empresa}</p>
     <p>Trabajo : ${trabajo}</p>
    `;
}
