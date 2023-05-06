
package domain;

public class Persona {
    private final int idPersona;
    private static int contadorPersonas;
    
    static{ //Bloque de inicializacion estatico
        System.out.println("Ejecucion del bloque estatico");
        ++Persona.contadorPersonas;
        
        
    }
    { //Bloque de inicializacion NO estatico (contexto dinamico)
        System.out.println("Ejecucion del bloque NO estatico");
        this.idPersona = Persona.contadorPersonas++; //Incrementamos el atributo
        
    }
    
    //Los bloques de inicializacion se ejecutan antes del constructor
    public Persona(){
        System.out.println("Ejecucion del Constructor");
    }
    
    public int getIdPersona(){
        return this.idPersona;
    }

    @Override
    public String toString() {
        return "Persona{" + "idPersona=" + idPersona + '}';
    }
    
}
