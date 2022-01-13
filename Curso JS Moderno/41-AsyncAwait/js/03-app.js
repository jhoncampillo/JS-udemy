//Function EXPRESSION
function descargarClientes() {
  return new Promise((resolve, reject) => {
    const error = false;

    setTimeout(() => {
      if (!error) {
        resolve("El listado de Clientes se Descargo Correctamente");
      } else {
        reject("Error en la Conexion");
      }
    }, 3000);
  });
}

//Async - await
const ejecutar = async () => {
  try {
    console.log(1 + 1);
    const respuetas = await descargarClientes();
    console.log(respuetas);
    console.log(4 + 4);
  } catch (error) {
    console.log(error);
  }
};

ejecutar();
