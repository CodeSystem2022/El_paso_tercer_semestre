package test;

import accesodatos.*;

// Aqui debemos crear una variable de tipo Interface. Recordemos que nuestra interface para este ejemplo es IAccesoDatos

public class TestInterfaces {
    public static void main(String[] args) {
        
        // Como una interface NO PUEDE SER INSTANCIADA, instanciamos a la clase que implementa su comportamiento.
        // En este caso, la clase ImplementacionMySql.
        
        IAccesoDatos datos = new ImplementacionMySql();
        datos.listar();
        
        imprimir(datos);
        
        datos = new ImplementacionOracle();
        datos.listar();
        
        imprimir(datos);
        
    }
    
    // Creamos un metodo que recibe un argumento de nuestro tipo Interface. 
    
    public static void imprimir(IAccesoDatos datos){
        datos.listar();
    }
}
