/* Present the results of a multiplication table of any number, which must be
printed in the following format (considering the provision of number 2 as an example):*/

let tabuada = 2;
let resultado = 0;

for (i=0; i<=10; i++){
    resultado=tabuada*i;
    console.log(`${tabuada} x ${i} = ${resultado}`)
}