import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;



public class ListadoPersonasApp {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        // Definimos la lista fuera del ciclo while
        List<Persona> personas = new ArrayList<>();
        // Empezamos con el menu
        var salir = false;
        while(!salir){
            mostrarMenu();

            try{
                salir = ejecutarOperacion(entrada, personas);
            }catch (Exception e){ //Fin del try e inicio del catch
                System.out.println("Ocurrio un error: "+e.getMessage());
            }//Fin del catch

            //Salto de linea
            System.out.println();
        }//Fin del ciclo while

    }//Fin del main

    private static void mostrarMenu(){
        //Mostrar opciones
        System.out.print("""
                ********** Listado de Personas **********
                1. Agregar
                2. Listar
                3. Salir
                
                """);
        System.out.print("Digite una de las opciones: ");
    }//Fin metodo mostrarMenu

    private static boolean ejecutarOperacion(Scanner entrada, List<Persona> personas){
        var opcion = Integer.parseInt(entrada.nextLine());
        var salir = false;
        //Revisamos la opcion digita atraves de un switch
        switch (opcion){
            case 1 -> {//Agregar una persona a la lista
                System.out.print("Digite el nombre: ");
                var nombre = entrada.nextLine();
                System.out.print("Digite el Telefono: ");
                var tel = entrada.nextLine();
                System.out.print("Digite el correo: ");
                var email = entrada.nextLine();

                //Creamos el objeto persona
                var persona = new Persona(nombre, tel, email);
                //Agregamos la persona a la lista
                personas.add(persona);
                System.out.println("La lista tiene "+personas.size()+" elementos");
            }//Fin del caso 1
            case 2 -> {//Listar personas
                System.out.println("Listado de Perosnas: ");
                //Mejoras con lambda y el metodo de referencia
                //Con funcion lambda
                //personas.forEach((persona) -> System.out.println(persona));
                //Con metodo de referencia
                personas.forEach(System.out::println);  //Usamos esta sintaxis con doble puntos, el metodo println va a mandar a imprimir todos los objetos de tipo persona que tengamos en nuestra lista

            }//Fin caso 2
            case 3 -> {//Salir del ciclo
                System.out.println("Hasta pronto....");
                salir = true;

            }//Fin caso 3
            default -> System.out.println("Opcion incorrecta: "+opcion);
        }//Fin del switch
        return salir;

    }//Fin del metodo ejecutarOperacion

}//Fin clase ListadoPersonaApp