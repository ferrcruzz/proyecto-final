// Variables y constantes
const PI = 3.1416;
let edad = 18;

// Funciones
function saludar(nombre) {
  console.log(`Hola, ${nombre}!`);
}

// Métodos
const persona = {
  nombre: "Harry Potter",
  edad: 17,
  saludar: function() {
    console.log(`¡Hola, soy ${this.nombre} y tengo ${this.edad} años!`);
  }
};

// Condicionales
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
