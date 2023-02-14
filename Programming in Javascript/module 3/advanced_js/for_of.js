/**
 * 
 * In this reading, you'll learn how the for of loop works conceptually. 
 * 
 * To begin, it's important to know that a for of loop cannot work on an object directly, 
 * since an object is not iterable.
 */

// but arrays are iterable
let colors = ["red", 'orange', 'green', 'yellow']

for (var color of colors ){
    console.log(color)
}

// Luckily, you can use the fact that a for of loop can be run on arrays to loop over objects.
/**
 * 
 * Luckily, you can use the fact that a for of loop can be run on arrays to loop over objects.
 * 
 * But how?
 * 
 * Before you can properly answer this question, you first need to review three built-in methods: 
 * 
 * Object.keys(), Object.values(), and Object.entries().
 */

const car2 = {
    speed: 200,
    color: "red"
}

console.log(Object.keys(car2)); // ['speed','color']
// the returned value is an array of strings, where each string is a property key of the properties contained in my car2 object.

console.log(Object.values(car2)); // [300, 'yellow']



// object.entries() returns an array listing both the keys and the values.
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));   // [[propertyKey, propertyVal], [propertyKey, propertyVal]]



var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}