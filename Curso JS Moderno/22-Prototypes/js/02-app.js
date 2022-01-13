//Problema que solucionan los prototypes

function Cliente(nombre, saldo) {
  (this.nombre = nombre), (this.saldo = saldo);
}

const juan = new Cliente("Juan", 2000);
console.log(juan);

const jhon = new Cliente("Jhon", 25000);
console.log(jhon);
//Consola
//Cliente {nombre: "Juan", saldo: 2000}
// {nombre: "Jhon", saldo: 25000}

//funcion que muestre nombre y saldo

function formatearCliente(cliente) {
  //desestructuro
  const { nombre, saldo } = cliente;
  return `el Cliente ${nombre} tiene un saldo de ${saldo}`;
}
//Creo Funcion Formatear empresa
function formatearEmpresa(empresa) {
  const { nombre, saldo, categoria } = empresa;
  //template string
  return ` El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

console.log(formatearCliente(juan));
console.log(formatearCliente(jhon));

//Creo otro Objeto
function Empresa(nombre, saldo, categoria) {
  (this.nombre = nombre), (this.saldo = saldo), (this.categoria = categoria);
}

const CCJ = new Empresa("Codigo con Juan", 4000, "Cursos en Linea");
console.log(formatearEmpresa(CCJ));
//El cliente Codigo con Juan tiene un saldo de 4000 y pertenece a la categoria Cursos en Linea
// el problema es que cuando  muchos le dan mantenimiento al codigo
// la gente se envolata con las funciones no sabe cual fucnion  es de cual
//eso soluciona le prototyoe
