//desedstructurando Array
var myArray = ['Hey', 'I', 'Am', 'an', 'Array'];
var greeting = myArray[0];
var type = myArray[4];

console.log(greeting);
console.log(type);
//DESESTRUCTURING
var myArray = ['Hey', 'I', 'Am', 'an', 'Array'];
var [greeting, one, another, onotherOne, type] = myArray;
console.log(myArray);
//(5) ["Hey", "I", "Am", "an", "Array"]
console.log(greeting);
//Hey
console.log(type);
//Array

var [greeting, , , , type] = ['Hey', 'I', 'Am', 'an', 'Array'];
console.log(greeting); //Hey
console.log(type); //Array

//DESESTRSUTURANDO OBJETO
const {id, name} = {
  id: 1,
  name: 'Juan',
  LastName: 'Ortiz',
  age: 25,
};
console.log(id, name); //1
console.log(name); //Juna
//desedstructuring
function getAnObject() {
  return {
    id: 1,
    firstName: 'Juan',
    lastName: 'Ortiz',
    age: 25,
  };
}

function getAnArray() {
  return [
    'Hey !',
    function () {
      console.log('Goodbye');
    },
  ];
}
const object = getAnObject();
console.log(object); //{id: 1, name: "Juan", LastName: "Ortiz", age: 25}
// Desestructurando traigo lo que necesito
const {firstName, lastName} = getAnObject();
console.log(firstName + ' ' + lastName); //Juan Ortiz

//destructurin de Array
// const [myFunction] = getAnArray();
// console.log(myFunction); //Hey

const [, myFunction] = getAnArray();
myFunction(); //Goodbye

//SPREAD OPERATOR
