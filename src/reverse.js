const readlineSync = require('readline-sync');
let pi = readlineSync.question('\nPositive integer: ');
let MIN = 1;
let MAX = Number.MAX_SAFE_INTEGER;
let reversed = ("");
let integer = 0

do {
 pi = readlineSync.question('Positive integer: ');
} while (pi < MIN);
var reverseNumber = 0;
var numValue = pi;
while (numValue != 0) {
 reverseNumber = parseInt(reverseNumber * 10);
 reverseNumber = parseInt(reverseNumber + (numValue % 10));
 numValue = parseInt(numValue / 10);
}
do {
 integer = pi % 10;
 reversed = reversed + integer + ", ";
 pi = pi - integer
 pi = pi / 10;

} while (pi > 10);

reversed = reversed + pi + (".");
console.log('\n' + reversed);
