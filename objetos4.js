/*
Crear una función saludar que escriba el nombre de la persona dentro del objeto persona, 
la función debe recibir un parámetro que hace referencia al idioma, 
si el idioma es inglés saluda en inglés si el idioma es español, saluda en español
*/

var persona = {
	nombre: "Luis",
	apellido: "Peña",
	sexo: "M",
	edad: 32,
	nacionalidad: "colombiano",
	estadocivil: "casado",
	saludar: function(idioma){
		switch(idioma){
			case "ES": console.log("Hola, mi nombre es: "+this.nombre);
			break;
			case "EN": console.log("Hi, my mane is: "+this.nombre);
			break;
		}    
	}
}

persona.saludar("EN");