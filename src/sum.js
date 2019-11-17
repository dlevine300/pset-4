const ReadlineSync=require('readline-sync');
let Lb = ReadlineSync.question('\nLower bound: ');
let Ub = ReadlineSync.question('Upper bound: ');

do {
  Lb = ReadlineSync.question('Lower bound: ');
  Ub = ReadlineSync.question('Upper bound: ');
} while (Lb > Ub);
let Min= Number.MIN_SAFE_INTEGER;
let Max= Number.MAX_SAFE_INTEGER;

const Value = (Lb + Ub)/2;
Value % 2 ===0
let Sum = 0;
for (let I = Lb; I<= Ub; I++) {
  if (I % 2 === 0) {
    Sum += I;
  }
}

console.log('\n' + Sum + '.');
