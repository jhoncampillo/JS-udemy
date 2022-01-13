// // De aquí en adelante estaremos viendo una serie de métodos de arreglos
// const carrito = [
//     { nombre: 'Monitor 20 Pulgadas', precio: 500},
//     { nombre: 'Televisión 50 Pulgadas', precio: 700},
//     { nombre: 'Tablet ', precio: 300},
//     { nombre: 'Audifonos', precio: 200},
//     { nombre: 'Teclado', precio: 50},
//     { nombre: 'Celular', precio: 500},
// ]

// // Recorrer un arreglo de la forma tradicional y mostrar su contenido...
// for(let i = 0; i < carrito.length; i++ ){
//     console.log( `Articulo: ${ carrito[i].nombre } Precio: $ ${carrito[i].precio} ` )
// }

// // ForEach
// carrito.forEach( function(producto) {
//     console.log( `Articulo: ${ producto.nombre } Precio: $ producto.precio} ` )
// })

const carrito2 = [
  {nombre: 'Monitor 20 Pulgadas', precio: 500},
  {nombre: 'Televisión 50 Pulgadas', precio: 700},
  {nombre: 'Tablet ', precio: 300},
  {nombre: 'Audifonos', precio: 200},
  {nombre: 'Teclado', precio: 50},
  {nombre: 'Celular', precio: 500},
];
console.log(carrito2);
// Recorrido con  For
for (let i = 0; i < carrito2.length; i++) {
  console.log(
    `Articulo ==> ${carrito2[i].nombre} Precio ==>$ ${carrito2[i].precio}`
  );
}

//Recorrido con ForEach - array metod
//todo despues del punto es un metodo ejemplo array.map el metodo es map
carrito2.forEach(function (producto) {
  console.log(`Artuculo ==> ${producto.nombre} Precio ==>$ ${producto.precio}`);
});
