/**
 * 
 * A useful a ES6 feature allows me to set a default parameter inside a function definition.
 * 
 * What that means is, I'll use an ES6 feature which allows me to set a default parameter 
 * inside a function definition, which goes hand in hand with the defensive coding approach, 
 * while requiring almost no effort to implement.
 * 
 */

// no default parameter
function greet(phrase) {
    return phrase + " Prince"
}

// default parameter
function greet2(phrase = "Hi") {
    return phrase + " Prince"
}

console.log(greet())
console.log(greet2())