//Programa que pida el número de partidos ganados, perdidos y empatados por un equipo en 
//un torneo de futbol. Debe calcular y mostrar el total de los puntos obtenidos, teniendo en cuenta que por 
//cada partido ganador obtendrá 3 puntos, empatado sería 1 punto y perdido 0 puntos. Debes utilizar una 
//función calculaPuntos que recibe como parámetros el número de partidos ganados, perdidos y empatados 
//y retorna la cantidad de puntos totales obtenidos.
const rl = require('readline-sync');


const tipoCaracter = () => {
    
let caracter = rl.question('Introduzca un caracter del teclado: ');
parseInt(caracter, 10);
let ascii = caracter.charCodeAt(0);

    if (caracter = (ascii > 64 && ascii <91)){
        
        if (caracter = (ascii > 47 && ascii < 58)) {
            
            if (caracter = (ascii = 46)) {
                stop;
        }}
    }else{}
}
console.log(tipoCaracter()); 