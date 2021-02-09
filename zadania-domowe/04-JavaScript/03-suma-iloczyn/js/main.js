// rozwiazanie przy uzyciu petli for
let myArray = [1, 2, 3, 4, 5, 6];

function countSumAndProduct(myArray) {
    let sum = 0;
    for (i = 0; i < myArray.length; i++) {
        sum = sum + myArray[i];
    }
    console.log("Sum = " + sum);

    let product = 1;
    for (i = 0; i < myArray.length; i++) {
        product = product * myArray[i];
    }
    console.log("Product = " + product);
}

countSumAndProduct(myArray);



//rozwiazanie przy uzyciu petli foreach
let myArray2 = [1, 2, 3, 4, 5, 6];

function countForEach(myArray2) {
    let sum2 = 0;
    myArray2.forEach( function(element) {
        sum2 = sum2 + element;
    });
    console.log("Suma wynosi: " + sum2)
    
    let product2 = 1;
    myArray2.forEach( function(elementTablicy) {
        product2 = product2 * elementTablicy;
    })
    console.log("Iloczyn wynosi: " + product2);


}

countForEach(myArray2);