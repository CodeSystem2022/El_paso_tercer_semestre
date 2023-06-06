
package excepciones;

//public class OperacionException extends RuntimeException {   // Se extiende de Exception para que el compiladopr me valide esta exception con la clase padre
public class OperacionException extends RuntimeException {  
 
    // Constructor
    public OperacionException(String mensaje){
        super(mensaje);  // Propagamos el mensaje hacia la clase padre con super
    }
    
    
}
