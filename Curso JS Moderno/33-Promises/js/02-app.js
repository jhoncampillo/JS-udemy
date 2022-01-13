//Ejemplo de callbackhell

const paises = [];

function nuevoPais(pais, callback) {
  paises.push(pais);
  console.log(`Agregando Pais : ${pais}`);
  callback();
}

function mostrarPaises() {
  console.log(paises);
}
//callbackhell
function iniciarCallbackHell() {
  setTimeout(() => {
    nuevoPais("Alemania", mostrarPaises);
    setTimeout(() => {
      nuevoPais("Colombia", mostrarPaises);
      setTimeout(() => {
        nuevoPais("Mexico", mostrarPaises);
        setTimeout(() => {
          nuevoPais("China", mostrarPaises);
          setTimeout(() => {
            nuevoPais("Peru", mostrarPaises);
            setTimeout(() => {
              nuevoPais("Jamaica", mostrarPaises);
            }, 3000);
          }, 3000);
        }, 3000);
      }, 3000);
    }, 3000);
  }, 3000);
  //agrego otro pais
}

iniciarCallbackHell();
