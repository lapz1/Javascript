/*
Obtener la edad de las personas que hablen inglés de un arreglo de 5 objetos Persona.
Cada elemento del arreglo tiene la siguiente estructura:
*/

var array = [{
  nombre: "Luis",
  sexo: "M",
  edad: 32,
  idiomas: ["EN","ES"],
  verEdad: function(){
	 console.log("La edad de "+this.nombre+" es "+this.edad);
  }
},{
  nombre: "Jesus",
  sexo: "M",
  edad: 36,
  idiomas: ["ES"],
  verEdad: function(){
	 console.log("La edad de "+this.nombre+" es "+this.edad);
  }
},{
  nombre: "Liliana",
  sexo: "F",
  edad: 32,
  idiomas: ["ES"],
  verEdad: function(){
	 console.log("La edad de "+this.nombre+" es "+this.edad);
  }
},{
  nombre: "Mariana",
  sexo: "F",
  edad: 8,
  idiomas: ["EN","ES"],
  verEdad: function(){
	 console.log("La edad de "+this.nombre+" es "+this.edad);
  }
},{
  nombre: "Emmanuel",
  sexo: "M",
  edad: 6,
  idiomas: ["EN","ES"],
  verEdad: function(){
	 console.log("La edad de "+this.nombre+" es "+this.edad);
  }
}];

for(var i = 0; i<array.length; i++){
	var idiomas = array[i].idiomas;
	for(var j = 0; j<idiomas.length; j++){
		if(idiomas[j] === 'EN'){
			array[i].verEdad();
		}
	}
}