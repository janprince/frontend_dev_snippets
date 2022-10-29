// JavaScript has handy built-in objects. One of these popular built-in objects is the Math object.


// Number Constants
console.log(Math.PI)
console.log(Math.E)
console.log(Math.LN2)


// rounding methods
console.log(Math.ceil(3.4))
console.log(Math.floor(6.7))
console.log(Math.round(3.5))
console.log(Math.trunc(1.2))

console.log("==================================")

// arithmetic and calculus
console.log(Math.pow(2, 3))
console.log(Math.sqrt(36))
console.log(Math.abs(-9))
console.log(Math.min(6, 7, -1, 0))

// Trigonometry
// Math.tan() Math.sin(), Math.cos()


console.log("==================================")

// random -  this method allows you to generate a decimal number between 0 and 0.99.
var decimal1 = Math.random();
console.log(decimal1)

// generating a random number.
var decimal = Math.random() * 10;
var rounded = Math.ceil(decimal)
console.log(rounded)