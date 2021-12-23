// Ejercicio 8.- Escribe un programa que, dado el nombre de una persona y el idioma de preferencia de esa persona,
// escriba en pantalla un saludo a esa persona en el idioma elegido, con el estilo: ”Buenos días Pepe Sánchez”.
// Los idiomas disponibles serán
// (a) Valenciano
// (b) Castellano
// (c) Inglés
// El saludo se mostrará desde un procedimiento al que se le pasan el nombre y el código del idioma.
// Para el ejemplo anterior, la llamada sería: saludo (”Pepe Sánchez ”, ’b’)
const rl = require("readline-sync");

let nombre;
let idioma;
let opcion;

const menu = () => {
    console.clear();
    console.log("MENU DE IDIOMAS");
    console.log("(A) Valenciano");
    console.log("(B) Castellano");
    console.log("(C) Ingles");
    console.log("(D) Salir");
}

const saludo = (nombre, idioma) => {
    switch (idioma) {
        case "a":
        case "A":
            console.log("Bon dia " + nombre);
            rl.question();
            break;
        case "b":
        case "B":
            console.log("Buenos dias " + nombre);
            rl.question;
            break;
        case "c":
        case "c":
            console.log("Good Morning " + nombre);
            rl.question;
            break;
        default:
            console.log("Indica una opcion correcta!");
    }
}

do {
    console.log();
    console.log(menu());
    //idioma = rl.question("Selecciona un idioma: ")
    //opcion = idioma.charAt(0);
    opcion = (idioma = rl.question("Selecciona un idioma: ")) && (idioma.charAt(0));
    if (opcion != "d" && opcion != "D"){
        nombre = rl.question("Dime cual es tu nombre: ");
        console.log(saludo(nombre, idioma));
    }
}while(opcion != "d" && opcion != "D");

