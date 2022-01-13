// En este video veremos for of...

// For of no es como un for tradicional que ejecuta una pieza de código mientras una condición sea verdadera, este ejecuta mientras haya elementos por iterrar como puede ser un arreglo y otros llamados Maps y Sets que veremos más adelante...

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

for (let pendiente of pendientes) {
  console.log(pendiente);
}

// Sin duda una forma más sencilla que un foreach y un for no?

const carrito = [
  {nombre: 'Monitor 20 Pulgadas', precio: 500},
  {nombre: 'Televisión 50 Pulgadas', precio: 700},
  {nombre: 'Tablet ', precio: 300, descuento: true},
  {nombre: 'Audifonos', precio: 200},
  {nombre: 'Teclado', precio: 50, descuento: true},
  {nombre: 'Celular', precio: 500},
];
for (let producto of carrito) {
  console.log(`Producto ==> ${producto.nombre} Precio ==>$ ${producto.precio}`);
}
