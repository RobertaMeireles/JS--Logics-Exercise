/*Display all numbers divisible by 4 that are less than 200.
 To check if the number is divisible by 4, carry out within the mesh the
 logical verification of this condition with the instruction 'if' asking if the number
 it is divisible; if so, show it; otherwise, go to the next step. The variable
 that will control the counter must start with a value of 1. */


for (i=1; i<=200; i++){
    if( (i % 4)==0 ){
        console.log(i); // caso queira apenas mostrar os valores
    } 
}
