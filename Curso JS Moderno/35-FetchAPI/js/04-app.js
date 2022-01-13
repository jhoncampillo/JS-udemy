//Cragar API

const cargarAPIBtn = document.querySelector("#cargarAPI");
cargarAPIBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  const url = "https://picsum.photos/list";
  fetch(url)
    .then((respuesta) => respuesta.json())
    //.then((resultado) => console.log(resultado));
    .then((resultado) => mostrarHTML(resultado));
}
//funcion de mostar datos
function mostrarHTML(datos) {
  const contenido = document.querySelector(".contenido");

  let html = "";
  datos.forEach((perfil) => {
    //destructuring
    const { author, post_url } = perfil;

    html += `
    <p>Autor : ${author}</p>
    //Crago la imagen
    <a href ="${post_url}" target ="_black">Ver Imagen</a>
   `;
  });
  //Pongo el contenido en el html
  contenido.innerHTML = html;
}
