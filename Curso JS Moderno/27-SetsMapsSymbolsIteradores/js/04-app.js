//weakMap = Mantner datos Privados

const producto = {
  idProducto: 10,
};

const weakmap = new WeakMap();
//adiciono
weakmap.set(producto, 'Monitor');

//has busca - dice si esxiste el producto
console.log(weakmap.has(producto)); //true
//accedo al valor de producto
console.log(weakmap.get(producto)); //Monitor- queda el IdProducto ocualto

// no se puede iterar-
//no puedes conocel el  tamano com size

//eliminar
console.log(weakmap.delete(producto));
