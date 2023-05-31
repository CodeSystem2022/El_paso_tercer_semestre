/*Realizar un algoritmo que según las  calificaciones de 10 alumnos,
calcule la calificación promedio y la calificación mas baja del grupo.
*/
//Declaración de variables
let calificaciones = [];
let calificacion = 0;
let promedio = 0;

//Ciclo para pedir las calificaciones

for (let i = 0; i < 10; i++) {
    calificacion = parseInt(prompt("Ingrese la calificación del alumno " + (i + 1)));
    if (calificacion >= 0 && calificacion <= 10) {
        calificaciones.push(calificacion);
    } else {
        alert("La calificación debe estar entre 0 y 10");
        i--;
    }
}

//Ciclo para calcular el promedio
for (let i = 0; i < calificaciones.length; i++) {
    promedio += calificaciones[i];

}

promedio = promedio / calificaciones.length;

//Mostrar el promedio y la calificación más baja
console.log("El promedio de las calificaciones es: " + promedio+" La calificación más baja es: " + Math.min(...calificaciones));



