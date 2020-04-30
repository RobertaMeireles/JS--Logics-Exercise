/*Present the total sum obtained from the first hundred integers (1 + 2 + 3 + 4 + 5 + ...... 98 + 99 + 100).*/

let soma=0;

for(i=1; i<=100; i++){
    soma=soma+i
    /*
    WHERE:
    soma  =soma + i
   1 soma = 0   + 1 = 1
   2 soma = 1   + 2 = 3
    ...
    */
}

console.log(soma);