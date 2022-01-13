//Generadores  -- un generador es una funcion que retorna un iterador

function* crearGenerador() {
  yield 1;
  yield "Juan";
  yield 3 + 3;
  yield true;
}

// const iterador = crearGenerador();

// console.log(iterador);
// console.log(iterador.next().value);
// console.log(iterador.done());
// console.log(iterador.next().value);
// console.log(iterador.next());
// console.log(iterador.next());
//el metodo

//Otro ejemplo
//Generador para carrito de de compras

function* generadorCarrito(carrito) {
  for (let i = 0; i < carrito.length; i++) {
    yield carrito[i];
  }
}

const carrito = ["Producto 1", "Produto 2", "Produto 3", "Producto 4"];

const iterador = generadorCarrito(carrito);

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
