//Mostrar números pares utilizando las palabras reservadas Break and Continue

//Palabra reservada "break"
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 == 0){
        console.log(contando); //Muestra todos los pares
        break;
    }
}
console.log("Termina el ciclo al encontrar el primer número par");

// La palabra reservada "continue"
for(let contando = 0; contando <= 10; contando++){
    if(contando % 2 !== 0){
        continue;// Irá a la siguiente iteración
    }
    console.log(contando);
}
console.log("Termina el ciclo");



