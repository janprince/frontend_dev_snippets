var train1 = ["wheat", "barley", "potato", "salt", "rocks"]
console.log(train1[0])

var train2 = [...train1, "squash"]
console.log(train2)



// a function, array and a color
function listArrayItems(arr) {
    for (var i = 0; i<colors.length; i++) {
        console.log((i+1), arr[i])
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors)


/**
 * In JavaScript, arrays are objects. That means that arrays also have some built-in properties and methods.
 * One of the most commonly used built-in methods on arrays are the push() and the pop() methods.
 */

 var dog = {
    color: "brown",
    height: 30,
    length: 60
};
dog["type"] = "corgi";

console.log(dog)


// ======================== forEach =========================================

var colors2 = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
colors2.forEach((e) => console.log(e))
