/*
Obtener el promedio de edad de las personas de apellidos que empiecen por la letra E del siguiente listado: 
["Jesus Estrada;36;M;Calle 1 # 2", "Rosa Vergara;33;F;Calle 3 # 4", "Fernando Escobar;34;M;Calle 5 # 2]
*/

var prom = 0;
var cont = 0;
var array = ["Jesus Estrada;36;M;Calle 1 # 2", "Rosa Vergara;33;F;Calle 3 # 4", "Fernando Escobar;34;M;Calle 5 # 2"];

prom += array[0].split(";")[0].split(" ")[1][0] == "E" ? parseInt(array[0].split(";")[1]) : 0;
prom += array[1].split(";")[0].split(" ")[1][0] == "E" ? parseInt(array[1].split(";")[1]) : 0;
prom += array[2].split(";")[0].split(" ")[1][0] == "E" ? parseInt(array[2].split(";")[1]) : 0;

cont += array[0].split(";")[0].split(" ")[1][0] == "E" ? 1 : 0;
cont += array[1].split(";")[0].split(" ")[1][0] == "E" ? 1 : 0;
cont += array[2].split(";")[0].split(" ")[1][0] == "E" ? 1 : 0;

prom = prom / cont;
console.log("El promedio es: " + prom);