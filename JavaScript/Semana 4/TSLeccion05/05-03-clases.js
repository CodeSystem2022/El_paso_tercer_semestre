//let persona3 = new Persona('Carla','Ponce'); esto no se debe hacer: Persona is not defined
//No funciona el hosting, no se puede crear un objeto antes de haber definido una clase que le permite haccer la instancia
class Persona{ //Clase padre
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre+' '+this._apellido;
    }

    //Sobreescribiendo el método de la clase padre (Object)
    toString(){ //Regresa un String
        //Se aplica el polimorfismo que significa  =  multiples formas en tiempo de ejecución
        //El método que se ejecuta depende si es una referencia de tipo padre o hija
        return this.nombreCompleto();
    }

    static saludar(){
        console.log('Saludos desde este método static');
    }
}

class Empleado extends Persona{//Clase hija
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento =  departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto()+', '+this._departamento;
    }
}

let persona1 = new Persona('Martín', 'Perez');
console.log(persona1.nombre);
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);
//console.log(persona1);
//Apellido persona1
console.log(persona1.apellido);
persona1.apellido = 'Jofre';
console.log(persona1.apellido);

//console.log(persona1);
let persona2 = new Persona('Carlos','Lara');
console.log(persona2.nombre);
persona2.nombre = 'María Laura';
console.log(persona2.nombre);
//console.log(persona2);
//Apellido persona2
console.log(persona2.apellido);
persona2.apellido = 'Fernandez';
console.log(persona2.apellido);

let empleado1 = new Empleado('María', 'Gimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

//clase 7

//Object.prototype.toString-- sEsta es la manera de acceder a atributos y métodos de manera dinámica
console.log(empleado1.toString());
console.log(persona1.toString());