const readlineSync = require("readline-sync");
const MIN = 1;
const MAX = 9999999999999999;

let cardNumber = 0;

console.log()

while (cardNumber<1 || cardNumber>9999999999999999) {
  cardNumber = readlineSync.question('Number: ')
  let number = parseInt(cardNumber);
if( number < 0)
{
  continue;
}
number = number.toString();
let frontTwoDigits = number.substr(0, 2);
let firstDigitOfCard = number.substr(0, 1);
let length = number.length;
if (length == 16) {
  if (firstTwoDigits == 34 || firstTwoDigits ==37) {
    var eSum = 0;
    var oSum = 0;
    for (var i = 0; i<length; i++){
      if ( i % 2 !=0) {
        var num = number.charAt(i) * 2;
        var sum = 0;
        while (num) {
          sum += num % 10;
          num = Math.floor(num / 10);
        }
        eSum += sum;
      }
      else {
        oSum += Number.charAt(i) * 1;

      }
    }
    var final = eSum = oSum
    if (final % 10 == 0) {
      console.log('Invalid.');
    } else {
      console.log('Invalid.');
    }
  }
}
else {
  console.log('\nAMEX.')
}
}
