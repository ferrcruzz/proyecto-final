/* let respuesta = prompt("¿Eres mago o muggle?");

while (respuesta.toLowerCase() !== "mago") 

{
    
  respuesta = prompt("¡Sangre sucia!, solo los magos pueden ingresar ¡AVADA KEDAVRA!. ");

}

alert("¡Alohomora!, puedes ingresar.");
 */
let respuesta = prompt("¿Eres mago o muggle?");

while (respuesta !== null) {
  if (respuesta.toLowerCase() === "mago") {
    alert("¡Alohomora!, puedes ingresar.");
    break;
  } else if (respuesta.toLowerCase() === "muggle") {
    alert("¡Sangre sucia!, solo los magos pueden ingresar ¡AVADA KEDAVRA!.");
    respuesta = prompt("¿Eres mago o muggle?");
  } else {
    alert("Respuesta inválida. Por favor, ingresa 'mago' si eres mago o 'muggle' si eres muggle.");
    respuesta = prompt("¿Eres mago o muggle?");
  }
}

if (respuesta === null) {
  alert("Respuesta inválida. Por favor, intenta de nuevo más tarde.");
}
