const readlineSync = require('readline-sync');
const MIN = 1;
const MAX = 78;

let value = 0;

let value1 = 0;
let value2 = 1;
let value3 = 1;

console.log();

while (value<1 || value > 78)  {
  value = readlineSync.question('Positive Integer: ');
  number = parseInt(value);
  if (number > 0 && number <= 78) {
    for (i = 2; i <= number; i++) {
      value3 = value1 + value2;
      value1 = value2;
      value2 = value3;
    }
  }
}
value3 = value3.toLocaleString();
console.log('\n' + value3 + '.');
