/**
 *      Rest Operator
 * 
 * a spread operator in JavaScript, is used to unpack a box, for example, to unpack an array. 
 * The rest operator, on the other hand, is used to build a smaller box, and pack items into it.
 */

const top7 = [
    "The Colosseum",
    "The Roman Forum",
    "The Vatican",
    "Trevi Fountain",
    "The Pantheon",
    "Piazza Venezia",
    "The Palentine Hill"
]

// With this syntax👇, I extracted the contents of the top7 array, into four variables
const [first, second, third, ...secondVisit] = top7

console.log(second)
console.log(secondVisit)


// can be used in functions
function addTaxToPrices(taxRate, ...itemsBought){
    return itemsBought.map(item => taxRate*item)
}

console.log(addTaxToPrices(1.1, 49, 89, 45, 23))