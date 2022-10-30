package CodeJava;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

import CodeJava.Gen;
import CodeJava.Solve;

public class Main {
    public static void main(String[] args) throws FileNotFoundException{
        Solve sl = new Solve();
        Gen g = new Gen();
        g.createDoc(g.genData());
        
        File file = new File("CodeJava/Data/data.txt");
        Scanner sc = new Scanner(file);
        while (sc.hasNext()) {
            String order = sc.next();
            String s = sc.next();
            System.out.println("ANSWER:");
            System.out.println(sl.customSortString(order, s));
        }
    }
}