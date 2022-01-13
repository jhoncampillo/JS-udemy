//API para determinar cuando dejan de  ver una pagina.
//Ejemplo se para el video a penas cambia de  pagina- twitter- youtube
//.document.visibilityState.
document.addEventListener("visibilitychange", () => {
  console.log(document.visibilityState);
  if (document.visibilityState === "Visible") {
    console.log("Ejecutar la funcion la reporucir video");
  } else {
    console.log("Pausar el video");
  }
});
