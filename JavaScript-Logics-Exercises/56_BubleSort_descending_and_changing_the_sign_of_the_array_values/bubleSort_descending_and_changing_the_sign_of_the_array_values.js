/*Ler os 20 elementos de um Vector A, os quais deverão ser valores negativos. 

ITEM 1 Construír um Vector B, com o mesmo tipo e dimensão. Cada elemento do Vector B 
deve ser o valor positivo do elemento correspondente  do Vector A. Assim sendo, 
se em A[1] estiver armazenado o elemento -3, em B[1] deve ser colocado 3, e 
assim sucessivamente. 

ITEM 2 Apresentar os elementos do Vector B por ordem decrescente, 
usando um método de ordenação à sua escolha.  */


const arrayA = [3,5,11,2,33,7,40,12,22,24,39,5,11,2,33,7,40,12,22,24]
let arrayB = [];


const criararray = (array) =>{
    let newArray = [];

    for(i=0;i<array.length;i++){
        newArray[i]=(array[i]*-1);
    }
    return newArray;
}


arrayB = criararray(arrayA);


//////////////////////////////////////////////////////////////////////////

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

insertionSort(arrayB); 
console.log(arrayB);
