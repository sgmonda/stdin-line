"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stdin_line_1 = require("stdin-line");
function foregone(input) {
    let a = "";
    let b = "";
    for (let ch of input) {
        if (ch == "4") {
            a += "2";
            b += "2";
        }
        else {
            a += ch;
            if (b.length > 0) {
                b += "0";
            }
        }
    }
    if (b.length == 0) {
        b = "0";
    }
    return [a, b];
}
// Await for now can only be used inside of functions labeled async.
async function main() {
    let inputStream = new stdin_line_1.StdinLineStream();
    let [numberOfCases] = await inputStream.getLineAsNumbers();
    for (let i = 1; i < numberOfCases + 1; i++) {
        let n = await inputStream.getLine();
        let [a, b] = foregone(n);
        console.log(`Case #${i}: ${a} ${b}`);
    }
    inputStream.close();
}
main();
