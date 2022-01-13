//Cargar informacion de un TXT
cargatTxtBtn = addEventListener("click", obtneteDatos);
function obtneteDatos() {
  const url = "./data/datos.txt";
  //status = 200 is OK
  //status = 404 is no found
  fetch(url)
    .then((respuesta) => {
      console.log(respuesta);
      console.log(respuesta.status);
      console.log(respuesta.url);
      //la respuesta al quiero como txt
      return respuesta.text();
    })
    .then((datos) => {
      console.log(datos);
      //  Informacion desde un archivo .txt
      // Dios
      // Casa
      // Carro
      // Finca
      // Salud
    })
    .catch((error) => {
      console.log(error);
    });
}
