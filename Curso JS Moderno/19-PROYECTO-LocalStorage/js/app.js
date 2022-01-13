//Local Storage Tweets
//Variables ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Defino los  Selectores y le  creo las constantes
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");

// creo otro selector - array para almacenar los tweets
let tweets = [];

//Event Listener /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
eventListeners();

function eventListeners() {
  //al activar el buttom 'submit' llama la fucion 'agregarTweet'
  //cuando el susuario agrega un nuevo tweet
  formulario.addEventListener("submit", agregarTweet);

  //cuando el documento ya esta cargado y listo
  document.addEventListener("DOMContentLoaded", () => {
    //evalua si el array tiene algo pero como llega vacio al cargar el html da reultado null*
    // al ser null es false entonces como es un 'or - || '  toma la opcion verdadra que es el array vacio.
    tweets = JSON.parse(localStorage.getItem("tweets")) || [];

    console.log(tweets);
    crearHTML();
  });
}

//Funciones /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Creo la fucnion agregarTweet-  como es un formulario  se pasa el evento 'e'
function agregarTweet(e) {
  //Prevenir la opcion por dedefecto del evento 'submit'.
  e.preventDefault();
  //console.log('Agragando.......');
  //Textarea donde el usuario escribe el tweet-
  // una ves oprima le boton submit. capturp el valoe en la constante tweet
  const tweet = document.querySelector("#tweet").value;
  //validacion de textarea vacio
  if (tweet === "") {
    //imboco la funcion mostrarError
    mostrarError("Un mensaje No puede ir vacio");
    return; // funciona en un if simepre y cuando este en una fucion.. Node ja que se repita el codigo
  }
  // creo una constante objeto para saber la fecha de ultimo tweet
  const tweetObj = {
    id: Date.now(),
    // Cuando el identificador y el parametro tienen el mismo nombre se pued edejar uno solo
    tweet,
    // tweet: tweet,
  };
  //Annadir al Arreglo de tweet
  // con el speed operator ... - hago una copia delos tweet y le agrego los nuevos tweet
  tweets = [...tweets, tweetObj];
  //  console.log(tweets);
  // creo el Html - invoco la funcion
  crearHTML();
  // REINICIO EL FORMULARIO
  formulario.reset();
}

//INFORMATIVO
//Date.now() da la fecha en milisegundos desde 1 enero de 1970

//Funcion Mostar error

function mostrarError(error) {
  //creo html desde JS-  scripting
  const mensajeError = document.createElement("p");
  //paso al textconte el valor del parametro error 'Un mensaje No puede ir vacio'
  mensajeError.textContent = error;
  //agrego la clase error que ya esta definida el el css
  mensajeError.classList.add("error");
  // definimos donde lo queremos colocar
  //uso el id  'contenido' y agrego antes del div de cierre
  //inserto ene le contenido- creo constante
  const contenido = document.querySelector("#contenido");
  contenido.appendChild(mensajeError);
  //elimino mensaje de error despues de 3 segundos
  setTimeout(() => {
    mensajeError.remove();
  }, 3000);
}

//creo fucion crearHTML() muestar un listado de l os tweet
function crearHTML() {
  //limpio html para que no se repitan los tweet
  limpiarHTML();
  //evaluo si tweet tiene algo en el textarea - le paso el parametro tweet
  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      //agregar un button de eliminar html
      const btnEliminar = document.createElement("a");
      btnEliminar.classList.add("borrar-tweet");
      btnEliminar.innerText = "X"; // o textconte

      //annadir la funcion eliminar-  al dar click en el btnEliminar
      btnEliminar.onclick = () => {
        //hay que pasarle el parametro dle id del tweet
        borrarTweet(tweet.id);
      };

      //crear html
      const li = document.createElement("li");

      //annadir texto al html  -- estoy accediento al tweet del objeto
      li.innerText = tweet.tweet;

      //Annadir el btn al html
      li.appendChild(btnEliminar);

      //lleno el div  que esta vacion en el html
      listaTweets.appendChild(li);
      //al agregar repite los datos..hay que limpiar el html
    });
  }
  //Almaceno los tweets en el storage
  sincronizarStorage();
}

//agraga los tweets actuales al localStorage
//como es un arreglo hay que convertirlo en string co JSON
function sincronizarStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

//Elimina tweet
function borrarTweet(id) {
  //console.log('Borrando.....', id);
  //Para eliminarlo lo hago con filter - para que cree un arreglo con lo tweets que quedan- no con el eliminado
  tweets = tweets.filter((tweet) => tweet.id !== id);
  //console.log(tweets);
  crearHTML();
}

//limpia HTML
function limpiarHTML() {
  //Mientras alla elementos en el div
  while (listaTweets.firstChild) {
    // remueve de la lista el primer hijo que vaya encontrando
    listaTweets.removeChild(listaTweets.firstChild);
  }
}
