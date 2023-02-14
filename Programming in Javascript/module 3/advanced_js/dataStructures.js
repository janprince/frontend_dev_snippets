// a way to organize data
// objects, arrays, maps and sets

// ----------- Working with Arrays -------------
/**
 * In this reading, the focus is on three specific methods that exist on arrays:
 *      
 *      forEach 
 *      filter
 *      map
 */

// ------------ forEach (allows you to loop over each of their members)-------------
/**
 * the forEach() method accepts a function that will work on each array item. 
 * That function's first parameter is the current array item itself, and the second (optional) parameter is the index.
 */

const fruits = ['kiwi','mango','apple','pear'];

function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);


// alternatively
fruits.forEach((fruit,index) => {
    console.log(`${index}. ${fruit}`)
})

/**
 *  ----------------------- The filter() method ------------------------
 * Another very useful method on the array is the filter() method. 
 * It filters your arrays based on a specific test. Those array items that pass the test are returned.
 */

const nums = [0, 10, 20, 30, 40, 50]

const numsFilter = nums.filter(function(num){
    return num > 20;
})

console.log(numsFilter) // [ 30, 40, 50 ]

/**
 * ------------------ The map method --------------------
 * Finally, there's a very useful map method. 
 * 
 * This method is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter. 
 */

const items = [0,10,20,30,40,50].map( function(num) {
    return num / 10
})
console.log(items)

// The difference bet forEach and map
// The map() method returns a new array, whereas the forEach() method does not return a new array.
// The map() method is used to transform the elements of an array, whereas the forEach() method is used to loop through the elements of an array.