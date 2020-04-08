/*
Dados dos números indicar si el primer número  es un número de teléfono fijo válido (7 dígitos) 
y el segundo número es un número de celular válido(10 dígitos).
Los valores se deben capturar como cadenas de texto.
*/

var num1 = "301 929303";
var num2 = "3405504";

if(num1.length == 7) console.log("El primer numero es telefono");
else if(num1.length == 10) console.log("El primer numero es Celular");
else console.log("El primer numero no es valido");

if(num2.length == 7) console.log("El segundo numero es telefono");
else if(num2.length == 10) console.log("El segundo numero es Celular");
else console.log("El segundo numero no es valido");	
