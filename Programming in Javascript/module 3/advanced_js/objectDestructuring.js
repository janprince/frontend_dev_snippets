// Remember the Math is an object
// In JavaScript, it's possible to extract the properties from objects into distinct variables using destructuring.


let {PI} = Math        // Math = {PI:314..., ....}

console.log(PI)
console.log(PI === Math.PI)


// note: props in react

let props = {names: "Prince", sum: 34, add: function(){console.log("Hello World")}}

// destructuring the props object

let {names} = props
console.log(names) // instead of console.log(props.names)