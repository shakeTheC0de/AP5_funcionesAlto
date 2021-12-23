/* Ejercicio 14.- Se pretende vetar la palabra malsonante "mecachis" en un texto que el usuario debe introducir por teclado. Si esta existe, se le informa al usuario de que ha sido vetado y se le muestra la palabra sustituida por la cadena "********", si no, se le informa de que su mensaje es correcto. Pistas: usa .indexOf() y .replace()
 */
const rl = require("readline-sync");

let mensaje = rl.question("Que mensaje desea enviar: ");

const procesado = () => {
  let respuesta = "";
  if (mensaje.indexOf("mecachis") == -1) {
    respuesta = "mensaje correcto!";
  } else {
    respuesta = "Mensaje con palabras mal sonantes"
  }
  return respuesta;
}

console.log(procesado());