//While
let contador =0;
while(contador <3){
    console.log(contador);
    contador ++;
}
console.log("Fin del ciclo while");

//do While
let conteo =0;
do{
    console.log(conteo);
    conteo++;
}while(conteo<3); 
console.log("Fin del ciclo do while")

//For
for(let contando =0; contando<3; contando++ ){
    console.log(contando);
}
console.log("Fin del ciclo For");

//Palabra reservada break

for(let contando =0; contando<=10; contando++ ){
    if (contando%2 ==0){
        console.log(contando);
        break;//termina la busqueda al encontrar el primero
    }
}
console.log("Termina el ciclo For al encontrar el primer numero par");

//Palabra continue
for(let contando =0; contando<=10; contando++ ){
    if (contando%2 !==0){
        continue;// permite la siguente iteracion 
    }
    console.log(contando);
}
console.log("Termina el ciclo");

//palabra continue y etiquetas labels
inicio:
for(let contando =0; contando<=10; contando++ ){
    if (contando%2 !==0){
        continue inicio;// permite la siguente iteracion 
    }
    console.log(contando);
}
console.log("Termina el ciclo");