/*
Crear un arreglo con 5 números aleatorios, y mostrar por consola 
la raíz cuadrada del mínimo elemento del arreglo, 
y todos los valores del arreglo
*/

function arregloAleatorio(num){
	var array = new Array(num);
	for(var i=0;i<num;i++){
		array[i] = Math.round(Math.random() * 100);
	}
	return array;
}

function raizMinimo(array){
	var min = Math.min(...array);
	return Math.sqrt(min);
}

var array = arregloAleatorio(5);
console.log(array);
console.log(raizMinimo(array));