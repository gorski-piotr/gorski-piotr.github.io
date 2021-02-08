function reverseString(myString) {
    console.log("My string: " + myString);

    let splitted = myString.split("");
    console.log("Splitted string: " + splitted);

    let reversedArray = splitted.reverse();
    console.log("Reversed array: " + reversedArray);

    let finalReversedString = reversedArray.join("");
    console.log("Final reversed string: " + finalReversedString);
}

reverseString("Akademia108");


