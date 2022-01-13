//agrego datos al localStorage
localStorage.setItem("nombre", "Juan"); //solo almacena string hay que hacer conversion de objeto y array
//Respuesta en consolas
// Storage {nombre: "Juan", length: 1}
// length: 1
// nombre: "Juan"
// __proto__: Storage

const producto = [
  {
    nombre: "Monitor de 24 Pulgadas",
    precio: 300,
  },
  {
    nombre: "celuler lg",
    Precio: 150,
  },
  {
    nombre: "Pantall Lg 32",
    precio: 250,
  },
];
//conviero el objeto en un string
const productoString = JSON.stringify(producto);
console.log(productoString);

//para agregar al localstorage
localStorage.setItem("producto", productoString);

const meses = ["Enero", "Febrero", "Marzo", " Abril", "Mayo", "Junio", "Julio"];
//convoierto el arreglo en string
const mesesString = JSON.stringify(meses);
console.log(mesesString);
//lo adiciono al local storege
localStorage.setItem("meses", mesesString);

//asi tambien fuciona
//localStorage.setItem('meses', JSON.stringify(meses));

//en el navegador le "localStorage" almacena los datos asi se salga del navegador -
//en "seesionStorage" si se cierra el navegador los datos se peirden
