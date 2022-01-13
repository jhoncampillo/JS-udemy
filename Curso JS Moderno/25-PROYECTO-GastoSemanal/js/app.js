//Variables y Selectores//////////////////////////////////////////////////////
const formulario = document.querySelector('#agregar-gasto');
const gastosListado = document.querySelector('#gastos ul');

// Eventos /////////////////////////////////////////////////////////////////////////
eventListeners();
function eventListeners() {
  // cuando el Documento este listo ejecuto esta funcion  - 1
  document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

  //4 validacion del formulario
  formulario.addEventListener('submit', agregarGasto);
}

// Calses ////////////////////////////////////////////////////////////////////
//2 - DEFINO 2 CLASES 1 QUE CONTROLE EL PRESUPUESTO Y 2 QUE SE ENCARGE DE MOSTAR HTML UI
class Presupuesto {
  constructor(presupuesto) {
    //convierto en numero cualquier string
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    //Presupuesto {presupuesto: 2000, restante: 2000}
    //gastos - arreglo vacio
    this.gastos = [];
  }
  /// agrego un nuevo metodo para agregar los castos
  nuevoGasto(gasto) {
    // console.log(gasto);
    //hago una copia de array this.gastos y le paso el nuevo gasto al final
    this.gastos = [...this.gastos, gasto];
    console.log(this.gastos);
    this.calcularRestante();
  }
  //metodo para calcular restante
  calcularRestante() {
    ui.imprimirAlerta('');
    const gastado = this.gastos.reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    );
    this.restante = this.presupuesto - gastado;
  }
  eliminarGasto(id) {
    //le paso el id para saber cual es el item que vamos a borra
    //console.log('desde la clase');
    this.gastos = this.gastos.filter((gasto) => gasto.id !== id);
    console.log(this.gastos);
    this.calcularRestante();
  }
}

//esta clase no requiere ontructor por que va a usar metodos que insertan HTML
class UI {
  //Inserto presupuesto en el html - toma una cantidad
  insertarPresupuesto(cantidad) {
    //capturo el parametro presupuesto no importa el nombre cantidad

    console.log(cantidad);
    //debugger;
    const {presupuesto, restante} = cantidad;
    //referencio el id #total del html y le asigno el valor de presupuesto y restante
    document.querySelector('#total').textContent = presupuesto;
    document.querySelector('#restante').textContent = restante;
  }
  //metodo de imprimir alerta
  imprimirAlerta(mensaje, tipo) {
    //crear el div de alerta
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('text-center', 'alert');

    if (tipo === 'error') {
      divMensaje.classList.add('alert-danger');
    } else {
      divMensaje.classList.add('alert-success');
    }
    divMensaje.textContent = mensaje;
    //inserto en el html
    document.querySelector('.primario').insertBefore(divMensaje, formulario);

    //quitar el mensaje de error
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
  //defino el metodo agregarGastoListado
  agregarGastoListado(gastos) {
    console.log(gastos);
    //llamo metodo le limpiar html

    this.limpiarHTML();

    //iterar sobre los gastos
    gastos.forEach((gasto) => {
      // console.log(gasto);
      //desestruturo es gatos
      const {cantidad, nombre, id} = gasto;

      // crear un li
      const nuevoGasto = document.createElement('li');
      nuevoGasto.className =
        'list-group-item d-flex justify-content-between line-items-center';
      // creo un atributo peronalizado id en html para manipular registros
      //nuevoGasto.setAttribute('data-id', id); y es igual a
      nuevoGasto.dataset.id = id;

      console.log(nuevoGasto);

      //agregar al HTML del gasto
      nuevoGasto.innerHTML = `${nombre}<span class="badge badge-primary badge-pill">$ ${cantidad}</span>`;

      //Creo Booton para borrar el gasto////////////////////////////////
      const btnBorrar = document.createElement('button');
      btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
      //btnBorrar.textContent = 'Borrar';
      btnBorrar.innerHTML = 'Borrar &times;';
      nuevoGasto.appendChild(btnBorrar);
      //elimino el gasto//////////////////
      btnBorrar.onclick = () => {
        eliminarGasto(id);
      };
      //Agergar al HTML
      gastosListado.appendChild(nuevoGasto);
    });
  }
  limpiarHTML() {
    while (gastosListado.firstChild) {
      gastosListado.removeChild(gastosListado.firstChild);
    }
  }
  //Actualizar restante
  actualizarRestante(restante) {
    document.querySelector('#restante').textContent = restante;
  }

  comprobarPresupuesto(presupuestObj) {
    //extraigo
    const {presupuesto, restante} = presupuestObj;

    const restanteDiv = document.querySelector('.restante');
    //comprobar 25%
    if (presupuesto / 4 > restante) {
      //console.log(restante);
      // console.log('Gataste el 75%');
      restanteDiv.classList.remove('alert-success');
      restanteDiv.classList.add('alert-danger');
    } else if (presupuesto / 2 > restante) {
      restanteDiv.classList.remove('alert-success');
      restanteDiv.classList.add('alert-warning');
    } else {
      restanteDiv.classList.remove('alert-danger', 'alert-warning');
      restanteDiv.classList.remove('alert-success');
    }
    //Si el total es 0 o menor
    if (restante <= 0) {
      ui.imprimirAlerta('El presupuesto de ha Agotado', 'error');
      //desactivo el button por que ya no hay presupuesto
      formulario.querySelector('button[type="submit"]').disabled = true;
    }
  }
}
//3
//instancio UI
const ui = new UI();
//2
// creo la variable para par apoder estanciar la Clase
// hay que saber como ubicarla para que quede global
let presupuesto;

//Funciones  ////////////////////////////////////////////////////////////////////////
//1
function preguntarPresupuesto() {
  const presupuetoUsuario = prompt('Cual es tu Presupuesto?');
  //Number  - cualquier numero que sea string a Numbre-
  // si digitas una letra  captuna NaN
  console.log(Number(presupuetoUsuario));
  // si el prompt esta vacio entonces o  le dan cancelar- o si es un NaN- retorna True
  if (
    presupuetoUsuario === '' ||
    presupuetoUsuario === null ||
    isNaN(presupuetoUsuario) ||
    presupuetoUsuario <= 0
  ) {
    //Recarga el prompt si esta vacio el input
    window.location.reload();
  }
  //2 -- Presupuesto Valido - es un objeto
  presupuesto = new Presupuesto(presupuetoUsuario);
  console.log(presupuesto);
  //creo el protoipo de ui y le mando el objeto presupuesto

  ui.insertarPresupuesto(presupuesto);
}
//7561888-lis dilian polo

//creo la fucnion de agregarGasto - como es sun submin le paso el evento e
function agregarGasto(e) {
  e.preventDefault();

  //leer datos del Formulario
  //accedo directo al valor del input
  const nombre = document.querySelector('#gasto').value;
  const cantidad = Number(document.querySelector('#cantidad').value);

  //validos los input
  if (nombre === '' || cantidad === '') {
    //console.log('Ambos campos son obligatorios');
    //instancio la alerta y lepaso un mensaje y el error
    ui.imprimirAlerta('Ambos campos son Obligatorios', 'error');
    return;
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    //valido que no metan datso negativos
    ui.imprimirAlerta('Cantidad no Validad', 'error');
    return;
  }
  //console.log('Agregando Gasto');
  //Generar un objeto  literal con el gastos - lo contraio al desetructuring
  // const{nombre, cantidad}= gasto  - extrae nombre y cantidad  de gasto
  // es lo mismo que => const gasto = {nombre:nombre, cantidad:cantidad ,id:Date.now};
  //este objeto lo paso a nuestras clases Presupuesto
  const gasto = {nombre, cantidad, id: Date.now()};

  //anade nuevo gasto
  presupuesto.nuevoGasto(gasto);
  //console.log(gasto);
  // imprimo avisode gasto agregado correctamente
  ui.imprimirAlerta('Gasto Agragado correctamente');
  //imprimo los gastos y creo un nuevoo metodo
  //para agregar los gasto al listado
  //desestructuro los gastos del objeto presupuesto para no pasar todo el objeto
  const {gastos, restante} = presupuesto;
  ui.agregarGastoListado(gastos);

  ui.actualizarRestante(restante);

  ui.comprobarPresupuesto(presupuesto);
  //reinicio el formulario
  formulario.reset();
}
//funcion eliminar Gasto
function eliminarGasto(id) {
  console.log(id);
  ///eliemina los gastos del objeto
  presupuesto.eliminarGasto(id);
  //Elimina los Gastos del Html
  const {gastos, restante} = presupuesto;
  ui.agregarGastoListado(gastos);

  ui.actualizarRestante(restante);

  ui.comprobarPresupuesto(presupuesto);
}
