/*
Read five whole numbers and identify the biggest and the biggest
lower of the values. Do not perform the ordering of values.*/

let numbers = [10, 25, 80, 10, 33];
let auxiliarMaior = 0;
let auxiliarMenor = 0;

const verificar =(numbersrecebido) =>{

    for(i=0; i<numbersrecebido.length; i++){
        
        if(i==0){
            auxiliarMaior = numbersrecebido[i];
            auxiliarMenor = numbersrecebido[i];

        }if(numbersrecebido[i]>auxiliarMaior){
            auxiliarMaior = numbersrecebido[i];

        }if(numbersrecebido[i]<auxiliarMenor){
            auxiliarMenor = numbersrecebido[i];
        }
    }
    return console.log(`o valor menor do array é ${auxiliarMenor} e o valor menor do array é ${auxiliarMaior}`);
}

verificar(numbers);

