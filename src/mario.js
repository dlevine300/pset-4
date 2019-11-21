const readlineSync = require('readline-sync');
const MAX= 24;
const MIN= 1;
let height=readlineSync.question('\nHeight: ');
while (height>24||height<1) {
  height=readlineSync.question('Height: ');
}
for (var count = 2; count < 9; count++) {
    let string=(new Array(count + 1).join('#'));
    for(var space =1; space>0; space--) {
      string=string + (new Array(space + 1).join(' '));
      console.log(string);
    }
}
