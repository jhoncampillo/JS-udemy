//Herencias

//La clases el JS son mejoras  que se hace a la sitaxis   a los cosntructor
//- metodos de un aclase son los prototypes
//Permite classes  te permiten crear prototypes mas sensillas

//2 formas de crear calase
//Class Declaration /////////////////////////////////////////////
class Cliente {
  // uso el metodo contrutor
  //pasamos los valores que va a tomar el objeto una vez instanciado
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  //metodos a la clase
  mostarInformacion() {
    return `Cliente : ${this.nombre}, tu saldo es de $ ${this.saldo}`;
  }
  // estos no requieren un estancia y dependen de la clase directamente
  static bienvenida() {
    return "Bienvenido al Cajero";
  }
}

// Herencia Quiero crar un classe que herede los atributos y propiedades de la clase Cliente
class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria) {
    // utilizo esta funcio super para poder traer el nombre y saldo del Padre-- sino marca error
    //super  = hereda del contrusctor padre
    super(nombre, saldo);
    this.telefono = telefono;
    this.categoria = categoria;
  }
  // estos no requieren un estancia y dependen de la clase directamente
  static bienvenida() {
    return "Bienvenido al Cajero de empresas";
  }
}

//Instancio la Clase
const juan = new Cliente("Juan", 400);
const empresa = new Empresa(
  "Codigo con Juan ",
  500,
  1091931,
  "Aprendiz en linea"
);
console.log(empresa);
//empresa {nombre: "Codigo con Juan ", saldo: 500, telefono: 1091931, categoria: "Aprendiz en linea"}
console.log(empresa.mostarInformacion());
//Cliente : Codigo con Juan , tu saldo es de $ 500

console.log(Cliente.bienvenida);
console.log(Empresa.bienvenida);
//ƒ bienvenida() {
//     return 'Bienvenido al Cajero';
//   }
// 03-app.js:56 ƒ bienvenida() {
//     return 'Bienvenido al Cajero de empresas';

class Smartjh {
  constructor(nombre, apellido, edad, cargo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.cargo = cargo;
  }
  //metodos a la clase
  mostarInformacion2() {
    return `Cliente : ${this.nombre},${this.apellido} tu edad es de ${this.edad} annios`;
  }
  static bienvenida() {
    return "Bienvenido a la Empresa Smart System";
  }
}
const usuariosmart1 = new Smartjh(
  "Juan David",
  "Campillo",
  21,
  "Gerente General"
);
console.log(usuariosmart1);

class Estudios extends Smartjh {
  constructor(nombre, apellido, edad, est1, est2, est3) {
    super(nombre, apellido, edad), (this.est1 = est1), (this.est2 = est2), est3;
  }
}

const Monica = new Estudios(
  "Monica",
  "Castro",
  44,
  "logistica",
  "Agricultura",
  "Comercializacion"
);

console.log(Monica.mostarInformacion2());
console.log(Smartjh.bienvenida);
