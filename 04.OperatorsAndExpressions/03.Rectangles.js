function calculatePerimeterAndArea(arr) { 
    if (arr instanceof Array && arr.length === 2 && arr.every(x => !isNaN(x))) {
        let width = +arr[0];
        let height = +arr[1];
        let perimeter = 2 * (width + height);
        let area = width * height;
        console.log(perimeter.toFixed(2) + ' ' + area.toFixed(2));
    }
    else {
        console.log('incorect input');
    }
}