
package aritmetica;

import excepciones.OperacionException;


public class Aritmetica {
    
    public static int division(int numerador, int denominador){
            //throws OperacionException{   // Con esto decimos cual es la posible excepcion que puede arrojar este metodo
        if(denominador == 0){
            throw new OperacionException("Division entre cero");  // Reportamos la excepcion en caso de que el denominador sea cero
        }
        return numerador / denominador;
      
        
    }
}
