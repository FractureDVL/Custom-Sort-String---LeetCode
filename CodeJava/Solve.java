package CodeJava;

public class Solve {
    public String customSortString(String order, String s) {
        String res = "";
        for (int i = 0; i < order.length(); i++) {
            String str = order.charAt(i)+ "";
            while (isIn(s , str)) {
                s = s.replace(str, "");
                res = res + str;
            }
        }
        return res + s;
    }

    public boolean isIn(String s,String str){
        boolean is = false;

        for (int i = 0; i < s.length(); i++) {
            String p = s.charAt(i) + "";
            if ( p.equals(str)) {
                is = true;
            }
        }
        return is;
    }
}