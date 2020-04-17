/*
Definir una clase Persona con los atributos: nombre, apellido, género, fecha de nacimiento (DD-MM-AAAA). 
1) Crear métodos para establecer y obtener los valores de cada atributo
2) Crear un método para obtener la edad de la persona, con base en la fecha actual
*/

class Persona {
  constructor(nombre, apellido, genero, fechaNac) {
    this.nombre = nombre;
	this.apellido = apellido;
	this.genero = genero;
	this.fechaNac = fechaNac;
  }

  //Edad
  getEdad(){
	var hoy = new Date();
	var cumpleanos = new Date(this.fechaNac);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
  }

  //Getter
  getNombre() {
    return this.nombre;
  }
  
  getApellido(){
	return this.apellido;
  }
  
  getGenero(){
	return this.genero;
  }
  
  getFechaNac(){
	return this.fechaNac;
  }
  
  //Setter
  setNombre(nombre) {
    this.nombre = nombre;
  }
  
  setApellido(apellido){
	this.apellido = apellido;
  }
  
  setGenero(genero){
	this.genero = genero;
  } 
  
  setFechaNac(fechaNac){
	this.fechaNac = fechaNac;
  }
}

//Prueba
const persona = new Persona("Luis","Peña","Masculino","02-06-1987");
console.log("La edad de la persona es: " + persona.getEdad());