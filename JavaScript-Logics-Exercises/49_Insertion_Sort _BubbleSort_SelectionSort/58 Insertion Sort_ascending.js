/*Ler os 12 elementos de um Vector A, colocá-los por ordem decrescente usando 
o método de ordenação por troca de posição e apresentar o 
Vector A mostrando os elementos ordenados.  */



const arrayA = [45,2,3,4,5,6,7,8,9,10,11,12];
let arrayB = [];

let insertionSort = (inputArr) => {
    let length = inputArr.length;
    for (let i = 1; i < length; i++) {
        let key = inputArr[i]; 
        let j = i - 1; 
        while (j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j = j - 1; 
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};

arrayB=insertionSort(arrayA);
console.log(arrayB);
