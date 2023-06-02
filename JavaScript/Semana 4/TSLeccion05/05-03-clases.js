//let Persona3 = new Persona('Carla', 'Ponce')
// no se puede acceder a persona antes deberia inicializar...no permite el hosting (NO HACER)
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;

    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get apellido(){
        return this._apellido;

    }
    set apellido(apellido){
        this._apellido=apellido;
    }
}

class Empleado extends Persona{
    
    constructor(nombre,apellido,departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;

    }
    set departamento(departamento){
        this._departamento=departamento;
    }
}

let persona1 = new Persona('Martin', 'Perez');
//console.log(Persona1); 
console.log(persona1._nombre)
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);
persona1.apellido = 'Tapia';
console.log(persona1.apellido);
let persona2 = new Persona('Carlos', 'Lara');
//console.log(Persona2);
console.log(persona2._nombre)
persona2.nombre= 'Maria Laura'
console.log(persona2._nombre)
persona2.apellido = 'Galazzi';
console.log(persona2.apellido);

let empleado1 = new Empleado('Maria','Gimenez','Sistemas')
console.log(empleado1)
console.log(empleado1.nombre)
