/*Read 20 elements (real values) for temperatures in degrees Celsius in an A vector.
The algorithm should have the lowest, highest and average temperatures read. */

const arrayA=[0.9, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0];
let maior=0;
let menor=0;

const verificar = (arrayParametro) => {
    for(i=0; i<=arrayParametro.length;i++){
        if(i==0){
            maior=arrayParametro[i];
            menor=arrayParametro[i];
        }else if(arrayParametro[i]>maior){
            maior=arrayParametro[i];
        }else if(arrayParametro[i]<menor){
            menor=arrayParametro[i];
        }
    }
    return console.log(`O manior valor é ${maior} e o menor valor é ${menor}!`)   
}

verificar(arrayA);

