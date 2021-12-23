// Ejercicio 11.- Modifica el script anterior de forma que, en vez de leer los datos por teclado,
// los extraiga de dos arrays que contienen los nombres, categorías y horas trabajadas por cada empleado,
// coincidiendo en posición los datos del mismo empleado:
let nombres = ["Juan", "Perico", "Andrea"];
let categorias = ["A2", "A3", "A1"];
let horas = [100, 75, 92];
let precioHora;


const precioCategoria = () => {
    
    switch (categorias) {
        case "A1":
            precioHora = 30;
            break;
        case "A2":
            precioHora = 20;
            break;
        case "A3":
            precioHora = 15
            break;
    }
        return precioHora
}
precioCategoria()

const salario = (categoria, horas) => {
   return precioHora * horas;
}


nombres.forEach((nombres) =>{
    console.log("El empleado/a " + `${nombres}`);
    console.log("Cobrara :");
    console.log(salario())
});

