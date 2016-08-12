function findMMSA(arr) {
    let max = arr[0],
        min = arr[0],
        sum = 0,
        average = 0,
        i;

    max = +arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = +arr[i];
        }
    };

    min = +arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = +arr[i];
        }
    };

    for (i = 0; i < arr.length; i++) {
        sum += +arr[i];
    };

    average = (sum / arr.length);

    console.log(`min=${min.toFixed(2)}`);
    console.log(`max=${max.toFixed(2)}`);
    console.log(`sum=${sum.toFixed(2)}`);
    console.log(`avg=${average.toFixed(2)}`);

}