package ar.com.system2023.mundopc;

public class Monitor {
    private final int idMonitor;
    private String marca;
    private double size;
    private static int contadorMonitores;

    private Monitor(){
        this.idMonitor= ++Monitor.contadorMonitores;

    }

    public Monitor(String marca, double size){
        this();//llamado al constructor vacío
        this.marca= marca;
        this.size = size;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public double getSize() {
        return size;
    }

    public void setSize(double size) {
        this.size = size;
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
                ", size=" + size +
                '}';
    }
}
