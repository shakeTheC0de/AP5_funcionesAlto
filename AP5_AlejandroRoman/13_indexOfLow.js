/* Ejercicio 13.- Modifica el script anterior para que no importe si escribimos en mayúsculas o en minúsculas.
 */
const rl = require("readline-sync");
let peticionUsuario = rl.question("Que deseas que haga: ");


const respuesta = () => {
  let respuestaAccion = "";
  peticionUsuario = peticionUsuario.toLocaleLowerCase()
  if (peticionUsuario.indexOf("por favor") != -1) {
    respuestaAccion = "Entendido! ahora mismo lo hago";
  } else {
    respuestaAccion = "De ninguna manera, no has usado la expresión mágica";
  }
  return respuestaAccion;
}

console.log(respuesta());