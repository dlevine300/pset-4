const readlineSync = require('readline-sync');

let value = readlineSync.question("\nPositive Integer: ");
let sum = 0;

while (value <= 0) {
  value = readlineSync.question("Positive Integer: ");
  let num = value;
  while (num > 0) {
    let n = num % 10;
    if (n % 2 != 0) {
      sum = sum + n;
    }
    num = parseInt(num / 10);
  }

}
console.log('\n' + sum + '.');
