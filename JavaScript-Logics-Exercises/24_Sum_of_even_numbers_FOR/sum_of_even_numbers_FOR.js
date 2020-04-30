/*Calculation of the sum of the existing even values ​​in the range from 1 to 500.*/

soma=0;

for(i=0; i<=500; i++){
    //console.log(i);
    if( (i % 2)==0 ){
        soma = soma+i;
    }
}

console.log(soma);