// Programa que permita obtener una combinacion de loteria primitiva. Para generar numeros 
// de forma aleatoria puedes utilizar el metodo random del objeto Math. Cada numero debe generarse 
// mediante la llamada a la funcion dameNumero()

let dameNumero = () => {
    return Math.floor(Math.random() * ( 49 - 1 ) + 1);
}
console.log(dameNumero());
console.log(dameNumero());
console.log(dameNumero());
console.log(dameNumero());
console.log(dameNumero());
console.log(dameNumero());