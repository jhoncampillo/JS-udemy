//Nuevos Iteradores en javaScript

const ciudades = ["Londres", "New York", "Madrid", "Paris"];
const ordenes = new Set([123, 321, 131, 102]);
const datos = new Map();

datos.set("nombre", "Juan");
datos.set("Profesion", "Desarrollador Web");

//Default Iteratos for iterators

for (let ciudad of ciudades) {
  console.log(ciudad);
}
// Londres
// New York
// Madrid
// Paris

for (let orden of ordenes) {
  console.log(orden);
}
// 123
// 321
// 131
// 102

for (let dato of datos) {
  console.log(dato);
}
// [ 'nombre', 'Juan' ]
// [ 'Profesion', 'Desarrollador Web' ]
//////////////////////////////////////////////////////Iterador Entry

for (let entry of ciudades.entries()) {
  console.log(entry);
}
// [ 0, 'Londres' ]
// [ 1, 'New York' ]
// [ 2, 'Madrid' ]
// [ 3, 'Paris' ]

for (let entry of ordenes.entries()) {
  console.log(entry);
}

for (let entry of datos.entries()) {
  console.log(entry);
}

//Values iterator
for (let value of ciudades.values()) {
  console.log(value);
}
// Londres
// New York
// Madrid
// Paris
for (let value of ordenes.values()) {
  console.log(value);
}
// 123
// 321
// 131
// 102

for (let value of datos.values()) {
  console.log(value);
}

//Keys iterator
for (let keys of ciudades.keys()) {
  console.log(keys);
}
// 0
// 1
// 2
// 3

for (let keys of ordenes.keys()) {
  console.log(keys);
}
// 123
// 321
// 131
// 102
for (let keys of datos.keys()) {
  console.log(keys);
}
// nombre
// Profesion
