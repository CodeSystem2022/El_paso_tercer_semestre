
package teste;

import domain.*;

/**
 *
 * @author Ivan
 */
public class TestAbstracts {
    public static void main(String[] args) {
        FiguraGeometrica figura = new Rectangulo("Rectangulo");
        figura.dibujar();
    }
}
