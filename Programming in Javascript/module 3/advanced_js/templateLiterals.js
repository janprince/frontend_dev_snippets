/**
 * Template literals are an alternative way of working with strings, which was introduced in the ES6 addition to the JavaScript language.
 * 
 * Alongside the previous ways to build strings, ES6 introduced the use of backtick characters as delimiters:
 * 
 * There are several ways in which a template string is different from a regular string.
 *      * First, it allows for variable interpolation: 
 *      * Besides variable interpolation, template strings can span multiple lines. 
 */

// ES5 Strings
let greet = "Hello"
let place = "World"
console.log(greet + " " + place + " !")

// ---------- ES6 Strings --------------
console.log(`${greet} ${place} !`)   // ES6

const multiLine = `Hello,
World`
console.log(multiLine)




