function bubbleSort(array) {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                array = swapArrayElement(array, j);
            }
        }
    }
    return array;
};


function swapArrayElement(array, index) {
                let temp = array[index];
                array[index] = array[index + 1];
                array[index + 1] = temp;

                return array;
}

let mojaTablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
console.log(bubbleSort(mojaTablica));  
