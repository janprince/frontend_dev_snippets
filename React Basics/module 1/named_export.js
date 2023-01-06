/**
 * Named exports are a way to export only certain parts of a given JavaScript file.
 * In contrast with default exports, you can export as many items from any JavaScript file as you want.
 * 
 * In other words, there can be only one default export, but as many named exports as you want.
 * 
 */

// function addTwo(a, b) {
//     console.log(a + b);
// }

// function addThree(a, b, c) {
//     console.log(a + b + c);
// }

// If you want to export both the addTwo and the addThree functions as named exports, one way to do it would be the following:
export function addTwo(a, b) {
    console.log(a + b);
}

export function addThree(a, b, c) {
    console.log(a + b + c);
}


// Here's another way you could do it:

function addTwo(a, b) {
    console.log(a + b);
}

function addThree(a, b, c) {
    console.log(a + b + c);
}

export { addTwo, addThree };