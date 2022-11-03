// recursion -  function that calls itself

var counter = 3;
function example() {
    console.log(counter)
    counter--;

    if (counter == 0) return;
    example();                 // the recursive call
}

example();


console.log("\n\n ===================================== ")
// ===========  fibonacci sequence============================

function fibo(n){
    if(n < 2) {
        return n;                       // base case
    } else {
        return fibo(n-1) + fibo(n-2)
    }
}

// fibonacci sequence - 0 1 1 2 3 5 8 13 21 34
console.log(fibo(5))
console.log(fibo(2))
console.log(fibo(3))