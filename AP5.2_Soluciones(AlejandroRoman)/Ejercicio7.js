/* Realiza un programa que, a partir de precios iniciales de productos en un array, calcule sus 
precios finales teniendo en cuenta que: 
 
array de productos [10,55,43.99,12.50] 
Se debe aplicar un descuento que puede variar según el array [0,10,5,15] 
Se debe aplicar un tipo de IVA (21%) que es siempre el mismo. 
El  programa  debe  visualizar  el  precio  del  producto  final  (aplicado  el  descuento  y  el  IVA)  debiendo 
calcularse  este  dato  mediante  la  utilización  de  una  función  que  recibe  como  parámetros  los  arrays  de 
precio y descuento, y devuelve un array con los precios finales.  */


let precioFinal = () => {
    let productos = [10,55,43.99,12.50];
    let descuentos = [0,10,5,15];
    for (let i = 0; i < productos.length; i++) {
        for (let j = 0; j < descuentos.length; j++) {
            let precio = [i]
            let descuento = [j];
            let total = (precio - descuento) * 1.21;
            console.log(total);
            }
        }

}

console.log(precioFinal());