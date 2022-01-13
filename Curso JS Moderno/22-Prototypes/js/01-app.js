//Prototypes estan relacionados con los objetos
//todos los objetos tienen un protoype

//objetos literales - no reutilizable
const cliente = {
  nombre: "Juan",
  saldo: 500,
};
console.log(cliente);
console.log(typeof cliente);

// creacion por object Constructor
// este objeto es reutilizable

function Cliente(nombre, saldo) {
  (this.nombre = nombre), (this.saldo = saldo);
}

const juan = new Cliente("Juan", 2000);
console.log(juan);

const jhon = new Cliente("Jhon", 25000);
console.log(jhon);

//Cliente {nombre: "Juan", saldo: 2000}
// {nombre: "Jhon", saldo: 25000}
