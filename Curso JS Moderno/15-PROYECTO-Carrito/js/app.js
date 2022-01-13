//varibales
const carrito = document.querySelector("#carrito");
//donde se van a  colocar los elementos
const contenedorCarrito = document.querySelector("#lista-carrito tbody ");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
//eventos

cargarEventListeners();
function cargarEventListeners() {
  //funcion para agregar cursos
  listaCursos.addEventListener("click", agregarCurso);
}

//Funciones
function agregarCurso(e) {
  console.log("presionando en Cursos");
  //para ver las clases dond estoy haciuendo click
  console.log(e.target.classList);
  //evaluo si ele lemento al que estoy haciendo click
  //contiene la clase agregar-carrito.
  e.preventDefault(); //previene el salto de los gatos #
  if (e.target.classList.contains("agregar-carrito")) {
    console.log("agragando al carrito");
    console.log(e.target.classList);
    //des pued de dat click para poder caprurar el dato  de la etiqueta hay que hacer un traversi -lerre hacia arriba.
  }
}
