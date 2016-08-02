function digitAsWord(args) {    
    var words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    console.log(!!words[args[0]] ? words[args[0]] : 'not a digit');
}