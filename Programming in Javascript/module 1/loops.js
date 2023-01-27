
// ================================== for loops ==========================================

// this construct contains a counter, a condition and an incrementer.
for (var i = 1; i<=11; i++) {
    console.log(i)
}

console.log("=======================")

// ================================ while loop =============================
var counter = 3;

while(counter > 0) {
    console.log(counter);
    counter--;
}


// ================================ nested loops ===========================
// the more nested loops there are, the slower your code will run;



// ==================== other loop syntax ===================================
/**
 * 
 * JavaScript supports different kinds of loops:

    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    for/of - loops through the values of an iterable object
    while - loops through a block of code while a specified condition is true
    do/while - also loops through a block of code while a specified condition is true
 * 
 */

// ============================= for/in (for the props in an obj) ========================
let obj = {name: "Prince", age: 903, gender: "male", fair: false}

// the for in loop iterates over the props of the object
for (let prop in obj) {
    console.log(obj[prop])
}