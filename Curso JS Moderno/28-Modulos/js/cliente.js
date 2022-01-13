//mantego la variable y funciones locales
// function () {
//   console.log("DESDE IIFE");
//   const nombreCliente = "Juan";
//   window.nombreCliente = "Juan";
// })();
export const nombreCliente = "Juan";
export const ahorro = 200;

//otro ejemplo

export function mostrarInformacion(nombre, ahorro) {
  return `Cliente : ${nombre}- Ahorro : ${ahorro}`;
}

export function tienesaldo(ahorro) {
  if (ahorro > 0) {
    console.log("Si tiene saldo");
  } else {
    console.log("El Cliente no tiene saldo");
  }
}

//creo un cliente
export class Cliente {
  constructor(nombre, ahorro) {
    this.nombre = nombre;
    this.ahorro = ahorro;
  }
  mostrarInformacion() {
    return `Cliente : ${this.nombre} - Ahorro : ${this.ahorro}`;
  }
}

//export default funtion
//Se exporta normal pero se importa si los {} en el APP

export default function nuevaFuncion() {
  console.log("Este es el export Default");
}
