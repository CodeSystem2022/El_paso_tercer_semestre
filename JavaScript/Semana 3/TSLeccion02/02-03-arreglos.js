// Creacion de Arrays o arreglos

// Sintaxis vieja para declarar un objeto
//let autos = new Array('Ferrari', 'Renault', 'BMW');

// NUEVA SINTAXIS

const autos = ['Ferrari', 'Renault', 'BMW'];
console.log(autos);

//Recorremos los elementos de un arreglo

// Parte manual (Mostramos de a uno)
console.log(autos[0]); //Accedemos al indice cero, es decir al primer elemento
console.log(autos[2]);

// Si queremos recorrer usamos ciclo for (mostramos todos los elementios del arreglo)

for(let i = 0; i < autos.length; i++){
    console.log(i + ' : '+autos[i]);
}

//Modificamos los elementos del arrglo

autos [1] = 'Volvo';
console.log(autos)

// Agregamos nuevos valores al arreglo
//Forma 1 y mas usada
autos.push('Audi');  // Esto haceque el nuevo elemento se agregue al final
console.log(autos);

// Otras formas de agregar elementos al arreglo
//Segunda forma
autos[autos.length] = 'Porche';
console.log(autos);

//Tercera forma(hay que tener cuidado al trabajar de esta forma,saber cuantos elementos hay para indicar en el indice)
autos[5] = 'Renault';
console.log(autos)

// Como preguntar si lo que tenemos delante es un array

// Primera forma
console.log(Array.isArray(autos)); // Devuelve un resultado booleano

// Segunda forma

console.log( autos instanceof Array); // Preguntamos si la variable es una instancia de la clase Array