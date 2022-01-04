const rl = require("readline-sync");
let fila = rl.question("Dime cuantas filas quieres crear: ");
let caracter = rl.question("Dime que caracter quieres usar: ");

let figura = (fila, caracter) =>{
    let caracteres = 1;
    for (let i = 0; i < fila; i++) {
        let linea = "";
        for (let j = 0; j < 2 * i +1; j++) {
            linea += caracter;
        }
        console.log(linea);
    }
    caracteres = (fila - 2) * 2 + 1;
    for (let i = fila - 2; i >= 0; i--) {
        let linea = "";
        for (let j = 0; j < 2 * i + 1; j++){
            linea += caracter;
        }
        console.log(linea);
    }
}
figura(fila, caracter[0]);