//We are given an array of integers and a number S. Write a program to find if there exists a subset of the elements of the array that has a sum S.

function verfySubset() {
    let arr = [2, 1, 7],
        s = 4;
    let leftInd = 0,
        rightInd = 0,
        interval = 1,
        sum = 0,
        i,
        j,
        a, 
        b;

    while (interval <= arr.length) {
        interval = rightInd - leftInd + 1;
        for (a = leftInd, b = rightInd; b < arr.length; a += 1, b += 1) {
            for (i = a, j = b; i <= j; i += 1) {
                sum += arr[i];
            }
            for (i = 0; i < arr.length; i += 1) {
                if (i >= a && i <= b) {
                    continue;
                }
                if (sum + arr[i] === s) {
                    console.log('Yes');
                    return;
                }
            }
            sum = 0;
        }
        rightInd += 1;
    }    
}