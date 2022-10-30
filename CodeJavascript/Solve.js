
function customSortString(order, s) {
    let res = "";
    for (let i = 0; i < order.length; i++) {
        let str = order.charAt(i);
        if (isIn(s, str)) {
            s = s.replaceAll(str,"");
            res = res + str;
        }
    }
    return res + s;
}
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
// console.log(customSortString("cba","abcd"))
export {customSortString};