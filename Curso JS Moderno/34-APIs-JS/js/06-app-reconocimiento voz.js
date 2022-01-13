//Speech recongnition API  - reconocimiento de Voz-
const salida = document.querySelector("#salida");
const microfono = document.querySelector("#microfono");

microfono.addEventListener("click", ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
  //no funciona en Opera- prueba en chrom este metodo
  const SpeechRecognition = webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  //Paso 1 iniciar hablar - lo graba en memoria
  recognition.start();
  recognition.onstart = function () {
    salida.classList.add("mostar");
    salida.textContent = "Escuchar";
  };
  //Paso 2 -Cuando treminamos hablar se jecuta esta funcion
  recognition.onspeechend = function () {
    salida.textContent = " Se dejo de Grabar...";
  };

  //Paso 3 - Traslada lo grabado a texto
  recognition.onresult = function (e) {
    console.log(e.result[0][0]);

    // Pasar el texto dictado al HTML
    //Destructuring la data
    const { confidence, transcription } = e.result[0][0];
    const speech = document.createElement("p");
    speech.innerHTML = `Grabado   ; ${transcription}`;

    const seguridad = document.createElement("p");
    seguridad.innerHTML = `Seguridad : ${parseInt(confidence * 100)}%`;

    salida.appendChild(speech);
    salida.appendChild(seguridad);
  };
}
