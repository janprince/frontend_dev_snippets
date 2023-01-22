// basic function
// DRY

// =================================================================================

function myFunc() {
    console.log("Hello world")
}

myFunc();
var result = myFunc();
console.log(result)  // undefined


// =================================================================================

function sum(a, b) {
    return a + b;
}

console.log(sum(2, 3)); // 5
console.log(sum(5, 3)); // 8


// ================================== Function returns an object ===============================================
// function that returns an object
function objectMaker(val){
    return {
        prop: val
    }
}

var obj = objectMaker(5)
console.log(obj.prop)


// ==================================== Anonymous(Nameless) function =============================================
var name = "Prince"

var greet = function (personName) {
    return "Hi " + personName;
}

console.log(greet("Gyan"))

// ==================================== Arrow function =============================================
var divide = (a, b) => {
    return a/b;
}

console.log(divide(5, 2))  // 2.5