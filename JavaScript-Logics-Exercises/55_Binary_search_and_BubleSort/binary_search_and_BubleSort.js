/*
Read the 20 elements of a Vector A and build a Vector B from it
dimension with the same elements of A plus 2.

item 1: Place the elements of Vector B

item 2: in ascending order, using the Minimum Successive Ordering Method.
(I used bubbleSort)

item 3: Include a binary search routine for
search the ordered elements of Vector B. */

const arrayA = [3,5,11,2,33,7,40,12,22,24,39,5,11,2,33,7,40,12,22,24]
let arrayB = [];


const criararray = (array) =>{
    let newArray = [];

    for(i=0;i<array.length;i++){
        newArray[i]=array[i]+2;
    }
    return newArray;
}


arrayB = criararray(arrayA);
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

arrayB=bubbleSort(arrayA);
console.log(arrayB);

/////////////////////////////////////////////////////////////////////////////


const binSeach = (vetor, left, right, valor) =>{
    if(right >= left){
        const indice = parseInt(left + (right-left)/2)
        if(vetor[indice]===valor){
            return valor;
        }
        if(vetor[indice]>valor){
            return binSeach(vetor,left,indice-1,valor)
        }
        return binSeach(vetor, indice+1, right, valor)
    }  
    return -1; 
}


console.log(binSeach(arrayB,0,arrayB.length-1,4));
