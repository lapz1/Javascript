/*
Haga un algoritmo que dados los tres lados de un triángulo diga si éste es: equilátero, escaleno
o isósceles
*/

var lado1 = 5, lado2 = 5, lado3 = 8;

if(lado1 == lado2 && lado2 == lado3){
	console.log("equilátero");
}else if(lado1 == lado2 && lado2 != lado3){
	console.log("isósceles");
}else{
	console.log("escaleno");
}