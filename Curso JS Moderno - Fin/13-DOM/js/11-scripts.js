// No siempre estarás haciendo traversing a tu dom,

const btnFlotante = document.querySelector('.btn-flotante');

const footer = document.querySelector('.footer');
//otro ejemplo
btnFlotante.addEventListener('click', () => {
  console.log('Diste click en el boton');
});
//registro un posible evento . es decir estar atento
btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
  //verifico si las clases existen - classList - muetras las clases
  if (footer.classList.contains('activo')) {
    footer.classList.remove('activo');
    this.classList.remove('activo');
    this.textContent = 'Idioma y Moneda Jhon';
  } else {
    footer.classList.add('activo');
    this.classList.add('activo');
    this.textContent = 'X Cerrar JH';
  }
  console.log(footer.classList);
}
