package ar.com.system2023.mundopc;

public class Monitor {
    private final int idMonitor;
    private String marca;
    private double tamanio;
    private static int contadorMonitores;

    private Monitor(){
        this.idMonitor= ++Monitor.contadorMonitores;

    }

    public Monitor(String marca, double tamanio){
        this();//llamado al constructor vacío
        this.marca= marca;
        this.tamanio = tamanio;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public double gettamanio() {
        return tamanio;
    }

    public void settamanio(double tamanio) {
        this.tamanio = tamanio;
    }

    //Ingresamos manualmente el getIdMonitor
    public int getIdMonitor(){
        return this.idMonitor;
    }

    @Override
    public String toString() {
        return "Monitor{" +
                "idMonitor=" + idMonitor +
                ", marca='" + marca + '\'' +
                ", tamanio=" + tamanio +
                '}';
    }
}
