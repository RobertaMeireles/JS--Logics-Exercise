/*Read the 12 elements of a Vector A, place them in descending order using
the ordering method by changing positions and presenting the
Vector A showing the ordered elements.*/

const arrayA = [45,2,3,4,5,6,7,8,9,10,11,12];
let arrayB = [];

let selectionSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

arrayB=selectionSort(arrayA);
console.log(arrayB);