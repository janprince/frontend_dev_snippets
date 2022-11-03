/**
 *  
 * A higher-order function is a function that has either one or both of the following characteristics:
 *  It accepts other functions as arguments
 *  It returns functions when invoked
 */


function two() {
    return 2;
}

function one() {
    return 1;
}

function calculate(initialValue, incrementValue) {
    return initialValue() + incrementValue() + incrementValue();
}

console.log(calculate(two, one));     // 4