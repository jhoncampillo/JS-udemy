//Full Screen -- salir de pantalla completa o entre.
const abrirBtn = document.querySelector("#abrir-pantalla-completa");
const salirBtn = document.querySelector("salir-pantalla-completa");

abrirBtn.addEventListener("click", pantallaCompleta);
salirBtn.addEventListener("click", salirPantallaCompleta);

function pantallaCompleta() {
  //puedo seleccionar el elemento que desoo ver en pantall completa
  // document se refiere al documento total.
  document.documentElement.requestFullscreen();
}

function salirPantallaCompleta() {
  document.exitFullscreen();
}
