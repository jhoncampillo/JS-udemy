//Set Permite crear un lista de valores sin duplicados - son iterbles
const carrito = new Set();
//Agregar elementos  al Set
//lo set solamente son valores - no son llave:valor como los objetos

carrito.add("Camisa");
carrito.add("Disco #1");
carrito.add("Disco #2");
carrito.add("Disco #3");
carrito.add("Camisa"); //dato duplicado no  lo repite
carrito.add("camisa");

//Puedo iterar los set
carrito.forEach((producto, index, pertenece) => {
  console.log(index);
  console.log(producto);
  console.log(pertenece); // imprime el set completo
});

//metodo contar
console.log(carrito.size); //5

//busca si existe un articulo
console.log(carrito.has("Camisa")); //true

//Borrar un elemento
console.log(carrito.delete("Guitarra")); //false - guitarra no existe en el set

//eliminar todo lo elementos del set
//carrito.clear()

console.log(carrito);

//ejemplo eliminar duplicados
const numero = [10, 20, 30, 40, 50, 10, 20];
const noDuplicados = new Set(numero);
console.log(noDuplicados); //Set(5) {10, 20, 30, 40, 50}
