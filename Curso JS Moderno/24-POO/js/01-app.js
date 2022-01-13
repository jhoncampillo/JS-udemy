//La clases el JS son mejoras  que se hace a la sintaxis   a los constructor
//- metodos de una clase son los prototypes
//Permite classes  te permiten crear prototypes mas sensillas

//2 formas de crear clase
//1 /////////Class Declaration /////////////////////////////////////////////
class Cliente {
  // uso el metodo contrutor
  //pasamos los valores que va a tomar el objeto una vez instanciado
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
  // 2 paso metodos
  mostrarInfo2() {
    return `Cliente : ${(this.nombre = "Jhon Jairo ")}, tu segundo saldo es`;
  }

  //2.metodos a la clase
  mostarInformacion() {
    return `Cliente : ${this.nombre}, tu saldo es de $ ${this.saldo}`;
  }
  // estos no requieren un estancia y dependen de la clase directamente
  static bienvenida() {
    return "Bienvenido al Cajero";
  }
}

//3. Instancio la Clase
const juan = new Cliente("Juan", 400);
//accedo al los datos del objeto
console.log(juan.mostrarInfo2());
console.log(juan.mostarInformacion());
console.log(juan);
//Propiedad estatica no necesita instnacairlas
///Pertenece a la clase no a la intancias
console.log(Cliente.bienvenida);

//////// Class expresion   /////////////////////////////////////////////////////////////
const Cliente2 = class {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }
  mostarInformacion() {
    return `Cliente : ${this.nombre}, tu saldo es de $ ${this.saldo}`;
  }
};
//instancio la clase
const juan2 = new Cliente2("Juan", 400);
console.log(juan2.mostarInformacion());
console.log(juan2);

///
//Creo la clase
const Estudiante = class {
  constructor(nombre1, apellido1, curso) {
    (this.nombre1 = nombre1),
      (this.apellido1 = apellido1),
      (this.curso = curso);
  }

  //Creo el metodo va dentro de la clase
  mostrar_datos() {
    const { nombre1, apellido1, curso } = Estudiante;
    return `Estudiante : {nombre1} {apellido1} {curso}`;
  }
};
//instancio la clase Estudiante
const juan3 = new Estudiante("Juan", "Campillo", "Sistemas");
console.log(juan2.mostarInformacion());
console.log(juan2);
