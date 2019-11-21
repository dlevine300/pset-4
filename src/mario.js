const ReadlineSync = require('readline-sync');
const Max= 24;
const Min= 1;
let Height=ReadlineSync.question('\nHeight: ');
while (Height>24||Height<1) {
  Height=ReadlineSync.question('Height: ');
}
for(var Tags = 0; Tags < 7; Tags++) {
  console.log(Tags+="#")
      for(var Spaces=0; Spaces<7; Spaces++){
        console.log(Spaces+=" ")
        for(var Lines=0; Lines<7; Lines++){
          console.log(Lines+="\n")
        }
      }
}

/*if (Height==1){
  console.log('      ##');
}
if (Height==2) {
  console.log('\n      ##\n     ###');
}
if (Height==3) {
  console.log('\n      ##\n     ###\n    ####');
}
if (Height==4) {
  console.log('\n      ##\n     ###\n    ####\n   #####');
}
if (Height==5) {
  console.log('\n      ##\n     ###\n    ####\n    #####\n  ######');
}
if (Height==6) {
  console.log('\n      ##\n     ###\n    ####\n    #####\n  ######\n #######');
}
if (Height==7) {
    console.log('\n      ##\n     ###\n    ####\n   #####\n  ######\n #######\n########');
}*/
