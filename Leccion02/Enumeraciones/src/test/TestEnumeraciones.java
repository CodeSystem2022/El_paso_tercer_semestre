
package test;

import enumeraciones.Continentes;
import enumeraciones.Dias;


public class TestEnumeraciones {
    public static void main(String[] args) {
        //System.out.println("Dia 1: "+Dias.LUNES);
        //indicarDiaSemana(Dias.MARTES);//LAS ENUMERACIONES SE TRATAN COMO CADENAS
        //AHORA NO SE DEBEN UTILIZAR COMILLAS, SE ACCEDE A TRAVES DEL OPERADOR DE PUNTO
        
        System.out.println("Continente no. 4: "+Continentes.AMERICA);
        System.out.println("Numero de paises en el 4to Continente: "
                +Continentes.AMERICA.getPaises());
        System.out.println("Numero de habitantes en el 4to Continente: "
                +Continentes.AMERICA.getHabitantes());
        
        System.out.println("Continente no. 1: "+Continentes.AFRICA);
        System.out.println("Numero de paises en el 1er Continente: "
                +Continentes.AFRICA.getPaises());
        System.out.println("Numero de habitantes en el 1er Continente: "
                +Continentes.AFRICA.getHabitantes());
        
        System.out.println("Continente no. 2: "+Continentes.EUROPA);
        System.out.println("Numero de paises en el 2do Continente: "
                +Continentes.EUROPA.getPaises());
        System.out.println("Numero de habitantes en el 2do Continente: "
                +Continentes.EUROPA.getHabitantes());
        
        System.out.println("Continente no. 3: "+Continentes.ASIA);
        System.out.println("Numero de paises en el 3er Continente: "
                +Continentes.ASIA.getPaises());
        System.out.println("Numero de habitantes en el 3er Continente: "
                +Continentes.ASIA.getHabitantes());
        
        System.out.println("Continente no. 5: "+Continentes.OCEANIA);
        System.out.println("Numero de paises en el 5to Continente: "
                +Continentes.OCEANIA.getPaises());
        System.out.println("Numero de habitantes en el 5to Continente: "
                +Continentes.OCEANIA.getHabitantes());
        
        
    }
    
    private static void indicarDiaSemana(Dias dias){
        switch(dias){
            case LUNES:
                System.out.println("Primer dia de la semana");
                break;
            case MARTES:
                System.out.println("Segundo dia de la semana");
                break;
            case MIERCOLES:
                System.out.println("Tercer dia de la semana");
                break;
            case JUEVES:
                System.out.println("Cuarto dia de la semana");
                break;
            case VIERNES:
                System.out.println("Quinto dia de la semana");
                break;
            case SABADO:
                System.out.println("Sexto dia de la semana");
                break;
            case DOMINGO:
                System.out.println("Septimo dia de la semana");
                break;
            
        }
    }
}
