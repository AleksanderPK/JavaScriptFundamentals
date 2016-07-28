function isInACircle(coordinates) {
    if (coordinates.length === 2 && coordinates.every(x => typeof x === 'string') ) {
        let x = +coordinates[0];
        let y = +coordinates[1];
        let distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)).toFixed(2);
        if (distance <= 2) {
            console.log(`yes ${distance}`);
        }
        else {
            console.log(`no ${distance}`);
        }
    }
}