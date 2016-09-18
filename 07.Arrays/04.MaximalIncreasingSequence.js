function findMaxIncrSequence() {

    let arr = ['8', '9', '10', '11', '7', '3', '2', '3', '4', '2', '2', '4'],
        i,
        count = 1,
        maxCount = 1;

    for (i = 1; i < arr.length; i += 1) {
        if (+arr[i - 1] === +arr[i] - 1) {
            count += 1;
        }
        else {
            count = 1;
            continue;
        }
        if (count > maxCount) {
            maxCount = count;
        }
    }
    console.log(maxCount);
}