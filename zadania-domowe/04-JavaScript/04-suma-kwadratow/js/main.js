let myArray = [0, 1, 2, 3, 4, 5];

function squareSum(myArray) {
    let result = 0;
    for (i=0; i < myArray.length; i++) {
        result = result +  Math.pow(myArray[i], 2);
    }

    return result;
}

console.log(squareSum(myArray));
