const ReadlineSync=require('readline-sync');
let Min= Number.MIN_SAFE_INTEGER;
let Max= Number.MAX_SAFE_INTEGER;
let Pi = ReadlineSync.question('\nPositive integer: ');

function getStringFromUserAndThenReverseIt()
{
	var Pi_r = prompt("Enter the string which you want to reverse: ");
	var s = new Array();
	var count = 0;
	var reverseCount = e.length-1;
	while(count<e.length && reverseCount>=0)
	{
		s.push(e[reverseCount]);
		document.write(s[count]);
		reverseCount--;
		count++;
	}
}
getStringFromUserAndThenReverseIt();
 
