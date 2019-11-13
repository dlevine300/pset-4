const ReadlineSync=require('readline-sync');

let Lb = ReadlineSync.question('\nLower bound: ');
let Ub = ReadlineSync.question('Upper bound: ');
let Min= Number.MIN_SAFE_INTEGER;
let Max= Number.MAX_SAFE_INTEGER;

const Value = (Value>1 && Value<100);
Value % 2 ===0
let Sum = 0;
for (let I = 1; I<= 100; I++) {
  if (I % 2 === 0) {
    Sum += I;
  }
}

console.log(Sum);
