const diaHoy = new Date();
//pone las fechas en es espanol

console.log(moment().format('MMMM Do YYYY h:mm:ss'));

console.log(moment().add(10, 'days').calendar()); // 04/30/2021;

console.log(moment().subtract(1, 'days').calendar());

console.log(moment().format();     );

//https://momentjs.com/
//hay que instalrlo en el html como cdn -lo mismo el locale