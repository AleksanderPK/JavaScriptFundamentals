function findMaximalSequnce(arr) {

	let curCount = 1,
		maxCount = 0;

	for (var i = 1; i < arr.length; i++) {
		if (+arr[i -1] === +arr[i]) {
			curCount += 1;
		}
		else {
			curCount = 1;
		}
		if (curCount > maxCount) {
			maxCount = curCount;
		}
	}

	console.log(maxCount);
}