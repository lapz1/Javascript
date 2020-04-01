/*
Crear un programa para calcular el salario de una persona con base en el número de horas trabajadas y el valor de la hora. 
Si la persona trabaja más de 40 horas, las horas extras deben pagarse con un incremento del 50% sobre el valor de la hora normal.
Mostrar el salario total y cuánto ganó por horas extras
*/

var valorHora = 10000;
var valorAdicional = valorHora * 50 / 100;
var horasTrabajadas = 50;
var salario = 0;

if(horasTrabajadas > 40){
	salario = (valorHora * 40) + ((horasTrabajadas - 40) * valorHora) + ((horasTrabajadas - 40) * valorAdicional);	
}else{
	salario = valorHora * horasTrabajadas;
}

console.log("El valor a pagar es: " + salario);