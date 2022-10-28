package Java;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

// Main class
public class Gen {

    public String genData() {
        String res = "";

        int cases = 100;
        int orLength = (int) genRandomNum(1, 26);
        int sLength = (int) genRandomNum(1, 200);

        for (int i = 0; i < cases; i++) {
            res = res + genString(orLength) + " " + genString(sLength) + '\n';
            orLength = (int) genRandomNum(1, 26);
            sLength = (int) genRandomNum(1, 200);
        }

        return res;
    }

    public double genRandomNum(int min, int max) {
        double a = Math.random() * (max - min + 1) + min;
        return a;
    }

    public String delDuplicates(String str) {
        String res = "";

        for (int i = 0; i < str.length(); i++) {
            boolean found = true;
            char k = str.charAt(i);
            
            for (int j = i; j < str.length() && found; j++) {
                char p = str.charAt(j);

                if (k == p) {
                    res += p;
                    found = false;
                }
            }
        }
        return res;
    }

    public String genString(int size) {
        String res = "";

        for (int i = 0; i < size; i++) {
            char lett = (char) genRandomNum(97, 122);
            res = res + lett;
        }
        System.out.print(res);
        return res;
    }

    public void createDoc(String str) {
        String text = str;
        try {
            String fileName = "Java/Data/data.txt";
            FileWriter fWriter = new FileWriter(fileName);
            fWriter.write(text);
            fWriter.close();
            System.out.println("Test data has been generated! :)");

        } catch (IOException e) {
            System.out.print(e.getMessage());
        }
    }
}
