/* EJERCICIO 8.- A un trabajador le pagan según sus horas trabajadas semanalmente y según una tarifa fija 
determinada por hora. Si la cantidad de horas trabajadas semanalmente es mayor a 40 horas, la tarifa por 
hora se incrementa en un 25% (ya que, a partir de las 40 horas se consideran como horas extras). 
 
Diseña  un  programa  que  calcule  el salario  de  trabajadores  de  una  empresa.  Los  datos  de  entrada  para 
calcular el salario serán, el nombre de la persona, las horas trabajadas semanales y la tarifa de una hora.  
 
Como datos de salida, el programa visualizará el nombre y el importe total cobrado durante esa semana. 
El programa calculará salarios de todos los empleados. 
 
Obligatoriamente, debes utilizar una función calculaSalario, que reciba las horas trabajadas 
semanalmente y la tarifa por hora establecida, y devuelva el importe total del salario. Deberás el valor por 
defecto de la tarifa a 10€. */ 
 
let empleados = [ 
   ['Juan', 40, 15], 
   ['Perico', 20, 25], 
   ['Andrés', 45] 
];

/* empleados.forEach(empleado(){
    trabajador = empleados [i][0],
    horas = empleados [i][1],
    precio = empleados [i][2] == undefined ? 10 : empleados [i][2],
    console,log(`${trabajador} + "recibe un salario de : " + ${calculaSalario(horas, precio)} + "€" ` );
}) */

let calculaSalario = (horas, precio) => {
    let salario;
    if (horas > 40){
        salario = (40 * precio) + ((horas - 40) * precio * 1.25);
    }else {
        salario = horas * precio
    }
    return salario
}

for (let i = 0; i< empleados.length; i++) {
  let trabajador = empleados [i][0];
  let horas = empleados [i][1];
  let precio = empleados [i][2] == undefined ? 10 : empleados [i][2];
  console.log(trabajador + `recibe un salario de : ` + calculaSalario(horas, precio) + `€`);
    }

