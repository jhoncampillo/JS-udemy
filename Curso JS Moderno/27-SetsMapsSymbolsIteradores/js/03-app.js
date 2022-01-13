//Maps son listas ordenada en llave y valor
// son especialemente disenados para agregar o quiar elemento o recorrelos
// tienen mejor performance que los objetos cuando son muy grandes

//Creacion
const cliente = new Map();

cliente.set('nombre', 'Jhon'); //{"nombre" => "Jhon"}
cliente.set('tipo', 'Premiun');
cliente.set('saldo', 8500000);
cliente.set(true, true);

console.log(cliente);

console.log(cliente.size); //4
// busca elemento
console.log(cliente.has('nombre')); // true

// Trae elemento
console.log(cliente.get('nombre')); //Jhon

cliente.delete('saldo');
console.log(cliente.has('saldo')); //

//limpia todo el objeto
cliente.clear();
console.log(cliente); //Map(0) {}

//Son iterables

//otro ejemplo pasando arreglos
const paciente = new Map([
  ['nombre', 'paciente'],
  ['cuarto', 'no definido'],
]);
console.log(paciente);
//set agrega valor
paciente.set('dr', 'Dr Asiganado');
//rescribo un valor
paciente.set('nombre', 'Juanda');

console.log(paciente);

paciente.forEach((datos) => {
  console.log(datos);
});

paciente.forEach((datos, index) => {
  console.log(datos, index);
});
