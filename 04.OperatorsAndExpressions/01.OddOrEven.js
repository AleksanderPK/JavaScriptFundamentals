
function isOdd(num) {
	
	isNaN(num) || (num === '') ? console.log('Incorect input') : !!(num % 2) ? console.log(`${num} is Odd`) : console.log(`${num} is Even`);
    
}
