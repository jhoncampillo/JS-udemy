// este proyecto utiliza un framework de css llamado talwind - usa clases
//variables
//inactivo el botton enviar
const btnEnviar = document.querySelector('#enviar');
//boton resetear
const btnReset = document.querySelector('#resetBtn');
//creo la const para manejar el formulario
const formulario = document.querySelector('#enviar-mail');
//variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
// creo una Expresion Regular
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//valido email - indexOf busza la @ en el texto

//carga el documento por priemra vez y carga la fucuion InicarApp
eventListener();
function eventListener() {
  //cuando la app arranca
  document.addEventListener('DOMContentLoaded', iniciaApp);

  //campos del formulario - blur  se ejecuta cuando das click fuera del  del input y el color rojo al borde
  email.addEventListener('blur', validarFormulario);
  asunto.addEventListener('blur', validarFormulario);
  mensaje.addEventListener('blur', validarFormulario);
  //reinicia el formulario
  btnReset.addEventListener('click', resetearFormulario);
  //Enviar Email
  formulario.addEventListener('submit', enviarEmail);
}

//funciones ///////////////////////////////////////////////////////
function iniciaApp() {
  //console.log('Iniciando...');
  btnEnviar.disable = true;
  //son clases del framwork talwind
  btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}
//Function validarFormulario /////////////////////////
function validarFormulario(e) {
  //busco tipo del datado
  // console.log(e.target.type);
  //console.log('validado....');
  //leeo  lo digitado en el input
  if (e.target.value.length > 0) {
    //elimina los errores
    const error = document.querySelector('p.error');
    if (error) {
      error.remove();
    }
    //console.log('hay algo');
    //quito clases que no utilizo - agrego colores a los bordes de los input
    e.target.classList.remove('border', 'border-red-500');
    e.target.classList.add('border', 'border-green-500');
  } else {
    //agrega el borde rojo abajo del input cuando sale de este con css.
    // e.target.style.borderBottomColor = 'red';
    //agrego la clase error al input = e.target
    //e.target.classList.add('error')
    //agrega borde con las clases de talwind
    e.target.classList.remove('border', 'border-green-500');
    e.target.classList.add('border', 'border-red-500');
    mostrarError('Todos los campos son abligatorios');
  }
  //validacion del input email
  if (e.target.type === 'email') {
    //console.log('Es un email hay que validarlo diferente');

    if (er.test(e.target.value)) {
      const error = document.querySelector('p.error');
      if (error) {
        error.remove();
      }

      e.target.classList.remove('border', 'border-red-500');
      e.target.classList.add('border', 'border-green-500');
    } else {
      e.target.classList.remove('border', 'border-green-500');
      e.target.classList.add('border', 'border-red-500');
      mostrarError('Email no Valido');
    }
  }
  //valido el email con la Expresion regular- los otros campos si normales.- si son diferente de "" y es un email valido
  if (er.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
    // si todo es  correcto activo el boton de enviar
    btnEnviar.disable = false;
    btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
  }
}

//funcion de mostar error
function mostrarError(mensaje) {
  //console.log('error');
  const mensajeError = document.createElement('p');
  mensajeError.textContent = mensaje;
  //adiciono clases css al mensaje
  mensajeError.classList.add(
    'border',
    'border-red-500',
    'background-red-100',
    'text-red-500',
    'p-3',
    'mt-5',
    'text-center',
    'error'
  );
  //adiciono un clase llamada error- evalua si hay una clase llamda error en el elemento
  //asi solo sale una vez el arror a pesar de que entra y sale de todos los input
  //queryselectorall trabaja con length
  const errores = document.querySelectorAll('.error');
  if (errores.length === 0) {
    //con appenchild el error sale como el ultimo hijo del elemento
    formulario.appendChild(mensajeError);
    //si quiero que el mensaje de eero salga arrina ubico el elemento antes de donde donde va a salir el error
    // formulario.insertBefore(mensajeError, document.querySelector('.mb-10'));
  }
}

//Funcion Enviar Email
function enviarEmail(e) {
  e.preventDefault();
  //console.log('Enviando');
  //Mostrar spiner
  const spinner = document.querySelector('#spinner');
  //activo el spiner
  spinner.style.display = 'flex';

  //Despues de 3 segundos oculto spiner y muestro mensaje
  //otra funcion de tiempo es setInterval -- segundos
  setTimeout(() => {
    spinner.style.display = 'none';

    //     //mensaje de verificacion
    const parrafo = document.createElement('p');
    parrafo.textContent = 'El mensaje se envio Correctamente';
    //Doy formato al parrafo con telwin
    parrafo.classList.add(
      'text-center',
      'my-10',
      'p-2',
      'bg-green-500',
      'text-white',
      'font-bold',
      'uppercase'
    );

    //     //inserto el parrafo en el DOM- antes del spinner
    formulario.insertBefore(parrafo, spinner);

    //RESETEO EL FORMULARIO Y ELEIM\NO EL PARRAFO
    setTimeout(() => {
      parrafo.remove();
      resetearFormulario();
      //inhabilito el boton enviar
      iniciaApp();
    }, 5000);
  }, 3000);
}

//funcio que resetea el formulario
function resetearFormulario() {
  formulario.reset();
}
