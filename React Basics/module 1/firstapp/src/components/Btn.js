// function Btn() {
//     const clickhandler = () => console.log("Button clicked")
//     return (
//         <button onClick={clickhandler}>Click me</button>
//     )
// }


// export default Btn;

// function Btn() {
//     const clickhandler = () => console.log("Mouse Over")
//     return (
//         <button onMouseOver={clickhandler}>Click me</button>
//     )
// }


// export default Btn;

function Btn() {
    const clickHandler = () => alert(prompt("Enter a number"))
    return (
        <button onClick={clickHandler}>Input a Number</button>
    )
}

export default Btn;