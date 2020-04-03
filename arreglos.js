var array1 = ["Juan","Luis","Pedro","Mariana"];
var array2 = [true,false,false,true];

for(var i=0;i<array1.length; i++){
	console.log("Los asistentes son: " + array1[i]);
}

for(var i=0;i<array1.length; i++){
	console.log(array1[i] + (array2[i] ? " Asistio " : " No Asistio"));
}