/*
Dados dos números indicar si el primer número  es un número de teléfono fijo válido (7 dígitos) 
y el segundo número es un número de celular válido(10 dígitos).
Los valores se deben capturar como cadenas de texto. Validar que no contenga espacios.
*/

var num1 = "301 929303";
var num2 = "3405504";
var sw1 = true;
var sw2 = true;
for(var i = 0; i<num1.length; i++){
	if(num1[i] != "0" || 
	   num1[i] != "1" || 
	   num1[i] != "2" || 
	   num1[i] != "3" || 
	   num1[i] != "4" || 
	   num1[i] != "5" || 
	   num1[i] != "6" || 
	   num1[i] != "7" || 
	   num1[i] != "8" || 
	   num1[i] != "9") sw1 = false;
}

for(i = 0; i<num2.length; i++){
	if(num2[i] != "0" || 
	   num2[i] != "1" || 
	   num2[i] != "2" || 
	   num2[i] != "3" || 
	   num2[i] != "4" || 
	   num2[i] != "5" || 
	   num2[i] != "6" || 
	   num2[i] != "7" || 
	   num2[i] != "8" || 
	   num2[i] != "9") sw2 = false;
}

if(sw1){
	if(num1.length == 7) console.log("El primer numero es telefono");
	else if(num1.length == 10) console.log("El primer numero es Celular");
	else console.log("El primer numero no es valido");
}else console.log("El primer numero no es valido");
if(sw2){
	if(num2.length == 7) console.log("El segundo numero es telefono");
	else if(num2.length == 10) console.log("El segundo numero es Celular");
	else console.log("El segundo numero no es valido");	
}else console.log("El segundo numero no es valido");