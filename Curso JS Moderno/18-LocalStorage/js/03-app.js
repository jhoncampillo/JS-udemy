//eliminar Elementos del localStoreage

localStorage.removeItem('nombre');

//actualizar un registro
//1- defien que vas a actualizar y traerlo
//este comando convierte y actauliza - traigo el dato a autualizat
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
//03-app.js:9 (4) ["Enero", "Febrero", "Marzo", " Abril"]
//ya le adiciono al array
mesesArray.push('Nuevo Mes');
console.log(mesesArray);
//03-app.js:12 (5) ["Enero", "Febrero", "Marzo", " Abril", "Nuevo Mes"]
//ya adiconado al array lo adiciono al localStorage
// en la variable los parametros son " meses=>a donde voy a mandar" y Json... que voy a mandar)
localStorage.setItem('meses', JSON.stringify(mesesArray));
//asi reescribo el localStorage 	["Enero","Febrero","Marzo"," Abril","Nuevo Mes"]

//otro metodo clear que limpia todo el localStorage
localStorage.clear();
