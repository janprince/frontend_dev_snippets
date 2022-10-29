function letterFinder(word, match) {
    var condition1 = typeof(word) == "string" && word.length > 2;
    var condition2 = typeof(match) == "string" && match.length == 1;

    if (condition1 && condition2) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] == match) {
                console.log("found the " + match + " at " + i);
            } else {
                console.log("---No match found at " + i);
            }
        }
    } else {
        console.log("Please pass correct arguments to the function");
    }
}


console.log("====================== dog ====================")
letterFinder("dog", 'o')
console.log("====================== cook ====================")
letterFinder("cook", 'o')
console.log("====================== it ====================")
letterFinder("it", 'i')


letterFinder("prince", 'ce')
letterFinder(3, 4)