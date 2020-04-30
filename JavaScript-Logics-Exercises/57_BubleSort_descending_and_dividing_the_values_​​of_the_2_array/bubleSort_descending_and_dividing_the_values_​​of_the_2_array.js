/*Read the 15 elements of a Vector A. Build a Vector B of the same type.
Each element of B should be half of each element of A.
elements of Vector A in descending order and elements of Vector B by
ascending order, using an ordering method of your choice.  */

//variaveis
const arrayA = [3,5,11,2,33,7,40,12,22,24,39,5,11,2,33]
let arrayB = [];


const criararray = (array) =>{
    let newArray = [];

    for(i=0;i<array.length;i++){
        newArray[i]=(array[i]/2);
    }
    return newArray;
}


arrayB = criararray(arrayA);
console.log("arrayB criado se baseado em arraA:")
console.log(arrayB);
//console.log(arrayB); 

//////////////////////////////////////////////////////////////////////////

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


bubbleSort(arrayB);
console.log("arrayB em ordem crescente:")
console.log(arrayB);
