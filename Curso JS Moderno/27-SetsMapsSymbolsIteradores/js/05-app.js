////Simbol
const sym = Symbol("1");
const sym2 = Symbol("1");
// los symbol son son iguales nunca asi tengan el  mismo valor de arguemento

if (sym == sym2) {
  console.log("Son iguales");
} else {
  console.log("Son dierentes");
}

//ejemplo

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

//garego nombre y apellido como llaves del objeto
persona[nombre] = "Juan";
persona[apellido] = "de la Torre";
persona.tipoCliente = "Premium";
persona.saldo = 500;

console.log(persona);

//para acceder a los datos typo symbol hay que usar corchetes

console.log(persona[nombre]);

//Las propiedades que utilizan symbol no son iterables
for (let i in persona) {
  console.log(i);
}
//tipoCliente
//saldo

//Definir descripcion del Symbol - este es el constructor
const nombreCliente = Symbol("Nombre del Cliente");
const cliente = {};

cliente[nombreCliente] = "Pedro";
console.log(cliente);
