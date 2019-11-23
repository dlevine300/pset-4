const readlineSync = require("readline-sync");

const MIN = 0;
const MAX = Number.MAX_SAFE_INTEGER;

let endOfLoop = false;
let num = null;
let sum = 0;
let totalOfNumbers = 0;

console.log();

while (endOfLoop === false) {
    let value = readlineSync.question("Non-negative Integer: ");
    num = Number(value);

    if (Number.isNaN(num) || value === "" || num > MAX) {
    }
    else if (num < MIN) {
        endOfLoop = true;
    }
    else {
        sum = sum + num;
        totalOfNumbers++;
    }
}

let average = (sum / totalOfNumbers).toLocaleString("en", {minimumFractionDigits:3, maximumFractionDigits:3});
console.log("\n" + average + ".");
