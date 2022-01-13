//variable y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastosListado = document.querySelector('#gastos ul');

//eventos
eventListeners();
function eventListeners() {
  document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
  //Manejo del diccionario y sus validaciones
  formulario.addEventListener('submit', agregarGasto);
}

//clases 2 una controla el presupuesto y otra la interfas de
class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    // arreglo de gastos se va llenando con gastos
    this.gastos = [];
  }
  //creo metodo para agrergar gastos al array
  nuevoGasto(gasto) {
    //console.log(gasto); -copia del this y le agregoel arreglo
    this.gastos = [...this.gastos, gasto];
    console.log(this.gastos);
    this.calcularRestante();
  }
  //Calcular  restante- disminuye el presupuesto cada que ingresa un nuevo gasto
  calcularRestante() {
    const gastado = this.gastos.reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    );
    console.log(gastado);
    this.restante = this.presupuesto - gastado;
  }
  eliminarGasto(id) {
    //console.log('Desde la Clase');
    //Filtro los gastos diferentes del id borrado
    this.gastos = this.gastos.filter((gasto) => gasto.id !== id);
    console.log(this.gastos);
    this.calcularRestante();
  }
}

class UI {
  //mentre el valor del presupuesto en el html- con un metos
  insertarPresupuesto(cantidad) {
    console.log(cantidad);
    const {presupuesto, restante} = cantidad;
    //agrego al html lo valores
    document.querySelector('#total').textContent = presupuesto;
    document.querySelector('#restante').textContent = presupuesto;
  }
  //tipo es el tipo d mensaje
  imprimirAlerta(mensaje, tipo) {
    //Crear div con la alerta
    const divMensaje = document.createElement('div');
    divMensaje.classList.add('text-center', 'alert');
    //evaluao el tipo de error
    if (tipo === 'error') {
      divMensaje.classList.add('alert-danger');
    } else {
      divMensaje.classList.add('alert-success');
    }
    //Mensaje de Error
    divMensaje.textContent = mensaje;
    //Inserto en el HTML -insertBefore(loquevoy a poner , despeues de )
    document.querySelector('.primario').insertBefore(divMensaje, formulario);

    //Quitar el mensaje despues de 3 segundos
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }
  //metodo para imprimir gastos en html
  mostarGastos(gastos) {
    console.log(gastos);
    //llamo el metodo de limpiarHtml previo en el listado de gastos
    this.limpiarHtml();
    //itero sobre el arreglo de gastos
    gastos.forEach((gasto) => {
      console.log(gasto);
      const {cantidad, nombre, id} = gasto;
      //creo los li
      const nuevoGasto = document.createElement('li');
      //se usa este por que tiene muchas clases. classList.add solo pone una clase
      nuevoGasto.className =
        'list-group-items d-flex justify-content-between aling-items-center';

      //pudo agrehar datos personalizados al tag
      //nuevoGasto.setAttribute('data-id', id); // hace lo mismo
      nuevoGasto.dataset.id = id;

      //agregar el html
      nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> $ ${cantidad} </span>`;

      //Botn de borrar gasto
      const btnBorrar = document.createElement('button');
      btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
      btnBorrar.innerHTML = 'Borrar &times';
      //funcion para borrar el gasto por dataID - solo a penas des click-
      btnBorrar.onclick = () => {
        eliminarGasto(id);
        // console.log('SSSSSSSSSSSSSSSSSSSSSSS');
      };
      nuevoGasto.appendChild(btnBorrar);

      //Agregar al html
      gastosListado.appendChild(nuevoGasto);
    });
  }
  limpiarHtml() {
    while (gastosListado.firstChild) {
      gastosListado.removeChild(gastosListado.firstChild);
    }
  }
  //actualizo el restante en el HTML
  actualizarRestante(restante) {
    document.querySelector('#restante').textContent = restante;
  }
  //metodo comprobar el % del gasto
  comprobarPresupuesto(presupuestObj) {
    const {presupuesto, restante} = presupuestObj;
    const restanteDiv = document.querySelector('.restante');

    //comprobar 25%
    if (presupuesto / 4 > restante) {
      console.log('25%');
      //quito la clase
      restanteDiv.classList.remove('alert-success', 'alert-warning');
      restanteDiv.classList.add('alert-danger');
    } else if (presupuesto / 2 > restante) {
      restanteDiv.classList.remove('alert-success');
      restanteDiv.classList.add('alert-warning');
    } else {
      restanteDiv.classList.remove('alert-danger', 'alert-warning');
      restanteDiv.classList.add('alert-success');
    }
    //si el total es menor a 0
    if (restante <= 0) {
      ui.imprimirAlerta('Presupeusto de ha Agotado', 'error');
      formulario.querySelector('button[type="submit"]').disable = true;
    }
  }
}

//Instanciar la clase para utilizarla mas adelnate
const ui = new UI();
//INSTANCIO LA CLASE PRESUPUESTO y l amando a la fuccion preguntarPresupuesto
//Variable queda global
let presupuesto;

//funciones
function preguntarPresupuesto() {
  const presupuestoUsuario = prompt('Cual es tu presupuesto! $');
  //parseFloat todo flotante
  console.log(parseFloat(presupuestoUsuario));
  //Number convierte todo a numero
  //   console.log(Number(presupuestoUsuario));
  //Valido si esta vacio el presupuesto
  if (
    presupuestoUsuario === '' ||
    presupuestoUsuario === null ||
    isNaN(presupuestoUsuario) ||
    presupuestoUsuario <= 0
  ) {
    window.location.reload();
  }
  //Instancion la clase aqui y le paso a la  var presupuesto el presupuestoUsuario
  presupuesto = new Presupuesto(presupuestoUsuario);
  console.log(presupuesto);

  //nueva objeto del aclase ui.
  ui.insertarPresupuesto(presupuesto);
}

//Funcion agregargastos
function agregarGasto(e) {
  e.preventDefault();
  const nombre = document.querySelector('#gasto').value;
  const cantidad = Number(document.querySelector('#cantidad').value);
  //Valido que los campos no esten vacios
  if (nombre === '' || cantidad === '') {
    ui.imprimirAlerta('Ambos Campos son Obligatorios', 'error');
    return;
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    ui.imprimirAlerta('Cantidad no Valida', 'error');
    return;
    // el return es para que nose sigan ejectando las lineas de codigo
  }
  //console.log('Agragando gasto');
  //Creo un objeto de tipo gasto con los gastos que adicoine
  //contrario a destructuring
  //const {nombbre,cantidad}=gasto
  //objet literal - mojoria del objeto literal
  const gasto = {nombre, cantidad, id: Date.now()};
  //anade nuevo gasto
  presupuesto.nuevoGasto(gasto);
  //Pongo mensaje correcto
  ui.imprimirAlerta('Gasto Agregado Correctamente');

  //Imprimo gastos en el html
  //con destructuting extraigo solo los gastos del presupuesto.
  const {gastos, restante} = presupuesto;
  //se renombre agregarGastosListado
  ui.mostarGastos(gastos);
  ui.actualizarRestante(restante);

  //metodo para comproibar presupuesto
  ui.comprobarPresupuesto(presupuesto);

  //Reincioi el formulario
  formulario.reset();
}
//{nombre: "comida", cantidad: "500"}
// cantidad: "500"
// nombre: "comida"
//Ahora a llenar el arraid de gastos
//Funcion eliminar Gasto
function eliminarGasto(id) {
  //console.log(id);
  //eleimian los gastos de la clase
  presupuesto.eliminarGasto(id);
  //eliemina los gastos del html
  const {gastos, restante} = presupuesto;
  ui.mostarGastos(gastos);
  ui.actualizarRestante(restante);
  ui.comprobarPresupuesto(presupuesto);
}
