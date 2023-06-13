
package domain;

public class Persona {
    private final int idPersona;
    private static int contadorPersonas;
    
    static{ //Bloque de inicializacion estatico
        System.out.println("Ejecucion del bloque estático");
        ++Persona.contadorPersonas;
        //idPersona = 10; No es un atributo estatico por esto tenemos un error
    }
    
    {   // Bloque de inicialización No estático(contexto dinamico)
        System.out.println("Ejecución del bloque NO estático");
        this.idPersona = Persona.contadorPersonas++; //Incrementa el atributo
    }
 
    //Los bloques de inicializacion se ejecutan antes del  constructor

    public Persona(){
        System.out.println("Ejecucion del constructor");
    }
    
    public int getIdPersona(){
        return this.idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
    
    

}

