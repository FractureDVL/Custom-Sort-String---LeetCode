package Java;

import Java.Main;
import java.io.File;
import java.io.IOException;
import java.util.Scanner;
import Java.Solution;

public class Main {
    public static void main(String[] args) throws IOException {
        Gen g = new Gen();
        g.createDoc(g.genData());

        File file = new File("Java/Data/data.txt");
        Scanner sc  = new Scanner(file);

        Solution solve = new Solution();

        while(sc.hasNext()){
            String order = sc.next();
            String s = sc.next();
            System.out.println("ANSWER:");
            System.out.println(solve.customSortString(order, s));
        }

    }
}