/*Read two vectors A and B with 20 elements. Build a vector C,
where each element of C must be the subtraction of the corresponding element
from A to B. Present the vector C. */

const arrayA = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
const arrayB = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
const arrayC = [];
let valor;


for(i=0; i<20; i++){
    valor = arrayA[i]-arrayB[i];
    arrayC.push(valor);
}

console.log(arrayC);



