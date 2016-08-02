function sort(args) {		
	var a = +args[0],
		b = +args[1],
		c = +args[2],
		temp;	
	if (a < b) {
		temp = a;
		a = b;
		b = temp;
	}
	if (a < c) {
		temp = a;
		a = c;
		c = temp;
	}
	if (b < c) {
		temp = b;
		b = c;
		c = temp;
	}
	console.log(a + ' ' + b + ' ' + c);
}
