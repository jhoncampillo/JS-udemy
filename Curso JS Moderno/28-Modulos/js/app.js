//Importe
import nuevaFuncion, {
  nombreCliente,
  ahorro,
  mostrarInformacion,
  tienesaldo,
  Cliente,
} from "./cliente.js";
import { Empresa } from "./empresa.js";

nuevaFuncion();

console.log(nombreCliente);
console.log(ahorro);
console.log(mostrarInformacion(nombreCliente, ahorro));

tienesaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente);

console.log(cliente.mostrarInformacion());

//empresa
const empresa = new Empresa("Codigo con juan", 100, "Aprendizaje en lineas");

console.log(empresa.mostrarInformacion());
