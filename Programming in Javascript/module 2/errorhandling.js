// common types of erro
/**
 * Syntax Error
 * Type Error
 * Reference Error
 */

// error handling 
try {
    console.log(a + b);
} catch(err) {
    // console.log(err)
    console.log("There was an error");
}

console.log("My program does not stop.")

console.log("\n\n ==============================\n\n")

// throwing an error
// throw new ReferenceError();


function addTwoNums(a, b) {
    try {
        if (typeof(a) != "number"){
            throw new ReferenceError("the first argument is not a number");
        } else if (typeof(b) != "number"){
            throw new ReferenceError("the second argument is not a number");
        } else {
            console.log(a + b)
        }
    } catch(e) {
        console.log("Error!", e)
    }
}

addTwoNums(4, 5)
addTwoNums(2, '3')