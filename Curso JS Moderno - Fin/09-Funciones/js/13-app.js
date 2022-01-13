// Arrow functions en métodos de propiedad

const reproductor = {
  cancion: '',
  reproducir: (id) => console.log(`Reproduciendo canción id ${id}`),
  pausar: () => console.log('pausando...'),
  borrar: (id) => console.log(`Borrando canción con id: ${id}`),
  crearPlaylist: (nombre) => console.log(`Creando la Playlist ${nombre}`),
  reproducirPlaylist: (nombre) =>
    console.log(`Reproduciendo la Playlist ${nombre}`),

  // También existen los Set y Get si tienes experiencia con esos términos, y si no, set es para añadir un valor, get es para obtenerlo...
  //set agrega valores
  set nuevaCancion(cancion) {
    //this busca dentro del objeto y nose vaya hacia afuera
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },
  //get obtiene los valores agregados
  get obtenerCancion() {
    console.log(`${this.cancion}`);
  },
};
reproductor.reproducir(30);
reproductor.pausar();

// Tambien los métodos pueden quedarse por fuera
// reproductor.borrar = function(id) {

// }
reproductor.borrar(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');

// Probando set y get se utilizando de la siguiente forma
reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;
