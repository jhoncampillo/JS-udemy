// Constructores

// objeto que manejea los parametros necesarios para cotizar
function Seguro(marca, year, tipo) {
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;
}

// Creo Prototype para Seguro - realizar cotizacion
Seguro.prototype.cotizarSeguro = function () {
  /* 1. Americano ahumenta 1.15%
   2. Asiatico     '     1.05% 
   3. Europeo      '     1.35% 
*/
  let cantidad;
  const base = 3000;
  //console.log(this.marca);

  switch (this.marca) {
    case '1':
      cantidad = base * 1.15;
      break;
    case '2':
      cantidad = base * 1.05;
      break;
    case '3':
      cantidad = base * 1.35;
      break;
    default:
      break;
  }
  console.log(cantidad);

  //leer el annio por que el seguro baja cuando el auto es mas viejo 3%
  // a la fecha actual le resto el annio selecionado
  const diferencia = new Date().getFullYear() - this.year;
  //le resto el 3% a cada annio
  cantidad -= (diferencia * 3 * cantidad) / 100;
  console.log(cantidad);

  // evaluo el tipo
  /* 
   si el seguro es basico se multiplica por 30% mas
   si el seguro es basico se multiplica por 50% mas

 */
  if (this.tipo === 'basico') {
    cantidad *= 1.3;
  } else {
    cantidad *= 1.5;
  }
  return cantidad;
};

//User Interface - creo la funcion que no accede a ningna propiedad

function UI() {}

//creo prototype  que llena las opciones de usuario
UI.prototype.llenarOpciones = () => {
  //annio maximo y annio minimo
  const max = new Date().getFullYear();
  min = max - 20;

  //busco select en el html con id='year'
  const selectYear = document.querySelector('#year');
  //recorro con un for los annios desde el min hasta el max
  for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option); // actualizo el hijo referebciado con el id=year
  }
};

//Creo otro Protorype
//Muestra Alertas en Pantalla
// uso arrow function por que no tiene argumetos @@!!!!!!!
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
  const div = document.createElement('div');
  if (tipo === 'error') {
    div.classList.add('mensaje', 'error');
  } else {
    div.classList.add('mensaje', 'correcto');
  }
  div.classList.add('mensaje', 'mt-10');
  div.textContent = mensaje;

  //inserto en el HTML
  // uso las mismas variables por que esta en diferente scope o funcion
  const formulario = document.querySelector('#cotizar-seguro');
  //insertBefore(div-nuevo nodo,  nodo de referncia donde hay que insertar)
  formulario.insertBefore(div, document.querySelector('#resultado'));

  setTimeout(() => {
    div.remove();
  }, 3000);
};

//Prototype Mostar resultado
// creo otro prototype para mostrar  costos del seguro
UI.prototype.mostrarResultado = (total, seguro) => {
  // desestructuro el objeto seguro

  const {marca, year, tipo} = seguro;

  // evaluo las marcas

  switch (marca) {
    case '1':
      textoMarca = 'Americano';
      break;
    case '2':
      textoMarca = 'Asiatico';
      break;
    case '3':
      textoMarca = 'Europeo';
      break;

    default:
      break;
  }

  //creo un div para mostrar
  const div = document.createElement('div');
  div.classList.add('mt-10');
  // con innerHTMl modifico el HTML- textcontec cuando no tiene HTML
  div.innerHTML = `
      <p class ="header">To Resumen</p>
      <p class="font-bold">Marca :<span class='font-normal'>  ${textoMarca}</span></p>
      <p class="font-bold">Annio :<span class='font-normal'>  ${year}</span></p>
      <p class="font-bold">Tipo  :<span class='font-normal capitalize'>  ${tipo}</span></p>
      <p class="font-bold">Total :<span class='font-normal'> $ ${total}</span></p>
    
    
    `;
  const resultadoDiv = document.querySelector('#resultado');
  //le paso el div que acaboi de crear

  //mostar el spinner
  const spinner = document.querySelector('#cargando');
  spinner.style.display = 'block';

  setTimeout(() => {
    spinner.style.display = 'none'; // desparace
    //spinner.remove(); // borra spiner y aparece resultado - no uso remove por que le quitos las propiedades
    resultadoDiv.appendChild(div);
  }, 3000);
};

//instancio la funcion UI
//instancio sin parametros por que la funcio arriba no tiene ni parametros ni argumentos

const ui = new UI();
console.log(ui);
//lo coloco por duera del addEventListener por que lo voy a pasar por diferentes funciones

//Creo protoypo para la IU para general los annios
document.addEventListener('DOMContentLoaded', () => {
  ui.llenarOpciones(); //llena el select con los annios
});

// validar el formulario
//ubico el formulario y el id=cotizar-seguro

//creo la fucnion
//Se recomienda que los selectores no los coloques en un protoype. puede ser complicado
eventListeners();
function eventListeners() {
  const formulario = document.querySelector('#cotizar-seguro');
  //Al hacer click en submit invoco la funcion cotizarSeguro
  formulario.addEventListener('submit', cotizarSeguro);
}

//Funcioes cotizarSeguro
function cotizarSeguro(e) {
  e.preventDefault(); //evita la opcion pordefecto del  parametro (e)
  // console.log('Cotizando');

  //leer la marca selccionada- capturo el valor del tag
  const marca = document.querySelector('#marca').value;
  //console.log(marca);

  //leer el annio seleccionado

  const year = document.querySelector('#year').value;

  //leer el tipo de covertura -- todo los datos que apunten al tag de html
  // asi lees el input tipo radio
  const tipo = document.querySelector('input[name="tipo"]:checked').value;
  //console.log(tipo);

  if (marca === '' || year === '' || tipo === '') {
    //console.log('No paso validacion');
    ui.mostrarMensaje('Todos los campos son obligatorioa', 'error');
    return;
  } else {
    ui.mostrarMensaje('Cotizando.....', 'exito');
    // console.log('Si paso Validacion');
  }

  // Ocultar  la scotizaciones previas
  const resultados = document.querySelector('#resultado div');
  if (resultados !== null) {
    resultados.remove();
  }

  //Instanciar Seguro - mando los datos selecionados por el usuario para generar cotizacion
  const seguro = new Seguro(marca, year, tipo);
  // creo otra const - creo otro prototype arriba
  const total = seguro.cotizarSeguro();

  console.log(seguro);
  ui.mostrarResultado(total, seguro);
  //Utililizar el Prototipo que va a Cotizar
}
