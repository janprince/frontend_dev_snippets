// Inheritance
//  inheritance also exists in JavaScript.
// Inheritance model revolves around something called the prototype.
//  In JavaScript, the prototype is an object that can hold properties to be shared by multiple other objects.


// prototype
var bird = {
    hasWings : true,
    canFly : true,
    hasFeathers : true,
}


var eagle1 = Object.create(bird)

console.log(eagle1)                     // logs {}

console.log("eagle 1 has wings: ", eagle1.hasWings)
console.log("eagle 1 can fly: ", eagle1.canFly)
console.log("eagle 1 has Feathers", eagle1.hasFeathers)


// I can build as many objects as I want and they will all have the bird objects as their prototype.
var eagle2 = Object.create(bird);
console.log("eagle 2 can fly: ", eagle2.canFly)


// overriding some properties
var penguin = Object.create(bird);
penguin.canFly = false;
console.log("penguin can fly: ", penguin.canFly)