function miFuncion(a,b){
    //console.log("Sumamos:" +(a+b));
    return (a+b);
}   
//llamando a la miFuncion
miFuncion(3,6);
let resultado = miFuncion(6,7);
console.log(resultado);

//declaramos una funcion de tipo expresion o anonima

let x= function(a,b){return a+b}; //necesita ; para cerrarla   
resultado=x(5,6);
console.log(resultado);

//funciones de tipo self o invoking

(function(a,b){
    console.log("Ejecutamos la funcion:" +(a+b));
})(9,6);

console.log(typeof miFuncion)
function miFuncionDos(a,b){
    console.log(arguments.length);
}
miFuncionDos(5,7,4,6);
//to string
var miFuncioTexto=miFuncionDos.toString();
console.log(miFuncioTexto)

// funcion flecha 
const sumarFuncionFlecha = (a,b)=> a+b;
resultado=sumarFuncionFlecha(3,7);
console.log(resultado)

let sumar= function(a,b){
    console.log(arguments[0]) //muestra el parametro de a
    console.log(arguments[1]) //muestra el parametro de b
}
resultado = sumar(3,5);
