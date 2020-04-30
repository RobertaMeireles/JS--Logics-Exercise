/*
Read the elements of two Vectors, A with 20 elements and B with 30
elements.

ITEM 1: Construct a vector C, which will contain the junction of the
Vectors A and B, this being the size of 50.

ITEM 2: Present the elements of Vector C in descending order using the method of
ordering of the Maximum Successives
*/


const arrayA = [3,5,1,2,3,7,4,12,22,10,78,90,13,14,15,16,78,45,98,10];
const arrayB = [39,5,11,2,33,7,40,12,22,24,39,5,11,2,33,7,40,12,22,24,39,5,11,2,33,7,40,12,22,24];
let arrayC = [];


let bubbleSortDecrescente = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] < inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};




const criarNovoArray = (array1,array2) =>{
    let novoArray = [];
    
    for (x=0; x<array1.length;x++){
        novoArray.push(arrayA[x]);
    }
    
    for (x=0; x<array2.length;x++){
        novoArray.push(arrayB[x]);
    }
    return novoArray;
}

arrayC = criarNovoArray(arrayA,arrayB);



bubbleSortDecrescente(arrayC)


console.log("ArrayA:")
console.log(arrayA);
console.log("ArrayB:")
console.log(arrayB);
console.log("ArrayC:")
console.log(arrayC);