//Programa  que  muestre  la  suma  de  los  números  pares  comprendidos  entre  dos  valores 
//numéricos positivos introducidos en un array. Debes utilizar una función calculaSuma que reciba el array 
//de valores que acotan el rango y devuelva el resultado de la suma esperado. 

const numeros = [5, 9, 4, 6, 3, 8];


for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
        if([i] % 2 ==0 && [j] % 2 == 0){    
            console.log([i] + [j]);
            }
        
    }
    }

