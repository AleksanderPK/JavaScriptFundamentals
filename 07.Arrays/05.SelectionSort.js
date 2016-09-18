function sortArray(arr) {
	let i,
		j,
		ind,
		changeValues = false;

	for (i = 0; i < arr.length; i += 1) {
		min = +arr[i];
		for (j = i + 1; j < arr.length; j += 1) {

			if (+arr[j] < +min) {
				min = arr[j];
				ind = j;
				changeValues = true;
			}
		}
		if (changeValues) {
			arr.splice(ind, 1);
			arr.splice(i, 0, min);
			changeValues = false;
		}		
	}
	console.log(arr);
}