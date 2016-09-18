function findNumber() {

    let arr = ['1', '13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3', , '1', , '1'],
        i,
        key,
        elmByCount = [],
        maxElm = 0,
        maxCount = 0;

    for (i = 0; i < arr.length; i += 1) {
        key = elmByCount[arr[i]];
        if (!key) {
            key = 1;
        }        
        else {
            key += 1;
        }
    }
    for (i of elmByCount) {
        if (i > maxCount) {
            maxCount = i;
        }
    }

    maxElm = elmByCount.findIndex(function (a) { return a === maxCount });
    console.log(`${maxElm} (${maxCount} times)`);
}