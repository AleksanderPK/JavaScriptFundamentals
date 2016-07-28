function verifyThirdDigit(arr) {    
    if ((arr[0] + '').length < 3) {
        console.log('false: 0');
    }
    else {
        let thirdDigit = (arr[0] + '')[(arr[0].length + '') - 3];
        console.log(thirdDigit === 7 ? true : false + `: ${thirdDigit}`);
    }
}