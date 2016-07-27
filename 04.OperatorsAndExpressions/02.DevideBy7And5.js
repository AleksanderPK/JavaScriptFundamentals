function devideBy5And7(arr) {

	if (arr instanceof Array && arr.every(x => !isNaN(x) && typeof x === 'number')) {

		arr.forEach(function (x) {
			if (!(x % 5) && !(x % 7)) {
				console.log(`${x} TRUE number`);
			}
			else {
				console.log(`${x} FALSE number`);
			}
		})
	}
	else {
		return 'array is INcorrect';
	}
}