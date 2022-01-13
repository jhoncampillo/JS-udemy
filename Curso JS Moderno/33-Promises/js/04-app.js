//Callbackhell a Promesas
const paises = [];

const nuevoPais = (pais) =>
  new Promise((resolve) => {
    setTimeout(() => {
      paises.push(pais);
      resolve(`Agregando : ${pais}`);
    }, 3000);
  });

nuevoPais("Alemania")
  .then((resultado) => {
    console.log(resultado);
    console.log(paises);
    return nuevoPais("Francia");
  })
  .then((resultado) => {
    console.log(resultado);
    console.log(paises);
    return nuevoPais("Colombia");
  })
  .then((resultado) => {
    console.log(resultado);
    console.log(paises);
    return nuevoPais("Inglaterra");
  })
  .then((resultado) => {
    console.log(resultado);
  });
