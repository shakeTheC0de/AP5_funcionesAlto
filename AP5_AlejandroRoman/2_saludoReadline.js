//2. Crea una funcion que devuelva un saludo pero esta vez que el nombre se obtenga por consola
const rl = require("readline-sync");
let nombre = rl.question("Dime como te llamas: ");

const saludo = () => {console.log("Hola " + nombre + " ,encantado de conocerte. ");};

saludo();
