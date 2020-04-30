/*Develop an algorithm that calculates a multiplication table
number and store the results in a vector A for 10 elements.
Display the values ​​stored in the vector.  */


const arrayA=[];
let auxiliar;
const number = 2;


for(i=0; i<=10 ; i++){
    auxuliar=number*i;
    arrayA.push(auxuliar);
}

console.log(arrayA);

