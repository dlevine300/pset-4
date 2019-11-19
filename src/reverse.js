const ReadlineSync = require('readline-sync');
let Pi = ReadlineSync.question('\nPositive integer: ');
let Min = 1;
let Max = Number.MAX_SAFE_INTEGER;
let Reversed = ("");
let Integer = 0

do {
 Pi = ReadlineSync.question('Positive integer: ');
} while (Pi < Min);
var Reverse_number = 0;
var Num_value = Pi;
while (Num_value != 0) {
 Reverse_number = parseInt(Reverse_number * 10);
 Reverse_number = parseInt(Reverse_number + (Num_value % 10));
 Num_value = parseInt(Num_value / 10);
}
do {
 Integer = Pi % 10;
 Reversed = Reversed + Integer + ", ";
 Pi = Pi - Integer
 Pi = Pi / 10;

} while (Pi > 10);

Reversed = Reversed + Pi + (".");
console.log('\n' + Reversed);
