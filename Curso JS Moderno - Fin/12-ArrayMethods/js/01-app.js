// Previamente vimos algunos métodos para strings, para números y también para objetos...

// Veamos una serie de métodos muy útiles cuando se trabaja con arrays y algunos casos de uso

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
  {nombre: 'Monitor 20 Pulgadas', precio: 500},
  {nombre: 'Televisión 50 Pulgadas', precio: 700},
  {nombre: 'Tablet', precio: 300},
  {nombre: 'Audifonos', precio: 200},
  {nombre: 'Teclado', precio: 50},
  {nombre: 'Celular', precio: 500},
  {nombre: 'Bocinas', precio: 300},
  {nombre: 'Laptop', precio: 800},
];

// Si te gustaría saber si nuestro arreglo de meses, tiene el mes de Febrero, podrías hacerlo con un foreach...

meses.forEach((mes) => {
  if (mes === 'Septiembre') {
    console.log('Enero si existe...');
  } else {
    console.log('No existe');
  }
});

// O también podrías utilizar el Array Method de .includes
// include solo trabaja en array de un solo valor
const resultado = meses.includes('Enero'); // Cambiar a Diciembre...
console.log(resultado);

// En el caso de un arreglo de objetos... .includes no es la mejor opción, podrías utilizar uno llamado .some
const existe = carrito.some((producto) => producto.nombre === 'Celular');
console.log(existe);

// Some en un arreglo tradicional... // Da falso por que Diciembre no exixte en el arreglo
const existe2 = meses.some((mes) => mes === 'Diciembre');
console.log(existe2);
