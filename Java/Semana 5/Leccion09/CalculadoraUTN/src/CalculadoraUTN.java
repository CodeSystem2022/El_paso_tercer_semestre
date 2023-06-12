import java.util.Scanner;
public class CalculadoraUTN {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        while (true) { // Ciclo infinito. Solo terminar al aplicar un break.
            System.out.println("****** Aplicacion Calculadora *******");
            // Mostramos el menú:
            System.out.println(
                    "1. Suma\n" +
                            "2. Resta\n" +
                            "3. Multiplicacion\n" +
                            "4. Division\n" +
                            "5. Salir");
            System.out.print("Operacion a realizar?");
            var operacion = Integer.parseInt(entrada.nextLine());
            try {
                if (operacion >= 1 && operacion <= 4) {
                    System.out.print("Digite el valor del operando 1: ");
                    var operando1 = Integer.parseInt(entrada.nextLine());
                    System.out.print("Digite el valor del operando 2: ");
                    var operando2 = Integer.parseInt(entrada.nextLine());
                    int resultado;
                    switch (operacion) {
                        case 1 -> { // Suma
                            resultado = operando1 + operando2;
                            System.out.println("Resultado de la suma: " + resultado);
                        }
                        case 2 -> { // Resta
                            resultado = operando1 - operando2;
                            System.out.println("Resultado de la resta: " + resultado);
                        }
                        case 3 -> { // Multiplicacion
                            resultado = operando1 * operando2;
                            System.out.println("Resultado de la multiplicacion: " + resultado);
                        }
                        case 4 -> { // Division
                            resultado = operando1 / operando2;
                            System.out.println("Resultado de la division: " + resultado);
                        }
                        default -> System.out.println("Opcion erronea.");
                    } // Fin switch
                } // Fin if
                else if (operacion == 5) {
                    System.out.println("Y recuerden amigos... INVESTIGUEN!");
                    break; // Rompe el ciclo y sale
                } else {
                    System.out.println("Operacion erronea! " + operacion);
                }
                System.out.println();
            }catch(Exception e){    // Fin del try, comienzo del catch
                System.out.println("Ocurrio un error: "+e.getMessage());
            }
        }// Fin while
    } // Fin main
} // Fin clase
