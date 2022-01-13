//Variables//////////////////////////////////////////////////////////////////////
// creo las connstante para llenar el objeto

//creo variable del select  de annios
const year = document.querySelector('#year');
const max = new Date().getFullYear(); // adiciona el annio actual
const min = max - 10;
const marca = document.querySelector('#marca');
////
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// cargo div con id = 'resultados que es donde se mostrara en el html los autos de la base
const resultado = document.querySelector('#resultado');

//Genero un objeto que almacene los diferentes parametros de busqueda
const datosBusquedad = {
  marca: '',
  year: '',
  minimo: '',
  maximo: '',
  puertas: '',
  transmision: '',
  color: '',
};

//////////////////////Eventos////////////////////////////////////////////////
//cargae le html y carga una funcion
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos(autos); // muestra los automoviles al cargar

  //llena el select de los annios
  llenarSelect();
});

// Event Listener para los select de busqueda- lee el evento change
marca.addEventListener('change', (e) => {
  //console.log(e.target.value);
  //llamo el objeto busqueda y le adiocno el valor de e.target.value
  datosBusquedad.marca = e.target.value;
  console.log(datosBusquedad);

  //creo una funcion de Alto Nivel = funcion que recibe otra funcion. para Filtrar
  filtrarAuto();
});
year.addEventListener('change', (e) => {
  //llos datos que bienen del formulario tambien se pueden tranformar coon parseInt desde la captuta
  // datosBusquedad.year = parseInt(e.target.value);
  datosBusquedad.year = e.target.value;
  // console.log(datosBusquedad);
  filtrarAuto();
});
puertas.addEventListener('change', (e) => {
  datosBusquedad.puertas = parseInt(e.target.value);
  // console.log(datosBusquedad);
  filtrarAuto();
});
minimo.addEventListener('change', (e) => {
  datosBusquedad.minimo = e.target.value;
  // console.log(datosBusquedad);
  filtrarAuto();
});
maximo.addEventListener('change', (e) => {
  datosBusquedad.maximo = e.target.value;
  // console.log(datosBusquedad);
  filtrarAuto();
});

color.addEventListener('change', (e) => {
  datosBusquedad.color = e.target.value;
  // console.log(datosBusquedad);
  filtrarAuto();
});

transmision.addEventListener('change', (e) => {
  datosBusquedad.transmision = e.target.value;
  //console.log(datosBusquedad);
  filtrarAuto();
});

//////////////Funciones////////////////////////////////////
function mostrarAutos(autos) {
  // paso los autos para que se muestren los autos filtrados

  //limpio el HTML previo que tenia todos los carros

  limpiarHTML();
  /////
  autos.forEach((auto) => {
    //desestructuro
    const {marca, modelo, year, puertas, transmision, precio, color} = auto;
    //creo un parrafo para cada Automovil
    const autoHTML = document.createElement('p');

    autoHTML.textContent = `
         ${marca} ${modelo}- ${year} - ${puertas} Puertas -- Transmision :${transmision} -- Precio $: ${precio} -- Color ${color}
      `;

    //inserto en el html
    resultado.appendChild(autoHTML);
  });
}
//creo una fruncion que limpie el HTML para que solo muestre los filtros y limpie la pantall
//Limpiar HTML
function limpiarHTML() {
  //   //mientras halla algo // limpio el resultado que depliega los todos los carros en el html inicialmente
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}

//funcion de llenar annio select
function llenarSelect() {
  for (let i = max; i >= min; i--) {
    // console.log(i);
    const opcion = document.createElement('option');
    opcion.value = i; //le eagrego el valor de la i a la opcion
    console.log(opcion);
    opcion.textContent = i;
    console.log(opcion);
    year.appendChild(opcion); //agrega opcines de annio al select
    //console.log(year);
  }
}

//Funcion de alto nivel - filtra de acuerdo a al abusqueda.
function filtrarAuto() {
  //console.log('Filtrando marca....');
  // en el filter llamo la fincion filtrarMarca que esta abajo. asi solo tenga un selctor activado
  // filtro con encadenamiento
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor);
  console.log(resultado);

  // Una vez hago los filtros tengo que refrescar el HTML
  // llamo la funcio mostarAutos que muestra todos lo autos en el html y le paso el parametro de los filtro 'resultado'
  //adiciono if para cuando no hay concidencias en  los parametrsoi de busqueda
  if (resultado.length) {
    mostrarAutos(resultado);
  } else {
    //llamo la funcion noResultado.
    noResultados();
  }
}

//funcion no resultado con div
function noResultados() {
  limpiarHTML();
  const noResultados = document.createElement('div');
  noResultados.classList.add('alerta', 'error');
  noResultados.textContent =
    'No Hay Resultado.. Intenta con otros Parametros de busqueda';
  //llamo la fucnion resultado para imprimir en el html en la misma parte
  resultado.appendChild(noResultados);
}

function filtrarMarca(auto) {
  //console.log(auto);

  const {marca} = datosBusquedad;
  // esto es igual a "if (datosBusqueda.marca)" no esta vacia
  if (marca) {
    return auto.marca === marca;
  }
  //si solo selcciono un filtro retorno solo el filtro seleecionado y retorno el auto completo
  return auto;
}

//filtro el annio. la fuccion se invoca en el filtro encadenado
function filtrarYear(auto) {
  //asigno el annio a datos de busqeda
  const {year} = datosBusquedad;
  //tengo que poner esto por que si no al consultar el annio llega el arreglo vacio
  //   console.log(typeof year);
  //   console.log(typeof auto.year); // se compara numero con fecha

  // hay que transformar el datos del year- que esta como numero y el que viene del formulario biene como string
  // transformo con parseInt
  if (year) {
    return auto.year === parseInt(year);
  }
  return auto;
}

// funcion filtraMinimo
function filtrarMinimo(auto) {
  //se jecuta si hay un minimo
  const {minimo} = datosBusquedad;
  if (minimo) {
    return auto.precio >= minimo;
  }
  return auto;
}

//funcion filtrarMaximo
function filtrarMaximo(auto) {
  const {maximo} = datosBusquedad;
  //console.log(maximo);
  if (maximo) {
    return auto.precio <= maximo;
  }
  return auto;
}
//funcion filtrarPuertas
function filtrarPuertas(auto) {
  const {puertas} = datosBusquedad;
  if (puertas) {
    // combierto el cxampo del formulario en enetro arriba.  con parseInt()
    return auto.puertas === puertas;
  }
  return auto;
}

//funcion filtrarTransmision
function filtrarTransmision(auto) {
  const {transmision} = datosBusquedad;
  if (transmision) {
    return auto.transmision === transmision;
  }
  return auto;
}

//funcion filtrarColor
function filtrarColor(auto) {
  const {color} = datosBusquedad;
  if (color) {
    return auto.color === color;
  }
  return auto;
}
