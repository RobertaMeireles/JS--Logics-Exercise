/*Read 15 integer numeric values ​​and at the end
present the sum of the factorial of each value read.*/


//fazer o arrayA
arrayA= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log("arrayA:")
console.log(arrayA); 

//criar o arrayB onde seria o fatorial dos elementos do array A
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

arrayB = (fatorialArray(arrayA));//Chamar a funçao fatorialArray
console.log("arrayB ( Fatorial de cada valor do arrayA):")
console.log(arrayB); 



//somar os elementos do arrayB
function simpleArraySum(ar) {
    let aux = 0;
    for(let i=0; i<ar.length;i++){
        aux=ar[i]+aux;
    }
    return aux;
}

let arrayBSum = simpleArraySum(arrayB);//Chamar a funçao simpleArraySum passando o array arrayB para somar
console.log("Soma do arrayB:")
console.log(arrayBSum);


