// Scope is all about code accessibility.

/**
 * the code that exists outside of a function is referred to as global scope, and 
 * all the code inside of a function is known as local scope or function scope. 
 * 
 * If a variable is defined within a function, then you can say it's scoped to that function. 
 * This is also known as local scope
 */

// Scoping with var, let and const
/**
 *  Local scope states that a variable is only accessible in the function where it is declared. 
 *  In the ES5 version of JavaScript, only functions can build local scope. 
 * 
 *  The ES6 version of JavaScript introduced a new variety of scope known as the block scope. 
 *  Block scope states that a variable declared in a block of code is only accessible inside that block (if, for, while blocks). 
 *  All the other code outside of the code block cannot access it. 
 * 
 *  Block scope is built when you declare variables using let or const. 
 *  In other words when you build variables with let or const, they become immediately scoped to the code block they were created in. The scope of these variables is contained within curly braces.
 *  
 * With ES6, the suggested way to declare variables is to use the let or const keywords.
 * 
 *  let is block scoped.
 *  A block is a chunk of code bounded by {}. A block lives in curly braces.
 */



// ======================= let ==========================
// the let variable can't be redeclared within its scope but can be reassigned; 
// 

// ====================== const ============================
// the const can't be reassigned nor redeclared within its scope.


function meal(animal) {
    animal.food = animal.food + 10;
}

var dog = {
    food: 10
};
meal(dog);
meal(dog);

console.log(dog.food);    // 30
