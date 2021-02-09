//Sposob 1:
/* function sortLetters(myString) {
    let splitted = myString.split("");
    let sortedArray = splitted.sort();
    return sortedArray.join("");
}

console.log(sortLetters("Akademia108")); */

//Sposob 2:
/* function sortLetters (myString) {
    return myString.split("").sort().join("");
}

console.log(sortLetters("Akademia108")); */

//Sposob 3:
const sortLetters = function(myString) {
    return myString.split("").sort().join("");
}

console.log(sortLetters("Akademia108"));