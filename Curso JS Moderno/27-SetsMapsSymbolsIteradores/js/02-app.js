//Set debil  - WeakSet - no son itereables
// a; weakset solamnet ele puedes agregar objetos
// no se puede conocer la extension
const weakset = new WeakSet();

const cliente = {
  nombre: "Jhon",
  saldo: 100,
};
weakset.add(cliente);

console.log(weakset);

console.log(weakset.has(cliente)); //true
//Elimino
//weakset.delete()
