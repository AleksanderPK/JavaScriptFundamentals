function verifyThirdBit(arr) {
	let digInBase2 = (arr[0] | 0).toString(2);
	
	if (digInBase2.length > 3) {
		var thirdBit = digInBase2[digInBase2.length - 4];
		console.log(digInBase2[digInBase2.length - 4]);
	}
	else {
		console.log('0');
	}
}