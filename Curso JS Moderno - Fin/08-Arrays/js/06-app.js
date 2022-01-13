// Veamos como añadir un elemento a un arreglo utilizando el Spread Operator o Rest Operator...
const carrito = [];

// Añadir un elemento al carrito...
const producto = {
  nombre: 'Monitor 20 Pulgadas',
  precio: 500,
};

const producto2 = {1
  nombre: 'Celular',
  precio: 500,
};
const producto3 = {
  nombre: 'Teclado',
  precio: 50,
};

// Para añadir producto al arreglo simplemente agregamos...
let resultado = [...carrito, producto];
resultado = [...resultado, producto2];

// Para añadir al inicio...
resultado = [producto3, ...resultado];

//Esta forma se conoce más como Declarativa mientras que la del video anterior es más imperativa, ambas son muy utilizadas en programación JavaScript

console.log(resultado);

//OTRA FORMA DE ADCIONAR OBJETOS A UN ARREGLO
// ADDICIONAR DE FORMA DECLARATIVA CON ... SPRED OPERATOR
//creo un carrito vacio

const carrito1 = [];

//creo objetos

const heroe1 = {
  id: 1,
  descripcion: 'Iron Man',
  valor: 45000,
};

const heroe2 = {
  id: 2,
  descripcion: 'Acuaman',
  valor: ' 40000',
};

// carrito1.push(heroe1);
// console.table(carrito1);
// carrito1.push(heroe2);
// console.table(carrito1);

//otro objeto al inicio del carrito1
const heroe3 = {
  id: 3,
  descripcion: 'Batman',
  valor: ' 42000',
};

// carrito1.unshift(heroe3);
// console.table(carrito1);

let resulcarrito1;
//ADICIONO UNELEMENTO
resulcarrito1 = [...carrito1, heroe1];
console.table(resulcarrito1);
//ADICIONO EL SEGUNDO ELEMENTO
resulcarrito1 = [...resulcarrito1, heroe2];
console.table(resulcarrito1);

//ADICIONO AL PRIMER LUGAR DEL ARREGLO
resulcarrito1 = [heroe3, ...resulcarrito1];
console.table(resulcarrito1);
