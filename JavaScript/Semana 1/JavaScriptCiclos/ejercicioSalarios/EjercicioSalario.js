/* Dadas las horas trabajadas de 5 empleados y su salario por hora, calcular el 
salario final de cada empleado y la sumatoria de salarios.*/

console.log('Por favor, complete los siguientes datos para cada empleado: ')
let sumaTotal = 0;
for(let i = 1; i < 6; i++){
    let tarifa = prompt('Salario por hora del empleado '+i+': ')
    let horas = prompt('Horas trabajadas del empleado '+i+': ');
    let salario = tarifa * horas;
    console.log('El salario del empleado '+i+' es de $'+salario);
    sumaTotal += salario;
}

console.log('La sumatoria de salarios a pagar es de $'+sumaTotal);

