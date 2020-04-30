/*
Read two vectors A and B with 15 elements each. Build two others
C and D vectors of the same type.
Each element of Vector C must be the
sum of the corresponding element of Vector A and each element of Vector D
must be the factorial of the corresponding element of Vector B.

Then build a Vector E, which must contain the difference of the elements of the
Vectors C and D with the sum of the elements of Vectors A and B.
Vector E elements in ascending order, using a sort order method.
your choice.  */

const arrayA = [3,5,11,2,33,7,40,12,22,24,39,5,11,2,33];
const arrayB = [3,5,11,2,33,7,40,12,22,24,39,5,11,2,33];
let arrayC = [];
let arrayD = [];
let arrayE = [];

const criarArraySoma2Arrays = (array1,array2) =>{
    let newArray = [];
    for(i=0;i<array1.length;i++){
        newArray[i]=array1[i]+array2[i];
    }
    return newArray
}

arrayC=criarArraySoma2Arrays(arrayA,arrayB);
console.log("arrayC (Soma dos valores do arrayA e arrayB:")
console.log(arrayC);



const fatorialArray=(array) =>{
    let newArray=[];
    let valorArray;
    for(i=0;i<array.length;i++){
        valorArray = fatorial(array[i]);
        newArray.push(valorArray);
    }

return newArray;
}


const fatorial = (input) =>{
    resposta =1;
    for(let j=input; j>=1; j--){
        resposta=resposta*j;
    }
    
   return resposta;
}


arrayD = (fatorialArray(arrayB));
console.log("arrayD (Fatorial dos valores do arrayB:")
console.log(arrayD); 



const criarArraySub2Arrays = (array1,array2) =>{
    let newArray = [];
    for(i=0;i<array1.length;i++){
        newArray[i]=array1[i]-array2[i];
    }
    return newArray
}

arrayE = criarArraySub2Arrays(arrayD,arrayC); 
console.log("arrayE (diferença dos elementos dos vectores C e D com a soma dos elementos dos Vectores A e B.")
console.log(arrayE)



arrayE=criarArraySoma2Arrays(arrayE,arrayC);
console.log("arrayC (Soma dos valores do arrayA e arrayB:")
console.log(arrayE);


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

console.log(bubbleSort(arrayE));


