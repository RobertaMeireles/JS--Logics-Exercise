/*Read two vectors A and B with 15 elements each. Build a vector C,
this being the junction of the two other vectors. Thus, C must have the
double elentos, that is, 30. Present
the vector C. */

console.log("metodo concat****************************");
const arrayA = [8,2,2,2,2,2,2,2,2,2,2,2,2,2,3];
const arrayB = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,4];
const arrayC = [];
const arrayD = [];
let auxiliar;

/*
console.log("metodo concat****************************");
const todos = arrayA.concat(arrayB);

console.log(todos);*/


console.log("metodo antigo****************************");

for(i=0;i<arrayA.length; i++){
    auxiliar=arrayA[i];
    arrayC.push(auxiliar)
    auxiliar=arrayB[i];
    arrayC.push(auxiliar)
}

console.log(arrayC);