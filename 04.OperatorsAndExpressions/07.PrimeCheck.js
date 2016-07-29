function isPrime(args) {
    let digit = +args[0];
    if (digit > 0 && digit < 100) {
        if (digit === 2 || digit === 3) {
            console.log('true');
            return;
        };
        for (var devisor = (Math.sqrt(digit) | 0); devisor < digit; devisor++) {
            if (digit % devisor === 0) {
                console.log('false');
                return;
            }
        }
        console.log('true');
    }
    else {
        console.log('incorect input');
    }
}
