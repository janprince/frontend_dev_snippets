/**
 * A map can feel very similar to an object in JS.
 * However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.
*/

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
console.log(bestBoxers.get(1))  // The Champion


/**
 * A set is a collection of unique values. 
 * 
 * The Set constructor can, for example, accept an array.
 */

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);