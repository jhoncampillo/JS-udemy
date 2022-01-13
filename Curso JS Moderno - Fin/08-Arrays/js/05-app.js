// Supongamos que creamos un carrito de compras desde la consola, más adelante lo haremos ya desde una interfaz web.
const carrito = [];

// Añadir un elemento al carrito...
const producto = {
  nombre: 'Monitor 20 Pulgadas',
  precio: 500,
};

const producto2 = {
  nombre: 'Celular',
  precio: 500,
};

carrito.push(producto);
carrito.push(producto2);

// Añadir al Inicio del carrito...

const producto3 = {
  nombre: 'Teclado',
  precio: 50,
};
carrito.unshift(producto3);

// Existen otras formas más modernas de hacerlo... pero esta sintaxis aún se utiliza mucho asi que veamos como hacerlo en el proximo video

console.log(carrito);

const meses = ['Enero', 'Feberero', 'Marzo'];
console.table(meses);
// push adiciona al final del array
meses.push('Abril', 'Mayo');
console.table(meses);

// unshift adicojna al inicio del array
meses.unshift('Diciembre', 'Noviembre');
console.table(meses);

//creo un carrito vacio - FORMA IMPERATIVA DE ADICONAR - MODIFICA LA VARABLE ORIGINAL

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

carrito1.push(heroe1);
console.table(carrito1);
carrito1.push(heroe2);
console.table(carrito1);

//otro objeto al inicio del carrito1
const heroe3 = {
  id: 3,
  descripcion: 'Batman',
  valor: ' 42000',
};

carrito1.unshift(heroe3);
console.table(carrito1);
