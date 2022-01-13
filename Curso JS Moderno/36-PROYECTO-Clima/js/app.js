//Buscar Clima
const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

//similar a DOMContentLoaded solo que este en en window e otro en document
window.addEventListener("load", () => {
  formulario.addEventListener("submit", buscarClima);
});

function buscarClima(e) {
  e.preventDefault();

  // console.log("buscando el clima");

  //validar campos del formulario llenos
  const ciudad = document.querySelector("#ciudad").value;
  const pais = document.querySelector("#pais").value;

  //   console.log(ciudad);
  //   console.log(pais);
  //Negqacion-* null- vacio - cero
  if (!ciudad || !pais) {
    //Hubo erro -- creo una fucnio que maneje los erores
    mostrarError("Todos los campos son obligatorios.");
    return;
  }

  //A la APi hay que evierl elos valores que llos esperan en este caso
  //el pais se nevia de dos letras - Estados Unidos = US

  //consultar la Api
}

//funcion mostrarError

function mostrarError(mensaje) {
  //console.log(mensaje); aqui valodo que no sepita la alerta hacia bajo
  const alerta = document.querySelector(".bg-red-100");

  if (!alerta) {
    //crear una alerta con scripting en el HTML
    const alerta = document.createElement("div");
    alerta.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-md",
      "mx-auto",
      "mt-6",
      "text-center"
    );

    alerta.innerHTML = `
      <strong class="font-bold">Error!</strong>
      <span class="block">${mensaje}</span>
  `;
    //agrego la alerta
    //pero tengo que validar qu no se repita hacia bajo
    container.appendChild(alerta);

    //elieminar la alerta despues de 5 segundos
    setTimeout(() => {
      alerta.remove;
    }, 5000);
  }
}
