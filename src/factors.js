const readlineSync = require("readline-sync");

const MIN = 1;
const MAX = Number.MAX_SAFE_INTEGER;

let number;

console.log();

do {
    number = Number(readlineSync.question("Positive Integer: "));
} while (Number.isNaN(number) || number % 1 !== 0 || number < MIN || number > MAX);

let factors = "";
let factorsLimit = number;
let smallFactor;
let bigFactor;

for (let i = 1; i <= number; i++) {
    if (number % i === 0 && number / i === i) {
        bigFactor = i;
        factors = factors + bigFactor + ", ";
    }
    else if (number % i === 0 && i < factorsLimit) {
        smallFactor = i;
        bigFactor = number / i;
        factorsLimit = bigFactor;
        factors = factors + smallFactor + ", " + bigFactor + ", ";
    }
    else if (i >= factorsLimit) {
        let lastComma = " " + String(bigFactor) + ", ";
        factors = factors.replace(lastComma, " " + String(bigFactor) + ".");
        break;
    }
}

console.log("\n" + factors);
