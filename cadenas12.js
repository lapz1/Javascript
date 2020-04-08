/*
Obtener el apellido de la persona de la cadena de texto: 
var linea = "Jesus Estrada;36;M;Calle 1 # 2";
*/

var linea = "Jesus Estrada;36;M;Calle 1 # 2";
var obj = linea.split(";");
var apellido = obj[0].split(" ")[1];

console.log(apellido);