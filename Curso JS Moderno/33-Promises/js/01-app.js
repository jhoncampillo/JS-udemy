//Callbacks
//Es util en diferentes aspectos de manejo de datos
//si en el momento de descarga datOs de una Db se esta creando un dato Nuevo

const paises = ["Francia", "Espana", "Portugal", "Australia", "Inglaterra"];

//callback
function nuevoPais(pais, callback) {
  setTimeout(() => {
    paises.push(pais);
    callback();
  }, 3000);
}

function mostrarPaises() {
  setTimeout(() => {
    paises.forEach((pais) => {
      console.log(pais);
    });
  }, 1000);
}
//primero aparecela lista inaicial
mostrarPaises();
Francia
01-app.js:18 Espana
01-app.js:18 Portugal
01-app.js:18 Australia
01-app.js:18 Inglaterra

//el callback adiciona alemania y refresca la lista
nuevoPais("Alemania", mostrarPaises);
Francia
01-app.js:18 Espana
01-app.js:18 Portugal
01-app.js:18 Australia
01-app.js:18 Inglaterra
01-app.js:18 Alemania
