//Fechas
const diaHoy = new Date('December 17, 1995 03:24:00');
let valor;
valor = diaHoy;

console.log(valor);
//Mon Apr 19 2021 17:35:14 GMT-0500 (hora estándar de Colombia)

//metodos para objeto Fechas

valor = diaHoy.getFullYear();
valor = diaHoy.getMonth();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();
valor = diaHoy.getTimezoneOffset();
valor = Date.now(); //no hay que instanciarce con new- milisegundos desde 1970
console.log(valor);

new Date();
