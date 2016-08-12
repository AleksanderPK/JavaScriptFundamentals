function printNumbers(n) {
    let m = +n[0],
        line = '',
        i;

    for (i = 1; i <= m; i++) {
        line += `${i} `;
    }

    console.log(line);
}