/*
Hacer un algoritmo que lea tres números y muestre el mayor número (suponga que los números son diferentes).
*/

var num1 = 10, num2 = 500, num3 = 200;
var mayor = 0;

if(num1 > num2 && num1 > num3){
	mayor = num1;
}else if(num2 > num1 && num2 > num3){
	mayor = num2;
}else{
	mayor = num3;
}

console.log("Numero mayor es: " + mayor);