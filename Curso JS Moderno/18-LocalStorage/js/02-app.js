//Obtener los datos del localStorage
const nombre = localStorage.getItem("nombre");
console.log(nombre); //R => 'Juan'
//si trato  de consultar algo que no existe me una respuesta 'null'

//Obtener producto

const productoJson = localStorage.getItem("producto");
console.log(productoJson);
// respuesta {"nombre":"Monitor de 24 Pulgadas","precio":300}
//luego conviero el string en objeto
const stringObjt = JSON.parse(productoJson);
console.log(stringObjt);

//asi funciona tambien
console.log(JSON.parse(productoJson));

// respuesta
// {nombre: "Monitor de 24 Pulgadas", precio: 300}
// nombre: "Monitor de 24 Pulgadas"
// precio: 300
// __proto__: Object

//Obtener y Convertir el Array
const meses1 = localStorage.getItem("meses");
console.log(meses1);
//Covierto el string en array
console.log(JSON.parse(meses1));

//Respuesta consola

// (4) ["Enero", "Febrero", "Marzo", " Abril"]
// 0: "Enero"
// 1: "Febrero"
// 2: "Marzo"
// 3: " Abril"
// length: 4
// __proto__: Array(0)
