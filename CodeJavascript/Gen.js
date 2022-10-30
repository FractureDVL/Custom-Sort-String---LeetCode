
import * as fs from 'fs';
import * as readline from 'readline';
import { customSortString } from "./Solve.js";

let fileName = 'Data/data.txt';

//Generate 100 cases order and s
function genData() {
    let res = "";
    let cases = 100;
    let orLength = genRandomNum(1, 25);
    let sLength = genRandomNum(1, 200);

    for (let i = 0; i < cases; i++) {
        res = res + genString(orLength, true) + " " + genString(sLength, true) + '\n';
        orLength = genRandomNum(1, 25);
        sLength = genRandomNum(1, 200);
    }

    return res;
}

//Search if the number(character) is in the String
function isIn(s, res) {
    let is = false;
    for (let j = 0; j < res.length; j++) {
        if (s == res.charAt(j)) {
            is = true;
        }
    }
    return is;
}
// Generate a random number between in range x,y
function genRandomNum(min, max) {
    let a = Math.random() * (max - min + 1) + min;
    return a;
}

// Generate a String with size (n)
// Receive true or false to generate a string with duplicate characters
function genString(size, duplicates) {
    let res = "";
    if (duplicates) {
        let lett = String.fromCharCode(genRandomNum(97, 122));
        res = res + lett;
        for (let i = 1; i < size; i++) {
            lett = String.fromCharCode(genRandomNum(97, 122));

            while (isIn(lett, res) && res.length <= 25) {
                lett = String.fromCharCode(genRandomNum(97, 122));
            }
            res = res + lett;
        }
    } else {
        for (let i = 0; i < size; i++) {
            let lett = String.fromCharCode(genRandomNum(97, 122));
            res = res + lett;
        }
    }
    return res;
}
//Generate a txt with all the cases
function createDoc() {
    fs.writeFileSync(fileName, genData(), 'utf8', (error, text) => {
        if (error) throw error
        else console.log("Los archivos han sido generados :)");
    });
}


//Read the generate cases and test
async function processLineByLine() {
    const fileStream = fs.createReadStream(fileName);
    var res = "";
    let n = 1;
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        res = res + getOrderS(line, n) + '\n';
        n++;
    }
    return res;
}
//Read the data by the cases in txt file generated
function getOrderS(line, n) {
    var splited = line.split(" ");
    console.log("\nCase ".red + n.toString().red + '\n' + "Order = ".yellow + splited[0] + '\n' + "S = ".yellow + splited[1]);
    console.log("Answer: ".yellow + customSortString(splited[0], splited[1]));
    var res = customSortString(splited[0], splited[1]);
    return res;
}

export { createDoc, processLineByLine as solve };