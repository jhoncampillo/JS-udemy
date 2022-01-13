//apps
import { datosCita, nuevaCita } from "../funcionesdddd.js";

import {
  mascotaInput,
  propietarioInput,
  telefonoInput,
  fechaInput,
  horaInput,
  sintomasInput,
  formulario,
} from "../clases/selectores.js";
console.log("Inicio");
export class App {
  constructor() {
    this.initApp();
  }
  initApp() {
    console.log("INICIA EL PROCESO");
    mascotaInput.addEventListener("change", datosCita);
    propietarioInput.addEventListener("change", datosCita);
    telefonoInput.addEventListener("change", datosCita);
    fechaInput.addEventListener("change", datosCita);
    horaInput.addEventListener("change", datosCita);
    sintomasInput.addEventListener("change", datosCita);
    //formulario para nuevas citas
    formulario.addEventListener("submit", nuevaCita);
  }
}
