/*1 Read the 12 elements of a Vector A. After reading, place your
elements in ascending order using the Bubbles method.

2 After reading a vector B also with 12 elements, sort the elements of B by
ascending order also using the Bubbles method.

3 Build a Vector C, where each element of C is the
sum of the corresponding elements of A and B. Place in decreasing order the
elements of Vector C, using the Bubbles method again and presenting their values.
*/


const arrayA = [3,5,1,2,3,7,4,12,22,10,78,90];
const arrayB = [39,5,11,2,33,7,40,12,22,10,78,90];
let arrayC = [];
let lengthArray;
let auxiliar;


let bubbleSortCrescente = (inputArr) => {
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


bubbleSortCrescente(arrayA) 

bubbleSortCrescente(arrayB) 


const criarNovoArray = (array1,array2) =>{
    let novoArray = [];
    
    for (x=0; x<array1.length;x++){
        novoArray.push(arrayA[x]);
    }
    
    for (x=0; x<array2.length;x++){
        novoArray.push(arrayB[x]);
    }

    /*
    if( (array1.length>array2.length) || (array1.length==array2.length) ){
        lengthArray=array1.length;
    }else{
        lengthArray=array2.length;
    }

    for(i=0;i<lengthArray; i++){
        auxiliar=array1[i];
        novoArray.push(auxiliar);
        auxiliar=array2[i];
        novoArray.push(auxiliar);
    }*/

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