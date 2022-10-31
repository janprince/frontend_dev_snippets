// recursion -  function that calls itself

var counter = 3;
function example() {
    console.log(counter)
    counter--;

    if (counter == 0) return;
    example();                 // the recursive call
}

example();