//switAlert para implementar los mensajes

//con el Nifi () las variables y las funcione quedan locales.
(function () {
  let DB;
  //para eliniar se pone en global
  const listadoClientes = document.querySelector("#listado-clientes");

  document.addEventListener("DOMContentLoaded", () => {
    crearDB();

    //inicio de funciones para mostars listadop cde clientes en html
    if ((window, indexedDB.open("crm", 1))) {
      //llamo funcion obtenerClientes
      obtenerClientes();
    }

    listadoClientes.addEventListener("click", eliminarRegistro);
  });

  //si el elemto selecionado para eliminar tiene la calse eliminar - delegation em js
  function eliminarRegistro(e) {
    if (e.target.classList.contains("eliminar")) {
      //console.log("Diste click a aliminar");
      //e.target.dataset.cliente = etiquetas personalizadas html
      const idEliminar = Number(e.target.dataset.cliente);
      //console.log(idEliminar);
      const confirmar = confirm("Deseas Eliminar Este Cliente");
      console.log(confirmar);
      //si es true
      if (confirmar) {
        const transaction = DB.transaction(["crm"], "readwrite");
        const objectStore = transaction.objectStore("crm");

        objectStore.delete(idEliminar);

        //si todo ok
        transaction.oncomplete = function () {
          console.log("Eliminando");
          //travresing - de devuelve al tag padre del html y elimina el html del id
          e.target.parentElement.parentElement.remove();
        };

        //si hay error
        transaction.onerror = function () {
          console.log("Hubo un error");
        };
      }
    }
  }

  //Funcion crear la DB
  function crearDB() {
    //abro la conexion
    const crearDB = window.indexedDB.open("crm", 1);
    //si hay error al crear
    crearDB.onerror = function () {
      console.log("Hubo un error");
    };
    //Si la crecion es satisfactoria
    crearDB.onsuccess = function () {
      DB = crearDB.result;
      console.log("Creacion satisfactoria");
    };
    //se ejecuta una sola vez- cuando se crea la base de datos va a registarr todas la columnas
    crearDB.onupgradeneeded = function (e) {
      const db = e.target.result;

      //creo el objectStore
      // el keyPath  referencia la llave principal de la DB en este caso el id
      const objectStore = db.createObjectStore("crm", {
        keyPath: "id",
        autoIncrement: true,
      });

      //creo los campos de la DB
      objectStore.createIndex("nombre", "nombre", { unique: false });
      objectStore.createIndex("email", "email", { unique: true });
      objectStore.createIndex("telefono", "telefono", { unique: false });
      objectStore.createIndex("empresa", "empresa", { unique: false });
      objectStore.createIndex("id", "id", { unique: true });

      console.log("DB lista y creada");
    };
  }
  //funcion obtenerClientes
  function obtenerClientes() {
    //abro la conexion -1
    const abrirConexion = window.indexedDB.open("crm", 1);
    // -2
    abrirConexion.onerror = function () {
      console.log("Hubo un Error");
    };
    //-3
    abrirConexion.onsuccess = function () {
      DB = abrirConexion.result;

      const objectStore = DB.transaction("crm").objectStore("crm");
      //las DB indexeDB se recorren con openCursor
      objectStore.openCursor().onsuccess = function (e) {
        const cursor = e.target.result;
        //el curso se ubicxa en el priemer registro '0' de DB - hasta el final
        if (cursor) {
          console.log(cursor.value);
          //destructuring al objeto cliente pero del os valores que captura cursor.value
          const { nombre, empresa, email, telefono, id } = cursor.value;

          //referencio el tag del tbody del html listadoClientes
          //dopi de gif el hhtml
          listadoClientes.innerHTML += ` <tr>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
              <p class="text-sm leading-10 text-gray-700"> ${email} </p>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
              <p class="text-gray-700">${telefono}</p>
          </td>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
              <p class="text-gray-600">${empresa}</p>
          </td>
          // <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
          //     <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
               <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
           </td>
      </tr>
  `;
          //editar-cliente.html?id=${id} = Query String - le paso l avaruable id
          //trae los otroa registros despues del primero-
          //sin este solo trae un registro
          cursor.continue();
        } else {
          console.log("No hay mas registros");
        }
      };
    };
  }
})();
