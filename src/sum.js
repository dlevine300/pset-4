const readlineSync=require('readline-sync');
let lb = readlineSync.question('\nLower bound: ');
let ub = readlineSync.question('Upper bound: ');

do {
  lb = readlineSync.question('Lower bound: ');
  ub = readlineSync.question('Upper bound: ');
} while (lb > ub);
let MIN= Number.MIN_SAFE_INTEGER;
let MAX= Number.MAX_SAFE_INTEGER;

const value = (lb + ub)/2;
value % 2 ===0
let sum = 0;
for (let i = lb; i<= ub; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log('\n' + sum + '.');
