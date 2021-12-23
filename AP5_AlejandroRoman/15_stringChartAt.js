// Ejercicio 15.- Se pretende crear una función para comprobar si un DNI es correcto, para ello:
// debe tener 9 caracteres de longitud. Pista: .length
// debe tener los 8 primeros caracteres numéricos. Pista: .slice() y parseInt
// el último carácter debe ser una letra y además corresponder al número. Pista: .charAt()

const rl = require("readline-sync");

let dniUsuario = rl.question("Introduce DNI: ");

const dniValido = () => {
  let respuesta = "";
  if (dniUsuario.length != 9) {
    respuesta = "DNI no cumple el estandar de longitud (9 caracteres)";
  } else {
    let dniNumero = dniUsuario.slice(0, 8);
    let dniNumeroValor = parseInt(dniNumero);
    if (dniNumeroValor == dniNumero) {
      if (dniUsuario.charAt(9) = ("A", "Z")) {
        respuesta = "DNI válido";
      }
      
    } else {
      respuesta = "primeros 8 caracteres contienen datos no numéricos";
    }
  }
  return respuesta;
}

console.log(dniValido(dniUsuario));