function findRoots(args) {

	let a = +args[0],
		b = +args[1],
		c = +args[2],
		d,
		x1,
		x2;

	d = b * b - 4 * a * c;

	if (d > 0) {
		x1 = ((-b - Math.sqrt(d)) / (2 * a)).toFixed(2);
		x2 = ((-b + Math.sqrt(d)) / (2 * a)).toFixed(2);
		console.log(`x1=${x1}; x2=${x2}`);
	}
	else if(d === 0) {
		x1 = -b / (2 * a).toFixed(2);
		console.log(`x1=x2=${x1}`);
	}
	else {
		console.log('no real roots');
	}
}