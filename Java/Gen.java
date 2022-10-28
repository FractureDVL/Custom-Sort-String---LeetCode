package Java;

import java.io.FileWriter;
import java.io.IOException;

// Main class
public class Gen {
    // Generate 100 cases with order and s
    public String genData() {
        String res = "";
        int cases = 100;
        int orLength = (int) genRandomNum(1, 25);
        int sLength = (int) genRandomNum(1, 200);

        for (int i = 0; i < cases; i++) {
            res = res + genString(orLength, true) + " " + genString(sLength, true) + '\n';
            orLength = (int) genRandomNum(1, 25);
            sLength = (int) genRandomNum(1, 200);
        }

        return res;
    }

    // Generate a random number between in range x,y
    public double genRandomNum(int min, int max) {
        double a = Math.random() * (max - min + 1) + min;
        return a;
    }

    //Search if the number(character) is in the String
    public boolean isIn(char s, String res){
        boolean is = false;
        for (int j = 0; j < res.length(); j++) {
            if (s == res.charAt(j)) {
                is = true;
            }
        }
        return is;
    }

    // Generate a String with size (n)
    // Receive true or false to generate a string with duplicate characters
    public String genString(int size, boolean duplicates) {
        String res = "";

        if (duplicates) {
            char lett = (char) genRandomNum(97, 122);
            res = res + lett;
            
            for (int i = 1; i < size; i++) {
                lett = (char) genRandomNum(97, 122);

                while (isIn(lett,res) && res.length()<= 25) {
                    lett = (char) genRandomNum(97, 122);
                }
                res = res + lett;
            }

        } else {
            for (int i = 0; i < size; i++) {
                char lett = (char) genRandomNum(97, 122);
                res = res + lett;
            }
        }
        return res;
    }

    //Generate a txt in the selected path with all the test cases
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
