//  Ejercicio 10.- Modifica el script anterior y añade una función más llamada calculaSalario, de forma que:
//     - recibe como parámetros de entrada la categoria y el número de horas, estos datos deben ser pedidos al usuario por teclado.
//     - devuelve el total del salario
//     - La función calcula salario necesita saber el precio por hora del empleado, por lo que deberá llamar a la función precioHora, pasándole a su vez la categoría que el usuario nos ha dado.
// Se debe mostrar el resultado final por consola.

const rl = require("readline-sync");

const categoria = rl.question("Dime cual es tu categoria: ")
let precioHora;

const precioCategoria = () => {
    
    switch (categoria) {
        case "Indefinido":
        case "indefinido":
            precioHora = 30;
            break;
        case "Temporal":
        case "temporal":
            precioHora = 20;
            break;
        case "Practicas":
        case "practicas":
            precioHora = 15
            break;
    }
        return precioHora
}

const salario = () => {
    const horasTrabajo = rl.questionFloat("¿Cuantas horas has trabajado? : ")
    return precioHora * horasTrabajo;
}

precioCategoria();
console.log("Tu salario sera de " + salario() + "€ este mes");