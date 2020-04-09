var persona = {
	nombre: "Luis",
	apellido: "Peña",
	sexo: "M",
	edad: 32,
	nacionalidad: "colombiano",
	estadocivil: "casado",
};

var llaves = Object.keys(persona);
console.log(llaves);

for (var i=0; i<llaves.length; i++){
	var llave = llaves[i];
	console.log(persona[llave]);
};