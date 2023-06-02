// OBJETOS

let x = 10; // Variable de tipo primitiva
console.log(x);

console.log('TIPOS PRIMITIVOS');

let persona = {
    nombre: 'Denis',
    apellido: 'Membrive',
    edad: 32,
    email: 'denismembrive3@gmail.com',
    idioma: 'ES',

    get lang(){
        return this.idioma.toUpperCase();
    },

    set lang(Lang){

        this.idioma = this.lang.toUpperCase();
    },

    
    nombreCompleto: function(){      // METODO dentro de un objeto
        return this.nombre + ' ' + this.apellido

    },

    
    get nombreEdad(){         // Este es el metodo get
        return 'El nombre es: '+this.nombre+', Edad: '+this.edad; 
    }

   

    // Si ponemos la coma podemos seguir agregando amas atributos o metodos a este objeto
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.email);
console.log(persona);

console.log(persona.nombreCompleto());


// DIFERENTES FORMAS DE CREAR UN OBJETO

// Forma mas utilizada 

/*let persona = {
    nombre: 'Denis',
    apellido: 'Membrive',
    edad: 30,
    email: 'denismembrive3@gmail.com',
    
    nombreCompleto: function(){      // METODO dentro de un objeto
        return this.nombre + ' ' + this.apellido

    },
    // Si ponemos la coma podemos seguir agregando amas atributos o metodos a este objeto
}
*/

// Otra forma

console.log('EJECUTANDO CON UN OBJETO');
let persona2 = new Object();  // Debe crear un nuevo objeto en memoria

persona2.nombre = 'Juan';
persona2.direccion = 'Sarmiento 1010';
persona2.telefono = '2604670003';

console.log("Telefono: " + persona2.telefono,"Direccion: " + persona2.direccion);


// ACCEDER A LAS PROPIEDADES DE LOS OBJETOS

// Forma mas utilizada 

/*
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.email);
console.log(persona);

console.log(persona.nombreCompleto());
*/


// Otra forma de acceder, no tan utilizada

console.log('CREAMOS UN NUEVO OBJETO');
console.log(persona['apellido']);// accedemos como si fuera un arreglo

//for in (para recorrer este arreglo al cual se ha tomado el objeto)
console.log('USAMOS EL CICLO FOR IN');
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
    console.log(persona[propiedad])
}

//  Agregar y eliminar propiedades de los Objetos
console.log('CAMBIAMOS Y ELIMINAMOS UN ERROR');
persona.apellida = 'Perez';   // Cambiamos dinamicamente un valor del objeto
delete persona.apellida;  //Eliminamos el nuevo atributo que creamos por error

console.log(persona);


// Distintas formas de imprimir un Objeto con: Object.values()  y JSON.stringify(

// Numero 1: la mas sencilla, concatenar cada valor de cada propiedad

console.log('Distintas formas de imprimir un Objeto: FORMA 1');
console.log(persona.nombre+' , '+persona.apellido);

// Numero 2: atraves del ciclo for in
console.log('Distintas formas de imprimir un Objeto: FORMA 2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

// Numero 3: La funcion Object.values()
console.log('Distintas formas de imprimir un Objeto: FORMA 3');
let personaArray = Object.values(persona);
console.log(personaArray);

// Numero 3: Utilizamos el metodo JSON.stringify()

console.log('Distintas formas de imprimir un Objeto: FORMA 4');
let personaString = JSON.stringify(persona);
console.log(personaString);


console.log('Comenzamos a utilizar el metodo get')
console.log(persona.nombreEdad);


console.log('Comenzamos con el metodo get para idiomas');
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



let padre = new Persona3('Camilo', 'Troncoso', 'TroncoCamm@gmail.com');

padre.nombre = 'Valentin'; //modificamos el nombre
padre.telefono = '2604592382'; //Una propiedad
console.log(padre);
console.log(padre.nombreCompleto()); //Utilizamos al función


let madre = new Persona3('Nazarena', 'Ibanez', 'inazarena@gmail.com');
console.log(madre);
console.log(madre.telefono); //la propiedad no está definida
console.log(madre.nombreCompleto());



//Diferentes formas de crear objetos
//Caso número 1
let miObjeto = new Object();//Esta es una opción formal
//Caso número 2
let miObjeto2 = {}; //Esta opción es breve y recomendada

//Caso String 1
let miCaddena1 = new String('Hola Mundo'); //Sintaxis formal
//Caso String 2
let miCaddena2 = 'Hola Mundo'; //Esta es la sintacis simplificada y recomendada

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
let miFuncion1 = new function(){}; 
//Caso function 2
let miFuncion2 = function(){}; //Notación simplificada y recomendada

//Uso de prototype
Persona3.prototype.telefono = '2604567123';
console.log(padre);
console.log(madre.telefono);
madre.telefono = '2604567896';
console.log(madre.telefono);

//Uso de call
let Persona4 = {
    nombre: 'Sofia',
    apellido: 'Gettor',
    nombreCompleto2: function(titulo,telefono){
        return titulo+ ': '+this.nombre+' '+this.apellido+' '+telefono;
        //return this.nombre+' '+this.apellido;
    }
}

let Persona5 = {
    nombre:'Perla',
    apellido: 'Pretel'
}

console.log(Persona4.nombreCompleto2('Ing.', '23456789'));
console.log(Persona4.nombreCompleto2.call(Persona5, 'Lic.', '2604560123'));

//Método Apply

let arreglo = ['Doc.', '2604567803'];
console.log(Persona4.nombreCompleto2.apply(Persona5, arreglo))
