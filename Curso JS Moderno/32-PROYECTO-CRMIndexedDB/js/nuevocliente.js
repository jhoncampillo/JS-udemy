//Nifo dejas las funciones locales
(function () {
  //*ESTA CREACION QUEDA INDEPENDIENTE DE LAS OTRAS
  let DB;
  //referencio el id formulario del DOM
  const formulario = document.querySelector("#formulario");

  document.addEventListener("DOMContentLoaded", () => {
    //Lo primero que hago es conectarme la DB ya creda

    conectarDB();

    formulario.addEventListener("submit", validarCliente);
  });

  function validarCliente(e) {
    e.preventDefault();
    //console.log("VAlidadndo");

    //leo los input
    const nombre = document.querySelector("#nombre").value;
    const email = document.querySelector("#email").value;
    const telefono = document.querySelector("#telefono").value;
    const empresa = document.querySelector("#empresa").value;

    if (nombre === "" || email === "" || telefono === "" || empresa === "") {
      console.error("error");
      //Llamo la funcion imprimir alerta
      imprimirAlerta("Todos los Campos son obligatorios", "error");

      return;
    }

    //Creo el objeto con la informacion
    //creo un ojjeto literal
    const cliente = {
      //como la varible tiene el mismo nombre del atributo se puede deja uno solo
      // nombre: nombre,
      nombre,
      email,
      telefono,
      empresa,
    };
    //USO ESTE CAMPO CON PK
    (cliente.id = Date.now()),
      //Creo una fincion Crear Cliente
      crearNuevoCliente(cliente);
  }

  //funcion para Crear Cliente
  function crearNuevoCliente(cliente) {
    //abro la base de datos para agregar un registo
    const transaction = DB.transaction(["crm"], "readwrite");

    //defino el objectStore
    const objectStore = transaction.objectStore("crm");

    //ejecuto la ccion de add
    objectStore.add(cliente);

    //si hay error
    transaction.onerror = function () {
      //console.log("Hubo un error");
      imprimirAlerta("Hubo un Error", "error");
    };
    //si no hay error
    transaction.oncomplete = function () {
      //console.log("Cliente Agragado");
      //llamo la funcion imprimirAlerta sin tipo
      imprimirAlerta("El cliente se Agrego Correctamente");

      //Despues de 4 segundos vaya a otra pgina web
      setTimeout(() => {
        window.location.href = "index.html";
      }, 4000);
    };
  }
})();
