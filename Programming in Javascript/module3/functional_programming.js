// functional programming - constructing programs by applying and composing functions

// Separate data from functions**
// Data exists outside of functions, and functions only work on that data.

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency(amount, rate) {
    return amount * rate;
}

currencyTwo = convertCurrency(currencyOne, exchangeRate)
console.log(currencyTwo)



// Many functions, by default, return the value of undefined.

// function that returns an object
function objectMaker(val){
    return {
        prop: val
    }
}

var obj = objectMaker(5)
console.log(obj.prop)