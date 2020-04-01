/*
Diseñar un algoritmo que calcule la nota final de cualquier asignatura a partir de 2 notas parciales. 
El algoritmo debe mostrar, además de la nota final, un mensaje que indique el resultado:
0 - 2.0 : Pésimo
2.1 - 3.0 : Insuficiente
3.1 - 4.0 : Aceptable
4.1 - 5.0 : Bueno
*/

var nota = 5.0;

if(nota < 2){
	console.log("Su nota es: " + nota + " Usted da verguenza... eso es Pésimo");
}else if(nota > 2.1 && nota < 3.0){
	console.log("Su nota es: " + nota + " Estudie Vago... eso es Insuficiente");
}else if(nota > 3.1 && nota < 4.0){
	console.log("Su nota es: " + nota + " Por poco y se tira el semestre... eso es Aceptable");
}else{
	console.log("Su nota es: " + nota + " Gracias a Dios... eso es Bueno");
}