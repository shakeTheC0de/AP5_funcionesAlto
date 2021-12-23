// Ejercicio 6.- Escribe un programa que calcule el área y la longitud de una circunferencia en función del radio (leído desde teclado).
// Se ha de escribir un método para calcular el área y otro para la longitud.
// Las fórmulas del área y la longitud de una circunferencia: A=p * r2 y L=2*p * r
const rl = require("readline-sync");
let r = rl.question("Dime el radio de la circunferencia: ")
area = () => {return Math.PI * Math.pow(r, 2);}
longitud = () => {return 2 * Math.PI * r;}

console.log("El area de la circunferencia es: " + area());
console.log("La longitud de la circunferencia es: " + longitud());