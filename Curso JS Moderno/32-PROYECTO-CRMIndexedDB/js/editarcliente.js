(function () {
  let DB;
  //variable para guardar el id y luego despues de editado guaradar
  let idCliente;
  //defino los tag para el cargeu el registro seleccionado
  const nombreInput = document.querySelector("#nombre");
  const emailInput = document.querySelector("#email");
  const telefonoInput = document.querySelector("#telefono");
  const empresaInput = document.querySelector("#empresa");

  //varibale para el botton
  const formulario = document.querySelector("#formulario");

  document.addEventListener("DOMContentLoaded", () => {
    //coneto coin la base de dataos
    conectarDB();

    //actualiza el registro
    formulario.addEventListener("submit", actualizarCliente);

    //leo los paramettros de la url ID
    //api URLSearchParams mira parametros disponibles en la url-
    //el parametro ID que tiene le registro que se va a editar
    // para evre en pantalla - selleciona el registo a editer y en consoal  = window.location.search
    //verifica el id de la url
    const parametrosURL = new URLSearchParams(window.location.search);

    //get es un metodo de URLSearchParams
    idCliente = parametrosURL.get("id");
    //console.log(idCliente); //1627573079197

    if (idCliente) {
      // comoe esta funcionde invoca y no se sabee si se conectoa la DB
      // se le da un tiempo para quie conecte--- esto mas adelante es  asincronismo
      setTimeout(() => {
        obtenerCliente(idCliente);
      }, 1000);
    }
  });

  //creo funcion actualizarCliente del formulario
  function actualizarCliente(e) {
    e.preventDefault();
    //avaluo si hay vacio
    if (
      nombreInput.value === "" ||
      emailInput === "" ||
      empresaInput === "" ||
      telefonoInput === ""
    ) {
      //console.log("Hubo un error");
      imprimirAlerta("Todos los Campos son Obligatorios", "error");
      return;
    }
    //actualizar Cliente
    const clienteActualizado = {
      nombre: nombreInput.value,
      email: emailInput.value,
      empresa: empresaInput.value,
      telefono: telefonoInput.value,
      id: Number(idCliente), //pasa texto numero sin importar el tipo
    };
    //actualizo el cliente
    const transaction = DB.transaction(["crm"], "readwrite");
    const objectStore = transaction.objectStore("crm");

    objectStore.put(clienteActualizado);

    //Si se completa la actualizacion
    transaction.oncomplete = function () {
      imprimirAlerta("Editado Correctamente");

      setTimeout(() => {
        window.location.href = "index.html";
      }, 3000);
    };
    transaction.onerror = function (error) {
      console.log(error); //imprime el error po que los errorers de indexDB no son claros
      imprimirAlerta("Hubo un Error", "error");
    };
  }

  //Creo funcion obtenerCliente(cliente)
  function obtenerCliente(id) {
    console.log(id);
    //para obtener el cliente con ese id
    const transaction = DB.transaction(["crm"], "readwrite");
    const objectStore = transaction.objectStore("crm");
    console.log(objectStore);
    //recorre la DB
    const cliente = objectStore.openCursor();
    cliente.onsuccess = function (e) {
      const cursor = e.target.result;

      if (cursor) {
        // console.log(cursor.value);
        //por el tipode DB se busca el item asi con el cursos y el que sea igual a leditado lo carga
        if (cursor.value.id === Number(id)) {
          console.log(cursor.value);
          //llamo un funcion llenar formulario para que cargeu el registro a editar
          llenarFormulario(cursor.value);
        }

        cursor.continue();
      }
    };
  }

  //Funcion llenar formulario
  function llenarFormulario(datosCliente) {
    //lleno lo input - pero defino los tag arriba
    //destructuring
    const { nombre, email, telefono, empresa } = datosCliente;
    nombreInput.value = nombre;
    empresaInput.value = empresa;
    emailInput.value = email;
    telefonoInput.value = telefono;
  }

  //funcion coinectar DB
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
})();
