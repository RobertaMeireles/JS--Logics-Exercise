/*Read a vector A with 10 elements. Build a B vector of the same type,
and each element of B must be half of each element of A.
Present the elements of vectors A and B. */


const arrayA = [10,20,30,40,50,60,70,80,90,100];
let auxuliar;
const arrayB = [];


for(let i = 0; i<arrayA.length; i++){
    auxuliar=(arrayA[i]/2);
    arrayB.push(auxuliar);
}

console.log(arrayA);
console.log(arrayB);