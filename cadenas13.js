/*
Obtener el promedio de edad de las personas del siguiente listado: 
["Jesus Estrada;36;M;Calle 1 # 2", "Rosa Vergara;33;F;Calle 3 # 4", "Fernando Castillo;34;M;Calle 5 # 2]
*/

var prom = 0;
var array = ["Jesus Estrada;36;M;Calle 1 # 2", "Rosa Vergara;33;F;Calle 3 # 4", "Fernando Castillo;34;M;Calle 5 # 2"];

prom += parseInt(array[0].split(";")[1]);
prom += parseInt(array[1].split(";")[1]);
prom += parseInt(array[2].split(";")[1]);

prom = prom / 3;
console.log("El promedio es: " + prom);