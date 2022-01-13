//2 formas de crear clases
//Class Declaration /////////////////////////////////////////////

//atributos privados y publicos
//publicos accedes a una propiededa desde el objeto o desde la clase

//ahora las propiedades privadas se identifican por el signo //#

class Cliente {
  //propiedad privada solo se llamo o modifica con un get o set
  #nombre;
  // uso el metodo contrutor
  //pasamos los valores que va a tomar el objeto una vez instanciado
  constructor(nombre, saldo) {
    this.#nombre = nombre;
    this.saldo = saldo;
  }

  //metodos a la clase
  mostarInformacion() {
    return `Cliente : ${this.#nombre}, tu saldo es de $ ${this.saldo}`;
  }
  // estos no requieren un estancia y dependen de la clase directamente
  static bienvenida() {
    return "Bienvenido al Cajero";
  }
}

//Publico
const juan = new Cliente("Juan", 4000);
console.log(juan);
//Cliente {saldo: 4000, #nombre: "Juan"}

//antes los metodos privados se identificaban con _nombre

// lo accedo desde el metodo
console.log(juan.mostarInformacion());
// Cliente : Juan, tu saldo es de $ 4000

//CON GETTERS Y SETERS
class Cliente2 {
  #nombre;
  setNombre(nombre) {
    this.#nombre = nombre;
  }
  getNombre() {
    return this.#nombre;
  }
}

const juan1 = new Cliente2();
juan1.setNombre("Jhon Jairo ");
console.log(juan1.getNombre());
