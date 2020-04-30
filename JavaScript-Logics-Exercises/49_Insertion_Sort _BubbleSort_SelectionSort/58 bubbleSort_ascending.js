/* Read the 12 elements of a Vector A, place them in descending order using
the ordering method by switching positions and presenting the
Vector A showing the ordered elements.  */

const arrayA = [45,2,3,4,5,6,7,8,9,10,11,12];
let arrayB = [];

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) { 
                let tmp = inputArr[j]; 
                inputArr[j] = inputArr[j + 1]; 
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

arrayB=bubbleSort(arrayA);
console.log(arrayB);