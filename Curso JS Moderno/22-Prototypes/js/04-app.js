//Herencia con prototypos.
//Crear Prototypes
function Cliente(nombre, saldo) {
  (this.nombre = nombre), (this.saldo = saldo);
}
//creo el prototype  - simepre invoca una funcion
// ESTE PROTOTIPO ES EXCLUSIVO PARA EL OBJETO Cliente
// prototipo usa function(buaca en el objeto actual) para poder acceder a los objeto this.
// si se usa arrow function esta busca en la  venta global. window
Cliente.prototype.tipoCliente = function () {
  //   console.log(this.saldo);
  //Vamos a evaluar
  let tipo;
  if (this.saldo > 10000) {
    tipo = 'Gold';
  } else if (this.saldo > 5000) {
    tipo = 'Platino';
  } else {
    tipo = 'Normal';
  }
  return tipo;
};

//puedo crear otro prototype que llegue a datos de otro prototypo de cliente
Cliente.prototype.nombreClienteSaldo = function () {
  return `Nombre : ${this.nombre}, Saldo ${
    this.saldo
  }, Tipo cliente ${this.tipoCliente()}`;
};

//Otro prototype
Cliente.prototype.retirarSaldo = function (retira) {
  this.saldo -= retira;
};

function Persona(nombre, saldo, telefono) {
  //como hay atributos en otra clase  sililares  invoco la herencia
  Cliente.call(this, nombre, saldo);
  this.telefono = telefono;
  //por que no es un atributo comun en las dos funciones
  // (this.nombre = nombre)

  // (this.saldo = saldo),
  // (this.telefono = telefono);
}

//si quieres heradar la fuciones  de la otra clase tiene que serANTES de crear una estancia
//Object.create copia el prototype y lo asigna a otra funcion
Persona.prototype = Object.create(Cliente.prototype);
//aqui ya las funciones del objeto  cliente pueden ser usadas por el objeto Persona.

//llamo el contructor
Persona.prototype.constructor = Cliente;

//instancio
const juan = new Persona('Juan', 5000, 10920192);
console.log(juan);
//uso las fucniones de otros objetos

console.log(juan.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function () {
  return `El telefono de esta persona es ${this.telefono}`;
};

console.log(juan.mostrarTelefono());

//God object - objeto todo poderoso
