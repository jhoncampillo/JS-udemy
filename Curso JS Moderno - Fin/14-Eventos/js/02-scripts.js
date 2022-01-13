// En este video estaremos viendo eventos que ocurren con el mouse

const nav = document.querySelector('.navegacion');

// vamos a registrar el eventListener para el nav..
//el evento mouseenter registra solo el paso del mouse por la nav
nav.addEventListener('mouseenter', () => {
  console.log('entrando a navegacion');
  //cambio el estilo del back
  nav.style.backgroundColor = 'white';
});
//mouseout registra salida de la nav
nav.addEventListener('mouseout', () => {
  console.log('saliendo de la navegacion');

  nav.style.backgroundColor = 'transparent';
});

// otros eventos abarcan...

// mousedown - // cuando presionamos
// click - similar, de hecho es probablemente el más utilizado..
// dbclick - doble click como cuando quieres abrir un archivo
// mouseup - al soltar el click
//
