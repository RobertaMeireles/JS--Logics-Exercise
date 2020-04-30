/*Read 12 integer elements for a vector A. Build a vector B of the same
type and dimension, observing the following training law: “Every element of the
vector A that is odd should be multiplied by 2; otherwise, the element
of vector A must remain unchanged ”. Display the vector B.  */

const arrayA = [1,2,3,4,5,6,7,8,9,10,11,12];
const arrayB = [];
let auxiliar;

for(i=0; i<arrayA.length; i++){
    
    if( (arrayA[i]%3)==0 ){
        auxiliar=arrayA[i]*2
        arrayB.push(auxiliar);
    }else
    arrayB.push(arrayA[i]);
    /*
    else:
    auxiliar=arrayA[i]; 
    arrayB.push(auxiliar);
    */
}

console.log(arrayB);