// there are seven (7) primitive data types in javascript
/**
 * String
 * Number
 * Boolean
 * Null
 * Undefined
 * BigInt
 * Symbol
 */




// Number data type
/** Foundational data type that represents integers and decimal points */


// A string in JavaScript is a collection of characters enclosed by single quotes, double quotes.

// == checks only for value
console.log(100 == "100")


// === checks for both value and data type
console.log(100 === "100")

/**
 * Logical AND operator: && 
 * Logical OR operator: || 
 * Logical NOT operator: ! 
 * The modulus operator: % 
 * The equality operator: ==
 * The strict equality operator: ===
 * The inequality operator: !=
 * The strict inequality operator: !==
 * The addition assignment operator: += 
 * The concatenation assignment operator: += (it's the same as the previous one - more on that later)
 */


 var num1 = 2;
 var num2 = 5;
 var test1 = num1 % 2;
 var test2 = num2 % 2;
 var result1 = test1 == 0;
 var result2 = test2 == 0;
 console.log("Is", num1, "an even number?", result1);
 console.log("Is", num2, "an even number?", result2);
 