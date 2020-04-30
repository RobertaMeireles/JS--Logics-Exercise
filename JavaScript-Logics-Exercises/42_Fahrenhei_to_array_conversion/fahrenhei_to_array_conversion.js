/*
Read 25 elements (real values) for temperatures in degrees Celsius in an A vector.
Construct a vector B of the same type and dimension, and each element of vector B must be
converting the temperature in degrees Fahrenheit of the corresponding vector element
A. Display vectors A and B.

C <- (F-32) * (5/9) where F is the Fahrenheit temperature and C is the Celsius temperature.
*/


const arrayA=[0.9, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 0.9, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0,1.6, 1.7, 1.8, 1.9, 2.0];
const arrayB=[]; 
let auxiliar;


for(i=0; i<arrayA.length; i++){
    auxiliar=(arrayA[i]-32)*(5/9);
    arrayB.push(auxiliar);
}

console.log(arrayB);

