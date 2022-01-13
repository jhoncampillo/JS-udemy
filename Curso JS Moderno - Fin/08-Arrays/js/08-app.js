// Array Destructuring - Al igual que los objetos algunas veces quieres crear la variable y el valor del arreglo, veamos algunos ejemplos:
//Desestructuracion de Arreglos
const numeros = [10, 20, 30, 40, 50];
console.log(numeros);
//desestruturo - el nombre puede ser cuanquiera
//const [primero, , segundo, tercero] = numeros;

// con el operador spred ... creo un nuevo arreglo con todos lo que no hagan parte de la
//dessestructuracioi : 08-app.js:10 (4) [20, 30, 40, 50]
const [segundo, ...tercero] = numeros;
console.log(tercero);

// console.log(numeros);
// console.log(primero);
// console.log(segundo);
//console.log(tercero);

// Si quieres saltarte un valor, pon una coma....

// ahora, como extraes todos los otros valores, digamos que solo quieres crear la primer variable, mantener el arreglo original..

//const [primero, , segundo, ...tercero ] = numeros;
