var persona = {
	nombre: "Luis",
	apellido: "Peña",
	sexo: "M",
	edad: 32,
	nacionalidad: "colombiano",
	estadocivil: "casado",
};

persona.nacionalidad == "colombiano" ? console.log("Sí es colombiano") : console.log("No es colombiano");
persona.peso = 60;
delete persona.estadocivil;

for(var llave in persona){
	if (persona.hasOwnProperty(llave)){
		console.log(persona[llave]);
	};
};
