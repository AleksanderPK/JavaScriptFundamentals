function verifyPoint(args) {

    let x = +args[0],
        y = +args[1],
        distance = Math.sqrt(Math.pow(x - 1, 2) + Math.pow(y - 1, 2)),
        result = '';

    if (distance <= 1.5) {
        result += 'inside circle ';
    }
    else {
        result += 'outcide circle ';
    }

    if (x >= -1 && x <= 5 && y >= -1 && y <= 1) {
        result += 'inside rectangle';
    }
    else {
        result += 'outside rectangle';
    }
    console.log(result);
}