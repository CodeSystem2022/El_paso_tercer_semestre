const prompt = require('prompt-sync')();

cantNum = parseInt(prompt("Ingrese cantidad de numeros: "));
nuemrosPares = 0;
sumaPares = 0;
sumaImpares = 0;

for(i = 0; i < cantNum.length; i++){
  num = parseInt (prompt("Digite un numero: "))
  if (num % 2 == 0){
    sumaPares += num;
    numerosPares++;
  }
  
  else if (num % 2 != 0){
    sumaImpares += num;
  }
  
}

console.log("La suma de numeros pares es: "+sumaPares);
console.log("La cantidad de numeros pares es: "+numerosPares);
console.log("La suma de los numero es impares es: "+sumaImpares)



