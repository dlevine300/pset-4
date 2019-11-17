const ReadlineSync=require('readline-sync');
let Pi = ReadlineSync.question('\nPositive integer: ');
let Min= Number.MIN_SAFE_INTEGER;
let Max= Number.MAX_SAFE_INTEGER;

do {
  Pi = ReadlineSync.question('Positive integer: ');
} while (Pi<0);
const Pi_s =Pi.split('');
const Pi_r =Pi_s.reverse('');
console.log('\n' + Pi_r)
