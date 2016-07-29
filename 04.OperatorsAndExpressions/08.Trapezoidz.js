function calculateArea(args) { 
    if (Array.isArray(args) && args.length === 3) {
        let a = +args[0],
            b = +args[1],
            h = +args[2];
        console.log((((a + b) * h) / 2).toFixed(7));
    }
}