/**
 * The spread operator is another of the many great new editions that came to the JavaScript language in its ES6 update. 
 * It is the shortest and simplest method to copy the properties of an object onto a newly created object. 
 * 
 * Think of the spread operator as a magical multi-purpose tool that can spread out array items and join objects together.
 */

let top3 = [
    "The Colosseum",
    "Trevi Foundation",
    "The Vatican City",
]

function showItinerary(place1, place2, place3){
    console.log("Visit ", place1)
    console.log("Then visit ", place2)
    console.log("Then Finally visit ", place3)
}

showItinerary(top3[0], top3[1], top3[2])
// using the spread operator
showItinerary(...top3) // ... spreads the array; The spread operator allows you to pass all array elements into a function without having to type them all individually.



// copying arrays (an application)

let nums = [3, 4, 5, 6]
let nums_copy = [nums[0], nums[1], nums[2], nums[3], 239]


// using spread operator
let numsCopy = [...nums, 239]

console.log(numsCopy)
console.log(nums_copy)



// Using the spread operator, it's easy to concatenate arrays:
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array



// It's also easy to join objects:  
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}



// use the spread operator to easily add one or more members to an existing array with push():
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);




// Convert a string to an array using the spread operator
// Given a string, it's easy to spread it out into separate array items:
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']