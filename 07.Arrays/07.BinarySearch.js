function findIndex() {
    var args = ['10', '1', '2', '4', '8', '16', '31', '31', '32', '64', '77', '99', '3'],
        digit = +args[args.length - 1],
        low = 1,
        high = args.length - 2,
        mid = +((high + low) / 2).toFixed(0);

    while (low <= high) {
        if (digit > +args[mid]) {
            low = mid + 1;
            mid = +((high + low) / 2).toFixed(0);
        }
        else if (digit < +args[mid]) {
            high = mid - 1;
            mid = +((high + low) / 2).toFixed(0);
        }
        else {
            console.log(mid - 1);
        }
        if(low > high) {
            console.log(-1);
        }
    }
}