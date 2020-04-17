/*
Escribir el valor del primer y tercer parámetro
*/

function miFuncion(param1, ...rest){
	console.log(param1);
	console.log(rest[1]);
}

miFuncion("Luis","Andres","Peña","Zuñiga");

var vble = [100,200,4];
console.log(Math.max(...vble));