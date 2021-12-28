// Programa que pida el número de partidos ganados, perdidos y empatados por un equipo en 
//un torneo de futbol. Debe calcular y mostrar el total de los puntos obtenidos, teniendo en cuenta que por 
//cada partido ganador obtendrá 3 puntos, empatado sería 1 punto y perdido 0 puntos. Debes utilizar una 
//función calculaPuntos que recibe como parámetros el número de partidos ganados, perdidos y empatados 
//y retorna la cantidad de puntos totales obtenidos.

const rl = require('readline-sync');

let ganados = rl.question('Cuantos partidos ha ganado?: ');
let empatados = rl.question('Cuantos partidos ha empatado?: ');
let perdidos = rl.question('Cuantos partidos ha perdido?: ');
parseInt(ganados, 10);
parseInt(empatados, 10);
const calculaPuntos = () =>{
    ganados = ganados * 3;
    let total = ((ganados) + (empatados) + (perdidos)) ;
return total
}

console.log(calculaPuntos());