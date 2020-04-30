/*Read two vectors, being A with 20 elements and B with 30 elements.
Construct a vector C, which is the junction of the two other vectors.
Thus, C must be able to store 50 elements.
Display the vector C.  */


const arrayA = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
const arrayB = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];


console.log("metodo concat****************************");

/*
const todos = arrayA.concat(arrayB);

console.log(todos);*/


console.log("metodo antigo****************************");

const arrayC = [];
let auxiliar;
//let totalArrayA = arrayA.length;
//let totalArrayB = arrayB.length;
//let totalDosArrays;

for (x=0; x<arrayA.length;x++){
    arrayC.push(arrayA[x]);
}

for (x=0; x<arrayB.length;x++){
    arrayC.push(arrayB[x]);
}

console.log(arrayC);












/*
console.log(totalArrayA)
console.log(totalArrayB)

if(totalArrayA>totalArrayB){
    totalDosArrays = totalArrayA;
}else{
    totalDosArrays = totalArrayB;
}

console.log(totalDosArrays)


for(i=0;i<totalDosArrays; i++){
    auxiliar=arrayA[i];
    arrayC.push(auxiliar)
    auxiliar=arrayB[i];
    arrayC.push(auxiliar)

    if(arrayC[i]!=="undefined"){
       
    }
}


console.log(arrayC);*/
