/*
var num = 10;

num >= 15 ? console.log('Es mayor o igual que 15') : console.log('Es menor que 15');


Utilizando un operador ternario evalúe una expresión para saber si a una familia se le otorga o no el 
subsidio del gobierno que corresponde a 1 SMLV. Si el ingreso familiar es inferior a $1’000.000 y en la casa 
habitan 4 o más personas, la persona recibe el subsidio. Muestre como resultado el valor del ingreso familiar más el subsidio.
*/

var ingresoFamiliar = 1200000;

var subsidio = ingresoFamiliar < 1000000 ? 877803 : 0;
console.log("El total de ingresos es: " + ingresoFamiliar + " El subsidio recibido es: " + subsidio);