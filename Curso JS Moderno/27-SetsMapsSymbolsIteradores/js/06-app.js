// Crear un iterador
function crearIterador(carrito) {
  let i = 0;
  return {
    siguiente: () => {
      const fin = i >= carrito.lenght;
      const valor = !fin ? carrito[i++] : undefined;

      return fin, valor;
    },
  };
}
//asi funcionan lo iteradores de javascript. este es un iterador creado
//va recoerriendoe la arreglo carrito

const carrito = ["Producto 1", "Produto 2", "Produto 3", "Producto 4"];

//Utilizar el iterador
const recorrecarrito = crearIterador(carrito);

console.log(recorrecarrito.siguiente());
console.log(recorrecarrito.siguiente());
console.log(recorrecarrito.siguiente());
console.log(recorrecarrito.siguiente());
