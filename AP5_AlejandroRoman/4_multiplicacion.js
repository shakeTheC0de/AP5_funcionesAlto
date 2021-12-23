/* Ejercicio 4.- Realiza un programa que, a partir de la edad porporcionada, calcule el número de horas aproximado que la persona ha pasado a lo largo de su vida durmiendo. Éste cálculo se obtiene muultiplicando los años por 365 días/año por 8 horas/dia. La función "horasDormidas":
    - necesita un parámetro de entrada indicando los años que tiene la persona
    - devuelve un valor en horas
La función debe ser llamada, y su resultado mostrado por consola en un formato adecuado, al estilo de "Has dormido un total de 2500 horas."
*/
const rl = require("readline-sync");

const horasDormidas = () => {
    let edad = rl.question("Dime que edad tienes: ");
    return edad * 365 * 8;

}
console.log("Has dormido un total de " + horasDormidas() + " horas.");