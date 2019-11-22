const readlineSync = require("readline-sync");
const MAX = Number.MAX_SAFE_INTEGER
const MIN = 0;

let value = readlineSync.question("\nNon-Negative integer: ");
let isPrime = value;

while (value <= 0) {
  value = readlineSync.question("Non-Negative integer: ");

  for (var i = 2; i < value; i++) {
    if (value % i == 0) {
      isPrime = false;
    } else
      isPrime = true;
  }
}
if (isPrime) {
  console.log("\nPrime.");
} else {
  console.log("\nNot Prime.");
}
