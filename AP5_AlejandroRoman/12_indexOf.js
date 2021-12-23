/* Ejercicio 12.- Se pretende que el programa pida al usuario que quiere hacer (pedir una frase), y el mismo programa responderá de dos maneras:
    - "Entendido! ahora mismo lo hago"
    - "De ninguna manera, no has usado la expresión mágica"
La respuesta se dará en función de si la frase contiene las palabras "por favor" en su interior o no.
*/
const rl = require("readline-sync");
let peticionUsuario = rl.question("Que deseas que haga: ");


const respuesta = () => {
  let respuestaAccion = "";
  if (peticionUsuario.indexOf("por favor") != -1) {
    respuestaAccion = "Entendido! ahora mismo lo hago";
  } else {
    respuestaAccion = "De ninguna manera, no has usado la expresión mágica";
  }
  return respuestaAccion;
}

console.log(respuesta());