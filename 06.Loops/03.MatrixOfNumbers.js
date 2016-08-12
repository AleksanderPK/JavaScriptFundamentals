function printMatrix(arr) {
	var i, j,
		line = '',
		count = +arr[0];

	for (i = 1; i <= count; i++) {
		for (j = i; j < i + count; j++) {
			line += `${j} `;
		}
		console.log(line);
		line = '';
	}
}