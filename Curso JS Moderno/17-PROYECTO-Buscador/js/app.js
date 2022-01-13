//contenedor para resultados
const resultado = document.querySelector("#resultado");

//creo variable de select year
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmisio = document.querySelector("#transmision");
const color = document.querySelector("#color");

const max = new Date().getFullYear();
const min = max - 10;
console.log(max);
console.log(min);

//generar objeto para busqueda- creo los selectores arriba
const datosBusqueda = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puertas: "",
  transmision: "",
  color: "",
};

document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos);

  //llenra opcines de annos
  llenarSelect();
});

//EVENT listener para los formularios cuando cambie el select
//a penas selecciono el select del vehiculos se va llenando el objeto
marca.addEventListener("change", (e) => {
  datosBusqueda.marca = e.target.value;
  //console.log(datosBusqueda);
  //creo funciones de alto nivel para que los filtros se generen de manera automativa
  filtrarAuto();
});
year.addEventListener("change", (e) => {
  datosBusqueda.year = parseInt(e.target.value);
  console.log(datosBusqueda);
  filtrarAuto();
});
maximo.addEventListener("change", (e) => {
  datosBusqueda.maximo = e.target.value;
  // console.log(datosBusqueda);
  filtrarAuto();
});
minimo.addEventListener("change", (e) => {
  datosBusqueda.minimo = e.target.value;
  // console.log(datosBusqueda);
  filtrarAuto();
});
puertas.addEventListener("change", (e) => {
  datosBusqueda.puertas = parseInt(e.target.value);
  // console.log(datosBusqueda);
  filtrarAuto();
});

transmision.addEventListener("change", (e) => {
  datosBusqueda.transmision = e.target.value;
  // console.log(datosBusqueda);
  filtrarAuto();
});
color.addEventListener("change", (e) => {
  datosBusqueda.color = e.target.value;
  console.log(datosBusqueda);
  filtrarAuto();
});

//funcio0n mostrar autos
function mostrarAutos(autos) {
  //Elimina HTML previo
  limpiarHTML();

  //itero autos
  autos.forEach((auto) => {
    //Creo el lemento
    const autoHTML = document.createElement("p");
    //desestructuro
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    autoHTML.textContent = ` Marca :${marca}, - Modelo ${modelo} - ${year} -Puertas : ${puertas} - ${transmision} -Precio : ${precio} - Color : ${color}`;
    //insetto el elemento
    resultado.appendChild(autoHTML);
  });
}
//limpio el html para que pmuestre el flitro
function limpiarHTML() {
  while (resultado.firstChild) {
    //elimino resultado.firstChild
    resultado.removeChild(resultado.firstChild);
  }
}

//funcion llenar select
function llenarSelect() {
  //console.log("llenando Select");
  //genero annios
  for (let i = max; i >= min; i--) {
    console.log(i);
    const opcion = document.createElement("option");
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion);
  }
}
//funcion que filtra autos en base a la busqueda
function filtrarAuto() {
  console.log("filtrando");
  //el filter soprta autoencademaniento
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtratMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor);
  console.log(resultado);

  //MENSAJE
  if (resultado.length) {
    console.log(resultado);
    mostrarAutos(resultado);
  } else {
    noResultados();
  }
}

//Funcion mensaje no resultado
function noResultados() {
  limpiarHTML();
  const noResultado = document.createElement("div");
  noResultado.classList.add("alerta", "error");
  noResultado.textContent =
    "No Hay Resultados - Intenta otros Terminos de Busqueda";
  resultado.appendChild(noResultado);
}

//creo la funcion callback que filtra solo marca

//FUNCIONES GENERALES DE LOS FILTROS.
function filtrarMarca(auto) {
  // console.log(auto);
  //comparo lo valores para filtrar marca
  const { marca } = datosBusqueda;
  if (marca) {
    return auto.marca === marca;
  }
  //si no hay fitro trae todo de regreso
  return auto;
}

function filtrarYear(auto) {
  const { year } = datosBusqueda;
  console.log(typeof year);
  //hay que  soluicionar por que compra string con number- soluciono
  //parsenadoi los datos desde la buaqueda paerseIn
  console.log(typeof auto.year);
  if (year) {
    return auto.year === year;
  }
  //si no hay fitro trae todo de regreso
  return auto;
}

function filtrarMinimo(auto) {
  const { minimo } = datosBusqueda;
  if (minimo) {
    return auto.precio >= minimo;
  }
  return auto;
}

function filtratMaximo(auto) {
  const { maximo } = datosBusqueda;
  if (maximo) {
    return auto.precio <= maximo;
  }
  return auto;
}
function filtrarPuertas(auto) {
  const { puertas } = datosBusqueda;
  if (puertas) {
    return auto.puertas === puertas;
  }
  return auto;
}
function filtrarTransmision(auto) {
  const { transmision } = datosBusqueda;
  if (transmision) {
    return auto.transmision === transmision;
  }
  return auto;
}
function filtrarColor(auto) {
  const { color } = datosBusqueda;
  if (color) {
    return auto.color === color;
  }
  return auto;
}
