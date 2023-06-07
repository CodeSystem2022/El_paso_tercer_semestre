
package test;

import static aritmetica.Aritmetica.division;  // Importamos solo el metodo division de la Aritmetica
import excepciones.OperacionException;


public class TestExcepciones {
    public static void main(String[] args) {
        /*
        //Código Escrito por Ivan Ramírez
            int resultado = 0;
        try{
            resultado = 10/0;
        } catch(Exception e){
            System.out.println("Ocurrió un Error");
            e.printStackTrace(System.out); //Se conoce como la pila de excepciones
        }
        System.out.println("La variable de resultado tiene como valor: "+resultado);
        
        */
        int resultado = 0;
        try{             // Utilizamos el metodo de la clase Aritmetica
            resultado  = division(10, 0);    // ArithmeticException, que hereda de RunExeption
        }catch(OperacionException e){
            System.out.println("Ocurrio un error de tipo OperacionException");
            System.out.println(e.getMessage());              // Los catch van por jerarquia, de menor a mayor
        }catch(Exception e){
            System.out.println("Ocurrio un Error");
            e.printStackTrace(System.out);    // Pila de exepciones: Si tenemos una expcion que origina otra excepcion
            System.out.println(e.getMessage()); // Imprime directamente desde esta clase
        }
        finally{
            System.out.println("Se reviso la division entre cero");  //hayan o no excepciones el finally siempre se va a ejecutar
        }
        System.out.println("La variable resultado tiene como valor: "+resultado);
        
    }
    
    
    
}
