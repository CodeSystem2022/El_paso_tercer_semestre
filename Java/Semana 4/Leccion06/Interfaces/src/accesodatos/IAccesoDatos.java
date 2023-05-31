package accesodatos;

// Una interface NO TIENE CONSTRUCTORES. Los atributos deben ser asignados y declarados ya que SON CONSTANTES.
// Su particularidad es que define COMPORTAMIENTOS (metodos).

public interface IAccesoDatos {
    
    // Los atributos declarados son public, final y static. Deben ser asignados al declararse.
    
    int MAX_REGISTRO = 10;
    
    // Metodo insertar es abstracto y sin cuerpo
    
    void insertar();        // C reate 
        
    void listar();          // R ead
    
    void actualizar();      // U pdate
    
    void eliminar();        // D elete
    
    
    
    
}
