package Java;
import java.io.IOException;
import java.util.Scanner;
/**
 * Main
 */
public class Main {
    public static void main(String[] args) throws IOException {
        Scanner sc  = new Scanner(System.in);
        
        Gen g = new Gen();
        g.createDoc(g.genData());

    }
}