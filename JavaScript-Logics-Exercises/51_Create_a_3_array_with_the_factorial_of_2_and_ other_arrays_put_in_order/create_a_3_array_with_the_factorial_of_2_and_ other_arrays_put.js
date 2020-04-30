/*Read the 15 elements of a Vector A. Build a Vector B from
same type as Vector A. Each element of Vector B must be the
factorial of the corresponding element of Vector A. Present the
Vector B elements sorted in ascending order using the
Selection and Exchange.
*/

const arrayA = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let arrayB = [];


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
       
        
        // 3 ate 1
        //newArray[i] = 1
        //i = 3
        //fatorial = fatorial*j
        //fatorial = 1*3=3
        //fatorial = 3*2=6
        //fatorial = 6*1=6
    
        //3! = 3 . 2 . 1 = 6
    }
    
   return resposta;
}

arrayB = (fatorialArray(arrayA));
console.log(arrayB); 



console.log(arrayB);


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

console.log(bubbleSort(arrayB));

