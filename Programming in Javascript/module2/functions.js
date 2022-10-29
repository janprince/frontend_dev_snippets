// basic function
// DRY

function myFunc() {
    console.log("Hello world")
}

myFunc();
var result = myFunc();
console.log(result)  // undefined


function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3)); // 5
console.log(sum(5, 3)); // 8