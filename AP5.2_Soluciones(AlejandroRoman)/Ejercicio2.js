// Programa que tras leer un numero entre 1 y 10 , muestre su equivalente en numero romando.
//Debes utilizar una funcion flecha numRomano que reciba el numero entero y lo devuelva en formato romano

const rl = require('readline-sync');

let numero = rl.question('Dime el numero que quieres convertir: ');
let romano = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X' ]

const numRomano = () => {
    return romano[numero]; 
}

console.log(numRomano())