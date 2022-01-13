// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
//creo  Array del carrito vacio
let articulosCarrito = [];

//carga carrito
cargarEventListeners();
function cargarEventListeners() {
  listaCursos.addEventListener('click', agregarCurso);

  //Elimina cursos del Carrito
  carrito.addEventListener('click', eliminarCurso);

  //Muestra los cursos del localStorage//////////////////////////
  document.addEventListener('DOMContentLoaded', () => {
    // si no hay nada en el carrito agrega un array vacio : || []
    articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carritoHtml();
  });

  //vaciar Carrito
  vaciarCarritoBtn.addEventListener('click', () => {
    // console.log('vaciando carrito');
    articulosCarrito = []; //reinicio el arreglo
    limpiarHtml(); //limpio el html invocando la funcion
  });
}

//funciones  de agregar curso  //////////////////////////////////
function agregarCurso(e) {
  e.preventDefault(); //prevnetdefault evitamos que al dar click en agregar carrito haga un salto hacia arriba. por no tener un apagina web asignada al elemento ancla
  // console.log(e.target.classList); //me muestra lo elementos
  //evalua si contiene la clase 'agregar-carrito' devuelve 'true'
  if (e.target.classList.contains('agregar-carrito')) {
    //console.log('Agregando al Carrito.....');
    console.log(e.target.parentElement.parentElement); //selecciono los parientes en el html
    const cursoSeleccionado = e.target.parentElement.parentElement; //aacedo a todo el div que tiene el contenido del curso
    //llamo la fucnion leerDatosCurso
    leerDatosCurso(cursoSeleccionado);
  }
}

//funcio Eliminar Curso del carrito
function eliminarCurso(e) {
  console.log(e.target.classList);
  if (e.target.classList.contains('borrar-curso')) {
    //   console.log(e.target.getAttribute('data-id')); //muestro el id que voy a borrar
    const cursoId = e.target.getAttribute('data-id');
    // una ves elimino invoco funcion  original del carrito
    carritoHtml();
    //elimina arreglode articulos por el id
    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId);
  }
}

//leer contenido del cuso y extra el Informacion
function leerDatosCurso(curso) {
  console.log(curso);

  //creo un objeto con el contenido del curso actual
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    //acceso al id del curso
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1,
  };
  //voy mirando como se arma el objeto del curso
  console.log(infoCurso);

  //reviso si un elemento ya existe en el carrito
  //.some permite recorrer un arrglo de objetos    y ver si ahy uno en particular
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  if (existe) {
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        console.log(curso.cantidad);
        return curso; //retorna el objeto actualizado
      } else {
        return curso; // retornma los objetos que no son duplicados
      }
    });
    articulosCarrito = [...cursos];
    console.log(cursos);
  } else {
    //     //Agrega Elementos al Array de carrito
    //     //inicio el array con una copia delo que hay el carrito para  no perder el acumumulado al selecionar mas cursos
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  //veo como se llena el carrito
  console.log(articulosCarrito);
  carritoHtml();
}

//Muesta carrito en el html
function carritoHtml() {
  //Limpiar el HTML
  limpiarHtml(); //elimina duplicados
  articulosCarrito.forEach((curso) => {
    //hago desestructuring
    const {imagen, titulo, precio, cantidad, id} = curso;
    //imprimo el contenido del curso en consola
    console.log('curso');
    const row = document.createElement('tr'); //creo un table row
    //adicono la imagen al carrito
    row.innerHTML = `
   
    <td>
        <img src="${imagen}" width="100px">
       </td>   
    
    <td>${titulo}</td>
    <td>${precio}</td>
    <td>${cantidad}</td>
    <td>   
    <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
    </td>

    
   
    `;
    //agregar el HTML del carrito en el tbody
    contenedorCarrito.appendChild(row); //appenchild va agrenado cursos al carrito pero el HTTML no se resfresca- hay que limpiarlo
  });

  //AGREGAR AL LOCAL STORAGE \\\============================////////////////////////
  sincronizarStorage();
}

/// Funcion de Almacenamiento LOCALSTORAGE
function sincronizarStorage() {
  localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

//elimina los cursos del Table Body
function limpiarHtml() {
  //forma lenta
  //contenedorCarrito.innerHTML = '';
  //la invoco arriba
  // de esta otra forma limpio el html- minetras haya un hijo se cumple la condicion hassa que elimina todos los hijos.
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
