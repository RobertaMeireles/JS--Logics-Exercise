/*Read 15 elements of a vector A. Build a vector B of the same type,
observing the following formation law: Every element of B must be the
square of the corresponding A element. Display vectors A and B. */

console.log("metodo antigo****************************");
const arrayA = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
const arrayB = [];
let auxiliar;

for(i=0; i<arrayA.length; i++){
    auxiliar=arrayA[i]*arrayA[i];
    arrayB.push(auxiliar);

}

console.log(arrayB);

/////////////////////////////////////////////////////////////////////////////
console.log("metodo MAP****************************");

const arrayA2 = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];

let arrayB2 = arrayA2.map(function (valor){
    return valor*valor;
})


console.log(arrayB2);




