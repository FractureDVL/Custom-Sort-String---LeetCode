
//leetcode solution
//Problem: https://leetcode.com/problems/custom-sort-string/

function customSortString(order, s) {
    let res = "";
    for (let i = 0; i < order.length; i++) {
        let str = order.charAt(i);
        if (isIn(s, str)) {
            let m = howMany(s,str);
            while (m > 0) {
                res = res + str;
                m--;     
            }
            s = s.replaceAll(str,"");
            res = res + str;
        }
    }
    return res + s;
}

//Return a boolean value if str in s
function isIn(s, str) {
    let is = false;
    for (let i = 0; i < s.length; i++) {
        let p = s.charAt(i);
        if (p == str) {
            is = true;
        }
    }
    return is;
}

//Return how many is str in s
function howMany(s,str) {
    let is = 0;
    for (let i = 0; i < s.length; i++) {
        let p = s.charAt(i);
        if (p == str) {
            is++;
        }
    }
    return is;
}
console.log(customSortString("ozdxluebam","wyefucxjsznitalm"));
export {customSortString};