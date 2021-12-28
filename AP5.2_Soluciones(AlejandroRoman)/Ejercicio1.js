//Programa que pida la edad de dos hermanos e informe de la diferencia de edad existente entre ambos. Debes utilizar una funcion flecha diferencia de edad que reciba las dos edades y que retorne en valor positivo la diferencia entre ambos.
const rl = require('readline-sync');
let edad = rl.question('Dime la edad del hermano 1 :');
let edad2 = rl.question('Dime la edad del hermano 2 :');
let diferencia 

const diferenciaEdad = () => {
    if (edad > edad2 ) {
        diferencia = (edad - edad2)
        console.log('El hermano 1 es mayor que el hermano 2');
    }else {
        diferencia = (edad2 - edad)
        console.log('El hermano 2 es mayor que el hermano 1');
    }
    return console.log(('La diferencia entre los dos hermanos es: ') + diferencia);
}

console.log(diferenciaEdad());