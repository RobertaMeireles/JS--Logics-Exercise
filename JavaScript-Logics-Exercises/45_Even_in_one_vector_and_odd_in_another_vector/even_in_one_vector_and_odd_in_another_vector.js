/*Read 6 elements (integer values) for vectors A and B. Build vectors C and D
of the same type and dimension.
The vector C must be formed by the odd index elements of vectors A and B,
and vector D must be formed by the even index elements of vectors A and B. Present vectors C and D. */

const arrayA = [1,2,3,4,5,6];
const arrayB = [7,8,9,10,11,12];
const arrayC = [];
const arrayD = [];
let auxiliar;

const arrayAB = [];


for(i=0; i<arrayA.length; i++){
    
    if( (i%2)==0 ){
        arrayD.push(arrayA[i]);
        arrayD.push(arrayB[i]);
    }else{
        arrayC.push(arrayA[i]);
        arrayC.push(arrayB[i]);
    }
}
console.log("ArrayC:");
console.log(arrayC);
console.log("ArrayD:");
console.log(arrayD);