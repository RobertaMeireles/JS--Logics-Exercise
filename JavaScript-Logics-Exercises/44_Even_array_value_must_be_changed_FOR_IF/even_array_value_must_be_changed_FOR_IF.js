/*Read 15 real elements for a vector A. Build a vector B of the same type and dimension,
observing the following formation law: “Any element of vector A that has an even index
must be divided by 2; otherwise, the element of vector A must be multiplied by 1.5 ”.
Present vector B */

const arrayA = [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
const arrayB = [];
let auxiliar;

for(i=0; i<arrayA.length; i++){
    
    if( (i%2)==0 ){
        auxiliar=(arrayA[i]/2);
        arrayB.push(auxiliar);

    }else{
        auxiliar=(arrayA[i]*1.5);
        arrayB.push(auxiliar);

    }
}

console.log(arrayB);