let DB;

document.addEventListener("DOMContentLoaded", () => {
  crmDB();

  setTimeout(() => {
    //llamo funcion
    crearCliente();
  }, 3000);
});

function crmDB() {
  // 1. crear base de datos con la versión 1
  let crmDB = window.indexedDB.open("crm", 1.1);

  // 2 si hay un error, lanzarlo
  crmDB.onerror = function () {
    console.log("Hubo un error al crera la base");
  };
  // 3 si todo esta bien, asignar a database el resultado
  crmDB.onsuccess = function () {
    console.log("todo listo!");

    //4  guardamos el resultado
    DB = crmDB.result;

    console.log(DB);
  };

  // este método solo corre una vez
  crmDB.onupgradeneeded = function (e) {
    // el evento que se va a correr tomamos la base de datos
    console.log(e.target.result); //resultado del evento
    const db = e.target.result;

    // definir el objectStore, permiite crear las columnas de la DB
    //primer parametro el nombre de la BD, segundo las opciones
    // keypath es de donde se van a obtener los indices
    const objectStore = db.createObjectStore("crm", {
      keyPath: "crm",
      autoIncrement: true,
    });
    //defino las columnas de la BD
    //createindex, nombre y keypath, 3ro los parametros, keypath esn este caso sera el indice para poder realizar busquedas
    objectStore.createIndex("nombre", "nombre", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });
    objectStore.createIndex("telefono", "telefono", { unique: false });

    console.log("DB creada y lista");
  };
}

function crearCliente() {
  // Crear un nuevo registro
  //
  let transaction = DB.transaction(["crm"], "readwrite");
  transaction.oncomplete = function (event) {
    console.log("Transacción Completada");
  };

  transaction.onerror = function (event) {
    console.log("Hubo un error en la transacción");
  };
  //escribo en la DB un objeto nuevoCliente
  let objectStore = transaction.objectStore("crm");
  console.log(objectStore);

  const nuevoCliente = {
    nombre: "Juan",
    email: "correo@correo.com",
    telefono: 1020912,
  };
  //adiciono el objeto al la DB
  let peticion = objectStore.add(nuevoCliente);

  console.log(peticion);
}
