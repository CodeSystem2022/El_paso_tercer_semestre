
package test;
import domain.*;

/**
 *
 * @author Ivan
 */
public class TestConversionObjetos {
    public static void main(String[] args) {
        Empleado empleado;
        empleado = new Escritor("Juan", 5000, TipoEscritura.CLASICO);
         //System.out.println("empleado = " + empleado);
         System.out.println(empleado.obtenerDetalles());//Si queremos acceder a métodos Escritor
         
        //Downcasting
        //Se convierte un tipo padre a clase hija
        //escritor.getTipoEscritura(); No se puede hacer
        //Tenemos 2 ipciones
        ((Escritor)empleado).getTipoEscritura();
        Escritor escritor =(Escritor)empleado;//Esta es la segunda pcion
        
        
        //Upcasting
        //Se convierte un tipo hija a clase padre
        Empleado empleado2= escritor;
        System.out.println(empleado2.obtenerDetalles());
    }
}
