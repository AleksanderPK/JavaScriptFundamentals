function convertDigitToWord(args) {
	let units = +args[0][args[0].length - 1],
		tenths = +args[0][args[0].length - 2],
		hundredths = +args[0][args[0].length - 3],
		digitAsWord = '';
		
	if (!!hundredths) {
		switch (hundredths) {
			default: 'error'; break;
			case 1: digitAsWord = digitAsWord + 'One hundred'; break;
			case 2: digitAsWord = digitAsWord + 'two hundred'; break;
			case 3: digitAsWord = digitAsWord + 'three hundred'; break;
			case 4: digitAsWord = digitAsWord + 'four hundred'; break;
			case 5: digitAsWord = digitAsWord + 'five hundred'; break;
			case 6: digitAsWord = digitAsWord + 'six hundred'; break;
			case 7: digitAsWord = digitAsWord + 'seven hundred'; break;
			case 8: digitAsWord = digitAsWord + 'eight hundred'; break;
			case 9: digitAsWord = digitAsWord + 'nine hundred'; break;				
		}
		if (tenths || units) {
			digitAsWord = digitAsWord + ' and ';
		}
	}

	if (!!tenths) {
		if (tenths === 1) {
			tenths = +(tenths.toString() + units.toString());
			switch (tenths) {
				default: 'error'; break;
				case 10: digitAsWord = digitAsWord + 'ten'; break;
				case 11: digitAsWord = digitAsWord + 'eleven'; break;
				case 12: digitAsWord = digitAsWord + 'twelve'; break;
				case 13: digitAsWord = digitAsWord + 'thirteen'; break;
				case 14: digitAsWord = digitAsWord + 'fourteen'; break;
				case 15: digitAsWord = digitAsWord + 'fifteen'; break;
				case 16: digitAsWord = digitAsWord + 'sixteen'; break;
				case 17: digitAsWord = digitAsWord + 'seventeen'; break;
				case 18: digitAsWord = digitAsWord + 'eighteen'; break;
				case 19: digitAsWord = digitAsWord + 'nineteen'; break;
			}
			console.log(digitAsWord);
			return;
		}
		else {
			switch (tenths) {
				default:
				case 2: digitAsWord = digitAsWord + 'twenty'; break;
				case 3: digitAsWord = digitAsWord + 'thirty'; break;
				case 4: digitAsWord = digitAsWord + 'forty'; break;
				case 5: digitAsWord = digitAsWord + 'fifty'; break;
				case 6: digitAsWord = digitAsWord + 'sixty'; break;
				case 7: digitAsWord = digitAsWord + 'seventy'; break;
				case 8: digitAsWord = digitAsWord + 'eighty'; break;
				case 9: digitAsWord = digitAsWord + 'ninety'; break;
			}
			if (units) {
				digitAsWord = digitAsWord + ' ';
			}
		}
	}

	if (units === 0 && !hundredths && !tenths) {
		console.log('zero');
		return;
	}

	if (units) {
		switch (units) {
			default: digitAsWord = digitAsWord + 'error'; break;
			case 1: digitAsWord = digitAsWord + 'one'; break;
			case 2: digitAsWord = digitAsWord + 'two'; break;
			case 3: digitAsWord = digitAsWord + 'three'; break;
			case 4: digitAsWord = digitAsWord + 'four'; break;
			case 5: digitAsWord = digitAsWord + 'five'; break;
			case 6: digitAsWord = digitAsWord + 'six'; break;
			case 7: digitAsWord = digitAsWord + 'seven'; break;
			case 8: digitAsWord = digitAsWord + 'eight'; break;
			case 9: digitAsWord = digitAsWord + 'nine'; break;
		}
	}
	
    console.log(digitAsWord);
}