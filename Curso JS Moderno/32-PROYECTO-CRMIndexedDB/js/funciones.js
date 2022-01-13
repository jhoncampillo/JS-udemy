//pongo las fucions que se pueden compartir
//Funcion opara conectarme al DB
function conectarDB() {
  const abrirConexion = window.indexedDB.open("crm", 1);

  //si no exixte o el navegador no soporta
  abrirConexion.onerror = function () {
    console.log("Hubo un Error");
  };
  //Si todo esta OK
  abrirConexion.onsuccess = function () {
    //mantiene una conexio abierta con la DB
    DB = abrirConexion.result;
  };
}

//Funcion de imprimir alerta- recibe un mensaje y un tipo de mensaje//////////////////////
function imprimirAlerta(mensaje, tipo) {
  //Para que le mensaje de error no multiplique cada que se  oprima el submit
  // con los campor vacios-- adiciona clase 'alerta'
  const alerta = document.querySelector(".alerta");
  //pregunta si ya hay una alerta, entoces haga
  if (!alerta) {
    //Creo la alerta
    const divMensaje = document.createElement("div");
    //clases de talwind
    divMensaje.classList.add(
      "px-4",
      "py-3",
      "rouded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center",
      "border",
      "alerta"
    );

    if (tipo === "error") {
      divMensaje.classList.add("bg-red-100", "border-red-400", "text-red-700");
    } else {
      divMensaje.classList.add(
        "bg-green-100",
        "borde-green-400",
        "text-green-700"
      );
    }
    //mando el mensaje en este caso 'Todos los Campos son obligatorios'
    divMensaje.textContent = mensaje;

    //lo agrego al DOM- tag formulario
    formulario.appendChild(divMensaje);

    setTimeout(() => {
      divMensaje.remove;
    }, 3000);
  }
}
