// Funciones que retornan valores

// Actualmente hemos tenido funciones que envian datos a la consola, ya cuando veamos la parte del DOM algunas funciones van a validar formularios y seguramente ejecutaran todo el código ahí, pero también tendremos funciones que retornan valores para pasarlos hacia otras funciones o hacer algo más...

function sumar(a, b) {
  return a + b;
}

const resultado = sumar(1, 2);

console.log(resultado);

// Ejemplo más avanzado.... agrego el precio nuevo a  la variable total- si la varuable retorna un valor hay que asignarlos a una variable
let total = 0;
function agregarCarrito(precio) {
  return (total += precio);
}

function calcularImpuesto(total) {
  return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(400);
console.log(total);

// aqui retorna valor la funcion principal entonces el return se asiga a una variable.
const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`);
