j = 1
var fizzArray = [];
for (i=1; i < 101; i ++) {
	if (i%15 == 0) {
		j = "fizz buzz";
	}
	else if (i%3 == 0) {
		j = "fizz";
	}
	else if (i%5 == 0) {
		j = "buzz";
	}
	else {
		j = i;
	}
	fizzArray.push(j);
}
for (k=0; k<fizzArray.length; k++) {
document.write(fizzArray[k] + '<br />');
}