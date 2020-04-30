/*Read the 20 elements of a vector A and build a vector B from it
dimension with the same elements of vector A, which must be
inverted. That is, the first element of A becomes the last of B, the
A's second element becomes B's penultimate and so on.
Display vectors A and B. */

const arrayA = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
let arrayB = [];
let auxiliar = arrayA.length;



console.log("código com o menos -1 no x, onde aparece undefined");
for(x=auxiliar-1; x>=0; x--){
    arrayB.push(arrayA[x]);
}

console.log(arrayB);

