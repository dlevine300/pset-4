const readlineSync = require('readline-sync');
const MAX = 24;
const MIN = 1;
let height = readlineSync.question('\nHeight: ');

while (height < 1 || height > 24) {
  height = readlineSync.question("Height: ");

  height = parseInt(height);

  if (height > 0 && height <= 24) {
    for (i = 1; i <= height; i++) {
      var spaces = height - i;
      var hashes = i + 1;

      var space = ('');
      var hashtag = ('');

      for (j = 1; j <= spaces; j++) {
        space += ' ';
      }
      for (j = 1; j <= hashes; j++) {
        hashtag += '#';
    console.log(space + hashtag);
        }
      }
    }
    const readlineSync = require('readline-sync');
    const MAX = 24;
    const MIN = 1;
    let height = readlineSync.question('\nHeight: ');
    while (height > 24 || height < 1) {
      height = readlineSync.question('Height: ');
    }
    for (var count = 2; count < 9; count++) {
      let string = (new Array(count + 1).join('#'));
      for (var space = 1; space > 0; space--) {
        string = string + (new Array(space + 1).join(' '));
        console.log(string);
      }
    }
