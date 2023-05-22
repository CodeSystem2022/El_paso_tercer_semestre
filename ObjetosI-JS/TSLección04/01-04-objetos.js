let x = 10; //variable de tipo primitiva
console.log(x.length);
console.log('Tipos primitivos');
//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase(); //Convierte las minúsculas en mayúsculas
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){//método o función e JS
        return this.nombre+' '+this.apellido;
    },
    get nombreEdad(){
        return 'El nombre es: '+this.nombre+' edad: '+this.edad;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');
let persona2 = new Object(); //Debe crear un nuevo objeto de memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '2604589878';
console.log(persona2.telefono);
console.log('Creamos un objeto');
console.log(persona['apellido']); //Accedemos como si fuera un arreglo
console.log('Usamos el ciclo for in');

//for in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
console.log('cambiamos y eliminamos un error');
persona.apellido = 'Betancud'; //Cambiamos dinamicamente un valor del objeto
delete persona.apellido; //Eliminamos el error
console.log(persona);
// Distintas dormas de imprimir un objeto
//Número 1: la más sencilla: concatenar cada valor de cada propiedad
console.log('Distintas dormas de imprimir un objeto: forma 1');
console.log(persona.nombre+', '+persona.apellido);

//Número 2: A través del ciclo for in
console.log('Distintas dormas de imprimir un objeto: forma 2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Número 3: LA función Object.value()
console.log('Distintas dormas de imprimir un objeto: forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

//Número 4: Utilizamos el método JSON.stringify
console.log('Distintas dormas de imprimir un objeto: forma 4');
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log('Comenzamos a utilizar el método get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el método get y set para idiomas');
persona.lang = 'en';
console.log(persona.lang);

function Persona3(nombre, apellido, email){ //Constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}
let padre = new Persona3('Leo', 'Lopez', 'lopez1@gmail.com');
padre.nombre = 'Luis'; //modificamos el nombre
padre.telefono = '01152897852'; //Una propiedad
console.log(padre);
console.log(padre.nombreCompleto()); //Utilizamos al función
let madre = new Persona3('Laura', 'Contrera', 'contreral@gmail.com');
console.log(madre);
console.log(madre.telefono); //la propiedad no está definida
console.log(madre.nombreCompleto());

//Diferentes formas de crear objetos
//Caso número 1
let miObjeto = new Object();//Esta es una opción formal
//Caso número 2
let miObjeto2 = {}; //Esta opción es breve y recomendada

//Caso String 1
let miCaddena1 = new String('Hola'); //Sintaxis formal
//Caso String 2
let miCaddena2 = 'Hola'; //Esta es la sintacis simplificada y recomendada

//CAso con números 1
let miNumero = new Number(1); //Es formal no recomendable
//Caso con números 2
let miNumero2 = 1; //Sintaxis recomendada

//Caso boolean 1
let miBoolean1 = new Boolean(false); //Foma1
//Caso boolean 2
let miBoolean2 = false; //Sintaxis recomendada

//Caso Arreglos 1
let miArreglo1 = new Array(); //Formal
//Caso Arreglos 2
let miArreglo2 = []; //Sintaxis recomendada

//Caso fuction 1
let miFuncion1 = new function(){}; //Todo después de new es considerado objeto
//Caso function 2
let miFuncion2 = function(){}; //Notación simplificada y recomendada

//Uso de prototype
Persona3.prototype.telefono = '011254898';
console.log(padre);
console.log(madre.telefono);
madre.telefono = '2615849963';
console.log(madre.telefono);

//Uso de call
let Persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto2: function(titulo,telefono){
        return titulo+ ': '+this.nombre+' '+this.apellido+' '+telefono;
        //return this.nombre+' '+this.apellido;
    }
}

let Persona5 = {
    nombre:'Carlos',
    apellido: 'Lara'
}

console.log(Persona4.nombreCompleto2('Lic.', '1142558975'));
console.log(Persona4.nombreCompleto2.call(Persona5, 'Ing.', '2615897545'));

//Método Apply
let arreglo = ['Ing.', '2615789854'];
console.log(Persona4.nombreCompleto2.apply(Persona5, arreglo))
