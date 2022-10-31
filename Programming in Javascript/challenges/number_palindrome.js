/**
 *  Given an integer x, return true if x is a palindrome, and false otherwise.
 */

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    var srtArray = x.toString().split(""); // coverts string to an array
    var reverseArray = srtArray.reverse();  // reverses array
    var reverseString = reverseArray.join(""); // converts and array to string

    if (reverseString == x) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome(1221))
console.log(isPalindrome(123))
console.log(isPalindrome(-121))
console.log(isPalindrome(101))