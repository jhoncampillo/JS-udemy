//Administar Citas - radiicado movistar 4433211007151752 -pasa gigas appmovistar #450 preferidosewa
//Defino La consttantes para Referenciar el DOM

const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
////// UI /////
// referencio el formulario
const formulario = document.querySelector('#nueva-cita');
//Contenedor de citas
const contenedorCitas = document.querySelector('#citas');

//vALIABLE -PARA EDITAR
let editando;

////////////////// CREO LAS DOS CLASES/////////////////////////
//Este proyecto manejara 2 clases una para  la UI - Visualocee
// La otra va  a menajer la citas
class Citas {
  constructor() {
    //crea un arreglo vacio de citas y se llena mas adelante
    this.citas = [];
  }
  agregarCita(cita) {
    this.citas = [...this.citas, cita];
    console.log(this.citas);
  }

  //Creo el metodo de eliminar Cita
  eliminarCita(id) {
    //filtramos las citas diferentes al id que se les esta pasando
    this.citas = this.citas.filter((cita) => cita.id !== id);
  }

  //Metodo de diditar cita
  editarCita(citaActualizda) {
    this.citas = this.citas.map((cita) =>
      cita.id === citaActualizda.id ? citaActualizda : cita
    );
  }
}

//////////////Clase UI

class UI {
  imprimirAlerta(mensaje, tipo) {
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

    //agregar clase en base al tipo de error
    if (tipo === 'error') {
      divMensaje.classList.add('alert-danger');
    } else {
      divMensaje.classList.add('alert-success');
    }
    //mensaje de error
    divMensaje.textContent = mensaje;

    //Agregar al DOM
    document
      .querySelector('#contenido')
      .insertBefore(divMensaje, document.querySelector('.agregra-cita'));

    //quitar las Alerta despues de 5 segundos
    setTimeout(() => {
      divMensaje.remove();
    }, 5000);
  }
  //Defino el Metodo de imprimirCitas - le mando el arreglo de citas
  imprimirCitaS({citas}) {
    this.limpiarHTML();
    // const {citas} = citas -// lo resumo arriba
    console.log(citas);
    // //recorro el arreglo
    citas.forEach((cita) => {
      const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
      const divCita = document.createElement('div');
      divCita.classList.add('cita', 'p-3');
      divCita.dataset.id = id;

      //De qui en eadelante scriptrin de los elementos
      const mascotaParrafo = document.createElement('h2');
      mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
      mascotaParrafo.textContent = mascota;

      //propietario
      const propietarioParrafo = document.createElement('p');
      propietarioParrafo.innerHTML = `
      <span class='font-weight-bolder'>Propietario: </span> ${propietario}`;

      //Telefono
      const telefonoParrafo = document.createElement('p');
      telefonoParrafo.innerHTML = `
      <span class='font-weight-bolder'>Telefono: </span> ${telefono}`;

      //Fecha
      const fechaParrafo = document.createElement('p');
      fechaParrafo.innerHTML = `
        <span class='font-weight-bolder'>Fecha: </span> ${fecha}`;

      //Hora
      const horaParrafo = document.createElement('p');
      horaParrafo.innerHTML = `
        <span class='font-weight-bolder'>Hora: </span> ${hora}`;

      //Sintomas
      const sintomasParrafo = document.createElement('p');
      sintomasParrafo.innerHTML = `
        <span class='font-weight-bolder'>Sintomas: </span> ${sintomas}`;

      //Boton para eliminar cita
      const btnEliminar = document.createElement('button');
      btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
      btnEliminar.innerHTML =
        'Eliminar <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>';
      //PAGINAS DE ICONOS
      //https://heroicons.com

      //EVENTO DEL BOTON
      btnEliminar.onclick = () => eliminarCita(id);

      //Anadir boton para edita una cita
      const btnEditarCita = document.createElement('button');
      btnEditarCita.classList.add('btn', 'btn-info');
      btnEditarCita.innerHTML =
        'Editar Cita <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 -2.828l8.586-8.586z" /> </svg>';

      //EVENTO DEL BOTON - le mando la cita completa
      btnEditarCita.onclick = () => cargarEdicion(cita);

      //agregar parrafos al divCita
      divCita.appendChild(mascotaParrafo);
      divCita.appendChild(propietarioParrafo);
      divCita.appendChild(telefonoParrafo);
      divCita.appendChild(fechaParrafo);
      divCita.appendChild(horaParrafo);
      divCita.appendChild(sintomasParrafo);
      divCita.appendChild(btnEliminar);
      divCita.appendChild(btnEditarCita);

      //agregar Citas al HTML
      contenedorCitas.appendChild(divCita);
    });
  }
  limpiarHTML() {
    while (contenedorCitas.firstChild) {
      contenedorCitas.removeChild(contenedorCitas.firstChild);
    }
  }
}

//Instancio  las clases para usarlas en cualquier lugar
const ui = new UI();
const administrarCitas = new Citas();

//llamo la funcion que carga el js
///////////////////////////////////Registar Eventos ///////////////////////////////
eventListeners();
function eventListeners() {
  // mascotaInput.addEventListener('change', datosCita(e.target.value))
  mascotaInput.addEventListener('input', datosCita);
  propietarioInput.addEventListener('input', datosCita); //puedo usr el evento "change"
  telefonoInput.addEventListener('input', datosCita);
  fechaInput.addEventListener('input', datosCita);
  horaInput.addEventListener('input', datosCita);
  sintomasInput.addEventListener('input', datosCita);
  //evento para Crear  nueva citas
  formulario.addEventListener('submit', nuevaCita);
}

//Creo un Objeto principal  para reutizar la fucnion de datosCita()

const citaObj = {
  mascota: '',
  propietario: '',
  telefono: '',
  fecha: '',
  hora: '',
  sintomas: '',
  //para poder utilizar este modelamiento hay que tener el name=" xxx" definido en el Html
};

/////////Funciones ////////////////
//esta funcion llena el objeto citaObj

function datosCita(e) {
  // console.log(e.target.value);
  //console.log(e.target.name);
  //con [ ] accedo a las propiedades del input
  citaObj[e.target.name] = e.target.value;
  //console.log(citaObj);
}

//creo la funcion nuevaCita
//valida y agrega nueva Cita
function nuevaCita(e) {
  e.preventDefault();

  // Extraigo informacion del objeto de cita - desestructuring
  const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

  //validar  los input que no esten vacios
  if (
    mascota === '' ||
    propietario === '' ||
    telefono === '' ||
    fecha === '' ||
    hora === '' ||
    sintomas === ''
  ) {
    console.log('Todos los campos son obligatorios');
    //no deja que se ejecute la siguinete linea de codigo
    ui.imprimirAlerta('Todos los Campos son Obligatorios', 'error');
    return;
  }
  if (editando) {
    //console.log('modo edicion');
    ui.imprimirAlerta('editado corrcetamente');

    //Pasar el objeto dela cita  ala edicion - {...citaObj} = una copia del objeto
    administrarCitas.editarCita({...citaObj});

    //Regresa el boton al estado original
    formulario.querySelector('button[type="submit"]').textContent =
      'Crear Cita';

    //quitar modo edicion
    editando = false;
  } else {
    //console.log('Modo nueva Cita');
    //GENERAR ID UNICO PARA CADA CITA
    citaObj.id = Date.now();
    //Creando una nueva cita
    //console.log(citaObj);
    // CON EL SPREAD OPERATOT LO QUE HAGO ES MANDAR UNA COPIA DELOBJETO- NOEL ORIGINAL
    administrarCitas.agregarCita({...citaObj});

    //Mensaje de agregado correctamente
    ui.imprimirAlerta('Se agrego correctamente');
  }

  //Reinicia el objeto para l avalidacion
  reiniciarObjeto();

  //Reinicio el Formulario
  formulario.reset();

  //Mostar las citas en el HTML

  ui.imprimirCitaS(administrarCitas);
}

//Creo una funcion  para reinciar el Objetoya que este queda
//con datos
function reiniciarObjeto() {
  citaObj.mascota = '';
  citaObj.propietario = '';
  citaObj.telefono = '';
  citaObj.fecha = '';
  citaObj.hora = '';
  citaObj.sintomas = '';
}

//Funcion del Boton eliminar Cita
function eliminarCita(id) {
  console.log(id);
  //elimino la cita
  administrarCitas.eliminarCita(id);

  //muestre mensaje
  ui.imprimirAlerta('La cita se elimino cotrrctamente');

  //Refresque las citas
  ui.imprimirCitaS(administrarCitas);
}

//Cargar lo datos y la edicion del boton
function cargarEdicion(cita) {
  console.log(cita);
  const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
  //lleno los input
  mascotaInput.value = mascota;
  propietarioInput.value = propietario;
  telefonoInput.value = telefono;
  fechaInput.value = fecha;
  horaInput.value = hora;
  sintomasInput.value = sintomas;

  //llenar el objeto
  citaObj.mascota = mascota;
  citaObj.propietario = propietario;
  citaObj.telefono = telefono;
  citaObj.fecha = fecha;
  citaObj.hora = hora;
  citaObj.sintomas = sintomas;
  citaObj.id = id;

  //Cambio el estado del Boton
  formulario.querySelector('button[type="submit"]').textContent =
    'Guardar Cambios';
  editando = true;
}
