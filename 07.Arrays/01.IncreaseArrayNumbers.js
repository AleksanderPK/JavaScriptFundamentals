function increaseByFive(n) {
    
    let arr = [],
        i = 0,
        item;

    for (i = 0; i < +n; i += 1) {
        arr.push(i * 5);
    }

    for (item of arr) {
        console.log(item);
    }
}