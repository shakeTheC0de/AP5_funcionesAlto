//  Ejercicio 5.- Escribe un método que devuelva el mayor de dos números
const numeros = [1,2,3,4,5,6,7,8,9,10];

const numMayor = numeros.filter((i , j) =>{
    if (i > j){
        console.log("El numero " + i + "es mayor que " + j);
    }else{console.log("El numero " + j + "es mayor que " +i);}
});

console.log(numMayor);