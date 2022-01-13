//Notificaciones nativas en java Escript
//Tienen que estar definidas en el HTML y con pernmiso de los usuarios
const notificarBtn = document.querySelector("#notificar");

notificarBtn.addEventListener("click", () => {
  Notification.requestPermission().then((resultado) => {
    console.log("el resultado es ", resultado);
  });
});

//Corre Api de notificaiones

const verNotificacion = document.querySelector("#verNotificacion");
verNotificacion.addEventListener("click", () => {
  if (Notification.permission === "granted") {
    //Agrego Iconos a las notificaciones
    new Notification("Esta es la Notificacion", {
      icon: "img/ccj.png",
      body: "Codigo con Jhon",
    });
    //Puedo manfdar a otra URl
    verNotificacion.onclick = function () {
      window.open("https://www.codigoconjuan.com");
    };
  }
});
