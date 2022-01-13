//Viaje.html
//Permite identificar una imagen una vez se visible en el
//view port del navegador
//se usa al trabajar con imagenes leasy lewing
//scroll infinity
//Cuando este listo el documento
//API nativa de JS
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      console.log("YA esta Visible");
    }
  });
  //selecciono la clase que se quiere observar
  observer.observe(document.querySelector(".premium"));
});
//RESPUETSA DE LA CONSOLA
// IntersectionObserverEntry {time: 1735.199999988079, rootBounds: DOMRectReadOnly, boundingClientRect: DOMRectReadOnly, intersectionRect: DOMRectReadOnly, isIntersecting: false, …}
// boundingClientRect: DOMRectReadOnly {x: 0, y: 2609.59375, width: 439.203125, height: 448.015625, top: 2609.59375, …}
// intersectionRatio: 0
// intersectionRect: DOMRectReadOnly {x: 0, y: 0, width: 0, height: 0, top: 0, …}
// isIntersecting: false
// isVisible: false
// rootBounds: DOMRectReadOnly {x: 0, y: 0, width: 439.203125, height: 723.203125, top: 0, …}
// target: div.contenedor-cards.premium
// time: 1735.199999988079
// __proto__: IntersectionObserverEntry
