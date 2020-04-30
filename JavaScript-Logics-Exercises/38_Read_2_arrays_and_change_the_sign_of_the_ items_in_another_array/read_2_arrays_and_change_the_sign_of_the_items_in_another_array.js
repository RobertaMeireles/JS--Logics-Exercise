/*Read a vector A with 10 positive elements. Construct a vector B of the same
type and dimension, and each element of vector B must be the negative value of the element
corresponding to vector A. Thus, if element number 8 is stored in A [1],
in B [1] it should be -8, and so on.
Present the elements of vector B. */

const arrayA = [1,2,3,4,5,6,7,8,9,10];
let auxuliar;
const arrayB = [];

for(let x=0; x<arrayA.length; x++){
    auxuliar=arrayA[x]*-1;
    arrayB.push(auxuliar);
}


console.log(arrayA);
console.log(arrayB);
