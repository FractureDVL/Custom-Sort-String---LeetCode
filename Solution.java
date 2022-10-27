class Solution {
    static public String customSortString(String order, String s) {
        String res = orderString(order,s);
        
        return "";
    }

    static public String orderString(String order, String s) {
        String a = "";
        boolean appears = true;
        String next = "";
        for (int i = 0; i < order.length() && appears; i++) {
            for (int j = 0; j < s.length(); j++) {
                if (order.charAt(i) == s.charAt(j)) {
                    a = order + "";
                }
            }
        }
        return a;
    }

    public static void main(String[] args) {
        System.out.println(customSortString("cba", "abcdf"));
    }
}