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
        // String letter = g.genData();
        // g.createDoc(letter);
        System.out.println(g.delDuplicates("aaaabbccc"));


    }
}