//  Ejercicio 9.- Crea un script que nos permita saber el precio hora de un empleado según su categoría. Para ello, la función precioHora:
//     -recibe como parámetro de entrada la categoría, que debe ser introducida por teclado.
//     -según tres posibles categorías, el precio por hora es 30 para categoria indefinido, 20 para categoría temporal y 15 para categoría practicas.
// Muestra el resultado por pantalla
const rl = require("readline-sync");

const categoria = rl.question("Dime cual es tu categoria: ")

const precioCategoria = () => {
    let precioHora;
    switch (categoria) {
        case "Indefinido":
        case "indefinido":
            precioHora = 30;
            console.log("En tu categoria se pagan " + precioHora + " euros la hora");
            break;
        case "Temporal":
        case "temporal":
            precioHora = 20;
            console.log("En tu categoria se pagan " + precioHora + " euros la hora");
            break;
            case "Practicas":
            case "practicas":
                precioHora = 15
                console.log("En tu categoria se pagan " + precioHora + " euros la hora");
                break;
    }
        
}

console.log(precioCategoria());
