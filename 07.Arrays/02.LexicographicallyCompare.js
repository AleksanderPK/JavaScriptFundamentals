function compare(arr) {

    if (arr[0].length === arr[1].length) {
        for (var i = 0; i < arr[0].length; i++) {
            if (arr[0][i] > arr[1][i]) {
                console.log('>');
            }
            else if (arr[0][i] < arr[1][i]) {
                console.log('<');
            }
        }
        console.log('=');
        return;
    }

    else if (arr[0].length >= arr[1].length) {
        console.log('>')
    }

    else if (arr[0].length <= arr[1].length) {
        console.log('<')
    }
}