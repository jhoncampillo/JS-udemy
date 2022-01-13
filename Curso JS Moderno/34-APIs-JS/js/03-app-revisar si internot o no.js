//Api par aver si hay conexion a interent  o no
//navegator.online - true su hay - false si no hay
window.addEventListener("online", actualizarEstado);
window.addEventListener("offline", actualizarEstado);
function actualizarEstado() {
  if (navegator.onLine) {
    console.log("Si estas conectado");
  } else {
    console.log("No estas conectado");
  }
}
//Se puuede probar dsactivando la conexion a  internet
//Progresiv web aplication
