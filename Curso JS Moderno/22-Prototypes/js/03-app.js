//Crear Prototypes
function Cliente(nombre, saldo) {
  (this.nombre = nombre), (this.saldo = saldo);
}
//creo el prototype  - simpre invoca una funcion
// ESTE PROTOTIPO ES EXCLUSIVO PARA EL OBJETO Cliente
// prototipo usa function(buaca en el objeto actual) para poder acceder a los objeto this.
// si se usa arrow function esta busca en la  venta global. window
Cliente.prototype.tipoCliente = function () {
  //   console.log(this.saldo);
  //Vamos a evaluar
  let tipo;
  if (this.saldo > 10000) {
    tipo = "Gold";
  } else if (this.saldo > 5000) {
    tipo = "Platino";
  } else {
    tipo = "Normal";
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

//instancio el constructor del objeto
const pedro = new Cliente("Pedro", 6000);
console.log(pedro.tipoCliente());
//Platino

//Cliente {nombre: "Pedro", saldo: 6000}
//nombre: "Pedro"
//saldo: 6000
//__proto__:
//tipoCliente: ƒ ()// Este es el nuevo Prototype
//constructor: ƒ Cliente(nombre, saldo) // este es el constructor
//__proto__: Object

console.log(pedro.nombreClienteSaldo());
//Nombre : Pedro, Saldo 6000, Tipo cliente Platino

pedro.retirarSaldo(1000);
console.log(pedro.nombreClienteSaldo());
//Nombre : Pedro, Saldo 5000, Tipo cliente Normal

// para usarlo
pedro.tipoCliente();
console.log(pedro);

//////////////
//Creo otro Objeto
function Empresa(nombre, saldo, categoria) {
  (this.nombre = nombre), (this.saldo = saldo), (this.categoria = categoria);
}
const CCJ = new Empresa("Codigo con Juan", 4000, "Cursos en Linea");
console.log(CCJ);

//
